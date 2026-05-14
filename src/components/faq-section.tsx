"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is an AI agency and what does one actually do for a business?", a: "An AI agency designs, builds, and operates AI-powered systems that drive measurable business outcomes — covering SEO and AI Visibility, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), Lead Generation, Knowledge AI, RAG Systems, and Agentic Automation. Unlike a traditional digital marketing agency that runs campaigns, an AI agency like Kynato stays accountable for outcomes after go-live, measuring everything against revenue gained or hours saved." },
  { q: "What is Generative Engine Optimisation (GEO)?", a: "Generative Engine Optimisation (GEO) is the discipline of making your business visible in AI-generated answers — on ChatGPT, Perplexity, Google AI Overviews, and Gemini — rather than only in traditional search results." },
  { q: "How long does it take to see results from SEO, GEO, and AEO?", a: "Technical SEO remediation produces measurable data within 4–6 weeks. Keyword ranking gains compound from month 3. GEO — securing citations in AI-generated answers — shows early signals within 4–8 weeks for domains with existing authority." },
  { q: "What does 'build and operate' mean?", a: "Most agencies deliver a system and consider the engagement complete. Kynato's model is different because the value of AI systems compounds over time through optimisation. Systems that aren't monitored drift. We stay in the engagement — running, monitoring, and improving what we build." }
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal"
          >
            COMMON QUESTIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-bold text-4xl md:text-5xl text-white tracking-tight"
          >
            Questions Founders, Growth Teams,<br />and Operators Ask
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-white/5 bg-[#09090B] px-6 rounded-lg data-[state=open]:border-accent-teal/30 data-[state=open]:bg-white/[0.02] transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-urbanist font-bold text-lg md:text-xl text-white hover:text-accent-teal transition-colors py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base font-roboto pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
