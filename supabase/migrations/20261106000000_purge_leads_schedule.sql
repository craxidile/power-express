-- Daily call to the purge-expired-leads Edge Function (privacy policy: leads kept at most 24 months).
-- Before applying: deploy the function, set PURGE_SECRET, and replace <PURGE_SECRET> below.
-- Test first with  ...purge-expired-leads?dry=1  and check the counts.
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule(
  'purge-expired-leads',
  '30 20 * * *', -- 20:30 UTC = 03:30 Bangkok
  $$
  select net.http_post(
    url := 'https://yttnuerixoafmhpdghdm.supabase.co/functions/v1/purge-expired-leads',
    headers := jsonb_build_object('x-purge-secret', '<PURGE_SECRET>')
  );
  $$
);
