import { useVmScreen } from '../../../../../stores/vm-screen';
import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import SafeArea from '../../../../_commons/safe-area';
import ContactRow from '../../../../_commons/contact-row';
import TextLines from '../../../../_commons/text-lines';

const SectionContact = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  return (
    <div
      className="h-screen lg:h-auto py-10 lg:py-[80px] flex flex-col justify-start items-stretch"
      style={{
        background: `url(${p('mock/front/section-contact/bg.png')}) no-repeat center/cover`,
      }}
    >
      <SafeArea>
        <div className="px-2 lg:px-0 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="box-border px-6 py-8 lg:p-20 w-full max-w-[718px] bg-white rounded-2xl">
            <h2 className="text-sm lg:text-2xl uppercase text-secondary font-medium">
              <TextLines
                text={l(locale, localizations, 'front.title-contact')}
              />
            </h2>
            <p className="mt-4 lg:mt-12 text-black-a70 text-xl">
              <TextLines text={l(locale, localizations, 'front.cta-contact')} />
            </p>
            <ul className="mt-8 gap-y-4 flex flex-col justify-start items-start">
              <li>
                <ContactRow
                  icon={p('mock/front/section-contact/ic-pin.svg')}
                  text={l(locale, localizations, 'contact.address')}
                />
              </li>
              <li>
                <ContactRow
                  isPhone
                  icon={p('mock/front/section-contact/ic-tel.svg')}
                  text={l(locale, localizations, 'contact.tel')}
                />
              </li>
              <li>
                <ContactRow
                  isEmail
                  icon={p('mock/front/section-contact/ic-mail.svg')}
                  text={l(locale, localizations, 'contact.email')}
                />
              </li>
            </ul>
            <a
              className="block border-0"
              target="_blank"
              href="https://www.google.com/maps/place/157+Soi+Ari+Samphan+2,+Phaya+Thai,+Khet+Phaya+Thai,+Krung+Thep+Maha+Nakhon+10400/@13.7725501,100.5333465,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29eae9a746c31:0xc671315ee64cc9da!8m2!3d13.7725449!4d100.5359214!16s%2Fg%2F11snqw6_fl?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D"
              rel="noreferrer"
            >
              <img
                className="hidden lg:block h-7 mt-20"
                alt="Google Maps"
                src={p('mock/front/section-contact/google-maps.svg')}
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-8 right-8 lg:hidden box-border p-4 bg-white rounded-2xl flex flex-col justify-center items-center">
          <img
            className="block h-6"
            alt="Google Maps"
            src={p('mock/front/section-contact/google-maps.svg')}
          />
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionContact;
