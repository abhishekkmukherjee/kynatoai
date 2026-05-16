"use client";
import { motion } from "framer-motion";
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
    <section id="how-we-work" className="py-28 md:py-36 bg-black relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#006AF0]/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-[11px] font-bold text-accent-teal tracking-[0.2em] uppercase"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-black text-[clamp(2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white"
          >
            From Diagnosis to Running System —{" "}
            <span className="gradient-text-blue">Not a Slideshow. Not a Demo.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl p-7 glass-card glass-card-hover overflow-hidden"
            >
              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}60, transparent)` }}
              />

              {/* Step number background */}
              <div
                className="absolute -right-4 -bottom-4 font-urbanist font-black text-[7rem] leading-none text-white/[0.02] select-none pointer-events-none"
              >
                {item.step}
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black border"
                    style={{
                      color: item.accentColor,
                      borderColor: `${item.accentColor}30`,
                      background: `${item.accentColor}10`,
                    }}
                  >
                    {item.step}
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border"
                    style={{
                      color: item.accentColor,
                      borderColor: `${item.accentColor}25`,
                      background: `${item.accentColor}08`,
                    }}
                  >
                    {item.timeline}
                  </span>
                </div>

                <h3 className="font-urbanist font-black text-xl text-white mb-3">{item.title}</h3>
                <p className="font-roboto text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <HoverBorderGradient
            containerClassName="rounded-xl inline-flex"
            as="button"
            className="bg-[#006AF0] text-white flex items-center justify-center gap-2 text-sm font-semibold px-8 h-12 shadow-[0_0_30px_rgba(0,106,240,0.3)] hover:shadow-[0_0_50px_rgba(0,106,240,0.5)] transition-shadow"
          >
            Start with a 30-Minute Strategy Call <ArrowRight className="h-4 w-4" />
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
