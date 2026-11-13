import type { SiteContent } from "../lib/types";

export function renderObservation(_site: SiteContent): string {
  return `
<section class="theatrical-hero-section audit-collage-hero" id="top" aria-label="Amit Tandon - The Married Guy World Tour 2026">
  
  <!-- 1. Background Atmosphere & Film Grain -->
  <div class="theatrical-backdrop" aria-hidden="true">
    <div class="theatrical-bg-noise"></div>
    <div class="theatrical-vignette"></div>
    <div class="theatrical-spotlight-beam" id="theatrical-spotlight"></div>
    <div class="theatrical-ambient-glow glow-red"></div>
  </div>

  <!-- 2. Colossal Billboard Backdrop Typography (Edge-to-Edge) -->
  <div class="hero-billboard-backdrop" aria-hidden="true">
    <div class="billboard-track">
      <span class="billboard-giant-word">THE MARRIED GUY</span>
    </div>
  </div>

  <!-- 3. The Central Physical Collage Artboard (Overlapping 5-Layer Stage) -->
  <div class="audit-artboard-container">
    
    <!-- The Manilla Case File (Layer 1) -->
    <div class="dossier-manilla-folder" id="dossier-folder" data-stampable="true">
      
      <!-- Brass Paperclip Top-Left -->
      <div class="brass-paperclip clip-top" aria-hidden="true" data-stop-propagation="true"></div>
      <div class="brass-paperclip clip-left" aria-hidden="true" data-stop-propagation="true"></div>

      <!-- Dossier Header & Stamped Red Ink Seals -->
      <div class="dossier-folder-header">
        <div class="dossier-case-label mono">
          <span class="case-badge">CASE #41</span>
          <span class="case-title">DOMESTIC ARBITRATION // CONFIDENTIAL</span>
          <span class="stamp-hint mono" aria-hidden="true">[ ✎ CLICK TO STAMP ]</span>
        </div>

        <div class="dossier-rubber-stamps" aria-hidden="true">
          <div class="rubber-stamp stamp-audited" data-stop-propagation="true">
            <span>OFFICIALLY</span>
            <span>AUDITED</span>
          </div>
          <div class="rubber-stamp stamp-filter" data-stop-propagation="true">
            <span>ZERO</span>
            <span>FILTER</span>
          </div>
        </div>
      </div>

      <!-- Sub-dossier Content Grid (Thermal Receipt + Stage Photo + Baggage Tag) -->
      <div class="dossier-evidence-grid">
        
        <!-- Artifact A: Pinned Thermal Marital Expense Receipt -->
        <div class="thermal-receipt-artifact" id="artifact-receipt">
          <div class="silver-tape tape-top" aria-hidden="true"></div>
          
          <div class="receipt-inner mono">
            <div class="receipt-header">
              <span class="receipt-title">DOMESTIC AUDIT</span>
              <span class="receipt-date">EST. 2002 · 25 YRS</span>
            </div>
            
            <div class="receipt-divider">======================</div>
            
            <div class="receipt-items-list">
              <div class="receipt-row">
                <span class="item-name">1x PANEER BUTTER MASALA</span>
                <span class="item-note">(DISPUTED)</span>
              </div>
              <div class="receipt-row">
                <span class="item-name">2x GUILT TRIPS</span>
                <span class="item-note">(NON-REFUNDABLE)</span>
              </div>
              <div class="receipt-row">
                <span class="item-name">1x 'KUCHH NAHI' SILENCE</span>
                <span class="item-note">48 HRS PROTOCOL</span>
              </div>
            </div>

            <div class="receipt-divider">----------------------</div>

            <div class="receipt-total-row">
              <span class="total-label">SUBTOTAL:</span>
              <span class="total-val">25 YRS MARRIAGE</span>
            </div>
            
            <div class="receipt-barcode" aria-hidden="true">
              <span class="barcode-graphic">||| | |||| | ||||| |||</span>
              <span class="barcode-digits">AT-1040-MARRIAGE</span>
            </div>
          </div>
        </div>

        <!-- Artifact B: 35mm Candid Stage Photo of Amit Tandon -->
        <div class="photo-candid-artifact" id="artifact-photo">
          <div class="silver-tape tape-photo-top" aria-hidden="true"></div>
          
          <div class="photo-polaroid-frame">
            <img 
              src="/images/mic-shot.jpg" 
              alt="Amit Tandon Stand-Up Comedy Headliner" 
              class="photo-candid-img"
              width="500" 
              height="620"
              fetchpriority="high"
            />
            <div class="photo-caption-bar mono">
              <span>AMIT TANDON · LIVE ON STAGE</span>
            </div>
          </div>

          <div class="silver-tape tape-photo-bottom" aria-hidden="true"></div>
          
          <!-- Red Rubber Ink Tour & Quality Verification Stamps -->
          <div class="rubber-stamp photo-rubber-stamp stamp-tour-cities" aria-hidden="true" data-stop-propagation="true" title="Tour Verification Stamp">
            <span class="stamp-sub-label">TOUR VERIFIED</span>
            <span class="stamp-main-val">33 CITIES</span>
            <span class="stamp-route">GLOBAL // CLEARED</span>
          </div>

          <div class="rubber-stamp photo-rubber-stamp stamp-clean-comedy" aria-hidden="true" data-stop-propagation="true" title="Quality Inspection Stamp">
            <span class="stamp-star-row">★ ★ ★</span>
            <span class="stamp-main-val">100% CLEAN</span>
            <span class="stamp-sub-label">FAMILY COMEDY</span>
            <span class="stamp-code">3 GENS SAFE</span>
          </div>
        </div>

        <!-- Artifact C: Air India Excess Baggage Tag -->
        <div class="luggage-tag-artifact" id="artifact-tag">
          <div class="tag-string-loop" aria-hidden="true"></div>
          <div class="tag-eyelet" aria-hidden="true"></div>
          
          <div class="tag-body mono">
            <div class="tag-airline-row">
              <span class="airline-brand">AIR INDIA</span>
              <span class="tag-type">PRIORITY</span>
            </div>

            <div class="tag-route-display">
              <span class="route-city">DEL</span>
              <span class="route-arrow">&rarr;</span>
              <span class="route-city">LHR</span>
            </div>

            <div class="tag-caution-box">
              <strong class="caution-title">HEAVY //</strong>
              <span class="caution-desc">WIFE SAID PACK LIGHT</span>
            </div>

            <div class="tag-barcode-block" aria-hidden="true">
              <svg class="barcode-svg" viewBox="0 0 100 24" preserveAspectRatio="none">
                <rect x="0" y="0" width="2" height="24" fill="#000"/>
                <rect x="4" y="0" width="4" height="24" fill="#000"/>
                <rect x="10" y="0" width="1" height="24" fill="#000"/>
                <rect x="13" y="0" width="3" height="24" fill="#000"/>
                <rect x="18" y="0" width="5" height="24" fill="#000"/>
                <rect x="25" y="0" width="2" height="24" fill="#000"/>
                <rect x="29" y="0" width="4" height="24" fill="#000"/>
                <rect x="35" y="0" width="1" height="24" fill="#000"/>
                <rect x="38" y="0" width="6" height="24" fill="#000"/>
                <rect x="46" y="0" width="2" height="24" fill="#000"/>
                <rect x="50" y="0" width="3" height="24" fill="#000"/>
                <rect x="55" y="0" width="5" height="24" fill="#000"/>
                <rect x="62" y="0" width="1" height="24" fill="#000"/>
                <rect x="65" y="0" width="4" height="24" fill="#000"/>
                <rect x="71" y="0" width="2" height="24" fill="#000"/>
                <rect x="75" y="0" width="5" height="24" fill="#000"/>
                <rect x="82" y="0" width="3" height="24" fill="#000"/>
                <rect x="87" y="0" width="1" height="24" fill="#000"/>
                <rect x="90" y="0" width="4" height="24" fill="#000"/>
                <rect x="96" y="0" width="2" height="24" fill="#000"/>
              </svg>
              <span class="tag-serial-num">098-AT-2026-LHR</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Handwritten Red Ballpoint Pen Marginalia -->
      <div class="red-pen-marginalia" aria-hidden="true">
        <svg class="handwritten-arrow-svg" viewBox="0 0 120 60" fill="none">
          <path d="M10,10 Q60,-5 110,40 M110,40 L98,30 M110,40 L102,48" stroke="#E50914" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        <span class="marginalia-text">Rule #41: Never agree too fast</span>
      </div>

    </div>

  </div>

  <!-- 4. Panoramic Lower Band: Perforated Concert Tickets & Brutalist CTAs -->
  <div class="panoramic-bottom-band">
    <div class="wrap panoramic-band-inner">
      
      <!-- Left: Two Authentic Perforated Thermal Ticket Stubs -->
      <div class="tickets-stub-cluster">
        
        <!-- Ticket Stub 1: London -->
        <a href="#live-shows" class="thermal-tour-stub" aria-label="Book London Tour Date">
          <span class="stub-notch notch-left" aria-hidden="true"></span>
          <span class="stub-notch notch-right" aria-hidden="true"></span>
          <div class="stub-main-content">
            <span class="stub-city display">LONDON</span>
            <span class="stub-sep">&bull;</span>
            <span class="stub-date mono">NOV 14</span>
          </div>
          <div class="stub-perforated-line" aria-hidden="true"></div>
          <div class="stub-barcode-side mono" aria-hidden="true">
            <span class="vert-barcode">||||||||||</span>
            <span class="stub-status">FAST</span>
          </div>
        </a>

        <!-- Ticket Stub 2: Mumbai -->
        <a href="#live-shows" class="thermal-tour-stub" aria-label="Book Mumbai Tour Date">
          <span class="stub-notch notch-left" aria-hidden="true"></span>
          <span class="stub-notch notch-right" aria-hidden="true"></span>
          <div class="stub-main-content">
            <span class="stub-city display">MUMBAI</span>
            <span class="stub-sep">&bull;</span>
            <span class="stub-date mono">DEC 18</span>
          </div>
          <div class="stub-perforated-line" aria-hidden="true"></div>
          <div class="stub-barcode-side mono" aria-hidden="true">
            <span class="vert-barcode">||||||||||</span>
            <span class="stub-status">LIMITED</span>
          </div>
        </a>

      </div>

      <!-- Right: High-Contrast Brutalist Actions -->
      <div class="panoramic-action-cluster">
        <a href="#about" class="btn-brutalist-white" id="btn-explore-gyan">
          <span>EXPLORE GYAN</span>
        </a>

        <a href="#live-shows" class="btn-brutalist-red" id="btn-hero-tickets">
          <span>BUY TOUR TICKETS</span>
          <span class="btn-arrow" aria-hidden="true">&nearr;</span>
        </a>
      </div>

    </div>
  </div>

</section>
`;
}
