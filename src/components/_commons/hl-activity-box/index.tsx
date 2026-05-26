import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Locale } from '../../../models/_commons/localized';
import { Activity } from '../../../models/activity';
import ActivityBox from '../activity-box';
import ActivityBoxDetails from '../activity-box-details';

export interface ProjectBoxProps {
  locale?: Locale;
  activity: Activity;
}

const HlActivityBox = (props: PropsWithChildren<ProjectBoxProps>) => {
  const { locale = 'th', activity } = props;
  const { id, thumbnail } = activity;

  return (
    <Link to={`/${locale}/activity/${id ?? 'test'}`}>
      <div className="flex flex-col justify-start items-stretch">
        <div className="gap-x-10 hidden lg:flex flex-row justify-start items-stretch">
          <div
            className="max-w-[722px] h-[406px] flex-1"
            style={{ background: `url(${thumbnail}) no-repeat center/cover` }}
          />
          <div className="pt-2 flex-1 flex flex-col justify-start items-start">
            <ActivityBoxDetails locale={locale} activity={activity} />
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-start items-stretch">
          <ActivityBox locale={locale} activity={activity} />
        </div>
      </div>
    </Link>
  );
};

export default HlActivityBox;
