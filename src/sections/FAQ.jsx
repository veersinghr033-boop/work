import { useState, useMemo } from "react";
import { faqs, faqCategories as categories } from "../data/faq";

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
    <section id="faq" className="relative bg-slate-50 py-12 sm:py-16 lg:py-20 border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center reveal">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 shadow-sm animate-float">
            <span>❓ Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
            Have Questions? <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">We've Got Transparent Answers.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base leading-relaxed">
            Everything you need to know about stainless steel grades, pricing, laser site measurement, and warranty.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search answers (e.g. rust, price, warranty, 304)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm sm:text-xs text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
            <svg
              className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-700"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Chips with mobile horizontal scroll */}
          <div className="mt-5 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1 px-1 w-full max-w-full">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-bold transition shadow-sm ${activeCategory === c
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-orange-500/20 scale-105"
                    : "bg-white border border-slate-200/90 text-slate-700 hover:text-orange-600 hover:border-orange-300"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordions with Smooth Height Transitions */}
        <div className="mt-8 space-y-3 reveal delay-100">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                    ? "border-orange-300 bg-orange-50/30 shadow-md ring-1 ring-orange-200/50"
                    : "border-slate-200/90 bg-white hover:border-slate-300 shadow-sm hover:shadow"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${isOpen ? "text-orange-600" : "text-slate-400"
                        }`}
                    >
                      0{faq.id}
                    </span>
                    <span className="text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? "rotate-180 bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm" : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Category: {faq.category}</span>
                        <a
                          href="#contact"
                          className="text-orange-600 hover:text-orange-700 hover:underline font-bold"
                        >
                          Ask more details →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredFaqs.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 text-xs shadow-sm">
            No FAQ found matching "{search}".
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-14 rounded-3xl border border-orange-200/90 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/60 p-6 sm:p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Have a project-specific query?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our fabrication engineers are happy to explain structural options, glass specifications, and price comparisons on call.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/918949708489"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59]"
            >
              Ask on WhatsApp
            </a>
            <a
              href="tel:+918949708489"
              className="w-full sm:w-auto rounded-xl border border-slate-300/90 bg-white px-6 py-3 text-xs font-bold text-slate-800 transition hover:border-orange-500 hover:text-orange-600 shadow-sm"
            >
              Call +91 8949708489
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;