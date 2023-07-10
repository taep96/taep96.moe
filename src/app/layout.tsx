import "./globals.css";

import Font from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { twMerge as tw } from "tailwind-merge";

import tailwind from "/tailwind.config";
import { Log, Nav } from "./client";

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
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  themeColor: tailwind.theme.colors.violet,
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
          "container mx-auto flex min-h-screen items-center justify-center overflow-x-hidden bg-base px-6 py-24 font-mono text-text selection:bg-violet/50"
        )}
      >
        <Nav />
        {children}
        <Log />
        <Analytics />
        {process.env.NODE_ENV === "development" && (
          <TailwindScreenSizeIndicator />
        )}
      </body>
    </html>
  );
}

function TailwindScreenSizeIndicator() {
  return (
    <div className="fixed bottom-2 left-2 z-50 flex h-8 w-8 items-center justify-center rounded bg-interface p-2 text-xs font-bold">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
