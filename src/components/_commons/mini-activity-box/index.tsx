import {PropsWithChildren} from "react";
import { Link } from 'react-router-dom';
import dayjs from "dayjs";

import ActivityTag, {ActivityTagSize} from "../activity-tag";
import {LocaleKey} from "../../../models/_commons/localized";

export interface MiniActivityBoxProps {
  locale?: LocaleKey;
  id?: string;
  image: string;
  tag: string;
  title: string;
  publishedAt: Date;
}

const MiniActivityBox = (props: PropsWithChildren<MiniActivityBoxProps>) => {
  const { locale = 'th', id, image, tag, title, publishedAt } = props;
  return (
    <Link to={`/${locale}/activity/${id ?? 'test'}`}>
      <div className="gap-x-3 flex flex-row justify-start items-stretch">
        <div className="flex-1 max-w-[154px] aspect-[154/105]"
             style={{ background: `url(${image}) no-repeat center/cover` }} />
        <div className="gap-y-2 flex-1 flex flex-col justify-start items-stretch">
          <div className="gap-x-4 flex flex-row justify-start items-stretch">
            <ActivityTag tag={tag} size={ActivityTagSize.small} />
          </div>
          <h2 className="text-base font-medium leading-[1.2] line-clamp-2">{title}</h2>
          <div className="flex-1" />
          <span className="block text-xs text-date-light">
            {dayjs(publishedAt).format('DD MMM YYYY')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MiniActivityBox;
