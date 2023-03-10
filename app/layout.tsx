import "~/app/global.css";

import { JetBrains_Mono } from "next/font/google";
import { env, isDev } from "~/lib/env";

import AnalyticsWrapper from "./analytics";
import BackgroundCursor from "./cursor";
import EasterEgg from "./easter-egg";
import NavMenu from "./nav-menu";

const canonical = env.SITE_URL;
const title = "taep96's epic website";
const description = "Hey there! I'm taep96!";

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  themeColor: "#202231",
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    images: { url: `${canonical}apple-touch-icon.png` },
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    siteId: "1541447528595554310",
    creatorId: "1541447528595554310",
    images: `${canonical}apple-touch-icon.png`,
  },
  icons: {
    icon: { url: "/favicon-32x32.png" },
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
};

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  adjustFontFallback: false,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex items-center justify-center bg-base bg-cover bg-center font-mono text-text selection:bg-fennel selection:text-base ${fontMono.variable}`}
      >
        {isDev() && <NavMenu />}
        {/* <NavMenu /> */}
        <main className="flex w-4/5 flex-col gap-12">{children}</main>
        <video
          className="fixed -right-1/4 -z-10 mt-12 w-10/12 opacity-10"
          autoPlay
          muted
          loop
        >
          <source src="archbtw.webm" />
        </video>
        <BackgroundCursor />
        <EasterEgg />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
