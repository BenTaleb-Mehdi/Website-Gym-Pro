"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center border border-[#d7b46a]/45 bg-[#d7b46a]/10 text-sm font-bold text-[#f0d991]">
            AC
          </span>
          <span className="text-lg font-semibold text-white">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-[#f0d991] ${
                pathname === link.href ? "text-[#f0d991]" : "text-stone-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/membership"
          className="hidden h-11 items-center justify-center bg-[#d7b46a] px-5 text-sm font-semibold text-black transition hover:bg-[#f0d991] lg:flex"
        >
          Join Now
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-[#d7b46a]/60 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#080808]/95 lg:hidden"
          >
            <div className="section-shell grid gap-2 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-1 py-3 text-base text-stone-200 transition hover:text-[#f0d991]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
