import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export const fetchRepos = async (username: string, token?: string): Promise<Repo[]> => {
  const response = await axios.get<Repo[]>(`${GITHUB_API_URL}/users/${username}/repos`, {
    headers: token ? { Authorization: `token ${token}` } : {},
  });

  return response.data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
  }));
};

