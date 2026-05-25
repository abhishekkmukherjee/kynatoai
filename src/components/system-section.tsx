import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const capabilities = [
  {
    id: "01",
    badge: "Search & Visibility",
    h3: "Found in Google. Found in AI. Wherever the Decision Starts.",
    lead: "Search has split. Your buyers now get answers from ChatGPT and Google AI Overviews before they click a result. Ranking in one while absent from the other means missing a growing share of every decision about your category.",
    pills: ["SEO & Technical Health", "GEO — AI Search", "AEO — Answer Engine", "AI Readiness Audit", "Local SEO India", "AI Hallucination Correction"],
    outcome: "Organic presence that compounds. AI citations that drive inbound trust. Visibility that works while you sleep.",
    href: "/services/search-ai-visibility/seo/",
    colSpan: "md:col-span-2",
  },
  {
    id: "02",
    badge: "Demand Generation",
    h3: "From First Signal to Booked Call — Without a Person in the Loop.",
    lead: "Most lead generation breaks at the same two points: capture and follow-up. Kynato builds and operates inbound and outbound lead engines that run without your team present.",
    pills: ["Inbound Lead Architecture", "LinkedIn & Cold Outreach", "AI Lead Scoring", "WhatsApp Lead Capture", "Nurturing Sequences"],
    outcome: '"From first click to closed deal — automated."',
    href: "/services/demand-generation/inbound-lead-architecture/",
    colSpan: "md:col-span-1",
  },
  {
    id: "03",
    badge: "Knowledge & Applied AI",
    h3: "Your Knowledge, Made Accessible. Your Team, Freed From Archaeology.",
    lead: "GST circulars in email. Client records in WhatsApp threads. SOPs in PDFs no one can find. Kynato builds an AI layer over your own knowledge — accurate, cited answers in seconds.",
    pills: ["Custom RAG Systems", "AI Assistant Deployment", "Document Intelligence", "Legal & Compliance Search", "Knowledge Gap Detection"],
    outcome: "Decisions made on accurate, cited, real-time information.",
    href: "/services/knowledge-applied-ai/rag-systems/",
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    badge: "Agentic Automation",
    h3: "Your Operations, Made Autonomous. The Work Between Leads and Invoices — Running Itself.",
    lead: "Multi-step autonomous AI agents that complete entire processes — document collection, CRM updates, compliance reminders, invoice follow-up — without a person in the loop for standard cases.",
    pills: ["Agentic Workflow Design", "WhatsApp Automation", "Core Business Automation", "Voice AI", "Content Production Automation", "RPA"],
    outcome: "Hours of manual work automated. Systems that run 24/7.",
    href: "/services/agentic-automation/agentic-workflows/",
    colSpan: "md:col-span-2",
  },
  {
    id: "05",
    badge: "Intelligence & Analytics",
    h3: "Every System Instrumented. Every Outcome in Plain Language.",
    lead: "Every system Kynato builds is instrumented from day one. No dashboards that require a manual. One view — every system — in plain language, every month. Revenue gained or hours saved — always one of the two.",
    pills: ["Search & AI Analytics", "AI Visibility Tracking", "Lead & Revenue Analytics", "Competitive Intelligence", "Predictive Analytics"],
    outcome: "One view. Every system. Plain language. Revenue gained or hours saved — always one of the two.",
    href: "/services/intelligence-analytics/search-intelligence/",
    colSpan: "md:col-span-3",
  },
];

function CapabilityHeader({ cap }: { cap: typeof capabilities[0] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-2">
      {cap.pills.map((pill) => (
        <span
          key={pill}
          className="inline-block px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-[#027C88]/10 text-[#027C88] border border-[#027C88]/20"
        >
          {pill}
        </span>
      ))}
    </div>
  );
}

export function SystemSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>The System</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              The Intelligence Ecosystem
            </p>
            <h2
              className="font-syne font-black text-gray-900 dark:text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Five Practice Areas.
              <br />One Connected System.
              <br />Everything Compounds.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-4">
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed">
              Kynato doesn&apos;t deliver software or run campaigns. We build, integrate, and directly
              operate AI-powered systems across five interconnected practice areas — designed so
              that every capability feeds the next.
            </p>
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed">
              Search visibility feeds the lead pipeline. The lead pipeline feeds automation.
              Automation feeds the knowledge layer. The knowledge layer feeds analytics.
              Analytics feeds decisions. The whole system compounds.
            </p>
          </div>
        </div>

        {/* BentoGrid capabilities */}
        <BentoGrid className="max-w-none grid-cols-1 md:grid-cols-3 md:auto-rows-auto gap-4">
          {capabilities.map((cap) => (
            <BentoGridItem
              key={cap.id}
              className={cap.colSpan}
              icon={
                <span className="font-syne font-black text-2xl leading-none text-[#027C88]">
                  {cap.id}
                </span>
              }
              title={
                <span className="font-syne font-bold text-gray-900 dark:text-white text-base leading-snug">
                  {cap.badge} — {cap.h3}
                </span>
              }
              description={
                <span className="font-jakarta text-gray-600 dark:text-white/65 text-sm leading-relaxed">
                  {cap.lead}
                </span>
              }
              header={<CapabilityHeader cap={cap} />}
            />
          ))}
        </BentoGrid>

        {/* Links row */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-100 dark:border-white/[0.06] pt-8">
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
      </div>
    </section>
  );
}
