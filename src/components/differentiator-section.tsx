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
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>The Kynato Difference</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-16">
          <div className="lg:col-span-6">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              The Kynato Difference
            </p>
            <h2
              className="font-syne font-black text-gray-900 dark:text-white leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              We Deploy Running Systems.
              <br />Not Reports. Not Demos. Not Software.
            </h2>
            <div className="border-l-2 border-[#027C88]/30 pl-5">
              <p className="font-jakarta text-[#027C88] italic text-lg">
                &ldquo;We don&apos;t deliver demos. We deliver running systems.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 md:mb-14">
          {differentiators.map((d, i) => (
            <div key={i} className="kyn-card p-8">
              {d.tagline && (
                <p className="font-jakarta text-[#027C88] italic text-sm mb-3">
                  &ldquo;{d.tagline}&rdquo;
                </p>
              )}
              <h3 className="font-syne font-bold text-gray-900 dark:text-white text-lg mb-3">{d.title}</h3>
              <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Not badges */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {notBadges.map((badge) => (
            <span
              key={badge}
              className="font-jakarta text-[11px] text-gray-600 dark:text-white/70 border border-gray-200 dark:border-white/[0.08] rounded-full px-4 py-1.5 tracking-wide"
            >
              <span className="mr-1.5 text-gray-300 dark:text-white/35">✕</span>
              {badge}
            </span>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl border border-gray-100 dark:border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-gray-50 dark:bg-white/[0.02] px-5 py-3.5 border-b border-r border-gray-100 dark:border-white/[0.06]">
              <span className="font-jakarta text-[10px] font-bold text-gray-600 dark:text-white/70 tracking-wider uppercase">
                Typical AI Vendor / Consultant
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-white/[0.02] px-5 py-3.5 border-b border-gray-100 dark:border-white/[0.06]">
              <span className="font-jakarta text-[10px] font-bold text-[#027C88] tracking-wider uppercase">
                Kynato
              </span>
            </div>
            {comparison.map((row, i) => (
              <React.Fragment key={i}>
                <div className="px-5 py-4 border-b border-r border-gray-50 dark:border-white/[0.04] flex items-center">
                  <span className="font-jakarta text-gray-600 dark:text-white/55 text-sm">{row.before}</span>
                </div>
                <div className="px-5 py-4 border-b border-gray-50 dark:border-white/[0.04]">
                  <span className="font-jakarta text-gray-700 dark:text-white/65 text-sm">{row.after}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
