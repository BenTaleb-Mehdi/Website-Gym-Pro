import type { Metadata } from "next";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trainers from "@/components/Trainers";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, mission, vision, facilities, and expert team behind Antee Club.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Our Story
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A premium fitness club designed around focus, coaching, and lasting progress.
            </h1>
          </div>
        </section>
        <About />
        <Facilities />
        <Trainers />
      </main>
      <Footer />
    </>
  );
}
