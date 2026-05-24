import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Intelligence Lab — Kynato | Insights, Perspectives, Founder Notes & Case Studies",
  description: "Original analysis, case breakdowns, and specific perspectives on AI visibility, agentic automation, and growth systems for Indian businesses.",
};

export default function IntelligenceLabPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 container mx-auto px-4 text-center">
          <span className="inline-block mb-4 font-roboto text-[11px] font-bold text-[#027C88] tracking-[0.3em] uppercase">
            Intelligence Lab
          </span>
          <h1 className="font-urbanist font-black text-white text-4xl md:text-5xl mb-4">
            What We Know, We Publish.
          </h1>
          <p className="font-roboto text-white/50 text-lg max-w-xl mx-auto">
            Insights, perspectives, resources, founder notes, and case studies — coming soon.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
