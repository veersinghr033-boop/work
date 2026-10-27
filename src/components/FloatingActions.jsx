import { useState, useEffect } from "react";

function FloatingActions({ onCopyPhone }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/919468815735?text=${encodeURIComponent(
    "Hello Ramdev Steel Industries! I am interested in getting a quotation for stainless steel fabrication work. Please connect with me."
  )}`;

  return (
    <>
      {/* =========================================================================
          DESKTOP FLOATING ACTION STACK (Hidden on mobile, visible on lg and up)
      ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end gap-3">
        {/* WhatsApp Quick Chat with Tooltip */}
        <div className="relative group flex items-center">
          {showTooltip && (
            <div className="flex items-center gap-2 mr-3 rounded-full bg-slate-900 border border-slate-700/80 px-3.5 py-1.5 shadow-xl text-xs font-semibold text-slate-200 whitespace-nowrap animate-pulse-glow">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Chat for Instant Quote</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-slate-400 hover:text-white ml-1 text-xs"
                title="Dismiss"
              >
                ×
              </button>
            </div>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:shadow-green-500/40 active:scale-95"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
            </svg>
          </a>
        </div>

        {/* Scroll to Top (Desktop) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-600 hover:text-white"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* =========================================================================
          MOBILE FLOATING SCROLL-TO-TOP BUTTON (Floats above mobile bottom dock)
      ========================================================================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-3.5 z-40 flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition-all active:scale-95"
          aria-label="Scroll to top"
        >
          <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* =========================================================================
          MOBILE DEDICATED STICKY ACTION DOCK (Visible on mobile/tablet, hidden on lg)
      ========================================================================= */}
      <aside
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 flex lg:hidden border-t border-slate-200/90 bg-white/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="grid grid-cols-4 w-full px-1.5 py-1.5 items-center text-center">
          
          {/* Action 1: Call Specialist */}
          <a
            href="tel:+919468815735"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-orange-600 transition active:scale-95"
            aria-label="Call Now"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/80 mb-0.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.94 1.515L10 8a2 2 0 01-.5 1.94l-1.3 1.3a16 16 0 006.56 6.56l1.3-1.3A2 2 0 0118 16l3.485.76A2 2 0 0123 18.7V21a2 2 0 01-2 2C10.507 23 1 13.493 1 3a2 2 0 012-2z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold tracking-tight">Call Now</span>
          </a>

          {/* Action 2: WhatsApp Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-emerald-600 transition active:scale-95"
            aria-label="WhatsApp"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm shadow-emerald-500/25 mb-0.5">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold tracking-tight text-emerald-700">WhatsApp</span>
          </a>

          {/* Action 3: Cost Calculator */}
          <a
            href="#calculator"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-orange-600 transition active:scale-95"
            aria-label="Cost Estimator"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 mb-0.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold tracking-tight">Estimator</span>
          </a>

          {/* Action 4: Book Site Visit */}
          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-orange-600 transition active:scale-95"
            aria-label="Book Free Site Visit"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-600 text-white shadow-sm shadow-orange-500/25 mb-0.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold tracking-tight text-orange-700">Site Visit</span>
          </a>

        </div>
      </aside>
    </>
  );
}

export default FloatingActions;

