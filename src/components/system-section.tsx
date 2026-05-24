import { ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    id: "01",
    badge: "SEARCH & VISIBILITY",
    h3: "Found in Google. Found in AI. Wherever the Decision Starts.",
    lead: "Search has split. Your buyers now get answers from ChatGPT and Google AI Overviews before they click a result. Ranking in one while absent from the other means missing a growing share of every decision about your category.",
    pills: ["SEO & Technical Health", "GEO — AI Search", "AEO — Answer Engine", "AI Readiness Audit", "Local SEO India", "AI Hallucination Correction"],
    outcome: "Organic presence that compounds. AI citations that drive inbound trust. Visibility that works while you sleep.",
    href: "/services/search-ai-visibility/seo/",
  },
  {
    id: "02",
    badge: "DEMAND GENERATION",
    h3: "From First Signal to Booked Call — Without a Person in the Loop.",
    lead: "Most lead generation breaks at the same two points: capture and follow-up. Kynato builds and operates inbound and outbound lead engines that run without your team present — from the first click to a qualified, booked conversation.",
    pills: ["Inbound Lead Architecture", "LinkedIn & Cold Outreach", "AI Lead Scoring", "WhatsApp Lead Capture", "Nurturing Sequences"],
    outcome: '"From first click to closed deal — automated."',
    href: "/services/demand-generation/inbound-lead-architecture/",
  },
  {
    id: "03",
    badge: "KNOWLEDGE & APPLIED AI",
    h3: "Your Knowledge, Made Accessible. Your Team, Freed From Archaeology.",
    lead: "GST circulars in email. Client records in WhatsApp threads. SOPs in PDFs no one can find. Kynato builds an AI layer over your own knowledge — so your team gets accurate, cited answers in seconds instead of searching for minutes.",
    pills: ["Custom RAG Systems", "AI Assistant Deployment", "Document Intelligence", "Legal & Compliance Search", "Knowledge Gap Detection"],
    outcome: "Decisions made on accurate, cited, real-time information. Systems that never take a day off.",
    href: "/services/knowledge-applied-ai/rag-systems/",
  },
  {
    id: "04",
    badge: "AGENTIC AUTOMATION",
    h3: "Your Operations, Made Autonomous. The Work Between Leads and Invoices — Running Itself.",
    lead: '"Kynato automates the work between your first lead and your last invoice." Not with a chatbot. With multi-step autonomous AI agents that complete entire processes — document collection, CRM updates, compliance reminders, invoice follow-up — without a person in the loop for standard cases.',
    pills: ["Agentic Workflow Design", "WhatsApp Automation", "Core Business Automation", "Voice AI", "Content Production Automation", "RPA"],
    outcome: "Hours of manual work automated. Systems that run 24/7, escalate only when needed, log everything.",
    href: "/services/agentic-automation/agentic-workflows/",
  },
  {
    id: "05",
    badge: "INTELLIGENCE & ANALYTICS",
    h3: "Every System Instrumented. Every Outcome in Plain Language.",
    lead: "Every system Kynato builds is instrumented from day one. No dashboards that require a manual. No reports that raise more questions than answers. One view — every system — in plain language, every month.",
    pills: ["Search & AI Analytics", "AI Visibility Tracking", "Lead & Revenue Analytics", "Competitive Intelligence", "Predictive Analytics"],
    outcome: "One view. Every system. Plain language. Revenue gained or hours saved — always one of the two.",
    href: "/services/intelligence-analytics/search-intelligence/",
  },
];

export function SystemSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ THE SYSTEM ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              The Intelligence Ecosystem
            </span>
            <h2
              className="font-syne font-black text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Five Practice Areas.
              <br />One Connected System.
              <br />Everything Compounds.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-4">
            <p className="font-jakarta text-white/45 text-base leading-relaxed">
              Kynato doesn&apos;t deliver software or run campaigns. We build, integrate, and directly
              operate AI-powered systems across five interconnected practice areas — designed so
              that every capability feeds the next.
            </p>
            <p className="font-jakarta text-white/45 text-base leading-relaxed">
              Search visibility feeds the lead pipeline. The lead pipeline feeds automation.
              Automation feeds the knowledge layer. The knowledge layer feeds analytics.
              Analytics feeds decisions. The whole system compounds. Most agencies deliver a part.
              We run all of it.
            </p>
          </div>
        </div>

        {/* Capability blocks */}
        <div className="space-y-0">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-t border-white/[0.06] group"
            >
              {/* Number */}
              <div className="lg:col-span-1 flex items-start">
                <span className="font-syne font-black text-[#00FF88]/20 text-2xl leading-none select-none">
                  {cap.id}
                </span>
              </div>

              {/* Badge + headline + body */}
              <div className="lg:col-span-5">
                <span className="inline-block mb-4 font-jakarta text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#00FF88]/20 text-[#00FF88]/60">
                  {cap.badge}
                </span>
                <h3 className="font-syne font-bold text-white text-xl leading-snug mb-4 group-hover:text-white transition-colors">
                  {cap.h3}
                </h3>
                <p className="font-jakarta text-white/40 text-sm leading-relaxed mb-5">
                  {cap.lead}
                </p>
                <p className="font-jakarta text-[#00FF88]/60 italic text-sm mb-5">
                  {cap.outcome}
                </p>
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-1.5 font-jakarta text-sm font-medium text-white/30 hover:text-white link-underline transition-colors duration-200"
                >
                  View Full Capabilities <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Pills */}
              <div className="lg:col-span-5 lg:col-start-8 flex flex-wrap content-start gap-2 pt-1">
                {cap.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-jakarta text-[11px] px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/35 hover:border-white/[0.15] hover:text-white/60 transition-all duration-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
