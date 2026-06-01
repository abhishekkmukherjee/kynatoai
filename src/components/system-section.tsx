import Link from "next/link";
import { ArrowRight, Search, Zap, Brain, Bot, BarChart3 } from "lucide-react";

const capabilities = [
  {
    id: "01",
    icon: Search,
    badge: "Search & AI Visibility",
    h3: "Found in Google. Found in AI. Wherever the Decision Starts.",
    lead: "Search has split. Your buyers now get answers from ChatGPT and Google AI Overviews before they click a result. Ranking in one while absent from the other means missing a growing share of every decision about your category.",
    pills: ["SEO & Technical Health", "GEO - AI Search", "AEO - Answer Engine", "AI Readiness Audit", "Local SEO India", "AI Hallucination Correction"],
    outcome: "Organic presence that compounds. AI citations that drive inbound trust.",
    href: "/services/search-ai-visibility/seo/",
  },
  {
    id: "02",
    icon: Zap,
    badge: "Demand Generation",
    h3: "From First Signal to Booked Call - Without a Person in the Loop.",
    lead: "Most lead generation breaks at the same two points: capture and follow-up. Kynato builds and operates inbound and outbound lead engines that run without your team present.",
    pills: ["Inbound Lead Architecture", "LinkedIn & Cold Outreach", "AI Lead Scoring", "WhatsApp Lead Capture", "Nurturing Sequences"],
    outcome: "From first click to closed deal - automated.",
    href: "/services/demand-generation/inbound-lead-architecture/",
  },
  {
    id: "03",
    icon: Brain,
    badge: "Knowledge & Applied AI",
    h3: "Your Knowledge, Made Accessible. Your Team, Freed From Archaeology.",
    lead: "GST circulars in email. Client records in WhatsApp threads. SOPs in PDFs no one can find. Kynato builds an AI layer over your own knowledge - accurate, cited answers in seconds.",
    pills: ["Custom RAG Systems", "AI Assistant Deployment", "Document Intelligence", "Legal & Compliance Search", "Knowledge Gap Detection"],
    outcome: "Decisions made on accurate, cited, real-time information.",
    href: "/services/knowledge-applied-ai/rag-systems/",
  },
  {
    id: "04",
    icon: Bot,
    badge: "Agentic Automation",
    h3: "Your Operations, Made Autonomous. The Work Running Itself.",
    lead: "Multi-step autonomous AI agents that complete entire processes - document collection, CRM updates, compliance reminders, invoice follow-up - without a person in the loop for standard cases.",
    pills: ["Agentic Workflow Design", "WhatsApp Automation", "Core Business Automation", "Voice AI", "Content Production Automation", "RPA"],
    outcome: "Hours of manual work automated. Systems that run 24/7.",
    href: "/services/agentic-automation/agentic-workflows/",
  },
  {
    id: "05",
    icon: BarChart3,
    badge: "Intelligence & Analytics",
    h3: "Every System Instrumented. Every Outcome in Plain Language.",
    lead: "Every system Kynato builds is instrumented from day one. No dashboards that require a manual. One view - every system - in plain language, every month. Revenue gained or hours saved - always one of the two.",
    pills: ["Search & AI Analytics", "AI Visibility Tracking", "Lead & Revenue Analytics", "Competitive Intelligence", "Predictive Analytics"],
    outcome: "One view. Every system. Revenue gained or hours saved.",
    href: "/services/intelligence-analytics/search-intelligence/",
  },
];

function CapabilityCard({ cap }: { cap: typeof capabilities[0] }) {
  const Icon = cap.icon;
  return (
    <div className="kyn-card p-7 flex-shrink-0 w-[300px] sm:w-[360px] flex flex-col">
      {/* Icon + number */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#027C88]/10 border border-[#027C88]/20 flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5 text-[#027C88]" />
        </div>
        <span className="font-syne font-black text-[#027C88]/30 text-2xl leading-none select-none">{cap.id}</span>
      </div>

      {/* Badge */}
      <span className="font-jakarta text-[10px] font-bold text-[#027C88] tracking-[0.15em] uppercase mb-3">
        {cap.badge}
      </span>

      {/* Heading */}
      <h3 className="font-syne font-bold text-gray-900 dark:text-white text-base leading-snug mb-3">
        {cap.h3}
      </h3>

      {/* Description */}
      <p className="font-jakarta text-gray-600 dark:text-white/65 text-sm leading-relaxed mb-4 flex-1">
        {cap.lead}
      </p>

      {/* Pills at bottom */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-white/[0.06]">
        {cap.pills.map((pill) => (
          <span
            key={pill}
            className="inline-block px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-[#027C88]/10 text-[#027C88] border border-[#027C88]/20"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SystemSection() {
  return (
    <section className="section-pad py-20 md:py-24 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-8">
          <span style={{ fontFamily: "var(--font-roboto)" }}>Connected Capabilities. One System. Everything Compounds.</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-syne font-black text-gray-900 dark:text-white leading-[1.05] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Five Practice Areas.
            <br />One Connected System.
          </h2>
          <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed max-w-3xl">
            Kynato covers five practice areas where we build, integrate, and directly operate AI-powered systems designed in a way that every capability feeds the next. Search visibility feeds the lead pipeline. The lead pipeline feeds automation. Automation feeds the knowledge layer. The knowledge layer feeds analytics. Analytics feeds decisions. The whole system compounds.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel — full bleed */}
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        style={{ "--animation-duration": "50s" } as React.CSSProperties}
      >
        <div className="flex gap-4 py-2 animate-scroll hover:[animation-play-state:paused]">
          {/* Copy 1 */}
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} cap={cap} />
          ))}
          {/* Copy 2 — seamless loop */}
          {capabilities.map((cap) => (
            <CapabilityCard key={`d${cap.id}`} cap={cap} />
          ))}
        </div>
      </div>

      {/* Links row */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-100 dark:border-white/[0.06] pt-8">
        {capabilities.map((cap) => (
          <Link
            key={cap.id}
            href={cap.href}
            className="inline-flex items-center gap-1.5 font-jakarta text-sm font-medium text-gray-600 dark:text-white/55 hover:text-[#027C88] dark:hover:text-white link-underline transition-colors duration-200"
          >
            {cap.badge} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
