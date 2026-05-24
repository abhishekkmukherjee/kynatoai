const testimonials = [
  {
    quote: "[Outcome quote — what stopped being manual in the first 30 days.]",
    role: "[Role]",
    city: "[City]",
    capability: "Knowledge AI",
    isPlaceholder: true,
  },
  {
    quote: "[Outcome quote — first AI citation, first lead qualified automatically, first hour reclaimed.]",
    role: "[Role]",
    city: "[City]",
    capability: "GEO / Demand Generation",
    isPlaceholder: true,
  },
  {
    quote: "[Outcome quote — the task that no longer exists.]",
    role: "[Role]",
    city: "[City]",
    capability: "Agentic Automation",
    isPlaceholder: true,
  },
];

const processPromises = [
  "Architecture doc before any build.",
  "Instrumented from day one.",
  "Monthly plain-language reporting.",
  "Kynato operates what it builds.",
];

export function TestamentSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ WHAT WORKING WITH KYNATO PRODUCES ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Systems That Change What the Business Can Do.
              <br />Not Reports About What It Should Do.
            </h2>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative border rounded-2xl p-8 ${
                t.isPlaceholder
                  ? "border-dashed border-white/[0.06] bg-transparent"
                  : "border-white/[0.08] bg-white/[0.03]"
              }`}
            >
              <span className="absolute top-6 left-7 font-syne text-[3.5rem] leading-none text-[#00FF88]/10 select-none">
                &ldquo;
              </span>
              <div className="pt-8">
                <p className="font-jakarta text-white/35 text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="font-jakarta text-white/40 text-[12px] font-medium">
                    — {t.role}, {t.city}
                  </p>
                  <p className="font-jakarta text-[#00FF88]/50 text-[11px] mt-1 tracking-wide">
                    {t.capability}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="border border-white/[0.06] rounded-2xl py-6 px-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center">
              <div className="w-[160px] h-[44px] border border-white/[0.08] rounded-xl bg-white/[0.02] flex items-center justify-center">
                <span className="font-jakarta text-[10px] text-white/20 uppercase tracking-wider text-center px-2">GMB Rating — activate when reviews exist</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[200px] h-[44px] border border-white/[0.08] rounded-xl bg-white/[0.02] flex items-center justify-center">
                <span className="font-jakarta text-[10px] text-white/20 uppercase tracking-wider">Featured In — [Publication]</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[160px] h-[44px] border border-white/[0.08] rounded-xl bg-white/[0.02] flex items-center justify-center">
                <span className="font-jakarta text-[10px] text-white/20 uppercase tracking-wider">Verified On — [Platform]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process promise band */}
        <div className="border border-[#00FF88]/10 bg-[#00FF88]/[0.03] rounded-2xl py-5 px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 text-center flex-wrap">
            {processPromises.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="font-jakarta text-[#00FF88]/50 text-[13px] font-medium">{item}</span>
                {i < processPromises.length - 1 && (
                  <span className="hidden md:inline mx-5 text-[#00FF88]/20">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
