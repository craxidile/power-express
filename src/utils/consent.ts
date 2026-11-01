const STORAGE_KEY = 'pex_cookie_consent';

export type ConsentState = 'granted' | 'denied' | null;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    _linkedin_data_partner_ids?: string[];
    lintrk?: (...args: unknown[]) => void;
  }
}

// Ad platform IDs are set at build time (.env / Cloudflare build vars).
// A tag is only loaded when its ID is set AND the visitor accepted cookies.
const META_PIXEL_ID = process.env.REACT_APP_META_PIXEL_ID;
const LINKEDIN_PARTNER_ID = process.env.REACT_APP_LINKEDIN_PARTNER_ID;
const GOOGLE_ADS_ID = process.env.REACT_APP_GOOGLE_ADS_ID;

export const getConsent = (): ConsentState => {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
};

const addScript = (src: string) => {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
};

let adsLoaded = false;

const loadAdTags = () => {
  if (adsLoaded) return;
  adsLoaded = true;

  if (GOOGLE_ADS_ID && window.gtag) {
    window.gtag('config', GOOGLE_ADS_ID);
  }

  if (META_PIXEL_ID) {
    const w = window;
    if (!w.fbq) {
      const queue: unknown[][] = [];
      const fbq = (...args: unknown[]) => {
        queue.push(args);
      };
      (fbq as unknown as { queue: unknown[][] }).queue = queue;
      w.fbq = fbq;
      addScript('https://connect.facebook.net/en_US/fbevents.js');
    }
    w.fbq?.('init', META_PIXEL_ID);
    w.fbq?.('track', 'PageView');
  }

  if (LINKEDIN_PARTNER_ID) {
    window._linkedin_data_partner_ids = [LINKEDIN_PARTNER_ID];
    addScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }
};

/** Apply a stored/new decision to Google consent mode and the ad tags. */
export const applyConsent = (state: 'granted' | 'denied') => {
  try {
    window.gtag?.('consent', 'update', {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  } catch {
    // never break the page
  }
  if (state === 'granted') loadAdTags();
};

export const setConsent = (state: 'granted' | 'denied') => {
  try {
    window.localStorage.setItem(STORAGE_KEY, state);
  } catch {
    // storage blocked: decision just applies to this page view
  }
  applyConsent(state);
};

/** Conversion event for ad platforms, only fires with consent. */
export const trackAdLead = () => {
  if (getConsent() !== 'granted') return;
  window.fbq?.('track', 'Lead');
  window.lintrk?.('track', { conversion_id: process.env.REACT_APP_LINKEDIN_CONVERSION_ID });
  const label = process.env.REACT_APP_GOOGLE_ADS_LEAD_LABEL;
  if (GOOGLE_ADS_ID && label) {
    window.gtag?.('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` });
  }
};
