import SectionTwoCols from "../../../../sections/section-two-cols";
import {useMemo} from "react";
import ContentTitle from "../../../../_commons/content-title";
import ContentItem from "../../../../_commons/content-item";

const SectionDetails = () => {

  const title = useMemo(() => {
    return (
      <ContentTitle caption="PowerExpress" title="PEX" subtitle="Empowering the Future" />
    );
  }, []);

  const colEnd = useMemo(() => {
    return (
      <ul className="flex flex-col justify-start items-stretch">
        <li>
          <ContentItem title="Established" text="May 12, 2008" />
          <ContentItem title="Registered Capital" text="฿40 Million" />
          <ContentItem title="Headquarters" text="Bangkok, Thailand" />
        </li>
      </ul>
    );
  }, []);

  return (
    <SectionTwoCols title={title} colEnd={colEnd}>
      <p className="text-gray-content text-base lg:text-lg">
        Power Express
        ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่แน่วแน่ในการนำพาธุรกิจและอุตสาหกรรมไทยไปสู่อนาคตแห่งพลังงานที่ยั่งยืน
        พันธกิจของเราขับเคลื่อนด้วยความมุ่งมั่นที่จะสร้างผลกระทบเชิงบวกใน 3 มิติสำคัญ ได้แก่ ผลกำไร (Profit),
        สิ่งแวดล้อม (Planet) และผู้คน (People)
        <br/><br/>
        เราคือพันธมิตรผู้ให้บริการโซลูชันพลังงานแสงอาทิตย์สำหรับภาคธุรกิจและอุตสาหกรรม (C&I) อย่างเต็มรูปแบบ (Full
        Support) โดยมีความเชี่ยวชาญพิเศษด้านสัญญาซื้อขายไฟฟ้าภาคเอกชน (Private PPA) ที่ช่วยให้คุณ
        "ประหยัดค่าใช้จ่ายได้ทันที" ภายใต้โมเดล "ลงทุน 0 บาท" ด้วยทุนจดทะเบียน 40 ล้านบาท
        และประสบการณ์ในอุตสาหกรรมกว่า
        17 ปี เราดูแลครบวงจรตั้งแต่การจัดหาเงินทุน การออกแบบวิศวกรรม ไปจนถึงการบำรุงรักษาเชิงรุก
        เพื่อรับประกันประสิทธิภาพสูงสุดและส่งมอบกรรมสิทธิ์ในระบบทั้งหมดให้แก่พันธมิตรเมื่อสิ้นสุดสัญญา
        เพื่อการเติบโตอย่างยั่งยืนไปพร้อมกับเรา
      </p>
    </SectionTwoCols>
  );
}

export default SectionDetails;
