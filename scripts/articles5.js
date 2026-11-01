// Articles 16-20. Keyword-led pages with real project photos (resolved from project records).
// Inline links use [text](path) with no locale prefix. No savings claims or prices.
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ควรตรวจสอบข้อกำหนดล่าสุดและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Confirm the current rules and consult a specialist before you decide.';
const ph = (project, index, th, en) => ({ project, index, alt: { th, en } });

module.exports = [
  // 6 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-reduce-factory-electricity',
    path: 'guides/7-ways-to-reduce-factory-electricity-cost',
    kind: 'guide',
    published,
    hero: ph(13, 'banner', 'โรงงานน้ำแข็งในกรุงเทพมหานครที่ติดโซลาร์รูฟท็อปเพื่อลดไฟที่ซื้อจากการไฟฟ้า', 'An ice factory in Bangkok with rooftop solar to cut the power bought from the utility'),
    text: {
      th: {
        title: 'ลดค่าไฟโรงงาน 7 วิธี: จากการอ่านบิลถึงโซลาร์รูฟท็อป',
        description: 'เจ็ดวิธีลดค่าไฟโรงงานที่ทำได้จริง เรียงจากสิ่งที่ทำได้ทันทีถึงการลงทุน ได้แก่ เลือกอัตราค่าไฟ ลดความต้องการสูงสุด ปรับ power factor ปรับปรุงเครื่องจักร และโซลาร์',
        intro: 'ค่าไฟเป็นต้นทุนที่ควบคุมได้มากกว่าที่หลายโรงงานคิด วิธีที่ได้ผลมักไม่ใช่วิธีเดียว แต่เป็นการไล่ตั้งแต่ข้อมูลในบิลไปจนถึงการลงทุนในเครื่องจักรและการผลิตไฟเอง บทความนี้เรียง 7 วิธีจากง่ายไปยาก โดยไม่อ้างตัวเลขประหยัดที่ยืนยันไม่ได้',
        sections: [
          {
            heading: 'วิธีที่ 1: อ่านบิลให้ออกและเลือกอัตราค่าไฟให้ตรงกับการใช้งาน',
            photo: ph(8, 'banner', 'โรงงานกล่องกระดาษที่ใช้ไฟต่อเนื่องหลายกะ สมุทรปราการ', 'A carton factory with continuous multi-shift power use in Samut Prakan'),
            body: ['เริ่มจากรวบรวมบิลย้อนหลังอย่างน้อย 12 เดือน ดูว่าโรงงานอยู่ในอัตราไหน เช่น อัตราปกติหรืออัตราตามช่วงเวลาของการใช้ (TOU) และค่าไฟประกอบด้วยอะไรบ้าง ค่าพลังงานไฟฟ้า ค่าความต้องการไฟฟ้า ค่า Ft และภาษี อ่านเพิ่มเติมที่ [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained)', 'บางโรงงานเปลี่ยนอัตราได้เมื่อลักษณะการใช้ไฟเปลี่ยน ควรสอบถามการไฟฟ้าที่ดูแลพื้นที่ว่าสิทธิ์เปลี่ยนอัตราเป็นอย่างไร'],
          },
          {
            heading: 'วิธีที่ 2: ลดความต้องการไฟฟ้าสูงสุด (peak demand)',
            body: ['โรงงานที่ใช้ไฟมากมักถูกคิดค่าความต้องการไฟฟ้าตามค่าสูงสุดในรอบเดือน แม้พุ่งเพียงช่วงสั้นๆ การเลื่อนการสตาร์ทเครื่องใหญ่ไม่ให้ซ้อนกัน หรือใช้ระบบควบคุมโหลดจึงช่วยลดค่านี้ได้'],
            bullets: ['ทำตารางสตาร์ทเครื่องจักรขนาดใหญ่ให้ไม่ซ้อนกัน', 'ติดมิเตอร์ย่อยหรือระบบติดตามโหลดรายชั่วโมงเพื่อหาช่วงพุ่ง', 'พิจารณาแบตเตอรี่เฉพาะเมื่อข้อมูลโหลดแสดงว่าตัดยอดพุ่งได้จริง ดู [แบตเตอรี่เก็บไฟสำหรับโรงงาน](guides/solar-battery-storage-for-factories)'],
          },
          {
            heading: 'วิธีที่ 3: ดูแลค่า power factor',
            body: ['โรงงานที่มีมอเตอร์และหม้อแปลงจำนวนมากมักมีโหลดเหนี่ยวนำ ทำให้ power factor ต่ำ ซึ่งอาจถูกคิดค่าปรับตามเกณฑ์ของการไฟฟ้า การติดตั้งหรือปรับแต่งคาปาซิเตอร์แบงก์ช่วยปรับค่านี้ ควรให้วิศวกรไฟฟ้าตรวจวัดก่อนติดตั้ง เพราะติดมากเกินไปก็เกิดปัญหาได้'],
          },
          {
            heading: 'วิธีที่ 4: เครื่องจักรและมอเตอร์',
            body: [],
            bullets: ['ติดตั้งอินเวอร์เตอร์ควบคุมความเร็วมอเตอร์ (VSD) กับพัดลมและปั๊มที่โหลดไม่คงที่', 'ซ่อมจุดรั่วของระบบลมอัด ซึ่งเป็นสาเหตุที่พบบ่อย', 'เปลี่ยนมอเตอร์เก่าที่ประสิทธิภาพต่ำเมื่อถึงรอบซ่อมใหญ่', 'ปิดเครื่องที่เดินเปล่านอกกะผลิต'],
          },
          {
            heading: 'วิธีที่ 5: แสงสว่างและระบบปรับอากาศ',
            body: ['เปลี่ยนเป็นหลอด LED และใช้ระบบควบคุมตามเวลาหรือเซนเซอร์ ส่วนระบบปรับอากาศและทำความเย็น ตรวจการบำรุงรักษา การรั่วซึมของฉนวน และประสิทธิภาพของชิลเลอร์ ซึ่งมีรูปแบบบริการ [Cooling-as-a-Service](cooling-as-a-service) สำหรับโรงงานที่ไม่ต้องการลงทุนเอง'],
          },
          {
            heading: 'วิธีที่ 6: ใช้ไฟในช่วงที่ถูกกว่า',
            body: ['หากอยู่ในอัตรา TOU การย้ายงานที่เลื่อนได้ เช่น การชาร์จ การทำความเย็นล่วงหน้า หรือรอบการอบ ไปช่วงที่ค่าไฟต่ำกว่า ช่วยลดค่าพลังงานโดยไม่ต้องลงทุนเครื่องจักร แต่ต้องไม่กระทบคุณภาพและกำหนดส่งสินค้า'],
          },
          {
            heading: 'วิธีที่ 7: ผลิตไฟเองด้วยโซลาร์รูฟท็อป',
            photo: ph(13, 5, 'แผงโซลาร์บนหลังคาโรงงานน้ำแข็งในกรุงเทพมหานคร มองจากมุมสูง', 'Solar panels on the roof of an ice factory in Bangkok, seen from above'),
            body: ['โซลาร์ลดปริมาณไฟที่ซื้อจากการไฟฟ้าโดยตรงในช่วงกลางวัน ซึ่งเป็นช่วงที่หลายโรงงานใช้ไฟมากที่สุด เหมาะที่สุดเมื่อทำหลังจากข้อ 1 ถึง 6 เพราะรู้โหลดจริงแล้ว จะกำหนดขนาดระบบได้ตรง', 'หากไม่ต้องการลงทุนก้อนแรก รูปแบบ PPA ให้ผู้ให้บริการลงทุนและดูแลระบบ โรงงานจ่ายตามไฟที่ผลิตจริง ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide) และ [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease)'],
          },
          {
            heading: 'ลำดับที่แนะนำ',
            body: ['เริ่มที่ข้อมูลก่อน (ข้อ 1 ถึง 3) เพราะไม่ต้องลงทุนหรือลงทุนน้อย จากนั้นปรับเครื่องจักรตามรอบซ่อมบำรุง และพิจารณาโซลาร์เมื่อรู้โหลดแล้ว ส่งบิลค่าไฟให้เราเพื่อ [ขอรายงานประเมินฟรี](free-assessment) ได้ทุกเมื่อ'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'วิธีไหนเริ่มได้ถูกที่สุด', a: 'การอ่านบิลและตรวจอัตราค่าไฟ การลดยอดพุ่งของโหลด และการซ่อมจุดรั่วลมอัด มักใช้เงินลงทุนน้อยหรือไม่ต้องลงทุน' },
          { q: 'ควรทำโซลาร์ก่อนหรือปรับเครื่องจักรก่อน', a: 'ควรเก็บข้อมูลโหลดก่อน หากปรับเครื่องจักรแล้วโหลดเปลี่ยน ขนาดโซลาร์ที่เหมาะสมก็เปลี่ยนด้วย แต่ทั้งสองทำคู่ขนานได้' },
          { q: 'ไม่มีงบลงทุน ทำอะไรได้บ้าง', a: 'ข้อ 1 ถึง 3 และ 6 แทบไม่ต้องลงทุน และโซลาร์แบบ PPA ไม่ต้องใช้เงินลงทุนก้อนแรกตามเงื่อนไขสัญญา' },
        ],
        cta: cta.th,
      },
      en: {
        title: '7 Ways to Reduce Factory Electricity Cost in Thailand: From Reading the Bill to Rooftop Solar',
        description: 'Seven practical ways to cut a factory’s power bill, from no-cost steps to investments: tariff choice, peak demand, power factor, machinery, lighting and cooling, time-of-use, and solar.',
        intro: 'Electricity is more controllable than many plants assume. The effective approach is rarely one measure; it is working through the data in the bill to investments in equipment and your own generation. This article orders seven measures from easy to harder, without claiming savings figures it cannot back up.',
        sections: [
          {
            heading: 'Way 1: Read the bill and pick the right tariff',
            photo: ph(8, 'banner', 'A carton factory with continuous multi-shift power use in Samut Prakan', 'A carton factory with continuous multi-shift power use in Samut Prakan'),
            body: ['Collect at least 12 months of bills and see which tariff the plant is on, for example a normal rate or time-of-use (TOU), and what the bill contains: energy charge, demand charge, Ft and tax. See [What is the Ft charge?](guides/ft-electricity-tariff-explained).', 'Some plants can change tariff when their usage pattern changes. Ask the utility that serves your area what your options are.'],
          },
          {
            heading: 'Way 2: Reduce peak demand',
            body: ['Large users are often charged a demand charge based on the monthly peak, even if the spike lasts minutes. Staggering large motor starts or using load control reduces it.'],
            bullets: ['Schedule large equipment so starts do not overlap', 'Add sub-metering or hourly load monitoring to find the spikes', 'Consider batteries only if load data shows the peaks can truly be cut. See [Battery storage for factories](guides/solar-battery-storage-for-factories).'],
          },
          {
            heading: 'Way 3: Manage power factor',
            body: ['Plants with many motors and transformers have inductive loads that lower the power factor, which may attract a charge under the utility’s rules. Installing or tuning capacitor banks corrects it. Have an electrical engineer measure first, because over-correction causes problems too.'],
          },
          {
            heading: 'Way 4: Machines and motors',
            body: [],
            bullets: ['Fit variable-speed drives to fans and pumps with varying load', 'Fix compressed-air leaks, a very common source of waste', 'Replace old low-efficiency motors at major repair', 'Switch off idle machines outside production shifts'],
          },
          {
            heading: 'Way 5: Lighting and air-conditioning',
            body: ['Switch to LED with timer or sensor control. For air-conditioning and refrigeration, check maintenance, insulation leaks and chiller efficiency. [Cooling-as-a-Service](cooling-as-a-service) is available for plants that prefer not to invest themselves.'],
          },
          {
            heading: 'Way 6: Use power when it is cheaper',
            body: ['On a TOU tariff, moving flexible tasks such as charging, pre-cooling or baking cycles into cheaper periods lowers the energy charge without new equipment, as long as quality and delivery deadlines are not affected.'],
          },
          {
            heading: 'Way 7: Generate your own with rooftop solar',
            photo: ph(13, 5, 'Solar panels on the roof of an ice factory in Bangkok, seen from above', 'Solar panels on the roof of an ice factory in Bangkok, seen from above'),
            body: ['Solar reduces the power bought directly from the utility in daylight, when many plants use the most. It works best after Ways 1 to 6, because you then know your real load and can size the system accurately.', 'If you do not want an upfront investment, a PPA lets the provider invest in and maintain the system while you pay for what is produced. See the [complete private PPA guide](guides/private-ppa-complete-guide) and [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease).'],
          },
          {
            heading: 'Suggested order',
            body: ['Start with data (Ways 1 to 3), which costs little or nothing. Then improve machinery at maintenance cycles and consider solar once you know the load. Send us your bill any time to [request a free assessment](free-assessment).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Which measure is cheapest to start?', a: 'Reading the bill and checking the tariff, flattening load peaks and fixing compressed-air leaks usually need little or no investment.' },
          { q: 'Should we do solar first or improve machinery first?', a: 'Collect load data first. If machinery changes shift the load, the right solar size changes too, but both can run in parallel.' },
          { q: 'What can we do with no capital budget?', a: 'Ways 1 to 3 and 6 need almost no investment, and a PPA needs no upfront capital, subject to the contract.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 7 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-cost-per-kw',
    path: 'guides/rooftop-solar-cost-per-kw-factory',
    kind: 'guide',
    published,
    hero: ph(14, 0, 'โซลาร์รูฟท็อปขนาดใหญ่บนโรงงานในสมุทรสาคร มองจากมุมสูง', 'A large rooftop solar installation on a factory in Samut Sakhon, seen from above'),
    text: {
      th: {
        title: 'ราคาโซลาร์รูฟท็อปโรงงาน: ต้นทุนต่อ kW ประกอบด้วยอะไร และเทียบใบเสนอราคาอย่างไร',
        description: 'ราคาโซลาร์รูฟท็อปโรงงานต่อ kW มาจากอะไรบ้าง ค่าใช้จ่ายที่มักถูกลืม วิธีเทียบใบเสนอราคาให้ยุติธรรม และทางเลือกที่ไม่ต้องลงทุนก้อนแรก',
        intro: 'คำถามที่โรงงานถามบ่อยที่สุดคือ "ติดโซลาร์ราคาเท่าไร" คำตอบที่ซื่อตรงคือราคาต่อ kW แตกต่างกันตามหน้างาน บทความนี้จึงไม่ให้ตัวเลขลอยๆ แต่อธิบายว่าราคามาจากอะไร และวิธีเทียบใบเสนอราคาหลายเจ้าให้ได้ข้อสรุปที่เป็นธรรม',
        sections: [
          {
            heading: 'ทำไมไม่มี "ราคามาตรฐาน" ต่อ kW',
            photo: ph(14, 0, 'โซลาร์รูฟท็อปบนโรงงานหลายอาคาร ลักษณะหลังคาและโครงสร้างแตกต่างกันในแต่ละอาคาร', 'Rooftop solar across several factory buildings, each with a different roof and structure'),
            body: ['ราคาต่อ kW เปลี่ยนตามขนาดระบบ ชนิดและแบรนด์ของแผงและอินเวอร์เตอร์ ลักษณะหลังคา ระยะเดินสาย การเสริมโครงสร้าง และเงื่อนไขการเชื่อมต่อการไฟฟ้า ระบบใหญ่มักมีต้นทุนต่อ kW ต่ำกว่าระบบเล็ก แต่ไม่เสมอไป'],
          },
          {
            heading: 'ต้นทุนประกอบด้วยอะไร',
            body: [],
            bullets: [
              'แผงโซลาร์: ชนิดเซลล์ กำลังต่อแผง และเงื่อนไขรับประกัน',
              'อินเวอร์เตอร์: ประเภท ขนาด การรับประกัน และระบบติดตามผล',
              'โครงยึดและงานโครงสร้าง: ชนิดหลังคาและการเสริมกำลังถ้าจำเป็น',
              'งานไฟฟ้า: สายไฟ ตู้ไฟ อุปกรณ์ป้องกัน การต่อลงดิน และการเชื่อมกับห้องไฟฟ้าเดิม',
              'งานวิศวกรรมและการขออนุญาต: ออกแบบ แบบรับรอง การยื่นเอกสารและการเชื่อมต่อ',
              'ค่าติดตั้ง ค่าเครน ค่าความปลอดภัยงานบนที่สูง และประกันภัยระหว่างก่อสร้าง',
              'ระบบติดตามผลและการทดสอบก่อนเดินเครื่อง',
            ],
          },
          {
            heading: 'ค่าใช้จ่ายที่มักถูกลืมในใบเสนอราคา',
            body: [],
            bullets: [
              'การเสริมโครงหลังคา การซ่อมหรือเปลี่ยนแผ่นหลังคาที่เสื่อม',
              'การปรับปรุงตู้ไฟหรือหม้อแปลงที่กำลังไม่พอ',
              'ค่าสายเมนและงานท่อร้อยสายระยะไกล',
              'ค่าบำรุงรักษา การล้างแผง และการเปลี่ยนอินเวอร์เตอร์ตามอายุ',
              'ประกันภัยทรัพย์สินระหว่างอายุสัญญา',
              'ค่ารื้อถอนเมื่อเปลี่ยนหลังคาหรือย้ายโรงงาน',
            ],
          },
          {
            heading: 'วิธีเทียบใบเสนอราคาให้ยุติธรรม',
            photo: ph(2, 1, 'หลังคาโรงงานแนวยาวที่ติดแผงโซลาร์ในนครปฐม ตัวอย่างหน้างานที่ต้องกำหนดขอบเขตงานให้ชัด', 'A long factory roof with panels in Nakhon Pathom, a site where the scope of work must be clearly defined'),
            body: ['อย่าเทียบเฉพาะราคารวมหรือราคาต่อ kW เพราะขอบเขตงานอาจไม่เท่ากัน ให้เทียบเป็นตารางตามหัวข้อต่อไปนี้'],
            bullets: [
              'ขนาดระบบที่ติดตั้งจริง (kWp) และผลผลิตไฟต่อปีที่คาดการณ์ (kWh) พร้อมสมมติฐาน',
              'ยี่ห้อและรุ่นของแผงและอินเวอร์เตอร์ และระยะรับประกันของแต่ละรายการ',
              'ขอบเขตงาน: รวมการขออนุญาต การเชื่อมต่อ การเสริมโครงสร้าง และระบบติดตามผลหรือไม่',
              'เงื่อนไขบำรุงรักษา การประกันผลผลิต (performance guarantee) และเวลาตอบสนองเมื่อมีปัญหา',
              'ประสบการณ์และผลงานจริงของผู้รับเหมา และขอเยี่ยมหน้างานที่ติดตั้งแล้ว',
              'เงื่อนไขการชำระเงินและการส่งมอบ',
            ],
          },
          {
            heading: 'ทางเลือกที่ไม่ต้องลงทุนก้อนแรก',
            body: ['หากการลงทุนเองไม่ใช่ทางเลือก รูปแบบ PPA ให้ผู้ให้บริการเป็นผู้ลงทุน ติดตั้งและบำรุงรักษา โรงงานจ่ายค่าไฟตามหน่วยที่ผลิตจริงตามสัญญา การเปรียบเทียบจึงเปลี่ยนจากราคาระบบเป็นราคาต่อหน่วยไฟและเงื่อนไขสัญญา ดู [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease) และ [วิธีประเมินผลประหยัดเบื้องต้น](guides/how-to-estimate-factory-solar-savings)'],
          },
          {
            heading: 'ขอรายงานประเมินจากบิลจริง',
            body: ['วิธีที่ตรงที่สุดคือประเมินจากบิลค่าไฟและหลังคาของโรงงานคุณ เราส่งรายงานภายใน 48 ชั่วโมงโดยไม่มีค่าใช้จ่าย [ขอรายงานประเมินฟรี](free-assessment) หรืออ่าน [ขั้นตอนการติดตั้งทั้งหมด](guides/rooftop-solar-for-factories-complete-guide)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'หน้านี้ตั้งใจไม่ระบุราคา เพราะราคาจริงขึ้นกับหน้างานและเวลา'] },
        ],
        faq: [
          { q: 'ทำไมใบเสนอราคาแต่ละเจ้าต่างกันมาก', a: 'มักต่างกันที่ขอบเขตงาน ยี่ห้อและการรับประกันอุปกรณ์ การเสริมโครงสร้าง และเงื่อนไขบำรุงรักษา ควรเทียบทีละรายการ' },
          { q: 'ราคาถูกที่สุดคือคุ้มที่สุดหรือไม่', a: 'ไม่เสมอไป ระบบที่ผลผลิตต่ำกว่าคาดหรืออินเวอร์เตอร์เสียบ่อยอาจแพงกว่าในระยะยาว ให้ดูต้นทุนต่อหน่วยไฟตลอดอายุ' },
          { q: 'ไม่อยากลงทุนเอง ต้องดูอะไรใน PPA', a: 'ดูราคาต่อหน่วยและกลไกปรับราคา ระยะสัญญา การบำรุงรักษา การรับประกันผลผลิต และทางเลือกเมื่อสัญญาสิ้นสุด' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar Cost per kW for Factories in Thailand: What It Includes and How to Compare Quotes',
        description: 'What goes into rooftop solar cost per kW for a factory, the costs often forgotten, how to compare quotes fairly, and an option with no upfront investment.',
        intro: 'The question factories ask most is “how much does solar cost?” The honest answer is that cost per kW depends on the site. So this article gives no floating number; it explains what the price is made of and how to compare several quotes fairly.',
        sections: [
          {
            heading: 'Why there is no standard price per kW',
            photo: ph(14, 0, 'Rooftop solar across several factory buildings, each with a different roof and structure', 'Rooftop solar across several factory buildings, each with a different roof and structure'),
            body: ['Cost per kW changes with system size, panel and inverter type and brand, roof type, cable distance, structural reinforcement and the utility’s connection conditions. Larger systems usually cost less per kW than small ones, but not always.'],
          },
          {
            heading: 'What the cost is made of',
            body: [],
            bullets: [
              'Panels: cell type, power per panel and warranty terms',
              'Inverters: type, size, warranty and monitoring',
              'Mounting and structural work: roof type and reinforcement if needed',
              'Electrical work: cables, switchboards, protection, earthing and tie-in to the existing electrical room',
              'Engineering and permits: design, certified drawings, filings and grid connection',
              'Installation, cranes, work-at-height safety and construction insurance',
              'Monitoring and pre-commissioning tests',
            ],
          },
          {
            heading: 'Costs often missing from a quote',
            body: [],
            bullets: [
              'Roof reinforcement, or repair or replacement of worn roof sheets',
              'Upgrades to switchboards or a transformer that is too small',
              'Main cable and long conduit runs',
              'Maintenance, panel cleaning and inverter replacement over the life',
              'Property insurance during the contract',
              'Removal cost if you replace the roof or relocate',
            ],
          },
          {
            heading: 'How to compare quotes fairly',
            photo: ph(2, 1, 'A long factory roof with panels in Nakhon Pathom, a site where the scope of work must be clearly defined', 'A long factory roof with panels in Nakhon Pathom, a site where the scope of work must be clearly defined'),
            body: ['Do not compare only the total or the price per kW, because the scope may differ. Compare in a table by the following items.'],
            bullets: [
              'Installed capacity (kWp) and expected annual output (kWh), with the assumptions',
              'Brand and model of panels and inverters, and the warranty on each',
              'Scope: whether permits, grid connection, structural reinforcement and monitoring are included',
              'Maintenance terms, performance guarantee and response time when something fails',
              'The contractor’s real experience, and ask to visit an installed site',
              'Payment and delivery terms',
            ],
          },
          {
            heading: 'An option with no upfront investment',
            body: ['If buying is not an option, a PPA lets the provider invest in, install and maintain the system while the factory pays per unit generated under the contract. The comparison then shifts from system price to price per unit and contract terms. See [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease) and [How to estimate savings](guides/how-to-estimate-factory-solar-savings).'],
          },
          {
            heading: 'Ask for an assessment from your real bill',
            body: ['The most direct way is to assess from your own bill and roof. We send a report within 48 hours at no cost. [Request a free assessment](free-assessment) or read the [complete installation guide](guides/rooftop-solar-for-factories-complete-guide).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'This page deliberately gives no prices, because the real cost depends on the site and the time.'] },
        ],
        faq: [
          { q: 'Why do quotes differ so much?', a: 'Usually in scope of work, equipment brand and warranty, structural reinforcement and maintenance terms. Compare item by item.' },
          { q: 'Is the cheapest quote the best value?', a: 'Not always. A system that underperforms or has failing inverters can cost more over its life. Look at cost per unit of energy over the lifetime.' },
          { q: 'If we do not want to invest, what should we check in a PPA?', a: 'The price per unit and how it escalates, contract length, maintenance, performance guarantee, and your options at the end of the term.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 8 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-payback',
    path: 'guides/rooftop-solar-payback-period-factory',
    kind: 'guide',
    published,
    hero: ph(19, 2, 'โรงงานแปรรูปอาหารทะเลแช่แข็ง จังหวัดระนอง ที่ติดโซลาร์รูฟท็อป 1,253.94 kW', 'A frozen seafood processing plant in Ranong with a 1,253.94 kW rooftop solar system'),
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปคืนทุนกี่ปี: วิธีคิดระยะเวลาคืนทุนของโรงงานอย่างถูกต้อง',
        description: 'ระยะเวลาคืนทุนของโซลาร์รูฟท็อปโรงงานคิดอย่างไร ตัวแปรที่มีผล ข้อผิดพลาดที่พบบ่อย และทำไมโรงงานที่ใช้ PPA จึงไม่มีระยะคืนทุน',
        intro: 'โรงงานที่พิจารณาซื้อระบบโซลาร์เองมักถามว่าคืนทุนกี่ปี บทความนี้ไม่ตอบด้วยตัวเลขตายตัว แต่แสดงวิธีคิดที่ถูกต้อง ตัวแปรที่ต้องรู้ และข้อผิดพลาดที่ทำให้ตัวเลขดูดีเกินจริง เพื่อให้คุณตรวจใบเสนอราคาของใครก็ได้',
        sections: [
          {
            heading: 'สูตรพื้นฐานของระยะเวลาคืนทุน',
            photo: ph(19, 0, 'ระบบโซลาร์รูฟท็อปบนหลังคาโรงงานอาหารทะเลแช่แข็ง มองจากด้านบน', 'A rooftop solar system on a frozen seafood plant, seen from above'),
            body: ['ระยะเวลาคืนทุนอย่างง่าย = เงินลงทุนรวม ÷ ผลประหยัดสุทธิต่อปี', 'ผลประหยัดสุทธิต่อปี = ไฟที่ผลิตและโรงงานใช้เองในปีนั้น × ราคาไฟที่ทดแทนได้ ลบด้วยค่าบำรุงรักษา ประกันภัย และค่าใช้จ่ายประจำปีอื่นๆ'],
          },
          {
            heading: 'ตัวแปรที่มีผลต่อตัวเลข',
            body: [],
            bullets: [
              'ไฟที่ผลิตได้ต่อ kWp ต่อปี ขึ้นกับพื้นที่ ทิศทาง มุมเอียง เงา และสภาพอากาศ',
              'สัดส่วนไฟที่โรงงานใช้เอง ถ้าผลิตแล้วใช้ไม่หมดหรือส่งออกไม่ได้ ผลประหยัดลดลง',
              'ราคาไฟที่ทดแทนได้จริง ซึ่งคือส่วนของค่าพลังงานและ Ft ที่ลดลง ไม่ใช่ราคาเฉลี่ยทั้งบิล ดู [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained)',
              'การเปลี่ยนแปลงของอัตราค่าไฟในอนาคต ซึ่งทั้งขึ้นและลงได้',
              'การเสื่อมของแผงรายปี ซึ่งผู้ผลิตระบุไว้ในเอกสารรับประกัน',
              'ค่าบำรุงรักษา การล้างแผง และการเปลี่ยนอินเวอร์เตอร์ตามอายุ',
              'เงินลงทุนรวม ตามขอบเขตที่ระบุในใบเสนอราคา ดู [ราคาโซลาร์รูฟท็อปโรงงาน](guides/rooftop-solar-cost-per-kw-factory)',
            ],
          },
          {
            heading: 'ข้อผิดพลาดที่ทำให้ตัวเลขดูดีเกินจริง',
            body: [],
            bullets: [
              'ใช้ราคาเฉลี่ยทั้งบิลเป็นราคาไฟที่ทดแทน แทนที่จะใช้ส่วนที่ลดลงจริง',
              'สมมติว่าใช้ไฟที่ผลิตได้ทั้งหมด โดยไม่ตรวจกราฟโหลดรายชั่วโมง',
              'ไม่คิดการเสื่อมของแผงและการเปลี่ยนอินเวอร์เตอร์',
              'ลืมค่าบำรุงรักษา ประกัน และการเสริมโครงหลังคา',
              'สมมติว่าค่าไฟจะขึ้นทุกปีโดยไม่มีเหตุผลรองรับ',
              'นับสิทธิประโยชน์ทางภาษีที่ยังไม่ได้รับอนุมัติเข้าไปแล้ว',
            ],
          },
          {
            heading: 'มองให้กว้างกว่าระยะคืนทุน',
            photo: ph(13, 10, 'แผงโซลาร์บนหลังคาโรงงานน้ำแข็ง กรุงเทพมหานคร มุมมองจากด้านบน', 'Panels on the roof of an ice factory in Bangkok, top-down view'),
            body: ['ระยะคืนทุนไม่บอกว่าผลตอบแทนรวมตลอดอายุเป็นอย่างไร ฝ่ายการเงินมักใช้ตัวชี้วัดอื่นควบคู่กัน เช่น มูลค่าปัจจุบันสุทธิ (NPV) และอัตราผลตอบแทนภายใน (IRR) และเทียบกับการนำเงินไปใช้ในทางอื่น', 'นอกจากนี้ยังมีประโยชน์ที่ไม่อยู่ในสูตร เช่น การลดการปล่อยคาร์บอน ข้อมูลสำหรับรายงานลูกค้า และการลดความเสี่ยงจากค่าไฟที่ผันผวน อ่าน [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)'],
          },
          {
            heading: 'ถ้าใช้ PPA จะไม่มี "ระยะคืนทุน"',
            body: ['เมื่อใช้ PPA โรงงานไม่ได้ลงทุนในระบบ จึงไม่มีเงินลงทุนให้คืน สิ่งที่เปรียบเทียบคือราคาต่อหน่วยไฟตามสัญญาเทียบกับราคาไฟที่ทดแทนได้ รวมถึงกลไกปรับราคาและเงื่อนไขเมื่อสัญญาสิ้นสุด ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide) และ [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease)'],
          },
          {
            heading: 'ทำอย่างไรให้ได้ตัวเลขที่เชื่อถือได้',
            body: ['เก็บบิล 12 เดือนและกราฟโหลดรายชั่วโมงถ้ามี ให้ผู้ให้บริการแจ้งสมมติฐานทุกข้อเป็นลายลักษณ์อักษร และทำการเทียบหลายสถานการณ์ เช่น ค่าไฟขึ้นหรือลง ผลผลิตต่ำกว่าคาด ส่งบิลเพื่อ [ขอรายงานประเมินฟรี](free-assessment)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'หน้านี้ไม่ได้ระบุจำนวนปีคืนทุนหรือผลประหยัดของโครงการใดๆ ตัวเลขจริงขึ้นกับหน้างานและสัญญา'] },
        ],
        faq: [
          { q: 'ระยะคืนทุนปกติของโซลาร์โรงงานคือกี่ปี', a: 'ไม่มีตัวเลขกลาง เพราะขึ้นกับต้นทุนระบบ สัดส่วนไฟที่ใช้เอง ราคาไฟที่ทดแทน และเงื่อนไขอื่นของแต่ละโรงงาน ควรคำนวณจากบิลจริง' },
          { q: 'ควรดู IRR หรือระยะคืนทุน', a: 'ควรดูควบคู่กัน ระยะคืนทุนเข้าใจง่ายแต่ไม่สะท้อนผลตลอดอายุ ส่วน NPV และ IRR ช่วยเทียบกับทางเลือกอื่นของเงินลงทุน' },
          { q: 'ค่าไฟขึ้นแล้วระยะคืนทุนจะสั้นลงไหม', a: 'โดยทั่วไปใช่ แต่ค่าไฟอาจลดลงได้เช่นกัน ควรทดสอบหลายสถานการณ์ ไม่ควรพึ่งการคาดการณ์ว่าค่าไฟจะขึ้นอย่างเดียว' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'How Long Is the Payback for Rooftop Solar at a Factory? How to Calculate It Properly',
        description: 'How to calculate the payback period of factory rooftop solar, the variables that matter, common mistakes, and why a PPA customer has no payback period.',
        intro: 'Factories considering buying a solar system themselves often ask how many years it takes to pay back. This article gives no fixed number. It shows the right method, the variables you need, and the mistakes that make figures look better than they are, so you can check anyone’s quote.',
        sections: [
          {
            heading: 'The basic payback formula',
            photo: ph(19, 0, 'A rooftop solar system on a frozen seafood plant, seen from above', 'A rooftop solar system on a frozen seafood plant, seen from above'),
            body: ['Simple payback = total investment ÷ net annual saving.', 'Net annual saving = energy generated and used on site that year × the electricity price it displaces, minus maintenance, insurance and other annual costs.'],
          },
          {
            heading: 'Variables that affect the number',
            body: [],
            bullets: [
              'Annual generation per kWp, which depends on area, orientation, tilt, shading and weather',
              'Share used on site; if output is not fully used or cannot be exported, savings fall',
              'The electricity price actually displaced: the energy and Ft part that falls, not the average price of the whole bill. See [What is the Ft charge?](guides/ft-electricity-tariff-explained)',
              'Future tariff changes, which can go up or down',
              'Annual panel degradation, stated in the manufacturer’s warranty',
              'Maintenance, cleaning and inverter replacement over the life',
              'Total investment, as scoped in the quote. See [Rooftop solar cost per kW](guides/rooftop-solar-cost-per-kw-factory).',
            ],
          },
          {
            heading: 'Mistakes that flatter the number',
            body: [],
            bullets: [
              'Using the average bill price as the displaced price instead of the part that actually falls',
              'Assuming all output is used without checking the hourly load profile',
              'Ignoring panel degradation and inverter replacement',
              'Forgetting maintenance, insurance and roof reinforcement',
              'Assuming tariffs rise every year with no basis',
              'Counting tax benefits that have not been approved',
            ],
          },
          {
            heading: 'Look beyond payback',
            photo: ph(13, 10, 'Panels on the roof of an ice factory in Bangkok, top-down view', 'Panels on the roof of an ice factory in Bangkok, top-down view'),
            body: ['Payback does not show total return over the life. Finance teams usually add net present value (NPV) and internal rate of return (IRR) and compare against other uses of the capital.', 'There are also benefits outside the formula: lower carbon emissions, data for customer reporting and less exposure to volatile tariffs. Read [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).'],
          },
          {
            heading: 'With a PPA there is no “payback”',
            body: ['Under a PPA the factory does not invest in the system, so there is no capital to recover. What you compare is the contract price per unit against the electricity price displaced, plus the escalation mechanism and the terms at the end. See the [complete private PPA guide](guides/private-ppa-complete-guide) and [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease).'],
          },
          {
            heading: 'How to get numbers you can trust',
            body: ['Gather 12 months of bills and, if available, the hourly load profile. Ask the provider to state every assumption in writing and compare scenarios: tariffs up or down, output below forecast. Send your bill to [request a free assessment](free-assessment).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'This page states no payback period or savings for any project. Real figures depend on the site and the contract.'] },
        ],
        faq: [
          { q: 'What is a typical payback for factory solar?', a: 'There is no central figure. It depends on system cost, share used on site, the price displaced and other factory-specific conditions. Calculate from your real bills.' },
          { q: 'Should I look at IRR or payback?', a: 'Both. Payback is easy to understand but ignores the full life; NPV and IRR help compare against other uses of the capital.' },
          { q: 'If tariffs rise, does payback get shorter?', a: 'Generally yes, but tariffs can also fall. Test several scenarios rather than relying on tariffs only going up.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 9 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-roof-types',
    path: 'guides/rooftop-solar-metal-sheet-vs-concrete-roof',
    kind: 'guide',
    published,
    hero: ph(22, 'banner', 'โซลาร์รูฟท็อปบนหลังคาเมทัลชีทของโรงงานผลิตอาหารสัตว์ จังหวัดราชบุรี', 'Rooftop solar on the metal-sheet roof of a feed mill in Ratchaburi'),
    text: {
      th: {
        title: 'หลังคาเมทัลชีท คอนกรีต กระเบื้อง: ติดโซลาร์รูฟท็อปโรงงานต่างกันอย่างไร',
        description: 'เปรียบเทียบการติดโซลาร์บนหลังคาเมทัลชีท หลังคาคอนกรีตดาดฟ้า และหลังคากระเบื้อง ทั้งระบบยึด น้ำหนัก การกันซึม และสิ่งที่ต้องตรวจ พร้อมภาพจากโครงการจริง',
        intro: 'ชนิดของหลังคากำหนดวิธียึดแผง น้ำหนักที่เพิ่ม ความเสี่ยงเรื่องรั่วซึม และค่าใช้จ่ายในงานโครงสร้าง ก่อนขอใบเสนอราคา ควรรู้ว่าหลังคาของคุณเป็นแบบไหนและมีประเด็นอะไรที่ต้องถาม',
        sections: [
          {
            heading: 'หลังคาเมทัลชีท: พบมากที่สุดในโรงงาน',
            photo: ph(22, 0, 'หลังคาเมทัลชีทสีน้ำเงินของโรงงานผลิตอาหารสัตว์ ติดแผงโซลาร์เรียงตามแนวหลังคา', 'The blue metal-sheet roof of a feed mill with panels laid along the roof planes'),
            body: ['หลังคาเมทัลชีทเป็นหลังคาที่พบมากที่สุดในโรงงานไทย ชนิดที่ติดตั้งได้ง่ายคือแบบมีสันตั้ง (standing seam) ซึ่งใช้ตัวหนีบยึดกับสันโดยไม่ต้องเจาะแผ่น ส่วนแผ่นลอนลูกฟูกหรือแผ่นลอนคู่มักยึดด้วยสกรูพร้อมยางกันซึมหรือแผ่นรองเฉพาะ'],
            bullets: [
              'ตรวจอายุและสภาพการผุกร่อน โดยเฉพาะบริเวณใกล้ทะเลหรือโรงงานที่มีไอกรด',
              'ตรวจรอยรั่วและสกรูหลวมก่อนติดแผง',
              'ตรวจโครงเหล็กและแป (purlin) ว่ารับน้ำหนักและแรงลมเพิ่มได้',
              'ระวังช่องแสง พัดลมระบายอากาศ และจุดที่เดินบนหลังคาไม่ได้',
            ],
          },
          {
            heading: 'หลังคาคอนกรีตและดาดฟ้า: ติดแบบเอียงด้วยโครงเหล็ก',
            photo: ph(12, 9, 'ดาดฟ้าคอนกรีตของอาคารในกรุงเทพมหานครที่ติดแผงโซลาร์บนโครงเหล็กเอียงมุม', 'The concrete roof deck of a Bangkok building with panels on angled steel frames'),
            body: ['หลังคาดาดฟ้ามักติดแผงบนโครงเหล็กที่ตั้งมุมเอียง ฐานยึดด้วยน้ำหนักถ่วง (ballast) หรือเจาะยึดเข้าโครงสร้าง ข้อดีคือกำหนดทิศทางและมุมแผงได้ดี ข้อควรระวังคือชั้นกันซึมของดาดฟ้าและน้ำหนักถ่วงที่เพิ่ม'],
            bullets: [
              'ตรวจชั้นกันซึมและทางระบายน้ำ ห้ามให้แผงหรือฐานปิดทางน้ำ',
              'ให้วิศวกรโครงสร้างคำนวณน้ำหนักถ่วงและแรงลมยก',
              'หากเจาะยึดต้องซ่อมกันซึมจุดที่เจาะให้เรียบร้อย',
              'เว้นระยะเงาระหว่างแถวแผงให้พอดี',
            ],
          },
          {
            heading: 'หลังคากระเบื้อง และหลังคาที่มีใยหินหรือวัสดุเก่า',
            photo: ph(13, 4, 'โรงงานที่มีหลังคาหลายชนิดผสมกัน มีแผงโซลาร์ติดบนหลายพื้นที่ กรุงเทพมหานคร', 'A factory with several mixed roof types and panels on multiple areas in Bangkok'),
            body: ['หลังคากระเบื้องใช้ตะขอยึดกับโครงหลังคา ต้องระวังกระเบื้องแตกและการรั่ว ส่วนหลังคาเก่าที่อาจมีวัสดุเส้นใยแร่ เช่น แผ่นไฟเบอร์ซีเมนต์รุ่นเก่า ต้องให้ผู้เชี่ยวชาญตรวจก่อนและห้ามเจาะหรือทุบโดยไม่มีมาตรการความปลอดภัย ในหลายกรณีการเปลี่ยนหลังคาใหม่พร้อมติดแผงเหมาะกว่า'],
          },
          {
            heading: 'น้ำหนัก แรงลม และกันซึม: สามเรื่องที่ต้องคำนวณทุกครั้ง',
            body: [],
            bullets: [
              'น้ำหนักที่เพิ่มของแผงและโครงยึดมักอยู่ในระดับสิบกว่ากิโลกรัมต่อตารางเมตร ขึ้นกับระบบยึด ต้องให้วิศวกรยืนยันกับโครงสร้างจริง',
              'แรงลมยกเป็นแรงที่ทำให้แผงหลุด ต้องออกแบบตามข้อกำหนดแรงลมของพื้นที่และความสูงอาคาร',
              'ทุกจุดที่เจาะหลังคาต้องมีวิธีกันซึมที่ระบุชัด และควรมีการรับประกันงานกันซึมแยกจากการรับประกันแผง',
              'ทางเดินบำรุงรักษาและจุดยึดสายนิรภัยต้องออกแบบไว้ตั้งแต่แรก',
            ],
          },
          {
            heading: 'ถ้าหลังคาไม่เหมาะ ยังมีทางเลือก',
            body: ['หากหลังคาอายุมากหรือรับน้ำหนักไม่ไหว อาจซ่อมเสริมโครงสร้าง เปลี่ยนหลังคาก่อนติดแผง หรือใช้พื้นที่อื่น ดู [โซลาร์คาร์พอร์ตสำหรับโรงงาน](guides/solar-carport-for-factories) และเช็กลิสต์ใน [หลังคาโรงงานของคุณเหมาะกับโซลาร์หรือไม่](guides/is-my-factory-roof-suitable-for-solar)'],
          },
          {
            heading: 'สิ่งที่ควรขอจากผู้ติดตั้ง',
            body: [],
            bullets: [
              'รายงานตรวจสภาพหลังคาและโครงสร้างพร้อมรูปถ่าย',
              'ระบบยึดแผงที่เลือก และเหตุผลที่เหมาะกับหลังคาประเภทนั้น',
              'แบบรับรองจากวิศวกรผู้มีใบอนุญาต เมื่อกฎหมายหรือสถานการณ์ต้องการ',
              'การรับประกันงานกันซึมและเงื่อนไขซ่อมเมื่อหลังคารั่ว',
              'แผนรื้อและติดตั้งแผงใหม่ หากต้องเปลี่ยนหลังคาในอนาคต',
            ],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ค่าน้ำหนักและข้อกำหนดทางวิศวกรรมในหน้านี้เป็นข้อมูลทั่วไป ต้องยืนยันโดยวิศวกรโครงสร้างสำหรับอาคารจริง'] },
        ],
        faq: [
          { q: 'ติดแผงโซลาร์ทำให้หลังคาเมทัลชีทรั่วไหม', a: 'ไม่จำเป็น ถ้าเลือกระบบยึดที่เหมาะ เช่น ตัวหนีบสำหรับหลังคาสันตั้ง หรือสกรูพร้อมวัสดุกันซึมสำหรับแผ่นลอน และตรวจหลังคาก่อนติดตั้ง' },
          { q: 'หลังคาที่มีรอยรั่วอยู่แล้วติดได้ไหม', a: 'ควรซ่อมก่อนหรือพร้อมการติดแผง เพราะการแก้รอยรั่วหลังติดแผงทำได้ยากและอาจต้องรื้อแผง' },
          { q: 'หลังคาเก่าใกล้หมดอายุ ควรเปลี่ยนหลังคาก่อนไหม', a: 'ถ้าหลังคาเหลืออายุน้อยกว่าอายุระบบโซลาร์ การเปลี่ยนหลังคาก่อนหรือพร้อมกันมักคุ้มกว่าการรื้อแผงเพื่อเปลี่ยนหลังคาภายหลัง' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Metal Sheet, Concrete or Tile Roof: How Rooftop Solar Differs for Factories',
        description: 'Compare installing solar on metal-sheet roofs, concrete roof decks and tile roofs: mounting, weight, waterproofing and checks, with photos from real projects.',
        intro: 'The roof type decides how panels are fixed, how much weight is added, the leak risk and the structural cost. Before asking for quotes, know what kind of roof you have and what to ask about it.',
        sections: [
          {
            heading: 'Metal-sheet roofs: the most common in factories',
            photo: ph(22, 0, 'The blue metal-sheet roof of a feed mill with panels laid along the roof planes', 'The blue metal-sheet roof of a feed mill with panels laid along the roof planes'),
            body: ['Metal sheet is the most common factory roof in Thailand. The easiest type to work with is standing seam, where clamps grip the seam without penetrating the sheet. Corrugated or trapezoidal sheets are usually fixed with screws plus a sealing washer or purpose-made pad.'],
            bullets: [
              'Check age and corrosion, especially near the coast or where acid vapour is present',
              'Check for leaks and loose fasteners before mounting panels',
              'Check that the steel frame and purlins can take the added weight and wind load',
              'Mind skylights, roof fans and areas that cannot be walked on',
            ],
          },
          {
            heading: 'Concrete roofs and roof decks: tilted frames',
            photo: ph(12, 9, 'The concrete roof deck of a Bangkok building with panels on angled steel frames', 'The concrete roof deck of a Bangkok building with panels on angled steel frames'),
            body: ['Roof decks usually carry panels on steel frames set at a tilt, held by ballast or anchored into the structure. The advantage is free choice of orientation and tilt. The cautions are the waterproof layer and the added ballast weight.'],
            bullets: [
              'Check the waterproofing and drainage; panels or bases must not block water paths',
              'Have a structural engineer calculate ballast and wind uplift',
              'If anchoring, every penetration must be properly waterproofed',
              'Set row spacing to limit shading between rows',
            ],
          },
          {
            heading: 'Tile roofs, and old roofs that may contain mineral fibre',
            photo: ph(13, 4, 'A factory with several mixed roof types and panels on multiple areas in Bangkok', 'A factory with several mixed roof types and panels on multiple areas in Bangkok'),
            body: ['Tile roofs use hooks fixed to the roof frame; take care with broken tiles and leaks. Old roofs that may contain mineral-fibre material, such as older fibre-cement sheets, must be assessed by a specialist first, and must not be drilled or broken without safety measures. In many cases replacing the roof together with the solar installation is the better option.'],
          },
          {
            heading: 'Weight, wind and waterproofing: three things to calculate every time',
            body: [],
            bullets: [
              'Added weight from panels and mounting is typically in the order of ten-plus kilograms per square metre, depending on the system; an engineer must confirm it against the actual structure',
              'Wind uplift is what pulls panels off; design to the local wind requirements and building height',
              'Every roof penetration needs a clearly specified waterproofing method, ideally with a waterproofing warranty separate from the panel warranty',
              'Maintenance walkways and safety-line anchor points should be designed in from the start',
            ],
          },
          {
            heading: 'If the roof is not suitable, there are options',
            body: ['If the roof is old or cannot take the load, you can reinforce the structure, replace the roof first, or use other space. See [Solar carport for factories](guides/solar-carport-for-factories) and the checklist in [Is your factory roof suitable for solar?](guides/is-my-factory-roof-suitable-for-solar).'],
          },
          {
            heading: 'What to ask your installer for',
            body: [],
            bullets: [
              'A roof and structure condition report with photos',
              'The mounting system chosen and why it suits that roof type',
              'Drawings certified by a licensed engineer where the law or situation requires',
              'A waterproofing warranty and the repair terms if the roof leaks',
              'A plan to remove and reinstall panels if the roof must be replaced later',
            ],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'Weights and engineering requirements on this page are general. A structural engineer must confirm them for the actual building.'] },
        ],
        faq: [
          { q: 'Will solar panels make a metal-sheet roof leak?', a: 'Not necessarily. Use a suitable mounting system, such as clamps for standing-seam roofs or screws with sealing for corrugated sheet, and inspect the roof first.' },
          { q: 'Can I install on a roof that already leaks?', a: 'Repair it before or together with the installation, because fixing leaks under panels afterwards is difficult and may mean removing them.' },
          { q: 'If the roof is old, should I replace it first?', a: 'If the remaining roof life is shorter than the solar system’s life, replacing the roof first or together is usually better than removing panels later.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 10 --------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-sme-retail-farm',
    path: 'guides/rooftop-solar-for-sme-retail-farm',
    kind: 'guide',
    published,
    hero: ph(12, 'banner', 'โซลาร์รูฟท็อปบนอาคารสาขาในกรุงเทพมหานคร ขนาด 112.64 kW', 'Rooftop solar on a branch building in Bangkok, 112.64 kW'),
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปสำหรับ SME ร้านค้าสาขา และฟาร์ม: ระบบขนาดเล็กถึงกลางก็ทำได้',
        description: 'โซลาร์รูฟท็อปไม่ได้มีไว้สำหรับโรงงานใหญ่เท่านั้น ดูว่า SME สาขาร้านค้า และฟาร์มควรพิจารณาอะไร ขนาดระบบเท่าไรจึงเหมาะ พร้อมโครงการจริงขนาด 53 ถึง 202 kW',
        intro: 'หลายคนคิดว่าโซลาร์รูฟท็อปเหมาะกับโรงงานขนาดใหญ่เท่านั้น แต่ธุรกิจขนาดเล็กถึงกลาง เช่น สาขาร้านค้า คลังสินค้า และฟาร์ม ก็ติดได้ หากมีหลังคาเหมาะและใช้ไฟช่วงกลางวัน บทความนี้ช่วยประเมินว่าธุรกิจของคุณเข้าข่ายหรือไม่',
        sections: [
          {
            heading: 'ธุรกิจแบบไหนเข้าข่าย',
            photo: ph(12, 2, 'หลังคาดาดฟ้าของอาคารสาขาในกรุงเทพมหานครที่ติดแผงโซลาร์เรียงเต็มพื้นที่', 'The roof deck of a branch building in Bangkok filled with panels'),
            body: ['ธุรกิจที่ใช้ไฟช่วงกลางวันเป็นหลักและมีหลังคาที่ใช้ได้ เช่น ร้านค้าและสาขาที่เปิดทำการกลางวัน คลังสินค้า ศูนย์กระจายสินค้า ฟาร์มและโรงคัดแยกผลผลิต อาคารสำนักงานที่เป็นของตัวเอง'],
            bullets: [
              'บิลค่าไฟรายเดือนสูงพอที่ระบบจะมีขนาดคุ้มค่าต่อการติดตั้งและบำรุงรักษา',
              'ใช้ไฟช่วงกลางวันเป็นส่วนใหญ่ เช่น ระบบปรับอากาศ ตู้แช่ และเครื่องจักรเบา',
              'เป็นเจ้าของอาคารหรือมีสัญญาเช่ายาวพอ และเจ้าของอาคารอนุญาต',
              'หลังคามีพื้นที่ใช้งานโล่งพอสมควร ไม่ถูกบังเงา',
            ],
          },
          {
            heading: 'ตัวอย่างโครงการขนาดเล็กถึงกลางของเรา',
            body: ['ระบบของ Power Express ที่ไม่ใช่โรงงานขนาดใหญ่'],
            bullets: [
              '[ดันลอปพิลโล่](project/10) สาขาจำหน่ายที่นอนและเครื่องนอน กรุงเทพมหานคร ขนาด 53.12 kW',
              '[เลมอน มี ฟาร์ม](project/6) ฟาร์มผักผลไม้และสินค้าแปรรูป จังหวัดนครปฐม ขนาด 83.385 kW',
              '[เฮ้าส์ คอลเลคชั่น](project/12) สาขาให้เช่าและบริหารอสังหาริมทรัพย์ กรุงเทพมหานคร ขนาด 112.64 kW',
              '[โอมาซซ์ โฮลดิ้ง](project/9) สาขาจำหน่ายที่นอนและเครื่องนอน กรุงเทพมหานคร ขนาด 117.76 kW',
              '[ลีโอวูด อินเตอร์เทรด](project/7) ฟาร์มจำหน่ายผักผลไม้และสินค้าแปรรูป ขนาด 201.6 kW',
              '[ทรัพย์ละออ](project/11) สาขาให้เช่าและบริหารอสังหาริมทรัพย์ กรุงเทพมหานคร ขนาด 202.56 kW',
            ],
          },
          {
            heading: 'อาคารสาขาในเมือง: หลังคาจำกัด ต้องออกแบบให้พอดี',
            photo: ph(12, 10, 'แผงโซลาร์บนหลังคาอาคารสาขาในกรุงเทพมหานคร จัดวางรอบอุปกรณ์ปรับอากาศบนหลังคา', 'Panels on a Bangkok branch building, laid out around rooftop air-conditioning equipment'),
            body: ['หลังคาอาคารสาขาในเมืองมักมีอุปกรณ์ปรับอากาศ ถังน้ำ และโครงสร้างบังเงา การออกแบบจึงต้องวัดพื้นที่ใช้งานจริงและจัดกลุ่มแผงให้เลี่ยงเงา ภาพจากโครงการจริงแสดงการจัดวางแผงรอบอุปกรณ์บนหลังคา'],
          },
          {
            heading: 'ฟาร์มและโรงคัดแยก: โหลดเป็นฤดูกาล',
            photo: ph(6, 'banner', 'โซลาร์รูฟท็อปบนอาคารฟาร์มผักผลไม้ จังหวัดนครปฐม', 'Rooftop solar on a vegetable and fruit farm building in Nakhon Pathom'),
            body: ['ฟาร์มและโรงคัดแยกผลผลิตมีโหลดที่ขึ้นลงตามฤดูเก็บเกี่ยว เช่น ห้องเย็น เครื่องล้างและคัดแยก และปั๊มน้ำ ควรดูบิลย้อนหลังครบ 12 เดือนเพื่อให้เห็นช่วงที่ใช้ไฟสูงและต่ำ แล้วกำหนดขนาดระบบให้เหมาะกับโหลดพื้นฐาน มากกว่าโหลดสูงสุดช่วงเดียว'],
          },
          {
            heading: 'SME เลือกรูปแบบไหนดี',
            body: ['ธุรกิจขนาดเล็กถึงกลางมักไม่ต้องการใช้เงินสดก้อนใหญ่ รูปแบบ PPA ให้ผู้ให้บริการลงทุนและดูแลระบบ โดยธุรกิจจ่ายตามไฟที่ผลิตจริง ส่วนการซื้อเองเหมาะเมื่อมีเงินทุนและต้องการเป็นเจ้าของสินทรัพย์ ดู [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease) และ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'],
          },
          {
            heading: 'เริ่มต้นอย่างไร',
            body: ['เตรียมบิลค่าไฟ 12 เดือน รูปถ่ายหลังคา และข้อมูลเจ้าของอาคารหรือสัญญาเช่า แล้ว [ขอรายงานประเมินฟรี](free-assessment) เราตอบกลับภายใน 48 ชั่วโมง หากหลังคามีข้อจำกัด เราจะแจ้งตรงๆ และอธิบายทางเลือก อ่านเพิ่มที่ [ขั้นตอนทั้งหมด](guides/rooftop-solar-for-factories-complete-guide)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'บิลค่าไฟเดือนละเท่าไรจึงควรพิจารณาโซลาร์', a: 'ไม่มีเกณฑ์ตายตัว ยิ่งบิลสูงและใช้ไฟช่วงกลางวันมาก ยิ่งคุ้มกับการติดตั้ง ส่งบิลมาเพื่อให้เราประเมินจริงได้ฟรี' },
          { q: 'เช่าอาคารอยู่ ติดโซลาร์ได้ไหม', a: 'ได้ หากเจ้าของอาคารอนุญาตเป็นลายลักษณ์อักษร และสัญญาเช่ายาวพอกับอายุสัญญาโซลาร์ ควรตกลงเรื่องการรื้อถอนเมื่อสิ้นสุดสัญญาด้วย' },
          { q: 'ติดแล้วต้องดูแลอะไรเองบ้าง', a: 'ขึ้นกับสัญญา ภายใต้ PPA ผู้ให้บริการมักดูแลบำรุงรักษาและติดตามผล ธุรกิจเพียงจ่ายค่าไฟตามที่ผลิตและแจ้งเมื่อมีการเปลี่ยนแปลงหน้างาน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar for SMEs, Retail Branches and Farms in Thailand: Small and Mid-Size Systems Work Too',
        description: 'Rooftop solar is not only for big factories. What SMEs, retail branches and farms should consider, what system size suits, with real projects from 53 to 202 kW.',
        intro: 'Many people assume rooftop solar is only for large factories, but small and mid-size businesses, such as retail branches, warehouses and farms, can install it if they have a suitable roof and use power in the daytime. This article helps you judge whether your business qualifies.',
        sections: [
          {
            heading: 'Which businesses fit',
            photo: ph(12, 2, 'The roof deck of a branch building in Bangkok filled with panels', 'The roof deck of a branch building in Bangkok filled with panels'),
            body: ['Businesses that use power mainly in daylight and have a usable roof, such as shops and branches open in the daytime, warehouses, distribution centres, farms and packing sheds, and owner-occupied offices.'],
            bullets: [
              'A monthly bill high enough that a system is worth installing and maintaining',
              'Mostly daytime use, such as air-conditioning, chillers and light machinery',
              'You own the building or have a long enough lease, and the landlord agrees',
              'Reasonable clear roof space without shading',
            ],
          },
          {
            heading: 'Our small and mid-size projects',
            body: ['Power Express systems that are not large factories:'],
            bullets: [
              '[Dunlopillo](project/10), a mattress and bedding branch in Bangkok, 53.12 kW',
              '[Lemon Me Farm](project/6), a vegetable, fruit and processed-goods farm in Nakhon Pathom, 83.385 kW',
              '[House Collection](project/12), a rental and real-estate branch in Bangkok, 112.64 kW',
              '[Omazz Holding](project/9), a mattress and bedding branch in Bangkok, 117.76 kW',
              '[Leowood Intertrade](project/7), a vegetable, fruit and processed-goods farm, 201.6 kW',
              '[Suplaor](project/11), a rental and real-estate branch in Bangkok, 202.56 kW',
            ],
          },
          {
            heading: 'City branch buildings: limited roof, design must fit',
            photo: ph(12, 10, 'Panels on a Bangkok branch building, laid out around rooftop air-conditioning equipment', 'Panels on a Bangkok branch building, laid out around rooftop air-conditioning equipment'),
            body: ['City branch roofs often carry air-conditioning units, water tanks and shading structures. The design must measure the real usable area and group panels to avoid shade. The real photos show panels laid out around rooftop equipment.'],
          },
          {
            heading: 'Farms and packing sheds: seasonal load',
            photo: ph(6, 'banner', 'Rooftop solar on a vegetable and fruit farm building in Nakhon Pathom', 'Rooftop solar on a vegetable and fruit farm building in Nakhon Pathom'),
            body: ['Farms and packing sheds have loads that rise and fall with the harvest: cold rooms, washing and grading machines and water pumps. Look at a full 12 months of bills to see the high and low periods, and size the system to the base load rather than a single peak.'],
          },
          {
            heading: 'Which model suits an SME',
            body: ['Small and mid-size businesses often prefer not to commit a large amount of cash. A PPA lets the provider invest in and maintain the system while the business pays for the power produced. Buying suits those with capital who want to own the asset. See [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease) and the [complete private PPA guide](guides/private-ppa-complete-guide).'],
          },
          {
            heading: 'How to start',
            body: ['Prepare 12 months of bills, photos of the roof and details of the building owner or lease, then [request a free assessment](free-assessment). We reply within 48 hours. If the roof has limits we will say so plainly and explain the options. Read more in the [complete guide](guides/rooftop-solar-for-factories-complete-guide).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'What monthly bill justifies considering solar?', a: 'There is no fixed threshold. The higher the bill and the more daytime use, the better the case. Send your bill and we will assess it free.' },
          { q: 'We rent our building. Can we install solar?', a: 'Yes, if the landlord agrees in writing and the lease is long enough to match the solar contract. Agree on removal at the end of the term too.' },
          { q: 'What do we have to look after ourselves?', a: 'It depends on the contract. Under a PPA the provider usually handles maintenance and monitoring; you pay for the power produced and tell them about site changes.' },
        ],
        cta: cta.en,
      },
    },
  },
];
