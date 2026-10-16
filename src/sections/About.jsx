import { aboutImage } from "../assets/heroImages";

function About() {
  return (
    <section id="about" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Top Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🏭 About Ramdev Steel Industries</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Engineering Built on <br />
              <span className="text-orange-600">Integrity & Quality.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Established in 2004 in Jodhpur, Ramdev Steel Industries has grown into one of
            Western Rajasthan's most respected stainless steel fabrication houses. We blend
            traditional metalworking craftsmanship with computer-controlled laser precision.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="relative min-h-[440px] sm:min-h-[500px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
            <img
              src={aboutImage}
              alt="Steel fabrication craftsman at work"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Experience Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/95 p-6 backdrop-blur-md shadow-2xl">
              <div>
                <p className="text-3xl font-black text-zinc-950 sm:text-4xl">20+</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-700">
                  Years Fabrication Mastery
                </p>
              </div>

              <div className="h-10 w-px bg-zinc-200" />

              <div>
                <p className="text-3xl font-black text-orange-600 sm:text-4xl">500+</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                  Architectural Deliveries
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Core Pillars */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                Precision Standards
              </span>
              <h3 className="mt-2 text-2xl font-bold text-zinc-950 sm:text-3xl">
                Bespoke Steel Solutions with Zero Compromises
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                Every railing baluster, gate frame, and decorative grill that leaves our shop
                undergoes rigorous dimensional inspection, chemical grade verification, and multi-stage
                buffing. We take immense pride in creating steelwork that stands proud for decades.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-sm transition hover:border-orange-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  ✓
                </div>
                <h4 className="mt-3 text-sm font-bold text-zinc-900">Certified Prime Steel</h4>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  Only authentic SS 304 and 316 prime gauge raw material with test certs.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-sm transition hover:border-orange-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  📐
                </div>
                <h4 className="mt-3 text-sm font-bold text-zinc-900">Optical Laser Measuring</h4>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  Millimeter-accurate site inspection eliminates loose wobbles and alignment flaws.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-sm transition hover:border-orange-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  ⚡
                </div>
                <h4 className="mt-3 text-sm font-bold text-zinc-900">Argon TIG Welds</h4>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  Full-root seamless penetration welding for superior structural wind-load safety.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-sm transition hover:border-orange-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  🛡️
                </div>
                <h4 className="mt-3 text-sm font-bold text-zinc-900">15-Year Rust Warranty</h4>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  Written anti-corrosion commitment backed by responsive local service.
                </p>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#calculator"
                className="rounded-xl bg-orange-500 px-6 py-3 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600"
              >
                Estimate Your Project Cost
              </a>
              <a
                href="#projects"
                className="text-xs font-bold text-zinc-700 hover:text-orange-600 transition flex items-center gap-1.5"
              >
                <span>View Recent Installations</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;