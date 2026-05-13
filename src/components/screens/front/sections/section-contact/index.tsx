import SafeArea from "../../../../_commons/safe-area";
import {p} from "../../../../../utils/path-utils";
import ContactRow from "../../../../_commons/contact-row";

const SectionContact = () => {
  return (
    <div className="h-screen lg:h-auto py-10 lg:py-[80px] flex flex-col justify-start items-stretch"
         style={{background: `url(${p('mock/front/section-contact/bg.png')}) no-repeat center/cover`}}>
      <SafeArea>
        <div className="px-2 lg:px-0 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="box-border px-6 py-8 lg:p-20 w-full max-w-[718px] bg-white rounded-2xl">
            <h2 className="text-sm lg:text-2xl uppercase text-secondary font-medium">
              ติดต่อเรา เพื่อเริ่มประหยัดค่าพลังงานได้ตั้งแต่วันนี้
            </h2>
            <p className="mt-4 lg:mt-12 text-black-a70 text-xl">
              ขับเคลื่อนธุรกิจของคุณ
              <br/>
              ด้วยโซลูชันพลังงานหมุนเวียนที่ยั่งยืน
            </p>
            <ul className="mt-8 gap-y-4 flex flex-col justify-start items-start">
              <li>
                <ContactRow icon={p('mock/front/section-contact/ic-pin.svg')}
                            text="157/9 ซอยอารีย์สัมพันธ์ 2 ถนนพหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400"/>
              </li>
              <li>
                <ContactRow isPhone icon={p('mock/front/section-contact/ic-tel.svg')} text="082-096-6595"/>
              </li>
              <li>
                <ContactRow isEmail icon={p('mock/front/section-contact/ic-mail.svg')}
                            text="admin@powerexpress1980.com"/>
              </li>
            </ul>
            <img className="hidden lg:block h-7 mt-20" alt="Google Maps"
                 src={p('mock/front/section-contact/google-maps.svg')}/>
          </div>
        </div>
        <div className="absolute bottom-0 left-8 right-8 lg:hidden box-border p-4 bg-white rounded-2xl flex flex-col justify-center items-center">
          <img className="block h-6 " alt="Google Maps" src={p('mock/front/section-contact/google-maps.svg')}/>
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionContact;
