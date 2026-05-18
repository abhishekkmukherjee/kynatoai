import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-white/[0.04] pt-16 pb-8 relative overflow-hidden">
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#027C88]/[0.025] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 — Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-urbanist font-black text-2xl gradient-text-teal tracking-tight block mb-1">
                KYNATO
              </span>
              <span className="text-xs font-bold text-white/30 tracking-[0.15em] uppercase">Make Intelligence Work.</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              Kynato is a B2B artificial intelligence (AI) agency based in India that functions
              as an intelligence ecosystem, building and operating growth, intelligence, and
              automation systems for businesses.
            </p>
            <div className="pt-1">
              <a
                href="mailto:hello@kynato.com"
                className="text-sm font-medium text-white/50 hover:text-accent-teal transition-colors duration-300"
              >
                hello@kynato.com
              </a>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/company/KynatoAI"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/KynatoAI"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="sr-only">Twitter / X</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Search & Demand */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Search &amp; AI Visibility</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/services/search-ai-visibility/seo/" className="hover:text-white transition-colors duration-300">SEO &amp; Organic Visibility</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/technical-seo" className="hover:text-white transition-colors duration-300">Technical SEO</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/content-strategy" className="hover:text-white transition-colors duration-300">Content Strategy &amp; Authority</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/local-seo" className="hover:text-white transition-colors duration-300">Local SEO India</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/" className="hover:text-white transition-colors duration-300">AI Search Visibility &amp; GEO</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/geo-optimisation/" className="hover:text-white transition-colors duration-300">Generative Engine Opt. (GEO)</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/aeo/" className="hover:text-white transition-colors duration-300">Answer Engine Opt. (AEO)</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Demand Generation</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/services/demand-generation/inbound-lead-architecture/" className="hover:text-white transition-colors duration-300">Inbound Lead Architecture</Link></li>
                <li><Link href="/services/demand-generation/outbound-paid-acquisition/" className="hover:text-white transition-colors duration-300">Outbound &amp; Paid Acquisition</Link></li>
                <li><Link href="/services/demand-generation/ai-lead-nurturing/" className="hover:text-white transition-colors duration-300">AI Lead Nurturing</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 — Knowledge, Agentic, Analytics */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Knowledge &amp; Applied AI</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/services/knowledge-applied-ai/rag-systems/" className="hover:text-white transition-colors duration-300">Custom RAG Systems</Link></li>
                <li><Link href="/services/knowledge-applied-ai/ai-assistant/" className="hover:text-white transition-colors duration-300">AI Assistant Deployment</Link></li>
                <li><Link href="/services/knowledge-applied-ai/document-intelligence/" className="hover:text-white transition-colors duration-300">Document Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Agentic Automation</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/services/agentic-automation/agentic-workflows/" className="hover:text-white transition-colors duration-300">Agentic Workflow Systems</Link></li>
                <li><Link href="/services/agentic-automation/core-automation/" className="hover:text-white transition-colors duration-300">Core Process Automation</Link></li>
                <li><Link href="/services/agentic-automation/conversational-automation/" className="hover:text-white transition-colors duration-300">Conversational Automation &amp; Voice AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Intelligence &amp; Analytics</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/services/intelligence-analytics/search-intelligence/" className="hover:text-white transition-colors duration-300">Search Intelligence</Link></li>
                <li><Link href="/services/intelligence-analytics/ai-visibility-tracking/" className="hover:text-white transition-colors duration-300">AI Visibility Tracking</Link></li>
                <li><Link href="/services/intelligence-analytics/business-analytics/" className="hover:text-white transition-colors duration-300">Business Analytics</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4 — Company */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Company</h4>
              <ul className="space-y-2 text-sm text-white/30">
                <li><Link href="/who-we-are" className="hover:text-white transition-colors duration-300">Who We Are</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-colors duration-300">Industries</Link></li>
                <li><Link href="/insights" className="hover:text-white transition-colors duration-300">Insights</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors duration-300">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-white/40 mb-4 tracking-[0.2em] uppercase">Quick Actions</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link href="/strategy" className="text-accent-teal/80 hover:text-accent-teal transition-colors duration-300 flex items-center gap-1.5">
                    Book a Strategy Call <span className="opacity-60">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                    Send a Message <span className="opacity-60">→</span>
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/919100000000" className="text-white/30 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                    WhatsApp Us <span className="opacity-60">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-white/20">
            <p>© 2026 Kynato Nexinnovations LLP. All rights reserved.</p>
            <div className="mt-1.5 flex items-center gap-2">
              <Link href="/privacy" className="hover:text-white/50 transition-colors duration-300">Privacy Policy</Link>
              <span className="text-white/[0.1]">·</span>
              <Link href="/terms" className="hover:text-white/50 transition-colors duration-300">Terms of Service</Link>
              <span className="text-white/[0.1]">·</span>
              <Link href="/sitemap" className="hover:text-white/50 transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-xs font-bold text-white/30 mb-1 tracking-wider">Built in India. Deployed everywhere.</span>
            <span className="text-[10px] text-white/15 leading-relaxed">
              AI Agency India · GEO Agency India · AI Visibility · Knowledge AI · RAG Systems · Agentic Automation India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
