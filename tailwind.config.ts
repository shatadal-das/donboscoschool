import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      accent: ["Rozha One", "serif"],
      primary: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
