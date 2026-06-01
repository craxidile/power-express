import { useCallback, useMemo } from 'react';
import { atom, useAtom } from 'jotai';

import { Activity } from '../../models/activity';
import { findActivityById, listLatestActivities } from '../../apis/activity';

const loadingState = atom<boolean>(false);
const activityIdState = atom<number | null>(null);
const activityState = atom<Activity | null>(null);
const activitiesState = atom<Activity[]>([]);

export interface IVmScreenProject {
  // Observables
  loading?: boolean;
  activity?: Activity | null;
  otherActivities?: Activity[];
  // Actions
  bind?: (id: string) => void;
}

const store: IVmScreenProject = {};

export const useVmScreenActivity = (): IVmScreenProject => {
  const [loading, setLoading] = useAtom(loadingState);
  const [activityId, setActivityId] = useAtom(activityIdState);
  const [activity, setActivity] = useAtom(activityState);
  const [activities, setActivities] = useAtom(activitiesState);

  const bind = useCallback(
    (id: string) => {
      setActivityId(+id ?? null);
      setActivity(null);
      setActivities([]);
      setLoading(true);

      (async () => {
        try {
          await Promise.all([
            new Promise(async (resolve, reject) => {
              try {
                const activity = await findActivityById(+(id ?? '0'));
                setActivity(activity);
                resolve(activity);
              } catch (error) {
                console.log('>>error<< find_activity_by_id', error);
                reject(error);
              }
            }),
            new Promise(async (resolve, reject) => {
              try {
                const activities = await listLatestActivities();
                setActivities(activities);
                resolve(activities);
              } catch (error) {
                console.log('>>error<< list_latest_activities', error);
                reject(error);
              }
            }),
          ]);
        } catch (error) {
          console.log('>>error<< bind', error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [setActivityId, setActivity, setActivities, setLoading]
  );

  const otherActivities = useMemo(
    () => activities.filter((a) => a.id !== activityId),
    [activityId, activities]
  );

  // Observables
  store.loading = loading;
  store.activity = activity;
  store.otherActivities = otherActivities;

  // Actions
  store.bind = bind;

  return store;
};
