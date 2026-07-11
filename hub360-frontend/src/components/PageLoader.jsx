import logoIcon from "../assets/logo.png";

/**
 * Full-screen splash shown briefly while the app boots. Reuses the
 * real Hub 360 mark inside a spinning ring so the loading moment
 * still feels on-brand rather than a generic spinner.
 */
export default function PageLoader({ fadingOut = false }) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-navy-DEEP flex flex-col items-center justify-center gap-5 transition-opacity duration-500 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Hub 360 Group"
    >
      <div className="relative w-16 h-16">
        <span className="absolute inset-0 rounded-full border-2 border-white/10" />
        <span className="absolute inset-0 rounded-full border-2 border-t-accent-light border-r-transparent border-b-transparent border-l-transparent animate-spin-slow" style={{ animationDuration: "1.1s" }} />
        <span className="absolute inset-[6px] rounded-full overflow-hidden animate-pulse-soft">
          <img src={logoIcon} alt="" className="w-full h-full object-cover scale-[1.35]" />
        </span>
      </div>
      <p className="font-display font-bold text-ivory text-sm tracking-[0.35em] uppercase">
        Hub <span className="text-accent-light">360</span>
      </p>
    </div>
  );
}