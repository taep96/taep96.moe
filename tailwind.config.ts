import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{tsx,mdx}"],
  theme: {
    fontFamily: {
      mono: ["var(--font)", ...fontFamily.mono],
    },

    colors: {
      /**
       * Serendipity Morning
       * @see https://serendipitytheme.com/
       */
      base: "#FDFDFE",
      interface: "#F1F1F4",
      overlay: "#D8DAE4",
      muted: "#8388AD",
      subtle: "#5F6488",
      text: "#4E5377",
      hightlow: "#C1C3D6",
      highmedium: "#AAB0D5",
      highlighthigh: "#949ABE",

      coral: "#D26A5D",
      salmon: "#F19A8E",
      violet: "#886CDB",
      fennel: "#3788BE",
      sky: "#7397DE",
      mint: "#77AAB3",
    },

    extend: {
      animation: {
        cursor: "cursor .8s ease-in-out infinite alternate",
      },
      keyframes: {
        cursor: { to: { opacity: "0" } },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;