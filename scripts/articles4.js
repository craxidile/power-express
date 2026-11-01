// Articles 11-15. Keyword-led pages with real project photos (resolved from project records).
// Inline links use [text](path) with no locale prefix. No savings claims or prices.
const published = '2026-11-01';
const cta = { th: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี', en: 'Send your bill, get a free assessment' };
const reviewTh = 'เนื้อหานี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย บัญชี หรือภาษี ควรตรวจสอบข้อกำหนดล่าสุดและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจ';
const reviewEn = 'This is general information, not legal, accounting or tax advice. Confirm the current rules and consult a specialist before you decide.';
const ph = (project, index, th, en) => ({ project, index, alt: { th, en } });

module.exports = [
  // 1 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-carport',
    path: 'guides/solar-carport-for-factories',
    kind: 'guide',
    published,
    hero: ph(23, 'banner', 'โซลาร์คาร์พอร์ตและโซลาร์รูฟท็อปของโรงงานผลิตอาหารสัตว์ จังหวัดราชบุรี', 'Solar carport and rooftop at a feed mill in Ratchaburi'),
    text: {
      th: {
        title: 'โซลาร์คาร์พอร์ตสำหรับโรงงาน: ทางเลือกเมื่อหลังคาไม่พอหรือไม่แข็งแรงพอ',
        description: 'โซลาร์คาร์พอร์ตคืออะไร เหมาะกับโรงงานแบบไหน ต่างจากโซลาร์รูฟท็อปอย่างไร พร้อมสิ่งที่ต้องตรวจก่อนลงทุน และตัวอย่างงานจริงของ Power Express',
        intro: 'โรงงานจำนวนมากมีหลังคาเก่า หลังคาเล็ก หรือโครงสร้างรับน้ำหนักเพิ่มไม่ได้ แต่มีลานจอดรถ ลานโล่ง หรือพื้นที่ว่างข้างอาคาร โซลาร์คาร์พอร์ตคือการสร้างโครงเหล็กเหนือพื้นที่เหล่านั้นแล้ววางแผงโซลาร์ด้านบน จึงผลิตไฟได้โดยไม่ต้องพึ่งหลังคา',
        sections: [
          {
            heading: 'โซลาร์คาร์พอร์ตคืออะไร',
            photo: ph(23, 0, 'โซลาร์คาร์พอร์ตมองจากด้านบน แผงเรียงบนโครงเหล็กในพื้นที่โล่งข้างอาคารโรงงาน', 'Aerial view of a solar carport: panels on steel structures in open ground beside factory buildings'),
            body: [
              'โซลาร์คาร์พอร์ต (solar carport) คือโครงสร้างเหล็กที่ยกพื้นสูงพอสำหรับรถหรือการสัญจร โดยมีแผงโซลาร์ติดอยู่ด้านบนเป็นหลังคา ทำหน้าที่ทั้งผลิตไฟและให้ร่มเงา',
              'ระบบทำงานเหมือนโซลาร์รูฟท็อปทุกประการ คือแผงผลิตไฟฟ้ากระแสตรง อินเวอร์เตอร์แปลงเป็นกระแสสลับ แล้วจ่ายเข้าระบบไฟของโรงงานเพื่อใช้เองก่อน ต่างกันเพียงโครงสร้างที่รองรับแผง',
            ],
          },
          {
            heading: 'เมื่อไรควรเลือกคาร์พอร์ตแทนหลังคา',
            body: ['คาร์พอร์ตมักถูกพิจารณาในสถานการณ์เหล่านี้'],
            bullets: [
              'หลังคามีอายุมาก รั่ว หรือรับน้ำหนักเพิ่มไม่ได้ ดูเกณฑ์คัดกรองใน [หลังคาโรงงานของคุณเหมาะกับโซลาร์หรือไม่](guides/is-my-factory-roof-suitable-for-solar)',
              'หลังคาถูกบังด้วยอาคารสูง ปล่อง หรือเครื่องจักรบนหลังคา จนติดแผงได้น้อย',
              'ต้องการกำลังผลิตมากกว่าที่หลังคามีพื้นที่ให้',
              'มีลานจอดรถ ลานขนถ่ายสินค้า หรือพื้นที่ว่างในโรงงานที่ไม่ได้ใช้ประโยชน์',
              'อาคารเช่าและเจ้าของอาคารไม่อนุญาตให้ติดบนหลังคา แต่อนุญาตให้สร้างโครงสร้างบนที่ดินของผู้เช่า',
            ],
          },
          {
            heading: 'ข้อดีและข้อควรระวังเมื่อเทียบกับโซลาร์รูฟท็อป',
            body: ['ข้อดีคือไม่แตะหลังคาเดิม จัดทิศทางและมุมแผงได้ดีกว่า เข้าถึงเพื่อล้างและบำรุงรักษาได้ง่าย และให้ร่มเงากับรถหรือพื้นที่ใต้โครงสร้าง ส่วนข้อควรระวังคือค่าก่อสร้างโครงเหล็กและฐานรากที่เพิ่มขึ้น ต้องใช้พื้นที่ดินจริง และต้องคำนวณแรงลมให้รัดกุม'],
            bullets: [
              'ค่าโครงสร้างและฐานรากสูงกว่าการยึดแผงบนหลังคา จึงต้องเทียบต้นทุนต่อหน่วยไฟที่ผลิตได้ ไม่ใช่เทียบแค่ราคา',
              'ต้องออกแบบให้รถและรถขนส่งผ่านได้ ความสูงใต้โครงสร้างต้องเหมาะกับการใช้งานจริง',
              'ระยะสายไฟจากแผงถึงห้องไฟฟ้าอาจยาวกว่า ต้องคิดแรงดันตกและค่าเดินสาย',
              'อาจต้องขออนุญาตก่อสร้างหรือดัดแปลงตามกฎหมายควบคุมอาคาร ดูภาพรวมใน [ขั้นตอนขออนุญาตติดตั้งโซลาร์รูฟท็อป](guides/rooftop-solar-permits-overview)',
            ],
          },
          {
            heading: 'ตัวอย่างงานจริง: โรงงานผลิตอาหารสัตว์ จังหวัดราชบุรี',
            photo: ph(23, 1, 'โครงเหล็กรับแผงโซลาร์คาร์พอร์ตระหว่างการก่อสร้าง ฐานรากและเสาตั้งบนพื้นที่โล่ง', 'Steel structure of the solar carport under construction, footings and columns on open ground'),
            body: [
              'ที่ [ท็อป ฟีด มิลล์](project/23) ซึ่งเป็นโรงผลิตอาหารสัตว์ในจังหวัดราชบุรี เรามีทั้งระบบโซลาร์รูฟท็อป 151.575 kW บนหลังคาโรงงาน ([ดูโครงการ](project/22)) และระบบแบบคาร์พอร์ต 402.48 kW บนโครงเหล็กในพื้นที่โล่งข้างอาคาร',
              'การใช้ทั้งสองแบบร่วมกันทำให้โรงงานผลิตไฟได้มากกว่าที่หลังคาอย่างเดียวจะรองรับ ภาพด้านบนแสดงโครงสร้างระหว่างก่อสร้างและหลังติดแผงของโครงการจริง',
            ],
          },
          {
            heading: 'สิ่งที่ต้องตรวจก่อนตัดสินใจ',
            body: [],
            bullets: [
              'สภาพดินและฐานราก ควรมีวิศวกรโยธาตรวจสอบและคำนวณ',
              'แรงลมและอายุการใช้งานของโครงเหล็ก รวมถึงการป้องกันสนิม โดยเฉพาะพื้นที่ใกล้ทะเล',
              'แนวเส้นทางรถและความสูงที่ต้องการใต้โครงสร้าง',
              'จุดเชื่อมต่อไฟฟ้าและระยะเดินสายถึงห้องไฟฟ้าหลัก',
              'เงื่อนไขที่ดิน ผังโรงงาน และข้อกำหนดด้านความปลอดภัยของโรงงาน',
              'การดูแลรักษา การล้างแผง และการเข้าถึงโครงสร้างอย่างปลอดภัย',
            ],
          },
          {
            heading: 'คาร์พอร์ตกับรูปแบบ PPA',
            body: ['คาร์พอร์ตสามารถทำภายใต้สัญญา PPA ได้เช่นเดียวกับโซลาร์รูฟท็อป คือผู้ให้บริการลงทุนและดูแลระบบ ส่วนโรงงานจ่ายค่าไฟตามที่ผลิตได้จริง ควรตกลงให้ชัดเรื่องสิทธิ์ใช้พื้นที่ ความรับผิดต่อโครงสร้าง และการรื้อถอนเมื่อสิ้นสุดสัญญา อ่านเพิ่มเติมที่ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'โซลาร์คาร์พอร์ตแพงกว่าโซลาร์รูฟท็อปไหม', a: 'โดยทั่วไปมีต้นทุนโครงสร้างและฐานรากเพิ่ม จึงควรเทียบเป็นต้นทุนต่อหน่วยไฟที่ผลิตได้ตลอดอายุระบบ และพิจารณาว่าถ้าไม่ทำคาร์พอร์ตจะติดแผงได้เท่าไร' },
          { q: 'ต้องขออนุญาตแยกจากโซลาร์รูฟท็อปหรือไม่', a: 'โครงสร้างใหม่อาจเข้าข่ายต้องขออนุญาตก่อสร้างหรือดัดแปลงอาคาร ควรตรวจกับหน่วยงานท้องถิ่นและให้ผู้ให้บริการแจ้งขั้นตอนก่อนเริ่มงาน' },
          { q: 'ติดทั้งหลังคาและคาร์พอร์ตพร้อมกันได้ไหม', a: 'ได้ หากห้องไฟฟ้าและหม้อแปลงรองรับกำลังรวม ตัวอย่างคือโครงการที่ราชบุรีซึ่งมีทั้งสองแบบในโรงงานเดียวกัน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Solar Carport for Factories in Thailand: An Option When the Roof Is Too Small or Too Weak',
        description: 'What a solar carport is, which factories it suits, how it differs from rooftop solar, what to check before investing, and a real Power Express example.',
        intro: 'Many factories have an old roof, a small roof, or a structure that cannot take extra load, yet they have a car park, yard or open land beside the building. A solar carport puts a steel structure over that space and mounts the panels on top, so the plant can generate power without relying on the roof.',
        sections: [
          {
            heading: 'What is a solar carport?',
            photo: ph(23, 0, 'Aerial view of a solar carport: panels on steel structures in open ground beside factory buildings', 'Aerial view of a solar carport: panels on steel structures in open ground beside factory buildings'),
            body: [
              'A solar carport is a steel structure raised high enough for vehicles or traffic, with solar panels forming the roof. It generates power and provides shade at the same time.',
              'The system works exactly like rooftop solar: panels make DC power, inverters convert it to AC, and the factory uses it first. Only the structure that carries the panels is different.',
            ],
          },
          {
            heading: 'When to choose a carport instead of the roof',
            body: ['A carport is usually considered in these situations.'],
            bullets: [
              'The roof is old, leaking or cannot carry extra load. See the screening list in [Is your factory roof suitable for solar?](guides/is-my-factory-roof-suitable-for-solar)',
              'The roof is shaded by tall buildings, stacks or rooftop equipment, leaving little usable area.',
              'You want more capacity than the roof has space for.',
              'You have a car park, loading yard or unused open land inside the site.',
              'The building is leased and the landlord does not allow panels on the roof, but a structure on the tenant’s land is acceptable.',
            ],
          },
          {
            heading: 'Advantages and cautions compared with rooftop solar',
            body: ['The advantages are that the existing roof is untouched, orientation and tilt can be chosen more freely, cleaning and maintenance access is easier, and the structure shades vehicles or the area beneath. The cautions are the extra cost of the steel structure and footings, the need for real land, and the need for careful wind-load design.'],
            bullets: [
              'Structure and footings cost more than mounting on a roof, so compare cost per unit of energy produced, not just price.',
              'The design must leave room for cars and trucks, with a clearance suited to actual use.',
              'Cable runs from the panels to the electrical room can be longer, so voltage drop and cabling cost need to be considered.',
              'A construction or modification permit may be needed under the building-control rules. See the overview in [Rooftop solar permits in Thailand](guides/rooftop-solar-permits-overview).',
            ],
          },
          {
            heading: 'A real example: a feed mill in Ratchaburi',
            photo: ph(23, 1, 'Steel structure of the solar carport under construction, footings and columns on open ground', 'Steel structure of the solar carport under construction, footings and columns on open ground'),
            body: [
              'At [TOP FEED MILLS](project/23), an animal-feed plant in Ratchaburi province, we built a 151.575 kW rooftop system on the factory roof ([see the project](project/22)) and a 402.48 kW carport-style system on a steel structure in the open area beside the buildings.',
              'Using both lets the plant generate more than the roof alone could carry. The photos above show the structure during construction and the finished installation at the real site.',
            ],
          },
          {
            heading: 'What to check before deciding',
            body: [],
            bullets: [
              'Soil and foundations, which a civil engineer should inspect and calculate',
              'Wind load and the life of the steel structure, including corrosion protection, especially near the coast',
              'Vehicle routes and the clearance needed under the structure',
              'The connection point and cable distance to the main electrical room',
              'Land conditions, site layout and the factory’s own safety rules',
              'Cleaning, maintenance and safe access to the structure',
            ],
          },
          {
            heading: 'Carports and the PPA model',
            body: ['A carport can be delivered under a PPA just like rooftop solar: the provider invests in and maintains the system and the factory pays for the electricity actually produced. Agree clearly on land-use rights, responsibility for the structure and removal at the end of the term. Read more in the [complete private PPA guide](guides/private-ppa-complete-guide).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Is a solar carport more expensive than rooftop solar?', a: 'It usually adds structure and foundation cost, so compare cost per unit of energy produced over the system’s life, and consider how much you could install without it.' },
          { q: 'Does a carport need a separate permit?', a: 'A new structure may need a construction or modification permit. Check with the local authority and ask your provider for the steps before work starts.' },
          { q: 'Can I have both a roof system and a carport?', a: 'Yes, if the electrical room and transformer can take the combined capacity. The Ratchaburi project has both at one plant.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 2 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-ice-cold-food',
    path: 'guides/rooftop-solar-ice-cold-storage-food-factories',
    kind: 'guide',
    published,
    hero: ph(14, 'banner', 'โซลาร์รูฟท็อปบนโรงงานผลิตน้ำแข็ง จังหวัดสมุทรสาคร', 'Rooftop solar on an ice factory in Samut Sakhon'),
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปโรงงานน้ำแข็ง ห้องเย็น และโรงงานอาหารแช่แข็ง: ทำไมเหมาะ และต้องดูอะไร',
        description: 'โรงงานน้ำแข็ง ห้องเย็น และโรงงานอาหารแช่แข็งใช้ไฟต่อเนื่อง จึงเหมาะกับโซลาร์รูฟท็อป ดูเหตุผล ข้อควรตรวจ และตัวอย่างโครงการจริงในสมุทรสาคร กรุงเทพฯ และระนอง',
        intro: 'ธุรกิจที่ต้องทำความเย็นอย่างน้ำแข็ง ห้องเย็น และอาหารแช่แข็ง มีค่าไฟเป็นต้นทุนหลักและใช้ไฟฟ้าต่อเนื่องแทบตลอดวัน คุณสมบัตินี้ทำให้ไฟจากโซลาร์ที่ผลิตช่วงกลางวันถูกใช้ในโรงงานได้ทันที บทความนี้อธิบายเหตุผล สิ่งที่ต้องตรวจ และตัวอย่างโครงการจริงของเรา',
        sections: [
          {
            heading: 'ทำไมงานทำความเย็นจึงเหมาะกับโซลาร์',
            photo: ph(14, 8, 'มุมมองจากด้านบนของแผงโซลาร์บนหลังคาโรงงานผลิตน้ำแข็ง สมุทรสาคร', 'Top-down view of panels on the roof of an ice factory in Samut Sakhon'),
            body: [
              'โซลาร์รูฟท็อปได้ประโยชน์สูงสุดเมื่อโรงงานใช้ไฟเองในช่วงที่แผงผลิตไฟ นั่นคือช่วงกลางวัน ระบบทำความเย็นอย่างคอมเพรสเซอร์ ชิลเลอร์ และพัดลมคอยล์ มักเดินเครื่องต่อเนื่อง และโหลดมักสูงขึ้นในวันที่อากาศร้อน ซึ่งเป็นวันเดียวกับที่แดดแรง',
              'ไฟที่ผลิตได้จึงถูกใช้ในโรงงานมากกว่าส่งออกหรือเหลือทิ้ง ซึ่งเป็นปัจจัยสำคัญที่ทำให้ผลตอบแทนสม่ำเสมอ',
            ],
          },
          {
            heading: 'ตัวอย่างโครงการจริงของเรา',
            body: ['ตัวอย่างโครงการของ Power Express ในกลุ่มงานทำความเย็นและอาหารแช่แข็ง'],
            bullets: [
              '[ไอซ์ เทคโนโลยี พรอไพรทารี](project/14) โรงงานผลิตน้ำแข็ง จังหวัดสมุทรสาคร ขนาด 871.03 kW',
              '[โชคเพชรสมุทร 1999](project/13) โรงงานผลิตน้ำแข็ง กรุงเทพมหานคร ขนาด 311.15 kW',
              '[สยามชัยอาหารสากล](project/19) ผู้ผลิตและแปรรูปอาหารทะเลแช่แข็ง จังหวัดระนอง ขนาด 1,253.94 kW',
            ],
          },
          {
            heading: 'โรงงานน้ำแข็ง: หลังคาหลายระดับ แผงหลายกลุ่ม',
            photo: ph(14, 3, 'โรงงานน้ำแข็งที่มีหลังคาหลายอาคาร ติดแผงโซลาร์ในหลายพื้นที่ของหลังคา', 'An ice plant with several roofs and panels installed across multiple roof areas'),
            body: [
              'โรงงานผลิตน้ำแข็งมักมีหลายอาคาร หลังคาหลายระดับ และมีเครื่องจักรบนหลังคา การออกแบบจึงต้องจัดกลุ่มแผงให้เหมาะกับแต่ละพื้นที่ และเลี่ยงเงาจากอุปกรณ์บนหลังคา',
              'ที่โรงงานน้ำแข็งขนาด 871.03 kW ในสมุทรสาคร แผงถูกติดบนหลายอาคารของโรงงานเดียวกัน ภาพจริงจากโครงการแสดงการจัดวางทั้งหมด',
            ],
          },
          {
            heading: 'โรงงานอาหารทะเลแช่แข็ง: หลังคากว้างแต่ต้องดูแลเรื่องรั่วซึม',
            photo: ph(19, 1, 'แผงโซลาร์เรียงบนหลังคากว้างของโรงงานอาหารทะเลแช่แข็ง จังหวัดระนอง', 'Panels laid out on the wide roof of a frozen seafood factory in Ranong'),
            body: [
              'โรงงานแช่แข็งมักมีหลังคากว้างและต่อเนื่อง เหมาะกับการเรียงแผงให้ผลิตไฟมาก แต่ต้องดูแลเรื่องความชื้นและการรั่วซึมเป็นพิเศษ เพราะน้ำรั่วในอาคารกระทบทั้งสินค้าและมาตรฐานสุขอนามัย',
              'ควรให้ผู้ติดตั้งตรวจสภาพหลังคาและจุดยึด ใช้วัสดุกันซึมที่เหมาะ และมีแผนซ่อมกรณีหลังคารั่วในอนาคต',
            ],
          },
          {
            heading: 'สิ่งที่ต้องตรวจก่อนติดตั้ง',
            body: [],
            bullets: [
              'ข้อมูลโหลดรายชั่วโมงของระบบทำความเย็น เพื่อประเมินสัดส่วนไฟที่ใช้เองได้',
              'สภาพหลังคา รอยรั่ว และจุดควบแน่น เพราะต้องรักษาอุณหภูมิภายในอาคาร',
              'ความต่อเนื่องของไฟฟ้า ระบบต้องไม่ทำให้ไฟตกหรือกระทบสินค้าในห้องเย็น',
              'พื้นที่ห้องไฟฟ้า หม้อแปลง และเครื่องกำเนิดไฟฟ้าสำรองที่มีอยู่',
              'ความปลอดภัยของงานบนหลังคาในโรงงานที่เปิดทำงานตลอด',
              'การเชื่อมระบบติดตามผลเพื่อเทียบกับโหลดจริง',
            ],
          },
          {
            heading: 'โซลาร์รวมกับการจัดการระบบทำความเย็น',
            body: ['ค่าไฟของงานทำความเย็นลดได้จากสองด้านคือ ผลิตไฟเองด้วยโซลาร์ และใช้ไฟอย่างมีประสิทธิภาพขึ้น เช่น ปรับปรุงชิลเลอร์ หรือบริการ Cooling-as-a-Service ดูรายละเอียดที่ [Cooling-as-a-Service](cooling-as-a-service) และหน้า [อุตสาหกรรมห้องเย็นและโรงงานอาหาร](industries/cold-storage-food)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ห้องเย็นใช้ไฟกลางคืนด้วย โซลาร์ยังคุ้มไหม', a: 'โซลาร์ผลิตไฟเฉพาะกลางวัน ไฟส่วนที่ใช้ตอนกลางวันจึงเป็นส่วนที่โซลาร์ทดแทนได้ การประเมินควรดูกราฟโหลดรายชั่วโมงของโรงงานจริง' },
          { q: 'การติดแผงทำให้หลังคาห้องเย็นรั่วหรือไม่', a: 'ไม่จำเป็น หากออกแบบและติดตั้งถูกวิธี ควรตรวจหลังคาก่อนติดตั้ง ใช้ระบบยึดและวัสดุกันซึมที่เหมาะ และตกลงเรื่องความรับผิดในสัญญา' },
          { q: 'ต้องหยุดผลิตระหว่างติดตั้งหรือไม่', a: 'โดยทั่วไปงานบนหลังคาทำคู่ขนานกับการผลิตได้ ส่วนงานต่อไฟเข้าระบบอาจต้องหยุดไฟช่วงสั้นๆ ซึ่งควรวางแผนล่วงหน้า' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar for Ice Plants, Cold Storage and Frozen Food Factories in Thailand',
        description: 'Ice plants, cold rooms and frozen-food factories run continuously, which suits rooftop solar. Reasons, what to check, and real projects in Samut Sakhon, Bangkok and Ranong.',
        intro: 'Businesses that make cold — ice, cold rooms, frozen food — spend heavily on electricity and draw power almost all day. That means solar power produced in daylight is used inside the plant immediately. This article explains why, what to check, and shows our real projects.',
        sections: [
          {
            heading: 'Why cooling loads suit solar',
            photo: ph(14, 8, 'Top-down view of panels on the roof of an ice factory in Samut Sakhon', 'Top-down view of panels on the roof of an ice factory in Samut Sakhon'),
            body: [
              'Rooftop solar pays best when the plant uses the power itself while the panels are producing, that is, in daylight. Compressors, chillers and fan coils usually run continuously, and load tends to rise on hot days, which are also the sunny days.',
              'More of the output is therefore used on site rather than exported or wasted, which is a key reason returns stay steady.',
            ],
          },
          {
            heading: 'Our real projects',
            body: ['Power Express projects in cooling and frozen food:'],
            bullets: [
              '[Ice Technology Proprietary](project/14), an ice factory in Samut Sakhon, 871.03 kW',
              '[Choke Phet Samut 1999](project/13), an ice factory in Bangkok, 311.15 kW',
              '[Siamchai International Food](project/19), a frozen seafood producer and processor in Ranong, 1,253.94 kW',
            ],
          },
          {
            heading: 'Ice plants: multi-level roofs, several array groups',
            photo: ph(14, 3, 'An ice plant with several roofs and panels installed across multiple roof areas', 'An ice plant with several roofs and panels installed across multiple roof areas'),
            body: [
              'Ice plants often have several buildings, roofs at different levels and equipment on the roof. The design therefore groups panels to suit each area and avoids shade from rooftop equipment.',
              'At the 871.03 kW ice plant in Samut Sakhon, panels cover several buildings of the same site. The real photos show the full layout.',
            ],
          },
          {
            heading: 'Frozen seafood plants: wide roofs, but watch for leaks',
            photo: ph(19, 1, 'Panels laid out on the wide roof of a frozen seafood factory in Ranong', 'Panels laid out on the wide roof of a frozen seafood factory in Ranong'),
            body: [
              'Frozen-food plants often have wide, continuous roofs that suit large arrays, but moisture and leaks need special care because water ingress affects both product and hygiene standards.',
              'Ask the installer to inspect the roof and fixing points, use suitable waterproofing, and have a repair plan if the roof leaks in future.',
            ],
          },
          {
            heading: 'What to check before installing',
            body: [],
            bullets: [
              'Hourly load data for the refrigeration system, to estimate how much output is used on site',
              'Roof condition, leaks and condensation points, because indoor temperature must be protected',
              'Supply continuity: the system must not cause voltage dips or affect stored product',
              'Space in the electrical room, transformer and any backup generator already in place',
              'Safe work on the roof in a plant that operates around the clock',
              'Monitoring that can be compared against the real load',
            ],
          },
          {
            heading: 'Solar together with cooling-system management',
            body: ['Cooling electricity can be cut from two sides: generate your own with solar, and use power more efficiently, for example by upgrading chillers or through Cooling-as-a-Service. See [Cooling-as-a-Service](cooling-as-a-service) and the [cold storage and food factories industry page](industries/cold-storage-food).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Cold rooms also use power at night. Is solar still worthwhile?', a: 'Solar only produces in daylight, so it offsets the daytime part of your load. The assessment should use your real hourly load profile.' },
          { q: 'Will panels make a cold-room roof leak?', a: 'Not if designed and installed properly. Inspect the roof first, use suitable fixings and waterproofing, and agree responsibility in the contract.' },
          { q: 'Do we have to stop production during installation?', a: 'Roof work generally runs alongside production. Connecting into the electrical system may need a short outage, which should be planned in advance.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 3 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-packaging-paper',
    path: 'guides/rooftop-solar-packaging-plastic-paper-factories',
    kind: 'guide',
    published,
    hero: ph(5, 'banner', 'โซลาร์รูฟท็อปบนหลังคาโรงงานผลิตกล่องกระดาษลูกฟูก สมุทรปราการ', 'Rooftop solar on a corrugated packaging plant in Samut Prakan'),
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปโรงงานบรรจุภัณฑ์ กระดาษลูกฟูก และพลาสติก: หลังคาใหญ่ ใช้ไฟกลางวันมาก',
        description: 'โรงงานกล่องกระดาษ บรรจุภัณฑ์ และพลาสติกมีหลังคาใหญ่และเดินเครื่องหลายกะ ดูว่าทำไมเหมาะกับโซลาร์รูฟท็อป สิ่งที่ต้องตรวจ และโครงการจริงในสมุทรปราการและกรุงเทพฯ',
        intro: 'โรงงานผลิตกล่องกระดาษลูกฟูก บรรจุภัณฑ์ และพลาสติกมักมีอาคารกว้าง หลังคาต่อเนื่องยาว และเครื่องจักรที่เดินหลายกะ ซึ่งเป็นองค์ประกอบที่ทำให้โซลาร์รูฟท็อปคุ้มค่าได้ บทความนี้สรุปเหตุผลและสิ่งที่ควรตรวจ พร้อมตัวอย่างงานจริง',
        sections: [
          {
            heading: 'ลักษณะของโรงงานกลุ่มนี้ที่เอื้อต่อโซลาร์',
            photo: ph(5, 0, 'หลังคาโรงงานบรรจุภัณฑ์ยาวต่อเนื่องที่ติดแผงโซลาร์ตลอดแนว มองจากมุมสูง', 'A long continuous packaging-plant roof with panels along its length, seen from above'),
            body: [
              'โรงงานบรรจุภัณฑ์มักมีโรงเรือนยาวและหลังคาต่อเนื่อง เรียงแผงได้เป็นแนวสม่ำเสมอ ลดการบังเงา และเดินสายได้เป็นระบบ ส่วนเครื่องจักรอย่างเครื่องทำลอนกระดาษ เครื่องพิมพ์ เครื่องฉีดและเครื่องอัดรีดใช้ไฟต่อเนื่องในช่วงกลางวัน',
              'เมื่อโรงงานทำงานหลายกะ ไฟที่ผลิตจากแผงจึงถูกใช้เองเกือบทั้งหมด',
            ],
          },
          {
            heading: 'โครงการจริงในกลุ่มบรรจุภัณฑ์และกระดาษ',
            body: ['ตัวอย่างโครงการของ Power Express'],
            bullets: [
              '[หงส์ไทยบรรจุภัณฑ์](project/5) โรงงานกล่องและกระดาษลูกฟูก จังหวัดสมุทรปราการ ขนาด 999.6 kW',
              '[หงส์ไทยฟู้ดแพคเกจจิ้ง](project/8) โรงงานกล่องกระดาษและกระดาษลูกฟูก จังหวัดสมุทรปราการ ขนาด 327.66 kW',
              '[บิลเลี่ยน มิลเลี่ยน](project/16) โรงงานผลิตภัณฑ์กระดาษแปรรูปเพื่อใช้ในครัวเรือนและสุขอนามัย กรุงเทพมหานคร ขนาด 408.32 kW',
            ],
          },
          {
            heading: 'หลังคาเมทัลชีทแนวยาว: จัดแผงอย่างไร',
            photo: ph(5, 3, 'แผงโซลาร์เรียงเป็นแถวขนานบนหลังคาโรงงานบรรจุภัณฑ์ จังหวัดสมุทรปราการ', 'Rows of panels laid parallel on a packaging-plant roof in Samut Prakan'),
            body: [
              'บนหลังคาแนวยาว ผู้ออกแบบมักเรียงแผงเป็นแถวขนานกับสันหลังคา เว้นทางเดินสำหรับบำรุงรักษา และหลีกเลี่ยงช่องแสงและพัดลมระบายอากาศ',
              'ควรตรวจสภาพหลังคาเมทัลชีทและโครงสร้างเหล็กก่อน เพราะแผงเพิ่มน้ำหนักและแรงลมบนโครงสร้าง ดูเพิ่มที่ [หลังคาเมทัลชีท คอนกรีต กระเบื้อง: ติดโซลาร์ต่างกันอย่างไร](guides/rooftop-solar-metal-sheet-vs-concrete-roof)',
            ],
          },
          {
            heading: 'ความเสี่ยงเฉพาะของโรงงานกระดาษและพลาสติก',
            body: ['โรงงานกระดาษมีฝุ่นเยื่อกระดาษและวัสดุติดไฟง่าย โรงงานพลาสติกมีความร้อนจากกระบวนการและไอระเหยบางชนิด จึงต้องเลือกจุดวางอินเวอร์เตอร์และตู้ไฟให้ปลอดภัย'],
            bullets: [
              'ระยะห่างจากวัสดุติดไฟ และการระบายอากาศของห้องอินเวอร์เตอร์',
              'การทำความสะอาดแผงที่มีฝุ่นเกาะ ควรมีแผนล้างตามรอบ',
              'การป้องกันไฟฟ้าและระบบตัดไฟฉุกเฉิน ตามข้อกำหนดความปลอดภัยของโรงงาน',
              'ความร้อนบนหลังคาจากกระบวนการผลิต ซึ่งอาจกระทบผลผลิตของแผง',
              'ข้อกำหนดของลูกค้าด้านพลังงานสะอาด เพราะแบรนด์ใหญ่หลายรายขอข้อมูลการปล่อยคาร์บอนจากซัพพลายเออร์ ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)',
            ],
          },
          {
            heading: 'ข้อกำหนดจากลูกค้าและการรายงานคาร์บอน',
            body: ['ผู้ผลิตบรรจุภัณฑ์ส่วนใหญ่ขายให้แบรนด์สินค้าอุปโภคบริโภคและส่งออก ซึ่งมักถามถึงข้อมูลการปล่อยก๊าซเรือนกระจกของโรงงาน ไฟจากโซลาร์ช่วยลดการปล่อยในขอบเขตที่ 2 และมีข้อมูลการผลิตจากระบบติดตามผลไว้ใช้รายงาน อ่านเพิ่มเติมที่ [CBAM สำหรับผู้ส่งออกไทย](guides/cbam-thai-exporters-rooftop-solar) และหน้า [อุตสาหกรรมพลาสติกและบรรจุภัณฑ์](industries/plastics-packaging)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'โรงงานที่ทำงานกะเดียวเหมาะกับโซลาร์หรือไม่', a: 'เหมาะ หากทำงานช่วงกลางวันเป็นหลัก เพราะไฟส่วนใหญ่ที่ผลิตจะถูกใช้เองทันที แต่ควรดูกราฟโหลดจริงเพื่อกำหนดขนาดระบบ' },
          { q: 'ฝุ่นกระดาษทำให้แผงเสียหรือไม่', a: 'ฝุ่นลดประสิทธิภาพการผลิตไฟได้ ไม่ได้ทำให้แผงเสียหายโดยตรง แต่ต้องมีแผนล้างตามรอบ และควรประเมินความเสี่ยงไฟไหม้ร่วมกับฝ่ายความปลอดภัย' },
          { q: 'ถ้าต้องการขยายโรงงานในอนาคต ควรทำอย่างไร', a: 'แจ้งแผนขยายให้ผู้ออกแบบทราบ เพื่อกันพื้นที่และเผื่อกำลังของห้องไฟฟ้าและหม้อแปลงไว้' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Rooftop Solar for Packaging, Corrugated Paper and Plastics Factories in Thailand',
        description: 'Box, packaging and plastics plants have large roofs and multi-shift operation. Why they suit rooftop solar, what to check, and real projects in Samut Prakan and Bangkok.',
        intro: 'Corrugated-box, packaging and plastics plants usually have wide buildings, long continuous roofs and machines that run several shifts, which are the ingredients that make rooftop solar work. This article summarises the reasons and the checks, with real examples.',
        sections: [
          {
            heading: 'Why this type of plant suits solar',
            photo: ph(5, 0, 'A long continuous packaging-plant roof with panels along its length, seen from above', 'A long continuous packaging-plant roof with panels along its length, seen from above'),
            body: [
              'Packaging plants often have long sheds with continuous roofs, so panels can be laid in even rows with little shading and tidy cabling. Corrugators, printers, injection and extrusion machines draw power through the day.',
              'When the plant runs several shifts, almost all the solar output is used on site.',
            ],
          },
          {
            heading: 'Real projects in packaging and paper',
            body: ['Power Express projects:'],
            bullets: [
              '[Hong Thai Packaging](project/5), corrugated and carton plant in Samut Prakan, 999.6 kW',
              '[Hong Thai Food Packaging](project/8), carton and corrugated paper plant in Samut Prakan, 327.66 kW',
              '[Billion Million](project/16), a plant making processed paper products for household and hygiene use, Bangkok, 408.32 kW',
            ],
          },
          {
            heading: 'Long metal-sheet roofs: how panels are arranged',
            photo: ph(5, 3, 'Rows of panels laid parallel on a packaging-plant roof in Samut Prakan', 'Rows of panels laid parallel on a packaging-plant roof in Samut Prakan'),
            body: [
              'On a long roof, designers usually lay panels in rows parallel to the ridge, leave maintenance walkways and avoid skylights and ventilation fans.',
              'Check the metal sheet and steel structure first, because panels add weight and wind load. See [Metal sheet, concrete or tile roofs: how solar differs](guides/rooftop-solar-metal-sheet-vs-concrete-roof).',
            ],
          },
          {
            heading: 'Risks specific to paper and plastics plants',
            body: ['Paper plants have paper dust and combustible material; plastics plants have process heat and some vapours. Inverter and switchgear locations must be chosen with care.'],
            bullets: [
              'Distance from combustible material and ventilation of the inverter room',
              'Cleaning of dusty panels, which needs a cleaning schedule',
              'Electrical protection and emergency shut-off in line with plant safety rules',
              'Process heat on the roof, which can reduce panel output',
              'Customer clean-energy requirements: large brands often ask suppliers for emissions data. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).',
            ],
          },
          {
            heading: 'Customer requirements and carbon reporting',
            body: ['Most packaging makers sell to consumer brands and exporters, who often ask for the plant’s greenhouse-gas data. Solar reduces Scope 2 emissions and the monitoring system provides generation data for reporting. Read more in [CBAM for Thai exporters](guides/cbam-thai-exporters-rooftop-solar) and the [plastics and packaging industry page](industries/plastics-packaging).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'Does a single-shift plant suit solar?', a: 'Yes, if it works mainly in daylight, because most output is used immediately. Check the real load profile to size the system.' },
          { q: 'Does paper dust damage panels?', a: 'Dust reduces output but does not directly damage panels. Plan regular cleaning and assess fire risk with your safety team.' },
          { q: 'What if we plan to expand the plant?', a: 'Tell the designer so space can be reserved and the electrical room and transformer sized with headroom.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 4 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-solar-battery',
    path: 'guides/solar-battery-storage-for-factories',
    kind: 'guide',
    published,
    hero: ph(22, 'banner', 'โซลาร์รูฟท็อปบนหลังคาเมทัลชีทสีน้ำเงินของโรงงานผลิตอาหารสัตว์ จังหวัดราชบุรี', 'Rooftop solar on the blue metal-sheet roof of a feed mill in Ratchaburi'),
    text: {
      th: {
        title: 'แบตเตอรี่เก็บไฟสำหรับโรงงานที่ติดโซลาร์: ควรติดหรือยัง และคิดอย่างไร',
        description: 'แบตเตอรี่เก็บไฟ (BESS) ช่วยอะไรโรงงานที่ติดโซลาร์ เหมาะเมื่อไร ไม่จำเป็นเมื่อไร และต้องถามอะไรผู้ให้บริการก่อนตัดสินใจ',
        intro: 'หลายโรงงานที่กำลังพิจารณาโซลาร์ถามว่าควรติดแบตเตอรี่ด้วยหรือไม่ คำตอบขึ้นกับว่าโรงงานใช้ไฟช่วงไหน และต้องการให้แบตเตอรี่ทำอะไร บทความนี้ช่วยแยกกรณีที่แบตเตอรี่มีประโยชน์ออกจากกรณีที่โซลาร์อย่างเดียวก็เพียงพอ',
        sections: [
          {
            heading: 'แบตเตอรี่ทำอะไรได้บ้าง',
            photo: ph(22, 1, 'โรงงานผลิตอาหารสัตว์ที่ติดโซลาร์รูฟท็อป ซึ่งใช้ไฟช่วงกลางวันเป็นหลัก', 'A feed mill with rooftop solar whose load is mainly in daylight'),
            body: ['ระบบเก็บพลังงานด้วยแบตเตอรี่ (BESS) เก็บไฟที่ผลิตเกินความต้องการไว้ใช้ภายหลัง บทบาทหลักมีสามอย่าง'],
            bullets: [
              'เลื่อนเวลาใช้ไฟ: เก็บไฟกลางวันไปใช้ช่วงเย็นหรือกลางคืน',
              'ลดความต้องการไฟฟ้าสูงสุด (peak demand): คายไฟช่วงที่โหลดพุ่งเพื่อลดค่าความต้องการไฟฟ้า',
              'ไฟสำรอง: จ่ายไฟให้โหลดสำคัญเมื่อไฟหลักดับ ซึ่งต้องออกแบบระบบให้รองรับโดยเฉพาะ',
            ],
          },
          {
            heading: 'เมื่อโซลาร์อย่างเดียวก็เพียงพอ',
            body: ['โรงงานที่ทำงานเป็นหลักช่วงกลางวัน เช่น กะเดียวหรือสองกะ มักใช้ไฟจากโซลาร์ได้เกือบทั้งหมดโดยตรง จึงไม่มีไฟส่วนเกินให้เก็บ การเพิ่มแบตเตอรี่จึงเพิ่มต้นทุนโดยได้ประโยชน์น้อย', 'ควรดูกราฟโหลดรายชั่วโมงก่อนเสมอ ไม่ควรตัดสินจากความรู้สึกว่า "ติดแบตแล้วดีกว่า"'],
          },
          {
            heading: 'เมื่อแบตเตอรี่เริ่มน่าพิจารณา',
            body: [],
            bullets: [
              'โรงงานเดินเครื่องช่วงเย็นหรือกลางคืนมาก และต้องการใช้ไฟจากโซลาร์ในช่วงนั้น',
              'ค่าความต้องการไฟฟ้าสูงสุด (demand charge) เป็นสัดส่วนใหญ่ของบิล และโหลดมีช่วงพุ่งสั้นๆ ที่ตัดได้',
              'ต้องการไฟสำรองสำหรับโหลดสำคัญ เช่น ห้องควบคุม หรือระบบที่ห้ามหยุด',
              'ไฟส่วนเกินจากโซลาร์ไม่สามารถส่งเข้าระบบหรือไม่คุ้มที่จะส่ง ทำให้เหลือทิ้งในช่วงที่โหลดต่ำ',
              'มีข้อกำหนดของลูกค้าหรือองค์กรให้ใช้พลังงานสะอาดมากขึ้นนอกช่วงกลางวัน',
            ],
          },
          {
            heading: 'คำถามที่ต้องถามผู้ให้บริการ',
            body: [],
            bullets: [
              'ขนาดแบตเตอรี่ (kWh) และกำลังจ่าย (kW) ที่เหมาะสมกับโหลดของเรา และคำนวณจากข้อมูลอะไร',
              'อายุการใช้งานเป็นจำนวนรอบชาร์จและปี และเงื่อนไขการรับประกันที่เหลือความจุเท่าไร',
              'ประเภทเซลล์ ระบบจัดการแบตเตอรี่ (BMS) และมาตรฐานความปลอดภัยด้านอัคคีภัย',
              'พื้นที่ติดตั้ง การระบายความร้อน และระยะห่างจากอาคารและวัสดุติดไฟ',
              'ต้นทุนรวมต่อหน่วยไฟที่จ่ายออกจากแบตเตอรี่ตลอดอายุ ไม่ใช่เพียงราคาตัวเครื่อง',
              'การเชื่อมกับอินเวอร์เตอร์เดิม และผลต่อสัญญา PPA หากมี',
            ],
          },
          {
            heading: 'ความปลอดภัยและกฎระเบียบ',
            body: ['แบตเตอรี่ลิเธียมขนาดใหญ่ต้องออกแบบเรื่องการระบายความร้อน การตรวจจับควันและความร้อน การดับเพลิง และการแบ่งโซน ควรให้วิศวกรไฟฟ้าและที่ปรึกษาความปลอดภัยของโรงงานร่วมพิจารณา', 'ข้อกำหนดด้านการอนุญาตและการเชื่อมต่อสำหรับระบบกักเก็บพลังงานยังมีการปรับปรุงต่อเนื่อง ควรตรวจสอบข้อมูลล่าสุดกับหน่วยงานที่เกี่ยวข้องก่อนตัดสินใจ'],
          },
          {
            heading: 'แนวทางที่แนะนำ: เริ่มจากโซลาร์ แล้วเผื่อพื้นที่สำหรับแบตเตอรี่',
            body: ['หลายโรงงานเลือกติดโซลาร์ก่อนแล้วออกแบบห้องไฟฟ้าให้เผื่อการเพิ่มแบตเตอรี่ในอนาคต เมื่อราคาและกฎระเบียบชัดเจนขึ้น แนวทางนี้ไม่ผูกมัดเงินลงทุนก้อนใหญ่ตั้งแต่ต้น ดูรูปแบบการลงทุนได้ที่ [PPA vs ซื้อเอง vs เช่า](guides/ppa-vs-buy-vs-lease) และคู่มือ [ลดค่าไฟโรงงาน 7 วิธี](guides/7-ways-to-reduce-factory-electricity-cost)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh] },
        ],
        faq: [
          { q: 'ติดโซลาร์แล้วไฟดับ โรงงานยังมีไฟใช้ไหม', a: 'ระบบโซลาร์ทั่วไปที่ต่อกับไฟการไฟฟ้าจะหยุดจ่ายเมื่อไฟหลักดับเพื่อความปลอดภัย การใช้งานเป็นไฟสำรองต้องออกแบบระบบเพิ่มเติมและมักต้องมีแบตเตอรี่' },
          { q: 'แบตเตอรี่ทำให้ค่าไฟลดลงมากกว่าโซลาร์อย่างเดียวไหม', a: 'ขึ้นกับรูปแบบการใช้ไฟและโครงสร้างค่าไฟของโรงงาน ต้องคำนวณจากกราฟโหลดจริง และเทียบต้นทุนรวมกับประโยชน์ที่ได้' },
          { q: 'ควรติดแบตเตอรี่พร้อมโซลาร์เลยหรือรอ', a: 'ถ้าไม่มีเหตุผลเฉพาะ ส่วนใหญ่เริ่มจากโซลาร์ก่อนและเผื่อพื้นที่ไว้ แล้วประเมินใหม่เมื่อต้นทุนและกฎระเบียบเปลี่ยน' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Battery Storage for Factories with Solar: Do You Need It Yet?',
        description: 'What battery storage (BESS) does for a factory with solar, when it makes sense, when it is not needed, and what to ask your provider before deciding.',
        intro: 'Many factories considering solar ask whether to add a battery. The answer depends on when the plant uses power and what you want the battery to do. This article separates the cases where a battery helps from those where solar alone is enough.',
        sections: [
          {
            heading: 'What a battery can do',
            photo: ph(22, 1, 'A feed mill with rooftop solar whose load is mainly in daylight', 'A feed mill with rooftop solar whose load is mainly in daylight'),
            body: ['A battery energy storage system (BESS) stores surplus power for later. It has three main roles.'],
            bullets: [
              'Time shifting: store daytime power for the evening or night.',
              'Peak shaving: discharge when load spikes, to cut the demand charge.',
              'Backup: supply critical loads when the grid fails, which needs a system designed for that purpose.',
            ],
          },
          {
            heading: 'When solar alone is enough',
            body: ['A plant that works mainly in daylight, such as one or two shifts, usually consumes almost all its solar output directly, so there is no surplus to store. Adding a battery then adds cost for little benefit.', 'Always look at the hourly load profile first rather than assuming that “a battery is better”.'],
          },
          {
            heading: 'When a battery starts to look worthwhile',
            body: [],
            bullets: [
              'The plant runs heavily in the evening or at night and wants solar power then',
              'The demand charge is a large share of the bill and load has short spikes that can be cut',
              'You need backup for critical loads such as control rooms or processes that must not stop',
              'Surplus solar cannot be exported, or is not worth exporting, so it is wasted at low load',
              'A customer or corporate target requires more clean energy outside daylight hours',
            ],
          },
          {
            heading: 'Questions to ask your provider',
            body: [],
            bullets: [
              'The battery size (kWh) and power rating (kW) suited to your load, and what data they are based on',
              'Life in cycles and years, and what capacity the warranty guarantees',
              'Cell type, battery management system (BMS) and fire-safety standards',
              'Installation area, cooling and clearance from buildings and combustible material',
              'Total cost per unit of energy discharged over its life, not just the equipment price',
              'How it connects to existing inverters, and its effect on any PPA',
            ],
          },
          {
            heading: 'Safety and regulation',
            body: ['Large lithium batteries need thermal design, smoke and heat detection, fire suppression and zoning. Involve an electrical engineer and your plant’s safety adviser.', 'Permitting and grid-connection rules for energy storage are still evolving. Check the latest requirements with the relevant authorities before deciding.'],
          },
          {
            heading: 'A practical approach: start with solar, leave room for a battery',
            body: ['Many plants install solar first and design the electrical room to allow a battery to be added later, once prices and rules are clearer. This avoids a large commitment up front. See [PPA vs buy vs lease](guides/ppa-vs-buy-vs-lease) and [7 ways to reduce factory electricity cost](guides/7-ways-to-reduce-factory-electricity-cost).'],
          },
          { heading: 'Disclaimer', body: [reviewEn] },
        ],
        faq: [
          { q: 'If the grid fails, does a solar factory still have power?', a: 'A standard grid-connected solar system stops exporting when the grid fails, for safety. Backup operation needs extra design and usually a battery.' },
          { q: 'Does a battery cut the bill more than solar alone?', a: 'It depends on your load pattern and tariff structure. It has to be calculated from the real load profile and weighed against total cost.' },
          { q: 'Should we install a battery with solar now or wait?', a: 'Without a specific reason, most start with solar, reserve space, and reassess when costs and rules change.' },
        ],
        cta: cta.en,
      },
    },
  },

  // 5 ---------------------------------------------------------------------------------------
  {
    slug: 'guide-direct-ppa-ugt',
    path: 'guides/direct-ppa-vs-ugt-vs-private-ppa',
    kind: 'guide',
    published,
    hero: ph(2, 'banner', 'โซลาร์รูฟท็อปบนโรงงานผลิตประตูหน้าต่างโลหะ จังหวัดนครปฐม', 'Rooftop solar on a metal door and window factory in Nakhon Pathom'),
    text: {
      th: {
        title: 'Direct PPA, UGT และ Private PPA ต่างกันอย่างไร: เลือกพลังงานสะอาดให้โรงงาน',
        description: 'เปรียบเทียบสามทางเลือกใช้พลังงานหมุนเวียนของโรงงานไทย ได้แก่ Private PPA บนหลังคา Utility Green Tariff (UGT) และ Direct PPA ผ่านระบบสายส่ง พร้อมวิธีเลือก',
        intro: 'โรงงานที่ต้องการลดค่าไฟและลดการปล่อยคาร์บอนมักได้ยินคำสามคำนี้ปนกัน คือ Private PPA, UGT และ Direct PPA ทั้งสามเป็นเรื่องพลังงานหมุนเวียน แต่ต่างกันที่ที่มาของไฟ เส้นทางส่ง และสิ่งที่โรงงานได้รับ บทความนี้เปรียบเทียบอย่างเป็นกลาง',
        sections: [
          {
            heading: 'สรุปสั้นๆ ก่อนอ่านรายละเอียด',
            photo: ph(2, 4, 'โรงงานที่ติดโซลาร์รูฟท็อปเพื่อผลิตไฟใช้เองภายในพื้นที่โรงงาน', 'A factory with rooftop solar generating power for use on its own site'),
            body: [],
            bullets: [
              'Private PPA บนหลังคา: ผลิตไฟที่หลังคาโรงงานและใช้ในโรงงานทันที ผู้ให้บริการลงทุนและดูแลระบบ โรงงานจ่ายค่าไฟตามที่ผลิต',
              'UGT (Utility Green Tariff): ซื้อไฟพร้อมใบรับรองพลังงานหมุนเวียนจากการไฟฟ้า ไม่มีการติดตั้งอะไรที่โรงงาน',
              'Direct PPA: ซื้อไฟหมุนเวียนจากผู้ผลิตโดยตรงผ่านระบบสายส่งของรัฐ ตามโครงการและเงื่อนไขที่หน่วยงานกำกับกำหนด',
            ],
          },
          {
            heading: 'Private PPA บนหลังคา',
            body: ['ระบบอยู่ที่โรงงาน ผลิตไฟให้ใช้ทันทีหลังมิเตอร์ จึงลดปริมาณไฟที่ซื้อจากการไฟฟ้าโดยตรง ผู้ให้บริการเป็นเจ้าของระบบในช่วงสัญญา โรงงานไม่ต้องลงทุนก้อนแรก ข้อจำกัดคือกำลังผลิตขึ้นกับพื้นที่หลังคาและเงื่อนไขหน้างาน ดูรายละเอียดที่ [Private PPA ฉบับสมบูรณ์](guides/private-ppa-complete-guide)'],
          },
          {
            heading: 'UGT: ซื้อ "ความเป็นพลังงานสะอาด" จากการไฟฟ้า',
            body: ['UGT เป็นอัตราค่าไฟแบบพิเศษที่ผู้ใช้ไฟซื้อไฟที่อ้างอิงแหล่งพลังงานหมุนเวียน พร้อมใบรับรอง เหมาะกับโรงงานที่ต้องการแสดงการใช้พลังงานสะอาดโดยไม่มีพื้นที่หลังคา หรือเกินกว่าที่หลังคาผลิตได้', 'ข้อควรพิจารณาคือโรงงานไม่ได้ผลิตไฟเอง ราคาและเงื่อนไขเป็นไปตามที่การไฟฟ้ากำหนด และการนับใบรับรองในการรายงานต้องดูมาตรฐานที่ลูกค้ายอมรับ'],
          },
          {
            heading: 'Direct PPA: ซื้อจากผู้ผลิตผ่านสายส่ง',
            body: ['Direct PPA คือการที่ผู้ใช้ไฟรายใหญ่ทำสัญญาซื้อไฟหมุนเวียนจากผู้ผลิตโดยตรง แล้วใช้ระบบสายส่งหรือสายจำหน่ายส่งไฟมา โดยจ่ายค่าบริการใช้สายส่งตามที่กำหนด', 'โครงการนี้เป็นแนวทางที่ภาครัฐเปิดให้ทดลองและปรับปรุงเงื่อนไขต่อเนื่อง คุณสมบัติของผู้ใช้ไฟ ปริมาณ และค่าบริการอาจเปลี่ยนแปลง จึงต้องตรวจสถานะล่าสุดกับหน่วยงานที่เกี่ยวข้อง'],
          },
          {
            heading: 'ตารางเทียบแบบรวบรัด',
            body: [],
            bullets: [
              'ที่มาของไฟ: Private PPA ผลิตที่หลังคาโรงงาน / UGT มาจากระบบการไฟฟ้า / Direct PPA มาจากผู้ผลิตภายนอก',
              'การลงทุนของโรงงาน: Private PPA ไม่ต้องลงทุนก้อนแรก (ตามสัญญา) / UGT ไม่ต้องลงทุน / Direct PPA ไม่ต้องลงทุนในระบบผลิต',
              'ต้องมีหลังคา: Private PPA ต้องมี / UGT ไม่ต้อง / Direct PPA ไม่ต้อง',
              'ผลต่อค่าไฟ: Private PPA ลดไฟที่ซื้อจากการไฟฟ้าโดยตรง / UGT เป็นอัตราพิเศษตามที่กำหนด / Direct PPA ต้องรวมค่าบริการสายส่ง',
              'ความพร้อมใช้: Private PPA ทำได้ทันที / UGT ตามที่การไฟฟ้าเปิดรับ / Direct PPA ตามโครงการและโควตา',
            ],
          },
          {
            heading: 'เลือกอย่างไร: ใช้ร่วมกันได้',
            body: ['สามทางเลือกไม่ได้แทนกัน โรงงานจำนวนมากเริ่มจากโซลาร์รูฟท็อปเพราะลดค่าไฟและได้ข้อมูลผลิตไฟจริงสำหรับรายงาน แล้วค่อยพิจารณา UGT หรือ Direct PPA เพื่อเติมส่วนที่หลังคาผลิตไม่พอ ถามผู้ให้บริการว่าข้อมูลที่ให้สามารถใช้รายงานคาร์บอนได้อย่างไร ดู [การรายงาน Scope 2](guides/scope-2-emissions-rooftop-solar-reporting)'],
          },
          { heading: 'ข้อสงวน', body: [reviewTh, 'กติกาของ UGT และ Direct PPA ปรับเปลี่ยนได้ ข้อมูลในหน้านี้ไม่ใช่คำประกาศของหน่วยงานรัฐ ควรตรวจกับการไฟฟ้า คณะกรรมการกำกับกิจการพลังงาน และกระทรวงพลังงานก่อนตัดสินใจ'] },
        ],
        faq: [
          { q: 'Private PPA กับ Direct PPA ต่างกันที่ตรงไหน', a: 'Private PPA ผลิตไฟที่หลังคาโรงงานและใช้ทันที ส่วน Direct PPA ซื้อไฟจากผู้ผลิตที่อยู่ที่อื่นแล้วส่งผ่านระบบสายส่ง' },
          { q: 'ติดโซลาร์แล้วยังซื้อ UGT เพิ่มได้ไหม', a: 'โดยหลักการเป็นไปได้ เพื่อเติมส่วนที่ผลิตเองไม่พอ แต่ต้องตรวจเงื่อนไขกับการไฟฟ้า และตรวจการนับซ้ำในรายงานคาร์บอน' },
          { q: 'ควรเริ่มจากทางไหนสำหรับโรงงานที่มีหลังคา', a: 'ส่วนใหญ่เริ่มจากโซลาร์รูฟท็อปเพราะเริ่มได้ทันทีและลดไฟที่ซื้อจากการไฟฟ้าโดยตรง ส่วนทางเลือกอื่นพิจารณาเป็นส่วนเสริม' },
        ],
        cta: cta.th,
      },
      en: {
        title: 'Direct PPA vs UGT vs Private PPA: Choosing Clean Power for a Thai Factory',
        description: 'Compare the three renewable routes for Thai factories: rooftop Private PPA, Utility Green Tariff (UGT) and grid-based Direct PPA, and how to choose.',
        intro: 'Factories that want lower power bills and lower carbon often hear three terms mixed together: Private PPA, UGT and Direct PPA. All three concern renewable power, but they differ in where the power comes from, how it travels and what the factory receives. This article compares them neutrally.',
        sections: [
          {
            heading: 'The short version',
            photo: ph(2, 4, 'A factory with rooftop solar generating power for use on its own site', 'A factory with rooftop solar generating power for use on its own site'),
            body: [],
            bullets: [
              'Rooftop Private PPA: power is generated on your roof and used immediately. The provider invests in and maintains the system; you pay for the electricity produced.',
              'UGT (Utility Green Tariff): you buy power from the utility with a renewable-energy certificate. Nothing is installed at your site.',
              'Direct PPA: you buy renewable power directly from a generator through the state grid, under the scheme and conditions set by the regulators.',
            ],
          },
          {
            heading: 'Rooftop Private PPA',
            body: ['The system sits at your factory and feeds power behind the meter, directly reducing what you buy from the utility. The provider owns the system during the contract and you make no upfront investment. The limit is that capacity depends on roof area and site conditions. See the [complete private PPA guide](guides/private-ppa-complete-guide).'],
          },
          {
            heading: 'UGT: buying “clean” power from the utility',
            body: ['UGT is a special tariff for customers who buy electricity linked to renewable sources, with a certificate. It suits factories that want to show clean-energy use but have no roof space, or want more than their roof can produce.', 'Points to consider: the factory does not generate its own power, price and terms are set by the utility, and whether the certificate counts in your reporting depends on the standard your customers accept.'],
          },
          {
            heading: 'Direct PPA: buying from a generator through the grid',
            body: ['In a Direct PPA a large consumer contracts to buy renewable power straight from a generator, with the power delivered over the transmission or distribution network for a network-use charge.', 'The scheme has been opened by the government as a pilot and its conditions continue to be refined. Eligibility, volumes and charges may change, so check the current status with the relevant authorities.'],
          },
          {
            heading: 'A quick comparison',
            body: [],
            bullets: [
              'Where the power comes from: Private PPA on your roof / UGT from the utility system / Direct PPA from an outside generator',
              'Investment by the factory: Private PPA none upfront (per contract) / UGT none / Direct PPA none in generation',
              'Needs a roof: Private PPA yes / UGT no / Direct PPA no',
              'Effect on the bill: Private PPA cuts what you buy from the utility directly / UGT a special tariff as set / Direct PPA includes a network charge',
              'Availability: Private PPA straight away / UGT as the utility opens it / Direct PPA subject to the scheme and quota',
            ],
          },
          {
            heading: 'How to choose: they can be combined',
            body: ['The three are not substitutes. Many factories start with rooftop solar because it lowers the bill and gives real generation data for reporting, then consider UGT or Direct PPA to cover what the roof cannot. Ask your provider how the data can be used in carbon reporting. See [Scope 2 reporting](guides/scope-2-emissions-rooftop-solar-reporting).'],
          },
          { heading: 'Disclaimer', body: [reviewEn, 'UGT and Direct PPA rules can change. This page is not an announcement by any authority. Check with the utility, the Energy Regulatory Commission and the Ministry of Energy before deciding.'] },
        ],
        faq: [
          { q: 'How does a Private PPA differ from a Direct PPA?', a: 'A Private PPA generates on your roof and is used immediately. A Direct PPA buys power from a generator elsewhere and sends it through the grid.' },
          { q: 'Can I buy UGT in addition to rooftop solar?', a: 'In principle yes, to cover what you cannot generate, but check the conditions with the utility and avoid double counting in carbon reports.' },
          { q: 'Where should a factory with a roof start?', a: 'Most start with rooftop solar because it can begin now and directly reduces what is bought from the utility. The others are considered as additions.' },
        ],
        cta: cta.en,
      },
    },
  },
];
