"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { twMerge as tw } from "tailwind-merge";

const links = [
  { text: "home", href: "/" },
  { text: "links", href: "/links" },
  { text: "projects", href: "/projects" },
  { text: "blog", href: "/blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(`/${pathname.split("/")[1]}`);

  // if you have a better way to do this, please let me know
  function navigate(href: string) {
    window.scrollTo({ top: 0 });
    setActiveLink(href);
  }

  return (
    <nav className="fixed top-2 z-50 rounded-full bg-interface">
      <ul className="flex gap-4 p-1 mix-blend-multiply invert">
        {links.map(({ href, text }) => (
          <li className="flex items-center" key={href}>
            <Link
              className={tw(
                "webkit-tap-transparent focus-invert relative rounded-full px-3 py-1.5 text-sm font-bold text-violet transition"
              )}
              onClick={() => navigate(href)}
              href={href}
            >
              <span className="invert">{text}</span>
              {activeLink === href && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 z-50 rounded-full bg-violet mix-blend-difference invert"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Log() {
  useEffect(() => {
    console.log("ᗜ˰ᗜ - hi there!");
  }, []);

  return null;
}

export function Kaomoji() {
  return (
    <Typewriter
      words={[` ${kaomojis[Math.floor(Math.random() * kaomojis.length)]}`]}
    />
  );
}

const kaomojis = [
  "( ; ω ; )",
  "( ` ﾛ ´)︻デ═一",
  "( ´-ω･)︻┻┳══━一",
  "( ´ー`)ﾉﾞ",
  "( ౦ ‸ ౦ )",
  "( ￣Д￣)",
  "( ￣▽￣)︻┳═一",
  "(-_-)",
  "(>_<)",
  "(>д<)",
  "(>﹏<)",
  "(O.O)",
  "(O_O)",
  "(T_T)",
  "(o_O)",
  "(x . x)",
  "(x_x)",
  "(¬_¬)",
  "(¯ . ¯)",
  "(°ロ°)",
  "(´-ω-`)",
  "(×_×)",
  "(×﹏×)",
  "(μ_μ)",
  "(ಠ_ಠ)",
  "(ಡ‸ಡ)",
  "(ಥ﹏ಥ)",
  "(ᓀ ᓀ)",
  "(•ิ_•ิ)?",
  "(←_←)",
  "(→_→)",
  "(↼_↼)",
  "(⇀_⇀)",
  "(⇀‸↼‶)",
  "(⊃｡•́‿•̀｡)⊃",
  "(╥_╥)",
  "(╥﹏╥)",
  "( ╯°□°)╯ ┻━━┻",
  "(╯_╰)",
  "(╯°-°)╯彡┻━┻",
  "(◣_◢)",
  "(◣﹏◢)",
  "(〃＞＿＜ 〃)",
  "(〃￣ω￣〃)ゞ",
  "(」°ロ°)」",
  "(〒﹏〒)",
  "(っ˘̩╭╮˘̩)っ",
  "(・_・)",
  "(个_个)",
  "(︶︹︶)",
  "(＋_＋)",
  "(－.－)",
  "(－_－)",
  "(－ω－)",
  "(＞_＜)",
  "(＞﹏＜)",
  "(＠_＠)",
  "(｡T ω T｡)",
  "(ﾒ﹏ﾒ)",
  "(￢ ￢)",
  "(￢_￢)",
  "(￣_￣)",
  "(￣o￣)",
  "(￣ρ￣)",
  "(￣ω￣)",
  "(￣□￣」)",
  "(￣、￣〃)",
  "(￣ヘ￣)",
  "(￣︿￣)",
  "(￣﹃￣)",
  "(￣～￣)",
  "Q(`⌒´Q)",
  "~(>_< ~)",
  "┐(`～`)┌",
  "┐(￣ヘ￣)┌",
  "┐(￣～￣)┌",
  "┬─┬ノ( º _ ºノ)",
  "╮(￣ω￣)╭",
  "ヽ(°ｏ°)ﾉ",
  "ヽ(ˇヘˇ)ノ",
  "ヽ(￣～￣)ノ",
  "ヾ(`ヘ´)ﾉﾞ",
];
