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

const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// suffix -> [{src, alt: {th, en}}] for guide pages that use real project photos.
const imagesBySuffix = {};

const urlEntry = (suffix) => {
  const links = locales
    .map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl}/${l}${suffix}"/>`
    )
    .join('\n');
  return locales
    .map((l) => {
      const imgs = (imagesBySuffix[suffix] || [])
        .map(
          (i) =>
            `    <image:image>\n      <image:loc>${esc(i.src)}</image:loc>\n      <image:title>${esc(i.alt[l])}</image:title>\n    </image:image>`
        )
        .join('\n');
      return `  <url>\n    <loc>${siteUrl}/${l}${suffix}</loc>\n${links}${imgs ? `\n${imgs}` : ''}\n  </url>`;
    })
    .join('\n');
};

(async () => {
  const [projects, activities] = await Promise.all([
    get('list-all-projects'),
    get('list-all-activities'),
  ]);
  const guidesData = require('../src/config/guides.json');
  const photoSrc = (ph) => {
    const pr = projects.find((x) => Number(x.id) === Number(ph.project));
    if (!pr) return null;
    return ph.index === undefined || ph.index === 'banner'
      ? pr.banner || pr.thumbnail
      : (pr.photos || [])[ph.index] || null;
  };
  for (const g of guidesData) {
    const phs = [g.hero, ...g.text.th.sections.map((x) => x.photo)].filter(Boolean);
    const list = phs.map((ph) => ({ src: photoSrc(ph), alt: ph.alt })).filter((x) => x.src);
    if (list.length) imagesBySuffix[`/${g.path}`] = list;
  }
  const suffixes = [
    '',
    '/about',
    '/project',
    '/activity',
    '/free-assessment',
    ...require('../src/config/guides.json').map((g) => `/${g.path}`),
    ...projects.map((p) => `/project/${p.id}`),
    ...activities.map((a) => `/activity/${a.id}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${suffixes.map(urlEntry).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
  console.log(`sitemap: wrote ${suffixes.length * locales.length} urls`);
})();
