import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import ActivityBoxDetails from '../activity-box-details';
import { LocaleKey } from '../../../models/_commons/localized';
import { Activity } from '../../../models/activity';

export interface ActivityBoxProps {
  locale?: LocaleKey;
  activity: Activity;
}

const ActivityBox = (props: PropsWithChildren<ActivityBoxProps>) => {
  const { locale = 'th', activity } = props;
  const { id, thumbnail } = activity;

  return (
    <Link to={`/${locale}/activity/${id ?? 'test'}`}>
      <div className="flex flex-col justify-start items-stretch">
        <div
          className="aspect-[0.8291] bg-gray-300"
          style={{ background: `url(${thumbnail}) no-repeat center/cover` }}
        />
        <ActivityBoxDetails locale={locale} activity={activity} />
      </div>
    </Link>
  );
};

export default ActivityBox;
