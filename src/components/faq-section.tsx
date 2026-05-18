"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is an AI agency and what does one actually do for a business?",
    a: "An AI agency designs, builds, and operates AI-powered systems that drive measurable business outcomes — covering SEO and AI Visibility, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), Lead Generation, Knowledge AI, RAG Systems, and Agentic Automation. Unlike a traditional digital marketing agency that runs campaigns, an AI agency like Kynato stays accountable for outcomes after go-live, measuring everything against revenue gained or hours saved.",
  },
  {
    q: "What is Generative Engine Optimisation (GEO)?",
    a: "Generative Engine Optimisation (GEO) is the discipline of making your business visible in AI-generated answers — on ChatGPT, Perplexity, Google AI Overviews, and Gemini — rather than only in traditional search results.",
  },
  {
    q: "How long does it take to see results from SEO, GEO, and AEO?",
    a: "Technical SEO remediation produces measurable data within 4–6 weeks. Keyword ranking gains compound from month 3. GEO — securing citations in AI-generated answers — shows early signals within 4–8 weeks for domains with existing authority.",
  },
  {
    q: "What does 'build and operate' mean?",
    a: "Most agencies deliver a system and consider the engagement complete. Kynato's model is different because the value of AI systems compounds over time through optimisation. Systems that aren't monitored drift. We stay in the engagement — running, monitoring, and improving what we build.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 bg-[#030305] relative overflow-hidden section-line-top">

      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#027C88]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.025em] text-white"
          >
            Questions Founders, Growth Teams,{" "}
            <span className="gradient-text-teal">and Operators Ask</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-400 group ${
                open === i
                  ? "border-accent-teal/20 bg-white/[0.03]"
                  : "border-white/[0.05] bg-white/[0.01] hover:border-white/[0.09] hover:bg-white/[0.02]"
              }`}
            >
              {/* Top accent when open */}
              {open === i && (
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />
              )}

              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-urbanist font-bold text-base md:text-[1.05rem] text-white leading-snug flex items-center gap-3">
                  <span
                    className="shrink-0 text-[11px] font-black tabular-nums"
                    style={{ color: open === i ? "#027C88" : "rgba(255,255,255,0.2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "border-accent-teal/35 bg-accent-teal/10 rotate-0"
                      : "border-white/[0.08] bg-white/[0.02]"
                  }`}
                >
                  {open === i
                    ? <Minus className="h-3 w-3 text-accent-teal" />
                    : <Plus className="h-3 w-3 text-white/35" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14">
                      <div className="h-px bg-white/[0.04] mb-5" />
                      <p className="font-roboto text-white/45 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
