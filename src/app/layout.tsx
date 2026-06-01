import type { Metadata } from "next";
import { Urbanist, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/context/SidebarContext";
import { ContactSidebar } from "@/components/ContactSidebar";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kynato - AI Services Consultancy | AI Visibility, GEO, SEO, RAG, Agentic Automation, Knowledge AI & Analytics",
  description: "Kynato is an AI Services Consultancy based in India that builds and operates intelligence ecosystems for B2B businesses. Kynato as an AI Agency offers SEO & AI Visibility, GEO, RAG Systems, Agentic Automation, Knowledge AI, Lead Generation, and Business Performance Analytics services.",
  keywords: "AI services consultancy India, GEO India, generative engine optimisation India, AEO, answer engine optimisation, AI visibility India, RAG system India, Knowledge AI India, agentic automation India, B2B lead generation AI India, SEO agency India, AI automation India, ChatGPT ranking India, Perplexity visibility, Google AI Overviews optimisation, WhatsApp automation India, document intelligence India, voice AI India, AI for CA firms, intelligence ecosystem India",
  authors: [{ name: "Kynato" }],
  openGraph: {
    type: "website",
    url: "https://kynato.com/",
    siteName: "Kynato",
    locale: "en_IN",
    title: "Kynato - AI Services Consultancy | AI Visibility, GEO, SEO, RAG, Agentic Automation, Knowledge AI & Analytics",
    description: "Kynato is an AI Services Consultancy based in India that builds and operates intelligence ecosystems for B2B businesses. Kynato as an AI Agency offers SEO & AI Visibility, GEO, RAG Systems, Agentic Automation, Knowledge AI, Lead Generation, and Business Performance Analytics services.",
    images: [
      {
        url: "https://cdn.kynato.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kynato - The Intelligence Ecosystem. AI Services Consultancy India.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kynato",
    creator: "@kynato",
    title: "Kynato - AI Services Consultancy | AI Visibility, GEO, SEO, RAG, Agentic Automation, Knowledge AI & Analytics",
    description: "Kynato is an AI Services Consultancy based in India that builds and operates intelligence ecosystems for B2B businesses. Kynato as an AI Agency offers SEO & AI Visibility, GEO, RAG Systems, Agentic Automation, Knowledge AI, Lead Generation, and Business Performance Analytics services.",
    images: ["https://cdn.kynato.com/og-image.jpg"],
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
    index: false,
    follow: false,
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
        <meta name="geo.position" content="23.3441;85.3096" />
        <meta name="ICBM" content="23.3441, 85.3096" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />

        {/* Schema Block 1: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kynato",
              "url": "https://kynato.com",
              "logo": "https://kynato.com/assets/kynato-logo.svg",
              "foundingDate": "2025",
              "description": "Kynato is an AI services consultancy based in India that functions as an intelligence ecosystem, building and operating growth, intelligence, and automation systems for B2B businesses.",
              "email": "hello@kynato.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ranchi",
                "addressRegion": "Jharkhand",
                "postalCode": "835222",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/kynato",
                "https://twitter.com/kynato"
              ],
              "knowsAbout": [
                "Generative Engine Optimisation",
                "AI Visibility",
                "RAG Systems",
                "Agentic Automation",
                "Knowledge AI",
                "Search Engine Optimisation",
                "Answer Engine Optimisation",
                "Lead Generation AI",
                "AI Readiness Audit",
                "Document Intelligence",
                "Voice AI",
                "Business Performance Analytics",
                "WhatsApp Automation",
                "AI for CA Firms",
                "India-Native AI Systems"
              ]
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
              "name": "Kynato",
              "url": "https://kynato.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kynato.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema Block 3: ProfessionalService + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness"],
              "name": "Kynato",
              "image": "https://kynato.com/assets/kynato-logo.svg",
              "url": "https://kynato.com",
              "email": "hello@kynato.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ratu",
                "addressLocality": "Ranchi",
                "addressRegion": "Jharkhand",
                "postalCode": "835222",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.3441",
                "longitude": "85.3096"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₹₹₹"
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
                  "item": "https://kynato.com/"
                }
              ]
            })
          }}
        />

        {/* Schema Block 5: ItemList — Service signals */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Kynato Capabilities",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "SEO & AI Visibility", "url": "https://kynato.com/services/search-ai-visibility/seo/" },
                { "@type": "ListItem", "position": 2, "name": "Generative Engine Optimisation (GEO)", "url": "https://kynato.com/services/search-ai-visibility/ai-visibility/geo-optimisation/" },
                { "@type": "ListItem", "position": 3, "name": "Answer Engine Optimisation (AEO)", "url": "https://kynato.com/services/search-ai-visibility/ai-visibility/aeo/" },
                { "@type": "ListItem", "position": 4, "name": "AI Readiness Audit", "url": "https://kynato.com/services/search-ai-visibility/ai-visibility/ai-readiness-audit/" },
                { "@type": "ListItem", "position": 5, "name": "Inbound Lead Architecture", "url": "https://kynato.com/services/demand-generation/inbound-lead-architecture/" },
                { "@type": "ListItem", "position": 6, "name": "Knowledge AI & RAG Systems", "url": "https://kynato.com/services/knowledge-applied-ai/rag-systems/" },
                { "@type": "ListItem", "position": 7, "name": "Agentic Automation", "url": "https://kynato.com/services/agentic-automation/agentic-workflows/" },
                { "@type": "ListItem", "position": 8, "name": "Voice AI", "url": "https://kynato.com/services/agentic-automation/conversational-automation/voice-ai/" },
                { "@type": "ListItem", "position": 9, "name": "Document Intelligence", "url": "https://kynato.com/services/knowledge-applied-ai/document-intelligence/" },
                { "@type": "ListItem", "position": 10, "name": "Business Performance Analytics", "url": "https://kynato.com/services/intelligence-analytics/business-analytics/" }
              ]
            })
          }}
        />

        {/* Schema Block 6: FAQPage — 15 PAA-sourced questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Kynato?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato is an AI services consultancy based in India that functions as an intelligence ecosystem, building and operating growth, intelligence, and automation systems for B2B businesses. It combines five capabilities — SEO and AI Visibility, Demand Generation, Knowledge AI, Agentic Automation, and Business Analytics — into one connected, operated system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Generative Engine Optimisation (GEO)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generative Engine Optimisation (GEO) is the practice of making a business visible in AI-generated answers — ChatGPT, Perplexity, Google AI Overviews, and Gemini. It involves citation authority building, prompt-gap content mapping, and E-E-A-T amplification so AI engines cite your business when buyers ask relevant questions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between GEO and SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO optimises for rankings in traditional search results (Google, Bing). GEO optimises for citations in AI-generated answers (ChatGPT, Perplexity, Gemini, Google AI Overviews). SEO drives clicks; GEO drives AI citations and brand recommendations. Both are necessary — Kynato deploys them as a connected system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a RAG system and how does it work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A RAG (Retrieval-Augmented Generation) system builds an AI layer over a business's own knowledge — documents, compliance circulars, SOPs, client records. When queried in plain language, it retrieves the relevant information and generates an accurate, cited answer in real time, without the AI inventing facts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is agentic automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentic automation uses multi-step autonomous AI agents to execute complex business processes end to end — making decisions, calling APIs, handling exceptions, and escalating to humans only when necessary. Unlike basic chatbots or workflow tools, agentic systems complete entire workflows: document collection, CRM updates, compliance reminders, and invoice processing without manual input."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does SEO take to show results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical SEO shows crawlability improvements within 4–6 weeks. Keyword ranking gains compound from month 3, with significant organic traffic traction by month 5–6. GEO (AI citation visibility) shows first results within 4–8 weeks. All Kynato systems are instrumented from day one — there are no black-box waiting periods."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is an AI readiness audit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An AI readiness audit checks whether a website can be read, crawled, and cited by AI engines. It covers llms.txt deployment, JavaScript rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot), semantic HTML clarity, Schema Actions for agentic callability, and agentic traffic monitoring. It is the prerequisite for effective GEO and AEO."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between AEO and GEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AEO (Answer Engine Optimisation) targets zero-click positions in search engines — Featured Snippets, People Also Ask, and Google AI Overviews within search results pages. GEO (Generative Engine Optimisation) targets citations inside AI chat interfaces like ChatGPT and Perplexity where no search results page exists. Both are deployed together by Kynato."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does WhatsApp automation work for Indian businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WhatsApp automation for Indian businesses uses the WhatsApp Business API to build automated flows for lead capture, document collection, compliance reminders, appointment booking, and payment collection via Razorpay or PayU. Kynato builds these flows with CRM integration, DLT-compliant SMS fallback, and Hindi or Hinglish language support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can AI help CA firms in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI helps CA firms in India by automating GST document collection via WhatsApp, monitoring CBDT, GSTN, and ICAI circulars in real time, building RAG systems for instant client query resolution, sending pre-deadline compliance reminders, and auto-updating CRMs from calls and emails — reducing partner time on repetitive tasks by up to 70%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is knowledge AI and how is it different from ChatGPT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Knowledge AI builds a private AI layer over a business's own data — documents, policies, client records, compliance circulars — so queries return accurate, cited answers from that specific knowledge base. Unlike ChatGPT, which has no access to your data and can hallucinate, Knowledge AI is grounded in your verified documents and attributes every answer to its source."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does AI automation cost for small businesses in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automation cost for small businesses in India varies by system complexity. Kynato works on retainer-based engagements scoped after a diagnostic conversation — there is no standard package. Single-workflow automations are scoped differently from full five-capability deployments. The entry point is always a no-commitment strategy conversation that maps the highest-return system for your specific situation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI replace manual operations in Indian businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI can automate the repeatable, rule-based, and data-handling portions of manual operations — document collection, CRM updates, compliance reminders, invoice follow-up, lead qualification, and reporting. It does not replace judgment-dependent decisions. Kynato's agentic systems automate standard cases and escalate to humans only when the situation genuinely requires it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools does Kynato integrate with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato integrates with HubSpot, Zoho CRM, Salesforce, Tally, Zoho Books, QuickBooks, WhatsApp Business API, Google Drive, SharePoint, LinkedIn, Instagram, Razorpay, PayU, Google Search Console, and Bing Webmaster Tools. AI infrastructure uses Pinecone, Qdrant, Weaviate for vector search, and OpenAI, Anthropic, and Google Gemini as LLM providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Kynato different from other AI agencies in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kynato builds and operates AI systems — it does not deliver reports, demos, or software to manage yourself. Every system is instrumented from day one and measured by revenue gained or hours saved. Kynato is India-native — built for WhatsApp, GST compliance, Tally integrations, and Hindi or Hinglish AI — not a Western platform adapted for India."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-jakarta bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <SidebarProvider>
            {children}
            <ContactSidebar />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
