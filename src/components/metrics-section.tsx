"use client";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export function MetricsSection() {
  const { openSidebar } = useSidebar();

  return (
    <section className="section-pad py-16 md:py-20 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span>Outcomes</span>
        </div>

        {/* Banner */}
        <div className="rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
                Outcomes That Compound
              </p>
              <h2
                className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Revenue Gained or Hours Saved.
                <br />Measured From Day One.
              </h2>
              <p className="font-jakarta text-gray-600 dark:text-white/70 text-base leading-relaxed mb-6">
                Every system Kynato builds is instrumented from the first day of operation.
                Every engagement measured against exactly two things: revenue gained or hours saved.
                Nothing else. No vanity metrics. Systems compound - Month 12 performance is structurally better than Month 1.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#talk"
                  onClick={(e) => { e.preventDefault(); openSidebar(); }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#0052C4] transition-colors duration-200"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
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
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { number: "4-8 WEEKS", desc: "Average time from engagement start to a running, live system. Not a pilot. Not a proof of concept. System Activation." },
                { number: "DAY ONE", desc: "Every system Kynato builds is instrumented from the first day of operation. Not after proving it works. From day one." },
                { number: "2 FILTERS", desc: "Every engagement measured against exactly two things: revenue gained or hours saved. Nothing else. No vanity metrics." },
              ].map((item) => (
                <div key={item.number} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02]">
                  <div
                    className="font-syne font-black leading-tight shrink-0"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      background: "linear-gradient(120deg, #027C88 0%, #006AF0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.number}
                  </div>
                  <p className="font-jakarta text-gray-600 dark:text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-jakarta text-[#027C88] italic text-base mt-6">
          &ldquo;Revenue gained or hours saved. Everything else is noise.&rdquo;
        </p>
      </div>
    </section>
  );
}
