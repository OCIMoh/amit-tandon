export function renderPerspective(): string {
  return `
<section class="perspective-section" id="perspective" aria-label="The Perspective Shift - It Depends Who You Ask">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="perspective-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">CASE STUDY #01 · THE JAIPUR WEDDING LUGGAGE AUDIT</span>
      </div>
      <h2 class="display perspective-title">
        <span>IT DEPENDS </span>
        <span class="highlight-red">WHO YOU ASK.</span>
      </h2>
      <p class="perspective-lead">
        Same 48-hour destination wedding. Two fundamentally incompatible laws of physics. Explore the forensic audit below or tilt the brass scale.
      </p>
    </div>

    <!-- Interactive Luggage Audit Stage -->
    <div class="luggage-audit-stage" id="luggage-audit-stage" data-reveal>
      
      <!-- Top HUD Header: Dual Weight Telemetry -->
      <div class="audit-hud-bar">
        
        <!-- Left HUD: His Bag -->
        <button type="button" class="hud-card hud-his is-active" id="hud-btn-his" data-target-side="his" aria-pressed="true">
          <div class="hud-card-header">
            <span class="hud-pilot-dot"></span>
            <span class="mono hud-tag">HIS BAG · 4 MIN PACKING</span>
          </div>
          <div class="hud-weight-display">
            <span class="hud-num" id="weight-num-his">2.4</span>
            <span class="hud-unit">KG</span>
          </div>
          <div class="hud-metric-line">
            <span class="hud-subtext">1 Canvas Duffel · Excess Fee: ₹0</span>
          </div>
        </button>

        <!-- Center HUD: Scale Telemetry & Truth Trigger -->
        <div class="hud-center-telemetry">
          <div class="telemetry-badge mono" id="telemetry-badge">
            <span class="dial-status-dot"></span>
            <span id="telemetry-text">SCALE TILTED: +52.4 KG BAGGAGE IMBALANCE</span>
          </div>
          <button type="button" class="btn-balance-truth" id="btn-balance-truth" aria-label="Snap scale to center to reveal shared truth">
            <span class="truth-sparkle">⚖️</span>
            <span>REVEAL THE SHARED TRUTH</span>
          </button>
        </div>

        <!-- Right HUD: Her Suitcase -->
        <button type="button" class="hud-card hud-her" id="hud-btn-her" data-target-side="her" aria-pressed="false">
          <div class="hud-card-header">
            <span class="hud-pilot-dot"></span>
            <span class="mono hud-tag">HER SUITCASE · 3 WEEKS PREP</span>
          </div>
          <div class="hud-weight-display">
            <span class="hud-num" id="weight-num-her">54.8</span>
            <span class="hud-unit">KG</span>
          </div>
          <div class="hud-metric-line">
            <span class="hud-subtext">4 Heavy Cases · Excess Fee: ₹18,500</span>
          </div>
        </button>

      </div>

      <!-- Main Visual Viewport with Hotspot Pins -->
      <div class="audit-viewport" id="audit-viewport">
        
        <!-- Background Cinematic Illustration Plate -->
        <div class="audit-plate-wrap">
          <img 
            src="/images/jaipur_luggage_audit.jpg" 
            alt="Photorealistic Jaipur palace suite table with Amit's duffel bag on the left, antique brass dial scale in the center, and wife's bridal wedding suitcase on the right" 
            class="audit-plate-img" 
            id="audit-plate-img"
            width="1920" 
            height="1080" 
            loading="lazy"
          />
          <div class="audit-plate-vignette" aria-hidden="true"></div>
          <div class="audit-side-glow glow-his" id="glow-his" aria-hidden="true"></div>
          <div class="audit-side-glow glow-her" id="glow-her" aria-hidden="true"></div>
        </div>

        <!-- Center Mechanical Dial Needle (SVG Overlay) -->
        <div class="dial-needle-mount" id="dial-needle-mount" aria-hidden="true">
          <div class="dial-needle-arm" id="dial-needle-arm">
            <div class="dial-needle-tip"></div>
          </div>
        </div>

        <!-- Interactive Hotspot Pins -->
        <div class="hotspot-layer" id="hotspot-layer">
          
          <!-- Pin 1: Toothbrush (Amit) -->
          <button 
            type="button" 
            class="hotspot-pin pin-his" 
            id="pin-toothbrush" 
            data-pin="toothbrush"
            style="left: 20.8%; top: 68.5%;"
            aria-label="Audit Item: Amit's Toothbrush"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">1</span>
            <span class="pin-label-preview">Toothbrush</span>
          </button>

          <!-- Pin 2: Tangled Charger (Amit) -->
          <button 
            type="button" 
            class="hotspot-pin pin-his" 
            id="pin-charger" 
            data-pin="charger"
            style="left: 27.5%; top: 71.5%;"
            aria-label="Audit Item: Amit's Tangled Cable"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">2</span>
            <span class="pin-label-preview">Tangled Cable</span>
          </button>

          <!-- Pin 3: Rolled Kurta (Amit) -->
          <button 
            type="button" 
            class="hotspot-pin pin-his" 
            id="pin-kurta" 
            data-pin="kurta"
            style="left: 38%; top: 79%;"
            aria-label="Audit Item: Rolled Kurta"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">3</span>
            <span class="pin-label-preview">Emergency Kurta</span>
          </button>

          <!-- Pin 4: Handheld Steamer (Wife) -->
          <button 
            type="button" 
            class="hotspot-pin pin-her" 
            id="pin-steamer" 
            data-pin="steamer"
            style="left: 66.5%; top: 66.5%;"
            aria-label="Audit Item: Handheld Steamer"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">4</span>
            <span class="pin-label-preview">Garment Steamer</span>
          </button>

          <!-- Pin 5: Safety Pins Tin (Wife) -->
          <button 
            type="button" 
            class="hotspot-pin pin-her" 
            id="pin-safetypins" 
            data-pin="safetypins"
            style="left: 63.5%; top: 70.8%;"
            aria-label="Audit Item: 140 Safety Pins"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">5</span>
            <span class="pin-label-preview">140 Safety Pins</span>
          </button>

          <!-- Pin 6: Gold-Embroidered Lehenga (Wife) -->
          <button 
            type="button" 
            class="hotspot-pin pin-her" 
            id="pin-lehenga" 
            data-pin="lehenga"
            style="left: 71%; top: 47%;"
            aria-label="Audit Item: Sangeet Lehenga"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">6</span>
            <span class="pin-label-preview">14kg Lehenga</span>
          </button>

          <!-- Pin 7: Footwear Matrix (Wife) -->
          <button 
            type="button" 
            class="hotspot-pin pin-her" 
            id="pin-shoes" 
            data-pin="shoes"
            style="left: 77%; top: 66%;"
            aria-label="Audit Item: Matching Footwear"
          >
            <span class="pin-pulse"></span>
            <span class="pin-dot">7</span>
            <span class="pin-label-preview">Footwear Array</span>
          </button>

        </div>

        <!-- Hotspot Inspection Popover Card (Dynamically updated) -->
        <div class="audit-popover" id="audit-popover" role="dialog" aria-modal="false" aria-hidden="true">
          <div class="popover-badge mono" id="popover-side-badge">HIS REALITY · AUDIT ITEM #01</div>
          <h3 class="popover-title" id="popover-title">The Toothbrush in the Outer Mesh</h3>
          <blockquote class="popover-quote" id="popover-quote">
            “Survived 3 weddings, 2 corporate offsites, and 4 years of domestic diplomacy without replacement. Total weight: 18 grams. Ready in 4 seconds.”
          </blockquote>
          <div class="popover-specs">
            <div class="spec-col">
              <span class="spec-label mono">WEIGHT</span>
              <span class="spec-val" id="popover-weight">0.018 KG</span>
            </div>
            <div class="spec-col">
              <span class="spec-label mono">SURVIVAL RATING</span>
              <span class="spec-val" id="popover-stat">100% EFFICIENT</span>
            </div>
            <div class="spec-col">
              <span class="spec-label mono">PACKING TIME</span>
              <span class="spec-val" id="popover-time">4 SECONDS</span>
            </div>
          </div>
          <button type="button" class="popover-close-btn" id="popover-close-btn" aria-label="Close item detail">
            &times;
          </button>
        </div>

        <!-- The Shared Truth Modal / Banner (Triggered by Center Scale) -->
        <div class="shared-truth-banner" id="shared-truth-banner" aria-hidden="true">
          <div class="truth-content-card">
            <div class="truth-icon-circle">⚖️</div>
            <span class="mono truth-kicker">THE INEVITABLE SHARED CONCLUSION</span>
            <blockquote class="truth-grand-quote">
              “We reached Jaipur. Nobody looked at what either of us wore. Sharma Ji was having a shouting match with the caterer over cold butter naan.”
            </blockquote>
            <p class="truth-subtext editorial-italic">
              “Living with people isn't a problem to be solved. It's a full-time comedy show you never bought tickets for.”
            </p>
            <div class="truth-actions">
              <a href="#watch" class="btn btn-primary btn-sm">
                <span>WATCH THIS JOKE LIVE ON STAGE</span>
                <span class="btn-arrow">&rarr;</span>
              </a>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-resume-audit">
                <span>CONTINUE AUDITING LUGGAGE &orarr;</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Dial Slider Controller Track -->
      <div class="dial-controller-bar">
        <div class="dial-track-header">
          <span class="mono dial-track-title">TACTILE BALANCE SCRUBBER</span>
          <span class="dial-instruction">Drag the slider or click the markers to tilt the physical scale</span>
        </div>
        <div class="slider-wrapper">
          <label for="luggage-balance-slider" class="sr-only">Tilt luggage balance scale</label>
          <input 
            type="range" 
            id="luggage-balance-slider" 
            min="0" 
            max="100" 
            step="1" 
            value="15" 
            class="luggage-slider-input"
            aria-label="Luggage Balance Scrubber"
          />
        </div>
        <div class="dial-markers">
          <button type="button" class="marker-btn marker-left is-active" id="marker-his" data-pos="15">
            <span class="marker-dot"></span>
            <span class="marker-text">01 · HIS REALITY (2.4 KG)</span>
          </button>
          <button type="button" class="marker-btn marker-center" id="marker-truth" data-pos="50">
            <span class="marker-dot"></span>
            <span class="marker-text">02 · BALANCED (SHARED TRUTH)</span>
          </button>
          <button type="button" class="marker-btn marker-right" id="marker-her" data-pos="85">
            <span class="marker-dot"></span>
            <span class="marker-text">03 · HER REALITY (54.8 KG)</span>
          </button>
        </div>
      </div>

      <!-- Quick Item Jump Bar (Mobile & Accessibility Friendly) -->
      <div class="quick-audit-drawer">
        <span class="mono quick-drawer-title">QUICK INSPECT ITEMS:</span>
        <div class="quick-pill-strip" role="toolbar" aria-label="Quick Item Inspection">
          <button type="button" class="audit-pill pill-his" data-target-pin="toothbrush">Toothbrush</button>
          <button type="button" class="audit-pill pill-his" data-target-pin="charger">Tangled Cable</button>
          <button type="button" class="audit-pill pill-his" data-target-pin="kurta">Rolled Kurta</button>
          <span class="pill-divider">|</span>
          <button type="button" class="audit-pill pill-her" data-target-pin="steamer">Steamer</button>
          <button type="button" class="audit-pill pill-her" data-target-pin="safetypins">140 Pins</button>
          <button type="button" class="audit-pill pill-her" data-target-pin="lehenga">14kg Lehenga</button>
          <button type="button" class="audit-pill pill-her" data-target-pin="shoes">Footwear</button>
        </div>
      </div>

    </div>

  </div>
</section>`;
}
