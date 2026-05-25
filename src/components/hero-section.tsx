import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlight } from "@/components/ui/hero-highlight";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-[#07070C] overflow-hidden">

      {/* Aceternity Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-1/4 md:-top-20"
        fill="white"
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-40 pointer-events-none" />

      {/* Soft teal glow */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.04] dark:bg-[#027C88]/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#006AF0]/[0.03] dark:bg-[#006AF0]/[0.04] blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20">

        {/* Eyebrow */}
        <div className="hero-line-1 flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#027C88]/25 bg-[#027C88]/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#027C88]" />
            <span className="font-jakarta text-[11px] font-semibold text-[#027C88] tracking-wider uppercase">
              The Intelligence Ecosystem
            </span>
          </span>
        </div>

        {/* Target line */}
        <p className="hero-line-2 font-jakarta text-sm font-medium text-gray-500 dark:text-white/70 tracking-wide mb-5">
          Founders · Startups · Growth Teams · Operations Leaders
        </p>

        {/* H1 */}
        <h1
          className="hero-line-3 font-syne font-black text-gray-900 dark:text-white leading-[1.04] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)" }}
        >
          The Intelligence
          <br />
          Ecosystem Built for
          <br />
          <Highlight>Business Growth.</Highlight>
        </h1>

        {/* Manifesto */}
        <p className="hero-line-4 font-jakarta text-lg md:text-xl text-gray-500 dark:text-white/60 font-light italic mb-4 max-w-lg">
          &ldquo;We don&apos;t sell AI. We deploy it where your revenue lives.&rdquo;
        </p>

        {/* Subline */}
        <p className="hero-line-4 font-jakarta text-base md:text-lg text-gray-600 dark:text-white/70 max-w-[520px] leading-relaxed mb-10">
          Kynato is an AI services consultancy based in India that functions as an intelligence
          ecosystem, building and operating growth, intelligence, and automation systems
          for B2B businesses.
        </p>

        {/* CTA row */}
        <div className="hero-line-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#026070] transition-colors duration-200"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="#how-we-work"
            className="inline-flex items-center gap-2 font-jakarta text-sm font-medium text-gray-500 dark:text-white/60 hover:text-gray-700 dark:hover:text-white/70 transition-colors duration-200"
          >
            See How It Works
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-50 dark:from-[#07070C] to-transparent pointer-events-none" />
    </section>
  );
}
