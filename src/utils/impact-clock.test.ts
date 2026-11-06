import fallback from '../config/impact.json';
import {
  carEquivalent,
  drawingUnit,
  ImpactData,
  isImpactData,
  liveKwh,
  treeEquivalent,
} from './impact-clock';

const data = fallback as unknown as ImpactData;
// 6 Nov 2026 at hh:mm Bangkok
const at = (hh: number, mm = 0) =>
  Date.parse(`2026-11-06T${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:00+07:00`);

describe('liveKwh', () => {
  it('holds still at night and counts yesterday as complete', () => {
    const a = liveKwh(data, at(1));
    const b = liveKwh(data, at(5, 59));
    expect(a.daylight).toBe(false);
    expect(a.kw).toBe(0);
    expect(a.kwh).toBeCloseTo(data.kwh, 6);
    expect(b.kwh).toBeCloseTo(data.kwh, 6);
    const late = liveKwh(data, at(22));
    const later = liveKwh(data, at(23, 59));
    expect(late.daylight).toBe(false);
    expect(late.kwh).toBeCloseTo(later.kwh, 6);
    expect(late.kwh).toBeCloseTo(data.kwh + data.dailyKwh, 6);
  });

  it('rises fastest at midday and slowest near the ends of the day', () => {
    const rate = (h: number, m = 0) =>
      liveKwh(data, at(h, m + 1)).kwh - liveKwh(data, at(h, m)).kwh;
    expect(rate(12, 15)).toBeGreaterThan(rate(8));
    expect(rate(12, 15)).toBeGreaterThan(rate(17));
    expect(liveKwh(data, at(12, 15)).daylight).toBe(true);
  });

  it('adds up to dailyKwh over a full day', () => {
    const start = liveKwh(data, at(0)).kwh;
    const end = liveKwh(data, at(23, 59)).kwh;
    expect(end - start).toBeCloseTo(data.dailyKwh, 6);
  });

  it('never goes backwards through the day', () => {
    let prev = 0;
    for (let m = 0; m < 24 * 60; m += 5) {
      const v = liveKwh(data, at(0) + m * 60e3).kwh;
      expect(v).toBeGreaterThanOrEqual(prev);
      prev = v;
    }
  });

  it('reports about 3,400 kW at midday for today\'s figures', () => {
    const kw = liveKwh(data, at(12, 15)).kw;
    expect(kw).toBeGreaterThan(3300);
    expect(kw).toBeLessThan(3500);
  });

  it('counts whole elapsed days', () => {
    // 6, 7 and 8 Nov are complete by 01:00 on 9 Nov; 9 Nov has not started producing
    const v = liveKwh(data, Date.parse('2026-11-09T01:00:00+07:00')).kwh;
    expect(v).toBeCloseTo(data.kwh + 3 * data.dailyKwh, 4);
  });
});

describe('equivalents', () => {
  it('matches the approved design at today\'s total', () => {
    expect(Math.floor(treeEquivalent(data, data.kwh) / 5000)).toBe(71);
    expect(Math.floor(carEquivalent(data, data.kwh) / 100)).toBe(32);
  });

  it('doubles the drawing unit when the drawing is full', () => {
    expect(drawingUnit(5000, 82, 355180)).toBe(5000);
    expect(drawingUnit(5000, 82, 5000 * 83)).toBe(10000);
    expect(drawingUnit(100, 40, 3256)).toBe(100);
    expect(drawingUnit(100, 40, 4200)).toBe(200);
  });
});

describe('isImpactData', () => {
  it('accepts the bundled fallback and rejects bad payloads', () => {
    expect(isImpactData(data)).toBe(true);
    expect(isImpactData(null)).toBe(false);
    expect(isImpactData({ ...data, kwh: 0 })).toBe(false);
    expect(isImpactData({ ...data, asof: 'nope' })).toBe(false);
    expect(isImpactData({ ...data, years: [] })).toBe(false);
  });
});
