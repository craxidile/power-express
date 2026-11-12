// The Impact counter's daylight model. Pure functions only, so they run in the
// browser, in Node (prerender) and in unit tests.
//
// The metered total is published once a night (impact.json). Between updates the
// page animates by spreading the day's average output over 06:00-18:30 Bangkok
// time on a half-sine curve, and holds still at night. It is an estimate; the
// copy says "about" and the figures are reset to metered totals every night.

export interface ImpactData {
  asof: string; // last day included in `kwh`, YYYY-MM-DD (Bangkok)
  kwh: number; // metered lifetime kWh up to the end of `asof`
  dailyKwh: number; // average daily output used for the estimate
  years: [number, number, boolean][]; // [year, kWh, inProgress]
  factors: {
    co2KgPerKwh: number;
    kgCo2PerTreeYear: number;
    tCo2PerCarYear: number;
    source?: string;
  };
  sites: number;
  kWp: number;
  updated?: string;
}

export interface ImpactLive {
  kwh: number; // estimated lifetime kWh right now (unrounded)
  daylight: boolean;
  kw: number; // estimated fleet output right now, kW
}

export const DAY_MS = 86400e3;
export const DAY_START_S = 6 * 3600; // 06:00 Bangkok
export const DAY_LENGTH_S = 12.5 * 3600; // until 18:30

// Midnight (Asia/Bangkok) at the start of the day `asof`.
const startOfDay = (asof: string) => Date.parse(`${asof}T00:00:00+07:00`);

// Share of a day's output produced by second-of-day `sod` (half-sine over 06:00-18:30).
const dayShare = (sod: number) => {
  const x = Math.min(Math.max(sod - DAY_START_S, 0), DAY_LENGTH_S);
  return (1 - Math.cos((Math.PI * x) / DAY_LENGTH_S)) / 2;
};

// Cumulative modelled output since the start of `dayStart`, in kWh.
const modelled = (dayStart: number, dailyKwh: number, t: number) => {
  const sinceStart = Math.max(0, t - dayStart);
  const whole = Math.floor(sinceStart / DAY_MS);
  return dailyKwh * (whole + dayShare((sinceStart - whole * DAY_MS) / 1000));
};

export const liveKwh = (data: ImpactData, nowMs: number): ImpactLive => {
  const dayStart = startOfDay(data.asof);
  // The dashboard republishes every couple of hours, so on the day `asof` the metered
  // total can already hold part of that day. When `updated` falls inside `asof`, the
  // total is "as of that moment"; otherwise it covers the whole of `asof`.
  const updatedMs = data.updated ? Date.parse(data.updated) : NaN;
  const partial =
    Number.isFinite(updatedMs) &&
    updatedMs >= dayStart &&
    updatedMs < dayStart + DAY_MS;
  const ref = partial ? updatedMs : dayStart + DAY_MS;
  const kwh = Math.max(
    data.kwh,
    data.kwh +
      modelled(dayStart, data.dailyKwh, nowMs) -
      modelled(dayStart, data.dailyKwh, ref)
  );
  // time of day (Bangkok) of `nowMs` within the modelled cycle
  const sod = (((nowMs - dayStart) % DAY_MS) + DAY_MS) % DAY_MS / 1000;
  const s = sod - DAY_START_S;
  const daylight = nowMs >= dayStart && s > 0 && s < DAY_LENGTH_S;
  const kw = daylight
    ? ((data.dailyKwh * Math.PI) / (2 * DAY_LENGTH_S)) *
      Math.sin((Math.PI * s) / DAY_LENGTH_S) *
      3600
    : 0;
  return { kwh, daylight, kw };
};

export const co2Tonnes = (data: ImpactData, kwh: number) =>
  (kwh * data.factors.co2KgPerKwh) / 1000;

export const treeEquivalent = (data: ImpactData, kwh: number) =>
  (kwh * data.factors.co2KgPerKwh) / data.factors.kgCo2PerTreeYear;

export const carEquivalent = (data: ImpactData, kwh: number) =>
  co2Tonnes(data, kwh) / data.factors.tCo2PerCarYear;

// One drawn tree / car stands for `unit` real ones. When the drawing is full the
// unit doubles, so it is about half full again.
export const drawingUnit = (
  baseUnit: number,
  slots: number,
  realCount: number
) => {
  let unit = baseUnit;
  while (Math.floor(realCount / unit) > slots) unit *= 2;
  return unit;
};

// Basic sanity check on a downloaded impact.json before the page trusts it.
export const isImpactData = (x: unknown): x is ImpactData => {
  const d = x as ImpactData;
  return (
    !!d &&
    typeof d.asof === 'string' &&
    !Number.isNaN(Date.parse(`${d.asof}T00:00:00+07:00`)) &&
    Number.isFinite(d.kwh) &&
    d.kwh > 0 &&
    Number.isFinite(d.dailyKwh) &&
    d.dailyKwh > 0 &&
    Array.isArray(d.years) &&
    d.years.length > 0 &&
    d.years.every((y) => Array.isArray(y) && Number.isFinite(y[1])) &&
    !!d.factors &&
    d.factors.co2KgPerKwh > 0 &&
    d.factors.kgCo2PerTreeYear > 0 &&
    d.factors.tCo2PerCarYear > 0 &&
    Number.isFinite(d.sites) &&
    Number.isFinite(d.kWp)
  );
};
