import {Menu} from "../../../models/menu";

const navMenu: Menu = {
  id: 1,
  type: 'nav',
  items: [
    {
      id: 1,
      title: {
        th: 'หน้าแรก',
        en: 'Home',
      },
      url: '/',
    },
    {
      id: 2,
      title: {
        th: 'ธุรกิจของเรา',
        en: 'Our Business',
      },
      url: '/about',
    },
    {
      id: 3,
      title: {
        th: 'โครงการของเรา',
        en: 'Our Projects',
      },
      url: '/project',
    },
    {
      id: 4,
      title: {
        th: 'กิจกรรมของเรา',
        en: 'Our Activities',
      },
      url: '/activity',
    },
    {
      id: 5,
      title: {
        th: 'ติดต่อเรา',
        en: 'Contact Us',
      },
      url: '/contact',
      isCta: true,
    },
  ],
}

export default navMenu;
