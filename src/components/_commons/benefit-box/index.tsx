import {p} from "../../../utils/path-utils";

const BenefitBox = () => {
  return (
    <div className="pt-6 pb-10 flex flex-col justify-start items-stretch">
      <div className="relative self-center mb-4 rounded-full w-[120px] h-[120px] box-border flex flec-col justify-center items-center border border-l-gray-light shadow-[0_0_0_4px_rgba(123,206,67,.1)]">
        <img alt="Icon" src={p('mock/front/section-benefits/ic-bill.svg')} />
        <div className="z-[1] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex flex-col justify-center items-center bg-green-bullet">
          <span className="text-white text-base font-medium">1</span>
        </div>
      </div>
      <span className="text-2hxl font-medium text-center">
        ประหยัดค่าใช้จ่าย
      </span>
      <div className="self-center my-4 h-1 w-12 bg-sep-green" />
      <p className="block text-xl text-center">
        ลดค่าไฟฟ้าของคุณตั้งแต่วันแรกที่เริ่มใช้งาน และช่วยเพิ่มผลกำไรให้กับธุรกิจของคุณ
      </p>
    </div>
  );
}

export default BenefitBox;
