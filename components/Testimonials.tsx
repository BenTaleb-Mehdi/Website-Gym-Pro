"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Members come for the facility. They stay for the standards."
        />
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden border border-white/10 bg-white/[0.035] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center"
            >
              <div className="relative h-44 w-44 overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="mb-5 flex gap-1 text-[#d7b46a]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium leading-relaxed text-white">
                  &quot;{active.review}&quot;
                </blockquote>
                <p className="mt-6 text-stone-400">{active.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 transition-all ${
                  dotIndex === index ? "w-9 bg-[#d7b46a]" : "w-2.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
