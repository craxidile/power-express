import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import ActivityBoxDetails from "../activity-box-details";

export interface ActivityBoxProps {
  locale?: string;
  id?: string;
  image: string;
  title: string;
  excerpt: string;
  tag: string;
  type: string;
  publishedAt: Date;
}

const ActivityBox = (props: PropsWithChildren<ActivityBoxProps>) => {
  const {locale = 'th', id, image, title, excerpt, tag, publishedAt, type} = props;
  return (
    <Link to={`/${locale}/activity/${id ?? 'test'}`}>
      <div className="flex flex-col justify-start items-stretch">
        <div className="aspect-[0.8291] bg-gray-300"
             style={{background: `url(${image}) no-repeat center/cover`}}/>
        <ActivityBoxDetails title={title} excerpt={excerpt} tag={tag} type={type} publishedAt={publishedAt}/>
      </div>
    </Link>
  );
};

export default ActivityBox;
