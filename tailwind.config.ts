import typography from "@tailwindcss/typography";
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
      coral: "#D26A5D",
      salmon: "#F19A8E",
      fennel: "#3788BE",
      mint: "#77AAB3",
      violet: "#886CDB",
      sky: "#7397DE",

      base: "#FDFDFE",
      interface: "#F1F1F4",
      overlay: "#D8DAE4",
      soft: "#8388AD",
      slight: "#5F6488",
      text: "#4E5377",
      focuslow: "#C1C3D6",
      focusmedium: "#AAB0D5",
      focushigh: "#949ABE",
    },

    extend: {
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-headings": theme("colors.violet"),
            "--tw-prose-links": theme("colors.violet"),
            a: {
              "text-decoration": "none",
              "&:hover": {
                "text-decoration": "underline",
              },
            },
            "--tw-prose-bold": theme("colors.text"),
            "--tw-prose-counters": theme("colors.soft"),
            "--tw-prose-bullets": theme("colors.violet"),
            "--tw-prose-hr": theme("colors.focuslow"),
            hr: {
              "border-radius": "2px",
            },
            "--tw-prose-quotes": theme("colors.soft"),
            "--tw-prose-quote-borders": theme("colors.soft"),
            blockquote: {
              "border-radius": "3px",
            },
            "--tw-prose-pre-code": theme("colors.text"),
            "--tw-prose-pre-bg": theme("colors.base"),
            pre: {
              outline: "1px theme('colors.violet') solid",
            },
            "--tw-prose-th-borders": theme("colors.focushigh"),
            "--tw-prose-td-borders": theme("colors.focuslow"),
          },
        },
      }),
      animation: {
        cursor: "cursor .8s ease-in-out infinite alternate",
      },
      keyframes: {
        cursor: { to: { opacity: "0" } },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
