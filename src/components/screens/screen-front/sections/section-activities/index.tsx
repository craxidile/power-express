import SafeArea from '../../../../_commons/safe-area';
import ActivityGrid from '../../../../_commons/activity-grid';
import { useVmScreen } from '../../../../../stores/vm-screen';

const SectionActivities = () => {
  const { locale } = useVmScreen();

  return (
    <div className="py-10 lg:py-20 bg-pale flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">
            ข่าวสารและกิจกรรมล่าสุด
          </h2>
          <ActivityGrid locale={locale} />
        </div>
      </SafeArea>
    </div>
  );
};

export default SectionActivities;
