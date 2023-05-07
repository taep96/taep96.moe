import Link from "next/link";
import { AtSign, GitHub, Mail, Twitter, Youtube } from "react-feather";

import { metadata as rootmeta } from "~/app/layout";
import H from "~/components/h";

const url = "https://taep96.moe/links";

export const metadata = {
  alternates: {
    canonical: url,
  },
  openGraph: {
    ...rootmeta.openGraph,
    url,
  },
};

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Links</h1>
      <ul className="flex flex-col gap-2">
        {links.map(({ icon: Icon, href, text }) => (
          <li className="flex gap-1" key={href}>
            <Icon className="text-violet" />
            <Link className="hover:underline" href={href} target="_blank">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

const links = [
  {
    icon: AtSign,
    text: (
      <>
        taep96<H>#</H>7980
      </>
    ),
    href: "//discord.com/",
  },
  {
    icon: GitHub,
    text: (
      <>
        <H>/</H>taep96
      </>
    ),
    href: "//github.com/taep96",
  },
  {
    icon: Twitter,
    text: (
      <>
        <H>@</H>taep96
      </>
    ),
    href: "//twitter.com/taep96",
  },
  {
    icon: Youtube,
    text: (
      <>
        <H>@</H>taep96
      </>
    ),
    href: "//www.youtube.com/@taep96",
  },
  {
    icon: Mail,
    text: (
      <>
        taep96<H>@</H>cock<H>.</H>li
      </>
    ),
    href: "mailto:taep96@cock.li",
  },
];