"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const checks = [
  "No pitch deck. No generic proposal.",
  "Responds within 1 business day.",
  "No commitment required.",
];

export function CtaSection() {
  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-40">

      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#027C88]/[0.08] blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#006AF0]/[0.06] blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-teal/20 bg-accent-teal/[0.05] text-[11px] font-bold text-accent-teal tracking-[0.15em] uppercase">
              Let&apos;s Build Your System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-urbanist font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white mb-6"
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
            className="font-roboto text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
            <HoverBorderGradient
              containerClassName="rounded-xl w-full sm:w-auto"
              as="button"
              className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-10 h-13 w-full sm:w-auto shadow-[0_0_40px_rgba(0,106,240,0.4)] hover:shadow-[0_0_60px_rgba(0,106,240,0.6)] transition-shadow"
            >
              Book Your Strategy Call <ArrowRight className="h-4 w-4" />
            </HoverBorderGradient>

            <button className="inline-flex items-center justify-center h-13 px-8 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-white/60 hover:text-white text-sm font-medium transition-all w-full sm:w-auto backdrop-blur-sm">
              Send Us a Message
            </button>
          </motion.div>

          {/* Checks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
          >
            {checks.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-xs text-white/25 font-roboto">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-teal/40 shrink-0" />
                {c}
              </span>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="w-1 h-4 rounded-full bg-accent-teal/60" />
            <p className="font-roboto italic text-white/30 text-sm">
              &quot;Revenue gained or hours saved. Everything else is noise.&quot; — Kynato
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
