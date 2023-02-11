import "@/app/global.css";

import Archbtw from "@/components/archbtw";
import { JetBrains_Mono } from "@next/font/google";

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
