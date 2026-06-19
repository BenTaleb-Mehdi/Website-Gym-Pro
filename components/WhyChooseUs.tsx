"use client";

import { motion } from "framer-motion";
import {
  Apple,
  BadgeCheck,
  CalendarDays,
  Dumbbell,
  Medal,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/site-data";

const icons = { Apple, BadgeCheck, CalendarDays, Dumbbell, Medal, Users };

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything you need to train well, recover fully, and stay consistent."
          description="A premium environment designed around outcomes, not noise."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d7b46a]/40 hover:bg-white/[0.06]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#d7b46a]/10 text-[#d7b46a] transition group-hover:bg-[#d7b46a] group-hover:text-black">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
