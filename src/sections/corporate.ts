import type { SiteContent } from "../lib/types";
import { images } from "../content/images";

export function renderCorporate(site: SiteContent): string {
  const corp = site.corporate;
  if (!corp) return "";

  const bulletsHtml = corp.bullets
    .map(
      (b) => `
    <li class="corp-bullet-item">
      <div class="corp-check-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <span>${b}</span>
    </li>`
    )
    .join("");

  return `
<section class="corporate-section" id="corporate" aria-label="Corporate Keynotes and Private Events">
  <div class="wrap corporate-card" data-reveal>
    <div class="corp-grid">
      <div class="corp-left">
        <div class="chapter-tag" style="color:#d4af37">Executive & Keynote Booking</div>
        <h2 class="display corp-title">${corp.title}</h2>
        <p class="corp-tagline">${corp.tagline}</p>
        <p class="corp-bio">${corp.bio}</p>

        <ul class="corp-bullets">
          ${bulletsHtml}
        </ul>

        <div class="corp-actions">
          <a class="btn btn-primary" href="${site.contact.whatsapp}" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.676.15-.2.301-.776.977-.951 1.178-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.492-.894-.797-1.498-1.78-1.674-2.081-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516l-.577-.01c-.2 0-.526.075-.802.376-.275.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.229 3.11.15.2 2.121 3.238 5.137 4.542.718.31 1.278.496 1.716.635.72.229 1.376.196 1.895.119.578-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351z"/></svg>
            <span>WhatsApp Management Direct</span>
          </a>
          <a class="btn btn-secondary" href="mailto:${site.contact.email}?subject=Corporate%20Booking%20Inquiry%20-%20Amit%20Tandon">
            <span>Email Official Inquiry</span>
          </a>
        </div>
      </div>

      <div class="corp-right">
        <div class="corp-portrait-frame">
          <img src="${images.portrait}" alt="Amit Tandon corporate headshot" width="800" height="1000" loading="lazy" />
          <div class="corp-credentials-overlay">
            <div class="cred-badge">
              <strong>IIT Delhi MBA</strong>
              <span>Mechanical Engineering</span>
            </div>
            <div class="cred-badge">
              <strong>10+ Years Corporate</strong>
              <span>Entrepreneur & Managing Director</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
