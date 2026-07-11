import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, KeyRound, Search } from "lucide-react";
import PropertyCard from "../../components/PropertyCard.jsx";
import PropertyCardSkeleton from "../../components/PropertyCardSkeleton.jsx";
import VerticalEyebrow from "../../components/VerticalEyebrow.jsx";
import { mockProperties } from "../../data/mockProperties.js";
import { verticals } from "../../data/verticals.js";

const rentHub = verticals.find((v) => v.id === "rent-hub-360");

const initialFilters = { city: "", type: "Any", maxRent: "", bedrooms: "Any", furnishing: "Any" };

export default function FindProperty() {
  const [filters, setFilters] = useState(initialFilters);
  const [loading, setLoading] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((f) => ({ ...f, [name]: value }));
  }

  // TODO: once the backend exists, replace this with:
  // useEffect(() => { fetch(`/api/properties?${new URLSearchParams(filters)}`)... }, [filters])
  const results = useMemo(() => {
    return mockProperties.filter((p) => {
      if (filters.city && !p.city.toLowerCase().includes(filters.city.toLowerCase()))
        return false;
      if (filters.type !== "Any" && p.type !== filters.type) return false;
      if (filters.maxRent && p.rent > Number(filters.maxRent)) return false;
      if (filters.bedrooms !== "Any" && String(p.bedrooms) !== filters.bedrooms)
        return false;
      if (filters.furnishing !== "Any" && p.furnishing !== filters.furnishing)
        return false;
      return true;
    });
  }, [filters]);

  // Simulates the round-trip a real search request would make, so the
  // skeleton state is visible whenever a filter changes. Swap the
  // timeout for the resolved fetch above once the API exists.
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [filters]);

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <VerticalEyebrow logo={rentHub.logo} label="Rent Hub 360" className="animate-fade-up" />
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-DEEP mt-3">
            Find a Rental Property
          </h1>
          <p className="text-ink/60 mt-3 max-w-xl">
            Filter by city, type, budget, bedrooms, and furnishing to find a place that fits.
          </p>
        </div>

        <div className="inline-flex shrink-0 bg-white border border-navy/10 rounded-full p-1 shadow-card self-start">
          <NavLink
            to="/services/rent-hub-360/post-property?type=rent"
            className="flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 bg-navy-DEEP text-ivory"
          >
            <KeyRound size={14} /> For Rent
          </NavLink>
          <NavLink
            to="/services/rent-hub-360/post-property?type=sale"
            className="flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 text-ink/60 hover:text-navy-DEEP transition-colors"
          >
            <HomeIcon size={14} /> For Sale
          </NavLink>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 bg-white rounded-2xl shadow-card p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <label className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
          <span className="text-xs font-semibold text-navy-DEEP">City</span>
          <input
            name="city"
            value={filters.city}
            onChange={handleChange}
            placeholder="e.g. Bengaluru"
            className="input"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-navy-DEEP">Type</span>
          <select name="type" value={filters.type} onChange={handleChange} className="input">
            <option>Any</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Flat</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-navy-DEEP">Max rent (₹)</span>
          <input
            name="maxRent"
            type="number"
            min="0"
            value={filters.maxRent}
            onChange={handleChange}
            placeholder="e.g. 40000"
            className="input"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-navy-DEEP">Bedrooms</span>
          <select name="bedrooms" value={filters.bedrooms} onChange={handleChange} className="input">
            <option>Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-navy-DEEP">Furnishing</span>
          <select
            name="furnishing"
            value={filters.furnishing}
            onChange={handleChange}
            className="input"
          >
            <option>Any</option>
            <option>Unfurnished</option>
            <option>Semi-Furnished</option>
            <option>Fully Furnished</option>
          </select>
        </label>
      </div>

      {/* Results */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-ink/60 flex items-center gap-2">
          <Search size={16} className="text-accent" />
          {loading
            ? "Searching..."
            : `${results.length} propert${results.length === 1 ? "y" : "ies"} found`}
        </p>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className="mt-6 text-center bg-white rounded-2xl shadow-card p-12 animate-fade-up">
          <p className="font-display font-bold text-navy-DEEP text-lg">
            No matches yet.
          </p>
          <p className="text-ink/60 text-sm mt-2">
            Try widening your budget or clearing a filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {results.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}