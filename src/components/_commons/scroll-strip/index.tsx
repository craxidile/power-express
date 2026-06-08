import { PropsWithChildren, useCallback } from 'react';

import { p } from '../../../utils/path-utils';
import { scrollUp100Vh } from '../../../utils/window-utils';

export interface ScrollStripProps {
  text: string;
}

const ScrollStrip = (props: PropsWithChildren<ScrollStripProps>) => {
  const { text } = props;

  const onClick = useCallback(() => {
    console.log('>>scroll_up<<');
    scrollUp100Vh();
  }, []);

  return (
    <button
      className="absolute left-0 bottom-6 lg:bottom-20 w-full h-[104px] flex flex-col justify-start items-center"
      onClick={onClick}
    >
      <span className="text-white text-xs lg:text-xl leading-[1.25] text-white-a70 uppercase">
        {text}
      </span>
      <div className="flex-1 w-px my-2 bg-white-a70" />
      <img
        className="w-6 h-auto"
        src={p('mock/front/section-slogan/arrow-down.svg')}
        alt="More"
      />
    </button>
  );
};

export default ScrollStrip;
