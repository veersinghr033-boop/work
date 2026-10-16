import { useState, useEffect, useMemo } from "react";
import { galleryImages as galleryImageAssets } from "../assets/galleryImages";

const categories = ["All", "Railings", "Gates", "Grills", "Furniture"];

const galleryImages = [
  {
    id: 1,
    category: "Railings",
    title: "Curved Staircase Balustrade",
    image: galleryImageAssets[0],
    size: "large",
    tag: "Villa Interior",
  },
  {
    id: 2,
    category: "Gates",
    title: "High-Gloss Entrance Pivot Gate",
    image: galleryImageAssets[1],
    size: "normal",
    tag: "Exterior Gate",
  },
  {
    id: 3,
    category: "Grills",
    title: "Geometric Laser Safety Grill",
    image: galleryImageAssets[2],
    size: "normal",
    tag: "Window Security",
  },
  {
    id: 4,
    category: "Railings",
    title: "Frameless Glass Balcony Edge",
    image: galleryImageAssets[3],
    size: "normal",
    tag: "Terrace Railing",
  },
  {
    id: 5,
    category: "Furniture",
    title: "Mirror SS Dining Table Framework",
    image: galleryImageAssets[4],
    size: "normal",
    tag: "Bespoke Furniture",
  },
  {
    id: 6,
    category: "Gates",
    title: "Contemporary Villa Sliding Gate",
    image: galleryImageAssets[5],
    size: "large",
    tag: "Estate Boundary",
  },
  {
    id: 7,
    category: "Railings",
    title: "SS 316 Commercial Grade Railing",
    image: galleryImageAssets[6],
    size: "normal",
    tag: "Commercial Atrium",
  },
  {
    id: 8,
    category: "Grills",
    title: "Architectural Pattern Safety Barrier",
    image: galleryImageAssets[7],
    size: "normal",
    tag: "Balcony Partition",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const filteredImages = useMemo(() => {
    return activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredImages]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold 40px
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
      } else {
        // Swiped right -> prev
        setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      }
    }
    setTouchStartX(null);
  };

  const activeImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleInquireWhatsApp = (img) => {
    const text = `Hello Ramdev Steel! I am interested in this design from your gallery: *"${img.title}"* (${img.category}). Can you share specs and quote?`;
    window.open(`https://wa.me/919468815735?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="gallery" className="relative bg-slate-50 py-24 sm:py-28 lg:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>📸 Visual Showcase</span>
            </div>
            <h2 className="text-3xl font-black text-zinc-950 sm:text-5xl lg:text-6xl">
              Fabrication <br />
              <span className="text-orange-600">Design Gallery.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base lg:ml-auto lg:max-w-xl">
            A high-definition visual record of recent stainless steel architectural installs. Click on any
            design to view in full resolution or request a direct quotation.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`rounded-xl border px-4 py-2 text-xs font-bold transition whitespace-nowrap shadow-sm ${
                  active
                    ? "border-orange-500 bg-orange-500 text-white shadow-orange-500/20"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200 shadow-sm transition hover:shadow-xl hover:border-orange-300 ${
                item.size === "large" ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={item.size === "large" ? "h-[380px]" : "h-[290px]"}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

              {/* Hover Badge */}
              <span className="absolute top-4 left-4 rounded-lg bg-white/90 border border-zinc-200 px-2.5 py-1 text-[10px] font-bold text-orange-700 uppercase backdrop-blur-md shadow-sm">
                {item.category}
              </span>

              {/* Content Dock */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-orange-300 uppercase tracking-widest">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition">
                    {item.title}
                  </h3>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/30 text-white backdrop-blur transition duration-300 group-hover:bg-orange-500 group-hover:scale-110">
                  🔍
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter and Close */}
          <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between text-white z-10">
            <span className="text-xs font-mono font-bold text-zinc-300 bg-white/10 px-3 py-1 rounded-full">
              {selectedIndex + 1} of {filteredImages.length}
            </span>

            <button
              onClick={() => setSelectedIndex(null)}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition"
              aria-label="Close Lightbox"
            >
              ✕
            </button>
          </div>

          {/* Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-orange-500 transition z-10 active:scale-95"
            aria-label="Previous Image"
          >
            ←
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex + 1) % filteredImages.length);
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-orange-500 transition z-10 active:scale-95"
            aria-label="Next Image"
          >
            →
          </button>

          {/* Main Lightbox Body */}
          <div
            className="relative max-h-[85vh] max-w-5xl flex flex-col items-center w-full px-2 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[60vh] sm:max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />

            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-4 rounded-2xl bg-zinc-900/95 p-3.5 sm:p-4 border border-white/15 backdrop-blur-md">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">
                  {activeImage.category} • {activeImage.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">{activeImage.title}</h3>
              </div>

              <button
                onClick={() => handleInquireWhatsApp(activeImage)}
                className="w-full sm:w-auto rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#20ba59] active:scale-95 text-center"
              >
                Inquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;