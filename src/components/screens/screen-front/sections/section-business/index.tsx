import {p} from "../../../../../utils/path-utils";
import s from './styles.module.css';

const SectionBusiness = () => {
  return (
    <section className="relative h-screen lg:min-h-[900px] bg-gray-100 flex flex-col justify-start items-stretch"
             style={{background: `url(${p('mock/front/section-business/bg.jpg')}) no-repeat center/cover`}}>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-black" />
      <div className="z-[1] relative mx-auto h-full w-full max-w-[932px] px-6 py-10 lg:pt-[160px] lg:pb-[80px] flex flex-col justify-start items-stretch">
        <h2 className="text-center text-white text-sm lg:text-2xl font-medium">ธุรกิจของเรา</h2>
        <div className="flex-1" />
        <div className="mb-16 gap-y-5 flex flex-col justify-start items-stretch">
          <div className={`self-center w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full bg-white-a50 flex flex-col justify-center items-center ${s.glass}`}>
            <img className="block w-8 h-auto lg:w-10" alt="Icon" src={p('mock/front/section-business/ic-sun.svg')} />
          </div>
          <h3 className="m-0 p-0 leading-none text-white font-medium text-3xl lg:text-4hxl text-center">
            พลังงานแสงอาทิตย์
          </h3>
          <span className="text-sm lg:text-base font-medium text-cta-primary text-center">
            สำหรับภาคธุรกิจและอุตสาหกรรม
          </span>
          <p className="text-base text-white text-center">
            บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม
            มุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBusiness;
