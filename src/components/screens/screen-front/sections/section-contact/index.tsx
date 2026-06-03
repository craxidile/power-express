import { useMemo } from 'react';

import { p } from '../../../../../utils/path-utils';
import { l } from '../../../../../utils/localization-utils';
import { m } from '../../../../../utils/media-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import SafeArea from '../../../../_commons/safe-area';
import ContactRow from '../../../../_commons/contact-row';
import TextLines from '../../../../_commons/text-lines';

const SectionContact = () => {
  const { locale = 'th', localizations = [], media } = useVmScreen();

  const { contacts } = useVmScreen();

  const addressContact = useMemo(() => {
    if (!contacts) return null;
    return contacts.find((c) => c.type === 'address') ?? null;
  }, [contacts]);

  const telContact = useMemo(() => {
    if (!contacts) return null;
    return contacts.find((c) => c.type === 'tel') ?? null;
  }, [contacts]);

  const emailContact = useMemo(() => {
    if (!contacts) return null;
    return contacts.find((c) => c.type === 'email') ?? null;
  }, [contacts]);

  const mapsContact = useMemo(() => {
    if (!contacts) return null;
    return contacts.find((c) => c.type === 'maps') ?? null;
  }, [contacts]);

  const mapUrl = useMemo(() => mapsContact?.url ?? null, [mapsContact]);
  const mapText = useMemo(
    () => (mapsContact?.text ? mapsContact.text[locale] : null),
    [locale, mapsContact]
  );

  return (
    <div
      className="h-screen lg:h-auto py-10 lg:py-[80px] flex flex-col justify-start items-stretch"
      style={{
        background: `url(${m(media, 'front.banner-contact')}) no-repeat center/cover`,
      }}
    >
      <SafeArea>
        <div
          id="contact"
          className="px-2 lg:px-0 flex flex-col lg:flex-row justify-start items-stretch"
        >
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
              {addressContact && (
                <li>
                  <ContactRow
                    icon={addressContact.icon}
                    text={addressContact.text[locale]}
                  />
                </li>
              )}
              {telContact && (
                <li>
                  <ContactRow
                    icon={telContact.icon}
                    text={telContact.text[locale]}
                    isPhone
                  />
                </li>
              )}
              {emailContact && (
                <li>
                  <ContactRow
                    icon={emailContact.icon}
                    text={emailContact.text[locale]}
                    isEmail
                  />
                </li>
              )}
            </ul>
            <a
              className="hidden lg:flex h-7 mt-20 gap-x-2  border-0 flex-row justify-start items-center"
              target="_blank"
              href={mapUrl ?? '/'}
              rel="noreferrer"
            >
              <span className="text-blue-map text-lg font-medium underline">
                {mapText}
              </span>
              <img
                alt="Maps"
                src={p('mock/front/section-contact/ic-map-link.svg')}
              />
            </a>
          </div>
        </div>
        {mapUrl && (
          <a
            className="p-4 absolute bottom-0 left-8 right-8 lg:hidden box-border bg-white rounded-2xl gap-x-2 flex flex-row justify-center items-center"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-blue-map text-base font-medium underline">
              {mapText}
            </span>
            <img
              alt="Maps"
              src={p('mock/front/section-contact/ic-map-link.svg')}
            />
          </a>
        )}
      </SafeArea>
    </div>
  );
};

export default SectionContact;
