import { Link, useLocation } from 'react-router-dom';

import { leadText } from '../../../config/lead-text';
import { track } from '../../../utils/analytics';
import { useVmScreen } from '../../../stores/vm-screen';

/** Mobile-only floating button to the free assessment form. */
const StickyCta = () => {
  const { locale = 'th' } = useVmScreen();
  const { pathname } = useLocation();
  if (pathname.includes('/free-assessment')) return null;
  return (
    <Link
      to={`/${locale}/free-assessment`}
      onClick={() => track('click_assessment_cta', { place: 'sticky' })}
      className="lg:hidden fixed right-4 bottom-4 z-[900] px-5 py-3 rounded-full bg-cta-primary text-white text-sm font-medium shadow-lg"
    >
      {leadText[locale].title}
    </Link>
  );
};

export default StickyCta;
