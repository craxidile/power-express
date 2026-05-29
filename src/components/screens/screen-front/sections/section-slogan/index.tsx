import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import Nav from '../../../../_commons/nav';
import ScrollStrip from '../../../../_commons/scroll-strip';
import TextLines from '../../../../_commons/text-lines';

const SectionSlogan = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  return (
    <section
      className="relative h-screen lg:min-h-[720px] bg-gray-100 flex flex-col justify-start items-stretch"
      style={{
        background: `url(${p('mock/front/section-slogan/bg.jpg')}) no-repeat center/cover`,
      }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black-a30 backdrop-blur-xs" />
      <Nav />
      <div className="px-[52px] relative z-[1] lg:px-0 flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-stretch">
          <p className="hidden lg:block text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
            <TextLines text={l(locale, localizations, 'front.cta')} />
          </p>
          <p className="lg:hidden text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
            {l(locale, localizations, 'front.cta')}
          </p>
        </div>
        <ScrollStrip text={l(locale, localizations, 'general.slide-more')} />
      </div>
    </section>
  );
};

export default SectionSlogan;
