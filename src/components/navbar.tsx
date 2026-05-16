"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

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
import { ModeToggle } from "./theme-toggle"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

const capabilities = [
  {
    id: "cap-1",
    title: "Search & AI Visibility",
    href: "/services/search-ai-visibility/seo/",
    services: [
      {
        title: "SEO & Organic Visibility",
        href: "/services/search-ai-visibility/seo/",
        description: "Technical SEO, content strategy, local SEO, and link authority.",
      },
      {
        title: "AI Search Visibility & GEO",
        href: "/services/search-ai-visibility/ai-visibility/",
        description: "Get cited in ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
      },
    ],
  },
  {
    id: "cap-2",
    title: "Demand Generation",
    href: "/services/demand-generation/inbound-lead-architecture/",
    services: [
      {
        title: "Inbound Lead Architecture",
        href: "/services/demand-generation/inbound-lead-architecture/",
        description: "Landing pages, chatbots, WhatsApp lead capture, and CRO.",
      },
      {
        title: "Outbound & Paid Acquisition",
        href: "/services/demand-generation/outbound-paid-acquisition/",
        description: "LinkedIn outreach, cold email sequencing, and paid ads.",
      },
      {
        title: "AI Lead Nurturing",
        href: "/services/demand-generation/ai-lead-nurturing/",
        description: "AI scoring, qualification bots, and automated follow-up sequences.",
      },
    ],
  },
  {
    id: "cap-3",
    title: "Knowledge & Applied AI",
    href: "/services/knowledge-applied-ai/rag-systems/",
    services: [
      {
        title: "Custom RAG Systems",
        href: "/services/knowledge-applied-ai/rag-systems/",
        description: "AI knowledge bases built over your documents and compliance data.",
      },
      {
        title: "AI Assistant Deployment",
        href: "/services/knowledge-applied-ai/ai-assistant/",
        description: "Custom AI assistants integrated into your workflows and tools.",
      },
      {
        title: "Document Intelligence",
        href: "/services/knowledge-applied-ai/document-intelligence/",
        description: "Automated document extraction, classification, and data pipelines.",
      },
    ],
  },
  {
    id: "cap-4",
    title: "Agentic Automation",
    href: "/services/agentic-automation/agentic-workflows/",
    services: [
      {
        title: "Agentic Workflow Systems",
        href: "/services/agentic-automation/agentic-workflows/",
        description: "Multi-step autonomous AI agents for complex operational workflows.",
      },
      {
        title: "Core Process Automation",
        href: "/services/agentic-automation/core-automation/",
        description: "Connect and automate operations end to end across your stack.",
      },
      {
        title: "Conversational Automation & Voice AI",
        href: "/services/agentic-automation/conversational-automation/",
        description: "WhatsApp automation, Voice AI, and conversational lead capture.",
      },
    ],
  },
  {
    id: "cap-5",
    title: "Intelligence & Analytics",
    href: "/services/intelligence-analytics/search-intelligence/",
    services: [
      {
        title: "Search Intelligence",
        href: "/services/intelligence-analytics/search-intelligence/",
        description: "Multi-engine search analytics and unified performance dashboards.",
      },
      {
        title: "AI Visibility Tracking",
        href: "/services/intelligence-analytics/ai-visibility-tracking/",
        description: "Citation frequency, sentiment, and competitor tracking across LLMs.",
      },
      {
        title: "Business Analytics",
        href: "/services/intelligence-analytics/business-analytics/",
        description: "Marketing ROI, pipeline modelling, and predictive analytics.",
      },
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-urbanist font-black text-2xl text-accent-teal dark:text-accent-teal tracking-tight">
                KYNATO
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Capabilities Mega Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium">
                    Capabilities
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6">
                      <div className="mb-4 pb-4 border-b border-white/5">
                        <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                          All Capabilities — Build &amp; Operate
                        </p>
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {capabilities.map((cap) => (
                          <div key={cap.id} className="space-y-2">
                            <Link
                              href={cap.href}
                              className="block text-xs font-bold text-accent-teal tracking-wider uppercase hover:text-accent-teal/80 transition-colors mb-3"
                            >
                              {cap.title}
                            </Link>
                            {cap.services.map((service) => (
                              <NavigationMenuLink
                                key={service.href}
                                render={
                                  <Link
                                    href={service.href}
                                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-white/[0.05] focus:bg-white/[0.05]"
                                  />
                                }
                              >
                                <div className="text-sm font-medium text-white leading-tight mb-1">
                                  {service.title}
                                </div>
                                <p className="text-xs leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Every system is built and operated by Kynato. Measured by revenue gained or hours saved.
                        </p>
                        <Link
                          href="/services/"
                          className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
                        >
                          View all capabilities <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Standard Nav Links */}
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      render={<Link href={link.href} />}
                      className={`${navigationMenuTriggerStyle()} bg-transparent font-medium`}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ModeToggle />
            <div className="hidden lg:block">
              <HoverBorderGradient
                containerClassName="rounded-md"
                as="button"
                className="bg-accent-blue text-white font-medium flex items-center justify-center space-x-2 px-4 py-2 text-sm h-10 w-full"
              >
                <span>Book a Strategy Call</span>
              </HoverBorderGradient>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <nav className="container mx-auto px-4 py-6 space-y-6">
            {/* Capabilities */}
            <div>
              <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-3">
                Capabilities
              </p>
              <div className="space-y-4">
                {capabilities.map((cap) => (
                  <div key={cap.id}>
                    <p className="text-xs font-semibold text-accent-teal tracking-wider uppercase mb-2">
                      {cap.title}
                    </p>
                    <div className="pl-3 space-y-2 border-l border-white/10">
                      {cap.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block text-sm text-white/80 hover:text-white transition-colors py-1"
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

            {/* Other Links */}
            <div className="border-t border-white/10 pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-white/80 hover:text-white transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-white/10 pt-4">
              <HoverBorderGradient
                containerClassName="rounded-md w-full"
                as="button"
                className="bg-accent-blue text-white font-medium flex items-center justify-center h-12 w-full"
              >
                <span>Book a Strategy Call</span>
              </HoverBorderGradient>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-background/95 backdrop-blur border-t z-50">
        <HoverBorderGradient
          containerClassName="rounded-md w-full"
          as="button"
          className="bg-accent-blue text-white font-medium flex items-center justify-center space-x-2 h-10 w-full shadow-lg"
        >
          <span>Book a Strategy Call</span>
        </HoverBorderGradient>
      </div>
    </header>
  )
}
