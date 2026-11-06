import { useEffect, useRef, useState } from 'react';

import {
  ImpactSnapshot,
  snapshot,
  Stage,
  startStage,
  subscribe,
} from '../../../utils/impact-ticker';

const nf = new Intl.NumberFormat('en-US');
export const fmtInt = (v: number) => nf.format(Math.floor(v));
export const fmtMw = (v: number) => v.toFixed(2);

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface LiveFigureProps {
  select: (s: ImpactSnapshot) => number;
  format?: (v: number) => string;
  // Width of the final figure in characters, reserved so ticking never shifts layout.
  reserve: number;
  className?: string;
}

// A number that counts up and then ticks. It writes its own text node, so the
// page does not re-render while it moves, and it is hidden from screen readers:
// a static, rounded sentence (see ImpactSrText) carries the meaning instead.
export const LiveFigure = ({
  select,
  format = fmtInt,
  reserve,
  className,
}: LiveFigureProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const paint = (s: ImpactSnapshot) => {
      const el = ref.current;
      if (!el) return;
      // only touch the DOM when the figure changed: a rewrite forces style and layout work
      const next = format(select(s));
      if (el.textContent !== next) el.textContent = next;
    };
    paint(snapshot());
    return subscribe(paint);
  }, [select, format]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        display: 'inline-block',
        minWidth: `${reserve}ch`,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {format(select(snapshot()))}
    </span>
  );
};

// Starts a count-up stage the first time the element is `threshold` visible.
// Returns the ref to attach and whether it has been revealed.
export const useReveal = <T extends HTMLElement>(
  stage: Stage,
  threshold = 0.2
) => {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const go = () => {
      startStage(stage);
      setRevealed(true);
    };
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      go();
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          go();
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stage, threshold]);
  return { ref, revealed };
};

// Visually hidden, static, rounded figure for screen readers (no aria-live).
export const srMillions = (kwh: number, locale: string) => {
  const m = (kwh / 1e6).toFixed(1);
  return locale === 'th' ? `ประมาณ ${m} ล้าน kWh` : `about ${m} million kWh`;
};

// Mounts its children only when they are about to scroll into view, so the
// below-the-fold figures cost nothing while the page loads. The placeholder
// keeps their height (see .pe-ph-* in impact.css).
export const LazyMount = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (on || !el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { rootMargin: '900px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [on]);
  return on ? <>{children}</> : <div ref={ref} className={className} aria-hidden="true" />;
};
