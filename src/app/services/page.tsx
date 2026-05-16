import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { capabilities } from "@/lib/service-tree"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export const metadata: Metadata = {
  title: "Capabilities | Kynato — AI Agency India",
  description:
    "Kynato builds and operates five integrated capabilities: Search & AI Visibility, Demand Generation, Knowledge & Applied AI, Agentic Automation, and Intelligence & Analytics.",
  keywords:
    "AI agency capabilities India, SEO AI visibility India, demand generation India, Knowledge AI India, agentic automation India, business analytics India",
  alternates: {
    canonical: "https://kynato.com/services/",
  },
}

const capabilityColors: Record<string, string> = {
  "cap-1": "#027C88",
  "cap-2": "#006AF0",
  "cap-3": "#7C3AED",
  "cap-4": "#D97706",
  "cap-5": "#059669",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#027C88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              ALL CAPABILITIES
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-7xl text-white mb-6 max-w-4xl leading-tight">
              Five Capabilities.<br />
              One Intelligence Ecosystem.
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
              Kynato builds, integrates, and directly operates AI-powered systems across five interconnected capabilities — designed so that every service feeds the next. Measured by revenue gained or hours saved.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-[#09090B]">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {capabilities.map((cap, idx) => (
                <div key={cap.id} className="border border-white/5 rounded-2xl overflow-hidden">
                  {/* Capability Header */}
                  <div
                    className="p-8 md:p-10"
                    style={{
                      background: `linear-gradient(135deg, ${capabilityColors[cap.id]}08 0%, transparent 60%)`,
                      borderBottom: `1px solid ${capabilityColors[cap.id]}20`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: capabilityColors[cap.id] }}>
                          Capability {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-urbanist font-black text-3xl md:text-4xl text-white">
                          {cap.title}
                        </h2>
                      </div>
                      <Link
                        href={cap.href}
                        className="inline-flex items-center font-semibold text-white hover:text-accent-teal transition-colors shrink-0"
                      >
                        Explore Capability <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Services within Capability */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {cap.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group p-8 hover:bg-white/[0.02] transition-colors"
                      >
                        <h3 className="font-urbanist font-bold text-lg text-white mb-3 group-hover:text-accent-teal transition-colors leading-snug">
                          {service.title}
                        </h3>
                        {service.description && (
                          <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-4 line-clamp-3">
                            {service.description}
                          </p>
                        )}
                        {service.children && service.children.length > 0 && (
                          <div className="mt-4 space-y-1">
                            {service.children.slice(0, 3).map((child) => (
                              <p key={child.href} className="text-xs text-white/40 font-roboto">
                                → {child.title}
                              </p>
                            ))}
                            {service.children.length > 3 && (
                              <p className="text-xs text-white/30 font-roboto">
                                +{service.children.length - 3} more
                              </p>
                            )}
                          </div>
                        )}
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all">
                          View service <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              NOT SURE WHERE TO START?
            </span>
            <h2 className="font-urbanist font-black text-4xl md:text-5xl text-white mb-6 tracking-tight">
              Book a 30-Minute Strategy Call
            </h2>
            <p className="font-roboto text-muted-foreground text-lg mb-10 leading-relaxed">
              We map your specific situation — where revenue is leaking and where hours are being wasted — and identify the highest-return capability to build first. No pitch deck. No generic proposal.
            </p>
            <HoverBorderGradient
              containerClassName="rounded-md mx-auto"
              as="button"
              className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-10 h-14"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </HoverBorderGradient>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
