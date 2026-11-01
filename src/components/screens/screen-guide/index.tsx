import { Fragment, ReactNode, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { useVmScreen } from '../../../stores/vm-screen';
import { findGuideByPath, guides } from '../../../config/guides';
import { listProjects } from '../../../apis/project';
import { Project } from '../../../models/project';
import { track } from '../../../utils/analytics';
import LayoutStandard from '../../layouts/layout-standard';
import SafeArea from '../../_commons/safe-area';
import Seo from '../../_commons/seo';

// Turns "[text](path)" into router links; path has no locale prefix.
const renderInline = (text: string, locale: string): ReactNode => {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} to={`/${locale}/${m[2]}`} className="underline">
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((x, i) => <Fragment key={i}>{x}</Fragment>);
};

const ScreenGuide = () => {
  const { locale = 'th' } = useVmScreen();
  const params = useParams();
  const guide = findGuideByPath(params['*']);
  const [related, setRelated] = useState<Project[]>([]);

  useEffect(() => {
    if (!guide?.match) return;
    const keywords = guide.match;
    listProjects()
      .then((all) =>
        setRelated(
          all.filter((p) => {
            const loc = `${p.location?.th ?? ''} ${p.location?.en ?? ''}`;
            return keywords.some((k) => loc.includes(k));
          })
        )
      )
      .catch(() => setRelated([]));
  }, [guide]);

  if (!guide) return <Navigate to={`/${locale}`} replace />;
  const t = guide.text[locale];

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

  const more = guides
    .filter((g) => g.slug !== guide.slug && g.kind !== 'area')
    .slice(0, 6);

  return (
    <LayoutStandard>
      <Seo
        locale={locale}
        title={t.title}
        description={t.description}
        path={guide.path}
        jsonLd={jsonLd}
      />
      <div className="py-10 lg:py-20">
        <SafeArea>
          <article className="mx-auto w-full max-w-[760px] flex flex-col gap-y-8">
            <h1 className="text-3hxl lg:text-4hxl font-medium text-title-dark">
              {t.title}
            </h1>
            {guide.kind === 'guide' && guide.published && (
              <p className="text-sm text-secondary">
                {locale === 'th' ? 'โดย' : 'By'}{' '}
                {locale === 'th' ? 'ภานุวัจน์ ทองร่มโพธิ์' : 'Panuwat Thongrompo'},{' '}
                {locale === 'th' ? 'ประธานเจ้าหน้าที่บริหาร' : 'Chief Executive Officer'},
                Power Express · {guide.published}
              </p>
            )}
            <p className="text-lg text-gray-excerpt">{t.intro}</p>
            {t.sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-y-3">
                <h2 className="text-2xl font-medium text-title-dark">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="text-base text-gray-content">
                    {renderInline(p, locale)}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="list-disc pl-6 flex flex-col gap-y-1 text-base text-gray-content">
                    {s.bullets.map((b) => (
                      <li key={b}>{renderInline(b, locale)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {guide.slug === 'guides-hub' && (
              <ul className="flex flex-col gap-y-5">
                {guides
                  .filter((g) => g.kind === 'guide' && g.published)
                  .map((g) => (
                    <li key={g.slug}>
                      <Link
                        to={`/${locale}/${g.path}`}
                        className="text-xl font-medium text-title-dark underline"
                      >
                        {g.text[locale].title}
                      </Link>
                      <p className="text-base text-gray-content">
                        {g.text[locale].description}
                      </p>
                    </li>
                  ))}
              </ul>
            )}
            {related.length > 0 && (
              <section className="flex flex-col gap-y-3">
                <h2 className="text-2xl font-medium text-title-dark">
                  {locale === 'th' ? 'โครงการของเราในพื้นที่นี้' : 'Our projects in this area'}
                </h2>
                <ul className="list-disc pl-6 text-base text-gray-content">
                  {related.map((p) => (
                    <li key={p.id}>
                      <Link to={`/${locale}/project/${p.id}`} className="underline">
                        {p.title[locale]}
                      </Link>{' '}
                      ({p.capacity} kW)
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {t.faq.length > 0 && (
              <section className="flex flex-col gap-y-4">
                <h2 className="text-2xl font-medium text-title-dark">
                  {locale === 'th' ? 'คำถามที่พบบ่อย' : 'FAQ'}
                </h2>
                {t.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-medium text-title-dark">{f.q}</h3>
                    <p className="text-base text-gray-content">{f.a}</p>
                  </div>
                ))}
              </section>
            )}
            <Link
              to={`/${locale}/free-assessment`}
              onClick={() =>
                track('click_assessment_cta', { place: `page_${guide.slug}` })
              }
              className="self-start px-6 py-3 rounded-lg bg-cta-primary text-white text-base font-medium"
            >
              {t.cta}
            </Link>
            <section className="flex flex-col gap-y-2 pt-6 border-t border-sep-smoke">
              <h2 className="text-lg font-medium text-title-dark">
                {locale === 'th' ? 'อ่านเพิ่มเติม' : 'Related pages'}
              </h2>
              <ul className="flex flex-col gap-y-1 text-base">
                {more.map((g) => (
                  <li key={g.slug}>
                    <Link to={`/${locale}/${g.path}`} className="underline text-gray-content">
                      {g.text[locale].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </SafeArea>
      </div>
    </LayoutStandard>
  );
};

export default ScreenGuide;
