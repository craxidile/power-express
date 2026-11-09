import { memo, useMemo } from 'react';

import geo from '../../../data/thailand-provinces.json';

// Thailand drawn from vector outlines, with every province that has a project filled in.
// Colours match the old picture so the pages look the same: land #dcdada, borders #8b9db6.
// Boundaries: Natural Earth (public domain). Regenerate with scripts/build-thailand-map.mjs.

interface DrawnProvince {
  id: string;
  en: string;
  th: string;
  d: string;
}

const PROVINCES = geo.provinces as DrawnProvince[];
const [WIDTH, HEIGHT] = geo.viewBox;

const LAND = '#dcdada';
const BORDER = '#8b9db6';

interface Props {
  /** ids of the provinces to fill in, e.g. 'bangkok', 'nakhon-pathom' */
  highlighted: string[];
  /** fill colour of those provinces */
  color: string;
  locale: string;
  /** text read out by screen readers */
  label: string;
  className?: string;
}

const ThailandMap = ({
  highlighted,
  color,
  locale,
  label,
  className,
}: Props) => {
  const { rest, lit } = useMemo(() => {
    const set = new Set(highlighted);
    return {
      rest: PROVINCES.filter((p) => !set.has(p.id)),
      lit: PROVINCES.filter((p) => set.has(p.id)),
    };
  }, [highlighted]);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width={WIDTH}
      height={HEIGHT}
      className={className}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={LAND} stroke={BORDER} strokeWidth={1} strokeLinejoin="round">
        {rest.map((p) => (
          <path key={p.id} d={p.d} />
        ))}
      </g>
      {/* drawn last so a filled province's border sits on top of its neighbours */}
      <g fill={color} stroke={BORDER} strokeWidth={1} strokeLinejoin="round">
        {lit.map((p) => (
          <path key={p.id} d={p.d}>
            <title>{locale === 'en' ? p.en : p.th}</title>
          </path>
        ))}
      </g>
    </svg>
  );
};

export default memo(ThailandMap);
