"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const personaOptions = [
  "Founder / Co-founder",
  "Startup (< 3 years)",
  "Growth-stage business",
  "Operations / Leadership",
  "Other",
];

export function ContactSidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const [submitted, setSubmitted] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-[#1A1D21] border border-white/10 rounded-[6px] px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#027C88] transition";

  const selectClass =
    "w-full bg-[#1A1D21] border border-white/10 rounded-[6px] px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#027C88] transition appearance-none cursor-pointer";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={closeSidebar}
          />

          {/* Sidebar */}
          <motion.aside
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 w-[400px] max-w-full h-full bg-[#111214] z-50 overflow-y-auto"
            style={{ padding: "28px 32px" }}
          >
            {/* Close button */}
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-[#027C88] hover:opacity-80 transition"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="mb-4">
              <p
                className="font-urbanist font-bold text-white tracking-[0.1em] text-base"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Talk to Our Team - Kynato
              </p>
              <p
                className="text-[#9CA3AF] text-[12px] mt-0.5"
                style={{ fontFamily: "var(--font-roboto-condensed)", fontWeight: 300 }}
              >
                We respond in next 30 mins.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#027C88] mb-4" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 size={36} className="text-[#027C88]" />
                <p
                  className="text-white mt-3 text-[16px]"
                  style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600 }}
                >
                  We have received your message.
                </p>
                <p className="text-[#9CA3AF] text-[13px] mt-2" style={{ fontFamily: "var(--font-roboto-condensed)" }}>
                  We respond within the next 30 mins during business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3"
                style={{ fontFamily: "var(--font-roboto-condensed)" }}
              >
                {/* Name */}
                <div>
                  <label
                    className="block text-white/70 text-[12px] mb-1"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    Name <span className="text-[#027C88]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label
                    className="block text-white/70 text-[12px] mb-1"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    Business Email <span className="text-[#027C88]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    placeholder="Business email preferred"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-white/70 text-[12px] mb-1"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                {/* Persona dropdown */}
                <div>
                  <label
                    className="block text-white/70 text-[12px] mb-1"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    I am a...
                  </label>
                  <div className="relative">
                    <select
                      className={selectClass}
                      value={selectedPersona}
                      onChange={(e) => setSelectedPersona(e.target.value)}
                      style={{ fontFamily: "var(--font-roboto-condensed)" }}
                    >
                      <option value="" disabled>Select your role</option>
                      {personaOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                      <span className="text-white/40 text-[10px]">▼</span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-white/70 text-[12px] mb-1"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    What are you looking to solve? <span className="text-[#027C88]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    className={inputClass}
                    placeholder="Describe your situation..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#006AF0] text-white rounded-lg py-2.5 text-sm font-bold transition"
                  style={{ fontFamily: "var(--font-roboto-condensed)" }}
                >
                  Send Message
                </motion.button>

                <p
                  className="text-[#4B5563] text-[11px] text-center mt-1"
                  style={{ fontFamily: "var(--font-roboto-condensed)", fontWeight: 300 }}
                >
                  We observe zero tolerance to spam. Do not worry your data is safe.
                </p>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
