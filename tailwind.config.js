/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          lg: "1280px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
