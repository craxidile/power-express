import {p} from "../../../utils/path-utils";
import {PropsWithChildren} from "react";

export interface ScrollStripProps {
  text: string;
}

const ScrollStrip = (props: PropsWithChildren<ScrollStripProps>) => {
  const { text } = props;
  return (
    <div className="absolute left-0 bottom-6 lg:bottom-20 w-full h-[104px] flex flex-col justify-start items-center">
          <span className="text-white text-xs lg:text-xl leading-[1.25] text-white-a70">{text}</span>
      <div className="flex-1 w-px my-2 bg-white-a70" />
      <img className="w-6 h-auto" src={p('mock/front/section-slogan/arrow-down.svg')} alt="More" />
    </div>
  );
};

export default ScrollStrip;
