const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      gum: {
        50: "#fff1f4",
        100: "#ffe3e9",
        200: "#ffccd9",
        300: "#ffa1ba",
        400: "#ff769d",
        500: "#f93a76",
        600: "#e71762",
        700: "#c30d52",
        800: "#a30e4c",
        900: "#8b1047",
        950: "#4e0322",
      },
    },
  },
  plugins: [],
};
