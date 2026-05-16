export interface ServiceNode {
  title: string
  slug: string
  href: string
  keywords: string
  description?: string
  children?: ServiceNode[]
}

export interface Capability {
  id: string
  title: string
  slug: string
  href: string
  services: ServiceNode[]
}

export const capabilities: Capability[] = [
  {
    id: "cap-1",
    title: "Search & AI Visibility",
    slug: "search-ai-visibility",
    href: "/services/search-ai-visibility/",
    services: [
      {
        title: "Search Engine Optimisation and Visibility",
        slug: "seo",
        href: "/services/search-ai-visibility/seo/",
        keywords: "SEO services India, organic search agency India, search engine optimisation India",
        description: "Kynato's SEO practice covers Technical SEO, Content Strategy, Local SEO, Off-Page SEO, and Knowledge Graph entity building — designed to drive compounding organic growth.",
        children: [
          {
            title: "Technical SEO Services",
            slug: "technical-seo",
            href: "/services/search-ai-visibility/seo/technical-seo",
            keywords: "technical SEO agency India, technical SEO audit India, site health audit India",
          },
          {
            title: "Content Strategy and Topical Authority",
            slug: "content-strategy",
            href: "/services/search-ai-visibility/seo/content-strategy",
            keywords: "content strategy India, topical authority SEO India, keyword strategy India",
          },
          {
            title: "SEO Content Production",
            slug: "content-production",
            href: "/services/search-ai-visibility/seo/content-production",
            keywords: "SEO content writing India, E-E-A-T content India, B2B content production India",
          },
          {
            title: "Local SEO and Regional Search Visibility",
            slug: "local-seo",
            href: "/services/search-ai-visibility/seo/local-seo",
            keywords: "local SEO India, local SEO agency India, Google Business Profile optimisation India",
          },
          {
            title: "Off-Page SEO and Link Authority Building",
            slug: "off-page-seo",
            href: "/services/search-ai-visibility/seo/off-page-seo",
            keywords: "link building India, off-page SEO India, backlink acquisition India",
          },
          {
            title: "Knowledge Graph and Brand Entity Building",
            slug: "knowledge-graph",
            href: "/services/search-ai-visibility/seo/knowledge-graph",
            keywords: "Google Knowledge Graph India, brand entity SEO India, Knowledge Panel India",
          },
        ],
      },
      {
        title: "AI Search Visibility and Generative Engine Optimisation",
        slug: "ai-visibility",
        href: "/services/search-ai-visibility/ai-visibility/",
        keywords: "AI visibility India, GEO optimisation India, generative engine optimisation India, rank in ChatGPT India, LLM visibility India",
        description: "Kynato's AI Visibility practice ensures your business is cited across ChatGPT, Perplexity, Gemini, and Google AI Overviews — tracking every signal that drives AI-generated brand mentions.",
        children: [
          {
            title: "AI and Agent Readiness Audit",
            slug: "ai-readiness-audit",
            href: "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/",
            keywords: "AI readiness audit India, llms.txt India, AI crawler access India",
          },
          {
            title: "Generative Engine Optimisation (GEO)",
            slug: "geo-optimisation",
            href: "/services/search-ai-visibility/ai-visibility/geo-optimisation/",
            keywords: "generative engine optimisation India, GEO services India, get cited in ChatGPT India",
          },
          {
            title: "Answer Engine Optimisation (AEO) and Featured Snippet Capture",
            slug: "aeo",
            href: "/services/search-ai-visibility/ai-visibility/aeo/",
            keywords: "answer engine optimisation India, featured snippet optimisation India, AI Overview optimisation India",
          },
          {
            title: "AI Search Brand Authority and Offsite Presence",
            slug: "brand-authority",
            href: "/services/search-ai-visibility/ai-visibility/brand-authority/",
            keywords: "AI brand authority India, offsite AI signals India, LLM brand presence India",
          },
        ],
      },
    ],
  },
  {
    id: "cap-2",
    title: "Demand Generation",
    slug: "demand-generation",
    href: "/services/demand-generation/",
    services: [
      {
        title: "Inbound Lead Architecture",
        slug: "inbound-lead-architecture",
        href: "/services/demand-generation/inbound-lead-architecture/",
        keywords: "inbound lead generation India, website lead capture India, conversion rate optimisation India",
        description: "Kynato designs and deploys inbound lead systems — from landing page CRO and chatbot deployment to WhatsApp lead integration and interactive lead magnets.",
        children: [
          {
            title: "Landing Page and Conversion Rate Optimisation",
            slug: "landing-page-cro",
            href: "/services/demand-generation/inbound-lead-architecture/landing-page-cro",
            keywords: "landing page optimisation India, CRO services India",
          },
          {
            title: "Website Chatbot and Conversational Lead Capture",
            slug: "website-chatbot",
            href: "/services/demand-generation/inbound-lead-architecture/website-chatbot",
            keywords: "website chatbot India, lead capture chatbot India",
          },
          {
            title: "Interactive Lead Magnet Development",
            slug: "lead-magnets",
            href: "/services/demand-generation/inbound-lead-architecture/lead-magnets",
            keywords: "lead magnet India, ROI calculator India, AI readiness audit tool India",
          },
          {
            title: "WhatsApp Business API Lead Integration",
            slug: "whatsapp-lead-integration",
            href: "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration",
            keywords: "WhatsApp lead capture India, WhatsApp Business API leads India",
          },
        ],
      },
      {
        title: "Outbound and Paid Acquisition",
        slug: "outbound-paid-acquisition",
        href: "/services/demand-generation/outbound-paid-acquisition/",
        keywords: "outbound lead generation India, LinkedIn outreach India, cold email agency India, Google Ads India",
        description: "LinkedIn outreach automation, cold email sequencing, Google Ads and Meta Ads management — all integrated into a single measurable lead pipeline.",
        children: [
          {
            title: "LinkedIn Outreach Automation",
            slug: "linkedin-outreach",
            href: "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach",
            keywords: "LinkedIn outreach automation India, LinkedIn B2B India",
          },
          {
            title: "Cold Email Sequencing and Deliverability",
            slug: "cold-email",
            href: "/services/demand-generation/outbound-paid-acquisition/cold-email",
            keywords: "cold email agency India, cold email sequencing India, email deliverability India",
          },
          {
            title: "Google Ads and Meta Ads Campaign Management",
            slug: "paid-ads",
            href: "/services/demand-generation/outbound-paid-acquisition/paid-ads",
            keywords: "Google Ads India, Meta Ads India, PPC agency India",
          },
        ],
      },
      {
        title: "AI Lead Scoring, Nurturing, and Qualification",
        slug: "ai-lead-nurturing",
        href: "/services/demand-generation/ai-lead-nurturing/",
        keywords: "AI lead nurturing India, AI lead scoring India, automated lead nurturing India",
        description: "Signal-weighted lead scoring, AI qualification bots, and automated nurturing sequences — so every lead is followed up, scored, and routed without manual effort.",
        children: [
          {
            title: "AI Lead Scoring and Automated Routing",
            slug: "lead-scoring",
            href: "/services/demand-generation/ai-lead-nurturing/lead-scoring",
            keywords: "AI lead scoring India, lead scoring model India",
          },
          {
            title: "Qualification Bot Deployment",
            slug: "qualification-bot",
            href: "/services/demand-generation/ai-lead-nurturing/qualification-bot",
            keywords: "lead qualification bot India, WhatsApp qualification bot India",
          },
          {
            title: "AI-Powered Lead Nurturing Sequences",
            slug: "nurturing-sequences",
            href: "/services/demand-generation/ai-lead-nurturing/nurturing-sequences",
            keywords: "AI nurturing sequence India, automated follow-up India",
          },
        ],
      },
    ],
  },
  {
    id: "cap-3",
    title: "Knowledge & Applied AI",
    slug: "knowledge-applied-ai",
    href: "/services/knowledge-applied-ai/",
    services: [
      {
        title: "Custom RAG Systems and AI Knowledge Base",
        slug: "rag-systems",
        href: "/services/knowledge-applied-ai/rag-systems/",
        keywords: "RAG system India, custom RAG India, AI knowledge base India, document intelligence AI India",
        description: "Kynato builds Retrieval-Augmented Generation (RAG) systems that give businesses a searchable AI layer over their own documents, compliance data, and institutional knowledge.",
        children: [
          {
            title: "RAG System Architecture and Deployment",
            slug: "rag-architecture",
            href: "/services/knowledge-applied-ai/rag-systems/rag-architecture",
            keywords: "RAG system setup India, knowledge base AI India, vector database India",
          },
          {
            title: "Multi-Tenant RAG and Enterprise Deployment",
            slug: "enterprise-rag",
            href: "/services/knowledge-applied-ai/rag-systems/enterprise-rag",
            keywords: "enterprise RAG India, multi-tenant knowledge base India",
          },
          {
            title: "RAG Integration and API Orchestration",
            slug: "rag-integration",
            href: "/services/knowledge-applied-ai/rag-systems/rag-integration",
            keywords: "RAG API integration India, knowledge base API India",
          },
        ],
      },
      {
        title: "AI Assistant Deployment",
        slug: "ai-assistant",
        href: "/services/knowledge-applied-ai/ai-assistant/",
        keywords: "AI assistant India, custom AI chatbot India, AI assistant deployment India",
        description: "Custom AI assistants integrated into your CRM, helpdesk, and internal tools — with full memory, guardrails, and escalation logic built in.",
        children: [
          {
            title: "Internal Knowledge Assistant",
            slug: "internal-assistant",
            href: "/services/knowledge-applied-ai/ai-assistant/internal-assistant",
            keywords: "internal AI assistant India, company knowledge bot India",
          },
          {
            title: "Customer-Facing AI Assistant",
            slug: "customer-assistant",
            href: "/services/knowledge-applied-ai/ai-assistant/customer-assistant",
            keywords: "customer AI assistant India, AI support bot India",
          },
        ],
      },
      {
        title: "Document Intelligence and Extraction Pipelines",
        slug: "document-intelligence",
        href: "/services/knowledge-applied-ai/document-intelligence/",
        keywords: "document intelligence India, AI document extraction India, PDF data extraction India",
        description: "Automated document classification, extraction, and routing — replacing manual data entry with AI pipelines that process PDFs, images, and structured documents.",
        children: [
          {
            title: "Document Classification and Routing",
            slug: "document-classification",
            href: "/services/knowledge-applied-ai/document-intelligence/document-classification",
            keywords: "document classification AI India, automated document routing India",
          },
          {
            title: "Structured Data Extraction",
            slug: "data-extraction",
            href: "/services/knowledge-applied-ai/document-intelligence/data-extraction",
            keywords: "AI data extraction India, invoice extraction India, form OCR India",
          },
        ],
      },
    ],
  },
  {
    id: "cap-4",
    title: "Agentic Automation",
    slug: "agentic-automation",
    href: "/services/agentic-automation/",
    services: [
      {
        title: "Agentic Workflow Systems",
        slug: "agentic-workflows",
        href: "/services/agentic-automation/agentic-workflows/",
        keywords: "agentic AI India, AI agents India, multi-step automation India, agentic workflow India",
        description: "Multi-step autonomous AI agents that execute complex operational workflows end to end — document collection, compliance reminders, CRM updates, and escalation logic.",
        children: [
          {
            title: "Multi-Agent Pipeline Design",
            slug: "multi-agent",
            href: "/services/agentic-automation/agentic-workflows/multi-agent",
            keywords: "multi-agent AI India, agent pipeline India, autonomous AI workflow India",
          },
          {
            title: "Document Collection and Verification Agent",
            slug: "document-collection",
            href: "/services/agentic-automation/agentic-workflows/document-collection",
            keywords: "document collection automation India, AI document agent India",
          },
          {
            title: "Compliance and Deadline Reminder Agent",
            slug: "compliance-agent",
            href: "/services/agentic-automation/agentic-workflows/compliance-agent",
            keywords: "compliance automation India, deadline reminder AI India, GST reminder India",
          },
        ],
      },
      {
        title: "Core Process Automation",
        slug: "core-automation",
        href: "/services/agentic-automation/core-automation/",
        keywords: "process automation India, workflow automation India, business automation India",
        description: "End-to-end automation of repeatable business processes — CRM data updates, invoice processing, HR onboarding, and multi-system integrations.",
        children: [
          {
            title: "CRM and Ops Workflow Automation",
            slug: "crm-ops-automation",
            href: "/services/agentic-automation/core-automation/crm-ops-automation",
            keywords: "CRM automation India, HubSpot automation India, Zoho automation India",
          },
          {
            title: "Invoice and Finance Automation",
            slug: "finance-automation",
            href: "/services/agentic-automation/core-automation/finance-automation",
            keywords: "invoice automation India, finance workflow AI India, Tally automation India",
          },
          {
            title: "HR and Onboarding Automation",
            slug: "hr-automation",
            href: "/services/agentic-automation/core-automation/hr-automation",
            keywords: "HR automation India, employee onboarding automation India",
          },
        ],
      },
      {
        title: "Conversational Automation and Voice AI",
        slug: "conversational-automation",
        href: "/services/agentic-automation/conversational-automation/",
        keywords: "conversational AI India, WhatsApp automation India, voice AI India, IVR replacement India",
        description: "WhatsApp Business API automation, Voice AI for missed calls and IVR replacement, and multilingual conversational bots for sales and support.",
        children: [
          {
            title: "WhatsApp Business Automation",
            slug: "whatsapp-automation",
            href: "/services/agentic-automation/conversational-automation/whatsapp-automation",
            keywords: "WhatsApp automation India, WhatsApp Business API India, WhatsApp bot India",
          },
          {
            title: "Voice AI and IVR Replacement",
            slug: "voice-ai",
            href: "/services/agentic-automation/conversational-automation/voice-ai",
            keywords: "voice AI India, IVR replacement AI India, vernacular voice bot India",
          },
          {
            title: "Multilingual Conversational Bot",
            slug: "multilingual-bot",
            href: "/services/agentic-automation/conversational-automation/multilingual-bot",
            keywords: "multilingual chatbot India, Hindi AI bot India, regional language AI India",
          },
        ],
      },
    ],
  },
  {
    id: "cap-5",
    title: "Intelligence & Analytics",
    slug: "intelligence-analytics",
    href: "/services/intelligence-analytics/",
    services: [
      {
        title: "Search Intelligence and Unified Analytics",
        slug: "search-intelligence",
        href: "/services/intelligence-analytics/search-intelligence/",
        keywords: "search intelligence India, SEO analytics India, unified search dashboard India",
        description: "Multi-engine search analytics consolidating Google, Bing, and AI engine impressions — delivered in plain language without needing a data team.",
        children: [
          {
            title: "Multi-Engine Search Analytics Dashboard",
            slug: "search-analytics",
            href: "/services/intelligence-analytics/search-intelligence/search-analytics",
            keywords: "multi-engine SEO analytics India, Google Bing analytics India",
          },
          {
            title: "Keyword Rank Tracking and Visibility Reporting",
            slug: "rank-tracking",
            href: "/services/intelligence-analytics/search-intelligence/rank-tracking",
            keywords: "keyword rank tracker India, SEO rank reporting India",
          },
        ],
      },
      {
        title: "AI Visibility Tracking and Competitive Intelligence",
        slug: "ai-visibility-tracking",
        href: "/services/intelligence-analytics/ai-visibility-tracking/",
        keywords: "AI visibility tracking India, LLM brand tracking India, ChatGPT brand monitoring India",
        description: "Track your brand's citation frequency, sentiment, and share of voice across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
        children: [
          {
            title: "AI Brand Citation Tracking",
            slug: "citation-tracking",
            href: "/services/intelligence-analytics/ai-visibility-tracking/citation-tracking",
            keywords: "brand citation AI India, ChatGPT brand tracking India, AI mention monitoring India",
          },
          {
            title: "Competitor AI Visibility Benchmarking",
            slug: "competitor-benchmarking",
            href: "/services/intelligence-analytics/ai-visibility-tracking/competitor-benchmarking",
            keywords: "competitor AI visibility India, LLM competitor tracking India",
          },
          {
            title: "AI Visibility Index and Monthly Reporting",
            slug: "ai-visibility-index",
            href: "/services/intelligence-analytics/ai-visibility-tracking/ai-visibility-index",
            keywords: "AI visibility index India, GEO performance report India, LLM brand report India",
          },
        ],
      },
      {
        title: "Business Analytics and Predictive Intelligence",
        slug: "business-analytics",
        href: "/services/intelligence-analytics/business-analytics/",
        keywords: "business analytics India, AI business intelligence India, predictive analytics India",
        description: "Marketing ROI dashboards, CAC vs LTV modelling, pipeline analytics, and predictive forecasting — all in plain language.",
        children: [
          {
            title: "Marketing ROI and Funnel Analytics",
            slug: "marketing-roi",
            href: "/services/intelligence-analytics/business-analytics/marketing-roi",
            keywords: "marketing ROI India, funnel analytics India, CAC LTV modelling India",
          },
          {
            title: "Automation Performance Monitoring",
            slug: "automation-performance",
            href: "/services/intelligence-analytics/business-analytics/automation-performance",
            keywords: "automation ROI India, hours saved tracking India, workflow performance India",
          },
          {
            title: "Revenue Forecasting and Predictive Analytics",
            slug: "predictive-analytics",
            href: "/services/intelligence-analytics/business-analytics/predictive-analytics",
            keywords: "revenue forecasting India, AI predictive analytics India, pipeline modelling India",
          },
        ],
      },
    ],
  },
]

export function findServiceBySlug(slugParts: string[]): {
  capability?: Capability
  service?: ServiceNode
  child?: ServiceNode
} | null {
  if (!slugParts.length) return null

  const [capSlug, serviceSlug, ...rest] = slugParts

  const capability = capabilities.find((c) => c.slug === capSlug)
  if (!capability) return null
  if (!serviceSlug) return { capability }

  const service = capability.services.find((s) => s.slug === serviceSlug)
  if (!service) return { capability }
  if (!rest.length) return { capability, service }

  const childSlug = rest[0]
  const child = service.children?.find((c) => c.slug === childSlug)
  return { capability, service, child }
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
