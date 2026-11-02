import type { SiteContent } from "../lib/types";

export function renderCorporate(_site: SiteContent): string {
  const whatsappUrl = "https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20we%20would%20like%20to%20inquire%20about%20booking%20a%20corporate%20keynote%20/%20annual%20summit%20show.";

  return `
<section class="corporate-section" id="corporate" aria-label="Corporate Keynotes and Private Bookings">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="corp-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">EXECUTIVE KEYNOTES & ANNUAL RETREATS · 100% CLEAN COMEDY</span>
      </div>
      <div class="corp-title-row">
        <h2 class="display corp-main-title">
          <span>BRING AMIT </span>
          <span class="highlight-red">TO YOUR EVENT.</span>
        </h2>
        <p class="corp-lead-copy">
          With an engineering degree, an MBA from IIT Delhi, and 15 years as a corporate Vice President, Amit speaks boardroom fluently. 100% clean, non-offensive humor tailored for CXOs, employees, and international teams.
        </p>
      </div>
    </div>

    <!-- 2-Column Balanced Corporate Grid -->
    <div class="corp-grid">
      
      <!-- Left Column: Core Event Formats -->
      <div class="corp-formats-card" data-reveal>
        <span class="card-eyebrow mono">EVENT FORMATS & AUDIENCES</span>
        
        <div class="format-list">
          <!-- Format 1 -->
          <div class="format-item">
            <span class="format-num mono">01</span>
            <div class="format-details">
              <h3 class="format-title">Leadership & CXO Offsites</h3>
              <p class="format-desc">
                High-level observational humor on strategy decks, quarterly reviews, and boardroom diplomacy. The perfect, stress-relieving icebreaker for senior executives.
              </p>
            </div>
          </div>

          <!-- Format 2 -->
          <div class="format-item">
            <span class="format-num mono">02</span>
            <div class="format-details">
              <h3 class="format-title">Annual Day Headliner (500–5,000+ Attendees)</h3>
              <p class="format-desc">
                Stadium-grade energy that unites engineering, sales, product, and leadership across all age groups. Guaranteed zero vulgarity, maximum collective laughs.
              </p>
            </div>
          </div>

          <!-- Format 3 -->
          <div class="format-item">
            <span class="format-num mono">03</span>
            <div class="format-details">
              <h3 class="format-title">Global Hybrid Townhalls</h3>
              <p class="format-desc">
                Engaging cross-cultural wit broadcast across global offices from Singapore to Silicon Valley, bridging international teams through shared work-life truths.
              </p>
            </div>
          </div>
        </div>

        <!-- Enterprise Trust Strip -->
        <div class="corp-trust-strip">
          <span class="trust-title mono">TRUSTED BY OVER 250+ GLOBAL ENTERPRISES:</span>
          <div class="trust-marquee-row">
            <span class="trust-client">Google</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">Microsoft</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">Amazon</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">Tata Motors</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">Deloitte</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">HDFC</span>
            <span class="trust-dot">&bull;</span>
            <span class="trust-client">CRED</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Direct Booking Desk -->
      <div class="corp-desk-card" data-reveal>
        <div class="desk-card-header">
          <span class="card-eyebrow mono highlight-red">DIRECT MANAGEMENT DESK</span>
          <span class="desk-sla mono">AVG SLA: &lt; 4 HOURS</span>
        </div>

        <h3 class="desk-title">Check Date Availability & Rider</h3>
        <p class="desk-lead">
          Connect directly with Amit Tandon's executive talent representation for availability, technical rider, and custom corporate briefs.
        </p>

        <div class="desk-spec-table">
          <div class="desk-spec-row">
            <span class="spec-name mono">PERFORMANCE FORMAT</span>
            <span class="spec-value">Keynote Stand-Up (45–75 mins)</span>
          </div>
          <div class="desk-spec-row">
            <span class="spec-name mono">CONTENT COMPLIANCE</span>
            <span class="spec-value highlight-red">Strictly Clean & Safe For Work</span>
          </div>
          <div class="desk-spec-row">
            <span class="spec-name mono">GEOGRAPHIES</span>
            <span class="spec-value">India, UAE, UK, Europe, US & Virtual</span>
          </div>
          <div class="desk-spec-row">
            <span class="spec-name mono">CUSTOMIZATION</span>
            <span class="spec-value">Customized corporate jokes on request</span>
          </div>
        </div>

        <!-- Prominent Enquiry CTA in Coherent Amber (Replacing clashing green) -->
        <div class="desk-action-wrap">
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary btn-lg desk-cta-btn"
          >
            <span>INQUIRE FOR YOUR EVENT</span>
            <span class="btn-arrow">&rarr;</span>
          </a>

          <div class="desk-direct-contact">
            <div class="direct-contact-item">
              <span class="direct-label mono">CALL / WHATSAPP:</span>
              <a href="tel:+919004040003" class="direct-val">+91 9004040003</a>
            </div>
            <div class="direct-contact-sep">|</div>
            <div class="direct-contact-item">
              <span class="direct-label mono">DIRECT EMAIL:</span>
              <a href="mailto:corporate@amittandon.in" class="direct-val">corporate@amittandon.in</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>`;
}
