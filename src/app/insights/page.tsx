import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Insights | Kynato — AI Agency India",
  description:
    "Intelligence Lab — Kynato's insights on SEO, AI Visibility, GEO, AEO, Knowledge AI, Agentic Automation, and business analytics for Indian businesses.",
  keywords:
    "AI agency blog India, GEO insights India, SEO AI visibility blog India, agentic automation insights India, Knowledge AI blog India",
  alternates: {
    canonical: "https://kynato.com/insights",
  },
}

const categories = [
  { label: "Search & AI Visibility", href: "/insights/search-ai-visibility" },
  { label: "Demand Generation", href: "/insights/demand-generation" },
  { label: "Knowledge & Applied AI", href: "/insights/knowledge-applied-ai" },
  { label: "Agentic Automation", href: "/insights/agentic-automation" },
  { label: "Intelligence & Analytics", href: "/insights/intelligence-analytics" },
]

const featuredPosts = [
  {
    category: "Search & AI Visibility",
    title: "What Is Generative Engine Optimisation (GEO) and Why Every B2B Business in India Needs It Now",
    excerpt:
      "AI Overviews now appear in over 13% of Google queries. Buyers are getting answers from ChatGPT and Perplexity before clicking any website. Here's how GEO works and what you need to do about it.",
    date: "2026-05-01",
    readTime: "8 min read",
    href: "/insights/geo-for-b2b-india",
  },
  {
    category: "Knowledge & Applied AI",
    title: "RAG Systems for CA Firms in India: How to Build an AI Layer Over Your Compliance Data",
    excerpt:
      "Institutional knowledge trapped in PDFs, WhatsApp threads, and email is costing CA firms hours every week. Here's what a custom RAG system looks like in practice.",
    date: "2026-04-18",
    readTime: "10 min read",
    href: "/insights/rag-for-ca-firms-india",
  },
  {
    category: "Agentic Automation",
    title: "The Difference Between a Chatbot, a Workflow Tool, and an Agentic System",
    excerpt:
      "Most businesses have tried chatbots. Many have tried Zapier. Few have deployed agentic systems. Here's what actually separates them — and why it matters for your operations.",
    date: "2026-04-05",
    readTime: "7 min read",
    href: "/insights/agentic-vs-chatbot-vs-workflow",
  },
  {
    category: "Search & AI Visibility",
    title: "AEO vs SEO vs GEO: A Clear Breakdown for Indian Business Owners",
    excerpt:
      "Three disciplines. One goal: visibility where your buyers are looking. Here is a clean breakdown of SEO, AEO, and GEO — what each one does, and how they compound together.",
    date: "2026-03-22",
    readTime: "9 min read",
    href: "/insights/aeo-seo-geo-explained-india",
  },
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#027C88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              INTELLIGENCE LAB
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-3xl leading-tight">
              Insights on AI, Search, and Automation
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-2xl leading-relaxed">
              Practical intelligence on building AI systems that produce measurable outcomes — for founders, growth teams, and operations leaders in India.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 border-b border-white/5 bg-[#09090B] sticky top-16 z-30">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
              <button className="shrink-0 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/30 text-accent-teal text-sm font-semibold whitespace-nowrap">
                All Topics
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.href}
                  className="shrink-0 px-4 py-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:border-white/30 text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {featuredPosts.map((post) => (
                <article
                  key={post.href}
                  className="group bg-[#09090B] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-accent-teal tracking-wider uppercase">
                      {post.category}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="font-urbanist font-bold text-xl text-white mb-4 leading-snug group-hover:text-accent-teal transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-roboto">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all"
                    >
                      Read <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 py-12 border border-white/5 rounded-2xl bg-[#09090B] text-center max-w-5xl">
              <h3 className="font-urbanist font-bold text-2xl text-white mb-3">More Insights Coming</h3>
              <p className="text-muted-foreground font-roboto mb-0">
                Kynato publishes practical intelligence on AI systems, search visibility, and automation — without filler or hype.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
