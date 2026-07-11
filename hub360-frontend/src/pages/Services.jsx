import VerticalCard from "../components/VerticalCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { verticals } from "../data/verticals.js";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <Reveal>
        <p className="text-accent font-semibold tracking-[0.3em] text-xs uppercase">
          Services
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-DEEP mt-3 max-w-2xl">
          Everything Hub 360 Group offers, under three roofs.
        </h1>
        <p className="text-ink/60 mt-4 max-w-2xl">
          Rent Hub 360 is live today. Gate Hub 360 and Design Hub 360 are on
          the roadmap and will open up here as they launch.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {verticals.map((v, i) => (
          <Reveal key={v.id} delay={i * 120}>
            <VerticalCard vertical={v} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
