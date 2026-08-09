# TrackCare Landing Page

A marketing/investor landing page for TrackCare Nigeria, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Content is served from a mock data layer (`lib/mock-data.ts`) to simulate a real content/metrics backend.

## Stack
- Next.js 15 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- lucide-react
- Self-hosted fonts via @fontsource (Space Grotesk, IBM Plex Sans, IBM Plex Mono)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build
npm start         # production server
```

## Structure

```
app/page.tsx                 Page assembly
components/sections/         Navbar, Hero, Problem, Platform, Surfaces,
                              Investors, Security, Testimonials, Pricing,
                              CTA, Footer
components/ui/                PulseTrace (signature motif), Eyebrow
lib/mock-data.ts              All copy, stats, roadmap, pricing, testimonials
```

## Notes
- `Surfaces.tsx` is the Web / Mobile / Desktop showcase and is a client component (interactive tab switch).
- All figures (traction metrics, roadmap, testimonials, facility names) are illustrative mock data for a portfolio/demo build — replace with real figures before shipping publicly.
