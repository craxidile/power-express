import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenFront } from '../../../../../stores/vm-screen-front';
import { l } from '../../../../../utils/localization-utils';
import SafeArea from '../../../../_commons/safe-area';
import ActivityGrid from '../../../../_commons/activity-grid';

const SectionActivities = () => {
  const { locale = 'th', localizations = [] } = useVmScreen();
  const { activities = [] } = useVmScreenFront();

  return (
    <div className="py-10 lg:py-20 bg-pale flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">
            {l(locale, localizations, 'front.title-activities')}
          </h2>
          <ActivityGrid locale={locale} activities={activities} />
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionActivities;
