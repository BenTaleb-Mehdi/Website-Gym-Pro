"use client";

import { motion } from "framer-motion";
import { AtSign, Link2, Send } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { trainers } from "@/lib/site-data";

export default function Trainers() {
  return (
    <section className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Coaches"
          title="Expert trainers with the calm precision of a private club."
          description="Every coach brings a clear specialty, measurable programming, and a deep respect for your starting point."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden border border-white/10 bg-white/[0.035]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.specialty}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                <p className="mt-2 text-sm text-[#d7b46a]">{trainer.specialty}</p>
                <div className="mt-5 flex gap-3 text-stone-400">
                  <a aria-label={`${trainer.name} Instagram`} href="#" className="hover:text-[#f0d991]">
                    <AtSign size={18} />
                  </a>
                  <a aria-label={`${trainer.name} Facebook`} href="#" className="hover:text-[#f0d991]">
                    <Send size={18} />
                  </a>
                  <a aria-label={`${trainer.name} LinkedIn`} href="#" className="hover:text-[#f0d991]">
                    <Link2 size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
