// Articles 21-25: regulation and terminology. Facts checked 2026-11-01 against Chambers
// "Renewable Energy 2026: Thailand" and Dentons (Aug 2026); vendor claims that conflicted
// were left out. Anything unsettled is marked "check the current rules".
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ตรวจสอบข้อมูลล่าสุดเมื่อ 1 พฤศจิกายน 2569 กฎระเบียบเปลี่ยนได้ ควรยืนยันกับหน่วยงานที่เกี่ยวข้องและที่ปรึกษากฎหมายก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Last checked on 1 November 2026. Rules change, so confirm with the relevant authorities and a legal adviser before you decide.';
const ph = (project, index, th, en) => ({ project, index, alt: { th, en } });

module.exports = [
  // 21 --------------------------------------------------------------------------------------
  {
    slug: 'guide-registration-process',
    path: 'guides/rooftop-solar-registration-and-permits-step-by-step',
    kind: 'guide',
    published,
    hero: ph(8, 'banner', 'โรงงานผลิตกล่องกระดาษที่ติดโซลาร์รูฟท็อป สมุทรปราการ ซึ่งผ่านขั้นตอนอนุญาตและเชื่อมต่อการไฟฟ้า', 'A carton plant in Samut Prakan with rooftop solar that went through permitting and grid connection'),
    text: {
      th: {
        title: 'ขั้นตอนจดแจ้งและขออนุญาตโซลาร์รูฟท็อปโรงงาน: กกพ. โรงงาน อาคาร และการไฟฟ้า',
        description: 'เส้นทางขออนุญาตติดโซลาร์รูฟท็อปในโรงงานแบบทีละขั้น ได้แก่ กฎหมายโรงงาน กกพ. การดัดแปลงอาคาร และการขอเชื่อมต่อ PEA/MEA พร้อมสิ่งที่ผู้ให้บริการควรทำแทนคุณ',
        intro: 'หนึ่งในคำถามที่โรงงานกังวลที่สุดคือ "ต้องขอใบอนุญาตอะไรบ้าง" คำตอบคือมีหลายหน่วยงานและขึ้นกับขนาดระบบกับวิธีใช้ไฟ บทความนี้อธิบายเส้นทางทั่วไปสำหรับระบบที่ผลิตไฟใช้เองในโรงงาน โดยแยกสิ่งที่ยืนยันได้ออกจากสิ่งที่ต้องตรวจสอบกับหน่วยงานก่อน',
        sections: [
          {
            heading: 'ภาพรวม: ห้าหน่วยงาน หนึ่งเส้นทาง',
            body: ['การติดโซลาร์รูฟท็อปเพื่อใช้เองในโรงงานเกี่ยวข้องกับหน่วยงานหลักเหล่านี้'],
            bullets: [
              'กรมโรงงานอุตสาหกรรม (กระทรวงอุตสาหกรรม): ผลต่อใบอนุญาตโรงงาน (รง.4)',
              'คณะกรรมการกำกับกิจการพลังงาน (กกพ.): การประกอบกิจการผลิตไฟฟ้า',
              'เทศบาลหรือองค์กรปกครองส่วนท้องถิ่น: การดัดแปลงอาคารตามกฎหมายควบคุมอาคาร',
              'การไฟฟ้านครหลวง (MEA) หรือการไฟฟ้าส่วนภูมิภาค (PEA): ขอเชื่อมต่อระบบและติดตั้งมิเตอร์',
              'หน่วยงานอื่นตามกรณี เช่น นิคมอุตสาหกรรม หรือเจ้าของอาคารเมื่อเป็นอาคารเช่า',
            ],
          },
          {
            heading: 'ขั้นที่ 1: ตรวจแบบและโครงสร้างโดยวิศวกร',
            photo: ph(8, 3, 'หลังคาโรงงานกล่องกระดาษที่ผ่านการตรวจโครงสร้างก่อนติดแผงโซลาร์', 'A carton-plant roof whose structure was checked before panels were installed'),
            body: ['เอกสารยื่นอนุญาตส่วนใหญ่เริ่มจากแบบและการคำนวณโครงสร้าง ให้วิศวกรตรวจน้ำหนักเพิ่มและแรงลมของหลังคา และทำแบบแปลนจุดติดตั้ง ดูเกณฑ์คัดกรองที่ [หลังคาโรงงานของคุณเหมาะกับโซลาร์หรือไม่](guides/is-my-factory-roof-suitable-for-solar) และ [หลังคาเมทัลชีท คอนกรีต กระเบื้อง](guides/rooftop-solar-metal-sheet-vs-concrete-roof)'],
          },
          {
            heading: 'ขั้นที่ 2: กฎหมายโรงงาน (รง.4)',
            body: ['จากรายงานของสำนักงานกฎหมาย กฎกระทรวงอุตสาหกรรมฉบับที่ 3 พ.ศ. 2567 กำหนดให้โซลาร์รูฟท็อปไม่ถูกนับเป็นโรงงานที่ต้องมีใบอนุญาตตามกฎหมายโรงงาน ซึ่งช่วยลดภาระการแก้ไขใบอนุญาตโรงงานเดิม', 'อย่างไรก็ตาม เจ้าหน้าที่ในบางพื้นที่อาจยังขอเอกสารระหว่างช่วงปรับตัว ผู้ให้บริการควรถือประกาศฉบับล่าสุดและพร้อมอธิบายต่อเจ้าหน้าที่ และคุณควรตรวจกับกรมโรงงานหรืออุตสาหกรรมจังหวัดของคุณเมื่อมีข้อสงสัย'],
          },
          {
            heading: 'ขั้นที่ 3: กกพ. และการผลิตไฟฟ้าใช้เอง',
            body: ['การผลิตไฟฟ้าเพื่อใช้เองไม่จำเป็นต้องขายเข้าระบบ และจากรายงานของสำนักงานกฎหมาย ระบบผลิตไฟขนาดเล็กโดยทั่วไป (ต่ำกว่า 1,000 kVA) มักได้รับการยกเว้นใบอนุญาตผลิตไฟฟ้า แต่ยังอาจต้องแจ้งหรือปฏิบัติตามเงื่อนไขของ กกพ.', 'หากต้องการขายไฟส่วนเกินเข้าระบบ ต้องเป็นไปตามโครงการรับซื้อที่เปิดอยู่ และทำสัญญาซื้อขายไฟกับการไฟฟ้า ดู [Net metering กับ Zero export](guides/net-metering-vs-zero-export-factory-solar)'],
          },
          {
            heading: 'ขั้นที่ 4: ดัดแปลงอาคาร',
            body: ['การติดแผงและโครงยึดบนหลังคาอาจเข้าข่ายการดัดแปลงอาคารตามกฎหมายควบคุมอาคาร ผู้ให้บริการหลายรายระบุว่าต้องขออนุญาตกับเทศบาลหรือท้องถิ่น แต่ข้อกำหนดแต่ละพื้นที่ต่างกัน ควรให้ผู้ให้บริการตรวจกับท้องถิ่นของคุณและแจ้งผลเป็นลายลักษณ์อักษร', 'หากเป็นโรงงานในนิคมอุตสาหกรรม อาจมีขั้นตอนของนิคมเพิ่มเติม และหากเป็นอาคารเช่า ต้องมีหนังสืออนุญาตจากเจ้าของอาคาร'],
          },
          {
            heading: 'ขั้นที่ 5: ขอเชื่อมต่อระบบกับ MEA หรือ PEA',
            photo: ph(8, 6, 'แผงโซลาร์บนหลังคาโรงงานที่ผ่านการตรวจรับและเชื่อมต่อระบบกับการไฟฟ้า', 'Panels on a plant roof that passed inspection and was connected to the utility'),
            body: ['ระบบที่ต่อขนานกับระบบการไฟฟ้าต้องได้รับความเห็นชอบจาก MEA หรือ PEA ก่อนเดินเครื่อง โดยส่งแบบไฟฟ้า (single line diagram) รายการอุปกรณ์ และเอกสารของโรงงาน การไฟฟ้าตรวจและอนุมัติ จากนั้นมีการตรวจรับและปรับมิเตอร์ตามเงื่อนไข ระยะเวลาขึ้นกับพื้นที่และความครบถ้วนของเอกสาร จึงควรวางไว้ในไทม์ไลน์โครงการตั้งแต่ต้น'],
          },
          {
            heading: 'ขั้นที่ 6: ทดสอบ ตรวจรับ และเดินเครื่อง',
            body: [],
            bullets: ['ทดสอบระบบป้องกันและการตัดไฟเมื่อไฟหลักดับ', 'ตรวจรับร่วมกับการไฟฟ้าตามเงื่อนไข', 'เริ่มเดินเครื่องเชิงพาณิชย์ (COD) และบันทึกวันที่เริ่มสัญญา', 'ส่งมอบเอกสารแบบก่อสร้างจริง คู่มือ และการรับประกันให้โรงงาน'],
          },
          {
            heading: 'ใครทำอะไรภายใต้สัญญา PPA',
            body: ['ภายใต้ PPA ผู้ให้บริการมักรับผิดชอบจัดเตรียมเอกสารและยื่นขออนุญาต ส่วนโรงงานสนับสนุนข้อมูล เช่น แบบอาคาร ใบอนุญาตเดิม และหนังสืออนุญาตจากเจ้าของอาคาร ควรระบุในสัญญาว่าใครรับความเสี่ยงหากการอนุญาตล่าช้าหรือไม่ผ่าน ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide) และภาพรวมเดิมที่ [ขั้นตอนขออนุญาตติดตั้งโซลาร์รูฟท็อป](guides/rooftop-solar-permits-overview)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ระยะเวลาและเอกสารจริงขึ้นกับหน่วยงานและพื้นที่ หน้านี้ไม่ระบุจำนวนวันที่ใช้ เพราะยืนยันกับแหล่งทางการไม่ได้'] },
        ],
        faq: [
          { q: 'ต้องแก้ไขใบอนุญาตโรงงาน (รง.4) หรือไม่', a: 'ตามรายงานของสำนักงานกฎหมาย กฎกระทรวงฉบับที่ 3 พ.ศ. 2567 ทำให้โซลาร์รูฟท็อปไม่ถูกนับเป็นโรงงานที่ต้องมีใบอนุญาต แต่ควรยืนยันกับกรมโรงงานหรืออุตสาหกรรมจังหวัดของคุณ' },
          { q: 'ต้องขอใบอนุญาตจาก กกพ. ไหม', a: 'ระบบผลิตไฟใช้เองขนาดเล็กโดยทั่วไปมักได้รับการยกเว้นใบอนุญาต แต่อาจต้องแจ้งตามเงื่อนไข ขนาดที่เกินเกณฑ์ต้องขอใบอนุญาต ควรตรวจกับ กกพ.' },
          { q: 'ใครเป็นคนยื่นเอกสารทั้งหมด', a: 'ภายใต้ PPA ผู้ให้บริการมักเป็นผู้ยื่นและติดตามเรื่อง โดยโรงงานให้ข้อมูลและหนังสืออนุญาตที่จำเป็น ควรระบุไว้ในสัญญา' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar Registration and Permits for Thai Factories, Step by Step: ERC, Factory Act, Building and Utility',
        description: 'The permit path for factory rooftop solar step by step: factory law, the ERC, building modification and PEA/MEA grid connection, and what your provider should handle for you.',
        intro: 'One of the biggest worries factories have is “which licences do we need?” The answer is that several agencies are involved and it depends on system size and how the power is used. This article describes the usual path for a system that generates power for the factory’s own use, separating what can be confirmed from what you should check with the authority first.',
        sections: [
          {
            heading: 'Overview: five bodies, one path',
            body: ['Installing rooftop solar for self-consumption in a factory involves these main bodies.'],
            bullets: [
              'Department of Industrial Works (Ministry of Industry): effect on the factory licence (Ror.Ngor.4)',
              'Energy Regulatory Commission (ERC): electricity generation business',
              'Municipality or local authority: building modification under the building-control law',
              'Metropolitan Electricity Authority (MEA) or Provincial Electricity Authority (PEA): grid connection and metering',
              'Others as relevant, such as the industrial estate, or the landlord for a leased building',
            ],
          },
          {
            heading: 'Step 1: Engineer reviews design and structure',
            photo: ph(8, 3, 'A carton-plant roof whose structure was checked before panels were installed', 'A carton-plant roof whose structure was checked before panels were installed'),
            body: ['Most permit filings start with drawings and structural calculations. An engineer checks the added weight and wind load of the roof and prepares layout drawings. See [Is your factory roof suitable for solar?](guides/is-my-factory-roof-suitable-for-solar) and [Metal sheet, concrete or tile roofs](guides/rooftop-solar-metal-sheet-vs-concrete-roof).'],
          },
          {
            heading: 'Step 2: Factory law (Ror.Ngor.4)',
            body: ['According to law-firm reporting, Ministerial Regulation No. 3 B.E. 2567 (2024) provides that rooftop solar is no longer treated as a factory requiring a factory licence, which reduces the burden of amending an existing factory licence.', 'Even so, officers in some areas may still ask for paperwork during the transition. The provider should carry the latest notification and be ready to explain it, and you should check with the Department of Industrial Works or your provincial industry office if in doubt.'],
          },
          {
            heading: 'Step 3: The ERC and self-generation',
            body: ['Power generated for own use does not have to be sold to the grid, and according to law-firm reporting, small generation systems generally (below 1,000 kVA) are usually exempt from the generation licence, though notification or ERC conditions may still apply.', 'If you want to sell surplus power to the grid, it must be under an open purchase scheme with a power purchase agreement with the utility. See [Net metering vs zero export](guides/net-metering-vs-zero-export-factory-solar).'],
          },
          {
            heading: 'Step 4: Building modification',
            body: ['Mounting panels and frames on a roof may count as a building modification under the building-control law. Many providers say a permit is needed from the municipality or local authority, but requirements differ by area. Ask your provider to check with your local authority and confirm the result in writing.', 'A plant inside an industrial estate may have additional estate procedures, and a leased building needs the landlord’s written consent.'],
          },
          {
            heading: 'Step 5: Grid connection with MEA or PEA',
            photo: ph(8, 6, 'Panels on a plant roof that passed inspection and was connected to the utility', 'Panels on a plant roof that passed inspection and was connected to the utility'),
            body: ['A system running in parallel with the utility network needs MEA or PEA approval before operation. You submit a single-line diagram, the equipment list and plant documents; the utility reviews and approves, then inspects and adjusts the metering as required. Duration depends on the area and how complete the documents are, so build it into the project timeline from the start.'],
          },
          {
            heading: 'Step 6: Test, inspect and commission',
            body: [],
            bullets: ['Test protection and the shut-down when the grid fails', 'Inspection with the utility as required', 'Commercial operation date (COD) and recording the contract start date', 'Hand over as-built drawings, manuals and warranties to the factory'],
          },
          {
            heading: 'Who does what under a PPA',
            body: ['Under a PPA the provider usually prepares and files the permits while the factory supplies information such as building drawings, existing licences and the landlord’s consent. State in the contract who bears the risk if approvals are delayed or refused. See the [complete private PPA guide](guides/private-ppa-complete-guide) and the earlier [rooftop solar permits overview](guides/rooftop-solar-permits-overview).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'Real durations and documents depend on the authority and area. This page deliberately gives no number of days because they cannot be confirmed from official sources.'] },
        ],
        faq: [
          { q: 'Do we have to amend the factory licence (Ror.Ngor.4)?', a: 'According to law-firm reporting, Ministerial Regulation No. 3 B.E. 2567 means rooftop solar is no longer treated as a factory needing a licence, but confirm with the Department of Industrial Works or your provincial office.' },
          { q: 'Do we need an ERC licence?', a: 'Small self-use systems are generally exempt from the generation licence, though notification may apply. Systems above the threshold need a licence. Check with the ERC.' },
          { q: 'Who files all the paperwork?', a: 'Under a PPA the provider usually files and follows up, with the factory supplying information and consents. Put it in the contract.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 22 --------------------------------------------------------------------------------------
  {
    slug: 'guide-direct-ppa-explained',
    path: 'guides/direct-ppa-thailand-explained',
    kind: 'guide',
    published,
    hero: ph(14, 'banner', 'โรงงานอุตสาหกรรมขนาดใหญ่ในสมุทรสาครที่ใช้ไฟต่อเนื่อง ซึ่งเป็นกลุ่มที่สนใจพลังงานสะอาดผ่านระบบสายส่ง', 'A large industrial plant in Samut Sakhon with continuous load, the kind of user interested in clean power through the grid'),
    text: {
      th: {
        title: 'Direct PPA ในประเทศไทยคืออะไร: สถานะล่าสุด ใครซื้อได้ และต้องรู้อะไรก่อนตัดสินใจ',
        description: 'Direct PPA คือการซื้อไฟหมุนเวียนจากผู้ผลิตโดยตรงผ่านระบบสายส่ง สถานะโครงการนำร่อง 2,000 MW ผู้ที่ซื้อได้ ค่าใช้ระบบสายส่ง (TPA) และสิ่งที่โรงงานควรทำตอนนี้',
        intro: 'Direct PPA เป็นหัวข้อที่โรงงานและธุรกิจถามมากขึ้น แต่ข้อมูลที่เผยแพร่ปะปนกัน บางแหล่งเขียนเหมือนใช้ได้แล้ว บทความนี้สรุปสถานะตามที่สำนักงานกฎหมายและแหล่งข่าวน่าเชื่อถือรายงานล่าสุด และบอกชัดว่าส่วนไหนยังไม่เสร็จสิ้น',
        sections: [
          {
            heading: 'Direct PPA คืออะไร',
            body: ['Direct PPA (Direct Power Purchase Agreement) คือสัญญาที่ผู้ใช้ไฟรายใหญ่ซื้อไฟฟ้าหมุนเวียนจากผู้ผลิตโดยตรง แทนที่จะซื้อผ่านการไฟฟ้าเพียงทางเดียว ไฟถูกส่งผ่านระบบสายส่งหรือจำหน่ายของรัฐ โดยผู้ใช้จ่ายค่าบริการใช้ระบบ ซึ่งเรียกในร่างกฎระเบียบว่า Third Party Access (TPA)', 'ต่างจาก [Private PPA บนหลังคา](guides/private-ppa-complete-guide) ที่ผลิตไฟที่หลังคาโรงงานและใช้ทันที เปรียบเทียบสามทางเลือกได้ที่ [Direct PPA, UGT และ Private PPA ต่างกันอย่างไร](guides/direct-ppa-vs-ugt-vs-private-ppa)'],
          },
          {
            heading: 'สถานะล่าสุด (ตรวจเมื่อ 1 พฤศจิกายน 2569)',
            photo: ph(14, 5, 'โรงงานขนาดใหญ่ในสมุทรสาครที่มีหลังคาติดโซลาร์หลายอาคาร', 'A large plant in Samut Sakhon with solar on several roof buildings'),
            body: ['ตามที่รายงานโดยสำนักงานกฎหมายและแหล่งข่าวหลายแห่ง'],
            bullets: [
              'โครงการนำร่องมีกรอบกำลังผลิตรวม 2,000 MW และเริ่มจากกลุ่มศูนย์ข้อมูล (data center)',
              'ต.ค. 2568: กกพ. เปิดรับฟังความคิดเห็นร่างหลักเกณฑ์โครงการนำร่อง ตามด้วยอัตราค่าบริการใช้ระบบ (TPA)',
              '15 ก.ค. 2569: คณะกรรมการนโยบายพลังงานแห่งชาติ (กพช.) เห็นชอบในหลักการให้ขยาย Direct PPA ผ่าน TPA ไปยังผู้ใช้ไฟภาคอุตสาหกรรมอื่น',
              'ประมวลหลักเกณฑ์ TPA ยังอยู่ในสถานะร่าง และการใช้งานเชิงพาณิชย์ขึ้นกับการออกแบบอัตราค่าบริการสุดท้าย',
              'ผลคือ Direct PPA ทั่วไปสำหรับโรงงานยังไม่เปิดให้ใช้ได้อย่างกว้างขวาง ณ วันที่ตรวจ',
            ],
          },
          {
            heading: 'ค่าใช้ระบบสายส่ง (TPA) ประกอบด้วยอะไร',
            body: ['ผู้ซื้อ Direct PPA ต้องจ่ายนอกเหนือจากค่าไฟที่ตกลงกับผู้ผลิต ค่าใช้ระบบ ซึ่งโดยหลักการประกอบด้วยค่าบริการใช้สายส่งหรือจำหน่าย ค่าบริการเสริมความมั่นคงของระบบ และค่าความคลาดเคลื่อนระหว่างปริมาณที่ตกลงกับที่ใช้จริง', 'ตัวเลขที่ปรากฏตามเว็บไซต์เชิงพาณิชย์บางแห่งเป็นร่างและยังเปลี่ยนได้ เราจึงไม่ระบุตัวเลขในบทความนี้ ให้ดูประกาศล่าสุดของ กกพ.'],
          },
          {
            heading: 'โรงงานควรทำอะไรตอนนี้',
            body: [],
            bullets: [
              'อย่ารอ Direct PPA เพื่อเริ่มลดไฟ โซลาร์รูฟท็อปเริ่มได้ทันทีและลดไฟที่ซื้อจากการไฟฟ้าโดยตรง',
              'เก็บข้อมูลโหลดรายชั่วโมงและบิลย้อนหลัง เพราะ Direct PPA ต้องการข้อมูลโหลดเพื่อจับคู่กับผู้ผลิต',
              'ติดตามประกาศของ กกพ. และสอบถามการไฟฟ้าเรื่องเกณฑ์ผู้ใช้ไฟและโควตา',
              'ตรวจกับลูกค้าว่ายอมรับ Direct PPA หรือ UGT ในรายงานคาร์บอนหรือไม่ ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)',
              'พิจารณา [UGT](guides/utility-green-tariff-ugt-thailand-explained) เป็นทางเลือกระหว่างรอ',
            ],
          },
          {
            heading: 'เมื่อ Direct PPA เปิด จะเหมาะกับใคร',
            body: ['โดยหลักการ ผู้ใช้ไฟรายใหญ่ที่ใช้ไฟต่อเนื่อง ไม่มีหลังคาพอ หรือต้องการสัดส่วนพลังงานสะอาดสูงกว่าที่หลังคาผลิตได้ จะได้ประโยชน์ การรวมกับโซลาร์รูฟท็อปเป็นแนวทางที่หลายโรงงานเลือก เพราะรูฟท็อปผลิตไฟกลางวันที่ใช้ได้ทันที ส่วน Direct PPA ช่วยเติมส่วนที่เหลือ'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'สถานะ Direct PPA เปลี่ยนเร็ว ข้อมูลในหน้านี้ไม่ใช่ประกาศของหน่วยงานรัฐ ตรวจกับ กกพ. กระทรวงพลังงาน และการไฟฟ้าก่อนตัดสินใจ'] },
        ],
        faq: [
          { q: 'ตอนนี้โรงงานทั่วไปทำ Direct PPA ได้หรือยัง', a: 'ตามรายงานล่าสุดที่ตรวจ ยังไม่เปิดอย่างกว้างขวาง โครงการนำร่องเริ่มจากศูนย์ข้อมูล และการขยายสู่ภาคอุตสาหกรรมได้รับความเห็นชอบในหลักการแล้วแต่ยังรอหลักเกณฑ์ TPA' },
          { q: 'Direct PPA ถูกกว่าโซลาร์รูฟท็อปไหม', a: 'เทียบไม่ได้โดยตรง ต้องรวมค่าใช้ระบบสายส่งซึ่งยังไม่สรุป การเปรียบเทียบควรใช้ต้นทุนรวมต่อหน่วยที่ส่งถึงโรงงาน' },
          { q: 'ต้องทำอะไรเพื่อเตรียมตัว', a: 'รวบรวมข้อมูลโหลดรายชั่วโมงและบิลย้อนหลัง ตรวจข้อกำหนดลูกค้าด้านพลังงานสะอาด และติดตามประกาศของ กกพ.' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'What Is a Direct PPA in Thailand? Latest Status, Who Can Buy and What to Know',
        description: 'A Direct PPA buys renewable power straight from a generator through the grid. Status of the 2,000 MW pilot, who can buy, the third-party-access (TPA) charge and what factories should do now.',
        intro: 'Direct PPA is a topic factories and businesses ask about more and more, but published information is mixed and some sources read as if it is already available. This article summarises the status as reported by law firms and credible news, and says clearly what is not yet finished.',
        sections: [
          {
            heading: 'What is a Direct PPA?',
            body: ['A Direct Power Purchase Agreement is a contract under which a large power user buys renewable electricity straight from a generator rather than only through the utility. The power travels over the state transmission or distribution network and the user pays a network-use charge, called Third Party Access (TPA) in the draft rules.', 'It differs from a [rooftop Private PPA](guides/private-ppa-complete-guide), which generates on the factory roof and is used immediately. Compare the three options in [Direct PPA, UGT and Private PPA](guides/direct-ppa-vs-ugt-vs-private-ppa).'],
          },
          {
            heading: 'Latest status (checked 1 November 2026)',
            photo: ph(14, 5, 'A large plant in Samut Sakhon with solar on several roof buildings', 'A large plant in Samut Sakhon with solar on several roof buildings'),
            body: ['As reported by law firms and several news sources:'],
            bullets: [
              'The pilot has a total capacity framework of 2,000 MW and began with data centres',
              'October 2025: the ERC opened draft pilot criteria for public consultation, followed by consultation on the TPA charges',
              '15 July 2026: the National Energy Policy Council (NEPC) approved in principle extending Direct PPA through TPA to other industrial users',
              'The TPA Code is still in draft, and commercial viability depends on the final charge design',
              'As a result, general Direct PPA for factories was not yet broadly available at the date checked',
            ],
          },
          {
            heading: 'What the TPA charge consists of',
            body: ['A Direct PPA buyer pays on top of the price agreed with the generator. In principle the network charge covers use of the transmission or distribution system, ancillary services for system security, and imbalance between the contracted and actual volumes.', 'Figures that appear on some commercial websites are drafts and may change, so we give no number here. See the latest ERC announcement.'],
          },
          {
            heading: 'What a factory should do now',
            body: [],
            bullets: [
              'Do not wait for Direct PPA to start cutting power cost; rooftop solar can start now and directly reduces what you buy from the utility',
              'Collect hourly load data and past bills, because a Direct PPA needs load data to match with a generator',
              'Follow ERC announcements and ask the utility about user eligibility and quotas',
              'Check with customers whether they accept Direct PPA or UGT in carbon reporting. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting)',
              'Consider [UGT](guides/utility-green-tariff-ugt-thailand-explained) as an option in the meantime',
            ],
          },
          {
            heading: 'Who it will suit once it opens',
            body: ['In principle, large users with continuous load, not enough roof, or a higher clean-energy share than the roof can supply will benefit. Combining it with rooftop solar is the route many factories take, because the roof produces daytime power that is used immediately and a Direct PPA can fill the rest.'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'Direct PPA status changes quickly. This page is not an announcement by any authority. Check with the ERC, the Ministry of Energy and the utility before deciding.'] },
        ],
        faq: [
          { q: 'Can an ordinary factory do a Direct PPA today?', a: 'According to the latest reports checked, not broadly. The pilot began with data centres, and extension to industry has been approved in principle but awaits the TPA rules.' },
          { q: 'Is a Direct PPA cheaper than rooftop solar?', a: 'They cannot be compared directly. The network charge is not final. Compare on total cost per unit delivered to your plant.' },
          { q: 'How do we prepare?', a: 'Collect hourly load data and past bills, check your customers’ clean-energy requirements, and follow ERC announcements.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 23 --------------------------------------------------------------------------------------
  {
    slug: 'guide-ugt-explained',
    path: 'guides/utility-green-tariff-ugt-thailand-explained',
    kind: 'guide',
    published,
    hero: ph(19, 'banner', 'โรงงานแปรรูปอาหารทะเลแช่แข็งที่ใช้ไฟต่อเนื่อง ซึ่งอาจใช้ UGT เสริมกับโซลาร์รูฟท็อป', 'A frozen seafood plant with continuous load, which could add UGT on top of rooftop solar'),
    text: {
      th: {
        title: 'Utility Green Tariff (UGT) คืออะไร: UGT1 กับ UGT2 ต่างกันอย่างไร และเหมาะกับใคร',
        description: 'UGT คืออัตราค่าไฟสีเขียวที่ซื้อจากการไฟฟ้าพร้อมใบรับรองพลังงานหมุนเวียน UGT1 และ UGT2 ต่างกันอย่างไร สัญญาและขั้นตอน และข้อควรระวังเรื่องรายงานคาร์บอน',
        intro: 'UGT (Utility Green Tariff) เป็นทางเลือกที่ธุรกิจไทยใช้เพื่อแสดงการใช้ไฟฟ้าจากพลังงานหมุนเวียน โดยไม่ต้องติดตั้งอะไรที่โรงงาน บทความนี้อธิบายหลักการ ความต่างของ UGT1 กับ UGT2 และสิ่งที่ควรตรวจก่อนสมัคร',
        sections: [
          {
            heading: 'UGT คืออะไร',
            body: ['UGT คืออัตราค่าไฟพิเศษที่ผู้ใช้ไฟซื้อไฟฟ้าซึ่งอ้างอิงแหล่งพลังงานหมุนเวียน พร้อมใบรับรองพลังงานหมุนเวียน (REC) โดยจ่ายเพิ่มจากค่าไฟตามอัตราปกติ ไฟที่ใช้ยังมาจากระบบของการไฟฟ้า ใบรับรองคือหลักฐานว่ามีการผลิตไฟหมุนเวียนในปริมาณเทียบเท่า', 'กกพ. เปิดโครงการเมื่อวันที่ 23 มกราคม 2568 ร่วมกับ กฟผ. การไฟฟ้านครหลวง และการไฟฟ้าส่วนภูมิภาค'],
          },
          {
            heading: 'UGT1 และ UGT2 ต่างกันอย่างไร',
            photo: ph(19, 2, 'โรงงานแปรรูปอาหารทะเลแช่แข็งในจังหวัดระนองที่ติดโซลาร์รูฟท็อป', 'A frozen seafood plant in Ranong with rooftop solar'),
            body: [],
            bullets: [
              'UGT1 (ไม่ระบุแหล่ง): ไฟหมุนเวียนจากกลุ่มโรงไฟฟ้าพลังน้ำของ กฟผ. 7 แห่ง ค่าไฟบวกส่วนเพิ่มสำหรับใบรับรองและค่าบริหารจัดการ เปิดรับสมัครตั้งแต่ต้นปี 2568 และ กกพ. กำหนดอัตราสำหรับปี 2569 แล้ว',
              'UGT2 (ระบุแหล่ง): ใช้พอร์ตโฟลิโอพลังงานหมุนเวียนที่ระบุ สำหรับผู้ใช้ไฟประเภทที่กำหนด เช่น กิจการขนาดใหญ่ อัตราเริ่มมีผล 1 พฤษภาคม 2569 และคาดว่าจะเปิดรับสมัครช่วงปลายปี 2569 เพื่อเริ่มให้บริการปี 2570 ตามที่รายงานโดยสำนักงานกฎหมาย',
            ],
          },
          {
            heading: 'สัญญาและขั้นตอนโดยย่อ',
            body: ['ผู้ซื้อต้องทำสัญญากับ กฟผ. MEA หรือ PEA ตามประเภท โดยตามรายงานเกี่ยวกับ UGT1 สัญญามีอายุหนึ่งปี การไฟฟ้าส่งใบรับรองเมื่อสิ้นรอบการจัดสรร เงื่อนไขรายละเอียดและช่วงเปิดรับสมัครเปลี่ยนได้ ควรสอบถามการไฟฟ้าที่ดูแลพื้นที่ของคุณโดยตรง'],
          },
          {
            heading: 'ข้อควรพิจารณาก่อนสมัคร',
            body: [],
            bullets: [
              'ส่วนเพิ่มที่จ่ายเทียบกับประโยชน์ที่ได้ และลูกค้าของคุณยอมรับ REC นี้ในรายงานหรือไม่',
              'การรายงาน Scope 2 แบบอิงตลาด (market-based) ต่างจากแบบอิงที่ตั้ง (location-based) ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)',
              'หลีกเลี่ยงการนับซ้ำ หากมีทั้งโซลาร์รูฟท็อปและ UGT ต้องแยกปริมาณไฟและใบรับรองให้ชัด',
              'ระยะสัญญาและโอกาสเปลี่ยนแปลงอัตราในอนาคต',
            ],
          },
          {
            heading: 'UGT ต่างจากโซลาร์รูฟท็อปอย่างไร',
            body: ['UGT ไม่ได้ลดปริมาณไฟที่ซื้อจากการไฟฟ้า แต่เปลี่ยน "ที่มา" ทางเอกสารของไฟที่ซื้อ และต้องจ่ายส่วนเพิ่ม ส่วนโซลาร์รูฟท็อปผลิตไฟที่หน้างานจึงลดไฟที่ซื้อจริง หลายโรงงานจึงใช้รูฟท็อปเป็นหลักและเติม UGT ในส่วนที่ต้องการแสดงพลังงานสะอาดเพิ่ม เปรียบเทียบเพิ่มที่ [Direct PPA, UGT และ Private PPA](guides/direct-ppa-vs-ugt-vs-private-ppa) และ [Direct PPA คืออะไร](guides/direct-ppa-thailand-explained)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'อัตรา เงื่อนไข และวันเปิดรับสมัครของ UGT กำหนดโดย กกพ. และการไฟฟ้า ตรวจกับ กฟผ. MEA หรือ PEA ก่อนสมัคร'] },
        ],
        faq: [
          { q: 'UGT ทำให้ค่าไฟถูกลงหรือไม่', a: 'ไม่ใช่เป้าหมายหลัก UGT เป็นการจ่ายส่วนเพิ่มเพื่อให้ได้ไฟพร้อมใบรับรองพลังงานหมุนเวียน การลดค่าไฟมาจากการผลิตไฟเอง เช่น โซลาร์รูฟท็อป' },
          { q: 'ติดโซลาร์แล้วซื้อ UGT เพิ่มได้ไหม', a: 'ในหลักการทำได้ ใช้เติมส่วนที่ผลิตเองไม่พอ แต่ต้องตรวจเงื่อนไขกับการไฟฟ้า และไม่นับไฟหรือใบรับรองซ้ำในรายงาน' },
          { q: 'UGT2 เปิดรับสมัครเมื่อไร', a: 'ตามรายงานที่ตรวจ คาดว่าช่วงปลายปี 2569 และเริ่มให้บริการปี 2570 ควรยืนยันกับการไฟฟ้า' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'What Is the Utility Green Tariff (UGT) in Thailand? UGT1 vs UGT2 and Who It Suits',
        description: 'UGT is a green tariff bought from the utility with a renewable-energy certificate. How UGT1 and UGT2 differ, the contract and steps, and cautions for carbon reporting.',
        intro: 'The Utility Green Tariff (UGT) is an option Thai businesses use to show they are consuming renewable electricity without installing anything at the plant. This article explains the principle, how UGT1 and UGT2 differ, and what to check before applying.',
        sections: [
          {
            heading: 'What is UGT?',
            body: ['UGT is a special tariff under which a customer buys electricity linked to renewable sources, with renewable-energy certificates (RECs), paying a premium on top of the normal tariff. The power still comes from the utility system; the certificate is evidence that an equivalent amount of renewable power was generated.', 'The ERC launched the scheme on 23 January 2025 together with EGAT, the MEA and the PEA.'],
          },
          {
            heading: 'How UGT1 and UGT2 differ',
            photo: ph(19, 2, 'A frozen seafood plant in Ranong with rooftop solar', 'A frozen seafood plant in Ranong with rooftop solar'),
            body: [],
            bullets: [
              'UGT1 (unspecified source): renewable power from a group of seven EGAT hydropower plants. The tariff adds a premium for the certificate and administration. Applications opened in early 2025 and the ERC has set the 2026 tariff.',
              'UGT2 (specified source): a named renewable portfolio, for prescribed customer classes such as large users. The tariff took effect on 1 May 2026 and applications were expected to open toward the end of 2026 with service from 2027, as reported by a law firm.',
            ],
          },
          {
            heading: 'The contract and steps in brief',
            body: ['The buyer contracts with EGAT, the MEA or the PEA depending on the type. For UGT1, reporting says the contract term is one year, and the utility issues certificates at the end of the allocation period. Detailed conditions and application windows can change, so ask the utility that serves your area directly.'],
          },
          {
            heading: 'What to consider before applying',
            body: [],
            bullets: [
              'The premium you pay against the benefit, and whether your customers accept this REC in their reporting',
              'Market-based Scope 2 reporting differs from location-based. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting)',
              'Avoid double counting: if you have both rooftop solar and UGT, separate the energy and the certificates clearly',
              'Contract term and the chance of tariff changes',
            ],
          },
          {
            heading: 'How UGT differs from rooftop solar',
            body: ['UGT does not reduce the electricity you buy; it changes the documented “origin” of what you buy, and you pay a premium. Rooftop solar generates on site, so it really reduces what you buy. Many factories therefore use rooftop solar as the base and add UGT where they want to show more clean energy. Compare further in [Direct PPA, UGT and Private PPA](guides/direct-ppa-vs-ugt-vs-private-ppa) and [What is a Direct PPA?](guides/direct-ppa-thailand-explained).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'UGT rates, conditions and application dates are set by the ERC and the utilities. Check with EGAT, the MEA or the PEA before applying.'] },
        ],
        faq: [
          { q: 'Does UGT lower my electricity bill?', a: 'That is not its purpose. UGT is a premium to get power with a renewable certificate. Bill reduction comes from generating your own, such as rooftop solar.' },
          { q: 'Can I buy UGT in addition to rooftop solar?', a: 'In principle yes, to cover what you cannot generate, but check conditions with the utility and do not count energy or certificates twice in reports.' },
          { q: 'When does UGT2 open for applications?', a: 'As reported at the date checked, toward the end of 2026 with service from 2027. Confirm with the utility.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 24 --------------------------------------------------------------------------------------
  {
    slug: 'guide-net-metering-zero-export',
    path: 'guides/net-metering-vs-zero-export-factory-solar',
    kind: 'guide',
    published,
    hero: ph(5, 'banner', 'โซลาร์รูฟท็อปบนโรงงานบรรจุภัณฑ์ที่ผลิตไฟใช้เองภายในโรงงาน', 'Rooftop solar on a packaging plant generating power for its own use'),
    text: {
      th: {
        title: 'ขายไฟคืนการไฟฟ้า Net Metering และ Zero Export: โรงงานที่ติดโซลาร์ควรเลือกแบบไหน',
        description: 'โรงงานที่ติดโซลาร์ใช้ไฟเองได้ แต่ขายไฟส่วนเกินได้หรือไม่ Zero Export คืออะไร Net Metering ต่างจากการขายไฟอย่างไร และการออกแบบระบบเพื่อไม่ให้ไฟไหลย้อน',
        intro: 'คำถามที่พบบ่อยของโรงงานคือ "ถ้าโซลาร์ผลิตไฟเกิน ขายคืนการไฟฟ้าได้ไหม" คำตอบขึ้นกับโครงการรับซื้อที่เปิดอยู่ และในทางปฏิบัติโรงงานส่วนใหญ่ออกแบบให้ใช้ไฟเองทั้งหมด บทความนี้อธิบายความต่างของแนวทางต่างๆ และวิธีออกแบบระบบ',
        sections: [
          {
            heading: 'ใช้เองก่อน: หลักการของโซลาร์รูฟท็อปโรงงาน',
            photo: ph(5, 8, 'แผงโซลาร์บนหลังคาโรงงานบรรจุภัณฑ์ที่ผลิตไฟใช้เองในโรงงาน', 'Panels on a packaging-plant roof generating power for use inside the plant'),
            body: ['ไฟที่ผลิตเพื่อใช้เองไม่จำเป็นต้องขายเข้าระบบ แผงผลิตไฟตอนกลางวัน โรงงานใช้ไฟนั้นก่อนและซื้อจากการไฟฟ้าเฉพาะส่วนที่ขาด จึงลดไฟที่ซื้อโดยตรง และมักเป็นวิธีที่ใช้ไฟมีมูลค่าสูงสุด เพราะไฟที่ใช้เองทดแทนค่าไฟเต็มอัตราในส่วนที่ลดลง'],
          },
          {
            heading: 'Zero Export คืออะไร',
            body: ['Zero Export (หรือจำกัดการส่งออก) คือการติดตั้งอุปกรณ์ควบคุมที่วัดการไหลของไฟที่จุดเชื่อมต่อ แล้วสั่งอินเวอร์เตอร์ลดกำลังผลิตเมื่อไฟมีแนวโน้มไหลย้อนออกไปยังระบบการไฟฟ้า ผลคือไฟที่ผลิตถูกใช้ภายในโรงงานเท่านั้น', 'ข้อดีคือไม่ต้องทำสัญญาขายไฟและขั้นตอนเชื่อมต่อโดยทั่วไปง่ายกว่า ข้อเสียคือในช่วงที่โรงงานใช้ไฟต่ำ เช่น วันหยุด ระบบจะลดกำลังและเสียโอกาสผลิต ดังนั้นขนาดระบบควรกำหนดตามโหลดจริง ดู [วิธีประเมินผลประหยัดเบื้องต้น](guides/how-to-estimate-factory-solar-savings)'],
          },
          {
            heading: 'การขายไฟส่วนเกินเข้าระบบ',
            body: ['ตามรายงานของสำนักงานกฎหมาย ระบบที่ต่อกับระบบการไฟฟ้าต้องได้รับความเห็นชอบจาก MEA หรือ PEA และไฟส่วนเกินที่ขายให้การไฟฟ้าต้องเป็นไปตามโครงการรับซื้อที่มีอยู่และสัญญาซื้อขายไฟ', 'โครงการรับซื้อไฟส่วนเกินของปี 2569 ที่มีการประกาศเป็นโครงการสำหรับที่อยู่อาศัย รับซื้อในอัตรา 2.20 บาทต่อหน่วย เป็นเวลา 10 ปี จำกัดกำลังขายไม่เกิน 5 kW ต่อมิเตอร์ จึงไม่ใช่โครงการสำหรับโรงงาน'],
          },
          {
            heading: 'Net Metering ต่างจากการขายไฟอย่างไร',
            body: ['Net Metering คือการหักลบปริมาณไฟที่ส่งออกกับไฟที่ซื้อในรอบบิล ส่วนการขายไฟคือการขายส่วนเกินตามอัตราที่ตกลง ทั้งสองแบบต้องมีโครงการหรือข้อกำหนดรองรับ จากแหล่งที่ตรวจไม่พบว่ามีโครงการ Net Metering ทั่วไปสำหรับโรงงานที่เปิดใช้อยู่ ณ วันที่ตรวจ ควรสอบถาม MEA หรือ PEA เพื่อยืนยันก่อนออกแบบระบบที่พึ่งการส่งออก'],
          },
          {
            heading: 'เลือกอย่างไรสำหรับโรงงาน',
            body: [],
            bullets: [
              'โรงงานที่ใช้ไฟกลางวันสูงและสม่ำเสมอ: ใช้เอง บวก Zero Export มักตรงโจทย์ที่สุด',
              'โรงงานที่หยุดวันเสาร์อาทิตย์หรือมีโหลดต่ำบางช่วง: คำนวณพลังงานที่เสียโอกาสในวันหยุด และอาจลดขนาดระบบหรือพิจารณาแบตเตอรี่ ดู [แบตเตอรี่เก็บไฟสำหรับโรงงาน](guides/solar-battery-storage-for-factories)',
              'ต้องการขายไฟเป็นธุรกิจ: เป็นกิจการอีกประเภท ต้องศึกษาใบอนุญาตและโครงการรับซื้อ ดู [ขั้นตอนจดแจ้งและขออนุญาต](guides/rooftop-solar-registration-and-permits-step-by-step)',
            ],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'ข้อมูลนี้ไม่ใช่ประกาศของการไฟฟ้า ตรวจเงื่อนไขการเชื่อมต่อและการขายไฟกับ MEA หรือ PEA ก่อนออกแบบ'] },
        ],
        faq: [
          { q: 'โรงงานขายไฟส่วนเกินคืนการไฟฟ้าได้ไหม', a: 'ต้องเป็นไปตามโครงการรับซื้อที่เปิดอยู่และมีสัญญา โครงการที่ตรวจพบในปี 2569 เป็นของที่อยู่อาศัย ไม่ใช่โรงงาน' },
          { q: 'Zero Export ทำให้เสียพลังงานหรือไม่', a: 'เมื่อโรงงานใช้ไฟต่ำกว่าที่แผงผลิตได้ ระบบจะลดกำลังผลิต จึงเสียโอกาสผลิตในช่วงนั้น แก้ได้ด้วยการกำหนดขนาดระบบตามโหลดจริง' },
          { q: 'ถ้าไฟดับ โซลาร์ยังจ่ายไฟให้โรงงานหรือไม่', a: 'ระบบที่ต่อกับการไฟฟ้าทั่วไปจะหยุดเพื่อความปลอดภัย การใช้งานเป็นไฟสำรองต้องออกแบบเพิ่มเติม' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Net Metering and Zero Export for Factory Solar in Thailand: Which Should You Choose?',
        description: 'A solar factory uses its own power, but can it sell the surplus? What Zero Export is, how net metering differs from selling power, and how a system is designed to avoid back-feed.',
        intro: 'A common question from factories is “if solar produces too much, can we sell it back to the utility?” The answer depends on the purchase schemes that are open, and in practice most factories design to use all their output themselves. This article explains the approaches and how systems are designed.',
        sections: [
          {
            heading: 'Self-consumption first: the principle for factory rooftop solar',
            photo: ph(5, 8, 'Panels on a packaging-plant roof generating power for use inside the plant', 'Panels on a packaging-plant roof generating power for use inside the plant'),
            body: ['Power generated for own use does not have to be sold to the grid. Panels produce in daylight, the factory uses that power first and buys only the shortfall from the utility, directly reducing the power purchased. This is usually where the power is worth the most, because self-used energy replaces the full tariff on the part that falls.'],
          },
          {
            heading: 'What is Zero Export?',
            body: ['Zero Export (export limiting) means installing a controller that measures power flow at the connection point and tells the inverters to reduce output when power would flow back to the utility. The result is that generation is used only inside the factory.', 'The advantage is that no sale contract is needed and connection steps are generally simpler. The drawback is that when factory load is low, such as on holidays, the system curtails and loses generation, so system size should follow real load. See [How to estimate savings](guides/how-to-estimate-factory-solar-savings).'],
          },
          {
            heading: 'Selling surplus power to the grid',
            body: ['According to law-firm reporting, a system connected to the utility network needs MEA or PEA approval, and surplus sold to the utility must follow an applicable purchase scheme and a power purchase agreement.', 'The 2026 surplus-purchase scheme announced is a residential one, buying at THB 2.20 per unit for ten years with sale capacity up to 5 kW per meter, so it is not a factory scheme.'],
          },
          {
            heading: 'How net metering differs from selling',
            body: ['Net metering offsets exported energy against imported energy within the billing period, whereas selling means selling the surplus at an agreed rate. Both need a scheme or rule to support them. From the sources checked we found no general net-metering scheme open to factories at the date checked. Ask the MEA or PEA to confirm before designing a system that depends on export.'],
          },
          {
            heading: 'Which to choose for a factory',
            body: [],
            bullets: [
              'High, steady daytime load: self-consumption plus Zero Export usually fits best',
              'Closed at weekends or low load at times: calculate the lost energy on holidays, and consider a smaller system or a battery. See [Battery storage for factories](guides/solar-battery-storage-for-factories)',
              'Wanting to sell power as a business: that is a different business with its own licences and schemes. See [Registration and permits](guides/rooftop-solar-registration-and-permits-step-by-step)',
            ],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'This is not a utility announcement. Check connection and sale conditions with the MEA or PEA before designing.'] },
        ],
        faq: [
          { q: 'Can a factory sell surplus power back to the utility?', a: 'Only under an open purchase scheme with a contract. The 2026 scheme we found is residential, not for factories.' },
          { q: 'Does Zero Export waste energy?', a: 'When factory load is lower than what the panels can produce, the system curtails, so generation is lost in that period. Sizing to the real load addresses this.' },
          { q: 'If the grid fails, does solar still supply the plant?', a: 'A standard grid-connected system shuts down for safety. Backup operation needs extra design.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 25 --------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-ppa-glossary',
    path: 'guides/solar-ppa-glossary-thailand',
    kind: 'guide',
    published,
    hero: ph(16, 'banner', 'โซลาร์รูฟท็อปบนโรงงานผลิตภัณฑ์กระดาษแปรรูป กรุงเทพมหานคร', 'Rooftop solar on a processed-paper products plant in Bangkok'),
    text: {
      th: {
        title: 'ศัพท์โซลาร์รูฟท็อปและ PPA ที่โรงงานควรรู้: kWp, Ft, TOU, COD, REC และอื่นๆ',
        description: 'อธิบายศัพท์โซลาร์รูฟท็อปและสัญญา PPA เป็นภาษาง่าย ได้แก่ kWp kWh Ft TOU ค่าความต้องการสูงสุด COD O&M REC TPA Scope 2 ฯลฯ สำหรับผู้บริหารและฝ่ายจัดซื้อโรงงาน',
        intro: 'เมื่ออ่านใบเสนอราคาหรือสัญญาโซลาร์ คุณจะเจอศัพท์เทคนิคหลายคำ หน้านี้รวมความหมายแบบสั้น ใช้ได้ทั้งตอนอ่านสัญญาและตอนคุยกับทีมการเงิน ศัพท์เรียงตามหมวดเพื่อให้ค้นหาง่าย',
        sections: [
          { heading: 'kW และ kWp', body: ['kW คือหน่วยกำลัง kWp (kilowatt-peak) คือกำลังสูงสุดของแผงตามมาตรฐานทดสอบ ใช้บอกขนาดระบบ เช่น ระบบ 500 kWp'] },
          { heading: 'kWh หรือ "หน่วยไฟ"', body: ['kWh (กิโลวัตต์-ชั่วโมง) คือปริมาณพลังงานที่ผลิตหรือใช้ เป็นหน่วยที่ใช้คิดค่าไฟในบิล และเป็นหน่วยที่ PPA ใช้คิดราคา'] },
          { heading: 'PPA (Power Purchase Agreement)', body: ['สัญญาซื้อขายไฟ ในโซลาร์รูฟท็อป ผู้ให้บริการลงทุนติดตั้งและดูแลระบบ ผู้ใช้ไฟจ่ายตามไฟที่ผลิตจริง ดู [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'] },
          { heading: 'Offtaker (ผู้รับซื้อไฟ)', body: ['คู่สัญญาที่ซื้อไฟจากผู้ให้บริการ ในโซลาร์รูฟท็อปบนโรงงานคือเจ้าของโรงงานหรือผู้ใช้อาคาร'] },
          { heading: 'Ft (ค่าไฟฟ้าผันแปร)', body: ['ส่วนปรับของค่าไฟที่เปลี่ยนตามต้นทุนเชื้อเพลิงและการซื้อไฟ เป็นส่วนหนึ่งของบิล ดู [ค่า Ft คืออะไร](guides/ft-electricity-tariff-explained)'] },
          { heading: 'TOU (Time of Use)', body: ['อัตราค่าไฟตามช่วงเวลา ช่วงเวลาที่ไฟแพงและถูกต่างกัน ผู้ใช้ไฟที่ย้ายการใช้ไปช่วงถูกจะประหยัดได้'] },
          { heading: 'ค่าความต้องการไฟฟ้าสูงสุด (Demand charge)', body: ['ค่าที่คิดตามกำลังไฟสูงสุดที่ใช้ในรอบเดือน ไม่ใช่ตามปริมาณรวม ลดได้ด้วยการจัดการโหลด ดู [ลดค่าไฟโรงงาน 7 วิธี](guides/7-ways-to-reduce-factory-electricity-cost)'] },
          { heading: 'Power factor (ตัวประกอบกำลัง)', body: ['ตัวเลขที่บอกว่าไฟที่ดึงถูกใช้เป็นงานจริงมากเพียงใด ค่าต่ำอาจถูกคิดค่าปรับตามเกณฑ์ของการไฟฟ้า'] },
          { heading: 'Self-consumption (ใช้เอง)', body: ['การใช้ไฟที่ผลิตภายในโรงงานโดยไม่ขายเข้าระบบ ดู [Net metering กับ Zero export](guides/net-metering-vs-zero-export-factory-solar)'] },
          { heading: 'Zero Export', body: ['การควบคุมระบบไม่ให้ไฟไหลย้อนไปยังระบบการไฟฟ้า'] },
          { heading: 'Net metering', body: ['การหักลบพลังงานที่ส่งออกกับที่ซื้อในรอบบิล ต้องมีโครงการหรือกฎรองรับ'] },
          { heading: 'COD (Commercial Operation Date)', body: ['วันที่ระบบเริ่มเดินเครื่องเชิงพาณิชย์ มักเป็นวันที่สัญญา PPA เริ่มนับระยะเวลาและการคิดค่าไฟ'] },
          { heading: 'O&M (Operation and Maintenance)', body: ['งานเดินระบบและบำรุงรักษา ภายใต้ PPA มักเป็นหน้าที่ผู้ให้บริการ ดู [การดูแลระบบโซลาร์หลังติดตั้ง](guides/rooftop-solar-operations-and-maintenance)'] },
          { heading: 'Performance guarantee (การรับประกันผลผลิต)', body: ['คำมั่นของผู้ให้บริการว่าระบบจะผลิตไฟไม่ต่ำกว่าระดับที่ตกลง และมีมาตรการเมื่อต่ำกว่า'] },
          { heading: 'Degradation (การเสื่อมของแผง)', body: ['กำลังผลิตของแผงลดลงเล็กน้อยทุกปี ผู้ผลิตระบุอัตราไว้ในเอกสารรับประกัน'] },
          { heading: 'BESS (ระบบกักเก็บพลังงานด้วยแบตเตอรี่)', body: ['แบตเตอรี่ขนาดใหญ่ที่เก็บไฟไว้ใช้ภายหลัง ดู [แบตเตอรี่เก็บไฟสำหรับโรงงาน](guides/solar-battery-storage-for-factories)'] },
          { heading: 'REC (Renewable Energy Certificate)', body: ['ใบรับรองว่ามีการผลิตไฟหมุนเวียนในปริมาณหนึ่ง ใช้ในรายงานพลังงานสะอาด'] },
          { heading: 'UGT (Utility Green Tariff)', body: ['อัตราค่าไฟสีเขียวที่ซื้อจากการไฟฟ้าพร้อมใบรับรอง ดู [UGT คืออะไร](guides/utility-green-tariff-ugt-thailand-explained)'] },
          { heading: 'Direct PPA และ TPA', body: ['Direct PPA คือการซื้อไฟหมุนเวียนจากผู้ผลิตโดยตรงผ่านระบบสายส่ง TPA (Third Party Access) คือการให้บุคคลที่สามใช้ระบบสายส่งและค่าบริการที่เกี่ยวข้อง ดู [Direct PPA ในประเทศไทย](guides/direct-ppa-thailand-explained)'] },
          { heading: 'Scope 2', body: ['การปล่อยก๊าซเรือนกระจกทางอ้อมจากไฟฟ้าที่ซื้อมาใช้ ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)'] },
          { heading: 'CBAM', body: ['กลไกปรับคาร์บอนก่อนข้ามพรมแดนของสหภาพยุโรป มีผลต่อผู้ส่งออกบางกลุ่ม ดู [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar)'] },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'kWp กับ kW ต่างกันอย่างไร', a: 'kWp คือกำลังสูงสุดของแผงในสภาวะทดสอบมาตรฐาน ใช้บอกขนาดระบบโซลาร์ ส่วน kW เป็นหน่วยกำลังทั่วไป' },
          { q: 'COD สำคัญต่อสัญญาอย่างไร', a: 'มักเป็นวันเริ่มนับอายุสัญญาและเริ่มคิดค่าไฟตาม PPA จึงควรระบุเงื่อนไขการตรวจรับให้ชัด' },
          { q: 'ควรอ่านศัพท์ใดก่อนเซ็นสัญญา PPA', a: 'COD, O&M, Performance guarantee, ราคาต่อ kWh และกลไกปรับราคา และเงื่อนไขเมื่อสัญญาสิ้นสุด' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar and PPA Glossary for Factories: kWp, Ft, TOU, COD, REC and More',
        description: 'Plain-language definitions of rooftop solar and PPA terms: kWp, kWh, Ft, TOU, demand charge, COD, O&M, REC, TPA, Scope 2 and more, for factory managers and buyers.',
        intro: 'Reading a solar quote or contract, you meet many technical terms. This page gives short definitions you can use while reading a contract or talking to your finance team. Terms are grouped so they are easy to look up.',
        sections: [
          { heading: 'kW and kWp', body: ['kW is a unit of power. kWp (kilowatt-peak) is the panels’ peak output under standard test conditions, used to state system size, for example a 500 kWp system.'] },
          { heading: 'kWh, or “unit of electricity”', body: ['kWh (kilowatt-hour) is the amount of energy produced or used. It is the unit your bill is charged in and the unit a PPA prices in.'] },
          { heading: 'PPA (Power Purchase Agreement)', body: ['A contract to buy electricity. In rooftop solar the provider invests in and maintains the system and the user pays for the power actually produced. See the [complete private PPA guide](guides/private-ppa-complete-guide).'] },
          { heading: 'Offtaker', body: ['The party that buys power from the provider. In factory rooftop solar this is the factory owner or building occupier.'] },
          { heading: 'Ft (variable electricity charge)', body: ['The adjustment on the tariff that changes with fuel and power-purchase cost, part of the bill. See [What is the Ft charge?](guides/ft-electricity-tariff-explained).'] },
          { heading: 'TOU (Time of Use)', body: ['A tariff that varies by time of day, with expensive and cheaper periods. Users who shift load into the cheaper periods save.'] },
          { heading: 'Demand charge', body: ['A charge based on the highest power drawn in the month rather than total consumption. It can be reduced through load management. See [7 ways to reduce factory electricity cost](guides/7-ways-to-reduce-factory-electricity-cost).'] },
          { heading: 'Power factor', body: ['A figure showing how much of the current drawn does real work. A low value may attract a charge under the utility’s rules.'] },
          { heading: 'Self-consumption', body: ['Using the power generated inside the factory without selling it to the grid. See [Net metering and Zero Export](guides/net-metering-vs-zero-export-factory-solar).'] },
          { heading: 'Zero Export', body: ['Controlling the system so power does not flow back into the utility network.'] },
          { heading: 'Net metering', body: ['Offsetting energy exported against energy imported within a billing period. It needs a scheme or rule to support it.'] },
          { heading: 'COD (Commercial Operation Date)', body: ['The date the system starts commercial operation. It is usually when a PPA’s term and charging begin.'] },
          { heading: 'O&M (Operation and Maintenance)', body: ['Running and maintaining the system. Under a PPA this is usually the provider’s job. See [Operations and maintenance](guides/rooftop-solar-operations-and-maintenance).'] },
          { heading: 'Performance guarantee', body: ['The provider’s commitment that the system will produce no less than an agreed level, with remedies if it falls short.'] },
          { heading: 'Degradation', body: ['The small yearly loss in a panel’s output. The manufacturer states the rate in the warranty.'] },
          { heading: 'BESS (battery energy storage system)', body: ['A large battery that stores power for later use. See [Battery storage for factories](guides/solar-battery-storage-for-factories).'] },
          { heading: 'REC (Renewable Energy Certificate)', body: ['A certificate that a quantity of renewable power was generated, used in clean-energy reporting.'] },
          { heading: 'UGT (Utility Green Tariff)', body: ['A green tariff bought from the utility with a certificate. See [What is UGT?](guides/utility-green-tariff-ugt-thailand-explained).'] },
          { heading: 'Direct PPA and TPA', body: ['A Direct PPA buys renewable power straight from a generator through the grid. TPA (Third Party Access) is the use of the network by a third party and the related charges. See [Direct PPA in Thailand](guides/direct-ppa-thailand-explained).'] },
          { heading: 'Scope 2', body: ['Indirect greenhouse-gas emissions from purchased electricity. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).'] },
          { heading: 'CBAM', body: ['The EU Carbon Border Adjustment Mechanism, which affects some exporters. See [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar).'] },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'How do kWp and kW differ?', a: 'kWp is the panels’ peak output under standard test conditions, used to state solar system size. kW is the general unit of power.' },
          { q: 'Why does COD matter in a contract?', a: 'It is usually the date the term starts and charging begins under a PPA, so the acceptance conditions should be stated clearly.' },
          { q: 'Which terms should I check before signing a PPA?', a: 'COD, O&M, performance guarantee, price per kWh and its escalation, and the terms at the end of the contract.' },
        ],
        cta: cta.en,
      },
    },
  },
];
