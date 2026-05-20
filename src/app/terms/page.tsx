import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Kynato",
  alternates: {
    canonical: "https://kynato.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="font-urbanist font-black text-4xl md:text-6xl text-white mb-6">Terms of Service</h1>
            <p className="font-roboto text-muted-foreground text-lg leading-relaxed">
              Kynato provides AI, search visibility, automation, and analytics services under mutually agreed scopes of work. Specific deliverables, access, timelines, and commercial terms are defined in each client agreement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
