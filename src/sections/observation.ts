import type { SiteContent } from "../lib/types";

export function renderObservation(_site: SiteContent): string {
  return `
<section class="theatrical-hero-section" id="top" aria-label="Amit Tandon - World Tour 2026">
  
  <!-- 1. Theatrical Stage Atmosphere & Volumetric Lighting with Two-Layer Background -->
  <div class="theatrical-backdrop" aria-hidden="true">
    <!-- Base Layer: Authentic Stage Noir Photography -->
    <div class="theatrical-bg-base"></div>

    <!-- Hover Reveal Layer: Spotlight Uncovers Multiple Faces of Amit -->
    <div class="theatrical-bg-faces" id="theatrical-bg-faces"></div>

    <div class="theatrical-vignette"></div>
    <div class="theatrical-spotlight-beam" id="theatrical-spotlight"></div>
    <div class="theatrical-ambient-glow glow-red"></div>
    <div class="theatrical-floor-haze"></div>
  </div>

  <div class="theatrical-hero-stage">
    
    <!-- 2. Asymmetric Left Column: The Headliner Authority & Ticket Engine -->
    <div class="hero-left-column">
      
      <!-- Tour & Special Badges -->
      <div class="hero-badges-row">
        <div class="hero-tour-badge">
          <span class="live-pulse-dot" aria-hidden="true"></span>
          <span class="mono badge-text">LIVE WORLD TOUR 2026</span>
          <span class="badge-separator">&bull;</span>
          <span class="mono highlight-red">14 GLOBAL CITIES</span>
          <span class="badge-status-pill">SELLING FAST</span>
        </div>
        <div class="hero-netflix-badge">
          <span class="netflix-n" aria-hidden="true">N</span>
          <span class="mono">ORIGINAL SPECIAL</span>
        </div>
      </div>

      <!-- Monumental Headline & Clear Tagline -->
      <div class="hero-title-lockup">
        <h1 class="hero-headliner-title">
          <span class="title-word">AMIT</span>
          <span class="title-word">TANDON</span>
        </h1>
        <p class="hero-tagline mono">
          50 YEARS OF COMMON SENSE &bull; <span class="highlight-red">ZERO FILTER</span>
        </p>
      </div>

      <!-- Persona Bio Hook -->
      <p class="hero-lead-text">
        "The Married Guy" of Indian stand-up comedy. Turning the hilarious, unwritten rules of middle-class marriage, parenting Gen-Z, and domestic negotiations into sold-out arena gold.
      </p>

      <!-- Primary High-Voltage Conversion CTAs -->
      <div class="hero-cta-cluster">
        <a href="#live-shows" class="btn-hero-primary" id="btn-hero-tickets">
          <span class="btn-flare" aria-hidden="true"></span>
          <span class="btn-label">GET TOUR TICKETS</span>
          <span class="btn-arrow" aria-hidden="true">&rarr;</span>
        </a>

        <button type="button" class="btn-hero-secondary" id="btn-hero-trailer" data-video-id="C7b0TAg0xMU">
          <span class="btn-play-icon" aria-hidden="true">▶</span>
          <span class="btn-label">WATCH TRAILER</span>
        </button>
      </div>

      <!-- Next Live Tour Departure Dispatch -->
      <div class="hero-departure-strip">
        <span class="dep-live-dot" aria-hidden="true"></span>
        <span class="dep-label mono">NEXT STOP:</span>
        <a href="#live-shows" class="dep-city-link">
          <strong class="dep-city">LONDON</strong>
          <span class="dep-venue">Southbank Centre &bull; Nov 14</span>
          <span class="dep-status status-fast">SELLING FAST</span>
        </a>
      </div>

    </div>

    <!-- 3. Open Right Flank: Unobstructed view of the theatrical stage with Interactive Spotlight Hint -->
    <div class="hero-right-column">
      <div class="hero-spotlight-pill mono" aria-hidden="true">
        <span class="spotlight-beacon-dot"></span>
        <span class="pill-text">HOVER STAGE TO SPOTLIGHT THE FACES</span>
      </div>
    </div>

  </div>

  <!-- 4. Unified Architectural Base Credibility Dock -->
  <div class="hero-unified-base-dock mono">
    <div class="base-dock-inner wrap">
      <div class="dock-item">
        <span class="dock-stat">1.4B+</span>
        <span class="dock-label">YOUTUBE VIEWS</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">1,400+</span>
        <span class="dock-label">SHOWS WORLDWIDE</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">28</span>
        <span class="dock-label">COUNTRIES</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat highlight-red">NETFLIX</span>
        <span class="dock-label">FAMILY TANDONCIES</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">IIT DELHI</span>
        <span class="dock-label">MBA ALUM</span>
      </div>
    </div>
  </div>

</section>
`;
}
