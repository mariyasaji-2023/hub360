import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Full-screen photo preview. Rendered into document.body via a portal
 * so it always sits above everything regardless of where the trigger
 * card lives (and isn't clipped by any hover `transform` on an
 * ancestor card, which would otherwise break position:fixed).
 */
export default function ImageLightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] bg-navy-DEEP/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Property photo preview"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition-colors"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div
        className="max-w-4xl w-full mx-5 sm:mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Photo ${index + 1} of ${images.length}`}
          className="w-full max-h-[75vh] object-contain rounded-lg animate-fade-up"
          key={index}
        />
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(i);
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent-light" : "w-1.5 bg-ivory/30 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}