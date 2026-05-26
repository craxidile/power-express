import { Project } from '../../models/project';
import { ProjectSummary } from '../../models/project-summary';
import mockProjects from './mock/projects';

export const listLatestProjects = async (): Promise<Project[]> => {
  return Promise.resolve(mockProjects.slice(0, 6));
};

export const listProjects = async (): Promise<Project[]> => {
  return Promise.resolve(mockProjects);
};

export const listProjectCompletions = async (): Promise<number[]> => {
  const completionSet = new Set<number>();
  for (const project of mockProjects) completionSet.add(project.completion);
  return Promise.resolve(Array.from(completionSet));
};

export const findProjectById = async (id: number): Promise<Project | null> => {
  return Promise.resolve(mockProjects.find((p) => p.id === id) ?? null);
};

export const findProjectSummary = async (): Promise<ProjectSummary> => {
  const { length: totalProjects } = mockProjects;
  const totalCapacities =
    mockProjects.reduce((acc, p) => acc + p.capacity, 0) / 1000;
  return Promise.resolve({ totalProjects, totalCapacities });
};
