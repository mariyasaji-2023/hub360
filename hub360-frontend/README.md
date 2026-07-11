# Hub 360 Group — Frontend (React)

Frontend for the Hub 360 Group website, part of a MERN stack build.
Currently wires up the **Rent Hub 360** vertical end-to-end (frontend only —
forms log to console / use mock data until the Express + MongoDB API exists).

## Folder structure

```
hub360-frontend/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js       # brand color/type tokens
├── postcss.config.js
└── src/
    ├── main.jsx              # React root, router provider
    ├── App.jsx                # route table
    ├── index.css              # Tailwind layers + shared utility classes
    ├── components/
    │   ├── Navbar.jsx          # top nav: Home / Services / About / Contact
    │   ├── Footer.jsx
    │   ├── VerticalCard.jsx    # card used on Home + Services for each vertical
    │   └── PropertyCard.jsx    # listing card used on Find Property
    ├── data/
    │   ├── verticals.js        # copy + links for the 3 business verticals
    │   └── mockProperties.js   # placeholder listings until the API exists
    └── pages/
        ├── Home.jsx
        ├── Services.jsx
        ├── AboutUs.jsx
        ├── ContactUs.jsx
        └── renthub/
            ├── RentHub360.jsx    # vertical landing: 2 options
            ├── PostProperty.jsx  # "Post Property for Rent" form
            └── FindProperty.jsx  # "Find a Rental Property" search + results
```

## Routes

| Path                                         | Page                          |
|-----------------------------------------------|--------------------------------|
| `/`                                            | Home                           |
| `/services`                                    | Services (all 3 verticals)     |
| `/about`                                       | About Us                       |
| `/contact`                                     | Contact Us                     |
| `/services/rent-hub-360`                       | Rent Hub 360 landing            |
| `/services/rent-hub-360/post-property`         | Post Property for Rent form     |
| `/services/rent-hub-360/find-property`         | Find a Rental Property search   |

Gate Hub 360 and Design Hub 360 already have entries in `src/data/verticals.js`
(marked `live: false`) — add their pages under `src/pages/gatehub/` and
`src/pages/designhub/` and register routes in `App.jsx` the same way Rent Hub
360 is wired up.

## Motion & loading states

- **Boot splash** (`components/PageLoader.jsx`) — a branded spinner shown for ~1s when the app first loads, wired up in `App.jsx`.
- **Route progress bar** (`components/RouteLoader.jsx`) — a slim animated bar that pulses at the top of the page on every navigation.
- **Scroll reveals** (`components/Reveal.jsx` + `hooks/useReveal.js`) — wrap any section to have it fade/slide up the first time it scrolls into view; pass `delay` (ms) to stagger a group.
- **Search skeletons** (`components/PropertyCardSkeleton.jsx`) — Find Property shows shimmering skeleton cards for ~500ms whenever filters change, standing in for a real API round-trip.
- **Form loading states** — Post Property and Contact Us buttons show a spinner + disabled state while "submitting" (currently a simulated delay — swap for the real `fetch` await once the backend exists).

All animations respect `prefers-reduced-motion` and fall back to an instant, static state.

## Getting started

```bash
cd hub360-frontend
npm install
npm run dev
```

Open the URL Vite prints (defaults to http://localhost:5173).

## Connecting to the backend later

Forms and the property search currently use local state / mock data with
`TODO` comments marking exactly where to swap in real `fetch` calls, e.g.:

```js
await fetch("/api/properties", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

`vite.config.js` has a commented-out proxy entry — uncomment it once your
Express server is running locally so `/api/*` calls forward to it in dev.

## Brand tokens (Tailwind config)

Colors and fonts are centralized in `tailwind.config.js`. The palette is
deliberately restrained and corporate: deep navy (`navy.DEEP`/`navy.DEFAULT`)
carries the brand, a single steel-blue accent (`accent`, with an `accent-light`
variant for use on dark backgrounds) marks links and primary actions, and a
muted growth green (`grow`) is reserved for success states and the "post a
property" CTA. Headings use **Sora**, body copy uses **Inter** (both loaded
via Google Fonts in `index.html`).
