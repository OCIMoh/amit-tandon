import type { SiteContent } from "../lib/types";

export function renderCta(site: SiteContent): string {
  return `
<section class="finale-cta-section" id="booking" aria-label="Book Amit Tandon or Buy Tour Tickets">
  
  <!-- Theatrical Backlight & Volumetric Halo -->
  <div class="cta-theatrical-glow" aria-hidden="true"></div>

  <div class="wrap cta-content-wrap" data-reveal>
    
    <!-- Authentic VIP All-Access Backstage Pass Container -->
    <div class="vip-backstage-pass-badge">
      
      <!-- Top Lanyard Brass Rivet & Cord Loop -->
      <div class="pass-lanyard-hanger" aria-hidden="true">
        <div class="lanyard-braided-strap"></div>
        <div class="lanyard-brass-clamp"></div>
        <div class="pass-slot-hole"></div>
      </div>

      <div class="pass-inner-card">
        
        <!-- Pass Header Bar -->
        <div class="pass-header-strip mono">
          <span class="pass-security-id">PASS #AT-VIP-2026</span>
          <span class="pass-hologram-seal">★ ALL-ACCESS DIRECT PASS ★</span>
          <span class="pass-dept">MGMT // TANDON PRODUCTIONS</span>
        </div>

        <div class="cta-eyebrow">
          <span class="live-pulse-dot" aria-hidden="true"></span>
          <span class="mono">AISE KAISE WORLD TOUR 2026 · LIVE BOOKINGS OPEN</span>
        </div>

        <h2 class="display cta-headline">
          <span>DON'T MISS THE </span>
          <span class="highlight-red">MADNESS LIVE.</span>
        </h2>

        <p class="cta-subtitle">
          Over 2,000 sold-out stages in 30+ countries. Experience Amit Tandon's razor-sharp, 100% family-clean observational stand-up live in your city—or book him for corporate annual conferences, CXO retreats, and private galas.
        </p>

        <!-- High-Impact Action Cluster -->
        <div class="cta-action-cluster">
          <a href="#live-shows" class="btn-cta-primary" id="btn-cta-tickets">
            <span class="cta-btn-flare" aria-hidden="true"></span>
            <span class="btn-text">GET TOUR TICKETS</span>
            <span class="btn-arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a 
            href="${site.contact.whatsapp}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-cta-secondary"
            id="btn-cta-corporate"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
            </svg>
            <span>DIRECT WHATSAPP DISPATCH</span>
          </a>
        </div>

        <!-- Live Direct Helpline & Trust Bar -->
        <div class="cta-trust-strip mono">
          <div class="trust-item">
            <span class="trust-dot"></span>
            <span>100% CLEAN FAMILY COMEDY</span>
          </div>
          <div class="trust-item">
            <span class="trust-dot"></span>
            <span>DIRECT MANAGEMENT // ZERO COMMISSIONS</span>
          </div>
          <div class="trust-item">
            <span class="trust-dot"></span>
            <span>HELPLINE: <a href="tel:+919004040003" class="helpline-link">+91 9004040003</a></span>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
`;
}
