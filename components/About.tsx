"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[420px] overflow-hidden"
        >
          <Image
            src={images.about}
            alt="Antee Club training space"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Antee Club"
            title="A private-feeling club built for people who train with intent."
            description="Antee Club was created for members who want a sharper fitness experience: calm design, serious coaching, elite equipment, and a culture that respects consistency."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Sparkles,
                title: "Our Mission",
                text: "Help every member build strength, confidence, and sustainable performance.",
              },
              {
                icon: ShieldCheck,
                title: "Our Vision",
                text: "Set a higher standard for premium fitness in Casablanca.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="border border-white/10 bg-white/[0.035] p-6"
              >
                <item.icon className="mb-5 text-[#d7b46a]" size={28} />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
