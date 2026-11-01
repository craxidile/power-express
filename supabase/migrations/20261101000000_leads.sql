-- Lead capture for the free roof & bill assessment form.
-- Additive only: creates one table and one private storage bucket.
-- Rows are written by the `submit-lead` Edge Function with the service role.
-- No policy is created for anon/authenticated, so nobody can read or write
-- leads through the public API; staff read them in the Supabase dashboard.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null default 'th' check (locale in ('th', 'en')),

  -- contact
  name text not null check (char_length(name) between 1 and 200),
  company text not null check (char_length(company) between 1 and 200),
  phone text check (phone is null or char_length(phone) <= 40),
  line_id text check (line_id is null or char_length(line_id) <= 80),
  email text check (email is null or char_length(email) <= 200),

  -- qualification
  monthly_bill_band text check (
    monthly_bill_band is null
    or monthly_bill_band in ('lt_150k', '150k_500k', '500k_1m', 'gt_1m', 'unknown')
  ),
  province text check (province is null or char_length(province) <= 100),
  building_ownership text check (
    building_ownership is null
    or building_ownership in ('owned', 'lease_15_plus', 'lease_short', 'unknown')
  ),
  operating_pattern text check (
    operating_pattern is null
    or operating_pattern in ('daytime', '24h', 'night', 'unknown')
  ),
  notes text check (notes is null or char_length(notes) <= 2000),
  bill_file_path text,

  -- PDPA
  consent_pdpa boolean not null check (consent_pdpa = true),
  consent_at timestamptz not null default now(),

  -- attribution
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  fbclid text,
  li_fat_id text,
  landing_url text,
  referrer text,

  -- sales follow-up (edited by staff)
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost')),

  -- at least one way to reach the person
  constraint leads_has_contact check (
    coalesce(phone, '') <> '' or coalesce(line_id, '') <> '' or coalesce(email, '') <> ''
  )
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;
-- Intentionally no policies: only the service role (Edge Function / dashboard) can access.

-- Private bucket for uploaded electricity bills (PDF / images, max 10 MB).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'lead-bills',
  'lead-bills',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png']
)
on conflict (id) do nothing;
