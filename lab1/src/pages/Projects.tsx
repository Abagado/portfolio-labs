import React from "react";
import { FaLaptopCode, FaGamepad, FaMobileAlt, FaHtml5 } from "react-icons/fa";

const projects = [
  {
    name: "Сайт портфолио",
    description: "Мой персональный сайт для демонстрации навыков и проектов.",
    icon: <FaLaptopCode className="text-5xl text-green-500" />,
  },
  {
    name: "RPG в RPG Maker",
    description: "Простая RPG с увлекательным сюжетом и интересной механикой.",
    icon: <FaGamepad className="text-5xl text-blue-500" />,
  },
  {
    name: "Мобильный банк на MAUI Blazor",
    description: "Кроссплатформенное приложение для управления финансами.",
    icon: <FaMobileAlt className="text-5xl text-purple-500" />,
  },
  {
    name: "Сайт поиска друзей на HTML",
    description:
      "Простой статический сайт для поиска и общения с друзьями, созданный с использованием HTML и CSS.",
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-green-100 px-5 py-12">
      {/* Заголовок */}
      <h1 className="text-5xl font-extrabold text-green-600 mb-10">Мои проекты</h1>

      {/* Список проектов */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-lg 
              hover:shadow-xl transition-shadow ${
                index % 2 === 0 ? "md:translate-y-2" : "md:-translate-y-2"
              }`}
          >
            {project.icon}
            <h2 className="mt-4 text-xl font-bold text-gray-800">{project.name}</h2>
            <p className="mt-2 text-center text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-300 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-200 rounded-lg rotate-12 opacity-50 blur-lg"></div>
      </div>
    </div>
  );
};


