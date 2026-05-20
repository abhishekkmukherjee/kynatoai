import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Kynato",
  alternates: {
    canonical: "https://kynato.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="font-urbanist font-black text-4xl md:text-6xl text-white mb-6">Privacy Policy</h1>
            <p className="font-roboto text-muted-foreground text-lg leading-relaxed">
              Kynato uses contact details shared through email, calls, and forms only to respond to enquiries, scope engagements, and operate client relationships. We do not sell personal information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
