"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    timeline: "5-7 business days",
    desc: "We map your business against two filters: where is revenue leaking, and where are hours being wasted? A specific gap analysis - not a generic audit template - against your actual operations, stack, and competitive position.",
    outcome: "A prioritised system blueprint showing exactly which capability would generate the highest return for your specific business.",
    extra: null,
    diagnosticLink: true,
  },
  {
    step: "02",
    title: "Design",
    timeline: "Concurrent with scoping. Delivered before contract sign.",
    desc: "We architect the full system - Search & AI Visibility structure, lead pipeline design, automation workflow blueprints, Knowledge AI layer - all connected.",
    outcome: "A complete system architecture document with integration map, tooling decisions, and System Activation timeline. You see the full shape of the engagement before a single contract is signed.",
    extra: null,
    diagnosticLink: false,
  },
  {
    step: "03",
    title: "Deploy",
    timeline: "4-8 weeks",
    desc: "We build, integrate, and activate. Not a proof of concept. Not a pilot. A running system - integrated into your existing stack, instrumented from day one, tested against real conditions before System Activation.",
    outcome: "A live, operating system with full visibility dashboards, owner documentation, and a handover briefing.",
    extra: null,
    diagnosticLink: false,
  },
  {
    step: "04",
    title: "Operate",
    timeline: "Ongoing. Reviewed quarterly.",
    desc: "Kynato runs what it builds. We monitor performance, optimise monthly, feed learnings across systems, and report in plain language every cycle. Operating Mandate covers ongoing system performance and optimisation.",
    outcome: "A monthly performance review covering revenue gained and hours saved - with clear actions, not just observations.",
    extra: "Three tiers: Operate · Scale · Transform\n\nSystems compound over time. Month 12 performance is structurally better than Month 1.",
    diagnosticLink: false,
  },
];

export function WorkflowSection() {
  const { openSidebar } = useSidebar();

  return (
    <section id="how-we-work" className="section-pad py-16 md:py-20 bg-gray-50 dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>How We Work</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              How We Work
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              From First Conversation to Running System.
              <br />Not a Proposal. Not a Pilot.
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0 mb-12">
          {steps.map((item, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-8 lg:py-10 border-t border-gray-100 dark:border-white/[0.06]">

              {/* Step number + title */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-syne font-black text-gray-200 dark:text-white/25 text-3xl leading-none select-none">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-syne font-bold text-gray-900 dark:text-white text-xl">{item.title}</h3>
                    <span className="inline-block mt-1.5 font-jakarta text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-white/55 border border-gray-200 dark:border-white/[0.07]">
                      {item.timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
                {item.diagnosticLink && (
                  <a href="/how-we-work/engagements/diagnostic/" className="font-jakarta text-sm text-[#027C88] underline hover:no-underline transition-all mt-3 inline-block">
                    Start with a Diagnostic &rarr;
                  </a>
                )}
              </div>

              {/* Outcome */}
              <div className="lg:col-span-4">
                <div className="border-l-2 border-[#027C88]/20 pl-4">
                  <p className="font-jakarta text-[11px] font-bold text-[#027C88] tracking-wider uppercase mb-2">
                    What you get
                  </p>
                  <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                    {item.outcome}
                  </p>
                  {item.extra && (
                    <div className="mt-3 space-y-2">
                      {item.extra.split("\n\n").map((line, li) => (
                        <p key={li} className="font-jakarta text-gray-500 dark:text-white/45 text-xs leading-relaxed italic">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
    </section>
  );
}
