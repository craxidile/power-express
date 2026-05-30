import { useCallback, useMemo } from 'react';
import { atom, useAtom } from 'jotai';

import { Benefit } from '../../models/benefit';
import { HeroBanner } from '../../models/hero-banner';
import { Project } from '../../models/project';
import { ProjectSummary } from '../../models/project-summary';
import { Activity } from '../../models/activity';
import { Partner } from '../../models/partner';
import { listHeroBanners } from '../../apis/hero-banner';
import { listBenefits } from '../../apis/benefit';
import {
  listLatestProjects,
  findProjectSummary,
  countProjects,
} from '../../apis/project';
import { listLatestActivities } from '../../apis/activity';
import { listPartners } from '../../apis/partner';

const benefitsState = atom<Benefit[]>([]);
const heroBannersState = atom<HeroBanner[]>([]);
const projectsState = atom<Project[]>([]);
const activitiesState = atom<Activity[]>([]);
const projectSummaryState = atom<ProjectSummary | null>(null);
const partnersState = atom<Partner[]>([]);

export interface IVmScreenFront {
  // Observables
  benefits?: Benefit[];
  heroBanners?: HeroBanner[];
  projectCount?: number;
  projects?: Project[];
  projectSummary?: ProjectSummary | null;
  activities?: Activity[];
  partners?: Partner[];
  // Actions
  bind?: () => void;
}

const store: IVmScreenFront = {};

export const useVmScreenFront = (): IVmScreenFront => {
  const [benefits, setBenefits] = useAtom(benefitsState);
  const [heroBanners, setHeroBanners] = useAtom(heroBannersState);
  const [projects, setProjects] = useAtom(projectsState);
  const [projectSummary, setProjectSummary] = useAtom(projectSummaryState);
  const [activities, setActivities] = useAtom(activitiesState);
  const [partners, setPartners] = useAtom(partnersState);

  const bind = useCallback(() => {
    (async () => {
      await Promise.all([
        new Promise(async (resolve, reject) => {
          try {
            const benefits = await listBenefits();
            setBenefits(benefits ?? []);
            resolve(benefits);
          } catch (error) {
            console.log('>>error<< list_benefits', error);
            reject(error);
          }
        }),
        new Promise(async (resolve, reject) => {
          try {
            const heroBanners = await listHeroBanners();
            setHeroBanners(heroBanners ?? []);
            resolve(heroBanners);
          } catch (error) {
            console.log('>>error<< list_hero_banners', error);
            reject(error);
          }
        }),
        new Promise(async (resolve, reject) => {
          try {
            const projects = await listLatestProjects();
            setProjects(projects ?? []);
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
  }, [
    setActivities,
    setBenefits,
    setHeroBanners,
    setProjectSummary,
    setProjects,
    setPartners,
  ]);

  // Observables
  store.benefits = benefits;
  store.heroBanners = heroBanners;
  store.projects = projects;
  store.projectSummary = projectSummary;
  store.activities = activities;
  store.partners = partners;

  // Actions
  store.bind = bind;

  return store;
};
