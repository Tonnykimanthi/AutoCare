/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        primary: "#FF5C58",
        secondary: "#48CFCB",
        dark: "#1E2A38",
      },
    },
  },
  plugins: [],
};
