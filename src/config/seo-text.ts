import { Locale } from '../models/_commons/localized';

type PageText = { [key in Locale]: { title: string; description: string } };

export const seoText: { [page: string]: PageText } = {
  front: {
    th: {
      title: 'โซลาร์รูฟท็อป PPA ลงทุน 0 บาท',
      description:
        'โซลาร์รูฟท็อป PPA สำหรับโรงงานและธุรกิจ ลงทุน 0 บาท ลดค่าไฟตั้งแต่เดือนแรก สัญญายืดหยุ่นตามหน้างาน ส่งบิลค่าไฟ รับรายงานประหยัดฟรีใน 48 ชั่วโมง',
    },
    en: {
      title: 'Rooftop Solar PPA, Zero Investment',
      description:
        'Rooftop solar PPA for factories and businesses in Thailand. Zero capex, lower power bills from the first month, contract terms tailored to your site.',
    },
  },
  about: {
    th: {
      title: 'เกี่ยวกับเรา',
      description:
        'พาวเวอร์ เอ็กซ์เพรส ผู้ให้บริการโซลาร์รูฟท็อปแบบ PPA สำหรับโรงงานและธุรกิจในประเทศไทย ประสบการณ์จริงจากโครงการที่ติดตั้งแล้ว',
    },
    en: {
      title: 'About Us',
      description:
        'Power Express provides rooftop solar PPA for factories and businesses in Thailand, backed by operating projects.',
    },
  },
  projects: {
    th: {
      title: 'ผลงานและโครงการโซลาร์รูฟท็อป',
      description:
        'ตัวอย่างโครงการโซลาร์รูฟท็อปของ พาวเวอร์ เอ็กซ์เพรส กำลังผลิต ลูกค้า และสถานที่ติดตั้งจริง',
    },
    en: {
      title: 'Rooftop Solar Projects',
      description:
        'Operating rooftop solar projects by Power Express: capacity, clients and locations.',
    },
  },
  activities: {
    th: {
      title: 'ข่าวสารและกิจกรรม',
      description: 'ข่าวสารและกิจกรรมล่าสุดจาก พาวเวอร์ เอ็กซ์เพรส',
    },
    en: {
      title: 'News and Activities',
      description: 'Latest news and activities from Power Express.',
    },
  },
};

export const stripText = (text: string, max = 160): string => {
  const plain = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > max ? `${plain.slice(0, max - 1)}…` : plain;
};
