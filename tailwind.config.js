// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#6B89FF",
          400: "#365fff",
          600: "#0000bf",
        },
        secondary: {
          300: "#93e594",
          400: "#00d238",
          600: "#007400",
        },
        tertiary: {
          500: "#2B3752",
          700: "#1F2231",
          900: "#0F0F12",
        },
        neutral: {
          0: "#2B3752",
          300: "#E7E7E7",
          500: "#9A9A9A",
          700: "#3D3D3D",
          900: "#000000",
        },
        system: {
          success: "#54C60E",
          information: "#0095F6",
          warning: "#FF7E12",
          error: "#FD3D51",
        },
      fontFamily: {
        sans: ["var(--font-notoSansKr)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
