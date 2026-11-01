const KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'li_fat_id',
] as const;

const STORAGE_KEY = 'pex_attribution';

export type Attribution = Partial<Record<(typeof KEYS)[number], string>> & {
  landing_url?: string;
  referrer?: string;
};

const read = (): Attribution => {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
};

/** Remember the first campaign parameters of a visit (session only). */
export const captureAttribution = (): void => {
  try {
    const stored = read();
    const params = new URLSearchParams(window.location.search);
    const next: Attribution = { ...stored };
    let found = false;
    KEYS.forEach((key) => {
      const value = params.get(key);
      if (value && !stored[key]) {
        next[key] = value;
        found = true;
      }
    });
    if (!stored.landing_url) {
      next.landing_url = window.location.href;
      next.referrer = document.referrer || undefined;
      found = true;
    }
    if (found) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
    // Storage can be blocked; attribution is best effort.
  }
};

export const getAttribution = (): Attribution => read();
