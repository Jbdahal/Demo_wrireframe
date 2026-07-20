# Pravaro Suite — Marketing Website

The public marketing site for **Pravaro** — "Suite for healthcare heroes." Built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components by default) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 — theme tokens live in `src/app/globals.css` |
| Motion | Framer Motion, with `useReducedMotion()` guards throughout |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (headings/UI), Source Sans 3 (body copy) |

No CMS — all copy lives in typed TypeScript modules (see below). One API route exists: `/api/book-demo`, which emails demo requests from the contact form (see [Environment variables](#environment-variables)). The "notify me" capture is still front-end only (see [Known gaps](#known-gaps)).

## Project structure

```
src/
  app/                    Routes (App Router). One folder per URL segment.
    layout.tsx            Root shell: fonts, <Navbar>, <Footer>, metadata
    page.tsx               /
    products/
      page.tsx              /products
      roster/page.tsx        /products/roster        (live product)
      marketplace/page.tsx   /products/marketplace    (coming soon)
      [slug]/page.tsx        /products/:slug          (future "coming soon" placeholders)
    solutions/
      page.tsx               /solutions               (hub)
      care-teams/, schedulers/, agencies/, administrators/page.tsx
    about/page.tsx          /about
    contact/page.tsx        /contact
    resources/page.tsx      /resources

  components/
    layout/                Navbar, Footer — rendered once in the root layout
    sections/               Page-level building blocks (PageHero, CTASection,
                            BrandPromise, TrustSignals, SolutionsPageTemplate, …)
    ui/                     Small reusable primitives (Button, Badge, FeatureCard,
                            AttributeCard, Carousel, ScreenshotFrame, …)
    features/                The Roster product page's feature deep-dive:
                            FeatureBlock (expand/collapse UI) + one bespoke
                            Framer Motion animation per feature, in animations/
    visuals/                HeroVisual — the animated product carousel in the hero

  lib/
    content/                All page copy, typed and split by domain (see below)
    motion.ts               Shared spring presets (springSoft, springGentle)
    utils.ts                cn() classname helper
```

### Content

Every string of marketing copy lives in `src/lib/content/`, not hardcoded in components. Pages import from the barrel (`@/lib/content`), which re-exports everything:

| File | Owns |
|---|---|
| `shared.ts` | Nav links, footer columns, primary CTA, site metadata |
| `home.ts` | Homepage hero + "coming soon" teaser copy |
| `about.ts` | About page: name story, hero concept, story pillars, mission |
| `ai.ts` | The "AI built around the people using it" statement |
| `testimonials.ts` | Shared testimonial pool (tagged by audience) + trust-signal stats |
| `faq.ts` | FAQ accordion content |
| `solutions.ts` | The 4 audience pages (Care Teams / Schedulers / Agencies / Administrators) |
| `products/roster.ts` | Roster & Scheduling: full feature table, screenshots, sub-features |
| `products/marketplace.ts` | Marketplace: feature list |
| `products/placeholders.ts` | Unannounced "Coming Soon" products — empty by default; add an entry here to bring back a placeholder card on `/products` with no route changes |

**To change copy, edit the content file — don't touch the component.** Components are presentational and take their text as props/imports.

### Assets

```
public/
  brand/
    logo-wordmark.png       The one logo file the site uses (nav, footer, favicon fallback, OG image)
  screenshots/               Real app screenshots used on the homepage and /products/roster
    dashboard.png
    roster-calendar.png
    site-management.png
    clients-overview.png
    rbac-management.png
    mobile-login.png

docs/
  reference/                 Design source material — not used by the running site
    brand-guidelines.pdf       Official brand doc (palette, logo concept, tone)
    website-design-brief.pdf   The original site design/IA brief
```

`public/` holds only assets the site actually serves — if you add a new screenshot or logo variant, drop it there and reference it from the matching `src/lib/content/` file. `docs/reference/` is for source material a designer or future contributor would want (brand guidelines, the original design brief) that isn't rendered anywhere itself. Keep it that way — don't let loose screenshots or PDFs pile up in the repo root; either file them under one of these two folders or delete them once their content has been incorporated.

### Design tokens

Colors are defined once in `src/app/globals.css` and exposed as Tailwind utilities via `@theme inline` (so `bg-primary`, `text-strong`, etc. work directly in `className`):

| Token | Hex | Use |
|---|---|---|
| `--color-soft` | `#F6F1FF` | Backgrounds, large surfaces |
| `--color-light` | `#BE9FFF` | Secondary accents, hover states |
| `--color-primary` | `#9178C6` | Primary buttons, key UI, headings |
| `--color-strong` | `#5A37A4` | CTAs, nav emphasis |
| `--color-darkest` | `#422D6F` | Dark text, footer background |
| `--color-ink` | `#2D2D2D` | Body text |
| `--color-muted` | `#6B6B6B` | Secondary/muted text |

Never hardcode hex values in components — use the token classes so a future palette change is a one-file edit.

## Motion & accessibility

- Every animated component checks `useReducedMotion()` and renders a static equivalent when the user has that OS preference set — this is a hard requirement, not optional polish, when adding new animated components.
- `FeatureBlock`'s "+N more capabilities" expand/collapse animates only the delta items (via `AnimatePresence`), not the whole card — see that component if you're adding similar expand/collapse UI.
- The homepage `HeroVisual` and the Roster product page's `Carousel` both support keyboard/click navigation, not just hover.

## Environment variables

`/api/book-demo` (used by the contact form's "Book a Demo" submit) sends mail via SMTP through Nodemailer. It needs these variables at runtime — copy `.env.local.example` to `.env.local` and fill in real values for local dev:

| Variable | Purpose |
|---|---|
| `SMTP_HOST` | SMTP server host, e.g. `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port, e.g. `587` |
| `SMTP_SECURE` | `"true"` for port 465, `"false"` for STARTTLS (587) |
| `SMTP_USER` | Sending account username (also used as the `From` address) |
| `SMTP_PASS` | Sending account password / app password |

Demo requests are currently hardcoded to land at **jbdahal13@gmail.com** (`DEMO_NOTIFY_EMAIL` in `src/app/api/book-demo/route.ts`).

Without these set, submitting the form returns a 400/502 and no email is sent — see [Known gaps](#known-gaps).

## Known gaps

These are intentionally stubbed pending real infrastructure — flagged here so they don't get mistaken for bugs:

- **Contact form** (`components/sections/ContactForm.tsx`) posts to `/api/book-demo`, but that route needs the SMTP env vars above configured — without them, submissions fail. The destination email is also hardcoded rather than user-configurable.
- **"Notify me" capture** (`components/ui/ComingSoonCard.tsx`) is still client-side only — no submission target yet.
- `/resources` is a stub (FAQ only) — no blog/docs yet.
- Legal pages (Privacy Policy, Terms of Service) are placeholder links (`#`) in the footer.

## Deployment

Standard Next.js app — deploys as-is to Vercel or any Node host. Requires the SMTP [environment variables](#environment-variables) above for the demo-booking email to work.

### Docker

```bash
docker build -t pravaro-website .
docker run --env-file .env.local -p 3000:3000 pravaro-website
```

The `Dockerfile` declares empty `SMTP_*` defaults for documentation — it does **not** bake in real credentials (they're gitignored via `.env*` in `.dockerignore`). Pass them at `docker run` time with `--env-file` or `-e`, or the demo form will fail to send.
