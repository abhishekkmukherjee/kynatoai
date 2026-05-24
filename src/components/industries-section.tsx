import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    label: "Active delivery vertical",
    title: "Health Tech",
    items: ["OPD automation", "Patient profiling", "Clinic voice AI triage bots with appointment booking", "Hospital triage and intake", "WhatsApp appointment booking"],
  },
  {
    label: "Active delivery vertical",
    title: "Legal & Finance / CA Firms",
    items: ["GST document automation", "ICAI compliance AI", "Legal precedent search", "Document intelligence", "RAG for CA firms", "Compliance deadline reminders"],
  },
  {
    label: "Active delivery vertical",
    title: "B2B Operations & Services",
    items: ["Workflow automation", "Document collection", "CRM auto-update", "Invoice automation", "Compliance reminders", "RPA for legacy portals"],
  },
  {
    label: "In delivery",
    title: "EdTech",
    items: ["Student nurturing automation", "AI content production", "Lead qualification bots", "Knowledge AI for courses"],
  },
  {
    label: "Roadmap vertical",
    title: "AgriTech",
    items: ["Supply chain intelligence", "Knowledge AI for field teams", "Regulatory monitoring", "Market intelligence"],
  },
  {
    label: "Roadmap vertical",
    title: "Fintech",
    items: ["Compliance monitoring", "Document processing AI", "AI lead scoring", "WhatsApp onboarding", "Fraud signal detection"],
  },
];

export function IndustriesSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ INDUSTRIES ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              Industries
            </span>
            <h2
              className="font-syne font-black text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              AI Built for How India&apos;s Industries Actually Operate.
            </h2>
          </div>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-7 hover:border-white/[0.15] transition-all duration-300 group"
            >
              <h3 className="font-syne font-bold text-white text-lg mb-2 leading-snug">
                {ind.title}
              </h3>
              <span
                className={`inline-block mb-5 font-jakarta text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${
                  ind.label === "Active delivery vertical"
                    ? "border-[#00FF88]/20 text-[#00FF88]/50"
                    : ind.label === "In delivery"
                    ? "border-white/[0.12] text-white/30"
                    : "border-white/[0.06] text-white/20"
                }`}
              >
                {ind.label}
              </span>
              <ul className="space-y-2">
                {ind.items.map((item, j) => (
                  <li key={j} className="font-jakarta text-[13px] text-white/35 flex items-start gap-2">
                    <span className="text-[#00FF88]/30 mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.06] pt-8">
          <p className="font-jakarta text-white/25 text-[13px] max-w-xl">
            Health Tech, Legal & Finance, and B2B Operations are active delivery verticals with live case studies.
            EdTech is in delivery. AgriTech and Fintech are roadmap verticals.
          </p>
          <Link
            href="/industries/"
            className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-[#00FF88]/60 hover:text-[#00FF88] link-underline transition-colors shrink-0"
          >
            See how Kynato serves your industry <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
