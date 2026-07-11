import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoIcon from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold tracking-wide transition-colors pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-accent-light after:transition-all after:duration-300 ${
      isActive
        ? "text-accent-light after:w-full"
        : "text-ivory/80 hover:text-ivory after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-navy-DEEP/95 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <span className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 group-hover:ring-accent-light/50 transition-all">
              <img
                src={logoIcon}
                alt="Hub 360 Group"
                className="w-full h-full object-cover scale-[1.35]"
              />
            </span>
            <span className="font-display font-bold text-ivory text-lg leading-none">
              HUB <span className="text-accent-light">360</span>
              <span className="block text-[10px] font-body font-normal tracking-[0.2em] text-ivory/50">
                GROUP
              </span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-ivory p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-navy-DEEP px-5 pb-4 pt-2 flex flex-col gap-3 animate-fade-up" style={{ animationDuration: "0.25s" }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}