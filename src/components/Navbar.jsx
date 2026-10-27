import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: "🏠" },
  { name: "Cost Estimator", href: "#calculator", icon: "⚡", highlight: true },
  { name: "Products", href: "#products", icon: "💎" },
  { name: "Services", href: "#services", icon: "🛠️" },
  { name: "Steel Guide", href: "#materials", icon: "📚" },
  { name: "Projects", href: "#projects", icon: "🏆" },
  { name: "Process", href: "#process", icon: "🔄" },
  { name: "Reviews", href: "#testimonials", icon: "⭐" },
  { name: "FAQ", href: "#faq", icon: "❓" },
  { name: "Contact", href: "#contact", icon: "📍" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "calculator", "products", "services", "materials", "projects", "process", "testimonials", "faq", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open & handle Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Ribbon (Desktop only) */}
      <div
        className={`hidden lg:block border-b border-slate-200/90 bg-slate-50/95 text-xs text-slate-600 transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden py-0 opacity-0" : "py-2 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-5 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <svg className="h-3.5 w-3.5 text-orange-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jodhpur, Rajasthan • Precision Stainless Steel Fabrication
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-1.5 text-slate-600">
              <svg className="h-3.5 w-3.5 text-orange-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5 whitespace-nowrap">
            <a
              href="tel:+919468815735"
              className="flex items-center gap-1.5 font-bold text-slate-800 transition hover:text-orange-600"
            >
              <svg className="h-3.5 w-3.5 text-orange-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.94 1.515L10 8a2 2 0 01-.5 1.94l-1.3 1.3a16 16 0 006.56 6.56l1.3-1.3A2 2 0 0118 16l3.485.76A2 2 0 0123 18.7V21a2 2 0 01-2 2C10.507 23 1 13.493 1 3a2 2 0 012-2z" />
              </svg>
              +91 94688 15735
            </a>
            <span className="h-3 w-px bg-slate-300" />
            <a href="mailto:info@ramdevsteel.com" className="font-medium text-slate-600 transition hover:text-orange-600">
              info@ramdevsteel.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md py-2.5 sm:py-3"
            : "border-slate-200/70 bg-white/90 backdrop-blur-md py-3 sm:py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8">
          
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 shadow-md shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <span className="text-sm sm:text-xl font-black tracking-wider text-white">RS</span>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-lg font-black tracking-wider text-slate-900 whitespace-nowrap">
                  RAMDEV
                </span>
                <span className="hidden md:inline-flex whitespace-nowrap rounded-md bg-orange-50 border border-orange-200/80 px-1.5 py-0.2 text-[9px] font-bold text-orange-700">
                  SS 304/316
                </span>
              </div>
              <span className="text-[8.5px] sm:text-[10px] tracking-[0.22em] font-bold text-slate-500 uppercase whitespace-nowrap">
                Steel Industries
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center h-9 whitespace-nowrap rounded-xl px-2.5 xl:px-3 text-xs xl:text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                    item.highlight
                      ? "text-orange-700 bg-orange-50/90 font-bold border border-orange-200/80 hover:bg-orange-100"
                      : isActive
                      ? "text-orange-600 bg-orange-50/80 font-bold"
                      : "text-slate-700 hover:text-orange-600 hover:bg-slate-100/70"
                  }`}
                >
                  {item.name}
                  {isActive && !item.highlight && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:flex shrink-0">
            {/* WhatsApp Quick Button */}
            <a
              href="https://wa.me/919468815735"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-600 shadow-sm"
              title="Chat on WhatsApp"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
              </svg>
            </a>

            {/* Site Visit Button */}
            <a
              href="#contact"
              className="flex items-center h-9 whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:from-orange-600 hover:to-orange-700 active:scale-95"
            >
              Book Site Visit
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Quick Estimate Pill on wider mobile screens (>= 400px) */}
            <a
              href="#calculator"
              className="hidden min-[400px]:inline-flex items-center gap-1 rounded-xl border border-orange-300 bg-orange-50/90 px-2.5 py-1.5 text-[11px] font-bold text-orange-700 shadow-sm active:scale-95 shrink-0"
            >
              <span>Estimate</span>
              <span className="text-[10px]">⚡</span>
            </a>

            {/* Prominent Hamburger / Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9.5 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 sm:px-3 text-xs font-bold text-slate-800 shadow-sm active:scale-95 shrink-0 hover:bg-slate-50 transition"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <svg className="h-4.5 w-4.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-xs font-bold">Close</span>
                </>
              ) : (
                <>
                  <svg className="h-4.5 w-4.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-xs font-bold">Menu</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Native App style Slide-over from Right) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="flex h-full w-[85%] max-w-[340px] flex-col justify-between overflow-y-auto bg-white p-5 shadow-2xl pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-black text-xs">
                    RS
                  </div>
                  <div>
                    <span className="block text-xs font-black text-slate-900 tracking-wider">RAMDEV STEEL</span>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Menu Navigation</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 active:scale-95"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Items with Touch Targets */}
              <nav className="flex flex-col gap-1 py-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold transition active:scale-[0.99] min-h-[44px] ${
                        isActive
                          ? "bg-orange-50 text-orange-600 border border-orange-200/90 shadow-sm"
                          : item.highlight
                          ? "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200/80"
                          : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                      <span className={`text-xs ${isActive ? "text-orange-600 font-black" : "text-slate-400"}`}>
                        →
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="mt-6 border-t border-slate-100 pt-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#calculator"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-orange-300 bg-orange-50 py-3 text-xs font-bold text-orange-700 shadow-sm active:scale-95 text-center min-h-[44px]"
                >
                  <span>Estimate</span>
                  <span>⚡</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-orange-600 py-3 text-xs font-bold text-white shadow-md shadow-orange-500/20 active:scale-95 text-center min-h-[44px]"
                >
                  Book Visit
                </a>
              </div>

              {/* Contact direct link */}
              <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200/80 flex items-center justify-between text-xs">
                <a href="tel:+919468815735" className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-orange-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-orange-600 text-xs">📞</span>
                  <span>+91 94688 15735</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="https://wa.me/919468815735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold text-emerald-700"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xs">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;