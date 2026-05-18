"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

export function SocialProofSection() {
  return (
    <section className="relative bg-black border-y border-white/[0.04] overflow-hidden section-line-top">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(2,124,136,0.03),transparent)] pointer-events-none" />

      {/* Label */}
      <div className="container mx-auto px-4 pt-14 pb-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-[10px] font-bold text-white/25 tracking-[0.3em] uppercase">
            Trusted by Founders, Growth Teams &amp; Operations Leaders Across India
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </div>

      {/* Moving cards with edge fade */}
      <div className="pb-14 relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r from-black to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l from-black to-transparent" />

        <InfiniteMovingCards
          items={[
            { quote: "Kynato automated our entire document collection workflow in under 6 weeks. What took 3 hours daily now takes zero.", name: "Founder", title: "CA Firm, Mumbai" },
            { quote: "Within 3 months we had our first ChatGPT citation for our main keyword. That's when we knew this was real.", name: "Growth Lead", title: "HealthTech Startup" },
            { quote: "I stopped getting calls from clients asking where their documents are. The system handles it. That alone was worth every rupee.", name: "Operations Head", title: "B2B Services" },
          ]}
          direction="left"
          speed="slow"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
