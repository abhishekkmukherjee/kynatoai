import Link from "next/link";
import { ArrowRight } from "lucide-react";

const organicData = [
  { month: "M0", traditional: 100, aiReferred: 0 },
  { month: "M1", traditional: 105, aiReferred: 0 },
  { month: "M2", traditional: 118, aiReferred: 8 },
  { month: "M3", traditional: 140, aiReferred: 22 },
  { month: "M4", traditional: 168, aiReferred: 47 },
  { month: "M5", traditional: 198, aiReferred: 83 },
  { month: "M6", traditional: 231, aiReferred: 134 },
  { month: "M7", traditional: 264, aiReferred: 196 },
  { month: "M8", traditional: 295, aiReferred: 271 },
  { month: "M9", traditional: 322, aiReferred: 360 },
  { month: "M10", traditional: 348, aiReferred: 462 },
  { month: "M11", traditional: 371, aiReferred: 577 },
  { month: "M12", traditional: 392, aiReferred: 714 },
];

const pipelineData = [
  { stage: "Inbound Captured", before: 100, after: 100 },
  { stage: "Responded <5 Min", before: 18, after: 94 },
  { stage: "Qualified", before: 12, after: 61 },
  { stage: "Nurture Active", before: 8, after: 54 },
  { stage: "Booked Call", before: 3, after: 22 },
];

const citationData = [
  { engine: "ChatGPT", m1: 0, m6: 14 },
  { engine: "Perplexity", m1: 0, m6: 22 },
  { engine: "Gemini", m1: 1, m6: 11 },
  { engine: "Google AI Overviews", m1: 2, m6: 31 },
];

const hoursData = [
  { week: "W1", docCollection: 4, crmUpdates: 2, compliance: 1, invoice: 1 },
  { week: "W2", docCollection: 8, crmUpdates: 5, compliance: 3, invoice: 2 },
  { week: "W3", docCollection: 10, crmUpdates: 7, compliance: 5, invoice: 3 },
  { week: "W4", docCollection: 12, crmUpdates: 8, compliance: 6, invoice: 4 },
  { week: "W8", docCollection: 14, crmUpdates: 10, compliance: 7, invoice: 5 },
  { week: "W12", docCollection: 16, crmUpdates: 11, compliance: 8, invoice: 6 },
];

function LineChart({ data }: { data: typeof organicData }) {
  const W = 480, H = 200, PAD = { top: 16, right: 16, bottom: 32, left: 36 };
  const maxVal = Math.max(...data.map(d => Math.max(d.traditional, d.aiReferred)));
  const xs = data.map((_, i) => PAD.left + (i / (data.length - 1)) * (W - PAD.left - PAD.right));
  const y = (v: number) => PAD.top + (1 - v / maxVal) * (H - PAD.top - PAD.bottom);

  const tLine = data.map((d, i) => `${xs[i]},${y(d.traditional)}`).join(" ");
  const aLine = data.map((d, i) => `${xs[i]},${y(d.aiReferred)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const yv = PAD.top + (1 - t) * (H - PAD.top - PAD.bottom);
        return <line key={t} x1={PAD.left} x2={W - PAD.right} y1={yv} y2={yv} stroke="var(--chart-grid-line)" strokeWidth="1" />;
      })}
      <polyline points={tLine} fill="none" stroke="var(--chart-line-secondary)" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={aLine} fill="none" stroke="#027C88" strokeWidth="2" strokeLinejoin="round" />
      {data.filter((_, i) => i % 4 === 0).map((d, i) => {
        const idx = i * 4;
        return (
          <text key={d.month} x={xs[idx]} y={H - 6} textAnchor="middle" fill="var(--chart-axis-label)" fontSize="9" fontFamily="system-ui">
            {d.month}
          </text>
        );
      })}
    </svg>
  );
}

function BarChart({ data }: { data: typeof hoursData }) {
  const W = 480, H = 200, PAD = { top: 16, right: 16, bottom: 32, left: 36 };
  const barW = ((W - PAD.left - PAD.right) / data.length) * 0.65;
  const maxVal = Math.max(...data.map(d => d.docCollection + d.crmUpdates + d.compliance + d.invoice));
  const barHeight = (v: number) => (v / maxVal) * (H - PAD.top - PAD.bottom);
  const barX = (i: number) => PAD.left + (i / data.length) * (W - PAD.left - PAD.right) + ((1 - 0.65) / 2) * ((W - PAD.left - PAD.right) / data.length);
  const baseY = H - PAD.bottom;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {[0, 0.25, 0.5, 0.75, 1].map(t => {
        const yv = PAD.top + (1 - t) * (H - PAD.top - PAD.bottom);
        return <line key={t} x1={PAD.left} x2={W - PAD.right} y1={yv} y2={yv} stroke="var(--chart-grid-line)" strokeWidth="1" />;
      })}
      {data.map((d, i) => {
        const total = d.docCollection + d.crmUpdates + d.compliance + d.invoice;
        const h = barHeight(total);
        const x = barX(i);
        const segments = [
          { val: d.docCollection, color: "#027C88" },
          { val: d.crmUpdates, color: "rgba(2,124,136,0.55)" },
          { val: d.compliance, color: "rgba(2,124,136,0.3)" },
          { val: d.invoice, color: "rgba(2,124,136,0.15)" },
        ];
        let accH = 0;
        return (
          <g key={i}>
            {segments.map((seg, si) => {
              const sh = barHeight(seg.val);
              const ry = baseY - accH - sh;
              accH += sh;
              return <rect key={si} x={x} y={ry} width={barW} height={sh} fill={seg.color} rx="1" />;
            })}
            <text x={x + barW / 2} y={H - 6} textAnchor="middle" fill="var(--chart-axis-label)" fontSize="9" fontFamily="system-ui">
              {d.week}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function FunnelChart({ data }: { data: typeof pipelineData }) {
  return (
    <div className="space-y-2 py-2">
      {data.map((d, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-jakarta text-[12px] font-medium text-gray-700 dark:text-white/85">{d.stage}</span>
            <span className="font-jakarta text-[12px] font-bold text-[#027C88]">{d.after}%</span>
          </div>
          <div className="relative h-4 rounded overflow-hidden bg-gray-100 dark:bg-white/[0.06]">
            <div className="absolute inset-y-0 left-0 bg-gray-300 dark:bg-white/[0.12] rounded" style={{ width: `${d.before}%` }} />
            <div className="absolute inset-y-0 left-0 bg-[#027C88]/60 rounded" style={{ width: `${d.after}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CitationChart({ data }: { data: typeof citationData }) {
  const maxVal = Math.max(...data.map(d => d.m6));
  return (
    <div className="space-y-4 py-2">
      <div className="flex gap-4 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-gray-300 dark:bg-white/[0.15]" />
          <span className="font-jakarta text-[12px] font-medium text-gray-700 dark:text-white/85">Month 1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#027C88]/60" />
          <span className="font-jakarta text-[12px] font-medium text-gray-700 dark:text-white/85">Month 6</span>
        </div>
      </div>
      {data.map((d, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between">
            <span className="font-jakarta text-[12px] font-medium text-gray-700 dark:text-white/85">{d.engine}</span>
            <span className="font-jakarta text-[12px] font-bold text-[#027C88]">{d.m6} citations</span>
          </div>
          <div className="relative h-4 rounded overflow-hidden bg-gray-100 dark:bg-white/[0.06]">
            <div className="absolute inset-y-0 left-0 bg-gray-300 dark:bg-white/[0.15] rounded" style={{ width: `${(d.m1 / maxVal) * 100}%` }} />
            <div className="absolute inset-y-0 left-0 bg-[#027C88]/60 rounded" style={{ width: `${(d.m6 / maxVal) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ChartCard({ label, title, caption, children }: { label: string; title: string; caption: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] border border-gray-200 dark:border-white/[0.08] rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-white/[0.14] transition-all duration-300 shadow-sm dark:shadow-none">
      <div className="px-6 pt-6 pb-2">
        <p className="font-jakarta text-[11px] font-bold text-[#027C88] tracking-[0.2em] uppercase mb-1">{label}</p>
        <h4 className="font-syne font-bold text-gray-900 dark:text-white text-base mb-4">{title}</h4>
      </div>
      <div className="px-6">{children}</div>
      <div className="px-6 py-4">
        <p className="font-jakarta text-[13px] font-medium text-gray-600 dark:text-white/75 leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}

export function PerformanceGraphsSection() {
  return (
    <section className="section-pad py-24 md:py-32 bg-white dark:bg-[#0C0C0C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="section-rule mb-16">
          <span>Performance Data</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-5">
            <span className="font-jakarta text-[10px] font-semibold text-[#027C88] uppercase block mb-4">
              What the Numbers Look Like
            </span>
            <h2
              className="font-syne font-bold text-gray-900 dark:text-white leading-[1.08] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Systems That Compound.
              <br />The Graphs That Show It.
            </h2>
            <p className="font-jakarta text-gray-600 dark:text-white/70 text-base leading-relaxed">
              Every system Kynato builds is instrumented from day one. These graphs represent
              the shape of what compound results look like across our three core outcome categories.
              Representative data at launch — updated with real client metrics as engagements mature.
            </p>
          </div>
        </div>

        {/* Chart grid — always on dark cards for SVG readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <ChartCard
            label="ORGANIC VISIBILITY — COMPOUNDING OVER 12 MONTHS"
            title="Search & AI Traffic Growth"
            caption="Representative trajectory for a B2B business deploying SEO + GEO from month one. AI-referred traffic grows faster than traditional search as citation authority compounds."
          >
            <LineChart data={organicData} />
          </ChartCard>

          <ChartCard
            label="HOURS RECLAIMED — WEEKLY AUTOMATION IMPACT"
            title="Hours Saved Through Automation"
            caption="Hours reclaimed compound as edge cases are handled and agents are refined. Week 12 represents the stable operating baseline — not the ceiling."
          >
            <BarChart data={hoursData} />
          </ChartCard>

          <ChartCard
            label="LEAD PIPELINE — BEFORE VS AFTER SYSTEM DEPLOYMENT"
            title="Pipeline Conversion: Before & After"
            caption="The most significant gain is always at the first response stage. 94% of leads get a qualification response within 5 minutes. Previously: 18% — and that required someone to be available."
          >
            <FunnelChart data={pipelineData} />
          </ChartCard>

          <ChartCard
            label="AI CITATION SHARE OF VOICE — MONTH 1 vs MONTH 6"
            title="AI Citation Growth Across Engines"
            caption="GEO compounds. The first citation takes the longest. Each subsequent one arrives faster because citation authority is cumulative. Perplexity typically leads early. Google AI Overviews deliver the highest traffic impact."
          >
            <CitationChart data={citationData} />
          </ChartCard>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/[0.1] pt-8">
          <p className="font-jakarta text-[13px] font-medium text-gray-500 dark:text-white/75 max-w-lg">
            All charts use representative data at launch. Real client metrics replace these values as engagements mature and client permissions are received.
          </p>
        </div>
      </div>
    </section>
  );
}
