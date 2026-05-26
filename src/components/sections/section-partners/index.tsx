import { Partner } from '../../../models/partner';
import { useVmScreen } from '../../../stores/vm-screen';
import SafeArea from '../../_commons/safe-area';
import { PropsWithChildren, useMemo } from 'react';

export enum SectionPartnersTheme {
  normal = 'normal',
  light = 'light',
}

export interface SectionPartnersProps {
  theme?: SectionPartnersTheme;
  partners: Partner[];
}

const SectionPartners = (props: PropsWithChildren<SectionPartnersProps>) => {
  const { theme, partners } = props;

  const { locale = 'th' } = useVmScreen();

  const vendors = useMemo(
    () => partners.filter((p) => p.type === 'vendor'),
    [partners]
  );

  const clients = useMemo(
    () => partners.filter((p) => p.type === 'client'),
    [partners]
  );

  const bgColor = useMemo(() => {
    switch (theme) {
      case SectionPartnersTheme.light:
        return 'bg-transparent';
      default:
      case SectionPartnersTheme.normal:
        return 'bg-pale';
    }
  }, [theme]);

  return (
    <section
      className={`${bgColor} py-10 lg:py-20 flex flex-col justify-start items-stretch`}
    >
      <SafeArea>
        <div className="gap-y-12 lg:gap-y-20 flex flex-col justify-start items-stretch">
          <div className="gap-y-7 lg:gap-y-5 flex flex-col justify-start items-stretch">
            <h3 className="text-center text-title-light text-sm lg:text-2xl font-medium">
              พันธมิตรด้านเทคโนโลยีที่ได้รับความไว้วางใจ
            </h3>
            <ul className="gap-6 grid grid-cols-3">
              {vendors.map((vendor) => {
                const { id, name, logo } = vendor;
                const localizedName = name ? name[locale] : '';
                return (
                  <li key={id}>
                    <img
                      className="block"
                      alt={localizedName}
                      title={localizedName}
                      src={logo}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="gap-y-5 flex flex-col justify-start items-stretch">
            <h3 className="text-center text-title-light text-sm lg:text-2xl font-medium">
              พันธมิตรธุรกิจที่ไว้วางใจเรา
            </h3>
            <ul className="gap-6 grid grid-cols-3">
              {clients.map((client) => {
                const { id, name, logo } = client;
                const localizedName = name ? name[locale] : '';
                return (
                  <li key={id}>
                    <img
                      className="block"
                      alt={localizedName}
                      title={localizedName}
                      src={logo}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionPartners;
