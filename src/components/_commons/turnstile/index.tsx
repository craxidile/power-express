import { useEffect, useRef } from 'react';

const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;
const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const loadScript = () =>
  new Promise<void>((resolve) => {
    if (window.turnstile) return resolve();
    let el = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (!el) {
      el = document.createElement('script');
      el.src = SCRIPT_SRC;
      el.async = true;
      document.head.appendChild(el);
    }
    el.addEventListener('load', () => resolve());
  });

/**
 * Cloudflare Turnstile widget. Renders nothing unless REACT_APP_TURNSTILE_SITE_KEY
 * is set. Turnstile adds a hidden `cf-turnstile-response` field to the parent form.
 */
const Turnstile = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SITE_KEY || !ref.current) return;
    let widgetId: string | undefined;
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !ref.current || !window.turnstile) return;
      widgetId = window.turnstile.render(ref.current, { sitekey: SITE_KEY });
    });
    return () => {
      cancelled = true;
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={ref} />;
};

export default Turnstile;
