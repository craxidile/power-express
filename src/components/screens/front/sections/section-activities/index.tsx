import SafeArea from "../../../../_commons/safe-area";
import ActivityBox from "../../../../_commons/activity-box";
import {p} from "../../../../../utils/path-utils";

const SectionActivities = () => {
  return (
    <div className="py-20 bg-pale flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-2xl font-medium">ข่าวสารและกิจกรรมล่าสุด</h2>
          <ul className="gap-x-12 gap-y-20 grid grid-cols-3">
            <li>
              <ActivityBox image={p('mock/front/section-activities/mock-activity-01.jpg')}
                           tag="News" type="CSR" publishedAt={new Date()}
                           title="PEX Expands Solar Capacity in Central Thailand"
                           excerpt="PowerExpress1980 announces new 2.5 MW installation project in Ayutthaya province, furthering commitment to renewable energy expansion across the region."/>
            </li>
            <li>
              <ActivityBox image={p('mock/front/section-activities/mock-activity-02.jpg')}
                           tag="Sustainability" type="CSR" publishedAt={new Date()}
                           title="Annual CSR: Green Energy for Schools"
                           excerpt="Our 2025 Corporate Social Responsibility program brings solar power to 12 rural schools, providing clean energy and environmental education to over 3,000 students."/>
            </li>
            <li>
              <ActivityBox image={p('mock/front/section-activities/mock-activity-03.jpg')}
                           tag="Event" type="Awards" publishedAt={new Date()}
                           title="Thailand Green Excellence Award 2025"
                           excerpt="PEX honored with the prestigious Green Excellence Award for outstanding contribution to sustainable energy development and environmental stewardship."/>
            </li>
          </ul>
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionActivities;
