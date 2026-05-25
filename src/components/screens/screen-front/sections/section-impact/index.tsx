import { p } from '../../../../../utils/path-utils';

const SectionImpact = () => {
  return (
    <section className="py-10 lg:pt-[240px] lg:pb-[180px] flex flex-col justify-start items-stretch">
      <div className="gap-y-10 lg:gap-y-[120px] w-full max-w-[1328px] px-6 mx-auto flex flex-col justify-start items-stretch">
        <div className="gap-y-16 lg:gap-y-0 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="lg:flex-1 lg:flex-shrink-0 flex flex-col justify-start items-stretch">
            <div className="gap-y-6 lg:gap-y-10 flex flex-col justify-start items-stretch">
              <h6 className="text-title-light text-sm lg:text-2xl font-medium">
                ผลลัพธ์ของเรา
              </h6>
              <h2 className="text-4xl lg:text-5xl font-medium leading-[1.2]">
                ขับเคลื่อนการเติบโต
                <br />
                อย่างยั่งยืนไปทั่วประเทศไทย
              </h2>
              <p className="text-lg text-gray-excerpt">
                "ด้วยผลงานกว่า 14 โครงการที่ผลิตพลังงานสะอาดรวม 5.96 เมกะวัตต์
                นี่เป็นเพียงจุดเริ่มต้นของเราเท่านั้น
                เพราะทุกโครงการคือก้าวสำคัญ
                ที่นำเราไปสู่อนาคตแห่งพลังงานหมุนเวียน"
              </p>
              <div className="mt-14 lg:mt-0 gap-x-11 lg:gap-x-0 lg:max-w-[528px] flex flex-row justify-start items-start">
                <div className="gap-y-2 lg:gap-y-6 flex-1 flex flex-col justify-start items-start">
                  <div className="w-12 h-1 bg-green-tag" />
                  <span className="mt-2 lg:mt-0 block text-6xl lg:text-8xl font-medium">
                    14
                  </span>
                  <span className="block text-sm lg:text-base text-secondary">
                    โครงการที่เปิดดำเนินการ
                  </span>
                </div>
                <div className="gap-y-2 lg:gap-y-6 flex-1 flex flex-col justify-start items-start">
                  <div className="w-12 h-1 bg-cta-primary" />
                  <span className="mt-2 lg:mt-0 block text-6xl lg:text-8xl font-medium">
                    5.96
                  </span>
                  <span className="block text-sm lg:text-base text-secondary">
                    5.96 เมกะวัตต์
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-1 lg:flex-shrink-0 flex flex-col justify-center items-center">
            <img
              className="w-full lg:w-[310px]"
              alt="Map"
              src={p('mock/front/section-impact/mock-map.png')}
            />
          </div>
        </div>
        <span className="block text-lg lg:text-2xl text-cta-primary font-semibold text-center">
          และจะเพิ่มขึ้นอีกในเร็วๆ นี้!
        </span>
      </div>
    </section>
  );
};

export default SectionImpact;
