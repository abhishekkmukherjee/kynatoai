"use client";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const personas = [
  {
    number: "01",
    title: "Startups and Early-Stage Founders",
    hook: "You are building fast and every hire counts.",
    body: "You need systems that give you the leverage of a team three times your size - organic discoverability from day one, a lead generation engine that does not require a full sales team, operations that scale without headcount, and a content engine that publishes without a full content team.",
  },
  {
    number: "02",
    title: "Growth Teams at Scaling Businesses",
    hook: "You have traction. Now you need it to compound.",
    body: "Manual processes are the ceiling. Your competitors are running AI-powered systems. The keyword gap is widening. Leads arrive but conversion rates are flat. Your team is stretched.",
  },
  {
    number: "03",
    title: "Mid-Market Businesses and Operations Leaders",
    hook: "Operations are complex, data is siloed, and your team spends too much time on work that should be automated.",
    body: "You have been told AI is the answer. But every vendor shows a demo and hands you software to manage yourself.",
  },
  {
    number: "04",
    title: "Industry-Specific: CA Firms, Clinics, Legal Teams",
    hook: "Your industry has compliance, documentation, and knowledge requirements that generic tools do not address.",
    body: "GST document collection. ICAI circular monitoring. Patient intake flows via Voice AI Triage Bots. Legal precedent search. These are not features that come with any off-the-shelf Western SaaS product.",
  },
];

export function IcpSection() {
  const { openSidebar } = useSidebar();

  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span>Who We Work With</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Built for Businesses That Intend to Lead Their Categories.
          </h2>
          <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed max-w-2xl">
            Kynato works with founders, startups, growth teams, and operations leaders
            who have decided that AI is infrastructure - not an experiment to observe from a distance.
          </p>
        </div>

        {/* Persona cards - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {personas.map((p) => (
            <div key={p.number} className="kyn-card p-7 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-3">
                <span className="font-syne font-black text-[#027C88] text-3xl leading-none shrink-0 select-none">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-syne font-bold text-gray-900 dark:text-white text-xl mb-1 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-syne font-semibold text-gray-600 dark:text-white/70 text-base italic">
                    {p.hook}
                  </p>
                </div>
              </div>
              <p className="font-jakarta text-gray-700 dark:text-white/60 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#talk"
            onClick={(e) => { e.preventDefault(); openSidebar(); }}
            className="inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#0052C4] transition-colors duration-200"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#book"
            onClick={(e) => { e.preventDefault(); openSidebar(); }}
            className="inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#026070] transition-colors duration-200"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
