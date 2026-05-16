import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export const metadata: Metadata = {
  title: "Careers | Kynato — AI Agency India",
  description:
    "Build AI systems that actually run. Join Kynato Nexinnovations LLP — a B2B AI agency based in India building intelligence ecosystems for businesses.",
  keywords:
    "AI agency jobs India, Kynato careers, AI engineer jobs India, SEO jobs India, agentic automation jobs India",
  alternates: {
    canonical: "https://kynato.com/careers",
  },
}

const openRoles = [
  {
    title: "AI Systems Engineer",
    type: "Full-time",
    location: "Remote (India)",
    desc: "Design and deploy RAG systems, agentic pipelines, and AI integration layers. Strong experience with LLMs, vector databases, and Python required.",
    href: "/careers/ai-systems-engineer",
  },
  {
    title: "SEO & AI Visibility Strategist",
    type: "Full-time",
    location: "Remote (India)",
    desc: "Own client SEO and GEO engagements. Technical SEO, content strategy, schema markup, and AI visibility monitoring across ChatGPT, Perplexity, and Gemini.",
    href: "/careers/seo-ai-visibility-strategist",
  },
  {
    title: "Automation Engineer (n8n / Make / Zapier)",
    type: "Full-time",
    location: "Remote (India)",
    desc: "Build and operate workflow automations across CRM, WhatsApp, document pipelines, and third-party APIs. Experience with n8n, Make, or equivalent required.",
    href: "/careers/automation-engineer",
  },
]

const principles = [
  "We build systems, not slide decks.",
  "We stay accountable after go-live.",
  "We measure by outcomes, not activity.",
  "We operate with full transparency to clients.",
  "We build for India and the world.",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#027C88] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              CAREERS AT KYNATO
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight">
              Build Systems That Actually Run.<br />
              Not Demos. Not Decks.
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl leading-relaxed">
              Kynato is a B2B AI agency that builds and operates intelligence ecosystems. We are looking for people who want to work on real AI systems that go live, run in production, and are measured against revenue and hours saved.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 bg-[#09090B] border-b border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-urbanist font-bold text-2xl text-white mb-8">How We Work</h2>
            <ul className="space-y-4">
              {principles.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-urbanist font-black text-accent-teal text-lg mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-roboto text-white/80 text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-20 bg-black border-b border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-12">
              Open Roles
            </h2>
            <div className="space-y-6">
              {openRoles.map((role) => (
                <div
                  key={role.href}
                  className="group border border-white/5 rounded-2xl p-8 bg-[#09090B] hover:border-accent-teal/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-urbanist font-bold text-xl text-white group-hover:text-accent-teal transition-colors mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" /> {role.location}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`mailto:hello@kynato.com?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center text-sm font-semibold text-accent-blue hover:underline shrink-0"
                    >
                      Apply <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <p className="font-roboto text-muted-foreground leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-white/5 rounded-2xl bg-[#09090B] text-center">
              <h3 className="font-urbanist font-bold text-xl text-white mb-3">
                Don&apos;t See Your Role?
              </h3>
              <p className="font-roboto text-muted-foreground mb-6">
                If you build things that run in production and care about outcomes over activity, we want to hear from you.
              </p>
              <a
                href="mailto:hello@kynato.com?subject=Open Application — Kynato"
                className="inline-flex items-center font-semibold text-accent-teal hover:underline"
              >
                Send an open application <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-urbanist font-black text-3xl md:text-4xl text-white mb-6">
              Questions About Working at Kynato?
            </h2>
            <p className="font-roboto text-muted-foreground text-lg mb-8">
              Reach us at{" "}
              <a href="mailto:hello@kynato.com" className="text-accent-teal hover:underline">
                hello@kynato.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
