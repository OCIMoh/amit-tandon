import type { ShowEvent, SiteContent } from "../lib/types";
import { formatShowDate } from "../lib/format";

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

export function renderAiseKaise(_site: SiteContent, events: ShowEvent[]): string {
  // Find primary event links for the 4 featured cities
  const londonEv = events.find(e => e.city.toLowerCase().includes("london")) || events[0];
  const mumbaiEv = events.find(e => e.city.toLowerCase().includes("mumbai") || e.city.toLowerCase().includes("delhi")) || events[1];
  const dubaiEv = events.find(e => e.city.toLowerCase().includes("dubai")) || events[2];
  const sydneyEv = events.find(e => e.city.toLowerCase().includes("sydney")) || events[3];

  const allRowsHtml = events
    .map((e) => {
      const region = getRegion(e.city);
      const cleanCity = e.city.toLowerCase();
      const cleanVenue = (e.venueHint || "").toLowerCase();
      return `
      <div class="tour-row-card" data-region="${region}" data-city="${cleanCity}" data-venue="${cleanVenue}">
        <div class="tour-date-cell">
          <span class="tour-date-main">${formatShowDate(e.date)}</span>
          <span class="tour-time-sub mono">${e.time}</span>
        </div>
        <div class="tour-venue-cell">
          <span class="tour-city-name">${e.city}</span>
          ${e.venueHint ? `<span class="tour-venue-name">${e.venueHint}</span>` : `<span class="tour-venue-name muted">Auditorium to be announced</span>`}
        </div>
        <div class="tour-action-cell">
          <a class="btn btn-primary btn-sm tour-ticket-cta" href="${e.href}" target="_blank" rel="noopener noreferrer">
            <span>GET TICKETS</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>`;
    })
    .join("");

  return `
<section class="tour-schedule-section" id="live-shows" aria-label="Amit Tandon World Tour Dates">
  <span id="tour" style="position: absolute; top: -80px;"></span>
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="tour-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">LIVE STAND-UP TOUR · 33 CITIES WORLDWIDE</span>
      </div>
      <div class="tour-title-row">
        <h2 class="display tour-title">
          <span>FIND AMIT </span>
          <span class="highlight-red">IN YOUR CITY.</span>
        </h2>
        <p class="tour-lead-copy">
          Join multi-generational families packing theatres worldwide for clean, hysterical, observational stand-up. Select your city to secure verified tickets directly.
        </p>
      </div>
    </div>

    <!-- Region Filter Tabs -->
    <div class="tour-region-tabs" data-reveal role="tablist" aria-label="Filter Tour Dates by Region">
      <button class="region-tab is-active" data-region-filter="all">ALL DATES (33)</button>
      <button class="region-tab" data-region-filter="uk-europe">UK & EUROPE</button>
      <button class="region-tab" data-region-filter="india">INDIA</button>
      <button class="region-tab" data-region-filter="middle-east">DUBAI & SE ASIA</button>
      <button class="region-tab" data-region-filter="australia">AUSTRALIA</button>
    </div>

    <!-- 4 Featured Premium Tour Announcements (2x2 Grid) -->
    <div class="featured-cities-grid">
      
      <!-- Featured 1: London -->
      <article class="featured-tour-card" data-region="uk-europe">
        <div class="tour-card-edge-perforation" aria-hidden="true"></div>
        <div class="tour-card-body">
          <div class="tour-card-top">
            <span class="tour-card-flag mono">🇬🇧 UNITED KINGDOM</span>
            <span class="tour-status-pill status-amber mono">SELLING FAST</span>
          </div>
          <h3 class="tour-card-city">LONDON</h3>
          <p class="tour-card-venue">${londonEv.venueHint || "O2 Shepherd's Bush Empire"}</p>
          <div class="tour-card-meta">
            <span class="tour-meta-date mono">${formatShowDate(londonEv.date)}</span>
            <span class="tour-meta-time mono">${londonEv.time}</span>
          </div>
          <div class="tour-card-action">
            <a class="btn btn-primary btn-sm tour-card-btn" href="${londonEv.href}" target="_blank" rel="noopener noreferrer">
              <span>BUY TICKETS</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </article>

      <!-- Featured 2: Mumbai -->
      <article class="featured-tour-card" data-region="india">
        <div class="tour-card-edge-perforation" aria-hidden="true"></div>
        <div class="tour-card-body">
          <div class="tour-card-top">
            <span class="tour-card-flag mono">🇮🇳 INDIA</span>
            <span class="tour-status-pill status-amber mono">LIMITED SEATS</span>
          </div>
          <h3 class="tour-card-city">MUMBAI</h3>
          <p class="tour-card-venue">${mumbaiEv.venueHint || "NCPA Tata Theatre / St. Andrew's"}</p>
          <div class="tour-card-meta">
            <span class="tour-meta-date mono">${formatShowDate(mumbaiEv.date)}</span>
            <span class="tour-meta-time mono">${mumbaiEv.time}</span>
          </div>
          <div class="tour-card-action">
            <a class="btn btn-primary btn-sm tour-card-btn" href="${mumbaiEv.href}" target="_blank" rel="noopener noreferrer">
              <span>BUY TICKETS</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </article>

      <!-- Featured 3: Dubai -->
      <article class="featured-tour-card" data-region="middle-east">
        <div class="tour-card-edge-perforation" aria-hidden="true"></div>
        <div class="tour-card-body">
          <div class="tour-card-top">
            <span class="tour-card-flag mono">🇦🇪 UAE</span>
            <span class="tour-status-pill status-amber mono">HIGH DEMAND</span>
          </div>
          <h3 class="tour-card-city">DUBAI</h3>
          <p class="tour-card-venue">${dubaiEv.venueHint || "Dubai Opera / Sheikh Rashid Hall"}</p>
          <div class="tour-card-meta">
            <span class="tour-meta-date mono">${formatShowDate(dubaiEv.date)}</span>
            <span class="tour-meta-time mono">${dubaiEv.time}</span>
          </div>
          <div class="tour-card-action">
            <a class="btn btn-primary btn-sm tour-card-btn" href="${dubaiEv.href}" target="_blank" rel="noopener noreferrer">
              <span>BUY TICKETS</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </article>

      <!-- Featured 4: Sydney -->
      <article class="featured-tour-card" data-region="australia">
        <div class="tour-card-edge-perforation" aria-hidden="true"></div>
        <div class="tour-card-body">
          <div class="tour-card-top">
            <span class="tour-card-flag mono">🇦🇺 AUSTRALIA</span>
            <span class="tour-status-pill status-amber mono">TOUR FINALE</span>
          </div>
          <h3 class="tour-card-city">SYDNEY</h3>
          <p class="tour-card-venue">${sydneyEv.venueHint || "State Theatre / Enmore Theatre"}</p>
          <div class="tour-card-meta">
            <span class="tour-meta-date mono">${formatShowDate(sydneyEv.date)}</span>
            <span class="tour-meta-time mono">${sydneyEv.time}</span>
          </div>
          <div class="tour-card-action">
            <a class="btn btn-primary btn-sm tour-card-btn" href="${sydneyEv.href}" target="_blank" rel="noopener noreferrer">
              <span>BUY TICKETS</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </article>

    </div>

    <!-- Expander for Full 33 Cities Schedule with Instant Search -->
    <div class="tour-expander-wrap" data-reveal>
      <button class="btn btn-secondary btn-lg tour-expand-btn" id="toggle-full-schedule-btn" aria-expanded="false" aria-controls="full-schedule-drawer">
        <span id="expand-btn-text">EXPLORE ALL 33 GLOBAL TOUR DATES &darr;</span>
      </button>

      <div class="full-schedule-drawer" id="full-schedule-drawer" style="display: none;">
        
        <!-- Live Instant Search & Filter Bar -->
        <div class="tour-search-bar-wrap">
          <div class="tour-search-field">
            <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="tour-search-input" 
              class="tour-search-input" 
              placeholder="Search by city, country, or venue (e.g. London, Delhi, Dubai, Sydney, Berlin)..."
              autocomplete="off"
              spellcheck="false"
              aria-label="Search tour cities and venues"
            />
            <button type="button" id="tour-search-clear" class="tour-search-clear" aria-label="Clear search query" style="display: none;">
              &times;
            </button>
          </div>

          <div class="tour-search-meta">
            <span class="tour-search-count mono" id="tour-search-count">SHOWING 33 OF 33 DATES</span>
          </div>
        </div>

        <!-- Popular City Quick Filter Chips -->
        <div class="tour-quick-chips">
          <span class="quick-chip-label mono">POPULAR CITIES:</span>
          <button type="button" class="tour-city-chip" data-search-term="London">London</button>
          <button type="button" class="tour-city-chip" data-search-term="Mumbai">Mumbai</button>
          <button type="button" class="tour-city-chip" data-search-term="Delhi">Delhi</button>
          <button type="button" class="tour-city-chip" data-search-term="Dubai">Dubai</button>
          <button type="button" class="tour-city-chip" data-search-term="Sydney">Sydney</button>
          <button type="button" class="tour-city-chip" data-search-term="Melbourne">Melbourne</button>
          <button type="button" class="tour-city-chip" data-search-term="Berlin">Berlin</button>
          <button type="button" class="tour-city-chip" data-search-term="Amsterdam">Amsterdam</button>
        </div>

        <!-- No Results Feedback State -->
        <div class="tour-no-results" id="tour-no-results" style="display: none;">
          <div class="no-results-icon">🎟️</div>
          <h4 class="no-results-title">No tour dates found for "<span id="no-results-query"></span>"</h4>
          <p class="no-results-desc">
            Amit is continually announcing new international cities for the world tour. You can request a date or inquire about corporate/private shows directly with management.
          </p>
          <div class="no-results-actions">
            <button type="button" class="btn btn-secondary btn-sm" id="reset-tour-search-btn">
              <span>CLEAR SEARCH & VIEW ALL DATES</span>
            </button>
            <a 
              href="https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20please%20bring%20the%20tour%20to%20my%20city!" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-primary btn-sm"
            >
              <span>REQUEST AMIT IN YOUR CITY &rarr;</span>
            </a>
          </div>
        </div>

        <!-- Scannable Schedule Cards Grid -->
        <div class="tour-schedule-grid" id="schedule-cards-grid">
          ${allRowsHtml}
        </div>
      </div>
    </div>

  </div>
</section>`;
}
