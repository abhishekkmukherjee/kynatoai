const frames = [
  {
    label: "WhatsApp Bot",
    caption: "Query resolved. Document delivered. Zero human involvement.",
    placeholder: "WHATSAPP BOT CONVERSATION",
  },
  {
    label: "Search Console Growth",
    caption: "Organic traffic compounding after system deployment.",
    placeholder: "SEARCH CONSOLE GROWTH",
  },
  {
    label: "AI Citation",
    caption: "First AI citation in Perplexity. 6 weeks after GEO deployment.",
    placeholder: "PERPLEXITY AI CITATION",
  },
  {
    label: "Automation Dashboard",
    caption: "Every system instrumented. Every metric in plain language.",
    placeholder: "AUTOMATION DASHBOARD",
  },
];

export function ScreenshotStrip() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ SYSTEMS IN OPERATION ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Not a Demo Environment.
              <br />Real Systems. Real Outputs.
            </h2>
          </div>
        </div>

        {/* 2×2 frame grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {frames.map((frame, i) => (
            <div key={i} className="border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300">
              {/* Browser chrome */}
              <div className="bg-white/[0.03] px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <span className="font-jakarta text-[11px] text-white/25 ml-2">{frame.label}</span>
              </div>
              {/* Placeholder */}
              <div className="bg-[#080808] h-[200px] md:h-[240px] flex items-center justify-center">
                <span className="font-jakarta text-[10px] text-white/15 tracking-[0.2em] uppercase text-center px-4">
                  {frame.placeholder}
                </span>
              </div>
              {/* Caption */}
              <div className="bg-white/[0.02] px-4 py-3.5 border-t border-white/[0.06]">
                <p className="font-jakarta text-[12px] text-white/30 italic">{frame.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-jakarta text-[11px] text-white/20 text-center">
          Representative outputs from Kynato-built systems. Real data replaces these as client permissions are received.
        </p>
      </div>
    </section>
  );
}
