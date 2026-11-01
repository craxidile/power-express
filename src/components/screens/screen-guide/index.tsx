import { Link, Navigate, useParams } from 'react-router-dom';

import { useVmScreen } from '../../../stores/vm-screen';
import { findGuide } from '../../../config/guides';
import { track } from '../../../utils/analytics';
import LayoutStandard from '../../layouts/layout-standard';
import SafeArea from '../../_commons/safe-area';
import Seo from '../../_commons/seo';

const ScreenGuide = () => {
  const { locale = 'th' } = useVmScreen();
  const { slug } = useParams();
  const guide = findGuide(slug);

  if (!guide) return <Navigate to={`/${locale}`} replace />;
  const t = guide.text[locale];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <LayoutStandard>
      <Seo
        locale={locale}
        title={t.title}
        description={t.description}
        path={`guide/${guide.slug}`}
        jsonLd={jsonLd}
      />
      <div className="py-10 lg:py-20">
        <SafeArea>
          <article className="mx-auto w-full max-w-[760px] flex flex-col gap-y-8">
            <h1 className="text-3hxl lg:text-4hxl font-medium text-title-dark">
              {t.title}
            </h1>
            <p className="text-lg text-gray-excerpt">{t.intro}</p>
            {t.sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-y-3">
                <h2 className="text-2xl font-medium text-title-dark">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="text-base text-gray-content">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="list-disc pl-6 flex flex-col gap-y-1 text-base text-gray-content">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section className="flex flex-col gap-y-4">
              <h2 className="text-2xl font-medium text-title-dark">FAQ</h2>
              {t.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-medium text-title-dark">{f.q}</h3>
                  <p className="text-base text-gray-content">{f.a}</p>
                </div>
              ))}
            </section>
            <Link
              to={`/${locale}/free-assessment`}
              onClick={() =>
                track('click_assessment_cta', { place: `guide_${guide.slug}` })
              }
              className="self-start px-6 py-3 rounded-lg bg-cta-primary text-white text-base font-medium"
            >
              {t.cta}
            </Link>
          </article>
        </SafeArea>
      </div>
    </LayoutStandard>
  );
};

export default ScreenGuide;
