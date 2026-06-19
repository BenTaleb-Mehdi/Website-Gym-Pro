"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { facilities } from "@/lib/site-data";

export default function Facilities() {
  return (
    <section className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Facilities"
          title="Purpose-built zones for every part of your training week."
          description="From heavy lifts to recovery, every area is designed to feel focused, spacious, and refined."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[320px] overflow-hidden"
            >
              <Image
                src={facility.image}
                alt={`${facility.title} at Antee Club`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b46a]">
                  Facility
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{facility.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
