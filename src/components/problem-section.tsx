"use client";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Search, Inbox, Database, Cog, Building2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#027C88] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal"
          >
            THE REALITY IN 2026
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight"
          >
            Every Quarter You Wait,<br />the Gap Widens.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-roboto text-muted-foreground text-lg leading-relaxed"
          >
            AI isn&apos;t coming. It&apos;s already restructuring which businesses win categories and which
            ones get left behind. Here&apos;s what the gap looks like on the ground:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 bg-[#027C88] min-h-[400px] lg:min-h-[300px]"
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                {items[0].title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-white/90">
                {items[0].description}
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 scale-[6] text-white pointer-events-none">
              {items[0].icon}
            </div>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 bg-zinc-900 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {items[1].title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-400">
              {items[1].description}
            </p>
            <div className="absolute right-4 bottom-4 opacity-10 scale-[3] text-white pointer-events-none">
              {items[1].icon}
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 bg-zinc-900 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {items[2].title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-400">
              {items[2].description}
            </p>
            <div className="absolute right-4 bottom-4 opacity-10 scale-[3] text-white pointer-events-none">
              {items[2].icon}
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#006AF0] min-h-[400px] lg:min-h-[300px]">
            <div className="max-w-md">
              <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                {items[3].title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-white/90">
                {items[3].description}
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 scale-[6] text-white pointer-events-none">
              {items[3].icon}
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-zinc-800 min-h-[400px] lg:min-h-[300px]">
             <div className="max-w-md">
              <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                {items[4].title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-300">
                {items[4].description}
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 scale-[6] text-white pointer-events-none">
              {items[4].icon}
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 bg-[#027C88]/20 border border-[#027C88]/30 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {items[5].title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300">
              {items[5].description}
            </p>
            <div className="absolute right-4 bottom-4 opacity-30 scale-[3] text-[#027C88] pointer-events-none">
              {items[5].icon}
            </div>
          </WobbleCard>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-urbanist font-semibold text-xl md:text-2xl text-white max-w-4xl mx-auto border-l-2 border-accent-teal pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6 md:pl-0 inline-block">
            The businesses that close this gap in the next 12 months will own their categories
            for the decade after. The ones that don&apos;t will spend that decade catching up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const items = [
  {
    title: "You're ranking on Google...",
    description: "But your buyers are getting answers from ChatGPT, Perplexity, and Google AI Overviews before they ever click a result. If you're not cited in AI-generated answers, you don't exist to a growing share of your market.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "Leads are coming in...",
    description: "But 60–80% of inbound leads go cold within the first 5 minutes because no one on your team is available to respond. An automated system never sleeps.",
    icon: <Inbox className="h-6 w-6" />,
  },
  {
    title: "You have data everywhere...",
    description: "GST documents in email. Client records in WhatsApp. Compliance updates in PDFs. Sales data in a CRM nobody properly uses. There is no single view.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "You've tried automating...",
    description: "But the tools don't talk to each other, someone still has to manage the exceptions, and six months later it's back to WhatsApp and spreadsheets. That's not automation.",
    icon: <Cog className="h-6 w-6" />,
  },
  {
    title: "You hired an agency...",
    description: "They ran a campaign, sent a report, and moved on. Nothing was integrated. Nothing was measurable past impressions.",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: "You know AI is important...",
    description: "But every AI vendor is selling a demo, not a deployment. A chatbot, not a system. A subscription, not an outcome.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];
