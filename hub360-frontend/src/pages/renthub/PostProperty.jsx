import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { Home as HomeIcon, KeyRound } from "lucide-react";
import ImageUploader from "../../components/ImageUploader.jsx";
import VerticalEyebrow from "../../components/VerticalEyebrow.jsx";
import { verticals } from "../../data/verticals.js";
import { API_URL } from "../../lib/api.js";

const rentHub = verticals.find((v) => v.id === "rent-hub-360");

const initialForm = {
  title: "",
  type: "Apartment",
  city: "",
  address: "",
  price: "",
  bedrooms: "",
  furnishing: "Unfurnished",
  maintenance: "Not Provided",
  description: "",
  ownerName: "",
  ownerPhone: "",
};

export default function PostProperty() {
  const [searchParams] = useSearchParams();
  const [intent, setIntent] = useState(
    searchParams.get("type") === "sale" ? "sale" : "rent"
  );
  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isSale = intent === "sale";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = new FormData();
    data.append("listingIntent", intent);
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    images.forEach(({ file }) => data.append("photos", file));

    try {
      const res = await fetch(`${API_URL}/api/properties`, { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Failed to submit listing");
      }
      images.forEach((img) => URL.revokeObjectURL(img.url));
      setSubmitted(true);
      setForm(initialForm);
      setImages([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <VerticalEyebrow logo={rentHub.logo} label="Rent Hub 360" className="animate-fade-up" />
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-DEEP mt-3">
            Post Property for {isSale ? "Sale" : "Rent"}
          </h1>
          <p className="text-ink/60 mt-3 max-w-md">
            {isSale
              ? "List your property for sale and connect directly with serious buyers."
              : "Fill in the details below. Your listing will be reviewed and go live on Rent Hub 360."}
          </p>
        </div>

        <div className="inline-flex shrink-0 bg-white border border-navy/10 rounded-full p-1 shadow-card self-start">
          <NavLink
            to="/services/rent-hub-360"
            className="flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 text-ink/60 hover:text-navy-DEEP transition-colors"
          >
            <KeyRound size={14} /> For Rent
          </NavLink>
          <button
            type="button"
            onClick={() => setIntent("sale")}
            className={`flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 transition-colors ${
              isSale ? "bg-navy-DEEP text-ivory" : "text-ink/60 hover:text-navy-DEEP"
            }`}
          >
            <HomeIcon size={14} /> For Sale
          </button>
        </div>
      </div>

      {submitted && (
        <p className="mt-6 bg-grow/10 text-grow text-sm font-semibold rounded-lg px-4 py-3 animate-fade-up">
          Your property was submitted. Our team will get in touch to verify
          the listing.
        </p>
      )}

      {error && (
        <p className="mt-6 bg-red-50 text-red-600 text-sm font-semibold rounded-lg px-4 py-3 animate-fade-up">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-2xl shadow-card p-7 grid sm:grid-cols-2 gap-5">
        <Field label="Listing title" span>
          <input
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. 2BHK Apartment, Indiranagar"
            className="input"
          />
        </Field>

        <Field label="Property photos" span>
          <ImageUploader images={images} onChange={setImages} />
        </Field>

        <Field label="Property type">
          <select name="type" value={form.type} onChange={handleChange} className="input">
            <option>Apartment</option>
            <option>House</option>
            <option>Flat</option>
            <option>Villa</option>
            <option>PG / Shared</option>
          </select>
        </Field>

        <Field label="Bedrooms (BHK)">
          <input
            name="bedrooms"
            type="number"
            min="0"
            required
            value={form.bedrooms}
            onChange={handleChange}
            placeholder="e.g. 2"
            className="input"
          />
        </Field>

        <Field label="City">
          <input
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            placeholder="e.g. Bengaluru"
            className="input"
          />
        </Field>

        <Field label={isSale ? "Sale price (₹)" : "Monthly rent (₹)"}>
          <input
            name="price"
            type="number"
            min="0"
            required
            value={form.price}
            onChange={handleChange}
            placeholder={isSale ? "e.g. 7500000" : "e.g. 25000"}
            className="input"
          />
        </Field>

        <Field label="Full address" span>
          <input
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            placeholder="Street, area, landmark"
            className="input"
          />
        </Field>

        <Field label="Furnishing">
          <select
            name="furnishing"
            value={form.furnishing}
            onChange={handleChange}
            className="input"
          >
            <option>Unfurnished</option>
            <option>Semi-Furnished</option>
            <option>Fully Furnished</option>
          </select>
        </Field>

        <Field label="Maintenance">
          <select
            name="maintenance"
            value={form.maintenance}
            onChange={handleChange}
            className="input"
          >
            <option>Provided</option>
            <option>Not Provided</option>
          </select>
        </Field>

        <Field label="Owner phone">
          <input
            name="ownerPhone"
            required
            value={form.ownerPhone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className="input"
          />
        </Field>

        <Field label="Owner name" span>
          <input
            name="ownerName"
            required
            value={form.ownerName}
            onChange={handleChange}
            placeholder="Your full name"
            className="input"
          />
        </Field>

        <Field label="Description" span>
          <textarea
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder="Highlights, nearby landmarks, amenities..."
            className="input resize-none"
          />
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="sm:col-span-2 mt-2 bg-grow text-navy-DEEP font-semibold rounded-lg py-3 hover:bg-grow-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting && (
            <span className="w-4 h-4 rounded-full border-2 border-navy-DEEP/30 border-t-navy-DEEP animate-spin-slow" style={{ animationDuration: "0.7s" }} />
          )}
          {submitting ? "Submitting..." : `Submit ${isSale ? "Sale " : ""}Listing`}
        </button>
      </form>
    </section>
  );
}

function Field({ label, children, span }) {
  return (
    <label className={`flex flex-col gap-1.5 ${span ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-semibold text-navy-DEEP">{label}</span>
      {children}
    </label>
  );
}