// Regenerates src/config/guides.json: keeps the hand-written pages and rebuilds the
// industry and area pages from the compact data below. Run: node scripts/gen-content-pages.js
// DRAFT copy: general educational content. It makes no savings, price or performance
// claims; the only project facts shown come from the live project records.
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'config', 'guides.json');
const articles = require('./articles');
const articleSlugs = new Set(articles.map((a) => a.slug));
const base = JSON.parse(fs.readFileSync(file, 'utf8')).filter(
  (g) => (g.kind === 'guide' || g.kind === 'info') && !articleSlugs.has(g.slug)
);

// -- industries: [slug, th name, en name, th load note, en load note, th check, en check]
const industries = [
  ['cold-storage-food', 'ห้องเย็นและโรงงานอาหาร', 'Cold Storage and Food Factories',
    'ห้องเย็นและสายการผลิตอาหารมักเดินเครื่องทำความเย็นต่อเนื่องทั้งวัน ทำให้มีไฟฟ้าใช้ตลอดช่วงที่แผงโซลาร์ผลิตไฟ',
    'Cold rooms and food lines usually run refrigeration all day, so there is steady demand while the panels are producing.',
    ['ภาระความเย็นช่วงกลางวันและช่วงฤดูร้อน', 'สภาพหลังคาและการรั่วซึม เพราะต้องรักษาอุณหภูมิในอาคาร', 'ความต่อเนื่องของไฟฟ้า ไม่ให้กระทบสินค้าในห้องเย็น'],
    ['daytime and summer refrigeration load', 'roof condition and leaks, since indoor temperature must be protected', 'power continuity so stored product is never put at risk']],
  ['plastics-packaging', 'โรงงานพลาสติกและบรรจุภัณฑ์', 'Plastics and Packaging Factories',
    'เครื่องฉีดและเครื่องอัดรีดใช้ไฟฟ้ามาก และหลายโรงงานเดินเครื่องหลายกะ จึงมีโอกาสใช้ไฟจากโซลาร์ได้ในช่วงกลางวัน',
    'Injection and extrusion machines draw a lot of power and many plants run several shifts, so a good share of daytime solar output can be used on site.',
    ['กราฟโหลดรายชั่วโมงของเครื่องจักรหลัก', 'พื้นที่หลังคาโรงงานและตำแหน่งเครื่องปรับอากาศ ท่อ และปล่องที่บังแสง', 'ข้อกำหนดของลูกค้าหรือแบรนด์ด้านพลังงานสะอาด'],
    ['hourly load profile of the main machines', 'roof area and shading from HVAC, ducting and stacks', 'customer or brand requirements on clean energy']],
  ['automotive', 'โรงงานยานยนต์และชิ้นส่วน', 'Automotive and Parts Factories',
    'ซัพพลายเออร์ยานยนต์จำนวนมากถูกผู้ซื้อรายใหญ่ขอให้รายงานและลดการปล่อยก๊าซเรือนกระจก ไฟจากโซลาร์ช่วยลดการปล่อยในขอบเขตที่ 2',
    'Many automotive suppliers are asked by large buyers to report and cut emissions; on-site solar reduces Scope 2 emissions.',
    ['หลังคาขนาดใหญ่และโครงสร้างที่รับน้ำหนักได้', 'รูปแบบการทำงานหลายกะ', 'ข้อมูลที่ต้องใช้ในการรายงานคาร์บอนต่อลูกค้า'],
    ['large roofs and load-bearing structure', 'multi-shift operating pattern', 'the data needed for carbon reporting to customers']],
  ['hospitals', 'โรงพยาบาล', 'Hospitals',
    'โรงพยาบาลใช้ไฟตลอด 24 ชั่วโมง โดยเฉพาะระบบปรับอากาศ จึงมีไฟฟ้าใช้ต่อเนื่องในช่วงกลางวัน',
    'Hospitals run around the clock, with heavy air-conditioning demand through the day.',
    ['ความปลอดภัยของงานติดตั้งบนหลังคาอาคารที่ใช้งานอยู่', 'การเชื่อมต่อกับระบบไฟสำรองและความต่อเนื่องของไฟฟ้า', 'ขั้นตอนอนุมัติและการจัดซื้อของหน่วยงาน'],
    ['safe installation on an occupied building', 'integration with backup power and supply continuity', 'approval and procurement steps of the organisation']],
  ['hotels', 'โรงแรมและรีสอร์ต', 'Hotels and Resorts',
    'โรงแรมมีภาระปรับอากาศและน้ำร้อนสูง และมีผู้เข้าพักตลอดวัน การใช้ไฟช่วงกลางวันจึงสม่ำเสมอ',
    'Hotels have high air-conditioning and hot-water loads and guests through the day, giving steady daytime consumption.',
    ['ลักษณะหลังคา (หลังคาเรียบหรือหลังคาทรง)', 'ผลกระทบด้านทัศนียภาพและเสียงระหว่างติดตั้ง', 'ช่วงฤดูท่องเที่ยวที่มีการใช้ไฟสูงสุด'],
    ['roof type (flat or pitched)', 'visual impact and noise during installation', 'high-season peaks in consumption']],
  ['warehouses-logistics', 'คลังสินค้าและโลจิสติกส์', 'Warehouses and Logistics',
    'คลังสินค้ามีหลังคาขนาดใหญ่และเรียบ เหมาะกับการติดตั้งแผง แม้การใช้ไฟอาจไม่สูงเท่าโรงงาน จึงต้องออกแบบขนาดระบบให้พอดีกับโหลด',
    'Warehouses offer large, flat roofs well suited to panels, though consumption can be lower than in factories, so system size must match the load.',
    ['โหลดจริงเทียบกับพื้นที่หลังคา', 'ระบบทำความเย็นหรือการชาร์จรถยก ที่เพิ่มการใช้ไฟช่วงกลางวัน', 'อายุสัญญาเช่าพื้นที่'],
    ['actual load against roof area', 'chillers or forklift charging that add daytime demand', 'remaining term of the site lease']],
  ['education', 'มหาวิทยาลัยและสถานศึกษา', 'Universities and Schools',
    'สถานศึกษามีอาคารจำนวนมากและใช้ไฟช่วงกลางวันเป็นหลัก ตรงกับช่วงที่แผงโซลาร์ผลิตไฟสูงสุด',
    'Educational sites have many buildings and mostly daytime use, which matches the hours of peak solar output.',
    ['การใช้ไฟช่วงปิดภาคเรียน', 'ข้อกำหนดการจัดซื้อจัดจ้างของสถาบัน', 'โครงสร้างหลังคาของอาคารเก่า'],
    ['consumption during term breaks', "the institution's procurement rules", 'roof structure of older buildings']],
];

// -- areas: [slug, th name, en name, kind, keywords to match project locations]
const areas = [
  ['chonburi', 'ชลบุรี', 'Chonburi', 'province', ['ชลบุรี', 'Chonburi', 'Chon Buri']],
  ['rayong', 'ระยอง', 'Rayong', 'province', ['ระยอง', 'Rayong']],
  ['samut-sakhon', 'สมุทรสาคร', 'Samut Sakhon', 'province', ['สมุทรสาคร', 'Samut Sakhon']],
  ['samut-prakan', 'สมุทรปราการ', 'Samut Prakan', 'province', ['สมุทรปราการ', 'Samut Prakan']],
  ['pathum-thani', 'ปทุมธานี', 'Pathum Thani', 'province', ['ปทุมธานี', 'Pathum Thani']],
  ['ayutthaya', 'พระนครศรีอยุธยา', 'Ayutthaya', 'province', ['อยุธยา', 'Ayutthaya']],
  ['chachoengsao', 'ฉะเชิงเทรา', 'Chachoengsao', 'province', ['ฉะเชิงเทรา', 'Chachoengsao']],
  ['nakhon-ratchasima', 'นครราชสีมา', 'Nakhon Ratchasima', 'province', ['นครราชสีมา', 'Nakhon Ratchasima', 'โคราช']],
  ['ratchaburi', 'ราชบุรี', 'Ratchaburi', 'province', ['ราชบุรี', 'Ratchaburi']],
  ['amata', 'นิคมอุตสาหกรรมอมตะ', 'Amata Industrial Estates', 'estate', ['อมตะ', 'Amata']],
  ['wha', 'นิคมอุตสาหกรรม WHA', 'WHA Industrial Estates', 'estate', ['WHA', 'ดับบลิวเอชเอ']],
  ['bangpoo', 'นิคมอุตสาหกรรมบางปู', 'Bangpoo Industrial Estate', 'estate', ['บางปู', 'Bangpoo', 'Bang Poo']],
];

const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };

const industryPage = ([slug, thN, enN, thLoad, enLoad, thCheck, enCheck]) => ({
  slug: `industry-${slug}`,
  path: `industries/${slug}`,
  kind: 'industry',
  text: {
    th: {
      title: `โซลาร์รูฟท็อปสำหรับ${thN}`,
      description: `โซลาร์รูฟท็อป PPA สำหรับ${thN}: ลักษณะการใช้ไฟที่เหมาะ สิ่งที่ต้องตรวจสอบก่อนติดตั้ง และวิธีขอรับรายงานประเมินฟรี`,
      intro: `${thLoad} หน้านี้สรุปสิ่งที่ควรพิจารณาก่อนติดตั้งโซลาร์รูฟท็อปแบบ PPA ซึ่งผู้ให้บริการลงทุนติดตั้งและดูแลระบบ โดยไม่ต้องลงทุนก้อนแรก`,
      sections: [
        { heading: 'ทำไมเหมาะกับการใช้โซลาร์', body: [thLoad] },
        { heading: 'สิ่งที่ควรตรวจสอบก่อนติดตั้ง', body: [], bullets: thCheck },
        { heading: 'ข้อมูลที่ใช้ประเมิน', body: [], bullets: ['บิลค่าไฟย้อนหลังอย่างน้อย 12 เดือน', 'ข้อมูลพื้นที่และโครงสร้างหลังคา', 'เอกสารกรรมสิทธิ์อาคารหรือสัญญาเช่า'] },
      ],
      faq: [
        { q: `โซลาร์รูฟท็อป PPA เหมาะกับ${thN}หรือไม่`, a: 'ขึ้นกับโหลดไฟฟ้า หลังคา และสัญญาของแต่ละแห่ง ส่งบิลค่าไฟให้เราเพื่อรับรายงานประเมินฟรีภายใน 48 ชั่วโมง' },
        { q: 'ต้องลงทุนเองหรือไม่', a: 'ในรูปแบบ PPA ผู้ให้บริการเป็นผู้ลงทุนติดตั้งระบบ ผู้ใช้ไฟไม่ต้องจ่ายเงินลงทุนก้อนแรก รายละเอียดขึ้นกับสัญญา' },
      ],
      cta: cta.th,
    },
    en: {
      title: `Rooftop Solar for ${enN}`,
      description: `Rooftop solar PPA for ${enN.toLowerCase()}: what makes the load a good fit, what to check before installing, and how to get a free assessment.`,
      intro: `${enLoad} This page covers what to consider before a rooftop solar PPA, where the provider funds and maintains the system so you need no upfront capital.`,
      sections: [
        { heading: 'Why it can suit solar', body: [enLoad] },
        { heading: 'What to check before installing', body: [], bullets: enCheck },
        { heading: 'What we need to assess your site', body: [], bullets: ['at least 12 months of electricity bills', 'roof area and structure details', 'proof of building ownership or the lease'] },
      ],
      faq: [
        { q: `Is a rooftop solar PPA right for ${enN.toLowerCase()}?`, a: 'It depends on each site’s load, roof and contract. Send us your bill and get a free assessment within 48 hours.' },
        { q: 'Do I have to invest?', a: 'Under a PPA the provider funds the installation, so there is no upfront capital. Details depend on the contract.' },
      ],
      cta: cta.en,
    },
  },
});

const areaPage = ([slug, thN, enN, kind, match]) => {
  const isEstate = kind === 'estate';
  return {
    slug: `area-${slug}`,
    path: `areas/${slug}`,
    kind: 'area',
    match,
    text: {
      th: {
        title: `โซลาร์รูฟท็อป ${thN}`,
        description: `บริการโซลาร์รูฟท็อป PPA สำหรับโรงงานและธุรกิจใน${isEstate ? '' : 'จังหวัด'}${thN} พร้อมตัวอย่างโครงการที่ติดตั้งแล้วและวิธีขอรับรายงานประเมินฟรี`,
        intro: `Power Express ให้บริการโซลาร์รูฟท็อปแบบ PPA สำหรับโรงงานและธุรกิจใน${isEstate ? '' : 'จังหวัด'}${thN} ผู้ให้บริการลงทุนติดตั้งและดูแลระบบ ลูกค้าจ่ายเฉพาะค่าไฟที่ใช้จริงตามสัญญา`,
        sections: [
          { heading: 'ขั้นตอนการเชื่อมต่อและอนุญาต', body: ['การติดตั้งต้องประสานกับการไฟฟ้าในพื้นที่ (กฟน. หรือ กฟภ. ตามที่ตั้งของโรงงาน) และหน่วยงานที่เกี่ยวข้อง ทีมงานดูแลขั้นตอนเหล่านี้ให้ตามขอบเขตที่ตกลงในสัญญา'] },
          { heading: 'สิ่งที่ต้องเตรียมเพื่อประเมิน', body: [], bullets: ['บิลค่าไฟย้อนหลังอย่างน้อย 12 เดือน', 'ข้อมูลพื้นที่และโครงสร้างหลังคา', 'เอกสารกรรมสิทธิ์อาคารหรือสัญญาเช่า'] },
        ],
        faq: [
          { q: `รับติดตั้งในพื้นที่${thN}หรือไม่`, a: `รับ ส่งบิลค่าไฟและที่ตั้งของโรงงานให้เรา ทีมงานจะแจ้งผลการประเมินภายใน 48 ชั่วโมง` },
        ],
        cta: cta.th,
      },
      en: {
        title: `Rooftop Solar in ${enN}`,
        description: `Rooftop solar PPA for factories and businesses in ${enN}, with examples of installed projects and how to get a free assessment.`,
        intro: `Power Express provides rooftop solar PPA for factories and businesses in ${enN}. We fund, install and maintain the system and you pay only for the electricity it produces under the contract.`,
        sections: [
          { heading: 'Grid connection and permits', body: ['Installation is coordinated with the local utility (MEA or PEA, depending on the site) and the relevant authorities. Our team handles these steps within the scope agreed in the contract.'] },
          { heading: 'What to prepare for an assessment', body: [], bullets: ['at least 12 months of electricity bills', 'roof area and structure details', 'proof of building ownership or the lease'] },
        ],
        faq: [
          { q: `Do you install in ${enN}?`, a: 'Yes. Send your bill and site location and we will report back within 48 hours.' },
        ],
        cta: cta.en,
      },
    },
  };
};

const infoPages = [
  {
    slug: 'faq',
    path: 'faq',
    kind: 'info',
    text: {
      th: {
        title: 'คำถามที่พบบ่อยเกี่ยวกับโซลาร์รูฟท็อป PPA',
        description: 'คำตอบสั้น ๆ สำหรับคำถามที่พบบ่อยเกี่ยวกับโซลาร์รูฟท็อป PPA ของ Power Express',
        intro: 'รวมคำถามที่โรงงานและธุรกิจถามบ่อยก่อนตัดสินใจติดตั้งโซลาร์รูฟท็อปแบบ PPA',
        sections: [],
        faq: [
          { q: 'Solar PPA คืออะไร', a: 'ผู้ให้บริการลงทุนติดตั้งและดูแลระบบโซลาร์รูฟท็อปบนหลังคาของคุณ และคุณจ่ายเฉพาะค่าไฟที่ใช้จริงตามอัตราที่ตกลงในสัญญา' },
          { q: 'ต้องลงทุนก้อนแรกหรือไม่', a: 'ในรูปแบบ PPA ผู้ให้บริการเป็นผู้ลงทุนติดตั้งระบบ ผู้ใช้ไฟไม่ต้องจ่ายเงินลงทุนก้อนแรก' },
          { q: 'ใครดูแลระบบหลังติดตั้ง', a: 'ผู้ให้บริการดูแลและบำรุงรักษาระบบตลอดอายุสัญญา ตามขอบเขตที่ระบุในสัญญา' },
          { q: 'ต้องเตรียมอะไรเพื่อขอประเมิน', a: 'บิลค่าไฟย้อนหลังอย่างน้อย 12 เดือน ข้อมูลหลังคา และเอกสารกรรมสิทธิ์หรือสัญญาเช่า' },
          { q: 'ใช้เวลาประเมินนานเท่าไร', a: 'เรามุ่งส่งรายงานประเมินเบื้องต้นภายใน 48 ชั่วโมงทำการหลังได้รับข้อมูล' },
          { q: 'ติดต่อได้อย่างไร', a: 'โทร 082-096-6595 หรืออีเมล admin@powerexpress1980.com หรือกรอกแบบฟอร์มประเมินฟรีบนเว็บไซต์' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar PPA: Frequently Asked Questions',
        description: 'Short answers to the questions factories and businesses ask most about rooftop solar PPA with Power Express.',
        intro: 'The questions factories and businesses ask most before choosing a rooftop solar PPA.',
        sections: [],
        faq: [
          { q: 'What is a solar PPA?', a: 'A provider funds, installs and maintains a rooftop solar system on your building and you pay only for the electricity it produces at the rate agreed in the contract.' },
          { q: 'Is there an upfront cost?', a: 'Under a PPA the provider funds the installation, so there is no upfront capital from you.' },
          { q: 'Who maintains the system?', a: 'The provider operates and maintains it for the contract term, within the scope set out in the contract.' },
          { q: 'What do I need for an assessment?', a: 'At least 12 months of electricity bills, roof details, and proof of ownership or the lease.' },
          { q: 'How long does an assessment take?', a: 'We aim to send a preliminary assessment within 48 business hours of receiving your information.' },
          { q: 'How do I contact you?', a: 'Call 082-096-6595, email admin@powerexpress1980.com, or use the free assessment form on this site.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'government',
    path: 'government',
    kind: 'info',
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปสำหรับหน่วยงานรัฐ มหาวิทยาลัย และรัฐวิสาหกิจ',
        description: 'ข้อมูลสำหรับหน่วยงานภาครัฐที่สนใจโซลาร์รูฟท็อป: รูปแบบสัญญา การประเมินเบื้องต้นฟรี และเอกสารที่ขอได้',
        intro: 'หน่วยงานภาครัฐ มหาวิทยาลัย และรัฐวิสาหกิจมีขั้นตอนจัดซื้อจัดจ้างเฉพาะ เราพร้อมให้ข้อมูลประกอบการพิจารณาก่อนเริ่มกระบวนการ',
        sections: [
          { heading: 'รูปแบบสัญญาที่พิจารณาได้', body: ['รูปแบบที่ใช้กันทั่วไป ได้แก่ สัญญาซื้อขายไฟฟ้า (PPA) การจัดซื้อระบบเอง และการเช่า ความเหมาะสมขึ้นกับกฎระเบียบและงบประมาณของแต่ละหน่วยงาน'] },
          { heading: 'การประเมินเบื้องต้นฟรี', body: ['ส่งบิลค่าไฟและข้อมูลอาคาร เพื่อรับรายงานประเมินขนาดระบบเบื้องต้นไว้ใช้ประกอบการจัดทำเอกสารภายใน'] },
          { heading: 'เอกสารที่ขอได้', body: ['เอกสารบริษัทและเอกสารประกอบการเสนอราคา สามารถขอได้โดยติดต่อทีมงาน'] },
        ],
        faq: [
          { q: 'หน่วยงานรัฐทำสัญญา PPA ได้หรือไม่', a: 'ขึ้นกับประเภทหน่วยงานและกฎระเบียบที่เกี่ยวข้อง ควรตรวจสอบกับฝ่ายกฎหมายและพัสดุของหน่วยงานก่อน เราช่วยจัดเตรียมข้อมูลประกอบได้' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar for Government, Universities and State Enterprises',
        description: 'Information for public-sector organisations considering rooftop solar: contract options, a free preliminary assessment and documents on request.',
        intro: 'Government bodies, universities and state enterprises follow specific procurement rules. We can provide information to support your evaluation before a process starts.',
        sections: [
          { heading: 'Contract structures to consider', body: ['Common options are a power purchase agreement (PPA), buying the system, or leasing. The right fit depends on each organisation’s rules and budget.'] },
          { heading: 'Free preliminary assessment', body: ['Send your electricity bill and building details to receive a preliminary system-size estimate for your internal paperwork.'] },
          { heading: 'Documents on request', body: ['Company documents and bid-support documents are available on request from our team.'] },
        ],
        faq: [
          { q: 'Can a public body sign a PPA?', a: 'It depends on the type of body and the rules that apply. Check with your legal and procurement teams first; we can help prepare supporting information.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'cooling-as-a-service',
    path: 'cooling-as-a-service',
    kind: 'info',
    text: {
      th: {
        title: 'ระบบทำความเย็นประหยัดพลังงาน (Cooling as a Service)',
        description: 'ลดค่าไฟระบบทำความเย็นด้วยชิลเลอร์ประสิทธิภาพสูง ในรูปแบบแบ่งปันผลประหยัด และใช้ร่วมกับโซลาร์รูฟท็อปได้',
        intro: 'ระบบทำความเย็นเป็นหนึ่งในภาระไฟฟ้าหลักของอาคารและโรงงาน การปรับปรุงชิลเลอร์ให้มีประสิทธิภาพสูงขึ้นสามารถลดการใช้ไฟได้ และใช้ร่วมกับโซลาร์รูฟท็อปได้',
        sections: [
          { heading: 'แนวคิด', body: ['เปลี่ยนหรือปรับปรุงระบบทำความเย็นให้ประสิทธิภาพสูงขึ้น โดยแบ่งปันผลประหยัดไฟฟ้าตามที่ตกลงในสัญญา ผลที่ได้ขึ้นกับระบบเดิมและการใช้งานจริงของแต่ละอาคาร'] },
          { heading: 'ข้อมูลที่ใช้ประเมิน', body: [], bullets: ['ขนาดและอายุของชิลเลอร์เดิม', 'ชั่วโมงเดินเครื่องและภาระความเย็น', 'บิลค่าไฟย้อนหลัง'] },
        ],
        faq: [
          { q: 'ใช้ร่วมกับโซลาร์รูฟท็อปได้หรือไม่', a: 'ได้ ภาระความเย็นช่วงกลางวันเป็นโหลดที่เหมาะกับการใช้ไฟจากโซลาร์ ส่งบิลและข้อมูลชิลเลอร์เพื่อรับการประเมินร่วม' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Cooling as a Service: Energy-Efficient Chiller Systems',
        description: 'Cut cooling electricity with high-efficiency chillers under a shared-savings model, and combine it with rooftop solar.',
        intro: 'Cooling is one of the largest electrical loads in buildings and factories. Upgrading to high-efficiency chillers can reduce consumption, and it combines well with rooftop solar.',
        sections: [
          { heading: 'The idea', body: ['Replace or upgrade the cooling plant for higher efficiency and share the electricity savings as agreed in the contract. Results depend on the existing plant and actual use at each site.'] },
          { heading: 'What we need to assess', body: [], bullets: ['size and age of existing chillers', 'operating hours and cooling load', 'recent electricity bills'] },
        ],
        faq: [
          { q: 'Can it be combined with rooftop solar?', a: 'Yes. Daytime cooling load suits solar output well. Send your bill and chiller details for a combined assessment.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'privacy',
    path: 'privacy',
    kind: 'info',
    text: {
      th: {
        title: 'นโยบายความเป็นส่วนตัวและคุกกี้',
        description: 'นโยบายการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลและคุกกี้ของ บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
        intro: 'บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด ("เรา") เป็นผู้ควบคุมข้อมูลส่วนบุคคลตามนโยบายนี้ ที่อยู่: เลขที่ 444 ชั้น 11 อาคารเอ็ม บี เค ทาวเวอร์ ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330 อีเมล admin@powerexpress1980.com โทร 082-096-6595',
        sections: [
          { heading: 'เราเก็บข้อมูลอะไรบ้าง', body: ['เมื่อคุณส่งแบบฟอร์มประเมินฟรี เราเก็บข้อมูลที่คุณกรอก ได้แก่ ชื่อ ตำแหน่ง บริษัท เบอร์โทร LINE ID อีเมล ช่วงค่าไฟต่อเดือน จังหวัด ข้อมูลอาคารและการใช้ไฟ หมายเหตุ และไฟล์บิลค่าไฟที่คุณแนบ', 'เมื่อคุณเข้าเว็บไซต์ เราเก็บข้อมูลแหล่งที่มา (เช่น UTM และตัวระบุโฆษณา) ไว้ในหน่วยความจำของเบราว์เซอร์ตลอดการเยี่ยมชม และเก็บข้อมูลการใช้งานผ่านเครื่องมือวิเคราะห์ เมื่อคุณยินยอมเท่านั้น', 'โปรดอย่าแนบบัตรประชาชนหรือเอกสารที่มีข้อมูลอ่อนไหว (เช่น ศาสนา สุขภาพ) เราไม่ต้องการข้อมูลเหล่านี้ หากเผลอส่งมา เราจะลบออก'] },
          { heading: 'วัตถุประสงค์และฐานทางกฎหมาย', body: [], bullets: ['ติดต่อกลับและจัดทำรายงานประเมินที่คุณร้องขอ (ฐาน: การดำเนินการตามคำขอของคุณก่อนเข้าทำสัญญา)', 'ติดตามและเสนอบริการที่เกี่ยวข้องกับคำขอของคุณ (ฐาน: ประโยชน์โดยชอบด้วยกฎหมายของเรา และจะหยุดเมื่อคุณคัดค้าน)', 'วิเคราะห์การใช้งานและประสิทธิภาพของเว็บไซต์และการโฆษณา (ฐาน: ความยินยอมของคุณผ่านแบนเนอร์คุกกี้)', 'ปฏิบัติตามกฎหมายและป้องกันการใช้งานเว็บไซต์ในทางมิชอบ (ฐาน: หน้าที่ตามกฎหมายและประโยชน์โดยชอบด้วยกฎหมาย)'] },
          { heading: 'การให้ข้อมูลเป็นความสมัครใจ', body: ['คุณไม่จำเป็นต้องส่งข้อมูลให้เรา แต่หากไม่ให้ข้อมูลในช่องที่จำเป็น เราจะไม่สามารถจัดทำรายงานประเมินหรือติดต่อกลับได้'] },
          { heading: 'คุกกี้และเทคโนโลยีที่คล้ายกัน', body: ['เราใช้ตัวเก็บข้อมูลในเบราว์เซอร์ดังนี้'], bullets: ['ที่จำเป็นต่อการทำงาน: บันทึกการเลือกคุกกี้ของคุณ (pex_cookie_consent) แคชข้อมูลหน้าเว็บเพื่อความเร็ว (pe-api:*) และข้อมูลแหล่งที่มาตลอดการเยี่ยมชม (pex_attribution) ซึ่งไม่ได้ส่งออกไปยังบุคคลที่สามเอง', 'วิเคราะห์ (Google Analytics): ตั้งค่าเป็นปฏิเสธไว้ก่อน จะเก็บเมื่อคุณกด "ยอมรับทั้งหมด" เท่านั้น โดยเครื่องมืออาจรับสัญญาณที่ไม่ใช้คุกกี้และไม่ระบุตัวตนเพื่อการวัดผลเบื้องต้น', 'โฆษณา (เช่น Google Ads, Meta, LinkedIn): จะทำงานเมื่อมีการตั้งค่าและคุณยอมรับเท่านั้น', 'คุณถอนความยินยอมได้ทุกเมื่อโดยล้างข้อมูลเว็บไซต์ในเบราว์เซอร์แล้วเลือกใหม่ที่แบนเนอร์ หรือแจ้งเราทางอีเมล'] },
          { heading: 'เราเปิดเผยข้อมูลให้ใคร', body: ['เราเปิดเผยข้อมูลเท่าที่จำเป็นให้ผู้ให้บริการที่ประมวลผลแทนเรา ได้แก่ ผู้ให้บริการที่เก็บข้อมูลและโครงสร้างพื้นฐานคลาวด์ ผู้ให้บริการระบบส่งอีเมล และผู้ให้บริการระบบวิเคราะห์ โดยกำหนดให้รักษาความลับและใช้ข้อมูลเฉพาะตามคำสั่งของเรา เราไม่ขายข้อมูลส่วนบุคคลของคุณ และอาจเปิดเผยตามคำสั่งที่ชอบด้วยกฎหมายของหน่วยงานรัฐ'] },
          { heading: 'การส่งข้อมูลไปต่างประเทศ', body: ['ผู้ให้บริการบางรายอาจเก็บหรือประมวลผลข้อมูลบนเซิร์ฟเวอร์นอกประเทศไทย เมื่อมีการส่งข้อมูลไปต่างประเทศ เราจะดูแลให้ประเทศปลายทางหรือผู้รับมีมาตรฐานคุ้มครองข้อมูลที่เพียงพอ หรือใช้มาตรการคุ้มครองที่เหมาะสมตามที่ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 กำหนด'] },
          { heading: 'ระยะเวลาเก็บรักษา', body: [], bullets: ['ข้อมูลที่ส่งผ่านแบบฟอร์มประเมิน: ไม่เกิน 24 เดือนนับจากการติดต่อครั้งล่าสุด เว้นแต่ได้ทำสัญญากับเรา ซึ่งจะเก็บตามอายุสัญญาและระยะเวลาที่กฎหมายกำหนด', 'ข้อมูลการใช้งานเว็บไซต์ในระบบวิเคราะห์: ตามระยะเวลาที่ตั้งค่าในเครื่องมือ ซึ่งเรากำหนดไม่เกิน 14 เดือน', 'เมื่อพ้นระยะเวลา เราจะลบหรือทำให้ข้อมูลไม่สามารถระบุตัวตนได้'] },
          { heading: 'การรักษาความมั่นคงปลอดภัย', body: ['เราใช้การเข้ารหัสระหว่างส่งข้อมูล จำกัดการเข้าถึงเฉพาะผู้ที่จำเป็น และให้ผู้ให้บริการที่ประมวลผลแทนเรามีมาตรการปกป้องข้อมูลที่เหมาะสม หากเกิดเหตุละเมิดข้อมูลส่วนบุคคลที่มีความเสี่ยงต่อสิทธิและเสรีภาพของคุณ เราจะแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลภายใน 72 ชั่วโมงนับแต่ทราบเหตุ และแจ้งคุณโดยไม่ชักช้าหากมีความเสี่ยงสูง'] },
          { heading: 'สิทธิของคุณ', body: ['คุณมีสิทธิขอเข้าถึงและขอรับสำเนา แก้ไข ลบหรือทำให้ไม่สามารถระบุตัวตน ระงับการใช้ คัดค้านการประมวลผล ขอให้โอนย้ายข้อมูล และถอนความยินยอมได้ทุกเมื่อ โดยการถอนไม่กระทบการประมวลผลที่ทำไปแล้ว ติดต่อ admin@powerexpress1980.com เราจะตอบภายใน 30 วันนับแต่ได้รับคำขอที่ครบถ้วน หากเห็นว่าเราไม่ปฏิบัติตามกฎหมาย คุณมีสิทธิร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPC)'] },
          { heading: 'ข้อมูลของเด็ก', body: ['เว็บไซต์นี้ให้บริการแก่ธุรกิจ และไม่ได้มุ่งเก็บข้อมูลจากผู้เยาว์ หากเราพบว่าเก็บข้อมูลของผู้เยาว์โดยไม่ได้รับความยินยอมของผู้ปกครอง เราจะลบข้อมูลนั้น'] },
          { heading: 'การแก้ไขนโยบาย', body: ['เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยแสดงวันที่ปรับปรุงล่าสุดไว้ที่หน้านี้ ปรับปรุงล่าสุด: 6 พฤศจิกายน 2569'] },
        ],
        faq: [],
        cta: cta.th,
      },
      en: {
        title: 'Privacy and Cookie Policy',
        description: 'How Powerexpress1980 Company Limited collects, uses and discloses personal data and cookies under the Thai Personal Data Protection Act B.E. 2562.',
        intro: 'Powerexpress1980 Company Limited ("we") is the data controller under this policy. Address: 444, 11th Floor, MBK Tower, Phaya Thai Road, Wang Mai, Pathum Wan, Bangkok 10330. Email: admin@powerexpress1980.com. Phone: 082-096-6595.',
        sections: [
          { heading: 'What we collect', body: ['When you submit the free assessment form we collect what you enter: name, position, company, phone, LINE ID, email, monthly bill range, province, building and usage details, notes and any electricity bill you attach.', 'When you visit, campaign information (such as UTM parameters and ad identifiers) is kept in your browser memory for the visit, and usage data is collected through an analytics tool only if you consent.', 'Please do not attach ID cards or documents containing sensitive data (such as religion or health). We do not need them, and will delete them if sent by mistake.'] },
          { heading: 'Purposes and legal bases', body: [], bullets: ['To contact you and prepare the assessment you asked for (basis: steps at your request before entering a contract)', 'To follow up and offer services related to your request (basis: our legitimate interests; we stop if you object)', 'To analyse site and advertising performance (basis: your consent through the cookie banner)', 'To comply with the law and prevent misuse of the site (basis: legal obligation and legitimate interests)'] },
          { heading: 'Providing data is voluntary', body: ['You are not required to give us data, but if you leave out required fields we cannot prepare your assessment or contact you.'] },
          { heading: 'Cookies and similar technologies', body: ['We use the following browser storage:'], bullets: ['Necessary: your cookie choice (pex_cookie_consent), a page-data cache for speed (pe-api:*), and campaign information for the visit (pex_attribution). None of these is sent to third parties by itself.', 'Analytics (Google Analytics): set to denied by default and used only when you press "Accept all". The tool may receive cookieless, non-identifying signals for basic measurement.', 'Advertising (for example Google Ads, Meta, LinkedIn): runs only when configured and you accept.', 'You can withdraw consent at any time by clearing the site data in your browser and choosing again on the banner, or by emailing us.'] },
          { heading: 'Who we share data with', body: ['We share data only as needed with service providers who process it for us: cloud data-storage and infrastructure providers, email-delivery providers and analytics providers, who must keep it confidential and use it only on our instructions. We do not sell your personal data, and may disclose it under a lawful order of a government authority.'] },
          { heading: 'Transfers abroad', body: ['Some providers may store or process data on servers outside Thailand. Where data is transferred abroad, we make sure the destination or recipient has adequate data-protection standards, or we use appropriate safeguards as the Personal Data Protection Act B.E. 2562 requires.'] },
          { heading: 'How long we keep data', body: [], bullets: ['Assessment-form data: no more than 24 months after our last contact, unless you contract with us, in which case for the contract term and the period the law requires', 'Site-usage data in the analytics tool: the period set in the tool, which we set to no more than 14 months', 'After that period we delete the data or make it non-identifiable'] },
          { heading: 'Security', body: ['We use encryption in transit, limit access to those who need it, and require processors to apply suitable safeguards. If a personal-data breach is likely to put your rights and freedoms at risk, we will notify the Personal Data Protection Committee Office within 72 hours of becoming aware, and tell you without undue delay if the risk is high.'] },
          { heading: 'Your rights', body: ['You may request access and a copy, correction, deletion or de-identification, restriction, objection, data portability, and withdraw consent at any time (withdrawal does not affect processing already done). Email admin@powerexpress1980.com and we will reply within 30 days of receiving a complete request. If you believe we are not complying with the law, you may complain to the Personal Data Protection Committee (PDPC).'] },
          { heading: 'Children', body: ['This site serves businesses and is not aimed at collecting data from minors. If we find we hold a minor\'s data without parental consent, we will delete it.'] },
          { heading: 'Changes to this policy', body: ['We may update this policy from time to time and show the last-updated date on this page. Last updated: 6 November 2026.'] },
        ],
        faq: [],
        cta: cta.en,
      },
    },
  },
];

const pages = [
  ...base.filter((g) => g.slug !== 'privacy'),
  ...infoPages,
  ...articles,
  ...industries.map(industryPage),
  ...areas.map(areaPage),
];
// keep only one copy of info pages that already existed in base
const seen = new Set();
const unique = pages.filter((g) => (seen.has(g.slug) ? false : (seen.add(g.slug), true)));
fs.writeFileSync(file, JSON.stringify(unique, null, 2) + '\n');
console.log(`gen-content-pages: ${unique.length} pages`);
