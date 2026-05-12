import {PropsWithChildren} from "react";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {p} from "../../../utils/path-utils";

export interface ActivityBoxProps {
  image: string;
  title: string;
  excerpt: string;
  tag: string;
  type: string;
  publishedAt: Date;
}

const ActivityBox = (props: PropsWithChildren<ActivityBoxProps>) => {
  const {image, title, excerpt, tag, publishedAt, type} = props;
  return (
    <div className="flex flex-col justify-start items-stretch">
      <div className="aspect-[0.8291] bg-gray-300"
           style={{background: `url(${image}) no-repeat center/cover`}}/>
      <div className="mt-6 flex flex-row justify-start items-stretch">
        <div className={`py-1 px-3 ${tag === 'News' ? 'bg-green-tag' : 'bg-cta-primary'}`}>
          <span className="block text-white text-sm uppercase">{tag}</span>
        </div>
      </div>
      <div className="mt-5 gap-x-3 flex flex-row justify-start items-center text-base uppercase">
        <span className="block text-date-light">{dayjs(publishedAt).format('DD MMM YYYY')}</span>
        <div className="self-stretch w-px bg-sep-gray"/>
        <span className={`block ${type === 'Awards' ? 'text-activity-type' : 'text-cta-primary'}`}>{type}</span>
      </div>
      <h2 className="block mt-6 text-3hxl font-medium leading-[1.2]">{title}</h2>
      <span className="mt-3 text-base text-gray-excerpt line-clamp-3">{excerpt}</span>
      <div className="mt-5 gap-x-2 flex flex-row justify-start items-center">
        <Link to="/"><span className="text-base underline">Read more</span></Link>
        <Link to="/"><img alt="Icon" src={p('mock/front/section-activities/ic-more.svg')} /></Link>
      </div>
    </div>
  );
};

export default ActivityBox;
