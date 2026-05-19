# FreshFold Laundry

A cinematic landing-page website for **FreshFold Laundry** — a premium laundry &
garment-care service with pickup and delivery across Lagos, Abuja and Port Harcourt.

Built with **Next.js 16** (App Router), Tailwind CSS, and Framer Motion.

## Generation fingerprint

| Axis | Value |
|------|-------|
| Archetype | **G** — Structured Hybrid (premium tier, T1 8s Veo hero loop) |
| Style | **S3** — Soft Pastel Wellness, re-toned fresh (cream / mint / teal) |
| Voice | V3 — warm, friendly, plain-spoken |
| Header | center-logo-split |
| Footer | FT1 — Classic 5-column |
| Hero | HO1 centred overlay · H5 text · E3 fade entrance |
| Cards | CV4 frosted glass (light-theme adaptation) |
| Contact | CT5 — multi-location grid (3 cities) |
| Sections | Stats ST1 · Testimonials TS1 · CTA CTA1 · About AB1 |
| Build mode | Landing page (no admin) |
| Asset mode | live-generate |

## Assets

Generated with Google Gemini:

- **Hero video** — 1 × 8s Veo 3.1 Lite loop (`public/hero.mp4`)
- **Section + service images** — 6 × Nano Banana stills (`public/section-*.jpg`, `public/service-*.jpg`)

Source prompts live in `prompts/`. Regenerate with `npm run gen:images && npm run gen:videos`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Routes

`/` · `/services` · `/services/[slug]` · `/about` · `/contact` · `/privacy` · `/terms`
plus `/robots.txt`, `/sitemap.xml` and the `/api/contact` pickup-request endpoint.

## Contrast audit (generated 2026-05-19)

| Pairing | Approx ratio | WCAG | Status |
|---------|--------------|------|--------|
| Hero H1 (#211c16) / cream wash | ~13.5 | AAA | PASS |
| Body text / cream background | ~7.6 | AA | PASS |
| On-dark text (#f4eee2) / forest (#14302a) | ~12.0 | AAA | PASS |
| Stat number (teal) / forest — large display | ~3.6 | AA (large) | PASS |
| CTA label (white) / teal button | ~3.4 | AA (large) | PASS |

All pairings meet their WCAG threshold for their text size.
