"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import { images, site, stats } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-28">
      <Image
        src={images.hero}
        alt="Premium gym floor with strength equipment"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,180,106,0.22),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.1),#050505_92%)]" />

      <div className="section-shell relative z-10 grid gap-10 pb-14 sm:pb-20 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#f0d991]">
            Premium Fitness Club
          </p>
          <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            {site.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/membership"
              className="group inline-flex h-14 items-center justify-center gap-3 bg-[#d7b46a] px-7 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0d991]"
            >
              Join Now
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-[#d7b46a]/70 hover:text-[#f0d991]"
            >
              <CalendarCheck size={18} />
              Book a Free Trial
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="glass grid grid-cols-2 gap-5 p-5 sm:p-7"
        >
          {stats.map((item) => (
            <AnimatedCounter key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
