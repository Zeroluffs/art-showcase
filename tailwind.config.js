/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ["20px", "28px"],
      base: ["24px", "32px"],
      lg: ["28px", "36px"],
      xl: ["32px", "40px"],
    },
  },
  plugins: [],
};
