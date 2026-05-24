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
    desc: "Every engagement measured against exactly two things: revenue gained or hours saved. Nothing else.",
  },
];

export function MetricsSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ OUTCOMES ]
          </span>
        </div>

        {/* Header — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              Outcomes That Compound
            </span>
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Revenue Gained or Hours Saved.
              <br />Here Is What That Looks Like.
            </h2>
          </div>
        </div>

        {/* Three metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {metricCards.map((card, i) => (
            <div
              key={i}
              className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-8 hover:border-[#00FF88]/20 transition-all duration-300"
            >
              <div
                className="font-syne font-black mb-4 leading-tight"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  background: "linear-gradient(135deg, #00FF88 0%, rgba(0,255,136,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {card.number}
              </div>
              <div className="w-8 h-px bg-[#00FF88]/20 mb-4" />
              <p className="font-jakarta text-white/40 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Statement rows */}
        <div className="border-t border-white/[0.06] pt-8 space-y-2">
          <p className="font-jakarta text-white/30 text-sm max-w-lg">
            Every number this section carries is measured. None estimated.
            We instrument every system from day one — so this section gets more specific every quarter.
          </p>
          <p className="font-jakarta text-[#00FF88]/60 italic text-base">
            &ldquo;Revenue gained or hours saved. Everything else is noise.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
