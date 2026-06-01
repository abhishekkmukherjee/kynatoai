"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"

const capabilities = [
  {
    id: "cap-1",
    title: "Search & AI Visibility",
    href: "#",
    l2: [
      { title: "Search Engine Optimisation & Visibility", href: "#", l3: ["Technical SEO Services", "Core Web Vitals Optimisation", "Keyword & Topic Architecture", "Content SEO"] },
      { title: "GEO - Generative Engine Optimisation", href: "#", l3: ["Citation Authority Building", "Prompt-Gap Content", "Brand Co-Occurrence"] },
      { title: "AEO - Answer Engine Optimisation", href: "#", l3: ["Featured Snippet Optimisation", "FAQ & Schema Markup", "People Also Ask Strategy"] },
      { title: "AI Readiness Audit", href: "#", l3: ["llms.txt Deployment", "AI Crawler Access", "Schema Actions"] },
      { title: "Local SEO India", href: "#", l3: [] },
    ],
  },
  {
    id: "cap-2",
    title: "Demand Generation",
    href: "#",
    l2: [
      { title: "Inbound Lead Architecture", href: "#", l3: ["Lead Capture Systems", "CRM Integration", "Lead Qualification"] },
      { title: "Outbound & Paid Acquisition", href: "#", l3: ["LinkedIn Outreach", "Paid Campaign Management"] },
      { title: "AI Lead Scoring & Nurturing", href: "#", l3: ["Nurture Sequences", "WhatsApp Lead Capture"] },
    ],
  },
  {
    id: "cap-3",
    title: "Knowledge & Applied AI",
    href: "#",
    l2: [
      { title: "Knowledge AI & RAG Systems", href: "#", l3: ["Custom RAG Build", "Document Ingestion", "Knowledge Gap Detection"] },
      { title: "Document Intelligence", href: "#", l3: ["PDF Intelligence", "Compliance Document AI"] },
      { title: "AI Assistant Deployment", href: "#", l3: ["Internal AI Assistant", "Customer-facing AI"] },
    ],
  },
  {
    id: "cap-4",
    title: "Agentic Automation",
    href: "#",
    l2: [
      { title: "Agentic Workflow Design", href: "#", l3: ["Multi-step Agent Workflows", "Decision-tree Automation"] },
      { title: "Core Business Automation", href: "#", l3: ["CRM Auto-update", "Invoice Automation", "Compliance Reminders"] },
      { title: "WhatsApp & Voice Automation", href: "#", l3: ["WhatsApp Business API", "Voice AI", "DLT SMS"] },
      { title: "Content Production Automation", href: "#", l3: ["AI Content Pipeline", "Multi-platform Publishing"] },
      { title: "RPA", href: "#", l3: ["Legacy Portal Automation"] },
    ],
  },
  {
    id: "cap-5",
    title: "Intelligence & Analytics",
    href: "#",
    l2: [
      { title: "Search & AI Analytics", href: "#", l3: ["Rank Tracking", "AI Citation Monitoring"] },
      { title: "AI Visibility Tracking", href: "#", l3: ["Citation Share of Voice", "Competitive AI Presence"] },
      { title: "Business Performance Analytics", href: "#", l3: ["Revenue Attribution", "Pipeline Analytics"] },
      { title: "Predictive Analytics", href: "#", l3: [] },
      { title: "Competitive Intelligence", href: "#", l3: [] },
    ],
  },
]

const intelligenceLabLinks = [
  { title: "Insights", href: "#" },
  { title: "Perspectives", href: "#" },
  { title: "Resources", href: "#" },
  { title: "Founder Notes", href: "#" },
  { title: "Case Studies", href: "/intelligence-lab/case-studies/" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [capOpen, setCapOpen] = React.useState(false)
  const [labOpen, setLabOpen] = React.useState(false)
  const { openSidebar } = useSidebar()
  const capRef = React.useRef<HTMLDivElement>(null)
  const labRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (capRef.current && !capRef.current.contains(e.target as Node)) setCapOpen(false)
      if (labRef.current && !labRef.current.contains(e.target as Node)) setLabOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/98 dark:bg-[#080808]/98 backdrop-blur-md border-b border-gray-100 dark:border-white/[0.06] shadow-sm dark:shadow-none">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-syne font-black text-[1.25rem] tracking-[-0.02em] text-gray-900 dark:text-white hover:text-[#027C88] transition-colors duration-200">
                KYNATO
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">

              {/* Capabilities dropdown */}
              <div ref={capRef} className="relative">
                <button
                  onClick={() => { setCapOpen(v => !v); setLabOpen(false) }}
                  className="px-4 py-2 text-[15px] font-medium text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  Capabilities
                  <span className="text-[10px] opacity-50 transition-transform duration-200" style={{ display: 'inline-block', transform: capOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>

                {/* Full-width capabilities panel */}
                {capOpen && (
                  <div className="fixed left-0 right-0 top-16 z-50 bg-white dark:bg-[#0E0E0E] border-b border-gray-100 dark:border-white/[0.08] shadow-xl dark:shadow-2xl">
                    <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6">
                      <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
                        <span className="font-jakarta text-[11px] font-bold text-gray-500 dark:text-white/50 tracking-[0.22em] uppercase">
                          Five Capabilities - Built &amp; Operated by Kynato
                        </span>
                        <Link href="/services/" onClick={() => setCapOpen(false)} className="font-jakarta text-[12px] font-semibold text-[#027C88] hover:text-[#026070] transition-colors flex items-center gap-1">
                          All Capabilities <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-5 gap-6">
                        {capabilities.map((cap) => (
                          <div key={cap.id}>
                            <p className="font-jakarta text-[11px] font-bold text-[#027C88] tracking-[0.15em] uppercase mb-3">
                              {cap.title}
                            </p>
                            <div className="space-y-3">
                              {cap.l2.map((l2item) => (
                                <div key={l2item.title}>
                                  <Link
                                    href={l2item.href}
                                    onClick={() => setCapOpen(false)}
                                    className="block font-jakarta text-[13px] font-semibold text-gray-800 dark:text-white/80 hover:text-[#027C88] dark:hover:text-[#027C88] transition-colors duration-150 mb-1"
                                  >
                                    {l2item.title}
                                  </Link>
                                  {l2item.l3.length > 0 && (
                                    <div className="pl-2 space-y-0.5 border-l border-gray-100 dark:border-white/[0.06]">
                                      {l2item.l3.map((l3item) => (
                                        <Link
                                          key={l3item}
                                          href="#"
                                          onClick={() => setCapOpen(false)}
                                          className="block font-jakarta text-[11.5px] text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70 transition-colors duration-150 py-0.5"
                                        >
                                          {l3item}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/industries" className="px-4 py-2 text-[15px] font-medium text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                Industries
              </Link>

              <Link href="/who-we-are" className="px-4 py-2 text-[15px] font-medium text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                Who We Work With
              </Link>

              <Link href="/who-we-are" className="px-4 py-2 text-[15px] font-medium text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                About
              </Link>

              {/* Intelligence Lab dropdown */}
              <div ref={labRef} className="relative">
                <button
                  onClick={() => { setLabOpen(v => !v); setCapOpen(false) }}
                  className="px-4 py-2 text-[15px] font-medium text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  Intelligence Lab
                  <span className="text-[10px] opacity-50" style={{ display: 'inline-block', transform: labOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {labOpen && (
                  <div className="absolute top-full right-0 pt-2 w-[220px] z-50">
                    <div className="bg-white dark:bg-[#0E0E0E] border border-gray-100 dark:border-white/[0.08] rounded-2xl p-4 shadow-xl dark:shadow-2xl">
                      <p className="font-jakarta text-[10px] font-bold text-gray-500 dark:text-white/50 tracking-[0.22em] uppercase mb-3">Intelligence Lab</p>
                      <div className="space-y-0.5">
                        {intelligenceLabLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            onClick={() => setLabOpen(false)}
                            className="block px-2 py-2 text-[14px] text-gray-700 dark:text-white/65 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/[0.04] rounded-lg transition-all duration-150"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#talk"
                onClick={(e) => { e.preventDefault(); openSidebar(); }}
                className="inline-flex items-center justify-center px-5 h-9 bg-[#006AF0] text-white rounded-lg text-[14px] font-semibold font-jakarta hover:bg-[#0052C4] transition-colors duration-200"
              >
                Talk to Our Team
              </a>
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); openSidebar(); }}
                className="inline-flex items-center justify-center px-5 h-9 bg-[#027C88] text-white rounded-lg text-[14px] font-semibold font-jakarta hover:bg-[#026070] transition-colors duration-200"
              >
                Book a Free Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-[#080808] border-b border-gray-100 dark:border-white/[0.06] overflow-y-auto max-h-[85vh] transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 py-6 space-y-6">
          <div>
            <p className="font-jakarta text-[11px] font-bold text-gray-500 dark:text-white/50 tracking-[0.22em] uppercase mb-4">Capabilities</p>
            <div className="space-y-5">
              {capabilities.map((cap) => (
                <div key={cap.id}>
                  <p className="font-jakarta text-[11px] font-bold text-[#027C88] tracking-[0.15em] uppercase mb-2">{cap.title}</p>
                  <div className="pl-3 space-y-0.5 border-l border-gray-100 dark:border-white/[0.06]">
                    {cap.l2.map((l2item) => (
                      <Link
                        key={l2item.title}
                        href={l2item.href}
                        className="block font-jakarta text-[14px] text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l2item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-white/[0.06] pt-4 space-y-0.5">
            {[
              { label: "Industries", href: "/industries" },
              { label: "Who We Work With", href: "/who-we-are" },
              { label: "About", href: "/who-we-are" },
              { label: "Intelligence Lab", href: "#" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-jakarta text-[15px] font-medium text-gray-600 dark:text-white/65 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-white/[0.06] pt-4 pb-2 space-y-3">
            <a
              href="#talk"
              onClick={(e) => { e.preventDefault(); openSidebar(); setMobileOpen(false); }}
              className="flex items-center justify-center h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-[15px] font-semibold hover:bg-[#0052C4] transition-colors duration-200"
            >
              Talk to Our Team
            </a>
            <a
              href="#book"
              onClick={(e) => { e.preventDefault(); openSidebar(); setMobileOpen(false); }}
              className="flex items-center justify-center h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-[15px] font-semibold hover:bg-[#026070] transition-colors duration-200"
            >
              Book a Free Call
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
