import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with a real call once the Express API is ready:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-14">
      <div>
        <p className="text-accent font-semibold tracking-[0.3em] text-xs uppercase">
          Contact Us
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-DEEP mt-3">
          Let's talk about what you need.
        </h1>
        <p className="text-ink/60 mt-4 max-w-md">
          Reach out about Rent Hub 360 listings, partnership opportunities,
          or anything else — we usually reply within a business day.
        </p>

        <ul className="mt-8 space-y-4 text-sm text-ink/70">
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-accent" /> +91 00000 00000
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-accent" /> hello@hub360group.com
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-accent" /> 1st Floor, Arya Hub Mall, Whitefield, Bengaluru 560066
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-7 space-y-5">
        {sent && (
          <p className="bg-grow/10 text-grow text-sm font-semibold rounded-lg px-4 py-3 animate-fade-up">
            Thanks, {form.name.split(" ")[0] || "there"} — your message has been noted. We'll reply soon.
          </p>
        )}

        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy-DEEP">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1.5 w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm focus:border-accent outline-none"
            placeholder="Ananya Rao"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy-DEEP">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1.5 w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm focus:border-accent outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-navy-DEEP">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="mt-1.5 w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm focus:border-accent outline-none resize-none"
            placeholder="Tell us what you're looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-ivory font-semibold rounded-lg py-3 hover:bg-navy-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting && (
            <span className="w-4 h-4 rounded-full border-2 border-ivory/30 border-t-ivory animate-spin-slow" style={{ animationDuration: "0.7s" }} />
          )}
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}