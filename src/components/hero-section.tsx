"use client"
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSidebar } from "@/context/SidebarContext";
import { Spotlight } from "@/components/ui/spotlight";

const cyclingWords = ["Founders", "Startups", "Growth Teams", "Operations Leaders", "B2B Businesses"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { openSidebar } = useSidebar();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % cyclingWords.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-[#07070C] overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-1/4 md:-top-20" fill="white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.04] dark:bg-[#027C88]/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#006AF0]/[0.03] dark:bg-[#006AF0]/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-24 sm:pt-28 pb-10">

        {/* H1 */}
        <h1
          className="hero-line-3 font-syne font-black text-gray-900 dark:text-white leading-[1.04] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.5rem)" }}
        >
          The Intelligence Ecosystem
          <br />Built for Business Growth.
        </h1>

        {/* Animated text */}
        <div className="hero-line-4 mb-5">
          <p className="font-jakarta text-xl md:text-2xl font-semibold text-gray-700 dark:text-white/80">
            AI Supporting{" "}
            <span
              className="text-[#027C88] inline-block transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
            >
              {cyclingWords[wordIndex]}
            </span>
          </p>
        </div>

        {/* Manifesto */}
        <p className="hero-line-4 font-jakarta text-lg md:text-xl text-gray-500 dark:text-white/60 font-light italic mb-8 max-w-lg">
          &ldquo;We don&apos;t sell AI. We deploy it where your revenue lives.&rdquo;
        </p>

        {/* CTA buttons */}
        <div className="hero-line-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
          <a
            href="#talk"
            onClick={(e) => { e.preventDefault(); openSidebar(); }}
            className="inline-flex items-center gap-2.5 px-7 h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-base font-semibold hover:bg-[#0052C4] transition-colors duration-200"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#book"
            onClick={(e) => { e.preventDefault(); openSidebar(); }}
            className="inline-flex items-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-base font-semibold hover:bg-[#026070] transition-colors duration-200"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-gray-200 dark:border-white/[0.08] rounded-2xl p-5 bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm">
          {[
            { num: "58+", label: "Satisfied Clients" },
            { num: "1200+", label: "AI Work Hours" },
            { num: "147", label: "Systems Deployed" },
            { num: "4.8/5", label: "Rated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-syne font-black text-2xl md:text-3xl text-gray-900 dark:text-white mb-1"
                style={{ background: "linear-gradient(120deg, #027C88 0%, #006AF0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.num}
              </p>
              <p className="font-jakarta text-[12px] text-gray-500 dark:text-white/55 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-50 dark:from-[#07070C] to-transparent pointer-events-none" />
    </section>
  );
}
