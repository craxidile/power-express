import { HeroBanner } from '../../../models/hero-banner';
import { p } from '../../../utils/path-utils';

const heroBanners: HeroBanner[] = [
  {
    id: 1,
    banner: p('mock/front/section-business/bg.jpg'),
    title: {
      th: 'พลังงานแสงอาทิตย์',
      en: 'Solar',
    },
    subtitle: {
      th: 'สำหรับภาคธุรกิจและอุตสาหกรรม',
      en: 'Commercial & Industrial',
    },
    icon: p('mock/front/section-business/ic-sun.svg'),
    excerpt: {
      th: 'บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม\nมุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน',
      en: 'Comprehensive solar solutions designed for large-scale commercial and industrial facilities,',
    },
  },
  {
    id: 2,
    banner: p('mock/front/section-business/bg.jpg'),
    title: {
      th: 'พลังงานแสงอาทิตย์',
      en: 'Solar',
    },
    subtitle: {
      th: 'สำหรับภาคธุรกิจและอุตสาหกรรม',
      en: 'Commercial & Industrial',
    },
    icon: p('mock/front/section-business/ic-sun.svg'),
    excerpt: {
      th: 'บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม\nมุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน',
      en: 'Comprehensive solar solutions designed for large-scale commercial and industrial facilities,',
    },
  },
];

export default heroBanners;
