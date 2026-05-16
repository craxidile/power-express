import {PropsWithChildren, useMemo} from "react";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import {p} from "../../../utils/path-utils";
import ActivityTag from "../activity-tag";

export enum ActivityBoxDetailsMode {
  full = 'full',
  title = 'title',
}

export interface ActivityBoxDetailsProps {
  title: string;
  tag: string;
  type: string;
  publishedAt: Date;
  excerpt?: string;
  mode?: ActivityBoxDetailsMode;
}

const ActivityBoxDetails = (props: PropsWithChildren<ActivityBoxDetailsProps>) => {
  const {title, excerpt, tag, publishedAt, type, mode = ActivityBoxDetailsMode.full} = props;

  const topMargin = useMemo(() => mode === ActivityBoxDetailsMode.full ? 'mt-5 lg:mt-6' : '', [mode]);
  const dateAndType = useMemo(() => {
    return (
      <div className="mt-5 gap-x-3 flex flex-row justify-start items-center text-xs lg:text-base uppercase">
        <span className="block text-date-light">{dayjs(publishedAt).format('DD MMM YYYY')}</span>
        <div className="self-stretch w-px bg-sep-gray"/>
        <span className={`block ${type === 'Awards' ? 'text-activity-type' : 'text-cta-primary'}`}>{type}</span>
      </div>
    );
  }, [publishedAt, type]);

  return (
    <div className="flex flex-col justify-start items-stretch">
      <div className={`${topMargin} gap-x-4 flex flex-row justify-start items-stretch`}>
        <ActivityTag tag={tag} />
      </div>
      {mode === ActivityBoxDetailsMode.full ? dateAndType : null}
      <h2 className="block mt-6 text-2xl lg:text-3hxl font-medium leading-[1.2]">{title}</h2>
      {mode === ActivityBoxDetailsMode.title ? dateAndType : null}
      {mode !== ActivityBoxDetailsMode.full || !excerpt ? null : (
        <span className="mt-5 lg:mt-3 text-base text-gray-excerpt line-clamp-3">{excerpt}</span>
      )}
      {mode !== ActivityBoxDetailsMode.full ? null : (
        <div className="mt-5 gap-x-2 flex flex-row justify-start items-center">
          <Link to="/"><span className="text-sm lg:text-base underline">Read more</span></Link>
          <Link to="/">
            <img className="h-3 lg:h-auto" alt="Icon" src={p('mock/front/section-activities/ic-more.svg')}/>
          </Link>
        </div>
      )}
    </div>
  )
};

export default ActivityBoxDetails;
