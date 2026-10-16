import { useEffect } from "react";

function Toast({ message, type = "success", onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-[120] max-w-[calc(100vw-2rem)] flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/95 px-4 sm:px-5 py-3 text-white shadow-2xl backdrop-blur-md transition-all duration-300">
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
        {type === "success" ? (
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-200">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
