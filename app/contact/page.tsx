import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Antee Club to book a free trial, ask about memberships, or visit our Casablanca fitness club.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Visit Us
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Start with a free trial and a coach-led walkthrough.
            </h1>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
