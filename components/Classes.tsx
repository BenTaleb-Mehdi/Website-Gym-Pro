"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, ShieldCheck, Timer, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { classes } from "@/lib/site-data";

const classIcons = [Dumbbell, Zap, HeartPulse, ShieldCheck, Flame, Timer];

export default function Classes() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Classes"
          title="Structured sessions for strength, skill, conditioning, and recovery."
          description="Small-group coaching with clear formats, smart pacing, and an atmosphere that keeps you engaged."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, index) => {
            const Icon = classIcons[index % classIcons.length];
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="border border-white/10 bg-white/[0.035] p-7"
              >
                <Icon className="text-[#d7b46a]" size={30} />
                <h3 className="mt-7 text-2xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-stone-300">{item.level}</p>
                <div className="mt-7 border-t border-white/10 pt-5 text-sm text-stone-400">
                  <p>{item.time}</p>
                  <p className="mt-2 text-stone-200">{item.trainer}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
