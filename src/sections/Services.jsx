import { serviceImages } from "../assets/serviceImages";

const services = [
  {
    id: 1,
    number: "01",
    title: "SS Balcony & Stair Railings",
    deliverables: ["304/316 Grade Steel", "Precision Core Drill Anchors", "Seamless Mirror/Satin Buff"],
    description:
      "Engineered stainless steel railings for residential staircases, exterior balconies, ramps, and commercial atriums with strict safety load compliance.",
    image: serviceImages[0],
  },
  {
    id: 2,
    number: "02",
    title: "Frameless Glass Railings",
    deliverables: ["12mm Toughened Glass", "SS 304 Solid Base Spigots", "Slimline Aluminum Channel"],
    description:
      "Minimalist architectural glass railings providing uninterrupted panoramic views, optimal safety barrier, and sleek modern aesthetic.",
    image: serviceImages[1],
  },
  {
    id: 3,
    number: "03",
    title: "Designer Steel Gates",
    deliverables: ["Anti-Sag Box Frame", "CNC Laser Cut Motifs", "Motorized Automation Ready"],
    description:
      "Grand entry gates combining high-tensile steel integrity with contemporary laser lattice designs, premium ball bearing pivots, and security deadbolts.",
    image: serviceImages[2],
  },
  {
    id: 4,
    number: "04",
    title: "Safety Grills & Partitions",
    deliverables: ["Burglary-Resistant Rods", "Concealed Fastening", "Weather-Resistant Polish"],
    description:
      "Decorative and high-security window grills, balcony mesh frames, and interior spatial partitions tailored to modern architectural layouts.",
    image: serviceImages[3],
  },
  {
    id: 5,
    number: "05",
    title: "Custom Steel Fabrication",
    deliverables: ["CAD Blueprinting", "TIG Argon Welding", "Custom Dimensions"],
    description:
      "Made-to-order architectural steelwork, designer furniture bases, commercial kitchen counters, and structural assemblies for villas and hotels.",
    image: serviceImages[4],
  },
  {
    id: 6,
    number: "06",
    title: "Site Installation & Finishing",
    deliverables: ["Expert Fitting Team", "Chemical Anchor Fasteners", "Final Mirror Buffing"],
    description:
      "End-to-end on-site installation by certified fabrication technicians ensuring perfect leveling, rigid anchoring, and scratch-free handover.",
    image: serviceImages[5],
  },
];

function Services() {
  const handleServiceWhatsApp = (serviceTitle) => {
    const text = `Hello Ramdev Steel! I want to discuss a project for *${serviceTitle}*. Please connect with me.`;
    window.open(`https://wa.me/919468815735?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="services" className="relative bg-white py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🛠️ Our Core Capabilities</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              Turnkey Steel <br />
              <span className="text-orange-600">Fabrication Services.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            From initial site survey and 3D design to precision laser cutting, argon welding,
            and final on-site fitment — we deliver comprehensive turnkey solutions with zero hassle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-950 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/50"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 opacity-55 group-hover:opacity-65"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-black/30" />

              {/* Number Badge */}
              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md shadow-md">
                <span className="text-sm font-black text-orange-400">{service.number}</span>
              </div>

              {/* Content Docked at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                <div className="h-1 w-10 bg-orange-500 rounded-full transition-all duration-300 group-hover:w-20" />

                <h3 className="mt-3 text-2xl font-bold text-white group-hover:text-orange-400 transition">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                {/* Deliverables Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Direct Action */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <button
                    onClick={() => handleServiceWhatsApp(service.title)}
                    className="flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition"
                  >
                    <span>Discuss Requirements</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <a
                    href="#contact"
                    className="rounded-lg bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-500 transition shadow-sm"
                  >
                    Book Site Visit
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-r from-orange-50/70 via-slate-50 to-orange-50/70 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                Architect & Contractor Partnerships
              </span>
              <h3 className="mt-1 text-2xl font-bold text-zinc-950 sm:text-3xl">
                Collaborate with Rajasthan's Trusted Steel Engineering Partner
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                We work directly with architects, builders, and interior designers on commercial complexes,
                villa townships, hospitals, and hotels. Bulk material discounts and dedicated site supervisors provided.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="rounded-xl bg-orange-500 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 text-center"
              >
                Inquire For Bulk Projects
              </a>
              <a
                href="tel:+919468815735"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-xs font-bold text-zinc-800 transition hover:border-orange-500 hover:text-orange-600 shadow-sm text-center"
              >
                Call Project Head
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;