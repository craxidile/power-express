import facts from '../../../../../config/company-facts.json';
import impact from '../../../../../config/impact.json';
import { useVmScreen } from '../../../../../stores/vm-screen';
import SafeArea from '../../../../_commons/safe-area';

const T = {
  th: {
    title: 'ข้อมูลบริษัท',
    legal: 'ชื่อนิติบุคคล',
    reg: 'เลขทะเบียนนิติบุคคล',
    capital: 'ทุนจดทะเบียน',
    capitalValue: (n: number) => `${n} ล้านบาท`,
    exp: 'ประสบการณ์',
    expValue: (y: string) => `มากกว่า ${y.replace('+', '')} ปี`,
    ceo: 'ผู้บริหาร',
    track: 'ผลงาน',
    trackValue: (s: number, mw: string) =>
      `${s} โครงการ กำลังติดตั้งรวมประมาณ ${mw} เมกะวัตต์`,
    address: 'ที่อยู่',
    contact: 'ติดต่อ',
  },
  en: {
    title: 'Company facts',
    legal: 'Legal name',
    reg: 'Registration no.',
    capital: 'Registered capital',
    capitalValue: (n: number) => `THB ${n} million`,
    exp: 'Experience',
    expValue: (y: string) => `${y} years`,
    ceo: 'Leadership',
    track: 'Track record',
    trackValue: (s: number, mw: string) =>
      `${s} projects, about ${mw} MW installed`,
    address: 'Address',
    contact: 'Contact',
  },
};

const SectionCompanyFacts = () => {
  const { locale = 'th' } = useVmScreen();
  const t = T[locale];
  const mw = (impact.kWp / 1000).toFixed(1);
  const rows: [string, React.ReactNode][] = [
    [t.legal, facts.legalName[locale]],
    [t.reg, facts.registrationNo],
    [t.capital, t.capitalValue(facts.registeredCapitalMillionBaht)],
    [t.exp, t.expValue(facts.experienceYears)],
    [
      t.ceo,
      <>
        {facts.ceo[locale]}, {facts.ceoTitle[locale]} (
        <a
          href={facts.linkedin}
          target="_blank"
          rel="noopener noreferrer me"
          className="underline text-green-bullet"
        >
          LinkedIn
        </a>
        )
      </>,
    ],
    [t.track, t.trackValue(impact.sites, mw)],
    [t.address, facts.address[locale]],
    [
      t.contact,
      <>
        {facts.phone} ·{' '}
        <a href={`mailto:${facts.email}`} className="underline text-green-bullet">
          {facts.email}
        </a>
      </>,
    ],
  ];
  return (
    <section className="py-14 lg:py-20 bg-white">
      <SafeArea>
        <div className="mx-auto w-full max-w-[900px] flex flex-col gap-y-6">
          <h2 className="text-3xl lg:text-4xl font-medium text-title-dark">
            {t.title}
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-x-6 gap-y-3 text-base">
            {rows.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-secondary">{k}</dt>
                <dd className="text-title-dark">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionCompanyFacts;
