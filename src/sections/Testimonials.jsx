import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Villa Owner",
    location: "Shastri Nagar, Jodhpur",
    project: "Curved Staircase SS 304 Railing",
    initials: "RS",
    rating: 5,
    text: "The finish and attention to detail on our 3-story curved staircase railing is simply world-class. No visible welding seams, zero wobble, and mirror polish that still gleams after 2 years. Ramdev Steel's technicians are true craftsmen.",
  },
  {
    id: 2,
    name: "Ar. Amit Mehta",
    role: "Principal Architect",
    location: "Mehta & Associates",
    project: "Frameless Glass Balconies (4 Villas)",
    initials: "AM",
    rating: 5,
    text: "As an architect, I am extremely demanding about clean straight lines and material purity. Ramdev Steel provided test certificates for SS 304 and Duplex spigots without any hesitation. Their laser leveling on site was flawless.",
  },
  {
    id: 3,
    name: "Vikramaditya Singh",
    role: "Heritage Resort Developer",
    location: "Mandore Road",
    project: "Grand Motorized Laser-Cut Gate",
    initials: "VS",
    rating: 5,
    text: "We needed a 22-foot automated entrance gate that could handle heavy desert winds without sagging. Their engineering team designed an internal truss structure that works silently and looks magnificent.",
  },
  {
    id: 4,
    name: "Pooja Choudhary",
    role: "Homeowner",
    location: "Pal Road, Jodhpur",
    project: "Window Safety Grills & Balcony Railing",
    initials: "PC",
    rating: 5,
    text: "From the initial site visit for measurement to final installation, the experience was transparent. The estimate tool gave me an exact budget idea, and the final bill matched the quote to the rupee.",
  },
];

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
    <section id="testimonials" className="relative bg-white py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>⭐ Real Customer Feedback</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              Trusted By Homeowners, <br />
              <span className="text-orange-600">Builders & Architects.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Over 20 years of delivering uncompromising quality across Rajasthan.
            Here is what our clients have to say about our craftsmanship and after-sales service.
          </p>
        </div>

        {/* Featured Testimonial Hero Box */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-xl">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            
            {/* Left Quote Card */}
            <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between">
                  <StarRating rating={current.rating} />
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-700 border border-orange-200">
                    Verified Work: {current.project}
                  </span>
                </div>

                <blockquote className="mt-8 text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl">
                  "{current.text}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="mt-10 flex items-center gap-4 border-t border-zinc-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white shadow-md shadow-orange-500/20">
                  {current.initials}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950">{current.name}</h4>
                  <p className="text-xs text-zinc-500">
                    {current.role} • <span className="text-orange-700 font-semibold">{current.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Rating Highlight Card */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-12 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Client Satisfaction
                </span>
                <h3 className="mt-4 text-3xl font-black">
                  Built to Last. <br />
                  Loved for Decades.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/90">
                  We treat every villa and project as a personal showcase of our dedication to engineering perfection.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">4.9</span>
                  <span className="text-2xl font-bold text-white/80">/ 5.0</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-white/85">
                  ★★★★★ Rating across 120+ Verified Client Projects
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Review Switcher Tabs */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActive(idx)}
              className={`rounded-2xl border p-4 text-left transition shadow-sm ${
                active === idx
                  ? "border-orange-500 bg-orange-50/90 shadow-md"
                  : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${
                    active === idx ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-700"
                  }`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">{t.name}</p>
                    <p className="text-[10px] text-zinc-500">{t.role}</p>
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