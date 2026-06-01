const cards = [
  {
    title: "Search has split - and most businesses only cover half of it.",
    body: "Buyers now get answers from ChatGPT, Perplexity, and Google AI Overviews before they click a result. Ranking in Google is necessary. Appearing in AI-generated answers is where the decision increasingly forms. Most businesses have invested in one but not the other.",
  },
  {
    title: "Leads arrive. Most go cold before anyone responds.",
    body: "60-80% of inbound leads stall within the first five minutes - not because the product is wrong, but because follow-up depends on a person being available. A system never sleeps. A team always does.",
  },
  {
    title: "Knowledge lives everywhere except where it needs to be.",
    body: "GST documents in email. Client records in WhatsApp threads. Compliance updates in PDFs. Sales history in a CRM no one properly updates. Every decision requires archaeology. That time has a cost.",
  },
  {
    title: "Every tool you've tried creates a new silo.",
    body: "CRM, SEO, automation, analytics - each delivers something. None connects to the others. The result is a stack that requires more management than it saves. That is software with extra steps, not a system.",
  },
];

function SituationCard({ card, i }: { card: typeof cards[0]; i: number }) {
  return (
    <div className="kyn-card p-7 flex-shrink-0 w-[320px] sm:w-[380px]">
      <div className="flex items-start gap-4 mb-4">
        <span className="font-syne font-black text-[#027C88] text-3xl leading-none shrink-0 select-none">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="font-syne font-bold text-gray-900 dark:text-white text-base leading-snug">
          {card.title}
        </h3>
      </div>
      <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed pl-12">
        {card.body}
      </p>
    </div>
  );
}

export function SituationSection() {
  return (
    <section className="section-pad py-20 md:py-24 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-8">
          <span style={{ fontFamily: "var(--font-roboto)" }}>Where Most Businesses Are Right Now</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            The Gap Between Intent and Execution
            <br />Is Where Revenue Goes.
          </h2>
          <p className="font-jakarta text-gray-700 dark:text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            Most businesses that want to grow with AI face the same pattern: strong intent,
            fragmented execution. The right tools exist. The right talent is expensive.
            The right systems - the ones that connect and compound - are rarely built.
            That is the gap Kynato exists to close.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel — full bleed */}
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        style={{ "--animation-duration": "38s" } as React.CSSProperties}
      >
        <div className="flex gap-4 py-2 animate-scroll hover:[animation-play-state:paused]">
          {/* Copy 1 */}
          {cards.map((card, i) => (
            <SituationCard key={i} card={card} i={i} />
          ))}
          {/* Copy 2 — seamless loop */}
          {cards.map((card, i) => (
            <SituationCard key={`d${i}`} card={card} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
