import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    desc: "We map your business against two filters: where is revenue leaking, and where are hours being wasted? A specific gap analysis against your actual operations.",
    timeline: "5–7 business days",
    accentColor: "#027C88",
  },
  {
    step: "02",
    title: "Design",
    desc: "We architect the full system — SEO structure, lead pipeline design, automation blueprints, knowledge AI layer — all connected. You see the blueprint before we build.",
    timeline: "Before contract sign",
    accentColor: "#006AF0",
  },
  {
    step: "03",
    title: "Deploy",
    desc: "We build, integrate, and go live. Not a proof of concept. A running system, integrated into your existing stack, instrumented from day one.",
    timeline: "4–8 weeks",
    accentColor: "#027C88",
  },
  {
    step: "04",
    title: "Operate and Compound",
    desc: "We don't leave after go-live. Kynato runs what it builds — monitoring performance, optimising monthly, and reporting in plain language.",
    timeline: "Ongoing",
    accentColor: "#006AF0",
  },
];

export function WorkflowSection() {
  return (
    <section id="how-we-work" className="py-28 md:py-36 bg-black relative overflow-hidden section-line-top">

      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#006AF0]/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase">
            How We Work
          </span>
          <h2 className="font-urbanist font-black text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.025em] text-white max-w-3xl mx-auto">
            From Diagnosis to Running System —{" "}
            <span className="gradient-text-blue">Not a Slideshow. Not a Demo.</span>
          </h2>
        </div>

        {/* Steps — with visual connector */}
        <div className="max-w-5xl mx-auto relative">

          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[3.5rem] left-0 right-0 h-px pointer-events-none overflow-hidden">
            <div
              className="h-full w-full"
              style={{ background: "linear-gradient(90deg, rgba(2,124,136,0.4) 0%, rgba(0,106,240,0.4) 33%, rgba(2,124,136,0.4) 66%, rgba(0,106,240,0.4) 100%)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((item, i) => (
              <div
                key={i}
                className="group relative premium-card rounded-2xl p-7 overflow-hidden"
              >
                {/* Top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}60, transparent)` }}
                />

                {/* Step number background */}
                <div className="absolute -right-3 -bottom-3 font-urbanist font-black text-[6rem] leading-none text-white/[0.015] select-none pointer-events-none">
                  {item.step}
                </div>

                {/* Step indicator with connector dot */}
                <div className="relative mb-6">
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border group-hover:scale-110 transition-transform duration-300"
                    style={{
                      color: item.accentColor,
                      borderColor: `${item.accentColor}28`,
                      background: `${item.accentColor}0c`,
                    }}
                  >
                    {item.step}
                    {/* Connector dot above */}
                    <div
                      className="absolute -top-[1.75rem] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full hidden md:block"
                      style={{ background: item.accentColor, boxShadow: `0 0 8px ${item.accentColor}80` }}
                    />
                  </div>
                </div>

                {/* Timeline pill */}
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full border mb-5"
                  style={{
                    color: item.accentColor,
                    borderColor: `${item.accentColor}20`,
                    background: `${item.accentColor}08`,
                  }}
                >
                  {item.timeline}
                </span>

                <h3 className="font-urbanist font-black text-xl text-white mb-3">{item.title}</h3>
                <p className="font-roboto text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/strategy">
            <HoverBorderGradient
              containerClassName="rounded-xl inline-flex"
              as="span"
              className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-8 h-12 shadow-[0_0_35px_rgba(0,106,240,0.35)] hover:shadow-[0_0_60px_rgba(0,106,240,0.55)] transition-shadow duration-300"
            >
              Start with a 30-Minute Strategy Call <ArrowRight className="h-4 w-4" />
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}
