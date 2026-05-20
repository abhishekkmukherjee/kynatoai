import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export const metadata: Metadata = {
  title: "Who We Are | Kynato — AI Agency India",
  description:
    "Kynato (Kynato Nexinnovations LLP) is a B2B AI agency based in India. We build and operate intelligence ecosystems — combining SEO, AI Visibility, Lead Generation, Knowledge AI, and Agentic Automation.",
  keywords: "about Kynato India, Kynato Nexinnovations LLP, AI agency India about, Kynato team India",
  alternates: {
    canonical: "https://kynato.com/who-we-are",
  },
}

const values = [
  {
    title: "Build & Operate — Not Build & Leave",
    desc: "Every system we build, we continue to run. Monitoring. Optimising. Reporting. The value is in the running system, not the handoff.",
  },
  {
    title: "Measured by Revenue Gained or Hours Saved",
    desc: "We do not report on impressions, activity, or deliverables. We measure against business outcomes. If the system doesn't move those numbers, it isn't working.",
  },
  {
    title: "India-First. Globally Capable.",
    desc: "We are headquartered in India, built for how India actually works — GST, ICAI, WhatsApp-first workflows, vernacular languages — and capable of serving global clients.",
  },
  {
    title: "AI Capability With Human Accountability",
    desc: "Kynato is not an AI tool subscription. We are a team of people who design, deploy, and run AI systems — and remain accountable for what those systems produce.",
  },
]

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#027C88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              WHO WE ARE
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight">
              Kynato Nexinnovations LLP.<br />
              Make Intelligence Work.
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl leading-relaxed mb-6">
              Kynato is a B2B artificial intelligence agency based in India. We function as an intelligence ecosystem — building and operating AI-powered systems that drive measurable business outcomes across search visibility, lead generation, knowledge management, workflow automation, and business analytics.
            </p>
            <p className="font-roboto text-muted-foreground text-lg leading-relaxed">
              We are not a software company. We are not a consulting firm. We build systems and then run them — staying accountable to what those systems produce, measured against two filters: revenue gained and hours saved.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-12">
              What Kynato Does
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-urbanist font-bold text-xl text-white">Search &amp; AI Visibility</h3>
                <p className="font-roboto text-muted-foreground leading-relaxed">
                  We build and operate SEO systems, Generative Engine Optimisation (GEO), and Answer Engine Optimisation (AEO) — so your business ranks in traditional search and appears in AI-generated answers on ChatGPT, Perplexity, and Gemini.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-urbanist font-bold text-xl text-white">Demand Generation</h3>
                <p className="font-roboto text-muted-foreground leading-relaxed">
                  We design and operate inbound and outbound lead engines — landing page CRO, AI chatbots, WhatsApp lead capture, LinkedIn outreach, cold email, and AI-powered lead nurturing sequences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-urbanist font-bold text-xl text-white">Knowledge &amp; Applied AI</h3>
                <p className="font-roboto text-muted-foreground leading-relaxed">
                  We build custom Retrieval-Augmented Generation (RAG) systems, AI assistants, and document intelligence pipelines — giving businesses an AI layer over their own knowledge and compliance data.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-urbanist font-bold text-xl text-white">Agentic Automation</h3>
                <p className="font-roboto text-muted-foreground leading-relaxed">
                  We deploy multi-step autonomous AI agents for document collection, compliance tracking, CRM updates, invoice processing, HR onboarding, WhatsApp automation, and Voice AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-black border-b border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-12">
              How We Work
            </h2>
            <div className="space-y-8">
              {values.map((value, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent-teal shrink-0 mt-1" />
                  <div>
                    <h3 className="font-urbanist font-bold text-xl text-white mb-2">{value.title}</h3>
                    <p className="font-roboto text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Company */}
        <section className="py-20 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-8">
              The Company
            </h2>
            <div className="space-y-5 font-roboto text-muted-foreground text-lg leading-relaxed">
              <p>
                Kynato Nexinnovations LLP is registered and headquartered in Jharkhand, India. We serve startups, SMEs, growth teams, and operations leaders across India, and work with international businesses operating in India or requiring India-specific AI context.
              </p>
              <p>
                Our practice areas are Search &amp; AI Visibility, Demand Generation, Knowledge &amp; Applied AI, Agentic Automation, and Intelligence &amp; Analytics. These are not departments — they are interconnected systems designed to compound each other.
              </p>
              <p>
                Kynato works on a retainer-based engagement model, scoped per system. We do not charge per deliverable. We charge for running systems and measurable outcomes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-urbanist font-black text-white mb-2">2024</div>
                <div className="text-sm text-muted-foreground font-roboto">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-urbanist font-black text-white mb-2">India</div>
                <div className="text-sm text-muted-foreground font-roboto">Headquartered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-urbanist font-black text-white mb-2">5</div>
                <div className="text-sm text-muted-foreground font-roboto">Capabilities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-urbanist font-black text-white mb-2">∞</div>
                <div className="text-sm text-muted-foreground font-roboto">Compound Leverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-urbanist font-black text-4xl md:text-5xl text-white mb-6 tracking-tight">
              Ready to Work With Kynato?
            </h2>
            <p className="font-roboto text-muted-foreground text-lg mb-10 leading-relaxed">
              Book a 30-minute Strategy Call. We map your current operations against two filters — where is revenue leaking, and where are hours being wasted — and identify the highest-return system to build first.
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
