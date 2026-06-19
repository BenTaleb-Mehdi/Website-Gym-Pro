"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { plans } from "@/lib/site-data";

export default function MembershipPlans() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Membership"
          title="Choose the level of support that matches your ambition."
          description="Transparent monthly plans with flexible access and premium coaching options."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`relative border p-7 ${
                plan.popular
                  ? "border-[#d7b46a]/70 bg-[#d7b46a]/10"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {plan.popular ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 bg-[#d7b46a] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-black">
                  <Star size={14} fill="currentColor" />
                  Popular
                </div>
              ) : null}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-3 min-h-12 text-stone-300">{plan.description}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-stone-400">/ month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-stone-200">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#d7b46a]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-9 flex h-12 items-center justify-center text-sm font-bold uppercase tracking-[0.16em] transition ${
                  plan.popular
                    ? "bg-[#d7b46a] text-black hover:bg-[#f0d991]"
                    : "border border-white/15 text-white hover:border-[#d7b46a]/60 hover:text-[#f0d991]"
                }`}
              >
                Select Plan
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
