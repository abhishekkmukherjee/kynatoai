import Link from "next/link";
import { ArrowRight } from "lucide-react";

const statCards = [
  {
    number: "13%+",
    text: "of Google search queries now return an AI Overview before any organic result. That number is growing every month. If your business is not in those answers, you are losing visibility you cannot see leaving.",
  },
  {
    number: "60–80%",
    text: "of inbound leads go cold within the first five minutes if no one responds. Most businesses lose deals not because the product is wrong — but because follow-up depends on a person.",
  },
  {
    number: "3–5×",
    text: "The productivity gap between businesses operating on agentic AI systems and those running on manual processes. The gap is not closing. It is widening — every quarter.",
  },
];

export function UrgencySection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>The Cost of Waiting</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              Enterprise-grade AI. Built for how India actually works.
            </p>
            <h2
              className="font-syne font-black text-gray-900 dark:text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Every Quarter You Wait,
              <br />the Gap Widens.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base md:text-lg leading-relaxed">
              The businesses building AI-powered systems now are not just getting ahead.
              They are compounding an advantage that becomes harder to close with every month that passes.
              Search authority compounds. AI citations compound. Automation compounds.
              The gap between businesses running on intelligent systems and those still running on manual
              effort is not a gap you can close in a sprint. It builds quietly — and then it is structural.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-16">
          {statCards.map((card, i) => (
            <div key={i} className="kyn-card p-8">
              <div
                className="font-syne font-black mb-4 leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  background: "linear-gradient(120deg, #027C88 0%, #006AF0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {card.number}
              </div>
              <div className="h-px w-10 bg-gray-200 dark:bg-[#027C88]/20 mb-4" />
              <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <p className="font-syne font-bold text-gray-900 dark:text-white text-lg md:text-xl max-w-sm leading-snug">
            The right time to build these systems was last quarter.
            <br />
            <span className="text-[#027C88]">The second-best time is now.</span>
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#026070] transition-colors duration-200 shrink-0"
          >
            See What&apos;s Possible for Your Business
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
