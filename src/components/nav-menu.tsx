"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "react-feather";

const links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "blog", href: "/blog" },
  { name: "contact", href: "/contact" },
];

const colors = {
  base: "#202231",
  interface: "#272938",
};

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed right-0 top-0 flex"
      variants={{
        open: { background: colors.interface },
        closed: { background: colors.base },
      }}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.nav
        className="bg-[#272938] p-4"
        variants={{
          open: { x: "0%", background: colors.interface },
          closed: { x: "100%", background: colors.base },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="flex gap-4">
          {links.map(({ name, href }, i) => (
            <li key={i}>
              <a
                className={pathname === href ? "font-bold text-sky" : ""}
                href={href}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
      <motion.span
        className="z-50"
        variants={{
          open: { background: colors.interface },
          closed: { background: colors.base },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="box-content p-4 pl-0 text-mint" />
      </motion.span>
    </motion.header>
  );
}
