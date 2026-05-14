"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const steps = [
  { step: "01", title: "Diagnose", desc: "We map your business against two filters: where is revenue leaking, and where are hours being wasted? A specific gap analysis against your actual operations.", timeline: "5–7 business days" },
  { step: "02", title: "Design", desc: "We architect the full system — SEO structure, lead pipeline design, automation blueprints, knowledge AI layer — all connected. You see the blueprint before we build.", timeline: "Before contract sign" },
  { step: "03", title: "Deploy", desc: "We build, integrate, and go live. Not a proof of concept. A running system, integrated into your existing stack, instrumented from day one.", timeline: "4–8 weeks" },
  { step: "04", title: "Operate and Compound", desc: "We don't leave after go-live. Kynato runs what it builds — monitoring performance, optimising monthly, and reporting in plain language.", timeline: "Ongoing" },
];

export function WorkflowSection() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 font-roboto uppercase tracking-widest text-sm font-semibold text-accent-teal"
          >
            HOW WE WORK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            From Diagnosis to Running System —<br />
            Not a Slideshow. Not a Demo.
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          <div className="space-y-16">
            {steps.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                {/* Number Circle */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-white/10 text-white font-urbanist font-bold text-lg z-10 group-hover:border-accent-teal group-hover:text-accent-teal transition-colors duration-500">
                  {item.step}
                </div>

                {/* Content Box (Left or Right) */}
                <div className={`w-full pl-20 md:pl-0 md:w-[calc(50%-4rem)] ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:ml-auto md:pl-16"}`}>
                  <div className="bg-[#09090B] border border-white/5 p-8 rounded-2xl group-hover:border-accent-teal/30 transition-colors duration-500 hover:shadow-2xl hover:shadow-accent-teal/5">
                    <h3 className="font-urbanist font-bold text-2xl text-white mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed font-roboto">{item.desc}</p>
                    <span className="inline-flex items-center text-xs font-semibold text-accent-teal bg-accent-teal/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Timeline: {item.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="bg-[#006AF0] text-white flex items-center justify-center space-x-2 text-lg px-10 h-16 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,106,240,0.5)]"
          >
            <span>Start with a 30-Minute Strategy Call</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
