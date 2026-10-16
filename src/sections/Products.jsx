import { useState, useMemo } from "react";
import { productImages } from "../assets/productImages";

const categories = [
  "All",
  "Railings",
  "Gates",
  "Grills",
  "Fittings",
  "Furniture",
];

const products = [
  {
    id: 1,
    name: "Modern SS Balcony Railing",
    category: "Railings",
    grade: "SS 304 / SS 316",
    thickness: "1.5mm - 2.0mm Gauge",
    description:
      "Engineered multi-tier stainless steel railing with ergonomic top handrail and horizontal safety pipes. Designed for extreme outdoor weather.",
    image: productImages[0],
    tag: "Bestseller",
    specs: {
      height: "3.0 - 3.5 Feet Standard",
      mount: "Core Drill / Base Flange Plate Anchor",
      finish: "Mirror Polish / Hairline Satin",
      warranty: "15 Years Anti-Rust Guarantee",
    },
  },
  {
    id: 2,
    name: "Frameless SS Glass Railing",
    category: "Railings",
    grade: "SS 304 Solid Cast",
    thickness: "12mm Toughened Glass",
    description:
      "Ultra-modern architectural glass balcony system with heavy-duty solid stainless steel spigots and continuous base channel profile.",
    image: productImages[1],
    tag: "Luxury",
    specs: {
      height: "3.2 - 4.0 Feet",
      glass: "12mm Clear / Frosted / Tinted Toughened",
      hardware: "Duplex 2205 / SS 304 Spigots",
      finish: "Mirror Polish / Brushed Matt",
    },
  },
  {
    id: 3,
    name: "CNC Laser Cut Entrance Gate",
    category: "Gates",
    grade: "SS 304 Prime Sheet & Box Pipes",
    thickness: "2.0mm Frame + 3mm Sheet",
    description:
      "Custom-designed grand entrance gate featuring intricate CNC laser cut lattice patterns, heavy-duty ball-bearing hinges, and anti-sag structure.",
    image: productImages[2],
    tag: "Custom Made",
    specs: {
      automation: "Compatible with remote sliding / swing motors",
      hinges: "Heavy Duty 4-bearing Stainless Hinges",
      finish: "Satin Brush / PVD Titanium Coated",
      security: "Integrated multi-point deadbolt mounts",
    },
  },
  {
    id: 4,
    name: "Architectural Window Safety Grills",
    category: "Grills",
    grade: "SS 304 Solid & Hollow Bars",
    thickness: "16mm - 19mm Diameter",
    description:
      "Elegant decorative safety grills for residential windows and balconies. Provides robust intrusion security with clean unobstructed outdoor views.",
    image: productImages[3],
    tag: "High Security",
    specs: {
      welding: "Complete 360° Argon TIG Welded Joint",
      pattern: "Geometric / Modern Linear / Floral",
      anchors: "Tamper-proof concealed wall anchors",
      finish: "High Gloss Buffed Finish",
    },
  },
  {
    id: 5,
    name: "Precision Railing Glass Fittings & Spigots",
    category: "Fittings",
    grade: "SS 304 / SS 316 Casted",
    thickness: "Solid Heavy Forging",
    description:
      "Heavy-duty glass clamps, base spigots, handrail brackets, adjustable elbows, and end caps built for lifetime commercial and residential duty.",
    image: productImages[4],
    tag: "Hardware Spec",
    specs: {
      compatibility: "8mm, 10mm, 12mm Glass Panels",
      gaskets: "UV Resistant EPDM Anti-Slip Rubber Gaskets",
      standards: "ASTM A276 Certified Steel",
      finish: "Electro-polished Mirror & Satin",
    },
  },
  {
    id: 6,
    name: "Custom SS Architectural Furniture",
    category: "Furniture",
    grade: "SS 304 High Precision",
    thickness: "1.6mm - 2.5mm",
    description:
      "Bespoke stainless steel dining table bases, console frames, center tables, and commercial kitchen fabrication built to designer blueprints.",
    image: productImages[5],
    tag: "Designer Series",
    specs: {
      topCompatibility: "Marble, Quartz, Granite, or Glass",
      joints: "Seamless Invisible Grind Welds",
      finish: "PVD Gold / Rose Gold / Mirror Polish",
      durability: "Termite-free, 100% moisture resistant",
    },
  },
];

function Products({ onSelectProductForQuote }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.grade.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleWhatsAppProduct = (product) => {
    const text = `Hello Ramdev Steel! I am interested in *${product.name}* (${product.category}). Please share catalog options, grade specifications, and pricing.`;
    window.open(`https://wa.me/919468815735?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="products" className="relative bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>💎 Architectural Product Range</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              Steel Crafted <br />
              <span className="text-orange-600">For Every Space.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Explore our precision-crafted stainless steel collection. Each product is engineered
            using certified SS 304 & 316 grades, fabricated to millimetric precision and hand-buffed
            for superior durability.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? products.length
                  : products.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl border px-4 py-2.5 text-xs font-bold transition shadow-sm ${
                    isActive
                      ? "border-orange-500 bg-orange-500 text-white shadow-orange-500/25"
                      : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  <span>{category}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-black/25 text-white" : "bg-zinc-200 text-zinc-700"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:w-72">
            <input
              type="text"
              placeholder="Search products, grades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-9 pr-4 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-orange-500 focus:bg-white shadow-sm"
            />
            <svg
              className="absolute left-3 top-3 h-4 w-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-zinc-400 hover:text-zinc-700"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-lg bg-orange-500 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                  {product.tag}
                </span>

                <span className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-widest text-orange-300">
                  {product.category}
                </span>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-4 rounded-lg bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-zinc-900 transition hover:bg-orange-500 hover:text-white shadow-sm"
                >
                  Quick Specs
                </button>
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-zinc-500">
                      Grade: <strong className="text-zinc-900">{product.grade}</strong>
                    </span>
                    <span className="text-[11px] text-zinc-400">{product.thickness}</span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition">
                    {product.name}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <button
                    onClick={() => handleWhatsAppProduct(product)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#25D366] transition hover:text-green-700"
                  >
                    <span>WhatsApp Quote</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:border-orange-500 hover:text-orange-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-12 text-center">
            <p className="text-base font-bold text-zinc-900">No products found matching "{searchQuery}"</p>
            <p className="mt-2 text-xs text-zinc-500">Try searching for "railing", "gate", "glass", or "grill"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 rounded-xl bg-orange-500 px-5 py-2 text-xs font-bold text-white shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 p-8 sm:flex-row shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Need a Custom Fabrication Specification?
            </span>
            <h4 className="mt-1 text-xl font-bold text-zinc-950 sm:text-2xl">
              We fabricate to your exact architectural CAD drawings & photos.
            </h4>
            <p className="mt-1 text-xs text-zinc-600">
              Share your dimensions or photo sketches on WhatsApp for an immediate engineering assessment.
            </p>
          </div>

          <a
            href="https://wa.me/919468815735"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Send Custom Drawing
          </a>
        </div>

      </div>

      {/* Product Quick Specs Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 hover:bg-orange-500 hover:text-white transition shadow-sm"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="h-64 sm:h-full overflow-hidden rounded-2xl bg-zinc-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-800 uppercase">
                      {selectedProduct.category}
                    </span>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-700">
                      {selectedProduct.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    {selectedProduct.name}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-5 space-y-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Available Grade:</span>
                      <span className="font-bold text-zinc-900">{selectedProduct.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Gauge Thickness:</span>
                      <span className="font-bold text-zinc-900">{selectedProduct.thickness}</span>
                    </div>
                    {selectedProduct.specs &&
                      Object.entries(selectedProduct.specs).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-zinc-500 capitalize">{k}:</span>
                          <span className="font-bold text-orange-700">{v}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      handleWhatsAppProduct(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59]"
                  >
                    Inquire on WhatsApp
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectProductForQuote) {
                        onSelectProductForQuote(selectedProduct.name);
                      }
                      setSelectedProduct(null);
                    }}
                    className="flex-1 text-center rounded-xl bg-orange-500 py-3 text-xs font-bold text-white transition hover:bg-orange-600 shadow-sm"
                  >
                    Request Free Quote
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
