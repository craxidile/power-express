// Pillar guide for factories plus the guides hub page. Inline links use [text](path)
// where path has no locale prefix (the renderer adds /th or /en).
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ควรตรวจสอบข้อกำหนดล่าสุดและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Confirm the current rules and consult a specialist before you decide.';

module.exports = [
  {
    slug: 'guide-factory-complete',
    path: 'guides/rooftop-solar-for-factories-complete-guide',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปสำหรับโรงงานในประเทศไทย: คู่มือฉบับสมบูรณ์ตั้งแต่บิลค่าไฟจนถึงเดินเครื่อง',
        description: 'คู่มือทีละขั้นสำหรับโรงงานที่จะติดโซลาร์รูฟท็อป ตั้งแต่ตรวจหลังคา อ่านบิลค่าไฟ เลือกรูปแบบการลงทุน ทำสัญญา ขออนุญาต ติดตั้ง ไปจนถึงดูแลระบบและรายงานคาร์บอน',
        intro: 'คู่มือนี้พาโรงงานเดินผ่านทุกขั้นตอนของการติดโซลาร์รูฟท็อป ตั้งแต่ตัดสินใจจนถึงเดินเครื่อง พร้อมลิงก์ไปยังบทความเจาะลึกในแต่ละหัวข้อ เหมาะสำหรับผู้จัดการโรงงาน ฝ่ายการเงิน และฝ่ายวิศวกรรมที่ต้องตัดสินใจร่วมกัน',
        sections: [
          { heading: 'ขั้นที่ 1: ตรวจว่าหลังคาเหมาะหรือไม่', body: ['เริ่มจากคัดกรองโครงสร้าง วัสดุ อายุ การบังแสง และกรรมสิทธิ์ ดูเช็กลิสต์ 8 ข้อใน [หลังคาโรงงานของคุณเหมาะกับโซลาร์หรือไม่](guides/is-my-factory-roof-suitable-for-solar)'] },
          { heading: 'ขั้นที่ 2: เตรียมบิลค่าไฟและทำความเข้าใจค่าไฟ', body: ['รวบรวมบิลย้อนหลังอย่างน้อย 12 เดือน และทำความเข้าใจองค์ประกอบของบิล อ่านเพิ่มเติมที่ [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained) และ [วิธีประเมินผลประหยัดเบื้องต้น](guides/how-to-estimate-factory-solar-savings)'] },
          { heading: 'ขั้นที่ 3: เลือกรูปแบบการลงทุน', body: ['เลือกระหว่าง PPA ซื้อระบบเอง หรือเช่า ดู [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease) และคู่มือ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'] },
          { heading: 'ขั้นที่ 4: รับรายงานประเมินและสำรวจหน้างาน', body: ['ผู้ให้บริการประเมินขนาดระบบและผลผลิตจากบิลและข้อมูลหลังคา แล้วนัดสำรวจหน้างานเพื่อตรวจโครงสร้าง ห้องไฟฟ้า และจุดเชื่อมต่อ คุณสามารถ [ขอรับรายงานประเมินฟรี](free-assessment) ได้ทันที'] },
          { heading: 'ขั้นที่ 5: เจรจาและลงนามสัญญา', body: ['ตรวจเงื่อนไขการบำรุงรักษา การรับประกันผลผลิต ประกันภัย การยกเลิกสัญญา และทางเลือกเมื่อครบสัญญา ให้ฝ่ายกฎหมายและการเงินร่วมตรวจสอบก่อนลงนาม'] },
          { heading: 'ขั้นที่ 6: ขออนุญาตและเชื่อมต่อการไฟฟ้า', body: ['เตรียมเอกสารและติดต่อหน่วยงานที่เกี่ยวข้อง ดูภาพรวมใน [ขั้นตอนขออนุญาตติดตั้งโซลาร์รูฟท็อป](guides/rooftop-solar-permits-overview)'] },
          { heading: 'ขั้นที่ 7: ติดตั้งและทดสอบเดินเครื่อง', body: ['งานติดตั้งมักประกอบด้วย งานโครงสร้างและติดตั้งแผง งานเดินสายและตู้ไฟ ติดตั้งอินเวอร์เตอร์และระบบติดตามผล การตรวจสอบความปลอดภัย และการทดสอบก่อนเริ่มจ่ายไฟ ระยะเวลาขึ้นกับขนาดระบบและความพร้อมของการอนุมัติ'] },
          { heading: 'ขั้นที่ 8: ดูแลระบบและติดตามผลผลิต', body: ['หลังเดินเครื่อง ต้องติดตามผลผลิตและบำรุงรักษาอย่างสม่ำเสมอ ดู [การดูแลระบบโซลาร์หลังติดตั้ง](guides/rooftop-solar-operations-and-maintenance)'] },
          { heading: 'ขั้นที่ 9: นำข้อมูลไปรายงานคาร์บอน', body: ['ใช้ข้อมูลไฟที่ผลิตเพื่อรายงานการปล่อยก๊าซเรือนกระจกให้ลูกค้า อ่าน [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting) และ [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar)'] },
          { heading: 'ใครควรอยู่ในทีมตัดสินใจ', body: [], bullets: ['ผู้จัดการโรงงานหรือฝ่ายวิศวกรรม: โหลดไฟฟ้าและหลังคา', 'ฝ่ายการเงิน: รูปแบบการลงทุนและผลต่องบการเงิน', 'ฝ่ายกฎหมาย: สัญญาและสัญญาเช่า', 'ฝ่ายความปลอดภัยและสิ่งแวดล้อม: งานบนที่สูงและการรายงานคาร์บอน', 'ผู้บริหาร: เป้าหมายพลังงานสะอาดของบริษัท'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ต้องเริ่มจากอะไร', a: 'เริ่มจากรวบรวมบิลค่าไฟย้อนหลัง 12 เดือน แล้วส่งให้เราเพื่อรับรายงานประเมินฟรีภายใน 48 ชั่วโมง' },
          { q: 'ใช้เวลานานแค่ไหนจากตัดสินใจจนเดินเครื่อง', a: 'ขึ้นกับขนาดระบบ การอนุมัติ และสัญญา ควรให้ผู้ให้บริการแจ้งไทม์ไลน์เป็นลายลักษณ์อักษรก่อนเริ่มโครงการ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar for Factories in Thailand: The Complete Guide from Bill to Commissioning',
        description: 'A step-by-step guide for factories installing rooftop solar: roof check, reading the bill, choosing the investment model, contract, permits, installation, operations and carbon reporting.',
        intro: 'This guide walks a factory through every stage of putting solar on its roof, from deciding to commissioning, with links to a deeper article on each topic. It is written for plant managers, finance and engineering teams who have to decide together.',
        sections: [
          { heading: 'Step 1: Check whether the roof is suitable', body: ['Screen the structure, material, age, shading and ownership first. See the 8-point list in [Is your factory roof suitable for solar?](guides/is-my-factory-roof-suitable-for-solar)'] },
          { heading: 'Step 2: Gather your bills and understand them', body: ['Collect at least 12 months of bills and understand what is in them. Read [What is the Ft charge?](guides/ft-electricity-tariff-explained) and [How to estimate savings](guides/how-to-estimate-factory-solar-savings).'] },
          { heading: 'Step 3: Choose the investment model', body: ['Choose between a PPA, buying or leasing. See [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease) and the [complete private PPA guide](guides/private-ppa-complete-guide).'] },
          { heading: 'Step 4: Get an assessment and a site survey', body: ['The provider estimates system size and output from your bills and roof data, then surveys the site for structure, electrical room and connection point. You can [request a free assessment](free-assessment) right away.'] },
          { heading: 'Step 5: Negotiate and sign the contract', body: ['Check maintenance, output guarantee, insurance, termination and end-of-term options. Have legal and finance review before signing.'] },
          { heading: 'Step 6: Permits and utility connection', body: ['Prepare documents and engage the relevant authorities. See the overview in [Rooftop solar permits in Thailand](guides/rooftop-solar-permits-overview).'] },
          { heading: 'Step 7: Installation and commissioning', body: ['Installation typically covers structure and panel mounting, cabling and switchgear, inverters and monitoring, safety inspection and pre-energisation testing. Duration depends on system size and how ready the approvals are.'] },
          { heading: 'Step 8: Operate and monitor', body: ['After commissioning, track output and maintain the system regularly. See [Operations and maintenance](guides/rooftop-solar-operations-and-maintenance).'] },
          { heading: 'Step 9: Use the data for carbon reporting', body: ['Use generation data to report greenhouse gas emissions to customers. Read [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting) and [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar).'] },
          { heading: 'Who should be in the decision team', body: [], bullets: ['plant manager or engineering: load and roof', 'finance: investment model and effect on the accounts', 'legal: contract and building lease', 'safety and environment: work at height and carbon reporting', 'management: the company’s clean-energy goals'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Where do I start?', a: 'Collect 12 months of electricity bills and send them to us for a free assessment within 48 hours.' },
          { q: 'How long from decision to commissioning?', a: 'It depends on system size, approvals and the contract. Ask your provider for a written timeline before starting.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guides-hub',
    path: 'guides',
    kind: 'info',
    text: {
      th: {
        title: 'คู่มือและบทความ: โซลาร์รูฟท็อปสำหรับโรงงานและธุรกิจ',
        description: 'รวมคู่มือและบทความเรื่องโซลาร์รูฟท็อป PPA สำหรับโรงงาน ได้แก่ สัญญา ค่าไฟ การขออนุญาต การบำรุงรักษา และการรายงานคาร์บอน',
        intro: 'บทความทั้งหมดเขียนโดยทีม Power Express เพื่อช่วยให้โรงงานและธุรกิจตัดสินใจเรื่องโซลาร์รูฟท็อปได้ด้วยข้อมูลที่ชัดเจน',
        sections: [],
        faq: [],
        cta: cta.th,
      },
      en: {
        title: 'Guides and Articles: Rooftop Solar for Factories and Businesses',
        description: 'Guides and articles on rooftop solar PPA for factories: contracts, electricity tariffs, permits, maintenance and carbon reporting.',
        intro: 'All articles are written by the Power Express team to help factories and businesses make rooftop solar decisions with clear information.',
        sections: [],
        faq: [],
        cta: cta.en,
      },
    },
  },
];
