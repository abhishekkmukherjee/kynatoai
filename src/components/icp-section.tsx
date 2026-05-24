import Link from "next/link";
import { ArrowRight } from "lucide-react";

const personas = [
  {
    number: "01",
    title: "Startups and Early-Stage Founders",
    hook: "You are building fast and every hire counts.",
    body: "You need systems that give you the leverage of a team three times your size — organic discoverability from day one, a lead generation engine that does not require a full sales team, operations that scale without headcount, and a content engine that publishes without a full content team.",
    builds: "SEO and AI Visibility foundation. Lead generation and nurturing engine. Knowledge AI to onboard and support customers at scale. Content Production Automation to keep your brand publishing. Built to grow with you — not to be replaced when you do.",
    recognition: "Pre-Series A or early Series A. Product-market fit confirmed. Manual chaos is the ceiling. You have looked at tools but nothing connects the full picture.",
  },
  {
    number: "02",
    title: "Growth Teams at Scaling Businesses",
    hook: "You have traction. Now you need it to compound.",
    body: "Manual processes are the ceiling. Your competitors are running AI-powered systems. The keyword gap is widening. Leads arrive but conversion rates are flat. Your team is stretched.",
    builds: "Unified analytics. Agentic workflow automation. GEO and AEO to defend and expand category position in both Google and AI search. Competitive Intelligence to monitor what competitors are doing in real time. Systems that make your existing team measurably more effective.",
    recognition: "Series A or B. Growth is real but not compounding. You have tried point solutions and ended up with a disjointed stack.",
  },
  {
    number: "03",
    title: "Mid-Market Businesses and Operations Leaders",
    hook: "Operations are complex, data is siloed, and your team spends too much time on work that should be automated.",
    body: "You have been told AI is the answer. But every vendor shows a demo and hands you software to manage yourself.",
    builds: "Specific workflow automations — document collection, CRM updates, compliance reminders, invoice automation, RPA for legacy systems — deployed in weeks. A Knowledge AI layer so your team stops reinventing answers. Predictive Analytics so you see what is coming, not just what happened.",
    recognition: "20–200 employees. Operations are people-heavy. Profitable but margin is being consumed by repetitive work.",
  },
  {
    number: "04",
    title: "Industry-Specific: CA Firms, Clinics, Legal Teams",
    hook: "Your industry has compliance, documentation, and knowledge requirements that generic tools do not address.",
    body: "GST document collection. ICAI circular monitoring. Patient intake flows via Voice AI Triage Bots. Legal precedent search. These are not features that come with any off-the-shelf Western SaaS product.",
    builds: "Domain-specific AI — designed around your actual workflows, regulatory requirements, and communication patterns. In Hindi and English. Via WhatsApp as well as web. Built to handle the edge cases your industry throws at every system.",
    recognition: "A CA principal with 5–20 staff. A clinic or hospital with OPD workflows. A legal team where precedent search is manual and slow.",
  },
];

export function IcpSection() {
  return (
    <section className="section-dark py-28 md:py-36 bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span className="font-jakarta text-[10px] font-bold tracking-[0.35em] uppercase text-white/25 shrink-0">
            [ WHO WE WORK WITH ]
          </span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-5">
            <span className="font-jakarta text-[10px] font-bold text-[#00FF88]/70 tracking-[0.3em] uppercase block mb-4">
              Who We Work With
            </span>
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built for Businesses That Intend to Lead Their Categories.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-jakarta text-white/40 text-base leading-relaxed">
              Kynato works with founders, startups, growth teams, and operations leaders
              who have decided that AI is infrastructure — not an experiment to observe from a distance.
            </p>
          </div>
        </div>

        {/* Persona cards — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-14">
          {personas.map((p) => (
            <div
              key={p.number}
              className="border border-white/[0.08] bg-white/[0.03] rounded-2xl p-8 hover:border-white/[0.14] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Number watermark */}
              <span
                className="absolute -right-2 -top-2 font-syne font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "6rem", color: "rgba(0,255,136,0.04)" }}
              >
                {p.number}
              </span>

              <span className="inline-block mb-4 font-jakarta text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#00FF88]/20 text-[#00FF88]/50">
                Persona {p.number}
              </span>

              <h3 className="font-syne font-bold text-white text-xl mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="font-syne font-semibold text-white/60 text-base mb-4 italic">
                {p.hook}
              </p>
              <p className="font-jakarta text-white/35 text-sm leading-relaxed mb-5">
                {p.body}
              </p>

              <div className="mb-5">
                <p className="font-jakarta text-[10px] font-bold tracking-[0.18em] uppercase text-[#00FF88]/50 mb-2">
                  What Kynato builds for you
                </p>
                <p className="font-jakarta text-white/35 text-sm leading-relaxed">{p.builds}</p>
              </div>

              <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
                <p className="font-jakarta text-[10px] font-bold text-white/20 tracking-[0.12em] uppercase mb-1.5">
                  You recognise yourself here if:
                </p>
                <p className="font-jakarta text-white/35 text-sm leading-relaxed">{p.recognition}</p>
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
          Tell Us About Your Business
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
