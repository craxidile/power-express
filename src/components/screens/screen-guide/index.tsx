import { Fragment, ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { useVmScreen } from '../../../stores/vm-screen';
import {
  Guide,
  GuidePhoto,
  findGuideByPath,
  guides,
} from '../../../config/guides';
import { listProjects } from '../../../apis/project';
import { Project } from '../../../models/project';
import { track } from '../../../utils/analytics';
import LayoutStandard from '../../layouts/layout-standard';
import impact from '../../../config/impact.json';
import SafeArea from '../../_commons/safe-area';
import Seo from '../../_commons/seo';

const AUTHOR = {
  th: { name: 'ภานุวัจน์ ทองร่มโพธิ์', title: 'ประธานเจ้าหน้าที่บริหาร' },
  en: { name: 'Panuwat Thongrompo', title: 'Chief Executive Officer' },
};

const KIND_LABEL = {
  guide: { th: 'คู่มือ', en: 'Guide' },
  info: { th: 'ข้อมูล', en: 'Information' },
  industry: { th: 'อุตสาหกรรม', en: 'Industry' },
  area: { th: 'พื้นที่ให้บริการ', en: 'Area' },
};

const T = {
  th: {
    short: 'สรุปสั้นๆ',
    toc: 'ในบทความนี้',
    faq: 'คำถามที่พบบ่อย',
    related: 'อ่านต่อ',
    projects: 'โครงการของเราในพื้นที่นี้',
    by: 'โดย',
    min: 'นาทีอ่าน',
    ctaTitle: 'อยากรู้ว่าโรงงานของคุณเหมาะหรือไม่',
    ctaBody:
      'ส่งบิลค่าไฟ รับรายงานประเมินขนาดระบบและตัวเลขที่เหมาะกับหน้างานฟรีภายใน 48 ชั่วโมง',
    home: 'หน้าแรก',
    guides: 'คู่มือ',
    disclaimer: 'ข้อสงวน',
    aboutAuthor: 'เกี่ยวกับผู้เขียน',
    authorBio: (n: number, kw: string) =>
      `ทีมของเราออกแบบ ติดตั้ง และดูแลระบบโซลาร์รูฟท็อปและคาร์พอร์ตสำหรับโรงงานและธุรกิจ ปัจจุบันมี ${n} โครงการ กำลังติดตั้งรวมประมาณ ${kw} kW เนื้อหาในบทความอ้างอิงจากงานจริงหน้างาน`,
    seeProjects: 'ดูโครงการทั้งหมด',
  },
  en: {
    short: 'In short',
    toc: 'In this article',
    faq: 'Frequently asked questions',
    related: 'Keep reading',
    projects: 'Our projects in this area',
    by: 'By',
    min: 'min read',
    ctaTitle: 'Not sure if your factory is a fit?',
    ctaBody:
      'Send your electricity bill and get a free system size and savings estimate for your site within 48 hours.',
    home: 'Home',
    guides: 'Guides',
    disclaimer: 'Disclaimer',
    aboutAuthor: 'About the author',
    authorBio: (n: number, kw: string) =>
      `Our team designs, installs and maintains rooftop and carport solar for factories and businesses. We now have ${n} projects with about ${kw} kW installed in total. What you read here comes from real site work.`,
    seeProjects: 'See all projects',
  },
};

// Turns "[text](path)" into router links; path has no locale prefix.
const renderInline = (text: string, locale: string): ReactNode => {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link
        key={m.index}
        to={`/${locale}/${m[2]}`}
        className="text-green-bullet underline underline-offset-2"
      >
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((x, i) => <Fragment key={i}>{x}</Fragment>);
};

const LINKEDIN = 'https://www.linkedin.com/in/panuwat-thongrompo-18760b15/';

const impactFacts = (projects: Project[], locale: 'th' | 'en') => {
  const kw = projects.reduce((n, p) => n + Number(p.capacity || 0), 0);
  const years = projects.map((p) => Number(p.completion)).filter(Boolean);
  const th = locale === 'th';
  const facts = [
    th ? `จำนวนโครงการที่ติดตั้งแล้ว: ${projects.length} โครงการ` : `Projects installed: ${projects.length}`,
    `${th ? 'กำลังติดตั้งรวม' : 'Total installed capacity'}: ${(kw / 1000).toFixed(2)} MW (${Math.round(kw).toLocaleString('en-US')} kW)`,
  ];
  if (years.length)
    facts.push(
      th
        ? `ปีที่เริ่มดำเนินงานโครงการ: ${Math.min(...years)} ถึง ${Math.max(...years)}`
        : `Projects completed: ${Math.min(...years)} to ${Math.max(...years)}`
    );
  if (impact.measuredKwh) {
    const t = (impact.measuredKwh * impact.co2FactorKgPerKwh) / 1000;
    facts.push(
      th
        ? `ไฟฟ้าที่ผลิตได้สะสม: ${Math.round(impact.measuredKwh).toLocaleString('en-US')} kWh (ข้อมูล ณ ${impact.asOf})`
        : `Cumulative generation: ${Math.round(impact.measuredKwh).toLocaleString('en-US')} kWh (as of ${impact.asOf})`,
      th
        ? `ก๊าซเรือนกระจกที่หลีกเลี่ยงได้โดยประมาณ: ${Math.round(t).toLocaleString('en-US')} tCO2e (ใช้ค่า ${impact.co2FactorKgPerKwh} kgCO2e/kWh ตาม ${impact.co2FactorSource})`
        : `Estimated greenhouse gas avoided: ${Math.round(t).toLocaleString('en-US')} tCO2e (using ${impact.co2FactorKgPerKwh} kgCO2e/kWh, ${impact.co2FactorSource})`
    );
  }
  return facts;
};

const hash = (s: string) =>
  Array.from(s).reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

const Check = () => (
  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-green-a10 text-green-bullet text-xs flex items-center justify-center">
    ✓
  </span>
);

const ScreenGuide = () => {
  const { locale = 'th' } = useVmScreen();
  const params = useParams();
  const guide = findGuideByPath(params['*']);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    listProjects()
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  const photos = useMemo(
    () =>
      projects
        .map((p) => p.banner || p.thumbnail)
        .filter((x): x is string => !!x),
    [projects]
  );
  const photoUrl = (ph?: GuidePhoto) => {
    const pr = ph && projects.find((x) => Number(x.id) === ph.project);
    if (!ph || !pr) return undefined;
    return ph.index === undefined || ph.index === 'banner'
      ? pr.banner || pr.thumbnail
      : pr.photos?.[ph.index];
  };
  const photoFor = (g: Guide, offset = 0) =>
    photoUrl(g.hero) ??
    (photos.length ? photos[(hash(g.slug) + offset) % photos.length] : undefined);
  const figureFor = (ph: GuidePhoto) => {
    const src = photoUrl(ph);
    const pr = projects.find((x) => Number(x.id) === ph.project);
    if (!src || !pr) return null;
    return (
      <figure className="flex flex-col gap-y-2">
        <img
          src={src}
          alt={ph.alt[locale]}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover rounded-xl"
        />
        <figcaption className="text-sm text-secondary">
          {ph.alt[locale]} ·{' '}
          <Link to={`/${locale}/project/${pr.id}`} className="underline">
            {pr.title[locale]}
          </Link>{' '}
          ({pr.capacity} kW)
        </figcaption>
      </figure>
    );
  };

  const related = useMemo(() => {
    if (!guide?.match) return [];
    const keywords = guide.match;
    return projects.filter((p) => {
      const loc = `${p.location?.th ?? ''} ${p.location?.en ?? ''}`;
      return keywords.some((k) => loc.includes(k));
    });
  }, [guide, projects]);

  if (!guide) return <Navigate to={`/${locale}`} replace />;
  const t = guide.text[locale];
  const l = T[locale];
  const isArticle = guide.kind === 'guide' && !!guide.published;
  const isHub = guide.slug === 'guides-hub';

  const chars =
    t.intro.length +
    t.sections.reduce(
      (n, s) => n + s.body.join('').length + (s.bullets ?? []).join('').length,
      0
    );
  const minutes = Math.max(2, Math.ceil(chars / (locale === 'th' ? 700 : 1000)));

  const jsonLd =
    t.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: t.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : undefined;

  const isDisclaimer = (h: string) => h === 'ข้อสงวน' || h === 'Disclaimer';
  const bodySections = t.sections.filter((s) => !isDisclaimer(s.heading));
  const disclaimer = t.sections.filter((s) => isDisclaimer(s.heading));
  const moreCards = guides
    .filter((g) => g.kind === 'guide' && g.published && g.slug !== guide.slug)
    .slice(0, 3);
  const heroImage = photoFor(guide);
  const ctaImage = photoFor(guide, 3);

  return (
    <LayoutStandard>
      <Seo
        locale={locale}
        title={t.title}
        description={t.description}
        path={guide.path}
        image={photoUrl(guide.hero)}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <header
        className="py-12 lg:py-20 bg-gray-footer text-white"
        style={
          heroImage
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(10,20,10,.78), rgba(10,20,10,.88)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        <SafeArea>
          <div className="mx-auto w-full max-w-[1100px] flex flex-col gap-y-5">
            <nav className="text-sm text-white-a70">
              <Link to={`/${locale}`} className="underline">
                {l.home}
              </Link>{' '}
              /{' '}
              <Link to={`/${locale}/guides`} className="underline">
                {l.guides}
              </Link>
            </nav>
            <span className="self-start px-3 py-1 rounded-full bg-cta-primary text-white text-xs font-medium">
              {KIND_LABEL[guide.kind][locale]}
            </span>
            <h1 className="text-3xl lg:text-5xl font-medium leading-tight">
              {t.title}
            </h1>
            {isArticle && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white-a70">
                <span>
                  {l.by} {AUTHOR[locale].name}, {AUTHOR[locale].title}
                </span>
                <span>· {guide.published}</span>
                <span>
                  · {minutes} {l.min}
                </span>
              </div>
            )}
          </div>
        </SafeArea>
      </header>

      <div className="py-10 lg:py-16">
        <SafeArea>
          <div className="mx-auto w-full max-w-[1100px] flex flex-col lg:flex-row gap-10 lg:gap-14">
            {bodySections.length > 2 && (
              <aside className="lg:w-64 lg:shrink-0">
                <div className="lg:sticky lg:top-6 p-5 rounded-2xl bg-pale border border-sep-smoke">
                  <p className="text-sm font-medium text-title-dark mb-3">
                    {l.toc}
                  </p>
                  <ol className="flex flex-col gap-y-2 text-sm text-gray-content">
                    {bodySections.map((s, i) => (
                      <li key={s.heading}>
                        <a href={`#s-${i}`} className="hover:text-green-bullet">
                          {s.heading}
                        </a>
                      </li>
                    ))}
                    {t.faq.length > 0 && (
                      <li>
                        <a href="#faq" className="hover:text-green-bullet">
                          {l.faq}
                        </a>
                      </li>
                    )}
                  </ol>
                </div>
              </aside>
            )}

            <article className="flex-1 min-w-0 flex flex-col gap-y-8">
              <div className="p-6 lg:p-8 rounded-2xl bg-green-a10 border-l-4 border-green-bullet">
                <p className="text-sm font-medium text-green-tag mb-2">
                  {l.short}
                </p>
                <p className="text-lg text-gray-content">{t.intro}</p>
              </div>

              {(guide.slug === 'impact' || guide.slug === 'press') &&
                projects.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {impactFacts(projects, locale).map((f) => (
                      <li
                        key={f}
                        className="p-5 rounded-2xl bg-white border border-sep-smoke text-lg font-medium text-title-dark"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

              {isHub && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {guides
                    .filter((g) => g.kind === 'guide' && g.published)
                    .map((g) => {
                      const img = photoFor(g);
                      return (
                        <li
                          key={g.slug}
                          className="rounded-2xl overflow-hidden border border-sep-smoke bg-white flex flex-col"
                        >
                          {img && (
                            <img
                              src={img}
                              alt=""
                              loading="lazy"
                              className="w-full h-40 object-cover"
                            />
                          )}
                          <div className="p-5 flex flex-col gap-y-2">
                            <Link
                              to={`/${locale}/${g.path}`}
                              className="text-lg font-medium text-title-dark hover:text-green-bullet"
                            >
                              {g.text[locale].title}
                            </Link>
                            <p className="text-sm text-gray-content">
                              {g.text[locale].description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              )}

              {bodySections.map((s, i) => (
                <section
                  key={s.heading}
                  id={`s-${i}`}
                  className="scroll-mt-6 p-6 lg:p-8 rounded-2xl bg-white border border-sep-smoke shadow-sm flex flex-col gap-y-4"
                >
                  <div className="flex items-start gap-x-4">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-green-tag text-white text-sm font-medium flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h2 className="text-xl lg:text-2xl font-medium text-title-dark leading-snug">
                      {s.heading}
                    </h2>
                  </div>
                  {s.photo && figureFor(s.photo)}
                  {s.body.map((p) => (
                    <p key={p} className="text-base text-gray-content">
                      {renderInline(p, locale)}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="flex flex-col gap-y-2 text-base text-gray-content">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-x-3">
                          <Check />
                          <span>{renderInline(b, locale)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {related.length > 0 && (
                <section className="flex flex-col gap-y-4">
                  <h2 className="text-2xl font-medium text-title-dark">
                    {l.projects}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {related.map((p) => (
                      <li
                        key={p.id}
                        className="rounded-2xl overflow-hidden border border-sep-smoke bg-white"
                      >
                        <img
                          src={p.thumbnail || p.banner}
                          alt={p.title[locale]}
                          loading="lazy"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <Link
                            to={`/${locale}/project/${p.id}`}
                            className="font-medium text-title-dark hover:text-green-bullet"
                          >
                            {p.title[locale]}
                          </Link>
                          <p className="text-sm text-secondary">
                            {p.capacity} kW
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {t.faq.length > 0 && (
                <section id="faq" className="scroll-mt-6 flex flex-col gap-y-3">
                  <h2 className="text-2xl font-medium text-title-dark">
                    {l.faq}
                  </h2>
                  {t.faq.map((f) => (
                    <details
                      key={f.q}
                      className="group p-5 rounded-2xl bg-pale border border-sep-smoke"
                    >
                      <summary className="cursor-pointer list-none flex justify-between gap-x-4 text-lg font-medium text-title-dark">
                        {f.q}
                        <span className="text-green-bullet group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-base text-gray-content">{f.a}</p>
                    </details>
                  ))}
                </section>
              )}

              <div
                className="p-8 lg:p-10 rounded-3xl text-white flex flex-col items-start gap-y-4 bg-gray-footer"
                style={
                  ctaImage
                    ? {
                        backgroundImage: `linear-gradient(90deg, rgba(10,20,10,.92), rgba(10,20,10,.7)), url(${ctaImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                }
              >
                <h2 className="text-2xl lg:text-3xl font-medium">
                  {l.ctaTitle}
                </h2>
                <p className="text-base text-white-a70 max-w-[560px]">
                  {l.ctaBody}
                </p>
                <Link
                  to={`/${locale}/free-assessment`}
                  onClick={() =>
                    track('click_assessment_cta', { place: `page_${guide.slug}` })
                  }
                  className="px-6 py-3 rounded-lg bg-cta-primary text-white text-base font-medium"
                >
                  {t.cta}
                </Link>
              </div>

              {isArticle && projects.length > 0 && (
                <aside className="p-6 rounded-2xl bg-pale border border-sep-smoke flex flex-col gap-y-2">
                  <p className="text-sm font-medium text-green-tag">
                    {l.aboutAuthor}
                  </p>
                  <p className="text-lg font-medium text-title-dark">
                    {AUTHOR[locale].name}, {AUTHOR[locale].title}
                  </p>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="self-start underline text-green-bullet text-sm"
                  >
                    LinkedIn
                  </a>
                  <p className="text-base text-gray-content">
                    {l.authorBio(
                      projects.length,
                      Math.round(
                        projects.reduce((n, p) => n + Number(p.capacity || 0), 0)
                      ).toLocaleString('en-US')
                    )}
                  </p>
                  <Link
                    to={`/${locale}/project`}
                    className="self-start underline text-green-bullet text-sm"
                  >
                    {l.seeProjects}
                  </Link>
                </aside>
              )}

              {disclaimer.length > 0 && (
                <p className="text-sm text-secondary">
                  <strong>{l.disclaimer}:</strong>{' '}
                  {disclaimer.flatMap((d) => d.body).join(' ')}
                </p>
              )}
            </article>
          </div>

          {moreCards.length > 0 && (
            <section className="mx-auto w-full max-w-[1100px] mt-16 flex flex-col gap-y-5">
              <h2 className="text-2xl font-medium text-title-dark">
                {l.related}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {moreCards.map((g, i) => {
                  const img = photoFor(g, i + 1);
                  return (
                    <li
                      key={g.slug}
                      className="rounded-2xl overflow-hidden border border-sep-smoke bg-white flex flex-col"
                    >
                      {img && (
                        <img
                          src={img}
                          alt=""
                          loading="lazy"
                          className="w-full h-36 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <Link
                          to={`/${locale}/${g.path}`}
                          className="font-medium text-title-dark hover:text-green-bullet"
                        >
                          {g.text[locale].title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </SafeArea>
      </div>
    </LayoutStandard>
  );
};

export default ScreenGuide;
