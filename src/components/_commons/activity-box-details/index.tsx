import { PropsWithChildren, useMemo } from 'react';

import { Locale } from '../../../models/_commons/localized';
import { Activity } from '../../../models/activity';
import { p } from '../../../utils/path-utils';
import { l } from '../../../utils/localization-utils';
import { useVmScreen } from '../../../stores/vm-screen';
import ActivityTag from '../activity-tag';
import { localizedDate } from '../../../utils/ date-utils';

export enum ActivityBoxDetailsMode {
  full = 'full',
  title = 'title',
}

export interface ActivityBoxDetailsProps {
  locale?: Locale;
  mode?: ActivityBoxDetailsMode;
  activity: Activity;
}

const ActivityBoxDetails = (
  props: PropsWithChildren<ActivityBoxDetailsProps>
) => {
  const { localizations = [] } = useVmScreen();

  const { locale = 'th', mode = ActivityBoxDetailsMode.full, activity } = props;
  const { title, excerpt, tag, publishedAt, type } = activity;

  const localizedType = useMemo(() => {
    if (!type?.title) return '';
    return type.title[locale];
  }, [locale, type]);

  const localizedTitle = useMemo(() => {
    if (!title) return '';
    return title[locale];
  }, [locale, title]);

  const localizedExcerpt = useMemo(() => {
    if (!excerpt) return '';
    return excerpt[locale];
  }, [locale, excerpt]);

  const topMargin = useMemo(
    () => (mode === ActivityBoxDetailsMode.full ? 'mt-5 lg:mt-6' : ''),
    [mode]
  );

  const titleLineClamp = useMemo(
    () => (mode === ActivityBoxDetailsMode.full ? 'line-clamp-2' : ''),
    [mode]
  );

  const dateAndType = useMemo(() => {
    return (
      <div className="mt-5 gap-x-3 flex flex-row justify-start items-center text-xs lg:text-base uppercase">
        <span className="block text-date-light">
          {localizedDate(locale, publishedAt)}
        </span>
        {type && (
          <>
            <div className="self-stretch w-px bg-sep-gray" />
            <span className="block" style={{ color: type.color }}>
              {localizedType}
            </span>
          </>
        )}
      </div>
    );
  }, [locale, localizedType, publishedAt, type]);

  return (
    <div className="flex flex-col justify-start items-stretch">
      {tag && (
        <div
          className={`${topMargin} gap-x-4 flex flex-row justify-start items-stretch`}
        >
          <ActivityTag locale={locale} tag={tag} />
        </div>
      )}
      {mode === ActivityBoxDetailsMode.full ? dateAndType : null}
      <h2
        className={`mt-6 text-2xl lg:text-3hxl font-medium leading-[1.2] ${titleLineClamp}`}
      >
        {localizedTitle}
      </h2>
      {mode === ActivityBoxDetailsMode.title ? dateAndType : null}
      {mode !== ActivityBoxDetailsMode.full || !excerpt ? null : (
        <span className="mt-5 lg:mt-3 text-base text-gray-excerpt line-clamp-3">
          {localizedExcerpt}
        </span>
      )}
      {mode !== ActivityBoxDetailsMode.full ? null : (
        <div className="mt-5 gap-x-2 flex flex-row justify-start items-center">
          <span className="text-sm lg:text-base underline">
            {l(locale, localizations, 'general.read-more')}
          </span>
          <img
            className="h-3 lg:h-auto"
            alt="Icon"
            src={p('mock/front/section-activities/ic-more.svg')}
          />
        </div>
      )}
    </div>
  );
};

export default ActivityBoxDetails;
