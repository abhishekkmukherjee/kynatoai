import type { Metadata } from "next";
import { Urbanist, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kynato - AI Agency India | SEO, GEO, AI Visibility, RAG, Knowledge AI, Business Analytics & Agentic Automation",
  description: "Kynato builds and operates SEO, AI Visibility, GEO (Generative Engine Optimisation), AEO (Answer Engine Optimisation), Knowledge AI, RAG Systems, Agentic Automation, and Lead Generation systems for startups, growth teams, and founders globally. India-headquartered. Built for outcomes — revenue gained or hours saved.",
  keywords: "AI agency India, GEO agency India, generative engine optimisation India, AEO agency, answer engine optimisation, AI visibility India, RAG system India, Knowledge AI India, agentic automation India, agentic AI India, B2B lead generation AI India, SEO agency India, AI automation agency, ChatGPT ranking India, Perplexity visibility, Google AI Overviews optimisation, WhatsApp automation India, document intelligence India, voice AI India, AI agency for startups, AI agency for CA firms",
  authors: [{ name: "Kynato Nexinnovations LLP" }],
  openGraph: {
    type: "website",
    url: "https://kynato.com/",
    siteName: "Kynato",
    locale: "en_IN",
    title: "Kynato - AI Agency India | SEO, GEO, AI Visibility, RAG, Knowledge AI & Agentic Automation",
    description: "Kynato builds and operates SEO, AI Visibility, GEO, AEO, Knowledge AI, RAG Systems, and Agentic Automation for startups and businesses globally. India-headquartered. Measured by revenue gained or hours saved.",
    images: [
      {
        url: "https://kynato.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kynato — The Intelligence Ecosystem. AI Agency India.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KynatoAI",
    creator: "@KynatoAI",
    title: "Kynato - AI Agency India | GEO, AI Visibility, RAG, Knowledge AI & Agentic Automation",
    description: "SEO, AI Visibility, GEO, AEO, Knowledge AI, RAG Systems, and Agentic Automation for startups and businesses globally. India-headquartered. Built for outcomes.",
    images: ["https://kynato.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kynato.com/",
    languages: {
      en: "https://kynato.com/",
      "en-IN": "https://kynato.com/",
      "x-default": "https://kynato.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${robotoCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Ratu, Ranchi, Jharkhand, India" />
        <meta name="geo.position" content="23.425404;85.219271" />
        <meta name="ICBM" content="23.425404, 85.219271" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
        
        {/* Schema Block 1: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://kynato.com/#organization",
              "name": "Kynato",
              "legalName": "Kynato Nexinnovations LLP",
              "alternateName": ["Kynato", "Kynato AI", "Kynato Agency"],
              "url": "https://kynato.com",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://kynato.com/#logo",
                "url": "https://kynato.com/logo.png",
                "contentUrl": "https://kynato.com/logo.png",
                "width": 300,
                "height": 80,
                "caption": "Kynato"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://kynato.com/og-image.jpg",
                "width": 1200,
                "height": 630
              },
              "description": "Kynato is a B2B artificial intelligence (AI) agency based in India that functions as an intelligence ecosystem, building and operating growth, intelligence, and automation systems for businesses. The company combines AI capability with human expertise across core practice areas: Search Engine Optimisation (SEO) and AI visibility, Lead Generation, Knowledge AI, Agentic Automation, and Business Performance Analytics. Kynato's services include Generative Engine Optimisation, Custom Retrieval-Augmented Generation (RAG) Systems, Agentic Workflow Automation, AI-powered Lead Generation and Nurturing, Conversational and Outreach Automation, and Unified Search and AI visibility Analytics. The agency builds, integrates, and directly manages these systems for its clients. Kynato works with founders, startups, growth teams, and operations leaders to help businesses capture organic and AI search visibility, automate lead conversion at scale, and replace manual processes with AI-powered systems.",
              "slogan": "Make Intelligence Work.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Place",
                "name": "Jharkhand, India"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ratu",
                "addressLocality": "Ratu",
                "addressRegion": "Jharkhand",
                "postalCode": "835222",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.425404",
                "longitude": "85.219271"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Global"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "hello@kynato.com",
                  "availableLanguage": ["English", "Hindi"],
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "hello@kynato.com",
                  "availableLanguage": ["English", "Hindi"],
                  "areaServed": "Worldwide"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/KynatoAI",
                "https://twitter.com/KynatoAI",
                "https://www.facebook.com/KynatoAI",
                "https://www.instagram.com/KynatoAI",
                "https://www.pinterest.com/KynatoAI"
              ],
              "knowsAbout": [
                "Search Engine Optimisation",
                "AI Visibility",
                "Generative Engine Optimisation",
                "Answer Engine Optimisation",
                "AI Search Visibility",
                "Knowledge AI",
                "Retrieval-Augmented Generation",
                "RAG Systems",
                "Agentic Automation",
                "Agentic AI",
                "Multi-Agent AI Systems",
                "B2B Lead Generation",
                "WhatsApp Automation",
                "Voice AI",
                "Document Intelligence",
                "Business Performance Analytics",
                "GEO Optimisation",
                "ChatGPT Visibility",
                "Perplexity Visibility",
                "Google AI Overviews Optimisation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kynato AI Agency Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO and Organic Visibility",
                      "url": "https://kynato.com/services/search-ai-visibility/seo/",
                      "description": "Technical SEO, content strategy, local SEO, off-page SEO, and Knowledge Graph entity building — designed to drive compounding organic growth for businesses in India and globally."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Search Visibility and Generative Engine Optimisation (GEO)",
                      "url": "https://kynato.com/services/search-ai-visibility/ai-visibility/",
                      "description": "GEO builds your business's presence in AI-generated answers on ChatGPT, Perplexity, Google AI Overviews, and Gemini through citation authority building, prompt-gap content, and E-E-A-T amplification for AI engines."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Answer Engine Optimisation (AEO) and Featured Snippet Capture",
                      "url": "https://kynato.com/services/search-ai-visibility/ai-visibility/aeo/",
                      "description": "AEO captures Featured Snippets, People Also Ask positions, and Google AI Overviews through FAQ schema, answer-first content architecture, and conversational keyword optimisation."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Inbound Lead Architecture and B2B Lead Generation",
                      "url": "https://kynato.com/services/demand-generation/inbound-lead-architecture/",
                      "description": "AI-powered inbound and outbound lead generation — LinkedIn outreach automation, cold email sequencing, WhatsApp lead capture, landing page CRO, and AI lead scoring and nurturing."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom RAG Systems and Knowledge AI",
                      "url": "https://kynato.com/services/knowledge-applied-ai/rag-systems/",
                      "description": "Custom Retrieval-Augmented Generation (RAG) systems, AI knowledge bases, document intelligence pipelines, and AI assistants for CA firms, healthcare providers, legal teams, and B2B operations."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agentic Workflow Systems and Core Automation",
                      "url": "https://kynato.com/services/agentic-automation/agentic-workflows/",
                      "description": "Multi-step autonomous AI agents for document collection, CRM updates, compliance reminders, invoice automation, HR onboarding, WhatsApp automation, Voice AI, and complex operational workflows."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intelligence, Analytics, and AI Visibility Tracking",
                      "url": "https://kynato.com/services/intelligence-analytics/search-intelligence/",
                      "description": "Unified search intelligence, AI visibility tracking, marketing ROI analytics, and automation performance dashboards — delivered in plain language without a data team."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Schema Block 2: WebSite + SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://kynato.com/#website",
              "url": "https://kynato.com",
              "name": "Kynato",
              "alternateName": "Kynato Nexinnovations LLP",
              "description": "B2B AI agency building and operating SEO, AI Visibility, GEO, AEO, Knowledge AI, RAG Systems, Agentic Automation, and Lead Generation for startups and businesses globally.",
              "publisher": {
                "@id": "https://kynato.com/#organization"
              },
              "inLanguage": ["en-IN", "en"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://kynato.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema Block 3: ProfessionalService / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness"],
              "@id": "https://kynato.com/#localbusiness",
              "name": "Kynato",
              "legalName": "Kynato Nexinnovations LLP",
              "image": "https://kynato.com/og-image.jpg",
              "url": "https://kynato.com",
              "email": "hello@kynato.com",
              "description": "Kynato (Kynato Nexinnovations LLP) is a B2B artificial intelligence (AI) agency based in India that functions as an intelligence ecosystem, building and operating growth, intelligence, and automation systems for businesses. The company combines AI capability with human expertise across core practice areas: Search Engine Optimisation (SEO) and AI visibility, Lead Generation, Knowledge AI, Agentic Automation, and Business Performance Analytics.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ratu",
                "addressLocality": "Ratu",
                "addressRegion": "Jharkhand",
                "postalCode": "835222",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.425404",
                "longitude": "85.219271"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Global"
                }
              ],
              "priceRange": "₹₹₹",
              "currenciesAccepted": "INR, USD",
              "paymentAccepted": "Bank Transfer, UPI, International Wire",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "hasMap": "https://maps.google.com/?q=23.425404,85.219271",
              "sameAs": [
                "https://www.linkedin.com/company/kynato",
                "https://twitter.com/kynato"
              ],
              "parentOrganization": {
                "@id": "https://kynato.com/#organization"
              }
            })
          }}
        />

        {/* Schema Block 4: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://kynato.com"
                }
              ]
            })
          }}
        />

        {/* Schema Block 5: ItemList: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Kynato AI Agency Services",
              "description": "Complete list of AI agency services offered by Kynato Nexinnovations LLP",
              "url": "https://kynato.com",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Search & AI Visibility",
                  "url": "https://kynato.com/services/search-ai-visibility/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Demand Generation",
                  "url": "https://kynato.com/services/demand-generation/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Knowledge & Applied AI",
                  "url": "https://kynato.com/services/knowledge-applied-ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Agentic Automation",
                  "url": "https://kynato.com/services/agentic-automation/"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Intelligence & Analytics",
                  "url": "https://kynato.com/services/intelligence-analytics/"
                }
              ]
            })
          }}
        />
        
        {/* Schema Block 6: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is an AI agency and what does one actually do for a business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI agency designs, builds, and operates AI-powered systems that drive measurable business outcomes — covering SEO and AI Visibility, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), Lead Generation, Knowledge AI, RAG Systems, and Agentic Automation. Unlike a digital marketing agency that runs campaigns, an AI agency like Kynato stays accountable for outcomes after go-live, measuring everything against revenue gained or hours saved — not impressions or reports."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Generative Engine Optimisation (GEO) and why does my business need it now?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generative Engine Optimisation (GEO) is the discipline of making your business visible in AI-generated answers — on ChatGPT, Perplexity, Google AI Overviews, and Gemini — rather than only in traditional search results. AI Overviews now appear in over 13% of Google queries and growing. Buyers are getting answers from AI before clicking any website. If your business is not cited in AI-generated results, you are invisible to a rapidly expanding share of your market. GEO is no longer optional for businesses that rely on organic discovery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Answer Engine Optimisation (AEO) and how is it different from SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Answer Engine Optimisation (AEO) focuses on capturing zero-click positions — Featured Snippets, People Also Ask boxes, and Google AI Overviews — where buyers get answers without clicking through to a site. SEO drives ranking and traffic. AEO drives visibility and authority at the moment of intent, before the click. Kynato deploys AEO through FAQ schema markup, answer-first content architecture, conversational keyword targeting, and AI Overview presence monitoring. Both work together — AEO amplifies the trust value of SEO traffic."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is AI Visibility and how does Kynato measure it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI Visibility refers to how prominently and accurately your brand appears across AI-generated answer surfaces — ChatGPT, Perplexity, Gemini, Google AI Overviews, and Claude. Kynato measures AI Visibility through AI share of voice tracking, sentiment analysis in AI-generated brand mentions, competitor citation tracking across LLMs, and prompt performance monitoring against your buyer's actual search questions. All tracked in a unified dashboard, updated monthly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a RAG system and when does my business actually need one?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Retrieval-Augmented Generation (RAG) system builds an AI layer over your own knowledge — documents, compliance data, client records, SOPs, case histories — so that your team or customers can query it in plain language and get accurate, cited answers in real time. A business needs RAG when institutional knowledge is slow to access, inconsistently applied, or trapped in PDFs and email threads. Kynato builds and operates RAG systems for CA firms, clinics, legal teams, and B2B operations teams."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Agentic Automation and how is it different from a chatbot or basic workflow tool?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A chatbot answers questions. A basic workflow tool moves data between apps on triggers. Agentic Automation deploys multi-step autonomous AI agents that execute complex processes end to end — making conditional decisions, calling external APIs, handling exceptions, and escalating to a human only when a situation falls outside defined parameters. Kynato builds agentic systems for document collection, compliance reminders, CRM updates, invoice processing, HR onboarding, and multi-step operational workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from SEO, GEO, and AEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO remediation produces measurable data within 4–6 weeks. Keyword ranking gains compound from month 3, with significant traction by month 5–6. GEO — securing citations in AI-generated answers — shows early signals within 4–8 weeks for domains with existing authority. AEO Featured Snippet gains can appear within 2–6 weeks of deployment. Every system is instrumented from day one, so there are no black-box waiting periods."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to deploy an Agentic Automation or RAG system?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentic workflow systems and RAG deployments typically go live within 4–8 weeks from engagement start. Simple single-workflow automations often go live in 3–4 weeks. Multi-agent pipeline systems with external API integrations take 6–10 weeks. Kynato delivers a system architecture document before build begins, so timelines are agreed before a single line of code is written."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Kynato work with businesses that have no existing AI infrastructure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — this is the starting point for most Kynato clients. No AI stack, no existing automation, no prior SEO systems. The process begins with a gap analysis against your current operations, tools, and business goals. The entry point is determined by where the highest return on investment is for your specific business, not a standard package applied uniformly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Kynato work with international clients or only Indian businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato is headquartered in India and serves Indian startups, SMEs, growth teams, and founders as its primary market. We also work with international businesses — particularly those operating in India, building India-market products, or requiring AI systems with India-specific context (GST, ICAI, SEBI regulations, vernacular language AI, WhatsApp-first workflows). Global clients in legal, compliance, healthcare, and B2B SaaS who want Indian AI delivery expertise are welcome to book a strategy call."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools and platforms does Kynato integrate with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato is tool-agnostic and builds integrations based on your existing stack. Common integrations include HubSpot, Zoho CRM, Salesforce, Tally, Zoho Books, QuickBooks, WhatsApp Business API, Gmail, Google Drive, SharePoint, Razorpay, and PayU. For AI infrastructure: Pinecone, Qdrant, Weaviate for vector search; OpenAI, Anthropic, and Google Gemini as LLM providers; and domain-tuned embedding models for legal, accounting, and compliance corpora."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Kynato different from buying a SaaS AI tool or using ChatGPT directly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A SaaS AI tool gives you a generic capability you must configure and maintain yourself. Using ChatGPT directly gives you a general-purpose model with no memory of your business, no integration with your data, and no accountability for results. Kynato builds custom systems designed around your specific business — integrated into your stack, trained on your data, and operated by Kynato on an ongoing basis. The outcome is measurable. The accountability is Kynato's."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Kynato's reporting look like?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monthly reporting covers SEO performance (rankings, traffic, Core Web Vitals), AI Visibility metrics (citation frequency across ChatGPT, Perplexity, Gemini, AI Overview presence), lead pipeline health, automation efficiency (hours saved, error rates, escalation frequency), and campaign ROI. All delivered in plain language — not a dashboard that requires a data analyst to interpret."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Kynato work alongside our existing SEO or marketing agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Kynato can operate as a specialist layer alongside an existing generalist marketing agency — handling AI Visibility (GEO, AEO), Agentic Automation, and Knowledge AI, while another agency handles brand, paid media, or creative. We provide a clear scope with no overlap and defined accountability for our specific systems. The one requirement: full data access to the systems we operate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Kynato's pricing model?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato works on a retainer-based engagement model, scoped per system. Retainers cover build, integration, operation, and monthly reporting. Kynato does not charge per deliverable or per tool — it charges for running systems and measurable outcomes. Pricing is scoped after the initial strategy call, once the system requirements are understood."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Kynato offer one-time projects or audits without a retainer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato offers a strategy call and system blueprint as the entry point — this is the diagnostic and design phase, scoped separately. For businesses not ready for a full engagement, this produces a specific, actionable architecture document. Ongoing retainers follow if the scope is agreed. Pure one-time audits without an operational follow-through are not Kynato's model — the value is in the system running, not the report."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Kynato handle data privacy for sensitive business and client information?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All client data processed through Kynato's systems is handled under strict confidentiality agreements. RAG systems are built on client-controlled or Kynato-managed private instances — not shared environments. Data is never used to train general models. India DPDP Act 2023 alignment is built into data handling design. GDPR-compatible data handling is available for international clients. Full data handling terms are provided before engagement begins."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the first step to working with Kynato?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Book a 30-minute Strategy Call. In that call, Kynato maps your current operations against two filters — where is revenue leaking, and where are hours being wasted — and identifies the highest-return system to build first. If there is a fit, a system blueprint follows. No pitch deck, no generic proposal. A real conversation about your specific situation."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-roboto bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
