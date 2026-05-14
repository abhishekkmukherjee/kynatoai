"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const quotes = [
  "\"We don't deliver demos. We deliver running systems.\"",
  "\"From first click to closed deal — automated.\"",
  "\"Enterprise-grade AI. Built for how India actually works.\"",
  "\"Kynato automates the work between your first lead and your last invoice.\""
];

export function HeroSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black flex flex-col items-center justify-center min-h-[90vh]">
      <HeroHighlight containerClassName="pt-32 pb-20 md:pt-48 md:pb-32 w-full min-h-[90vh] flex flex-col items-center justify-center">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#027C88" />
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal"
          >
            INDIA&apos;S B2B AI AGENCY — MAKE INTELLIGENCE WORK.
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
            className="font-urbanist font-black text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[1.1] tracking-tight text-white mb-6 max-w-5xl mx-auto break-words"
          >
            Your Competitors Are Running on AI.<br className="hidden md:block" />
            <Highlight className="text-white dark:text-white">
              Are You Still Running on People?
            </Highlight>
          </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-roboto font-light text-xl md:text-2xl text-accent-teal mb-6"
        >
          We don&apos;t sell AI. We deploy it where your revenue lives.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-roboto text-[#D0D5DD] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Kynato builds and operates SEO and AI Visibility systems, automated lead engines,
          Agentic workflows, and Knowledge AI — so your business captures more, converts more,
          and runs on less. Measured by revenue gained or hours saved. Nothing else.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full"
        >
          <HoverBorderGradient
            containerClassName="rounded-md w-full sm:w-auto"
            as="button"
            className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-base px-8 h-14 w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,106,240,0.5)]"
          >
            <span>Book a Strategy Call</span> <ArrowRight className="ml-2 h-5 w-5" />
          </HoverBorderGradient>
          <Button size="lg" variant="outline" className="border-[#027C88]/50 text-[#027C88] hover:bg-[#027C88]/10 hover:border-[#027C88] w-full sm:w-auto text-base px-8 h-14 bg-transparent rounded-md transition-all duration-300 backdrop-blur-sm">
            See How It Works ↓
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400 font-roboto mb-12"
        >
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-teal" /> Build & Operate — Not Build & Leave</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-teal" /> Ranked in Google AND AI Search</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-teal" /> Revenue Gained or Hours Saved</span>
        </motion.div>

        {/* Brand philosophy strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-8 mb-16 overflow-hidden relative w-full max-w-2xl"
        >
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-roboto text-sm text-muted-foreground absolute w-full text-center"
          >
            {quotes[quoteIndex]}
          </motion.p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full max-w-5xl border-t border-white/10 pt-10 mt-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-urbanist font-bold mb-2 text-white">5+</div>
              <div className="text-sm font-roboto text-muted-foreground">Industry<br />Verticals</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-urbanist font-bold mb-2 text-white">4</div>
              <div className="text-sm font-roboto text-muted-foreground">Practice<br />Areas</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-urbanist font-bold mb-2 text-white">∞</div>
              <div className="text-sm font-roboto text-muted-foreground">Compound<br />Leverage</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-urbanist font-bold mb-2 text-white">48 hrs</div>
              <div className="text-sm font-roboto text-muted-foreground">Avg. time<br />to first insight</div>
            </div>
          </div>
        </motion.div>
      </div>
      </HeroHighlight>
    </section>
  );
}
