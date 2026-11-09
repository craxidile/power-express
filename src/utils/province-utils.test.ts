import geo from '../data/thailand-provinces.json';
import names from '../data/province-names.json';
import {
  detectProvinceId,
  detectProvinceIds,
  PROVINCES,
  provinceById,
} from './province-utils';

// The 22 locations in the project table on 9 Nov 2026, exactly as the team typed them.
const REAL: [string, string, string][] = [
  ['นครปฐม, ประเทศไทย', 'Nakhon Pathom, Thailand', 'nakhon-pathom'],
  ['นครปฐม, ประเทศไทย', ' Nakhon Pathom, Thailand', 'nakhon-pathom'],
  ['สมุทรสาคร, ประเทศไทย', 'Samut Sakhon, Thailand', 'samut-sakhon'],
  ['สมุทรปราการ, ประเทศไทย', 'Samut Prakan, Thailand', 'samut-prakan'],
  ['กรุงเทพมหานคร, ประเทศไทย', 'Bangkok, Thailand', 'bangkok'],
  [
    'นครนครราชสีมา, ประเทศไทย',
    'Nakhon Ratchasima, Thailand',
    'nakhon-ratchasima',
  ],
  [
    '73/3 หมู่ที่ 2 ตำบลบางริ้น อำเภอเมืองระนอง จ.ระนอง 85000',
    '73/3 Moo 2, Bang Rin Subdistrict, Mueang Ranong District, Ranong 85000, Thailand',
    'ranong',
  ],
  [
    '37/1 หมู่ที่ 4 ถนนทางหลวงสาย 36 ตำบลทับมา อำเภอเมืองระยอง จ.ระยอง 21000',
    '37/1 Moo 4, Highway 36, Tambon Thap Ma, Amphoe Mueang Rayong, Rayong 21000',
    'rayong',
  ],
  [
    '39 หมู่ที่ 3 ตำบลหนองกวาง อำเภอโพธาราม จังหวัดราชบุรี 70120',
    '39 Moo 3, Nong Kwang Subdistrict, Photharam District, Ratchaburi Province 70120',
    'ratchaburi',
  ],
];

describe('detectProvinceId', () => {
  it.each(REAL)('reads the province from "%s"', (th, en, id) => {
    expect(detectProvinceId(th, en)).toBe(id);
  });

  it('finds the same 8 provinces the live map shows today', () => {
    const rows = REAL.map(([th, en]) => ({ location_th: th, location_en: en }));
    expect(detectProvinceIds(rows).sort()).toEqual(
      [
        'bangkok',
        'nakhon-pathom',
        'nakhon-ratchasima',
        'ranong',
        'ratchaburi',
        'rayong',
        'samut-prakan',
        'samut-sakhon',
      ].sort()
    );
  });

  it('picks up a brand-new province without any code change', () => {
    expect(
      detectProvinceId('99 หมู่ 1 ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50300', null)
    ).toBe('chiang-mai');
    expect(
      detectProvinceId('เชียงใหม่, ประเทศไทย', 'Chiang Mai, Thailand')
    ).toBe('chiang-mai');
    expect(
      detectProvinceId(null, '12 Moo 3, Mueang Phuket District, Phuket 83000')
    ).toBe('phuket');
    expect(detectProvinceId('ชลบุรี, ประเทศไทย', null)).toBe('chon-buri');
    expect(detectProvinceId('อ.ศรีราชา จ.ชลบุรี 20110', null)).toBe(
      'chon-buri'
    );
  });

  it('does not mistake a road name for the province', () => {
    // ถนนตากสิน contains "ตาก", but the explicit marker says Bangkok's neighbour is Nonthaburi
    expect(
      detectProvinceId('88 ถนนตากสิน ต.บางไผ่ อ.เมือง จ.นนทบุรี 11000', null)
    ).toBe('nonthaburi');
    // no marker at all: a short name inside a road name must NOT count
    expect(detectProvinceId('12 ถนนตากสิน', null)).toBeNull();
    // Bangkok in a road name, the real province after the marker
    expect(detectProvinceId('ถนนกรุงเทพ-นนท์ อ.บางกรวย จ.นนทบุรี', null)).toBe(
      'nonthaburi'
    );
  });

  it('keeps look-alike provinces apart', () => {
    expect(detectProvinceId('จ.ระนอง', null)).toBe('ranong');
    expect(detectProvinceId('จ.ระยอง', null)).toBe('rayong');
    expect(detectProvinceId('สมุทรสงคราม, ประเทศไทย', null)).toBe(
      'samut-songkhram'
    );
    expect(detectProvinceId(null, 'Samut Songkhram, Thailand')).toBe(
      'samut-songkhram'
    );
    expect(detectProvinceId(null, 'Nonthaburi, Thailand')).toBe('nonthaburi');
  });

  it('returns null rather than guessing', () => {
    expect(detectProvinceId('', '')).toBeNull();
    expect(detectProvinceId(null, null)).toBeNull();
    expect(detectProvinceId('ประเทศไทย', 'Thailand')).toBeNull();
    expect(
      detectProvinceId('โรงงาน A อาคาร B', 'Factory A, Building B')
    ).toBeNull();
  });

  it('accepts common alternative spellings', () => {
    expect(detectProvinceId('กทม.', null)).toBe('bangkok');
    expect(detectProvinceId('โคราช', null)).toBe('nakhon-ratchasima');
    expect(detectProvinceId(null, 'Chonburi, Thailand')).toBe('chon-buri');
    expect(detectProvinceId(null, 'Ayutthaya, Thailand')).toBe(
      'phra-nakhon-si-ayutthaya'
    );
  });
});

describe('province data', () => {
  it('has all 77 provinces, each drawn on the map and named in Thai and English', () => {
    expect(PROVINCES).toHaveLength(77);
    expect(geo.provinces).toHaveLength(77);
    const drawn = new Set(geo.provinces.map((p) => p.id));
    PROVINCES.forEach((p) => {
      expect(drawn.has(p.id)).toBe(true);
      expect(p.th).toMatch(/[ก-๙]/);
      expect(p.en.length).toBeGreaterThan(1);
      expect(provinceById(p.id)?.th).toBe(p.th);
    });
    expect(new Set(PROVINCES.map((p) => p.id)).size).toBe(77);
  });

  it('every drawn outline is real geometry', () => {
    geo.provinces.forEach((p) => {
      expect(p.d.startsWith('M')).toBe(true);
      expect(p.d.endsWith('z')).toBe(true);
      expect(p.d.length).toBeGreaterThan(40);
    });
    expect(names).toHaveLength(77);
  });
});
