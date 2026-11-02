export function renderSlotMachine(): string {
  return `
<section class="translator-section" id="translator" aria-label="The Observation Vault: Gyan Bites & Corporate Decoder">
  <div class="wrap">
    
    <!-- 1. Gyan Bites: The Viral Observation Deck -->
    <div class="gyan-deck-container" data-reveal>
      <div class="gyan-deck-header">
        <div class="section-eyebrow">
          <span class="eyebrow-dot"></span>
          <span class="mono">VIRAL OBSERVATIONS &bull; 150M+ IMPRESSIONS</span>
        </div>
        <h2 class="display gyan-deck-title">
          <span>DAILY GYAN BITES &bull; </span>
          <span class="highlight-red">UNFILTERED TRUTHS</span>
        </h2>
        <p class="gyan-deck-sub">
          The domestic micro-observations Amit tests every week before converting them into arena punchlines.
        </p>
      </div>

      <div class="gyan-interactive-stage">
        <!-- 3D Card Display Frame -->
        <div class="gyan-card-frame" id="gyan-card-frame">
          <div class="gyan-card-inner" id="gyan-card-inner">
            <img 
              src="/gyan/gyan-1.jpg" 
              alt="Amit Tandon Viral Gyan Bite" 
              class="gyan-card-img" 
              id="gyan-active-img"
              width="600"
              height="600"
              loading="lazy"
            />
            <div class="gyan-card-overlay">
              <span class="gyan-pill mono" id="gyan-pill-num">CARD 01 OF 10</span>
              <p class="gyan-card-caption" id="gyan-caption-text">
                "WhatsApp Family Groups: 42 members, 120 Good Morning forwards by 7 AM, zero replies to genuine questions."
              </p>
            </div>
          </div>
        </div>

        <!-- Controls for Gyan Deck -->
        <div class="gyan-deck-controls">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-gyan-prev" aria-label="Previous Gyan Card">
            &larr; PREVIOUS
          </button>
          
          <button type="button" class="btn btn-primary btn-sm" id="btn-gyan-deal" aria-label="Deal New Gyan Bite">
            <span>DEAL TODAY'S GYAN</span>
            <span class="btn-arrow">&rarr;</span>
          </button>

          <button type="button" class="btn btn-secondary btn-sm" id="btn-gyan-next" aria-label="Next Gyan Card">
            NEXT &rarr;
          </button>

          <a href="https://api.whatsapp.com/send?text=Amit%20Tandon%20Gyan%20Bite:%20WhatsApp%20Family%20Groups%20have%2042%20members%20and%20zero%20fact%20checkers!" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-secondary btn-sm btn-whatsapp" 
             id="btn-gyan-whatsapp"
             aria-label="Share on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.228-.553-1.831-.754-3.003-2.612-3.094-2.734-.09-.122-.745-.99-.745-1.89 0-.9.472-1.343.64-1.528.169-.185.369-.231.492-.231.123 0 .246.002.354.007.113.006.264-.043.412.314.154.37.524 1.278.57 1.371.046.092.077.2.015.324-.061.123-.092.2-.185.307-.092.108-.194.241-.277.324-.092.093-.188.194-.081.379.108.185.478.789 1.026 1.277.706.628 1.301.823 1.486.915.185.092.293.077.4-.046.108-.123.462-.538.585-.723.123-.185.246-.154.415-.092.169.062 1.077.508 1.262.6.185.092.308.138.354.215.046.077.046.446-.098.851z"/></svg>
            <span>FORWARD TO WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>

    <div class="vault-divider" aria-hidden="true"></div>

    <!-- 2. The Corporate-to-Marriage Decoder Section Header -->
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
