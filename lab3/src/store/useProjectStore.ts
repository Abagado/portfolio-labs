import { create } from "zustand";

interface Project {
  id: string;
  name: string;
  description: string;
  icon: string; 
}

interface ProjectStore {
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => void;
  loadProjects: (projects: Project[]) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  addProject: (project) => {
    set((state) => {
      const newProject = {
        id: crypto.randomUUID(),
        ...project
      };
      const updatedProjects = [...state.projects, newProject];

      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return { projects: updatedProjects };
    });
  },
  loadProjects: (projects) => {
    set({ projects });
  },
}));
