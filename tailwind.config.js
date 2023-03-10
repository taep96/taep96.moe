const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    colors: {
      // https://serendipitytheme.com/
      coral: "#EE8679",
      salmon: "#F8D2C9",
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
        rotate: "rotate 20s infinite",
        cursor: "cursor .8s ease-in-out infinite alternate",
      },
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        cursor: { to: { opacity: 0 } },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
