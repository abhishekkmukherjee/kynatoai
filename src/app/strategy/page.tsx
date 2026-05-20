import { Metadata } from "next"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Strategy Call | Kynato — AI Agency India",
  description: "Book a 30-minute Kynato strategy call to identify revenue leakage, wasted hours, and the AI system to build first.",
  alternates: {
    canonical: "https://kynato.com/strategy",
  },
}

const steps = [
  "Map where revenue is leaking or follow-up is breaking.",
  "Identify manual work that can be automated safely.",
  "Choose the first system by expected revenue gained or hours saved.",
]

export default function StrategyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 md:py-28 border-b border-white/5 bg-[#09090B]">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              30-MINUTE STRATEGY CALL
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              Start With a Concrete System Diagnosis
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl leading-relaxed max-w-3xl">
              No pitch deck. No generic proposal. A focused call about your current growth and operations, then a practical recommendation on what to build first.
            </p>
            <a
              href="mailto:hello@kynato.com?subject=Strategy%20Call%20Request"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-[#006AF0] px-8 h-14 text-white font-semibold hover:bg-[#0058c7] transition-colors"
            >
              Request a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-10">
              What the Call Covers
            </h2>
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step} className="flex gap-4 items-start border border-white/5 rounded-2xl p-6 bg-[#09090B]">
                  <CheckCircle2 className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
                  <p className="font-roboto text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
