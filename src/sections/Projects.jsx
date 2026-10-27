import { useState, useMemo, useEffect } from "react";
import { projectImages } from "../assets/projectImages";

const categories = [
  "All",
  "Railings",
  "Gates",
  "Grills",
  "Commercial",
];

const projects = [
  {
    id: 1,
    title: "Minimalist SS 304 Staircase Railing",
    category: "Railings",
    location: "Luxury Villa, Shastri Nagar, Jodhpur",
    client: "Private Residential Estate",
    grade: "SS 304 Prime Polish",
    finish: "High-Gloss Mirror Buff",
    scope: "120 RFT Custom Curved & Straight Stairs",
    description:
      "A stunning architectural staircase featuring continuous seamless SS 304 tubular handrails with laser-cut baluster mounts. No visible weld joints and precision anchor stabilization.",
    image: projectImages[0],
  },
  {
    id: 2,
    title: "Panoramic Glass Balcony System",
    category: "Railings",
    location: "Penthouse Apartment, Ratanada",
    client: "Luxury Residence",
    grade: "Duplex 2205 + SS 304 Handrail",
    finish: "Satin Hairline Matte",
    scope: "85 RFT Exterior Perimeter",
    description:
      "Frameless 12mm tempered safety glass railing engineered with solid floor spigots, weather-proof EPDM gaskets, and an ergonomic slim top capping handrail.",
    image: projectImages[1],
  },
  {
    id: 3,
    title: "Grand Laser-Cut Estate Gate",
    category: "Gates",
    location: "Heritage Villa Complex",
    client: "Private Farmhouse Estate",
    grade: "SS 304 Box Structure + 3mm Sheet",
    finish: "PVD Antique Bronze & Mirror SS",
    scope: "24 ft Wide Motorized Bi-Parting Gate",
    description:
      "A statement entrance combining traditional Rajasthani geometric lattice laser-cutting with heavy structural steel framework and remote motorized sliding gear.",
    image: projectImages[2],
  },
  {
    id: 4,
    title: "Architectural Safety Window Grills",
    category: "Grills",
    location: "Modern Duplex Villa, Pal Road",
    client: "Residential Homeowner",
    grade: "SS 304 Heavy Gauge Solid Rods",
    finish: "Mirror Polish #8",
    scope: "14 Large Window Grills (280 SQFT)",
    description:
      "Full perimeter safety grills fabricated with 360-degree Argon welded joints, concealed anchor brackets, and easy-clean geometric intervals.",
    image: projectImages[3],
  },
  {
    id: 5,
    title: "Commercial Multi-Story Atrium Railing",
    category: "Commercial",
    location: "Corporate Business Center",
    client: "Commercial Real Estate Developer",
    grade: "SS 316 High Traffic Grade",
    finish: "Brushed Hairline",
    scope: "450 RFT across 4 Atrium Floors",
    description:
      "Heavy-duty commercial railing designed for high pedestrian throughput with reinforced structural posts and rigorous municipal load testing approval.",
    image: projectImages[4],
  },
  {
    id: 6,
    title: "Contemporary Villa Entrance Pivot Gate",
    category: "Gates",
    location: "Umaid Heritage Enclave",
    client: "Architectural Villa",
    grade: "SS 304 with Teakwood Slats",
    finish: "Matte Black PVD & Polished SS",
    scope: "18 ft Width with Integrated Pedestrian Wicket",
    description:
      "Modern dual-material entry gate pairing dark PVD-coated stainless steel with weather-treated natural teakwood slats for maximum street appeal.",
    image: projectImages[5],
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleWhatsAppProject = (project) => {
    const text = `Hello Ramdev Steel! I love your project *"${project.title}"* (${project.location}). I have a similar requirement. Can you provide an estimate?`;
    window.open(`https://wa.me/919468815735?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="projects" className="relative bg-white py-20 sm:py-28 lg:py-32 border-t border-slate-200/90 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>🏆 Proven Track Record</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Featured Work & <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Completed Projects.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Explore a curated selection of residential villas, luxury estates, and commercial complexes
            completed by our fabrication engineers across Rajasthan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 sm:mt-12 flex gap-2 overflow-x-auto pb-2 sm:pb-3 no-scrollbar">
          {categories.map((category) => {
            const active = activeCategory === category;
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl border px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-bold transition shadow-sm ${
                  active
                    ? "border-orange-500 bg-orange-600 text-white shadow-orange-500/25"
                    : "border-slate-200/90 bg-slate-50 text-slate-700 hover:border-orange-300 hover:text-orange-600 hover:bg-white"
                }`}
              >
                <span>{category}</span>
                <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${active ? "bg-black/25 text-white" : "bg-slate-200 text-slate-700"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-xl shadow-sm"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400 backdrop-blur-md shadow-sm border border-white/20">
                  {project.category}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-orange-700"
                  aria-label={`Inspect ${project.title}`}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6z" />
                  </svg>
                </button>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-orange-700">
                    📍 {project.location}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-orange-600 transition">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-slate-700 font-semibold border border-slate-200">
                      Grade: {project.grade.split(" ")[0] + " " + (project.grade.split(" ")[1] || "")}
                    </span>
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-slate-700 font-semibold border border-slate-200">
                      Finish: {project.finish.split(" ")[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-slate-800 hover:text-orange-600 transition"
                  >
                    View Project Details →
                  </button>

                  <button
                    onClick={() => handleWhatsAppProject(project)}
                    className="rounded-lg bg-emerald-50 border border-emerald-300 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition shadow-sm"
                  >
                    Similar Quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md hover:bg-orange-600 hover:text-white transition"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-12">
              <div className="lg:col-span-6 h-52 sm:h-72 lg:h-auto min-h-[200px] sm:min-h-[350px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-800 border border-orange-200">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Case Study</span>
                  </div>

                  <h3 className="mt-2.5 text-2xl font-black text-slate-900">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {selectedProject.description}
                  </p>

                  <div className="mt-5 space-y-2.5 rounded-2xl border border-slate-200/90 bg-slate-50 p-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-bold text-slate-900">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Client Type:</span>
                      <span className="font-bold text-slate-900">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Steel Specification:</span>
                      <span className="font-bold text-orange-700">{selectedProject.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Surface Texture:</span>
                      <span className="font-bold text-slate-900">{selectedProject.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scope Delivered:</span>
                      <span className="font-bold text-slate-900">{selectedProject.scope}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      handleWhatsAppProject(selectedProject);
                      setSelectedProject(null);
                    }}
                    className="flex-1 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59]"
                  >
                    Inquire on WhatsApp
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 text-center rounded-xl bg-orange-600 py-3 text-xs font-bold text-white transition hover:bg-orange-700 shadow-sm"
                  >
                    Request Similar Quote
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

export default Projects;