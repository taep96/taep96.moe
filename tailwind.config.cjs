// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,mdx}"],
  theme: {
    fontFamily: {
      mono: ["var(--font)", ...fontFamily.mono],
    },
  },
  plugins: [],
};
