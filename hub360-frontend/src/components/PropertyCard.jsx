import { useState } from "react";
import { BedDouble, Expand, ImageOff, MapPin, Sofa } from "lucide-react";
import ImageLightbox from "./ImageLightbox.jsx";
import { resolveImageUrl } from "../lib/api.js";

export default function PropertyCard({ property }) {
  const images = (property.images || []).map(resolveImageUrl);
  const [previewIndex, setPreviewIndex] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col border border-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/30">
      {images.length > 0 ? (
        <button
          type="button"
          onClick={() => setPreviewIndex(0)}
          className="group relative aspect-video w-full overflow-hidden bg-navy/5"
        >
          <img
            src={images[0]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy-DEEP/0 group-hover:bg-navy-DEEP/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-white/90 text-navy-DEEP text-xs font-semibold rounded-full px-3 py-1.5">
              <Expand size={13} /> Preview
            </span>
          </div>
          {images.length > 1 && (
            <span className="absolute bottom-2 right-2 bg-navy-DEEP/80 text-ivory text-[11px] font-semibold px-2 py-0.5 rounded-full">
              1 / {images.length}
            </span>
          )}
        </button>
      ) : (
        <div className="aspect-video w-full bg-navy/5 flex items-center justify-center text-navy/30">
          <ImageOff size={24} />
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-navy text-lg leading-snug">
            {property.title}
          </h3>
          <span className="shrink-0 text-grow font-display font-bold text-lg">
            ₹{property.rent.toLocaleString("en-IN")}
            <span className="text-xs text-ink/50 font-body font-normal">/mo</span>
          </span>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-ink/60">
          <MapPin size={15} className="text-accent" />
          {property.city}
        </p>

        <p className="text-sm text-ink/70 leading-relaxed">{property.description}</p>

        <div className="flex items-center gap-4 mt-1 text-sm text-ink/70">
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} className="text-navy" />
            {property.bedrooms} BHK
          </span>
          <span className="flex items-center gap-1.5">
            <Sofa size={16} className="text-navy" />
            {property.furnishing}
          </span>
        </div>

        <button className="mt-2 w-full bg-navy text-ivory text-sm font-semibold rounded-lg py-2.5 hover:bg-navy-light active:scale-[0.98] transition-all">
          Contact Owner
        </button>
      </div>

      {previewIndex !== null && (
        <ImageLightbox
          images={images}
          index={previewIndex}
          onClose={() => setPreviewIndex(null)}
          onNavigate={setPreviewIndex}
        />
      )}
    </div>
  );
}