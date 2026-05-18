import {Benefit} from "../../../models/benefit";
import {p} from "../../../utils/path-utils";

const benefits: Benefit[] = [
  {
    id: 1,
    seq: 1,
    icon: p('mock/front/section-benefits/ic-bill.svg'),
    title: {
      th: 'ประหยัดค่าใช้จ่ายทันที',
      en: 'Instant Savings',
    },
    excerpt: {
      th: 'ลดค่าไฟฟ้าของคุณตั้งแต่วันแรกที่เริ่มใช้งาน และช่วยเพิ่มผลกำไรให้กับธุรกิจของคุณ',
      en: 'Reduce your electricity bills from day one and improve your bottom line.',
    },
  },
  {
    id: 2,
    seq: 2,
    icon: p('mock/front/section-benefits/ic-zero.svg'),
    title: {
      th: 'ลงทุน 0 บาท',
      en: 'Zero Investment',
    },
    excerpt: {
      th: 'ไม่มีค่าใช้จ่ายล่วงหน้า เราเป็นผู้ลงทุนให้ ส่วนคุณได้รับผลประโยชน์เต็มๆ ง่ายๆ',
      en: 'No upfront cost. \n' +
        'We invest, your benefit.\n' +
        'It’s that simple.',
    },
  },
  {
    id: 3,
    seq: 3,
    icon: p('mock/front/section-benefits/ic-team.svg'),
    title: {
      th: 'ทีมงานมืออาชีพ',
      en: 'Expert Team',
    },
    excerpt: {
      th: 'บริการดูแลและบำรุงรักษาแบบครบวงจรเพื่อให้คุณมั่นใจและไร้กังวล',
      en: 'Our experience team \n' +
        'delivers high-quality systems \n' +
        'with long-term reliability.',
    },
  },
  {
    id: 4,
    seq: 4,
    icon: p('mock/front/section-benefits/ic-support.svg'),
    title: {
      th: 'การสนับสนุนเต็มรูปแบบ',
      en: 'Full Support',
    },
    excerpt: {
      th: 'บริการดูแลและบำรุงรักษาแบบครบวงจรเพื่อให้คุณมั่นใจและไร้กังวล',
      en: 'End-to-end service\n' +
        'and maintenance for your \n' +
        'peace of mind.',
    },
  },
  {
    id: 5,
    seq: 5,
    icon: p('mock/front/section-benefits/ic-free.svg'),
    title: {
      th: 'รับกรรมสิทธิ์ในระบบฟรี',
      en: 'Free Assets',
    },
    excerpt: {
      th: 'เมื่อสิ้นสุดสัญญาคุณจะได้เป็นเจ้าของระบบทั้งหมดโดยสมบูรณ์ เพื่อการใช้พลังงานของคุณเองอย่างยั่งยืน',
      en: 'Full ownership of the system\n' +
        'after the contract ends.\n' +
        'The energy is yours.',
    },
  },
];

export default benefits;
