// More knowledge-hub articles (second batch). Same rules as articles.js: general
// educational content, no savings percentages or prices, regulatory points hedged.
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ควรตรวจสอบข้อกำหนดล่าสุดและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Confirm the current rules and consult a specialist before you decide.';

module.exports = [
  {
    slug: 'guide-roof-suitability',
    path: 'guides/is-my-factory-roof-suitable-for-solar',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'หลังคาโรงงานของคุณเหมาะกับโซลาร์รูฟท็อปหรือไม่: เช็กลิสต์ 8 ข้อ',
        description: 'เช็กลิสต์ 8 ข้อสำหรับประเมินว่าหลังคาโรงงานเหมาะกับการติดโซลาร์รูฟท็อปหรือไม่ ทั้งโครงสร้าง วัสดุมุงหลังคา การบังแสง ทิศทาง และอายุหลังคา',
        intro: 'หลังคาที่เหมาะคือหลังคาที่รับน้ำหนักได้ มีอายุใช้งานเหลือพอ และรับแสงแดดได้ดี เช็กลิสต์นี้ช่วยให้คุณคัดกรองเบื้องต้นก่อนเรียกผู้ให้บริการมาสำรวจหน้างานจริง',
        sections: [
          { heading: '1. โครงสร้างรับน้ำหนักได้หรือไม่', body: ['แผงและโครงยึดเพิ่มน้ำหนักให้หลังคา โครงสร้างต้องรับได้ทั้งน้ำหนักถาวรและแรงลม ควรให้วิศวกรโครงสร้างตรวจหรือคำนวณก่อนตัดสินใจ โดยเฉพาะอาคารเก่าหรือหลังคาโครงเหล็กน้ำหนักเบา'] },
          { heading: '2. วัสดุมุงหลังคา', body: ['หลังคาเมทัลชีทตะเข็บยืนและหลังคาเมทัลชีททั่วไปมักติดตั้งได้สะดวก ส่วนกระเบื้อง ซีเมนต์ใยหิน หรือหลังคาโปร่งแสงต้องใช้วิธียึดและข้อควรระวังที่ต่างกัน ผู้ให้บริการควรระบุวิธียึดที่ไม่ทำให้หลังคารั่ว'] },
          { heading: '3. อายุและสภาพหลังคา', body: ['ระบบโซลาร์ใช้งานได้หลายสิบปี หากหลังคาจะต้องซ่อมใหญ่หรือเปลี่ยนในไม่กี่ปี ควรทำก่อนติดตั้ง เพราะการรื้อแผงภายหลังเพิ่มต้นทุน'] },
          { heading: '4. การบังแสง', body: ['ปล่องระบายอากาศ ถังน้ำ อาคารข้างเคียง ต้นไม้ และโครงสร้างบนหลังคา สร้างเงาที่ลดผลผลิต การออกแบบที่ดีจะวางแผงเลี่ยงเงาหรือจัดวงจรให้เงากระทบน้อยที่สุด'] },
          { heading: '5. ทิศและความลาดเอียง', body: ['หลังคาที่หันไปทางทิศใต้หรือเกือบเรียบมักให้ผลดีในประเทศไทย แต่หลังคาที่หันตะวันออกและตะวันตกก็ใช้ได้ดี โดยเฉพาะเมื่อโรงงานใช้ไฟทั้งวัน'] },
          { heading: '6. พื้นที่ว่างและทางเข้าบำรุงรักษา', body: ['ต้องมีพื้นที่เพียงพอและมีทางเดินสำหรับตรวจสอบและทำความสะอาด รวมถึงจุดขึ้นหลังคาที่ปลอดภัย'] },
          { heading: '7. ห้องไฟฟ้าและจุดเชื่อมต่อ', body: ['ตำแหน่งตู้ไฟ หม้อแปลง และระยะการเดินสาย มีผลต่อต้นทุนและขั้นตอนเชื่อมต่อ'] },
          { heading: '8. กรรมสิทธิ์และสัญญาเช่า', body: ['หากโรงงานเช่าอาคาร ต้องตรวจว่าสัญญาเช่าและความยินยอมของเจ้าของอาคารครอบคลุมอายุของสัญญา PPA หรือไม่'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'หลังคาเก่าติดโซลาร์ได้หรือไม่', a: 'ขึ้นกับสภาพและโครงสร้าง ควรให้วิศวกรตรวจสอบ หากต้องซ่อมใหญ่ควรทำก่อนติดตั้ง' },
          { q: 'ต้องเตรียมอะไรให้ผู้สำรวจ', a: 'แบบโครงสร้างหลังคา (ถ้ามี) บิลค่าไฟ และการเข้าถึงหลังคาอย่างปลอดภัย' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Is Your Factory Roof Suitable for Solar? An 8-Point Checklist',
        description: 'An 8-point checklist to judge whether a factory roof suits rooftop solar: structure, roofing material, shading, orientation, roof age and access.',
        intro: 'A suitable roof can carry the load, has enough service life left and gets good sun. Use this checklist to pre-screen your roof before asking a provider for a site survey.',
        sections: [
          { heading: '1. Can the structure carry the load?', body: ['Panels and mounting add weight, and the structure must handle both dead load and wind load. Have a structural engineer check or calculate this, especially on older buildings or light steel roofs.'] },
          { heading: '2. Roofing material', body: ['Standing-seam and ordinary metal sheet roofs are usually straightforward. Tiles, asbestos-cement and translucent roofs need different fixings and precautions. The provider should state a fixing method that does not cause leaks.'] },
          { heading: '3. Roof age and condition', body: ['A solar system runs for decades. If the roof needs major repair or replacement within a few years, do it before installing, because removing panels later adds cost.'] },
          { heading: '4. Shading', body: ['Vents, tanks, neighbouring buildings, trees and roof structures cast shadows that cut output. Good design places panels away from shade or arranges circuits to limit its impact.'] },
          { heading: '5. Orientation and tilt', body: ['In Thailand, south-facing or near-flat roofs work well, and east- and west-facing roofs also perform well, especially for plants that use power all day.'] },
          { heading: '6. Free area and maintenance access', body: ['There must be enough area plus walkways for inspection and cleaning, and a safe way onto the roof.'] },
          { heading: '7. Electrical room and connection point', body: ['The location of switchboards and transformers, and the cable run, affect cost and the connection process.'] },
          { heading: '8. Ownership and lease', body: ['If the factory leases its building, confirm the lease and the landlord’s consent cover the whole PPA term.'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Can an older roof take solar?', a: 'It depends on its condition and structure. Have an engineer check it, and do any major repair before installing.' },
          { q: 'What should I prepare for the survey?', a: 'Roof structural drawings if you have them, your electricity bills, and safe access to the roof.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-ft-explainer',
    path: 'guides/ft-electricity-tariff-explained',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'ค่า Ft คืออะไร และทำไมค่าไฟโรงงานจึงเปลี่ยน',
        description: 'อธิบายค่า Ft ในบิลค่าไฟ ใครกำหนด ปรับทุกกี่เดือน และมีผลต่อการตัดสินใจติดโซลาร์รูฟท็อปของโรงงานอย่างไร',
        intro: 'ค่า Ft (ค่าไฟฟ้าผันแปรอัตโนมัติ) เป็นส่วนหนึ่งของบิลค่าไฟที่ปรับเปลี่ยนตามต้นทุนเชื้อเพลิงและต้นทุนอื่นของระบบไฟฟ้า ทำให้ค่าไฟต่อหน่วยของโรงงานไม่คงที่ตลอดปี',
        sections: [
          { heading: 'ค่า Ft คืออะไร', body: ['อัตราค่าไฟฟ้าประกอบด้วยค่าไฟฟ้าฐานและค่า Ft ซึ่งปรับตามต้นทุนที่เปลี่ยนไป เช่น ราคาเชื้อเพลิงและค่าซื้อไฟฟ้า ค่า Ft จึงเป็นเหตุให้ค่าไฟต่อหน่วยขึ้นลงตามช่วงเวลา'] },
          { heading: 'ใครกำหนดและปรับเมื่อไร', body: ['คณะกรรมการกำกับกิจการพลังงาน (กกพ.) พิจารณาค่า Ft โดยทั่วไปทุกสี่เดือน (ช่วงมกราคมถึงเมษายน พฤษภาคมถึงสิงหาคม และกันยายนถึงธันวาคม) ควรตรวจประกาศล่าสุดจาก กกพ. เสมอ'] },
          { heading: 'บิลของโรงงานอ่านอย่างไร', body: ['บิลของโรงงานมักแสดงค่าพลังงานไฟฟ้า ค่าความต้องการพลังไฟฟ้า ค่า Ft และภาษีมูลค่าเพิ่ม ควรดูค่าไฟต่อหน่วยเฉลี่ยจริงย้อนหลังหลายเดือน ไม่ใช่เดือนเดียว'] },
          { heading: 'ค่า Ft มีผลต่อโซลาร์อย่างไร', body: ['เมื่อค่าไฟจากการไฟฟ้าเปลี่ยน ผลประหยัดจากโซลาร์ก็เปลี่ยนตาม ในสัญญา PPA อัตราค่าไฟจากโซลาร์เป็นไปตามสัญญา จึงช่วยให้คาดการณ์ต้นทุนส่วนนั้นได้ง่ายขึ้น แต่ไม่ได้ทำให้ค่าไฟส่วนที่ซื้อจากการไฟฟ้าคงที่'] },
          { heading: 'โรงงานควรทำอะไร', body: [], bullets: ['เก็บบิลย้อนหลังอย่างน้อย 12 เดือนเพื่อดูแนวโน้ม', 'ประเมินผลโซลาร์ด้วยหลายสมมติฐานของค่าไฟ ไม่ใช่ค่าเดียว', 'ติดตามประกาศ กกพ. เมื่อมีการปรับอัตรา'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'บทความนี้ไม่ระบุอัตราค่า Ft ปัจจุบัน เพราะเปลี่ยนแปลงได้ ตรวจสอบจากประกาศล่าสุดของ กกพ. และการไฟฟ้า'] },
        ],
        faq: [
          { q: 'ค่า Ft ปรับบ่อยแค่ไหน', a: 'โดยทั่วไปทบทวนทุกสี่เดือน ตรวจสอบประกาศล่าสุดจาก กกพ.' },
          { q: 'ติดโซลาร์แล้วค่า Ft หายไปหรือไม่', a: 'ไม่ ค่า Ft ยังมีผลกับไฟส่วนที่ซื้อจากการไฟฟ้า โซลาร์ลดปริมาณไฟที่ต้องซื้อ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'What Is the Ft Charge, and Why Do Factory Power Bills Change?',
        description: 'What the Ft charge on the electricity bill is, who sets it, how often it changes, and what it means for a factory’s rooftop solar decision.',
        intro: 'The Ft charge (automatic tariff adjustment) is the part of the electricity bill that moves with fuel and other system costs, which is why a factory’s cost per unit is not constant through the year.',
        sections: [
          { heading: 'What Ft is', body: ['The electricity rate has a base tariff plus the Ft, which adjusts for changing costs such as fuel and power purchase costs. Ft is why the per-unit price rises and falls over time.'] },
          { heading: 'Who sets it, and when', body: ['The Energy Regulatory Commission (ERC) reviews Ft, generally every four months (January to April, May to August, and September to December). Always check the latest ERC announcement.'] },
          { heading: 'Reading a factory bill', body: ['A factory bill typically shows the energy charge, the demand charge, the Ft and VAT. Look at the real average cost per unit over several months, not one month.'] },
          { heading: 'How Ft affects solar', body: ['When grid prices move, the savings from solar move with them. Under a PPA the solar power rate is set by contract, which makes that part of your cost easier to forecast, but the grid power you still buy is not fixed.'] },
          { heading: 'What a factory should do', body: [], bullets: ['keep at least 12 months of bills to see the trend', 'test the solar case under several tariff assumptions, not one', 'follow ERC announcements when rates change'] },
          { heading: 'Disclaimer', body: [reviewEn, 'This article does not state the current Ft rate because it changes; check the latest ERC and utility announcements.'] },
        ],
        faq: [
          { q: 'How often does Ft change?', a: 'It is generally reviewed every four months. Check the latest ERC announcement.' },
          { q: 'Does solar remove the Ft charge?', a: 'No. Ft still applies to the power you buy from the grid; solar reduces how much you buy.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-scope2-reporting',
    path: 'guides/scope-2-emissions-rooftop-solar-reporting',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'การรายงาน Scope 2 ของโรงงาน และบทบาทของโซลาร์รูฟท็อป',
        description: 'อธิบาย Scope 2 วิธีคำนวณแบบ location-based และ market-based และโซลาร์รูฟท็อปช่วยลดการปล่อยก๊าซเรือนกระจกที่รายงานได้อย่างไร',
        intro: 'โรงงานที่เป็นซัพพลายเออร์ของแบรนด์ใหญ่ มักถูกขอรายงานการปล่อยก๊าซเรือนกระจก ในจำนวนนี้ Scope 2 คือการปล่อยทางอ้อมจากไฟฟ้าที่ซื้อมาใช้ และเป็นส่วนที่โซลาร์รูฟท็อปลดได้โดยตรง',
        sections: [
          { heading: 'Scope 1, 2 และ 3 ต่างกันอย่างไร', body: ['Scope 1 คือการปล่อยโดยตรงจากโรงงาน เช่น เชื้อเพลิงที่เผาไหม้ Scope 2 คือการปล่อยทางอ้อมจากไฟฟ้าที่ซื้อ ส่วน Scope 3 คือการปล่อยอื่นๆ ในห่วงโซ่คุณค่า'] },
          { heading: 'สองวิธีคำนวณ Scope 2', body: ['มาตรฐาน GHG Protocol กำหนดให้รายงานได้สองแบบ แบบ location-based ใช้ค่าการปล่อยเฉลี่ยของระบบไฟฟ้าในพื้นที่ ส่วนแบบ market-based สะท้อนตัวเลือกการซื้อไฟของบริษัท เช่น การใช้พลังงานหมุนเวียนที่มีหลักฐานรองรับ'] },
          { heading: 'โซลาร์รูฟท็อปลด Scope 2 ได้อย่างไร', body: ['ไฟที่ผลิตและใช้ในโรงงานทำให้ซื้อไฟจากกริดน้อยลง ปริมาณไฟกริดที่ลดลงคือฐานของการลด Scope 2 ที่รายงาน การลดจริงขึ้นกับปริมาณไฟโซลาร์ที่ใช้ได้จริงในโรงงาน'] },
          { heading: 'ข้อมูลที่ควรเก็บ', body: [], bullets: ['ปริมาณไฟที่ซื้อจากการไฟฟ้าแยกรายเดือน', 'ปริมาณไฟที่ระบบโซลาร์ผลิตและใช้เอง จากมิเตอร์หรือระบบติดตามผล', 'เอกสารสัญญาและหลักฐานตามที่ผู้ตรวจสอบหรือลูกค้าร้องขอ'] },
          { heading: 'สิ่งที่ควรระวัง', body: ['ข้อกำหนดการรายงานแตกต่างกันตามลูกค้าและมาตรฐาน ควรปรึกษาผู้เชี่ยวชาญด้านการคำนวณคาร์บอน และอย่าอ้างผลการลดก๊าซเรือนกระจกเกินกว่าที่มีหลักฐานรองรับ'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ติดโซลาร์แล้วรายงาน Scope 2 ลดลงเท่าไร', a: 'ขึ้นกับปริมาณไฟโซลาร์ที่ใช้จริงและวิธีคำนวณที่ลูกค้ากำหนด รายงานประเมินของเราระบุปริมาณไฟที่ผลิตได้โดยประมาณ' },
          { q: 'ต้องมีมิเตอร์เพิ่มหรือไม่', a: 'ควรมีการวัดปริมาณไฟที่ผลิตได้เพื่อใช้เป็นหลักฐาน ตามที่ออกแบบระบบไว้' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Scope 2 Reporting for Factories, and the Role of Rooftop Solar',
        description: 'What Scope 2 means, the location-based and market-based methods, and how rooftop solar reduces a factory’s reported greenhouse gas emissions.',
        intro: 'Factories supplying large brands are often asked to report greenhouse gas emissions. Scope 2, the indirect emissions from purchased electricity, is the part rooftop solar can reduce directly.',
        sections: [
          { heading: 'Scope 1, 2 and 3', body: ['Scope 1 is direct emissions from the factory, such as fuel burned on site. Scope 2 is indirect emissions from purchased electricity. Scope 3 covers other emissions in the value chain.'] },
          { heading: 'Two ways to calculate Scope 2', body: ['The GHG Protocol allows two reporting methods. Location-based uses the average emissions of the local grid. Market-based reflects the company’s electricity purchasing choices, such as supported renewable energy.'] },
          { heading: 'How rooftop solar reduces Scope 2', body: ['Power generated and used on site means less grid power bought. That drop in grid electricity is the basis of the reduction in reported Scope 2. The real reduction depends on how much solar power the plant actually uses.'] },
          { heading: 'Data to keep', body: [], bullets: ['monthly grid electricity purchased', 'solar energy generated and self-consumed, from meters or the monitoring system', 'contracts and evidence your customer or auditor asks for'] },
          { heading: 'Watch-outs', body: ['Reporting requirements differ by customer and standard. Consult a carbon accounting specialist, and do not claim reductions beyond what you can evidence.'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'How much will solar cut my Scope 2?', a: 'It depends on the solar power actually used on site and the method your customer requires. Our assessment gives an approximate annual generation figure.' },
          { q: 'Do I need extra metering?', a: 'You should measure what the system generates, as designed, so you have evidence.' },
        ],
        cta: cta.en,
      },
    },
  },
  {
    slug: 'guide-solar-om',
    path: 'guides/rooftop-solar-operations-and-maintenance',
    kind: 'guide',
    published,
    text: {
      th: {
        title: 'การดูแลระบบโซลาร์รูฟท็อปหลังติดตั้ง: ต้องทำอะไรบ้าง',
        description: 'สิ่งที่ต้องดูแลหลังติดตั้งโซลาร์รูฟท็อปในโรงงาน ได้แก่ การตรวจสอบประจำ การทำความสะอาดแผง การเฝ้าระวังอินเวอร์เตอร์ ประกัน และการรับประกัน',
        intro: 'โซลาร์รูฟท็อปมีชิ้นส่วนเคลื่อนไหวน้อย แต่ยังต้องการการดูแลสม่ำเสมอเพื่อให้ผลิตไฟได้ตามที่ออกแบบ ในสัญญา PPA ผู้ให้บริการมักเป็นผู้รับผิดชอบเรื่องนี้ตามที่ระบุในสัญญา',
        sections: [
          { heading: 'การเฝ้าระวังผ่านระบบติดตามผล', body: ['ระบบติดตามผลแสดงปริมาณไฟที่ผลิตและแจ้งความผิดปกติ ช่วยให้พบปัญหา เช่น อินเวอร์เตอร์หยุดทำงาน หรือสายชุดหนึ่งผลิตได้ต่ำกว่าปกติ'] },
          { heading: 'การทำความสะอาดแผง', body: ['ฝุ่น คราบ และมูลนกลดปริมาณไฟที่ผลิตได้ ความถี่ในการทำความสะอาดขึ้นกับพื้นที่ เช่น ใกล้ถนนฝุ่นมากหรือใกล้ฟาร์ม และต้องใช้วิธีที่ไม่ทำให้แผงเสียหาย'] },
          { heading: 'การตรวจสอบประจำ', body: [], bullets: ['ตรวจจุดยึด โครงสร้าง และการรั่วซึมของหลังคา', 'ตรวจสายไฟ ขั้วต่อ และตู้ไฟ', 'ตรวจความร้อนผิดปกติของจุดต่อด้วยเครื่องมือเหมาะสม', 'ตรวจอินเวอร์เตอร์และการแจ้งเตือน'] },
          { heading: 'การรับประกัน', body: ['โดยทั่วไปแผงมีการรับประกันผลิตภัณฑ์และการรับประกันประสิทธิภาพที่ยาวนาน ส่วนอินเวอร์เตอร์มีระยะรับประกันสั้นกว่า และอาจต้องเปลี่ยนในช่วงอายุสัญญา ควรตรวจสอบเงื่อนไขจริงจากผู้ให้บริการและผู้ผลิต'] },
          { heading: 'ใครรับผิดชอบอะไร', body: ['ในสัญญา PPA ควรระบุให้ชัดว่าใครบำรุงรักษา ใครออกค่าเปลี่ยนอุปกรณ์ ใครรับผิดชอบเมื่อผลผลิตต่ำกว่าที่รับประกัน และสิทธิ์เข้าพื้นที่ของผู้ให้บริการ'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ต้องทำความสะอาดแผงบ่อยแค่ไหน', a: 'ขึ้นกับพื้นที่และปริมาณฝุ่น ผู้ให้บริการควรกำหนดแผนทำความสะอาดที่เหมาะกับหน้างาน' },
          { q: 'อินเวอร์เตอร์ต้องเปลี่ยนหรือไม่', a: 'อินเวอร์เตอร์มักมีอายุสั้นกว่าตัวแผง อาจต้องเปลี่ยนในช่วงอายุสัญญา ตรวจสอบเงื่อนไขในสัญญา' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Looking After a Rooftop Solar System: What Operations and Maintenance Involves',
        description: 'What it takes to keep a factory rooftop solar system performing: monitoring, panel cleaning, routine inspections, inverter care, insurance and warranties.',
        intro: 'Rooftop solar has few moving parts but still needs regular care to produce what it was designed to. Under a PPA the provider normally carries this, as set out in the contract.',
        sections: [
          { heading: 'Monitoring', body: ['A monitoring system shows what is generated and flags faults. It helps catch problems such as a stopped inverter or a string producing less than normal.'] },
          { heading: 'Cleaning the panels', body: ['Dust, deposits and bird droppings reduce output. Cleaning frequency depends on the location, for example near dusty roads or farms, and the method must not damage the panels.'] },
          { heading: 'Routine inspections', body: [], bullets: ['check fixings, structure and roof for leaks', 'check cables, connectors and switchboards', 'check for abnormal heat at connections with suitable tools', 'check inverters and their alarms'] },
          { heading: 'Warranties', body: ['Panels usually carry a long product warranty and a performance warranty, while inverters have shorter warranties and may need replacing during the contract term. Check the actual terms from your provider and the manufacturers.'] },
          { heading: 'Who is responsible for what', body: ['A PPA should state clearly who maintains the system, who pays to replace equipment, who is responsible if output falls below the guarantee, and the provider’s right of access.'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'How often should panels be cleaned?', a: 'It depends on the site and dust levels. The provider should set a cleaning plan to suit your location.' },
          { q: 'Will the inverter need replacing?', a: 'Inverters usually have a shorter life than the panels and may be replaced during the contract term. Check this in your contract.' },
        ],
        cta: cta.en,
      },
    },
  },
];
