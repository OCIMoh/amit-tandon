import type { SiteContent } from "../lib/types";

export function renderFooter(site: SiteContent): string {
  const currentYear = new Date().getFullYear();

  return `
<footer class="cinema-footer" role="contentinfo">
  <!-- Restrained Secondary Marquee Bar -->
  <div class="footer-marquee-strip">
    <div class="marquee-content mono">
      <span>IT DEPENDS WHO YOU ASK</span>
      <span class="marquee-sep">&bull;</span>
      <span>LIVING WITH PEOPLE IS A FULL-TIME COMEDY</span>
      <span class="marquee-sep">&bull;</span>
      <span>AISE KAISE WORLD TOUR 2026</span>
      <span class="marquee-sep">&bull;</span>
      <span>NETFLIX ORIGINAL SPECIAL</span>
      <span class="marquee-sep">&bull;</span>
      <span>CLEAN OBSERVATIONAL STAND-UP</span>
      <span class="marquee-sep">&bull;</span>
      <span>IT DEPENDS WHO YOU ASK</span>
      <span class="marquee-sep">&bull;</span>
      <span>LIVING WITH PEOPLE IS A FULL-TIME COMEDY</span>
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
          <li><a href="#perspective">The Perspective Shift</a></li>
          <li><a href="#watch">Specials & Video Bits</a></li>
          <li><a href="#tour">Live Tour Dates (33 Cities)</a></li>
          <li><a href="#corporate">Corporate Keynote Bookings</a></li>
          <li><a href="#translator">Corporate-to-Marriage Translator</a></li>
          <li><a href="#about">About Amit Tandon</a></li>
        </ul>
      </div>

      <!-- Management & Contact -->
      <div class="footer-contact-col">
        <span class="footer-heading mono">MANAGEMENT DESK</span>
        <p class="footer-contact-desc">
          For corporate keynotes, private appearances, and tour bookings:
        </p>
        <div class="footer-contact-links">
          <a href="tel:+919004040003" class="contact-pill-link">
            <span class="mono">CALL / WA:</span>
            <strong>+91 9004040003</strong>
          </a>
          <a href="mailto:${site.contact.email}" class="contact-pill-link">
            <span class="mono">EMAIL:</span>
            <strong>${site.contact.email}</strong>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom-bar">
      <p class="footer-copy-text">
        &copy; ${currentYear} Amit Tandon. Official World Tour. All rights reserved.
      </p>
      <a href="#top" class="back-to-top-link mono" aria-label="Back to top">
        <span>BACK TO TOP</span>
        <span>&uarr;</span>
      </a>
    </div>
  </div>
</footer>

<!-- High-Fidelity Video Overlay Modal -->
<div class="video-modal" id="videoModal" aria-hidden="true" role="dialog" aria-label="Video Player Cinema">
  <div class="video-modal-container">
    <button class="video-modal-close" id="videoModalClose" aria-label="Close cinema player">
      <span>Close Player</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div class="video-modal-ratio">
      <iframe 
        id="videoModalIframe" 
        src="" 
        title="Amit Tandon Video Player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>`;
}
