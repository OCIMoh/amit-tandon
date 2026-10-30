import type { SiteContent } from "../lib/types";

export function renderNav(site: SiteContent): string {
  return `
<header class="nav" role="banner">
  <div class="wrap nav-inner">
    <a class="nav-brand" href="#top" aria-label="${site.subject} Homepage">
      <span class="nav-brand-text">${site.subject}</span>
      <span class="nav-brand-tag">World Tour</span>
    </a>

    <nav aria-label="Main Navigation">
      <ul class="nav-links">
        <li><a href="#tour">Tour Dates (33)</a></li>
        <li><a href="#material">Specials & Clips</a></li>
        <li><a href="#gyan">Gyan Bites</a></li>
        <li><a href="#corporate">Corporate Galas</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>

    <div class="nav-actions">
      <a class="btn btn-secondary" href="#corporate" style="display:none; @media(min-width:640px){display:inline-flex;}">Corporate</a>
      <a class="btn btn-primary" href="#tour">Book Tickets</a>
    </div>
  </div>
</header>`;
}
