import {p} from '../../../../../utils/path-utils';
import Nav from "../../../../_commons/nav";
import ScrollStrip from "../../../../_commons/scroll-strip";

const SectionSlogan = () => {
  return (
    <section className="relative h-screen lg:min-h-[900px] bg-gray-100 flex flex-col justify-start items-stretch"
         style={{background: `url(${p('mock/front/section-slogan/bg.jpg')}) no-repeat center/cover`}}>
      <div className="absolute left-0 top-0 w-full h-full bg-black-a30 backdrop-blur-xs" />
      <Nav />
      <div className="px-[52px] lg:px-0 relative z-[1] pt-24 lg:pt-[120px] flex-1 flex flex-col justify-center items-center">
        <p className="block text-4xl lg:text-6xl text-white lg:text-center !leading-[1.2]">
          ขับเคลื่อนธุรกิจของคุณ
          <br className="hidden lg:inline"/>
          ด้วยโซลูชันพลังงานหมุนเวียน
        </p>
        <ScrollStrip text="เลื่อนลงเพื่อดูเพิ่มเติม" />
      </div>
    </section>
  );
}

export default SectionSlogan;
