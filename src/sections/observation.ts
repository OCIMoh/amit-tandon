import type { SiteContent } from "../lib/types";

export interface HeroRoutineItem {
  id: number;
  tag: string;
  pillTitle: string;
  emoji: string;
  caption: string;
  shares: string;
  videoId: string;
}

export const HERO_ROUTINES: HeroRoutineItem[] = [
  {
    id: 1,
    tag: "MARRIAGE CLIMATE CONTROL",
    pillTitle: "AC Temperature",
    emoji: "❄️",
    caption: "AC Temperature Diplomacy: 18°C is Arctic tundra, 24°C is Sahara desert, 22°C is a pending court case.",
    shares: "88K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 2,
    tag: "THE MARRIED GUY RULE",
    pillTitle: "Marriage Ceasefire",
    emoji: "💍",
    caption: "Apologizing to your wife is not an admission of guilt; it is a tactical military ceasefire.",
    shares: "110K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 3,
    tag: "WHATSAPP FAMILY DIPLOMACY",
    pillTitle: "WhatsApp Groups",
    emoji: "📱",
    caption: "WhatsApp Family Groups: 42 members, 120 Good Morning forwards by 7 AM, zero replies to genuine questions.",
    shares: "45K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 4,
    tag: "INDIAN FLIGHT ANNOUNCEMENTS",
    pillTitle: "Flight Seatbelts",
    emoji: "✈️",
    caption: "Flight Announcements: Indian uncle unbuckling his seatbelt the microsecond the aircraft tire touches the runway.",
    shares: "77K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 5,
    tag: "NORTH INDIAN LOGIC",
    pillTitle: "Butter Chicken",
    emoji: "🍛",
    caption: "Punjabis in Agra: If the monument doesn't have butter chicken within 200 meters, why did Shah Jahan even build it?",
    shares: "62K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 6,
    tag: "PARENTING GEN-Z",
    pillTitle: "Parenting Gen-Z",
    emoji: "🎒",
    caption: "Parenting Gen-Z: You pay ₹4 lakh school fees so they can reply 'bruh' to your earnest life advice.",
    shares: "71K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 7,
    tag: "THE 5-MINUTE ELASTICITY",
    pillTitle: "5-Min Myth",
    emoji: "⏱️",
    caption: "The 5-Minute Myth: 'Bas 5 minute mein tayar ho rahi hoon' violates Einstein's theory of general relativity.",
    shares: "94K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 8,
    tag: "DELHI DIET RESOLUTIONS",
    pillTitle: "Delhi Diet",
    emoji: "🍕",
    caption: "Diet in Delhi: Starting a strict diet on Monday, ordering 2 plates of Chole Bhature on Tuesday morning.",
    shares: "53K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 9,
    tag: "MALL EXPEDITIONS",
    pillTitle: "Mall Shopping",
    emoji: "🛍️",
    caption: "Shopping with Wife: Walking 14 kilometers inside a mall to buy a hair clip that was available at the entrance.",
    shares: "83K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 10,
    tag: "THE SHAGUN LEDGER",
    pillTitle: "Wedding Shagun",
    emoji: "✉️",
    caption: "Wedding Envelopes: Tracking exactly how much Sharma ji gave in 2011 so we can return ₹501 in 2026.",
    shares: "65K Shares",
    videoId: "C7b0TAg0xMU",
  },
];

export function renderObservation(_site: SiteContent): string {
  const initialRoutine = HERO_ROUTINES[0];
  const initialWhatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Amit Tandon Comedy Bit: "${initialRoutine.caption}" (amittandon.in)`
  )}`;

  return `
<section class="theatrical-hero-section" id="top" aria-label="Amit Tandon - World Tour 2026">
  
  <!-- 1. Theatrical Arena Backdrop & Dynamic Volumetric Lighting -->
  <div class="theatrical-backdrop" aria-hidden="true">
    <div class="theatrical-bg-image"></div>
    <div class="theatrical-vignette"></div>
    <div class="theatrical-spotlight-beam" id="theatrical-spotlight"></div>
    <div class="theatrical-ambient-glow glow-red"></div>
    <div class="theatrical-ambient-glow glow-stage"></div>
    <div class="theatrical-floor-haze"></div>
  </div>

  <div class="theatrical-hero-container">

    <!-- 2. Tour & Netflix Eyebrow Lockup -->
    <div class="theatrical-eyebrow-row">
      <div class="theatrical-tour-badge">
        <span class="live-pulse-dot"></span>
        <span class="mono badge-text">LIVE WORLD TOUR 2026</span>
        <span class="badge-separator">&bull;</span>
        <span class="mono highlight-red">14 GLOBAL CITIES</span>
        <span class="badge-selling-fast">SELLING FAST</span>
      </div>
      <div class="theatrical-netflix-pill">
        <span class="netflix-n">N</span>
        <span class="mono">ORIGINAL SPECIAL STREAMING</span>
      </div>
    </div>

    <!-- 3. Monumental Headline Lockup -->
    <div class="theatrical-title-lockup">
      <h1 class="theatrical-hero-title">
        <span class="title-word title-first">AMIT</span>
        <span class="title-word title-last">TANDON</span>
      </h1>
      <p class="theatrical-hero-tagline mono">
        50 YEARS OF COMMON SENSE &bull; <span class="highlight-red">ZERO FILTER</span>
      </p>
    </div>

    <!-- 4. Interactive "Signature Routines & Gyan Bits" Console -->
    <div class="theatrical-routine-console" id="theatrical-routine-console">
      
      <!-- Category Quick Switcher Pills -->
      <nav class="routine-category-nav" aria-label="Select Comedy Routine">
        ${HERO_ROUTINES.slice(0, 5)
          .map(
            (r, idx) => `
          <button 
            type="button" 
            class="routine-pill ${idx === 0 ? "is-active" : ""}" 
            data-routine-id="${r.id}"
            aria-label="View routine: ${r.pillTitle}"
          >
            <span class="pill-emoji">${r.emoji}</span>
            <span class="pill-title">${r.pillTitle}</span>
          </button>
        `
          )
          .join("")}
        <button 
          type="button" 
          class="routine-pill-shuffle" 
          id="btn-hero-shuffle" 
          aria-label="Shuffle another comedy bit"
          title="Shuffle next joke"
        >
          <span class="shuffle-icon">🎲</span>
          <span class="mono">SHUFFLE</span>
        </button>
      </nav>

      <!-- Active Routine Stageboard Card -->
      <div class="routine-stageboard-card">
        <div class="stageboard-header">
          <div class="stageboard-tag-wrap">
            <span class="stageboard-live-dot" aria-hidden="true"></span>
            <span class="stageboard-tag mono" id="hero-routine-tag">${initialRoutine.tag}</span>
            <span class="stageboard-badge mono">NETFLIX SPECIAL BIT</span>
          </div>
          <div class="stageboard-meta mono" id="hero-routine-meta">
            <span id="hero-routine-num">01</span>/10 &bull; <span id="hero-routine-shares">${initialRoutine.shares}</span>
          </div>
        </div>

        <blockquote class="stageboard-quote" id="hero-routine-quote">
          “${initialRoutine.caption}”
        </blockquote>

        <div class="stageboard-action-bar">
          <div class="action-left">
            <button 
              type="button" 
              class="btn-routine-clip" 
              id="btn-hero-clip" 
              data-video-id="${initialRoutine.videoId}"
              aria-label="Watch video clip of this bit"
            >
              <span class="play-pip" aria-hidden="true">▶</span>
              <span>WATCH SPECIAL CLIP</span>
            </button>
            <a 
              href="${initialWhatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-routine-share mono" 
              id="hero-routine-share"
              aria-label="Share this bit to WhatsApp"
            >
              <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
              </svg>
              <span>FORWARD TO WHATSAPP</span>
            </a>
          </div>

          <div class="action-right">
            <span class="verified-comedy-badge mono">
              <span class="badge-star" aria-hidden="true">★</span> 98% MATCH ON NETFLIX
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- 5. Primary Theatrical Conversion Actions -->
    <div class="theatrical-cta-cluster">
      <a href="#live-shows" class="btn-theatrical-primary" id="btn-hero-tickets">
        <span class="btn-flare" aria-hidden="true"></span>
        <span class="btn-label">FIND YOUR CITY &bull; GET TICKETS</span>
        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
      </a>

      <button type="button" class="btn-theatrical-secondary" id="btn-hero-trailer" data-video-id="C7b0TAg0xMU">
        <span class="btn-play-icon" aria-hidden="true">▶</span>
        <span class="btn-label">WATCH NETFLIX TRAILER</span>
      </button>
    </div>

    <!-- 6. Next Live Departure Ticker -->
    <div class="theatrical-tour-ticker">
      <div class="tour-ticker-header mono">
        <span class="live-dot" aria-hidden="true"></span>
        <span>NEXT DEPARTURES:</span>
      </div>
      <div class="tour-ticker-items">
        <a href="#live-shows" class="ticker-city">
          <span class="city-name">LONDON</span>
          <span class="venue-name">Eventim Apollo</span>
          <span class="city-status status-fast">SELLING FAST</span>
        </a>
        <span class="ticker-sep" aria-hidden="true">&bull;</span>
        <a href="#live-shows" class="ticker-city">
          <span class="city-name">DUBAI</span>
          <span class="venue-name">Dubai Opera</span>
          <span class="city-status status-few">FEW SEATS</span>
        </a>
        <span class="ticker-sep" aria-hidden="true">&bull;</span>
        <a href="#live-shows" class="ticker-city">
          <span class="city-name">SYDNEY</span>
          <span class="venue-name">Opera House</span>
          <span class="city-status status-sold">SOLD OUT</span>
        </a>
      </div>
    </div>

    <!-- 7. Bottom Arena Credibility Bar -->
    <div class="theatrical-stat-strip mono">
      <div class="stat-pill">
        <span class="stat-num">1.4B+</span>
        <span class="stat-txt">YOUTUBE VIEWS</span>
      </div>
      <span class="stat-dot" aria-hidden="true">&bull;</span>
      <div class="stat-pill">
        <span class="stat-num">1,400+</span>
        <span class="stat-txt">SHOWS WORLDWIDE</span>
      </div>
      <span class="stat-dot" aria-hidden="true">&bull;</span>
      <div class="stat-pill">
        <span class="stat-num">28</span>
        <span class="stat-txt">COUNTRIES</span>
      </div>
      <span class="stat-dot" aria-hidden="true">&bull;</span>
      <div class="stat-pill">
        <span class="stat-num">NETFLIX</span>
        <span class="stat-txt">FAMILY TANDONCIES</span>
      </div>
      <span class="stat-dot" aria-hidden="true">&bull;</span>
      <div class="stat-pill">
        <span class="stat-num">IIT DELHI</span>
        <span class="stat-txt">MBA ALUM</span>
      </div>
    </div>

  </div>

</section>
`;
}
