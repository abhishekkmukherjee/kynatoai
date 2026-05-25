"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Insights", "Perspectives", "Resources", "Founder Notes", "Case Studies"] as const;

const posts = [
  {
    category: "Insights",
    headline: "How to Get Your Business Cited in ChatGPT, Perplexity, and Google AI Overviews",
    excerpt: "Buyers get answers from AI before they click a result. Here is the specific architecture — citation authority, prompt-gap content, and source domain targeting — that gets Indian B2B businesses cited.",
    readTime: "8 min",
    tags: "GEO · AI Visibility",
    href: "/intelligence-lab/",
  },
  {
    category: "Case Studies",
    headline: "What a Running Agentic Workflow Actually Looks Like: A CA Firm Breakdown",
    excerpt: "Not theory. A step-by-step account of how we automated document collection, compliance reminders, and CRM updates — tools used, timeline, errors caught, exact hours saved.",
    readTime: "11 min",
    tags: "Agentic Automation · Knowledge AI",
    href: "/intelligence-lab/",
  },
  {
    category: "Perspectives",
    headline: "Why 70% of Inbound Leads Go Cold — and the System Architecture That Changes That",
    excerpt: "The first five minutes after a lead submits a form determines whether you win or lose the deal. Most businesses lose it. Here is the automated response architecture that fixes it.",
    readTime: "7 min",
    tags: "Demand Generation · Lead Generation",
    href: "/intelligence-lab/",
  },
  {
    category: "Founder Notes",
    headline: "Why We Built Kynato as an Intelligence Ecosystem, Not an Agency",
    excerpt: "Most AI agencies deliver a capability. We built Kynato to deliver a system — one where every part compounds every other. Here is the thinking behind the model, and why we think the agency era of AI is ending.",
    readTime: "6 min",
    tags: "Brand · Positioning",
    author: "Kynato Founding Team · Ranchi, India",
    href: "/intelligence-lab/",
  },
  {
    category: "Resources",
    headline: "The AI Readiness Checklist for Indian B2B Businesses (2026 Edition)",
    excerpt: "Before you can rank in ChatGPT, Perplexity, or Google AI Overviews, your website needs to be readable by AI crawlers. This checklist covers llms.txt, JavaScript rendering, Schema Actions, entity clarity, and agentic traffic monitoring.",
    readTime: "5 min",
    tags: "AI Readiness · GEO Foundation",
    cta: "Download",
    href: "/intelligence-lab/",
  },
  {
    category: "Insights",
    headline: "GEO vs AEO vs SEO: What Actually Matters for Indian B2B Businesses in 2026",
    excerpt: "Three disciplines, one overlapping goal: being found before the decision is made. Here is how to think about the relationship between traditional SEO, Answer Engine Optimisation, and Generative Engine Optimisation — and which to prioritise first.",
    readTime: "9 min",
    tags: "SEO · GEO · AEO",
    href: "/intelligence-lab/",
  },
];

export function IntelligenceLabSection() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>("All");

  const filtered = activeFilter === "All"
    ? posts
    : posts.filter(p => p.category === activeFilter);

  return (
    <section className="section-pad py-24 md:py-32 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>Intelligence Lab</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 md:mb-12">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              From the Intelligence Lab
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What We Know, We Publish.
            </h2>
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed">
              Original analysis, case breakdowns, and specific perspectives on AI visibility,
              agentic automation, and growth systems for Indian businesses. No fluff.
            </p>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-jakarta text-[11px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#027C88] text-white border-[#027C88]"
                  : "bg-white dark:bg-transparent text-gray-700 dark:text-white/60 border-gray-200 dark:border-white/[0.1] hover:border-gray-300 dark:hover:border-white/[0.2] hover:text-gray-700 dark:hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filtered.map((post, i) => (
            <div key={i} className="kyn-card overflow-hidden flex flex-col group">
              {/* Visual placeholder */}
              <div className="h-[100px] bg-gray-50 dark:bg-[#080808] flex items-center justify-center border-b border-gray-100 dark:border-white/[0.06]">
                <span className="font-jakarta text-[10px] text-gray-300 dark:text-white/25 tracking-widest uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="kyn-badge mb-3">{post.category}</span>

                <h3 className="font-syne font-bold text-gray-900 dark:text-white text-base leading-snug mb-3 flex-1">
                  {post.headline}
                </h3>

                <p className="font-jakarta text-gray-700 dark:text-white/60 text-[13px] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {post.author && (
                  <p className="font-jakarta text-[12px] text-gray-600 dark:text-white/50 mb-3">{post.author}</p>
                )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                  <span className="font-jakarta text-[11px] text-gray-600 dark:text-white/45">
                    {post.readTime} · {post.tags}
                  </span>
                  <Link
                    href={post.href}
                    className="font-jakarta text-[12px] font-semibold text-[#027C88] hover:text-[#026070] transition-colors flex items-center gap-1"
                  >
                    {post.cta ?? "Read"} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/intelligence-lab/"
          className="inline-flex items-center gap-2 px-6 h-11 border border-gray-200 dark:border-white/[0.12] rounded-xl font-jakarta text-sm font-medium text-gray-600 dark:text-white/70 hover:border-[#027C88]/40 hover:text-[#027C88] dark:hover:text-[#027C88]/70 transition-all duration-200"
        >
          Browse the Intelligence Lab <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
