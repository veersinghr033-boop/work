import { useState, useMemo } from "react";

const faqs = [
  {
    id: 1,
    category: "Grades & Quality",
    question: "How do I know if the steel is genuine SS 304 or cheap SS 202?",
    answer:
      "We provide chemical test certificates and conduct live molybdenum/nickel acid drop testing upon request. Genuine SS 304 does not turn red or dark brown under the acid drop test, ensuring 100% all-weather rust resistance.",
  },
  {
    id: 2,
    category: "Pricing & Quotes",
    question: "How is stainless steel railing cost calculated?",
    answer:
      "Railing prices are calculated per Running Foot (RFT). The rate depends on the chosen steel grade (SS 304 vs 316), tube thickness (gauge), design complexity (horizontal pipes vs vertical balusters vs 12mm toughened glass), and finish (Mirror vs Satin vs PVD Gold). Use our interactive Cost Estimator above for an instant preview!",
  },
  {
    id: 3,
    category: "Site & Installation",
    question: "Do you provide free site visits for measurement?",
    answer:
      "Yes! In Jodhpur and surrounding regions, our senior technician visits your site free of charge with optical laser levels and physical material samples to take exact measurements and provide a customized quote.",
  },
  {
    id: 4,
    category: "Grades & Quality",
    question: "Will stainless steel railings rust in outdoor rain or heat?",
    answer:
      "Genuine SS 304 and SS 316 grade stainless steel will NOT rust under normal outdoor exposure, rain, or harsh summer heat. Mild surface brown spots can only occur if acidic bathroom cleaners (like Harpic) are spilled on them or if uncertified SS 202 is mistakenly used outdoors.",
  },
  {
    id: 5,
    category: "Site & Installation",
    question: "How long does fabrication and installation take?",
    answer:
      "Standard residential railings and gates typically take 5 to 10 working days from measurement to factory fabrication. Final on-site installation usually requires 1 to 2 days with zero mess.",
  },
  {
    id: 6,
    category: "Pricing & Quotes",
    question: "Can I provide my own architect's CAD drawing or Pinterest design?",
    answer:
      "Absolutely. More than 60% of our projects are custom-fabricated from architect blueprints, sketches, or photos. Simply share the design on WhatsApp (+91 94688 15735) and our engineering team will evaluate structural feasibility and price.",
  },
  {
    id: 7,
    category: "Grades & Quality",
    question: "What is the difference between Mirror Polish and Satin Hairline?",
    answer:
      "Mirror polish is a reflective chrome-like glossy surface that sheds dust easily. Satin/Hairline finish has subtle directional grain lines providing a sophisticated, contemporary non-glare matte appearance popular in luxury modern villas.",
  },
  {
    id: 8,
    category: "Site & Installation",
    question: "What warranty do you provide on your steelwork?",
    answer:
      "We provide a 15-Year Anti-Rust Material Guarantee on all our SS 304/316 installations, along with a 1-year complimentary workmanship and fastener stability checkup.",
  },
];

const categories = ["All", "Pricing & Quotes", "Grades & Quality", "Site & Installation"];

function FAQ() {
  const [openId, setOpenId] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCat = activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="faq" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
            <span>❓ Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
            Have Questions? <br />
            <span className="text-orange-600">We've Got Transparent Answers.</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-600 sm:text-base">
            Everything you need to know about stainless steel grades, pricing, laser site measurement, and warranty.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search answers (e.g. rust, price, warranty, 304)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 pl-10 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-orange-500 shadow-sm"
            />
            <svg
              className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-3 text-xs text-zinc-400 hover:text-zinc-700"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition shadow-sm ${
                  activeCategory === c
                    ? "bg-orange-500 text-white shadow-orange-500/20"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:text-orange-600 hover:border-orange-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-12 space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-orange-400 bg-orange-50/20 shadow-md"
                    : "border-zinc-200 bg-white hover:border-zinc-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isOpen ? "text-orange-600" : "text-zinc-400"
                      }`}
                    >
                      0{faq.id}
                    </span>
                    <span className="text-sm font-bold text-zinc-900 sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-orange-500 text-white" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-100 px-6 pb-6 pt-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>Category: {faq.category}</span>
                      <a
                        href="#contact"
                        className="text-orange-600 hover:underline font-bold"
                      >
                        Ask more details →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredFaqs.length === 0 && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 text-center text-zinc-500 text-xs shadow-sm">
            No FAQ found matching "{search}".
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-14 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-50 p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-zinc-950 sm:text-2xl">
            Have a project-specific query?
          </h3>
          <p className="mt-2 text-xs text-zinc-600 max-w-lg mx-auto">
            Our fabrication engineers are happy to explain structural options, glass specifications, and price comparisons on call.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919468815735"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59]"
            >
              Ask on WhatsApp
            </a>
            <a
              href="tel:+919468815735"
              className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-xs font-bold text-zinc-800 transition hover:border-orange-500 hover:text-orange-600 shadow-sm"
            >
              Call +91 94688 15735
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;