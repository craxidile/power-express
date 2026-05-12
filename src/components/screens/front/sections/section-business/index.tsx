import {p} from "../../../../../utils/path-utils";

const SectionBusiness = () => {
  return (
    <section className="relative h-[1020px] bg-gray-100 flex flex-col justify-start items-stretch"
             style={{background: `url(${p('mock/front/section-business/bg.jpg')}) no-repeat center/cover`}}>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-black" />
      <div className="z-[1] relative mx-auto h-full w-full max-w-[932px] px-6 pt-[160px] pb-[80px] flex flex-col justify-start items-stretch">
        <span className="text-center text-white text-2xl font-medium">ธุรกิจของเรา</span>
        <div className="flex-1" />
        <div className="mb-16 gap-y-5 flex flex-col justify-start items-stretch">
          <div className="self-center w-[100px] h-[100px] rounded-full bg-white-a50 flex flex-col justify-center items-center">
            <img className="block" alt="Icon" src={p('mock/front/section-business/ic-sun.svg')} />
          </div>
          <h2 className="m-0 p-0 leading-none text-white font-medium text-4hxl text-center">
            พลังงานแสงอาทิตย์
          </h2>
          <span className="text-base font-medium text-cta-primary text-center">
            สำหรับภาคธุรกิจและอุตสาหกรรม
          </span>
          <p className="text-base text-white text-center">
            บริการติดตั้งโซลาร์เซลล์เต็มรูปแบบสำหรับภาคธุรกิจและอุตสาหกรรม
            <br/>
            มุ่งเน้นการเพิ่มประสิทธิภาพพลังงานและความคุ้มค่าในการลงทุน
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBusiness;
