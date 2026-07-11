import useReveal from "../hooks/useReveal.js";

/**
 * Wrap any block of content to have it fade + slide up the first time
 * it scrolls into view. `delay` accepts a Tailwind-safe ms value
 * (0, 100, 200...) so staggered groups (e.g. a row of cards) can be
 * offset from each other.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
