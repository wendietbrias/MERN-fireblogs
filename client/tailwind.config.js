/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: "490px",
        md:"660px"
      },
    },
  },
  plugins: [],
};
