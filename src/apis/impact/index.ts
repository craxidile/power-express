import fallback from '../../config/impact.json';
import { ImpactData, isImpactData } from '../../utils/impact-clock';

// Written every night by solar-dashboard (tools/build_impact.py) and served
// read-only with CORS for this site only. Totals only, no site names.
export const IMPACT_URL =
  'https://dashboard.powerexpress1980.com/public/impact.json';

export const fallbackImpact = fallback as unknown as ImpactData;

const TIMEOUT_MS = 4000;
let pending: Promise<ImpactData | null> | null = null;

// One request per page view, shared by the hero chip and the results section.
// Resolves to null on any failure; the page then keeps the bundled figures.
export const fetchImpact = (): Promise<ImpactData | null> => {
  if (pending) return pending;
  pending = (async () => {
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = setTimeout(() => ctrl?.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(IMPACT_URL, {
        mode: 'cors',
        credentials: 'omit',
        signal: ctrl?.signal,
      });
      if (!res.ok) return null;
      const json = await res.json();
      return isImpactData(json) ? json : null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  })();
  return pending;
};
