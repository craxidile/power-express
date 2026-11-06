// Seeded layouts for the forest and the car park, built once at module load so
// the picture looks the same on every visit and a new tree or car never moves
// the ones already drawn. Same algorithm as the approved design.

export interface TreeSlot {
  x: number;
  y: number;
  s: number;
  c: string;
  pine: boolean;
  d: number; // sway phase, seconds
}

export interface CarSlot {
  x: number;
  y: number;
}

let seed = 7;
const rnd = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

// back rows are smaller and lighter; the front row fills first
const ROWS = [
  { y: 150, s: 0.62, c: ['#7fb069', '#8fbf73'], cols: 30 },
  { y: 190, s: 0.82, c: ['#519723', '#2c8e31'], cols: 28 },
  { y: 232, s: 1, c: ['#2c8e31', '#2d5a3d'], cols: 24 },
];

const buildTrees = (): TreeSlot[] => {
  const slots: TreeSlot[] = [];
  ROWS.forEach((r) => {
    for (let i = 0; i < r.cols; i += 1) {
      const x = (i + 0.5) * (640 / r.cols) + (rnd() - 0.5) * 12;
      const y = r.y + (rnd() - 0.5) * 6;
      const s = r.s * (0.8 + rnd() * 0.35);
      const c = r.c[rnd() < 0.5 ? 0 : 1];
      const pine = rnd() < 0.32;
      const d = rnd() * 5;
      slots.push({ x, y, s, c, pine, d });
    }
  });
  slots.sort((a, b) => b.y - a.y || a.x - b.x);
  // interleave so growth spreads across the width, front row first
  return slots
    .map((t, i) => ({
      t,
      k: (t.y > 220 ? 0 : t.y > 170 ? 1 : 2) * 1000 + ((i * 37) % 97),
    }))
    .sort((a, b) => a.k - b.k)
    .map((o) => o.t);
};

export const TREE_SLOTS = buildTrees(); // 82 slots
export const TREE_BASE_UNIT = 5000;

export const CAR_SLOTS: CarSlot[] = (() => {
  const out: CarSlot[] = [];
  for (let r = 0; r < 5; r += 1)
    for (let c = 0; c < 8; c += 1) out.push({ x: 22 + c * 46, y: 22 + r * 44 });
  return out;
})(); // 40 bays
export const CAR_BASE_UNIT = 100;

export const CAR_COLOURS = ['#99a1af', '#6a7282', '#d1d5dc', '#4a5565', '#ff6b35'];
export const carColour = (i: number) =>
  CAR_COLOURS[(i * 7) % 17 === 0 ? 4 : (i * 3) % 4];
