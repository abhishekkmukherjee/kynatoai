import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    timeline: "5–7 business days",
    desc: "We map your business against two filters: where is revenue leaking, and where are hours being wasted? A specific gap analysis — not a generic audit template — against your actual operations, stack, and competitive position.",
    outcome: "A prioritised system blueprint showing exactly which capability would generate the highest return for your specific business.",
  },
  {
    step: "02",
    title: "Design",
    timeline: "Concurrent with scoping. Delivered before contract sign.",
    desc: "We architect the full system — Search & AI Visibility structure, lead pipeline design, automation workflow blueprints, Knowledge AI layer — all connected.",
    outcome: "A complete system architecture document with integration map, tooling decisions, and go-live timeline. You see the full shape of the engagement before a single contract is signed.",
  },
  {
    step: "03",
    title: "Deploy",
    timeline: "4–8 weeks",
    desc: "We build, integrate, and go live. Not a proof of concept. Not a pilot. A running system — integrated into your existing stack, instrumented from day one, tested against real conditions before handover.",
    outcome: "A live, operating system with full visibility dashboards, owner documentation, and a handover briefing.",
  },
  {
    step: "04",
    title: "Operate and Compound",
    timeline: "Ongoing. Reviewed quarterly.",
    desc: "Kynato runs what it builds. We monitor performance, optimise monthly, feed learnings across systems, and report in plain language every cycle.",
    outcome: "A monthly performance review covering revenue gained and hours saved — with clear actions, not just observations.",
  },
];

export function WorkflowSection() {
  return (
    <section id="how-we-work" className="section-dark py-28 md:py-36 bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ HOW WE WORK ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-7">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              How We Work
            </span>
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              From First Conversation to Running System.
              <br />Not a Proposal. Not a Pilot.
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0 mb-10 md:mb-16">
          {steps.map((item, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-7 lg:py-10 border-t border-white/[0.06]">

              {/* Step number + title */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-syne font-black text-[#00FF88]/25 text-3xl leading-none select-none">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-syne font-bold text-white text-xl">{item.title}</h3>
                    <span className="inline-block mt-1.5 font-jakarta text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-white/[0.08] text-white/30">
                      {item.timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="font-jakarta text-white/45 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Outcome */}
              <div className="lg:col-span-4">
                <div className="border-l border-[#00FF88]/20 pl-4">
                  <p className="font-jakarta text-[11px] font-bold text-[#00FF88]/50 tracking-[0.12em] uppercase mb-2">
                    What you get
                  </p>
                  <p className="font-jakarta text-white/40 text-sm leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-8 border border-[#00FF88]/50 rounded-xl font-jakarta text-sm font-semibold text-white hover:bg-[#00FF88] hover:text-black hover:border-[#00FF88] transition-all duration-300"
          style={{ height: "3.25rem" }}
        >
          Talk to Our Team
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
