import { p } from '../../../../../utils/path-utils';
import StatRow, { StatRowTheme } from '../../../../_commons/stat-row';
import StatBox, { StatBoxTheme } from '../../../../_commons/stat-box';

const SectionGrowth = () => {
  return (
    <section className="bg-pale py-20 flex flex-col justify-start items-stretch">
      <div className="w-full max-w-[1466] gap-y-10 px-6 max-auto flex flex-col justify-start items-stretch">
        <h2 className="text-title-light font-medium text-sm lg:text-2xl text-center">
          ศักยภาพและการเติบโต
        </h2>
        <div className="gap-y-16 lg:gap-y-0 lg:gap-x-4 flex flex-col lg:flex-row justify-start items-stretch">
          <div className="gap-y-16 lg:gap-y-20 flex-1 flex-shrink-0 flex flex-col justify-start items-center">
            <ul className="gap-y-16 lg:gap-y-0 mx-auto w-full max-w-[656px] flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start">
              <li>
                <StatBox
                  icon={p('mock/about/section-growth/ic-pin.svg')}
                  value="14"
                  title="โครงการที่เปิดดำเนินการ"
                  theme={StatBoxTheme.secondary}
                />
              </li>
              <li>
                <StatBox
                  icon={p('mock/about/section-growth/ic-watt.svg')}
                  value="5.96"
                  title="กำลังการผลิตติดตั้งรวม 5.96 เมกะวัตต์"
                  theme={StatBoxTheme.primary}
                />
              </li>
            </ul>
            <ul className="mx-auto w-full max-w-[340px] lg:max-w-[528px] gap-y-12 flex flex-col justify-start items-stretch">
              <li>
                <StatRow
                  theme={StatRowTheme.secondary}
                  icon={p('mock/about/section-growth/ic-growth.svg')}
                  value="100%"
                  title="ความสำเร็จในการติดตั้ง"
                  excerpt="ประสิทธิภาพของระบบเป็นไปตามความคาดหมาย"
                />
              </li>
              <li>
                <StatRow
                  theme={StatRowTheme.primary}
                  icon={p('mock/about/section-growth/ic-medal.svg')}
                  value="17+"
                  title="ประสบการณ์กว่า 17 ปี"
                  excerpt="ส่งมอบโซลูชันพลังงานหมุนเวียนอย่างต่อเนื่องตั้งแต่ปี พ.ศ. 2551"
                />
              </li>
              <li>
                <StatRow
                  theme={StatRowTheme.secondary}
                  icon={p('mock/about/section-growth/ic-growth.svg')}
                  value="8,400+"
                  title="ความสำเร็จในการติดตั้ง"
                  excerpt="ประสิทธิภาพของระบบเป็นไปตามความคาดหมาย"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 flex-shrink-0 flex flex-col justify-center items-center">
            <img
              className="w-[404px] h-auto"
              alt="Map"
              src={p('mock/about/section-growth/mock-map.png')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGrowth;
