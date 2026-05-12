import SafeArea from "../../../../_commons/safe-area";
import {p} from "../../../../../utils/path-utils";
import ContactRow from "../../../../_commons/contact-row";

const SectionContact = () => {
  return (
    <div className="py-[80px] flex flex-col justify-start items-stretch"
         style={{background: `url(${p('mock/front/section-contact/bg.png')}) no-repeat center/cover`}}>
      <SafeArea>
        <div className="flex flex-row justify-start items-stretch">
          <div className="box-border p-20 w-full max-w-[718px] bg-white rounded-2xl">
            <h2 className="text-2xl uppercase text-secondary font-medium">
              ติดต่อเรา เพื่อเริ่มประหยัดค่าพลังงานได้ตั้งแต่วันนี้
            </h2>
            <p className="mt-12 text-black-a70 text-xl">
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
            <img className="h-7 mt-20 block" alt="Google Maps"
                 src={p('mock/front/section-contact/google-maps.svg')}/>
          </div>
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionContact;
