import { Locale } from '../models/_commons/localized';

export interface GuideSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface GuideText {
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  cta: string;
}

export interface Guide {
  slug: string;
  text: { [key in Locale]: GuideText };
}

// DRAFT copy: general educational content only. No savings percentages, prices or
// project numbers are stated; those must come from a real assessment.
export const guides: Guide[] = [
  {
    slug: 'solar-ppa',
    text: {
      th: {
        title: 'Solar PPA คืออะไร ติดตั้งโซลาร์รูฟท็อปโดยไม่ต้องลงทุนเอง',
        description:
          'ทำความเข้าใจ Solar PPA (สัญญาซื้อขายไฟฟ้าจากโซลาร์รูฟท็อป) ว่าทำงานอย่างไร เหมาะกับโรงงานแบบไหน และต้องเตรียมอะไรบ้าง',
        intro:
          'Solar PPA คือรูปแบบที่ผู้ให้บริการลงทุนติดตั้งและดูแลระบบโซลาร์รูฟท็อปบนหลังคาของคุณ แล้วคุณจ่ายเฉพาะค่าไฟที่ใช้จริงตามอัตราที่ตกลงกันในสัญญา โดยไม่ต้องจ่ายเงินลงทุนก้อนแรก',
        sections: [
          {
            heading: 'Solar PPA ทำงานอย่างไร',
            body: [
              'ผู้ให้บริการเป็นเจ้าของระบบ ออกแบบ ติดตั้ง และดูแลบำรุงรักษาตลอดอายุสัญญา ไฟฟ้าที่ผลิตได้จะถูกใช้ในอาคารของคุณก่อน และคุณจ่ายค่าไฟส่วนนั้นตามอัตราที่ระบุในสัญญา',
              'ไฟส่วนที่ระบบผลิตไม่พอ ยังคงซื้อจากการไฟฟ้าตามปกติ',
            ],
          },
          {
            heading: 'เหมาะกับใคร',
            body: ['โดยทั่วไปเหมาะกับโรงงานและอาคารที่:'],
            bullets: [
              'มีค่าไฟสูงและใช้ไฟช่วงกลางวันเป็นหลัก',
              'มีพื้นที่หลังคาที่รับน้ำหนักได้และไม่ถูกบังแสง',
              'เป็นเจ้าของอาคาร หรือมีสัญญาเช่าที่ยาวพอกับอายุสัญญา PPA',
              'ต้องการลดค่าไฟโดยไม่ใช้เงินลงทุนและไม่ต้องดูแลระบบเอง',
            ],
          },
          {
            heading: 'สิ่งที่ต้องเตรียมเพื่อประเมิน',
            body: [],
            bullets: [
              'บิลค่าไฟย้อนหลังอย่างน้อย 12 เดือน',
              'ข้อมูลพื้นที่และโครงสร้างหลังคา',
              'เอกสารแสดงกรรมสิทธิ์อาคารหรือสัญญาเช่า',
            ],
          },
        ],
        faq: [
          {
            q: 'ต้องลงทุนติดตั้งเองหรือไม่',
            a: 'ในรูปแบบ PPA ผู้ให้บริการเป็นผู้ลงทุนติดตั้งระบบ ผู้ใช้ไฟไม่ต้องจ่ายเงินลงทุนก้อนแรก รายละเอียดขึ้นกับข้อตกลงในสัญญา',
          },
          {
            q: 'ใครดูแลระบบหลังติดตั้ง',
            a: 'ผู้ให้บริการดูแลและบำรุงรักษาระบบตลอดอายุสัญญา ตามขอบเขตที่ระบุในสัญญา',
          },
          {
            q: 'จะรู้ได้อย่างไรว่าคุ้มหรือไม่',
            a: 'ต้องประเมินจากบิลค่าไฟและหลังคาจริงของคุณ ส่งบิลให้เราเพื่อรับรายงานประเมินฟรีภายใน 48 ชั่วโมง',
          },
        ],
        cta: 'ส่งบิลค่าไฟ รับรายงานประเมินฟรี',
      },
      en: {
        title: 'What Is a Solar PPA? Rooftop Solar With No Upfront Investment',
        description:
          'Understand how a rooftop Solar PPA (power purchase agreement) works, which factories it suits, and what you need to prepare.',
        intro:
          'In a Solar PPA, a provider invests in, installs and maintains a rooftop solar system on your building, and you pay only for the electricity it produces at the rate agreed in the contract, with no upfront capital.',
        sections: [
          {
            heading: 'How a Solar PPA works',
            body: [
              'The provider owns, designs, installs and maintains the system for the whole contract term. Power generated is used in your building first, and you pay for it at the contract rate.',
              'Any demand the system cannot cover is still bought from the grid as usual.',
            ],
          },
          {
            heading: 'Who it suits',
            body: ['It generally fits factories and buildings that:'],
            bullets: [
              'have high electricity bills and mostly daytime consumption',
              'have roof space that can bear the load and is not heavily shaded',
              'own the building, or hold a lease long enough to cover the PPA term',
              'want lower power costs without capital spend or running the system',
            ],
          },
          {
            heading: 'What to prepare for an assessment',
            body: [],
            bullets: [
              'at least 12 months of electricity bills',
              'roof area and structure details',
              'proof of building ownership or the lease',
            ],
          },
        ],
        faq: [
          {
            q: 'Do I have to invest in the system?',
            a: 'Under a PPA the provider funds the installation, so there is no upfront capital from you. Details depend on the contract.',
          },
          {
            q: 'Who maintains the system?',
            a: 'The provider operates and maintains it for the contract term, within the scope set out in the contract.',
          },
          {
            q: 'How do I know if it is worth it?',
            a: 'It depends on your bills and your actual roof. Send us your bill and get a free assessment within 48 hours.',
          },
        ],
        cta: 'Send your bill, get a free assessment',
      },
    },
  },
  {
    slug: 'factory-rooftop-solar',
    text: {
      th: {
        title: 'โซลาร์รูฟท็อปโรงงาน ต้องเช็กอะไรก่อนติดตั้ง',
        description:
          'เช็กลิสต์ก่อนติดตั้งโซลาร์รูฟท็อปในโรงงาน ตั้งแต่โครงสร้างหลังคา รูปแบบการใช้ไฟ ไปจนถึงเอกสารและใบอนุญาต',
        intro:
          'การติดตั้งโซลาร์รูฟท็อปในโรงงานให้ผลดีเมื่อออกแบบให้เข้ากับหลังคาและรูปแบบการใช้ไฟจริง นี่คือสิ่งที่ควรตรวจสอบก่อนตัดสินใจ',
        sections: [
          {
            heading: '1. โครงสร้างและสภาพหลังคา',
            body: [
              'หลังคาต้องรับน้ำหนักแผงและโครงยึดได้ และมีอายุการใช้งานเหลือพอ หากหลังคาเก่าหรือรั่วซึม ควรซ่อมหรือเปลี่ยนก่อนติดตั้ง',
            ],
          },
          {
            heading: '2. รูปแบบการใช้ไฟ',
            body: [
              'โรงงานที่ใช้ไฟช่วงกลางวันมากจะใช้ไฟจากโซลาร์ได้เต็มที่ ส่วนโรงงานที่ทำงานกลางคืนเป็นหลักอาจได้ประโยชน์น้อยลง จึงควรดูกราฟโหลดประกอบ',
            ],
          },
          {
            heading: '3. เอกสารและการอนุญาต',
            body: ['เตรียมเอกสารที่เกี่ยวข้อง เช่น:'],
            bullets: [
              'เอกสารกรรมสิทธิ์อาคารหรือสัญญาเช่า',
              'แบบโครงสร้างหรือผลตรวจสอบหลังคา',
              'ข้อมูลการขออนุญาตตามกฎหมายที่เกี่ยวข้องกับการติดตั้งระบบผลิตไฟฟ้า',
            ],
          },
          {
            heading: '4. รูปแบบการลงทุน',
            body: [
              'มีทั้งการซื้อระบบเอง และการทำสัญญา PPA ที่ผู้ให้บริการเป็นผู้ลงทุน เลือกให้เหมาะกับงบประมาณและนโยบายของบริษัท',
            ],
          },
        ],
        faq: [
          {
            q: 'ต้องส่งอะไรเพื่อขอประเมิน',
            a: 'เริ่มจากบิลค่าไฟของโรงงาน และจังหวัดที่ตั้ง ทีมงานจะแจ้งข้อมูลที่ต้องเพิ่มเติมเมื่อติดต่อกลับ',
          },
          {
            q: 'ใช้เวลาประเมินนานเท่าไร',
            a: 'เรามุ่งส่งรายงานประเมินเบื้องต้นภายใน 48 ชั่วโมงทำการหลังได้รับข้อมูล',
          },
        ],
        cta: 'ประเมินโซลาร์รูฟท็อปโรงงานฟรี',
      },
      en: {
        title: 'Factory Rooftop Solar: What to Check Before Installing',
        description:
          'A pre-installation checklist for factory rooftop solar: roof structure, load profile, paperwork and permits.',
        intro:
          'Rooftop solar works best in a factory when it is designed around the actual roof and load profile. Here is what to check before you decide.',
        sections: [
          {
            heading: '1. Roof structure and condition',
            body: [
              'The roof must carry the panels and mounting, and have enough service life left. An old or leaking roof should be repaired or replaced first.',
            ],
          },
          {
            heading: '2. Load profile',
            body: [
              'Factories running mostly in daytime can use more of the solar output. Night-shift sites may benefit less, so look at the load curve.',
            ],
          },
          {
            heading: '3. Paperwork and permits',
            body: ['Prepare the relevant documents, such as:'],
            bullets: [
              'proof of building ownership or the lease',
              'structural drawings or a roof inspection report',
              'the permit information required for installing a power generation system',
            ],
          },
          {
            heading: '4. Ownership model',
            body: [
              'You can buy the system outright or sign a PPA where the provider funds it. Choose according to your budget and company policy.',
            ],
          },
        ],
        faq: [
          {
            q: 'What do I send to get an assessment?',
            a: 'Start with your factory electricity bill and its province. We will tell you what else is needed when we get in touch.',
          },
          {
            q: 'How long does it take?',
            a: 'We aim to send a preliminary assessment within 48 business hours of receiving your information.',
          },
        ],
        cta: 'Get a free factory rooftop solar assessment',
      },
    },
  },
];

export const findGuide = (slug?: string) => guides.find((g) => g.slug === slug);
