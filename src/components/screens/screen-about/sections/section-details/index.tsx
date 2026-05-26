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
          <ContentItem title="Established" text="May 12, 2008" />
          <ContentItem title="Registered Capital" text="฿40 Million" />
          <ContentItem title="Headquarters" text="Bangkok, Thailand" />
        </li>
      </ul>
    );
  }, []);

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
