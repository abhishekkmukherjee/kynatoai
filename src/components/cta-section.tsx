"use client";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const roleOptions = [
  "Founder / Co-founder",
  "Startup (< 3 years)",
  "Growth-stage business",
  "Operations / Leadership",
  "Other",
];

export function CtaSection() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setSubmitted(false);
    }, 2500);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="closing-cta relative bg-gray-50 dark:bg-[#07070C] overflow-hidden">

        {/* Subtle accent */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#027C88]/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-white/[0.06]" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Section rule */}
          <div className="section-rule mb-14">
            <span>Let&apos;s Build</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">

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
                two filters — where is revenue leaking, and where are hours being wasted —
                and show you what a system built for your specific situation would look like.
              </p>
              <p className="font-jakarta text-gray-600 dark:text-white/70 text-base leading-relaxed mb-10">
                If there is a fit, a system blueprint follows.
                If there is not, you leave with an honest diagnosis that is useful regardless.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 h-12 bg-[#006AF0] text-white rounded-xl font-jakarta text-sm font-semibold hover:bg-[#0052C4] transition-colors duration-200"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => setSidebarOpen(true)}
                  className="inline-flex items-center justify-center px-7 h-12 border border-[#027C88]/40 rounded-xl font-jakarta text-sm font-medium text-gray-600 dark:text-white/65 hover:border-[#027C88] hover:text-gray-900 dark:hover:text-white/70 transition-all duration-200"
                >
                  Send a Message
                </button>
              </div>

              <p className="font-jakarta text-gray-600 dark:text-white/75 text-sm mb-10">
                Or write directly:{" "}
                <a href="mailto:hello@kynato.com" className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
                  hello@kynato.com
                </a>
                {" "}·{" "}
                <a href="https://wa.me/91" className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
                  WhatsApp available
                </a>
              </p>

              <p className="font-jakarta italic text-[#027C88] text-sm mb-2">
                &ldquo;Revenue gained or hours saved. Everything else is noise.&rdquo; — Kynato
              </p>
              <p className="font-jakarta text-gray-600 dark:text-white/70 text-sm">
                Built for outcomes. Not experiments.
              </p>
            </div>

            {/* Right stat block */}
            <div className="lg:col-span-5 lg:col-start-8 flex items-center">
              <div className="border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.03] rounded-2xl p-8 w-full">
                <p className="font-jakarta text-[10px] font-bold tracking-wider uppercase text-gray-500 dark:text-white/75 mb-6">
                  What a strategy conversation covers
                </p>
                <ul className="space-y-4">
                  {[
                    "Your current lead response speed and what it is costing you",
                    "Where your team spends time on work that AI should handle",
                    "Whether you are visible in ChatGPT, Perplexity, and Google AI Overviews",
                    "Which single system would deliver the highest return in the next 90 days",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-jakarta text-[11px] font-black text-[#027C88] tabular-nums shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-jakarta text-gray-600 dark:text-white/70 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/[0.06]">
                  <p className="font-jakarta text-gray-500 dark:text-white/70 text-[12px]">
                    No commitment. DPDP compliant. Responds within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSidebar}
        />

        {/* Sidebar panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full md:w-[440px] bg-white dark:bg-[#0C0C0C] border-l border-gray-100 dark:border-white/[0.08] overflow-y-auto transition-transform duration-500 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="p-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="font-syne font-black text-gray-900 dark:text-white text-xl tracking-tight">KYNATO</p>
                <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm mt-1">
                  Let&apos;s talk about your situation.
                </p>
              </div>
              <button
                onClick={closeSidebar}
                className="text-gray-600 dark:text-white/55 hover:text-gray-700 dark:hover:text-white transition-colors p-1 mt-0.5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-12 h-12 rounded-full border border-[#027C88]/30 bg-[#027C88]/[0.08] flex items-center justify-center mb-4">
                  <span className="text-[#027C88] text-xl">✓</span>
                </div>
                <p className="font-syne font-bold text-gray-900 dark:text-white text-lg mb-2">Message Sent</p>
                <p className="font-jakarta text-gray-700 dark:text-white/70 text-sm">
                  We&apos;ll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-jakarta text-[11px] font-bold text-gray-700 dark:text-white/70 tracking-widest uppercase block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 font-jakarta text-gray-900 dark:text-white text-sm placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#027C88]/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-jakarta text-[11px] font-bold text-gray-700 dark:text-white/70 tracking-widest uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 font-jakarta text-gray-900 dark:text-white text-sm placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#027C88]/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-jakarta text-[11px] font-bold text-gray-700 dark:text-white/70 tracking-widest uppercase block mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 font-jakarta text-gray-900 dark:text-white text-sm placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#027C88]/50 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="font-jakarta text-[11px] font-bold text-gray-700 dark:text-white/70 tracking-widest uppercase block mb-3">
                    I am a... *
                  </label>
                  <div className="space-y-2">
                    {roleOptions.map((role) => (
                      <label key={role} className="flex items-center gap-3 cursor-pointer group/role">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                            selectedRole === role
                              ? "border-[#027C88] bg-[#027C88]/10"
                              : "border-gray-300 dark:border-white/20 group-hover/role:border-[#027C88]/40"
                          }`}
                          onClick={() => setSelectedRole(role)}
                        >
                          {selectedRole === role && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#027C88]" />
                          )}
                        </div>
                        <span
                          className="font-jakarta text-sm text-gray-600 dark:text-white/65 group-hover/role:text-gray-900 dark:group-hover/role:text-white/70 transition-colors cursor-pointer"
                          onClick={() => setSelectedRole(role)}
                        >
                          {role}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* What to solve */}
                <div>
                  <label className="font-jakarta text-[11px] font-bold text-gray-700 dark:text-white/70 tracking-widest uppercase block mb-2">
                    What are you looking to solve? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 font-jakarta text-gray-900 dark:text-white text-sm placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#027C88]/50 transition-colors resize-none"
                    placeholder="leads, automation, AI visibility, knowledge..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#006AF0] hover:bg-[#0052C4] text-white font-jakarta text-sm font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>

                <p className="font-jakarta text-[11px] text-gray-600 dark:text-white/45 text-center">
                  No commitment. DPDP compliant. Responds within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
