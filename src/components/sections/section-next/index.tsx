import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { p } from '../../../utils/path-utils';
import SafeArea from '../../_commons/safe-area';

export interface SectionNextProps {
  url: string;
  text: string;
}

const SectionNext = (props: PropsWithChildren<SectionNextProps>) => {
  const { url, text } = props;

  return (
    <div className="pb-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="mt-4 lg:mt-0 gap-x-4 pt-16 flex flex-row justify-start items-center border-t border-t-sep-smoke">
          <Link to={url}>
            <span className="text-title-pale text-base uppercase">{text}</span>
          </Link>
          <Link to={url}>
            <img
              className="h-6 w-auto"
              alt="Next"
              src={p('mock/project/section-details/ic-next.svg')}
            />
          </Link>
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionNext;
