/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        "source-serif-4": ['"Source Serif 4"', "serif"],
      },
      fontWeight: {
        "extra-light": 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
