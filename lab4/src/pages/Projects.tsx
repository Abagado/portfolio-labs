import React, { useState } from "react";
import { useProjectStore } from "../store/useProjectStore";

const Projects: React.FC = () => {
  const { projects, status, error, fetchProjects, lastUpdated } = useProjectStore();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const handleFetchProjects = () => {
    if (!username.trim()) {
      alert("Введите имя пользователя GitHub.");
      return;
    }
    fetchProjects(username, token);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-green-100 px-5 py-12">
      <h1 className="text-5xl font-extrabold text-green-600 mb-10">Мои проекты</h1>

      {/* Поля ввода */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Имя пользователя GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="GitHub токен (необязательно)"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleFetchProjects}
          className="py-3 px-6 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
        >
          Загрузить проекты
        </button>
      </div>

      {/* Кнопка обновления */}
      <button
        onClick={() => fetchProjects(username, token)}
        className="mt-6 py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
        Обновить проекты
      </button>

      {/* Время последнего обновления */}
      {lastUpdated && (
        <p className="mt-4 text-gray-600">
          Последнее обновление: {new Date(lastUpdated).toLocaleString()}
        </p>
      )}

      {/* Индикатор загрузки */}
      {status === "loading" && (
        <div className="flex justify-center items-center">
          <div className="spinner w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Сообщение об ошибке */}
      {status === "failed" && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mt-4">
          <p>Ошибка: {error}</p>
        </div>
      )}

      {/* Отображение проектов */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="mt-4 text-xl font-bold text-gray-800">{project.name}</h2>
            <p className="mt-2 text-center text-gray-600">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">{project.language || "Язык не указан"}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              Открыть на GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

