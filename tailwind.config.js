const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      // https://serendipitytheme.com/
      fennel: "#709BBD",
      mint: "#AAC9D4",
      sky: "#A0B6E8",
      base: "#202231",
      interface: "#272938",
      text: "#DEE0EF",
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
