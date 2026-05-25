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
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section rule */}
        <div className="section-rule mb-14">
          <span>Who We Work With</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <p className="font-jakarta text-sm font-semibold text-[#027C88] mb-3">
              Who We Work With
            </p>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built for Businesses That Intend to Lead Their Categories.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-jakarta text-gray-700 dark:text-white/70 text-base leading-relaxed">
              Kynato works with founders, startups, growth teams, and operations leaders
              who have decided that AI is infrastructure — not an experiment to observe from a distance.
            </p>
          </div>
        </div>

        {/* Persona cards — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 md:mb-14">
          {personas.map((p) => (
            <div key={p.number} className="kyn-card p-8 relative overflow-hidden">
              <span className="kyn-badge mb-4 inline-block">Persona {p.number}</span>

              <h3 className="font-syne font-bold text-gray-900 dark:text-white text-xl mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="font-syne font-semibold text-gray-600 dark:text-white/70 text-base mb-4 italic">
                {p.hook}
              </p>
              <p className="font-jakarta text-gray-700 dark:text-white/60 text-sm leading-relaxed mb-5">
                {p.body}
              </p>

              <div className="mb-5">
                <p className="font-jakarta text-[10px] font-bold tracking-wider uppercase text-[#027C88] mb-2">
                  What Kynato builds for you
                </p>
                <p className="font-jakarta text-gray-700 dark:text-white/60 text-sm leading-relaxed">{p.builds}</p>
              </div>

              <div className="kyn-inner-card p-4">
                <p className="font-jakarta text-[10px] font-bold text-gray-600 dark:text-white/45 tracking-wider uppercase mb-1.5">
                  You recognise yourself here if:
                </p>
                <p className="font-jakarta text-gray-700 dark:text-white/60 text-sm leading-relaxed">{p.recognition}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2.5 px-7 h-12 bg-[#027C88] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#026070] transition-colors duration-200"
        >
          Tell Us About Your Business
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
