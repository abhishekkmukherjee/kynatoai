"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const trustItems = [
  { quote: "Build and Operate - Not Build and Leave" },
  { quote: "Measured by Revenue Gained or Hours Saved" },
  { quote: "Go-Live is the Beginning, Not the End" },
  { quote: "Every System Instrumented From Day One" },
  { quote: "Enterprise-grade AI Systems. Built for Growth" },
  { quote: "Five Practice Areas. One Connected System." },
];

export function TrustBar() {
  return (
    <div className="w-full bg-gray-100 dark:bg-[#0A0A0A] border-y border-gray-200 dark:border-white/[0.06] overflow-hidden py-2">
      <InfiniteMovingCards
        items={trustItems}
        direction="left"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}
