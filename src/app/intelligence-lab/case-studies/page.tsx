import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Case Studies — Kynato Intelligence Lab",
  description: "Real systems. Real results. Case studies from Kynato-built intelligence ecosystems.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 container mx-auto px-4 text-center">
          <span className="inline-block mb-4 font-roboto text-[11px] font-bold text-[#027C88] tracking-[0.3em] uppercase">
            Case Studies
          </span>
          <h1 className="font-urbanist font-black text-white text-4xl md:text-5xl mb-4">
            What Running Systems Actually Look Like.
          </h1>
          <p className="font-roboto text-white/50 text-lg max-w-xl mx-auto">
            Full case studies coming soon. Visit the homepage to see case study summaries.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
