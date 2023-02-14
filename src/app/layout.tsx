import "@/app/global.css";

import Archbtw from "@/components/archbtw";
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
    icon: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
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
          className={`flex items-center justify-center bg-bg bg-cover bg-center font-mono text-fg selection:bg-fennel selection:text-bg ${fontMono.variable}`}
        >
          <main className="my-12 flex w-4/5 flex-col gap-12">{children}</main>
          <Archbtw />
        </body>
      </html>
    </>
  );
}
