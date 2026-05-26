import ActivityBox from '../activity-box';
import { Activity } from '../../../models/activity';
import { PropsWithChildren } from 'react';
import { LocaleKey } from '../../../models/_commons/localized';

export interface ActivityGridProps {
  locale?: LocaleKey;
  activities: Activity[];
}

const ActivityGrid = (props: PropsWithChildren<ActivityGridProps>) => {
  const { locale = 'th', activities } = props;
  return (
    <ul className="lg:gap-x-12 gap-y-16 lg:gap-y-20 grid grid-cols-1 lg:grid-cols-3">
      {activities.map((activity: Activity) => {
        const { id } = activity;
        return (
          <li key={id}>
            <ActivityBox locale={locale} activity={activity} />
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityGrid;
