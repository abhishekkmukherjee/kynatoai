"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const practices = [
  {
    id: "01",
    tag: "SEARCH & AI VISIBILITY",
    title: "Search Engine Optimisation and AI Visibility",
    href: "/services/search-ai-visibility/seo/",
    desc: "Search has split into two channels. Traditional search (Google, Bing) is one. AI-generated answers (ChatGPT, Perplexity, Gemini, Google AI Overviews) is the other. Your buyers use both. You need to appear in both.",
    features: [
      { t: "Technical SEO and Site Health", d: "Core Web Vitals optimisation, crawlability, schema markup deployment, Knowledge Graph entity registration." },
      { t: "Generative Engine Optimisation (GEO)", d: "GEO builds your business's presence in AI-generated answers on ChatGPT, Perplexity, and Gemini through citation authority building." },
      { t: "Answer Engine Optimisation (AEO)", d: "AEO targets Featured Snippets and AI Overviews through FAQ schema and answer-first content architecture." }
    ],
    outcome: "Organic traffic that compounds month on month. AI citations in ChatGPT and Perplexity that drive inbound trust. Visibility that works while you sleep."
  },
  {
    id: "02",
    tag: "DEMAND GENERATION",
    title: "B2B Lead Generation and AI-Powered Conversion",
    href: "/services/demand-generation/inbound-lead-architecture/",
    desc: "Most lead generation breaks down in one of two places: capture or follow-up. Kynato designs and operates inbound and outbound lead engines that handle both.",
    features: [
      { t: "Inbound Lead Capture", d: "Landing page CRO, AI-powered website chatbots, interactive lead magnets, WhatsApp Business API lead integration." },
      { t: "Outbound Lead Generation", d: "LinkedIn outreach automation, cold email sequencing, AI-personalised outbound copy at scale." },
      { t: "AI Lead Scoring and Nurturing", d: "Signal-weighted lead scoring models, qualification bots, AI-powered nurturing sequences." }
    ],
    outcome: "A lead pipeline that generates, qualifies, and nurtures — around the clock. From first click to booked call, automated."
  },
  {
    id: "03",
    tag: "KNOWLEDGE & APPLIED AI",
    title: "Knowledge AI, RAG Systems, and Agentic Automation",
    href: "/services/knowledge-applied-ai/rag-systems/",
    desc: "Two separate problems. One integrated solution. Kynato builds the AI layer over your own knowledge — and the autonomous systems that act on it.",
    features: [
      { t: "Knowledge AI and Custom RAG Systems", d: "Custom Retrieval-Augmented Generation (RAG) systems that give businesses a searchable AI layer over their own documents and compliance data." },
      { t: "Agentic AI and Workflow Automation", d: "Multi-step, autonomous AI agents that handle complex operational tasks end to end — running without human input for standard cases." },
      { t: "Voice AI and Intelligent Phone", d: "AI-powered IVR replacement, missed-call answering agents with CRM logging, vernacular and multilingual voice bots." }
    ],
    outcome: "Hours of manual work automated — replaced by systems that run 24/7. Kynato automates the work between your first lead and your last invoice."
  },
  {
    id: "04",
    tag: "INTELLIGENCE & ANALYTICS",
    title: "Unified Search, AI Visibility, and Business Analytics",
    href: "/services/intelligence-analytics/search-intelligence/",
    desc: "Every system Kynato builds is instrumented from day one. Clients always know what is working, what isn't, and what is being done about it.",
    features: [
      { t: "Unified Search Intelligence", d: "Multi-engine analytics dashboard consolidating Google, Bing, and AI engine impressions." },
      { t: "AI Visibility Tracking", d: "AI share of voice tracking, sentiment analysis in AI-generated brand mentions, competitor citation tracking." },
      { t: "Marketing ROI & Automation Performance", d: "Lead velocity rate tracking, CAC vs LTV modelling, automation error rate and hours-saved tracking." }
    ],
    outcome: "Complete visibility into your growth and operational efficiency — delivered in plain language without needing a data team."
  }
];

export function PracticeAreasSection() {
  return (
    <section className="py-24 md:py-32 bg-[#09090B]">
      <div className="container mx-auto px-4">
        <div className="mb-24 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal"
          >
            THE INTELLIGENCE ECOSYSTEM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            One System. Four Practice Areas.<br />
            <PointerHighlight containerClassName="mt-2 inline-block">
              <span>Everything Compounds.</span>
            </PointerHighlight>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-roboto text-muted-foreground text-lg leading-relaxed max-w-2xl"
          >
            Kynato doesn&apos;t sell AI software or run one-off campaigns. We build, integrate,
            and directly operate AI-powered systems across four interconnected practice areas —
            designed so that every capability feeds the next.
          </motion.p>
        </div>

        <div className="space-y-32">
          {practices.map((practice, idx) => (
            <div key={practice.id} className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Sticky Header Column */}
              <div className="md:col-span-5 md:sticky md:top-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-urbanist font-bold text-white/20">{practice.id}</span>
                  <span className="px-3 py-1 bg-accent-teal/10 border border-accent-teal/20 text-accent-teal rounded-full text-xs font-bold tracking-widest">
                    {practice.tag}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-urbanist">{practice.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-roboto">
                  {practice.desc}
                </p>
                <Link
                  href={practice.href}
                  className="inline-flex items-center text-white hover:text-accent-teal font-semibold group transition-colors"
                >
                  View Full Capability <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Scrolling Content Column */}
              <div className="md:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal opacity-[0.02] blur-3xl pointer-events-none" />
                  
                  <div className="space-y-10 relative z-10">
                    {practice.features.map((feature, fIdx) => (
                      <div key={fIdx}>
                        <h4 className="font-bold text-xl text-white mb-3 font-urbanist">{feature.t}</h4>
                        <p className="text-muted-foreground text-base leading-relaxed font-roboto">
                          {feature.d}
                        </p>
                      </div>
                    ))}
                    
                    <div className="bg-white/[0.02] p-6 rounded-xl border-l-4 border-accent-teal">
                      <p className="text-sm font-medium text-white/80 leading-relaxed">
                        <span className="text-accent-teal font-bold mr-2">Outcome:</span> 
                        {practice.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
