import SafeArea from "../../../../_commons/safe-area";
import {p} from "../../../../../utils/path-utils";

const SectionPartners = () => {
  return (
    <section className="bg-pale py-10 lg:py-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-12 lg:gap-y-20 flex flex-col justify-start items-stretch">
          <div className="gap-y-7 lg:gap-y-5 flex flex-col justify-start items-stretch">
            <h3 className="text-center text-title-light text-sm lg:text-2xl font-medium">
              พันธมิตรด้านเทคโนโลยีที่ได้รับความไว้วางใจ
            </h3>
            <ul className="gap-6 grid grid-cols-3">
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-01.png')} />
              </li>
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-02.png')} />
              </li>
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-03.png')} />
              </li>
            </ul>
          </div>
          <div className="gap-y-5 flex flex-col justify-start items-stretch">
            <h3 className="text-center text-title-light text-sm lg:text-2xl font-medium">
              พันธมิตรธุรกิจที่ไว้วางใจเรา
            </h3>
            <ul className="gap-6 grid grid-cols-3">
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-04.png')} />
              </li>
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-05.png')} />
              </li>
              <li>
                <img className="block" alt="Logo" src={p('mock/front/section-partners/mock-partner-06.png')} />
              </li>
            </ul>
          </div>
        </div>
      </SafeArea>
    </section>
  );

};

export default SectionPartners;
