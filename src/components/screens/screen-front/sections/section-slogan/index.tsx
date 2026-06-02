import { l } from '../../../../../utils/localization-utils';
import { m } from '../../../../../utils/media-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';
import Nav from '../../../../_commons/nav';
import ScrollStrip from '../../../../_commons/scroll-strip';
import TextLines from '../../../../_commons/text-lines';
import Loading from '../../../../_commons/loading';

const SectionSlogan = () => {
  const { locale = 'th', localizations = [], media } = useVmScreen();
  const { loading } = useVmScreenFront();

  return (
    <section
      className="relative h-screen min-h-svh lg:min-h-[720px] bg-gray-100 flex flex-col justify-start items-stretch transition-all delay-700"
      style={{
        background: `#ccc url(${m(media, 'front.banner-slogan')}) no-repeat center/cover`,
      }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black-a30 backdrop-blur-xs" />
      <Nav />
      <div className="px-[52px] relative z-[1] lg:px-0 flex-1 flex flex-col justify-center items-center">
        {!loading ? (
          <>
            <div className="flex flex-col justify-start items-stretch">
              <p className="hidden lg:block text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
                <TextLines text={l(locale, localizations, 'front.cta')} />
              </p>
              <p className="lg:hidden text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
                {l(locale, localizations, 'front.cta')}
              </p>
            </div>
            <ScrollStrip
              text={l(locale, localizations, 'general.slide-more')}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default SectionSlogan;
