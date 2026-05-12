import {p} from "../../../../../utils/path-utils";

const SectionImpact = () => {
  return (
    <section className="pt-[240px] pb-[180px] flex flex-col justify-start items-stretch">
      <div className="gap-y-[120px] w-[1328px] px-6 mx-auto flex flex-col justify-start items-stretch">
        <div className="flex flex-row justify-start items-stretch">
          <div className="flex-1 flex-shrink-0 flex flex-col justify-start items-stretch">
            <div className="gap-y-10 flex flex-col justify-start items-stretch">
              <h6 className="text-title-light text-2xl font-medium">ผลลัพธ์ของเรา</h6>
              <h2 className="text-5xl font-medium leading-[1.2]">
                ขับเคลื่อนการเติบโต
                <br/>
                อย่างยั่งยืนไปทั่วประเทศไทย
              </h2>
              <p className="text-lg text-excerpt">
                "ด้วยผลงานกว่า 14 โครงการที่ผลิตพลังงานสะอาดรวม 5.96 เมกะวัตต์
                <br/>
                นี่เป็นเพียงจุดเริ่มต้นของเราเท่านั้น เพราะทุกโครงการคือก้าวสำคัญ
                <br/>
                ที่นำเราไปสู่อนาคตแห่งพลังงานหมุนเวียน"
              </p>
              <div className="max-w-[528px] flex flex-row justify-start items-stretch">
                <div className="gap-y-6 flex-1 flex flex-col justify-start items-start">
                  <div className="w-12 h-1 bg-green-tag" />
                  <span className="block text-8xl font-medium">14</span>
                  <span className="block text-base text-secondary">โครงการที่เปิดดำเนินการ</span>
                </div>
                <div className="gap-y-6 flex-1 flex flex-col justify-start items-start">
                  <div className="w-12 h-1 bg-cta-primary" />
                  <span className="block text-8xl font-medium">5.96</span>
                  <span className="block text-base text-secondary">5.96 เมกะวัตต์</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-shrink-0 flex flex-col justify-center items-center">
            <img className="w-[310px]" alt="Map" src={p('mock/front/section-impact/mock-map.png')}/>
          </div>
        </div>
        <span className="block text-2xl text-cta-primary font-semibold text-center">
          และจะเพิ่มขึ้นอีกในเร็วๆ นี้!
        </span>
      </div>
    </section>
  )
};

export default SectionImpact;
