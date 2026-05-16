"use client";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

const quotes = [
  "\"We don't deliver demos. We deliver running systems.\"",
  "\"From first click to closed deal — automated.\"",
  "\"Enterprise-grade AI. Built for how India actually works.\"",
  "\"Kynato automates the work between your first lead and your last invoice.\""
];

const stats = [
  { value: "5+", label: "Industry\nVerticals" },
  { value: "5", label: "AI\nCapabilities" },
  { value: "∞", label: "Compound\nLeverage" },
  { value: "48h", label: "Avg. time\nto first insight" },
];


export function HeroSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setQuoteIndex((p) => (p + 1) % quotes.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">

      {/* ── Layered Background ── */}
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(2,124,136,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(0,106,240,0.07),transparent)] pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.06] blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#006AF0]/[0.05] blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* ── Content ── */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center pt-32 pb-24">


        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-xs font-semibold text-white/60 tracking-widest uppercase">
            <Zap className="h-3 w-3 text-accent-teal" />
            India&apos;s B2B AI Agency — Make Intelligence Work
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-urbanist font-black text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-white max-w-5xl mx-auto mb-6"
        >
          Your Competitors Are{" "}
          <span className="gradient-text-teal">Running on AI.</span>
          <br className="hidden sm:block" />
          Are You Still Running{" "}
          <span className="relative inline-block">
            on People?
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent" />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-roboto text-lg md:text-xl text-accent-teal/90 font-light mb-5 tracking-wide"
        >
          We don&apos;t sell AI. We deploy it where your revenue lives.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-roboto text-[#8A9BB0] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kynato builds and operates SEO and AI Visibility systems, automated lead engines,
          Agentic workflows, and Knowledge AI — so your business captures more, converts more,
          and runs on less. Measured by revenue gained or hours saved. Nothing else.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 w-full"
        >
          <HoverBorderGradient
            containerClassName="rounded-xl w-full sm:w-auto"
            as="button"
            className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-8 h-12 w-full sm:w-auto shadow-[0_0_30px_rgba(0,106,240,0.35)] hover:shadow-[0_0_50px_rgba(0,106,240,0.5)] transition-shadow"
          >
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </HoverBorderGradient>

          <Link href="#how-we-work" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-white/70 hover:text-white text-sm font-medium transition-all w-full sm:w-auto backdrop-blur-sm">
            See How It Works ↓
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/35 font-roboto mb-10"
        >
          {["Build & Operate — Not Build & Leave", "Ranked in Google AND AI Search", "Revenue Gained or Hours Saved"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent-teal/60 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Rotating Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-6 mb-16 overflow-hidden relative w-full max-w-xl"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-roboto text-xs text-white/25 absolute w-full text-center italic"
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {stats.map((stat, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/[0.02] transition-colors">
                <div className="font-urbanist font-black text-3xl md:text-4xl text-white mb-1 gradient-text-teal">{stat.value}</div>
                <div className="text-[11px] font-roboto text-white/30 leading-snug whitespace-pre-line">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
