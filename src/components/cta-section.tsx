"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const checks = [
  "No pitch deck. No generic proposal.",
  "Responds within 1 business day.",
  "No commitment required.",
];

export function CtaSection() {
  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-44 section-line-top">

      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-100 pointer-events-none" />

      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(2,124,136,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,106,240,0.08)_0%,transparent_65%)]" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.07] blur-[150px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-[#006AF0]/[0.06] blur-[130px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Top border glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-teal/35 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-teal/18 bg-accent-teal/[0.06] text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
              </span>
              Let&apos;s Build Your System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-urbanist font-black text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] tracking-[-0.035em] text-white mb-6"
          >
            Stop Losing Revenue to{" "}
            <span className="gradient-text-teal">Manual Operations.</span>
            <br />
            Start with a 30-Minute Diagnosis.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-roboto text-white/35 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Book a Strategy Call. We will map exactly where your business is leaking revenue
            or wasting hours — and show you what a Kynato system would look like in your context.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Link href="/strategy" className="w-full sm:w-auto">
              <HoverBorderGradient
                containerClassName="rounded-xl w-full sm:w-auto"
                as="span"
                className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-10 h-13 w-full sm:w-auto shadow-[0_0_50px_rgba(0,106,240,0.45)] hover:shadow-[0_0_80px_rgba(0,106,240,0.65)] transition-all duration-300"
              >
                Book Your Strategy Call <ArrowRight className="h-4 w-4" />
              </HoverBorderGradient>
            </Link>

            <Link href="/contact" className="inline-flex items-center justify-center h-13 px-8 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] text-white/55 hover:text-white text-sm font-medium transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
              Send Us a Message
            </Link>
          </motion.div>

          {/* Trust checks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-14"
          >
            {checks.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-sm text-white/70 font-roboto">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-teal shrink-0" />
                {c}
              </span>
            ))}
          </motion.div>

          {/* Quote pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="w-px h-5 rounded-full bg-gradient-to-b from-transparent via-accent-teal/50 to-transparent" />
            <p className="font-roboto italic text-white/60 text-sm">
              &quot;Revenue gained or hours saved. Everything else is noise.&quot; — Kynato
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
