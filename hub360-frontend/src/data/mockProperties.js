// Placeholder listings so the Find Property UI is fully demo-able
// before the Express/MongoDB API is wired up.
// Replace this file's usage with a real fetch("/api/properties") call.
// `images` here are just placeholder photos (picsum.photos) — once the
// backend + ImageUploader are connected, swap these for the real
// uploaded photo URLs returned by the API.
export const mockProperties = [
  {
    id: "p1",
    title: "2BHK Apartment, Indiranagar",
    type: "Apartment",
    city: "Bengaluru",
    rent: 32000,
    bedrooms: 2,
    furnishing: "Semi-Furnished",
    description:
      "Bright 2BHK close to metro, gated community with 24x7 security.",
    images: [
      "https://picsum.photos/seed/renthub-p1-a/800/600",
      "https://picsum.photos/seed/renthub-p1-b/800/600",
      "https://picsum.photos/seed/renthub-p1-c/800/600",
    ],
  },
  {
    id: "p2",
    title: "Independent House, Whitefield",
    type: "House",
    city: "Bengaluru",
    rent: 45000,
    bedrooms: 3,
    furnishing: "Unfurnished",
    description: "Spacious 3BHK independent house with private parking.",
    images: [
      "https://picsum.photos/seed/renthub-p2-a/800/600",
      "https://picsum.photos/seed/renthub-p2-b/800/600",
    ],
  },
  {
    id: "p3",
    title: "Studio Flat, HSR Layout",
    type: "Flat",
    city: "Bengaluru",
    rent: 18000,
    bedrooms: 1,
    furnishing: "Fully Furnished",
    description: "Compact studio, ideal for a single professional.",
    images: ["https://picsum.photos/seed/renthub-p3-a/800/600"],
  },
  {
    id: "p4",
    title: "3BHK Apartment, Gachibowli",
    type: "Apartment",
    city: "Hyderabad",
    rent: 38000,
    bedrooms: 3,
    furnishing: "Semi-Furnished",
    description: "Family-friendly apartment near IT hub, clubhouse access.",
    images: [
      "https://picsum.photos/seed/renthub-p4-a/800/600",
      "https://picsum.photos/seed/renthub-p4-b/800/600",
      "https://picsum.photos/seed/renthub-p4-c/800/600",
      "https://picsum.photos/seed/renthub-p4-d/800/600",
    ],
  },
];