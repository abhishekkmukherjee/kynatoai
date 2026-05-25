"use client";
import { WobbleCard } from "@/components/ui/wobble-card";

const metricCards = [
  {
    number: "4–8 WEEKS",
    desc: "Average time from engagement start to a running, live system. Not a pilot. Not a proof of concept. Go-live.",
  },
  {
    number: "DAY ONE",
    desc: "Every system Kynato builds is instrumented from the first day of operation. Not after proving it works. From day one.",
  },
  {
    number: "2 FILTERS",
    desc: "Every engagement measured against exactly two things: revenue gained or hours saved. Nothing else. No vanity metrics.",
  },
];

export function MetricsSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>Outcomes</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              Outcomes That Compound
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Revenue Gained or Hours Saved.
              <br />Here Is What That Looks Like.
            </h2>
          </div>
        </div>

        {/* Three WobbleCard metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-12">
          {metricCards.map((card, i) => (
            <WobbleCard
              key={i}
              containerClassName="min-h-[220px]"
              className="flex flex-col justify-between"
            >
              <div
                className="font-syne font-black mb-4 leading-tight"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  background: "linear-gradient(120deg, #027C88 0%, #006AF0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {card.number}
              </div>
              <div className="w-8 h-px bg-[#027C88]/30 mb-4" />
              <p className="font-jakarta text-gray-600 dark:text-white/75 text-sm leading-relaxed">{card.desc}</p>
            </WobbleCard>
          ))}
        </div>

        {/* Statement rows */}
        <div className="border-t border-gray-100 dark:border-white/[0.06] pt-8 space-y-2">
          <p className="font-jakarta text-gray-500 dark:text-white/60 text-sm max-w-lg">
            Every number this section carries is measured. None estimated.
            We instrument every system from day one — so this section gets more specific every quarter.
          </p>
          <p className="font-jakarta text-[#027C88] italic text-base">
            &ldquo;Revenue gained or hours saved. Everything else is noise.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
