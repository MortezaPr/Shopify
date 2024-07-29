import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
      },
      height: {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
      },
      colors: {
        primary: "#6e50f6",
        "base-light": "#f1f5f7",
        "base-dark": "#191B21",
        "secondary-dark": "#23272F",
      },
    },
    screens: {
      xs: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
