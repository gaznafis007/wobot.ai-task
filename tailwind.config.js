/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#E0E8FC",
      primary: "#3766E8",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
