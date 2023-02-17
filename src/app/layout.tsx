import "@/app/global.css";

import { AnalyticsWrapper } from "@/components/analytics";
import Archbtw from "@/components/archbtw";
import NavMenu from "@/components/nav-menu";
import { JetBrains_Mono } from "@next/font/google";

const title = "taep96's epic website";
const description = "Hey there! I'm taep96!";

const { href: canonical } = new URL(`https://${process.env.VERCEL_URL!}/`);

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  themeColor: "#202231",
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    siteId: "1541447528595554310",
    creatorId: "1541447528595554310",
    images: canonical + "apple-touch-icon.png",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body
          className={`flex items-center justify-center bg-base bg-cover bg-center font-mono text-text selection:bg-fennel selection:text-base ${fontMono.variable}`}
        >
          {process.env.NODE_ENV === "development" && <NavMenu />}
          {/* <NavMenu /> */}
          <main className="flex w-4/5 flex-col gap-12">{children}</main>
          <Archbtw />
          <AnalyticsWrapper />
        </body>
      </html>
    </>
  );
}
