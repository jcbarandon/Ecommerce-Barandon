/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1E293B",
          gold: "#F59E0B",
        },
      },
    },
  },
  plugins: [],
};
