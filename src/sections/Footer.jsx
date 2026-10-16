function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 shadow-md shadow-orange-600/30">
                <span className="text-xl font-black text-white">RS</span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-wider text-white">
                  RAMDEV
                </h3>
                <p className="text-[10px] tracking-[0.25em] font-medium text-slate-400 uppercase">
                  Steel Industries
                </p>
              </div>
            </a>

            <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-sm">
              Western Rajasthan's trusted stainless steel fabrication and engineering specialist since 2004.
              Delivering high-tensile SS 304/316 architectural railings, frameless glass balustrades,
              designer entry gates, and precision industrial structures.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold text-slate-300">
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                ✓ Certified SS 304/316
              </span>
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                ✓ Argon TIG Welded
              </span>
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                ✓ Free Site Survey
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-orange-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition text-orange-400 font-semibold">
                  Cost Estimator ⚡
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-orange-400 transition">
                  Steel Grade Guide
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-orange-400 transition">
                  Fabrication Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Products & Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#products" className="hover:text-orange-400 transition">
                  SS 304 Balcony & Stair Railings
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition">
                  12mm Toughened Glass Railings
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition">
                  Designer Laser-Cut Entrance Gates
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition">
                  High-Security Window Grills
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition">
                  Custom Structural Fabrication
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition">
                  PVD Titanium Color Coating
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Workshop & Office
            </h4>
            <div className="mt-4 space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">📍</span>
                <span>Industrial Area, Jodhpur, Rajasthan, India - 342001</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">📞</span>
                <a href="tel:+919468815735" className="hover:text-orange-400 font-semibold text-white">
                  +91 94688 15735
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">💬</span>
                <a
                  href="https://wa.me/919468815735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp Quotation Desk
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">✉️</span>
                <a href="mailto:info@ramdevsteel.com" className="hover:text-orange-400">
                  info@ramdevsteel.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-500">
                <span className="text-orange-500 font-bold">🕒</span>
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Ramdev Steel Industries. All rights reserved. Crafted with precision in India.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500">ISO 9001 Quality Grade Compliant</span>
            <span className="h-3 w-px bg-slate-800" />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
