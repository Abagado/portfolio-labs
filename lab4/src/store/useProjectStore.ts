import { create } from "zustand";
import { fetchRepos, Repo } from "../services/githubService";

interface ProjectState {
  projects: Repo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastUpdated: Date | null; // Новое поле
  fetchProjects: (username: string, token?: string) => Promise<void>;
  addProject: (project: Repo) => void;
}


export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  status: "idle",
  error: null,
  lastUpdated: null, // Инициализация
  fetchProjects: async (username, token) => {
    set({ status: "loading", error: null });
    try {
      const repos = await fetchRepos(username, token);
      set({ projects: repos, status: "succeeded", lastUpdated: new Date() }); // Обновляем время
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ status: "failed", error: message });
    }
  },
  addProject: (project) => {
    set((state) => ({
      projects: [...state.projects, project],
    }));
  },
}));


