"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site-data";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Book your free trial and experience Antee Club in person."
          description="Tell us what you want to build. We will match you with the right first session."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 border border-white/10 bg-white/[0.035] p-6 sm:p-8"
          >
            {[
              { label: "Name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Phone", type: "tel" },
            ].map((field) => (
              <label key={field.label} className="grid gap-2 text-sm text-stone-300">
                {field.label}
                <input
                  type={field.type}
                  className="h-12 border border-white/10 bg-black/35 px-4 text-white outline-none transition focus:border-[#d7b46a]/70"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-stone-300">
              Message
              <textarea className="min-h-32 resize-none border border-white/10 bg-black/35 p-4 text-white outline-none transition focus:border-[#d7b46a]/70" />
            </label>
            <button
              type="submit"
              className="mt-2 h-[52px] bg-[#d7b46a] px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0d991]"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="grid gap-5"
          >
            <iframe
              title="Antee Club map"
              src="https://www.google.com/maps?q=Casablanca%20Morocco&output=embed"
              className="min-h-[320px] w-full border-0 grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-4 border border-white/10 bg-white/[0.035] p-6">
              {[
                { icon: MapPin, text: site.address },
                { icon: Phone, text: site.phone },
                { icon: Mail, text: site.email },
                { icon: Clock, text: site.hours.join(" | ") },
              ].map((item) => (
                <div key={item.text} className="flex gap-3 text-stone-300">
                  <item.icon className="mt-1 shrink-0 text-[#d7b46a]" size={18} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
