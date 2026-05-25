import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    label: "Active delivery vertical",
    status: "active",
    title: "Health Tech",
    items: ["OPD automation", "Patient profiling", "Clinic voice AI triage bots with appointment booking", "Hospital triage and intake", "WhatsApp appointment booking"],
  },
  {
    label: "Active delivery vertical",
    status: "active",
    title: "Legal & Finance / CA Firms",
    items: ["GST document automation", "ICAI compliance AI", "Legal precedent search", "Document intelligence", "RAG for CA firms", "Compliance deadline reminders"],
  },
  {
    label: "Active delivery vertical",
    status: "active",
    title: "B2B Operations & Services",
    items: ["Workflow automation", "Document collection", "CRM auto-update", "Invoice automation", "Compliance reminders", "RPA for legacy portals"],
  },
  {
    label: "In delivery",
    status: "delivery",
    title: "EdTech",
    items: ["Student nurturing automation", "AI content production", "Lead qualification bots", "Knowledge AI for courses"],
  },
  {
    label: "Roadmap vertical",
    status: "roadmap",
    title: "AgriTech",
    items: ["Supply chain intelligence", "Knowledge AI for field teams", "Regulatory monitoring", "Market intelligence"],
  },
  {
    label: "Roadmap vertical",
    status: "roadmap",
    title: "Fintech",
    items: ["Compliance monitoring", "Document processing AI", "AI lead scoring", "WhatsApp onboarding", "Fraud signal detection"],
  },
];

export function IndustriesSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-16">
          <span>Industries</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-7">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] uppercase mb-4">
              Industries
            </p>
            <h2
              className="font-syne font-black text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              AI Built for How India&apos;s Industries Actually Operate.
            </h2>
          </div>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {industries.map((ind, i) => (
            <div key={i} className="kyn-card p-7 group">
              <h3 className="font-syne font-bold text-gray-900 dark:text-white text-lg mb-2 leading-snug">
                {ind.title}
              </h3>
              <span
                className={`inline-block mb-5 font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${
                  ind.status === "active"
                    ? "border-[#027C88]/30 text-[#027C88] bg-[#027C88]/[0.05]"
                    : ind.status === "delivery"
                    ? "border-amber-400/30 text-amber-600 dark:text-amber-400 bg-amber-400/[0.05]"
                    : "border-gray-300 dark:border-white/[0.12] text-gray-600 dark:text-white/60"
                }`}
              >
                {ind.label}
              </span>
              <ul className="space-y-2.5">
                {ind.items.map((item, j) => (
                  <li key={j} className="font-jakarta text-[13px] font-medium text-gray-700 dark:text-white/75 flex items-start gap-2">
                    <span className="text-[#027C88] mt-0.5 shrink-0 font-bold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-gray-100 dark:border-white/[0.08] pt-8">
          <p className="font-jakarta text-gray-700 dark:text-white/70 text-[13px] font-medium max-w-xl">
            Health Tech, Legal & Finance, and B2B Operations are active delivery verticals with live case studies.
            EdTech is in delivery. AgriTech and Fintech are roadmap verticals.
          </p>
          <Link
            href="/industries/"
            className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-[#027C88] hover:text-[#026070] link-underline transition-colors shrink-0"
          >
            See how Kynato serves your industry <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
