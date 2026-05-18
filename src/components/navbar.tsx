"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { ModeToggle } from "@/components/theme-toggle"

const capabilities = [
  {
    id: "cap-1",
    title: "Search & AI Visibility",
    href: "/services/search-ai-visibility/seo/",
    services: [
      { title: "SEO & Organic Visibility", href: "/services/search-ai-visibility/seo/", description: "Technical SEO, content strategy, local SEO, and link authority." },
      { title: "AI Search Visibility & GEO", href: "/services/search-ai-visibility/ai-visibility/", description: "Get cited in ChatGPT, Perplexity, Gemini, and Google AI Overviews." },
    ],
  },
  {
    id: "cap-2",
    title: "Demand Generation",
    href: "/services/demand-generation/inbound-lead-architecture/",
    services: [
      { title: "Inbound Lead Architecture", href: "/services/demand-generation/inbound-lead-architecture/", description: "Landing pages, chatbots, WhatsApp lead capture, and CRO." },
      { title: "Outbound & Paid Acquisition", href: "/services/demand-generation/outbound-paid-acquisition/", description: "LinkedIn outreach, cold email sequencing, and paid ads." },
      { title: "AI Lead Nurturing", href: "/services/demand-generation/ai-lead-nurturing/", description: "AI scoring, qualification bots, and automated follow-up sequences." },
    ],
  },
  {
    id: "cap-3",
    title: "Knowledge & Applied AI",
    href: "/services/knowledge-applied-ai/rag-systems/",
    services: [
      { title: "Custom RAG Systems", href: "/services/knowledge-applied-ai/rag-systems/", description: "AI knowledge bases built over your documents and compliance data." },
      { title: "AI Assistant Deployment", href: "/services/knowledge-applied-ai/ai-assistant/", description: "Custom AI assistants integrated into your workflows and tools." },
      { title: "Document Intelligence", href: "/services/knowledge-applied-ai/document-intelligence/", description: "Automated document extraction, classification, and data pipelines." },
    ],
  },
  {
    id: "cap-4",
    title: "Agentic Automation",
    href: "/services/agentic-automation/agentic-workflows/",
    services: [
      { title: "Agentic Workflow Systems", href: "/services/agentic-automation/agentic-workflows/", description: "Multi-step autonomous AI agents for complex operational workflows." },
      { title: "Core Process Automation", href: "/services/agentic-automation/core-automation/", description: "Connect and automate operations end to end across your stack." },
      { title: "Conversational Automation & Voice AI", href: "/services/agentic-automation/conversational-automation/", description: "WhatsApp automation, Voice AI, and conversational lead capture." },
    ],
  },
  {
    id: "cap-5",
    title: "Intelligence & Analytics",
    href: "/services/intelligence-analytics/search-intelligence/",
    services: [
      { title: "Search Intelligence", href: "/services/intelligence-analytics/search-intelligence/", description: "Multi-engine search analytics and unified performance dashboards." },
      { title: "AI Visibility Tracking", href: "/services/intelligence-analytics/ai-visibility-tracking/", description: "Citation frequency, sentiment, and competitor tracking across LLMs." },
      { title: "Business Analytics", href: "/services/intelligence-analytics/business-analytics/", description: "Marketing ROI, pipeline modelling, and predictive analytics." },
    ],
  },
]

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Careers", href: "/careers" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        {/* Scrolled state — top border glow */}
        {isScrolled && (
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-teal/15 to-transparent pointer-events-none" />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <span className="font-urbanist font-black text-[1.3rem] tracking-[-0.02em] gradient-text-teal group-hover:opacity-85 transition-opacity duration-300">
                KYNATO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-0.5">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white text-sm font-medium transition-colors h-9">
                      Capabilities
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[920px] p-5 bg-black/90 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl">
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                          <p className="text-[11px] font-bold text-white/30 tracking-[0.15em] uppercase">
                            Five Capabilities — Built &amp; Operated by Kynato
                          </p>
                          <Link href="/services/" className="text-[11px] font-semibold text-accent-teal hover:text-accent-teal/80 flex items-center gap-1 transition-colors">
                            All capabilities <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                          {capabilities.map((cap) => (
                            <div key={cap.id}>
                              <Link href={cap.href} className="block text-[11px] font-bold text-accent-teal tracking-[0.1em] uppercase mb-3 hover:text-accent-teal/80 transition-colors">
                                {cap.title}
                              </Link>
                              <div className="space-y-1">
                                {cap.services.map((service) => (
                                  <NavigationMenuLink
                                    key={service.href}
                                    render={
                                      <Link href={service.href} className="block select-none rounded-lg p-2.5 no-underline outline-none transition-all hover:bg-white/[0.04] group/item" />
                                    }
                                  >
                                    <div className="text-[13px] font-medium text-white/80 group-hover/item:text-white leading-tight mb-1 transition-colors">
                                      {service.title}
                                    </div>
                                    <p className="text-[11px] leading-snug text-white/30">
                                      {service.description}
                                    </p>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/[0.06]">
                          <p className="text-[11px] text-white/25 font-roboto">
                            Every system built and operated by Kynato — measured by revenue gained or hours saved.
                          </p>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink
                        render={<Link href={link.href} />}
                        className={`${navigationMenuTriggerStyle()} bg-transparent text-white/70 hover:text-white text-sm font-medium h-9 transition-colors`}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <ModeToggle />
              <div className="hidden lg:block">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  as="button"
                  className="bg-[#006AF0]/80 backdrop-blur-sm text-white font-semibold flex items-center justify-center gap-2 px-5 text-sm h-9 hover:bg-[#006AF0] shadow-[0_0_20px_rgba(0,106,240,0.25)] hover:shadow-[0_0_35px_rgba(0,106,240,0.45)] transition-all duration-300"
                >
                  <span>Book a Strategy Call</span>
                </HoverBorderGradient>
              </div>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-white/70 hover:text-white hover:bg-white/[0.05] h-9 w-9"
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] overflow-y-auto max-h-[85vh]"
          >
            <nav className="container mx-auto px-4 py-6 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-white/30 tracking-[0.15em] uppercase mb-4">Capabilities</p>
                <div className="space-y-5">
                  {capabilities.map((cap) => (
                    <div key={cap.id}>
                      <p className="text-[11px] font-bold text-accent-teal tracking-[0.1em] uppercase mb-2">{cap.title}</p>
                      <div className="pl-3 space-y-1 border-l border-white/[0.06]">
                        {cap.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-sm text-white/60 hover:text-white transition-colors py-1.5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/[0.06] pt-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/[0.06] pt-4">
                <HoverBorderGradient
                  containerClassName="rounded-lg w-full"
                  as="button"
                  className="bg-white/[0.05] text-white font-medium flex items-center justify-center h-11 w-full"
                >
                  <span>Book a Strategy Call</span>
                </HoverBorderGradient>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full px-4 py-3 bg-black/80 backdrop-blur-xl border-t border-white/[0.06] z-50">
        <HoverBorderGradient
          containerClassName="rounded-lg w-full"
          as="button"
          className="bg-[#006AF0] text-white font-medium flex items-center justify-center h-11 w-full shadow-[0_0_20px_rgba(0,106,240,0.3)]"
        >
          <span>Book a Strategy Call</span>
        </HoverBorderGradient>
      </div>
    </>
  )
}
