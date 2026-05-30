import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

interface Industry {
  slug: string
  title: string
  keywords: string
  metaDescription: string
  desc: string
  challenge: string
  useCases: { title: string; detail: string }[]
  capabilities: string[]
}

const industries: Industry[] = [
  {
    slug: "ca-firms",
    title: "CA Firms and Accounting Practices",
    keywords: "AI for CA firms India, GST AI India, ICAI compliance AI India, accounting AI India",
    metaDescription:
      "Kynato builds AI systems for Indian CA firms — RAG systems for GST and income tax queries, document collection agents, compliance reminder automation, and WhatsApp-based client communication.",
    desc: "Indian CA firms hold deep institutional knowledge locked inside PDFs, email threads, and the minds of senior staff. Kynato builds the AI layer that makes that knowledge accessible, automates the manual compliance workflow, and gives every team member and client faster, more accurate responses.",
    challenge:
      "Most CA firms lose hours every day to three avoidable problems: junior staff spending time searching for regulatory answers that exist somewhere in a document folder, senior partners interrupted with questions they've answered dozens of times, and clients calling to follow up on compliance deadlines that could have been automated.",
    useCases: [
      {
        title: "Custom RAG System for GST and Income Tax Queries",
        detail:
          "A knowledge base built over your firm's corpus of GST circulars, CBDT notifications, ICAI guidance notes, and internal working notes — accessible via WhatsApp or web, with source-backed answers and confidence scoring.",
      },
      {
        title: "ITR and Audit Document Collection Agent",
        detail:
          "A WhatsApp bot that requests specific documents from clients, validates submissions, renames and routes files to the correct folders, and updates CRM status — eliminating manual document chasing across tax season.",
      },
      {
        title: "GST and ITR Compliance Reminder Automation",
        detail:
          "Multi-channel reminder system for upcoming GST filing deadlines, ITR due dates, TDS payment dates, and audit milestones — with escalation logic when clients don't acknowledge.",
      },
      {
        title: "New Circular Detection and Alert",
        detail:
          "Automated monitoring for new GST, CBDT, and ICAI notifications — with plain-language summaries delivered to the relevant team members and ingestion into the RAG system within 24 hours.",
      },
      {
        title: "Client Communication Automation",
        detail:
          "AI-assisted WhatsApp and email communication for standard client queries, invoice delivery, payment reminders, and milestone status updates — reducing manual follow-up across the client portfolio.",
      },
    ],
    capabilities: ["Knowledge & Applied AI", "Agentic Automation", "Search & AI Visibility"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Providers and Clinics",
    keywords: "AI for healthcare India, clinic AI India, hospital automation India, patient AI India",
    metaDescription:
      "Kynato builds AI systems for Indian healthcare providers — patient query automation, appointment booking agents, clinical document intelligence, and local SEO for clinics and hospitals.",
    desc: "Healthcare providers in India face a dual challenge: delivering high-quality patient experiences while managing high administrative volume with limited staff. Kynato builds AI systems that handle the administrative and informational layer — so clinical staff focus on clinical work.",
    challenge:
      "The biggest operational drains in most clinics are not clinical — they are administrative. Missed appointment reminders, missed calls from patients, manual data entry from patient intake forms, and staff time spent answering basic informational queries that could be automated.",
    useCases: [
      {
        title: "Patient Query and Appointment Automation",
        detail:
          "A WhatsApp bot that answers common patient questions, books and confirms appointments, sends reminders, and handles rescheduling — operating 24/7 without staff involvement for routine interactions.",
      },
      {
        title: "Voice Triage Bot with Urgency Classification",
        detail:
          "An AI phone answering system that handles missed calls, collects patient intake information, classifies urgency, books appointments for routine cases, and escalates immediately for high-priority situations.",
      },
      {
        title: "Clinical Document Intelligence",
        detail:
          "A document processing pipeline that extracts structured data from patient intake forms, discharge summaries, and referral documents — feeding structured records into your practice management system.",
      },
      {
        title: "Clinical Protocol Knowledge Base",
        detail:
          "A RAG system built over your clinical protocols, medication references, and compliance documents — accessible to clinical staff for accurate, source-backed answers without searching across folders.",
      },
      {
        title: "Local SEO and AI Visibility for Healthcare",
        detail:
          "Google Business Profile optimisation, city-specific service page creation, schema markup for healthcare entities, and GEO strategy to ensure your practice appears in AI-generated healthcare recommendations.",
      },
    ],
    capabilities: ["Knowledge & Applied AI", "Demand Generation", "Agentic Automation"],
  },
  {
    slug: "legal",
    title: "Legal Firms and Compliance Teams",
    keywords: "AI for legal India, legal document AI India, law firm AI India, compliance automation India",
    metaDescription:
      "Kynato builds AI systems for Indian legal firms — RAG systems over legal databases, document intelligence for contract analysis, compliance deadline automation, and AI visibility for law firms.",
    desc: "Legal work is knowledge-intensive and deadline-driven. Kynato builds the AI infrastructure that gives legal teams faster access to relevant precedents, automates the administrative burden of compliance tracking, and ensures your firm is visible in AI-generated legal recommendations.",
    challenge:
      "The friction in most legal practices comes from three sources: associates spending time on legal research that an AI could surface faster, manual tracking of compliance and court deadlines across a large client portfolio, and institutional knowledge that disappears when senior lawyers move on.",
    useCases: [
      {
        title: "Legal Precedent and Case Search",
        detail:
          "A semantic search system built over ingested judgment corpora and legal databases — enabling associates to search case law by concept, not just by citation, with relevant passages surfaced in seconds.",
      },
      {
        title: "Contract Analysis and Field Extraction",
        detail:
          "A document intelligence pipeline that extracts key clauses, parties, dates, obligations, and risk flags from contracts — producing structured summaries and flagging anomalies for attorney review.",
      },
      {
        title: "Compliance Deadline Tracking and Alert System",
        detail:
          "Automated deadline management for court filings, regulatory submissions, statutory compliance dates, and client deliverables — with multi-channel alerts and escalation for overdue items.",
      },
      {
        title: "Internal Knowledge Base",
        detail:
          "A RAG system built over your firm's internal research library, precedent documents, and standard drafting guides — giving every associate access to the firm's collective knowledge with source attribution.",
      },
      {
        title: "AI Visibility for Law Firms",
        detail:
          "SEO, AEO, and GEO strategy for law firms — ensuring your practice appears in Google search results, featured snippets, and AI-generated recommendations when buyers search for legal services in your practice areas.",
      },
    ],
    capabilities: ["Knowledge & Applied AI", "Agentic Automation", "Search & AI Visibility"],
  },
  {
    slug: "b2b-saas",
    title: "B2B SaaS and Technology Companies",
    keywords: "AI for B2B SaaS India, SaaS marketing AI India, AI lead generation SaaS India, GEO for SaaS",
    metaDescription:
      "Kynato builds AI visibility, demand generation, and analytics systems for Indian B2B SaaS companies — GEO for AI-generated recommendations, outbound automation, lead scoring, and marketing analytics.",
    desc: "B2B SaaS companies face an increasingly competitive visibility landscape. Buyers compare products using AI-generated recommendations before visiting a single website. Kynato builds the systems that ensure your product appears in those comparisons, generates consistent pipeline, and measures everything accurately.",
    challenge:
      "SaaS buyers in India now do product research across ChatGPT, Perplexity, G2, and Google simultaneously. If your product doesn't appear in AI-generated comparisons and recommendation lists, you are invisible in a critical part of the buying journey — and most SaaS companies haven't started building this visibility.",
    useCases: [
      {
        title: "GEO and AEO for SaaS Products",
        detail:
          "Structured content optimisation, prompt gap analysis, and external brand signal building — ensuring your product appears in AI-generated comparisons, recommendation lists, and category answers on ChatGPT, Perplexity, and Gemini.",
      },
      {
        title: "LinkedIn Outreach and Cold Email Automation",
        detail:
          "ICP-targeted LinkedIn connection sequences and AI-personalised cold email campaigns — with deliverability infrastructure, reply detection, and CRM routing built for B2B sales cycles.",
      },
      {
        title: "AI Lead Scoring and Nurturing",
        detail:
          "Lead scoring models that weight trial behaviour, firmographic signals, and engagement data — routing high-intent leads to sales and triggering automated nurturing sequences for earlier-stage prospects.",
      },
      {
        title: "AI Customer Support Assistant",
        detail:
          "A RAG-backed customer support bot trained on your documentation, FAQ library, and product knowledge — handling tier-1 queries and escalating to human agents with full context when required.",
      },
      {
        title: "Unified Marketing Analytics",
        detail:
          "A consolidated analytics layer connecting paid channels, email, LinkedIn, and product usage data — with lead attribution, funnel conversion tracking, and campaign ROI by channel.",
      },
    ],
    capabilities: ["Search & AI Visibility", "Demand Generation", "Intelligence & Analytics"],
  },
  {
    slug: "healthtech",
    title: "HealthTech and MedTech Startups",
    keywords: "HealthTech AI India, MedTech marketing AI India, HealthTech SEO India, regulated product AI visibility",
    metaDescription:
      "Kynato builds AI visibility, knowledge systems, and automation for HealthTech and MedTech startups in India — technical SEO, GEO, clinical knowledge bases, and onboarding automation.",
    desc: "HealthTech and MedTech startups operate in a regulated environment where content accuracy, search visibility, and institutional knowledge management are all critical. Kynato builds systems that are calibrated to the regulatory reality of Indian healthcare technology.",
    challenge:
      "HealthTech startups face the compound challenge of building visibility in a regulated category where AI models are cautious, while simultaneously managing complex onboarding workflows, clinical documentation, and compliance requirements that consume disproportionate team time.",
    useCases: [
      {
        title: "Technical SEO and GEO for Regulated Products",
        detail:
          "SEO infrastructure, schema markup for medical products and services, and GEO strategy calibrated for regulated categories — ensuring accurate representation in AI-generated healthcare content.",
      },
      {
        title: "Clinical and Product Knowledge Base",
        detail:
          "A RAG system built over your clinical protocols, regulatory submissions, product documentation, and internal training materials — giving clinical and support teams accurate, source-backed answers.",
      },
      {
        title: "Onboarding Automation for Healthcare Clients",
        detail:
          "Automated document collection, compliance checklist delivery, training milestone tracking, and confirmation workflows for hospital and clinic client onboarding.",
      },
      {
        title: "Inbound Lead Architecture for HealthTech",
        detail:
          "Landing pages optimised for HealthTech buyer journeys, lead capture automation, and WhatsApp qualification flows configured for institutional healthcare procurement.",
      },
      {
        title: "Compliance Deadline and Regulatory Monitoring",
        detail:
          "Automated tracking of CDSCO notifications, BIS standards updates, and NABH requirements — with plain-language summaries delivered to the compliance team on schedule.",
      },
    ],
    capabilities: ["Search & AI Visibility", "Knowledge & Applied AI", "Demand Generation"],
  },
  {
    slug: "real-estate",
    title: "Real Estate Developers and PropTech",
    keywords: "AI for real estate India, PropTech AI India, real estate lead generation India, property AI India",
    metaDescription:
      "Kynato builds lead generation, automation, and analytics systems for Indian real estate developers and PropTech companies — WhatsApp qualification bots, local SEO, and campaign analytics.",
    desc: "Real estate in India generates enormous lead volume from digital campaigns — and loses a significant percentage of that volume to slow follow-up, manual qualification, and inconsistent CRM updates. Kynato builds the systems that capture, qualify, and nurture every lead automatically.",
    challenge:
      "The real estate sales funnel is particularly leaky at the qualification stage. Large volumes of leads come in from Meta and Google campaigns, but follow-up is manual, inconsistent, and slow. By the time a salesperson reaches a lead, three competing brokers already have.",
    useCases: [
      {
        title: "WhatsApp Lead Qualification and Nurturing",
        detail:
          "A WhatsApp bot that responds to ad leads within seconds, asks qualifying questions (budget, timeline, configuration preference), scores the lead, and routes hot leads to sales immediately while nurturing cooler leads automatically.",
      },
      {
        title: "AI Property Advisor Bot",
        detail:
          "A conversational AI that answers questions about specific projects, available configurations, pricing, RERA status, and payment schedules — trained on your project data and integrated with WhatsApp.",
      },
      {
        title: "Local SEO for Real Estate Projects",
        detail:
          "Google Business Profile optimisation, city and neighbourhood-specific landing pages, LocalBusiness and RealEstateListing schema, and Google Maps ranking management for your projects and offices.",
      },
      {
        title: "CRM Auto-Update and Lead Attribution",
        detail:
          "Automated CRM logging of every WhatsApp interaction, call, and site visit — with campaign attribution, stage update triggers, and duplicate detection to keep pipeline data clean.",
      },
      {
        title: "Campaign and Pipeline Analytics",
        detail:
          "A consolidated dashboard connecting Meta Ads, Google Ads, WhatsApp, and CRM data — showing lead source attribution, cost per qualified lead, funnel conversion by project, and sales team pipeline health.",
      },
    ],
    capabilities: ["Demand Generation", "Agentic Automation", "Intelligence & Analytics"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce and D2C Brands",
    keywords: "AI for e-commerce India, D2C AI India, e-commerce SEO India, D2C automation India",
    metaDescription:
      "Kynato builds SEO, automation, and analytics systems for Indian e-commerce and D2C brands — product category SEO, customer support automation, abandoned cart recovery, and marketing analytics.",
    desc: "E-commerce and D2C brands in India face intense competition in both organic search and paid channels. Kynato builds the visibility, automation, and analytics systems that compound competitive advantage — from product category SEO to AI-powered customer support to unified marketing measurement.",
    challenge:
      "D2C brands typically have three compounding problems: product pages that don't rank because they lack topical authority, customer support that doesn't scale because it requires human agents for every query, and marketing analytics that don't attribute revenue accurately because the data isn't connected.",
    useCases: [
      {
        title: "Product Category SEO and AI Visibility",
        detail:
          "Technical SEO for category and product pages, topical authority content strategy, schema markup for products and reviews, and GEO strategy to appear in AI-generated product recommendation answers.",
      },
      {
        title: "Customer Support Automation",
        detail:
          "A RAG-backed support bot that answers order status queries, return policy questions, product information requests, and warranty queries — with Shopify/WooCommerce integration and human escalation for complex cases.",
      },
      {
        title: "Abandoned Cart Recovery Automation",
        detail:
          "WhatsApp and email abandoned cart sequences with timing logic, personalisation, and discount triggers — integrated with your e-commerce platform and CRM for accurate attribution.",
      },
      {
        title: "AI-Assisted Content Production",
        detail:
          "Content calendar planning, product description generation, SEO blog production, and multi-platform distribution automation — maintaining consistent content output without proportional team growth.",
      },
      {
        title: "Marketing Performance Analytics",
        detail:
          "Unified dashboard connecting Meta Ads, Google Ads, email, WhatsApp, and platform analytics — with ROAS by channel, customer acquisition cost, funnel conversion, and cohort retention reporting.",
      },
    ],
    capabilities: ["Search & AI Visibility", "Agentic Automation", "Intelligence & Analytics"],
  },
  {
    slug: "edtech",
    title: "Education and EdTech Companies",
    keywords: "AI for EdTech India, education AI India, EdTech marketing India, student AI India",
    metaDescription:
      "Kynato builds AI visibility, lead nurturing, and automation systems for Indian EdTech companies — GEO for course discovery, student support knowledge bases, and admissions workflow automation.",
    desc: "EdTech companies in India compete for student attention in both traditional search and AI-generated course recommendations. Kynato builds the systems that make your courses discoverable, convert enquiries efficiently, and automate the operational work of student support and admissions.",
    challenge:
      "EdTech companies generate large volumes of course enquiries but convert a small percentage — because follow-up is slow, the qualification process is manual, and course information is scattered across a website that students find hard to navigate.",
    useCases: [
      {
        title: "GEO and SEO for Course Discovery",
        detail:
          "Technical SEO for course landing pages, Course schema markup, content strategy for education-intent keywords, and GEO strategy to appear in AI-generated course and skills recommendations.",
      },
      {
        title: "Course Enquiry Lead Nurturing",
        detail:
          "Automated WhatsApp and email sequences that respond to course enquiries immediately, ask qualification questions, deliver course details and brochures, and route high-intent leads to admission counsellors.",
      },
      {
        title: "Student Support Knowledge Assistant",
        detail:
          "A RAG-backed chatbot trained on your curriculum, FAQ, and policy documents — answering student queries about assignments, schedules, certifications, and refund policies accurately and instantly.",
      },
      {
        title: "Admissions Workflow Automation",
        detail:
          "Automated document collection for admissions, enrollment confirmation workflows, fee reminder sequences, and onboarding milestone tracking — covering the full student journey from enquiry to first class.",
      },
      {
        title: "Course Performance and Funnel Analytics",
        detail:
          "Analytics system tracking enquiry volume by course, funnel conversion by channel, enrollment cost, and student engagement metrics — giving the marketing and admissions team a clear ROI picture.",
      },
    ],
    capabilities: ["Search & AI Visibility", "Demand Generation", "Knowledge & Applied AI"],
  },
]

const capabilityColors: Record<string, string> = {
  "Search & AI Visibility": "#027C88",
  "Demand Generation": "#006AF0",
  "Knowledge & Applied AI": "#7C3AED",
  "Agentic Automation": "#D97706",
  "Intelligence & Analytics": "#059669",
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)

  return {
    title: industry ? `${industry.title} | Kynato` : "Industry | Kynato",
    description: industry?.metaDescription ?? industry?.desc,
    keywords: industry?.keywords,
    alternates: {
      canonical: `https://kynato.com/industries/${slug}`,
    },
  }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = industries.find((item) => item.slug === slug)

  if (!industry) return notFound()

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#027C88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Link href="/industries" className="inline-block mb-4 text-sm font-semibold text-accent-teal hover:underline">
              ← Industries
            </Link>
            <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              AI Systems for {industry.title}
            </h1>
            <p className="font-roboto text-[#D0D5DD] text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              {industry.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {industry.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                  style={{
                    borderColor: `${capabilityColors[cap]}40`,
                    color: capabilityColors[cap],
                    background: `${capabilityColors[cap]}10`,
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The challenge */}
        <section className="py-16 border-b border-white/5 bg-[#09090B]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-urbanist font-bold text-2xl md:text-3xl text-white mb-5">
              The Problem Worth Solving
            </h2>
            <p className="font-roboto text-[#D0D5DD] text-base md:text-lg leading-relaxed">
              {industry.challenge}
            </p>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-black border-b border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-white mb-4">
              High-Return Systems for This Sector
            </h2>
            <p className="font-roboto text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Kynato builds, integrates, and directly operates these systems — each one designed around the specific workflow and outcome it targets.
            </p>
            <div className="space-y-5">
              {industry.useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-2xl border border-white/5 bg-[#09090B] p-7 hover:border-accent-teal/20 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent-teal shrink-0 mt-1" />
                  <div>
                    <h3 className="font-urbanist font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="font-roboto text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#09090B]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-urbanist font-black text-3xl md:text-4xl text-white mb-4">
              Build the Right System for Your Context
            </h2>
            <p className="font-roboto text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute strategy call. We will map your specific workflows, identify the highest-return system to build first, and show you what it looks like in practice.
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
        </section>

      </main>
      <Footer />
    </div>
  )
}
