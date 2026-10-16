import { useState, useEffect } from "react";

function FloatingActions() {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/919468815735?text=${encodeURIComponent(
    "Hello Ramdev Steel Industries! I am interested in getting a quotation for stainless steel fabrication work. Please connect with me."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:right-6">
      {/* WhatsApp Quick Chat */}
      <div className="relative group flex items-center">
        {/* Tooltip */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 mr-3 rounded-full bg-zinc-900 border border-zinc-700/80 px-3.5 py-1.5 shadow-xl text-xs font-semibold text-zinc-200 whitespace-nowrap animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
            <span>Chat for Instant Quote</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-zinc-500 hover:text-white ml-1 text-xs"
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
          className="flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-110 hover:shadow-green-500/40 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
          </svg>
        </a>
      </div>

      {/* Direct Phone Call for Mobile */}
      <a
        href="tel:+919468815735"
        className="flex sm:hidden h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/20 active:scale-95"
        aria-label="Call Now"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.94 1.515L10 8a2 2 0 01-.5 1.94l-1.3 1.3a16 16 0 006.56 6.56l1.3-1.3A2 2 0 0118 16l3.485.76A2 2 0 0123 18.7V21a2 2 0 01-2 2C10.507 23 1 13.493 1 3a2 2 0 012-2z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          aria-label="Scroll to top"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default FloatingActions;
