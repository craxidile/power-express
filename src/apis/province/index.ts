import { apiKey, apiPrefix } from '../../config/constants';
import { detectProvinceIds, LocationRow } from '../../utils/province-utils';

// Which provinces have a project. Read from the same Location text the team edits in Supabase
// (or the CMS), so a new province appears on every map as soon as its first project is saved.
// Only the two location columns are fetched (about 3 KB) instead of list-all-projects (about 80 KB).
const REST_PREFIX = apiPrefix.replace('/functions/v1', '/rest/v1');

// Drawn until the live list arrives, and kept if it cannot be fetched (offline, Supabase down).
// This is only a safety net: the live list always replaces it.
export const FALLBACK_PROVINCE_IDS = [
  'bangkok',
  'nakhon-pathom',
  'nakhon-ratchasima',
  'ranong',
  'ratchaburi',
  'rayong',
  'samut-prakan',
  'samut-sakhon',
];

const TIMEOUT_MS = 4000;
let pending: Promise<string[] | null> | null = null;

// One request per page view, shared by every map on the page.
// Resolves to null on any failure or when no province could be recognised.
export const fetchProvinceIds = (): Promise<string[] | null> => {
  if (pending) return pending;
  pending = (async () => {
    const ctrl =
      typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = setTimeout(() => ctrl?.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(
        `${REST_PREFIX}/project?select=location_th,location_en`,
        {
          headers: { apikey: apiKey },
          signal: ctrl?.signal,
        }
      );
      if (!res.ok) return null;
      const rows = (await res.json()) as LocationRow[];
      if (!Array.isArray(rows)) return null;
      const ids = detectProvinceIds(rows);
      return ids.length ? ids : null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  })();
  return pending;
};
