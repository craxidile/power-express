import { Link } from 'react-router-dom';

import { l } from '../../../utils/localization-utils';
import { m } from '../../../utils/media-utils';
import { randomWithDigits } from '../../../utils/number-utils';
import { MenuItem } from '../../../models/menu';
import { useVmScreen } from '../../../stores/vm-screen';
import { useMemo } from 'react';
import SafeArea from '../safe-area';

const Footer = () => {
  const {
    locale = 'th',
    localizations = [],
    footerMenu,
    contacts,
    media,
  } = useVmScreen();

  const footerMenuItems = useMemo((): MenuItem[] => {
    if (!footerMenu) return [];
    const { items } = footerMenu;
    return items ?? [];
  }, [footerMenu]);

  const socialContacts = useMemo(() => {
    if (!contacts) return [];
    const otherTypes = ['address', 'tel', 'email', 'maps'];
    return contacts.filter((c) => !otherTypes.includes(c.type));
  }, [contacts]);

  return (
    <footer className="bg-gray-footer pt-16 lg:pb-0 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-6 flex flex-col justify-start items-stretch">
          <div className="pb-10 lg:pb-0 gap-y-6 lg:gap-y-0 lg:gap-x-10 flex flex-col lg:flex-row justify-start items-stretch">
            <Link to={`/${locale}`}>
              <img
                className="block mx-auto lg:mx-0 w-full max-w-80 lg:w-auto lg:max-w-none lg:h-[106px]"
                alt="Logo"
                src={m(media, 'general.logo-footer')}
              />
            </Link>
            <div className="relative flex-1 flex flex-col justify-center items-center">
              <div className="gap-y-3 w-full lg:max-w-[800px] lg:pt-4 lg:pb-9 flex flex-col justify-start items-center lg:items-stretch">
                <span className="block text-lime text-base font-medium">
                  Menu
                </span>
                <ul className="gap-y-4 lg:gap-3 flex flex-col lg:flex-row justify-start items-center lg:items-start flex-wrap">
                  {footerMenuItems.map((menuItem) => {
                    const { id, title, url } = menuItem;
                    const localizedTitle = title[locale];
                    return (
                      <li key={id} className="flex-1 flex-shrink-0">
                        <Link
                          to={`/${locale}/${url.replace(/\{\{random}}/g, String(randomWithDigits(8)))}`}
                        >
                          <span className="text-sm text-white whitespace-nowrap">
                            {localizedTitle}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="h-px bg-white-a10 lg:hidden" />
            <div className="gap-y-4 lg:w-[164px] flex flex-col justify-start items-center lg:items-stretch">
              <span className="text-lime text-base font-medium">Follow us</span>
              <div className="gap-x-4 flex flex-row justify-start items-stretch">
                {socialContacts.map((contact) => {
                  const { id, icon, url, text } = contact;
                  return (
                    <a
                      key={id}
                      target="_blank"
                      href={url ?? '/'}
                      rel="noreferrer"
                    >
                      <div className="rounded-full bg-white-a10 w-10 h-10 flex flex-col justify-center items-center">
                        <img
                          className="h-5 w-auto"
                          alt={text[locale]}
                          src={icon}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-start items-stretch border-t border-t-white-a20">
            <span className="text-white text-sm text-center">
              © 2026 Power Express.{' '}
              {l(locale, localizations, 'general.copyrights')}
            </span>
          </div>
        </div>
      </SafeArea>
    </footer>
  );
};

export default Footer;
