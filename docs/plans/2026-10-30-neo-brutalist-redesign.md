# Neo-Brutalist Pop-Art Website Redesign Plan (Image 1 Exact Implementation)

> **Goal:** Transform the Amit Tandon website into the exact "Neo-Brutalist Pop-Art Comic Machine" design from Image 1, featuring interactive physics, 4-color perforated concert tickets, an interactive 3-reel "Aise Kaise?" slot machine, a ringing retro red corporate telephone, and a Sunday comic strip special showcase.
> 
> **Architecture:** Vanilla CSS Neo-Brutalist design system (hard offset shadows, halftone dot matrix, sticker rotations) + componentized TypeScript modules + Lenis smooth scrolling + zero-dependency interactive micro-games.
> 
> **Tech Stack:** Vite, TypeScript, Vanilla CSS, Lucide icons, Canvas Confetti / CSS Animations, Lenis.

---

## 1. Design Tokens & Visual DNA Specification (`src/styles/tokens.css`)

### Color Palette Matrix (Exact from Mockup 1):
- **Base Obsidian Black:** `#0C0B0E` (Stage backdrop, text in tickets, borders)
- **Paper Canvas Off-White:** `#F6F3EB` (Warm comic newsprint ground)
- **Electric Acid Saffron:** `#FFE500` (Hero headline accents, trigger punchline CTA, London ticket)
- **Theatrical Vermilion / Hot Red:** `#FF3B1D` (Headline accents, red rotary phone, Sydney ticket, lever knob)
- **Neon Cyan / Electric Blue:** `#00F0FF` (Dubai ticket, speech bubbles, Gyan Bites soundboard)
- **Mumbai Concrete Light Gray:** `#E4E3DD` (Mumbai Gateway ticket, neutral pill badges)
- **Chalkboard Charcoal:** `#18181B` (Corporate section backing)

### Brutalist Shadow & Border Tokens:
- `--border-brutal: 2.5px solid #0C0B0E`
- `--shadow-brutal-sm: 3px 3px 0px #0C0B0E`
- `--shadow-brutal-md: 5px 5px 0px #0C0B0E`
- `--shadow-brutal-lg: 8px 8px 0px #0C0B0E`
- `--shadow-brutal-yellow: 5px 5px 0px #FFE500`
- `--shadow-brutal-cyan: 5px 5px 0px #00F0FF`
- `--shadow-brutal-red: 5px 5px 0px #FF3B1D`

### Halftone & Dot Matrix Background:
```css
.bg-halftone {
  background-image: radial-gradient(rgba(12, 11, 14, 0.12) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
}
.bg-halftone-dark {
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
}
```

---

## 2. Section-by-Section Implementation Breakdown

### Phase 1: Design System & Tokens
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\styles\tokens.css`
- Modify: `d:\projects\amit-tandon\amit-tandon\src\styles\base.css`
- Modify: `d:\projects\amit-tandon\amit-tandon\index.html` (Import `Space Grotesk`, `Bungee` / `Cabinet Grotesk`, `Space Mono`)

**Tasks:**
1. Define all neo-brutalist CSS custom properties: colors, hard offset shadows, sticker tilt classes (`.tilt-left`, `.tilt-right`), and halftone patterns.
2. Load Google Fonts: `Space Grotesk` (700/900 weight for punchy brutalist titles) and `Space Mono` (for data/barcodes).
3. Reset base styling: Remove soft luxury serif defaults; enforce crisp, comic, high-contrast typography and paper borders.

---

### Phase 2: Navigation Bar & Ticker Tape
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\nav.ts`
- Create: `d:\projects\amit-tandon\amit-tandon\src\sections\ticker.ts`

**Specifications:**
- **Navigation (Sticky Black Bar):**
  - Left: `AMIT TANDON` in distressed stencil brutalist font with tiny crown icon doodle.
  - Center: Pill links `[ SPECIALS ]` `[ TOUR ]` `[ CORPORATE ]`.
  - Right: High-visibility Vermilion Pill: `[ BOOK AMIT → ]` with `--shadow-brutal-sm`.
- **Marquee Ticker (Hazard Strip):**
  - Yellow background bar with top/bottom 2px black borders.
  - Continuous infinite loop:
    `▶ 200M+ VIEWS ★ 🌐 30+ COUNTRIES ★ 🎫 2,000+ SHOWS ★ 👨‍👩‍👧‍👦 NO UNCLE WAS HARMED ★ 📺 #1 NETFLIX INDIA ★`

---

### Phase 3: The Hero Section ("The Method in the Madness")
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\observation.ts`
- Create/Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\hero.css`

**Visual Composition:**
1. **Title Cluster:**
   - Massive stencil text `AMIT TANDON` (white fill, 3px black stroke, drop shadow) with yellow crown doodle.
   - Yellow banner label: `THE METHOD IN THE MADNESS` (tilted -2deg).
2. **Central Character & Stickers:**
   - Cutout of Amit Tandon holding a microphone with white sticker border outline.
   - **Floating Pressure Cooker:** Whistling pressure cooker illustration positioned at his lower torso with CSS animated cyan steam clouds (`@keyframes puff`).
   - **Comic Speech Bubbles:**
     - Red circle: `AISE KAISE?!`
     - Cyan cloud bubble: `HUH?`
     - Yellow comic bubble: `WHY?`
     - White handwritten scribble: *"Same people, different problems"*.
   - **Vintage CRT TV Monitor:** Small TV set on the right showing a looping black-and-white face clip.
3. **Interactive Trigger:**
   - **`[ TRIGGER PUNCHLINE → ]` Button**: Large yellow brutalist button with hard black shadow.
   - **Action:** Clicking fires audio/comic reaction tags (`*WHISTLE!*`, `*HAHA!*`, `*TAALIYAN!*`) floating across the hero with bouncy spring physics!

---

### Phase 4: "Comedy. Extra Masala." (Sunday Comic Strip Specials)
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\contradictions.ts`
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\contradictions.css`

**Visual Composition (3-Column Comic Grid):**
1. **Section Header:**
   - `COMEDY. EXTRA MASALA.` (Heavy black text with `EXTRA MASALA` in hot vermilion red) + handwritten note *"Same family. Different drama."*
2. **Card 1: Retro CRT TV (*Family Tandoncies*)**:
   - Styled like a real 90s television with dark metallic bezel, speaker grill, twin tuning knobs, and glass scanlines.
   - Screen displays Amit's Netflix special artwork with glowing red badge: `NOW STREAMING ON NETFLIX`.
   - Hovering triggers video preview in an authentic CRT cinema overlay.
3. **Card 2: Masala Sandwich (*Chef's Special*)**:
   - Tilted yellow comic card featuring an illustrated multi-layer club sandwich wrapped in newsprint paper.
   - Badges: `CHEF'S SPECIAL - 100% RELATABLE`.
   - Details: *"Three generations. One house. Infinite opinions."*
4. **Card 3: Gyan Bites Soundboard**:
   - Electric cyan brutalist card with 3 interactive audio pills:
     - `[ BAS 5 MINUTE ⏱️ ]`
     - `[ SHARMA JI KA BETA 🎓 ]`
     - `[ FAMILY WHATSAPP 📱 ]`
   - Clicking each pill updates the comic reaction bubble and reveals the hilarious quote with sound effect.

---

### Phase 5: "Next Stop: Your City" (The 4 Colored Perforated Gig Tickets)
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\aise-kaise.ts`
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\aise-kaise.css`

**Visual Composition:**
1. **Section Header & Region Tabs:**
   - `NEXT STOP: YOUR CITY.` + World Tour 2026 badge.
   - Filter Buttons: `[ ALL DATES (33) ]`, `[ UK & EUROPE ]`, `[ INDIA ]`, `[ DUBAI & SE ASIA ]`, `[ AUSTRALIA ]`.
2. **The 4 Featured Graphic Concert Tickets (2x2 Grid):**
   - **London (Electric Yellow `#FFE500`):**
     - Left: Big Ben architectural line-art illustration + `LIVE ON STAGE`.
     - Center: `LONDON` in massive black grotesque type.
     - Badge: `SELLING FAST` (red pill).
     - Right: Perforated tear-line with circular notch cutouts + scannable barcode + `[ GRAB TICKETS → ]` button.
   - **Mumbai (Concrete White/Gray `#E4E3DD`):**
     - Left: Gateway of India line-art illustration.
     - Center: `MUMBAI` + `LIMITED SEATS` badge.
     - Right: Perforated barcode stub + `[ GRAB TICKETS → ]`.
   - **Dubai (Neon Cyan `#00F0FF`):**
     - Left: Burj Al Arab line-art illustration.
     - Center: `DUBAI` + `LAST FEW TICKETS` badge.
     - Right: Perforated barcode stub + `[ GRAB TICKETS → ]`.
   - **Sydney (Coral Red `#FF3B1D`):**
     - Left: Sydney Opera House line-art illustration.
     - Center: `SYDNEY` + `SELLING FAST` badge.
     - Right: Perforated barcode stub + `[ GRAB TICKETS → ]`.
3. **Full 33-City Ledger Drawer:**
   - A toggle button `[ VIEW ALL 33 GLOBAL TOUR DATES ↓ ]` smoothly expands the complete international schedule with search and direct booking links.

---

### Phase 6: "Corporate, But Make It Funny" (The Red Rotary Phone)
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\corporate.ts`
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\corporate.css`

**Visual Composition:**
1. **Left Column (The Chalkboard Formula):**
   - Dark chalkboard banner: `CORPORATE, BUT MAKE IT FUNNY.` with doodle: *"Less boring people, please."*
   - Illustrated formula boxes with connecting mathematical symbols:
     `[ 🎓 Engineering Degree ] × [ 🪑 Corporate Life ] = [ 📢 Unfiltered Truths ]`
   - Feature checkmarks: *Leadership Summits*, *Offsite Retreats*, *Team Events*, *Custom Sessions*.
2. **Right Column (The Vintage Red Rotary Telephone):**
   - Illustrated bright vermilion rotary telephone with coiled cord.
   - Speech bubble / handset plaque: `BOOK A CORPORATE SHOW`.
   - Direct dial plaque: `+91 9004040003`.
   - **Interaction:** Hovering makes the phone jiggle/ring (`@keyframes ring`). Clicking launches WhatsApp chat directly to his management with a pre-filled corporate inquiry message.

---

### Phase 7: "The Aise Kaise? Machine" (Interactive 3-Reel Slot Machine)
**Files:**
- Create: `d:\projects\amit-tandon\amit-tandon\src\sections\slot-machine.ts`
- Create: `d:\projects\amit-tandon\amit-tandon\src\sections\slot-machine.css`

**Visual Composition:**
1. **Headline:** `THE AISE KAISE? MACHINE.` (Yellow banner) + *"Real situations. Questionable logic."*
2. **The Slot Machine Housing:**
   - Chrome retro casing with curved glass display windows.
   - **Red Ball Pull Lever** on the left side that pivots down when clicked.
   - **Three Digital Display Reels:**
     - **Reel 1: WHO?** (Illustrated characters): `Wife` | `Sharma Ji` | `Teenage Son` | `Delhi Auto Wala` | `Society Uncle`
     - **Reel 2: SITUATION** (Dilemmas): `2-day trip, 4 suitcases` | `Scores 95% in exam` | `Asks for Goa permission` | `AC set to 16°C` | `Bas 5 minutes mein aayi`
     - **Reel 3: AMIT'S OBSERVATION** (Punchlines): `"The logic has left the chat."` | `"Error 404: Sharma Ji ka beta scored 97%"` | `"Mission aborted: Zero funding"` | `"Relativistic time dilation confirmed"`
3. **Interactive Mechanics:**
   - Clicking `[ GENERATE DILEMMA → ]` pulls the lever down, spins the reels with motion blur, plays mechanical tick sounds, and stops on a hilarious randomized combination.
   - A comic speech bubble pops up with: `"HAHA!"` and `"AISE KAISE?!"`.

---

### Phase 8: Neo-Brutalist Marquee Footer
**Files:**
- Modify: `d:\projects\amit-tandon\amit-tandon\src\sections\footer.ts`

**Visual Composition:**
- Solid black footer bar with bold stencil text: `AMIT TANDON LIVE •`
- High-contrast social pill badges:
  - Red Pill: `▶ 1.8M SUBSCRIBERS`
  - Magenta Gradient Pill: `📷 1M FOLLOWERS`
  - Red/Black Pill: `NETFLIX NOW STREAMING`
- Quick booking & representation credits.

---

## 3. Step-by-Step Execution Checklist

- [ ] **Step 1:** Update `index.html` with fonts (`Space Grotesk`, `Space Mono`) and set page title.
- [ ] **Step 2:** Update `src/styles/tokens.css` with exact Image 1 color codes, brutalist shadows, and halftone utilities.
- [ ] **Step 3:** Implement the sticky brutalist Navigation Bar and Hazard Marquee Ticker.
- [ ] **Step 4:** Rebuild the Hero section with the comic collage composition, whistling pressure cooker, and `[ TRIGGER PUNCHLINE ]` confetti micro-interaction.
- [ ] **Step 5:** Rebuild the Specials section into the 3-panel Sunday comic strip (Retro CRT TV, Masala Sandwich wrapper, Gyan Bites soundboard).
- [ ] **Step 6:** Build the 4-color perforated concert tickets for London, Mumbai, Dubai, and Sydney with barcodes, landmark line drawings, and the 33-city schedule expander.
- [ ] **Step 7:** Build the Corporate module with the illustrated chalkboard formula and ringing red rotary phone.
- [ ] **Step 8:** Build the interactive 3-reel "Aise Kaise?" Slot Machine with pull lever and randomized dilemma generator.
- [ ] **Step 9:** Style the Marquee Footer with social subscriber badges.
- [ ] **Step 10:** Run `npm run build` to verify zero errors and validate live layout in browser on `http://localhost:5173/`.
