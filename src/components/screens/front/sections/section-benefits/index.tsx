import SafeArea from '../../../../_commons/safe-area';
import {p} from "../../../../../utils/path-utils";
import BenefitBox from "../../../../_commons/benefit-box";

import s from './styles.module.css';

const SectionBenefits = () => {
  return (
    <section className={`py-10 lg:py-[60px] flex flex-col justify-start items-stretch ${s.container}`}>
      <SafeArea>
        <div className="flex flex-col justify-start items-stretch">
          <img className="block h-12 lg:h-16 self-center" alt="Logo" src={p('logo-dark.png')} />
          <h2 className="block self-center py-4 lg:px-0 lg:pt-6 pb-4 text-sm lg-text-3hxl font-medium">
            5 เหตุผลที่ธุรกิจชั้นนำเลือก Power Express
          </h2>
          <div className="self-center mb-10 lg:mb-12 bg-sep-green-light w-12 h-1" />
          <ul className="flex flex-col lg:flex-row justify-start items-center lg-items-start">
            <li>
              <BenefitBox icon={p('mock/front/section-benefits/ic-bill.svg')} seq={1}
                          title="ประหยัดค่าใช้จ่ายทันที"
                          excerpt="ลดค่าไฟฟ้าของคุณตั้งแต่วันแรกที่เริ่มใช้งาน และช่วยเพิ่มผลกำไรให้กับธุรกิจของคุณ" />
            </li>
            <li>
              <BenefitBox icon={p('mock/front/section-benefits/ic-zero.svg')} seq={2}
                          title="ลงทุน 0 บาท"
                          excerpt="ไม่มีค่าใช้จ่ายล่วงหน้า เราเป็นผู้ลงทุนให้ ส่วนคุณได้รับผลประโยชน์เต็มๆ ง่ายๆ" />
            </li>
            <li>
              <BenefitBox icon={p('mock/front/section-benefits/ic-team.svg')} seq={3}
                          title="ทีมงานมืออาชีพ"
                          excerpt="บริการดูแลและบำรุงรักษาแบบครบวงจรเพื่อให้คุณมั่นใจและไร้กังวล" />
            </li>
            <li>
              <BenefitBox icon={p('mock/front/section-benefits/ic-support.svg')} seq={4}
                          title="การสนับสนุนเต็มรูปแบบ"
                          excerpt="บริการดูแลและบำรุงรักษาแบบครบวงจรเพื่อให้คุณมั่นใจและไร้กังวล" />
            </li>
            <li>
              <BenefitBox icon={p('mock/front/section-benefits/ic-free.svg')} seq={5}
                          title="รับกรรมสิทธิ์ในระบบฟรี"
                          excerpt="เมื่อสิ้นสุดสัญญาคุณจะได้เป็นเจ้าของระบบทั้งหมดโดยสมบูรณ์ เพื่อการใช้พลังงานของคุณเองอย่างยั่งยืน" />
            </li>
          </ul>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionBenefits;
