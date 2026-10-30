import type { SiteContent } from "../lib/types";
import { svgs } from "../content/svgs";

export function renderNav(site: SiteContent): string {
  return `
<header class="brutal-nav" role="banner">
  <div class="wrap nav-inner">
    <a class="nav-brand" href="#top" aria-label="${site.subject} Homepage">
      <div class="brand-crown-wrapper">
        ${svgs.crown}
        <span class="nav-brand-title">AMIT TANDON</span>
      </div>
    </a>

    <nav aria-label="Main Navigation">
      <ul class="brutal-nav-links">
        <li><a href="#specials" class="nav-pill">SPECIALS</a></li>
        <li><a href="#tour" class="nav-pill">TOUR</a></li>
        <li><a href="#corporate" class="nav-pill">CORPORATE</a></li>
        <li><a href="#slot-machine" class="nav-pill">AISE KAISE?</a></li>
      </ul>
    </nav>

    <div class="nav-actions">
      <a class="btn btn-red btn-sm nav-cta" href="#tour">BOOK AMIT &rarr;</a>
    </div>
  </div>
</header>`;
}
