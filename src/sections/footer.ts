import type { SiteContent } from "../lib/types";

export function renderFooter(site: SiteContent): string {
  const currentYear = new Date().getFullYear();

  return `
<footer class="cinema-footer" role="contentinfo">
  <!-- Restrained Secondary Marquee Bar -->
  <div class="footer-marquee-strip">
    <div class="marquee-content mono">
      <span>AISE KAISE WORLD TOUR 2026</span>
      <span class="marquee-sep">&bull;</span>
      <span>NETFLIX ORIGINAL SPECIAL</span>
      <span class="marquee-sep">&bull;</span>
      <span>CLEAN OBSERVATIONAL STAND-UP</span>
      <span class="marquee-sep">&bull;</span>
      <span>200M+ ONLINE VIEWS</span>
      <span class="marquee-sep">&bull;</span>
      <span>30+ COUNTRIES</span>
      <span class="marquee-sep">&bull;</span>
      <span>AISE KAISE WORLD TOUR 2026</span>
    </div>
  </div>

  <div class="wrap footer-main-wrap">
    <div class="footer-top-row">
      <!-- Brand & Tagline -->
      <div class="footer-brand-col">
        <a class="footer-brand-title" href="#top">AMIT TANDON</a>
        <p class="footer-brand-sub">
          Clean observational comedy about marriage, parenting, relationships, and the absurdities of Indian middle-class life.
        </p>
        <div class="footer-social-row">
          <a href="${site.social.youtube}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="YouTube Channel">
            <span>YouTube</span>
          </a>
          <a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram Profile">
            <span>Instagram</span>
          </a>
          <a href="https://www.netflix.com/title/81077759" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Netflix Special">
            <span>Netflix</span>
          </a>
          <a href="${site.social.x}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="X Profile">
            <span>X / Twitter</span>
          </a>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="footer-nav-col">
        <span class="footer-heading mono">EXPERIENCE</span>
        <ul class="footer-links-list">
          <li><a href="#top">Home / Stage</a></li>
          <li><a href="#about">About Amit & Gyan</a></li>
          <li><a href="#watch">Specials & YouTube Clips</a></li>
          <li><a href="#live-shows">Live Tour Tickets (Aise Kaise)</a></li>
        </ul>
      </div>

      <!-- Management & Contact -->
      <div class="footer-contact-col">
        <span class="footer-heading mono">MANAGEMENT DESK</span>
        <p class="footer-contact-desc">
          For corporate keynotes, private appearances, and tour bookings:
        </p>
        <div class="footer-contact-links">
          <a href="${site.contact.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-pill-link">
            <span class="mono">CALL / WA:</span>
            <strong>${site.contact.phone}</strong>
          </a>
          <a href="mailto:${site.contact.email}" class="contact-pill-link">
            <span class="mono">EMAIL:</span>
            <strong>${site.contact.email}</strong>
          </a>
        </div>
      </div>
    </div>

    <!-- Archival Docket Closing Plaque (Narrative Dossier Finale) -->
    <div class="footer-docket-closing-pod" aria-label="Official Archival Case File #41 Concluded">
      
      <!-- Top Manilla Folder Tab (Matching Section 2 Case File #41) -->
      <div class="closing-folder-tab mono" aria-hidden="true">
        <div class="tab-left-group">
          <span class="folder-paperclip" title="Aged Brass Paperclip"></span>
          <span>CONFIDENTIAL DOSSIER // CASE NO. 41</span>
        </div>
        <span class="tab-security">STATUS: DECLASSIFIED &bull; ARCHIVE CLOSED</span>
      </div>

      <!-- Master Manilla Case Cardstock Sheet -->
      <div class="docket-closing-card">
        
        <!-- Red Corner Gaffer / Customs Tape Flag -->
        <div class="closing-tape-flag mono" aria-hidden="true">
          <span>ARCHIVED // 2026</span>
        </div>

        <div class="docket-closing-left">
          <div class="closing-status-tag mono">
            <span class="closing-dot" aria-hidden="true"></span>
            <span>OFFICIAL EVIDENCE DOSSIER // CASE FILE #41 CONCLUDED</span>
          </div>
          
          <h4 class="closing-heading display">CASE FILE #41: DOCKET CONCLUDED.</h4>
          
          <div class="closing-verdict-grid mono">
            <div class="verdict-row">
              <span class="verdict-label">SUBJECT:</span>
              <span class="verdict-val">AMIT TANDON // "THE MARRIED GUY"</span>
            </div>
            <div class="verdict-row">
              <span class="verdict-label">FINAL VERDICT:</span>
              <span class="verdict-val highlight-red">100% CLEAN FAMILY COMEDY &bull; CLEARED FOR 3 GENERATIONS</span>
            </div>
            <div class="verdict-row">
              <span class="verdict-label">JURISDICTION:</span>
              <span class="verdict-val">2,000+ AUDITORIUM PERFORMANCES &bull; 190 COUNTRIES CLEARED</span>
            </div>
            <div class="verdict-row">
              <span class="verdict-label">DISPOSITION:</span>
              <span class="verdict-val">PERMANENT ARCHIVE RECORD &bull; ZERO HR INCIDENTS &bull; NO RESELLER MARKUPS</span>
            </div>
          </div>
        </div>

        <div class="docket-closing-stamps">
          <!-- Interactive Red Rubber Closing Stamp (Porous Ink Stamped on Manilla) -->
          <button type="button" class="rubber-stamp stamp-closed" id="footer-stamp-closed" title="Official Archive Closing Stamp — Click to imprint">
            <span class="stamp-border-inner">
              <span class="stamp-stars">&#9733; &#9733; &#9733;</span>
              <span class="stamp-title">CASE FILE CLOSED</span>
              <span class="stamp-sub">DOCKET ARCHIVE // 2026</span>
              <span class="stamp-auth">TANDON PRODUCTIONS OFFICIAL</span>
            </span>
          </button>

          <!-- Authentic Heavy Red Wax Seal -->
          <div class="wax-seal-closing" id="footer-wax-seal" title="Authentic Wax Monogram — Click to inspect">
            <span class="wax-monogram">AT</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom-bar">
      <p class="footer-copy mono">
        &copy; ${currentYear} Amit Tandon. The Married Guy &bull; All Rights Reserved.
      </p>
      <div class="footer-credits mono">
        <span>CLEAN COMEDY</span>
        <span class="cred-sep">&bull;</span>
        <span>FAMILY APPROVED</span>
        <span class="cred-sep">&bull;</span>
        <a href="#top" class="back-to-top-btn" aria-label="Back to top">TOP &uarr;</a>
      </div>
    </div>
  </div>
</footer>
`;
}
