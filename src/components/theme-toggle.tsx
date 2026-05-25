"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-[4.5rem] h-8 rounded-full border border-white/10 bg-white/[0.04]" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative inline-flex h-8 w-[4.5rem] items-center rounded-full border border-white/10 bg-white/[0.05] dark:bg-white/[0.05] dark:border-white/10 light:bg-black/[0.06] light:border-black/10 backdrop-blur-sm transition-all duration-300 hover:border-accent-teal/30 hover:bg-accent-teal/[0.06] group"
    >
      {/* Track */}
      <span
        className={`absolute inset-0.5 rounded-full transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-r from-[#027C88]/20 to-[#006AF0]/10"
            : "bg-gradient-to-r from-amber-400/10 to-orange-300/10"
        }`}
      />

      {/* Knob */}
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          isDark
            ? "translate-x-[2.1rem] bg-gradient-to-br from-[#027C88] to-[#006AF0] shadow-[0_0_12px_rgba(0,106,240,0.4)]"
            : "translate-x-0.5 bg-gradient-to-br from-amber-400 to-orange-400 shadow-[0_0_12px_rgba(251,191,36,0.4)]"
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-white" />
        ) : (
          <Sun className="h-3 w-3 text-white" />
        )}
      </span>

      {/* Label */}
      <span
        className={`absolute text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
          isDark
            ? "left-2 text-white/55 group-hover:text-white/65"
            : "right-2 text-black/30 group-hover:text-black/50"
        }`}
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  )
}
