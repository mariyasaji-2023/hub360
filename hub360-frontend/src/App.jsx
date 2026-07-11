import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageLoader from "./components/PageLoader.jsx";
import RouteLoader from "./components/RouteLoader.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

import PostProperty from "./pages/renthub/PostProperty.jsx";
import FindProperty from "./pages/renthub/FindProperty.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [booting, setBooting] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Brief branded splash on first load. Once real data-fetching
    // exists (e.g. warming up the API), swap this fixed delay for an
    // actual "app is ready" signal.
    const fade = setTimeout(() => setFadingOut(true), 700);
    const remove = setTimeout(() => setBooting(false), 1100);
    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {booting && <PageLoader fadingOut={fadingOut} />}
      <RouteLoader />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Vertical 1: Rent Hub 360 — Find Property is now the landing page */}
          <Route path="/services/rent-hub-360" element={<FindProperty />} />
          <Route
            path="/services/rent-hub-360/post-property"
            element={<PostProperty />}
          />
          <Route
            path="/services/rent-hub-360/find-property"
            element={<FindProperty />}
          />

          {/* Gate Hub 360 and Design Hub 360 pages will be added the same way */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}