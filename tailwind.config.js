/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(149, 56, 226)",
        primaryFontColor: "rgb(255, 255, 255)",
        secondaryFontColor: "rgba(9, 8, 15, 0.6)",
        bodyBg: "rgb(247, 247, 247)",
      },
      fontFamily: {
        soraFont: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
