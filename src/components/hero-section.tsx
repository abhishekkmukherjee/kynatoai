import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col justify-center bg-[#080808] overflow-hidden">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.35] pointer-events-none" />

      {/* Ambient accent glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#00FF88]/[0.04] blur-[160px] rounded-full pointer-events-none" />

      {/* Decorative oversized number */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(12rem, 28vw, 24rem)",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
        }}
      >
        01
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18 md:pb-24">

        {/* Section label */}
        <div className="hero-line-1 flex items-center gap-4 mb-12">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-[#00FF88]/70">
            [ THE INTELLIGENCE ECOSYSTEM ]
          </span>
          <div className="h-px w-16 bg-[#00FF88]/30" />
        </div>

        {/* Eyebrow */}
        <p className="hero-line-2 font-jakarta text-[11px] font-semibold text-white/35 tracking-[0.25em] uppercase mb-6">
          For Founders · Startups · Growth Teams · Operations Leaders
        </p>

        {/* H1 */}
        <h1
          className="hero-line-3 font-syne font-black text-white leading-[1.0] tracking-[-0.035em] mb-8 max-w-4xl"
          style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}
        >
          The Intelligence
          <br />
          Ecosystem Built for
          <br />
          <span className="hero-gradient-text">
            Business Growth.
          </span>
        </h1>

        {/* Manifesto */}
        <p className="hero-line-4 font-jakarta text-lg md:text-xl text-white/40 font-light mb-5 italic max-w-xl">
          &ldquo;We don&apos;t sell AI. We deploy it where your revenue lives.&rdquo;
        </p>

        {/* Subheadline */}
        <p className="hero-line-4 font-jakarta text-base md:text-lg text-white/50 max-w-[520px] leading-relaxed mb-12">
          Kynato is an AI services consultancy based in India that functions as an intelligence
          ecosystem, building and operating growth, intelligence, and automation systems
          for B2B businesses.
        </p>

        {/* CTA row */}
        <div className="hero-line-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 h-13 border border-[#00FF88]/60 rounded-xl font-jakarta text-sm font-semibold text-white hover:bg-[#00FF88] hover:text-black hover:border-[#00FF88] transition-all duration-300"
            style={{ height: "3.25rem" }}
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="#how-we-work"
            className="inline-flex items-center gap-2 font-jakarta text-sm font-medium text-white/40 hover:text-white transition-colors duration-300"
          >
            See How It Works
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
