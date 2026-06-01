import { p } from '../../../utils/path-utils';
import { Project } from '../../../models/project';

const projects: Project[] = [
  {
    id: 1,
    thumbnail: p('mock/front/section-projects/mock-project-01.jpg'),
    banner: p('mock/front/section-projects/mock-project-01.jpg'),
    title: {
      th: 'โครงการโซลาร์ PPA โรงงานเหล็ก',
      en: 'โครงการโซลาร์ PPA โรงงานเหล็ก',
    },
    excerpt: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์',
      en: 'การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: 2,
  },
  {
    id: 2,
    thumbnail: p('mock/front/section-projects/mock-project-02.jpg'),
    banner: p('mock/front/section-projects/mock-project-02.jpg'),
    title: {
      th: 'นิคมอุตสาหกรรมนครปฐม',
      en: 'นิคมอุตสาหกรรมนครปฐม',
    },
    excerpt: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์',
      en: 'การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: 3,
  },
  {
    id: 3,
    thumbnail: p('mock/front/section-projects/mock-project-03.jpg'),
    banner: p('mock/front/section-projects/mock-project-03.jpg'),
    title: {
      th: 'Bangkok Distribution Center',
      en: 'Bangkok Distribution Center',
    },
    excerpt: {
      th: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
      en: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: 4,
  },
  {
    id: 4,
    thumbnail: p('mock/front/section-projects/mock-project-04.jpg'),
    banner: p('mock/front/section-projects/mock-project-04.jpg'),
    title: {
      th: 'Chonburi Manufacturing Plant',
      en: 'Chonburi Manufacturing Plant',
    },
    excerpt: {
      th: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
      en: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: 5,
  },
  {
    id: 5,
    thumbnail: p('mock/front/section-projects/mock-project-01.jpg'),
    banner: p('mock/front/section-projects/mock-project-01.jpg'),
    title: {
      th: 'Steel Plant Solar PPA',
      en: 'Steel Plant Solar PPA',
    },
    excerpt: {
      th: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
      en: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: 6,
  },
  {
    id: 6,
    thumbnail: p('mock/front/section-projects/mock-project-02.jpg'),
    banner: p('mock/front/section-projects/mock-project-02.jpg'),
    title: {
      th: 'Nakhon Pathom Industrial Complex',
      en: 'Nakhon Pathom Industrial Complex',
    },
    excerpt: {
      th: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
      en: 'Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations.',
    },
    details: {
      th: 'การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย',
      en: 'Installation of a medium-sized solar rooftop on a factory that exports toys overseas, to meet the demand for clean energy in the production process to reduce electricity costs, mitigate global warming impact, and simultaneously help alleviate carbon tax issues anticipated to begin in foreign countries, using high-efficiency (Tier 1) solar panels and Huawei inverters.',
    },
    client: {
      th: 'ABC Co., Ltd',
      en: 'ABC Co., Ltd',
    },
    location: {
      th: 'นครปฐม, ประเทศไทย',
      en: 'Nakhon Pathom, Thailand',
    },
    capacity: 400,
    completion: 2023,
    energy: '560000',
    solarArray: '400',
    treesPlanted: '363',
    photos: [
      p('mock/project/section-details/mock-photo-01.jpg'),
      p('mock/project/section-details/mock-photo-02.jpg'),
      p('mock/project/section-details/mock-photo-03.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
      p('mock/project/section-details/mock-photo-04.jpg'),
    ],
    nextProjectId: null,
  },
];

export default projects;
