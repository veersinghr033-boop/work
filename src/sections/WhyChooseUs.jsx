const comparisons = [
  {
    feature: "Raw Material Grade",
    ramdev: "100% Genuine SS 304 & 316 Prime Pipes & Sheets with Material Test Certificate.",
    others: "Often mix cheap SS 202 or unbranded thin-gauge scrap pipes without testing.",
  },
  {
    feature: "Welding Technique",
    ramdev: "High-purity Argon TIG welding with full root penetration and smoothed weld seams.",
    others: "Rough manual stick welding prone to pinholes, slag entrapment, and premature rust.",
  },
  {
    feature: "Surface Polish & Buffing",
    ramdev: "5-Stage motorized buffing with high-grade compounds for long-lasting mirror/satin shine.",
    others: "Quick single-pass buffing that turns hazy and oxidizes after the first monsoon.",
  },
  {
    feature: "Fasteners & Anchors",
    ramdev: "Heavy-duty SS 304 anchor bolts and chemical grouting to eliminate vibration & wobble.",
    others: "Cheap zinc-plated iron screws that corrode inside the concrete and stain marble.",
  },
  {
    feature: "Measurement & Fitting",
    ramdev: "Laser-assisted leveling and millimetric site fabrication with floor protection.",
    others: "Rough manual tape estimation leading to crooked handrails and damaged floor tiles.",
  },
  {
    feature: "After-Sales & Warranty",
    ramdev: "Written workmanship & rust guarantee with prompt service support.",
    others: "Zero accountability once the final payment is collected.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🛡️ The Ramdev Advantage</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              Why Homeowners & <br />
              <span className="text-orange-600">Architects Trust Us.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Steelwork is a permanent architectural investment. Choosing low-quality fabrication leads
            to unsightly brown rust stains, loose wobbly railings, and safety hazards. Here is how we do things differently.
          </p>
        </div>

        {/* Comparison Section: Desktop Table vs Mobile Cards */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200 bg-zinc-50/90 px-6 py-5">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Quality Comparison Matrix</h3>
              <p className="text-xs text-zinc-500">See the real engineering difference behind Ramdev Steel</p>
            </div>
            <span className="mt-2 sm:mt-0 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 border border-orange-200">
              ✓ Verified Engineering Standards
            </span>
          </div>

          {/* Desktop Table (Visible on md and up) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/50 text-xs font-bold uppercase tracking-wider text-zinc-600">
                  <th className="py-4 px-6 w-1/4">Parameter</th>
                  <th className="py-4 px-6 w-5/12 text-orange-700 bg-orange-50/60 font-bold">
                    Ramdev Steel Industries
                  </th>
                  <th className="py-4 px-6 w-1/3 text-zinc-500">Unorganized Local Fabricators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {comparisons.map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-50/50 transition">
                    <td className="py-4 px-6 font-bold text-zinc-900">{row.feature}</td>
                    <td className="py-4 px-6 text-zinc-800 bg-orange-50/30 font-medium">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-base leading-none">✓</span>
                        <span>{row.ramdev}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-500">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold text-base leading-none">✕</span>
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards (Visible on screens < md) */}
          <div className="divide-y divide-zinc-200 p-4 sm:p-6 md:hidden space-y-4">
            {comparisons.map((row, index) => (
              <div key={index} className="pt-4 first:pt-0 space-y-2.5">
                <span className="inline-block rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-bold text-zinc-800 uppercase tracking-wider">
                  {row.feature}
                </span>

                {/* Ramdev Steel Advantage */}
                <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-3.5 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800 mb-1">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Ramdev Steel Standard</span>
                  </div>
                  <p className="text-xs text-zinc-800 font-medium leading-relaxed">
                    {row.ramdev}
                  </p>
                </div>

                {/* Unorganized Fabricators */}
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 mb-1">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Unorganized Fabricators</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {row.others}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metric Counters */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-4 sm:p-6 text-center shadow-sm">
            <p className="text-3xl font-black text-zinc-950 sm:text-4xl lg:text-5xl">20+</p>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-700">Years in Operation</p>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] text-zinc-500">Serving Western Rajasthan</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-4 sm:p-6 text-center shadow-sm">
            <p className="text-3xl font-black text-orange-600 sm:text-4xl lg:text-5xl">500+</p>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700">Projects Completed</p>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] text-zinc-500">Zero structural recalls</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-4 sm:p-6 text-center shadow-sm">
            <p className="text-3xl font-black text-zinc-950 sm:text-4xl lg:text-5xl">100%</p>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-700">Tested SS 304/316</p>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] text-zinc-500">Guaranteed chemical purity</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-slate-50 p-4 sm:p-6 text-center shadow-sm">
            <p className="text-3xl font-black text-orange-600 sm:text-4xl lg:text-5xl">24/7</p>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700">WhatsApp Support</p>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] text-zinc-500">Fast quote turnaround</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;