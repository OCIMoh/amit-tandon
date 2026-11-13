import type { ShowEvent, SiteContent } from "../lib/types";
import { formatShowDate, parseShowDate, getTicketingPlatform, getShowStatus, getRegion } from "../lib/format";

export function renderAiseKaise(site: SiteContent, events: ShowEvent[]): string {
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
    
    <!-- 1. The Dispatch Room Masthead -->
    <header class="dispatch-masthead" data-reveal>
      <div class="dispatch-status-bar mono">
        <div class="status-dispatch-tag">
          <span class="dispatch-led-bulb" aria-hidden="true"></span>
          <span>BACKSTAGE TOUR DISPATCH & OFFICIAL BOX OFFICE // DESK #04</span>
        </div>
        <div class="status-cleared mono">190 COUNTRIES CLEARED · 32 STAGES ACTIVE</div>
        <div class="status-hotline mono">DIRECT MGMT DESK: +91 9004040003</div>
      </div>

      <div class="dispatch-title-row">
        <h2 class="dispatch-main-title display">
          <span class="title-white">WORLD TOUR DISPATCH </span>
          <span class="title-red highlight-red">& BOX OFFICE.</span>
        </h2>
        
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

    <!-- 2. The 1,520px-Wide Master Backstage Command Desk -->
    <div class="dispatch-command-desk" data-reveal>
      
      <!-- Top Brushed Metal Desk Trim with Millimeter Ruler -->
      <div class="desk-metal-trim" aria-hidden="true">
        <div class="aluminum-ruler mono">
          <span>| 00 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 CM | WORLD TOUR FLIGHT DESK · TANDON MGMT</span>
        </div>
        <div class="desk-screws">
          <span class="screw" title="Milled Machine Screw"></span>
          <span class="screw" title="Milled Machine Screw"></span>
          <span class="screw" title="Milled Machine Screw"></span>
        </div>
      </div>

      <!-- Main Operational Desk Surface: 60% Left Wing (Tour Terminal) + 40% Right Wing (Hotline & Telex) -->
      <div class="dispatch-desk-surface">
        <div class="dispatch-dual-grid">
          
          <!-- LEFT WING (60%): The Global Tour Solari Departure Terminal -->
          <div class="solari-terminal-wing">
            
            <!-- Terminal Header -->
            <div class="terminal-header-strip mono">
              <div class="terminal-badge">
                <span class="solari-status-dot"></span>
                <span>INTERNATIONAL DEPARTURE TERMINAL // SOLARI MK-IV</span>
              </div>
              <span class="terminal-clock mono" id="terminal-live-time">UTC+05:30 · ALL GATES REPORTING</span>
            </div>

            <!-- Mechanical Solari Split-Flap Departure Sign -->
            <div class="solari-split-flap-board" aria-label="International Tour Departure Board">
              
              <div class="solari-columns-header mono" aria-hidden="true">
                <span class="col-flight">ROUTE / FLT</span>
                <span class="col-destination">DESTINATION & VENUE</span>
                <span class="col-status">GATE STATUS</span>
                <span class="col-remarks">DOMESTIC REMARKS / LORE</span>
              </div>

              <div class="solari-flaps-track" id="solari-flaps-track">
                
                <!-- Flap Row 1: London -->
                <div class="solari-row mono" data-region="uk-europe">
                  <div class="solari-cell cell-route">
                    <span class="flap-tile">D</span><span class="flap-tile">E</span><span class="flap-tile">L</span>
                    <span class="flap-arrow">➔</span>
                    <span class="flap-tile highlight">L</span><span class="flap-tile highlight">H</span><span class="flap-tile highlight">R</span>
                  </div>
                  <div class="solari-cell cell-dest">
                    <span class="dest-city">LONDON</span>
                    <span class="dest-venue">SOUTHBANK CENTRE</span>
                  </div>
                  <div class="solari-cell cell-status">
                    <span class="solari-gate-tag status-fast">BOARDING // FAST</span>
                  </div>
                  <div class="solari-cell cell-remarks">
                    <span class="remarks-text">WIFE PACKED 4 BAGS · 2-DAY TRIP</span>
                  </div>
                </div>

                <!-- Flap Row 2: Mumbai -->
                <div class="solari-row mono" data-region="india">
                  <div class="solari-cell cell-route">
                    <span class="flap-tile">D</span><span class="flap-tile">E</span><span class="flap-tile">L</span>
                    <span class="flap-arrow">➔</span>
                    <span class="flap-tile highlight">B</span><span class="flap-tile highlight">O</span><span class="flap-tile highlight">M</span>
                  </div>
                  <div class="solari-cell cell-dest">
                    <span class="dest-city">MUMBAI</span>
                    <span class="dest-venue">NCPA TATA THEATRE</span>
                  </div>
                  <div class="solari-cell cell-status">
                    <span class="solari-gate-tag status-sold">SOLD OUT // FULL</span>
                  </div>
                  <div class="solari-cell cell-remarks">
                    <span class="remarks-text">15 YRS MARRIED · ZERO HOPE</span>
                  </div>
                </div>

                <!-- Flap Row 3: Sydney -->
                <div class="solari-row mono" data-region="australia">
                  <div class="solari-cell cell-route">
                    <span class="flap-tile">D</span><span class="flap-tile">E</span><span class="flap-tile">L</span>
                    <span class="flap-arrow">➔</span>
                    <span class="flap-tile highlight">S</span><span class="flap-tile highlight">Y</span><span class="flap-tile highlight">D</span>
                  </div>
                  <div class="solari-cell cell-dest">
                    <span class="dest-city">SYDNEY</span>
                    <span class="dest-venue">SYDNEY OPERA HOUSE</span>
                  </div>
                  <div class="solari-cell cell-status">
                    <span class="solari-gate-tag status-fast">SELLING FAST</span>
                  </div>
                  <div class="solari-cell cell-remarks">
                    <span class="remarks-text">MIDDLE SEAT GENERAL RELATIVITY</span>
                  </div>
                </div>

                <!-- Flap Row 4: Dubai -->
                <div class="solari-row mono" data-region="middle-east-asia">
                  <div class="solari-cell cell-route">
                    <span class="flap-tile">D</span><span class="flap-tile">E</span><span class="flap-tile">L</span>
                    <span class="flap-arrow">➔</span>
                    <span class="flap-tile highlight">D</span><span class="flap-tile highlight">X</span><span class="flap-tile highlight">B</span>
                  </div>
                  <div class="solari-cell cell-dest">
                    <span class="dest-city">DUBAI</span>
                    <span class="dest-venue">DUBAI OPERA HOUSE</span>
                  </div>
                  <div class="solari-cell cell-status">
                    <span class="solari-gate-tag status-final">FINAL CALL</span>
                  </div>
                  <div class="solari-cell cell-remarks">
                    <span class="remarks-text">GOLD SOUK NEGOTIATION PROTOCOL</span>
                  </div>
                </div>

              </div>

            </div>

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

            <!-- Flagship Perforated Boarding Passes (2x2 Grid) -->
            <div class="terminal-boarding-deck">
              <div class="deck-title-bar mono">
                <span>FLAGSHIP ARENA BOARDING PASSES // HIGH-DEMAND HEADLINERS</span>
                <span class="deck-count mono" id="tour-search-count">SHOWING 32 OF 32 DATES</span>
              </div>

              <div class="featured-cities-grid" id="featured-cities-grid">
                
                <!-- London Boarding Pass -->
                <article class="featured-tour-card" data-region="uk-europe">
                  <span class="stub-notch notch-top" aria-hidden="true"></span>
                  <span class="stub-notch notch-bottom" aria-hidden="true"></span>
                  <div class="tour-card-body">
                    <div class="tour-card-top">
                      <span class="tour-card-flag mono">🇬🇧 UNITED KINGDOM</span>
                      <span class="tour-stub-code mono">FLT #AT-LDN-01</span>
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
                        <span>BOOK BOARDING PASS</span>
                        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div class="ticket-stub-tearoff mono" aria-hidden="true">
                    <div class="stub-perforated-border"></div>
                    <div class="stub-barcode-column">
                      <span class="stub-admit-tag">ADMIT 01</span>
                      <span class="stub-vert-code">||||||||||||||</span>
                      <span class="stub-serial">LDN-2026-41</span>
                    </div>
                  </div>
                </article>

                <!-- Mumbai Boarding Pass -->
                <article class="featured-tour-card" data-region="india">
                  <span class="stub-notch notch-top" aria-hidden="true"></span>
                  <span class="stub-notch notch-bottom" aria-hidden="true"></span>
                  <div class="tour-card-body">
                    <div class="tour-card-top">
                      <span class="tour-card-flag mono">🇮🇳 INDIA</span>
                      <span class="tour-stub-code mono">FLT #AT-BOM-02</span>
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
                        <span>BOOK BOARDING PASS</span>
                        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div class="ticket-stub-tearoff mono" aria-hidden="true">
                    <div class="stub-perforated-border"></div>
                    <div class="stub-barcode-column">
                      <span class="stub-admit-tag">ADMIT 01</span>
                      <span class="stub-vert-code">||||||||||||||</span>
                      <span class="stub-serial">BOM-2026-41</span>
                    </div>
                  </div>
                </article>

                <!-- Sydney Boarding Pass -->
                <article class="featured-tour-card" data-region="australia">
                  <span class="stub-notch notch-top" aria-hidden="true"></span>
                  <span class="stub-notch notch-bottom" aria-hidden="true"></span>
                  <div class="tour-card-body">
                    <div class="tour-card-top">
                      <span class="tour-card-flag mono">🇦🇺 AUSTRALIA</span>
                      <span class="tour-stub-code mono">FLT #AT-SYD-03</span>
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
                        <span>BOOK BOARDING PASS</span>
                        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div class="ticket-stub-tearoff mono" aria-hidden="true">
                    <div class="stub-perforated-border"></div>
                    <div class="stub-barcode-column">
                      <span class="stub-admit-tag">ADMIT 01</span>
                      <span class="stub-vert-code">||||||||||||||</span>
                      <span class="stub-serial">SYD-2026-41</span>
                    </div>
                  </div>
                </article>

                <!-- Doha Boarding Pass -->
                <article class="featured-tour-card" data-region="middle-east-asia">
                  <span class="stub-notch notch-top" aria-hidden="true"></span>
                  <span class="stub-notch notch-bottom" aria-hidden="true"></span>
                  <div class="tour-card-body">
                    <div class="tour-card-top">
                      <span class="tour-card-flag mono">🇶🇦 QATAR</span>
                      <span class="tour-stub-code mono">FLT #AT-DOH-04</span>
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
                        <span>BOOK BOARDING PASS</span>
                        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div class="ticket-stub-tearoff mono" aria-hidden="true">
                    <div class="stub-perforated-border"></div>
                    <div class="stub-barcode-column">
                      <span class="stub-admit-tag">ADMIT 01</span>
                      <span class="stub-vert-code">||||||||||||||</span>
                      <span class="stub-serial">DOH-2026-41</span>
                    </div>
                  </div>
                </article>

              </div>
            </div>

            <!-- Full 32-City Itinerary Manifest (Expandable Drawer) -->
            <div class="tour-schedule-board-container">
              <div class="schedule-board-header">
                <div class="board-heading-block">
                  <h4 class="board-title display">WORLD TOUR ITINERARY MANIFEST</h4>
                  <p class="board-sub mono">32 CITIES · NOVEMBER 2026 THROUGH JULY 2027</p>
                </div>
                <div class="board-view-status">
                  <span class="status-indicator-dot"></span>
                  <span class="mono" id="board-schedule-status">OFFICIAL TICKETING INGEST ACTIVE</span>
                </div>
              </div>

              <div class="tour-schedule-grid" id="schedule-cards-grid">
                ${allRowsHtml}
              </div>

              <!-- Expander Button -->
              <div class="tour-expander-wrap" id="tour-expander-wrap">
                <button class="btn btn-secondary btn-lg tour-expand-btn" id="toggle-full-schedule-btn" aria-expanded="false" aria-controls="schedule-cards-grid">
                  <span id="expand-btn-text">EXPLORE ALL 32 GLOBAL TOUR DATES &darr;</span>
                </button>
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
            </div>

          </div>


          <!-- RIGHT WING (40%): The Production Hotline & Teleprinter Dispatch Desk -->
          <div class="hotline-dispatch-wing" id="booking-hotline-wing">

            <!-- Direction 1: The Industrial Executive Dispatch Console -->
            <div class="console-chassis" id="console-chassis-pod">
              
              <!-- Console Top Bezel / Header Strip -->
              <div class="console-bezel-top mono">
                <div class="bezel-left">
                  <span class="bezel-screw screw-tl" aria-hidden="true"></span>
                  <span class="hotline-badge-red">HOTLINE #01</span>
                  <span class="console-title">CORPORATE & PRIVATE DISPATCH</span>
                </div>
                <div class="bezel-right">
                  <span class="status-pulse-dot" aria-hidden="true"></span>
                  <span class="console-status-live">CARRIER ACTIVE // 24/7 PRIORITY</span>
                  <span class="bezel-screw screw-tr" aria-hidden="true"></span>
                </div>
              </div>

              <!-- Console Body Area -->
              <div class="console-main-bay">

                <!-- The Signature Handwritten Sticky Note with Cellophane Tape -->
                <div class="console-sticky-note" aria-hidden="true">
                  <div class="tape-strip" aria-hidden="true"></div>
                  <span class="postit-pin" aria-hidden="true">📌</span>
                  <p class="postit-text">
                    “If corporate HR calls, swear it's 100% clean comedy. Do NOT give this number to my in-laws! — Amit”
                  </p>
                </div>

                <!-- Milled Paper Slot & Teletype Dispatch Paper Strip -->
                <div class="console-teletype-unit">
                  <!-- Milled CNC Horizontal Paper Exit Slot -->
                  <div class="milled-paper-slot" aria-hidden="true">
                    <span class="slot-cavity"></span>
                    <span class="slot-cutter-bar"></span>
                  </div>

                  <!-- Continuous Printed Teletype Dispatch Document -->
                  <div class="teletype-sheet mono" id="teletype-dispatch-sheet" data-stampable="true" aria-label="Official Corporate Keynote Dispatch">
                    <span class="stamp-hint mono" aria-hidden="true">[ ✎ CLICK TO STAMP ]</span>
                    <div class="sheet-zigzag-edge" aria-hidden="true"></div>
                    <div class="sheet-sprocket-feed feed-left" aria-hidden="true"></div>
                    <div class="sheet-sprocket-feed feed-right" aria-hidden="true"></div>

                    <div class="teletype-content">
                      <div class="teletype-banner">
                        <span>[ INCOMING DISPATCH // CORPORATE EXECUTIVE BRIEF ]</span>
                      </div>
                      <div class="teletype-grid">
                        <div class="teletype-line">
                          <span class="teletype-key">&gt;&gt; SUBJECT:</span>
                          <span class="teletype-val">AMIT TANDON // THE MARRIED GUY</span>
                        </div>
                        <div class="teletype-line highlight">
                          <span class="teletype-key">&gt;&gt; CREDENTIALS:</span>
                          <span class="teletype-val">B.TECH (MECH) + IIT DELHI MBA</span>
                        </div>
                        <div class="teletype-line">
                          <span class="teletype-key">&gt;&gt; BACKGROUND:</span>
                          <span class="teletype-val">15 YRS MANAGING DIRECTOR & VP</span>
                        </div>
                        <div class="teletype-line">
                          <span class="teletype-key">&gt;&gt; AUDIENCE:</span>
                          <span class="teletype-val">CXO RETREATS, ANNUAL SUMMITS & CONFERENCES</span>
                        </div>
                        <div class="teletype-line highlight">
                          <span class="teletype-key">&gt;&gt; SAFETY AUDIT:</span>
                          <span class="teletype-val">100% CLEAN FAMILY COMEDY · ZERO HR LIABILITIES</span>
                        </div>
                        <div class="teletype-line">
                          <span class="teletype-key">&gt;&gt; TRACK RECORD:</span>
                          <span class="teletype-val">TRUSTED BY FORTUNE 500 MULTINATIONALS</span>
                        </div>
                        <div class="teletype-line">
                          <span class="teletype-key">&gt;&gt; MGMT DESK:</span>
                          <span class="teletype-val">+91 9004040003 // READY FOR BOOKING</span>
                        </div>
                        <div class="teletype-line end-stop">
                          <span class="teletype-key">&gt;&gt; DISPATCH CLEARED // STOP</span>
                        </div>
                      </div>

                      <!-- Stamped Verification Monogram -->
                      <div class="teletype-footer-stamps" aria-hidden="true">
                        <div class="rubber-stamp stamp-bookable mono">
                          <span>AUDITED</span>
                          <span>ZERO HR RISK</span>
                          <span class="stamp-stars">★★★</span>
                        </div>
                        <div class="teletype-id-tag">
                          <span>REC-REF: AT-B2B-2026-CONFIDENTIAL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Console Bottom Bezel: The Tactile Dispatch Actuator -->
              <div class="console-bezel-bottom">
                <a 
                  href="${site.contact.whatsapp}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-console-actuator mono"
                  id="btn-console-dispatch"
                  title="Initiate priority dispatch on WhatsApp"
                >
                  <div class="actuator-left">
                    <span class="actuator-indicator" aria-hidden="true">
                      <span class="indicator-glow"></span>
                    </span>
                    <div class="actuator-labels">
                      <span class="actuator-main">INITIATE DIRECT DISPATCH</span>
                      <span class="actuator-sub">TANDON MGMT // WHATSAPP PRIORITY</span>
                    </div>
                  </div>
                  <div class="actuator-arrow" aria-hidden="true">
                    <span>CONNECT</span>
                    <span class="arrow-glyph">&nearr;</span>
                  </div>
                </a>

                <div class="console-direct-line mono">
                  <span>DIRECT DESK: <strong>+91 90040 40003</strong></span>
                  <span class="line-divider">·</span>
                  <span>MGMT: <strong>HELLO@TANDONAMIT.COM</strong></span>
                </div>

                <div class="bezel-corner-screws" aria-hidden="true">
                  <span class="bezel-screw screw-bl"></span>
                  <span class="bezel-screw screw-br"></span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <!-- Desk Metal Base Lip & Perforated Marquee -->
      <div class="desk-metal-base" aria-hidden="true">
        <div class="film-ticker-track mono">
          <span>● 32 GLOBAL CITIES CONFIRMED</span>
          <span class="ticker-star">★</span>
          <span>100% CLEAN FAMILY COMEDY</span>
          <span class="ticker-star">★</span>
          <span>DIRECT MANAGEMENT HOTLINE: +91 9004040003</span>
          <span class="ticker-star">★</span>
          <span>LONDON · MUMBAI · SYDNEY · DUBAI · DOHA · SINGAPORE</span>
          <span class="ticker-star">★</span>
          <span>ZERO RESELLER MARKUPS</span>
          <span class="ticker-star">★</span>
          <span>● 32 GLOBAL CITIES CONFIRMED</span>
          <span class="ticker-star">★</span>
          <span>100% CLEAN FAMILY COMEDY</span>
        </div>
      </div>

    </div>

  </div>

</section>
`;
}
