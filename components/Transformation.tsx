"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const transformationStats = [
  { label: "Avg. strength gain", value: 38, suffix: "%" },
  { label: "Success stories", value: 420, suffix: "+" },
  { label: "Weekly check-ins", value: 900, suffix: "+" },
];

export default function Transformation() {
  return (
    <section className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Transformation"
          title="Visible progress, built through measured training and better habits."
          description="Our coaching model tracks strength, conditioning, body composition, and recovery so every change has context."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                label: "Before",
                src: "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?auto=format&fit=crop&w=900&q=80",
              },
              {
                label: "After",
                src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item) => (
              <div key={item.label} className="relative min-h-[420px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${item.label} transformation story`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-5 left-5 bg-black/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d991] backdrop-blur">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass flex flex-col justify-between p-7 sm:p-9"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">
                Member Story
              </p>
              <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-white">
                &quot;I stopped guessing. The team adjusted my training, nutrition, and recovery every week until progress became predictable.&quot;
              </blockquote>
              <p className="mt-6 text-stone-400">Karim, Premium member</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {transformationStats.map((item) => (
                <AnimatedCounter key={item.label} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
