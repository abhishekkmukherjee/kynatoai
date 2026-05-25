import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What exactly is Kynato — is it an AI agency, a consultancy, or a SaaS company?",
    a: "Kynato is an AI services consultancy that functions as an intelligence ecosystem. It is not an agency in the traditional sense — agencies deliver campaigns or creative, then move on. It is not a SaaS company — we do not sell software licences. It is not a consulting firm that writes reports. Kynato builds and directly operates AI-powered systems for B2B businesses — combining five capability areas (Search & AI Visibility, Demand Generation, Knowledge AI, Agentic Automation, and Intelligence & Analytics) into one connected system. The distinction that matters: we own the outcome, not just the delivery. We run what we build.",
  },
  {
    q: "What should I actually contact Kynato about — am I the right type of business?",
    a: "Kynato works with founders, growth teams, operations leaders, and C-suite at businesses that want AI systems built and operated for them — not tools to configure themselves. The right businesses share one of these problems: leads are going cold before anyone responds; your team is spending hours on work that software should handle; you are invisible in AI-generated search answers; knowledge is scattered across email, WhatsApp, and PDFs and no one can find anything quickly. If you recognise any of those, a strategy conversation is the right next step. It is diagnostic, not a pitch. You leave with a clear picture of which system would deliver the highest return for your specific business.",
  },
  {
    q: "What is Generative Engine Optimisation (GEO) and why does my business need it now?",
    a: "GEO is the discipline of making your business visible in AI-generated answers — ChatGPT, Perplexity, Google AI Overviews, and Gemini — rather than only in traditional Google search results. The shift is structural: AI Overviews now appear in over 13% of Google queries, and buyers increasingly get their shortlist from AI-generated recommendations before they visit a single website. If your business is not cited in those AI answers, you are invisible to a rapidly expanding share of your market. GEO is built through citation authority building on high-citation source domains, prompt-gap content that answers the specific questions buyers ask AI, Brand Co-Occurrence mapping, and E-E-A-T amplification designed for how AI engines assess credibility. It is not optional for businesses that depend on organic discovery.",
  },
  {
    q: "What is an AI Readiness Audit and do I need one before starting GEO or AEO?",
    a: "An AI Readiness Audit checks whether your website and digital presence can actually be read, crawled, and cited by AI engines. Most businesses that want to rank in ChatGPT or Perplexity have technical barriers that prevent AI crawlers from accessing their content properly. The audit covers: llms.txt creation and deployment (permissions for GPTBot, ClaudeBot, PerplexityBot), JavaScript rendering remediation for AI crawlers, semantic HTML and entity clarity, Schema Actions for agentic callability (so AI agents can take actions on your site — book appointments, make purchases), and Agentic Traffic Monitoring to understand which AI agents are already visiting and what they find. Yes — if you want GEO and AEO to work, the readiness layer needs to exist first.",
  },
  {
    q: "What is the difference between GEO and AEO?",
    a: "GEO (Generative Engine Optimisation) focuses specifically on getting your business cited inside AI-generated answers on platforms like ChatGPT, Perplexity, and Gemini. The reader is in an AI chat interface — they never visit a search results page at all. AEO (Answer Engine Optimisation) focuses on zero-click positions within search engines — Featured Snippets, People Also Ask boxes, and Google AI Overviews, where a buyer reads the answer directly in the search results page without clicking through to a website. Both matter, and Kynato deploys them together because the underlying content strategy — answer-first writing, FAQ schema, E-E-A-T signals — overlaps significantly. The tracking and reporting for each is separate.",
  },
  {
    q: "What is a RAG system and when does my business actually need one?",
    a: "RAG stands for Retrieval-Augmented Generation. It builds an AI layer over your own knowledge — your documents, compliance circulars, client records, SOPs, product documentation — so that your team or customers can query it in plain language and get accurate, cited answers in real time instead of digging through PDFs and email threads. A business needs RAG when: institutional knowledge is slow to access (partners spending hours on repetitive queries); decisions are being made on outdated or incomplete information; new staff take too long to onboard because knowledge lives in people's heads; or customer-facing teams keep answering the same questions manually. Kynato builds domain-tuned RAG systems for CA firms (GST/ICAI circulars), clinics (patient protocol databases), legal teams (judgment corpus search), and B2B operations (client records + SOP access).",
  },
  {
    q: "What is Agentic Automation and how is it different from a regular chatbot or workflow automation tool?",
    a: "A chatbot responds to a single message. A basic workflow tool (like Zapier) moves data between apps on a predefined trigger. Agentic Automation deploys multi-step autonomous AI agents that execute complex processes end to end — making conditional decisions, calling multiple external APIs in sequence, handling exceptions, filling in gaps, and escalating to a human only when the situation genuinely requires it. Practical example: when a client sends a document over WhatsApp, a Kynato-built agentic system validates the document format, renames it to a standard convention, routes it to the correct Google Drive folder, updates the CRM deal stage, triggers a compliance checklist, and sends the client a confirmation — all without a human involved. A chatbot would answer 'document received.' Agentic Automation does all of the above.",
  },
  {
    q: "Does Kynato handle content creation and publishing — or just technical systems?",
    a: "Yes — Content Production and Distribution Automation is a full capability in Kynato's Agentic Automation practice. This includes AI-assisted blog and long-form content production (brief input → AI first draft → editorial review → CMS publish), Content Calendar Automation with AI topic and brief generation, Multi-Platform Publishing Automation (one CMS publish triggers distribution to LinkedIn, WhatsApp newsletter, and email), Content Repurposing Workflow (blog → LinkedIn post → WhatsApp format → email), and Content Performance Monitoring that identifies what to prune. This is built for founders and growth teams who need to publish consistently without a full content team.",
  },
  {
    q: "How long does it take to see results from SEO, GEO, and AEO?",
    a: "Technical SEO remediation produces measurable crawlability and indexation data within 4–6 weeks. Keyword ranking gains compound from month 3, with significant traction typically visible by month 5–6. GEO shows early AI citation signals within 4–8 weeks for domains with existing authority, faster for businesses with active publishing and offsite presence. AEO Featured Snippet and PAA gains can appear within 2–6 weeks for well-structured content. AI Overview citations are variable — dependent on content quality, source domain authority, and prompt relevance — but the first citations typically appear within 6–10 weeks of a structured GEO deployment. Every system is instrumented from day one. There are no black-box waiting periods.",
  },
  {
    q: "What does Kynato's 'build and operate' model mean in practice — what are you actually doing after go-live?",
    a: "After go-live, Kynato continues to: monitor all system performance against agreed KPIs (search rankings, AI citation frequency, lead pipeline health, automation accuracy, hours saved); optimise monthly based on performance data — refining prompts, adjusting automation logic, updating content clusters, recalibrating lead scoring models; produce monthly plain-language reporting covering revenue gained and hours saved across every deployed system; identify new automation or optimisation opportunities as the business changes; and flag and fix any system degradation immediately — before the client notices. Go-live is when the value cycle begins, not when it ends. Systems that are not maintained degrade. Kynato's retainer model ensures that never happens.",
  },
  {
    q: "Does Kynato work with businesses that have no existing AI infrastructure or technical team?",
    a: "Yes — this is the most common starting point. No AI stack, no prior automation, no existing SEO systems, no in-house technical team. The engagement begins with a diagnostic: mapping your current operations, tools, data sources, and goals against what a system would need to ingest and integrate. The first system deployed is always the one that delivers the highest return for your specific situation — not a standard package applied uniformly. Kynato provides full technical ownership. Your team does not need to understand the architecture to use it.",
  },
  {
    q: "What tools and platforms does Kynato integrate with?",
    a: "Kynato is tool-agnostic and integrates with what you already use. Common integrations: CRM (HubSpot, Zoho CRM, Salesforce), accounting (Tally, Zoho Books, QuickBooks), communication (WhatsApp Business API, Gmail, Outlook), document storage (Google Drive, SharePoint, Dropbox), social (LinkedIn, Instagram), payment gateways (Razorpay, PayU), search (Google Search Console, Bing Webmaster Tools). AI infrastructure: Pinecone, Qdrant, and Weaviate for vector search; OpenAI, Anthropic, and Google Gemini as LLM providers depending on use case. SMS via DLT-registered channels for India compliance. If you use a tool not listed here, it almost certainly has an API we can connect.",
  },
  {
    q: "How is Kynato different from buying a SaaS AI tool or using ChatGPT directly for my business?",
    a: "A SaaS AI tool gives you a generic capability in a sandbox environment — you configure it, you maintain it, you manage it, and if it stops working, it is your problem. ChatGPT has no memory of your business, no integration with your data, no understanding of your clients or compliance requirements, and no accountability for results. Kynato builds custom systems designed around your specific business — trained on your data, integrated into your existing tools, operated on an ongoing basis, and accountable for measurable outcomes. The practical difference: a SaaS tool is something you adopt. A Kynato system is something that runs for you.",
  },
  {
    q: "What does Kynato's reporting look like — how do I know what is working?",
    a: "Every system Kynato builds is instrumented from day one. Monthly reporting covers: Search performance (rankings by cluster, organic traffic, Core Web Vitals, backlink health), AI Visibility (citation frequency across ChatGPT, Perplexity, Gemini, Claude, AI Overview presence, AI share of voice versus competitors), Lead pipeline health (lead volume, qualification rate, conversion to booked call, cost per lead), Automation efficiency (hours saved, bot accuracy, escalation rate, error frequency), Content performance (engagement by platform, top and bottom performing pieces), and Campaign ROI (cost per acquisition, revenue per campaign across all active channels). Everything is delivered in plain language — no dashboards that require a manual, no reports that raise more questions than they answer.",
  },
  {
    q: "How does Kynato handle data privacy — especially for businesses dealing with sensitive client information like CA firms or clinics?",
    a: "All client data is handled under strict confidentiality agreements. RAG systems are built on client-controlled private instances or Kynato-managed isolated environments — never shared multi-tenant infrastructure. No client data is ever used to train general models. India DPDP Act 2023 alignment is designed into every data handling architecture. GDPR-compatible handling is available for international clients. For CA firms: client financial and compliance data never leaves a controlled environment. For clinics: patient data handling follows applicable healthcare privacy standards. Source attribution is built into every RAG deployment — every answer is traceable to the source document, which is essential for regulated industries.",
  },
];

export function FaqSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>FAQ</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              Common Questions
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Questions Founders, Growth Teams, and Operators Ask
              Before Working with Kynato
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-2 max-w-4xl">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-white/[0.13] transition-colors duration-200 open:border-gray-200 dark:open:border-white/[0.13]"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-jakarta text-[11px] font-black text-[#027C88] tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-syne font-semibold text-gray-700 dark:text-white/70 text-sm md:text-base leading-snug group-open:text-gray-900 dark:group-open:text-white transition-colors duration-200">
                    {faq.q}
                  </span>
                </div>
                <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 dark:border-white/[0.1] flex items-center justify-center text-gray-600 dark:text-white/55 group-open:border-[#027C88]/30 group-open:text-[#027C88] transition-all duration-200 ml-2">
                  <Plus className="h-3 w-3 group-open:rotate-45 transition-transform duration-200" />
                </span>
              </summary>

              <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300 ease-out">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pl-[3.75rem]">
                    <div className="h-px bg-gray-100 dark:bg-white/[0.06] mb-4" />
                    <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
