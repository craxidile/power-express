import { memo, useEffect, useRef, useState } from 'react';

import { drawingUnit } from '../../../../../../utils/impact-clock';
import { useTicker } from '../../../../../../utils/impact-ticker';
import {
  fmtInt,
  LiveFigure,
  useReveal,
} from '../../../../../_commons/impact-number';
import { impactCopy } from '../copy';
import {
  CAR_BASE_UNIT,
  CAR_SLOTS,
  carColour,
  TREE_BASE_UNIT,
  TREE_SLOTS,
  TreeSlot,
} from './layouts';

const selTrees = (s: { trees: number }) => s.trees;
const selCars = (s: { cars: number }) => s.cars;
// whole trees / cars right now; the drawing uses these so it does not wait for the count-up
const selTreesNow = (s: { treesNow: number }) => Math.floor(s.treesNow);
const selCarsNow = (s: { carsNow: number }) => Math.floor(s.carsNow);

// Becomes true one frame after mounting, so a freshly added tree or car runs its
// grow / roll-in transition instead of appearing already finished.
const useEntered = (delayMs: number) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setOn(true))
    );
    return () => cancelAnimationFrame(id);
  }, []);
  return { on, delay: delayMs };
};

const Tree = memo(({ t, delay }: { t: TreeSlot; delay: number }) => {
  const { on } = useEntered(delay);
  return (
    <g
      transform={`translate(${t.x.toFixed(1)},${t.y.toFixed(1)}) scale(${t.s.toFixed(2)})`}
    >
      <g
        className={on ? 'pe-tr pe-on' : 'pe-tr'}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <g className="pe-sway" style={{ animationDelay: `-${t.d.toFixed(2)}s` }}>
          <rect x="-1.6" y="-11" width="3.2" height="11" fill="#6b5a45" />
          {t.pine ? (
            <path
              d="M0,-52 L13,-24 L7,-24 L16,-9 L-16,-9 L-7,-24 L-13,-24 Z"
              fill={t.c}
            />
          ) : (
            <>
              <circle cx="0" cy="-27" r="15" fill={t.c} />
              <circle cx="-8" cy="-19" r="9" fill={t.c} />
              <circle cx="8" cy="-19" r="9" fill={t.c} />
            </>
          )}
        </g>
      </g>
    </g>
  );
});

const Car = memo(({ i, x, y, delay }: { i: number; x: number; y: number; delay: number }) => {
  const { on } = useEntered(delay);
  const col = carColour(i);
  return (
    <g transform={`translate(${x},${y})`}>
      <g
        className={on ? 'pe-car pe-on' : 'pe-car'}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <rect x="2" y="6" width="34" height="18" rx="5" fill={col} />
        <rect x="9" y="1" width="20" height="10" rx="3" fill={col} opacity=".85" />
        <rect x="11" y="3" width="16" height="6" rx="1.5" fill="#fff" opacity=".7" />
        <circle cx="10" cy="24" r="3.2" fill="#0a0a0a" />
        <circle cx="28" cy="24" r="3.2" fill="#0a0a0a" />
      </g>
    </g>
  );
});

const Forest = ({ revealed, locale }: { revealed: boolean; locale: string }) => {
  const c = impactCopy(locale);
  const trees = useTicker(selTreesNow);
  const unit = drawingUnit(TREE_BASE_UNIT, TREE_SLOTS.length, trees);
  const n = revealed ? Math.min(TREE_SLOTS.length, Math.floor(trees / unit)) : 0;
  const pct = useTicker((s) => {
    const u = drawingUnit(TREE_BASE_UNIT, TREE_SLOTS.length, Math.floor(s.treesNow));
    return Math.floor(((s.treesNow % u) / u) * 1000) / 10;
  });
  // trees present when the picture first appears stagger in; later ones grow at once
  const firstCount = useRef<number | null>(null);
  if (firstCount.current === null && n > 0) firstCount.current = n;
  const first = firstCount.current ?? 0;
  return (
    <div className="pe-card">
      <div className="pe-k">
        <b>
          <LiveFigure select={selTrees} reserve={6.5} />
        </b>
        <span>{c.trees}</span>
      </div>
      <p className="pe-s">{c.treesText}</p>
      <div className="pe-scene pe-forest" role="img" aria-label={c.forestAlt}>
        <svg viewBox="0 0 640 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <rect x="0" y="232" width="640" height="8" fill="#e4eedc" />
          {TREE_SLOTS.slice(0, n).map((t, i) => (
            <Tree key={i} t={t} delay={i < first ? i * 14 : 0} />
          ))}
        </svg>
      </div>
      <div className="pe-key">
        <span>
          <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
            <circle cx="6" cy="5" r="5" fill="#2c8e31" />
            <rect x="5.2" y="9" width="1.6" height="5" fill="#6b5a45" />
          </svg>
          {c.treeKey(fmtInt(unit), pct.toFixed(1))}
        </span>
      </div>
    </div>
  );
};

const CarPark = ({ revealed, locale }: { revealed: boolean; locale: string }) => {
  const c = impactCopy(locale);
  const cars = useTicker(selCarsNow);
  const unit = drawingUnit(CAR_BASE_UNIT, CAR_SLOTS.length, cars);
  const total = Math.min(CAR_SLOTS.length, Math.floor(cars / unit));
  const n = revealed ? total : 0;
  // only as many rows of bays as there are cars: no empty row that reads as unfinished
  const rows = Math.min(5, Math.max(1, Math.ceil(total / 8)));
  const vbH = 30 + rows * 44;
  const firstCount = useRef<number | null>(null);
  if (firstCount.current === null && n > 0) firstCount.current = n;
  const first = firstCount.current ?? 0;
  return (
    <div className="pe-card">
      <div className="pe-k">
        <b>
          <LiveFigure select={selCars} reserve={4.5} />
        </b>
        <span>{c.cars}</span>
      </div>
      <p className="pe-s">{c.carsText}</p>
      <div
        className="pe-scene pe-lot"
        role="img"
        aria-label={c.lotAlt}
        style={{ ['--pe-ar' as string]: `400 / ${vbH}` }}
      >
        <svg viewBox={`0 0 400 ${vbH}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {Array.from({ length: rows }, (_, r) => r).map((r) =>
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
              <line
                key={`${r}-${col}`}
                x1={18 + col * 46}
                y1={18 + r * 44}
                x2={18 + col * 46}
                y2={52 + r * 44}
                stroke="#d1d5dc"
                strokeWidth="1.5"
              />
            ))
          )}
          {CAR_SLOTS.slice(0, n).map((p, i) => (
            <Car key={i} i={i} x={p.x} y={p.y} delay={i < first ? i * 25 : 0} />
          ))}
        </svg>
      </div>
      <div className="pe-key">
        <span>
          <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
            <rect x="1" y="2" width="16" height="6" rx="2" fill="#99a1af" />
          </svg>
          {c.carKey(fmtInt(unit))}
        </span>
      </div>
    </div>
  );
};

const Equivalents = ({ locale }: { locale: string }) => {
  const c = impactCopy(locale);
  const { ref, revealed } = useReveal<HTMLDivElement>('eq');
  return (
    <div className="pe-eq" ref={ref}>
      <div className="pe-head">
        <h3>{c.eqTitle}</h3>
        <span>{c.eqNote}</span>
      </div>
      <div className="pe-pair">
        <Forest revealed={revealed} locale={locale} />
        <CarPark revealed={revealed} locale={locale} />
      </div>
    </div>
  );
};

export default Equivalents;
