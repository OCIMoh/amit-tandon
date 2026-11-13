import type { ShowEvent, SiteContent } from "../lib/types";
import { formatShowDate, parseShowDate, getTicketingPlatform, getShowStatus, getRegion } from "../lib/format";

export function renderAiseKaise(_site: SiteContent, events: ShowEvent[]): string {
  // Find verified flagship events for the 3D coverflow carousel cards
  const londonEv = events.find(e => e.city.toLowerCase().includes("london")) || events[2];
  const mumbaiEv = events.find(e => e.city.toLowerCase().includes("mumbai")) || events[22];
  const sydneyEv = events.find(e => e.city.toLowerCase().includes("sydney")) || events[28];
  const dohaEv = events.find(e => e.city.toLowerCase().includes("doha")) || events[18];

  // 6 Flagship Tour Stops for the 3D Coverflow Carousel (matching Concept 2)
  const flagshipTickets = [
    {
      city: "NEW YORK",
      venue: "The Comedy Cellar / Town Hall",
      dateFormatted: "NOV 21, 2026",
      code: "AT-NYC-2026-41",
      category: "STAND-UP",
      stamp: "ON SALE",
      stampClass: "stamp-on-sale",
      image: "/images/cities/new-york.jpg",
      href: "https://www.ticketmaster.com",
    },
    {
      city: "LONDON",
      venue: londonEv.venueHint || "Southbank Centre · Queen Elizabeth Hall",
      dateFormatted: formatShowDate(londonEv.date),
      code: "AT-LDN-2026-01",
      category: "STAND-UP",
      stamp: "SELLING FAST",
      stampClass: "stamp-selling-fast",
      image: "/images/cities/london.jpg",
      href: londonEv.href,
    },
    {
      city: "TORONTO",
      venue: "Massey Hall · Elgin Theatre",
      dateFormatted: "DEC 05, 2026",
      code: "AT-YYZ-2026-14",
      category: "STAND-UP",
      stamp: "LIMITED",
      stampClass: "stamp-limited",
      image: "/images/cities/toronto.jpg",
      href: "https://www.ticketmaster.ca",
    },
    {
      city: "MUMBAI",
      venue: mumbaiEv.venueHint || "NCPA Tata Theatre",
      dateFormatted: formatShowDate(mumbaiEv.date),
      code: "AT-BOM-2026-02",
      category: "STAND-UP",
      stamp: "SOLD OUT",
      stampClass: "stamp-sold-out",
      image: "/images/cities/mumbai.jpg",
      href: mumbaiEv.href,
    },
    {
      city: "SYDNEY",
      venue: sydneyEv.venueHint || "Sydney Opera House",
      dateFormatted: formatShowDate(sydneyEv.date),
      code: "AT-SYD-2027-03",
      category: "STAND-UP",
      stamp: "SELLING FAST",
      stampClass: "stamp-selling-fast",
      image: "/images/cities/sydney.jpg",
      href: sydneyEv.href,
    },
    {
      city: "DUBAI",
      venue: "Dubai Opera House",
      dateFormatted: "FEB 08, 2027",
      code: "AT-DXB-2027-04",
      category: "STAND-UP",
      stamp: "ON SALE",
      stampClass: "stamp-on-sale",
      image: "/images/cities/dubai.jpg",
      href: dohaEv.href,
    },
  ];

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

      return `
      <article 
        class="tour-row-card in-extended-fold" 
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
<section class="tour-dispatch-section backstage-command-center" id="live-shows" aria-label="The Backstage Tour Dispatch & Box Office Command Center">
  <!-- Anchor hooks for seamless cross-site navigation -->
  <span id="tour" class="section-anchor" style="position: absolute; top: -80px;"></span>
  <span id="booking" class="section-anchor" style="position: absolute; top: -80px;"></span>
  <span id="corporate" class="section-anchor" style="position: absolute; top: -80px;"></span>

  <!-- Theatrical Overhead Backstage Lighting Cone -->
  <div class="dispatch-stage-atmosphere" aria-hidden="true">
    <div class="dispatch-ambient-glow"></div>
    <div class="dispatch-lamp-spotlight"></div>
    <div class="dispatch-grain-overlay"></div>
  </div>

  <div class="wrap dispatch-wrap">
    
    <!-- 1. The Dispatch Room Masthead (Matching Concept 2) -->
    <header class="dispatch-masthead" data-reveal>
      <div class="dispatch-concept-badge mono">[ CONCEPT 2 ]</div>

      <div class="dispatch-title-row">
        <h2 class="dispatch-main-title display">
          <span class="title-white">WORLD TOUR DISPATCH &amp; </span>
          <span class="title-red highlight-red">BOX OFFICE.</span>
        </h2>
        
        <p class="dispatch-subheading mono">
          GRAB YOUR TICKETS &bull; BE PART OF THE JOURNEY
        </p>

        <p class="dispatch-lead-copy">
          Over 2,000 live shows across 30+ countries. Direct verified ticketing for live international auditorium dates, paired with the direct executive management hotline for corporate keynotes and private galas.
        </p>
      </div>

      <!-- Trust Badges Strip -->
      <div class="tour-trust-strip mono" aria-label="Official Box Office Trust Badges">
        <div class="trust-item">
          <span class="trust-icon">🛡️</span>
          <span>100% VERIFIED BOX OFFICE LINKS (ZERO RESELLER MARKUPS)</span>
        </div>
        <span class="trust-sep" aria-hidden="true">&bull;</span>
        <div class="trust-item">
          <span class="trust-icon">👨‍👩‍👧‍👦</span>
          <span>100% CLEAN FAMILY COMEDY (3 GENERATIONS SAFE)</span>
        </div>
        <span class="trust-sep" aria-hidden="true">&bull;</span>
        <div class="trust-item">
          <span class="trust-icon">⚡</span>
          <span>INSTANT MANAGEMENT DISPATCH (&lt; 15 MINS RESPONSE)</span>
        </div>
      </div>
    </header>

    <!-- 2. 3D Coverflow Ticket Carousel Showcase (Concept 2) -->
    <div class="theatrical-ticket-carousel-container" id="theatrical-ticket-carousel" aria-label="3D World Tour Box Office Carousel">
          <div class="coverflow-stage" id="tour-coverflow-stage">
            <!-- Previous Button -->
            <button type="button" class="carousel-nav-btn btn-prev" id="coverflow-prev-btn" aria-label="Previous tour stop">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <!-- 3D Track -->
            <div class="coverflow-track" id="coverflow-track">
              ${flagshipTickets.map((t, idx) => `
                <article 
                  class="theatrical-ticket-card ${idx === 0 ? "pos-center" : idx === 1 ? "pos-next-1" : idx === 2 ? "pos-next-2" : idx === flagshipTickets.length - 1 ? "pos-prev-1" : idx === flagshipTickets.length - 2 ? "pos-prev-2" : "pos-hidden"}" 
                  data-ticket-index="${idx}"
                  data-city="${t.city}"
                  data-href="${t.href}"
                  role="group"
                  aria-label="${t.city} Show Ticket"
                >
                  <div class="stub-left">
                    <div class="stub-photo-frame">
                      <img src="${t.image}" alt="Amit Tandon performing live" loading="lazy" />
                    </div>
                    <div class="stub-barcode" aria-hidden="true">
                      <div class="barcode-lines"></div>
                      <span class="barcode-text mono">${t.code}</span>
                    </div>
                  </div>
                  <div class="stub-right">
                    <div class="stub-info-block">
                      <div class="ticket-badge-row">
                        <span class="live-pill mono">LIVE</span>
                        <span class="category-text mono">${t.category}</span>
                      </div>
                      <h3 class="ticket-city display">${t.city}</h3>
                      <p class="ticket-venue">${t.venue}</p>
                      <div class="ticket-date-row mono">
                        <span class="cal-icon" aria-hidden="true">📅</span>
                        <span>${t.dateFormatted}</span>
                      </div>
                    </div>
                    <div class="stamp-box ${t.stampClass} mono" aria-label="Status: ${t.stamp}">
                      <span>${t.stamp}</span>
                    </div>
                  </div>
                </article>
              `).join("")}
            </div>

            <!-- Next Button -->
            <button type="button" class="carousel-nav-btn btn-next" id="coverflow-next-btn" aria-label="Next tour stop">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <!-- Pagination Dots -->
          <div class="carousel-pagination" id="coverflow-pagination" role="tablist" aria-label="Select tour city">
            ${flagshipTickets.map((t, idx) => `
              <button 
                type="button" 
                class="carousel-dot ${idx === 0 ? "active" : ""}" 
                data-dot-index="${idx}" 
                aria-label="View ${t.city} tour stop"
                role="tab"
              ></button>
            `).join("")}
          </div>

          <!-- View All Tour Dates Trigger Pill Button -->
          <div class="coverflow-bottom-actions">
            <button type="button" class="tour-view-all-btn" id="coverflow-view-all-btn" aria-expanded="false" aria-controls="tour-schedule-manifest-drawer">
              <span>VIEW ALL 32 TOUR DATES</span>
              <span class="btn-arrow" aria-hidden="true">&darr;</span>
            </button>
          </div>
        </div>

        <!-- Collapsible Full-Width 32-City Itinerary Manifest Drawer -->
        <div class="tour-schedule-manifest-drawer" id="tour-schedule-manifest-drawer" aria-hidden="true">
          <div class="manifest-drawer-inner">
            
            <!-- Instant Search Field & Region Filter Navigation -->
            <div class="terminal-filter-cockpit">
              <div class="tour-search-field">
                <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  id="tour-search-input" 
                  class="tour-search-input" 
                  placeholder="Search 32 cities, countries, or venues (London, Mumbai, Sydney, Doha, Singapore)..."
                  autocomplete="off"
                  spellcheck="false"
                  aria-label="Search tour cities and venues"
                />
                <button type="button" id="tour-search-clear" class="tour-search-clear" aria-label="Clear search query" style="display: none;">
                  &times;
                </button>
              </div>

              <!-- Popular Quick City Chips -->
              <div class="tour-quick-chips">
                <span class="quick-chip-label mono">POPULAR:</span>
                <button type="button" class="tour-city-chip" data-search-term="London">London</button>
                <button type="button" class="tour-city-chip" data-search-term="Mumbai">Mumbai</button>
                <button type="button" class="tour-city-chip" data-search-term="Delhi">Delhi</button>
                <button type="button" class="tour-city-chip" data-search-term="Sydney">Sydney</button>
                <button type="button" class="tour-city-chip" data-search-term="Doha">Doha</button>
                <button type="button" class="tour-city-chip" data-search-term="Singapore">Singapore</button>
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

            <!-- Full 32-City Itinerary Manifest Board -->
            <div class="tour-schedule-board-container">
              <div class="schedule-board-header">
                <div class="board-heading-block">
                  <h4 class="board-title display">WORLD TOUR ITINERARY MANIFEST</h4>
                  <p class="board-sub mono">32 CITIES &bull; NOVEMBER 2026 THROUGH JULY 2027</p>
                </div>
                <div class="board-view-status">
                  <span class="status-indicator-dot"></span>
                  <span class="mono" id="board-schedule-status">OFFICIAL TICKETING INGEST ACTIVE</span>
                </div>
              </div>

              <div class="tour-schedule-grid" id="schedule-cards-grid">
                ${allRowsHtml}
              </div>

              <!-- No Results State -->
              <div class="tour-no-results" id="tour-no-results" style="display: none;">
                <div class="no-results-icon">🎟️</div>
                <h4 class="no-results-title">No tour dates found for "<span id="no-results-query"></span>"</h4>
                <p class="no-results-desc">
                  Amit is constantly adding new international stops. Tap below to send an instant city request directly to management:
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

              <!-- Bottom Drawer Collapse Button -->
              <div class="tour-drawer-bottom-actions">
                <button type="button" class="tour-collapse-drawer-btn" id="drawer-collapse-btn">
                  <span>&uarr; COLLAPSE TOUR DATES</span>
                </button>
              </div>

            </div>

          </div>
        </div>

    </div>

  </section>
`;
}
