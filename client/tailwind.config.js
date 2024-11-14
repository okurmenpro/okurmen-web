/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        s: "320px",
        none: "0px",
      },

      animation: {
        isScroll: {
          "0%": { transform: "translateY(-100px)" },
          "50%": { transform: "translateY(100px)" },
        },
      },
    },
  },
  plugins: [],
};
