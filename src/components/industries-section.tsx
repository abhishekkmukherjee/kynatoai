const row1 = [
  { name: "Health Tech", status: "active" },
  { name: "Legal & Finance", status: "active" },
  { name: "B2B Operations", status: "active" },
  { name: "EdTech", status: "delivery" },
  { name: "AgriTech", status: "roadmap" },
  { name: "Fintech", status: "roadmap" },
  { name: "Health Tech", status: "active" },
  { name: "Legal & Finance", status: "active" },
  { name: "B2B Operations", status: "active" },
  { name: "EdTech", status: "delivery" },
];

const row2 = [
  { name: "CA Firms", status: "active" },
  { name: "Clinics & Hospitals", status: "active" },
  { name: "SaaS & Tech", status: "delivery" },
  { name: "Manufacturing", status: "roadmap" },
  { name: "D2C & Retail", status: "roadmap" },
  { name: "Real Estate", status: "roadmap" },
  { name: "CA Firms", status: "active" },
  { name: "Clinics & Hospitals", status: "active" },
  { name: "SaaS & Tech", status: "delivery" },
  { name: "Manufacturing", status: "roadmap" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "active") return (
    <span className="ml-2 text-[9px] font-bold text-[#027C88] uppercase tracking-wider">Active</span>
  );
  if (status === "delivery") return (
    <span className="ml-2 text-[9px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">In Delivery</span>
  );
  return (
    <span className="ml-2 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Roadmap</span>
  );
}

function TagRow({ items, direction }: { items: typeof row1; direction: "left" | "right" }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 py-2"
        style={{
          animation: `scroll ${direction === "left" ? "35s" : "40s"} linear infinite ${direction === "right" ? "reverse" : ""}`,
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center px-4 py-2.5 rounded-full border border-gray-200 dark:border-white/[0.1] bg-white dark:bg-white/[0.03] shrink-0"
          >
            <span className="font-jakarta text-[13px] font-semibold text-gray-700 dark:text-white/75">
              {item.name}
            </span>
            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section className="section-pad py-20 md:py-28 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-8">

        {/* Section rule */}
        <div className="section-rule mb-10">
          <span>Industries</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2
            className="font-syne font-black text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            AI Built for How India&apos;s Industries Actually Operate.
          </h2>
        </div>
      </div>

      {/* Scrolling tag rows */}
      <div className="space-y-3 mb-8">
        <TagRow items={row1} direction="left" />
        <TagRow items={row2} direction="right" />
      </div>
    </section>
  );
}
