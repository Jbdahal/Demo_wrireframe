# Pravaro Website — Development Notes

## Design decisions

- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons.
- **Structure:** Single-page marketing site with anchor navigation.
- **Brand:** Official Pravaro logo drives palette — navy `#0B1D3A`, blue `#2563EB`, teal `#14B8A6`, purple `#7C3AED`. Typography: Plus Jakarta Sans.
- **Logo usage:** `logo-mark.png` (cropped icon) in navbar; full `logo.png` in hero and footer.
- **Features section:** Scroll-triggered SVG + Framer Motion animations per feature; Smart Rostering shows availability + requirements → SmartMatch → roster (not vacant-shift rescue).
- **CTAs:** Placeholder `href="#"` until real destinations are provided.

## Edge cases

- `prefers-reduced-motion`: feature animations show final static state; FadeIn sections render without motion.
- Pricing nav link targets `#pricing` within Final CTA section.

## User feedback (visual refresh)

- Reduced text density: Our Story → 4 pillar cards; Challenge → visual gap diagram; Providers → icon capability grid + 3 highlight cards.
- Hero uses animated dashboard mockup instead of static full logo.
- Feature sub-capabilities collapsed to 4 visible with expand toggle.
- Animations rebuilt with `AnimationFrame`, glass cards, spring transitions, larger touch-friendly sizing, and 1.5s step intervals.
