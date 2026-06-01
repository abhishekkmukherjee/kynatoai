"use client";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const cases = [
  {
    industryBadge: "LEGAL & FINANCE - CA FIRM",
    capBadge: "KNOWLEDGE AI + AGENTIC AUTOMATION",
    headline: "70% Reduction in Partner Time. A Mumbai CA Firm Stopped Answering the Same Questions Twice.",
    situation: "A 15-partner CA firm spending 3+ hours daily answering repetitive client queries about GST deadlines, ITR procedures, and ICAI notifications. Knowledge lived in the wrong places.",
    built: "Custom RAG system ingesting 4 years of CBDT, GSTN, and ICAI circulars plus the firm's SOPs. WhatsApp AI assistant for client-facing tier-1 query resolution.",
    before: ["3+ hours daily on repetitive queries", "New associates frequently made errors", "Manual GST deadline tracking", "Knowledge in email, PDFs, memory"],
    after: ["70% reduction in partner query time", "Associates onboard 60% faster", "Zero missed deadlines - 120+ accounts", "One AI layer - instant, accurate, cited"],
    timeline: "6 weeks",
  },
  {
    industryBadge: "HEALTH TECH - STARTUP",
    capBadge: "SEO + GEO + DEMAND GENERATION",
    headline: "2x Inbound Leads in 5 Months. A Healthtech Startup Got Cited in ChatGPT.",
    situation: "Page 2 rankings, zero presence in AI-generated answers, competitors being cited by ChatGPT, flat inbound compensated by expensive paid acquisition.",
    built: "Full technical SEO remediation, topic cluster architecture, GEO strategy with citation authority building, prompt-gap content mapped to buyer AI prompts, and inbound capture via AI chatbot.",
    before: ["Page 2 rankings - primary keywords", "Zero AI search presence", "Flat inbound, paid-dependent", "High cost per lead from paid ads"],
    after: ["Page 1 for 8 of 12 clusters (4 months)", "First Perplexity citations at week 6", "2x inbound volume by month 3", "40% reduction in cost per lead"],
    timeline: "6 weeks to first AI citations. 2x leads by month 5.",
  },
  {
    industryBadge: "B2B OPERATIONS",
    capBadge: "AGENTIC AUTOMATION + WHATSAPP",
    headline: "120 Hours Per Month Reclaimed. An Operations Team Stopped Chasing Documents.",
    situation: "A 40-person B2B services company spending 120+ hours monthly on manual document collection, CRM updates, and invoice follow-ups managed through WhatsApp, email, and verbal reminders.",
    built: "WhatsApp document collection bot with validation logic, file naming, storage routing, CRM status updates. Automated compliance reminder sequences. Invoice milestone triggers integrated with Zoho Books.",
    before: ["120+ manual hours per month", "3-day average document collection", "Missed compliance deadlines", "Manual CRM updates after every call"],
    after: ["Automated - 120 hours reclaimed", "Under 6 hours average", "Zero missed - 60+ accounts", "Auto-updated from call, email, WhatsApp"],
    timeline: "5 weeks",
  },
];

function CaseCard({ cs }: { cs: typeof cases[0] }) {
  return (
    <div className="border border-gray-200 dark:border-white/[0.1] rounded-2xl overflow-hidden flex-shrink-0 w-[440px] sm:w-[520px] flex flex-col bg-white dark:bg-[#0A0A0A]">
      <div className="h-px bg-gradient-to-r from-[#027C88]/60 to-transparent" />
      <div className="p-7 flex flex-col flex-1">

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-lg border border-[#027C88]/40 text-[#027C88]">
            {cs.industryBadge}
          </span>
          <span className="font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-lg border border-gray-200 dark:border-white/[0.15] text-gray-500 dark:text-white/70">
            {cs.capBadge}
          </span>
        </div>

        <h3 className="font-syne font-bold text-gray-900 dark:text-white text-lg leading-snug mb-4 flex-1">
          {cs.headline}
        </h3>

        {/* Before / After */}
        <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.1] mb-4">
          <div className="bg-gray-50 dark:bg-white/[0.03] p-4 border-r border-gray-200 dark:border-white/[0.1]">
            <p className="font-jakarta text-[10px] font-bold text-gray-400 dark:text-white/60 tracking-[0.2em] uppercase mb-2">Before</p>
            {cs.before.map((item, j) => (
              <div key={j} className="font-jakarta text-[12px] font-medium text-gray-600 dark:text-white/75 mb-1.5 flex items-start gap-1.5">
                <span className="text-gray-300 dark:text-white/40 shrink-0 font-bold mt-0.5">-</span>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-[#027C88]/[0.04] p-4">
            <p className="font-jakarta text-[10px] font-bold text-[#027C88] tracking-[0.2em] uppercase mb-2">After</p>
            {cs.after.map((item, j) => (
              <div key={j} className="font-jakarta text-[12px] font-semibold text-gray-800 dark:text-white mb-1.5 flex items-start gap-1.5">
                <span className="text-[#027C88] shrink-0 font-bold mt-0.5">&rarr;</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <span className="font-jakarta text-[11px] font-medium text-[#027C88]">
          Timeline: {cs.timeline}
        </span>
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  const { openSidebar } = useSidebar();

  return (
    <section className="section-pad py-20 md:py-24 bg-white dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span style={{ fontFamily: "var(--font-roboto)" }}>Case Studies</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-syne font-black text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            What Running Systems Actually Look Like.
          </h2>
          <p className="font-jakarta text-gray-600 dark:text-white/70 text-base">
            Not what we built. What changed in the business after we built it.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel — full bleed */}
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)] mb-10"
        style={{ "--animation-duration": "55s" } as React.CSSProperties}
      >
        <div className="flex gap-4 py-2 px-6 animate-scroll hover:[animation-play-state:paused]">
          {/* Copy 1 */}
          {cases.map((cs, i) => (
            <CaseCard key={i} cs={cs} />
          ))}
          {/* Copy 2 — seamless loop */}
          {cases.map((cs, i) => (
            <CaseCard key={`d${i}`} cs={cs} />
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="rounded-2xl border border-[#027C88]/20 bg-[#027C88]/[0.04] p-8 md:p-10">
          <p className="font-syne font-bold text-gray-900 dark:text-white text-xl mb-2">
            A system like one of these - built for your business.
          </p>
          <p className="font-jakarta text-gray-600 dark:text-white/70 text-base mb-6">
            Talk to our team about your situation.
          </p>
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
      </div>
    </section>
  );
}
