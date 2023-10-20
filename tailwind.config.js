/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#56AB78",
        secondary: "#EEE",
        yellow: "#F0EBC7",
        green30: "#56ab784d",
        lightgreen: "#D1EEF3",
        orange: "#EA7348",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
