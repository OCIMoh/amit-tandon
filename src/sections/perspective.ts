import type { SiteContent } from "../lib/types";

export function renderPerspective(site: SiteContent): string {
  const gyanItems = site.gyanBites || [];

  const cardsHtml = gyanItems.map((item) => {
    const shareText = encodeURIComponent(`Amit Tandon Stand-Up Gyan: "${item.quote}" (amittandon.in)`);

    return `
      <article class="gyan-triptych-card" data-reveal tabindex="0" role="group" aria-label="${item.tag}">
        <div class="card-inner-shell">
          
          <!-- Card Top Bar -->
          <div class="card-top-meta">
            <span class="meta-tag mono">${item.tag}</span>
            <span class="meta-badge mono">${item.badge}</span>
          </div>

          <!-- Studio Photography Frame -->
          <div class="card-image-box">
            <img 
              src="${item.image}" 
              alt="Amit Tandon - ${item.tag}" 
              class="card-portrait-photo"
              loading="lazy"
              width="600"
              height="400"
            />
            <div class="card-image-gradient" aria-hidden="true"></div>
            <span class="card-rule-stamp mono">RULE #${item.ruleNumber}</span>
          </div>

          <!-- Editorial Punchline Block -->
          <div class="card-body-block">
            <blockquote class="card-quote-text">
              “${item.quote}”
            </blockquote>
            <p class="card-observation-note mono">
              ${item.observation}
            </p>
          </div>

          <!-- 1-Click WhatsApp Share Action -->
          <div class="card-footer-strip">
            <a 
              href="https://api.whatsapp.com/send?text=${shareText}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gyan-share"
              aria-label="Forward this joke to your WhatsApp"
              title="Share to WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
              </svg>
              <span class="mono">FORWARD TO WHATSAPP</span>
            </a>
          </div>

        </div>
      </article>
    `;
  }).join('');

  return `
<section class="about-gyan-section" id="about" aria-label="About Amit Tandon & The Gyan Archive">
  <div class="wrap">
    
    <!-- Section 1: About Amit Tandon (Bio & Story) -->
    <div class="about-story-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">THE PERSON BEHIND THE COMEDY</span>
      </div>
      <h2 class="display about-main-title">
        <span>THE METHOD IN </span>
        <span class="highlight-red">THE MADNESS.</span>
      </h2>
      <p class="about-lead-journey mono">
        ${site.about.journeyLine}
      </p>
    </div>

    <!-- About Overview: 3-Pillar Bio Strip -->
    <div class="about-pillars-grid" data-reveal>
      <div class="about-pillar-card">
        <span class="pillar-num mono">01</span>
        <h3 class="pillar-title">15 Years in Boardrooms</h3>
        <p class="pillar-desc">
          Armed with an engineering degree and an MBA from IIT Delhi, Amit spent over a decade as a corporate Vice President and entrepreneur. He understands Indian middle-class aspirations because he lived every single step.
        </p>
      </div>

      <div class="about-pillar-card">
        <span class="pillar-num mono">02</span>
        <h3 class="pillar-title">The Clean Comedy Superpower</h3>
        <p class="pillar-desc">
          Amit pioneered clean observational comedy in India. His shows are rare cultural gatherings where three generations—teenagers, parents, and grandparents—sit together in sold-out auditoriums laughing without embarrassment.
        </p>
      </div>

      <div class="about-pillar-card">
        <span class="pillar-num mono">03</span>
        <h3 class="pillar-title">Global Stage Footprint</h3>
        <p class="pillar-desc">
          With over 200M+ digital views, 2,000+ live shows across 30+ countries, and the hit solo Netflix Original special <em>Family Tandoncies</em>, Amit is one of India's leading international touring headliners.
        </p>
      </div>
    </div>

    <!-- Section 2: The Signature Gyan Bites (3 Laws of Domestic Survival) -->
    <div class="gyan-archive-divider" data-reveal>
      <div class="divider-line"></div>
      <div class="divider-badge mono">
        <span class="badge-dot"></span>
        <span>THE SIGNATURE GYAN ARCHIVE · 3 LAWS OF DOMESTIC SURVIVAL</span>
      </div>
      <div class="divider-line"></div>
    </div>

    <div class="gyan-triptych-grid">
      ${cardsHtml}
    </div>

  </div>
</section>
`;
}
