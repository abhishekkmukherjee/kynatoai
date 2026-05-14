"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function SocialProofSection() {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">
          TRUSTED BY FOUNDERS, GROWTH TEAMS & OPERATIONS LEADERS ACROSS INDIA
        </span>
      </div>
      <InfiniteMovingCards
        items={[
          { quote: "Kynato automated our entire document collection workflow in under 6 weeks. What took 3 hours daily now takes zero.", name: "Founder", title: "CA Firm, Mumbai" },
          { quote: "Within 3 months we had our first ChatGPT citation for our main keyword. That's when we knew this was real.", name: "Growth Lead", title: "HealthTech Startup" },
          { quote: "I stopped getting calls from clients asking where their documents are. The system handles it. That alone was worth every rupee.", name: "Operations Head", title: "B2B Services" },
        ]}
        direction="left"
        speed="slow"
      />
    </section>
  );
}
