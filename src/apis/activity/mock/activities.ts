import { Activity } from '../../../models/activity';
import dayjs from 'dayjs';

import { p } from '../../../utils/path-utils';
import tags from './activity-tags';
import types from './activity-types';

const activities: Activity[] = [
  {
    id: 1,
    thumbnail: p('mock/front/section-activities/mock-activity-01.jpg'),
    banner: p('mock/activity/mock-banner.jpg'),
    tag: tags.find((t) => t.id === 'NEW'),
    type: types.find((t) => t.id === 'MST'),
    publishedAt: dayjs().toISOString(),
    title: {
      th: 'Power Express ประกาศความสำเร็จ เปิดดำเนินการโครงการ Solar PPA ร่วมกับ PSP [SET] ตอกย้ำความไว้วางใจที่บริษัทมหาชนชั้นนำเลือกใช้บริการ',
      en: 'Power Express Marks Milestone with Solar PPA Launch for PSP [SET], Reinforcing Proven Trust from Leading Public Corporations',
    },
    excerpt: {
      th: 'บริษัท พาวเวอร์ เอ็กซ์เพรส 1980 จำกัด (PEX) ประกาศความสำเร็จครั้งสำคัญในการเปิดดำเนินการเชิงพาณิชย์ (COD) โครงการระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ร่วมกับ บริษัท พี.เอส.พี. สเปเชียลตี้ส์ จำกัด (มหาชน) หรือ PSP ผู้นำในกลุ่มอุตสาหกรรมในตลาดหลักทรัพย์แห่งประเทศไทย โดยความร่วมมือในครั้งนี้ PSP ได้มอบความไว้วางใจเลือก Power Express ให้เป็นผู้ดำเนินการโซลูชันพลังงานสะอาดอย่างครบวงจร เพื่อยกระดับประสิทธิภาพการใช้พลังงานในระดับอุตสาหกรรม',
      en: 'Power Express 1980 Co., Ltd. (PEX) proudly announces the successful Commercial Operation Date (COD) of its solar energy project for P.S.P. Specialties Public Company Limited (PSP), a prominent leader in the Thai industrial sector listed on the SET. PSP has strategically selected Power Express as its trusted partner to deliver and manage comprehensive renewable energy solutions, reflecting our excellence in industrial energy management.',
    },
    details: {
      th: '[กรุงเทพมหานคร] – บริษัท พาวเวอร์ เอ็กซ์เพรส 1980 จำกัด (PEX) ประกาศความสำเร็จครั้งสำคัญในการเปิดดำเนินการเชิงพาณิชย์ (COD) โครงการระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ร่วมกับ บริษัท พี.เอส.พี. สเปเชียลตี้ส์ จำกัด (มหาชน) หรือ PSP ผู้นำในกลุ่มอุตสาหกรรมในตลาดหลักทรัพย์แห่งประเทศไทย โดยความร่วมมือในครั้งนี้ PSP ได้มอบความไว้วางใจเลือก Power Express ให้เป็นผู้ดำเนินการโซลูชันพลังงานสะอาดอย่างครบวงจร เพื่อยกระดับประสิทธิภาพการใช้พลังงานในระดับอุตสาหกรรม\n\nโครงการนี้เป็นหนึ่งในโครงการเชิงกลยุทธ์ที่สำคัญในพอร์ตโฟลิโอของ Power Express ซึ่งมีกำลังการผลิตติดตั้งรวม [ระบุตัวเลข] kWp โดยจะช่วยลดต้นทุนพลังงานและสร้างผลกำไร (Profit) ให้แก่พันธมิตรได้ทันทีภายใต้โมเดล Private PPA (Zero Investment) ด้วยทุนจดทะเบียน 40 ล้านบาท และประสบการณ์กว่า 17 ปี เรายังคงมุ่งเน้นการส่งมอบมาตรฐานวิศวกรรมที่ยอดเยี่ยม เพื่อสร้างความมั่นคงด้านพลังงานและความยั่งยืนให้กับภาคธุรกิจทั่วประเทศไทยอย่างต่อเนื่อง',
      en: '[Bangkok] – Power Express 1980 Co., Ltd. (PEX) proudly announces the successful Commercial Operation Date (COD) of its solar energy project for P.S.P. Specialties Public Company Limited (PSP), a prominent leader in the Thai industrial sector listed on the SET. PSP has strategically selected Power Express as its trusted partner to deliver and manage comprehensive renewable energy solutions, reflecting our excellence in industrial energy management.\n\nThis collaboration stands as a key strategic project within our portfolio, featuring a total installed capacity of [Insert Number] kWp. The project provides immediate energy cost savings and enhances profitability for our partner through our Private PPA (Zero Investment) model. Backed by a 40 Million Baht registered capital and over 17 years of expertise, Power Express remains dedicated to "Powering sustainable growth across Thailand" through our core values of Profit, Planet, and People.',
    },
    nextActivityId: 2,
  },
  {
    id: 2,
    thumbnail: p('mock/front/section-activities/mock-activity-02.jpg'),
    banner: p('mock/activity/mock-banner.jpg'),
    tag: tags.find((t) => t.id === 'SUS'),
    type: types.find((t) => t.id === 'CSR'),
    publishedAt: dayjs().toISOString(),
    title: {
      th: 'โครงการ CSR ประจำปี: พลังงานสะอาด เพื่อโรงเรียน',
      en: 'Annual CSR: Green Energy for Schools',
    },
    excerpt: {
      th: 'โครงการความรับผิดชอบต่อสังคม (CSR) ประจำปี 2025 ของเรา ได้ส่งมอบพลังงานแสงอาทิตย์ให้กับโรงเรียนในพื้นที่ห่างไกลกว่า 12 แห่ง เพื่อสนับสนุนพลังงานสะอาดและมอบความรู้ด้านสิ่งแวดล้อมให้แก่แก่นักเรียนกว่า 3,000 คน',
      en: 'Our 2025 Corporate Social Responsibility program brings solar power to 12 rural schools, providing clean energy and environmental education to over 3,000 students.',
    },
    details: {
      th: '[กรุงเทพมหานคร] – บริษัท พาวเวอร์ เอ็กซ์เพรส 1980 จำกัด (PEX) ประกาศความสำเร็จครั้งสำคัญในการเปิดดำเนินการเชิงพาณิชย์ (COD) โครงการระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ร่วมกับ บริษัท พี.เอส.พี. สเปเชียลตี้ส์ จำกัด (มหาชน) หรือ PSP ผู้นำในกลุ่มอุตสาหกรรมในตลาดหลักทรัพย์แห่งประเทศไทย โดยความร่วมมือในครั้งนี้ PSP ได้มอบความไว้วางใจเลือก Power Express ให้เป็นผู้ดำเนินการโซลูชันพลังงานสะอาดอย่างครบวงจร เพื่อยกระดับประสิทธิภาพการใช้พลังงานในระดับอุตสาหกรรม\n\nโครงการนี้เป็นหนึ่งในโครงการเชิงกลยุทธ์ที่สำคัญในพอร์ตโฟลิโอของ Power Express ซึ่งมีกำลังการผลิตติดตั้งรวม [ระบุตัวเลข] kWp โดยจะช่วยลดต้นทุนพลังงานและสร้างผลกำไร (Profit) ให้แก่พันธมิตรได้ทันทีภายใต้โมเดล Private PPA (Zero Investment) ด้วยทุนจดทะเบียน 40 ล้านบาท และประสบการณ์กว่า 17 ปี เรายังคงมุ่งเน้นการส่งมอบมาตรฐานวิศวกรรมที่ยอดเยี่ยม เพื่อสร้างความมั่นคงด้านพลังงานและความยั่งยืนให้กับภาคธุรกิจทั่วประเทศไทยอย่างต่อเนื่อง',
      en: '[Bangkok] – Power Express 1980 Co., Ltd. (PEX) proudly announces the successful Commercial Operation Date (COD) of its solar energy project for P.S.P. Specialties Public Company Limited (PSP), a prominent leader in the Thai industrial sector listed on the SET. PSP has strategically selected Power Express as its trusted partner to deliver and manage comprehensive renewable energy solutions, reflecting our excellence in industrial energy management.\n\nThis collaboration stands as a key strategic project within our portfolio, featuring a total installed capacity of [Insert Number] kWp. The project provides immediate energy cost savings and enhances profitability for our partner through our Private PPA (Zero Investment) model. Backed by a 40 Million Baht registered capital and over 17 years of expertise, Power Express remains dedicated to "Powering sustainable growth across Thailand" through our core values of Profit, Planet, and People.',
    },
    nextActivityId: 3,
  },
  {
    id: 3,
    thumbnail: p('mock/front/section-activities/mock-activity-03.jpg'),
    banner: p('mock/activity/mock-banner.jpg'),
    tag: tags.find((t) => t.id === 'EVT'),
    type: types.find((t) => t.id === 'AWD'),
    publishedAt: dayjs().toISOString(),
    title: {
      th: 'รางวัล Thailand Green Excellence Award 2025',
      en: 'Thailand Green Excellence Award 2025',
    },
    excerpt: {
      th: 'PEX รู้สึกเป็นเกียรติอย่างยิ่งที่ได้รับรางวัลอันทรงเกียรติ Green Excellence Award จากความมุ่งมั่นและผลงานที่โดดเด่นในการพัฒนาพลังงานที่ยั่งยืน รวมถึงการดูแลเอาใจใส่สิ่งแวดล้อม',
      en: 'PEX honored with the prestigious Green Excellence Award for outstanding contribution to sustainable energy development and environmental stewardship.',
    },
    details: {
      th: '[กรุงเทพมหานคร] – บริษัท พาวเวอร์ เอ็กซ์เพรส 1980 จำกัด (PEX) ประกาศความสำเร็จครั้งสำคัญในการเปิดดำเนินการเชิงพาณิชย์ (COD) โครงการระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ร่วมกับ บริษัท พี.เอส.พี. สเปเชียลตี้ส์ จำกัด (มหาชน) หรือ PSP ผู้นำในกลุ่มอุตสาหกรรมในตลาดหลักทรัพย์แห่งประเทศไทย โดยความร่วมมือในครั้งนี้ PSP ได้มอบความไว้วางใจเลือก Power Express ให้เป็นผู้ดำเนินการโซลูชันพลังงานสะอาดอย่างครบวงจร เพื่อยกระดับประสิทธิภาพการใช้พลังงานในระดับอุตสาหกรรม\n\nโครงการนี้เป็นหนึ่งในโครงการเชิงกลยุทธ์ที่สำคัญในพอร์ตโฟลิโอของ Power Express ซึ่งมีกำลังการผลิตติดตั้งรวม [ระบุตัวเลข] kWp โดยจะช่วยลดต้นทุนพลังงานและสร้างผลกำไร (Profit) ให้แก่พันธมิตรได้ทันทีภายใต้โมเดล Private PPA (Zero Investment) ด้วยทุนจดทะเบียน 40 ล้านบาท และประสบการณ์กว่า 17 ปี เรายังคงมุ่งเน้นการส่งมอบมาตรฐานวิศวกรรมที่ยอดเยี่ยม เพื่อสร้างความมั่นคงด้านพลังงานและความยั่งยืนให้กับภาคธุรกิจทั่วประเทศไทยอย่างต่อเนื่อง',
      en: '[Bangkok] – Power Express 1980 Co., Ltd. (PEX) proudly announces the successful Commercial Operation Date (COD) of its solar energy project for P.S.P. Specialties Public Company Limited (PSP), a prominent leader in the Thai industrial sector listed on the SET. PSP has strategically selected Power Express as its trusted partner to deliver and manage comprehensive renewable energy solutions, reflecting our excellence in industrial energy management.\n\nThis collaboration stands as a key strategic project within our portfolio, featuring a total installed capacity of [Insert Number] kWp. The project provides immediate energy cost savings and enhances profitability for our partner through our Private PPA (Zero Investment) model. Backed by a 40 Million Baht registered capital and over 17 years of expertise, Power Express remains dedicated to "Powering sustainable growth across Thailand" through our core values of Profit, Planet, and People.',
    },
    nextActivityId: null,
  },
];

export default activities;
