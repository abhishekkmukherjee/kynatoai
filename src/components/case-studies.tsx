import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    industryBadge: "LEGAL & FINANCE — CA FIRM",
    capBadge: "KNOWLEDGE AI + AGENTIC AUTOMATION",
    headline: "70% Reduction in Partner Time. A Mumbai CA Firm Stopped Answering the Same Questions Twice.",
    situation: "A 15-partner CA firm spending 3+ hours daily answering repetitive client queries about GST deadlines, ITR procedures, and ICAI notifications. Knowledge lived in the wrong places.",
    built: "Custom RAG system ingesting 4 years of CBDT, GSTN, and ICAI circulars plus the firm's SOPs. WhatsApp AI assistant for client-facing tier-1 query resolution. Unanswered queries logged for monthly knowledge gap reporting.",
    before: ["3+ hours daily on repetitive queries", "New associates frequently made errors", "Manual GST deadline tracking", "Knowledge in email, PDFs, memory"],
    after: ["70% reduction in partner query time", "Associates onboard 60% faster", "Zero missed deadlines — 120+ accounts", "One AI layer — instant, accurate, cited"],
    timeline: "6 weeks",
    href: "/intelligence-lab/case-studies/ca-firm-knowledge-ai/",
    accentColor: "#00FF88",
  },
  {
    industryBadge: "HEALTH TECH — STARTUP",
    capBadge: "SEO + GEO + DEMAND GENERATION",
    headline: "2× Inbound Leads in 5 Months. A Healthtech Startup Got Cited in ChatGPT — and Their Competitors Noticed.",
    situation: "Page 2 rankings, zero presence in AI-generated answers, competitors being cited by ChatGPT, flat inbound compensated by expensive paid acquisition.",
    built: "Full technical SEO remediation, topic cluster architecture (12 commercial keyword groups), GEO strategy with citation authority building, prompt-gap content mapped to buyer AI prompts, Brand Co-Occurrence building, and inbound capture via AI chatbot with qualification and CRM routing.",
    before: ["Page 2 rankings — primary keywords", "Zero AI search presence", "Flat inbound, paid-dependent", "High cost per lead from paid ads"],
    after: ["Page 1 for 8 of 12 clusters (4 months)", "First Perplexity citations at week 6", "2× inbound volume by month 3", "40% reduction in cost per lead"],
    timeline: "6 weeks to first AI citations. Page 1 by month 4. 2× leads by month 5.",
    href: "/intelligence-lab/case-studies/healthtech-seo-geo/",
    accentColor: "#00FF88",
  },
  {
    industryBadge: "B2B OPERATIONS",
    capBadge: "AGENTIC AUTOMATION + WHATSAPP",
    headline: "120 Hours Per Month Reclaimed. An Operations Team Stopped Chasing Documents.",
    situation: "A 40-person B2B services company spending 120+ hours monthly on manual document collection, CRM updates, and invoice follow-ups — all managed through WhatsApp, email, and verbal reminders.",
    built: "WhatsApp document collection bot with validation logic, file naming, storage routing, CRM status updates. Automated compliance reminder sequences. Invoice milestone triggers integrated with Zoho Books.",
    before: ["120+ manual hours per month", "3-day average document collection", "Missed compliance deadlines", "Manual CRM updates after every call"],
    after: ["Automated — 120 hours reclaimed", "Under 6 hours", "Zero missed — 60+ accounts", "Auto-updated from call, email, WhatsApp"],
    timeline: "5 weeks",
    href: "/intelligence-lab/case-studies/operations-automation/",
    accentColor: "#00FF88",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ CASE STUDIES ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              From the Intelligence Lab
            </span>
            <h2
              className="font-syne font-black text-white leading-[1.08] tracking-[-0.03em] mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What Running Systems Actually Look Like.
            </h2>
            <p className="font-jakarta text-white/35 text-base">
              Not what we built. What changed in the business after we built it.
            </p>
          </div>
        </div>

        {/* Case study cards */}
        <div className="space-y-4 mb-8">
          {cases.map((cs, i) => (
            <div key={i} className="border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300">
              <div className="h-px bg-gradient-to-r from-[#00FF88]/40 to-transparent" />
              <div className="p-8 md:p-10">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-lg border border-[#00FF88]/20 text-[#00FF88]/60">
                    {cs.industryBadge}
                  </span>
                  <span className="font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-lg border border-white/[0.08] text-white/25">
                    {cs.capBadge}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-white text-xl md:text-2xl mb-7 leading-snug max-w-3xl">
                  {cs.headline}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
                  <div>
                    <p className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.2em] uppercase mb-2">The Situation</p>
                    <p className="font-jakarta text-white/40 text-sm leading-relaxed">{cs.situation}</p>
                  </div>
                  <div>
                    <p className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.2em] uppercase mb-2">What Kynato Built</p>
                    <p className="font-jakarta text-white/40 text-sm leading-relaxed">{cs.built}</p>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-2 rounded-xl overflow-hidden border border-white/[0.06] mb-6">
                  <div className="bg-white/[0.02] p-5 border-r border-white/[0.06]">
                    <p className="font-jakarta text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase mb-3">Before</p>
                    {cs.before.map((item, j) => (
                      <div key={j} className="font-jakarta text-[13px] text-white/30 mb-2 flex items-start gap-2">
                        <span className="text-white/15 mt-0.5 shrink-0">–</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/[0.02] p-5">
                    <p className="font-jakarta text-[10px] font-bold text-[#00FF88]/50 tracking-[0.2em] uppercase mb-3">After</p>
                    {cs.after.map((item, j) => (
                      <div key={j} className="font-jakarta text-[13px] text-white/60 mb-2 flex items-start gap-2">
                        <span className="text-[#00FF88]/50 mt-0.5 shrink-0">→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="font-jakarta text-[12px] text-[#00FF88]/50">
                    Timeline: {cs.timeline}
                  </span>
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-white/30 hover:text-white link-underline transition-colors duration-200"
                  >
                    Read the full case study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Coming next */}
          <div className="border border-white/[0.06] border-dashed rounded-2xl p-8 text-center">
            <p className="font-jakarta text-[10px] font-bold text-[#00FF88]/50 tracking-[0.25em] uppercase mb-3">Coming Next</p>
            <p className="font-syne text-white/40 text-lg mb-4">
              A system like one of these — built for your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-[#00FF88]/60 hover:text-[#00FF88] transition-colors">
              Talk to our team about your situation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12">
          <Link
            href="/intelligence-lab/"
            className="group inline-flex items-center gap-2 px-8 border border-[#00FF88]/50 rounded-xl font-jakarta text-sm font-semibold text-white hover:bg-[#00FF88] hover:text-black hover:border-[#00FF88] transition-all duration-300"
            style={{ height: "3.25rem" }}
          >
            View All Case Studies <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link href="/contact" className="font-jakarta text-sm font-medium text-white/30 hover:text-white link-underline transition-colors duration-200">
            Talk to Our Team about your situation →
          </Link>
        </div>
      </div>
    </section>
  );
}
