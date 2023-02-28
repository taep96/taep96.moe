import Image from "@/components/image";
import { AtSign, GitHub, Mail } from "react-feather";

import ProfilePicture from "/public/cirno-business.png";

export default function Page() {
  return (
    <>
      <Image
        className="aspect-square w-64 rounded-full bg-base/25 shadow-outline"
        loading="eager"
        src={ProfilePicture}
        alt="Profile Picture"
      />
      <div className="flex w-fit flex-col gap-4">
        <h1>Hey there! 👋</h1>
        <p className="max-w-[46rem] leading-tight">
          I&apos;m taep96, a self taught Fullstack Dev / Software Engineer /
          Designer. Experienced in Linux, Rust, Node.js, TypeScript, JavaScript,
          and HTML + CSS. Hit me up if you want a website or an application
          written!
        </p>
        <hr className="rounded-full border-mint" />
        <footer className="flex flex-wrap gap-x-12 gap-y-2">
          <Link href="//discord.com">
            <AtSign className="aspect-square w-6 text-fennel" />
            <span>
              taep96<F>#</F>7980
            </span>
          </Link>
          <Link href="mailto:taep96@cock.li">
            <Mail className="aspect-square w-6 text-fennel" />
            <span>
              taep96<F>@</F>cock<F>.</F>li
            </span>
          </Link>
          <Link href="//github.com/taep96">
            <GitHub className="text-fennel" />
            <span>
              github<F>.</F>com<F>/</F>taep96
            </span>
          </Link>
        </footer>
      </div>
    </>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="flex gap-1 text-text"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function F({ children }: { children: React.ReactNode }) {
  return <span className="text-fennel">{children}</span>;
}
