import { useState } from "react";

/**
 * Eyebrow label used at the top of a vertical's own pages, e.g.
 * "RENT HUB 360" on the Find/Post Property pages. Shows the
 * vertical's logo mark next to the text when available; if the file
 * is missing or fails to load, it just quietly falls back to text
 * only instead of showing a broken image icon.
 */
export default function VerticalEyebrow({ logo, label, className = "" }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <p className={`flex items-center gap-2 ${className}`}>
      {logo && !logoFailed && (
        <img
          src={logo}
          alt=""
          className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10"
          onError={() => setLogoFailed(true)}
        />
      )}
      <span className="text-accent font-semibold tracking-[0.3em] text-xs uppercase">
        {label}
      </span>
    </p>
  );
}