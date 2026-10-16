import { useState } from "react";

const gradeComparison = [
  {
    grade: "SS 304",
    title: "Architectural & Balcony Standard",
    alloy: "18% Chromium, 8% Nickel (18/8 Steel)",
    rustResistance: "⭐⭐⭐⭐⭐ (Exceptional)",
    suitability: "Outdoor Balconies, Main Gates, Stairs, Commercial Railings",
    weatherProof: "100% Rust-proof in all normal outdoor weather",
    costRating: "Balanced Value & High Durability",
    recommendation: "Our #1 choice for home & building exteriors. Maintenance-free for decades.",
    isPopular: true,
  },
  {
    grade: "SS 316",
    title: "Marine & Chemical Grade",
    alloy: "16% Chromium, 10% Nickel + 2% Molybdenum",
    rustResistance: "⭐⭐⭐⭐⭐+ (Maximum Available)",
    suitability: "Coastal regions, Swimming pools, Chemical & Food Pharma plants",
    weatherProof: "Immune to saltwater chloride pitting and harsh industrial fumes",
    costRating: "Premium Investment (+30-40% over 304)",
    recommendation: "Essential if located near water bodies, factories, or extreme exposure.",
    isPopular: false,
  },
  {
    grade: "SS 202",
    title: "Economical Interior Grade",
    alloy: "14-16% Chromium, 1-2% Nickel (Manganese added)",
    rustResistance: "⭐⭐⭐ (Moderate)",
    suitability: "Covered indoor staircases, dry interior partitions, temporary fitouts",
    weatherProof: "Not recommended for direct rain/exterior sunlight",
    costRating: "Cost-Effective Budget (-25-30% from 304)",
    recommendation: "Good for indoor dry use when budget is the top priority.",
    isPopular: false,
  },
];

const finishes = [
  {
    id: "mirror",
    name: "High-Gloss Mirror Polish (#8)",
    description: "Reflective chrome-like surface buffed to a lustrous shine. Easy to wipe clean and sheds dust effortlessly.",
    bestFor: "Staircase handrails, decorative gate pillars, luxury entryways.",
  },
  {
    id: "satin",
    name: "Satin / Hairline Brushed",
    description: "Directional fine grain texture with a non-glare, contemporary matte metallic appearance. Hides minor finger smudges.",
    bestFor: "Modern glass railings, minimalist architectural villas, corporate lobbies.",
  },
  {
    id: "pvd",
    name: "PVD Titanium Color Coating",
    description: "Physical Vapor Deposition coating giving permanent, scratch-resistant Royal Gold, Rose Gold, Champagne, or Matte Black.",
    bestFor: "Boutique hotel facades, luxury villa entrance gates, designer partitions.",
  },
];

const careTips = [
  {
    title: "Never Use Muriatic Acid / Harpic",
    tip: "Common toilet cleaners contain hydrochloric acid that destroys the chromium passive oxide layer. Use mild soapy water or glass cleaner instead.",
  },
  {
    title: "The Magnet Myth",
    tip: "Cold working (bending, pressing, cutting) can induce slight magnetic attraction in genuine SS 304. The true verification is molybdenum/nickel chemical acid drop test.",
  },
  {
    title: "Routine Dusting Keeps Shine",
    tip: "Wiping with a microfiber cloth once a month prevents fine desert dust accumulation and maintains factory mirror brilliance.",
  },
];

function MaterialGuide() {
  const [activeTab, setActiveTab] = useState("grades");

  return (
    <section id="materials" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>📚 Buyer's Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl">
              Steel Grade & <span className="text-orange-600">Finish Guide</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            We believe an informed customer makes the best choices. Understand the critical
            differences between SS 304, SS 316, and SS 202 to protect your architectural investment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex gap-3 border-b border-zinc-200 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab("grades")}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition shadow-sm ${
              activeTab === "grades"
                ? "bg-orange-500 text-white shadow-orange-500/20"
                : "bg-white border border-zinc-200 text-zinc-700 hover:text-orange-600 hover:border-orange-300"
            }`}
          >
            SS Grades Comparison (304 vs 316 vs 202)
          </button>
          <button
            onClick={() => setActiveTab("finishes")}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition shadow-sm ${
              activeTab === "finishes"
                ? "bg-orange-500 text-white shadow-orange-500/20"
                : "bg-white border border-zinc-200 text-zinc-700 hover:text-orange-600 hover:border-orange-300"
            }`}
          >
            Surface Finishes & Textures
          </button>
          <button
            onClick={() => setActiveTab("tips")}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition shadow-sm ${
              activeTab === "tips"
                ? "bg-orange-500 text-white shadow-orange-500/20"
                : "bg-white border border-zinc-200 text-zinc-700 hover:text-orange-600 hover:border-orange-300"
            }`}
          >
            Maintenance & Quality Myths
          </button>
        </div>

        {/* Tab 1: Grades Comparison */}
        {activeTab === "grades" && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {gradeComparison.map((item) => (
              <div
                key={item.grade}
                className={`relative rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition duration-300 ${
                  item.isPopular
                    ? "border-orange-400 bg-gradient-to-b from-orange-50/80 via-white to-white shadow-lg"
                    : "border-zinc-200/90 bg-white shadow-sm hover:border-zinc-300"
                }`}
              >
                {item.isPopular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-zinc-950">{item.grade}</h3>
                    <span className="text-xs font-bold text-orange-700">{item.costRating}</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-zinc-700">{item.title}</p>

                  <div className="mt-6 space-y-3.5 border-t border-zinc-100 pt-5 text-xs">
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold">Chemical Alloy</span>
                      <p className="font-semibold text-zinc-800 mt-0.5">{item.alloy}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold">Rust Resistance</span>
                      <p className="font-semibold text-zinc-800 mt-0.5">{item.rustResistance}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold">Weather Proofing</span>
                      <p className="font-semibold text-zinc-800 mt-0.5">{item.weatherProof}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold">Recommended For</span>
                      <p className="font-semibold text-zinc-700 mt-0.5">{item.suitability}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-3.5 text-xs text-zinc-600">
                  <span className="font-bold text-zinc-900">Fabricator Insight: </span>
                  {item.recommendation}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Finishes */}
        {activeTab === "finishes" && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {finishes.map((f, i) => (
              <div
                key={f.id}
                className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-sm hover:border-orange-400 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-600">0{i + 1}</span>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold text-zinc-600">Surface Spec</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-900">{f.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">{f.description}</p>
                <div className="mt-5 border-t border-zinc-100 pt-4 text-xs">
                  <span className="text-zinc-500 font-bold uppercase text-[10px]">Best Suited For:</span>
                  <p className="text-zinc-800 font-semibold mt-1">{f.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Care Tips */}
        {activeTab === "tips" && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {careTips.map((tip, i) => (
              <div
                key={i}
                className="rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-sm hover:border-orange-400 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700 font-bold">
                  💡
                </div>
                <h3 className="mt-4 text-base font-bold text-zinc-900">{tip.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default MaterialGuide;
