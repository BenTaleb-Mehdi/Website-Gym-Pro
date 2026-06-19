"use client";

import { AtSign, Link2, Send } from "lucide-react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[#d7b46a]/45 bg-[#d7b46a]/10 text-sm font-bold text-[#f0d991]">
              AC
            </span>
            <span className="text-lg font-semibold text-white">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-stone-400">{site.description}</p>
          <div className="mt-6 flex gap-3 text-stone-400">
            <a aria-label="Instagram" href="#" className="hover:text-[#f0d991]">
              <AtSign size={20} />
            </a>
            <a aria-label="Facebook" href="#" className="hover:text-[#f0d991]">
              <Send size={20} />
            </a>
            <a aria-label="LinkedIn" href="#" className="hover:text-[#f0d991]">
              <Link2 size={20} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-stone-400 hover:text-[#f0d991]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Opening Hours</h2>
          <div className="mt-5 grid gap-3 text-stone-400">
            {site.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
          <div className="mt-5 grid gap-3 text-stone-400">
            <p>{site.address}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-stone-500">
        Copyright 2026 Antee Club. All rights reserved.
      </div>
    </footer>
  );
}
