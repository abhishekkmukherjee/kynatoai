"use client";
import { Search, Inbox, Database, Cog, Building2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ProblemSection() {
  return (
    <section className="py-28 md:py-36 bg-black relative overflow-hidden">

      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#027C88]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase"
          >
            The Reality in 2026
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-black text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-white mb-6"
          >
            Every Quarter You Wait,{" "}
            <span className="gradient-text-teal">the Gap Widens.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-roboto text-white/45 text-lg leading-relaxed max-w-2xl"
          >
            AI isn&apos;t coming. It&apos;s already restructuring which businesses win categories and which
            ones get left behind. Here&apos;s what the gap looks like on the ground:
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardAnim}
                className={`${item.span} relative group rounded-2xl p-7 glass-card glass-card-hover overflow-hidden cursor-default`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}80, transparent)` }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none"
                  style={{ background: item.accent }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}25` }}
                >
                  <Icon className="h-4 w-4" style={{ color: item.accent }} />
                </div>

                <h3 className="font-urbanist font-bold text-xl text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-roboto text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 relative rounded-3xl overflow-hidden border border-white/[0.06] bg-black/60 backdrop-blur-sm"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />

          <div className="relative px-8 py-16 text-center">
            <h2 className="font-urbanist font-black text-2xl md:text-3xl lg:text-4xl text-white max-w-4xl mx-auto leading-tight mb-4">
              The businesses that close this gap in the next 12 months{" "}
              <span className="gradient-text-teal">will own their categories</span>{" "}
              for the decade after.
            </h2>
            <p className="font-roboto text-white/35 text-base md:text-lg">
              The ones that don&apos;t will spend that decade catching up.
            </p>
          </div>

          {/* Sparkles */}
          <div className="relative h-32 -mt-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#027C88"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
