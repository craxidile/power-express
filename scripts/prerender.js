// Post-build step: turns the single-page app shell into real HTML per route so
// search engines and AI crawlers that do not run JavaScript still get the title,
// description, structured data and readable content of every page.
//
// For each route it writes build/<locale>/<path>/index.html (a copy of the built
// index.html with page-specific <head> tags and content inside #root). React replaces
// the content as soon as the app loads. Also writes build/llms.txt and llms-full.txt.
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const siteUrl = 'https://powerexpress1980.com';
const siteName = 'Power Express';
const legalName = {
  th: 'บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด',
  en: 'Powerexpress1980 Company Limited',
};
const apiPrefix = 'https://yttnuerixoafmhpdghdm.supabase.co/functions/v1';
const apiKey = 'sb_publishable_zBpJVvLrBXI_-CoV28r75w_hSubLVMx';
const locales = ['th', 'en'];
const ogImageDefault = `${siteUrl}/logo512.png`;

const seoText = require('../src/config/seo-text.json');
const guides = require('../src/config/guides.json');

const ui = {
  th: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับเรา',
    projects: 'ผลงานและโครงการ',
    activities: 'ข่าวสารและกิจกรรม',
    assessment: 'ประเมินโซลาร์รูฟท็อปฟรี',
    guides: 'คู่มือ',
    capacity: 'กำลังผลิต',
    location: 'สถานที่',
    client: 'ลูกค้า',
    completion: 'ปีที่แล้วเสร็จ',
    contact: 'ติดต่อเรา',
    tel: 'โทร',
    email: 'อีเมล',
    address: 'ที่อยู่',
    faq: 'คำถามที่พบบ่อย',
    assessmentIntro:
      'ส่งบิลค่าไฟของโรงงานหรืออาคาร รับรายงานประเมินขนาดระบบและตัวเลขประหยัดที่เหมาะกับหน้างานฟรี ภายใน 48 ชั่วโมง ไม่มีค่าใช้จ่าย',
    assessmentTitle: 'ประเมินโซลาร์รูฟท็อปฟรี ส่งบิลค่าไฟ รับรายงานใน 48 ชั่วโมง',
    homeIntro:
      'Power Express ให้บริการโซลาร์รูฟท็อปแบบ PPA สำหรับโรงงานและธุรกิจในประเทศไทย ผู้ให้บริการลงทุนติดตั้งและดูแลระบบ ลูกค้าจ่ายเฉพาะค่าไฟที่ใช้จริงตามสัญญา โดยไม่ต้องลงทุนก้อนแรก',
    homeH1: 'โซลาร์รูฟท็อป PPA สำหรับโรงงานและธุรกิจ ลงทุน 0 บาท',
    services: [
      'โซลาร์รูฟท็อป PPA สำหรับโรงงานและอาคารพาณิชย์',
      'ออกแบบ ติดตั้ง และบำรุงรักษาระบบตลอดอายุสัญญา',
      'รายงานประเมินขนาดระบบและตัวเลขประหยัดฟรีภายใน 48 ชั่วโมง',
    ],
  },
  en: {
    home: 'Home',
    about: 'About us',
    projects: 'Projects',
    activities: 'News and activities',
    assessment: 'Free rooftop solar assessment',
    guides: 'Guides',
    capacity: 'Capacity',
    location: 'Location',
    client: 'Client',
    completion: 'Year completed',
    contact: 'Contact us',
    tel: 'Phone',
    email: 'Email',
    address: 'Address',
    faq: 'Frequently asked questions',
    assessmentIntro:
      'Send your factory or building electricity bill and get a free system size and savings estimate tailored to your site within 48 hours, at no cost.',
    assessmentTitle:
      'Free Rooftop Solar Assessment: Send Your Bill, Get a Report in 48 Hours',
    homeIntro:
      'Power Express provides rooftop solar PPA for factories and businesses in Thailand. We invest in, install and maintain the system, and you pay only for the electricity it produces under the contract, with no upfront capital.',
    homeH1: 'Rooftop Solar PPA for Factories and Businesses, Zero Investment',
    services: [
      'Rooftop solar PPA for factories and commercial buildings',
      'Design, installation and maintenance for the whole contract term',
      'Free system size and savings assessment within 48 hours',
    ],
  },
};

const esc = (v) =>
  String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const plain = (v) =>
  String(v ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const clip = (v, max = 160) => {
  const t = plain(v);
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

const get = async (fn) => {
  try {
    const res = await fetch(`${apiPrefix}/${fn}`, { headers: { apiKey } });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } catch (error) {
    console.warn(`prerender: could not load ${fn} (${error.message})`);
    return [];
  }
};

const loc = (obj, l) => (obj && (obj[l] || obj.th || obj.en)) || '';
const url = (l, p) => `${siteUrl}/${l}${p ? `/${p}` : ''}`;

const buildOrg = (contacts, l) => {
  const find = (type) => contacts.find((c) => c.type === type);
  const tel = find('tel');
  const email = find('email');
  const address = find('address');
  const facebook = find('facebook');
  const linkedin = find('linkedin');
  const sameAs = [facebook, linkedin]
    .map((c) => c && c.url)
    .filter((u) => u && !/^https:\/\/www\.(facebook|linkedin)\.com\/?$/.test(u));
  const telText = tel ? loc(tel.text, 'en') : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    legalName: legalName[l],
    alternateName: [legalName.th, legalName.en],
    url: siteUrl,
    logo: ogImageDefault,
    description: seoText.front[l].description,
    ...(telText && {
      telephone: `+66${telText.replace(/\D/g, '').replace(/^0/, '')}`,
    }),
    ...(email && { email: loc(email.text, 'en') }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc(address.text, l),
        addressRegion: l === 'th' ? 'กรุงเทพมหานคร' : 'Bangkok',
        postalCode: '10330',
        addressCountry: 'TH',
      },
    }),
    areaServed: { '@type': 'Country', name: 'Thailand' },
    knowsAbout: [
      'Rooftop solar',
      'Solar PPA',
      'Power purchase agreement',
      'Industrial solar',
      'Factory electricity cost reduction',
    ],
    ...(sameAs.length && { sameAs }),
  };
};

const buildWebsite = (l) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: ['th', 'en'],
  publisher: { '@id': `${siteUrl}/#organization` },
});

const buildService = (l) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#service-solar-ppa`,
  name: l === 'th' ? 'โซลาร์รูฟท็อป PPA สำหรับโรงงานและธุรกิจ' : 'Rooftop Solar PPA for Factories and Businesses',
  serviceType: 'Rooftop solar power purchase agreement',
  description: ui[l].homeIntro,
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: { '@type': 'Country', name: 'Thailand' },
  audience: { '@type': 'BusinessAudience', audienceType: 'Factories and commercial buildings' },
});

const crumbs = (l, items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

const nav = (l) => {
  const links = [
    [url(l, ''), ui[l].home],
    [url(l, 'project'), ui[l].projects],
    [url(l, 'solar-ppa'), guides.find((g) => g.slug === 'solar-ppa').text[l].title],
    [url(l, 'solar-rooftop-factory'), guides.find((g) => g.slug === 'factory-rooftop-solar').text[l].title],
    [url(l, 'faq'), guides.find((g) => g.slug === 'faq').text[l].title],
    [url(l, 'activity'), ui[l].activities],
    [url(l, 'about'), ui[l].about],
    [url(l, 'free-assessment'), ui[l].assessment],
    [url(l === 'th' ? 'en' : 'th', ''), l === 'th' ? 'English' : 'ภาษาไทย'],
  ];
  return `<nav><ul>${links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul></nav>`;
};

const contactBlock = (contacts, l) => {
  const find = (type) => contacts.find((c) => c.type === type);
  const rows = [];
  const a = find('address');
  const t = find('tel');
  const e = find('email');
  if (a) rows.push(`<li>${ui[l].address}: ${esc(loc(a.text, l))}</li>`);
  if (t) rows.push(`<li>${ui[l].tel}: ${esc(loc(t.text, l))}</li>`);
  if (e) rows.push(`<li>${ui[l].email}: ${esc(loc(e.text, l))}</li>`);
  return `<section><h2>${ui[l].contact}</h2><p>${esc(legalName[l])}</p><ul>${rows.join('')}</ul></section>`;
};

const projectFacts = (p, l) =>
  `<ul><li>${ui[l].capacity}: ${esc(p.capacity)} kW</li><li>${ui[l].location}: ${esc(loc(p.location, l))}</li><li>${ui[l].client}: ${esc(loc(p.client, l))}</li><li>${ui[l].completion}: ${esc(p.completion)}</li></ul>`;

const projectList = (projects, l) =>
  `<ul>${projects
    .map(
      (p) =>
        `<li><a href="${url(l, `project/${p.id}`)}">${esc(plain(loc(p.title, l)))}</a> (${esc(p.capacity)} kW, ${esc(p.completion)})</li>`
    )
    .join('')}</ul>`;

const relatedProjects = (g, projects, l) => {
  if (!g.match) return [];
  return projects.filter((p) => {
    const loc = `${(p.location && p.location.th) || ''} ${(p.location && p.location.en) || ''}`;
    return g.match.some((k) => loc.includes(k));
  });
};

const guideBody = (g, l, projects) => {
  const t = g.text[l];
  const related = relatedProjects(g, projects, l);
  const more = guides.filter((x) => x.slug !== g.slug && x.kind !== 'area').slice(0, 6);
  return (
    `<h1>${esc(t.title)}</h1><p>${esc(t.intro)}</p>` +
    t.sections
      .map(
        (s) =>
          `<section><h2>${esc(s.heading)}</h2>${s.body.map((b) => `<p>${esc(b)}</p>`).join('')}${
            s.bullets ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''
          }</section>`
      )
      .join('') +
    (related.length
      ? `<section><h2>${l === 'th' ? 'โครงการของเราในพื้นที่นี้' : 'Our projects in this area'}</h2>${projectList(related, l)}</section>`
      : '') +
    (t.faq.length
      ? `<section><h2>${ui[l].faq}</h2>${t.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>`
      : '') +
    `<p><a href="${url(l, 'free-assessment')}">${esc(t.cta)}</a></p>` +
    `<section><h2>${l === 'th' ? 'อ่านเพิ่มเติม' : 'Related pages'}</h2><ul>${more
      .map((x) => `<li><a href="${url(l, x.path)}">${esc(x.text[l].title)}</a></li>`)
      .join('')}</ul></section>`
  );
};

const stripHead = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta[^>]+name="description"[^>]*>/gi, '')
    .replace(/<meta[^>]+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta[^>]+name="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/<link[^>]+rel="canonical"[^>]*>/gi, '')
    .replace(/<link[^>]+rel="alternate"[^>]*hreflang[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

const ldScript = (id, data) =>
  `<script type="application/ld+json" id="${id}">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const renderPage = (template, page, org, website, service, isHome) => {
  const { l, p, title, description, image, bodyHtml, extraLd, ogType, runtimeLd } = page;
  const fullTitle = title === null ? `${seoText.front[l].title} | ${siteName}` : `${title} | ${siteName}`;
  const canonical = url(l, p);
  const head = [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${esc(description)}"/>`,
    `<link rel="canonical" href="${canonical}"/>`,
    `<link rel="alternate" hreflang="th" href="${url('th', p)}"/>`,
    `<link rel="alternate" hreflang="en" href="${url('en', p)}"/>`,
    `<link rel="alternate" hreflang="x-default" href="${url('th', p)}"/>`,
    `<meta property="og:title" content="${esc(fullTitle)}"/>`,
    `<meta property="og:description" content="${esc(description)}"/>`,
    `<meta property="og:type" content="${ogType || 'website'}"/>`,
    `<meta property="og:site_name" content="${siteName}"/>`,
    `<meta property="og:url" content="${canonical}"/>`,
    `<meta property="og:image" content="${esc(image || ogImageDefault)}"/>`,
    `<meta property="og:locale" content="${l === 'th' ? 'th_TH' : 'en_US'}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    ldScript('ld-organization', org),
    ldScript('ld-website', website),
    ...(isHome ? [ldScript('ld-service', service)] : []),
    ...(extraLd || []).map((d, i) => ldScript(`ld-page-${i}`, d)),
    ...(runtimeLd ? [ldScript('seo-json-ld', runtimeLd)] : []),
  ].join('');

  let html = stripHead(template);
  html = html.replace(/<html lang="[^"]*"/i, `<html lang="${l}"`);
  html = html.replace('</head>', `${head}</head>`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><header>${nav(l)}</header><main>${bodyHtml}</main></div>`
  );
  return html;
};

const writePage = (rel, html) => {
  const dir = path.join(buildDir, rel);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
};

(async () => {
  const templatePath = path.join(buildDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('prerender: build/index.html not found, run the build first');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  const [projects, activities, contacts] = await Promise.all([
    get('list-all-projects'),
    get('list-all-activities'),
    get('list-all-contacts'),
  ]);
  if (!projects.length || !contacts.length) {
    console.error('prerender: API data missing, refusing to write incomplete pages');
    process.exit(1);
  }

  const pages = [];
  for (const l of locales) {
    const t = ui[l];
    const bc = (...extra) =>
      crumbs(l, [{ name: t.home, url: url(l, '') }, ...extra]);

    pages.push({
      l,
      p: '',
      title: null,
      description: seoText.front[l].description,
      bodyHtml:
        `<h1>${esc(t.homeH1)}</h1><p>${esc(t.homeIntro)}</p>` +
        `<ul>${t.services.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` +
        `<p><a href="${url(l, 'free-assessment')}">${esc(t.assessment)}</a></p>` +
        `<section><h2>${t.projects}</h2>${projectList(projects, l)}</section>` +
        ['guide', 'info', 'industry', 'area']
          .map((kind) => {
            const group = guides.filter((g) => g.kind === kind);
            const label = { guide: t.guides, info: l === 'th' ? 'ข้อมูล' : 'Information', industry: l === 'th' ? 'อุตสาหกรรม' : 'Industries', area: l === 'th' ? 'พื้นที่ให้บริการ' : 'Areas we serve' }[kind];
            return `<section><h2>${label}</h2><ul>${group
              .map((g) => `<li><a href="${url(l, g.path)}">${esc(g.text[l].title)}</a></li>`)
              .join('')}</ul></section>`;
          })
          .join('') +
        contactBlock(contacts, l),
    });

    pages.push({
      l,
      p: 'about',
      title: seoText.about[l].title,
      description: seoText.about[l].description,
      extraLd: [bc({ name: t.about, url: url(l, 'about') })],
      bodyHtml: `<h1>${esc(seoText.about[l].title)}</h1><p>${esc(seoText.about[l].description)}</p>${contactBlock(contacts, l)}`,
    });

    pages.push({
      l,
      p: 'project',
      title: seoText.projects[l].title,
      description: seoText.projects[l].description,
      extraLd: [
        bc({ name: t.projects, url: url(l, 'project') }),
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: projects.map((pr, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: url(l, `project/${pr.id}`),
            name: loc(pr.title, l),
          })),
        },
      ],
      bodyHtml: `<h1>${esc(seoText.projects[l].title)}</h1><p>${esc(seoText.projects[l].description)}</p>${projectList(projects, l)}`,
    });

    pages.push({
      l,
      p: 'activity',
      title: seoText.activities[l].title,
      description: seoText.activities[l].description,
      extraLd: [bc({ name: t.activities, url: url(l, 'activity') })],
      bodyHtml: `<h1>${esc(seoText.activities[l].title)}</h1><ul>${activities
        .map((a) => `<li><a href="${url(l, `activity/${a.id}`)}">${esc(loc(a.title, l))}</a></li>`)
        .join('')}</ul>`,
    });

    pages.push({
      l,
      p: 'free-assessment',
      title: t.assessmentTitle,
      description: t.assessmentIntro,
      extraLd: [bc({ name: t.assessment, url: url(l, 'free-assessment') })],
      bodyHtml: `<h1>${esc(t.assessmentTitle)}</h1><p>${esc(t.assessmentIntro)}</p><p>${esc(t.tel)}: 082-096-6595</p>`,
    });

    for (const g of guides) {
      const gt = g.text[l];
      const faq = gt.faq.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: gt.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }
        : null;
      const isArticle = g.kind === 'guide' || g.kind === 'industry';
      pages.push({
        l,
        p: g.path,
        title: gt.title,
        description: gt.description,
        ogType: isArticle ? 'article' : 'website',
        runtimeLd: faq,
        extraLd: [
          bc({ name: gt.title, url: url(l, g.path) }),
          isArticle
            ? {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: gt.title,
                description: gt.description,
                inLanguage: l,
                mainEntityOfPage: url(l, g.path),
                author: { '@id': `${siteUrl}/#organization` },
                publisher: { '@id': `${siteUrl}/#organization` },
                image: ogImageDefault,
              }
            : {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: gt.title,
                description: gt.description,
                inLanguage: l,
                url: url(l, g.path),
                isPartOf: { '@id': `${siteUrl}/#website` },
              },
        ],
        bodyHtml: guideBody(g, l, projects),
      });
    }

    for (const pr of projects) {
      const title = plain(loc(pr.title, l));
      const desc = clip(loc(pr.excerpt, l) || loc(pr.details, l));
      const photos = (pr.photos || []).slice(0, 6);
      pages.push({
        l,
        p: `project/${pr.id}`,
        title,
        description: desc,
        image: pr.banner || pr.thumbnail,
        ogType: 'article',
        extraLd: [
          bc(
            { name: t.projects, url: url(l, 'project') },
            { name: title, url: url(l, `project/${pr.id}`) }
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: desc,
            inLanguage: l,
            image: pr.banner || pr.thumbnail,
            datePublished: pr.publishedAt,
            mainEntityOfPage: url(l, `project/${pr.id}`),
            author: { '@id': `${siteUrl}/#organization` },
            publisher: { '@id': `${siteUrl}/#organization` },
          },
        ],
        bodyHtml:
          `<h1>${esc(title)}</h1>${projectFacts(pr, l)}<p>${esc(plain(loc(pr.details, l) || loc(pr.excerpt, l)))}</p>` +
          photos.map((src) => `<img src="${esc(src)}" alt="${esc(title)}" width="520" loading="lazy"/>`).join('') +
          `<p><a href="${url(l, 'free-assessment')}">${esc(t.assessment)}</a></p>`,
      });
    }

    for (const a of activities) {
      const title = plain(loc(a.title, l));
      const desc = clip(loc(a.excerpt, l) || loc(a.details, l));
      pages.push({
        l,
        p: `activity/${a.id}`,
        title,
        description: desc,
        image: a.banner || a.thumbnail,
        ogType: 'article',
        extraLd: [
          bc(
            { name: t.activities, url: url(l, 'activity') },
            { name: title, url: url(l, `activity/${a.id}`) }
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: desc,
            inLanguage: l,
            image: a.banner || a.thumbnail,
            datePublished: a.publishedAt,
            mainEntityOfPage: url(l, `activity/${a.id}`),
            author: { '@id': `${siteUrl}/#organization` },
            publisher: { '@id': `${siteUrl}/#organization` },
          },
        ],
        bodyHtml: `<h1>${esc(title)}</h1><p>${esc(plain(loc(a.details, l) || loc(a.excerpt, l)))}</p>`,
      });
    }
  }

  for (const page of pages) {
    const org = buildOrg(contacts, page.l);
    const html = renderPage(template, page, org, buildWebsite(page.l), buildService(page.l), page.p === '');
    writePage(path.join(page.l, page.p), html);
  }

  // llms.txt: a plain-language map of the site for AI assistants.
  const lines = [
    `# ${siteName} (${legalName.en})`,
    '',
    `> ${seoText.front.en.description}`,
    '',
    `${legalName.th} / ${legalName.en} provides rooftop solar PPA (power purchase agreement) for factories and businesses in Thailand. The provider invests in, installs and maintains the system; the customer pays only for electricity produced under the contract. Free assessment: send an electricity bill and receive a report within 48 hours. Contact: admin@powerexpress1980.com, 082-096-6595, 444 MBK Tower 11th Floor, Phaya Thai Road, Pathum Wan, Bangkok 10330. Pages are available in Thai (/th) and English (/en).`,
    '',
    '## Key pages',
    `- [Home](${url('en', '')}): overview of services`,
    `- [Free rooftop solar assessment](${url('en', 'free-assessment')}): submit a bill for a free assessment`,
    ...guides.map((g) => `- [${g.text.en.title}](${url('en', g.path)}): ${g.text.en.description}`),
    `- [Projects](${url('en', 'project')}): ${projects.length} operating rooftop and carport solar projects`,
    `- [About](${url('en', 'about')})`,
    `- [Thai version](${url('th', '')})`,
    '',
    '## Projects',
    ...projects.map(
      (p) =>
        `- [${plain(loc(p.title, 'en'))}](${url('en', `project/${p.id}`)}): ${p.capacity} kW, ${plain(loc(p.location, 'en'))}, completed ${p.completion}`
    ),
    '',
    '## Optional',
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    '',
  ];
  fs.writeFileSync(path.join(buildDir, 'llms.txt'), lines.join('\n'));

  const full = [
    `# ${siteName} (${legalName.en}) - full content`,
    '',
    ...guides.flatMap((g) => {
      const t = g.text.en;
      return [
        `## ${t.title}`,
        t.intro,
        '',
        ...t.sections.flatMap((s) => [`### ${s.heading}`, ...s.body, ...(s.bullets || []).map((b) => `- ${b}`), '']),
        '### FAQ',
        ...t.faq.flatMap((f) => [`**${f.q}**`, f.a, '']),
      ];
    }),
    '## Projects',
    ...projects.flatMap((p) => [
      `### ${plain(loc(p.title, 'en'))}`,
      `Capacity ${p.capacity} kW; location ${plain(loc(p.location, 'en'))}; client ${plain(loc(p.client, 'en'))}; completed ${p.completion}.`,
      plain(loc(p.details, 'en') || loc(p.excerpt, 'en')),
      '',
    ]),
  ];
  fs.writeFileSync(path.join(buildDir, 'llms-full.txt'), full.join('\n'));

  console.log(`prerender: wrote ${pages.length} pages, llms.txt, llms-full.txt`);
})();
