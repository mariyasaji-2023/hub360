import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * A slim top-of-page progress bar that flashes on every navigation.
 * There's no real async work to wait on yet (pages are static), but
 * the brief pulse gives page switches a sense of motion instead of
 * an abrupt cut — and it's exactly where a real fetch/route-loader
 * delay would hook in later.
 */
export default function RouteLoader() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setActive(true);
    const timeout = setTimeout(() => setActive(false), 450);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (!active) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent overflow-hidden">
      <div className="progress-bar h-full w-1/3 bg-gradient-to-r from-transparent via-accent-light to-transparent" />
    </div>
  );
}
