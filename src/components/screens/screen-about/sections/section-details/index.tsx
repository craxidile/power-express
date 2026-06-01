import { useMemo } from 'react';

import { l } from '../../../../../utils/localization-utils';
import { useVmScreen } from '../../../../../stores/vm-screen';
import SectionTwoCols from '../../../../sections/section-two-cols';
import ContentTitle from '../../../../_commons/content-title';
import ContentItem from '../../../../_commons/content-item';
import TextLines from '../../../../_commons/text-lines';

const SectionDetails = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();

  const title = useMemo(() => {
    return (
      <ContentTitle
        caption="PowerExpress"
        title="PEX"
        subtitle="Empowering the Future"
      />
    );
  }, []);

  const colEnd = useMemo(() => {
    return (
      <ul className="flex flex-col justify-start items-stretch">
        <li>
          <ContentItem
            title={l(locale, localizations, 'about.caption-established')}
            text={l(locale, localizations, 'about.text-established')}
          />
          <ContentItem
            title={l(locale, localizations, 'about.caption-capital')}
            text={l(locale, localizations, 'about.text-capital')}
          />
          <ContentItem
            title={l(locale, localizations, 'about.caption-headquarter')}
            text={l(locale, localizations, 'about.text-headquarter')}
          />
        </li>
      </ul>
    );
  }, [locale, localizations]);

  return (
    <div className="py-20 flex flex-col justify-start items-stretch">
      <SectionTwoCols title={title} colEnd={colEnd}>
        <p className="text-gray-content text-base lg:text-lg">
          <TextLines text={l(locale, localizations, 'about.story')} />
        </p>
      </SectionTwoCols>
    </div>
  );
};

export default SectionDetails;
