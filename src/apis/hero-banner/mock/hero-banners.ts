import { HeroBanner } from '../../../models/hero-banner';
import { p } from '../../../utils/path-utils';

const heroBanners: HeroBanner[] = [
  {
    id: 1,
    banner: p('mock/front/section-business/bg.jpg'),
    title: 'พลังงานแสงอาทิตย์',
    subtitle: 'สำหรับภาคธุรกิจและอุตสาหกรรม',
    icon: p('mock/front/section-business/ic-sun.svg'),
    excerpt:
      'บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม\nมุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน',
  },
  {
    id: 2,
    banner: p('mock/front/section-business/bg.jpg'),
    title: 'พลังงานแสงอาทิตย์',
    subtitle: 'สำหรับภาคธุรกิจและอุตสาหกรรม',
    icon: p('mock/front/section-business/ic-sun.svg'),
    excerpt:
      'บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม\nมุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน',
  },
];

export default heroBanners;
