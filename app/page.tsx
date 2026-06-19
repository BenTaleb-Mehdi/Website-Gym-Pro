import dynamic from "next/dynamic";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MembershipPlans from "@/components/MembershipPlans";
import Navbar from "@/components/Navbar";
import Trainers from "@/components/Trainers";
import Transformation from "@/components/Transformation";
import WhyChooseUs from "@/components/WhyChooseUs";
import { localBusinessSchema } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Facilities />
        <MembershipPlans />
        <Trainers />
        <Classes />
        <Transformation />
        <DynamicGallery />
        <DynamicTestimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const DynamicGallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="section-shell py-16 text-stone-400">Loading gallery...</div>,
});

const DynamicTestimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="section-shell py-16 text-stone-400">Loading stories...</div>,
});
