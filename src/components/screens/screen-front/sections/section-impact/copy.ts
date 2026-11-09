// Copy for the Impact counter (brief A6). Kept in code, not in the CMS
// localization table, so the figures and their wording are reviewed together.
// Say "updated daily", never "live" or "real-time": the ticking is an estimate.

export type Locale = 'th' | 'en';

// Plain arrays, not Intl: building an Intl.DateTimeFormat for the Buddhist calendar
// costs tens of milliseconds on a slow phone, right when the page is loading.
const TH_MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const copy = {
  th: {
    chipLabel: 'ผลิตไฟฟ้าสะอาดแล้ว',
    chipLabelShort: 'ผลิตไฟฟ้าสะอาดแล้ว',
    chipCo2: 'ลด CO₂',
    chipTonnes: 'ตัน',
    chipAria: 'ไปที่ผลลัพธ์ของเรา',
    excerpt:
      'ตั้งแต่ปี 2566 ระบบโซลาร์รูฟท็อปของเราผลิตไฟฟ้าสะอาดให้ลูกค้าอย่างต่อเนื่องทุกวัน และทุกหน่วยที่ผลิตได้ช่วยลดการปล่อยก๊าซเรือนกระจกของประเทศ',
    kwh: 'ไฟฟ้าสะอาดที่ผลิตแล้ว · อัปเดตทุกวัน',
    co2: 'ตัน CO₂ ที่ลดการปล่อยได้',
    sites: 'โครงการที่เปิดดำเนินการแล้ว (COD)',
    mw: 'กำลังการผลิตที่เปิดดำเนินการแล้ว',
    mapAlt: (provinces: string) =>
      `แผนที่ประเทศไทย จังหวัดที่มีโครงการแสดงเป็นสีส้ม: ${provinces}`,
    mapCaption: (sites: number, provinces: number) =>
      `${sites} โครงการ ใน ${provinces} จังหวัด`,
    nowDay: ['ตอนนี้กำลังผลิตประมาณ ', ''] as [string, string],
    nowNight: 'ช่วงกลางคืน ระบบพักการผลิต',
    eqTitle: 'เทียบให้เห็นภาพ',
    eqNote: 'เติบโตขึ้นทุกวันตามไฟฟ้าที่ผลิตได้',
    trees: 'ต้น',
    treesText:
      'ต้นไม้ที่ต้องปลูกไว้หนึ่งปี จึงจะดูดซับ CO₂ ได้เท่ากับที่เราช่วยลด',
    treeKey: (unit: string, pct: string) =>
      `1 ต้น = ${unit} ต้นจริง · ต้นถัดไปโตแล้ว ${pct}%`,
    cars: 'คัน',
    carsText:
      'รถยนต์ที่จอดนิ่งได้ทั้งปี แล้วปล่อย CO₂ น้อยลงเท่ากับที่เราช่วยลด',
    carKey: (unit: string) => `1 คัน = ${unit} คันจริง`,
    forestAlt: 'ภาพป่าที่เติบโตตามจำนวนต้นไม้เทียบเท่า',
    lotAlt: 'ภาพลานจอดรถตามจำนวนรถยนต์เทียบเท่า',
    chartTitle: 'ไฟฟ้าสะอาดที่ผลิตได้ในแต่ละปี',
    chartUnit:
      'หน่วย: กิโลวัตต์-ชั่วโมง (kWh) · สีส้ม = ปีนี้ถึงปัจจุบัน เพิ่มขึ้นสด',
    chartCurrent: '(ถึงปัจจุบัน)',
    year: (y: number) => `${y + 543}`,
    footnote: (factor: number, tree: number, car: number, src: string, date: string) =>
      `CO₂ คำนวณจากค่าการปล่อยก๊าซของระบบไฟฟ้าไทย ${factor} kgCO₂/kWh (${src}) · ต้นไม้ 1 ต้นดูดซับ CO₂ ประมาณ ${tree} กก. ต่อปี · รถยนต์ 1 คันปล่อย CO₂ ประมาณ ${car} ตันต่อปี · ระหว่างวันตัวเลขเพิ่มขึ้นตามค่าประมาณการผลิตช่วงกลางวัน และปรับเป็นตัวเลขจริงทุกคืน · ข้อมูล ณ ${date}`,
    date: (iso: string) => {
      const [y, m, d] = iso.split('-').map(Number);
      return `${d} ${TH_MONTHS[m - 1]} ${y + 543}`;
    },
  },
  en: {
    chipLabel: 'Clean power generated',
    // phones: the long label plus the figure is wider than the chip can be
    chipLabelShort: 'Clean power',
    chipCo2: 'CO₂ avoided',
    chipTonnes: 't',
    chipAria: 'Go to our results',
    excerpt:
      "Since 2023 our rooftop systems have produced clean electricity for our customers every day, and every unit cuts Thailand's greenhouse-gas emissions.",
    kwh: 'clean electricity generated · updated daily',
    co2: 'tonnes of CO₂ avoided',
    sites: 'sites in operation (COD)',
    mw: 'capacity in operation',
    mapAlt: (provinces: string) =>
      `Map of Thailand; provinces with our sites are shown in orange: ${provinces}`,
    mapCaption: (sites: number, provinces: number) =>
      `${sites} sites in ${provinces} provinces`,
    nowDay: ['Producing about ', ' right now'] as [string, string],
    nowNight: 'Night: the systems are resting',
    eqTitle: 'What that means',
    eqNote: 'grows every day with the power we produce',
    trees: 'trees',
    treesText:
      'trees growing for a whole year would absorb the CO₂ we have avoided',
    treeKey: (unit: string, pct: string) =>
      `1 tree = ${unit} real trees · next tree ${pct}% grown`,
    cars: 'cars',
    carsText:
      'cars parked for a whole year would save as much CO₂ as we have avoided',
    carKey: (unit: string) => `1 car = ${unit} real cars`,
    forestAlt: 'A forest that grows with the tree equivalent',
    lotAlt: 'A car park filled with the car equivalent',
    chartTitle: 'Clean electricity generated each year',
    chartUnit:
      'kilowatt-hours (kWh) · orange = this year so far, counting live',
    chartCurrent: '(so far)',
    year: (y: number) => `${y}`,
    footnote: (factor: number, tree: number, car: number, src: string, date: string) =>
      `CO₂ uses Thailand's grid emission factor of ${factor} kgCO₂/kWh (${src}) · one tree absorbs about ${tree} kg of CO₂ a year · one car emits about ${car} t of CO₂ a year · during the day the figures rise on an estimate of daylight output and are reset to metered totals every night · data as of ${date}`,
    date: (iso: string) => {
      const [y, m, d] = iso.split('-').map(Number);
      return `${d} ${EN_MONTHS[m - 1]} ${y}`;
    },
  },
};

export const impactCopy = (locale: string) =>
  copy[locale === 'en' ? 'en' : 'th'];
