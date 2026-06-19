"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("en-US"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <div ref={ref} className="min-w-0">
      <div className="flex items-baseline justify-center gap-1 text-3xl font-semibold text-white sm:text-4xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-[#d7b46a]">{suffix}</span>
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
        {label}
      </p>
    </div>
  );
}
