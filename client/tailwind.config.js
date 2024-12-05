import scrollbarHide from "tailwind-scrollbar-hide";
/* eslint-disable no-undef */
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

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clipPath: {
        right: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        left: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [scrollbarHide],
};
