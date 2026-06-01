"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Insights",
    headline: "How to Get Your Business Cited in ChatGPT, Perplexity, and Google AI Overviews",
    readTime: "8 min",
    tags: "GEO · AI Visibility",
    href: "/intelligence-lab/",
  },
  {
    category: "Case Studies",
    headline: "What a Running Agentic Workflow Actually Looks Like: A CA Firm Breakdown",
    readTime: "11 min",
    tags: "Agentic Automation · Knowledge AI",
    href: "/intelligence-lab/",
  },
  {
    category: "Perspectives",
    headline: "Why 70% of Inbound Leads Go Cold - and the System Architecture That Changes That",
    readTime: "7 min",
    tags: "Demand Generation · Lead Generation",
    href: "/intelligence-lab/",
  },
  {
    category: "Founder Notes",
    headline: "Why We Built Kynato as an Intelligence Ecosystem, Not an Agency",
    readTime: "6 min",
    tags: "Brand · Positioning",
    href: "/intelligence-lab/",
  },
  {
    category: "Resources",
    headline: "The AI Readiness Checklist for Indian B2B Businesses (2026 Edition)",
    readTime: "5 min",
    tags: "AI Readiness · GEO Foundation",
    href: "/intelligence-lab/",
  },
  {
    category: "Insights",
    headline: "GEO vs AEO vs SEO: What Actually Matters for Indian B2B Businesses in 2026",
    readTime: "9 min",
    tags: "SEO · GEO · AEO",
    href: "/intelligence-lab/",
  },
];

export function IntelligenceLabSection() {
  return (
    <section className="section-pad py-20 md:py-28 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span>Intelligence Lab</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2
            className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-2"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What We Know, We Publish.
          </h2>
          <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed">
            Original analysis, case breakdowns, and specific perspectives on AI visibility,
            agentic automation, and growth systems for Indian businesses. No fluff.
          </p>
        </div>

        {/* Post cards - horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:-mx-0 lg:px-0 mb-8">
          {posts.map((post, i) => (
            <div key={i} className="kyn-card overflow-hidden flex flex-col group min-w-[260px] sm:min-w-[300px] max-w-[340px] snap-start flex-shrink-0">
              <div className="h-[60px] bg-gray-50 dark:bg-[#080808] flex items-center justify-center border-b border-gray-100 dark:border-white/[0.06]">
                <span className="font-jakarta text-[10px] text-gray-300 dark:text-white/25 tracking-widest uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="kyn-badge mb-3">{post.category}</span>

                <h3 className="font-syne font-bold text-gray-900 dark:text-white text-sm leading-snug mb-3 flex-1">
                  {post.headline}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                  <span className="font-jakarta text-[11px] text-gray-600 dark:text-white/45">
                    {post.readTime} · {post.tags}
                  </span>
                  <Link
                    href={post.href}
                    className="font-jakarta text-[12px] font-semibold text-[#027C88] hover:text-[#026070] transition-colors flex items-center gap-1"
                  >
                    Read <ArrowRight className="h-3 w-3" />
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
