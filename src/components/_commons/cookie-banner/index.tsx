import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { applyConsent, getConsent, setConsent } from '../../../utils/consent';

const text = {
  th: {
    body: 'เว็บไซต์นี้ใช้คุกกี้เพื่อวิเคราะห์การใช้งานและวัดผลโฆษณา ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 คุณเลือกยอมรับหรือปฏิเสธได้',
    accept: 'ยอมรับทั้งหมด',
    decline: 'ปฏิเสธ',
  },
  en: {
    body: 'We use cookies to analyse site usage and measure advertising, in line with the Thai Personal Data Protection Act B.E. 2562. You can accept or decline.',
    accept: 'Accept all',
    decline: 'Decline',
  },
};

const CookieBanner = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getConsent();
    if (stored) applyConsent(stored);
    else setVisible(true);
  }, []);

  if (!visible) return null;
  const t = text[pathname.startsWith('/en') ? 'en' : 'th'];

  const choose = (state: 'granted' | 'denied') => {
    setConsent(state);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[1000] p-4 bg-gray-footer text-white shadow-lg"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row lg:items-center gap-4">
        <p className="flex-1 text-sm">{t.body}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="px-5 py-2 rounded-lg border border-white-a50 text-sm"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="px-5 py-2 rounded-lg bg-cta-primary text-white text-sm font-medium"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
