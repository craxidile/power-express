import { ActivityType } from '../../../models/activity';

const activityTypes: ActivityType[] = [
  {
    id: 'CSR',
    color: '#FF6B35',
    title: {
      th: 'บรรษัทบริบาล',
      en: 'CSR',
    },
  },
  {
    id: 'AWD',
    color: '#2D5A3D',
    title: {
      th: 'รางวัล',
      en: 'Awards',
    },
  },
  {
    id: 'MST',
    color: '#FF6B35',
    title: {
      th: 'ก้าวย่างสำคัญ',
      en: 'Milestones',
    },
  },
];

export default activityTypes;
