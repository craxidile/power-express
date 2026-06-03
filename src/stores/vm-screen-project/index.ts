import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

import { Project } from '../../models/project';
import { findProjectById } from '../../apis/project';

const loadingState = atom<boolean>(false);
const projectState = atom<Project | null>(null);

export interface IVmScreenProject {
  // Observables
  loading?: boolean;
  project?: Project | null;
  // Actions
  bind?: (id: string) => void;
}

const store: IVmScreenProject = {};

export const useVmScreenProject = (): IVmScreenProject => {
  const [loading, setLoading] = useAtom(loadingState);
  const [project, setProject] = useAtom(projectState);

  const bind = useCallback(
    (id: string) => {
      setProject(null);
      (async () => {
        setLoading(true);
        try {
          await Promise.all([
            new Promise(async (resolve, reject) => {
              try {
                const project = await findProjectById(+(id ?? '0'));
                setProject(project);
                resolve(project);
              } catch (error) {
                console.log('>>error<< find_project_by_id', error);
                reject(error);
              }
            }),
          ]);
        } catch (error) {
          console.log('>>error<<', error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [setLoading, setProject]
  );

  store.loading = loading;
  store.project = project;

  // Actions
  store.bind = bind;

  return store;
};
