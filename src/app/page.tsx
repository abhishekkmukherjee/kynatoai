import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SocialProofSection } from "@/components/social-proof";
import { ProblemSection } from "@/components/problem-section";
import { PracticeAreasSection } from "@/components/practice-areas";
import { WorkflowSection } from "@/components/workflow-section";
import { StatsSection } from "@/components/stats-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-accent-teal/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <PracticeAreasSection />
        <WorkflowSection />
        <StatsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
