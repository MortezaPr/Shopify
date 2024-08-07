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
        "base-light": "#F9F9F9",
        "base-dark": "#191B21",
        "secondary-dark": "#23272F",
      },

      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
    screens: {
      xs: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mg: "815px",

      gl: "960px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      gx: "1160px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      "custom-gradient":
        "radial-gradient(50% 50% at 50% 50%, rgba(110, 80, 246, 0.4) 0%, rgba(249, 249, 249, 0.4) 100%)",
    },
  },
  plugins: [],
};
export default config;
