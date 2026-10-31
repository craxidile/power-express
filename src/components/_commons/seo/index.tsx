import { useEffect } from 'react';

import { siteUrl, siteName, defaultOgImage } from '../../../config/constants';

export interface SeoProps {
  locale: 'th' | 'en';
  title: string;
  description?: string;
  /** Path without locale prefix, e.g. "project/23". Empty for the home page. */
  path?: string;
  image?: string;
  jsonLd?: object;
}

const upsertMeta = (
  attr: 'name' | 'property',
  key: string,
  content: string
) => {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const Seo = (props: SeoProps) => {
  const { locale, title, description, path = '', image, jsonLd } = props;

  useEffect(() => {
    if (!title) return;
    const fullTitle = `${title} | ${siteName}`;
    const suffix = path ? `/${path}` : '';
    const url = `${siteUrl}/${locale}${suffix}`;
    const ogImage = image || defaultOgImage;

    document.title = fullTitle;
    document.documentElement.lang = locale;

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
    }
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:locale', locale === 'th' ? 'th_TH' : 'en_US');
    upsertMeta('name', 'twitter:card', 'summary_large_image');

    upsertLink('canonical', url);
    upsertLink('alternate', `${siteUrl}/th${suffix}`, 'th');
    upsertLink('alternate', `${siteUrl}/en${suffix}`, 'en');
    upsertLink('alternate', `${siteUrl}/th${suffix}`, 'x-default');

    const id = 'seo-json-ld';
    document.getElementById(id)?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [locale, title, description, path, image, jsonLd]);

  return null;
};

export default Seo;
