# Amit Tandon website — Final build plan

**Status:** Waiting for your yes before production code starts  
**Project folder:** `amit-tandon-common-sense`  
**Creative lock:** Common Sense, Under Review  
**Layout starting point:** Composition revision 4 (An observation → Contradictions → Aise Kaise → The person)

---

## 1. What changes now

We stop polishing throwaway preview pages as the main job. From here, every serious change lands in a real website project that can grow into the public site.

Revision 4 is not wasted. It becomes the visual and structural reference for the real build. The HTML preview stays as a design memory. The new work is a proper application with a clear stack, a clean folder layout, version history through Git, and a path to host on Vercel when you are ready.

One honest caveat: Instagram and YouTube stills are still marked as candidates until you give a final publish yes. We can build the full site around them for review and staging. We should not treat that as a public launch until those rights are clear. Brand mark stays as his name in type until you choose a logo.

---

## 2. What we are building

A single long homepage that feels like a restless editorial magazine, not a comedian brochure.

Visitor arc:

1. **An observation** — big idea and portrait collide; ticket path lives in the margin  
2. **Contradictions** — *Family Tandoncies* as a featured break, then a ledger of real titles with real watch links  
3. **Aise Kaise** — full-bleed stage feeling, giant city and date type, poster-wall cities, ticket stamps  
4. **The person** — quiet full-screen close, short honest line, credits as margin notes, contact as a final stamp row  
5. **Footer** — contact, social, one last ticket shortcut

Business priority stays the same: live shows and tickets must be easy on a phone.

---

## 3. Tech stack (and why)

This site is a **2D editorial, typography-led** experience. It does not need a heavy 3D engine. The craft lives in type, layout interruptions, photography, and scroll pacing.

| Layer | Choice | Plain-English reason |
| --- | --- | --- |
| App foundation | **Vite + TypeScript** | Fast local build, modern tooling, light enough that we spend time on design craft instead of framework overhead. Perfect for a mostly-static artist homepage. |
| Page structure | **HTML sections + TypeScript modules** | Four clear chapters map cleanly to four section files. Easier to keep magazine layout precise than fighting a heavy component library. |
| Styling | **Hand-written CSS** with design tokens (colors, type scale, spacing) | The locked look needs expressive type and deliberate interruptions. A generic UI kit would push us back toward brochure cards. |
| Motion | **GSAP + ScrollTrigger**, plus **Lenis** for smooth scroll | Preferred tools for editorial scroll choreography: overlapping type, poster reveals, quiet ending holds. Used only where they serve the concept, not as decoration. |
| Content source | **JSON files** already in `data/` (`site.json`, `shows.json`, `material.json`, `asset-lock.json`) | Dates, tickets, titles, and bio facts stay editable without rewriting the whole page. Code reads facts; research stays separate. |
| Images | Optimized files in `public/images/` from the locked asset set | Browser-ready copies live in public. Originals and candidates stay under `assets/` so we never confuse source files with what the site serves. |
| Fonts | One expressive display face + one clean readable sans (self-hosted or a licensed web font) | Matches the locked direction: oversized headlines, calm body text. No default system stack as the hero voice. |
| Hosting | **Vercel** when we are ready to publish a preview or live URL | Already available in this workspace for deploys. Static Vite output fits cleanly. |
| Version control | **Git** from day one of the final build | Every meaningful step is savable, reviewable, and reversible. |

### What we are deliberately not using (and why)

- **Not React or Next.js for v1.** This is one homepage with scroll storytelling, not a multi-page app with accounts or a dashboard. React would add weight without buying much craft here. We can revisit later if the site grows into tours CMS, shop, or many routes.
- **Not Three.js / WebGL.** The concept is editorial interruption and photography, not a 3D world. Extra 3D would fight the magazine idea and slow phones.
- **Not a CMS yet.** Show dates and material already live in JSON we control. A CMS can wait until someone other than us needs to edit without touching code.
- **Not a random UI kit (card grids, purple dashboards, stock hero templates).** That would undo the restless magazine direction you already approved.

### External services we do need vs do not need

| Need now? | Service | Why |
| --- | --- | --- |
| Yes, later for go-live | **Vercel** | Host the preview and production site |
| Yes, already used for research | Public web research + Apify when a page will not read cleanly | Facts and candidate images; not a substitute for photo permission |
| Optional | Font foundry / licensed fonts | If we pick a paid display face |
| Not required for build | Meta Ads | This is website work |
| Not required to start coding | Another image hunt | Asset lock for the POC build already exists |
| Still human, not a service | **Your publish yes** on Instagram / YouTube stills, and a logo decision | Permission and brand, not tooling |

---

## 4. File structure

Everything stays inside the existing project folder so research, assets, and code live together.

```text
amit-tandon-common-sense/
├── .git/                          # version history (created at build start)
├── .gitignore                     # skip node junk, OS junk, secrets, local env
├── README.md                      # how to run, build, and deploy
├── package.json                   # project name + scripts (dev, build, preview)
├── vite.config.ts                 # build tool settings
├── tsconfig.json                  # TypeScript settings
├── index.html                     # app entry shell
│
├── public/                        # files served as-is
│   ├── favicon.svg
│   ├── fonts/                     # self-hosted type files
│   └── images/                    # web-ready locked images (already started)
│
├── src/                           # the real website code
│   ├── main.ts                    # boots the page, wires motion
│   ├── styles/
│   │   ├── tokens.css             # colors, type, spacing
│   │   ├── base.css               # reset + body defaults
│   │   └── sections/              # one stylesheet per chapter
│   ├── sections/
│   │   ├── observation.ts         # Opening
│   │   ├── contradictions.ts      # Material
│   │   ├── aise-kaise.ts          # Live
│   │   ├── person.ts              # About ending
│   │   └── footer.ts
│   ├── motion/
│   │   ├── lenis.ts               # smooth scroll setup
│   │   └── choreography.ts        # GSAP timelines tied to scroll
│   ├── lib/
│   │   ├── load-content.ts        # reads JSON content
│   │   └── tickets.ts             # helpers for show/ticket links
│   └── content/                   # typed copies or imports from /data
│
├── data/                          # source-of-truth facts (already exists)
│   ├── site.json
│   ├── shows.json
│   ├── material.json
│   ├── asset-lock.json
│   └── assets-manifest.json
│
├── assets/                        # originals + candidates (not all go live)
│   ├── locked/                    # what you chose for the build
│   ├── candidates/                # hunt leftovers
│   ├── portraits/
│   └── section-moods/             # design references only
│
├── research/                      # human-readable research notes
├── docs/
│   ├── creative-direction.md      # locked concept
│   ├── asset-lock.md
│   ├── final-build-plan.md        # this plan
│   └── archive/                   # old HTML previews (rev3, rev4) moved here
│
└── dist/                          # production build output (Git ignores this)
```

### Why this shape

- **`src/` for code, `public/` for finished media, `data/` for facts** keeps each job obvious.  
- **`assets/locked` vs `public/images`** separates “what we chose” from “what the browser loads.”  
- **`docs/archive`** keeps revision 3 and 4 HTML as history without pretending they are the app.  
- **Section files match the four chapters** so changes stay local when you say “Live still feels weak.”

---

## 5. How Git will be used

Git is the memory of the build. It is not optional polish.

### Setup at build start

1. Initialize Git inside `amit-tandon-common-sense`.  
2. Add a careful `.gitignore` (node_modules, dist, .env, OS junk).  
3. Make a first commit that captures the current research, data, locked assets, and this plan — the clean starting line.  
4. Keep `main` as the stable line. Do day-to-day work on short-lived branches.

### Branch pattern

| Branch idea | Purpose |
| --- | --- |
| `main` | Stable, reviewable site |
| `feat/shell-and-tokens` | Base layout, colors, type |
| `feat/section-observation` | Hero / opening chapter |
| `feat/section-contradictions` | Material chapter |
| `feat/section-aise-kaise` | Live / tour chapter |
| `feat/section-person` | Ending chapter |
| `feat/motion-pass` | Lenis + GSAP after layout locks |
| `chore/content-rights` | Swap or remove images after your publish decisions |

### Commit habits

- Commit after each meaningful chunk (one section, one motion pass, one content fix), not once at the end.  
- Write short messages that say **why**, for example: “Build Aise Kaise as poster-wall tour, not a date table.”  
- Never commit secrets, API keys, or private credentials.  
- Tag milestones when useful: `v0.1-shell`, `v0.2-layout-complete`, `v0.3-motion`, `v1.0-launch-candidate`.

### How this helps you

You can always ask to go back to “before the Live rewrite.” We can open a preview from a known good commit. We do not lose weeks of work to one bad experiment.

---

## 6. Build order (after you approve this plan)

1. **Git baseline** — init repo, ignore rules, first commit.  
2. **Shell** — Vite project, design tokens, fonts, empty four sections matching revision 4 structure.  
3. **Content wiring** — load shows, material, and bio from JSON.  
4. **Section build** — Observation → Contradictions → Aise Kaise → Person → Footer, one chapter at a time, each committed.  
5. **Your layout review** on the real running site (not the old single HTML sketch).  
6. **Motion pass** — light, intentional scroll choreography only after layout feels right.  
7. **Rights gate** — confirm which candidate images may stay for public launch; remove or replace the rest.  
8. **Quality pass** — phone check, ticket tap targets, speed, accessibility basics, concept fit.  
9. **Preview deploy** on Vercel when you want a shareable link.  
10. **Launch candidate** only after wording, motion, and image rights are settled.

---

## 7. What carries over from revision 4

Keep:

- Chapter names without inventory numbering  
- Collision hero  
- Featured *Family Tandoncies* break + ledger list  
- Full-bleed Live with poster cities  
- Full-screen Person ending with stamp contact row  
- Locked asset IDs for the build  
- Warm off-white / ink / restrained vermilion direction  

Leave behind:

- Treating a single giant HTML preview as the product  
- Numbered section badges  
- Card-grid comedy layouts  
- Career scoreboard ending  
- Using mood illustrations as if they were real photos of Amit  

---

## 8. Decisions still needed from you

These do not block starting the shell, but they do block calling the site “public launch ready”:

1. **Publish rights:** Do Instagram and YouTube stills get a final yes for the live site, or should staging keep them while launch uses only the official portrait plus type?  
2. **Brand:** Name in type forever for v1, or will you supply a logo file?  
3. **Hosting name:** When we deploy a preview, do you already have a domain in mind, or is a Vercel preview URL enough for now?

---

## 9. Approval gate

Per the proper website workflow, **production code for the final build does not start until you approve this plan.**

Reply with one of these:

- **“Approve the final build plan”** — I initialize Git, scaffold Vite, and start the shell from revision 4.  
- **“Approve, but change …”** — list the stack or folder changes you want first.  
- **“Hold”** — we stay on review only.

Once approved, the first concrete delivery will be: Git baseline + runnable Vite shell with design tokens and the four empty chapters wired to your JSON content.
