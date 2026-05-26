import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';

import { ProjectSummary } from '../../models/project-summary';
import { Partner } from '../../models/partner';
import { findProjectSummary } from '../../apis/project';
import { listPartners } from '../../apis/partner';

const projectSummaryState = atom<ProjectSummary | null>(null);
const partnersState = atom<Partner[]>([]);

export interface IVmScreenAbout {
  // Observables
  projectSummary?: ProjectSummary | null;
  partners?: Partner[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenAbout = {};

export const useVmScreenAbout = (): IVmScreenAbout => {
  const [projectSummary, setProjectSummary] = useAtom(projectSummaryState);
  const [partners, setPartners] = useAtom(partnersState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
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
            const partners = await listPartners();
            partners.sort((a, b) => a.seq - b.seq);
            setPartners(partners);
            resolve(partners);
          } catch (error) {
            console.log('>>error<< list_partners', error);
            reject(error);
          }
        }),
      ]);
    })();
  }, [setProjectSummary, setPartners]);

  // Observables
  store.projectSummary = projectSummary;
  store.partners = partners;

  // Actions
  store.bind = bind;

  return store;
};
