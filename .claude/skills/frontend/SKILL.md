---
name: frontend
description: Build or edit UI in this React 19 + Vite + Tailwind v4 site for RadarPro Security Systems. Use whenever adding a section, component, copy, or style change under src/, or when a new batch of customer flyers/PDFs arrives to be turned into site changes. Covers file layout, the navy/glass design system, framer-motion patterns, the customer-asset pipeline, house copy style, and the verify loop.
license: Portions adapted from anthropics/skills frontend-design (Apache 2.0). See LICENSE.txt.
---

# Frontend work on radarproph

Corporate site for **RadarPro Security Systems**, a Philippine-based **security systems
integrator** (CCTV, access control, intrusion detection, perimeter security, video intercom,
consulting), with 24/7 CCTV monitoring as the flagship priced service.

Stack: React 19, Vite 8, Tailwind v4 (CSS-first config), framer-motion, plain `.jsx`
components. `src/main.tsx` is the only TS file, but `pnpm build` runs `tsc -b`, so keep it valid.

> The site was repositioned in Aug 2026 from "24/7 CCTV monitoring service" to "security
> systems integrator", driven by the customer's corporate-profile PDF. Copy that still frames
> RadarPro as monitoring-only is stale.

**Three modes. Decide which you're in before touching a file.**

- **Extending the existing page** (most work). Follow the conventions below and reuse what
  exists. No design brainstorm needed.
- **A new customer asset batch arrives.** Read `references/customer-assets.md` first. There
  is an established compare-then-implement workflow and an asset-extraction toolchain.
- **A new surface with no visual direction yet** (second page, rebrand). Read
  `references/design-direction.md` and run its plan→critique gate *before* writing code.

## Where things go

| What | Where |
| --- | --- |
| Full-width page section | `src/sections/<Name>Section.jsx`, mounted in `src/App.jsx` |
| Reusable presentational piece | `src/components/ui/` |
| Motion / background / media wrappers | `src/components/shared/` |
| Navbar / Footer | `src/components/layout/` |
| **Contact details (only place)** | `src/data/contactData.js` |
| Company copy, industries, values, why-choose | `src/data/companyData.js` |
| Service portfolio | `src/data/servicesData.js` |
| Camera form factors, brands, ATEX products | `src/data/surveillanceData.js` |
| Pricing, disclaimer, important notes | `src/data/pricingData.js` |
| Partner logos + taglines | `src/data/partnersData.js` |
| Design tokens | the `@theme` block in `src/index.css` |

Component contract, matched by every file in `src/components/`: `export default function`, a
`className = ''` prop merged **last** in the template string so callers can override, and
`...rest` spread onto the root element. Match it.

### contactData.js is the single source of truth

Phone, email, address, and website exist **only** in `src/data/contactData.js`. It also
exports `mapEmbedUrl`, `directionsUrl`, and `enquiryMailto(subject, body)` for prefilled
enquiry links. Never re-hardcode a phone number or address into a component. These were
previously duplicated across `Footer`, `LocationSection`, `PricingCard`, and `index.html`,
and consolidating them was deliberate.

`index.html` is the one place that necessarily repeats them (JSON-LD, meta tags). If contact
details change, update `contactData.js` **and** the `SecurityService` JSON-LD block, including
`geo` coordinates.

## Design system

The direction is committed: dark navy ground, blue brand ramp, glass surfaces. Don't drift.

- Tokens live in `@theme` (`--color-navy-950`, `--color-brand-500/600/900`, `--font-sans`) and
  are used as `bg-navy-950`, `text-brand-500`. A new color means a new token, not an inline hex.
- Surfaces are glass: use `<GlassCard>` rather than re-typing
  `border-white/10 bg-white/[0.04] backdrop-blur-xl`.
- Text ramp: white headings, `text-white/70` body, `text-white/55`–`/60` secondary,
  `text-white/40`–`/50` muted. `/40` is the floor and only for genuinely incidental text.
- Radii: `rounded-2xl` cards, `rounded-full` buttons/badges/nav pill.
- Use `<Container>`, `<SectionTitle>`, `<Button variant="primary|outline|ghost">`,
  `<FeatureCard>`, `<ServiceCategoryCard>` (title + bullet list), `<PartnerCard>`,
  `<ValueCard>`, `<PricingCard>`, `<VideoPlayer>`. Do not grow a parallel version of any.
- Glow/ambient effects belong in `<GlowBackground>` or the body gradient in `src/index.css`.

**Photo-backed panels.** When putting content over a photo, layer:
photo → flat scrim → gradient → content at `relative`. Scrim around `bg-navy-950/55` reads as
a visible backdrop; `/85` kills the photo entirely. Keep text inside a `GlassCard` so it never
renders directly on the image. Decorative images get `alt=""` + `aria-hidden="true"`.

**Spend boldness in one place.** The page already has its signature (navy + glass + glow). A
new section should be quiet around the existing content. Before finishing, remove one decoration.

## Motion

- Scroll reveals go through `<AnimatedSection delay={...}>`, which already sets
  `viewport={{ once: true, amount: 0.2 }}` and the house easing. Never write a bare
  `whileInView` in a section.
- Hover/tap belongs inside the component (`whileHover={{ y: -2 }}`, `whileTap={{ scale: 0.97 }}`).
- Stagger a list with incrementing `delay` (~0.05–0.08s steps), not nested variants.
- `<MotionConfig reducedMotion="user">` wraps the app in `App.jsx`. Keep it, because framer-motion
  animations ignore the OS reduced-motion setting without it.
- More animation is the fastest way to make a page read as AI-generated. If an effect doesn't
  carry meaning, cut it.

## Copy

- **No em dashes.** House style. Use a full stop for two independent clauses, "rather than"
  for a contrast, a colon to introduce a list, or restructure the sentence. Don't just delete
  the character and leave a comma splice.
- Write from the customer's side of the screen. Specific beats clever.
- Active voice on every control; keep an action's name stable across the flow.
- Sentence case, plain verbs, one job per element.
- Prefer verbatim customer copy for company statements (mission, vision, service bullets).
  Where source material has typos or mislabels, fix silently but say so in the report.

## Adding a section: checklist

1. List-shaped content goes in the relevant `src/data/*.js`.
2. Create `src/sections/<Name>Section.jsx`: `<section id="...">` → `<Container>` →
   `<AnimatedSection>` → `<SectionTitle>` → a grid of `ui/` components.
3. Import it in `src/App.jsx`, in visual order inside `<main>`.
4. For a nav entry, add `{ label, href: '#id' }` to `links` in
   `src/components/layout/Navbar.jsx` and give the section a matching `id`. Links marked
   `wide: true` are hidden below `xl` to keep the pill from crowding. The desktop nav holds
   about four links comfortably, seven at `xl`. The mobile menu always shows all of them.
5. Consider adding it to `companyLinks` in `Footer.jsx`.

## Quality floor

- Responsive to mobile, mobile-first; breakpoints `sm:`/`md:`/`lg:`/`xl:`. Check 390px.
- Keyboard focus: a global `:focus-visible` ring is set in `src/index.css` because the browser
  default vanishes on navy. Don't remove outlines.
- Reduced motion respected via CSS *and* `MotionConfig`.
- `loading="lazy"` on below-the-fold images. Video uses `preload="none"` + poster, never
  autoplay with sound.
- Watch utility conflicts: `className` merges last, so a caller's `p-*` and a component's `p-*`
  both land in the class list. Override at the call site; don't stack contradictions inside one
  component.

## Verify

```bash
pnpm lint     # eslint + react-hooks + react-refresh
pnpm build    # tsc -b && vite build, must pass before calling it done
pnpm dev      # http://localhost:5199 or 5173
```

There is no test suite; `package.json` defines no `test` script. Don't claim tests passed.

**`dist/` is gitignored but 18 files are still tracked** from before the untrack commit. Any
build deletes/modifies them. Run `git checkout -- dist` after building so the diff stays clean.

For actual visual checking, including the headless-Chrome workaround for scroll reveals that
never settle, see `references/verification.md`. Always look at the result; don't just diff it.

## Don'ts

- No new UI / animation / icon dependency without asking. Icons come from `react-icons` (hi2,
  Heroicons v2). Don't swap in bitmap icons from customer PDFs.
- No `tailwind.config.js`. Tailwind v4 is configured in `src/index.css`.
- Don't edit `dist/`.
- Don't restyle existing sections as a side effect of adding a new one.
- Don't publish a customer's personal photo (e.g. a headshot from a deck) without being asked.
