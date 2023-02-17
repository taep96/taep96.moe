import Image from "@/components/image";
import { AtSign, GitHub, Mail } from "react-feather";

import ProfilePicture from "/public/cirno-business.png";

export default function HomePage() {
  return (
    <>
      <Image
        className="aspect-square w-64 rounded-full bg-base/25 shadow-outline"
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
          <a
            className="flex gap-1 text-text"
            href="//discord.com"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign className="aspect-square w-6 text-fennel" />
            <span>
              taep96<span className="text-fennel">#</span>7980
            </span>
          </a>
          <a
            className="flex gap-1 text-text"
            href="mailto:taep96@cock.li"
            target="_blank"
            rel="noreferrer"
          >
            <Mail className="aspect-square w-6 text-fennel" />
            <span>
              taep96<span className="text-fennel">@</span>cock
              <span className="text-fennel">.</span>li
            </span>
          </a>
          <a
            className="flex gap-1 text-text"
            href="//github.com/taep96"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="aspect-square w-6 text-fennel" />
            <span>
              github<span className="text-fennel">.</span>com
              <span className="text-fennel">/</span>taep96
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
