import axios, { AxiosAdapter, InternalAxiosRequestConfig } from 'axios';

// The prerender step embeds the first-load API responses in the HTML
// (window.__PE_API__). GET calls that match are answered from that snapshot (or
// from a fresher copy saved by an earlier visit) with no network wait, then
// refreshed in the background and saved for the next visit.
declare global {
  interface Window {
    __PE_API__?: Record<string, unknown>;
  }
}

const PREFIX = 'pe-api:';
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

const keyOf = (config: InternalAxiosRequestConfig): string | null => {
  const url = config.url || '';
  const i = url.indexOf('/functions/v1/');
  return i < 0 ? null : url.slice(i + '/functions/v1/'.length);
};

const readSaved = (key: string): unknown | undefined => {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return undefined;
    const { t, d } = JSON.parse(raw);
    return Date.now() - t < MAX_AGE_MS ? d : undefined;
  } catch {
    return undefined;
  }
};

const save = (key: string, data: unknown) => {
  try {
    localStorage.setItem(
      PREFIX + key,
      JSON.stringify({ t: Date.now(), d: data })
    );
  } catch {
    // storage full or blocked: the snapshot still works for this visit
  }
};

export const installApiSnapshot = () => {
  const snapshot = window.__PE_API__;
  if (!snapshot) return;
  const base = axios.defaults.adapter;
  const network: AxiosAdapter = (config) =>
    typeof base === 'function'
      ? base(config)
      : (axios.getAdapter(base as never) as AxiosAdapter)(config);

  axios.defaults.adapter = async (config) => {
    const key = (config.method || 'get') === 'get' ? keyOf(config) : null;
    if (!key || !(key in snapshot)) return network(config);
    const data = readSaved(key) ?? snapshot[key];
    const refresh = () =>
      network(config)
        .then((res) => save(key, res.data))
        .catch(() => undefined);
    // Refresh after the page has settled so it never competes with first paint.
    window.setTimeout(refresh, 4000);
    delete snapshot[key]; // later calls (route changes) go to the network
    return {
      data,
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
      request: {},
    };
  };
};
