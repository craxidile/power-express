// Long-form guides for the knowledge hub (/th/guides/...). Used by gen-content-pages.js.
// General educational content: no savings percentages, prices or performance promises.
// Regulatory points are written as an overview and tell readers to confirm current rules.
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ควรตรวจสอบข้อกำหนดล่าสุดและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Confirm the current rules and consult a specialist before you decide.';

module.exports = [
  ...require('./articles2'),
  ...require('./articles3'),
  ...require('./articles4'),
  ...require('./articles5'),
  ...require('./articles6'),
  ...require('./articles7'),
  {
    slug: 'guide-private-ppa',
    path: 'guides/private-ppa-complete-guide',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'Private PPA คืออะไร: คู่มือฉบับสมบูรณ์สำหรับโรงงาน',
        description: 'อธิบาย Private PPA ของโซลาร์รูฟท็อป: ใครทำอะไร ราคาไฟกำหนดอย่างไร อายุสัญญา เงื่อนไขที่ต้องอ่านก่อนเซ็น และคำถามที่ควรถามผู้ให้บริการ',
        intro: 'Private PPA (สัญญาซื้อขายไฟฟ้าระหว่างเอกชน) คือสัญญาที่ผู้ให้บริการลงทุนติดตั้งและเป็นเจ้าของระบบโซลาร์รูฟท็อปบนหลังคาของคุณ แล้วขายไฟฟ้าที่ผลิตได้ให้คุณตามอัตราที่ตกลงกัน คู่มือนี้อธิบายโครงสร้างสัญญาและเรื่องที่โรงงานควรตรวจสอบก่อนเซ็น',
        sections: [
          { heading: 'Private PPA ทำงานอย่างไร', body: ['ผู้ให้บริการ (ผู้ขายไฟ) ออกแบบ ติดตั้ง เป็นเจ้าของ และบำรุงรักษาระบบ ส่วนโรงงาน (ผู้ซื้อไฟ) ให้ใช้พื้นที่หลังคาและซื้อไฟที่ผลิตได้ตามอัตราต่อหน่วยในสัญญา ไฟส่วนที่ระบบผลิตไม่พอยังซื้อจากการไฟฟ้าตามปกติ', 'โรงงานไม่ต้องจ่ายเงินลงทุนก้อนแรก เพราะผู้ให้บริการเป็นผู้ลงทุน'] },
          { heading: 'ราคาไฟตามสัญญากำหนดอย่างไร', body: ['อัตราค่าไฟต่อหน่วยในสัญญาแต่ละฉบับต่างกัน อาจกำหนดคงที่ ปรับขึ้นตามอัตราที่ตกลง หรืออ้างอิงอัตราค่าไฟของการไฟฟ้า ปัจจัยที่มีผล ได้แก่ ขนาดระบบ ลักษณะการใช้ไฟ สภาพหลังคา อายุสัญญา และความเสี่ยงด้านเครดิตของผู้ซื้อ', 'เพราะแต่ละหน้างานต่างกัน เราจึงไม่ประกาศตัวเลขส่วนลดตายตัว แต่จัดทำรายงานประเมินจากบิลค่าไฟจริงของคุณ'] },
          { heading: 'อายุสัญญาและเมื่อสัญญาสิ้นสุด', body: ['สัญญา PPA โดยทั่วไปมีอายุหลายปีถึงมากกว่าสิบปี เพื่อให้ผู้ให้บริการคืนทุนการลงทุน ควรกำหนดให้ชัดว่าเมื่อครบสัญญาจะเลือกทางใดได้บ้าง เช่น ต่อสัญญา ซื้อระบบต่อตามมูลค่าที่ตกลง หรือให้ผู้ให้บริการรื้อถอนระบบ'] },
          { heading: 'เงื่อนไขที่ต้องอ่านก่อนเซ็น', body: [], bullets: ['ใครรับผิดชอบการบำรุงรักษา ซ่อม และเปลี่ยนอุปกรณ์ (เช่น อินเวอร์เตอร์)', 'การรับประกันผลผลิตของระบบ และสิ่งที่เกิดขึ้นหากผลิตได้ต่ำกว่าที่ระบุ', 'ประกันภัยของระบบและความรับผิดต่อความเสียหายของหลังคา', 'สิทธิ์ของผู้ให้บริการในการเข้าพื้นที่เพื่อซ่อมบำรุง', 'เงื่อนไขหากโรงงานย้าย ขาย หรือหยุดดำเนินการ', 'ค่าปรับและเงื่อนไขการยกเลิกสัญญาก่อนกำหนด', 'ผลต่อสัญญาเช่าอาคาร หากโรงงานไม่ได้เป็นเจ้าของ'] },
          { heading: 'เหมาะกับโรงงานแบบไหน', body: ['โรงงานที่ใช้ไฟช่วงกลางวันเป็นหลัก มีหลังคารับน้ำหนักได้ ไม่ถูกบังแสงมาก และเป็นเจ้าของอาคารหรือมีสัญญาเช่ายาวพอ มักเหมาะกับ PPA มากที่สุด'] },
          { heading: 'คำถามที่ควรถามผู้ให้บริการทุกราย', body: [], bullets: ['มีโครงการที่ดำเนินการอยู่จริงกี่แห่ง และขอดูผลการผลิตจริงได้หรือไม่', 'ใช้แผงและอินเวอร์เตอร์ยี่ห้อและระดับใด', 'ใครเป็นผู้ติดตั้งและดูแลหน้างานหลังติดตั้ง', 'ขอตัวอย่างสัญญาและเงื่อนไขทั้งหมดได้หรือไม่'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'Private PPA ต่างจากการซื้อระบบเองอย่างไร', a: 'ใน PPA ผู้ให้บริการลงทุนและเป็นเจ้าของระบบ โรงงานจ่ายเฉพาะค่าไฟที่ผลิตได้ตามสัญญา ส่วนการซื้อระบบเอง โรงงานลงทุนเองและเป็นเจ้าของระบบ' },
          { q: 'ใครจ่ายค่าบำรุงรักษา', a: 'ตามที่ระบุในสัญญา โดยปกติผู้ให้บริการดูแลและรับผิดชอบการบำรุงรักษาระบบตลอดอายุสัญญา' },
          { q: 'จะรู้ได้อย่างไรว่าคุ้มหรือไม่', a: 'ต้องประเมินจากบิลค่าไฟและหลังคาจริง ส่งบิลให้เราเพื่อรับรายงานประเมินฟรีภายใน 48 ชั่วโมง' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Private PPA Explained: A Complete Guide for Thai Factories',
        description: 'How a private rooftop solar PPA works: who does what, how the power price is set, contract term, terms to read before signing, and questions to ask any provider.',
        intro: 'A private PPA (power purchase agreement) is a contract in which a provider funds, installs and owns a rooftop solar system on your building and sells you the electricity it generates at an agreed rate. This guide explains the structure and what a factory should check before signing.',
        sections: [
          { heading: 'How a private PPA works', body: ['The provider (seller) designs, installs, owns and maintains the system. The factory (buyer) provides roof space and buys the power produced at the per-unit rate in the contract. Whatever the system cannot cover is still bought from the grid.', 'The factory pays no upfront capital because the provider funds the system.'] },
          { heading: 'How the power price is set', body: ['The per-unit rate differs by contract. It may be fixed, escalate at an agreed rate, or reference the utility tariff. Factors include system size, load profile, roof condition, contract length and the buyer’s credit risk.', 'Because every site differs, we do not publish a fixed discount. We prepare an assessment from your actual electricity bills.'] },
          { heading: 'Term and what happens at the end', body: ['PPAs typically run for many years, often a decade or more, so the provider can recover its investment. Make sure the contract states your options at expiry, such as renewal, buying the system at an agreed value, or removal of the system by the provider.'] },
          { heading: 'Terms to read before signing', body: [], bullets: ['who is responsible for maintenance, repairs and replacing equipment such as inverters', 'the performance guarantee and what happens if output falls short', 'insurance of the system and liability for roof damage', 'the provider’s right of access for maintenance', 'what happens if the factory relocates, is sold or stops operating', 'penalties and conditions for early termination', 'the effect on your building lease, if you do not own the building'] },
          { heading: 'Which factories suit a PPA', body: ['Factories that use power mainly in daytime, have a roof that can carry the load without heavy shading, and own the building or hold a long enough lease are usually the best fit.'] },
          { heading: 'Questions to ask every provider', body: [], bullets: ['how many projects are operating, and can you see real generation data', 'which panel and inverter brands and grades are used', 'who installs and who looks after the site afterwards', 'can you see the full sample contract and all terms'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'How is a private PPA different from buying the system?', a: 'In a PPA the provider funds and owns the system and the factory pays only for the power produced under the contract. When you buy, you fund and own the system yourself.' },
          { q: 'Who pays for maintenance?', a: 'As set out in the contract; normally the provider maintains the system for the whole term.' },
          { q: 'How do I know if it is worth it?', a: 'It depends on your bills and your roof. Send us your bill and get a free assessment within 48 hours.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-ppa-vs-buy-vs-lease',
    path: 'guides/ppa-vs-buy-vs-lease',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'PPA vs ซื้อเอง vs เช่า: เลือกอย่างไรสำหรับฝ่ายการเงิน',
        description: 'เปรียบเทียบสามรูปแบบการติดโซลาร์รูฟท็อป ได้แก่ PPA ซื้อระบบเอง และเช่า ในมุมเงินลงทุน ความเสี่ยง การเป็นเจ้าของ และคำถามที่ CFO ควรถาม',
        intro: 'โรงงานที่จะติดโซลาร์รูฟท็อปมีสามทางหลัก คือทำสัญญา PPA ซื้อระบบเอง หรือเช่าระบบ แต่ละทางต่างกันที่เงินลงทุนก้อนแรก ความเสี่ยง และผู้ที่เป็นเจ้าของระบบ บทความนี้ช่วยให้ฝ่ายการเงินเปรียบเทียบอย่างเป็นระบบ',
        sections: [
          { heading: 'PPA', body: ['ผู้ให้บริการลงทุนและเป็นเจ้าของระบบ โรงงานจ่ายค่าไฟตามหน่วยที่ผลิตได้', 'ข้อดี: ไม่ต้องใช้เงินลงทุนก้อนแรก ผู้ให้บริการรับภาระออกแบบและบำรุงรักษา ข้อควรระวัง: ผูกพันตามอายุสัญญา และโรงงานไม่ได้เป็นเจ้าของระบบในช่วงสัญญา'] },
          { heading: 'ซื้อระบบเอง', body: ['โรงงานลงทุนและเป็นเจ้าของระบบ จึงได้ประโยชน์จากไฟที่ผลิตได้ทั้งหมด', 'ข้อดี: ควบคุมระบบได้เต็มที่ และอาจใช้สิทธิประโยชน์ที่เกี่ยวข้องกับการลงทุน (ควรตรวจสอบเงื่อนไขล่าสุด) ข้อควรระวัง: ใช้เงินลงทุนก้อนใหญ่ และโรงงานรับความเสี่ยงด้านผลผลิตและการบำรุงรักษา'] },
          { heading: 'เช่าระบบ', body: ['โรงงานจ่ายค่าเช่าตามงวดที่กำหนด โดยไม่ผูกกับปริมาณไฟที่ผลิตได้เสมอไป', 'ข้อดี: ไม่ใช้เงินลงทุนก้อนแรก ข้อควรระวัง: ค่าเช่าจ่ายแม้ระบบผลิตได้ต่ำ ควรตรวจเงื่อนไขการรับประกันและการบำรุงรักษา'] },
          { heading: 'คำถามที่ CFO ควรถาม', body: [], bullets: ['เงินลงทุนก้อนแรกเท่าไร และมีต้นทุนเงินทุนอย่างไร', 'ความเสี่ยงด้านผลผลิตตกอยู่ที่ใคร', 'ค่าใช้จ่ายในการบำรุงรักษาและเปลี่ยนอุปกรณ์ตกอยู่ที่ใคร', 'เมื่อครบสัญญา โรงงานมีทางเลือกอะไร', 'ผลต่องบการเงินและการจัดประเภทบัญชีเป็นอย่างไร (ควรปรึกษาผู้สอบบัญชี)', 'ผลต่อวงเงินสินเชื่อและเงื่อนไขกับธนาคาร'] },
          { heading: 'เลือกแบบไหนดี', body: ['ถ้าต้องการรักษาเงินทุนไว้ใช้ในธุรกิจหลักและไม่ต้องการดูแลระบบเอง PPA มักเหมาะ ถ้ามีเงินทุนพร้อมและต้องการเป็นเจ้าของ การซื้อเองอาจเหมาะกว่า คำตอบที่แท้จริงขึ้นกับบิลค่าไฟ หลังคา และนโยบายการเงินของบริษัท'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'PPA ต้องจ่ายเงินล่วงหน้าหรือไม่', a: 'โดยทั่วไปไม่ต้อง ผู้ให้บริการเป็นผู้ลงทุนติดตั้งระบบ รายละเอียดขึ้นกับสัญญา' },
          { q: 'ซื้อเองแล้วใครดูแลระบบ', a: 'โรงงานเป็นผู้รับผิดชอบ หรือจ้างผู้รับเหมาดูแลตามสัญญาบำรุงรักษา' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'PPA vs Buy vs Lease: How a CFO Should Compare Rooftop Solar Options',
        description: 'Compare the three ways to put solar on a factory roof, a PPA, buying the system or leasing it, on upfront cost, risk, ownership and the questions a CFO should ask.',
        intro: 'A factory adding rooftop solar has three main routes: sign a PPA, buy the system, or lease it. They differ in upfront spend, risk and who owns the system. This guide helps finance teams compare them in a structured way.',
        sections: [
          { heading: 'PPA', body: ['The provider funds and owns the system; the factory pays for each unit of electricity produced.', 'Pros: no upfront capital, and the provider carries design and maintenance. Watch for: commitment for the contract term, and the factory does not own the system during that time.'] },
          { heading: 'Buying the system', body: ['The factory funds and owns the system and keeps the full benefit of the power it produces.', 'Pros: full control, and possibly access to investment incentives (check the current conditions). Watch for: a large upfront outlay, and the factory carries output and maintenance risk.'] },
          { heading: 'Leasing the system', body: ['The factory pays periodic rent that does not always depend on how much power is produced.', 'Pros: no upfront capital. Watch for: rent is due even when output is low, so check warranty and maintenance terms.'] },
          { heading: 'Questions a CFO should ask', body: [], bullets: ['what is the upfront outlay and the cost of that capital', 'who carries the output risk', 'who pays for maintenance and equipment replacement', 'what are the options at the end of the term', 'how does it affect the financial statements and accounting classification (consult your auditor)', 'how does it affect credit lines and bank covenants'] },
          { heading: 'Which to choose', body: ['If you want to keep capital for your core business and do not want to run a system, a PPA is often a fit. If you have capital and want ownership, buying may suit better. The real answer depends on your bills, your roof and your company’s finance policy.'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Does a PPA require payment upfront?', a: 'Generally no. The provider funds the installation. Details depend on the contract.' },
          { q: 'If I buy, who looks after the system?', a: 'The factory is responsible, or hires a contractor under a maintenance agreement.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-factory-solar-savings',
    path: 'guides/how-to-estimate-factory-solar-savings',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'โรงงานประหยัดค่าไฟได้เท่าไรจากโซลาร์รูฟท็อป: วิธีประเมินเบื้องต้น',
        description: 'วิธีประเมินเบื้องต้นว่าโซลาร์รูฟท็อปจะช่วยลดค่าไฟโรงงานได้เท่าไร ตั้งแต่การอ่านบิลค่าไฟ กราฟโหลด พื้นที่หลังคา ไปจนถึงปัจจัยที่ทำให้ผลต่างกัน',
        intro: 'ไม่มีตัวเลขประหยัดที่ใช้ได้กับทุกโรงงาน เพราะผลขึ้นกับการใช้ไฟ หลังคา และเงื่อนไขสัญญา บทความนี้อธิบายวิธีคิดเบื้องต้นที่ผู้ประเมินใช้ เพื่อให้คุณอ่านรายงานประเมินได้เข้าใจ',
        sections: [
          { heading: '1. อ่านบิลค่าไฟให้เป็น', body: ['บิลของโรงงานมักแยกค่าพลังงานไฟฟ้า ค่าความต้องการพลังไฟฟ้า (demand) ค่า Ft และภาษี โซลาร์ช่วยลดปริมาณไฟที่ซื้อจากการไฟฟ้าโดยตรง แต่ผลต่อค่า demand ขึ้นกับรูปแบบการใช้ไฟและควรประเมินแยก'] },
          { heading: '2. ดูกราฟโหลดรายชั่วโมง', body: ['โซลาร์ผลิตไฟช่วงกลางวัน ยิ่งโรงงานใช้ไฟช่วงนั้นมาก ไฟจากโซลาร์ยิ่งถูกใช้ได้เต็ม โรงงานที่ทำงานกลางคืนเป็นหลักจะได้ประโยชน์น้อยลง เว้นแต่มีระบบกักเก็บพลังงาน'] },
          { heading: '3. ประเมินพื้นที่หลังคาและขนาดระบบ', body: ['โดยประมาณ ระบบ 1 กิโลวัตต์พีค (kWp) ใช้พื้นที่หลังคาราว 5 ถึง 7 ตารางเมตร ขึ้นกับแผง การจัดวาง และสิ่งกีดขวาง ขนาดระบบที่เหมาะต้องพอดีกับทั้งพื้นที่และโหลดช่วงกลางวัน เพื่อไม่ให้ผลิตเกินที่ใช้'] },
          { heading: '4. ประเมินปริมาณไฟที่ผลิตได้', body: ['ในประเทศไทย ระบบ 1 kWp ผลิตไฟได้ราวหนึ่งพันกว่ากิโลวัตต์ชั่วโมงต่อปี ตัวเลขจริงขึ้นกับทิศ ความเอียง การบังแสง และสภาพอากาศของพื้นที่ จึงต้องใช้การจำลองเฉพาะหน้างาน'] },
          { heading: '5. เปรียบเทียบกับต้นทุนไฟจากโซลาร์', body: ['เงินที่ประหยัดได้คือส่วนต่างระหว่างค่าไฟที่ไม่ต้องซื้อจากการไฟฟ้า กับต้นทุนไฟจากโซลาร์ ซึ่งในรูปแบบ PPA คืออัตราตามสัญญา และในการซื้อเองคือต้นทุนการลงทุนและบำรุงรักษาเฉลี่ยต่อหน่วย'] },
          { heading: 'ทำไมผลของแต่ละโรงงานจึงต่างกัน', body: [], bullets: ['รูปแบบการใช้ไฟและชั่วโมงทำงาน', 'ขนาดและสภาพหลังคา การบังแสง', 'อัตราค่าไฟของการไฟฟ้าที่โรงงานใช้', 'รูปแบบและอายุสัญญา', 'การเปลี่ยนแปลงอัตราค่าไฟในอนาคต ซึ่งไม่แน่นอน'] },
          { heading: 'ข้อสงวน', body: ['ตัวเลขข้างต้นเป็นหลักการประมาณทั่วไป ไม่ใช่ผลการประหยัดของโรงงานใดโดยเฉพาะ ' + reviewTh] },
        ],
        faq: [
          { q: 'ต้องใช้ข้อมูลอะไรเพื่อประเมินให้แม่นยำ', a: 'บิลค่าไฟย้อนหลังอย่างน้อย 12 เดือน กราฟโหลดถ้ามี ข้อมูลพื้นที่และโครงสร้างหลังคา' },
          { q: 'ประเมินฟรีหรือไม่', a: 'ฟรี ส่งบิลมาที่เราและรับรายงานประเมินภายใน 48 ชั่วโมงทำการ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'How Much Can a Factory Save with Rooftop Solar? How to Estimate It',
        description: 'A practical method to estimate what rooftop solar could save a factory, from reading the electricity bill and load profile to roof area and why results differ.',
        intro: 'There is no savings figure that holds for every factory, because results depend on consumption, the roof and the contract terms. This guide explains the basic method assessors use so you can read an assessment report with confidence.',
        sections: [
          { heading: '1. Read the electricity bill properly', body: ['A factory bill usually separates the energy charge, the demand charge, the Ft adjustment and tax. Solar directly reduces the energy you buy from the grid; its effect on the demand charge depends on your load pattern and should be assessed separately.'] },
          { heading: '2. Look at the hourly load profile', body: ['Solar produces in daytime. The more your plant uses power then, the more of the solar output is used on site. Plants running mainly at night benefit less unless storage is added.'] },
          { heading: '3. Estimate roof area and system size', body: ['As a rough guide, 1 kWp of panels needs about 5 to 7 square metres of roof, depending on the panels, layout and obstructions. The right size has to fit both the roof and the daytime load, so you do not generate more than you use.'] },
          { heading: '4. Estimate energy produced', body: ['In Thailand, 1 kWp typically produces somewhat over a thousand kWh a year. The real figure depends on orientation, tilt, shading and local weather, so a site-specific simulation is needed.'] },
          { heading: '5. Compare with the cost of solar power', body: ['Savings are the difference between the grid power you no longer buy and the cost of solar power: under a PPA that is the contract rate, and if you buy it is the average cost per unit of investment and maintenance.'] },
          { heading: 'Why results differ between factories', body: [], bullets: ['load pattern and operating hours', 'roof size, condition and shading', 'the utility tariff the factory is on', 'contract type and term', 'future tariff changes, which are uncertain'] },
          { heading: 'Disclaimer', body: ['The figures above are general rules of thumb, not the result for any particular factory. ' + reviewEn] },
        ],
        faq: [
          { q: 'What data is needed for an accurate estimate?', a: 'At least 12 months of electricity bills, the load profile if available, and roof area and structure details.' },
          { q: 'Is the assessment free?', a: 'Yes. Send us your bill and receive a report within 48 business hours.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-rooftop-solar-permits',
    path: 'guides/rooftop-solar-permits-overview',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'ขั้นตอนขออนุญาตติดตั้งโซลาร์รูฟท็อปโรงงาน: ภาพรวมที่ต้องรู้',
        description: 'ภาพรวมขั้นตอนและหน่วยงานที่เกี่ยวข้องกับการติดตั้งโซลาร์รูฟท็อปในโรงงาน ได้แก่ การไฟฟ้า กกพ. การควบคุมอาคาร โรงงาน และนิคมอุตสาหกรรม',
        intro: 'การติดตั้งโซลาร์รูฟท็อปในโรงงานเกี่ยวข้องกับหลายหน่วยงาน ข้อกำหนดที่ใช้จริงขึ้นกับขนาดระบบ รูปแบบการเชื่อมต่อ และที่ตั้ง บทความนี้ให้ภาพรวมเพื่อวางแผน และไม่ใช่คำแนะนำทางกฎหมาย',
        sections: [
          { heading: '1. ตรวจสอบโครงสร้างหลังคา', body: ['ก่อนยื่นขอใดๆ ควรให้วิศวกรโครงสร้างตรวจว่าหลังคารับน้ำหนักแผงและโครงยึดได้ และกำหนดวิธียึดที่ไม่ทำให้หลังคารั่ว'] },
          { heading: '2. การเชื่อมต่อกับการไฟฟ้า', body: ['ต้องแจ้งหรือขออนุญาตการไฟฟ้าในพื้นที่ (การไฟฟ้านครหลวง หรือการไฟฟ้าส่วนภูมิภาค ตามที่ตั้ง) เพื่อเชื่อมต่อระบบ โดยเฉพาะระบบที่ต่อขนานกับระบบไฟของการไฟฟ้า และอาจมีเงื่อนไขทางเทคนิค เช่น การป้องกันไม่ให้ไฟไหลย้อนกลับ'] },
          { heading: '3. คณะกรรมการกำกับกิจการพลังงาน (กกพ.)', body: ['การผลิตไฟฟ้าใช้เองอาจต้องแจ้งหรือขึ้นทะเบียนกับ กกพ. หรืออาจได้รับยกเว้นใบอนุญาตตามขนาดระบบ ข้อกำหนดเปลี่ยนแปลงได้ ควรตรวจสอบประกาศล่าสุดก่อนเริ่มงาน'] },
          { heading: '4. การควบคุมอาคาร', body: ['การติดตั้งแผงบนหลังคาอาจเข้าข่ายการดัดแปลงอาคารที่ต้องแจ้งหรือขออนุญาตตามกฎหมายควบคุมอาคาร ขึ้นกับขนาดและลักษณะงาน'] },
          { heading: '5. ใบอนุญาตโรงงาน', body: ['หากการติดตั้งทำให้ต้องเปลี่ยนแปลงสิ่งที่ระบุไว้ในใบอนุญาตประกอบกิจการโรงงาน อาจต้องแจ้งหรือขออนุญาตแก้ไขกับกรมโรงงานอุตสาหกรรม'] },
          { heading: '6. โรงงานในนิคมอุตสาหกรรม', body: ['หากโรงงานอยู่ในนิคมของการนิคมอุตสาหกรรมแห่งประเทศไทย หรือนิคมเอกชน มักมีขั้นตอนอนุมัติของผู้บริหารนิคมเพิ่มเติม'] },
          { heading: 'เตรียมเอกสารเหล่านี้ไว้ก่อน', body: [], bullets: ['เอกสารกรรมสิทธิ์อาคารหรือสัญญาเช่า', 'แบบโครงสร้างหรือผลตรวจสอบหลังคา', 'แผนผังระบบไฟฟ้า (single line diagram)', 'ใบอนุญาตโรงงานและข้อมูลมิเตอร์ไฟฟ้า'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ข้อมูลในหน้านี้ตรวจทานล่าสุดเมื่อวันที่ 1 พฤศจิกายน 2569'] },
        ],
        faq: [
          { q: 'ใครเป็นผู้ดำเนินการขออนุญาต', a: 'โดยทั่วไปผู้ให้บริการหรือผู้รับเหมาช่วยจัดเตรียมเอกสารและประสานงานให้ ตามขอบเขตที่ตกลงในสัญญา' },
          { q: 'ใช้เวลานานเท่าไร', a: 'ขึ้นกับขนาดระบบ หน่วยงาน และความครบถ้วนของเอกสาร ควรสอบถามระยะเวลาจากผู้ให้บริการก่อนเริ่มโครงการ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Factory Rooftop Solar Permits in Thailand: An Overview',
        description: 'An overview of the steps and authorities involved in installing rooftop solar at a Thai factory: the utility, ERC, building control, factory licence and industrial estates.',
        intro: 'Installing rooftop solar at a factory involves several authorities. What actually applies depends on system size, connection type and location. This overview is for planning and is not legal advice.',
        sections: [
          { heading: '1. Check the roof structure', body: ['Before any filing, a structural engineer should confirm the roof can carry the panels and mounting, and set a fixing method that does not cause leaks.'] },
          { heading: '2. Grid connection with the utility', body: ['You must notify or apply to the local utility (MEA or PEA, depending on location) to connect, especially for systems running in parallel with the grid, and technical conditions such as preventing reverse power flow may apply.'] },
          { heading: '3. The Energy Regulatory Commission (ERC)', body: ['Generating power for your own use may need notification or registration with the ERC, or may be exempt from a licence depending on size. Rules change, so check the latest announcements before starting.'] },
          { heading: '4. Building control', body: ['Putting panels on a roof can count as a building modification that must be notified or permitted under building control law, depending on scale and nature of the work.'] },
          { heading: '5. Factory licence', body: ['If the installation changes details recorded in the factory operating licence, you may need to notify or apply for an amendment with the Department of Industrial Works.'] },
          { heading: '6. Factories in industrial estates', body: ['Factories in an IEAT or privately operated estate usually need approval from the estate operator as well.'] },
          { heading: 'Documents to have ready', body: [], bullets: ['proof of building ownership or the lease', 'structural drawings or a roof inspection report', 'the electrical single line diagram', 'the factory licence and electricity meter details'] },
          { heading: 'Disclaimer', body: [reviewEn, 'Last reviewed on 1 November 2026.'] },
        ],
        faq: [
          { q: 'Who handles the permits?', a: 'Usually the provider or contractor prepares the documents and coordinates, within the scope agreed in the contract.' },
          { q: 'How long does it take?', a: 'It depends on system size, the authority and how complete the documents are. Ask your provider for a timeline before starting.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-cbam-solar',
    path: 'guides/cbam-thai-exporters-rooftop-solar',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'CBAM สำหรับผู้ส่งออกไทย และโซลาร์รูฟท็อปช่วยลดคาร์บอนอย่างไร',
        description: 'CBAM คืออะไร กระทบผู้ส่งออกไทยอย่างไร และไฟฟ้าจากโซลาร์รูฟท็อปช่วยลดการปล่อยคาร์บอนขอบเขตที่ 2 ของโรงงานได้อย่างไร',
        intro: 'CBAM (กลไกปรับราคาคาร์บอนที่พรมแดนของสหภาพยุโรป) กำหนดให้ผู้นำเข้าสินค้าบางประเภทเข้าสหภาพยุโรปต้องรายงานและรับผิดชอบการปล่อยคาร์บอนที่แฝงอยู่ในสินค้า ผู้ส่งออกไทยที่เกี่ยวข้องจึงถูกลูกค้าขอข้อมูลการปล่อยคาร์บอนมากขึ้น',
        sections: [
          { heading: 'CBAM คืออะไร', body: ['CBAM เป็นมาตรการของสหภาพยุโรปเพื่อไม่ให้สินค้านำเข้าที่ผลิตด้วยการปล่อยคาร์บอนสูงได้เปรียบสินค้าที่ผลิตในยุโรปซึ่งต้องจ่ายต้นทุนคาร์บอน ขอบเขตสินค้าและกำหนดเวลาปรับเปลี่ยนได้ ควรติดตามประกาศล่าสุด'] },
          { heading: 'กระทบผู้ส่งออกไทยอย่างไร', body: ['สินค้ากลุ่มแรกที่อยู่ในขอบเขต ได้แก่ เหล็กและเหล็กกล้า อะลูมิเนียม ซีเมนต์ ปุ๋ย ไฟฟ้า และไฮโดรเจน ผู้ผลิตที่เป็นซัพพลายเออร์ของลูกค้ากลุ่มนี้อาจถูกขอข้อมูลการปล่อยคาร์บอนของสินค้า'] },
          { heading: 'การปล่อยขอบเขตที่ 2 คืออะไร', body: ['คือการปล่อยทางอ้อมจากไฟฟ้าที่โรงงานซื้อมาใช้ การใช้ไฟจากโซลาร์รูฟท็อปแทนไฟจากกริดช่วยลดส่วนนี้ ซึ่งมักเป็นส่วนใหญ่ของการปล่อยของโรงงานที่ใช้ไฟมาก'] },
          { heading: 'โซลาร์รูฟท็อปช่วยได้อย่างไร', body: [], bullets: ['ลดปริมาณไฟจากกริดที่ต้องซื้อ จึงลดการปล่อยขอบเขตที่ 2', 'ให้ข้อมูลปริมาณไฟสะอาดที่ผลิตและใช้จริง ใช้ประกอบรายงานให้ลูกค้า', 'สนับสนุนเป้าหมายด้านพลังงานสะอาดของลูกค้าและแบรนด์ในห่วงโซ่อุปทาน'] },
          { heading: 'สิ่งที่ควรเตรียม', body: [], bullets: ['ข้อมูลการใช้ไฟฟ้ารายเดือนย้อนหลัง', 'ข้อมูลการผลิตของระบบโซลาร์ (ถ้ามี)', 'ที่ปรึกษาด้านการคำนวณคาร์บอน เพราะวิธีคิดตามกฎของ CBAM มีรายละเอียดเฉพาะ'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'โซลาร์รูฟท็อปลดการปล่อยจากไฟฟ้าได้ แต่ไม่ได้ทำให้โรงงานผ่านข้อกำหนด CBAM โดยอัตโนมัติ'] },
        ],
        faq: [
          { q: 'โรงงานของฉันได้รับผลกระทบจาก CBAM หรือไม่', a: 'ขึ้นกับว่าสินค้าของคุณหรือของลูกค้าอยู่ในขอบเขตหรือไม่ ควรสอบถามลูกค้าและที่ปรึกษาด้านคาร์บอน' },
          { q: 'ไฟจากโซลาร์ช่วยลดคาร์บอนได้เท่าไร', a: 'ขึ้นกับปริมาณไฟที่ใช้แทนไฟจากกริด รายงานประเมินของเราระบุปริมาณไฟที่ผลิตได้โดยประมาณ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'CBAM for Thai Exporters, and How Rooftop Solar Helps Cut Emissions',
        description: 'What the EU CBAM means for Thai exporters, and how rooftop solar reduces a factory’s Scope 2 emissions.',
        intro: 'The EU Carbon Border Adjustment Mechanism (CBAM) requires importers of certain goods into the EU to report and answer for the carbon embedded in them. Thai exporters in the supply chain are increasingly asked by customers for emissions data.',
        sections: [
          { heading: 'What CBAM is', body: ['CBAM is an EU measure to stop high-emission imports undercutting European producers who pay a carbon cost. Product scope and timelines can change, so follow the latest announcements.'] },
          { heading: 'How it affects Thai exporters', body: ['The first product groups in scope are iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. Manufacturers supplying customers in these sectors may be asked for product-level emissions data.'] },
          { heading: 'What Scope 2 means', body: ['Scope 2 is the indirect emissions from the electricity a factory buys. Using rooftop solar instead of grid power reduces this part, which is often the bulk of emissions for power-hungry plants.'] },
          { heading: 'How rooftop solar helps', body: [], bullets: ['less grid electricity bought, so lower Scope 2 emissions', 'measured data on clean power generated and used, for customer reporting', 'support for the clean-energy targets of customers and brands in your supply chain'] },
          { heading: 'What to prepare', body: [], bullets: ['monthly electricity consumption history', 'solar generation data (if you have a system)', 'a carbon accounting adviser, because CBAM calculation rules have specific details'] },
          { heading: 'Disclaimer', body: [reviewEn, 'Rooftop solar reduces emissions from electricity but does not by itself make a factory CBAM-compliant.'] },
        ],
        faq: [
          { q: 'Is my factory affected by CBAM?', a: 'It depends on whether your products, or your customers’ products, are in scope. Ask your customers and a carbon adviser.' },
          { q: 'How much carbon does solar save?', a: 'It depends on how much grid power the solar replaces. Our assessment gives an approximate annual generation figure.' },
        ],
        cta: cta.en,
      },
    },
  },
];
