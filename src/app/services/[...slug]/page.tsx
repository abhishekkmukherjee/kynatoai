import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, CornerDownRight } from "lucide-react"
import { notFound } from "next/navigation"
import { capabilities, findServiceBySlug, ServiceNode, slugToTitle } from "@/lib/service-tree"
import { getServiceDescription } from "@/lib/service-descriptions"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

function collectNodeSlugs(nodes: ServiceNode[], prefix: string[]): { slug: string[] }[] {
  return nodes.flatMap((node) => {
    const current = [...prefix, node.slug]
    return [{ slug: current }, ...collectNodeSlugs(node.children ?? [], current)]
  })
}

export function generateStaticParams() {
  return capabilities.flatMap((cap) => [
    { slug: [cap.slug] },
    ...collectNodeSlugs(cap.services, [cap.slug]),
  ])
}

interface Props {
  params: Promise<{ slug: string[] }>
}

function keywordList(keywords?: string) {
  return keywords
    ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : []
}

function countDescendants(node: ServiceNode): number {
  return (node.children ?? []).reduce((total, child) => total + 1 + countDescendants(child), 0)
}

function ServiceBranch({ nodes, level }: { nodes: ServiceNode[]; level: number }) {
  return (
    <div className="space-y-3">
      {nodes.map((item) => (
        <div key={item.href} className="border border-white/5 bg-black rounded-xl overflow-hidden">
          <Link
            href={item.href}
            className="group flex flex-col gap-3 p-5 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 shrink-0 rounded-md border border-accent-teal/20 bg-accent-teal/10 px-2 py-1 text-[10px] font-bold tracking-widest text-accent-teal">
                L{level}
              </span>
              <div className="min-w-0">
                <h3 className="font-urbanist font-bold text-white group-hover:text-accent-teal transition-colors">
                  {item.title}
                </h3>
                {item.keywords && (
                  <p className="mt-1 font-roboto text-xs text-muted-foreground leading-relaxed">
                    {item.keywords.split(",").slice(0, 4).join(" · ")}
                  </p>
                )}
              </div>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-accent-teal">
              View page <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>
          {item.children && item.children.length > 0 && (
            <div className="border-t border-white/5 bg-[#09090B] p-4 md:pl-8">
              <ServiceBranch nodes={item.children} level={level + 1} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const result = findServiceBySlug(slug)

  const node = result?.node
  const desc = getServiceDescription(node?.href ?? result?.capability?.href ?? "")

  const title = node
    ? `${node.title} | Kynato — AI Agency India`
    : result?.capability
      ? `${result.capability.title} | Kynato — AI Agency India`
      : `${slug.map(slugToTitle).join(" — ")} | Kynato`

  const description =
    desc?.description ??
    node?.description ??
    node?.keywords ??
    ""

  const keywords = node?.keywords ?? ""

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://kynato.com/services/${slug.join("/")}`,
    },
    openGraph: {
      title,
      description,
      url: `https://kynato.com/services/${slug.join("/")}`,
      siteName: "Kynato",
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params

  if (!slug || slug.length === 0) {
    return notFound()
  }

  const result = findServiceBySlug(slug)
  if (!result) {
    return notFound()
  }

  const { capability, node, ancestors } = result

  const pageTitle = node?.title ?? capability.title
  const pageKeywords = node?.keywords ?? ""
  const keywords = keywordList(pageKeywords)
  const pageLevel = node ? ancestors.length : 0
  const parent = pageLevel > 1 ? ancestors[ancestors.length - 2] : undefined
  const siblings = parent ? parent.children ?? [] : capability.services
  const relatedServices = node ? siblings.filter((s) => s.href !== node.href) : []
  const subServices = node?.children ?? capability.services
  const desc = getServiceDescription(node?.href ?? capability.href)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Capabilities", href: "/services/" },
    { label: capability.title, href: capability.href },
    ...ancestors.map((ancestor) => ({ label: ancestor.title, href: ancestor.href })),
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">

        {/* Breadcrumb */}
        <div className="border-b border-white/5 bg-[#09090B]">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-accent-teal transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/60">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-white/20">/</span>}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#027C88] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              {capability.title}
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl leading-tight">
              {pageTitle}
            </h1>
            {desc?.description ? (
              <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                {desc.description}
              </p>
            ) : (
              <p className="font-roboto text-muted-foreground text-base max-w-3xl mb-10 leading-relaxed">
                {keywords.slice(0, 6).join(" · ")}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/strategy" className="w-full sm:w-auto">
                <HoverBorderGradient
                  containerClassName="rounded-md w-full sm:w-auto"
                  as="span"
                  className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-8 h-14 w-full sm:w-auto"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </HoverBorderGradient>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-md text-base px-8 h-14 transition-all w-full sm:w-auto font-medium"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>

        {/* What This Covers — only shown when there's a description with what[] */}
        {desc?.what && desc.what.length > 0 && (
          <section className="py-16 border-b border-white/5 bg-[#09090B]">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="font-urbanist font-bold text-2xl md:text-3xl text-white mb-8">
                What This Covers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {desc.what.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-teal" />
                    <span className="font-roboto text-[#D0D5DD] text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sub-services Grid — shown when there are children */}
        {subServices.length > 0 && (
          <section className="py-20 bg-black border-b border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="mb-12">
                <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-4">
                  {node ? "Services in This Area" : "All Services"}
                </h2>
                <p className="font-roboto text-muted-foreground leading-relaxed max-w-2xl">
                  Each area below is a discrete service built, integrated, and operated by Kynato.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServices.map((sub) => {
                  const subDesc = getServiceDescription(sub.href)
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="group bg-[#09090B] border border-white/5 hover:border-accent-teal/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-teal/5 flex flex-col"
                    >
                      <h3 className="font-urbanist font-bold text-xl text-white mb-3 group-hover:text-accent-teal transition-colors leading-snug">
                        {sub.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-5 flex-1">
                        {subDesc?.description
                          ? subDesc.description.split(".")[0] + "."
                          : sub.keywords?.split(",").slice(0, 3).join(" · ")}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* SEO keyword tags (visible, styled as signals) */}
        {keywords.length > 0 && (
          <section className="py-12 bg-[#09090B] border-b border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
              <p className="font-roboto text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Related searches
              </p>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md border border-white/8 bg-black px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Full Branch Map — shown when there are children */}
        {subServices.length > 0 && (
          <section className="py-20 bg-black border-b border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mb-10">
                <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-4">
                  Full Service Hierarchy
                </h2>
                <p className="font-roboto text-muted-foreground leading-relaxed">
                  Every nested service within this area — click any to explore.
                </p>
              </div>
              <ServiceBranch nodes={subServices} level={node ? pageLevel + 1 : 1} />
            </div>
          </section>
        )}

        {/* Service Path sidebar + Related services — leaf pages */}
        {(ancestors.length > 0 || relatedServices.length > 0) && (
          <section className="py-20 bg-[#09090B] border-b border-white/5">
            <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Service Path */}
              {ancestors.length > 0 && (
                <div className="border border-white/5 bg-black rounded-2xl p-6 h-fit">
                  <h2 className="font-urbanist font-bold text-lg text-white mb-5">
                    Service Path
                  </h2>
                  <div className="space-y-3">
                    <Link href={capability.href} className="block text-sm font-semibold text-accent-teal hover:underline">
                      {capability.title}
                    </Link>
                    {ancestors.map((ancestor, index) => (
                      <Link
                        key={ancestor.href}
                        href={ancestor.href}
                        className="flex items-start gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                      >
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-white/20" />
                        <span>L{index + 1} — {ancestor.title}</span>
                      </Link>
                    ))}
                    {node && (
                      <div className="flex items-start gap-2 text-sm text-white">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal/40" />
                        <span className="font-semibold">L{pageLevel} — {node.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className={ancestors.length > 0 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <h2 className="font-urbanist font-bold text-2xl text-white mb-6">
                    Related Services at This Level
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.href}
                        href={related.href}
                        className="group rounded-xl border border-white/5 bg-black p-5 hover:border-accent-teal/30 transition-colors"
                      >
                        <h3 className="font-urbanist font-bold text-white mb-2 group-hover:text-accent-teal transition-colors">
                          {related.title}
                        </h3>
                        {related.keywords && (
                          <p className="font-roboto text-xs text-muted-foreground leading-relaxed">
                            {related.keywords.split(",").slice(0, 3).join(" · ")}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* All Capabilities Strip */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-urbanist font-bold text-2xl text-white mb-10">
              All Kynato Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {capabilities.map((cap) => (
                <Link
                  key={cap.href}
                  href={cap.href}
                  className={`rounded-xl p-5 border transition-all duration-200 group ${
                    cap.slug === slug[0]
                      ? "border-accent-teal/40 bg-accent-teal/5"
                      : "border-white/5 bg-[#09090B] hover:border-white/20"
                  }`}
                >
                  <h3 className={`font-urbanist font-bold text-sm mb-2 ${
                    cap.slug === slug[0] ? "text-accent-teal" : "text-white group-hover:text-accent-teal transition-colors"
                  }`}>
                    {cap.title}
                  </h3>
                  <div className="space-y-1">
                    {cap.services.slice(0, 3).map((s) => (
                      <p key={s.href} className="font-roboto text-xs text-muted-foreground leading-relaxed truncate">
                        {s.title}
                      </p>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 border border-white/5 bg-[#09090B] rounded-2xl p-10 text-center">
              <h2 className="font-urbanist font-black text-3xl md:text-4xl text-white mb-4">
                Ready to Build Something?
              </h2>
              <p className="font-roboto text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us the outcome you're after. We'll map the system to get you there.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/strategy" className="w-full sm:w-auto">
                  <HoverBorderGradient
                    containerClassName="rounded-md w-full sm:w-auto"
                    as="span"
                    className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-8 h-14 w-full sm:w-auto"
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </HoverBorderGradient>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-md text-base px-8 h-14 transition-all w-full sm:w-auto font-medium"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
