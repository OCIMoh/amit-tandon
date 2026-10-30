import type { SiteContent } from "../lib/types";

export function renderFooter(site: SiteContent): string {
  const currentYear = new Date().getFullYear();

  return `
<footer class="site-footer" role="contentinfo">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>${site.subject}</h3>
        <p>Bringing relatable, clean observational comedy to families and corporate summits across 30+ countries worldwide.</p>
        <div class="footer-actions">
          <a class="btn btn-primary" href="#tour">Book Tour Tickets</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#tour">Aise Kaise World Tour</a></li>
          <li><a href="#material">Comedy Specials & Netflix</a></li>
          <li><a href="#gyan">Gyan Bites & Quotes</a></li>
          <li><a href="#corporate">Corporate Keynotes & Galas</a></li>
          <li><a href="#about">Biography & Milestones</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Management & Inquiries</h4>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
          <li><strong>WhatsApp / Phone:</strong> <a href="${site.contact.whatsapp}" target="_blank" rel="noopener noreferrer">${site.contact.phone}</a></li>
          <li><strong>Location:</strong> Mumbai, India · Global Touring</li>
          <li><strong>Social:</strong> <a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a> · <a href="${site.social.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a> · <a href="${site.social.x}" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© ${currentYear} Amit Tandon. All rights reserved.</p>
      <div class="footer-legal-links">
        <span>Clean Hindi Observational Stand-Up</span>
      </div>
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
