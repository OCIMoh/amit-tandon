# Amit Tandon Website Master Redesign Plan
## From Experimental Broadside to Awwwards SOTD Contender
**Target Project:** `amit-tandon-common-sense`  
**Subject:** Amit Tandon (Stand-up Comedian, Writer, TV Host, IIT Delhi MBA)  
**Status:** Approved for Implementation  
**Created:** October 2026  

---

## 1. Executive Vision: The Creative Pivot

### The Shift: From "Forensic Crime Dossier" to "The Analytical Comic"
The original POC pursued an interesting editorial premise (*"Common Sense, Under Review"*), but skewed too far into a cold, clinical, almost criminal investigation aesthetic (*"Evidence from the stage"*, *"The Person. Under review"*, *"Enough evidence. Walk into the room"*).

```
[Old Concept] ──▶ Forensic Autopsy, Cold Dossier, Random Skewed Zine Cuts, Syrupy Scroll-Pins
       ▼
[New Vision]  ──▶ "The Method in the Madness"
                  The analytical mind of an IIT Delhi engineer deconstructing
                  the hilarious, illogical quirks of middle-class Indian domestic life.
```

### Core Design Pillars:
1. **Intelligent & Analytical Yet Warm:** Retain the editorial typography and broadsheet discipline, but infuse it with Amit's authentic comedic voice, observational warmth, and Hindi cultural cadence (*"Aise Kaise?!"*, *"Hamare Zamane Mein"*, *"Paisa Aa Gaya... Class Nahi Aayi!"*).
2. **Instant Stature (The 5-Second Test):** A multi-generational headliner who has performed 2,000+ shows across 30+ countries and charted #1 on Netflix should command immediate authority.
3. **Frictionless Conversion:** Live tour bookings and high-value corporate inquiries must be 1-click accessible without scroll traps or confusing layouts.
4. **Cinematic, Snappy Micro-Interactions:** Web motion that honors the snappy rhythm and cadence of stand-up comedy instead of sluggish scroll-jacking.

---

## 2. Structural & Architectural Plan

### Section 1: Hero — The Analytical Comic (Opening)
- **Problem Fixed:** Eliminates the desktop scroll-trap (`pin: stage` scrubbing through 34% of scroll space).
- **Visuals:** Uses the newly extracted high-resolution [`hero1.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/hero1.jpg) (Amit onstage commanding the mic under warm theatrical lighting) with an ambient Ken Burns parallax reveal.
- **Copy:** 
  - Headline: *"The logic of everyday life. Deconstructed."* (Set in oversized `Fraunces` serif).
  - Subtitle: *"Observational Hindi stand-up from an engineer who never stopped taking notes."*
- **Stats Counter Bar:** Instant credibility baseline:
  - **200M+** YouTube Views
  - **30+** Countries Toured
  - **2,000+** Live Performances
- **Dual Action CTAs:**
  - `[ See Tour Dates (33 Cities) ↓ ]` (Primary Vermilion Button)
  - `[ Corporate & Keynote Bookings → ]` (Secondary Ghost Button)

---

### Section 2: Global Tour Ledger — *Aise Kaise Live*
- **Problem Fixed:** Replaces the messy, tilted paper cards and faux CSS Scotch tape with an architectural, high-end Tour Ledger.
- **Data Source:** Wired to the 33 live tour events in [`extracted_shows.json`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/content/extracted_shows.json) across UK, Europe, India, Australia, and the Middle East.
- **Interactive Global Schedule:**
  - **Filtering Tabs:** `All Shows (33)` · `UK & Europe (18)` · `India (7)` · `Australia & NZ (5)` · `Middle East & Asia (3)`.
  - **Row Architecture:**
    - Column 1: Date & Time (`14 Nov 2026 · 19:30`)
    - Column 2: City & Country (`London, UK`)
    - Column 3: Prestige Venue (`Southbank Centre` / `Sydney Opera House` / `Dubai Opera`)
    - Column 4: Availability Badge (`Selling Fast` / `Limited Seats`)
    - Column 5: Direct Ticket CTA (`Get Tickets →`)
- **Venue Bloom Interaction:**
  - Hovering a tour row smoothly reveals a subtle, warm-tinted atmospheric image of the venue in the ledger background.
- **Mobile Experience:** Converts into full-width thumb-friendly booking cards with instant tap targets.

---

### Section 3: Material & The Inline Cinema Theater
- **Problem Fixed:** Stops kicking visitors off-site to YouTube when clicking specials or clips.
- **Inline Cinema Drawer / Modal:**
  - Clicking any special (*"Family Tandoncies"*, *"Masala Sandwich"*, *"Bathroom ka Evolution"*) smoothly dims the page and launches an immersive, borderless 16:9 cinema player.
- **The "Gyan Bites" Punchline Showcase:**
  - Interactive quote cards based on his funniest observational one-liners:
    - *"My wife said we need to talk. Which means she talks, and I nod at calculated intervals."*
    - *"Middle class upgrade rule: You have arrived in life when you stop opening the car window for toll tickets."*
  - Hovering a punchline subtly previews the video clip timestamp.

---

### Section 4: Corporate Keynotes & Private Galas (The B2B Revenue Driver)
- **Problem Fixed:** Solves the complete omission of Amit's lucrative corporate comedy market.
- **The Value Proposition:**
  - Emphasizes his engineering background & IIT Delhi MBA credentials.
  - Positioned as the gold standard for Fortune 500 summits, leadership retreats, and CXO galas.
  - Tagline: *"Boardroom-smart, family-clean comedy tailored for enterprise summits. Guaranteed zero HR liabilities."*
- **Client Roster Badges:** Highlighting corporate trust across major industry leaders.
- **Direct Management Channel:**
  - One-click direct WhatsApp connection (`+91-9004040003`)
  - Fast corporate inquiry form modal (`hello@tandonamit.com`).

---

### Section 5: The Person — Bio & Milestones
- **Visuals:** Uses the clean high-resolution [`about.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/about.jpg) and [`amit.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/amit.jpg).
- **Narrative Arc:**
  - The Engineer's Pivot: IIT Delhi MBA → Startup Founder → Stage Pioneer.
  - Netflix Milestone: First Hindi stand-up solo special (*Family Tandoncies*), Top 10 India for 15 days.
  - Creative Breadth: Sony SAB's *Good Night India* (126 episodes), SonyLiv's *Chalo Koi Baat Nahin*, Spotify Original *Andar ki Baat*.

---

### Section 6: Footer & Quick Navigation
- **Streamlined Navigation:** Global tour shortcut, corporate booking link, full social channel links (YouTube, Instagram, X, Facebook).
- **Brand Consistency:** Official brand mark and copyright notice.

---

## 3. Motion & Animation Taste Guidelines

| Element | Old Implementation | New Awwwards-Calibrated Direction |
| :--- | :--- | :--- |
| **Smooth Scroll** | `Lenis` with `duration: 1.05` (sluggish, syrupy) | `Lenis` with `duration: 0.8` and `smoothWheel: true` (crisp, tactile, responsive). |
| **Hero Entrance** | Pinned scrub timeline (`pin: stage`, `scrub: 0.35`) | Fluid staggered reveal (`power4.out`, duration `0.85s`) with letter/line masking. No mouse trapping. |
| **Tour Ledger** | 12 cards with conflicting CSS `--r` tilts and hover transforms | Stable architectural grid with subtle row lift (`y: -2px`) and background venue bloom (`opacity: 0` to `0.18`). |
| **Card Rotations** | Gratuitous random tilts on every button, stamp, and image | Zero random tilts. Strict, clean grid structure. Hand-drawn accents used only for singular focal emphasis. |
| **Easing Functions** | Linear scrubs (`ease: "none"`) | Comedic timing eases: `power3.out` for reveals, `back.out(1.15)` for interactive clicks. |

---

## 4. Visual Design System & Asset Manifest

### Color Palette Tokens
```css
:root {
  /* Surface & Canvas */
  --bg-canvas: #FBF8F3;         /* Warm editorial linen / ivory */
  --bg-card: #FFFFFF;           /* Crisp surface white */
  --bg-dark: #12100E;           /* Deep obsidian carbon */
  --bg-dark-surface: #1E1B18;   /* Elevated dark card */

  /* Ink & Typography */
  --ink-primary: #12100E;       /* Deep warm black */
  --ink-secondary: #5A544D;     /* Muted editorial lead */
  --ink-muted: #8F867C;         /* Subtle caption grey */
  --ink-inverse: #F4EFE6;       /* White-warm for dark sections */

  /* Stage Accent */
  --red-stage: #D92D20;         /* Theatrical Crimson Vermilion */
  --red-hover: #B42318;         /* Deep crimson hover */
  --gold-accent: #D4AF37;       /* Subtle prestige gold for milestones */

  /* Borders & Dividers */
  --border-subtle: rgba(18, 16, 14, 0.08);
  --border-dark: rgba(244, 239, 230, 0.12);
}
```

### Typography Hierarchy
- **Display Headlines:** `Fraunces` (Variable 9..144pt serif) — conveys intellectual wit, editorial elegance, and human warmth.
- **Body & UI Elements:** `Instrument Sans` / `Plus Jakarta Sans` — ultra-legible, modern geometric sans for dates, tables, buttons, and bios.
- **Numbers & Metrics:** Clean tabular figures for tour dates and numerical statistics.

### Verified Asset Allocations
- **Hero Image:** [`assets/website assets/images/hero1.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/hero1.jpg) (237 KB, 1920×1080 stage mic portrait).
- **Tour Background:** [`assets/website assets/images/hero3.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/hero3.jpg) (157 KB wide auditorium crowd shot).
- **About Section:** [`assets/website assets/images/about.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/about.jpg) and [`assets/website assets/images/amit.jpg`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/amit.jpg).
- **Brand Icons:** [`assets/website assets/images/icon.png`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/icon.png) & [`apple-icon.png`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/apple-icon.png).
- **Social Cards:** [`assets/website assets/images/opengraph-image.png`](file:///d:/projects/amit-tandon/amit-tandon/assets/website%20assets/images/opengraph-image.png).

---

## 5. Technical Implementation Roadmap

```text
Phase 1: Foundation & Asset Swap
  ├── Step 1.1: Replace public image links with high-res files from 'website assets/images/'
  ├── Step 1.2: Refactor 'src/styles/tokens.css' with the new refined palette & typography tokens
  └── Step 1.3: Update 'src/styles/base.css' for crisp layout defaults without overflow bugs

Phase 2: Hero & Navigation Refactor
  ├── Step 2.1: Rebuild 'src/sections/nav.ts' with Corporate Booking & Tour shortcuts
  ├── Step 2.2: Rebuild 'src/sections/observation.ts' -> 'src/sections/hero.ts'
  └── Step 2.3: Integrate instant milestone counters (200M+ views, 30+ countries, 2000+ shows)

Phase 3: The Global Tour Ledger
  ├── Step 3.1: Rebuild 'src/sections/aise-kaise.ts' -> 'src/sections/tour.ts'
  ├── Step 3.2: Load and render 33 events from 'extracted_shows.json'
  ├── Step 3.3: Implement tabbed regional filtering (UK/Europe, India, Australia, Middle East)
  └── Step 3.4: Style interactive hover blooms and mobile-first ticket booking cards

Phase 4: Material & Inline Video Theater
  ├── Step 4.1: Rebuild 'src/sections/contradictions.ts' into an interactive video showcase
  ├── Step 4.2: Implement fluid inline video modal (preventing YouTube bounce)
  └── Step 4.3: Add interactive "Gyan Bites" punchline quote drawer

Phase 5: Corporate Channel & About
  ├── Step 5.1: Create 'src/sections/corporate.ts' for executive keynote bookings
  └── Step 5.2: Polish 'src/sections/person.ts' with verified credentials (IIT, Netflix, Sony SAB)

Phase 6: Motion & Performance Tuning
  ├── Step 6.1: Tune 'src/motion/setup.ts' (Lenis to 0.8s, responsive eases, eliminate scrub pins)
  ├── Step 6.2: Validate 60fps scroll performance and zero layout shift on mobile viewports
  └── Step 6.3: Run production build check ('npm run build')
```

---

## 6. Expected Outcome
Executing this plan will transform the website from a confusing, pinned prototype into a **cohesive, high-converting, Awwwards-worthy flagship experience** that properly reflects Amit Tandon's caliber as one of the world's premier Indian stand-up comedians.
