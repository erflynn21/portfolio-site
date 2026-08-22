
# Handoff: Portfolio Homepage Redesign (Editorial Direction)

## Overview
A full redesign of the evanflynn.com homepage, positioned for landing a full-time Implementation / Technical Support role. Leads with quantified impact metrics, reframes "work" around professional case studies (not side projects), and adds a light/dark theme toggle. Replaces the current `src/routes/+page.svelte` hero/skills content and folds in a restructured `src/routes/work/+page.svelte`.

## About the Design Files
The bundled file (`design-reference.html`) is a **design reference** — an interactive HTML/JS prototype showing exact layout, copy, colors, type, and behavior. It is NOT production code to paste in. The task is to **recreate this design inside the existing SvelteKit + Tailwind + DaisyUI codebase**, using its existing patterns (`.svelte` components/routes, Tailwind utility classes, `$lib` components) rather than the prototype's inline-style implementation.

## Fidelity
**High-fidelity.** Final copy, exact hex colors, exact type scale and spacing are specified below and in the reference file. Recreate pixel-perfectly.

## Current codebase context (for the implementer)
- SvelteKit (legacy `next` adapter era — routes use `+page.svelte` / `+page.js`), Tailwind + DaisyUI, deployed to Cloudflare Pages.
- `src/routes/+layout.svelte` wraps every page in `<Nav />` + `<main>` + `<Footer />`, with a `data-theme=""` attribute on the root div (DaisyUI theme system) and page-transition progress bar (NProgress).
- `src/lib/Nav.svelte` currently renders a **~28-option DaisyUI theme switcher dropdown** (Cupcake, Synthwave, Dracula, etc.) — **replace this entirely** with the single light/dark toggle described below. This was flagged in the original audit as undermining the site's visual identity.
- `src/routes/+page.svelte` currently has the old hero + pipe-delimited skills text — replaced by this design.
- `src/routes/work/+page.svelte` + `src/lib/Project.svelte` currently render side projects from Sanity (`data.body.projects`) as cards — this design demotes those to a secondary "Also builds" strip and promotes 3 new hardcoded case studies (Moov / Proxyrack work) to the primary "Selected work" section.
- Existing page transitions use Svelte's `fly`/`slide` transition directives — reuse that idiom for section enter animations instead of the prototype's CSS `@keyframes`.
- Existing accent color is DaisyUI's `--p` (primary) CSS variable, used via `hsl(var(--p))` / `text-primary` / `bg-primary`. Recreate the new accent (see Design Tokens) by updating the DaisyUI theme config in `tailwind.config` rather than hardcoding hex values through the templates, so `text-primary` etc. keep working sitewide.

## Screens / Views

### 1. Homepage (`src/routes/+page.svelte`)
Single scrolling page, sections top to bottom:

**Nav** (replaces `src/lib/Nav.svelte` theme dropdown)
- Left: wordmark "Evan Flynn" — 13px JetBrains Mono, 500 weight, uppercase, 0.1em letter-spacing.
- Right: nav links "Work", "Contact" (13px JetBrains Mono) + a theme toggle button — small pill, 1px border in accent color, text `● Light` / `● Dark` depending on current theme, 11px JetBrains Mono.
- Max-width 1180px container, centered, 22px vertical / 44px horizontal padding.

**Hero**
- Eyebrow line: "Implementation + Support Engineer @ Moov" — 13px JetBrains Mono, uppercase, 0.14em letter-spacing, accent color.
- H1: "Bridging people and the software they rely on." — Instrument Serif (regular/400, NOT bold), `clamp(46px, 8.2vw, 108px)`, line-height 0.98, letter-spacing -0.01em, max-width 14ch.
- Body paragraph: "I support and implement software for the people who depend on it daily — and build performant web & mobile apps that prove how it should feel." — `clamp(17px, 2vw, 21px)`, line-height 1.6, secondary text color, max-width 600px.
- Two CTAs: filled pill button "See selected work" (links to `#work`, accent bg, dark text, 600 weight, 14px, 15px/28px padding, fully rounded) + outline pill "Get in touch" (links to `#contact`, 1px border, transparent bg).
- Padding: `90px 44px 50px`.

**Stats band**
- Border-top divider. 4-column responsive grid (`repeat(auto-fit, minmax(180px,1fr))`), 28px gap, 50px/44px padding.
- Each stat: big Instrument Serif number (54px, accent color, line-height 0.9) + 14px label below (500 weight, primary text) + 12px JetBrains Mono sub-caption (tertiary text).
- Stats: **80%** faster onboarding (3–6 months → 2–3 weeks) · **63** enterprise launches (at Moov, +17 in progress) · **4.9** CSAT score (98% satisfaction rate) · **112** customers supported (on a live payments API).

**Section 01 — Selected work** (`#work`)
- Section label: small "01" (accent, JetBrains Mono) + "Selected work" (32px Instrument Serif).
- 3-column responsive card grid (`minmax(320px,1fr)`, 30px gap). Each card: 1px border, 16px border-radius, subtle bg tint, 32px/30px padding. Card hover: lift `translateY(-4px)` + border turns accent color (300ms).
- Card content top to bottom: org · category (12px mono, tertiary) → big metric in Instrument Serif 38px accent color → project name (20px/600) → description (14px, secondary, 1.65 line-height) → stack (12px mono, tertiary, pinned to bottom via `margin-top:auto`).
- 3 cards (real content, pull verbatim):
  1. **Moov · Implementation** — metric "80% faster onboarding" — "Customer Implementation Framework" — "Built a Pylon-based tracking system linking customer milestones, compliance checkpoints and automated stakeholder alerts — surfacing blockers before they hit timelines." — stack: Pylon · incident.io · Looker
  2. **Proxyrack · Developer Experience** — metric "50+ live code examples" — "Interactive API Documentation" — "Authored & validated 50+ editable code examples across Python, JS, Node & PHP in an embedded sandbox so developers could test auth, rotation and geo-targeting right in the docs." — stack: REST / GraphQL · Postman
  3. **Proxyrack · Global Enablement** — metric "6 languages · 100% coverage" — "Multilingual Documentation" — "Self-initiated internationalization of the full help center & API docs with an AI-assisted, human-reviewed workflow, plus a sync process to keep every translation current." — stack: Intercom · Prismy AI

**Section 02 — Also builds**
- Label "02" + "Also builds" (same style as above). Intro line: "Side projects — web & mobile apps I design and ship end to end. Proof I speak fluent developer when I'm supporting one." (15px, secondary, max-width 540px).
- 4-column responsive grid (`minmax(250px,1fr)`, 22px gap). Each card: image (140px tall, object-cover) + 18px/20px padding below with project name (16px/600) + status badge (10px mono, accent) + stack (11px mono, tertiary). Same hover lift as work cards. Links open in new tab.
- Pull the 4 project cards (name/desc/stack/status/url/img) from the existing `data.body.projects` Sanity query already powering `src/routes/work/+page.svelte` — no new content model needed, just a new template for this compact card style.

**Section 03 — Toolkit**
- Label "03" + "Toolkit" (32px Instrument Serif).
- Responsive grid (`minmax(220px,1fr)`, 40px gap), one column per skill group. Group label: 12px mono, uppercase, 0.1em tracking, tertiary. Skills rendered as pill chips: 14px text, 7px/13px padding, 1px border, fully rounded, subtle bg tint.
- Groups (use exactly — already deduped/curated from résumé):
  - Technical Support: Pylon, Intercom, HelpScout, Notion, incident.io, jam.dev, AI chatbots
  - Customer Engagement: Onboarding strategy, Implementation planning, Technical documentation, CSAT management, Feedback optimization
  - APIs & Debugging: REST / GraphQL, Postman, API troubleshooting, Log analysis, DevTools
  - Data & Monitoring: BigQuery, Looker, SQL, Honeycomb, KPI tracking
  - Programming: JavaScript, Python, Node.js, HTML / CSS, Flutter / Dart, Terminal / CLI
  - Cloud, DevOps & Backend: Git / GitHub, CI/CD, Cloudflare, Google Cloud, Netlify, Firebase, MongoDB, Airtable, App Store deploy
  - No / Low-Code & Integrations: Flutterflow, Webflow, Zapier, n8n, Plaid, Payment platforms
  - Collaboration: Linear, Slack, macOS / Linux / Windows
- Footnote line below the grid (12px mono, tertiary): "Also comfortable with Adobe Creative Suite, Final Cut Pro, Google Workspace, Audacity — and a fluent Mandarin Chinese speaker."

**Contact** (`#contact`)
- Centered text block, 110px/44px top / 70px bottom padding.
- Eyebrow: "● Let's connect" (13px mono, uppercase, accent).
- H2: "Always up for a good conversation." — Instrument Serif, `clamp(40px,6.5vw,82px)`, line-height 1.02. (Deliberately does not mention job-searching — user is currently employed and doesn't want their employer to see an active job-search signal on the site.)
- 4 buttons in a row (wrap on mobile): filled accent pill `evan@evanflynn.com` (mailto), outline pill "Download résumé" (links to the résumé PDF, `download` attribute), outline pill "LinkedIn", outline pill "GitHub".
- Footer line: "© 2026 Evan Flynn" (12px mono, tertiary).
- Note: this in-page contact block is presentational/final in the new hero page — the site's existing dedicated `/contact` route and its form (`src/routes/contact/+page.svelte`) are unaffected and should stay linked from Nav.

## Interactions & Behavior
- **Section reveal-on-load**: every major section fades up ~30px on entry (CSS `@keyframes fadeUpBig`, 0.9s `cubic-bezier(.2,.7,.2,1)`). In Svelte, prefer native `transition:fly` (already used elsewhere in this codebase) with equivalent `y: 30, duration: 900` rather than porting raw CSS keyframes.
- **Card hover**: `translateY(-4px)` + border color → accent, 300ms ease, on both work and project cards.
- **Button hover**: primary buttons lift `translateY(-2px)`; outline buttons swap border+text to accent color.
- **Nav link hover**: text color → accent.
- **Theme toggle**: click swaps entire palette (see Design Tokens) between dark/light. Persist choice in `localStorage` (`evan-theme` key) and read it on mount so the choice survives reload. This should replace DaisyUI's `data-set-theme` multi-theme dropdown — implement as a single boolean/enum stored via `theme-change` or a simple custom store, and update the DaisyUI `data-theme` attribute on the root between two custom theme entries (`portfolio-dark` / `portfolio-light`) defined in `tailwind.config`.
- No responsive breakpoint changes needed beyond what `auto-fit`/`minmax` grids already provide — grids naturally collapse to 1–2 columns on narrow viewports.

## State Management
- `theme: 'dark' | 'light'` — persisted to `localStorage`, defaults to `'dark'`, read on mount.
- No other client state; all copy/content can be static/hardcoded except the "Also builds" project cards, which should continue to come from the existing Sanity `projects` data already wired into `/work`.

## Design Tokens

**Colors — dark (default):**
- Background: `#0c0d10` with radial gradient overlay `radial-gradient(1200px 620px at 72% -12%, rgba(110,168,255,0.12), transparent 60%)`
- Primary text: `#f2f3f5`
- Secondary text: `#b3b7c0`
- Tertiary text: `#7a7f8a`
- Accent: `#6ea8ff` (text-on-accent: `#06080d`)
- Border: `rgba(255,255,255,0.09)`
- Card bg: `rgba(255,255,255,0.02)`
- Image placeholder bg: `#13151b`

**Colors — light:**
- Background: `#f9f9fc` with radial gradient `rgba(110,168,255,0.08)` variant
- Primary text: `#1a1b1e`
- Secondary text: `#5a5f6e`
- Tertiary text: `#8a8f99`
- Accent: `#2b5fff` (text-on-accent: `#ffffff`)
- Border: `rgba(0,0,0,0.08)`
- Card bg: `rgba(0,0,0,0.01)`
- Image placeholder bg: `#f0f1f5`

**Typography:**
- Display/headline: `Instrument Serif` (regular italic-capable serif, Google Fonts), weight 400 only.
- Body/UI: `Space Grotesk`, weights 400–700.
- Mono (labels, eyebrows, stats captions): `JetBrains Mono`, weights 400–700.
- Load via Google Fonts `<link>` (see reference file `<head>`).

**Spacing/Layout:**
- Content max-width: 1180px, centered, horizontal padding 44px (drops naturally on mobile via container padding).
- Section vertical rhythm: 80px top/bottom padding for major sections, 50px for the stats band, 110px/70px for the closing contact block.
- Border-radius: 16px (work cards), 14px (project cards), 100px (pill buttons/chips).

**Motion:**
- Entrance: translateY(30px)→0, opacity 0→1, 900ms, `cubic-bezier(.2,.7,.2,1)`.
- Hover transitions: 300ms ease on transform/border-color.

## Assets
- Fonts: Google Fonts (Instrument Serif, Space Grotesk, JetBrains Mono) — no local font files needed.
- Project thumbnails for "Also builds": already hosted on Sanity CDN via the existing `projects` query — no new assets required.
- Résumé PDF: needs a real hosted URL (e.g. `static/resume.pdf` or a Sanity asset) — reference file currently points to a placeholder path.

## Files
- `design-reference.html` — the full interactive prototype (open directly in a browser). Includes both dark and light theme states (toggle top-right nav).
- `screenshots/` — static captures of each section: `01-hero-dark.png`, `02-stats-work-dark.png`, `03-alsobuilds-dark.png`, `04-toolkit-dark.png`, `05-contact-dark.png`, `06-hero-light.png`.
