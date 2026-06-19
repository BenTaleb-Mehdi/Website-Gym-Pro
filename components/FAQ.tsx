"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/site-data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Straight answers before you step onto the floor."
        />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, index) => (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold text-white"
              >
                <span>{item.question}</span>
                <motion.span animate={{ rotate: open === index ? 180 : 0 }}>
                  <ChevronDown size={20} className="text-[#d7b46a]" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === index ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 leading-8 text-stone-300">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
