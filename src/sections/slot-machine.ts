import { svgs } from "../content/svgs";

export function renderSlotMachine(): string {
  return `
<section class="slot-machine-section" id="slot-machine" aria-label="Interactive Aise Kaise Dilemma Generator">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="slot-section-head">
      <div class="slot-head-left">
        <h2 class="display slot-head-title">
          <span>THE </span>
          <span class="slot-title-badge">AISE KAISE?</span>
          <span> MACHINE.</span>
        </h2>
      </div>
      <div class="slot-head-right">
        <span class="slot-scribble">Real situations.<br/>Questionable logic.</span>
      </div>
    </div>

    <!-- The Slot Machine Body -->
    <div class="slot-chassis-container">
      
      <!-- Interactive Lever on the Left with physical mount -->
      <div class="slot-lever-dock" id="slot-lever-dock" title="Click to pull lever!">
        <div class="lever-mount-bracket"></div>
        <div class="lever-assembly" id="lever-assembly">
          ${svgs.slotLever}
        </div>
      </div>

      <!-- Main Slot Enclosure -->
      <div class="slot-machine-body">
        
        <div class="slot-reels-row">
          
          <!-- Reel 1: WHO? -->
          <div class="slot-reel-box" id="reel-1">
            <div class="reel-label-badge">WHO?</div>
            <div class="reel-window">
              <div class="reel-content" id="reel-1-content">
                <div class="reel-illus" id="reel-1-illus">${svgs.cartoonWife}</div>
                <span class="reel-text">WIFE</span>
              </div>
            </div>
          </div>

          <!-- Reel 2: SITUATION -->
          <div class="slot-reel-box" id="reel-2">
            <div class="reel-label-badge">SITUATION</div>
            <div class="reel-window">
              <div class="reel-content" id="reel-2-content">
                <div class="reel-illus" id="reel-2-illus">${svgs.cartoonSuitcases}</div>
                <span class="reel-text">2-DAY TRIP.<br/>4 SUITCASES.</span>
              </div>
            </div>
          </div>

          <!-- Reel 3: AMIT'S OBSERVATION -->
          <div class="slot-reel-box reel-observation" id="reel-3">
            <div class="reel-label-badge">AMIT'S OBSERVATION</div>
            <div class="reel-window">
              <div class="reel-content" id="reel-3-content">
                <div class="observation-bubble">
                  <span class="obs-quote" id="obs-quote-text">“THE LOGIC HAS LEFT THE CHAT.”</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Spin Trigger Button & Haha Bubble -->
        <div class="slot-controls-row">
          <button class="btn btn-red btn-lg slot-spin-btn" id="generate-dilemma-btn" aria-label="Generate New Dilemma">
            <span>GENERATE DILEMMA &rarr;</span>
          </button>
          <div class="bubble-speech bubble-cyan slot-haha-tag tilt-right">HAHA!</div>
        </div>

      </div>

    </div>

  </div>
</section>`;
}
