import type { SiteContent } from "../lib/types";

export function renderFooter(site: SiteContent): string {
  const currentYear = new Date().getFullYear();

  return `
<footer class="brutal-site-footer" role="contentinfo">
  <div class="wrap footer-marquee-bar">
    <div class="footer-title-badge">
      <span class="f-title-text">AMIT TANDON LIVE</span>
      <span class="f-star-dot">•</span>
    </div>

    <!-- Social Badges Row from Image 1 -->
    <div class="footer-social-pills">
      <a href="${site.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-pill pill-yt">
        <span class="pill-play-icon">▶</span>
        <span class="pill-stat">1.8M</span>
        <span class="pill-sub">SUBSCRIBERS</span>
      </a>

      <a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer" class="social-pill pill-ig">
        <span class="pill-camera-icon">📷</span>
        <span class="pill-stat">1M</span>
        <span class="pill-sub">FOLLOWERS</span>
      </a>

      <a href="https://www.netflix.com/title/81077759" target="_blank" rel="noopener noreferrer" class="social-pill pill-netflix">
        <span class="pill-n-logo">NETFLIX</span>
        <span class="pill-sub">NOW STREAMING</span>
      </a>
    </div>
  </div>

  <div class="wrap footer-bottom-meta">
    <p>© ${currentYear} Amit Tandon. World Tour 2026. All rights reserved.</p>
    <div class="footer-contact-quick">
      <a href="${site.contact.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp: +91 9004040003</a>
      <span>•</span>
      <a href="mailto:${site.contact.email}">${site.contact.email}</a>
    </div>
  </div>
</footer>

<!-- Inline Cinema Drawer Modal -->
<div class="video-modal" id="videoModal" aria-hidden="true" role="dialog" aria-label="Video Player Cinema">
  <div class="video-modal-container">
    <button class="video-modal-close" id="videoModalClose" aria-label="Close cinema player">
      <span>Close Player</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="video-modal-ratio">
      <iframe id="videoModalIframe" src="" title="Amit Tandon Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>`;
}
