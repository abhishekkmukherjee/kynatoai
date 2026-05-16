import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"
import { capabilities, findServiceBySlug, slugToTitle } from "@/lib/service-tree"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const result = findServiceBySlug(slug)

  const node = result?.child ?? result?.service
  const capabilityTitle = result?.capability?.title ?? ""

  const title = node
    ? `${node.title} | Kynato — AI Agency India`
    : `${slug.map(slugToTitle).join(" — ")} | Kynato`

  const description = node?.description ?? node?.keywords ?? ""
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

  const capability = result?.capability
  const service = result?.service
  const child = result?.child

  const pageTitle = child?.title ?? service?.title ?? slugToTitle(slug[slug.length - 1])
  const pageKeywords = child?.keywords ?? service?.keywords ?? ""
  const pageDescription =
    child?.description ?? service?.description ?? ""

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Capabilities", href: "/services/" },
    ...(capability
      ? [{ label: capability.title, href: capability.href }]
      : []),
    ...(service && slug.length >= 2
      ? [{ label: service.title, href: service.href }]
      : []),
    ...(child ? [{ label: child.title, href: child.href }] : []),
  ]

  const siblings =
    child
      ? service?.children ?? []
      : service
        ? capability?.services ?? []
        : []

  const subServices = child ? [] : service?.children ?? []

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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#027C88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            {capability && (
              <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
                {capability.title}
              </span>
            )}
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl leading-tight">
              {pageTitle}
            </h1>
            {pageDescription && (
              <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                {pageDescription}
              </p>
            )}
            {pageKeywords && !pageDescription && (
              <p className="font-roboto text-muted-foreground text-base max-w-3xl mb-10 leading-relaxed">
                {pageKeywords.split(",").slice(0, 6).join(" · ")}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <HoverBorderGradient
                containerClassName="rounded-md w-full sm:w-auto"
                as="button"
                className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-8 h-14 w-full sm:w-auto"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </HoverBorderGradient>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-md text-base px-8 h-14 transition-all w-full sm:w-auto font-medium"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>

        {/* Sub-services Grid */}
        {subServices.length > 0 && (
          <section className="py-20 bg-[#09090B]">
            <div className="container mx-auto px-4">
              <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-4">
                What&apos;s Covered
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl font-roboto">
                Each area below is a discrete service within this practice — built, integrated, and operated by Kynato.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServices.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="group bg-black border border-white/5 hover:border-accent-teal/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-teal/5"
                  >
                    <h3 className="font-urbanist font-bold text-xl text-white mb-3 group-hover:text-accent-teal transition-colors">
                      {sub.title}
                    </h3>
                    {sub.keywords && (
                      <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-4">
                        {sub.keywords.split(",").slice(0, 3).join(" · ")}
                      </p>
                    )}
                    <span className="inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Capabilities Strip */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
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
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                      cap.slug === slug[0] ? "text-accent-teal" : "text-muted-foreground"
                    }`}
                  >
                    Capability
                  </p>
                  <p className="font-urbanist font-semibold text-white text-sm leading-tight group-hover:text-accent-teal transition-colors">
                    {cap.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#09090B] border-t border-white/5">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              LET&apos;S BUILD YOUR SYSTEM
            </span>
            <h2 className="font-urbanist font-black text-4xl md:text-5xl text-white mb-6 tracking-tight">
              Start With a 30-Minute Strategy Call
            </h2>
            <p className="font-roboto text-muted-foreground text-lg mb-10 leading-relaxed">
              Kynato maps your specific situation — where revenue is leaking, where hours are being wasted —
              and shows you exactly what a system would look like in your context. No pitch deck. No generic proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <HoverBorderGradient
                containerClassName="rounded-md w-full sm:w-auto"
                as="button"
                className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-10 h-14 w-full sm:w-auto shadow-[0_0_30px_rgba(0,106,240,0.3)]"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </HoverBorderGradient>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-teal" /> Build &amp; Operate — Not Build &amp; Leave
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-teal" /> Revenue Gained or Hours Saved
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-teal" /> Responds within 1 business day
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
