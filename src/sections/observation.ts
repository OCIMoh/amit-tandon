import type { SiteContent } from "../lib/types";

export interface GyanCardItem {
  id: number;
  tag: string;
  badge: string;
  title: string;
  caption: string;
  image: string;
  shares: string;
  videoId: string;
}

export const HERO_GYAN_CARDS: GyanCardItem[] = [
  {
    id: 1,
    tag: "WHATSAPP FAMILY DIPLOMACY",
    badge: "VIRAL BITE #01",
    title: "Family WhatsApp Groups",
    caption: "42 members, 120 Good Morning forwards by 7 AM, zero replies to genuine questions.",
    image: "/gyan/gyan-1.jpg",
    shares: "45K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 2,
    tag: "NORTH INDIAN LOGIC",
    badge: "VIRAL BITE #02",
    title: "Butter Chicken in Agra",
    caption: "If the monument doesn't have butter chicken within 200 meters, why did Shah Jahan even build it?",
    image: "/gyan/gyan-2.jpg",
    shares: "62K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 3,
    tag: "MARRIAGE CLIMATE CONTROL",
    badge: "VIRAL BITE #03",
    title: "AC Temperature Diplomacy",
    caption: "18°C is Arctic tundra, 24°C is Sahara desert, 22°C is a pending court case.",
    image: "/gyan/gyan-3.jpg",
    shares: "88K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 4,
    tag: "PARENTING GEN-Z",
    badge: "VIRAL BITE #04",
    title: "The ₹4 Lakh 'Bruh'",
    caption: "You pay ₹4 lakh school fees so they can reply 'bruh' to your earnest life advice.",
    image: "/gyan/gyan-4.jpg",
    shares: "71K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 5,
    tag: "THE 5-MINUTE ELASTICITY",
    badge: "VIRAL BITE #05",
    title: "The 5-Minute Myth",
    caption: "'Bas 5 minute mein tayar ho rahi hoon' violates Einstein's theory of general relativity.",
    image: "/gyan/gyan-5.jpg",
    shares: "94K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 6,
    tag: "DELHI DIET RESOLUTIONS",
    badge: "VIRAL BITE #06",
    title: "Chole Bhature Tuesday",
    caption: "Starting a strict diet on Monday, ordering 2 plates of Chole Bhature on Tuesday morning.",
    image: "/gyan/gyan-6.jpg",
    shares: "53K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 7,
    tag: "MALL EXPEDITIONS",
    badge: "VIRAL BITE #07",
    title: "14-Kilometer Hair Clip",
    caption: "Walking 14 kilometers inside a mall to buy a hair clip that was available right at the entrance.",
    image: "/gyan/gyan-7.jpg",
    shares: "83K Shares",
    videoId: "2WkO1nJ3u1Y",
  },
  {
    id: 8,
    tag: "MARRIAGE CEASEFIRE",
    badge: "VIRAL BITE #08",
    title: "The Married Guy Rule",
    caption: "Apologizing to your wife is not an admission of guilt; it is a tactical military ceasefire.",
    image: "/gyan/gyan-8.jpg",
    shares: "110K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 9,
    tag: "INDIAN FLIGHT ANNOUNCEMENTS",
    badge: "VIRAL BITE #09",
    title: "Touchdown Seatbelt Click",
    caption: "Indian uncle unbuckling his seatbelt the exact microsecond the aircraft tire touches the runway.",
    image: "/gyan/gyan-9.jpg",
    shares: "77K Shares",
    videoId: "C7b0TAg0xMU",
  },
  {
    id: 10,
    tag: "THE SHAGUN LEDGER",
    badge: "VIRAL BITE #10",
    title: "The ₹501 Wedding Audit",
    caption: "Tracking exactly how much Sharma ji gave in 2011 so we can return ₹501 in 2026.",
    image: "/gyan/gyan-10.jpg",
    shares: "65K Shares",
    videoId: "C7b0TAg0xMU",
  },
];

export function renderObservation(_site: SiteContent): string {
  const initialCard = HERO_GYAN_CARDS[2]; // AC Temperature
  const initialWhatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Amit Tandon Gyan Bite: "${initialCard.caption}" (amittandon.in)`
  )}`;

  return `
<section class="theatrical-hero-section" id="top" aria-label="Amit Tandon - World Tour 2026">
  
  <!-- 1. Theatrical Stage Atmosphere & Volumetric Lighting -->
  <div class="theatrical-backdrop" aria-hidden="true">
    <div class="theatrical-bg-image"></div>
    <div class="theatrical-vignette"></div>
    <div class="theatrical-spotlight-beam" id="theatrical-spotlight"></div>
    <div class="theatrical-ambient-glow glow-red"></div>
    <div class="theatrical-floor-haze"></div>
  </div>

  <div class="theatrical-hero-stage">
    
    <!-- 2. Asymmetric Left Column: The Headliner Authority & Ticket Engine -->
    <div class="hero-left-column">
      
      <!-- Tour & Special Badges -->
      <div class="hero-badges-row">
        <div class="hero-tour-badge">
          <span class="live-pulse-dot" aria-hidden="true"></span>
          <span class="mono badge-text">LIVE WORLD TOUR 2026</span>
          <span class="badge-separator">&bull;</span>
          <span class="mono highlight-red">14 GLOBAL CITIES</span>
          <span class="badge-status-pill">SELLING FAST</span>
        </div>
        <div class="hero-netflix-badge">
          <span class="netflix-n" aria-hidden="true">N</span>
          <span class="mono">ORIGINAL SPECIAL</span>
        </div>
      </div>

      <!-- Monumental Headline & Clear Tagline -->
      <div class="hero-title-lockup">
        <h1 class="hero-headliner-title">
          <span class="title-word">AMIT</span>
          <span class="title-word">TANDON</span>
        </h1>
        <p class="hero-tagline mono">
          50 YEARS OF COMMON SENSE &bull; <span class="highlight-red">ZERO FILTER</span>
        </p>
      </div>

      <!-- Persona Bio Hook -->
      <p class="hero-lead-text">
        "The Married Guy" of Indian stand-up comedy. Turning the hilarious, unwritten rules of middle-class marriage, parenting Gen-Z, and domestic negotiations into sold-out arena gold.
      </p>

      <!-- Primary High-Voltage Conversion CTAs -->
      <div class="hero-cta-cluster">
        <a href="#live-shows" class="btn-hero-primary" id="btn-hero-tickets">
          <span class="btn-flare" aria-hidden="true"></span>
          <span class="btn-label">GET TOUR TICKETS</span>
          <span class="btn-arrow" aria-hidden="true">&rarr;</span>
        </a>

        <button type="button" class="btn-hero-secondary" id="btn-hero-trailer" data-video-id="C7b0TAg0xMU">
          <span class="btn-play-icon" aria-hidden="true">▶</span>
          <span class="btn-label">WATCH TRAILER</span>
        </button>
      </div>

      <!-- Next Live Tour Departure Dispatch -->
      <div class="hero-departure-strip">
        <span class="dep-live-dot" aria-hidden="true"></span>
        <span class="dep-label mono">NEXT STOP:</span>
        <a href="#live-shows" class="dep-city-link">
          <strong class="dep-city">LONDON</strong>
          <span class="dep-venue">Southbank Centre &bull; Nov 14</span>
          <span class="dep-status status-fast">SELLING FAST</span>
        </a>
      </div>

    </div>

    <!-- 3. Asymmetric Right Column: Interactive Gyan Bite Stage Card -->
    <div class="hero-right-column">
      
      <div class="gyan-card-stage-container" id="gyan-card-stage">
        
        <!-- Card Glass Frame with 3D Parallax Tilt -->
        <article class="gyan-card-item" id="gyan-card-item" aria-label="Daily Comedy Gyan Bite Card">
          
          <!-- Card Header Bar -->
          <div class="gyan-card-top-bar">
            <div class="gyan-tag-wrap">
              <span class="gyan-dot" aria-hidden="true"></span>
              <span class="mono gyan-tag" id="gyan-active-tag">${initialCard.tag}</span>
            </div>
            <div class="gyan-counter mono" id="gyan-active-counter">
              <span id="gyan-num">03</span>/10
            </div>
          </div>

          <!-- Card Real Photographic Visual -->
          <div class="gyan-img-frame">
            <img 
              src="${initialCard.image}" 
              alt="${initialCard.title} - Amit Tandon Gyan Bite" 
              class="gyan-active-img" 
              id="gyan-active-img"
              width="480"
              height="480"
              loading="eager"
            />
            <div class="gyan-img-glare" aria-hidden="true"></div>
          </div>

          <!-- Card Punchline Caption & Shares -->
          <div class="gyan-caption-box">
            <p class="gyan-caption-text" id="gyan-caption-text">
              “${initialCard.caption}”
            </p>
            <div class="gyan-shares-row mono">
              <span class="gyan-shares" id="gyan-active-shares">${initialCard.shares}</span>
              <span class="gyan-match"><span class="star-icon">★</span> 98% MATCH ON NETFLIX</span>
            </div>
          </div>

          <!-- Card Action Deck Controls -->
          <div class="gyan-card-action-dock">
            <button 
              type="button" 
              class="btn-deal-gyan" 
              id="btn-deal-gyan"
              aria-label="Deal another comedy gyan bite card"
            >
              <span class="shuffle-dice" aria-hidden="true">🎲</span>
              <span class="mono">DEAL TODAY'S GYAN</span>
            </button>

            <div class="gyan-aux-actions">
              <a 
                href="${initialWhatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-gyan-whatsapp" 
                id="btn-gyan-whatsapp"
                aria-label="Share this comedy card to WhatsApp"
                title="Forward joke to WhatsApp"
              >
                <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                </svg>
                <span class="mono">WHATSAPP</span>
              </a>

              <button 
                type="button" 
                class="btn-gyan-clip" 
                id="btn-gyan-clip" 
                data-video-id="${initialCard.videoId}"
                aria-label="Watch video clip for this joke"
                title="Watch special clip"
              >
                <span class="play-pip" aria-hidden="true">▶</span>
                <span class="mono">CLIP</span>
              </button>
            </div>
          </div>

        </article>

      </div>

    </div>

  </div>

  <!-- 4. Unified Architectural Base Credibility Dock -->
  <div class="hero-unified-base-dock mono">
    <div class="base-dock-inner wrap">
      <div class="dock-item">
        <span class="dock-stat">1.4B+</span>
        <span class="dock-label">YOUTUBE VIEWS</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">1,400+</span>
        <span class="dock-label">SHOWS WORLDWIDE</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">28</span>
        <span class="dock-label">COUNTRIES</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat highlight-red">NETFLIX</span>
        <span class="dock-label">FAMILY TANDONCIES</span>
      </div>
      <span class="dock-sep" aria-hidden="true">&bull;</span>
      <div class="dock-item">
        <span class="dock-stat">IIT DELHI</span>
        <span class="dock-label">MBA ALUM</span>
      </div>
    </div>
  </div>

</section>
`;
}
