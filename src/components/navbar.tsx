"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const capabilities = [
  {
    id: "cap-1",
    title: "Search & Visibility",
    href: "/services/search-ai-visibility/seo/",
    services: [
      { title: "SEO & AI Visibility", href: "/services/search-ai-visibility/seo/" },
      { title: "GEO — AI Search", href: "/services/search-ai-visibility/ai-visibility/geo-optimisation/" },
      { title: "AEO — Answer Engine", href: "/services/search-ai-visibility/ai-visibility/aeo/" },
      { title: "AI Readiness Audit", href: "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/" },
      { title: "Local SEO India", href: "/services/search-ai-visibility/seo/local-seo/" },
    ],
  },
  {
    id: "cap-2",
    title: "Demand Generation",
    href: "/services/demand-generation/inbound-lead-architecture/",
    services: [
      { title: "Inbound Lead Architecture", href: "/services/demand-generation/inbound-lead-architecture/" },
      { title: "Outbound & Paid", href: "/services/demand-generation/outbound-paid-acquisition/" },
      { title: "AI Lead Scoring & Nurturing", href: "/services/demand-generation/ai-lead-nurturing/" },
    ],
  },
  {
    id: "cap-3",
    title: "Knowledge & Applied AI",
    href: "/services/knowledge-applied-ai/rag-systems/",
    services: [
      { title: "Knowledge AI & RAG", href: "/services/knowledge-applied-ai/rag-systems/" },
      { title: "Document Intelligence", href: "/services/knowledge-applied-ai/document-intelligence/" },
      { title: "AI Assistant Deployment", href: "/services/knowledge-applied-ai/ai-assistant/" },
    ],
  },
  {
    id: "cap-4",
    title: "Agentic Automation",
    href: "/services/agentic-automation/agentic-workflows/",
    services: [
      { title: "Agentic Workflow Design", href: "/services/agentic-automation/agentic-workflows/" },
      { title: "Core Business Automation", href: "/services/agentic-automation/core-automation/" },
      { title: "WhatsApp Automation", href: "/services/agentic-automation/conversational-automation/" },
      { title: "Voice AI", href: "/services/agentic-automation/conversational-automation/voice-ai/" },
      { title: "Content Production Automation", href: "/services/agentic-automation/conversational-automation/content-automation/" },
      { title: "RPA", href: "/services/agentic-automation/core-automation/rpa/" },
    ],
  },
  {
    id: "cap-5",
    title: "Intelligence & Analytics",
    href: "/services/intelligence-analytics/search-intelligence/",
    services: [
      { title: "Search & AI Analytics", href: "/services/intelligence-analytics/search-intelligence/" },
      { title: "AI Visibility Tracking", href: "/services/intelligence-analytics/ai-visibility-tracking/" },
      { title: "Business Performance", href: "/services/intelligence-analytics/business-analytics/" },
      { title: "Predictive Analytics", href: "/services/intelligence-analytics/business-analytics/predictive-analytics/" },
      { title: "Competitive Intelligence", href: "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/" },
    ],
  },
]

const intelligenceLabLinks = [
  { title: "Insights", href: "/intelligence-lab/" },
  { title: "Perspectives", href: "/intelligence-lab/" },
  { title: "Resources", href: "/intelligence-lab/" },
  { title: "Founder Notes", href: "/intelligence-lab/" },
  { title: "Case Studies", href: "/intelligence-lab/case-studies/" },
]

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Who We Work With", href: "/who-we-are" },
  { label: "About", href: "/who-we-are" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-syne font-black text-[1.25rem] tracking-[-0.02em] text-white hover:text-[#00FF88] transition-colors duration-300">
                KYNATO
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">

              {/* Capabilities dropdown */}
              <div className="group relative">
                <button className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  Capabilities
                  <span className="text-[10px] opacity-60">↓</span>
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[900px]">
                  <div className="bg-[#0E0E0E] border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                      <span className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.25em] uppercase">
                        Five Capabilities — Built &amp; Operated by Kynato
                      </span>
                      <Link href="/services/" className="font-jakarta text-[11px] font-semibold text-[#00FF88]/70 hover:text-[#00FF88] transition-colors flex items-center gap-1">
                        All capabilities <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {capabilities.map((cap) => (
                        <div key={cap.id}>
                          <Link href={cap.href} className="block font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.15em] uppercase mb-3 hover:text-[#00FF88] transition-colors">
                            {cap.title}
                          </Link>
                          <div className="space-y-0.5">
                            {cap.services.map((s) => (
                              <Link
                                key={s.href + s.title}
                                href={s.href}
                                className="block px-2 py-1.5 text-[12px] text-white/40 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-150"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Intelligence Lab dropdown */}
              <div className="group relative">
                <button className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  Intelligence Lab
                  <span className="text-[10px] opacity-60">↓</span>
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-3 w-[260px]">
                  <div className="bg-[#0E0E0E] border border-white/[0.08] rounded-2xl p-5 shadow-2xl">
                    <p className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.25em] uppercase mb-3">Intelligence Lab</p>
                    <div className="space-y-0.5">
                      {intelligenceLabLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="block px-2 py-2 text-[13px] text-white/50 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-150"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.12] text-white/40 hover:text-white hover:border-white/[0.25] transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark"
                    ? <Sun className="h-4 w-4" />
                    : <Moon className="h-4 w-4" />
                  }
                </button>
              )}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 h-9 border border-white/[0.15] rounded-lg text-[13px] font-semibold text-white hover:border-[#00FF88] hover:text-[#00FF88] transition-all duration-300 ml-1"
              >
                Talk to Our Team
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-[#080808]/98 backdrop-blur-2xl border-b border-white/[0.06] overflow-y-auto max-h-[85vh] transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 py-6 space-y-6">
          <div>
            <p className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.25em] uppercase mb-4">Capabilities</p>
            <div className="space-y-5">
              {capabilities.map((cap) => (
                <div key={cap.id}>
                  <p className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.15em] uppercase mb-2">{cap.title}</p>
                  <div className="pl-3 space-y-0.5 border-l border-white/[0.06]">
                    {cap.services.map((s) => (
                      <Link
                        key={s.href + s.title}
                        href={s.href}
                        className="block font-jakarta text-sm text-white/40 hover:text-white transition-colors py-1.5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-4">
            <p className="font-jakarta text-[10px] font-bold text-white/25 tracking-[0.25em] uppercase mb-3">Intelligence Lab</p>
            <div className="space-y-0.5">
              {intelligenceLabLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-jakarta text-sm text-white/40 hover:text-white transition-colors py-1.5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-jakarta text-sm font-medium text-white/50 hover:text-white transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-4 pb-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-12 border border-[#00FF88]/50 rounded-xl font-jakarta text-sm font-semibold text-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
