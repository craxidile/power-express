import React, {PropsWithChildren, ReactElement} from 'react';

import LayoutStandard from "../../layouts/layout-standard";
import SafeArea from "../../_commons/safe-area";
import ActivityGrid from "../../_commons/activity-grid";
import HlActivityBox from "../../_commons/hl-activity-box";
import {p} from "../../../utils/path-utils";

const ProjectScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <LayoutStandard>
      <div className="py-20 flex flex-col justify-start items-stretch">
        <SafeArea>
          <div className="gap-y-16 flex flex-col justify-start items-stretch">
            <div className="gap-y-4 flex flex-col justify-start items-start">
              <h2 className="uppercase text-title-pale text-center text-2xl font-medium">ข่าวสารและกิจกรรมล่าสุด</h2>
              <h1 className="font-medium text-6hxl leading-none">กิจกรรมล่าสุด</h1>
              <span className="text-lg lg:text-base text-title-light">ข่าว อีเวนต์ และเรื่องราวความสำเร็จบนเส้นทางพลังงานหมุนเวียนของเรา</span>
            </div>
            <div className="flex flex-col justify-start items-stretch">
              <HlActivityBox image={p('mock/front/section-activities/mock-activity-01.jpg')}
                             tag="News" type="CSR" publishedAt={new Date()}
                             title="PEX Expands Solar Capacity in Central Thailand"
                             excerpt="PowerExpress1980 announces new 2.5 MW installation project in Ayutthaya province, furthering commitment to renewable energy expansion across the region."/>
            </div>
            <ActivityGrid/>
          </div>
        </SafeArea>
      </div>
    </LayoutStandard>
  );
}

export default ProjectScreen;
