import type { ShowEvent, SiteContent } from "../lib/types";
import { formatShowDate } from "../lib/format";
import { images } from "../content/images";

function getRegion(city: string): "uk-europe" | "india" | "australia" | "middle-east" {
  const c = city.toLowerCase();
  if (c.includes("uk") || c.includes("germany") || c.includes("switzerland") || c.includes("netherlands") || c.includes("finland") || c.includes("london") || c.includes("cardiff") || c.includes("manchester") || c.includes("geneva") || c.includes("frankfurt") || c.includes("munich")) {
    return "uk-europe";
  }
  if (c.includes("india") || c.includes("delhi") || c.includes("mumbai") || c.includes("jaipur") || c.includes("chandigarh") || c.includes("kolkata") || c.includes("ludhiana")) {
    return "india";
  }
  if (c.includes("australia") || c.includes("new zealand") || c.includes("sydney") || c.includes("melbourne") || c.includes("auckland") || c.includes("adelaide") || c.includes("canberra")) {
    return "australia";
  }
  return "middle-east";
}

export function renderAiseKaise(site: SiteContent, events: ShowEvent[]): string {
  const rows = events
    .map((e, index) => {
      const region = getRegion(e.city);
      const isPrestige = e.venueHint && (e.venueHint.includes("Opera") || e.venueHint.includes("Southbank"));
      const badge = isPrestige ? "Prestige Venue" : (index % 4 === 0 ? "Selling Fast" : "Upcoming");
      const badgeClass = isPrestige ? "badge-prestige" : (badge === "Selling Fast" ? "badge-fast" : "badge-upcoming");

      return `
      <tr class="tour-row" data-region="${region}" data-reveal>
        <td class="tour-cell-date">
          <span class="date-main">${formatShowDate(e.date)}</span>
          <span class="time-sub">${e.time}</span>
        </td>
        <td class="tour-cell-city">
          <span class="city-name">${e.city}</span>
          ${e.venueHint ? `<span class="venue-hint">${e.venueHint}</span>` : ""}
        </td>
        <td class="tour-cell-status">
          <span class="tour-badge ${badgeClass}">${badge}</span>
        </td>
        <td class="tour-cell-action">
          <a class="btn btn-tour-ticket" href="${e.href}" target="_blank" rel="noopener noreferrer">
            <span>Buy Tickets</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
        </td>
      </tr>`;
    })
    .join("");

  return `
<section class="tour-section" id="tour" aria-label="Aise Kaise World Tour Dates">
  <div class="tour-header-backdrop">
    <img class="tour-bg-img" src="${images.heroStage}" alt="Amit Tandon live auditorium crowd" width="1920" height="900" loading="lazy" />
    <div class="tour-overlay-gradient"></div>
    <div class="wrap tour-header-content">
      <div class="chapter-tag" style="color:#fca5a5">World Tour 2026–2027</div>
      <h2 class="display tour-head-title">${site.currentShow.title}</h2>
      <p class="tour-head-lead">${site.currentShow.theme}</p>
      <div class="tour-meta-badges">
        <span class="t-meta-pill">33 International Cities</span>
        <span class="t-meta-pill">100% Clean Family Comedy</span>
        <span class="t-meta-pill">Hindi Stand-up</span>
      </div>
    </div>
  </div>

  <div class="wrap tour-body">
    <div class="tour-controls">
      <div class="tour-filter-tabs" role="tablist">
        <button class="filter-tab is-active" data-filter="all">All Dates (33)</button>
        <button class="filter-tab" data-filter="uk-europe">UK & Europe (18)</button>
        <button class="filter-tab" data-filter="india">India (7)</button>
        <button class="filter-tab" data-filter="australia">Australia & NZ (5)</button>
        <button class="filter-tab" data-filter="middle-east">Middle East & Asia (3)</button>
      </div>
      <div class="tour-search-wrap">
        <input type="text" id="tourSearchInput" class="tour-search" placeholder="Search city or venue..." />
      </div>
    </div>

    <div class="tour-table-card">
      <table class="tour-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Location & Venue</th>
            <th>Availability</th>
            <th style="text-align: right">Tickets</th>
          </tr>
        </thead>
        <tbody id="tourTableBody">
          ${rows}
        </tbody>
      </table>
    </div>

    <div class="tour-footer-help">
      <p>Need private box seats, group bookings (15+ tickets), or tour assistance? Contact <a href="mailto:${site.contact.email}">${site.contact.email}</a> or WhatsApp <a href="${site.contact.whatsapp}" target="_blank" rel="noopener noreferrer">${site.contact.phone}</a></p>
    </div>
  </div>
</section>`;
}
