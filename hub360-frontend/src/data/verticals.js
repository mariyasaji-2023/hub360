// Central place to describe the three Hub 360 Group verticals.
// Only Rent Hub 360 is wired up to real pages for now — the others
// link to "coming soon" placeholders until they're built.
//
// `logo` points into /public/logos/ — files there are served at that
// exact path, so just drop a PNG in with the matching filename and it
// picks it up automatically, no code changes needed. If a file is
// missing, VerticalCard quietly falls back to the numbered badge
// instead of showing a broken image.
export const verticals = [
  {
    id: "rent-hub-360",
    name: "Rent Hub 360",
    tagline: "Residential rentals, done right.",
    description:
      "List a house, apartment or flat for rent in minutes, or search verified listings that match what you need.",
    features: [
      "Residential Rentals",
      "Property Management",
      "Tenant Assistance",
      "Rental Property Consulting",
      "Real Estate Solutions",
    ],
    path: "/services/rent-hub-360",
    logo: "/logos/renthub-360.png",
    live: true,
  },
  {
    id: "gate-hub-360",
    name: "Gate Hub 360",
    tagline: "Your complete multi-service solution.",
    description:
      "A trusted marketplace connecting homes and businesses with verified service professionals.",
    features: [
      "Trusted Service Professionals",
      "Home Services",
      "Business Services",
      "Customer Service Platform",
      "Digital Service Marketplace",
    ],
    path: "/services/gate-hub-360",
    logo: "/logos/designhub-360.png",
    live: false,
  },
  {
    id: "design-hub-360",
    name: "Design Hub 360",
    tagline: "We design, you grow.",
    description:
      "Brand identity, creative content and digital marketing built to move the growth needle.",
    features: [
      "Poster Design",
      "Brand Identity",
      "Social Media Creatives",
      "Video Editing",
      "Motion Graphics",
      "Digital Marketing",
      "Software Solutions",
    ],
    path: "/services/design-hub-360",
    logo: "/logos/gatehub-360.png",
    live: false,
  },
];