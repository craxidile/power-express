declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a GA4 event when the tag is present; never throws. */
export const track = (
  name: string,
  params: Record<string, string | number | boolean> = {}
): void => {
  try {
    window.gtag?.('event', name, params);
  } catch {
    // Analytics must never break the page.
  }
};
