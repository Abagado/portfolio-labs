import { create } from "zustand";

interface Project {
  id: number;
  name: string;
  description: string;
  icon: string; // Ссылка на иконку
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
      const updatedProjects = [
        ...state.projects,
        { id: state.projects.length + 1, ...project },
      ];
      localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Сохраняем в localStorage
      return { projects: updatedProjects };
    });
  },
  loadProjects: (projects) => set({ projects }),
}));

