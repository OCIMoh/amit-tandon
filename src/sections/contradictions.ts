import type { MaterialItem } from "../lib/types";
import { images } from "../content/images";

export function renderContradictions(_items: MaterialItem[]): string {
  return `
<section class="watch-vault-section cinema-lightbox-section" id="watch" aria-label="The 35mm Screening Room Archive">
  
  <!-- Ambient Screening Room Atmosphere & Projector Beam -->
  <div class="screening-backdrop" aria-hidden="true">
    <div class="screening-room-darkness"></div>
    <div class="projector-light-cone"></div>
    <div class="film-grain-overlay"></div>
  </div>

  <div class="wrap lightbox-wrap">
    
    <!-- 1. The Archival Screening Room Masthead -->
    <header class="screening-masthead" data-reveal>
      <div class="screening-status-bar mono">
        <div class="status-projector-tag">
          <span class="projector-bulb-indicator" aria-hidden="true"></span>
          <span>35MM BACKSTAGE EDITING SUITE // LIGHTBOX DESK #03</span>
        </div>
        <div class="status-lens mono">LENS: ANAMORPHIC 2.39:1 · TUNGSTEN 3200K</div>
        <div class="status-archive mono">ARCHIVE ID: AT-190-REELS</div>
      </div>

      <div class="screening-title-row">
        <h2 class="screening-main-title display">
          <span class="title-white">THE COMEDY </span>
          <span class="title-red highlight-red">VAULT.</span>
        </h2>
        
        <p class="screening-lead-copy">
          The uncensored editing room cutting floor. From Amit's global Netflix Original master negative to physical international tour film reels and viral 35mm cell archives.
        </p>
      </div>

      <!-- Cinema Editing Ribbon Technical Specs -->
      <div class="screening-specs-ribbon mono" aria-label="Archive Technical Specifications">
        <span class="spec-cell">GAUGE: 35MM KODAK CELLULOID</span>
        <span class="spec-dot" aria-hidden="true">•</span>
        <span class="spec-cell">FORMAT: 2.39:1 CINEMASCOPE</span>
        <span class="spec-dot" aria-hidden="true">•</span>
        <span class="spec-cell highlight">190 COUNTRIES CLEARED</span>
        <span class="spec-dot" aria-hidden="true">•</span>
        <span class="spec-cell">RUNTIME: 120,000+ FEET OF FILM</span>
      </div>
    </header>

    <!-- 2. The Physical 35mm Editing Lightbox Desk (The Centerpiece) -->
    <div class="editing-lightbox-desk" data-reveal>
      
      <!-- Top Metal Desk Lip & Aluminum Rulers -->
      <div class="desk-metal-trim" aria-hidden="true">
        <div class="aluminum-ruler mono">
          <span>| 00 | 05 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 CM |</span>
        </div>
        <div class="desk-screws">
          <span class="screw"></span>
          <span class="screw"></span>
          <span class="screw"></span>
        </div>
      </div>

      <!-- The Main Illuminated Backlit Lightbox Panel (Diffused White Glow) -->
      <div class="lightbox-illuminated-glass">
        
        <!-- Lightbox Content Grid: Left Master Cinema Reel (60%) + Right Canister Rack (40%) -->
        <div class="lightbox-grid">
          
          <!-- LEFT: The Master Projection Frame (Active Film Reel) -->
          <div class="master-projection-pod">
            
            <!-- Celluloid Film Sprocket Strip Across the Top -->
            <div class="film-sprocket-track top-sprockets" aria-hidden="true">
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="film-edge-code mono" id="active-edge-code">EASTMAN 5219 · SAFETY FILM · REEL 01 · 190 COUNTRIES</span>
            </div>

            <!-- The Main Cinema Frame (Screening Canvas) -->
            <div class="cinema-screening-frame" id="active-screening-screen">
              <img 
                src="${images.material.familyTandoncies}" 
                alt="Amit Tandon: 35mm Master Print" 
                class="cinema-master-img"
                id="active-reel-image"
                width="1280"
                height="720"
                loading="lazy"
              />
              <div class="projector-gate-vignette" aria-hidden="true"></div>

              <!-- Top Left Film Slate Stamp -->
              <div class="film-slate-badge mono">
                <span class="slate-title" id="active-slate-title">SCENE 41 // TAKE 01</span>
                <span class="slate-special" id="active-slate-sub">NETFLIX ORIGINAL SPECIAL</span>
              </div>

              <!-- Top Right Sound Synchronizer Pill -->
              <div class="sound-sync-badge mono">
                <span class="sync-dot" aria-hidden="true"></span>
                <span id="active-sync-text">SYNC AUDIO // 106 dB ROAR</span>
              </div>

              <!-- Magnetic Projector Run Trigger -->
              <button 
                type="button" 
                class="projector-play-trigger cinema-play-trigger"
                id="active-reel-play-btn"
                data-video-id="C7b0TAg0xMU"
                aria-label="Run 35mm Projector"
              >
                <div class="play-reticle-ring">
                  <div class="crosshair-h" aria-hidden="true"></div>
                  <div class="crosshair-v" aria-hidden="true"></div>
                  <svg class="play-triangle-svg" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,3 20,12 6,21"/>
                  </svg>
                </div>
                <span class="play-reticle-text mono" id="active-play-label">RUN PROJECTOR (2:14 TRAILER)</span>
              </button>

              <!-- Red Grease-Pencil Editor Annotations on Glass -->
              <div class="grease-pencil-markup" aria-hidden="true">
                <svg class="pencil-arrow-svg" viewBox="0 0 80 40">
                  <path d="M5,35 Q40,5 75,20 M75,20 L65,15 M75,20 L68,28" stroke="#E50914" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                </svg>
                <span class="pencil-note" id="active-pencil-note">Cut here: audience roar 42 sec straight</span>
              </div>

              <!-- Bottom Sprocket Track -->
              <div class="film-sprocket-track bottom-sprockets" aria-hidden="true">
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="film-edge-code mono">FRAME 0104 · 2-CHANNEL DOLBY SR · 35MM OPTICAL TRACK</span>
              </div>
            </div>

            <!-- Active Reel Technical Dossier & CTAs -->
            <div class="active-reel-metadata">
              <div class="reel-meta-header mono">
                <span class="reel-label" id="active-reel-label">REEL NO. 01 // 35MM MASTER NEGATIVE</span>
                <span class="reel-time" id="active-reel-time">RUN: 1H 12M 44S</span>
              </div>

              <h3 class="active-reel-title display" id="active-reel-title">FAMILY TANDONCIES</h3>

              <blockquote class="active-reel-quote" id="active-reel-quote">
                “Indian mothers don't negotiate. They hold executive veto power over every household decision on Earth.”
              </blockquote>

              <p class="active-reel-synopsis" id="active-reel-desc">
                Amit’s breakout worldwide Netflix special dissecting joint-family hierarchies, WhatsApp uncle politics, matrimonial biodatas, and why modern marriage is an extreme survival sport.
              </p>

              <div class="active-reel-actions">
                <a 
                  href="https://www.netflix.com/title/81077759" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-cinema-netflix"
                  id="active-reel-primary-link"
                >
                  <span id="active-reel-primary-text">STREAM ON NETFLIX</span>
                  <span class="btn-arrow" aria-hidden="true">&nearr;</span>
                </a>
                <button 
                  type="button" 
                  class="btn-cinema-outline"
                  id="active-reel-secondary-btn"
                  data-video-id="C7b0TAg0xMU"
                >
                  <span id="active-reel-secondary-text">PLAY PROJECTION TRAILER</span>
                </button>
              </div>
            </div>

          </div>


          <!-- RIGHT: The Heavy Metal Film Canister Rack (Physical Film Canisters) -->
          <div class="canister-vault-pod">
            
            <div class="canister-pod-header mono">
              <span class="canister-archive-title">ARCHIVAL FILM CANISTERS</span>
              <span class="canister-count">3 PHYSICAL REELS</span>
            </div>

            <div class="film-canister-list" role="tablist" aria-label="35mm Film Canister Selection">
              
              <!-- Canister 1: Family Tandoncies (Netflix) -->
              <button 
                type="button" 
                class="film-canister-item is-active" 
                id="canister-btn-0"
                data-reel-index="0"
                role="tab"
                aria-selected="true"
                aria-controls="active-screening-screen"
              >
                <!-- Heavy Aluminum Film Canister Lid Graphic -->
                <div class="canister-tin-plate">
                  <div class="tin-center-spool" aria-hidden="true"></div>
                  <div class="tin-rib-ring" aria-hidden="true"></div>
                  <div class="canister-emboss mono">REEL 01</div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-spec-pill pill-netflix">NETFLIX MASTER</span>
                    <span class="canister-customs-seal">190 COUNTRIES</span>
                  </div>
                  <strong class="canister-title display">FAMILY TANDONCIES</strong>
                  <span class="canister-sub mono">35MM MASTER PRINT · 1H 12M</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-dot" aria-hidden="true">●</span> <span class="canister-status-text">LOADED ON LIGHTBOX</span>
                  </div>
                </div>
              </button>

              <!-- Canister 2: Masala Sandwich (Tour Reel) -->
              <button 
                type="button" 
                class="film-canister-item" 
                id="canister-btn-1"
                data-reel-index="1"
                role="tab"
                aria-selected="false"
                aria-controls="active-screening-screen"
              >
                <div class="canister-tin-plate tin-aged">
                  <div class="tin-center-spool" aria-hidden="true"></div>
                  <div class="tin-rib-ring" aria-hidden="true"></div>
                  <div class="canister-emboss mono">REEL 02</div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-spec-pill pill-tour">LONDON TOUR</span>
                    <span class="canister-customs-seal seal-yellow">CLEARED 33 CITIES</span>
                  </div>
                  <strong class="canister-title display">MASALA SANDWICH</strong>
                  <span class="canister-sub mono">LIVE AUDITORIUM PRINT · 80 MINS</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-text">CLICK TO LOAD REEL ➔</span>
                  </div>
                </div>
              </button>

              <!-- Canister 3: Paisa Aa Gaya (Viral Master) -->
              <button 
                type="button" 
                class="film-canister-item" 
                id="canister-btn-2"
                data-reel-index="2"
                role="tab"
                aria-selected="false"
                aria-controls="active-screening-screen"
              >
                <div class="canister-tin-plate tin-gold">
                  <div class="tin-center-spool" aria-hidden="true"></div>
                  <div class="tin-rib-ring" aria-hidden="true"></div>
                  <div class="canister-emboss mono">REEL 03</div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-spec-pill pill-viral">18M+ VIRAL</span>
                    <span class="canister-barcode">||||| AT-CAN-03</span>
                  </div>
                  <strong class="canister-title display">PAISA AA GAYA… CLASS NAHI</strong>
                  <span class="canister-sub mono">ORIGINAL ARCHIVAL BIT · 18.4M</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-text">CLICK TO LOAD REEL ➔</span>
                  </div>
                </div>
              </button>

            </div>

            <!-- Bottom Lightbox Inspection Tools & Pinned Notes -->
            <div class="lightbox-inspection-kit mono" aria-hidden="true">
              <div class="loupe-tool">
                <span class="loupe-lens"></span>
                <span class="loupe-label">8X FILM LOUPE // FOCUS VERIFIED</span>
              </div>
              <div class="chinagraph-pencil">
                <span class="pencil-lead"></span>
                <span>RED CHINAGRAPH WAX PENCIL</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Desk Metal Base Lip & Perforated Film Strip Marquee -->
      <div class="desk-metal-base" aria-hidden="true">
        <div class="film-ticker-track mono">
          <span>● 35MM MOTION PICTURE PRINT</span>
          <span class="ticker-star">★</span>
          <span>NETFLIX SPECIAL STREAMING IN 190+ COUNTRIES</span>
          <span class="ticker-star">★</span>
          <span>2,000+ AUDITORIUM PERFORMANCES</span>
          <span class="ticker-star">★</span>
          <span>120,000 FEET OF CELLULOID COMEDY</span>
          <span class="ticker-star">★</span>
          <span>LONDON · DUBAI · SYDNEY · NEW YORK · MUMBAI · DELHI</span>
          <span class="ticker-star">★</span>
          <span>● 35MM MOTION PICTURE PRINT</span>
          <span class="ticker-star">★</span>
          <span>NETFLIX SPECIAL STREAMING IN 190+ COUNTRIES</span>
        </div>
      </div>

    </div>

  </div>

  <!-- Video Modal Player Overlay -->
  <div class="video-modal" id="videoModal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="35mm Performance Projection Player">
    <div class="video-modal-backdrop" aria-hidden="true"></div>
    <div class="video-modal-container">
      <div class="video-modal-header">
        <span class="video-modal-label mono">AMIT TANDON // 35MM MASTER REEL PROJECTION</span>
        <button type="button" class="video-modal-close" id="videoModalClose" aria-label="Close Projector">
          <span class="mono">CLOSE [ESC]</span>
          <span class="close-x" aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="video-modal-ratio">
        <iframe 
          id="videoModalIframe" 
          src="" 
          title="Amit Tandon Stand-Up Performance" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

</section>
`;
}
