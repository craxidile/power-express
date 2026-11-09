// Builds src/data/thailand-provinces.json, the SVG outlines of Thailand's 77 provinces that the
// "where we work" maps draw. Run once; the generated JSON is committed. It only needs re-running
// if the boundary data changes, NOT when a new province gets a project (that happens at run time).
//
//   npm i --no-save topojson-server topojson-simplify topojson-client
//   node scripts/build-thailand-map.mjs <ne_10m_admin_1_states_provinces.geojson> [out.json]
//
// Boundaries: Natural Earth (public domain), https://www.naturalearthdata.com
//   https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_1_states_provinces.geojson
// Shared borders are simplified once (topology-preserving) so neighbouring provinces never gap.

import fs from 'node:fs';
import { topology } from 'topojson-server';
import { presimplify, simplify, planarTriangleArea } from 'topojson-simplify';
import { feature } from 'topojson-client';

const [, , src, out = 'src/data/thailand-provinces.json', tol = '0.6'] = process.argv;
if (!src) {
  console.error('usage: node scripts/build-thailand-map.mjs <admin1.geojson> [out.json] [tolerance-px2]');
  process.exit(1);
}

const W = 398; // same box as the old PNG, so the page layout does not move
const H = 730;
const PAD = 3;
const MIN_RING_AREA = 1.2; // px²; drops specks that vanish at display size
const LAT0 = 13; // equirectangular, scaled so longitude is not stretched at Thailand's latitude

const names = JSON.parse(fs.readFileSync('src/data/province-names.json', 'utf8'));
const byNe = new Map(names.map((n) => [n.ne, n]));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const gj = JSON.parse(fs.readFileSync(src, 'utf8'));
const feats = gj.features.filter((f) => f.properties.admin === 'Thailand');

const unknown = feats.filter((f) => !byNe.has(f.properties.name)).map((f) => f.properties.name);
const missing = names.filter((n) => !feats.some((f) => f.properties.name === n.ne)).map((n) => n.ne);
if (unknown.length || missing.length || feats.length !== names.length) {
  console.error('Province table and boundary data disagree.', { unknown, missing, features: feats.length, table: names.length });
  process.exit(1);
}

// ---- project lon/lat to a W x H pixel box
const each = (coords, fn) => (Array.isArray(coords[0]) ? coords.forEach((c) => each(c, fn)) : fn(coords));
let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
feats.forEach((f) => each(f.geometry.coordinates, ([lon, lat]) => {
  minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
  minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
}));
const cos = Math.cos((LAT0 * Math.PI) / 180);
const spanX = (maxLon - minLon) * cos;
const spanY = maxLat - minLat;
const k = Math.min((W - 2 * PAD) / spanX, (H - 2 * PAD) / spanY);
const offX = (W - spanX * k) / 2;
const offY = (H - spanY * k) / 2;
const project = ([lon, lat]) => [offX + (lon - minLon) * cos * k, offY + (maxLat - lat) * k];
const mapRings = (rings) => rings.map((ring) => ring.map(project));

const projected = {
  type: 'FeatureCollection',
  features: feats.map((f) => ({
    type: 'Feature',
    id: byNe.get(f.properties.name).en,
    properties: {},
    geometry: f.geometry.type === 'Polygon'
      ? { type: 'Polygon', coordinates: mapRings(f.geometry.coordinates) }
      : { type: 'MultiPolygon', coordinates: f.geometry.coordinates.map(mapRings) },
  })),
};

// ---- simplify shared borders once
let topo = topology({ provinces: projected });
topo = presimplify(topo, planarTriangleArea);
topo = simplify(topo, Number(tol));
const simplified = feature(topo, topo.objects.provinces);

// ---- rings -> SVG path
const ringArea = (r) => Math.abs(r.reduce((s, p, i) => {
  const q = r[(i + 1) % r.length];
  return s + (p[0] * q[1] - q[0] * p[1]);
}, 0) / 2);
// Coordinates are stored as integer tenths of a pixel, then written as short relative moves.
const tenths = (n) => Math.round(n * 10);
const fmt = (t) => {
  const a = Math.abs(t);
  const i = Math.floor(a / 10);
  const f = a % 10;
  const s = f ? (i ? `${i}.${f}` : `.${f}`) : `${i}`;
  return t < 0 ? `-${s}` : s;
};

const toPath = (geometry) => {
  const polys = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  const rings = polys.flatMap((p) => p).filter((r) => r.length >= 4);
  const biggest = Math.max(...rings.map(ringArea));
  return rings
    .filter((r) => ringArea(r) >= MIN_RING_AREA || ringArea(r) === biggest)
    .map((r) => {
      const pts = [];
      r.slice(0, -1).forEach((p) => {
        const q = [tenths(p[0]), tenths(p[1])];
        const last = pts[pts.length - 1];
        if (!last || last[0] !== q[0] || last[1] !== q[1]) pts.push(q);
      });
      const deltas = pts.slice(1).map((p, i) => `${fmt(p[0] - pts[i][0])} ${fmt(p[1] - pts[i][1])}`);
      return `M${fmt(pts[0][0])} ${fmt(pts[0][1])}l${deltas.join(' ').replace(/ -/g, '-')}z`;
    })
    .join('');
};

const provinces = simplified.features
  .map((f) => {
    const n = names.find((x) => x.en === f.id);
    return { id: slug(n.en), en: n.en, th: n.th, d: toPath(f.geometry) };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

fs.writeFileSync(out, JSON.stringify({ viewBox: [W, H], source: 'Natural Earth (public domain)', provinces }) + '\n');
const bytes = fs.statSync(out).size;
const points = provinces.reduce((s, p) => s + p.d.split(/[Mlz]/).filter(Boolean).reduce((n, seg) => n + (seg.match(/-?\d*\.?\d+/g) || []).length / 2, 0), 0);
console.log(`wrote ${out}: ${provinces.length} provinces, ~${points} points, ${(bytes / 1024).toFixed(1)} KB`);
