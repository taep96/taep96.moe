const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      bg: "#202231",
      fg: "#DEE0EF",
      fennel: "#709BBD",
      mint: "#AAC9D4",
      sky: "#A0B6E8",
    },
    fontFamily: {
      mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
    },

    extend: {
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
