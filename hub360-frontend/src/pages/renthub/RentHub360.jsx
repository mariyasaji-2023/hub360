// import { NavLink } from "react-router-dom";
// import { ArrowRight, KeyRound, Search } from "lucide-react";
// import Reveal from "../../components/Reveal.jsx";

// export default function RentHub360() {
//   return (
//     <div>
//       <section className="bg-navy-DEEP relative overflow-hidden">
//         <span className="orbit-ring w-[480px] h-[480px] -top-32 -right-32 animate-spin-slow" />
//         <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">
//           <p className="text-accent-light font-semibold tracking-[0.3em] text-xs uppercase animate-fade-up">
//             Vertical 01 · Rent Hub 360
//           </p>
//           <h1
//             className="font-display font-extrabold text-ivory text-3xl sm:text-5xl mt-4 animate-fade-up"
//             style={{ animationDelay: "80ms" }}
//           >
//             Renting, made straightforward.
//           </h1>
//           <p
//             className="text-ivory/70 mt-5 max-w-xl mx-auto animate-fade-up"
//             style={{ animationDelay: "160ms" }}
//           >
//             Whether you own a property or you're looking for your next home,
//             Rent Hub 360 gives you one clear path forward.
//           </p>
//         </div>
//       </section>

//       <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-6">
//         <Reveal>
//           <NavLink
//             to="/services/rent-hub-360/post-property"
//             className="group bg-white rounded-2xl shadow-card p-8 border border-navy/5 hover:border-accent/60 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col h-full"
//           >
//             <span className="w-12 h-12 rounded-xl bg-navy/10 grid place-items-center group-hover:bg-accent/10 transition-colors">
//               <KeyRound className="text-navy group-hover:text-accent transition-colors" size={22} />
//             </span>
//             <h2 className="font-display font-bold text-xl text-navy-DEEP mt-5">
//               Post Property for Rent
//             </h2>
//             <p className="text-ink/60 text-sm mt-2 leading-relaxed flex-1">
//               List your house, apartment, or flat and reach verified tenants
//               directly.
//             </p>
//             <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
//               Get started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </span>
//           </NavLink>
//         </Reveal>

//         <Reveal delay={120}>
//           <NavLink
//             to="/services/rent-hub-360/find-property"
//             className="group bg-white rounded-2xl shadow-card p-8 border border-navy/5 hover:border-accent/60 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col h-full"
//           >
//             <span className="w-12 h-12 rounded-xl bg-navy/10 grid place-items-center group-hover:bg-accent/10 transition-colors">
//               <Search className="text-navy group-hover:text-accent transition-colors" size={22} />
//             </span>
//             <h2 className="font-display font-bold text-xl text-navy-DEEP mt-5">
//               Find a Rental Property
//             </h2>
//             <p className="text-ink/60 text-sm mt-2 leading-relaxed flex-1">
//               Search and filter houses, apartments, and flats based on your
//               budget and preferences.
//             </p>
//             <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
//               Start searching <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </span>
//           </NavLink>
//         </Reveal>
//       </section>
//     </div>
//   );
// }
