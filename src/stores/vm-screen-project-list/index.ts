import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

import { Project } from '../../models/project';
import { listProjects } from '../../apis/project';

const projectsState = atom<Project[]>([]);

export interface IVmScreenProjectList {
  // Observables
  projects?: Project[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenProjectList = {};

export const useVmScreenProjectList = (): IVmScreenProjectList => {
  const [projects, setProjects] = useAtom(projectsState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const projects = await listProjects();
            setProjects(projects);
            resolve(projects);
          } catch (error) {
            console.log('>>error<< list_projects', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setProjects]);

  // Observables
  store.projects = projects;

  // Actions
  store.bind = bind;

  return store;
};
