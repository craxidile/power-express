import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';
import { useVmScreen } from '../../../../../stores/vm-screen';
import SafeArea from '../../../../_commons/safe-area';
import BenefitBox from '../../../../_commons/benefit-box';

import s from './styles.module.css';
import TextLines from '../../../../_commons/text-lines';

const SectionBenefits = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();
  const { benefits = [] } = useVmScreenFront();

  return (
    <section
      className={`py-10 lg:py-[60px] flex flex-col justify-start items-stretch ${s.container}`}
    >
      <SafeArea>
        <div className="flex flex-col justify-start items-stretch">
          <img
            className="block h-12 lg:h-16 self-center"
            alt="Logo"
            src={p('logo-dark.png')}
          />
          <h2 className="block self-center py-4 lg:px-0 lg:pt-6 pb-4 text-sm lg-text-3hxl font-medium text-center">
            <TextLines
              text={l(locale, localizations, 'front.title-benefits')}
            />
          </h2>
          <div className="self-center mb-10 lg:mb-12 bg-sep-green-light w-12 h-1" />
          <ul className="flex flex-col lg:flex-row justify-start items-center lg:items-start lg-items-start">
            {benefits.map((benefit) => {
              const { id } = benefit;
              return (
                <li>
                  <BenefitBox key={id} locale={locale} benefit={benefit} />
                </li>
              );
            })}
          </ul>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionBenefits;
