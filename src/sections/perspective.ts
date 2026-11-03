import type { SiteContent } from "../lib/types";

export function renderPerspective(site: SiteContent): string {
  const gyanItems = site.gyanBites || [];

  // Generate Stacked Evidence Sheets for the Right Page of the Folder
  const sheetsHtml = gyanItems.map((item, index) => {
    const exhibitLetters = ["01", "02", "03"];
    const letter = exhibitLetters[index] || `0${index + 1}`;
    const isActive = index === 0;

    const shareText = encodeURIComponent(
      `Amit Tandon Comedy Evidence (Rule #${item.ruleNumber}): "${item.quote}" — Read the full audit at amittandon.in`
    );

    return `
      <div 
        class="case-evidence-sheet ${isActive ? 'is-active' : ''}" 
        id="evidence-sheet-${index}" 
        data-index="${index}"
        role="tabpanel"
        aria-labelledby="case-tab-${index}"
        ${isActive ? '' : 'hidden'}
      >
        <!-- Official Case File Sheet Header -->
        <div class="sheet-official-header mono">
          <div class="sheet-header-left">
            <span class="sheet-serial">RECORD #41-EXHIBIT-${letter}</span>
            <span class="sheet-title-tag">${item.tag}</span>
          </div>
          <div class="sheet-header-right">
            <span class="sheet-page-indicator">PAGE ${index + 1} OF 3</span>
          </div>
        </div>

        <div class="sheet-inner-body">
          <!-- Pinned 35mm Crime Scene Polaroid -->
          <div class="sheet-photo-frame">
            <img 
              src="${item.image}" 
              alt="Amit Tandon - ${item.tag}" 
              class="sheet-photo"
              loading="lazy"
              width="450"
              height="280"
            />
            <span class="sheet-photo-stamp mono">EXHIBIT #${letter} // EVIDENCE</span>
            <span class="sheet-photo-tape" aria-hidden="true"></span>
          </div>

          <!-- Typed & Handwritten Case Data -->
          <div class="sheet-text-col">
            <div class="sheet-meta-bar mono">
              <span class="sheet-rule-pill">RULE #${item.ruleNumber}</span>
              <span class="sheet-shares-count">🏷️ ${item.shares}</span>
            </div>

            <blockquote class="sheet-quote">
              “${item.quote}”
            </blockquote>

            <p class="sheet-observation mono">
              <strong class="obs-prefix">Audit Observation:</strong> ${item.observation}
            </p>

            <div class="sheet-action-strip">
              <a 
                href="https://api.whatsapp.com/send?text=${shareText}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-forward-wa mono"
                aria-label="Forward Exhibit ${letter} to WhatsApp"
                title="Forward joke to WhatsApp"
                data-stop-propagation="true"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                </svg>
                <span>FORWARD TO WHATSAPP ↗</span>
              </a>
              <span class="sheet-verified-seal mono">CONFISCATED EVIDENCE // AUTHENTIC</span>
            </div>
          </div>
        </div>

        <!-- Realistic Dog-Eared Page Curl (Click to Flip) -->
        <div class="dog-ear-corner" title="Click anywhere on page to turn to next exhibit">
          <span class="dog-ear-curl" aria-hidden="true"></span>
          <span class="dog-ear-prompt mono">CLICK TO TURN PAGE (${index + 1}/3) ➔</span>
        </div>
      </div>
    `;
  }).join('');

  return `
<section class="about-gyan-section" id="about" aria-label="Case File #41: The Declassified Evidence Board">
  <div class="wrap-dossier">
    
    <!-- Section Masthead -->
    <div class="evidence-desk-header" data-reveal>
      <div class="desk-eyebrow">
        <span class="desk-eyebrow-dot"></span>
        <span class="mono">CASE #41 // DECLASSIFIED RECORD</span>
      </div>
      <h2 class="display desk-main-title">
        <span>THE METHOD IN </span>
        <span class="highlight-red">THE MADNESS.</span>
      </h2>
      <p class="desk-lead-breadcrumb mono">
        15 YRS CORPORATE VP ➔ IIT DELHI MBA ➔ FULL-TIME DOMESTIC ARBITRATOR
      </p>
    </div>

    <!-- The Master Continuous Open Manilla Dossier Folder (Expanded Wide) -->
    <div class="master-case-folder" data-reveal>
      
      <!-- Top Tab of Folder -->
      <div class="folder-header-tab mono">
        <div class="tab-left-group">
          <span class="folder-paperclip" aria-hidden="true"></span>
          <span class="tab-title">CASE #41 // DOMESTIC ARBITRATION RECORD</span>
        </div>
        <span class="tab-security">TOP SECRET // DECLASSIFIED 2026</span>
      </div>

      <!-- Open Folder Interior (2-Page Spread) -->
      <div class="folder-inner-spread">
        
        <!-- Left Page: The Executive Subject File -->
        <div class="folder-page-left">
          
          <!-- Heavy Brass Binder Clamp Fastener Gripping the Photo Frame -->
          <div class="brass-binder-clamp" aria-hidden="true"></div>

          <!-- Large 35mm Subject Photo -->
          <div class="subject-photo-frame">
            <img 
              src="/images/portrait.jpg" 
              alt="Amit Tandon - Subject File" 
              class="subject-photo-img"
              loading="lazy"
              width="320"
              height="380"
            />
            <span class="photo-clear-tape" aria-hidden="true"></span>
            <span class="photo-corner-gaffer" aria-hidden="true"></span>
          </div>

          <!-- Subject Dossier Data -->
          <div class="subject-dossier-body">
            <span class="dossier-tag mono">CONFIDENTIAL SUBJECT DOSSIER</span>
            <h3 class="subject-headline">SUBJECT: EXECUTIVE TURNED COMEDIAN</h3>

            <dl class="subject-specs-list mono">
              <div class="spec-row">
                <dt>NAME:</dt>
                <dd>AMIT TANDON</dd>
              </div>
              <div class="spec-row">
                <dt>EDUCATION:</dt>
                <dd>B.TECH (MECH) + IIT DELHI MBA</dd>
              </div>
              <div class="spec-row">
                <dt>CAREER V1:</dt>
                <dd>15 YRS CORPORATE VP & MD</dd>
              </div>
              <div class="spec-row">
                <dt>CAREER V2:</dt>
                <dd>WORLD TOURING HEADLINER</dd>
              </div>
            </dl>

            <blockquote class="subject-core-quote">
              “Surviving 15 years in corporate boardrooms, only to discover the hardest negotiations on Earth happen at home over paneer butter masala.”
            </blockquote>

            <!-- Realistic Distressed Ink Rubber Stamp Block -->
            <div class="subject-stamp-block">
              <div class="rubber-ink-stamp stamp-resigned mono">
                <div class="stamp-inner-border">
                  <span class="stamp-header">OFFICIALLY RESIGNED</span>
                  <strong class="stamp-main-year">★ 2014 ★</strong>
                  <span class="stamp-sub-code">HR CLEARANCE // DEPT #0412</span>
                </div>
              </div>
              <span class="annotation-red-cursive">Corporate strategy vs. domestic survival.</span>
            </div>
          </div>

        </div>

        <!-- Center Vertical Crease Line -->
        <div class="folder-center-crease" aria-hidden="true"></div>

        <!-- Right Page: Physical Stacked Case Docket (Interactive Page Flip) -->
        <div class="folder-page-right">
          
          <div class="case-docket-stack" id="case-docket-stack" title="Click anywhere to turn page">
            
            <!-- Stacked Physical Paper Underlays (Creates Real Paper Thickness & Depth) -->
            <div class="docket-underlay-page docket-underlay-2" aria-hidden="true"></div>
            <div class="docket-underlay-page docket-underlay-1" aria-hidden="true"></div>

            <!-- Spiral Binding Holes Down Left Edge -->
            <div class="notebook-spiral-spine" aria-hidden="true">
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
              <span class="spiral-ring"></span>
            </div>

            <!-- Container for the 3 Evidence Sheets -->
            <div class="docket-sheets-viewport">
              ${sheetsHtml}
            </div>

            <!-- Physical Manilla Index Tabs Sticking Out of Right Edge -->
            <div class="case-index-tabs" role="tablist" aria-label="Evidence File Tabs">
              <button 
                type="button" 
                class="case-index-tab is-active mono" 
                id="case-tab-0"
                data-target="0"
                role="tab"
                aria-selected="true"
                aria-controls="evidence-sheet-0"
              >
                <span>EXHIBIT 01</span>
              </button>
              <button 
                type="button" 
                class="case-index-tab mono" 
                id="case-tab-1"
                data-target="1"
                role="tab"
                aria-selected="false"
                aria-controls="evidence-sheet-1"
              >
                <span>EXHIBIT 02</span>
              </button>
              <button 
                type="button" 
                class="case-index-tab mono" 
                id="case-tab-2"
                data-target="2"
                role="tab"
                aria-selected="false"
                aria-controls="evidence-sheet-2"
              >
                <span>EXHIBIT 03</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- Integrated Bottom Credibility Flap (Always Visible on Screen) -->
      <div class="folder-bottom-dock">
        
        <!-- Left: Silver Gaffer Tape over Netflix Special -->
        <div class="dock-special-cell">
          <div class="silver-gaffer-tape" aria-hidden="true"></div>
          <div class="dock-netflix-pill">
            <span class="n-logo mono">N</span>
            <div class="special-copy">
              <span class="special-label mono">NETFLIX ORIGINAL SPECIAL</span>
              <strong class="special-title">FAMILY TANDONCIES</strong>
            </div>
          </div>
        </div>

        <!-- Center: Airport Customs Stamps -->
        <div class="dock-customs-stamps" aria-label="International Airport Transit Stamps">
          <span class="customs-stamp stamp-cyan mono">DELHI // DEL</span>
          <span class="customs-stamp stamp-red mono">LONDON // LHR</span>
          <span class="customs-stamp stamp-cyan mono">DUBAI // DXB</span>
          <span class="customs-stamp stamp-red mono">NEW YORK // JFK</span>
          <span class="customs-stamp stamp-cyan mono">SYDNEY // SYD</span>
        </div>

        <!-- Center-Right: Tour Record Stats -->
        <div class="dock-stats-cluster mono">
          <span class="stat-num"><strong>2,000+</strong> STAGES</span>
          <span class="stat-dot">•</span>
          <span class="stat-num"><strong>30+</strong> COUNTRIES</span>
          <span class="stat-dot">•</span>
          <span class="stat-num"><strong>200M+</strong> VIEWS</span>
        </div>

        <!-- Right: 3D Embossed Wax Seal -->
        <div class="dock-wax-seal" title="100% Family Safe Clean Comedy Certified">
          <div class="wax-seal-outer">
            <div class="wax-seal-inner mono">
              <span class="seal-curve">ALL AGES</span>
              <strong class="seal-core">FAMILY<br>APPROVED</strong>
              <span class="seal-sub">3 GENS</span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
`;
}
