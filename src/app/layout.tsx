import "./globals.css";
import Font from "next/font/local";
import { twMerge as tw } from "tailwind-merge";

const font = Font({
  src: [
    {
      path: "font/MapleMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "font/MapleMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "font/MapleMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "font/MapleMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "font/MapleMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "font/MapleMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  adjustFontFallback: false,
  variable: "--font",
});

const title = "taep96's epic website";
const description = "Hey there! I'm taep96!";
const url = "https://taep96.moe/";

export const metadata = {
  title,
  description,
  themeColor: "#886CDB",
  metadataBase: new URL("https://taep96.moe/"),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    images: "apple-icon.png",
  },
  twitter: {
    title,
    description,
    images: "apple-icon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={tw(
          font.variable,
          "container mx-auto flex min-h-screen items-center justify-center bg-base p-6 font-mono text-text selection:bg-violet/50"
        )}
      >
        {children}
      </body>
    </html>
  );
}
