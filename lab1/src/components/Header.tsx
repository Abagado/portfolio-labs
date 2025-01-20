import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const menu = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "ABOUT", path: "/about" },
    { id: 3, name: "SKILLS", path: "/skills" },
    { id: 4, name: "PROJECTS", path: "/projects" },
    { id: 5, name: "CONTACT", path: "/contact" },
  ];

  // Определяем текущий путь
  const location = useLocation();

  return (
    <div className="flex items-center fixed top-0 left-0 w-full justify-between border-b-[1px] bg-green-200 z-50">
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

      {/* Иконка (для адаптивного меню) */}
      <div className="w-[90px] h-[90px] bg-green-300 flex justify-center items-center">
        
      </div>
    </div>
  );
}

export default Header;

