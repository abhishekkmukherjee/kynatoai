import { Search, Inbox, Database, Cog, Building2, TrendingUp } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const items = [
  {
    title: "You're ranking on Google...",
    description: "But your buyers are getting answers from ChatGPT, Perplexity, and Google AI Overviews before they ever click a result. If you're not cited in AI-generated answers, you don't exist to a growing share of your market.",
    icon: Search,
    span: "lg:col-span-2",
    accent: "#027C88",
  },
  {
    title: "Leads are coming in...",
    description: "But 60–80% of inbound leads go cold within the first 5 minutes because no one on your team is available to respond. An automated system never sleeps.",
    icon: Inbox,
    span: "lg:col-span-1",
    accent: "#006AF0",
  },
  {
    title: "You have data everywhere...",
    description: "GST documents in email. Client records in WhatsApp. Compliance updates in PDFs. Sales data in a CRM nobody properly uses. There is no single view.",
    icon: Database,
    span: "lg:col-span-1",
    accent: "#027C88",
  },
  {
    title: "You've tried automating...",
    description: "But the tools don't talk to each other, someone still has to manage the exceptions, and six months later it's back to WhatsApp and spreadsheets. That's not automation.",
    icon: Cog,
    span: "lg:col-span-2",
    accent: "#006AF0",
  },
  {
    title: "You hired an agency...",
    description: "They ran a campaign, sent a report, and moved on. Nothing was integrated. Nothing was measurable past impressions.",
    icon: Building2,
    span: "lg:col-span-2",
    accent: "#027C88",
  },
  {
    title: "You know AI is important...",
    description: "But every AI vendor is selling a demo, not a deployment. A chatbot, not a system. A subscription, not an outcome.",
    icon: TrendingUp,
    span: "lg:col-span-1",
    accent: "#006AF0",
  },
];

export function ProblemSection() {
  return (
    <section className="py-28 md:py-36 bg-black relative overflow-hidden section-line-top">

      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#027C88]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase">
            The Reality in 2026
          </span>
          <h2 className="font-urbanist font-black text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-white mb-6">
            Every Quarter You Wait,{" "}
            <span className="gradient-text-teal">the Gap Widens.</span>
          </h2>
          <p className="font-roboto text-white/40 text-lg leading-relaxed max-w-2xl">
            AI isn&apos;t coming. It&apos;s already restructuring which businesses win categories and which
            ones get left behind. Here&apos;s what the gap looks like on the ground:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`${item.span} relative group rounded-2xl p-7 overflow-hidden cursor-default premium-card`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-70"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}70, transparent)` }}
                />

                {/* Corner glow on hover */}
                <div
                  className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[90px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                  style={{ background: item.accent }}
                />
                <div
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none"
                  style={{ background: item.accent }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}22` }}
                >
                  <Icon className="h-4 w-4 transition-colors duration-300" style={{ color: item.accent }} />
                </div>

                <h3 className="font-urbanist font-bold text-xl text-white mb-3 leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-roboto text-white/35 text-sm leading-relaxed group-hover:text-white/45 transition-colors">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 relative rounded-3xl overflow-hidden">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl p-px" style={{ background: "linear-gradient(135deg, rgba(2,124,136,0.25) 0%, rgba(0,106,240,0.1) 50%, rgba(2,124,136,0.15) 100%)" }}>
            <div className="h-full w-full rounded-3xl bg-black/70 backdrop-blur-sm" />
          </div>

          {/* Inner glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />

          <div className="relative px-8 py-16 text-center">
            <h2 className="font-urbanist font-black text-2xl md:text-3xl lg:text-4xl text-white max-w-4xl mx-auto leading-tight mb-4">
              The businesses that close this gap in the next 12 months{" "}
              <span className="gradient-text-teal">will own their categories</span>{" "}
              for the decade after.
            </h2>
            <p className="font-roboto text-white/30 text-base md:text-lg">
              The ones that don&apos;t will spend that decade catching up.
            </p>
          </div>

          {/* Sparkles */}
          <div className="relative h-28 -mt-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-teal/25 to-transparent" />
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.7}
              particleDensity={700}
              className="w-full h-full"
              particleColor="#027C88"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
