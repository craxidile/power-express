import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

import { Project } from '../../models/project';
import { findProjectSummary, listProjects } from '../../apis/project';
import { ProjectSummary } from '../../models/project-summary';

const projectsState = atom<Project[]>([]);
const projectSummaryState = atom<ProjectSummary | null>(null);

export interface IVmScreenProjectList {
  // Observables
  projects?: Project[];
  projectSummary?: ProjectSummary | null;
  // Actions
  bind?: () => void;
}

const store: IVmScreenProjectList = {};

export const useVmScreenProjectList = (): IVmScreenProjectList => {
  const [projects, setProjects] = useAtom(projectsState);
  const [projectSummary, setProjectSummary] = useAtom(projectSummaryState);

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
        new Promise(async (resolve, reject) => {
          try {
            const projectSummary = await findProjectSummary();
            setProjectSummary(projectSummary);
            resolve(projectSummary);
          } catch (error) {
            console.log('>>error<< find_project_summary', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setProjects, setProjectSummary]);

  // Observables
  store.projects = projects;
  store.projectSummary = projectSummary;

  // Actions
  store.bind = bind;

  return store;
};
