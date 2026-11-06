import { useCallback, useEffect } from 'react';

import {
  loadImpact,
  startStage,
  useImpact,
  useTicker,
} from '../../../../../utils/impact-ticker';
import {
  LiveFigure,
  reducedMotion,
  srMillions,
} from '../../../../_commons/impact-number';
import { impactCopy } from '../section-impact/copy';
import '../section-impact/impact.css';

const selHeroKwh = (s: { heroKwh: number }) => s.heroKwh;
const selHeroCo2 = (s: { heroCo2: number }) => s.heroCo2;

// A quiet live chip inside the hero: proof on the first screen, before anyone
// scrolls. It is a link to the results section, not a button.
const ImpactChip = ({ locale }: { locale: string }) => {
  const c = impactCopy(locale);
  // idempotent: marks the chip's count-up as already done, so the first paint shows the real figure
  startStage('hero', true);
  const data = useImpact();
  const daylight = useTicker((s) => s.daylight);

  useEffect(() => {
    loadImpact();
  }, []);

  const onClick = useCallback((e: React.MouseEvent) => {
    const el = document.getElementById('impact');
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
  }, []);

  return (
    <a
      href="#impact"
      onClick={onClick}
      className={`pe-chip ${daylight ? 'pe-day' : 'pe-night'}`}
      aria-label={`${c.chipLabel} ${srMillions(data.kwh, locale)}. ${c.chipAria}`}
    >
      <span className="pe-dot" aria-hidden="true" />
      <span aria-hidden="true" className="pe-lbl">{c.chipLabel}</span>
      <span aria-hidden="true" className="pe-lbl-s">{c.chipLabelShort}</span>
      <b>
        <LiveFigure select={selHeroKwh} reserve={8.9} /> kWh
      </b>
      <em aria-hidden="true">
        · {c.chipCo2} <LiveFigure select={selHeroCo2} reserve={4.5} />{' '}
        {c.chipTonnes}
      </em>
    </a>
  );
};

export default ImpactChip;
