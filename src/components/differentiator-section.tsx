import React from "react";

const differentiators = [
  {
    title: "Build and Operate, Not Build and Leave",
    body: "Most agencies hand over a deliverable. Most technology vendors hand over software. Kynato does neither. We build, integrate, and directly manage every system we deploy — staying accountable for outcomes long after go-live. Go-live is the beginning of the value cycle, not the end.",
  },
  {
    title: "Connected, Not Siloed",
    body: "Search visibility feeds lead generation. Lead generation feeds automation. Automation feeds the knowledge layer. The knowledge layer feeds analytics. Analytics feeds decisions. Every capability we deploy is designed to compound every other.",
  },
  {
    title: "Measured, Not Assumed",
    body: "Nothing Kynato deploys runs without instrumentation. Every workflow, campaign, and AI system is tracked against one of two outcomes: revenue gained or hours saved. If we cannot attribute a result to one of those two things, we do not build it.",
  },
  {
    title: "India-Native, Not India-Adjacent",
    body: "Kynato is built for how Indian businesses actually operate — WhatsApp as a primary business channel, GST and ICAI compliance requirements, Tally and Zoho Books integrations, Hindi and Hinglish language AI, DLT-registered SMS, Razorpay and PayU payment workflows. Generic Western AI platforms do not account for any of this.",
    tagline: "Enterprise-grade AI. Built for how India actually works.",
  },
];

const notBadges = [
  "Not a software product",
  "Not a chatbot builder",
  "Not a digital marketing agency",
  "Not an IT outsourcing firm",
  "Not a demo-and-leave vendor",
  "Not a Western tool adapted for India",
];

const comparison = [
  { before: "Delivers a report or demo", after: "Deploys a running system" },
  { before: "Siloed, disconnected services", after: "Connected, compounding system" },
  { before: "Hands over software, you operate", after: "Builds and operates for you" },
  { before: "Measures impressions and clicks", after: "Measures revenue or hours saved" },
  { before: "Western tools, Indian context gap", after: "India-native by design" },
  { before: "Go-live = engagement end", after: "Go-live = engagement beginning" },
  { before: "Accountable for delivery", after: "Accountable for outcomes" },
];

export function DifferentiatorSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ THE KYNATO DIFFERENCE ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              The Kynato Difference
            </span>
            <h2
              className="font-syne font-black text-white leading-[1.05] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              We Deploy Running Systems.
              <br />Not Reports. Not Demos. Not Software.
            </h2>
            <div className="border-l-2 border-[#00FF88]/30 pl-5">
              <p className="font-jakarta text-[#00FF88]/60 italic text-lg">
                &ldquo;We don&apos;t deliver demos. We deliver running systems.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-14">
          {differentiators.map((d, i) => (
            <div key={i} className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-8 hover:border-white/[0.14] transition-all duration-300">
              {d.tagline && (
                <p className="font-jakarta text-[#00FF88]/60 italic text-sm mb-3">
                  &ldquo;{d.tagline}&rdquo;
                </p>
              )}
              <h3 className="font-syne font-bold text-white text-lg mb-3">{d.title}</h3>
              <p className="font-jakarta text-white/40 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Not badges */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {notBadges.map((badge) => (
            <span
              key={badge}
              className="font-jakarta text-[11px] text-white/25 border border-white/[0.08] rounded-lg px-3 py-1.5 tracking-[0.06em] uppercase"
            >
              <span className="text-white/20 mr-1">✕</span>
              {badge}
            </span>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl border border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-white/[0.02] px-5 py-3.5 border-b border-r border-white/[0.06]">
              <span className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.18em] uppercase">
                Typical AI Vendor / Consultant
              </span>
            </div>
            <div className="bg-white/[0.02] px-5 py-3.5 border-b border-white/[0.06]">
              <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.18em] uppercase">
                Kynato
              </span>
            </div>
            {comparison.map((row, i) => (
              <React.Fragment key={i}>
                <div className="px-5 py-4 border-b border-r border-white/[0.04] flex items-center gap-2">
                  <span className="font-jakarta text-white/30 text-sm">{row.before}</span>
                </div>
                <div className="px-5 py-4 border-b border-white/[0.04]">
                  <span className="font-jakarta text-white/65 text-sm">{row.after}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
