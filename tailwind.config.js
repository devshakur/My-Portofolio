const colors = require("tailwindcss/colors");
const { grey } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muiGrey: grey[800],
        mainBody: grey[50],
      },
    },
  },
  plugins: [],
};
