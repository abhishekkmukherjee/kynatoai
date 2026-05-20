import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { capabilities, ServiceNode } from "@/lib/service-tree"

export const metadata: Metadata = {
  title: "Sitemap | Kynato",
  alternates: {
    canonical: "https://kynato.com/sitemap",
  },
}

function flatten(nodes: ServiceNode[]): ServiceNode[] {
  return nodes.flatMap((node) => [node, ...flatten(node.children ?? [])])
}

export default function SitemapPage() {
  const services = capabilities.flatMap((capability) => flatten(capability.services))

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4">
            <h1 className="font-urbanist font-black text-4xl md:text-6xl text-white mb-6">Sitemap</h1>
            <p className="font-roboto text-muted-foreground text-lg">
              Browse Kynato&apos;s primary pages and full capability tree.
            </p>
          </div>
        </section>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="font-urbanist font-bold text-2xl text-white mb-5">Company</h2>
              <div className="space-y-2 text-muted-foreground">
                {["/services", "/industries", "/insights", "/who-we-are", "/careers", "/contact", "/strategy"].map((href) => (
                  <Link key={href} href={href} className="block hover:text-accent-teal transition-colors">
                    {href}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-urbanist font-bold text-2xl text-white mb-5">Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="hover:text-accent-teal transition-colors">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
