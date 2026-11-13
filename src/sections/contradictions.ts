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
      
      <!-- Top Brushed Anodized Metal Desk Lip & Aluminum Rulers -->
      <div class="desk-metal-trim" aria-hidden="true">
        <div class="aluminum-ruler mono">
          <span>| 00 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 CM | ACCU-METRIC 35MM FILM BENCH</span>
        </div>
        <div class="desk-screws">
          <span class="screw" title="Milled Stainless Machine Screw"></span>
          <span class="screw" title="Milled Stainless Machine Screw"></span>
          <span class="screw" title="Milled Stainless Machine Screw"></span>
          <span class="screw" title="Milled Stainless Machine Screw"></span>
        </div>
      </div>

      <!-- The Main Illuminated Backlit Lightbox Panel (Diffused White Glow) -->
      <div class="lightbox-illuminated-glass">
        
        <!-- Lightbox Content Grid: Left Master Celluloid Strip (58%) + Right Canister Rack (42%) -->
        <div class="lightbox-grid">
          
          <!-- LEFT: The Master Celluloid Acetate Strip (Active Film Reel Resting on Illuminated Glass) -->
          <div class="master-projection-pod">
            
            <!-- Celluloid Film Sprocket Strip Across the Top (Light Bleeding Through Perforations) -->
            <div class="film-sprocket-track top-sprockets" aria-hidden="true">
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
              <span class="film-edge-code mono" id="active-edge-code">EASTMAN 5219 · SAFETY FILM · REEL 01 · 190 COUNTRIES</span>
            </div>

            <!-- The Main Cinema Frame (Screening Canvas) -->
            <div class="cinema-screening-frame" id="active-screening-screen">
              
              <!-- 35mm Optical Soundtrack Track on Left Margin -->
              <div class="optical-soundtrack-strip" aria-hidden="true">
                <div class="optical-wave-pattern"></div>
                <span class="soundtrack-label mono">OPTICAL AUDIO A/B</span>
              </div>

              <img 
                src="${images.material.familyTandoncies}" 
                alt="Amit Tandon: 35mm Master Print" 
                class="cinema-master-img"
                id="active-reel-image"
                width="1280"
                height="720"
                loading="eager"
                decoding="async"
              />
              
              <!-- Cinema Film Density & Vignette Mask (Softens Distracting Baked Thumbnail Graphics) -->
              <div class="cinema-film-density-mask" aria-hidden="true"></div>
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
                <div class="grease-brackets">
                  <span class="bracket-tl"></span>
                  <span class="bracket-br"></span>
                </div>
                <svg class="pencil-arrow-svg" viewBox="0 0 80 40">
                  <path d="M5,35 Q40,5 75,20 M75,20 L65,15 M75,20 L68,28" stroke="#E50914" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                </svg>
                <span class="pencil-note" id="active-pencil-note">Cut here: audience roar 42 sec straight</span>
              </div>

              <!-- Bottom Sprocket Track (Perforations Bleeding Light) -->
              <div class="film-sprocket-track bottom-sprockets" aria-hidden="true">
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="sprocket"></span><span class="sprocket"></span><span class="sprocket"></span>
                <span class="film-edge-code mono">FRAME 0104 · 2-CHANNEL DOLBY SR · 35MM OPTICAL TRACK</span>
              </div>
            </div>

            <!-- Active Reel Archival Editorial Dope Sheet -->
            <div class="active-reel-metadata">
              <div class="reel-meta-header mono">
                <div class="reel-meta-lab-badge">
                  <span class="lab-stamp-red">EASTMAN FILM LABS</span>
                  <span class="reel-label" id="active-reel-label">REEL NO. 01 // 35MM MASTER NEGATIVE</span>
                </div>
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


          <!-- RIGHT: Archival Film Canister Desk Bay (Direction A: Pure Physical Canisters) -->
          <div class="canister-vault-pod">
            
            <div class="canister-pod-header mono">
              <div class="pod-header-left">
                <span class="canister-archive-title">ARCHIVAL 35MM CANISTERS</span>
                <span class="canister-vault-serial">// BACKSTAGE VAULT BAY #03</span>
              </div>
              <span class="canister-count">SELECT CANISTER TO LOAD</span>
            </div>

            <div class="film-canister-list" role="tablist" aria-label="35mm Film Canister Selection">
              
              <!-- Canister 1: Family Tandoncies (Heavy Stamped Anodized Aluminum Canister) -->
              <button 
                type="button" 
                class="film-canister-item is-active" 
                id="canister-btn-0"
                data-reel-index="0"
                role="tab"
                aria-selected="true"
                aria-controls="active-screening-screen"
                title="Load 35mm Canister: Family Tandoncies"
              >
                <!-- Physical Milled Aluminum Canister Lid with Anisotropic Reflections -->
                <div class="canister-tin-plate tin-aluminum">
                  <div class="tin-lathe-rings" aria-hidden="true"></div>
                  <div class="tin-center-spool" aria-hidden="true">
                    <span class="spool-core-brass"></span>
                  </div>
                  <div class="tin-embossed-rim mono">EASTMAN KODAK CO · 35MM MOTION PICTURE</div>
                  
                  <!-- Pasted Archival Paper Masking Tape Label Across Canister -->
                  <div class="tin-pasted-tape mono">
                    <span class="tape-text">KODAK 5219 // REEL 01</span>
                  </div>

                  <!-- Active Red Gaffer Tape Flag -->
                  <div class="active-gaffer-flag mono" aria-hidden="true">
                    <span>LOADED</span>
                  </div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-customs-seal seal-cleared">CLEARED: 190 COUNTRIES</span>
                    <span class="canister-film-stock">KODAK 5219</span>
                  </div>
                  <strong class="canister-title display">FAMILY TANDONCIES</strong>
                  <span class="canister-sub mono">35MM MASTER NEGATIVE · 1H 12M 44S</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-dot" aria-hidden="true">●</span> 
                    <span class="canister-status-text">LOADED ON LIGHTBOX</span>
                  </div>
                </div>
              </button>

              <!-- Canister 2: Masala Sandwich (Weathered Stage Tour Bronze Tin) -->
              <button 
                type="button" 
                class="film-canister-item" 
                id="canister-btn-1"
                data-reel-index="1"
                role="tab"
                aria-selected="false"
                aria-controls="active-screening-screen"
                title="Load 35mm Canister: Masala Sandwich"
              >
                <div class="canister-tin-plate tin-aged">
                  <div class="tin-lathe-rings" aria-hidden="true"></div>
                  <div class="tin-center-spool" aria-hidden="true">
                    <span class="spool-core-brass"></span>
                  </div>
                  <div class="tin-embossed-rim mono">LEICESTER SQ · DUBAI OPERA ARCHIVE</div>
                  
                  <div class="tin-pasted-tape tape-aged mono">
                    <span class="tape-text">LONDON TOUR // REEL 02</span>
                  </div>

                  <div class="active-gaffer-flag mono" aria-hidden="true">
                    <span>LOADED</span>
                  </div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-customs-seal seal-tour">CLEARED 33 CITIES · WORLD TOUR</span>
                    <span class="canister-film-stock">VISION3 500T</span>
                  </div>
                  <strong class="canister-title display">MASALA SANDWICH</strong>
                  <span class="canister-sub mono">LIVE AUDITORIUM PRINT · 80 MINS</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-text">CLICK TO LOAD REEL ➔</span>
                  </div>
                </div>
              </button>

              <!-- Canister 3: Paisa Aa Gaya (Galvanized Steel Viral Master Tin) -->
              <button 
                type="button" 
                class="film-canister-item" 
                id="canister-btn-2"
                data-reel-index="2"
                role="tab"
                aria-selected="false"
                aria-controls="active-screening-screen"
                title="Load 35mm Canister: Paisa Aa Gaya"
              >
                <div class="canister-tin-plate tin-steel">
                  <div class="tin-lathe-rings" aria-hidden="true"></div>
                  <div class="tin-center-spool" aria-hidden="true">
                    <span class="spool-core-brass"></span>
                  </div>
                  <div class="tin-embossed-rim mono">UNCENSORED VIRAL CUT · 18.4M PLAYS</div>
                  
                  <div class="tin-pasted-tape tape-steel mono">
                    <span class="tape-text">VIRAL MASTER // REEL 03</span>
                  </div>

                  <div class="active-gaffer-flag mono" aria-hidden="true">
                    <span>LOADED</span>
                  </div>
                </div>

                <div class="canister-info-side">
                  <div class="canister-tag-row mono">
                    <span class="canister-customs-seal seal-viral">18.4M+ VIEWS · VIRAL HIT</span>
                    <span class="canister-barcode">|||||||| AT-CAN-03</span>
                  </div>
                  <strong class="canister-title display">PAISA AA GAYA… CLASS NAHI</strong>
                  <span class="canister-sub mono">ORIGINAL ARCHIVAL CUT · 18.4M</span>
                  <div class="canister-strip-preview mono">
                    <span class="canister-status-text">CLICK TO LOAD REEL ➔</span>
                  </div>
                </div>
              </button>

            </div>

            <!-- Bottom Lightbox Inspection Tools & Pinned Editorial Kit -->
            <div class="lightbox-inspection-kit mono" role="toolbar" aria-label="Lightbox editing bench tools">
              <button type="button" class="loupe-tool" id="tool-loupe" title="Inspect 35mm grain with 8X Achromatic Loupe" aria-label="8X Achromatic Loupe">
                <span class="loupe-lens" aria-hidden="true"></span>
                <span class="loupe-label">8X ACHROMATIC LOUPE // FOCUS PINPOINTED</span>
              </button>
              <button type="button" class="chinagraph-pencil" id="tool-chinagraph" title="Mark editorial cut with Chinagraph wax pencil" aria-label="Chinagraph Wax Marker">
                <span class="pencil-lead" aria-hidden="true"></span>
                <span>CHINAGRAPH WAX MARKER</span>
              </button>
              <button type="button" class="film-splicer-tag" id="tool-splicer" title="Snap 35mm Guillotine Film Splicer" aria-label="Guillotine 35mm Splicer">
                <span>GUILLOTINE 35MM SPLICER</span>
              </button>
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
