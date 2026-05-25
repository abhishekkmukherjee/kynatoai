"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#07070C] border-t border-gray-200 dark:border-white/[0.05] relative overflow-hidden">

      {/* Near-footer brand description band */}
      <div className="border-b border-gray-200 dark:border-white/[0.05] py-10 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-[640px]">
            <p className="font-syne font-black text-gray-900 dark:text-white text-2xl tracking-tight mb-2">KYNATO</p>
            <p className="font-jakarta text-[#027C88] text-sm font-semibold mb-4">Make Intelligence Work.</p>
            <p className="font-jakarta text-gray-600 dark:text-white/80 text-[13px] leading-relaxed">
              Kynato is an AI services consultancy based in India that functions as an intelligence
              ecosystem, building and operating growth, intelligence, and automation systems for
              B2B businesses. Five practice areas: Search Engine Optimisation (SEO) and AI Visibility,
              Demand Generation, Knowledge AI, Agentic Automation, and Business Performance Analytics.
            </p>
            <p className="font-jakarta text-gray-500 dark:text-white/65 text-[13px] mt-3 italic">
              We don&apos;t sell AI. We deploy it where your revenue lives.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 pt-14 md:pt-18 pb-0">

        {/* 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-16">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <span className="font-syne font-black text-gray-900 dark:text-white text-2xl tracking-tight block mb-1">
                KYNATO
              </span>
              <span className="font-jakarta text-[11px] font-semibold text-[#027C88] tracking-wider uppercase">
                Make Intelligence Work.
              </span>
            </div>
            <p className="font-jakarta text-gray-600 dark:text-white/80 text-[13px] leading-relaxed max-w-full md:max-w-[240px]">
              AI intelligence ecosystem building and operating growth, knowledge, and automation systems for Indian B2B businesses.
            </p>
            <a
              href="mailto:hello@kynato.com"
              className="block font-jakarta text-sm text-gray-500 dark:text-white/60 hover:text-[#027C88] transition-colors duration-200"
            >
              hello@kynato.com
            </a>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/company/kynato"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-white/65 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/[0.2] transition-all duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/kynato"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-white/65 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/[0.2] transition-all duration-200"
              >
                <span className="sr-only">Twitter / X</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/kynato"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-white/65 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/[0.2] transition-all duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Capabilities */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-5 sm:gap-7">
            <div className="space-y-6">
              <div>
                <h4 className="font-jakarta text-[10px] font-black text-[#027C88] mb-3 tracking-wider uppercase">
                  Search &amp; Visibility
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "SEO & AI Visibility", href: "/services/search-ai-visibility/seo/" },
                    { label: "Generative Engine Optimisation", href: "/services/search-ai-visibility/ai-visibility/geo-optimisation/" },
                    { label: "Answer Engine Optimisation", href: "/services/search-ai-visibility/ai-visibility/aeo/" },
                    { label: "AI Readiness Audit", href: "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/" },
                    { label: "Local SEO India", href: "/services/search-ai-visibility/seo/local-seo/" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-jakarta text-[10px] font-black text-[#027C88] mb-3 tracking-wider uppercase">
                  Demand Generation
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Inbound Lead Architecture", href: "/services/demand-generation/inbound-lead-architecture/" },
                    { label: "Outbound & Paid Acquisition", href: "/services/demand-generation/outbound-paid-acquisition/" },
                    { label: "AI Lead Scoring & Nurturing", href: "/services/demand-generation/ai-lead-nurturing/" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-jakarta text-[10px] font-black text-[#027C88] mb-3 tracking-wider uppercase">
                  Knowledge &amp; Applied AI
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Knowledge AI & RAG Systems", href: "/services/knowledge-applied-ai/rag-systems/" },
                    { label: "Document Intelligence", href: "/services/knowledge-applied-ai/document-intelligence/" },
                    { label: "AI Assistant Deployment", href: "/services/knowledge-applied-ai/ai-assistant/" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-jakarta text-[10px] font-black text-[#027C88] mb-3 tracking-wider uppercase">
                  Agentic Automation
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Agentic Workflow Automation", href: "/services/agentic-automation/agentic-workflows/" },
                    { label: "Core Business Automation", href: "/services/agentic-automation/core-automation/" },
                    { label: "WhatsApp Automation", href: "/services/agentic-automation/conversational-automation/" },
                    { label: "Voice AI", href: "/services/agentic-automation/conversational-automation/voice-ai/" },
                    { label: "Content Production Automation", href: "/services/agentic-automation/conversational-automation/content-automation/" },
                    { label: "RPA", href: "/services/agentic-automation/core-automation/" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-jakarta text-[10px] font-black text-[#027C88] mb-3 tracking-wider uppercase">
                  Intelligence &amp; Analytics
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Search & AI Analytics", href: "/services/intelligence-analytics/search-intelligence/" },
                    { label: "AI Visibility Tracking", href: "/services/intelligence-analytics/ai-visibility-tracking/" },
                    { label: "Business Performance Analytics", href: "/services/intelligence-analytics/business-analytics/" },
                    { label: "Predictive Analytics", href: "/services/intelligence-analytics/business-analytics/predictive-analytics/" },
                    { label: "Competitive Intelligence", href: "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3 — Intelligence Lab + Company */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <h4 className="font-jakarta text-[10px] font-black text-gray-700 dark:text-white/80 mb-3 tracking-wider uppercase">
                Intelligence Lab
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Insights", href: "/intelligence-lab/" },
                  { label: "Perspectives", href: "/intelligence-lab/" },
                  { label: "Resources", href: "/intelligence-lab/" },
                  { label: "Founder Notes", href: "/intelligence-lab/" },
                  { label: "Case Studies", href: "/intelligence-lab/case-studies/" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-jakarta text-[10px] font-black text-gray-700 dark:text-white/80 mb-3 tracking-wider uppercase">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "About Kynato", href: "/who-we-are" },
                  { label: "Industries", href: "/industries" },
                  { label: "Who We Work With", href: "/who-we-are" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-jakarta text-[10px] font-black text-gray-700 dark:text-white/80 mb-3 tracking-wider uppercase">
                Start Here
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="font-jakarta text-[13px] font-semibold text-[#027C88] hover:text-[#026070] link-underline transition-colors duration-200">
                    Talk to Our Team →
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                    Send a Message →
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/91" className="font-jakarta text-[13px] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                    WhatsApp Us →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-white/[0.06] py-5 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <ModeToggle />
            <div className="font-jakarta text-[12px] text-gray-500 dark:text-white/65">
              <p>© 2026 Kynato Nexinnovations LLP. All rights reserved.</p>
              <div className="mt-1 flex items-center gap-3">
                <Link href="/privacy" className="hover:text-gray-700 dark:hover:text-white/70 transition-colors duration-200">Privacy Policy</Link>
                <span className="text-gray-300 dark:text-white/[0.1]">·</span>
                <Link href="/terms" className="hover:text-gray-700 dark:hover:text-white/70 transition-colors duration-200">Terms of Service</Link>
                <span className="text-gray-300 dark:text-white/[0.1]">·</span>
                <Link href="/sitemap" className="hover:text-gray-700 dark:hover:text-white/70 transition-colors duration-200">Sitemap</Link>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="font-jakarta block text-[12px] font-bold text-gray-400 dark:text-white/35 mb-0.5 tracking-wider">
              Built in India. Deployed everywhere.
            </span>
            <span className="font-jakarta text-[11px] text-gray-400 dark:text-white/25 leading-relaxed">
              AI Intelligence Ecosystem · GEO Services India · AI Visibility · Knowledge AI · RAG Systems · Agentic Automation India
            </span>
          </div>
        </div>
      </div>

      {/* Brand watermark */}
      <div className="overflow-hidden pt-2 pb-0">
        <p
          className="font-syne font-black leading-none tracking-[-0.04em] text-gray-200 dark:text-white/[0.03] select-none whitespace-nowrap w-full text-center"
          style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
        >
          KYNATO
        </p>
      </div>
    </footer>
  );
}
