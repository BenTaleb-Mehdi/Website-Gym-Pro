import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MembershipPlans from "@/components/MembershipPlans";
import Navbar from "@/components/Navbar";
import { plans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Compare Antee Club Basic, Premium, and VIP memberships with clear monthly pricing and benefits.",
  alternates: { canonical: "/membership" },
};

const comparisonRows = [
  "Gym floor access",
  "Unlimited group classes",
  "Personal coaching",
  "Nutrition guidance",
  "Recovery lounge",
  "Guest passes",
];

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#050505] py-20">
          <div className="section-shell max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b46a]">
              Pricing Plans
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Flexible memberships for focused training, coaching, and recovery.
            </h1>
          </div>
        </section>
        <MembershipPlans />
        <section className="bg-[#050505] py-24">
          <div className="section-shell overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="mb-6 text-left text-2xl font-semibold text-white">
                Membership comparison
              </caption>
              <thead className="border-y border-white/10 text-sm uppercase tracking-[0.16em] text-[#d7b46a]">
                <tr>
                  <th className="py-5 pr-6">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="py-5 pr-6">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-stone-300">
                {comparisonRows.map((row) => (
                  <tr key={row}>
                    <td className="py-5 pr-6 font-medium text-white">{row}</td>
                    <td className="py-5 pr-6">{row === "Gym floor access" ? "Included" : "Add-on"}</td>
                    <td className="py-5 pr-6">
                      {["Guest passes"].includes(row) ? "Add-on" : "Included"}
                    </td>
                    <td className="py-5 pr-6">Included</td>
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
