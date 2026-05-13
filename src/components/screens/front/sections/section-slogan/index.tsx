import {p} from '../../../../../utils/path-utils';
import Nav from "../../../../_commons/nav";

const SectionSlogan = () => {
  return (
    <section className="relative h-screen lg:h-[1020px] bg-gray-100 flex flex-col justify-start items-stretch"
         style={{background: `url(${p('mock/front/section-slogan/bg.jpg')}) no-repeat center/cover`}}>
      <div className="absolute left-0 top-0 w-full h-full bg-black-a30 backdrop-blur-xs" />
      <Nav />
      <div className="px-[52px] lg:px-0 relative z-[1] pt-24 lg:pt-[120px] flex-1 flex flex-col justify-center items-center">
        <p className="block text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
          ขับเคลื่อนธุรกิจของคุณ
          <br className="hidden lg:inline"/>
          ด้วยโซลูชันพลังงานหมุนเวียน
        </p>
        <div className="absolute left-0 bottom-[80px] w-full h-[104px] flex flex-col justify-start items-center">
          <span className="text-white text-xs lg:text-xl leading-[1.25] text-white-a70">
            เลื่อนลงเพื่อดูเพิ่มเติม
          </span>
          <div className="flex-1 w-px my-2 bg-white-a70" />
          <img className="w-6 h-auto" src={p('mock/front/section-slogan/arrow-down.svg')} alt="More" />
        </div>
      </div>
    </section>
  );
}

export default SectionSlogan;
