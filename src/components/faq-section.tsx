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
    <section className="py-28 md:py-36 bg-[#030305] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

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
            className="font-urbanist font-black text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-white"
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
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-accent-teal/25 bg-white/[0.03]"
                  : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-urbanist font-bold text-base md:text-lg text-white leading-snug">
                  {faq.q}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  open === i ? "border-accent-teal/40 bg-accent-teal/10" : "border-white/10 bg-white/[0.03]"
                }`}>
                  {open === i
                    ? <Minus className="h-3 w-3 text-accent-teal" />
                    : <Plus className="h-3 w-3 text-white/40" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-white/[0.05] mb-5" />
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
