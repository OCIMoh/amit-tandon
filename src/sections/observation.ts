import type { SiteContent } from "../lib/types";
import { svgs } from "../content/svgs";
import { images } from "../content/images";

export function renderObservation(_site: SiteContent): string {
  return `
<section class="pop-hero-section" id="top" aria-label="Hero Stage Overview">
  <div class="hero-stage-backdrop">
    <div class="spotlight-cone"></div>
    <div class="halftone-overlay"></div>
    <div class="hero-chalk-doodles">
      ${svgs.heroChalkDoodles}
    </div>
  </div>

  <div class="wrap hero-tight-stage">
    
    <!-- Left Column: Giant Typography & Punchline CTA -->
    <div class="hero-col-typography" data-reveal>
      <div class="crown-badge">
        ${svgs.crown}
      </div>
      <h1 class="hero-headline display">
        <span class="headline-part headline-amit">AMIT</span>
        <span class="headline-part headline-tandon">TANDON</span>
      </h1>
      <div class="hero-torn-banner tilt-left">
        <span class="torn-banner-text">THE METHOD IN THE MADNESS</span>
      </div>
      
      <!-- Punchline CTA Button -->
      <div class="hero-cta-wrapper">
        <button class="btn btn-yellow btn-lg hero-punchline-btn" id="trigger-punchline-btn" aria-label="Trigger Observational Punchline">
          <span>TRIGGER PUNCHLINE &rarr;</span>
        </button>
      </div>
    </div>

    <!-- Right Column: Central Character & Comic Prop Collage -->
    <div class="hero-col-character" data-reveal>
      <!-- Yellow Comic Starburst radiating behind Amit's head -->
      <div class="hero-comic-blast">
        ${svgs.comicExplosionBurst}
      </div>

      <!-- Main Cutout of Amit Tandon with Signature Glasses -->
      <div class="amit-character-wrapper">
        <img 
          src="${images.portrait}" 
          alt="Amit Tandon smiling on stage with microphone" 
          class="amit-cutout-img"
          width="480" 
          height="540" 
          fetchpriority="high"
        />
        <!-- 3D Chrome Whistling Pressure Cooker bridging the center void -->
        <div class="prop-cooker-assembly">
          <img 
            src="/images/prop-cooker-chrome.png" 
            alt="3D Chrome Whistling Pressure Cooker" 
            class="chrome-cooker-img"
            width="280"
            height="240"
          />
        </div>
      </div>

      <!-- Floating Comic Speech Bubbles & Badges -->
      <div class="comic-bubble-anchor anchor-burst tilt-left" id="bubble-aise-kaise">
        ${svgs.comicBurstBubble}
      </div>

      <div class="comic-bubble-anchor anchor-cloud tilt-right" id="bubble-huh">
        ${svgs.thoughtCloudBubble}
      </div>

      <div class="comic-bubble-anchor anchor-oval tilt-left" id="bubble-why">
        ${svgs.comicOvalBubble}
      </div>

      <div class="handwritten-scribble scribble-top-right">
        <span>Same people.<br/>Different problems.</span>
      </div>

      <!-- Retro TV Monitor on the Right -->
      <div class="hero-retro-tv tilt-right">
        <div class="tv-casing">
          <div class="tv-screen">
            <img src="${images.aboutBanner}" alt="Amit Tandon TV loop" class="tv-screen-img" />
            <div class="tv-scanlines"></div>
          </div>
          <div class="tv-dials">
            <span class="dial-dot"></span>
            <span class="dial-dot"></span>
          </div>
        </div>
      </div>

      <!-- Action sound effect tags overlapping sticker cluster -->
      <div class="hero-sound-cluster">
        <span class="comic-sound-tag tag-whistle tilt-left">WHISTLE!</span>
        <span class="comic-sound-tag tag-haha tilt-right">HAHA!</span>
        <span class="comic-sound-tag tag-taaliyan tilt-left">TAALIYAN!</span>
      </div>
    </div>

  </div>

  <!-- Hero stage bottom dense audience applause silhouette -->
  <div class="hero-dense-audience">
    ${svgs.denseAudienceSilhouette}
  </div>

  <!-- Dynamic Confetti / Comic Bubble Container -->
  <div id="punchline-bubble-dock" class="punchline-bubble-dock" aria-live="polite"></div>
</section>`;
}
