import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trainers from "@/components/Trainers";
import { trainers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet Antee Club's expert coaches for strength, boxing, HIIT, yoga, recovery, and functional fitness.",
  alternates: { canonical: "/trainers" },
};

export default function TrainersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Trainer Profiles
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Coaches who combine technical standards with human support.
            </h1>
          </div>
        </section>
        <Trainers />
        <section className="bg-[#0a0a0a] py-24">
          <div className="section-shell grid gap-5 lg:grid-cols-2">
            {trainers.map((trainer) => (
              <article key={trainer.name} className="grid gap-5 border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[180px_1fr]">
                <div className="relative min-h-[240px] overflow-hidden">
                  <Image src={trainer.image} alt={trainer.name} fill sizes="180px" className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{trainer.name}</h2>
                  <p className="mt-2 text-[#d7b46a]">{trainer.specialty}</p>
                  <p className="mt-4 text-stone-300">{trainer.experience} coaching experience</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {trainer.skills.map((skill) => (
                      <span key={skill} className="border border-white/10 px-3 py-1 text-sm text-stone-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
