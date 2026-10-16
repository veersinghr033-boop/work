import { heroImage } from "../assets/heroImages";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Architectural Steel Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />

      {/* Light Frosted Layer Overlays */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />

      {/* Subtle Warm Amber Glows */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 xl:col-span-8">
            
            {/* Trust Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                Premium SS 304 & SS 316 Fabrication • Est. 2004 in Rajasthan
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl md:text-7xl xl:text-[76px] xl:leading-[1.08]">
              Strength You See.{" "}
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Precision You Trust.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Transforming spaces with bespoke architectural stainless steel railings,
              frameless glass balustrades, designer entrance gates, and precision industrial engineering.
              Engineered for lifetime durability and rust-free elegance.
            </p>

            {/* Checkmark Quality Highlights */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-700 font-semibold">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  ✓
                </span>
                <span>Genuine SS 304 / 316 Grade Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  ✓
                </span>
                <span>Argon TIG Seamless Welds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  ✓
                </span>
                <span>Turnkey On-Site Fitment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#calculator"
                className="group flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-5 w-5 text-orange-100 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Calculate Cost Instantly</span>
                <span className="rounded bg-white/25 px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">Free</span>
              </a>

              <a
                href="#products"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-zinc-300 bg-white px-6 py-4 text-sm font-bold text-zinc-800 shadow-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-600"
              >
                <span>Explore Products</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="https://wa.me/919468815735"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-green-50 px-5 py-4 text-sm font-bold text-green-700 transition hover:bg-green-100 shadow-sm"
              >
                <span>WhatsApp Expert</span>
              </a>
            </div>

            {/* Performance Metric Counters */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-200 pt-8">
              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-sm">
                <p className="text-3xl font-black text-zinc-950 sm:text-4xl">20+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-orange-600">Years Experience</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Est. 2004 in Jodhpur</p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-sm">
                <p className="text-3xl font-black text-orange-600 sm:text-4xl">500+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-700">Projects Delivered</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Villas, Offices & Plants</p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-sm">
                <p className="text-3xl font-black text-zinc-950 sm:text-4xl">100%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-orange-600">Quality Tested</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Certified 304/316 Steel</p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-sm">
                <p className="text-3xl font-black text-orange-600 sm:text-4xl">4.9★</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-700">Client Rating</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Trusted By Contractors</p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Quality Snapshot Card */}
          <div className="hidden lg:col-span-5 xl:col-span-4 lg:block">
            <div className="relative rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-xl backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-bold text-zinc-500">Fabrication Standards</span>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-orange-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-700">Top Specialty</span>
                    <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-800">Bestseller</span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-zinc-900">SS Glass & Balcony Railings</h4>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    12mm Toughened Glass with SS 304 solid spigots & ergonomic handrail.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-amber-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Security & Luxury</span>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">Heavy Duty</span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-zinc-900">Custom Laser-Cut Gates</h4>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    CNC laser lattice motifs, anti-sag structure, automation ready.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition hover:border-emerald-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Service Guarantee</span>
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Free Visit</span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-zinc-900">Free Site Measurement</h4>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    On-site laser inspection, physical samples & 3D layout recommendations.
                  </p>
                </div>
              </div>

              {/* Card Footer WhatsApp link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Got blueprints or photos?</p>
                  <p className="text-xs font-bold text-zinc-900">Get an instant feasibility quote</p>
                </div>
                <a
                  href="https://wa.me/919468815735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 transition shadow-sm"
                >
                  Send Files
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;