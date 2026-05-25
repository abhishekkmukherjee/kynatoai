const cards = [
  {
    title: "Search has split — and most businesses only cover half of it.",
    body: "Buyers now get answers from ChatGPT, Perplexity, and Google AI Overviews before they click a result. Ranking in Google is necessary. Appearing in AI-generated answers is where the decision increasingly forms. Most businesses have invested in one but not the other.",
  },
  {
    title: "Leads arrive. Most go cold before anyone responds.",
    body: "60–80% of inbound leads stall within the first five minutes — not because the product is wrong, but because follow-up depends on a person being available. A system never sleeps. A team always does.",
  },
  {
    title: "Knowledge lives everywhere except where it needs to be.",
    body: "GST documents in email. Client records in WhatsApp threads. Compliance updates in PDFs. Sales history in a CRM no one properly updates. Every decision requires archaeology. That time has a cost.",
  },
  {
    title: "Every tool you've tried creates a new silo.",
    body: "CRM, SEO, automation, analytics — each delivers something. None connects to the others. The result is a stack that requires more management than it saves. That is software with extra steps, not a system.",
  },
];

export function SituationSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>The Situation</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              Where Most Businesses Are Right Now
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The Gap Between Intent and Execution
              <br />Is Where Revenue Goes.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base md:text-lg leading-relaxed">
              Most businesses that want to grow with AI face the same pattern: strong intent,
              fragmented execution. The right tools exist. The right talent is expensive.
              The right systems — the ones that connect and compound — are rarely built.
              That is the gap Kynato exists to close.
            </p>
          </div>
        </div>

        {/* 4-card 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="kyn-card p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-syne font-black text-[#027C88] text-3xl leading-none shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-syne font-bold text-gray-900 dark:text-white text-lg leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed pl-12">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
