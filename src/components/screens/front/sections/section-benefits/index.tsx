import SafeArea from '../../../../_commons/safe-area';
import {p} from "../../../../../utils/path-utils";
import BenefitBox from "../../../../_commons/benefit-box";

import s from './styles.module.css';

const SectionBenefits = () => {
  return (
    <section className={`py-[60px] flex flex-col justify-start items-stretch ${s.container}`}>
      <SafeArea>
        <div className="flex flex-col justify-start items-stretch">
          <img className="block h-16 self-center" alt="Logo" src={p('logo-dark.png')} />
          <h2 className="block self-center px-0 pt-6 pb-4 text-3hxl font-medium">
            5 เหตุผลที่ธุรกิจชั้นนำเลือก Power Express
          </h2>
          <div className="self-center mb-12 bg-sep-green-light w-12 h-1" />
          <ul className="flex flex-row justify-start items-start">
            <li>
              <BenefitBox />
            </li>
            <li>
              <BenefitBox />
            </li>
            <li>
              <BenefitBox />
            </li>
            <li>
              <BenefitBox />
            </li>
            <li>
              <BenefitBox />
            </li>
          </ul>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionBenefits;
