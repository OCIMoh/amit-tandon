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
