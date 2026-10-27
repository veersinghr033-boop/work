import { useState } from "react";
import { testimonials } from "../data/testimonials";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-orange-500 text-orange-500" : "fill-zinc-300 text-zinc-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.8l-5.25 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative bg-white py-20 sm:py-28 lg:py-32 border-t border-slate-200/90 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>⭐ Real Customer Feedback</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Trusted By Homeowners, <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Builders & Architects.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Over 20 years of delivering uncompromising quality across Rajasthan.
            Here is what our clients have to say about our craftsmanship and after-sales service.
          </p>
        </div>

        {/* Featured Testimonial Hero Box */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50 shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            
            {/* Left Quote Card */}
            <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <StarRating rating={current.rating} />
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-700 border border-orange-200">
                    Verified Work: {current.project}
                  </span>
                </div>

                <blockquote className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-slate-800">
                  "{current.text}"
                </blockquote>
              </div>

              {/* Author & Mobile Navigation Controls */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white shadow-md shadow-orange-500/20">
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{current.name}</h4>
                    <p className="text-xs text-slate-500">
                      {current.role} • <span className="text-orange-700 font-semibold">{current.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition active:scale-95 shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <span className="text-xs font-mono font-bold text-slate-500 px-1">
                    {active + 1}/{testimonials.length}
                  </span>
                  <button
                    onClick={() => setActive((active + 1) % testimonials.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition active:scale-95 shadow-sm"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Rating Highlight Card */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 p-6 sm:p-10 lg:p-12 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Client Satisfaction
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-black">
                  Built to Last. <br />
                  Loved for Decades.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/90">
                  We treat every villa and project as a personal showcase of our dedication to engineering perfection.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/20">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black">4.9</span>
                  <span className="text-xl sm:text-2xl font-bold text-white/80">/ 5.0</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-white/85">
                  ★★★★★ Rating across 120+ Verified Client Projects
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Review Switcher Tabs */}
        <div className="mt-6 sm:mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActive(idx)}
              className={`rounded-2xl border p-3.5 sm:p-4 text-left transition shadow-sm ${
                active === idx
                  ? "border-orange-500 bg-orange-50/90 shadow-md ring-1 ring-orange-400/30"
                  : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${
                    active === idx ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-[10px] text-slate-500">{t.role}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-orange-600">0{idx + 1}</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;