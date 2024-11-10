/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      banner: "url('./assets/bg-2.jpeg')",
      banner2: "url('./assets/bg.jpeg')",
    },
    fontFamily: {
      nebu: ["Bebas Neue", "sans-serif"],
      robo: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
