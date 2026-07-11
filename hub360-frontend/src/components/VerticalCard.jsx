import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function VerticalCard({ vertical, index }) {
  const number = String(index + 1).padStart(2, "0");
  const Wrapper = vertical.live ? NavLink : "div";
  const wrapperProps = vertical.live ? { to: vertical.path } : {};
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = vertical.logo && !logoFailed;

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative bg-navy-mid rounded-2xl p-7 shadow-card flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        vertical.live ? "cursor-pointer" : ""
      }`}
    >
      <span className="orbit-ring w-24 h-24 -top-8 -right-8 transition-transform duration-700 group-hover:rotate-45" />

      {showLogo ? (
        <span className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/15">
          <img
            src={vertical.logo}
            alt={`${vertical.name} logo`}
            className="w-full h-full object-cover"
            onError={() => setLogoFailed(true)}
          />
        </span>
      ) : (
        <span className="font-display text-accent-light/80 text-sm tracking-[0.3em]">
          {number}
        </span>
      )}

      <h3 className="font-display text-2xl text-ivory font-bold mt-2">
        {vertical.name}
      </h3>
      <p className="text-accent-light text-sm font-semibold mt-1">{vertical.tagline}</p>
      <p className="text-ivory/70 text-sm mt-3 leading-relaxed">
        {vertical.description}
      </p>

      <ul className="mt-5 space-y-2 flex-1">
        {vertical.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-ivory/80">
            <CheckCircle2 size={16} className="text-grow shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {vertical.live ? (
        <span className="mt-6 inline-flex items-center justify-between gap-2 bg-accent text-ivory font-semibold text-sm rounded-lg px-4 py-3 group-hover:bg-accent-light transition-colors">
          Explore {vertical.name}
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      ) : (
        <span className="mt-6 inline-flex items-center justify-between gap-2 bg-white/5 text-ivory/50 font-semibold text-sm rounded-lg px-4 py-3 cursor-not-allowed">
          Coming Soon
          <ArrowUpRight size={16} />
        </span>
      )}
    </Wrapper>
  );
}