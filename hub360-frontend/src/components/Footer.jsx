import { NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { verticals } from "../data/verticals.js";
import logoIcon from "../assets/logo.png";

const officeAddress =
  "1st Floor, Arya Hub Mall, Prasanth Extension, Whitefield, Bengaluru, Karnataka 560066";

export default function Footer() {
  return (
    <footer className="bg-navy-DEEP text-ivory/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-x-10 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="h-8 flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10">
              <img
                src={logoIcon}
                alt="Hub 360 Group"
                className="w-full h-full object-cover scale-[1.35]"
              />
            </span>
            <p className="font-display font-bold text-ivory text-lg leading-none">
              HUB <span className="text-accent-light">360</span> GROUP
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Creating Meaningful Growth Opportunities across rentals, home
            &amp; business services, and creative solutions.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="h-8 flex items-center">
            <p className="text-ivory text-xs font-bold tracking-[0.15em] uppercase">
              Verticals
            </p>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            {verticals.map((v) =>
              v.live ? (
                <li key={v.id}>
                  <NavLink to={v.path} className="hover:text-accent-light transition-colors">
                    {v.name}
                  </NavLink>
                </li>
              ) : (
                <li key={v.id} className="flex items-center gap-2 text-ivory/40 cursor-default">
                  {v.name}
                  <span className="text-[10px] font-semibold uppercase tracking-wide bg-white/5 text-ivory/40 px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="h-8 flex items-center">
            <p className="text-ivory text-xs font-bold tracking-[0.15em] uppercase">
              Visit Us
            </p>
          </div>
          <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed max-w-xs">
            <MapPin size={16} className="text-accent-light shrink-0 mt-0.5" />
            {officeAddress}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold text-accent-light hover:text-ivory transition-colors"
          >
            Get Directions →
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-ivory/40">
        © {new Date().getFullYear()} Hub 360 Group. All rights reserved.
      </div>
    </footer>
  );
}