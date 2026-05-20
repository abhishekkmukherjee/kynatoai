import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export const metadata: Metadata = {
  title: "Industries | Kynato — AI Agency India",
  description:
    "Kynato builds AI systems for CA firms, healthcare providers, legal teams, HealthTech startups, B2B SaaS, real estate, and e-commerce businesses in India.",
  keywords:
    "AI for CA firms India, AI for healthcare India, AI for legal India, AI for B2B SaaS India, AI for real estate India, industry AI agency India",
  alternates: {
    canonical: "https://kynato.com/industries",
  },
}

const industries = [
  {
    title: "CA Firms and Accounting Practices",
    keywords: "AI for CA firms India, GST AI India, ICAI compliance AI India",
    desc: "Custom RAG systems for GST and income tax queries, document collection agents for ITR and audit workflows, AI assistants for client communications, and WhatsApp automation for compliance reminders.",
    capabilities: ["Knowledge & Applied AI", "Agentic Automation", "Search & AI Visibility"],
    href: "/industries/ca-firms",
  },
  {
    title: "Healthcare and Clinics",
    keywords: "AI for healthcare India, clinic AI India, medical document AI India",
    desc: "AI knowledge bases for clinical protocols and compliance, patient query automation, appointment booking agents, document intelligence for patient records, and SEO for healthcare providers.",
    capabilities: ["Knowledge & Applied AI", "Demand Generation", "Agentic Automation"],
    href: "/industries/healthcare",
  },
  {
    title: "Legal and Compliance Teams",
    keywords: "AI for legal India, legal document AI India, compliance automation India",
    desc: "Document intelligence pipelines for contract analysis, RAG systems over legal databases, compliance deadline tracking agents, and AI visibility for law firms in search and AI-generated answers.",
    capabilities: ["Knowledge & Applied AI", "Agentic Automation", "Search & AI Visibility"],
    href: "/industries/legal",
  },
  {
    title: "B2B SaaS and Technology",
    keywords: "AI for B2B SaaS India, SaaS marketing AI India, AI lead generation SaaS India",
    desc: "GEO and AEO for product visibility in AI-generated answers, LinkedIn and cold email outreach automation, lead scoring models, AI customer support, and unified marketing analytics.",
    capabilities: ["Search & AI Visibility", "Demand Generation", "Intelligence & Analytics"],
    href: "/industries/b2b-saas",
  },
  {
    title: "HealthTech and MedTech Startups",
    keywords: "HealthTech AI India, MedTech marketing AI India, HealthTech SEO India",
    desc: "Technical SEO and AI visibility for HealthTech products, inbound lead architectures, knowledge AI for clinical and product documentation, and automation for onboarding and compliance workflows.",
    capabilities: ["Search & AI Visibility", "Knowledge & Applied AI", "Demand Generation"],
    href: "/industries/healthtech",
  },
  {
    title: "Real Estate and PropTech",
    keywords: "AI for real estate India, PropTech AI India, real estate lead generation India",
    desc: "Lead capture automation, WhatsApp qualification bots, AI property advisors, local SEO for real estate, and analytics dashboards for campaign and pipeline performance.",
    capabilities: ["Demand Generation", "Agentic Automation", "Intelligence & Analytics"],
    href: "/industries/real-estate",
  },
  {
    title: "E-commerce and D2C Brands",
    keywords: "AI for e-commerce India, D2C AI India, e-commerce SEO India",
    desc: "SEO and AI visibility for product categories, content automation, customer support automation, abandoned cart recovery bots, and marketing performance analytics.",
    capabilities: ["Search & AI Visibility", "Agentic Automation", "Intelligence & Analytics"],
    href: "/industries/ecommerce",
  },
  {
    title: "Education and EdTech",
    keywords: "AI for EdTech India, education AI India, EdTech marketing India",
    desc: "SEO and GEO for EdTech products, AI lead nurturing for course enquiries, knowledge bases for student support, and automation for admissions and onboarding workflows.",
    capabilities: ["Search & AI Visibility", "Demand Generation", "Knowledge & Applied AI"],
    href: "/industries/edtech",
  },
]

const capabilityColors: Record<string, string> = {
  "Search & AI Visibility": "#027C88",
  "Demand Generation": "#006AF0",
  "Knowledge & Applied AI": "#7C3AED",
  "Agentic Automation": "#D97706",
  "Intelligence & Analytics": "#059669",
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#006AF0] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              INDUSTRIES
            </span>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-7xl text-white mb-6 max-w-4xl leading-tight">
              AI Systems Built for<br />
              How Your Industry Works
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-3xl leading-relaxed">
              Kynato does not apply generic AI. Every system is designed around your industry&apos;s specific workflows, compliance requirements, data structures, and customer behaviour.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-[#09090B]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.href}
                  className="group border border-white/5 rounded-2xl p-8 bg-black hover:border-white/15 transition-all duration-300"
                >
                  <h2 className="font-urbanist font-bold text-2xl text-white mb-2 group-hover:text-accent-teal transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-xs text-muted-foreground font-roboto mb-4">
                    {industry.keywords}
                  </p>
                  <p className="font-roboto text-muted-foreground leading-relaxed mb-6 text-sm">
                    {industry.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{
                          color: capabilityColors[cap] ?? "#027C88",
                          borderColor: `${capabilityColors[cap] ?? "#027C88"}30`,
                          backgroundColor: `${capabilityColors[cap] ?? "#027C88"}10`,
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-sm font-semibold text-accent-teal group-hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal">
              YOUR INDUSTRY. YOUR SYSTEM.
            </span>
            <h2 className="font-urbanist font-black text-4xl md:text-5xl text-white mb-6 tracking-tight">
              Don&apos;t See Your Industry?
            </h2>
            <p className="font-roboto text-muted-foreground text-lg mb-10 leading-relaxed">
              Kynato works with any B2B business where there is measurable value in improved visibility, automated lead generation, faster knowledge access, or reduced manual operations. Book a call — we&apos;ll tell you if there is a fit.
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
