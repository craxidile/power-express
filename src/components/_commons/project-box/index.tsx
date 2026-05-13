import {PropsWithChildren} from "react";
import ProjectDetailRow from "../project-detail-row";

export interface ProjectBoxProps {
  image: string;
  title: string;
  excerpt: string;
  client: string;
  location: string;
  capacity: number;
  completion: number;
}

const ProjectBox = (props: PropsWithChildren<ProjectBoxProps>) => {
  const { image, title, excerpt, client, location, capacity, completion } = props;
  return (
    <div className="flex flex-col justify-start items-stretch">
      <div className="aspect-[0.8291] bg-gray-300"
           style={{ background: `url(${image}) no-repeat center/cover` }} />
      <h2 className="block mt-6 text-3hxl font-medium leading-[1.2]">{title}</h2>
      <span className="mt-3 text-base text-gray-excerpt line-clamp-3">{excerpt}</span>
      <div className="my-4 h-px bg-sep-pale" />
      <ul className="gap-4 grid grid-cols-2">
        <li><ProjectDetailRow title="ลูกค้า" text={client} /></li>
        <li><ProjectDetailRow title="สถานที่" text={location} /></li>
        <li><ProjectDetailRow isCta title="กำลังการผลิต" text={`${capacity} kW`} /></li>
        <li><ProjectDetailRow title="ปีที่แล้วเสร็จ" text={`${completion}`} /></li>
      </ul>
      <div className="mt-5 h-px bg-sep-pale" />
    </div>
  );
};

export default ProjectBox;
