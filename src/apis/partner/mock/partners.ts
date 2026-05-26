import { Partner } from '../../../models/partner';
import { p } from '../../../utils/path-utils';

const partners: Partner[] = [
  {
    id: 1,
    logo: p('mock/front/section-partners/mock-partner-01.png'),
    name: {
      th: 'Longi',
      en: 'Longi',
    },
    type: 'vendor',
    seq: 1,
  },
  {
    id: 2,
    logo: p('mock/front/section-partners/mock-partner-02.png'),
    name: {
      th: 'Huawei',
      en: 'Huawei',
    },
    type: 'vendor',
    seq: 2,
  },
  {
    id: 3,
    logo: p('mock/front/section-partners/mock-partner-03.png'),
    name: {
      th: 'Solar Edge',
      en: 'Solar Edge',
    },
    type: 'vendor',
    seq: 3,
  },
  {
    id: 4,
    logo: p('mock/front/section-partners/mock-partner-04.png'),
    name: {
      th: '7-Eleven',
      en: '7-Eleven',
    },
    type: 'client',
    seq: 1,
  },
  {
    id: 5,
    logo: p('mock/front/section-partners/mock-partner-05.png'),
    name: {
      th: 'true',
      en: 'true',
    },
    type: 'client',
    seq: 2,
  },
  {
    id: 6,
    logo: p('mock/front/section-partners/mock-partner-06.png'),
    name: {
      th: 'Lotus',
      en: 'Lotus',
    },
    type: 'client',
    seq: 3,
  },
];

export default partners;
