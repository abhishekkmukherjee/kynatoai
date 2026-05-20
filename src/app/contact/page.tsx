import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Kynato — AI Agency India",
  description: "Contact Kynato to discuss AI systems, search visibility, demand generation, automation, and analytics for your business.",
  alternates: {
    canonical: "https://kynato.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 border-b border-white/5 bg-[#09090B]">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              CONTACT KYNATO
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              Tell Us What You Want to Build, Fix, or Automate
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl leading-relaxed max-w-3xl">
              Share the business context, the workflow, or the growth problem. Kynato responds within one business day with the right next step.
            </p>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <a
              href="mailto:hello@kynato.com?subject=Kynato%20Project%20Enquiry"
              className="group border border-white/5 rounded-2xl p-8 bg-[#09090B] hover:border-accent-teal/30 transition-colors"
            >
              <Mail className="h-6 w-6 text-accent-teal mb-5" />
              <h2 className="font-urbanist font-bold text-2xl text-white mb-3">Email Kynato</h2>
              <p className="font-roboto text-muted-foreground mb-6 leading-relaxed">
                Best for project context, documents, requirements, or a short brief.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all">
                hello@kynato.com <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </a>

            <Link
              href="/strategy"
              className="group border border-white/5 rounded-2xl p-8 bg-[#09090B] hover:border-accent-blue/30 transition-colors"
            >
              <MessageCircle className="h-6 w-6 text-accent-blue mb-5" />
              <h2 className="font-urbanist font-bold text-2xl text-white mb-3">Book a Strategy Call</h2>
              <p className="font-roboto text-muted-foreground mb-6 leading-relaxed">
                Best when you want Kynato to map revenue leakage, hours wasted, and the highest-return system to build first.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-accent-blue group-hover:gap-2 transition-all">
                Start with a diagnosis <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
