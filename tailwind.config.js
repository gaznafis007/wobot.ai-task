/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#E0E8FC",
      newBlue: "#3766E8",
      light: "#f0f0f0",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
