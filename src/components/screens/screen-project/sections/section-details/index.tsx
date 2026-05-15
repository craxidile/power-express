import {useMemo} from "react";
import SectionTwoCols from "../../../../sections/section-two-cols";
import ContentTitle from "../../../../_commons/content-title";
import ContentItem from "../../../../_commons/content-item";
import {p} from "../../../../../utils/path-utils";
import PhotoGallery from "../../../../_commons/photo-gallery";
import {Link} from "react-router-dom";

const SectionDetails = () => {
  const title = useMemo(() => {
    return (
      <ContentTitle caption="Project" title="Blue Ribbon Marketing"
                    subtitle="400 kW Solar Array"/>
    );
  }, []);

  const colEnd = useMemo(() => {
    return (
      <div className="flex flex-col justify-start items-stretch">
        <ul className="flex flex-col justify-start items-stretch">
          <li>
            <ContentItem isCta title="กำลังการผลิต" text="200.64 kW"/>
            <ContentItem title="สถานที่" text="นครปฐม, ประเทศไทย"/>
            <ContentItem title="ลูกค้า" text="บริษัท บลูริบบอน มาร์เก็ตติ้ง จำกัด"/>
            <ContentItem title="ปีที่แล้วเสร็จ" text="2023"/>
          </li>
        </ul>
        <div className="gap-y-4 flex flex-col justify-start items-stretch">
          <div className="p-10 gap-x-6 flex flex-row justify-center items-center rounded-3xl bg-pale">
            <div
              className="w-12 h-12 lg:w-[100px] lg:h-[100px] flex flex-col justify-center items-center bg-white rounded-full">
              <img className="w-6 lg:w-10 h-auto" alt="Energy" src={p('mock/project/section-details/ic-energy.svg')}/>
            </div>
            <div className="gap-y-2 lg:gap-y-4 lg:min-w-60 flex flex-col justify-start items-start">
              <span className="text-title-pale text-sm lg:text-base">
                Energy Production
              </span>
              <div className="gap-x-2 inline-flex flex-row justify-start items-end">
                <span className="text-4xl lg:text-5xl font-medium leading-none">560,000</span>
                <span className="text-sm lg:text-base text-gray-dark">kWh</span>
              </div>
            </div>
          </div>
          <div className="p-10 gap-y-4 flex flex-col justify-start items-stretch rounded-3xl bg-pale">
            <p className="text-base lg:text-2xl text-title-pale text-center">
              Equivalent
              <br/>
              Trees Planted
            </p>
            <span className="text-center text-4xl lg:text-5xl font-medium leading-none">363</span>
            <img alt="Environment" src={p('mock/project/section-details/environment.png')}/>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <div className="pt-20 pb-16 flex flex-col justify-start items-stretch">
      <SectionTwoCols title={title} colEnd={colEnd}>
        <div className="gap-y-16 flex flex-col flex-start items-stretch">
          <p className="text-gray-content text-base lg:text-lg">
            การติดตั้งโซลาร์รูฟท็อปขนาดกลางบนโรงงานผลิตของเล่นส่งออกต่างประเทศ
            เพื่อตอบโจทย์การใช้พลังงานสะอาดในกระบวนการผลิตเพื่อลดค่าใช้จ่ายในส่วนของค่าไฟฟ้า ลดผลกระทบโลกร้อน
            และในขณะเดียวกันช่วยเรื่องบรรเทาภาษีคาร์บอนที่คาดว่าจะเริ่มดำเนินการในต่างประเทศ
            โดยใช้แผ่นโซลาร์ที่มีประสิทธิภาพสูงสุด (Tier 1) และใช้อินเวอร์เตอร์ยี่ห้อหัวเว่ย
          </p>
          <PhotoGallery photos={[
            p('mock/project/section-details/mock-photo-01.jpg'),
            p('mock/project/section-details/mock-photo-02.jpg'),
            p('mock/project/section-details/mock-photo-03.jpg'),
            p('mock/project/section-details/mock-photo-04.jpg'),
            p('mock/project/section-details/mock-photo-04.jpg'),
          ]}/>
        </div>
      </SectionTwoCols>
    </div>
  );
};

export default SectionDetails;
