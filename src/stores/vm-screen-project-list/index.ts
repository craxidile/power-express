import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

import { Project } from '../../models/project';
import {
  findProjectSummary,
  listProjectCompletions,
  listProjectsByCompletion,
} from '../../apis/project';
import { ProjectSummary } from '../../models/project-summary';

const RANGE_GAP = 3;

const loadingState = atom<boolean>(false);
const projectsState = atom<Project[]>([]);
const projectSummaryState = atom<ProjectSummary | null>(null);
const completionRangesState = atom<[number, number][]>([]);
const currentCompletionRangeState = atom<[number, number]>([0, 0]);

export interface IVmScreenProjectList {
  // Observables
  loading?: boolean;
  projects?: Project[];
  projectSummary?: ProjectSummary | null;
  completionRanges?: [number, number][];
  currentCompletionRange?: [number, number];
  // Actions
  bind?: () => void;
  setCompletion?: (min: number, max: number) => void;
}

const store: IVmScreenProjectList = {};

export const useVmScreenProjectList = (): IVmScreenProjectList => {
  const [loading, setLoading] = useAtom(loadingState);
  const [projects, setProjects] = useAtom(projectsState);
  const [projectSummary, setProjectSummary] = useAtom(projectSummaryState);
  const [completionRanges, setCompletionRanges] = useAtom(
    completionRangesState
  );
  const [currentCompletionRange, setCurrentCompletionRange] = useAtom(
    currentCompletionRangeState
  );

  const setCompletion = useCallback(
    async (min: number, max: number) => {
      setCurrentCompletionRange([min, max]);
      setLoading(true);
      try {
        const projects = await listProjectsByCompletion(min, max);
        setProjects(projects);
      } catch (error) {
        console.log('>>error<< list_projects', error);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setCurrentCompletionRange, setProjects]
  );

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        // new Promise(async (resolve, reject) => {
        //   try {
        //     const projects = await listProjects();
        //     setProjects(projects);
        //     resolve(projects);
        //   } catch (error) {
        //     console.log('>>error<< list_projects', error);
        //     reject(error);
        //   }
        // }),
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
        new Promise(async (resolve, reject) => {
          try {
            const completions = await listProjectCompletions();
            const [max] = completions;
            const [min] = completions.slice(-1);
            const completionRanges: [number, number][] = [];
            for (let i = max; i >= min; i -= RANGE_GAP) {
              completionRanges.push([i - RANGE_GAP + 1, i]);
            }
            console.log('>>completion_ranges<<', completionRanges);
            setCompletionRanges(completionRanges);
            await setCompletion(completionRanges[0][0], completionRanges[0][1]);
            resolve(completionRanges);
          } catch (error) {
            console.log('>>error<< find_completions', error);
          }
        }),
      ]);
    })();
  }, [setProjectSummary, setCompletionRanges, setCompletion]);

  // Observables
  store.loading = loading;
  store.projects = projects;
  store.projectSummary = projectSummary;
  store.completionRanges = completionRanges;
  store.currentCompletionRange = currentCompletionRange;

  // Actions
  store.bind = bind;
  store.setCompletion = setCompletion;

  return store;
};
