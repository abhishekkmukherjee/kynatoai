"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

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

const services = [
  {
    title: "SEO & AI Visibility",
    href: "/services/seo",
    description: "Technical SEO, Content SEO, Local SEO, and AI Visibility strategy.",
    category: "GROWTH"
  },
  {
    title: "Generative Engine Opt. (GEO)",
    href: "/services/geo-optimisation",
    description: "Citations in ChatGPT, Perplexity, and Google AI Overviews.",
    category: "GROWTH"
  },
  {
    title: "Knowledge AI & RAG",
    href: "/services/knowledge-ai",
    description: "Custom RAG systems and AI knowledge bases.",
    category: "INTELLIGENCE"
  },
  {
    title: "Agentic Automation",
    href: "/services/agentic-automation",
    description: "Multi-step autonomous AI agents for complex workflows.",
    category: "INTELLIGENCE"
  },
  {
    title: "Workflow Automation",
    href: "/services/workflow-automation",
    description: "Connect and automate operations end to end.",
    category: "AUTOMATION & MEASURE"
  },
  {
    title: "Analytics & Reporting",
    href: "/services/analytics",
    description: "Unified search and AI visibility analytics.",
    category: "AUTOMATION & MEASURE"
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

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
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-urbanist font-black text-2xl text-accent-teal dark:text-accent-teal tracking-tight">
                KYNATO
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:grid-cols-3">
                      {services.map((service) => (
                        <li key={service.title} className="row-span-1">
                          <NavigationMenuLink
                            render={
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              />
                            }
                          >
                              <div className="text-xs font-semibold text-accent-teal mb-1">{service.category}</div>
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {service.description}
                              </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/industries" />} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                    Industries
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/about" />} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/case-studies" />} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                    Case Studies
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/blog" />} className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="hidden md:block">
              <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white font-medium">
                Book a Strategy Call
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-background/95 backdrop-blur border-t z-50">
        <Button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-medium shadow-lg">
          Book a Strategy Call
        </Button>
      </div>
    </header>
  )
}
