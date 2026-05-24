"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const personaOptions = [
  "Founder / CEO",
  "Operations Leader",
  "Marketing Head",
  "Sales Leader",
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
    "w-full bg-[#1A1D21] border border-white/10 rounded-[6px] px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#027C88] transition";

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
            style={{ padding: "40px" }}
          >
            {/* Close button */}
            <button
              onClick={closeSidebar}
              className="absolute top-5 right-5 text-[#027C88] hover:opacity-80 transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div>
              <p
                className="font-urbanist font-bold text-white tracking-[0.1em]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                KYNATO
              </p>
              <p
                className="text-[#9CA3AF] text-[13px] mt-1"
                style={{ fontFamily: "var(--font-roboto-condensed)", fontWeight: 300 }}
              >
                Let&apos;s map the highest-return system for your business.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#027C88] mt-5 mb-6" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 size={40} className="text-[#027C88]" />
                <p
                  className="text-white mt-4 text-[18px]"
                  style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600 }}
                >
                  We&apos;ll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                style={{ fontFamily: "var(--font-roboto-condensed)" }}
              >
                {/* Name */}
                <div>
                  <label
                    className="block text-white/70 text-[13px] mb-1.5"
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

                {/* Email */}
                <div>
                  <label
                    className="block text-white/70 text-[13px] mb-1.5"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    Email <span className="text-[#027C88]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-white/70 text-[13px] mb-1.5"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                {/* Persona radio */}
                <div>
                  <label
                    className="block text-white/70 text-[13px] mb-2"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    I am a...
                  </label>
                  <div className="space-y-2">
                    {personaOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition ${
                            selectedPersona === opt
                              ? "border-[#027C88] bg-[#027C88]"
                              : "border-white/20 group-hover:border-[#027C88]"
                          }`}
                        >
                          {selectedPersona === opt && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </span>
                        <span
                          className="text-[13px] text-white/70"
                          style={{ fontFamily: "var(--font-roboto-condensed)" }}
                          onClick={() => setSelectedPersona(opt)}
                        >
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-white/70 text-[13px] mb-1.5"
                    style={{ fontFamily: "var(--font-roboto-condensed)" }}
                  >
                    What do you want to solve? <span className="text-[#027C88]">*</span>
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
                  className="w-full bg-[#006AF0] text-white rounded-lg py-3 text-base font-bold transition"
                  style={{ fontFamily: "var(--font-roboto-condensed)" }}
                >
                  Start the Conversation
                </motion.button>

                <p
                  className="text-[#4B5563] text-[11px] text-center mt-2"
                  style={{ fontFamily: "var(--font-roboto-condensed)", fontWeight: 300 }}
                >
                  No sales pressure. No long forms. Just a focused conversation.
                </p>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
