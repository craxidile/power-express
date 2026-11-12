import { useSyncExternalStore } from 'react';

import { fallbackImpact, fetchImpact } from '../apis/impact';
import {
  carEquivalent,
  co2Tonnes,
  ImpactData,
  liveKwh,
  treeEquivalent,
} from './impact-clock';

// One shared clock for every live figure on the page. Components subscribe once;
// the ticker computes a snapshot per frame and the figures write their own text,
// so nothing re-renders 60 times a second and the layout never shifts.

export type Stage = 'hero' | 'stats' | 'eq' | 'yr';

export interface ImpactSnapshot {
  data: ImpactData;
  daylight: boolean;
  kw: number;
  heroKwh: number;
  heroCo2: number;
  kwh: number;
  co2: number;
  trees: number;
  cars: number;
  treesNow: number; // true equivalent, not eased: drives the drawing
  carsNow: number;
  sites: number;
  mw: number;
  ytd: number;
  easeEq: number;
}

type Listener = (s: ImpactSnapshot) => void;

const COUNT_UP_MS = 2400;
const still = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let data: ImpactData = fallbackImpact;
const started: Partial<Record<Stage, number>> = {};
const listeners = new Set<Listener>();
const dataListeners = new Set<() => void>();
const highest: Record<string, number> = {};
let timer: number | undefined;
let raf: number | undefined;
let fetched = false;

// A displayed figure never goes down, even when fresh data arrives.
const rising = (key: string, v: number) => {
  highest[key] = Math.max(highest[key] ?? 0, v);
  return highest[key];
};

const ease = (stage: Stage) => {
  const t0 = started[stage];
  if (t0 === undefined) return 0;
  if (still()) return 1;
  const e = Math.min(1, (Date.now() - t0) / COUNT_UP_MS);
  return 1 - Math.pow(1 - e, 3);
};

const animating = () =>
  !still() &&
  (Object.keys(started) as Stage[]).some(
    (k) => Date.now() - (started[k] as number) < COUNT_UP_MS
  );

export const snapshot = (now = Date.now()): ImpactSnapshot => {
  const c = liveKwh(data, now);
  const eHero = ease('hero');
  const eStats = ease('stats');
  const eEq = ease('eq');
  const eYr = ease('yr');
  const ytdBase = (data.years.find((y) => y[2]) || [0, 0])[1];
  const kwhHero = rising('hero', Math.floor(c.kwh * eHero));
  const kwhStats = rising('stats', Math.floor(c.kwh * eStats));
  return {
    data,
    daylight: c.daylight,
    kw: Math.round(c.kw / 10) * 10,
    heroKwh: kwhHero,
    heroCo2: rising('heroCo2', Math.floor(co2Tonnes(data, c.kwh) * eHero)),
    kwh: kwhStats,
    co2: rising('co2', Math.floor(co2Tonnes(data, c.kwh) * eStats)),
    trees: rising('trees', Math.floor(treeEquivalent(data, c.kwh) * eEq)),
    cars: rising('cars', Math.floor(carEquivalent(data, c.kwh) * eEq)),
    treesNow: treeEquivalent(data, c.kwh),
    carsNow: carEquivalent(data, c.kwh),
    sites: Math.round(data.sites * eStats),
    mw: Math.round((data.kWp / 10) * eStats) / 100,
    ytd: rising(
      'ytd',
      Math.floor((ytdBase + Math.max(0, c.kwh - data.kwh)) * eYr)
    ),
    easeEq: eEq,
  };
};

const notify = () => {
  const s = snapshot();
  listeners.forEach((l) => l(s));
};

// The page paints its figures once, statically. Ticking (and the data fetch) only begin a moment
// after the window `load` event, so none of that work competes with loading and first input.
const CALM_MS = 2500;
let calm = false;
let waitingForCalm = false;
const calmQueue: Array<() => void> = [];
const afterCalm = (fn: () => void) => {
  if (calm) {
    fn();
    return;
  }
  calmQueue.push(fn);
  if (waitingForCalm) return;
  waitingForCalm = true;
  const go = () =>
    window.setTimeout(() => {
      calm = true;
      calmQueue.splice(0).forEach((f) => f());
    }, CALM_MS);
  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go, { once: true });
};

const schedule = () => {
  if (!listeners.size || typeof window === 'undefined') return;
  window.clearTimeout(timer);
  if (raf !== undefined) window.cancelAnimationFrame(raf);
  raf = undefined;
  const run = () => {
    raf = undefined;
    notify();
    schedule();
  };
  if (animating() && !document.hidden) raf = window.requestAnimationFrame(run);
  // After the count-up an integer figure changes about once a second, so a
  // once-a-second timer is plenty (and cheap). Not before the page has settled.
  else if (!calm) afterCalm(schedule);
  else timer = window.setTimeout(run, 1000);
};

export const subscribe = (l: Listener) => {
  listeners.add(l);
  schedule();
  return () => {
    listeners.delete(l);
    if (!listeners.size) {
      window.clearTimeout(timer);
      if (raf !== undefined) window.cancelAnimationFrame(raf);
      raf = undefined;
    }
  };
};

// `instant` skips the count-up: the figure is shown at once and only ticks. The hero chip
// uses it so that nothing animates while the page is loading.
export const startStage = (stage: Stage, instant = false) => {
  if (started[stage] === undefined) {
    started[stage] = instant ? Date.now() - COUNT_UP_MS : Date.now();
    schedule();
  }
};

// Loads the nightly totals once. Waits a moment so it never competes with the
// first paint; on any failure the bundled figures stay.
export const loadImpact = () => {
  if (fetched || typeof window === 'undefined') return;
  fetched = true;
  afterCalm(async () => {
    const next = await fetchImpact();
    if (
      next &&
      Date.parse(`${next.asof}T00:00:00+07:00`) >=
        Date.parse(`${data.asof}T00:00:00+07:00`)
    ) {
      data = next;
      // The bundled figures are only an estimate and can sit above the metered total;
      // once real totals arrive the display is re-based on them instead of staying
      // pinned at the old, higher guess.
      Object.keys(highest).forEach((k) => delete highest[k]);
      dataListeners.forEach((l) => l());
      notify();
    }
  });
};

const subscribeData = (l: () => void) => {
  dataListeners.add(l);
  return () => {
    dataListeners.delete(l);
  };
};

// The data object only changes when new totals arrive (about once a day).
export const useImpact = () =>
  useSyncExternalStore(subscribeData, () => data, () => data);

// Re-renders only when the selected primitive changes (day/night, kW, percent).
const subscribeTick = (l: () => void) => subscribe(l);
export const useTicker = <T extends string | number | boolean>(
  select: (s: ImpactSnapshot) => T
): T =>
  useSyncExternalStore(
    subscribeTick,
    () => select(snapshot()),
    () => select(snapshot())
  );
