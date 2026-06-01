import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What exactly is Kynato - is it an AI agency, a consultancy, or a SaaS company?",
    a: "Kynato is an AI services consultancy that functions as an intelligence ecosystem. It is not an agency in the traditional sense - agencies deliver campaigns or creative, then move on. It is not a SaaS company - we do not sell software licences. Kynato builds and directly operates AI-powered systems for B2B businesses, combining five capability areas into one connected system. The distinction that matters: we own the outcome, not just the delivery. We run what we build.",
  },
  {
    q: "What should I actually contact Kynato about - am I the right type of business?",
    a: "Kynato works with founders, growth teams, operations leaders, and C-suite at businesses that want AI systems built and operated for them - not tools to configure themselves. The right businesses share one of these problems: leads are going cold before anyone responds; your team is spending hours on work that software should handle; you are invisible in AI-generated search answers; knowledge is scattered across email, WhatsApp, and PDFs. If you recognise any of those, a strategy conversation is the right next step.",
  },
  {
    q: "What is Generative Engine Optimisation (GEO) and why does my business need it now?",
    a: "GEO is the discipline of making your business visible in AI-generated answers - ChatGPT, Perplexity, Google AI Overviews, and Gemini - rather than only in traditional Google search results. AI Overviews now appear in over 52% of Google queries, and buyers increasingly get their shortlist from AI-generated recommendations before they visit a single website. If your business is not cited in those AI answers, you are invisible to a rapidly expanding share of your market.",
  },
  {
    q: "What is an AI Readiness Audit and do I need one before starting GEO or AEO?",
    a: "An AI Readiness Audit checks whether your website and digital presence can actually be read, crawled, and cited by AI engines. Most businesses that want to rank in ChatGPT or Perplexity have technical barriers that prevent AI crawlers from accessing their content properly. The audit covers llms.txt creation, JavaScript rendering remediation, semantic HTML, Schema Actions for agentic callability, and Agentic Traffic Monitoring. Yes - if you want GEO and AEO to work, the readiness layer needs to exist first.",
  },
  {
    q: "What is a RAG system and when does my business actually need one?",
    a: "RAG stands for Retrieval-Augmented Generation. It builds an AI layer over your own knowledge - your documents, compliance circulars, client records, SOPs - so that your team or customers can query it in plain language and get accurate, cited answers in real time instead of digging through PDFs and email threads. A business needs RAG when institutional knowledge is slow to access, decisions are made on outdated information, or new staff take too long to onboard.",
  },
  {
    q: "What is Agentic Automation and how is it different from a regular chatbot or workflow tool?",
    a: "A chatbot responds to a single message. A basic workflow tool moves data between apps on a predefined trigger. Agentic Automation deploys multi-step autonomous AI agents that execute complex processes end to end - making conditional decisions, calling multiple external APIs, handling exceptions, and escalating to a human only when genuinely required. Practical example: when a client sends a document over WhatsApp, a Kynato-built agentic system validates it, renames it, routes it to the correct folder, updates the CRM, triggers a compliance checklist, and sends confirmation - all without a human involved.",
  },
  {
    q: "How long does it take to see results from SEO, GEO, and AEO?",
    a: "Technical SEO remediation produces measurable crawlability data within 4-6 weeks. Keyword ranking gains compound from month 3, with significant traction by month 5-6. GEO shows early AI citation signals within 4-8 weeks for domains with existing authority. AEO Featured Snippet and PAA gains can appear within 2-6 weeks for well-structured content. Every system is instrumented from day one - there are no black-box waiting periods.",
  },
  {
    q: "What does Kynato's 'build and operate' model mean in practice - what are you actually doing after activation?",
    a: "After System Activation, Kynato continues to: monitor all system performance against agreed KPIs; optimise monthly based on performance data; produce monthly plain-language reporting covering revenue gained and hours saved; identify new automation or optimisation opportunities; and flag and fix any system degradation immediately. System Activation is when the value cycle begins, not when it ends.",
  },
  {
    q: "Does Kynato work with businesses that have no existing AI infrastructure?",
    a: "Yes - this is the most common starting point. No AI stack, no prior automation, no existing SEO systems, no in-house technical team. The engagement begins with a diagnostic mapping your current operations, tools, data sources, and goals. The first system deployed is always the one that delivers the highest return for your specific situation. Kynato provides full technical ownership.",
  },
  {
    q: "How does Kynato handle data privacy - especially for CA firms or clinics?",
    a: "All client data is handled under strict confidentiality agreements. RAG systems are built on client-controlled private instances or Kynato-managed isolated environments - never shared multi-tenant infrastructure. No client data is ever used to train general models. India DPDP Act 2023 alignment is designed into every data handling architecture. For CA firms: client financial and compliance data never leaves a controlled environment.",
  },
];

export function FaqSection() {
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span>FAQ</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Questions Founders, Growth Teams, and Operators Ask
            Before Working with Kynato
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-2">
            {leftFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-white/[0.13] transition-colors duration-200 open:border-gray-200 dark:open:border-white/[0.13]"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-jakarta text-[11px] font-black text-[#027C88] tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-syne font-semibold text-gray-700 dark:text-white/70 text-sm leading-snug group-open:text-gray-900 dark:group-open:text-white transition-colors duration-200">
                      {faq.q}
                    </span>
                  </div>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 dark:border-white/[0.1] flex items-center justify-center text-gray-600 dark:text-white/55 group-open:border-[#027C88]/30 group-open:text-[#027C88] transition-all duration-200 ml-2">
                    <Plus className="h-3 w-3 group-open:rotate-45 transition-transform duration-200" />
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[3.25rem]">
                      <div className="h-px bg-gray-100 dark:bg-white/[0.06] mb-3" />
                      <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="space-y-2">
            {rightFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-white/[0.13] transition-colors duration-200 open:border-gray-200 dark:open:border-white/[0.13]"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-jakarta text-[11px] font-black text-[#027C88] tabular-nums shrink-0">
                      {String(half + i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-syne font-semibold text-gray-700 dark:text-white/70 text-sm leading-snug group-open:text-gray-900 dark:group-open:text-white transition-colors duration-200">
                      {faq.q}
                    </span>
                  </div>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 dark:border-white/[0.1] flex items-center justify-center text-gray-600 dark:text-white/55 group-open:border-[#027C88]/30 group-open:text-[#027C88] transition-all duration-200 ml-2">
                    <Plus className="h-3 w-3 group-open:rotate-45 transition-transform duration-200" />
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[3.25rem]">
                      <div className="h-px bg-gray-100 dark:bg-white/[0.06] mb-3" />
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
      </div>
    </section>
  );
}
