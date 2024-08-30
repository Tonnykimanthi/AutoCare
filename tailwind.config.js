/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#F5F5F5",
        primary: "#48CFCB",
        secondary: "#FF5C58",
        darkGray: "#424242",
        highlight: "#48CFCB",
      },
    },
  },
  plugins: [],
};
