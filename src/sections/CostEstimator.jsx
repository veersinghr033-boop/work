import { useState, useMemo } from "react";

const workTypes = [
  {
    id: "ss-glass-railing",
    name: "SS Glass Railing",
    unit: "RFT (Running Feet)",
    defaultQty: 30,
    minQty: 10,
    maxQty: 200,
    baseRate304: 1650,
    baseRate316: 2200,
    baseRate202: 1250,
    description: "12mm Toughened Glass with SS 304/316 Spigots or Continuous Base Profile & Top Handrail.",
    popular: true,
  },
  {
    id: "ss-pipe-railing",
    name: "SS Balcony & Stair Railing",
    unit: "RFT (Running Feet)",
    defaultQty: 40,
    minQty: 10,
    maxQty: 300,
    baseRate304: 1100,
    baseRate316: 1550,
    baseRate202: 750,
    description: "Classic multi-pipe baluster railing with 2-inch master post and horizontal safety pipes.",
    popular: false,
  },
  {
    id: "ss-main-gate",
    name: "Designer Main Entrance Gate",
    unit: "SQFT (Square Feet)",
    defaultQty: 75,
    minQty: 30,
    maxQty: 300,
    baseRate304: 1450,
    baseRate316: 1950,
    baseRate202: 950,
    description: "Heavy structural SS frame with laser-cut CNC sheets, teakwood inserts, or decorative tubes.",
    popular: true,
  },
  {
    id: "ss-window-grill",
    name: "SS Safety Window Grill",
    unit: "SQFT (Square Feet)",
    defaultQty: 50,
    minQty: 15,
    maxQty: 250,
    baseRate304: 680,
    baseRate316: 920,
    baseRate202: 450,
    description: "Anti-burglary solid or hollow SS rods with clean TIG welded junction joints and flush wall mounts.",
    popular: false,
  },
  {
    id: "ss-spiral-staircase",
    name: "Custom SS Spiral / Floating Stairs",
    unit: "Step Units",
    defaultQty: 16,
    minQty: 8,
    maxQty: 40,
    baseRate304: 4500,
    baseRate316: 6200,
    baseRate202: 3200,
    description: "Architectural central spine or stringer staircase with laser cut treads and integrated railings.",
    popular: false,
  },
];

const steelGrades = [
  {
    id: "304",
    name: "SS 304 Grade",
    tag: "Most Recommended",
    desc: "18% Chrome + 8% Nickel. Superior rust resistance for outdoor balconies and exterior gates.",
    multiplier: 1.0,
  },
  {
    id: "316",
    name: "SS 316 Marine Grade",
    tag: "Maximum Durability",
    desc: "Includes Molybdenum for coastal, humid, or chemical industrial environments.",
    multiplier: 1.35,
  },
  {
    id: "202",
    name: "SS 202 Grade",
    tag: "Budget / Indoor",
    desc: "Manganese substituted. Best suited for interior covered stairs, indoor handrails & budget projects.",
    multiplier: 0.7,
  },
];

const finishOptions = [
  { id: "mirror", name: "High Gloss Mirror Polish", extraRate: 0, tag: "Standard" },
  { id: "satin", name: "Satin / Brushed Hairline", extraRate: 60, tag: "Modern Matte" },
  { id: "pvd-gold", name: "PVD Titanium Gold / Rose Gold", extraRate: 450, tag: "Luxury Finish" },
  { id: "pvd-black", name: "PVD Matte Black", extraRate: 400, tag: "Architectural" },
];

function CostEstimator({ onShowToast }) {
  const [selectedType, setSelectedType] = useState(workTypes[0]);
  const [selectedGrade, setSelectedGrade] = useState(steelGrades[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishOptions[0]);
  const [quantity, setQuantity] = useState(workTypes[0].defaultQty);
  
  // Add-ons
  const [hasToughenedGlass, setHasToughenedGlass] = useState(false);
  const [hasWoodenHandrail, setHasWoodenHandrail] = useState(false);
  const [hasLaserCutPattern, setHasLaserCutPattern] = useState(false);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setQuantity(type.defaultQty);
  };

  const calculation = useMemo(() => {
    let baseRate = selectedType.baseRate304;
    if (selectedGrade.id === "316") baseRate = selectedType.baseRate316;
    if (selectedGrade.id === "202") baseRate = selectedType.baseRate202;

    let unitRate = baseRate + selectedFinish.extraRate;

    if (hasToughenedGlass) unitRate += 350;
    if (hasWoodenHandrail) unitRate += 280;
    if (hasLaserCutPattern) unitRate += 220;

    const totalEstimated = Math.round(unitRate * quantity);
    const lowRange = Math.round(totalEstimated * 0.95);
    const highRange = Math.round(totalEstimated * 1.08);

    return {
      unitRate,
      lowRange,
      highRange,
      approxTotal: totalEstimated,
    };
  }, [
    selectedType,
    selectedGrade,
    selectedFinish,
    quantity,
    hasToughenedGlass,
    hasWoodenHandrail,
    hasLaserCutPattern,
  ]);

  const handleSendWhatsApp = () => {
    const message = `*Ramdev Steel - Quotation Request*%0A%0A` +
      `*Work Type:* ${selectedType.name}%0A` +
      `*Steel Grade:* ${selectedGrade.name}%0A` +
      `*Finish:* ${selectedFinish.name}%0A` +
      `*Quantity:* ${quantity} ${selectedType.unit}%0A` +
      (hasToughenedGlass ? `*Addon:* 12mm Toughened Glass%0A` : "") +
      (hasWoodenHandrail ? `*Addon:* Teakwood Top Handrail%0A` : "") +
      (hasLaserCutPattern ? `*Addon:* CNC Laser Cut Pattern%0A` : "") +
      `*Estimated Cost:* ₹${calculation.lowRange.toLocaleString()} - ₹${calculation.highRange.toLocaleString()}%0A%0A` +
      `Please provide the final quotation and site measurement schedule.`;

    window.open(`https://wa.me/919468815735?text=${message}`, "_blank");
  };

  const handleCopyQuote = () => {
    const text = `Ramdev Steel Fabrication Estimate:
Work: ${selectedType.name}
Grade: ${selectedGrade.name}
Finish: ${selectedFinish.name}
Size: ${quantity} ${selectedType.unit}
Est. Rate: ~₹${calculation.unitRate}/${selectedType.unit.split(" ")[0]}
Est. Total: ₹${calculation.lowRange.toLocaleString()} - ₹${calculation.highRange.toLocaleString()}
Call: +91 94688 15735`;

    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast("Estimate copied to clipboard!");
    }
  };

  return (
    <section id="calculator" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-y border-zinc-200">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
            <span>⚡ Interactive Estimation Tool</span>
          </div>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl">
            Instant Steel <span className="text-orange-600">Cost Estimator</span>
          </h2>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg">
            No guesswork. Select your fabrication requirement, grade, finish, and approximate length
            to see an instant ballpark budget.
          </p>
        </div>

        {/* Main Estimator Card */}
        <div className="mt-12 rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* Left Options Configurator */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Work Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Step 1: Choose Fabrication Type
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {workTypes.map((type) => {
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleTypeChange(type)}
                        className={`relative rounded-2xl border p-4 text-left transition-all ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/90 shadow-sm"
                            : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/60"
                        }`}
                      >
                        {type.popular && (
                          <span className="absolute right-3 top-3 rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-bold text-orange-800 uppercase">
                            Popular
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-zinc-900">{type.name}</h4>
                        <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{type.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: SS Grade */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Step 2: Choose Stainless Steel Grade
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {steelGrades.map((grade) => {
                    const isSelected = selectedGrade.id === grade.id;
                    return (
                      <button
                        key={grade.id}
                        type="button"
                        onClick={() => setSelectedGrade(grade)}
                        className={`rounded-2xl border p-3.5 text-left transition-all ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/90 shadow-sm"
                            : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/60"
                        }`}
                      >
                        <span className="text-sm font-bold text-zinc-900">{grade.name}</span>
                        <span className="mt-1 block text-[10px] font-bold text-orange-700">
                          {grade.tag}
                        </span>
                        <p className="mt-1 text-[11px] text-zinc-500 line-clamp-2">{grade.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Finish */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Step 3: Surface Finish & Coating
                </label>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {finishOptions.map((finish) => {
                    const isSelected = selectedFinish.id === finish.id;
                    return (
                      <button
                        key={finish.id}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`flex items-center justify-between rounded-2xl border p-3.5 text-left transition-all ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/90 shadow-sm"
                            : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/60"
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-zinc-900">{finish.name}</p>
                          <p className="text-[10px] text-zinc-500">{finish.tag}</p>
                        </div>
                        {finish.extraRate > 0 && (
                          <span className="text-[11px] font-bold text-orange-600">
                            +₹{finish.extraRate}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Dimensions Slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    Step 4: Approximate Dimension ({selectedType.unit})
                  </label>
                  <span className="text-sm font-black text-orange-600">
                    {quantity} {selectedType.unit.split(" ")[0]}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="range"
                    min={selectedType.minQty}
                    max={selectedType.maxQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-orange-500"
                  />
                  <input
                    type="number"
                    min={selectedType.minQty}
                    max={selectedType.maxQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-20 rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-center text-sm font-bold text-zinc-900 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Step 5: Optional Add-ons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Optional Add-Ons & Enhancements
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => setHasToughenedGlass(!hasToughenedGlass)}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                      hasToughenedGlass
                        ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    + 12mm Toughened Glass
                  </button>

                  <button
                    type="button"
                    onClick={() => setHasWoodenHandrail(!hasWoodenHandrail)}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                      hasWoodenHandrail
                        ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    + Teakwood Handrail Grip
                  </button>

                  <button
                    type="button"
                    onClick={() => setHasLaserCutPattern(!hasLaserCutPattern)}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                      hasLaserCutPattern
                        ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                    }`}
                  >
                    + CNC Laser Cut Design
                  </button>
                </div>
              </div>

            </div>

            {/* Right Live Estimate Summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50/90 via-white to-white p-6 sm:p-8 shadow-lg">
                
                <div className="flex items-center justify-between border-b border-orange-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Live Estimate Summary
                  </span>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700">
                    Calculated
                  </span>
                </div>

                {/* Big Price Display */}
                <div className="mt-6 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Estimated Budget Range
                  </span>
                  <div className="mt-2 text-3xl font-black text-zinc-950 sm:text-4xl">
                    ₹{calculation.lowRange.toLocaleString()} - ₹{calculation.highRange.toLocaleString()}
                  </div>
                  <p className="mt-1 text-xs text-orange-700 font-bold">
                    ~ ₹{calculation.unitRate.toLocaleString()} per {selectedType.unit.split(" ")[0]} (all inclusive)
                  </p>
                </div>

                {/* Specs List */}
                <div className="mt-6 space-y-2 rounded-2xl border border-zinc-200/90 bg-white p-4 text-xs shadow-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Design Type:</span>
                    <span className="font-bold text-zinc-900">{selectedType.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Steel Grade:</span>
                    <span className="font-bold text-orange-600">{selectedGrade.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Surface Finish:</span>
                    <span className="font-bold text-zinc-900">{selectedFinish.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Quantity:</span>
                    <span className="font-bold text-zinc-900">{quantity} {selectedType.unit}</span>
                  </div>
                  {(hasToughenedGlass || hasWoodenHandrail || hasLaserCutPattern) && (
                    <div className="flex justify-between border-t border-zinc-100 pt-2 text-orange-700 font-semibold">
                      <span>Add-ons:</span>
                      <span>
                        {[
                          hasToughenedGlass && "Glass",
                          hasWoodenHandrail && "Wood",
                          hasLaserCutPattern && "CNC",
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </span>
                    </div>
                  )}
                </div>

                {/* What's included */}
                <div className="mt-5 space-y-1.5 text-[11px] text-zinc-600">
                  <p className="font-bold text-zinc-800">✅ Included in this estimate:</p>
                  <p>• Prime SS raw material & precision laser cutting</p>
                  <p>• High-strength Argon TIG welding with smooth grind</p>
                  <p>• Multi-stage surface polishing & buffing</p>
                  <p>• Complete site installation & hardware fasteners</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={handleSendWhatsApp}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-green-500/20 transition hover:bg-[#20ba59] active:scale-[0.98]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                    </svg>
                    Send Estimate to WhatsApp
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleCopyQuote}
                      className="rounded-xl border border-zinc-200 bg-white py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 shadow-sm"
                    >
                      📋 Copy Summary
                    </button>
                    <a
                      href="#contact"
                      className="flex items-center justify-center rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600 shadow-sm shadow-orange-500/20"
                    >
                      Book Free Site Visit
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-center text-[10px] text-zinc-500">
                  *Indicative estimate based on prevailing market raw steel rates. Exact quote provided upon site inspection.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CostEstimator;
