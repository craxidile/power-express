-- Lead qualification score and routing tier, set by the submit-lead Edge Function.
alter table public.leads add column if not exists score integer;
alter table public.leads add column if not exists tier text check (tier is null or tier in ('A', 'B', 'C'));
create index if not exists leads_tier_idx on public.leads (tier);
