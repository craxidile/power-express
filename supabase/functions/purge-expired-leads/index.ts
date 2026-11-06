// Enforces the retention period promised in the privacy policy: leads older than
// RETENTION_MONTHS (default 24) are deleted together with their electricity-bill file.
// Leads with status 'won' are kept: they become customers and are held for the contract term.
// Deploy:  npx supabase functions deploy purge-expired-leads --no-verify-jwt
// Secret:  npx supabase secrets set PURGE_SECRET=<long random string>
// Schedule (see migration 20261106000000_purge_leads_schedule.sql) calls it daily with that secret.
// Dry run: add ?dry=1 to see what would be deleted without deleting anything.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const BATCH = 200;

Deno.serve(async (req) => {
  const secret = Deno.env.get("PURGE_SECRET");
  if (!secret || req.headers.get("x-purge-secret") !== secret) {
    return new Response("forbidden", { status: 403 });
  }
  const dry = new URL(req.url).searchParams.get("dry") === "1";
  const months = Number(Deno.env.get("RETENTION_MONTHS") ?? "24");
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - months);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let deleted = 0;
  let files = 0;
  for (;;) {
    const { data, error } = await supabase
      .from("leads")
      .select("id, bill_file_path")
      .lt("created_at", cutoff.toISOString())
      .neq("status", "won")
      .limit(BATCH);
    if (error) return new Response(error.message, { status: 500 });
    if (!data || data.length === 0) break;

    if (dry) {
      deleted += data.length;
      files += data.filter((r) => r.bill_file_path).length;
      break; // a dry run only reports the first batch size
    }

    const paths = data.map((r) => r.bill_file_path).filter(Boolean) as string[];
    if (paths.length) {
      const { error: rmError } = await supabase.storage.from("lead-bills").remove(paths);
      if (rmError) return new Response(rmError.message, { status: 500 });
      files += paths.length;
    }
    const { error: delError } = await supabase
      .from("leads")
      .delete()
      .in("id", data.map((r) => r.id));
    if (delError) return new Response(delError.message, { status: 500 });
    deleted += data.length;
    if (data.length < BATCH) break;
  }

  return Response.json({ dry, cutoff: cutoff.toISOString(), leads: deleted, billFiles: files });
});
