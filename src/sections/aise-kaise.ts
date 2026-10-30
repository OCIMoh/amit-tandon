import type { ShowEvent, SiteContent } from "../lib/types";
import { svgs } from "../content/svgs";
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
      return `
      <div class="schedule-card" data-region="${region}">
        <div class="sched-date">
          <span class="sched-date-main">${formatShowDate(e.date)}</span>
          <span class="sched-time">${e.time}</span>
        </div>
        <div class="sched-city">
          <span class="sched-city-title">${e.city}</span>
          ${e.venueHint ? `<span class="sched-venue">${e.venueHint}</span>` : ""}
        </div>
        <div class="sched-action">
          <a class="btn btn-sm btn-yellow sched-btn" href="${e.href}" target="_blank" rel="noopener noreferrer">
            <span>GET TICKETS</span>
          </a>
        </div>
      </div>`;
    })
    .join("");

  return `
<section class="tour-tickets-section" id="tour" aria-label="Aise Kaise World Tour Dates">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="tour-section-head" data-reveal>
      <div class="tour-head-left">
        <h2 class="display tour-head-title">
          <span>NEXT STOP: </span>
          <span class="highlight-yellow">YOUR CITY.</span>
        </h2>
        <div class="tour-subhead-pill">
          <span class="tour-globe-icon">🌐</span>
          <span>WORLD TOUR 2026</span>
        </div>
      </div>
      <div class="tour-head-right">
        <span class="tour-scribble">New people.<br/>Same jokes.</span>
      </div>
    </div>

    <!-- Region Filter Tabs -->
    <div class="ticket-filter-tabs" data-reveal>
      <button class="filter-tab is-active" data-region-filter="all">ALL DATES (33)</button>
      <button class="filter-tab" data-region-filter="uk-europe">UK & EUROPE</button>
      <button class="filter-tab" data-region-filter="india">INDIA</button>
      <button class="filter-tab" data-region-filter="middle-east">DUBAI & SE ASIA</button>
      <button class="filter-tab" data-region-filter="australia">AUSTRALIA</button>
    </div>

    <!-- The 4 Featured Colored Concert Tickets (2x2 Grid) -->
    <div class="featured-tickets-grid">
      
      <!-- Ticket 1: London (Electric Yellow) -->
      <div class="concert-ticket ticket-yellow tilt-left-sm" data-region="uk-europe">
        <div class="ticket-body">
          <div class="ticket-landmark">
            ${svgs.bigBen}
          </div>
          <div class="ticket-info">
            <h3 class="ticket-city">LONDON</h3>
            <div class="ticket-meta-row">
              <span class="meta-live">LIVE ON STAGE</span>
              <span class="status-pill status-red">SELLING FAST</span>
            </div>
            <a class="btn btn-sm btn-dark ticket-cta-btn" href="${londonEv.href}" target="_blank" rel="noopener noreferrer">
              <span>GRAB TICKETS &rarr;</span>
            </a>
          </div>
        </div>

        <div class="ticket-perforated-stub">
          <div class="notch notch-top"></div>
          <div class="stub-content">
            ${svgs.barcode}
            <span class="stub-code">LON-2026</span>
            <span class="stub-plane">✈</span>
          </div>
          <div class="notch notch-bottom"></div>
        </div>
      </div>

      <!-- Ticket 2: Mumbai (Concrete Gray) -->
      <div class="concert-ticket ticket-gray tilt-right-sm" data-region="india">
        <div class="ticket-body">
          <div class="ticket-landmark">
            ${svgs.gatewayOfIndia}
          </div>
          <div class="ticket-info">
            <h3 class="ticket-city">MUMBAI</h3>
            <div class="ticket-meta-row">
              <span class="meta-live">LIVE ON STAGE</span>
              <span class="status-pill status-red">LIMITED SEATS</span>
            </div>
            <a class="btn btn-sm btn-dark ticket-cta-btn" href="${mumbaiEv.href}" target="_blank" rel="noopener noreferrer">
              <span>GRAB TICKETS &rarr;</span>
            </a>
          </div>
        </div>

        <div class="ticket-perforated-stub">
          <div class="notch notch-top"></div>
          <div class="stub-content">
            ${svgs.barcode}
            <span class="stub-code">BOM-2026</span>
            <span class="stub-plane">✈</span>
          </div>
          <div class="notch notch-bottom"></div>
        </div>
      </div>

      <!-- Ticket 3: Dubai (Neon Cyan) -->
      <div class="concert-ticket ticket-cyan tilt-right-sm" data-region="middle-east">
        <div class="ticket-body">
          <div class="ticket-landmark">
            ${svgs.burjAlArab}
          </div>
          <div class="ticket-info">
            <h3 class="ticket-city">DUBAI</h3>
            <div class="ticket-meta-row">
              <span class="meta-live">LIVE ON STAGE</span>
              <span class="status-pill status-red">LAST FEW TICKETS</span>
            </div>
            <a class="btn btn-sm btn-dark ticket-cta-btn" href="${dubaiEv.href}" target="_blank" rel="noopener noreferrer">
              <span>GRAB TICKETS &rarr;</span>
            </a>
          </div>
        </div>

        <div class="ticket-perforated-stub">
          <div class="notch notch-top"></div>
          <div class="stub-content">
            ${svgs.barcode}
            <span class="stub-code">DXB-2026</span>
            <span class="stub-plane">✈</span>
          </div>
          <div class="notch notch-bottom"></div>
        </div>
      </div>

      <!-- Ticket 4: Sydney (Coral / Vermilion) -->
      <div class="concert-ticket ticket-red tilt-left-sm" data-region="australia">
        <div class="ticket-body">
          <div class="ticket-landmark">
            ${svgs.sydneyOpera}
          </div>
          <div class="ticket-info">
            <h3 class="ticket-city">SYDNEY</h3>
            <div class="ticket-meta-row">
              <span class="meta-live">LIVE ON STAGE</span>
              <span class="status-pill status-yellow">SELLING FAST</span>
            </div>
            <a class="btn btn-sm btn-dark ticket-cta-btn" href="${sydneyEv.href}" target="_blank" rel="noopener noreferrer">
              <span>GRAB TICKETS &rarr;</span>
            </a>
          </div>
        </div>

        <div class="ticket-perforated-stub">
          <div class="notch notch-top"></div>
          <div class="stub-content">
            ${svgs.barcode}
            <span class="stub-code">SYD-2026</span>
            <span class="stub-plane">✈</span>
          </div>
          <div class="notch notch-bottom"></div>
        </div>
      </div>

    </div>

    <!-- Expander for Full 33 Cities Schedule -->
    <div class="tour-expander-wrap" data-reveal>
      <button class="btn btn-yellow btn-lg tour-expand-btn" id="toggle-full-schedule-btn">
        <span id="expand-btn-text">VIEW ALL 33 GLOBAL TOUR DATES &darr;</span>
      </button>

      <div class="full-schedule-drawer" id="full-schedule-drawer" style="display: none;">
        <div class="schedule-grid">
          ${allRowsHtml}
        </div>
      </div>
    </div>

  </div>
</section>`;
}
