import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const menu = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "ABOUT", path: "/about" },
    { id: 3, name: "SKILLS", path: "/skills" },
    { id: 4, name: "PROJECTS", path: "/projects" },
    { id: 5, name: "CONTACT", path: "/contact" },
  ];

  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center fixed top-0 left-0 w-full justify-between border-b-[1px] bg-green-200 dark:bg-cyan-950 z-50">
      {/* Логотип */}
      <div className="w-[90px] h-[90px] bg-black">
        <img src="/mushroom-64.png" className="p-3" alt="Logo" />
      </div>

      {/* Навигационное меню */}
      <div className="hidden md:flex gap-14">
        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`cursor-pointer hover:underline font-medium ${
              location.pathname === item.path ? "text-green-600 font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Кнопка переключения темы */}
      <div className="w-[90px] h-[90px] bg-green-300 dark:bg-black flex justify-center items-center">
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "light" ? (
            <img
              src="https://img.icons8.com/plasticine/100/sun--v1.png"
              alt="Sun"
              className="w-8 h-8"
            />
          ) : (
            <img
              src="https://img.icons8.com/plasticine/100/crescent-moon.png"
              alt="Moon"
              className="w-8 h-8"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;



