import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      accent: ["Rozha One", "serif"],
      primary: ["Inter", "sans-serif"],
    },
    colors: {
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
      white: colors.white,
      red: colors.red,
      primary: {
        50: "#CBD3F2",
        100: "#B9C2E3",
        200: "#959FC4",
        300: "#838DB5",
        400: "#5F6B97",
        500: "#3B4878",
        600: "#17255A",
        700: "#121E48",
        800: "#0E1636",
        900: "#090F24",
        950: "#050712",
        975: "#020409",
        1000: "#000000",
      },
      secondary: {
        50: "#CFD1F2",
        100: "#BFC1EA",
        200: "#AFB1E2",
        300: "#9EA2DB",
        400: "#8E92D3",
        500: "#6E72C3",
        600: "#4D53B4",
        700: "#2D33A4",
        800: "#242983",
        900: "#1B1F62",
        950: "#121442",
        975: "#0E0F31",
        990: "#090A21",
        995: "#050510",
        1000: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
