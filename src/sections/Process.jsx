const steps = [
  {
    number: "01",
    title: "Requirement & Free Site Consultation",
    timeline: "Day 1",
    description:
      "We discuss your design expectations, aesthetic preference, budget, and project location in Rajasthan or beyond.",
    deliverable: "Preliminary cost bracket & design portfolio review.",
  },
  {
    number: "02",
    title: "Precision Laser Site Measurement",
    timeline: "Day 2",
    description:
      "Our senior technician visits your site with optical laser levels to take exact millimeter dimensions of balconies, stairs, or gates.",
    deliverable: "Accurate fabrication dimensional sheet.",
  },
  {
    number: "03",
    title: "CAD Blueprint & Grade Certification",
    timeline: "Day 3 - 4",
    description:
      "We generate the structural layout and approve steel grade (SS 304 vs 316) along with surface finish (Mirror / Satin / PVD).",
    deliverable: "Final agreed fabrication quotation & blueprint.",
  },
  {
    number: "04",
    title: "Precision Laser Cutting & TIG Welding",
    timeline: "Day 5 - 10",
    description:
      "Work commences in our specialized workshop. High-tensile Argon TIG welding, seamless grinding, and 5-stage buffing are carried out.",
    deliverable: "Pre-dispatch factory quality inspection check.",
  },
  {
    number: "05",
    title: "Zero-Mess On-Site Installation",
    timeline: "Day 11 - 12",
    description:
      "Our skilled installation team anchors the steelwork with SS 304 drop-in anchors and chemical grout, followed by final handover polishing.",
    deliverable: "Complete project handover with care instructions & warranty.",
  },
];

function Process() {
  return (
    <section id="process" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🔄 Step-By-Step Workflow</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              From Concept <br />
              <span className="text-orange-600">To Flawless Installation.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            A transparent, organized 5-step process designed to ensure absolute structural safety,
            exact fitment, zero delays, and a breathtaking architectural finish.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-16 sm:mt-20">
          
          {/* Desktop Timeline (Visible on lg and up) */}
          <div className="hidden lg:block relative">
            <div className="absolute left-[8%] right-[8%] top-7 h-0.5 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step) => (
                <div key={step.number} className="group relative flex flex-col justify-between">
                  <div>
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-orange-500 bg-white text-lg font-black text-orange-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      {step.number}
                    </div>

                    <div className="mt-6">
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase text-orange-800 border border-orange-200">
                        {step.timeline}
                      </span>
                      <h3 className="mt-2 text-base font-bold text-zinc-900 group-hover:text-orange-600 transition">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-3.5 text-[11px] text-zinc-700 shadow-sm">
                    <span className="font-bold text-orange-700">Deliverable: </span>
                    {step.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Timeline (Visible on < lg) */}
          <div className="lg:hidden space-y-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start gap-4 sm:gap-6">
                
                {/* Vertical connecting gradient line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-gradient-to-b from-orange-400 to-orange-200" />
                )}

                {/* Number Circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-orange-500 bg-white text-base font-black text-orange-600 shadow-md">
                  {step.number}
                </div>

                {/* Content Details */}
                <div className="flex-1 pb-2">
                  <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase text-orange-800 border border-orange-200">
                    {step.timeline}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                    {step.description}
                  </p>

                  <div className="mt-3 rounded-xl border border-zinc-200 bg-white p-3 text-[11px] text-zinc-700 shadow-sm">
                    <span className="font-bold text-orange-700">Deliverable: </span>
                    {step.deliverable}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 p-8 sm:p-10 lg:flex-row shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Free Site Survey in Jodhpur & Surrounding Areas
            </span>
            <h3 className="mt-1 text-2xl font-bold text-zinc-950 sm:text-3xl">
              Ready to begin your project measurement?
            </h3>
            <p className="mt-1.5 text-xs text-zinc-600 max-w-xl">
              Book a no-obligation site measurement visit. Our senior fabrication supervisor will assess your site and bring material samples.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 text-center"
            >
              Book Site Visit Now
            </a>
            <a
              href="https://wa.me/919468815735"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-300 bg-green-50 px-5 py-3.5 text-xs font-bold text-green-700 transition hover:bg-green-100 text-center shadow-sm"
            >
              Quick WhatsApp Booking
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;