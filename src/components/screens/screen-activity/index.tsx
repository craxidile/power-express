import SafeArea from "../../_commons/safe-area";
import ActivityBoxDetails, {ActivityBoxDetailsMode} from "../../_commons/activity-box-details";
import LayoutStandard from "../../layouts/layout-standard";
import MiniActivityBox from "../../_commons/mini-activity-box";
import SectionNext from "../../sections/section-next";
import {p} from "../../../utils/path-utils";

const ScreenActivity = () => {
  return (
    <LayoutStandard>
      <section className="pt-10 pb-16 lg:py-20 tb-16 flex flex-col justify-start items-stretch">
        <SafeArea>
          <div className="gap-y-16 flex flex-col justify-start items-stretch">
            <div className="gap-y-12 lg:gap-y-16 flex flex-col justify-start items-stretch">
              <ActivityBoxDetails tag="News" type="CSR" publishedAt={new Date()}
                                  title="Power Express Marks Milestone with Solar PPA Launch for PSP [SET], Reinforcing Proven Trust from Leading Public Corporations"
                                  mode={ActivityBoxDetailsMode.title}/>
              <div className="h-[644px]"
                   style={{background: `url(${p('mock/activity/mock-banner.jpg')}) no-repeat center/cover`}}>
              </div>
            </div>
            <div className="gap-y-16 lg:gap-y-0 lg:gap-x-16 flex flex-col lg:flex-row justify-start items-start">
              <div className="flex-1 flex flex-col justify-start items-stretch">
                <p className="text-gray-content text-base lg:text-lg">
                  [กรุงเทพมหานคร] – บริษัท พาวเวอร์ เอ็กซ์เพรส 1980 จำกัด (PEX)
                  ประกาศความสำเร็จครั้งสำคัญในการเปิดดำเนินการเชิงพาณิชย์ (COD)
                  โครงการระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์ร่วมกับ บริษัท พี.เอส.พี. สเปเชียลตี้ส์ จำกัด (มหาชน) หรือ PSP
                  ผู้นำในกลุ่มอุตสาหกรรมในตลาดหลักทรัพย์แห่งประเทศไทย โดยความร่วมมือในครั้งนี้ PSP
                  ได้มอบความไว้วางใจเลือก Power Express ให้เป็นผู้ดำเนินการโซลูชันพลังงานสะอาดอย่างครบวงจร
                  เพื่อยกระดับประสิทธิภาพการใช้พลังงานในระดับอุตสาหกรรม
                  <br/><br/>
                  โครงการนี้เป็นหนึ่งในโครงการเชิงกลยุทธ์ที่สำคัญในพอร์ตโฟลิโอของ Power Express
                  ซึ่งมีกำลังการผลิตติดตั้งรวม [ระบุตัวเลข] kWp โดยจะช่วยลดต้นทุนพลังงานและสร้างผลกำไร (Profit)
                  ให้แก่พันธมิตรได้ทันทีภายใต้โมเดล Private PPA (Zero Investment) ด้วยทุนจดทะเบียน 40 ล้านบาท
                  และประสบการณ์กว่า 17 ปี เรายังคงมุ่งเน้นการส่งมอบมาตรฐานวิศวกรรมที่ยอดเยี่ยม
                  เพื่อสร้างความมั่นคงด้านพลังงานและความยั่งยืนให้กับภาคธุรกิจทั่วประเทศไทยอย่างต่อเนื่อง
                </p>
              </div>
              <div className="gap-y-6 flex-1 lg:max-w-80 flex flex-col justify-start items-stretch">
                <h3 className="text-title-pale text-base lg:text-2xl uppercase">กิจกรรมอื่นๆ</h3>
                <ul className="gap-y-6 flex flex-col justify-start items-stretch">
                  <li>
                    <MiniActivityBox image={p('mock/front/section-activities/mock-activity-01.jpg')}
                                 tag="News" publishedAt={new Date()}
                                 title="PEX Expands Solar Capacity in Central Thailand" />
                  </li>
                  <li>
                    <MiniActivityBox image={p('mock/front/section-activities/mock-activity-02.jpg')}
                                 tag="Sustainability" publishedAt={new Date()}
                                 title="Annual CSR: Green Energy for Schools" />
                  </li>
                  <li>
                    <MiniActivityBox image={p('mock/front/section-activities/mock-activity-03.jpg')}
                                 tag="Event" publishedAt={new Date()}
                                 title="Thailand Green Excellence Award 2025" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SafeArea>
      </section>
      <SectionNext />
    </LayoutStandard>
  );
};

export default ScreenActivity;
