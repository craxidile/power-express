// Articles 26-33 plus the Impact and Press pages. Facts checked 2026-11-01 (sources: Post Today,
// Daily News, Thai PBS on the Climate Change Act; SEC/SET and law-firm notes on One Report/ISSB;
// ERC announcement for the Sep-Dec 2026 Ft; TGO emission factor via Nation Thailand).
// Where sources disagreed or were unconfirmed, the text says "check the current status".
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ตรวจสอบข้อมูลล่าสุดเมื่อ 1 พฤศจิกายน 2569 กฎระเบียบเปลี่ยนได้ ควรยืนยันกับหน่วยงานที่เกี่ยวข้องและที่ปรึกษาก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Last checked on 1 November 2026. Rules change, so confirm with the relevant authorities and an adviser before you decide.';
const ph = (project, index, th, en) => ({ project, index, alt: { th, en } });

module.exports = [
  // 26 --------------------------------------------------------------------------------------
  {
    slug: 'guide-climate-change-act',
    path: 'guides/thailand-climate-change-act-factories',
    kind: 'guide',
    published,
    hero: ph(2, 3, 'โรงงานผลิตประตูหน้าต่างโลหะที่ติดโซลาร์รูฟท็อปเพื่อลดไฟฟ้าจากระบบ นครปฐม', 'A metal door and window factory with rooftop solar to cut grid electricity, Nakhon Pathom'),
    text: {
      th: {
        title: 'ร่าง พ.ร.บ.การเปลี่ยนแปลงสภาพภูมิอากาศ (พ.ร.บ.โลกร้อน): โรงงานควรเตรียมตัวอย่างไร',
        description: 'สถานะล่าสุดของร่าง พ.ร.บ.โลกร้อนของไทย กลไกที่โรงงานต้องรู้ เช่น ETS ภาษีคาร์บอน และ MRV และวิธีเริ่มเตรียมข้อมูลก๊าซเรือนกระจกรวมถึง Scope 2 จากไฟฟ้า',
        intro: 'โรงงานที่ส่งออกหรือขายให้แบรนด์ข้ามชาติได้ยินเรื่อง "พ.ร.บ.โลกร้อน" มากขึ้น แต่ข้อมูลที่ออกมามักสับสนว่าบังคับใช้แล้วหรือยัง บทความนี้สรุปสถานะตามข่าวและรายงานล่าสุด บอกชัดว่ายังไม่ใช่กฎหมายที่บังคับใช้ และแนะนำสิ่งที่โรงงานเตรียมได้ตั้งแต่ตอนนี้',
        sections: [
          {
            heading: 'สถานะล่าสุด (ตรวจเมื่อ 1 พฤศจิกายน 2569)',
            photo: ph(2, 7, 'หลังคาโรงงานนครปฐมที่ติดโซลาร์ ซึ่งเป็นหนึ่งวิธีลดการปล่อยก๊าซเรือนกระจกจากไฟฟ้าที่ซื้อ', 'A Nakhon Pathom factory roof with solar, one way to cut emissions from purchased electricity'),
            body: ['ตามที่สื่อและสำนักข่าวรายงาน ร่างพระราชบัญญัติการเปลี่ยนแปลงสภาพภูมิอากาศ พ.ศ. .... ยังไม่มีผลบังคับใช้'],
            bullets: [
              'คณะรัฐมนตรีเห็นชอบในหลักการเมื่อวันที่ 2 ธันวาคม 2568',
              'ส่งให้คณะกรรมการกฤษฎีกาตรวจพิจารณาตั้งแต่ 5 พฤษภาคม 2569 และอยู่ระหว่างการพิจารณารายมาตรา',
              'รัฐบาลตั้งเป้าให้บังคับใช้ภายในปี 2569 แต่กระบวนการล่าช้ากว่าที่คาด จึงยังไม่มีวันที่แน่นอน',
            ],
          },
          {
            heading: 'กลไกที่ร่างกฎหมายพูดถึง',
            body: ['จากรายงาน ร่างมีกลไกเศรษฐกิจคาร์บอนหลายอย่าง ซึ่งรายละเอียดอาจเปลี่ยนก่อนประกาศใช้'],
            bullets: [
              'ระบบซื้อขายสิทธิการปล่อยก๊าซเรือนกระจก (ETS)',
              'ภาษีคาร์บอนหรือกลไกราคาคาร์บอนอื่น',
              'ระบบรายงาน ตรวจวัด และทวนสอบ (MRV) ข้อมูลการปล่อยก๊าซเรือนกระจก',
              'ฐานข้อมูลก๊าซเรือนกระจกของประเทศ',
            ],
          },
          {
            heading: 'ส่วนที่ยังไม่ชัด',
            body: ['จากแหล่งที่ตรวจ ยังไม่พบรายละเอียดทางการเรื่องกลุ่มโรงงานที่ถูกบังคับก่อน ขอบเขต Scope 1 และ Scope 2 อัตราภาษี หรือเกณฑ์ของ ETS ข้อมูลเหล่านี้มักกำหนดในกฎหมายลำดับรอง ไม่ควรเชื่อตัวเลขที่ไม่ระบุที่มา'],
          },
          {
            heading: 'ทำไมโรงงานควรเตรียมก่อนกฎหมายบังคับ',
            body: [],
            bullets: [
              'ลูกค้าต่างประเทศและแบรนด์ใหญ่ขอข้อมูลการปล่อยก๊าซจากซัพพลายเออร์แล้วในปัจจุบัน ดู [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar)',
              'บริษัทจดทะเบียนต้องรายงานด้านสิ่งแวดล้อมใน One Report ซึ่งดึงข้อมูลจากซัพพลายเออร์ ดู [One Report และ Scope 2](guides/one-report-esg-scope-2-listed-companies-thailand)',
              'ข้อมูลที่เก็บล่วงหน้าทำให้เตรียมตัวทวนสอบได้เร็วเมื่อกฎหมายออก',
            ],
          },
          {
            heading: 'เริ่มจากไฟฟ้า: Scope 2 ที่ลดได้เร็วที่สุด',
            photo: ph(2, 10, 'แผงโซลาร์บนหลังคาโรงงานที่ผลิตไฟใช้เองเพื่อลดการปล่อยก๊าซเรือนกระจกขอบเขตที่ 2', 'Panels on a factory roof generating power for own use to cut Scope 2 emissions'),
            body: ['โรงงานจำนวนมากมี Scope 2 (ไฟฟ้าที่ซื้อ) เป็นสัดส่วนใหญ่ของการปล่อย โซลาร์รูฟท็อปลดไฟที่ซื้อจึงลด Scope 2 ได้โดยตรง และระบบติดตามผลให้ข้อมูลผลิตไฟที่ทวนสอบได้ ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting) และวิธีคำนวณที่ [คำนวณ CO2 ที่หลีกเลี่ยงได้จากโซลาร์](guides/calculate-co2-avoided-rooftop-solar-thailand)'],
          },
          {
            heading: 'เช็กลิสต์เตรียมความพร้อม',
            body: [],
            bullets: [
              'ตั้งคนรับผิดชอบข้อมูลก๊าซเรือนกระจกของโรงงาน',
              'เก็บบิลไฟฟ้าและข้อมูลเชื้อเพลิงรายเดือนในที่เดียว',
              'เลือกวิธีและค่าสัมประสิทธิ์การปล่อยที่ใช้อ้างอิงและจดบันทึกไว้',
              'คุยกับลูกค้าหลักว่าต้องการข้อมูลรูปแบบใด',
              'ประเมินโซลาร์รูฟท็อปเป็นมาตรการลดแรกๆ ดู [โซลาร์รูฟท็อปสำหรับโรงงาน คู่มือฉบับสมบูรณ์](guides/rooftop-solar-for-factories-complete-guide)',
            ],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'หน้านี้ไม่ใช่คำแนะนำทางกฎหมาย และสถานะร่างกฎหมายเปลี่ยนได้ ตรวจกับกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อมหรือราชกิจจานุเบกษา'] },
        ],
        faq: [
          { q: 'พ.ร.บ.โลกร้อนบังคับใช้แล้วหรือยัง', a: 'ตามรายงานล่าสุดที่ตรวจเมื่อ 1 พฤศจิกายน 2569 ยังไม่บังคับใช้ ร่างอยู่ระหว่างการพิจารณาของคณะกรรมการกฤษฎีกา' },
          { q: 'โรงงานของฉันจะถูกบังคับเข้าระบบ ETS หรือไม่', a: 'ยังไม่มีเกณฑ์ที่ยืนยันได้ ควรติดตามประกาศและกฎหมายลำดับรอง และเตรียมข้อมูลก๊าซเรือนกระจกไว้ล่วงหน้า' },
          { q: 'โซลาร์รูฟท็อปช่วยเรื่องนี้อย่างไร', a: 'ลดไฟที่ซื้อจากระบบ จึงลดการปล่อย Scope 2 และมีข้อมูลผลิตไฟสำหรับรายงาน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Thailand’s Draft Climate Change Act: How Factories Should Prepare',
        description: 'The latest status of Thailand’s draft Climate Change Act, the mechanisms factories should know (ETS, carbon pricing, MRV), and how to start preparing greenhouse-gas data including Scope 2 from electricity.',
        intro: 'Exporters and suppliers to multinational brands hear about Thailand’s “climate change law” more and more, but reports are confusing about whether it is in force. This article summarises the status from recent reports, states clearly that it is not yet in force, and suggests what a factory can prepare now.',
        sections: [
          {
            heading: 'Latest status (checked 1 November 2026)',
            photo: ph(2, 7, 'A Nakhon Pathom factory roof with solar, one way to cut emissions from purchased electricity', 'A Nakhon Pathom factory roof with solar, one way to cut emissions from purchased electricity'),
            body: ['As reported by the media, the draft Climate Change Act B.E. .... is not yet in force.'],
            bullets: [
              'The Cabinet approved it in principle on 2 December 2025',
              'It was sent to the Council of State for review from 5 May 2026, where section-by-section review is under way',
              'The government aimed for enforcement within 2026, but the process has run later than expected, so there is no firm date',
            ],
          },
          {
            heading: 'Mechanisms the draft is reported to include',
            body: ['According to reports, the draft contains several carbon-economy mechanisms, and details may change before it is issued.'],
            bullets: [
              'An emissions trading system (ETS)',
              'A carbon tax or other carbon-pricing mechanism',
              'A system for measurement, reporting and verification (MRV) of greenhouse-gas emissions',
              'A national greenhouse-gas database',
            ],
          },
          {
            heading: 'What is still unclear',
            body: ['From the sources checked we found no official detail on which factories are covered first, the scope of Scope 1 and Scope 2, tax rates or ETS thresholds. These are usually set in secondary legislation. Do not rely on figures that cite no source.'],
          },
          {
            heading: 'Why prepare before the law applies',
            body: [],
            bullets: [
              'Foreign customers and large brands already ask suppliers for emissions data. See [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar)',
              'Listed companies must report environmental data in the One Report, which draws on supplier data. See [One Report and Scope 2](guides/one-report-esg-scope-2-listed-companies-thailand)',
              'Data collected early speeds up verification when the law arrives',
            ],
          },
          {
            heading: 'Start with electricity: the fastest Scope 2 cut',
            photo: ph(2, 10, 'Panels on a factory roof generating power for own use to cut Scope 2 emissions', 'Panels on a factory roof generating power for own use to cut Scope 2 emissions'),
            body: ['For many factories Scope 2 (purchased electricity) is a large share of emissions. Rooftop solar reduces purchased power and so cuts Scope 2 directly, and the monitoring system provides verifiable generation data. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting) and the calculation in [Calculating CO2 avoided by rooftop solar](guides/calculate-co2-avoided-rooftop-solar-thailand).'],
          },
          {
            heading: 'Preparation checklist',
            body: [],
            bullets: [
              'Name a person responsible for the plant’s greenhouse-gas data',
              'Keep monthly electricity and fuel data in one place',
              'Choose the method and emission factors you reference, and record them',
              'Ask key customers what format of data they need',
              'Evaluate rooftop solar as one of the first reduction measures. See [Rooftop solar for factories: the complete guide](guides/rooftop-solar-for-factories-complete-guide)',
            ],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'This page is not legal advice, and the status of a draft law can change. Check with the Department of Climate Change and Environment or the Royal Gazette.'] },
        ],
        faq: [
          { q: 'Is the climate change act in force?', a: 'According to the latest reports checked on 1 November 2026, no. The draft is under review by the Council of State.' },
          { q: 'Will my factory be forced into the ETS?', a: 'There are no confirmed criteria yet. Follow announcements and secondary rules, and prepare greenhouse-gas data in advance.' },
          { q: 'How does rooftop solar help?', a: 'It reduces purchased electricity, cutting Scope 2 emissions, and provides generation data for reporting.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 27 --------------------------------------------------------------------------------------
  {
    slug: 'guide-one-report-scope2',
    path: 'guides/one-report-esg-scope-2-listed-companies-thailand',
    kind: 'guide',
    published,
    hero: ph(17, 'banner', 'โรงงานผลิตภัณฑ์น้ำมันหล่อลื่นและเคมีภัณฑ์ของบริษัทจดทะเบียนที่ติดโซลาร์รูฟท็อป สมุทรสาคร', 'A lubricant and chemicals plant of a listed company with rooftop solar, Samut Sakhon'),
    text: {
      th: {
        title: 'One Report กับก๊าซเรือนกระจก Scope 2: สิ่งที่บริษัทจดทะเบียนและซัพพลายเออร์ต้องรู้',
        description: 'บริษัทจดทะเบียนไทยรายงานก๊าซเรือนกระจกใน One Report อย่างไร ทิศทางตามมาตรฐาน ISSB (IFRS S2) และโซลาร์รูฟท็อปช่วยเรื่อง Scope 2 และข้อมูลที่ซัพพลายเออร์ต้องเตรียม',
        intro: 'บริษัทจดทะเบียนในตลาดหลักทรัพย์ต้องเปิดเผยข้อมูลด้านสิ่งแวดล้อมและสังคมใน One Report (แบบ 56-1) และกำลังเคลื่อนไปสู่มาตรฐานที่สอดคล้องกับ ISSB บทความนี้อธิบายภาพรวมและผลต่อโรงงานซัพพลายเออร์และบริษัทที่ต้องการลด Scope 2',
        sections: [
          {
            heading: 'One Report คืออะไร',
            body: ['One Report คือรายงานประจำปีรวม (แบบ 56-1 One Report) ที่บริษัทจดทะเบียนยื่นผ่านระบบของตลาดหลักทรัพย์และ ก.ล.ต. โดยรวมข้อมูลธุรกิจกับข้อมูลด้านสิ่งแวดล้อม สังคม และธรรมาภิบาล (ESG) ซึ่งรวมการปล่อยก๊าซเรือนกระจกด้วย'],
          },
          {
            heading: 'ทิศทาง: ISSB และ IFRS S2',
            body: ['ตามรายงานของสำนักงานกฎหมายและเอกสารของ ก.ล.ต. ไทยกำลังปรับให้การเปิดเผยข้อมูลด้านภูมิอากาศสอดคล้องกับมาตรฐาน ISSB (IFRS S1 และ S2) โดยเน้น Scope 1 และ Scope 2 ก่อน และให้ Scope 3 ตามมาภายหลัง'],
            bullets: [
              'ร่างปรับปรุงแบบ 56-1 One Report เผยแพร่เมื่อกันยายน 2568 ครอบคลุมขอบเขต กรอบเวลา และการสอบทานข้อมูล',
              'มีรายงานว่าการนำไปใช้แบบเป็นระยะอาจเริ่มกับบริษัทขนาดใหญ่ก่อน แต่ยังไม่พบหนังสือเวียนทางการที่ยืนยันวันที่สุดท้าย ควรตรวจกับ ก.ล.ต. และตลาดหลักทรัพย์',
            ],
          },
          {
            heading: 'Scope 1, 2, 3 สั้นๆ',
            photo: ph(17, 0, 'หลังคาโรงงานเคมีภัณฑ์ที่ติดโซลาร์ ซึ่งลดการปล่อยก๊าซเรือนกระจกจากไฟฟ้าที่ซื้อ', 'A chemicals plant roof with solar, cutting emissions from purchased electricity'),
            body: [],
            bullets: [
              'Scope 1: การปล่อยโดยตรงจากเชื้อเพลิงและกระบวนการของบริษัท',
              'Scope 2: การปล่อยทางอ้อมจากไฟฟ้าที่ซื้อมาใช้',
              'Scope 3: การปล่อยตลอดห่วงโซ่คุณค่า เช่น วัตถุดิบ การขนส่ง และสินค้าที่ซื้อ',
            ],
          },
          {
            heading: 'ทำไมซัพพลายเออร์ได้รับผลกระทบ',
            body: ['การปล่อยของซัพพลายเออร์เป็น Scope 3 ของบริษัทจดทะเบียนที่ซื้อสินค้า เมื่อ Scope 3 ถูกเปิดเผยมากขึ้น โรงงานซัพพลายเออร์จะถูกขอข้อมูลก๊าซเรือนกระจกและเป้าหมายการลดมากขึ้น ผู้ที่เตรียมข้อมูลพร้อมมักได้เปรียบในการคัดเลือกซัพพลายเออร์'],
          },
          {
            heading: 'โซลาร์รูฟท็อปช่วยบริษัทและซัพพลายเออร์อย่างไร',
            body: [],
            bullets: [
              'ลดไฟที่ซื้อจากระบบ จึงลด Scope 2 แบบอิงที่ตั้ง (location-based)',
              'มีข้อมูลผลิตไฟรายเดือนจากระบบติดตามผล ใช้ประกอบรายงานและการทวนสอบ',
              'ใช้ร่วมกับใบรับรองพลังงานหมุนเวียนเพื่อรายงาน Scope 2 แบบอิงตลาด (market-based) ได้ในบางกรณี ดู [UGT คืออะไร](guides/utility-green-tariff-ugt-thailand-explained)',
            ],
          },
          {
            heading: 'ข้อมูลที่ควรขอจากผู้ให้บริการโซลาร์',
            body: [],
            bullets: ['ข้อมูลไฟฟ้าที่ผลิตรายเดือน (kWh) จากมิเตอร์หรือระบบติดตามผล', 'วันที่เริ่มเดินเครื่อง (COD) และบันทึกการหยุดซ่อม', 'ข้อสัญญาเรื่องการโอนหรือการนับใบรับรองพลังงานหมุนเวียน ว่าเป็นของใคร', 'รูปแบบรายงานที่ลูกค้าหรือผู้สอบทานยอมรับ'],
          },
          {
            heading: 'อ่านต่อ',
            body: ['รายละเอียดเทคนิคการรายงานที่ [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting) การคำนวณที่ [คำนวณ CO2 ที่หลีกเลี่ยงได้](guides/calculate-co2-avoided-rooftop-solar-thailand) และสถานะกฎหมายที่ [ร่าง พ.ร.บ.โลกร้อน](guides/thailand-climate-change-act-factories)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'กรอบเวลาและขอบเขตการเปิดเผยตามมาตรฐาน ISSB ในไทยยังเปลี่ยนแปลงได้ ตรวจกับ ก.ล.ต. และตลาดหลักทรัพย์'] },
        ],
        faq: [
          { q: 'บริษัทจดทะเบียนต้องรายงาน Scope 2 หรือไม่', a: 'One Report เปิดเผยข้อมูลก๊าซเรือนกระจกอยู่แล้ว และทิศทางตามมาตรฐาน ISSB เน้น Scope 1 และ 2 ก่อน ควรตรวจข้อกำหนดล่าสุดกับ ก.ล.ต. ตามขนาดและกลุ่มบริษัท' },
          { q: 'ซัพพลายเออร์ที่ไม่ได้จดทะเบียนต้องสนใจหรือไม่', a: 'ควรสนใจ เพราะลูกค้าที่เป็นบริษัทจดทะเบียนอาจขอข้อมูลก๊าซเรือนกระจกเพื่อใช้เป็น Scope 3 ของตน' },
          { q: 'โซลาร์ทำให้ Scope 2 เป็นศูนย์ได้หรือไม่', a: 'ลดได้เท่ากับไฟที่ผลิตและใช้เอง ส่วนที่เหลือที่ซื้อจากระบบยังนับเป็น Scope 2' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'One Report and Scope 2 Emissions: What Thai Listed Companies and Their Suppliers Should Know',
        description: 'How Thai listed companies report greenhouse-gas emissions in the One Report, the direction toward ISSB (IFRS S2), and how rooftop solar helps Scope 2 and what data suppliers should prepare.',
        intro: 'Companies listed on the Stock Exchange of Thailand disclose environmental and social information in the One Report (Form 56-1) and are moving toward ISSB-aligned standards. This article explains the picture and what it means for supplier factories and companies that want to cut Scope 2.',
        sections: [
          {
            heading: 'What is the One Report?',
            body: ['The One Report (Form 56-1 One Report) is the combined annual report that listed companies file through the SET and SEC systems. It combines business information with environmental, social and governance (ESG) information, including greenhouse-gas emissions.'],
          },
          {
            heading: 'The direction: ISSB and IFRS S2',
            body: ['According to law-firm reports and SEC documents, Thailand is aligning climate disclosure with the ISSB standards (IFRS S1 and S2), focusing on Scope 1 and Scope 2 first with Scope 3 to follow.'],
            bullets: [
              'Draft amendments to the Form 56-1 One Report were published in September 2025 covering scope, timeline and assurance',
              'Reports suggest a phased roll-out may begin with the largest companies, but we found no official circular confirming final dates. Check with the SEC and the SET.',
            ],
          },
          {
            heading: 'Scope 1, 2 and 3 in short',
            photo: ph(17, 0, 'A chemicals plant roof with solar, cutting emissions from purchased electricity', 'A chemicals plant roof with solar, cutting emissions from purchased electricity'),
            body: [],
            bullets: [
              'Scope 1: direct emissions from the company’s own fuel and processes',
              'Scope 2: indirect emissions from purchased electricity',
              'Scope 3: emissions across the value chain, such as materials, transport and purchased goods',
            ],
          },
          {
            heading: 'Why suppliers are affected',
            body: ['A supplier’s emissions are part of the buying company’s Scope 3. As Scope 3 is disclosed more widely, supplier factories will be asked for greenhouse-gas data and reduction targets. Suppliers that have the data ready often have an edge in selection.'],
          },
          {
            heading: 'How rooftop solar helps companies and suppliers',
            body: [],
            bullets: [
              'It reduces purchased power, cutting location-based Scope 2',
              'It provides monthly generation data from monitoring for reports and verification',
              'It can be combined with renewable-energy certificates for market-based Scope 2 reporting in some cases. See [What is UGT?](guides/utility-green-tariff-ugt-thailand-explained)',
            ],
          },
          {
            heading: 'Data to ask your solar provider for',
            body: [],
            bullets: ['Monthly generation (kWh) from the meter or monitoring system', 'The commercial operation date (COD) and records of outages', 'Contract terms on who owns or counts the renewable certificates', 'A report format your customer or assurer accepts'],
          },
          {
            heading: 'Read next',
            body: ['Technical reporting detail in [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting), the calculation in [Calculating CO2 avoided](guides/calculate-co2-avoided-rooftop-solar-thailand), and legal status in the [draft Climate Change Act](guides/thailand-climate-change-act-factories).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'Timelines and the scope of ISSB-aligned disclosure in Thailand can still change. Check with the SEC and the SET.'] },
        ],
        faq: [
          { q: 'Do listed companies have to report Scope 2?', a: 'The One Report already covers greenhouse-gas data, and the ISSB direction focuses on Scopes 1 and 2 first. Check the latest requirement with the SEC for your size and group.' },
          { q: 'Should an unlisted supplier care?', a: 'Yes, because listed customers may ask for your emissions data for their own Scope 3.' },
          { q: 'Can solar bring Scope 2 to zero?', a: 'It cuts Scope 2 by the energy generated and used on site. Power still bought from the grid counts as Scope 2.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 28 --------------------------------------------------------------------------------------
  {
    slug: 'guide-tariff-update-2026',
    path: 'guides/factory-electricity-tariff-sep-dec-2026',
    kind: 'guide',
    published,
    hero: ph(16, 3, 'โซลาร์รูฟท็อปบนโรงงานผลิตภัณฑ์กระดาษแปรรูป กรุงเทพมหานคร ที่ช่วยลดไฟที่ซื้อจากการไฟฟ้า', 'Rooftop solar on a processed-paper plant in Bangkok that cuts power bought from the utility'),
    text: {
      th: {
        title: 'ค่าไฟโรงงานงวด ก.ย.-ธ.ค. 2569: ค่า Ft อัตราเฉลี่ย และความเสี่ยงงวดถัดไป',
        description: 'สรุปค่า Ft และค่าไฟเฉลี่ยของงวด ก.ย.-ธ.ค. 2569 ที่ กกพ. ประกาศ เงินที่นำมาพยุงค่าไฟ ความเสี่ยงงวดหน้า และวิธีที่โรงงานป้องกันค่าไฟผันผวน (อัปเดต 1 พ.ย. 2569)',
        intro: 'หน้านี้สรุปอัตราค่าไฟฟ้าล่าสุดที่โรงงานควรรู้ และจะอัปเดตทุกครั้งที่ กกพ. ประกาศงวดใหม่ ตัวเลขทั้งหมดอ้างอิงประกาศของ กกพ. ตามที่สื่อรายงาน โปรดตรวจฉบับเต็มของ กกพ. ก่อนใช้ในการตัดสินใจทางการเงิน',
        sections: [
          {
            heading: 'ตัวเลขล่าสุด (งวด ก.ย.-ธ.ค. 2569)',
            body: ['ตามรายงานข่าวจากประกาศของ กกพ.'],
            bullets: [
              'ค่า Ft งวด ก.ย.-ธ.ค. 2569 อยู่ที่ 16.23 สตางค์ต่อหน่วย',
              'ค่าไฟฟ้าฐาน 3.78 บาทต่อหน่วย',
              'ค่าไฟเฉลี่ยที่เรียกเก็บประมาณ 3.95 บาทต่อหน่วย (ยังไม่รวมภาษีมูลค่าเพิ่ม)',
              'ค่าไฟของแต่ละประเภทผู้ใช้ไฟต่างกัน ตรวจในบิลและประกาศฉบับเต็มของ กกพ.',
            ],
          },
          {
            heading: 'ราคานี้ถูกพยุงไว้อย่างไร',
            photo: ph(16, 8, 'หลังคาโรงงานผลิตภัณฑ์กระดาษในกรุงเทพมหานครที่ติดโซลาร์ ลดผลกระทบจากค่าไฟที่ผันผวน', 'A Bangkok paper-products plant roof with solar, reducing exposure to volatile tariffs'),
            body: ['ตามรายงาน กกพ. นำเงิน claw back ราว 1.6 หมื่นล้านบาทมาช่วยพยุงค่า Ft เพื่อตรึงค่าไฟเฉลี่ยไว้ที่ราว 3.95 บาท ก่อนประกาศมีการรับฟังความคิดเห็นหลายทางเลือกที่ค่าไฟเฉลี่ยอยู่ระหว่างประมาณ 3.95 ถึง 4.73 บาทต่อหน่วย', 'การพยุงด้วยเงินก้อนหนึ่งครั้งหมายความว่า งวดถัดไปมีความเสี่ยงที่ค่าไฟจะเพิ่มได้หากต้นทุนเชื้อเพลิงและการซื้อไฟยังสูง'],
          },
          {
            heading: 'งวดถัดไป',
            body: ['กกพ. ประกาศค่า Ft เป็นรายงวดทุกสี่เดือน งวดถัดไปคือ ม.ค.-เม.ย. 2570 ซึ่งมักเปิดรับฟังความคิดเห็นและประกาศก่อนเริ่มงวด ติดตามที่เว็บไซต์ กกพ. และหน้านี้จะอัปเดตเมื่อมีประกาศ'],
          },
          {
            heading: 'ผลต่อโรงงานและต้นทุนการผลิต',
            body: [],
            bullets: [
              'โรงงานใช้ไฟมาก ค่าไฟเป็นต้นทุนที่ผันผวนตามเชื้อเพลิงและนโยบาย',
              'ค่าไฟที่ลดได้จากโซลาร์คือส่วนที่ทดแทนค่าพลังงานและ Ft ไม่ใช่ทั้งบิล ดู [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained)',
              'สัญญา PPA ที่กำหนดราคาต่อหน่วยชัดเจนเป็นการลดความไม่แน่นอนส่วนหนึ่งของต้นทุนไฟ ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)',
            ],
          },
          {
            heading: 'โรงงานทำอะไรได้บ้าง',
            body: ['ตรวจอัตราค่าไฟและโหลดของโรงงาน ลดยอดพุ่ง และพิจารณาผลิตไฟเอง ดู [ลดค่าไฟโรงงาน 7 วิธี](guides/7-ways-to-reduce-factory-electricity-cost) และ [วิธีประเมินผลประหยัดเบื้องต้น](guides/how-to-estimate-factory-solar-savings)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ตัวเลขนี้ไม่ใช่ประกาศทางการ แหล่งข่าวบางแห่งรายงานตัวเลขเฉลี่ยต่างกันเล็กน้อย ใช้ประกาศฉบับเต็มของ กกพ. เป็นหลัก'] },
        ],
        faq: [
          { q: 'ค่า Ft งวดล่าสุดเท่าไร', a: 'ตามรายงาน กกพ. งวด ก.ย.-ธ.ค. 2569 ค่า Ft อยู่ที่ 16.23 สตางค์ต่อหน่วย ตรวจประกาศฉบับเต็มของ กกพ. เพื่อยืนยัน' },
          { q: 'ค่าไฟจะขึ้นอีกหรือไม่', a: 'ไม่มีใครยืนยันได้ ราคาปัจจุบันถูกพยุงด้วยเงินก้อนหนึ่งครั้ง งวดถัดไปมีความเสี่ยงขึ้น ควรเตรียมแผนลดความเสี่ยง' },
          { q: 'หน้านี้อัปเดตเมื่อไร', a: 'เราอัปเดตเมื่อ กกพ. ประกาศงวดใหม่ ข้อมูลล่าสุดตรวจเมื่อ 1 พฤศจิกายน 2569' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Factory Electricity Tariff for Sep-Dec 2026: the Ft Charge, Average Rate and Risk for the Next Period',
        description: 'The Ft charge and average tariff for Sep-Dec 2026 as announced by the ERC, the funds used to hold it down, the risk next period, and how factories can reduce exposure to volatile power prices (updated 1 Nov 2026).',
        intro: 'This page summarises the latest electricity tariff factories should know and will be updated each time the ERC announces a new period. All figures follow the ERC announcement as reported by the media. Check the ERC’s full notice before using it in financial decisions.',
        sections: [
          {
            heading: 'Latest figures (Sep-Dec 2026 period)',
            body: ['As reported from the ERC announcement:'],
            bullets: [
              'The Ft charge for Sep-Dec 2026 is 16.23 satang per unit',
              'The base tariff is 3.78 baht per unit',
              'The average tariff charged is about 3.95 baht per unit (before VAT)',
              'Rates differ by customer class, so check your bill and the ERC’s full notice',
            ],
          },
          {
            heading: 'How the price is being held',
            photo: ph(16, 8, 'A Bangkok paper-products plant roof with solar, reducing exposure to volatile tariffs', 'A Bangkok paper-products plant roof with solar, reducing exposure to volatile tariffs'),
            body: ['According to reports, the ERC used about 16 billion baht of claw-back funds to support the Ft and hold the average tariff near 3.95 baht. Before the announcement, several options were consulted on, with average tariffs between roughly 3.95 and 4.73 baht per unit.', 'Support from a one-off fund means there is a risk that the tariff could rise in the next period if fuel and power-purchase costs stay high.'],
          },
          {
            heading: 'The next period',
            body: ['The ERC sets Ft every four months. The next period is Jan-Apr 2027, usually consulted on and announced before it starts. Follow the ERC website; this page will be updated when it is announced.'],
          },
          {
            heading: 'What it means for factories and production cost',
            body: [],
            bullets: [
              'A heavy electricity user faces a cost that moves with fuel and policy',
              'What solar offsets is the energy and Ft part, not the whole bill. See [What is the Ft charge?](guides/ft-electricity-tariff-explained)',
              'A PPA with a clearly defined unit price removes part of the uncertainty in power cost. See the [complete private PPA guide](guides/private-ppa-complete-guide)',
            ],
          },
          {
            heading: 'What factories can do',
            body: ['Check your tariff and load, cut peaks, and consider generating your own. See [7 ways to reduce factory electricity cost](guides/7-ways-to-reduce-factory-electricity-cost) and [How to estimate savings](guides/how-to-estimate-factory-solar-savings).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'These figures are not an official notice; some sources report slightly different averages. Use the ERC’s full announcement as the reference.'] },
        ],
        faq: [
          { q: 'What is the latest Ft charge?', a: 'According to ERC reporting, 16.23 satang per unit for Sep-Dec 2026. Check the ERC’s full notice to confirm.' },
          { q: 'Will tariffs rise again?', a: 'No one can confirm. The current price is held by a one-off fund, so the next period carries a risk of an increase. Plan to reduce exposure.' },
          { q: 'When is this page updated?', a: 'When the ERC announces a new period. Last checked on 1 November 2026.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 29 --------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-chiller',
    path: 'guides/rooftop-solar-with-chiller-cooling-as-a-service',
    kind: 'guide',
    published,
    hero: ph(19, 'banner', 'โรงงานอาหารทะเลแช่แข็งที่มีภาระทำความเย็นสูง ติดโซลาร์รูฟท็อป ระนอง', 'A frozen seafood plant with a heavy refrigeration load and rooftop solar, Ranong'),
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปควบคู่ชิลเลอร์ประสิทธิภาพสูง: ลดค่าไฟทั้งสองด้านของระบบทำความเย็น',
        description: 'โรงงานและอาคารที่ใช้ระบบทำความเย็นลดค่าไฟได้สองทาง คือผลิตไฟเองด้วยโซลาร์ และใช้ไฟน้อยลงด้วยชิลเลอร์ประสิทธิภาพสูง ดูวิธีคิดและสิ่งที่ต้องตรวจก่อนทำ',
        intro: 'ระบบทำความเย็นเป็นภาระไฟฟ้าหลักของโรงงานอาหาร ห้องเย็น โรงพยาบาล โรงแรม และห้างสรรพสินค้า การลดค่าไฟทำได้สองทางที่เสริมกัน คือ ผลิตไฟเองด้วยโซลาร์รูฟท็อป และลดปริมาณไฟที่ระบบทำความเย็นใช้ด้วยชิลเลอร์ประสิทธิภาพสูง',
        sections: [
          {
            heading: 'ทำไมสองอย่างนี้เสริมกัน',
            photo: ph(19, 1, 'หลังคาโรงงานอาหารแช่แข็งที่ติดโซลาร์ ผลิตไฟช่วงกลางวันที่ภาระความเย็นสูง', 'The roof of a frozen-food plant with solar, producing power in daytime when cooling load is high'),
            body: ['ภาระความเย็นมักสูงในช่วงกลางวันและวันที่อากาศร้อน ซึ่งเป็นเวลาเดียวกับที่โซลาร์ผลิตไฟมากที่สุด ไฟจากโซลาร์จึงถูกใช้ทันที ส่วนชิลเลอร์ประสิทธิภาพสูงใช้ไฟน้อยลงต่อหน่วยความเย็นที่ผลิต ทำให้ทั้งไฟที่ต้องซื้อและขนาดโซลาร์ที่เหมาะสมเปลี่ยนไป'],
          },
          {
            heading: 'วิธีคิดแบบเรียงลำดับ',
            body: [],
            bullets: [
              'ปรับปรุงประสิทธิภาพก่อน เพราะลดภาระที่ต้องผลิตไฟมารองรับ',
              'จากนั้นกำหนดขนาดโซลาร์ตามโหลดใหม่ ไม่ใช่โหลดเดิม',
              'ตรวจให้ระบบควบคุมและเมตเตอร์วัดแยกฝั่งทำความเย็น เพื่อยืนยันผลที่เกิดขึ้นจริง',
            ],
          },
          {
            heading: 'รูปแบบ Cooling-as-a-Service',
            body: ['Cooling-as-a-Service คือรูปแบบที่ผู้ให้บริการลงทุนในชิลเลอร์ประสิทธิภาพสูงและแบ่งปันผลประหยัดไฟฟ้าตามสัญญา โดยผู้ใช้ไม่ต้องลงทุนก้อนแรก ผลลัพธ์ขึ้นกับระบบเดิมและการใช้งานจริง เราจึงไม่ระบุเปอร์เซ็นต์ประหยัดในหน้านี้ ดูรายละเอียดที่ [Cooling-as-a-Service](cooling-as-a-service)'],
          },
          {
            heading: 'ข้อมูลที่ต้องเตรียม',
            body: [],
            bullets: ['รุ่น ขนาด และอายุของชิลเลอร์เดิม', 'ชั่วโมงเดินเครื่องและภาระความเย็นรายชั่วโมง', 'บิลไฟฟ้าย้อนหลัง 12 เดือน', 'แบบหลังคาและห้องเครื่อง'],
          },
          {
            heading: 'กลุ่มที่เหมาะ',
            body: ['โรงงานอาหารและห้องเย็น ([อุตสาหกรรมห้องเย็น](industries/cold-storage-food)) โรงพยาบาล ([โรงพยาบาล](industries/hospitals)) โรงแรม ([โรงแรม](industries/hotels)) และอาคารพาณิชย์ที่มีระบบปรับอากาศส่วนกลาง อ่านเพิ่มเติมที่ [โซลาร์รูฟท็อปโรงงานน้ำแข็ง ห้องเย็น และอาหารแช่แข็ง](guides/rooftop-solar-ice-cold-storage-food-factories)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ควรทำชิลเลอร์ก่อนหรือโซลาร์ก่อน', a: 'โดยทั่วไปปรับประสิทธิภาพก่อนเพื่อให้กำหนดขนาดโซลาร์ตามโหลดใหม่ แต่ทำคู่ขนานได้หากวางแผนร่วมกัน' },
          { q: 'Cooling-as-a-Service ต้องลงทุนเองหรือไม่', a: 'ผู้ให้บริการเป็นผู้ลงทุนในชิลเลอร์ตามสัญญา โรงงานแบ่งปันผลประหยัดตามที่ตกลง เงื่อนไขแต่ละกรณีต่างกัน' },
          { q: 'ประหยัดได้เท่าไร', a: 'ขึ้นกับระบบเดิมและการใช้งานจริง ส่งบิลและข้อมูลชิลเลอร์เพื่อรับการประเมิน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar Plus a High-Efficiency Chiller: Cutting Power Cost on Both Sides of Cooling',
        description: 'Plants and buildings with cooling systems can cut power cost two ways: generate their own with solar and use less with a high-efficiency chiller. How to think about it and what to check.',
        intro: 'Cooling is a main electrical load in food plants, cold rooms, hospitals, hotels and malls. Cutting the bill can be done in two complementary ways: generate your own power with rooftop solar, and reduce the power the cooling system uses with a high-efficiency chiller.',
        sections: [
          {
            heading: 'Why the two complement each other',
            photo: ph(19, 1, 'The roof of a frozen-food plant with solar, producing power in daytime when cooling load is high', 'The roof of a frozen-food plant with solar, producing power in daytime when cooling load is high'),
            body: ['Cooling load is usually highest in daytime and on hot days, exactly when solar produces most. Solar power is used immediately, while a high-efficiency chiller uses less power per unit of cooling, changing both what you must buy and the right solar size.'],
          },
          {
            heading: 'Thinking in order',
            body: [],
            bullets: [
              'Improve efficiency first, because it reduces the load you must generate for',
              'Then size the solar to the new load, not the old one',
              'Make sure controls and meters separate the cooling side so you can confirm real results',
            ],
          },
          {
            heading: 'The Cooling-as-a-Service model',
            body: ['Cooling-as-a-Service means the provider invests in a high-efficiency chiller and shares the electricity savings under a contract, with no upfront investment from the user. Results depend on the existing system and real operation, so this page states no savings percentage. See [Cooling-as-a-Service](cooling-as-a-service).'],
          },
          {
            heading: 'Data to prepare',
            body: [],
            bullets: ['Model, size and age of the existing chiller', 'Operating hours and hourly cooling load', '12 months of electricity bills', 'Roof and plant-room drawings'],
          },
          {
            heading: 'Who it suits',
            body: ['Food plants and cold rooms (the [cold storage industry page](industries/cold-storage-food)), hospitals ([hospitals](industries/hospitals)), hotels ([hotels](industries/hotels)) and commercial buildings with central air-conditioning. Read more in [Rooftop solar for ice plants, cold storage and frozen food factories](guides/rooftop-solar-ice-cold-storage-food-factories).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Should we do the chiller or the solar first?', a: 'Usually improve efficiency first so solar is sized to the new load, but both can run in parallel if planned together.' },
          { q: 'Do we invest ourselves in Cooling-as-a-Service?', a: 'The provider invests in the chiller under the contract and you share the savings as agreed. Terms differ case by case.' },
          { q: 'How much will we save?', a: 'It depends on the existing system and real operation. Send your bill and chiller data for an assessment.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 30 --------------------------------------------------------------------------------------
  {
    slug: 'guide-co2-avoided',
    path: 'guides/calculate-co2-avoided-rooftop-solar-thailand',
    kind: 'guide',
    published,
    hero: ph(10, 'banner', 'โซลาร์รูฟท็อปบนอาคารสาขาในกรุงเทพมหานคร ที่ช่วยลดการปล่อยคาร์บอนจากไฟฟ้า', 'Rooftop solar on a Bangkok branch building cutting carbon from electricity'),
    text: {
      th: {
        title: 'คำนวณก๊าซเรือนกระจกที่หลีกเลี่ยงได้จากโซลาร์รูฟท็อป: สูตร ค่า TGO และตัวอย่าง',
        description: 'วิธีคำนวณ tCO2e ที่หลีกเลี่ยงได้จากไฟโซลาร์ ใช้ค่าสัมประสิทธิ์การปล่อยของ TGO อย่างไร ข้อควรระวังเรื่อง location-based กับ market-based และข้อผิดพลาดที่พบบ่อย',
        intro: 'ลูกค้าและฝ่ายความยั่งยืนมักถามว่า "โซลาร์ลดคาร์บอนได้เท่าไร" วิธีคำนวณไม่ซับซ้อน แต่ต้องเลือกค่าสัมประสิทธิ์การปล่อยและวิธีรายงานให้ถูกต้อง บทความนี้อธิบายสูตร ค่า TGO ที่ตรวจพบ และตัวอย่างการคำนวณ',
        sections: [
          {
            heading: 'สูตรพื้นฐาน',
            body: ['ก๊าซเรือนกระจกที่หลีกเลี่ยงได้ (kgCO2e) = พลังงานไฟฟ้าที่ผลิตและใช้เอง (kWh) × ค่าสัมประสิทธิ์การปล่อยของไฟฟ้า (kgCO2e/kWh)', 'หารด้วย 1,000 เพื่อแปลงเป็นตันคาร์บอนไดออกไซด์เทียบเท่า (tCO2e)'],
          },
          {
            heading: 'ค่าสัมประสิทธิ์การปล่อยของไฟฟ้า',
            photo: ph(10, 2, 'แผงโซลาร์บนหลังคาอาคารสาขาในกรุงเทพมหานคร', 'Panels on the roof of a Bangkok branch building'),
            body: ['องค์การบริหารจัดการก๊าซเรือนกระจก (TGO) ประกาศค่าสัมประสิทธิ์การปล่อยของไฟฟ้า ตามรายงานข่าวเมื่อพฤศจิกายน 2568 TGO กำหนดค่า Scope 2 สำหรับการเผาไหม้เชื้อเพลิงและการสูญเสียในระบบส่งและจำหน่ายที่ 0.4750 kgCO2e/kWh มีผลตั้งแต่ 1 มกราคม และกำหนดค่าแยกอีก 0.0812 kgCO2e/kWh สำหรับการขุด กลั่น และขนส่งเชื้อเพลิง ซึ่งนับเป็น Scope 3', 'ค่าที่ประกาศเปลี่ยนตามปีและวัตถุประสงค์ (เช่น รายงานองค์กรกับโครงการ T-VER) ผู้ใช้ควรตรวจค่าล่าสุดและปีที่ใช้ได้จากเว็บไซต์ TGO ก่อนใช้ในรายงานจริง'],
          },
          {
            heading: 'ตัวอย่างการคำนวณ (สมมติ)',
            body: ['ตัวอย่างนี้ใช้ตัวเลขสมมติเพื่ออธิบายวิธี ไม่ใช่ผลของลูกค้ารายใด: หากผลิตและใช้ไฟเอง 1,000,000 kWh ต่อปี และใช้ค่า 0.4750 kgCO2e/kWh', 'ก๊าซเรือนกระจกที่หลีกเลี่ยงได้ = 1,000,000 × 0.4750 = 475,000 kgCO2e หรือ 475 tCO2e ต่อปี'],
          },
          {
            heading: 'Location-based และ Market-based',
            body: ['Location-based ใช้ค่าสัมประสิทธิ์เฉลี่ยของระบบไฟฟ้าในพื้นที่ ส่วน market-based ใช้ค่าตามสัญญาหรือใบรับรองที่ผู้ใช้ซื้อ ไฟที่ผลิตเองจากโซลาร์ที่หน้างานลดไฟที่ซื้อ จึงลด Scope 2 ทั้งสองแบบ แต่การนับใบรับรองพลังงานหมุนเวียนมีกฎของมันเอง ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)'],
          },
          {
            heading: 'ข้อผิดพลาดที่พบบ่อย',
            body: [],
            bullets: [
              'นับไฟที่ผลิตแต่ไม่ได้ใช้เองหรือส่งออก เป็นการหลีกเลี่ยงการปล่อยของโรงงาน',
              'ใช้ค่าสัมประสิทธิ์ของปีหรือแหล่งอื่นโดยไม่บันทึกที่มา',
              'นับซ้ำทั้งไฟโซลาร์และใบรับรองพลังงานหมุนเวียนชุดเดียวกัน',
              'ลืมระบุว่าตัวเลขเป็นค่าประมาณและสมมติฐานที่ใช้',
              'เทียบเป็น "จำนวนต้นไม้" โดยไม่บอกวิธีแปลง ซึ่งผู้สอบทานไม่ยอมรับ',
            ],
          },
          {
            heading: 'ใช้ผลนี้อย่างไร',
            body: ['นำตัวเลขไปประกอบรายงานความยั่งยืน การตอบแบบสอบถามลูกค้า และการเตรียมรับมาตรการ เช่น CBAM ดู [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar) และ [One Report กับ Scope 2](guides/one-report-esg-scope-2-listed-companies-thailand)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ตัวเลขสมมติในหน้านี้ไม่ใช่ผลของโครงการใดๆ และไม่ใช่ข้อมูลที่ผ่านการทวนสอบ'] },
        ],
        faq: [
          { q: 'โซลาร์ 1 kWh ลดคาร์บอนได้เท่าไร', a: 'เท่ากับค่าสัมประสิทธิ์การปล่อยของไฟฟ้าที่ใช้ เช่น 0.4750 kgCO2e/kWh ตามที่ TGO รายงานสำหรับ Scope 2 ตรวจค่าล่าสุดจาก TGO' },
          { q: 'ใช้ค่าของปีไหน', a: 'ใช้ค่าที่ใช้ได้ในปีที่รายงานและบันทึกที่มาไว้ ค่าเปลี่ยนได้ตามปี' },
          { q: 'ต้องมีใครทวนสอบไหม', a: 'ขึ้นกับวัตถุประสงค์ รายงานที่ส่งลูกค้าหรือใช้ในรายงานบริษัทจดทะเบียนอาจต้องมีการทวนสอบ ควรถามผู้ที่รับรายงาน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Calculating the Greenhouse Gas Avoided by Rooftop Solar in Thailand: Formula, TGO Factor and Example',
        description: 'How to calculate the tCO2e avoided by solar power, how to use the TGO emission factor, cautions on location-based vs market-based reporting, and common mistakes.',
        intro: 'Customers and sustainability teams often ask “how much carbon does solar save?” The calculation is simple, but you must choose the emission factor and reporting method correctly. This article explains the formula, the TGO factor found, and a worked example.',
        sections: [
          {
            heading: 'The basic formula',
            body: ['Greenhouse gas avoided (kgCO2e) = electricity generated and used on site (kWh) × the grid emission factor (kgCO2e/kWh).', 'Divide by 1,000 to convert to tonnes of carbon dioxide equivalent (tCO2e).'],
          },
          {
            heading: 'The electricity emission factor',
            photo: ph(10, 2, 'Panels on the roof of a Bangkok branch building', 'Panels on the roof of a Bangkok branch building'),
            body: ['The Thailand Greenhouse Gas Management Organization (TGO) publishes electricity emission factors. According to a November 2025 report, TGO set the Scope 2 factor for fuel combustion and transmission and distribution losses at 0.4750 kgCO2e/kWh, effective 1 January, with a separate 0.0812 kgCO2e/kWh for extracting, refining and transporting fuel, counted as Scope 3.', 'Published values change by year and purpose (for example organisational reporting versus T-VER projects). Check the latest value and the year it applies to on the TGO website before using it in a real report.'],
          },
          {
            heading: 'A worked example (hypothetical)',
            body: ['This example uses made-up figures to show the method, not the result of any customer: if a plant generates and uses 1,000,000 kWh a year and uses 0.4750 kgCO2e/kWh,', 'greenhouse gas avoided = 1,000,000 × 0.4750 = 475,000 kgCO2e, or 475 tCO2e a year.'],
          },
          {
            heading: 'Location-based and market-based',
            body: ['Location-based uses the average factor of the local grid, while market-based uses the factor from the contract or certificates a user buys. On-site solar reduces purchased power, so it cuts Scope 2 under both, but counting renewable certificates has its own rules. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).'],
          },
          {
            heading: 'Common mistakes',
            body: [],
            bullets: [
              'Counting generation that was not used on site, or was exported, as the plant’s avoided emissions',
              'Using a factor from another year or source without recording where it came from',
              'Double counting both the solar power and the same renewable certificates',
              'Not stating that the figure is an estimate and what assumptions were used',
              'Converting to “number of trees” without stating the method, which assurers do not accept',
            ],
          },
          {
            heading: 'How to use the result',
            body: ['Use it in sustainability reports, customer questionnaires and preparing for measures such as CBAM. See [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar) and [One Report and Scope 2](guides/one-report-esg-scope-2-listed-companies-thailand).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'The hypothetical numbers on this page are not the result of any project and have not been verified.'] },
        ],
        faq: [
          { q: 'How much carbon does 1 kWh of solar save?', a: 'It equals the emission factor you use, for example 0.4750 kgCO2e/kWh as reported for TGO Scope 2. Check the latest value from TGO.' },
          { q: 'Which year’s factor should I use?', a: 'The one valid for the reporting year, with its source recorded. Values change by year.' },
          { q: 'Does it need to be verified?', a: 'It depends on the purpose. Reports sent to customers or used in listed-company reports may need verification. Ask the party receiving the report.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 31 --------------------------------------------------------------------------------------
  {
    slug: 'guide-ppa-contract-checklist',
    path: 'guides/solar-ppa-contract-checklist-factories',
    kind: 'guide',
    published,
    hero: ph(5, 'banner', 'โรงงานบรรจุภัณฑ์ที่ใช้สัญญา PPA ติดตั้งโซลาร์รูฟท็อป 999.6 kW สมุทรปราการ', 'A packaging plant with a 999.6 kW rooftop solar system, Samut Prakan'),
    text: {
      th: {
        title: 'เช็กลิสต์สัญญา Solar PPA สำหรับโรงงาน: 12 ข้อที่ต้องอ่านก่อนเซ็น',
        description: 'สิบสองข้อสำคัญของสัญญา Solar PPA ที่ฝ่ายกฎหมายและการเงินของโรงงานควรตรวจ ได้แก่ ราคาและการปรับราคา อายุสัญญา การรับประกันผลผลิต ประกันภัย การยกเลิก และการโอนกรรมสิทธิ์',
        intro: 'สัญญา PPA ผูกพันโรงงานหลายปี จึงควรอ่านให้ครบก่อนเซ็น เช็กลิสต์นี้สรุปสิบสองหัวข้อที่ฝ่ายกฎหมายและการเงินควรตรวจ เขียนจากมุมของผู้ใช้ไฟ เพื่อให้คุณเปรียบเทียบข้อเสนอของผู้ให้บริการทุกรายได้อย่างเป็นธรรม',
        sections: [
          { heading: '1. ราคาต่อหน่วยและกลไกปรับราคา', body: ['ราคาคงที่หรือปรับตามอะไร ปรับปีละเท่าไร อ้างอิงอัตราค่าไฟของการไฟฟ้าหรือไม่ และมีเพดานหรือไม่ เทียบกับราคาไฟที่ทดแทนจริง ดู [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained)'] },
          { heading: '2. อายุสัญญาและวันเริ่มนับ (COD)', body: ['สัญญายาวกี่ปี นับจากวันใด ใครเป็นผู้รับรองว่าระบบพร้อมเดินเครื่อง และถ้าล่าช้ามีผลอย่างไร ดู [ศัพท์ PPA](guides/solar-ppa-glossary-thailand)'] },
          { heading: '3. การรับประกันผลผลิต (Performance guarantee)', body: ['ผู้ให้บริการรับประกันผลผลิตขั้นต่ำเท่าไร วัดอย่างไร และมีมาตรการชดเชยหรือปรับเมื่อต่ำกว่าอย่างไร'] },
          { heading: '4. การบำรุงรักษาและเวลาตอบสนอง (O&M)', body: ['ใครรับผิดชอบการล้างแผง ซ่อม และเปลี่ยนอินเวอร์เตอร์ และกำหนดเวลาตอบสนองเมื่อระบบขัดข้องไว้เท่าไร'] },
          {
            heading: '5. หลังคา การรั่วซึม และประกันภัย',
            photo: ph(5, 5, 'หลังคาโรงงานบรรจุภัณฑ์ที่ติดแผงโซลาร์ ซึ่งต้องระบุความรับผิดเรื่องรั่วซึมไว้ในสัญญา', 'A packaging-plant roof with solar, where liability for leaks must be stated in the contract'),
            body: ['ใครรับผิดชอบหากหลังคารั่วหลังติดแผง ใครทำประกันทรัพย์สินและประกันความรับผิด และใครออกค่าซ่อมหลังคาในอนาคต ดู [ใครรับผิดชอบเมื่อหลังคารั่วและประกันภัย](guides/solar-ppa-roof-leak-insurance-liability)'],
          },
          { heading: '6. การปิดโรงงาน ย้าย หรือขายกิจการ', body: ['สิทธิ์ของโรงงานเมื่อย้ายหรือปิดโรงงาน การโอนสัญญาให้ผู้ซื้อกิจการ และค่าใช้จ่ายในกรณีเหล่านั้น'] },
          { heading: '7. การยกเลิกก่อนครบสัญญาและการซื้อระบบก่อนกำหนด', body: ['เงื่อนไขการเลิกสัญญาทั้งสองฝ่าย ค่าเลิกสัญญา และตารางราคาซื้อระบบ (buyout) ตามปี'] },
          { heading: '8. การโอนกรรมสิทธิ์เมื่อสิ้นสุดสัญญา', body: ['ระบบเป็นของใครเมื่อครบสัญญา ต้องจ่ายเพิ่มหรือไม่ และสภาพระบบที่จะส่งมอบเป็นอย่างไร ดู [เมื่อครบสัญญา PPA](guides/solar-ppa-end-of-term-buyout-ownership)'] },
          { heading: '9. สิทธิ์ใช้พื้นที่ การเข้าถึง และการรื้อถอน', body: ['ผู้ให้บริการเข้าพื้นที่เมื่อไร ใครจัดทางเข้าถึงหลังคา และการรื้อถอนหากเปลี่ยนหลังคาในช่วงสัญญา'] },
          { heading: '10. การขออนุญาตและความเสี่ยงล่าช้า', body: ['ใครยื่นขออนุญาต ใครรับความเสี่ยงหากอนุมัติล่าช้าหรือไม่ผ่าน ดู [ขั้นตอนจดแจ้งและขออนุญาต](guides/rooftop-solar-registration-and-permits-step-by-step)'] },
          { heading: '11. ข้อมูลการผลิตและรายงานคาร์บอน', body: ['ผู้ใช้เข้าถึงข้อมูลผลิตไฟรายเดือนได้ไหม ใครเป็นเจ้าของใบรับรองพลังงานหมุนเวียน (ถ้ามี) และข้อมูลเหมาะกับรายงาน Scope 2 หรือไม่ ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)'] },
          { heading: '12. การเปลี่ยนกฎหมายและการระงับข้อพิพาท', body: ['หากกฎระเบียบหรือค่าไฟเปลี่ยน ใครรับผลกระทบ มีสิทธิ์เจรจาใหม่หรือไม่ และใช้ศาลหรืออนุญาโตตุลาการแก้ข้อพิพาท'] },
          { heading: 'วิธีใช้เช็กลิสต์', body: ['ให้ฝ่ายกฎหมายและการเงินทำตารางเทียบข้อเสนอของแต่ละราย เทียบเป็นหัวข้อ ไม่ใช่เทียบเฉพาะราคา เปรียบเทียบรูปแบบการลงทุนที่ [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease) และภาพรวมที่ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'เช็กลิสต์นี้ไม่ใช่คำแนะนำทางกฎหมาย ควรให้ทนายความที่ชำนาญด้านพลังงานตรวจสัญญาจริง'] },
        ],
        faq: [
          { q: 'ข้อไหนสำคัญที่สุด', a: 'ขึ้นกับโรงงาน แต่ราคาและกลไกปรับราคา การรับประกันผลผลิต ความรับผิดเรื่องหลังคา และเงื่อนไขเมื่อสิ้นสุดหรือเลิกสัญญา มักเป็นหัวข้อที่กระทบมากที่สุด' },
          { q: 'ควรให้ใครตรวจสัญญา', a: 'ฝ่ายกฎหมาย ฝ่ายการเงิน และวิศวกรของโรงงาน และควรปรึกษาทนายความด้านพลังงานก่อนเซ็น' },
          { q: 'ต่อรองได้หรือไม่', a: 'ได้ หลายข้อเป็นเงื่อนไขที่ปรับตามหน้างาน เช่น อายุสัญญาและตารางซื้อระบบ' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Solar PPA Contract Checklist for Factories: 12 Items to Read Before You Sign',
        description: 'Twelve key items in a solar PPA that a factory’s legal and finance teams should check: price and escalation, term, output guarantee, insurance, termination and transfer of ownership.',
        intro: 'A PPA binds a factory for many years, so read it fully before signing. This checklist summarises twelve items your legal and finance teams should check, written from the power user’s side, so you can compare every provider’s offer fairly.',
        sections: [
          { heading: '1. Price per unit and escalation', body: ['Is the price fixed or does it move, and with what? How much each year? Is it linked to the utility tariff, and is there a cap? Compare with the price actually displaced. See [What is the Ft charge?](guides/ft-electricity-tariff-explained)'] },
          { heading: '2. Term and start date (COD)', body: ['How many years, counted from when, who certifies that the system is ready to operate, and what happens if it is late. See the [PPA glossary](guides/solar-ppa-glossary-thailand).'] },
          { heading: '3. Performance guarantee', body: ['What minimum output does the provider guarantee, how is it measured, and what remedy or penalty applies if it falls short?'] },
          { heading: '4. Maintenance and response time (O&M)', body: ['Who is responsible for cleaning, repairs and inverter replacement, and what response time is set when the system fails?'] },
          {
            heading: '5. The roof, leaks and insurance',
            photo: ph(5, 5, 'A packaging-plant roof with solar, where liability for leaks must be stated in the contract', 'A packaging-plant roof with solar, where liability for leaks must be stated in the contract'),
            body: ['Who is responsible if the roof leaks after panels are installed, who insures the property and liability, and who pays for future roof repairs? See [Who is responsible for roof leaks and insurance?](guides/solar-ppa-roof-leak-insurance-liability).'],
          },
          { heading: '6. Plant closure, relocation or sale of the business', body: ['The factory’s rights if it moves or closes, assignment of the contract to a buyer of the business, and the costs in each case.'] },
          { heading: '7. Early termination and early buyout', body: ['Termination rights for both sides, termination fees, and the buyout price schedule by year.'] },
          { heading: '8. Transfer of ownership at the end', body: ['Who owns the system at the end of the term, whether anything extra is payable, and what condition it will be handed over in. See [What happens at the end of a PPA?](guides/solar-ppa-end-of-term-buyout-ownership).'] },
          { heading: '9. Access, land-use rights and removal', body: ['When the provider may enter, who arranges roof access, and removal if the roof is replaced during the term.'] },
          { heading: '10. Permits and delay risk', body: ['Who files permits and who bears the risk if approval is late or refused. See [Registration and permits](guides/rooftop-solar-registration-and-permits-step-by-step).'] },
          { heading: '11. Generation data and carbon reporting', body: ['Can the user access monthly generation data, who owns any renewable certificates, and is the data suitable for Scope 2 reporting? See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).'] },
          { heading: '12. Change in law and dispute resolution', body: ['If regulation or tariffs change, who bears it and is there a right to renegotiate, and are disputes settled in court or by arbitration?'] },
          { heading: 'How to use the checklist', body: ['Have legal and finance build a comparison table of each provider’s offer by item, not only by price. Compare investment models in [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease) and the [complete private PPA guide](guides/private-ppa-complete-guide).'] },
          { heading: 'Disclaimer', body: [reviewEn, 'This checklist is not legal advice. Have a lawyer experienced in energy review the actual contract.'] },
        ],
        faq: [
          { q: 'Which item matters most?', a: 'It depends on the factory, but price and escalation, performance guarantee, roof liability and the end-of-term or termination terms usually matter most.' },
          { q: 'Who should review the contract?', a: 'Your legal and finance teams and plant engineer, and an energy lawyer before signing.' },
          { q: 'Can terms be negotiated?', a: 'Yes. Many items are tailored to the site, such as term length and the buyout schedule.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 32 --------------------------------------------------------------------------------------
  {
    slug: 'guide-ppa-end-of-term',
    path: 'guides/solar-ppa-end-of-term-buyout-ownership',
    kind: 'guide',
    published,
    hero: ph(8, 'banner', 'ระบบโซลาร์รูฟท็อปของโรงงานบรรจุภัณฑ์ที่โอนกรรมสิทธิ์ให้ผู้ใช้เมื่อครบสัญญา ตามเงื่อนไขของแต่ละสัญญา', 'A packaging plant’s rooftop solar system, whose ownership may transfer to the user at the end of the term under each contract'),
    text: {
      th: {
        title: 'เมื่อครบสัญญา Solar PPA: ซื้อก่อนกำหนด โอนกรรมสิทธิ์ ต่อสัญญา หรือรื้อถอน',
        description: 'ทางเลือกเมื่อสัญญา Solar PPA สิ้นสุด ได้แก่ รับโอนระบบ ต่อสัญญา ซื้อระบบก่อนกำหนด หรือรื้อถอน และเงื่อนไขที่ควรตกลงไว้ล่วงหน้า รวมถึงกรณีย้ายหรือขายโรงงาน',
        intro: 'หนึ่งในคำถามที่ผู้บริหารถามบ่อยที่สุดคือ "ครบสัญญาแล้วจะเป็นอย่างไร" และ "ถ้าเราย้ายหรือขายโรงงานระหว่างสัญญา" คำตอบอยู่ในสัญญา จึงควรตกลงไว้ให้ชัดตั้งแต่ก่อนเซ็น บทความนี้อธิบายทางเลือกที่พบบ่อยโดยไม่ผูกกับเงื่อนไขของผู้ให้บริการรายใด',
        sections: [
          {
            heading: 'ทางเลือกเมื่อสัญญาสิ้นสุด',
            photo: ph(8, 9, 'แผงโซลาร์บนหลังคาโรงงานบรรจุภัณฑ์ที่ผู้ใช้ไฟอาจรับโอนเมื่อครบสัญญา', 'Panels on a packaging-plant roof that the user may take over at the end of the term'),
            body: ['โดยทั่วไปมีสี่ทางเลือก ขึ้นกับสัญญา'],
            bullets: [
              'รับโอนกรรมสิทธิ์ระบบ (บางสัญญาโอนให้ฟรี บางสัญญามีราคาโอนที่กำหนดไว้)',
              'ต่อสัญญาด้วยราคาหรือเงื่อนไขใหม่',
              'ซื้อระบบ (buyout) ตามราคาที่ระบุในสัญญา',
              'ให้ผู้ให้บริการรื้อถอนระบบและคืนสภาพหลังคา',
            ],
          },
          {
            heading: 'สิ่งที่ต้องตกลงให้ชัดล่วงหน้า',
            body: [],
            bullets: [
              'สภาพระบบที่จะส่งมอบ เช่น ผลผลิตขั้นต่ำ อายุที่เหลือของอินเวอร์เตอร์ และเอกสารการรับประกันที่โอนได้',
              'ราคาโอนหรือสูตรคำนวณราคา และใครรับภาระภาษีและค่าธรรมเนียมการโอน',
              'การโอนใบอนุญาต การลงทะเบียนกับการไฟฟ้า และสัญญาบำรุงรักษาต่อ',
              'ขั้นตอนแจ้งล่วงหน้ากี่เดือนก่อนสิ้นสุดสัญญา',
              'ความรับผิดต่อหลังคาและการรั่วซึมหลังโอน',
            ],
          },
          {
            heading: 'ซื้อระบบก่อนกำหนด (buyout)',
            body: ['ตารางราคาซื้อก่อนกำหนดมักลดลงตามปี โรงงานควรขอตารางนี้ตั้งแต่ก่อนเซ็น และตรวจว่ามีค่าธรรมเนียมเพิ่มหรือไม่ การซื้อก่อนกำหนดเป็นประโยชน์เมื่อโรงงานมีเงินทุนและต้องการเป็นเจ้าของระบบเร็วขึ้น เปรียบเทียบที่ [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease)'],
          },
          {
            heading: 'ถ้าย้าย ปิด หรือขายโรงงานระหว่างสัญญา',
            body: ['สัญญาที่ดีควรระบุสิทธิ์ของโรงงานในกรณีเหล่านี้'],
            bullets: [
              'โอนสัญญาให้ผู้ซื้อกิจการหรือผู้เช่ารายใหม่ โดยผู้ให้บริการไม่ปฏิเสธโดยไม่มีเหตุผล',
              'ซื้อระบบตามตารางก่อนกำหนดแล้วโอนไปกับทรัพย์สิน',
              'ย้ายระบบไปติดที่ใหม่ (ถ้าเป็นไปได้) และรับภาระค่าใช้จ่ายอย่างไร',
              'เลิกสัญญาพร้อมค่าเลิกสัญญาที่คำนวณได้ชัดเจน',
            ],
          },
          {
            heading: 'ระบบหลังหมดสัญญายังใช้ได้อีกนานหรือไม่',
            body: ['อายุแผงโซลาร์มักยาวกว่าสัญญา PPA โดยผู้ผลิตระบุการรับประกันผลผลิตเป็นช่วงยาวหลายสิบปี ส่วนอินเวอร์เตอร์มีอายุสั้นกว่าและอาจต้องเปลี่ยนในช่วงอายุระบบ ตรวจเอกสารการรับประกันที่ระบุในสัญญาและแผนการบำรุงรักษาหลังโอน ดู [การดูแลระบบโซลาร์หลังติดตั้ง](guides/rooftop-solar-operations-and-maintenance)'],
          },
          { heading: 'ใช้ร่วมกับเช็กลิสต์', body: ['หัวข้อนี้เป็นข้อ 7 และ 8 ของ [เช็กลิสต์สัญญา Solar PPA 12 ข้อ](guides/solar-ppa-contract-checklist-factories) และเสริมภาพรวมใน [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'เงื่อนไขจริงของแต่ละสัญญาต่างกัน หน้านี้ไม่ได้อธิบายสัญญาของผู้ให้บริการรายใด'] },
        ],
        faq: [
          { q: 'ครบสัญญาแล้วระบบเป็นของโรงงานหรือไม่', a: 'ขึ้นกับสัญญา บางสัญญาโอนกรรมสิทธิ์ให้เมื่อครบสัญญา บางสัญญามีราคาโอนหรือทางเลือกต่อสัญญา ต้องระบุชัดก่อนเซ็น' },
          { q: 'ถ้าเราขายโรงงาน สัญญา PPA ไปกับทรัพย์สินได้หรือไม่', a: 'ควรตกลงเรื่องการโอนสัญญาและสิทธิ์ซื้อระบบก่อนกำหนดไว้ในสัญญาตั้งแต่ต้น' },
          { q: 'ควรขออะไรจากผู้ให้บริการก่อนเซ็น', a: 'ตารางราคาซื้อก่อนกำหนด เงื่อนไขการโอน สภาพระบบที่ส่งมอบ และเอกสารการรับประกันที่โอนได้' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'At the End of a Solar PPA: Early Buyout, Transfer of Ownership, Renewal or Removal',
        description: 'The options when a solar PPA ends: take over the system, renew, buy out early or remove it, the terms to agree in advance, and what happens if you move or sell the factory.',
        intro: 'One of the questions executives ask most is “what happens when the contract ends?” and “what if we move or sell the factory during the term?” The answer lives in the contract, so agree it clearly before signing. This article explains common options without tying to any one provider’s terms.',
        sections: [
          {
            heading: 'Options at the end of the term',
            photo: ph(8, 9, 'Panels on a packaging-plant roof that the user may take over at the end of the term', 'Panels on a packaging-plant roof that the user may take over at the end of the term'),
            body: ['There are generally four options, depending on the contract.'],
            bullets: [
              'Take over ownership of the system (some contracts transfer it free, others set a transfer price)',
              'Renew on new price or terms',
              'Buy the system (buyout) at the price stated in the contract',
              'Have the provider remove the system and restore the roof',
            ],
          },
          {
            heading: 'What to agree clearly in advance',
            body: [],
            bullets: [
              'The condition of the system on handover, such as minimum output, remaining inverter life and transferable warranties',
              'The transfer price or formula and who bears tax and transfer fees',
              'Transfer of permits and utility registration, and continuing maintenance',
              'How many months’ notice is required before the term ends',
              'Liability for the roof and leaks after transfer',
            ],
          },
          {
            heading: 'Early buyout',
            body: ['The early-buyout price schedule usually falls over the years. Ask for it before signing and check for extra fees. An early buyout helps when the factory has capital and wants to own the system sooner. Compare in [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease).'],
          },
          {
            heading: 'If you move, close or sell the plant during the term',
            body: ['A good contract should state the factory’s rights in these cases.'],
            bullets: [
              'Assigning the contract to a buyer or new tenant, with the provider not refusing without reason',
              'Buying the system on the early-buyout schedule so it passes with the property',
              'Relocating the system to a new site if possible and who bears the cost',
              'Terminating with a clearly calculable termination fee',
            ],
          },
          {
            heading: 'How long does the system last after the term?',
            body: ['Panel life is usually longer than a PPA term, with manufacturers stating output warranties over several decades. Inverters have a shorter life and may need replacing during the system’s life. Check the warranty documents named in the contract and the post-transfer maintenance plan. See [Operations and maintenance](guides/rooftop-solar-operations-and-maintenance).'],
          },
          { heading: 'Use with the checklist', body: ['This topic is items 7 and 8 of the [12-point solar PPA contract checklist](guides/solar-ppa-contract-checklist-factories) and adds to the [complete private PPA guide](guides/private-ppa-complete-guide).'] },
          { heading: 'Disclaimer', body: [reviewEn, 'Real terms differ by contract. This page does not describe any provider’s contract.'] },
        ],
        faq: [
          { q: 'Does the factory own the system when the term ends?', a: 'It depends on the contract. Some transfer ownership at the end; others set a transfer price or a renewal option. State it clearly before signing.' },
          { q: 'If we sell the factory, does the PPA go with the property?', a: 'Agree assignment and an early-buyout right in the contract from the start.' },
          { q: 'What should we ask the provider before signing?', a: 'The early-buyout price schedule, transfer conditions, the condition of the system on handover, and transferable warranties.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 33 --------------------------------------------------------------------------------------
  {
    slug: 'guide-roof-leak-insurance',
    path: 'guides/solar-ppa-roof-leak-insurance-liability',
    kind: 'guide',
    published,
    hero: ph(22, 1, 'หลังคาเมทัลชีทของโรงงานผลิตอาหารสัตว์ที่ติดโซลาร์ ซึ่งต้องกำหนดความรับผิดเรื่องรั่วซึมและประกันภัยในสัญญา', 'The metal-sheet roof of a feed mill with solar, where liability for leaks and insurance must be set in the contract'),
    text: {
      th: {
        title: 'ใครรับผิดชอบเมื่อหลังคารั่วและประกันภัย ในสัญญา Solar PPA ของโรงงาน',
        description: 'ติดโซลาร์แล้วหลังคารั่วใครรับผิดชอบ ประกันภัยที่ควรมี เหตุไฟไหม้ พายุ และน้ำท่วม และข้อสัญญาที่ฝ่ายกฎหมายและวิศวกรควรตรวจก่อนเซ็น PPA',
        intro: 'เจ้าของโรงงานส่วนใหญ่กังวลเรื่องเดียวกันคือ "ถ้าหลังคารั่วหลังติดโซลาร์ ใครรับผิดชอบ" และ "ถ้าเกิดไฟไหม้หรือพายุ ใครรับความเสียหาย" คำตอบอยู่ที่การแบ่งความรับผิดในสัญญาและประกันภัย บทความนี้ช่วยให้คุณรู้ว่าควรถามและตรวจอะไร',
        sections: [
          {
            heading: 'หลังคารั่วหลังติดแผง: ใครรับผิดชอบ',
            photo: ph(22, 0, 'หลังคาเมทัลชีทที่ติดแผงโซลาร์ ซึ่งต้องตรวจจุดเจาะและวัสดุกันซึมก่อนรับมอบ', 'A metal-sheet roof with panels, where fixing points and waterproofing should be inspected before handover'),
            body: ['หลักการที่เป็นธรรมคือแยกเหตุให้ชัด หากรั่วจากจุดที่ผู้ติดตั้งเจาะหรือยึด ผู้ให้บริการควรรับผิดชอบซ่อม หากรั่วจากหลังคาเดิมที่เสื่อมสภาพซึ่งไม่เกี่ยวกับงานติดตั้ง มักเป็นความรับผิดของเจ้าของหลังคา แต่การถอดและติดแผงกลับเพื่อซ่อมต้องตกลงว่าใครออกค่าใช้จ่าย'],
            bullets: ['ตรวจสภาพหลังคาร่วมกันและบันทึกด้วยรูปก่อนเริ่มงาน', 'ระบุการรับประกันงานกันซึมแยกจากการรับประกันแผง', 'กำหนดเวลาตอบสนองและวิธีซ่อมเมื่อรั่ว', 'ตกลงต้นทุนถอดและติดแผงใหม่เมื่อต้องซ่อมหลังคา'],
          },
          {
            heading: 'ประกันภัยที่ควรมี',
            body: [],
            bullets: [
              'ประกันภัยงานก่อสร้างหรือติดตั้งในช่วงงาน (construction/erection all risks)',
              'ประกันภัยทรัพย์สินของระบบโซลาร์ตลอดอายุสัญญา เช่น ไฟไหม้ ฟ้าผ่า พายุ และน้ำท่วม',
              'ประกันความรับผิดต่อบุคคลภายนอก',
              'ประกันของโรงงานเองควรแจ้งบริษัทประกันว่ามีระบบโซลาร์บนหลังคา เพราะอาจมีผลต่อเบี้ยและเงื่อนไข',
            ],
          },
          {
            heading: 'ไฟไหม้ พายุ น้ำท่วม: ความเสี่ยงที่ควรตกลง',
            body: ['สัญญาควรระบุว่าความเสียหายของระบบโซลาร์จากเหตุเหล่านี้ใครรับผิดชอบ ใครเรียกร้องประกัน และหากระบบเสียหายจนผลิตไม่ได้ ค่าไฟ PPA คิดอย่างไร ดู [การรับประกันผลผลิตในเช็กลิสต์สัญญา](guides/solar-ppa-contract-checklist-factories)'],
          },
          {
            heading: 'ความปลอดภัยที่ลดความเสี่ยงได้ตั้งแต่ออกแบบ',
            body: [],
            bullets: [
              'ติดตั้งตามมาตรฐานด้านไฟฟ้า มีระบบต่อลงดินและป้องกันฟ้าผ่า',
              'วางอินเวอร์เตอร์และตู้ไฟห่างวัสดุติดไฟ และระบายอากาศ',
              'เลือกระบบยึดที่ทนแรงลมตามพื้นที่ ดู [หลังคาเมทัลชีท คอนกรีต กระเบื้อง](guides/rooftop-solar-metal-sheet-vs-concrete-roof)',
              'มีแผนบำรุงรักษาและตรวจจุดต่อสายตามรอบ ดู [การดูแลระบบโซลาร์หลังติดตั้ง](guides/rooftop-solar-operations-and-maintenance)',
              'มีระบบตัดไฟฉุกเฉินที่ทีมดับเพลิงเข้าใจ',
            ],
          },
          {
            heading: 'คำถามที่ควรถามผู้ให้บริการ',
            body: [],
            bullets: ['ใครรับผิดชอบหากรั่วจากจุดยึด และรับประกันงานกันซึมกี่ปี', 'ประกันภัยที่ทำไว้มีวงเงินเท่าไร และโรงงานได้เป็นผู้รับผลประโยชน์ร่วมหรือไม่', 'ขอสำเนากรมธรรม์และรายละเอียดข้อยกเว้น', 'มีประสบการณ์การเคลมหรือเหตุขัดข้องที่ผ่านมาหรือไม่'],
          },
          { heading: 'อ่านต่อ', body: ['ภาพรวมสัญญาที่ [เช็กลิสต์สัญญา Solar PPA 12 ข้อ](guides/solar-ppa-contract-checklist-factories) และ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'] },
          { heading: 'ข้อสงวน', body: [reviewTh, 'เงื่อนไขประกันภัยและความรับผิดขึ้นกับสัญญาและกรมธรรม์จริง ควรปรึกษาที่ปรึกษากฎหมายและนายหน้าประกันภัย'] },
        ],
        faq: [
          { q: 'ติดโซลาร์ทำให้หลังคารั่วแน่นอนหรือไม่', a: 'ไม่แน่นอน หากเลือกระบบยึดและวัสดุกันซึมเหมาะสมและตรวจสภาพหลังคาก่อน แต่ควรระบุความรับผิดและการรับประกันงานกันซึมไว้ในสัญญา' },
          { q: 'ใครทำประกันระบบโซลาร์ภายใต้ PPA', a: 'โดยทั่วไปผู้ให้บริการเป็นเจ้าของระบบจึงทำประกันทรัพย์สินของระบบ แต่ต้องระบุในสัญญา และขอสำเนากรมธรรม์' },
          { q: 'ต้องแจ้งประกันของโรงงานหรือไม่', a: 'ควรแจ้ง เพราะการติดตั้งอุปกรณ์บนหลังคาอาจเปลี่ยนความเสี่ยง ตรวจกับบริษัทประกันของโรงงาน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Who Is Responsible for Roof Leaks and Insurance in a Factory Solar PPA?',
        description: 'Who is responsible if the roof leaks after solar is installed, the insurance to have, fire, storm and flood risk, and the contract points legal and engineering should check before signing a PPA.',
        intro: 'Most factory owners worry about the same thing: “if the roof leaks after solar is installed, who is responsible?” and “if there is a fire or a storm, who bears the damage?” The answer lies in how liability is divided in the contract and in insurance. This article shows what to ask and check.',
        sections: [
          {
            heading: 'A leak after panels are installed: who is responsible?',
            photo: ph(22, 0, 'A metal-sheet roof with panels, where fixing points and waterproofing should be inspected before handover', 'A metal-sheet roof with panels, where fixing points and waterproofing should be inspected before handover'),
            body: ['A fair principle is to separate the cause. If the leak comes from a point the installer drilled or fixed, the provider should repair it. If it comes from an old, worn roof unrelated to the installation, it is usually the roof owner’s responsibility, but removing and refitting panels to repair the roof needs an agreement on who pays.'],
            bullets: ['Inspect the roof together and record it with photos before work starts', 'State a waterproofing workmanship warranty separate from the panel warranty', 'Set a response time and repair method for leaks', 'Agree the cost of removing and refitting panels when the roof must be repaired'],
          },
          {
            heading: 'Insurance to have',
            body: [],
            bullets: [
              'Construction or erection all-risks cover during the works',
              'Property insurance for the solar system for the contract term, covering fire, lightning, storm and flood',
              'Third-party liability insurance',
              'The factory’s own insurer should be told there is solar on the roof, as it may affect premium and terms',
            ],
          },
          {
            heading: 'Fire, storm and flood: risks to agree',
            body: ['The contract should say who bears damage to the solar system from these events, who claims on insurance, and, if the system is damaged so it cannot produce, how the PPA charge is treated. See [the performance guarantee in the contract checklist](guides/solar-ppa-contract-checklist-factories).'],
          },
          {
            heading: 'Safety that cuts risk from the design stage',
            body: [],
            bullets: [
              'Install to electrical standards, with earthing and lightning protection',
              'Place inverters and switchgear away from combustible material, with ventilation',
              'Choose mounting that withstands local wind. See [Metal sheet, concrete or tile roofs](guides/rooftop-solar-metal-sheet-vs-concrete-roof)',
              'Have a maintenance plan and periodic checks of connections. See [Operations and maintenance](guides/rooftop-solar-operations-and-maintenance)',
              'Provide an emergency shut-off that firefighters understand',
            ],
          },
          {
            heading: 'Questions to ask your provider',
            body: [],
            bullets: ['Who is responsible for a leak from a fixing point, and how many years is the waterproofing warranted?', 'What is the insured amount, and is the factory a co-beneficiary?', 'Ask for a copy of the policy and its exclusions', 'Any claims or incidents in the past?'],
          },
          { heading: 'Read next', body: ['See the contract overview in the [12-point solar PPA contract checklist](guides/solar-ppa-contract-checklist-factories) and the [complete private PPA guide](guides/private-ppa-complete-guide).'] },
          { heading: 'Disclaimer', body: [reviewEn, 'Insurance terms and liability depend on the actual contract and policy. Consult a legal adviser and an insurance broker.'] },
        ],
        faq: [
          { q: 'Will solar certainly make the roof leak?', a: 'No, if suitable mounting and waterproofing are used and the roof is inspected first. But state liability and the waterproofing warranty in the contract.' },
          { q: 'Who insures the solar system under a PPA?', a: 'Generally the provider owns the system and insures it, but this must be in the contract. Ask for a copy of the policy.' },
          { q: 'Do we tell our own insurer?', a: 'You should, because equipment on the roof can change the risk. Check with the factory’s insurer.' },
        ],
        cta: cta.en,
      },
    },
  },

  // Impact page ------------------------------------------------------------------------------
  {
    slug: 'impact',
    path: 'impact',
    kind: 'info',
    text: {
      th: {
        title: 'ผลงานและผลกระทบของ Power Express: โซลาร์รูฟท็อปที่ติดตั้งและเดินเครื่องแล้ว',
        description: 'ตัวเลขรวมของโครงการโซลาร์รูฟท็อปและคาร์พอร์ตที่ Power Express ติดตั้งสำหรับโรงงานและธุรกิจในประเทศไทย: จำนวนโครงการ กำลังติดตั้งรวม และผลกระทบด้านพลังงานสะอาด',
        intro: 'หน้านี้รวมตัวเลขภาพรวมของโครงการที่เราติดตั้งและดูแล โดยตัวเลขจำนวนโครงการและกำลังติดตั้งคำนวณสดจากรายการโครงการบนเว็บไซต์ ไม่ระบุชื่อลูกค้าเกินกว่าที่ลูกค้าอนุญาตให้เผยแพร่',
        sections: [
          { heading: 'ตัวเลขนี้มาจากไหน', body: ['จำนวนโครงการและกำลังติดตั้งรวมคำนวณจากรายการโครงการที่แสดงบนเว็บไซต์ ส่วนตัวเลขไฟฟ้าที่ผลิตได้และก๊าซเรือนกระจกที่หลีกเลี่ยงได้ (เมื่อแสดง) มาจากข้อมูลการผลิตจริงของระบบติดตามผลและค่าสัมประสิทธิ์การปล่อยของไฟฟ้าที่ระบุไว้ข้างตัวเลข'] },
          { heading: 'เราไม่เผยแพร่อะไร', body: ['เราไม่เผยแพร่ตัวเลขค่าไฟหรือเปอร์เซ็นต์ที่ลูกค้าแต่ละรายประหยัดได้ เพราะเป็นข้อมูลธุรกิจของลูกค้า และผลต่างกันตามสัญญาและการใช้งานจริง หากสนใจ เราแสดงผลการผลิตจริงของระบบให้ผู้สนใจที่อยู่ระหว่างพิจารณาได้ตามที่ลูกค้าอนุญาต'] },
          { heading: 'ดูผลงานจริง', body: ['ดูรายการโครงการพร้อมภาพถ่ายจริงที่ [ผลงานและโครงการ](project) หรืออ่านบทความตัวอย่างเช่น [โซลาร์รูฟท็อปโรงงานน้ำแข็ง ห้องเย็น และอาหารแช่แข็ง](guides/rooftop-solar-ice-cold-storage-food-factories) และ [โซลาร์คาร์พอร์ตสำหรับโรงงาน](guides/solar-carport-for-factories)'] },
        ],
        faq: [{ q: 'ตัวเลขอัปเดตเมื่อไร', a: 'จำนวนโครงการและกำลังติดตั้งอัปเดตอัตโนมัติเมื่อมีโครงการใหม่ในรายการ ตัวเลขการผลิตสะสมอัปเดตเมื่อมีข้อมูลใหม่' }],
        cta: cta.th,
      },
      en: {
        title: 'Power Express Track Record and Impact: Rooftop Solar Installed and Operating',
        description: 'Overall figures for the rooftop and carport solar projects Power Express has installed for factories and businesses in Thailand: number of projects, total installed capacity and clean-energy impact.',
        intro: 'This page gives overall figures for the projects we have installed and look after. The project count and installed capacity are calculated live from the project list on this website. Client names are not shown beyond what each client has allowed us to publish.',
        sections: [
          { heading: 'Where the numbers come from', body: ['The number of projects and total installed capacity are calculated from the project list shown on this website. Generation and avoided greenhouse-gas figures (when shown) come from real production data in the monitoring system and the emission factor stated next to the figure.'] },
          { heading: 'What we do not publish', body: ['We do not publish electricity-cost figures or percentages saved by individual clients, because they are the client’s business information and results differ by contract and real use. If you are evaluating us, we can show real system production, with the client’s permission.'] },
          { heading: 'See the real projects', body: ['See the project list with real photos at [Projects](project), or read example articles such as [Rooftop solar for ice plants, cold storage and frozen food factories](guides/rooftop-solar-ice-cold-storage-food-factories) and [Solar carport for factories](guides/solar-carport-for-factories).'] },
        ],
        faq: [{ q: 'When are the figures updated?', a: 'Project count and capacity update automatically when a project is added to the list. Cumulative generation updates when new data is available.' }],
        cta: cta.en,
      },
    },
  },

  // Press page -------------------------------------------------------------------------------
  {
    slug: 'press',
    path: 'press',
    kind: 'info',
    text: {
      th: {
        title: 'สำหรับสื่อมวลชน: ข้อมูลบริษัท Power Express และผู้ให้สัมภาษณ์',
        description: 'ข้อมูลสำหรับสื่อ: ข้อมูลบริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด ตัวเลขภาพรวมของโครงการโซลาร์รูฟท็อป หัวข้อที่ให้สัมภาษณ์ได้ และช่องทางติดต่อ',
        intro: 'หน้านี้รวบรวมข้อมูลพื้นฐานสำหรับนักข่าว นักวิเคราะห์ และผู้ผลิตเนื้อหาที่ต้องการอ้างอิง Power Express ตัวเลขภาพรวมคำนวณสดจากรายการโครงการบนเว็บไซต์',
        sections: [
          { heading: 'เกี่ยวกับบริษัท', body: ['บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด (Powerexpress1980 Company Limited) ให้บริการโซลาร์รูฟท็อป PPA สำหรับโรงงานและธุรกิจในประเทศไทย ผู้ให้บริการเป็นผู้ลงทุน ติดตั้ง และดูแลระบบ ผู้ใช้ไฟจ่ายค่าไฟตามที่ผลิตจริงตามสัญญา มีบริการระบบทำความเย็นประหยัดพลังงาน (Cooling-as-a-Service) ด้วย'] },
          { heading: 'ผู้บริหาร', body: ['ภานุวัจน์ ทองร่มโพธิ์ ประธานเจ้าหน้าที่บริหาร ([LinkedIn](https://www.linkedin.com/in/panuwat-thongrompo-18760b15/))'] },
          { heading: 'หัวข้อที่ให้สัมภาษณ์ได้', body: [], bullets: ['Private PPA และโซลาร์รูฟท็อปสำหรับโรงงาน ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)', 'Direct PPA, UGT และทางเลือกพลังงานสะอาด ดู [Direct PPA ในประเทศไทย](guides/direct-ppa-thailand-explained)', 'ค่าไฟโรงงานและค่า Ft ดู [ค่าไฟโรงงานงวดล่าสุด](guides/factory-electricity-tariff-sep-dec-2026)', 'CBAM, Scope 2 และการรายงานคาร์บอน ดู [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar)', 'การขออนุญาตติดตั้งโซลาร์รูฟท็อป ดู [ขั้นตอนจดแจ้งและขออนุญาต](guides/rooftop-solar-registration-and-permits-step-by-step)'] },
          { heading: 'การอ้างอิงและรูปภาพ', body: ['ภาพถ่ายโครงการบนเว็บไซต์เป็นภาพจริงของเรา หากต้องการนำไปใช้ในสื่อ กรุณาติดต่อเพื่อขออนุญาตและขอไฟล์ความละเอียดสูง ข้อมูลผลงานรวมดูที่ [ผลงานและผลกระทบ](impact)'] },
          { heading: 'ติดต่อสื่อ', body: ['อีเมล admin@powerexpress1980.com โทร 082-096-6595 ที่อยู่ 444 อาคารเอ็มบีเค ทาวเวอร์ ชั้น 11 ถนนพญาไท เขตปทุมวัน กรุงเทพฯ 10330'] },
        ],
        faq: [{ q: 'ขอสัมภาษณ์ผู้บริหารได้อย่างไร', a: 'ส่งอีเมลมาที่ admin@powerexpress1980.com ระบุสื่อ หัวข้อ และกำหนดส่งงาน' }],
        cta: cta.th,
      },
      en: {
        title: 'For the Media: Power Express Company Facts and Spokesperson Topics',
        description: 'Information for the press: facts about Powerexpress1980 Company Limited, overall rooftop solar project figures, topics available for interview, and contact details.',
        intro: 'This page collects basics for journalists, analysts and content producers who want to reference Power Express. Overall figures are calculated live from the project list on this website.',
        sections: [
          { heading: 'About the company', body: ['Powerexpress1980 Company Limited (บริษัท เพาวเวอร์เอ็กซ์เพรส1980 จำกัด) provides rooftop solar PPA for factories and businesses in Thailand. The provider invests in, installs and maintains the system, and the power user pays for the electricity actually produced under the contract. The company also offers energy-saving cooling (Cooling-as-a-Service).'] },
          { heading: 'Management', body: ['Panuwat Thongrompo, Chief Executive Officer ([LinkedIn](https://www.linkedin.com/in/panuwat-thongrompo-18760b15/))'] },
          { heading: 'Topics available for interview', body: [], bullets: ['Private PPA and rooftop solar for factories. See the [complete private PPA guide](guides/private-ppa-complete-guide)', 'Direct PPA, UGT and clean-power options. See [Direct PPA in Thailand](guides/direct-ppa-thailand-explained)', 'Factory electricity and the Ft charge. See [the latest factory tariff](guides/factory-electricity-tariff-sep-dec-2026)', 'CBAM, Scope 2 and carbon reporting. See [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar)', 'Permits for rooftop solar. See [Registration and permits](guides/rooftop-solar-registration-and-permits-step-by-step)'] },
          { heading: 'Citation and images', body: ['Project photos on the website are our own real photos. To use them in media, please contact us for permission and high-resolution files. For overall figures see [Track record and impact](impact).'] },
          { heading: 'Press contact', body: ['Email admin@powerexpress1980.com, phone 082-096-6595, 444 MBK Tower, 11th Floor, Phaya Thai Road, Pathum Wan, Bangkok 10330.'] },
        ],
        faq: [{ q: 'How do I request an interview?', a: 'Email admin@powerexpress1980.com with the outlet, topic and deadline.' }],
        cta: cta.en,
      },
    },
  },
];
