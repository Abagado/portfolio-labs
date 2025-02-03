import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useProjectStore } from "../store/useProjectStore";

interface Project {
  id: string;
  name: string;
  description: string;
  icon: string; 
}

export const Projects = () => {
  const projects = useProjectStore((state) => state.projects);
  const addProject = useProjectStore((state) => state.addProject);
  const loadProjects = useProjectStore((state) => state.loadProjects);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(""); // Поле для ссылки на изображение
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      loadProjects(JSON.parse(storedProjects));
    }
  }, [loadProjects]);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !icon) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const newProject: Project = {
      id: crypto.randomUUID(), // Генерация уникального ID
      name,
      description,
      icon, // Используем введённую пользователем ссылку
    };

    addProject(newProject);
    setName("");
    setDescription("");
    setIcon("");
    setIsFormVisible(false);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-green-100 px-5 py-12 relative">
      <h1 className="text-5xl font-extrabold text-green-600 mb-10">
        Мои проекты
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={project.icon}
              alt="Project Icon"
              className="w-16 h-16 mb-4 rounded-full object-cover"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/64?text=No+Image")}
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">
              {project.name}
            </h2>
            <p className="mt-2 text-center text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="fixed bottom-10 right-10">
        <button
          className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <FaPlus size={24} />
        </button>
      </div>

      {isFormVisible && (
        <form
          onSubmit={handleAddProject}
          className="fixed bottom-20 right-10 bg-white p-6 shadow-lg rounded-lg w-80"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Добавить проект
          </h2>
          <input
            type="text"
            placeholder="Название проекта"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Описание проекта"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <input
            type="text"
            placeholder="Ссылка на изображение"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          >
            Добавить
          </button>
        </form>
      )}
    </div>
  );
};


