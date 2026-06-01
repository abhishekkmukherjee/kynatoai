"use client";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export function CtaSection() {
  const { openSidebar } = useSidebar();

  return (
    <section className="closing-cta relative bg-gray-50 dark:bg-[#07070C] overflow-hidden">

      {/* Subtle accent */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-white/[0.06]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>Let&apos;s Build</span>
        </div>

        <div className="max-w-2xl">
          <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-4">
            Start Here
          </p>

          <h2
            className="font-syne font-black text-gray-900 dark:text-white leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            A Specific Diagnosis for Your Business.
            <br />Not a Deck. Not a Demo.
          </h2>

          <p className="font-jakarta text-gray-600 dark:text-white/70 text-base leading-relaxed mb-4">
            In a 30-minute conversation, Kynato will map your current operations against
            two filters - where is revenue leaking, and where are hours being wasted -
            and show you what a system built for your specific situation would look like.
          </p>
          <p className="font-jakarta text-gray-600 dark:text-white/70 text-base leading-relaxed mb-10">
            If there is a fit, a system blueprint follows.
            If there is not, you leave with an honest diagnosis that is useful regardless.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#talk"
              onClick={(e) => { e.preventDefault(); openSidebar(); }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#0052C4] transition-colors duration-200"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#book"
              onClick={(e) => { e.preventDefault(); openSidebar(); }}
              className="inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#026070] transition-colors duration-200"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="font-jakarta text-gray-600 dark:text-white/75 text-sm mb-6">
            Or write directly:{" "}
            <a href="mailto:support@kynato.com" className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
              support@kynato.com
            </a>
            {" "}·{" "}
            <a href="https://wa.me/91" className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
              WhatsApp available
            </a>
          </p>

          <p className="font-jakarta italic text-[#027C88] text-sm mb-2">
            &ldquo;Revenue gained or hours saved. Everything else is noise.&rdquo; - Kynato
          </p>
          <p className="font-jakarta text-gray-600 dark:text-white/70 text-sm">
            Built for outcomes. Not experiments.
          </p>
        </div>
      </div>
    </section>
  );
}
