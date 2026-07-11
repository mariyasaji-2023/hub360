import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VerticalCard from "../components/VerticalCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { verticals } from "../data/verticals.js";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-DEEP overflow-hidden">
        <span className="orbit-ring w-[560px] h-[560px] -top-40 -right-40 animate-spin-slow" />
        <span className="orbit-ring w-[360px] h-[360px] top-20 -right-10 rotate-45 animate-spin-slow-reverse" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-28">
          <p className="text-accent-light font-semibold tracking-[0.3em] text-xs uppercase animate-fade-up">
            Hub 360 Group
          </p>
          <h1
            className="font-display font-extrabold text-ivory text-4xl sm:text-6xl mt-4 max-w-3xl leading-[1.1] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Creating meaningful growth opportunities, one vertical at a time.
          </h1>
          <p
            className="text-ivory/70 text-base sm:text-lg mt-6 max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Three businesses, one trusted group: rentals made simple with
            Rent Hub 360, everyday services on demand with Gate Hub 360, and
            creative growth with Design Hub 360.
          </p>
          <div
            className="mt-9 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 bg-accent text-ivory font-semibold rounded-lg px-6 py-3 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Explore Our Services <ArrowRight size={18} />
            </NavLink>
            <NavLink
              to="/services/rent-hub-360"
              className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold rounded-lg px-6 py-3 hover:border-accent-light hover:text-accent-light hover:-translate-y-0.5 transition-all"
            >
              Find a Rental Property
            </NavLink>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <Reveal className="max-w-2xl">
          <p className="text-accent font-semibold tracking-[0.3em] text-xs uppercase">
            Our Business Verticals
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-DEEP mt-3">
            One group, three ways to help you grow.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {verticals.map((v, i) => (
            <Reveal key={v.id} delay={i * 120}>
              <VerticalCard vertical={v} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}