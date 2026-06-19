import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View the complete Antee Club gallery featuring training zones, classes, equipment, and recovery spaces.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Complete Gallery
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Explore the atmosphere, equipment, and training spaces at Antee Club.
            </h1>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
