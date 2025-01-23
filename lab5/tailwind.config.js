/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Включаем поддержку классов "dark"
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "#f7f7f7", // Светлый фон
        lightText: "#1a1a1a", // Светлый текст
        darkBackground: "#083344", // Тёмный фон (спокойный серо-синий)
        darkText: "#f3f4f6", // Тёмный текст
        darkAccent: "#3b82f6", // Акцентный цвет для тёмной темы
        lightAccent: "#2563eb", // Акцентный цвет для светлой темы
      },
      backgroundImage: {
        // Градиенты для светлой темы
        "light-gradient": "linear-gradient(to bottom, #ffffff, #99ffcc)",
        // Градиенты для тёмной темы
        "dark-gradient": "linear-gradient(to bottom, #4c0099, #190033)",
      },
    },
  },
  plugins: [],
};

