import { useEffect } from 'react';

import { l } from '../../../../../utils/localization-utils';
import { m } from '../../../../../utils/media-utils';
import { loadImpact, useImpact, useTicker } from '../../../../../utils/impact-ticker';
import { useVmScreen } from '../../../../../stores/vm-screen';
import {
  fmtInt,
  fmtMw,
  LazyMount,
  LiveFigure,
  srMillions,
  useReveal,
} from '../../../../_commons/impact-number';
import TextLines from '../../../../_commons/text-lines';
import { impactCopy } from './copy';
import Equivalents from './equivalents';
import YearlyChart from './yearly-chart';
import './impact.css';

// The CMS map highlighted only two provinces. While the CMS still points at that original image we
// serve our copy with every province that has a site coloured in; a newly uploaded map wins.
const ORIGINAL_MAP = 'media/front/map.png';
const mapSrc = (cmsUrl: string) =>
  !cmsUrl || cmsUrl.endsWith(ORIGINAL_MAP) ? '/img/impact-map.png' : cmsUrl;

const selKwh = (s: { kwh: number }) => s.kwh;
const selCo2 = (s: { co2: number }) => s.co2;
const selSites = (s: { sites: number }) => s.sites;
const selMw = (s: { mw: number }) => s.mw;

const NowLine = ({ locale }: { locale: string }) => {
  const c = impactCopy(locale);
  const daylight = useTicker((s) => s.daylight);
  const kw = useTicker((s) => s.kw);
  return (
    <span className={`pe-now ${daylight ? 'pe-day' : 'pe-night'}`}>
      <span className="pe-dot" aria-hidden="true" />
      {daylight ? (
        <span>
          {c.nowDay[0]}
          <b>{fmtInt(kw)} kW</b>
          {c.nowDay[1]}
        </span>
      ) : (
        <span>{c.nowNight}</span>
      )}
    </span>
  );
};

const SectionImpact = () => {
  const { locale = 'th', localizations = [], media } = useVmScreen();
  const c = impactCopy(locale);
  const data = useImpact();
  const { ref, revealed } = useReveal<HTMLDivElement>('stats', 0.3);

  useEffect(() => {
    loadImpact();
  }, []);

  return (
    <section
      id="impact"
      className="py-10 lg:py-[120px] flex flex-col justify-start items-stretch"
    >
      <div className="w-full max-w-[1328px] px-6 mx-auto flex flex-col justify-start items-stretch">
        <div className="gap-y-16 lg:gap-x-16 lg:gap-y-0 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="lg:flex-[1.15] min-w-0 flex flex-col justify-start items-stretch">
            <div className="gap-y-6 lg:gap-y-10 flex flex-col justify-start items-stretch">
              <h2 className="text-title-light text-sm lg:text-2xl font-medium uppercase">
                {l(locale, localizations, 'front.title-impact')}
              </h2>
              <h6 className="text-4xl lg:text-5xl font-medium leading-[1.2]">
                <TextLines
                  text={l(locale, localizations, 'front.cta-impact')}
                />
              </h6>
              <p className="text-lg text-gray-excerpt">{c.excerpt}</p>
              <div className="pe-stats" ref={ref} data-revealed={revealed}>
                <div className="pe-st pe-big">
                  <div className="pe-bar bg-cta-primary" />
                  <span className="pe-n">
                    <LiveFigure select={selKwh} reserve={8.9} />
                    <small>kWh</small>
                  </span>
                  <span className="sr-only">{srMillions(data.kwh, locale)}</span>
                  <span className="pe-c">{c.kwh}</span>
                  <NowLine locale={locale} />
                </div>
                <div className="pe-st pe-co2">
                  <div className="pe-bar bg-green-tag" />
                  <span className="pe-n">
                    <LiveFigure select={selCo2} reserve={4.5} />
                  </span>
                  <span className="pe-c">{c.co2}</span>
                </div>
                <div className="pe-st">
                  <div className="pe-bar bg-green-bullet" />
                  <span className="pe-n">
                    <LiveFigure select={selSites} reserve={2} />
                  </span>
                  <span className="pe-c">{c.sites}</span>
                </div>
                <div className="pe-st">
                  <div className="pe-bar bg-cta-primary" />
                  <span className="pe-n">
                    <LiveFigure select={selMw} format={fmtMw} reserve={3.4} />
                    <small>MW</small>
                  </span>
                  <span className="pe-c">{c.mw}</span>
                </div>
              </div>
            </div>
          </div>
          <figure className="lg:flex-[0.85] min-w-0 flex flex-col justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              width={398}
              height={730}
              className="w-[220px] h-auto lg:w-[310px]"
              alt={c.mapAlt(c.provinces.join(', '))}
              src={mapSrc(m(media, 'front.figure-impact'))}
            />
            <figcaption className="pe-mapcap">
              <span className="pe-mapdot" aria-hidden="true" />
              {c.mapCaption(data.sites, c.provinces.length)}
            </figcaption>
          </figure>
        </div>
        <LazyMount className="pe-ph-eq">
          <Equivalents locale={locale} />
        </LazyMount>
        <LazyMount className="pe-ph-yr">
          <YearlyChart locale={locale} />
        </LazyMount>
        <span className="mt-16 lg:mt-[72px] block text-lg lg:text-2xl text-cta-primary font-semibold text-center">
          {l(locale, localizations, 'front.more-to-come')}
        </span>
      </div>
    </section>
  );
};

export default SectionImpact;
