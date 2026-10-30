import type { SiteContent } from "../lib/types";
import { images } from "../content/images";

export function renderObservation(site: SiteContent): string {
  const statsHtml = (site.stats || [])
    .map(
      (s) => `
    <div class="hero-stat-card">
      <div class="stat-num">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>`
    )
    .join("");

  return `
<section class="hero-section" id="top" aria-label="Hero Overview">
  <div class="wrap hero-grid">
    <div class="hero-content">
      <div class="chapter-tag" data-reveal>The Method in the Madness</div>
      <h1 class="display hero-title" data-reveal>
        The logic of ordinary life. <br />
        <span class="highlight-serif">Deconstructed.</span>
      </h1>
      <p class="hero-lead" data-reveal>
        Observational Hindi stand-up comedy from an IIT Delhi engineer who never stopped taking notes on family contradictions, middle-class upgrades, and why marriage logic defies all mathematics.
      </p>

      <div class="hero-ctas" data-reveal>
        <a class="btn btn-primary" href="#tour">
          <span>Explore World Tour (33 Cities)</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </a>
        <a class="btn btn-secondary" href="#corporate">
          <span>Corporate Keynotes & Galas</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

      <div class="hero-tour-pill" data-reveal>
        <span class="live-dot"></span>
        <span>Current Tour: <strong>${site.currentShow.title}</strong> — Headlining London Southbank Centre, Sydney Opera House & Dubai</span>
      </div>
    </div>

    <div class="hero-visual" data-reveal>
      <div class="hero-image-frame">
        <img 
          src="${images.hero}" 
          alt="${site.subject} live on stage with microphone" 
          width="1200" 
          height="1400" 
          fetchpriority="high"
        />
        <div class="hero-image-badge">
          <span class="badge-title">Amit Tandon</span>
          <span class="badge-sub">India's Premier Clean Observational Comic</span>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-stats-band wrap" data-reveal>
    <div class="stats-grid">
      ${statsHtml}
    </div>
  </div>
</section>`;
}
