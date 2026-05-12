import {p} from '../../../../../utils/path-utils';
import Nav from "../../../../_commons/nav";

const SectionSlogan = () => {
  return (
    <div className="relative h-[1020px] bg-gray-100 flex flex-col justify-start items-stretch"
         style={{background: `url(${p('mock/front/section-slogan/bg.jpg')}) no-repeat center/cover`}}>
      <div className="absolute left-0 top-0 w-full h-full bg-black-a30 backdrop-blur-xs" />
      <Nav />
      <div className="relative z-[1] pt-[120px] flex-1 flex flex-col justify-center items-center">
        <p className="text-6xl text-white text-center leading-[1.1719]">
          ขับเคลื่อนธุรกิจของคุณ
          <br/>
          ด้วยโซลูชันพลังงานหมุนเวียน
        </p>
        <div className="absolute left-0 bottom-[80px] w-full h-[104px] flex flex-col justify-start items-center">
          <span className="text-white text-xl leading-[1.25] text-white-a70">
            เลื่อนลงเพื่อดูเพิ่มเติม
          </span>
          <div className="flex-1 w-px my-2 bg-white-a70" />
          <img className="w-6" src={p('mock/front/section-slogan/arrow-down.svg')} alt="More" />
        </div>
      </div>
    </div>
  );
}

export default SectionSlogan;
