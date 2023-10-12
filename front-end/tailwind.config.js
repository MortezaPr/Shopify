/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-purple": "#865DFF",
        "my-blue": "#e5fafb",
      },
    },
  },
  plugins: [],
};
