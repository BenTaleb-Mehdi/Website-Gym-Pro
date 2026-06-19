"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { gallery } from "@/lib/site-data";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A training floor with the polish of a members-only club."
          description="Explore the atmosphere, zones, and details that make Antee Club feel different."
        />
        <div className="masonry mt-14">
          {gallery.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (index % 3) * 0.05, duration: 0.5 }}
              onClick={() => setActive(src)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden"
            >
              <Image
                src={src}
                alt={`Antee Club gallery image ${index + 1}`}
                width={900}
                height={index % 2 === 0 ? 1120 : 720}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close gallery image"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/20 text-white"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative h-[82vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={active} alt="Selected Antee Club gallery image" fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
