import {p} from "../../../utils/path-utils";
import {PropsWithChildren} from "react";

export interface BenefitBoxProps {
  icon: string;
  seq: number;
  title: string;
  excerpt: string;
}

const BenefitBox = (props: PropsWithChildren<BenefitBoxProps>) => {
  const { icon, seq, title, excerpt } = props;
  return (
    <div className="pt-6 pb-10 flex flex-col justify-start items-stretch">
      <div className="relative self-center mb-4 rounded-full w-[120px] h-[120px] box-border flex flec-col justify-center items-center border border-l-gray-light shadow-[0_0_0_4px_rgba(123,206,67,.1)]">
        <img alt="Icon" src={icon} />
        <div className="z-[1] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex flex-col justify-center items-center bg-green-bullet">
          <span className="text-white text-base font-medium">{seq}</span>
        </div>
      </div>
      <span className="text-xl lg:text-2hxl font-medium text-center">{title}</span>
      <div className="self-center my-4 h-1 w-12 bg-sep-green" />
      <p className="block mx-auto w-full max-w-[260px] lg:max-w-[280px] text-sm lg:text-xl text-center">{excerpt}</p>
    </div>
  );
}

export default BenefitBox;
