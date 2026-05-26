import { useCallback, useMemo } from 'react';
import { atom, useAtom } from 'jotai';

import { Activity } from '../../models/activity';
import { listActivities } from '../../apis/activity';

const activitiesState = atom<Activity[]>([]);

export interface IVmScreenActivityList {
  // Observables
  headActivity?: Activity | null;
  otherActivities?: Activity[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenActivityList = {};

export const useVmScreenActivityList = (): IVmScreenActivityList => {
  const [activities, setActivities] = useAtom(activitiesState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const activities = await listActivities();
            setActivities(activities);
            resolve(activities);
          } catch (error) {
            console.log('>>error<< list_activities', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setActivities]);

  const headActivity = useMemo(() => activities[0] ?? null, [activities]);
  const otherActivities = useMemo(() => activities.slice(1), [activities]);

  // Observables
  store.headActivity = headActivity;
  store.otherActivities = otherActivities;

  // Actions
  store.bind = bind;

  return store;
};
