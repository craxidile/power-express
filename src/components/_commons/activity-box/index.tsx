import {PropsWithChildren} from "react";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {p} from "../../../utils/path-utils";
import ActivityBoxDetails from "../activity-box-details";

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
      <ActivityBoxDetails title={title} excerpt={excerpt} tag={tag} type={type} publishedAt={publishedAt}/>
    </div>
  );
};

export default ActivityBox;
