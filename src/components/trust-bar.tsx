export function TrustBar() {
  const items = [
    "Build and Operate — Not Build and Leave",
    "Measured by Revenue Gained or Hours Saved",
    "India-Native. Built for How India Actually Works.",
  ];

  return (
    <div className="section-dark w-full bg-[#0E0E0E] border-y border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {items.map((item, i) => (
            <div key={i} className="px-4 sm:px-6 md:px-8 py-4 md:py-5 text-center">
              <span className="font-jakarta text-[12px] font-medium text-white/35 tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
