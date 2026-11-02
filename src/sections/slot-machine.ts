export function renderSlotMachine(): string {
  return `
<section class="translator-section" id="translator" aria-label="Corporate-to-Marriage Decoder Instrument">
  <div class="wrap">
    
    <!-- The Corporate-to-Marriage Decoder Section Header -->
    <div class="trans-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">IIT DELHI MBA &bull; DECODER INSTRUMENT</span>
      </div>
      <div class="trans-title-row">
        <h2 class="display trans-main-title">
          <span>FROM THE BOARDROOM </span>
          <span class="highlight-red">TO THE LIVING ROOM.</span>
        </h2>
        <p class="trans-lead-copy">
          After 15 years in senior executive management and an MBA from IIT Delhi, Amit discovered the universal domestic truth: Corporate email diplomacy is just survival training for an Indian marriage. Select a scenario below to decode.
        </p>
      </div>
    </div>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">IIT DELHI MBA &bull; DECODER INSTRUMENT</span>
      </div>
      <div class="trans-title-row">
        <h2 class="display trans-main-title">
          <span>FROM THE BOARDROOM </span>
          <span class="highlight-red">TO THE LIVING ROOM.</span>
        </h2>
        <p class="trans-lead-copy">
          After 15 years in senior management and an IIT Delhi MBA, Amit discovered the universal truth: Corporate email diplomacy is just survival training for an Indian marriage.
        </p>
      </div>
    </div>

    <!-- Situation Category Selector Pills -->
    <div class="trans-category-row" data-reveal role="tablist" aria-label="Select translation category">
      <button class="trans-cat-pill is-active" data-cat="all">ALL SITUATIONS (6)</button>
      <button class="trans-cat-pill" data-cat="office">OFFICE VS HOME</button>
      <button class="trans-cat-pill" data-cat="finances">MONTHLY BUDGET</button>
      <button class="trans-cat-pill" data-cat="whatsapp">FAMILY WHATSAPP</button>
      <button class="trans-cat-pill" data-cat="travel">TRAVEL DELAYS</button>
    </div>

    <!-- The Refined Dual-Panel Translation Instrument -->
    <div class="translation-instrument" data-reveal>
      
      <!-- Panel 1: Boardroom Language -->
      <div class="instrument-panel panel-boardroom">
        <div class="instrument-panel-head">
          <span class="panel-badge mono">01 · BOARDROOM LANGUAGE</span>
          <span class="panel-meta-tag mono" id="corp-category-tag">OFFICE VS HOME</span>
        </div>

        <div class="instrument-panel-content">
          <span class="statement-prompt mono">WHAT YOU TYPE IN OUTLOOK:</span>
          <blockquote class="instrument-quote corporate-quote" id="corp-statement-text">
            “Let's take this offline and circle back after evaluating our Q3 bandwidth.”
          </blockquote>
        </div>

        <div class="instrument-panel-foot">
          <span class="panel-foot-note mono">Executive Euphemism Rating: Level 5 Diplomacy</span>
        </div>
      </div>

      <!-- Center Transformation Conduit -->
      <div class="instrument-conduit" aria-hidden="true">
        <div class="conduit-line"></div>
        <div class="conduit-core">
          <span class="conduit-icon">&rarr;</span>
        </div>
        <div class="conduit-line"></div>
      </div>

      <!-- Panel 2: Domestic Reality -->
      <div class="instrument-panel panel-domestic">
        <div class="instrument-panel-head">
          <span class="panel-badge mono highlight-red">02 · DOMESTIC REALITY</span>
          <span class="panel-counter mono" id="scenario-counter">SITUATION 1 OF 6</span>
        </div>

        <div class="instrument-panel-content">
          <span class="statement-prompt mono highlight-red">WHAT IT ACTUALLY MEANS AT HOME:</span>
          <blockquote class="instrument-quote domestic-quote" id="home-statement-text">
            <span class="typewriter-text" id="typewriter-home-text">“I am pretending to listen, but if I answer right now we won’t speak for three days.”</span>
            <span class="typewriter-caret" id="typewriter-caret">|</span>
          </blockquote>
        </div>

        <div class="instrument-panel-foot">
          <p class="amit-rule-text editorial-italic" id="amit-rule-text">
            “Never offer a logical solution when someone is venting. Just nod slowly and say 'Bilkul'.”
          </p>
        </div>
      </div>

    </div>

    <!-- Instrument Actions Bar -->
    <div class="instrument-controls-bar" data-reveal>
      <div class="controls-action-group">
        <button class="btn btn-primary btn-lg" id="trans-next-btn" aria-label="Decode Next Domestic Situation">
          <span>TRANSLATE NEXT SITUATION</span>
          <span class="btn-arrow">&rarr;</span>
        </button>

        <button class="btn btn-secondary btn-lg" id="trans-copy-btn" aria-label="Copy Translation to Clipboard">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span id="trans-copy-label">SHARE TRANSLATION</span>
        </button>
      </div>

      <div class="controls-annotation mono">
        <span>PROVEN ACROSS 2,000+ SHOWS & 24 YEARS OF MARRIAGE</span>
      </div>
    </div>

  </div>
</section>`;
}
