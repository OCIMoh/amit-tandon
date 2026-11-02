import type { ShowEvent, SiteContent } from "../lib/types";
import { formatShowDate, parseShowDate, getTicketingPlatform, getShowStatus, getRegion } from "../lib/format";

export function renderAiseKaise(_site: SiteContent, events: ShowEvent[]): string {
  // Find verified flagship events for the 4 featured ticket-stub cards
  const londonEv = events.find(e => e.city.toLowerCase().includes("london")) || events[2];
  const mumbaiEv = events.find(e => e.city.toLowerCase().includes("mumbai")) || events[22];
  const sydneyEv = events.find(e => e.city.toLowerCase().includes("sydney")) || events[28];
  const dohaEv = events.find(e => e.city.toLowerCase().includes("doha")) || events[18];

  // Pre-calculate region counts for the filter tabs
  let ukCount = 0;
  let indiaCount = 0;
  let ausCount = 0;
  let meAsiaCount = 0;

  events.forEach(e => {
    const reg = getRegion(e.city);
    if (reg === "uk-europe") ukCount++;
    else if (reg === "india") indiaCount++;
    else if (reg === "australia") ausCount++;
    else if (reg === "middle-east-asia") meAsiaCount++;
  });

  const allRowsHtml = events
    .map((e, index) => {
      const region = getRegion(e.city);
      const cleanCity = e.city.toLowerCase();
      const cleanVenue = (e.venueHint || "").toLowerCase();
      const dateParts = parseShowDate(e.date);
      const platform = getTicketingPlatform(e.href);
      const status = getShowStatus(index, e.time, e.city);
      const isInitialFold = index < 8; // first 8 visible by default before expand

      return `
      <article 
        class="tour-row-card ${isInitialFold ? 'in-initial-fold' : 'in-extended-fold'}" 
        data-region="${region}" 
        data-city="${cleanCity}" 
        data-venue="${cleanVenue}"
        data-index="${index}"
      >
        <!-- Perforated Ticket Notches -->
        <span class="row-ticket-notch notch-left" aria-hidden="true"></span>
        <span class="row-ticket-notch notch-right" aria-hidden="true"></span>

        <!-- Date Block -->
        <div class="tour-date-cell">
          <div class="date-badge-box">
            <span class="date-month mono">${dateParts.month}</span>
            <span class="date-day display">${dateParts.day}</span>
            <span class="date-weekday mono">${dateParts.weekday}</span>
          </div>
        </div>

        <!-- Venue & City Block -->
        <div class="tour-venue-cell">
          <div class="tour-city-row">
            <h4 class="tour-city-name">${e.city}</h4>
            <span class="tour-status-pill status-${status.type} mono">${status.label}</span>
          </div>
          <div class="tour-venue-sub">
            <span class="venue-pin-icon" aria-hidden="true">📍</span>
            <span class="tour-venue-name">${e.venueHint ? e.venueHint : "Auditorium & Hall to be announced"}</span>
          </div>
          <div class="tour-meta-pills">
            <span class="time-slot-pill mono">🕒 ${e.time} SHOWTIME</span>
            <span class="platform-tag mono">🎟️ ${platform}</span>
          </div>
        </div>

        <!-- Action / CTA Cell -->
        <div class="tour-action-cell">
          <a class="btn btn-primary btn-sm tour-ticket-cta" href="${e.href}" target="_blank" rel="noopener noreferrer">
            <span>BUY TICKETS</span>
            <span class="btn-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>`;
    })
    .join("");

  return `
<section class="tour-schedule-section" id="live-shows" aria-label="Amit Tandon World Tour Dates">
  <span id="tour" style="position: absolute; top: -80px;"></span>
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="tour-header" data-reveal>
      <div class="section-eyebrow">
        <span class="live-pulse-dot" aria-hidden="true"></span>
        <span class="mono">AISE KAISE WORLD TOUR 2026–2027 · OFFICIAL BOX OFFICE</span>
        <span class="badge-status-pill mono">32 GLOBAL CITIES</span>
      </div>
      <div class="tour-title-row">
        <h2 class="display tour-title">
          <span>FIND AMIT </span>
          <span class="highlight-red">IN YOUR CITY.</span>
        </h2>
        <p class="tour-lead-copy">
          Over 2,000 live shows across 30+ countries. 100% clean, family-friendly observational stand-up deconstructing joint-family hierarchies, parenting, and modern middle-class survival. Select your city to secure verified tickets directly from official ticketing partners.
        </p>
      </div>

      <!-- Trust Badges Strip -->
      <div class="tour-trust-strip mono">
        <div class="trust-item">
          <span class="trust-icon">🛡️</span>
          <span>VERIFIED PARTNER LINKS (NO RESELLER MARKUPS)</span>
        </div>
        <span class="trust-sep" aria-hidden="true">&bull;</span>
        <div class="trust-item">
          <span class="trust-icon">👨‍👩‍👧‍👦</span>
          <span>100% CLEAN FAMILY COMEDY (PG-RATED)</span>
        </div>
        <span class="trust-sep" aria-hidden="true">&bull;</span>
        <div class="trust-item">
          <span class="trust-icon">⚡</span>
          <span>INSTANT E-TICKET CONFIRMATION</span>
        </div>
      </div>
    </div>

    <!-- Always-Visible Tour Command Center: Search & Region Tabs -->
    <div class="tour-command-center" data-reveal>
      
      <!-- Instant Search Field Bar -->
      <div class="tour-search-bar-wrap">
        <div class="tour-search-field">
          <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="tour-search-input" 
            class="tour-search-input" 
            placeholder="Search by city, country, or venue (e.g. London, Delhi, Sydney, Doha, Frankfurt, Singapore)..."
            autocomplete="off"
            spellcheck="false"
            aria-label="Search tour cities and venues"
          />
          <button type="button" id="tour-search-clear" class="tour-search-clear" aria-label="Clear search query" style="display: none;">
            &times;
          </button>
        </div>

        <div class="tour-search-meta">
          <span class="tour-search-count mono" id="tour-search-count">SHOWING 32 OF 32 DATES</span>
        </div>
      </div>

      <!-- Popular City Quick Filter Chips -->
      <div class="tour-quick-chips">
        <span class="quick-chip-label mono">POPULAR CITIES:</span>
        <button type="button" class="tour-city-chip" data-search-term="London">London</button>
        <button type="button" class="tour-city-chip" data-search-term="Mumbai">Mumbai</button>
        <button type="button" class="tour-city-chip" data-search-term="Delhi">Delhi</button>
        <button type="button" class="tour-city-chip" data-search-term="Sydney">Sydney</button>
        <button type="button" class="tour-city-chip" data-search-term="Doha">Doha</button>
        <button type="button" class="tour-city-chip" data-search-term="Frankfurt">Frankfurt</button>
        <button type="button" class="tour-city-chip" data-search-term="Singapore">Singapore</button>
        <button type="button" class="tour-city-chip" data-search-term="Melbourne">Melbourne</button>
      </div>

      <!-- Region Filter Tabs -->
      <div class="tour-region-tabs" role="tablist" aria-label="Filter Tour Dates by Region">
        <button class="region-tab is-active" data-region-filter="all">ALL DATES (32)</button>
        <button class="region-tab" data-region-filter="uk-europe">🇬🇧 UK & EUROPE (${ukCount})</button>
        <button class="region-tab" data-region-filter="india">🇮🇳 INDIA (${indiaCount})</button>
        <button class="region-tab" data-region-filter="australia">🇦🇺 AUSTRALIA & NZ (${ausCount})</button>
        <button class="region-tab" data-region-filter="middle-east-asia">🌏 MIDDLE EAST & ASIA (${meAsiaCount})</button>
      </div>

    </div>

    <!-- 4 Curated Flagship Headliners (Ticket Stub 2x2 Grid) -->
    <div class="featured-headliners-wrap" data-reveal>
      <div class="featured-section-title-strip">
        <span class="strip-dot" aria-hidden="true"></span>
        <span class="mono">FLAGSHIP ARENA PERFORMANCES · HIGH DEMAND HEADLINERS</span>
      </div>

      <div class="featured-cities-grid" id="featured-cities-grid">
        
        <!-- Featured 1: London (Southbank Centre) -->
        <article class="featured-tour-card" data-region="uk-europe">
          <span class="stub-notch notch-top" aria-hidden="true"></span>
          <span class="stub-notch notch-bottom" aria-hidden="true"></span>
          <div class="tour-card-body">
            <div class="tour-card-top">
              <span class="tour-card-flag mono">🇬🇧 UNITED KINGDOM</span>
              <span class="tour-stub-code mono">#AT-LDN-01</span>
              <span class="tour-status-pill status-fast mono">SELLING FAST</span>
            </div>
            <h3 class="tour-card-city">LONDON</h3>
            <p class="tour-card-venue">${londonEv.venueHint || "Southbank Centre · Queen Elizabeth Hall"}</p>
            <div class="tour-card-meta">
              <span class="tour-meta-date mono">📅 ${formatShowDate(londonEv.date)}</span>
              <span class="tour-meta-time mono">🕒 16:00 & 19:30</span>
              <span class="tour-partner-pill mono">Southbank Box Office</span>
            </div>
            <div class="tour-card-action">
              <a class="btn btn-primary btn-sm tour-card-btn" href="${londonEv.href}" target="_blank" rel="noopener noreferrer">
                <span>BUY TICKETS</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Featured 2: Mumbai (NCPA) -->
        <article class="featured-tour-card" data-region="india">
          <span class="stub-notch notch-top" aria-hidden="true"></span>
          <span class="stub-notch notch-bottom" aria-hidden="true"></span>
          <div class="tour-card-body">
            <div class="tour-card-top">
              <span class="tour-card-flag mono">🇮🇳 INDIA</span>
              <span class="tour-stub-code mono">#AT-BOM-02</span>
              <span class="tour-status-pill status-festive mono">CHRISTMAS SPECIAL</span>
            </div>
            <h3 class="tour-card-city">MUMBAI</h3>
            <p class="tour-card-venue">${mumbaiEv.venueHint || "NCPA Tata Theatre / St. Andrew's"}</p>
            <div class="tour-card-meta">
              <span class="tour-meta-date mono">📅 ${formatShowDate(mumbaiEv.date)}</span>
              <span class="tour-meta-time mono">🕒 ${mumbaiEv.time}</span>
              <span class="tour-partner-pill mono">BookMyShow Exclusive</span>
            </div>
            <div class="tour-card-action">
              <a class="btn btn-primary btn-sm tour-card-btn" href="${mumbaiEv.href}" target="_blank" rel="noopener noreferrer">
                <span>BUY TICKETS</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Featured 3: Sydney (Sydney Opera House) -->
        <article class="featured-tour-card" data-region="australia">
          <span class="stub-notch notch-top" aria-hidden="true"></span>
          <span class="stub-notch notch-bottom" aria-hidden="true"></span>
          <div class="tour-card-body">
            <div class="tour-card-top">
              <span class="tour-card-flag mono">🇦🇺 AUSTRALIA</span>
              <span class="tour-stub-code mono">#AT-SYD-03</span>
              <span class="tour-status-pill status-finale mono">TOUR FINALE</span>
            </div>
            <h3 class="tour-card-city">SYDNEY</h3>
            <p class="tour-card-venue">${sydneyEv.venueHint || "Sydney Opera House"}</p>
            <div class="tour-card-meta">
              <span class="tour-meta-date mono">📅 ${formatShowDate(sydneyEv.date)}</span>
              <span class="tour-meta-time mono">🕒 ${sydneyEv.time}</span>
              <span class="tour-partner-pill mono">Sydney Opera House Box Office</span>
            </div>
            <div class="tour-card-action">
              <a class="btn btn-primary btn-sm tour-card-btn" href="${sydneyEv.href}" target="_blank" rel="noopener noreferrer">
                <span>BUY TICKETS</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Featured 4: Doha (Platinumlist) -->
        <article class="featured-tour-card" data-region="middle-east-asia">
          <span class="stub-notch notch-top" aria-hidden="true"></span>
          <span class="stub-notch notch-bottom" aria-hidden="true"></span>
          <div class="tour-card-body">
            <div class="tour-card-top">
              <span class="tour-card-flag mono">🇶🇦 QATAR</span>
              <span class="tour-stub-code mono">#AT-DOH-04</span>
              <span class="tour-status-pill status-fast mono">HIGH DEMAND</span>
            </div>
            <h3 class="tour-card-city">DOHA</h3>
            <p class="tour-card-venue">${dohaEv.venueHint || "Qatar National Convention Centre (QNCC)"}</p>
            <div class="tour-card-meta">
              <span class="tour-meta-date mono">📅 ${formatShowDate(dohaEv.date)}</span>
              <span class="tour-meta-time mono">🕒 ${dohaEv.time}</span>
              <span class="tour-partner-pill mono">Platinumlist Official</span>
            </div>
            <div class="tour-card-action">
              <a class="btn btn-primary btn-sm tour-card-btn" href="${dohaEv.href}" target="_blank" rel="noopener noreferrer">
                <span>BUY TICKETS</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>

    <!-- Complete 32-City World Tour Departure Board -->
    <div class="tour-schedule-board-container" data-reveal>
      <div class="schedule-board-header">
        <div class="board-heading-block">
          <h3 class="board-title display">WORLD TOUR ITINERARY</h3>
          <p class="board-sub mono">32 CITIES · NOVEMBER 2026 THROUGH JULY 2027</p>
        </div>
        <div class="board-view-status">
          <span class="status-indicator-dot"></span>
          <span class="mono" id="board-schedule-status">OFFICIAL LIVE TICKETING INGEST</span>
        </div>
      </div>

      <!-- Scannable Schedule Departure Board Grid -->
      <div class="tour-schedule-grid" id="schedule-cards-grid">
        ${allRowsHtml}
      </div>

      <!-- Progressive Schedule Expander Button -->
      <div class="tour-expander-wrap" id="tour-expander-wrap">
        <button class="btn btn-secondary btn-lg tour-expand-btn" id="toggle-full-schedule-btn" aria-expanded="false" aria-controls="schedule-cards-grid">
          <span id="expand-btn-text">EXPLORE ALL 32 GLOBAL TOUR DATES &darr;</span>
        </button>
      </div>

      <!-- No Results Feedback State -->
      <div class="tour-no-results" id="tour-no-results" style="display: none;">
        <div class="no-results-icon">🎟️</div>
        <h4 class="no-results-title">No tour dates found for "<span id="no-results-query"></span>"</h4>
        <p class="no-results-desc">
          Amit is constantly adding new international cities for the world tour. Drop a direct request to management below and we'll notify you the moment your city goes live!
        </p>
        <div class="no-results-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="reset-tour-search-btn">
            <span>CLEAR SEARCH & VIEW ALL DATES</span>
          </button>
          <a 
            id="whatsapp-request-city-btn"
            href="https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20please%20bring%20the%20Aise%20Kaise%20world%20tour%20to%20my%20city!" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary btn-sm"
          >
            <span>REQUEST AMIT IN YOUR CITY &rarr;</span>
          </a>
        </div>
      </div>

    </div>

    <!-- City Missing Callout Banner -->
    <div class="tour-request-banner" data-reveal>
      <div class="request-banner-content">
        <div class="request-badge mono">DON'T SEE YOUR CITY?</div>
        <h3 class="request-title">BRING AISE KAISE TO YOUR AUDITORIUM</h3>
        <p class="request-text">
          Planning a private society screening, campus headliner, or corporate annual conference? Amit tours worldwide throughout the year.
        </p>
      </div>
      <div class="request-banner-actions">
        <a 
          href="https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20we%20would%20like%20to%20request%20a%20tour%20date%20in%20our%20city."
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-primary"
        >
          <span>CHAT ON WHATSAPP</span>
          <span class="btn-arrow" aria-hidden="true">&rarr;</span>
        </a>
        <a href="#corporate" class="btn btn-secondary">
          <span>CORPORATE KEYNOTES</span>
        </a>
      </div>
    </div>

  </div>
</section>`;
}
