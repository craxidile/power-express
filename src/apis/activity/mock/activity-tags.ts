import { ActivityTag } from '../../../models/activity';

const activityTags: ActivityTag[] = [
  {
    id: 'NEW',
    color: '#2D5A3D',
    title: {
      th: 'ใหม่',
      en: 'New',
    },
  },
  {
    id: 'SUS',
    color: '#FF6B35',
    title: {
      th: 'ความยั่งยืน',
      en: 'Sustainability',
    },
  },
  {
    id: 'EVT',
    color: '#FF6B35',
    title: {
      th: 'อีเวนต์',
      en: 'Event',
    },
  },
];

export default activityTags;
