import type { SiteContent } from "../lib/types";

export function renderNav(_site: SiteContent): string {
  return `
<header class="cinema-nav" id="main-nav" role="banner">
  <div class="wrap cinema-nav-inner">
    <a class="nav-brand" href="#top" aria-label="Amit Tandon Homepage">
      <span class="nav-brand-title">AMIT TANDON</span>
      <span class="nav-brand-tag">STAND-UP COMEDIAN</span>
    </a>

    <nav class="nav-links-wrap" aria-label="Main Navigation">
      <ul class="cinema-nav-links">
        <li><a href="#watch" class="nav-link">WATCH</a></li>
        <li><a href="#live-shows" class="nav-link">LIVE SHOWS</a></li>
        <li><a href="#corporate" class="nav-link">BOOK AMIT</a></li>
        <li><a href="#translator" class="nav-link">TRANSLATOR</a></li>
        <li><a href="#about" class="nav-link">ABOUT</a></li>
      </ul>
    </nav>

    <div class="nav-actions">
      <a class="btn btn-primary btn-sm nav-cta" href="#live-shows">
        <span>BUY TICKETS</span>
        <span class="btn-arrow">&rarr;</span>
      </a>
    </div>
  </div>
</header>`;
}
