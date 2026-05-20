import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { capabilities, ServiceNode } from "@/lib/service-tree"
import { getServiceDescription } from "@/lib/service-descriptions"
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

function countDescendants(node: ServiceNode): number {
  return (node.children ?? []).reduce((total, child) => total + 1 + countDescendants(child), 0)
}

function CapabilityTree({ nodes, level }: { nodes: ServiceNode[]; level: number }) {
  return (
    <div className="space-y-3">
      {nodes.map((node) => (
        <div key={node.href} className="border border-white/5 bg-black rounded-xl overflow-hidden">
          <Link href={node.href} className="group block p-5 hover:bg-white/[0.02] transition-colors">
            <div className="flex items-start gap-3">
              <span className="mt-1 shrink-0 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-bold tracking-widest text-white/40">
                L{level}
              </span>
              <div>
                <h3 className="font-urbanist font-bold text-white group-hover:text-accent-teal transition-colors">
                  {node.title}
                </h3>
                {node.keywords && (
                  <p className="mt-1 font-roboto text-xs text-muted-foreground leading-relaxed">
                    {node.keywords}
                  </p>
                )}
              </div>
            </div>
          </Link>
          {node.children && node.children.length > 0 && (
            <div className="border-t border-white/5 bg-[#09090B] p-4 md:pl-8">
              <CapabilityTree nodes={node.children} level={level + 1} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const totalServicePages = capabilities.reduce(
    (total, capability) =>
      total + capability.services.reduce((serviceTotal, service) => serviceTotal + 1 + countDescendants(service), 0),
    0
  )

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
            <div className="flex flex-wrap gap-3">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/50">
                5 capabilities
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/50">
                {totalServicePages}+ services
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/50">
                Built and operated in India
              </span>
            </div>
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
                        {(() => {
                          const desc = getServiceDescription(service.href)
                          return desc?.description ? (
                            <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-4 line-clamp-3">
                              {desc.description}
                            </p>
                          ) : service.keywords ? (
                            <p className="text-muted-foreground text-xs font-roboto leading-relaxed mb-4">
                              {service.keywords.split(",").slice(0, 4).join(" · ")}
                            </p>
                          ) : null
                        })()}
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

        {/* Full Service Tree */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-3xl">
              <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
                COMPLETE SERVICE TREE
              </span>
              <h2 className="font-urbanist font-black text-4xl md:text-5xl text-white mb-5">
                Every Service, Sub-Service, and Specialisation
              </h2>
              <p className="font-roboto text-muted-foreground text-lg leading-relaxed">
                The full Kynato service hierarchy — every discipline, specialisation, and component service we build and operate.
              </p>
            </div>

            <div className="space-y-12">
              {capabilities.map((capability) => (
                <div key={capability.id}>
                  <div className="mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-2 text-accent-teal">
                        {capability.title}
                      </p>
                      <h3 className="font-urbanist font-bold text-2xl text-white">
                        {capability.services.length} L1 pages · {capability.services.reduce((total, service) => total + countDescendants(service), 0)} nested pages
                      </h3>
                    </div>
                    <Link href={capability.href} className="text-sm font-semibold text-accent-teal hover:underline">
                      Open capability
                    </Link>
                  </div>
                  <CapabilityTree nodes={capability.services} level={1} />
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
            <Link href="/strategy" className="inline-block">
              <HoverBorderGradient
                containerClassName="rounded-md mx-auto"
                as="span"
                className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-10 h-14"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </HoverBorderGradient>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
