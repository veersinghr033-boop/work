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
    <section id="process" className="relative bg-slate-50 py-20 sm:py-28 lg:py-32 border-t border-slate-200/90 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🔄 Step-By-Step Workflow</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              From Concept <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                To Flawless Installation.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base lg:ml-auto lg:max-w-xl">
            A transparent, organized 5-step process designed to ensure absolute structural safety,
            exact fitment, zero delays, and a breathtaking architectural finish.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-14 sm:mt-18">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-0.5 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 lg:block" />

          <div className="grid gap-7 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative flex flex-col justify-between">
                
                {/* Mobile connecting vertical line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 h-[calc(100%+1.25rem)] w-0.5 bg-slate-200 lg:hidden" />
                )}

                {/* Step Top Header */}
                <div>
                  <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border-2 border-orange-500 bg-white text-base sm:text-lg font-black text-orange-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                    {step.number}
                  </div>

                  <div className="mt-5">
                    <span className="rounded-full bg-orange-100/80 px-2.5 py-0.5 text-[10px] font-bold uppercase text-orange-800 border border-orange-200">
                      {step.timeline}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900 group-hover:text-orange-600 transition">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverable Badge */}
                <div className="mt-4 rounded-2xl border border-slate-200/90 bg-white p-3.5 text-[11px] text-slate-700 shadow-sm">
                  <span className="font-bold text-orange-700">Deliverable: </span>
                  {step.deliverable}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-orange-200/90 bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 p-6 sm:p-10 lg:flex-row shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Free Site Survey in Jodhpur & Surrounding Areas
            </span>
            <h3 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to begin your project measurement?
            </h3>
            <p className="mt-1 text-xs text-slate-600 max-w-xl">
              Book a no-obligation site measurement visit. Our senior fabrication supervisor will assess your site and bring material samples.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="rounded-xl bg-orange-600 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-700 text-center"
            >
              Book Site Visit Now
            </a>
            <a
              href="https://wa.me/919468815735"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 text-center shadow-sm"
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