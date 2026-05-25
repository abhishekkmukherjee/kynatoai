import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
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
      { t: "Answer Engine Optimisation (AEO)", d: "AEO targets Featured Snippets and AI Overviews through FAQ schema and answer-first content architecture." },
    ],
    outcome: "Organic traffic that compounds month on month. AI citations in ChatGPT and Perplexity that drive inbound trust. Visibility that works while you sleep.",
    accentColor: "#027C88",
  },
  {
    id: "02",
    tag: "DEMAND GENERATION",
    title: "B2B Lead Generation and AI-Powered Conversion",
    href: "/services/demand-generation/inbound-lead-architecture/",
    desc: "Most lead generation breaks down in one of two places: capture or follow-up. Kynato designs and operates inbound and outbound lead engines that handle both — from first click to booked call.",
    features: [
      { t: "Inbound Lead Architecture", d: "Landing page CRO, AI-powered website chatbots, interactive lead magnets, and WhatsApp Business API lead integration." },
      { t: "Outbound and Paid Acquisition", d: "LinkedIn outreach automation, cold email sequencing with domain warm-up, and Google and Meta Ads with lead quality optimisation." },
      { t: "AI Lead Scoring and Nurturing", d: "Signal-weighted lead scoring models, qualification bots, and AI-powered nurturing sequences for every funnel stage." },
    ],
    outcome: "A lead pipeline that generates, qualifies, and nurtures — around the clock. From first click to booked call, automated.",
    accentColor: "#006AF0",
  },
  {
    id: "03",
    tag: "KNOWLEDGE & APPLIED AI",
    title: "Custom RAG Systems and AI Knowledge Intelligence",
    href: "/services/knowledge-applied-ai/rag-systems/",
    desc: "Your organisation already holds the knowledge. Kynato builds the AI layer over it — so your team and customers can query documents, circulars, and records in seconds rather than hours.",
    features: [
      { t: "Custom RAG Systems", d: "Retrieval-Augmented Generation systems that give businesses a searchable AI layer over their own documents, compliance data, and knowledge bases." },
      { t: "AI Assistant Deployment", d: "Internal and customer-facing AI assistants on WhatsApp and web — connected to your knowledge base, with access controls and vernacular language support." },
      { t: "Document Intelligence and Regulatory Search", d: "AI pipelines that extract, classify, and search across legal documents, GST circulars, RBI notifications, and case law." },
    ],
    outcome: "Every employee with an AI assistant that knows your documents as well as your best team member. Every query answered in seconds, with source attribution.",
    accentColor: "#7C3AED",
  },
  {
    id: "04",
    tag: "AGENTIC AUTOMATION",
    title: "Agentic Workflows and Business Process Automation",
    href: "/services/agentic-automation/agentic-workflows/",
    desc: "Kynato designs and deploys autonomous AI systems that handle complex multi-step operations — and automates the operational backbone that consumes your team's time every day.",
    features: [
      { t: "Agentic Workflow Systems", d: "Single and multi-agent AI pipelines that reason, use tools, handle edge cases, and complete complex operational work without constant human oversight." },
      { t: "Core Business Automation", d: "Document collection, compliance reminders, CRM auto-update, invoice generation, HR onboarding, and RPA — all automated and connected." },
      { t: "Conversational and Voice AI", d: "WhatsApp automation, AI phone answering, LinkedIn and email outreach, and omnichannel messaging — with vernacular language support." },
    ],
    outcome: "Hours of manual work eliminated every week. Systems that run 24/7 and hand off to humans only when genuinely required.",
    accentColor: "#D97706",
  },
  {
    id: "05",
    tag: "INTELLIGENCE & ANALYTICS",
    title: "Unified Search, AI Visibility, and Business Analytics",
    href: "/services/intelligence-analytics/search-intelligence/",
    desc: "Every system Kynato builds is instrumented from day one. Clients always know what is working, what isn't, and what is being done about it — in plain numbers, not activity reports.",
    features: [
      { t: "Unified Search Intelligence", d: "Multi-engine analytics dashboard consolidating Google, Bing, and AI engine impressions with weekly plain-English briefings from a smart analytical agent." },
      { t: "AI Visibility and Citation Tracking", d: "AI share of voice, sentiment analysis in AI-generated brand mentions, and multi-LLM citation tracking across ChatGPT, Perplexity, Gemini, and Claude." },
      { t: "Marketing ROI and Automation Performance", d: "Lead attribution, campaign ROI, funnel conversion analysis, automation hours-saved metrics, and predictive analytics for churn and demand." },
    ],
    outcome: "Complete visibility into your growth and operational efficiency — delivered in plain language. No data team required.",
    accentColor: "#059669",
  },
];

export function PracticeAreasSection() {
  return (
    <section className="py-28 md:py-36 bg-gray-50 dark:bg-[#030305] relative overflow-hidden section-line-top">

      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <span className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase">
            The Intelligence Ecosystem
          </span>
          <h2 className="font-urbanist font-black text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.025em] text-gray-900 dark:text-white mb-6">
            Five Capabilities.{" "}
            <PointerHighlight containerClassName="mt-1 inline-block">
              <span className="gradient-text-teal">One Intelligence Ecosystem.</span>
            </PointerHighlight>
          </h2>
          <p className="font-roboto text-gray-700 dark:text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            Kynato doesn&apos;t sell AI software or run one-off campaigns. We build, integrate,
            and directly operate AI-powered systems across five interconnected capabilities —
            designed so that every service feeds the next. Measured by revenue gained or hours saved.
          </p>
        </div>

        {/* Practice Cards */}
        <div className="space-y-5">
          {practices.map((practice) => (
            <div
              key={practice.id}
              className="group relative rounded-2xl overflow-hidden shimmer-on-hover"
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${practice.accentColor}20 0%, transparent 50%, ${practice.accentColor}10 100%)`, outline: `1px solid ${practice.accentColor}20` }}
              />

              {/* Card itself */}
              <div className="relative border border-gray-200 dark:border-white/[0.06] group-hover:border-gray-300 dark:group-hover:border-white/[0.1] transition-colors duration-500 rounded-2xl bg-white dark:bg-black/40 backdrop-blur-sm">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${practice.accentColor}50 40%, ${practice.accentColor}80 50%, ${practice.accentColor}50 60%, transparent 100%)` }}
                />

                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none"
                  style={{ background: practice.accentColor }}
                />

                <div className="grid md:grid-cols-12 gap-0">
                  {/* Left Column */}
                  <div className="md:col-span-4 p-8 md:p-10 md:border-r border-white/[0.04]">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[3rem] font-urbanist font-black text-gray-200 dark:text-white/[0.05] leading-none select-none">
                        {practice.id}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black tracking-[0.12em] uppercase border transition-all duration-300"
                        style={{
                          color: practice.accentColor,
                          borderColor: `${practice.accentColor}28`,
                          background: `${practice.accentColor}0c`,
                        }}
                      >
                        {practice.tag}
                      </span>
                    </div>
                    <h3 className="font-urbanist font-black text-2xl md:text-[1.6rem] text-gray-900 dark:text-white mb-5 leading-snug">
                      {practice.title}
                    </h3>
                    <p className="font-roboto text-gray-700 dark:text-white/60 text-sm leading-relaxed mb-8">
                      {practice.desc}
                    </p>
                    <Link
                      href={practice.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white group/link transition-all duration-300"
                    >
                      View Full Capability
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-8 p-8 md:p-10">
                    <div className="space-y-5">
                      {practice.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-4 group/feat">
                          <div
                            className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300"
                            style={{
                              background: `${practice.accentColor}10`,
                              borderColor: `${practice.accentColor}22`,
                            }}
                          >
                            <Check className="h-2.5 w-2.5" style={{ color: practice.accentColor }} />
                          </div>
                          <div>
                            <h4 className="font-urbanist font-bold text-base text-gray-900 dark:text-white mb-1.5 transition-colors">
                              {feature.t}
                            </h4>
                            <p className="font-roboto text-gray-600 dark:text-white/55 text-sm leading-relaxed">
                              {feature.d}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Outcome */}
                      <div
                        className="mt-6 p-5 rounded-xl border-l-2 bg-white/[0.02] backdrop-blur-sm"
                        style={{ borderColor: practice.accentColor }}
                      >
                        <p className="text-sm text-gray-600 dark:text-white/65 font-roboto leading-relaxed">
                          <span className="font-bold mr-2" style={{ color: practice.accentColor }}>Outcome:</span>
                          {practice.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
