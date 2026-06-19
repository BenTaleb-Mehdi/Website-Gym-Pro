import type { Metadata } from "next";
import Classes from "@/components/Classes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { classes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore CrossFit, HIIT, Yoga, Boxing, Strength Training, and Functional Fitness classes at Antee Club.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Class Schedule
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Train in small groups with expert coaching and clear weekly structure.
            </h1>
          </div>
        </section>
        <Classes />
        <section className="bg-[#050505] py-24">
          <div className="section-shell overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="mb-6 text-left text-2xl font-semibold text-white">
                Weekly schedule and trainer assignment
              </caption>
              <thead className="border-y border-white/10 text-sm uppercase tracking-[0.16em] text-[#d7b46a]">
                <tr>
                  <th className="py-5 pr-6">Class</th>
                  <th className="py-5 pr-6">Level</th>
                  <th className="py-5 pr-6">Time</th>
                  <th className="py-5">Trainer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-stone-300">
                {classes.map((item) => (
                  <tr key={item.name}>
                    <td className="py-5 pr-6 font-medium text-white">{item.name}</td>
                    <td className="py-5 pr-6">{item.level}</td>
                    <td className="py-5 pr-6">{item.time}</td>
                    <td className="py-5">{item.trainer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
