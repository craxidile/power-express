// Receives the free-assessment form (multipart/form-data) and stores it in
// public.leads, with the optional electricity bill in the private `lead-bills` bucket.
// Deploy with: npx supabase functions deploy submit-lead --no-verify-jwt
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://powerexpress1980.com",
  "https://www.powerexpress1980.com",
  "http://localhost:3000",
];
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const FILE_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "image/jpeg": "jpg",
  "image/png": "png",
};
const BILL_BANDS = ["lt_150k", "150k_500k", "500k_1m", "gt_1m", "unknown"];
const OWNERSHIP = ["owned", "lease_15_plus", "lease_short", "unknown"];
const PATTERNS = ["daytime", "24h", "night", "unknown"];

const corsHeaders = (origin: string | null) => ({
  "Access-Control-Allow-Origin":
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  "Access-Control-Allow-Headers":
    "content-type, apikey, authorization, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
});

const json = (body: unknown, status: number, origin: string | null) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });

const text = (form: FormData, key: string, max: number): string | null => {
  const value = form.get(key);
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed === "" ? null : trimmed;
};

const oneOf = (value: string | null, allowed: string[]): string | null =>
  value && allowed.includes(value) ? value : null;

const esc = (v: unknown) =>
  String(v ?? "-").replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!
  );

// Best-effort alert email via Resend. Needs secrets RESEND_API_KEY and LEAD_NOTIFY_TO
// (optionally LEAD_NOTIFY_FROM). Never blocks or fails the submission.
const notify = async (lead: Record<string, unknown>) => {
  const key = Deno.env.get("RESEND_API_KEY");
  const to = Deno.env.get("LEAD_NOTIFY_TO");
  if (!key || !to) return;
  const from = Deno.env.get("LEAD_NOTIFY_FROM") ??
    "Power Express Leads <leads@send.powerexpress1980.com>";
  const rows = Object.entries(lead).filter(([, v]) => v !== null && v !== "")
    .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0"><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
    .join("");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((a) => a.trim()),
        subject: `New solar lead: ${lead.company} (${lead.name})`,
        html: `<p>New free-assessment lead. Bill file (if any) is in Supabase Storage bucket lead-bills.</p><table>${rows}</table>`,
        reply_to: lead.email ?? undefined,
      }),
    });
    if (!res.ok) console.error("notify failed", res.status, await res.text());
  } catch (e) {
    console.error("notify error", String(e));
  }
};

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405, origin);
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return json({ error: "invalid_form" }, 400, origin);
  }

  // Honeypot: real visitors never fill this hidden field.
  if (text(form, "website", 200)) {
    return json({ ok: true }, 200, origin);
  }

  const name = text(form, "name", 200);
  const company = text(form, "company", 200);
  const phone = text(form, "phone", 40);
  const lineId = text(form, "line_id", 80);
  const email = text(form, "email", 200);
  const consent = text(form, "consent_pdpa", 10) === "true";

  if (!name || !company) {
    return json({ error: "name_and_company_required" }, 400, origin);
  }
  if (!phone && !lineId && !email) {
    return json({ error: "contact_required" }, 400, origin);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "invalid_email" }, 400, origin);
  }
  if (!consent) {
    return json({ error: "consent_required" }, 400, origin);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  const id = crypto.randomUUID();
  let billPath: string | null = null;

  const file = form.get("bill");
  if (file instanceof File && file.size > 0) {
    const ext = FILE_TYPES[file.type];
    if (!ext) return json({ error: "invalid_file_type" }, 400, origin);
    if (file.size > MAX_FILE_BYTES) {
      return json({ error: "file_too_large" }, 400, origin);
    }
    const path = `${id}/bill.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("lead-bills")
      .upload(path, file, { contentType: file.type });
    if (uploadError) {
      console.error("bill upload failed", uploadError.message);
      return json({ error: "upload_failed" }, 500, origin);
    }
    billPath = path;
  }

  const locale = text(form, "locale", 2) === "en" ? "en" : "th";

  const lead = {
    id,
    locale,
    name,
    company,
    phone,
    line_id: lineId,
    email,
    monthly_bill_band: oneOf(text(form, "monthly_bill_band", 20), BILL_BANDS),
    province: text(form, "province", 100),
    building_ownership: oneOf(text(form, "building_ownership", 20), OWNERSHIP),
    operating_pattern: oneOf(text(form, "operating_pattern", 20), PATTERNS),
    notes: text(form, "notes", 2000),
    bill_file_path: billPath,
    consent_pdpa: true,
    utm_source: text(form, "utm_source", 200),
    utm_medium: text(form, "utm_medium", 200),
    utm_campaign: text(form, "utm_campaign", 200),
    utm_term: text(form, "utm_term", 200),
    utm_content: text(form, "utm_content", 200),
    gclid: text(form, "gclid", 300),
    fbclid: text(form, "fbclid", 300),
    li_fat_id: text(form, "li_fat_id", 300),
    landing_url: text(form, "landing_url", 500),
    referrer: text(form, "referrer", 500),
  };
  const { error } = await supabase.from("leads").insert(lead);

  if (error) {
    console.error("lead insert failed", error.message);
    return json({ error: "save_failed" }, 500, origin);
  }

  await notify(lead);
  return json({ ok: true, id }, 200, origin);
});
