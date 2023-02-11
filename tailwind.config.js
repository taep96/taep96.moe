const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bg: "#202231",
        fg: "#DEE0EF",
        fennel: "#709BBD",
        mint: "#AAC9D4",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        outline: `0px 0px 0px 2px #AAC9D440`,
      },
      animation: {
        cursor: "cursor .8s ease-in-out infinite alternate",
      },
      keyframes: {
        cursor: { "100%": { opacity: 0 } },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
