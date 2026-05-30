import axios from 'axios';

import { apiPrefix, apiKey } from '../../config/constants';
import { Project } from '../../models/project';
import { ProjectSummary } from '../../models/project-summary';
import mockProjects from './mock/projects';

export const countProjects = async (): Promise<Project[]> => {
  // return Promise.resolve(mockProjects.slice(0, 6));
  const response = await axios.get<Project[]>(`${apiPrefix}/count-projects`, {
    headers: { apiKey },
  });
  const { data } = response;
  return data;
};

export const listLatestProjects = async (): Promise<Project[]> => {
  // return Promise.resolve(mockProjects.slice(0, 6));
  const response = await axios.get<Project[]>(
    `${apiPrefix}/list-latest-projects`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};

export const listProjects = async (): Promise<Project[]> => {
  // return Promise.resolve(mockProjects);
  const response = await axios.get<Project[]>(
    `${apiPrefix}/list-all-projects`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};

export const listProjectCompletions = async (): Promise<number[]> => {
  const completionSet = new Set<number>();
  for (const project of mockProjects) completionSet.add(project.completion);
  return Promise.resolve(Array.from(completionSet));
};

export const findProjectById = async (id: number): Promise<Project | null> => {
  // return Promise.resolve(mockProjects.find((p) => p.id === id) ?? null);
  const response = await axios.get<Project | null>(
    `${apiPrefix}/find-project-by-id?id=${id}`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  return data;
};

export const findProjectSummary = async (): Promise<ProjectSummary> => {
  // const { length: totalProjects } = mockProjects;
  // const totalCapacities =
  //   mockProjects.reduce((acc, p) => acc + p.capacity, 0) / 1000;
  // return Promise.resolve({ totalProjects, totalCapacities });
  const response = await axios.get<ProjectSummary>(
    `${apiPrefix}/summarize-projects`,
    {
      headers: { apiKey },
    }
  );
  const { data } = response;
  data.totalCapacities /= 1000;
  return data || { totalProjects: 0, totalCapacities: 0 };
};
