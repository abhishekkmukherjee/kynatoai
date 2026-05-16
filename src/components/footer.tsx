import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 — Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-urbanist font-black text-2xl text-accent-teal tracking-tight block mb-1">
                KYNATO
              </span>
              <span className="text-sm font-semibold text-muted-foreground">Make Intelligence Work.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kynato is a B2B artificial intelligence (AI) agency based in India that functions
              as an intelligence ecosystem, building and operating growth, intelligence, and
              automation systems for businesses.
            </p>
            <div className="pt-2">
              <a href="mailto:hello@kynato.com" className="text-sm font-medium hover:text-accent-teal transition-colors">
                hello@kynato.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/KynatoAI" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com/KynatoAI" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter / X</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Search & AI Visibility + Demand Generation */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 tracking-widest uppercase">Search &amp; AI Visibility</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/search-ai-visibility/seo/" className="hover:text-foreground transition-colors">SEO &amp; Organic Visibility</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/technical-seo" className="hover:text-foreground transition-colors">Technical SEO</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/content-strategy" className="hover:text-foreground transition-colors">Content Strategy &amp; Authority</Link></li>
                <li><Link href="/services/search-ai-visibility/seo/local-seo" className="hover:text-foreground transition-colors">Local SEO India</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/" className="hover:text-foreground transition-colors">AI Search Visibility &amp; GEO</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/geo-optimisation/" className="hover:text-foreground transition-colors">Generative Engine Opt. (GEO)</Link></li>
                <li><Link href="/services/search-ai-visibility/ai-visibility/aeo/" className="hover:text-foreground transition-colors">Answer Engine Opt. (AEO)</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 mt-6 tracking-widest uppercase">Demand Generation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/demand-generation/inbound-lead-architecture/" className="hover:text-foreground transition-colors">Inbound Lead Architecture</Link></li>
                <li><Link href="/services/demand-generation/outbound-paid-acquisition/" className="hover:text-foreground transition-colors">Outbound &amp; Paid Acquisition</Link></li>
                <li><Link href="/services/demand-generation/ai-lead-nurturing/" className="hover:text-foreground transition-colors">AI Lead Nurturing</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 — Knowledge & Applied AI + Agentic + Analytics */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 tracking-widest uppercase">Knowledge &amp; Applied AI</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/knowledge-applied-ai/rag-systems/" className="hover:text-foreground transition-colors">Custom RAG Systems</Link></li>
                <li><Link href="/services/knowledge-applied-ai/ai-assistant/" className="hover:text-foreground transition-colors">AI Assistant Deployment</Link></li>
                <li><Link href="/services/knowledge-applied-ai/document-intelligence/" className="hover:text-foreground transition-colors">Document Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 mt-6 tracking-widest uppercase">Agentic Automation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/agentic-automation/agentic-workflows/" className="hover:text-foreground transition-colors">Agentic Workflow Systems</Link></li>
                <li><Link href="/services/agentic-automation/core-automation/" className="hover:text-foreground transition-colors">Core Process Automation</Link></li>
                <li><Link href="/services/agentic-automation/conversational-automation/" className="hover:text-foreground transition-colors">Conversational Automation &amp; Voice AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 mt-6 tracking-widest uppercase">Intelligence &amp; Analytics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/intelligence-analytics/search-intelligence/" className="hover:text-foreground transition-colors">Search Intelligence</Link></li>
                <li><Link href="/services/intelligence-analytics/ai-visibility-tracking/" className="hover:text-foreground transition-colors">AI Visibility Tracking</Link></li>
                <li><Link href="/services/intelligence-analytics/business-analytics/" className="hover:text-foreground transition-colors">Business Analytics</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4 — Company */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 tracking-widest uppercase">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/who-we-are" className="hover:text-foreground transition-colors">Who We Are</Link></li>
                <li><Link href="/industries" className="hover:text-foreground transition-colors">Industries</Link></li>
                <li><Link href="/insights" className="hover:text-foreground transition-colors">Insights</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground mb-4 mt-6 tracking-widest uppercase">Quick Actions</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><Link href="/strategy" className="text-accent-blue hover:underline">Book a Strategy Call →</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Send a Message →</Link></li>
                <li><a href="https://wa.me/919100000000" className="hover:text-foreground transition-colors">WhatsApp Us →</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground space-y-4 md:space-y-0">
          <div>
            © 2026 Kynato Nexinnovations LLP. All rights reserved.<br />
            <span className="mt-1 block space-x-2">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-foreground">Sitemap</Link>
            </span>
          </div>
          <div className="text-right">
            <span className="block font-medium text-foreground mb-1">Built in India. Deployed everywhere.</span>
            AI Agency India | GEO Agency India | AI Visibility | Knowledge AI | RAG Systems | Agentic Automation India
          </div>
        </div>
      </div>
    </footer>
  )
}
