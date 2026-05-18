"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid-fine pointer-events-none" />

      {/* Noise texture for depth */}
      <div className="absolute inset-0 bg-noise opacity-[0.025] pointer-events-none mix-blend-overlay" />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(2,124,136,0.16),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(0,106,240,0.07),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_60%,rgba(2,124,136,0.04),transparent)] pointer-events-none" />

      {/* Center spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(2,124,136,0.1)_0%,transparent_65%)] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

      {/* Ambient glow orbs */}
      <div className="absolute top-[20%] left-[12%] w-[550px] h-[550px] rounded-full bg-[#027C88]/[0.07] blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[8%] w-[450px] h-[450px] rounded-full bg-[#006AF0]/[0.05] blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.8s" }} />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center pt-32 pb-24">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-teal/20 bg-accent-teal/[0.06] backdrop-blur-sm text-[11px] font-bold text-accent-teal/90 tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
            </span>
            India&apos;s B2B AI Agency — Make Intelligence Work
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-urbanist font-black text-[clamp(2.8rem,7.5vw,6rem)] leading-[1.02] tracking-[-0.035em] text-white max-w-5xl mx-auto mb-6"
        >
          Your Competitors Are{" "}
          <span className="gradient-text-teal">Running on AI.</span>
          <br className="hidden sm:block" />
          Are You Still Running{" "}
          <span className="relative inline-block">
            on People?
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent origin-left"
            />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-roboto text-lg md:text-xl text-accent-teal/80 font-light mb-5 tracking-wide"
        >
          We don&apos;t sell AI. We deploy it where your revenue lives.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-roboto text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-8 h-12 w-full sm:w-auto shadow-[0_0_40px_rgba(0,106,240,0.4)] hover:shadow-[0_0_70px_rgba(0,106,240,0.6)] transition-all duration-300"
          >
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </HoverBorderGradient>

          <Link
            href="#how-we-work"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] text-white/60 hover:text-white text-sm font-medium transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            See How It Works ↓
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/30 font-roboto mb-12"
        >
          {["Build & Operate — Not Build & Leave", "Ranked in Google AND AI Search", "Revenue Gained or Hours Saved"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent-teal/50 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Rotating quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-5 mb-16 overflow-hidden relative w-full max-w-xl"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-roboto text-xs text-white/20 absolute w-full text-center italic"
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-3xl"
        >
          {/* Gradient border wrapper */}
          <div className="relative p-px rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(2,124,136,0.35) 0%, rgba(0,106,240,0.15) 50%, rgba(2,124,136,0.2) 100%)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 bg-black/80 backdrop-blur-sm rounded-[calc(1rem-1px)] overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative px-6 py-5 text-center group cursor-default overflow-hidden shimmer-on-hover"
                  style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  <div className="font-urbanist font-black text-3xl md:text-4xl gradient-text-teal mb-1 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                  <div className="text-[11px] font-roboto text-white/30 leading-snug whitespace-pre-line">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
