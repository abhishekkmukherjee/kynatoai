"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";


export function SocialProofSection() {
  return (
    <section className="relative bg-black border-y border-white/[0.04] overflow-hidden">

      {/* Label */}
      <div className="container mx-auto px-4 pt-12 pb-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold text-white/20 tracking-[0.25em] uppercase"
        >
          Trusted by Founders, Growth Teams &amp; Operations Leaders Across India
        </motion.span>
      </div>

      {/* Moving Cards */}
      <div className="pb-12">
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
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
