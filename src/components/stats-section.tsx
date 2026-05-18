"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const statsData = [
  { value: "70%", desc: "Reduction in client query resolution time for firms using Kynato Knowledge AI" },
  { value: "60%", desc: "Reduction in document collection time for operations teams on Kynato Agentic Automation" },
  { value: "3×", desc: "More referrals from satisfied clients within the first 90-day review cycle" },
];

export function StatsSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#027C88",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#027C88", "#006AF0", "#ffffff"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[2] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[1] },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[2] },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#09090B] relative overflow-hidden min-h-screen flex flex-col justify-center section-line-top">
      {/* Background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#027C88] opacity-[0.04] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#006AF0] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-5 font-roboto uppercase tracking-[0.25em] text-[11px] font-bold text-accent-teal"
        >
          Outcomes That Compound
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-urbanist font-black text-4xl md:text-5xl lg:text-6xl text-white mb-20 tracking-[-0.025em] leading-tight"
        >
          Revenue Gained or Hours Saved.<br />
          <span className="gradient-text-teal">Here&apos;s What That Looks Like.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="group relative px-8 py-10 text-center"
              style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div className="font-urbanist font-black text-7xl md:text-8xl gradient-text-teal mb-5 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent-teal/40 to-accent-blue/40 mx-auto mb-6 group-hover:w-20 transition-all duration-500" />
              <p className="text-white/40 text-base leading-relaxed font-roboto px-4 group-hover:text-white/55 transition-colors duration-500">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
        >
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-accent-teal/60 to-transparent" />
          <p className="text-white/30 font-roboto text-xs uppercase tracking-[0.2em]">
            Every number above is measured. None is estimated. We instrument every system from day one.
          </p>
        </motion.div>
      </div>

      <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#09090B] z-10" />
      <div className="absolute w-full -bottom-40 md:-bottom-80 h-[40rem] md:h-[60rem] z-0 opacity-80 mix-blend-screen pointer-events-none">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </section>
  );
}
