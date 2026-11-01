// Writes public/sitemap.xml. Static pages are always listed; project and
// activity pages are added from Supabase when the request succeeds.
const fs = require('fs');
const path = require('path');

const siteUrl = 'https://powerexpress1980.com';
const apiPrefix = 'https://yttnuerixoafmhpdghdm.supabase.co/functions/v1';
const apiKey = 'sb_publishable_zBpJVvLrBXI_-CoV28r75w_hSubLVMx';
const locales = ['th', 'en'];

const get = async (fn) => {
  try {
    const res = await fetch(`${apiPrefix}/${fn}`, { headers: { apiKey } });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } catch (error) {
    console.warn(`sitemap: could not load ${fn} (${error.message})`);
    return [];
  }
};

const urlEntry = (suffix) => {
  const links = locales
    .map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl}/${l}${suffix}"/>`
    )
    .join('\n');
  return locales
    .map(
      (l) =>
        `  <url>\n    <loc>${siteUrl}/${l}${suffix}</loc>\n${links}\n  </url>`
    )
    .join('\n');
};

(async () => {
  const [projects, activities] = await Promise.all([
    get('list-all-projects'),
    get('list-all-activities'),
  ]);
  const suffixes = [
    '',
    '/about',
    '/project',
    '/activity',
    '/free-assessment',
    '/guide/solar-ppa',
    '/guide/factory-rooftop-solar',
    ...projects.map((p) => `/project/${p.id}`),
    ...activities.map((a) => `/activity/${a.id}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${suffixes.map(urlEntry).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
  console.log(`sitemap: wrote ${suffixes.length * locales.length} urls`);
})();
