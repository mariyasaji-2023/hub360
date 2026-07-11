import { Building2, Handshake, Quote, TrendingUp } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import logoLockup from "../assets/aboutus.png";

const pillars = [
  {
    icon: Building2,
    title: "Multi-vertical by design",
    text: "Rent Hub 360, Gate Hub 360 and Design Hub 360 operate as focused businesses under one dependable group.",
  },
  {
    icon: Handshake,
    title: "People first",
    text: "Every listing, service, and design is backed by a real person you can reach — not a faceless platform.",
  },
  {
    icon: TrendingUp,
    title: "Built for growth",
    text: "We measure success the same way our clients do: by the growth opportunities we help create.",
  },
];

const verticalsOverview = [
  {
    name: "Design Hub 360",
    text: "Poster design, videos, and all software-related creative services for businesses and brands.",
  },
  {
    name: "Rent Hub 360",
    text: "Residential rental business, helping clients find quality homes and rental properties.",
  },
  {
    name: "Gate Hub 360",
    text: "A service-provider platform connecting customers with trusted service professionals.",
  },
];

export default function AboutUs() {
  return (
    <div>
      <section className="bg-navy-DEEP relative overflow-hidden">
        <span className="orbit-ring w-96 h-96 -bottom-32 -left-20 animate-spin-slow" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <img
            src={logoLockup}
            alt="Hub 360 Group"
            className="h-16 sm:h-20 w-auto mx-auto mb-8 animate-fade-up"
          />
          <p className="text-accent-light font-semibold tracking-[0.3em] text-xs uppercase animate-fade-up text-center">
            About Us
          </p>
          <h1
            className="font-display font-extrabold text-ivory text-3xl sm:text-5xl mt-4 leading-tight animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Creating Meaningful Growth Opportunities.
          </h1>
          <p
            className="text-ivory/70 mt-6 text-base sm:text-lg leading-relaxed animate-fade-up max-w-2xl mx-auto"
            style={{ animationDelay: "160ms" }}
          >
            Hub 360 Group started with a simple idea: the everyday problems
            of renting a home, finding a reliable service professional, or
            growing a brand shouldn't need three different unreliable
            vendors. So we built three focused businesses that share one
            standard of trust.
          </p>
        </div>
      </section>

      {/* About Hub 360 — narrative + verticals overview */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
        <Reveal className="flex items-start gap-5">
          <span className="shrink-0 w-12 h-12 rounded-lg bg-navy-DEEP text-ivory font-display font-bold grid place-items-center leading-none text-sm">
            01
          </span>
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-DEEP">
              About Hub 360
            </h2>
            <p className="text-ink/70 mt-4 leading-relaxed">
              Hub 360 is a dynamic, multi-venture business group driven by a
              single powerful purpose — creating meaningful growth
              opportunities across design, real estate, and technology
              services. Under the visionary leadership of{" "}
              <span className="font-semibold text-navy-DEEP">Director Obulreddy</span>,
              Hub 360 is rapidly expanding into multiple industries, building
              a group of companies that serve diverse markets across India.
            </p>
            <p className="text-ink/70 mt-4 leading-relaxed">
              Hub 360 currently operates three exciting business verticals:
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-8 ml-0 sm:ml-[68px] bg-ivory border border-navy/10 rounded-2xl p-6 sm:p-7"
        >
          <p className="font-display font-bold text-navy-DEEP">The Hub 360 Group</p>
          <ul className="mt-4 space-y-4">
            {verticalsOverview.map((v, i) => (
              <li key={v.name} className="flex gap-3">
                <span className="shrink-0 font-display font-bold text-accent text-sm mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-ink/70 leading-relaxed">
                  <span className="font-semibold text-navy-DEEP">{v.name}</span>
                  {" — "}
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={180}
          className="mt-8 ml-0 sm:ml-[68px] border-l-4 border-accent bg-navy-DEEP rounded-r-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <Quote className="absolute -top-3 -right-3 text-white/5" size={90} strokeWidth={1} />
          <p className="relative text-ivory/90 italic text-base sm:text-lg leading-relaxed">
            "We are not just building companies — we are building
            opportunities for people who grow with us. Every team member is
            a partner in this journey, and their success is our success."
          </p>
          <p className="relative mt-4 text-accent-light text-sm font-semibold">
            — Obulreddy, Director, Hub 360
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid sm:grid-cols-3 gap-8">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 120}
            className="p-6 rounded-2xl border border-navy/10 hover:border-accent/40 hover:shadow-card transition-all"
          >
            <Icon className="text-accent" size={28} />
            <h3 className="font-display font-bold text-navy-DEEP text-lg mt-4">
              {title}
            </h3>
            <p className="text-ink/60 text-sm mt-2 leading-relaxed">{text}</p>
          </Reveal>
        ))}
      </section>
    </div>
  );
}