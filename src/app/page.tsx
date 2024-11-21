import Image from "next/image";
import Link from "next/link";
import { AtSign, GitHub, Mail, MoreHorizontal } from "react-feather";

import H from "~/components/h";
import ProfilePicture from "/public/profile-picture.png";

export default function Page() {
  return (
    <main className="relative flex flex-col gap-12">
      <Image
        className="clip-squircle-64"
        src={ProfilePicture}
        alt="profile picture"
        width={256}
        height={256}
        placeholder="blur"
        priority
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Hey there! 👋</h1>
        <p>
          I&apos;m <b>taep96</b>, a self taught{" "}
          <b>Fullstack Dev / Software Engineer / Designer.</b>
          <br className="hidden md:block" /> I mostly write <b>TS/JS</b>,
          I&apos;m learning <b>Rust</b> in my free time.{" "}
          <br className="hidden md:block" /> Feel free to send me a friend
          request on <b>Discord</b> -{" "}
          <b>
            <i>taep96#7980</i>
          </b>
        </p>

        <hr className="rounded-full border-violet" />

        <footer className="flex flex-wrap gap-x-12 gap-y-2">
          <Link className="flex gap-1" href="/discord" target="_blank">
            <AtSign className="text-violet" />
            <span className="hover:underline">
              taep96<H>#</H>7980
            </span>
          </Link>

          <Link
            className="flex gap-1"
            href="mailto:taep96@cock.li"
            target="_blank"
          >
            <Mail className="text-violet" />
            <span className="hover:underline">
              taep96<H>@</H>cock<H>.</H>li
            </span>
          </Link>

          <Link
            className="flex gap-1"
            href="//github.com/taep96"
            target="_blank"
          >
            <GitHub className="text-violet" />
            <span className="hover:underline">
              github<H>.</H>com<H>/</H>taep96
            </span>
          </Link>

          <Link
            className="flex gap-1 md:ml-auto"
            href="/links"
            aria-label="more"
          >
            <MoreHorizontal className="text-violet" />
          </Link>
        </footer>
      </div>

      <div className="safari-hidden absolute -bottom-4 left-16 -z-50 h-96 w-96 rounded-full bg-gradient-to-r from-coral to-salmon blur-3xl brightness-150" />
      <div className="safari-hidden absolute -bottom-8 left-80 -z-50 h-48 w-48 rounded-full bg-gradient-to-r from-mint to-fennel blur-3xl brightness-150" />
    </main>
  );
}
