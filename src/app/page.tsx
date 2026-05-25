import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { SituationSection } from "@/components/situation-section";
import { UrgencySection } from "@/components/urgency-section";
import { SystemSection } from "@/components/system-section";
import { WorkflowSection } from "@/components/workflow-section";
import { DifferentiatorSection } from "@/components/differentiator-section";
import { MetricsSection } from "@/components/metrics-section";
import { ScreenshotStrip } from "@/components/screenshot-strip";
import { CaseStudiesSection } from "@/components/case-studies";
import { PerformanceGraphsSection } from "@/components/performance-graphs";
import { TestamentSection } from "@/components/testament-section";
import { IcpSection } from "@/components/icp-section";
import { IndustriesSection } from "@/components/industries-section";
import { IntelligenceLabSection } from "@/components/intelligence-lab-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Part 3 — Hero */}
        <HeroSection />
        {/* Part 4 — Trust Signal Bar */}
        <TrustBar />
        {/* Part 5 — The Situation */}
        <SituationSection />
        {/* Part 5B — Urgency */}
        <UrgencySection />
        {/* Part 6 — The System (Five Capabilities) */}
        <SystemSection />
        {/* Part 7 — How Kynato Works */}
        <WorkflowSection />
        {/* Part 8 — The Kynato Difference */}
        <DifferentiatorSection />
        {/* Part 9 — Metrics and Outcomes */}
        <MetricsSection />
        {/* Part 10 — Screenshot Proof Strip */}
        <ScreenshotStrip />
        {/* Part 11 — Case Studies */}
        <CaseStudiesSection />
        {/* Part 11B — Performance Graphs */}
        <PerformanceGraphsSection />
        {/* Part 12 — Testament & Trust */}
        <TestamentSection />
        {/* Part 13 — Who We Work With (ICP) */}
        <IcpSection />
        {/* Part 14 — Industries */}
        <IndustriesSection />
        {/* Part 15 — Intelligence Lab */}
        <IntelligenceLabSection />
        {/* Part 16 — FAQ */}
        <FaqSection />
        {/* Part 17 — Closing CTA */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
