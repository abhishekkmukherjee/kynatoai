"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function CtaSection() {
  return (
    <section className="relative bg-black overflow-hidden border-t border-white/5">
      <LampContainer>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal text-center w-full"
        >
          LET&apos;S BUILD YOUR SYSTEM
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-urbanist font-black text-5xl md:text-6xl text-white mb-8 tracking-tight max-w-4xl mx-auto text-center"
        >
          Stop Losing Revenue to Manual Operations.<br className="hidden md:block" />
          Start with a 30-Minute Diagnosis.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-roboto text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-center"
        >
          Book a Strategy Call. We will map exactly where your business is leaking revenue
          or wasting hours — and show you what a Kynato system would look like in your context.
          No pitch deck. No generic proposal. A specific, honest diagnosis.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full"
        >
          <Button size="lg" className="bg-[#006AF0] hover:bg-[#006AF0]/90 text-white w-full sm:w-auto text-lg px-10 h-16 rounded-md shadow-[0_0_30px_rgba(0,106,240,0.3)] transition-all hover:shadow-[0_0_50px_rgba(0,106,240,0.5)]">
            Book Your Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:border-white/20 w-full sm:w-auto text-lg px-10 h-16 bg-[#09090B] rounded-md transition-all">
            Send Us a Message
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center w-full"
        >
          <p className="text-sm text-white/40 mb-8 font-roboto tracking-wide">
            We typically respond within 1 business day. No commitment required. No spam.
          </p>
          
          <div className="inline-block px-6 py-3 border border-white/5 rounded-full bg-white/[0.02]">
            <p className="font-roboto italic text-accent-teal text-sm">
              &quot;Revenue gained or hours saved. Everything else is noise.&quot; — Kynato
            </p>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
