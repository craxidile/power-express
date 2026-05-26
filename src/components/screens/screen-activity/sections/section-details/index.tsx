import { useMemo } from 'react';
import { useVmScreen } from '../../../../../stores/vm-screen';
import { useVmScreenActivity } from '../../../../../stores/vm-screen-activity';
import ActivityBoxDetails, {
  ActivityBoxDetailsMode,
} from '../../../../_commons/activity-box-details';
import SafeArea from '../../../../_commons/safe-area';
import MiniActivityBox from '../../../../_commons/mini-activity-box';
import TextLines from '../../../../_commons/text-lines';

const SectionDetails = () => {
  const { locale = 'th' } = useVmScreen();

  const { activity, otherActivities = [] } = useVmScreenActivity();
  const { banner, details } = activity ?? {};

  const bannerUrl = useMemo(() => banner ?? '', [banner]);
  const localizedDetails = useMemo(() => {
    if (!details) return '';
    return details[locale];
  }, [locale, details]);

  if (!activity) return null;
  return (
    <section className="pt-10 pb-16 lg:py-20 tb-16 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-16 flex flex-col justify-start items-stretch">
          <div className="gap-y-12 lg:gap-y-16 flex flex-col justify-start items-stretch">
            <ActivityBoxDetails
              locale={locale}
              activity={activity}
              mode={ActivityBoxDetailsMode.title}
            />
            <div
              className="h-[644px]"
              style={{ background: `url(${bannerUrl}) no-repeat center/cover` }}
            ></div>
          </div>
          <div className="gap-y-16 lg:gap-y-0 lg:gap-x-16 flex flex-col lg:flex-row justify-start items-start">
            <div className="flex-1 flex flex-col justify-start items-stretch">
              <p className="text-gray-content text-base lg:text-lg">
                <TextLines text={localizedDetails} />
              </p>
            </div>
            <div className="gap-y-6 flex-1 lg:max-w-80 flex flex-col justify-start items-stretch">
              <h3 className="text-title-pale text-base lg:text-2xl uppercase">
                กิจกรรมอื่นๆ
              </h3>
              <ul className="gap-y-6 flex flex-col justify-start items-stretch">
                {otherActivities.map((activity) => {
                  const { id } = activity;
                  return (
                    <li key={id}>
                      <MiniActivityBox locale={locale} activity={activity} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionDetails;
