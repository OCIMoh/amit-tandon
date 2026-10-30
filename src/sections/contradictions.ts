import type { MaterialItem } from "../lib/types";
import { images } from "../content/images";
import { svgs } from "../content/svgs";

export function renderContradictions(_items: MaterialItem[]): string {
  return `
<section class="masala-section" id="specials" aria-label="Comedy Specials and Extra Masala">
  <div class="wrap">
    <!-- Section Header -->
    <div class="masala-head">
      <div class="masala-title-wrapper">
        <h2 class="display masala-title">
          <span>COMEDY. </span>
          <span class="highlight-red">EXTRA MASALA.</span>
        </h2>
      </div>
      <div class="masala-handwritten">
        <span>Same family.<br/>Different drama.</span>
      </div>
    </div>

    <!-- 3-Column Comic Grid -->
    <div class="masala-grid">
      
      <!-- Panel 1: Retro CRT TV (Family Tandoncies on Netflix) -->
      <div class="comic-panel panel-tv tilt-left-sm">
        <div class="crt-tv-bezel">
          <div class="tv-top-antenna">
            <span class="antenna-v"></span>
          </div>
          <div class="crt-screen-wrap">
            <img 
              src="${images.material.familyTandoncies}" 
              alt="Amit Tandon Family Tandoncies Netflix Standup Special" 
              class="crt-poster-img"
              width="640" 
              height="360"
            />
            <div class="crt-scanline-mesh"></div>
            
            <div class="crt-content-overlay">
              <h3 class="crt-special-title">FAMILY TANDONCIES</h3>
              <p class="crt-special-sub">A STAND-UP SPECIAL</p>
            </div>

            <!-- Cinema play trigger -->
            <button class="crt-play-button" data-video-id="C7b0TAg0xMU" aria-label="Watch Family Tandoncies Special Trailer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
          
          <div class="tv-control-panel">
            <div class="tv-control-dial"></div>
            <div class="tv-control-dial"></div>
            <div class="tv-speaker-slits">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <!-- Red Netflix Sticker -->
        <a 
          href="https://www.netflix.com/title/81077759" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="sticker-netflix tilt-left"
        >
          <span class="sticker-sub">NOW STREAMING ON</span>
          <span class="sticker-main">NETFLIX</span>
        </a>
      </div>

      <!-- Panel 2: Masala Sandwich (Chef's Special) -->
      <div class="comic-panel panel-sandwich tilt-right-sm">
        <div class="sandwich-card-inner">
          <div class="sandwich-header">
            <div class="sandwich-crown">${svgs.crown}</div>
            <h3 class="sandwich-title">MASALA SANDWICH</h3>
          </div>

          <div class="sandwich-artwork-wrap">
            ${svgs.masalaSandwichGraphic}
            <button class="sandwich-play-btn" data-video-id="2WkO1nJ3u1Y" aria-label="Watch Masala Sandwich Clip">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>

          <div class="sandwich-badge-row">
            <span class="badge-chef-special">CHEF'S SPECIAL</span>
            <span class="badge-relatable">100% RELATABLE</span>
          </div>

          <p class="sandwich-caption">Three generations. One house. Infinite opinions on everything from paneer to marriage.</p>
        </div>
      </div>

      <!-- Panel 3: Gyan Bites Interactive Soundboard -->
      <div class="comic-panel panel-gyan tilt-left-sm" id="gyan-panel">
        <div class="gyan-header">
          <h3 class="gyan-title">GYAN BITES</h3>
          <div class="gyan-reactions">
            <span class="reaction-emoji">😂</span>
            <span class="reaction-emoji">🤣</span>
            <span class="reaction-emoji">👍</span>
          </div>
        </div>

        <div class="gyan-pill-list">
          <button class="gyan-pill is-active" data-quote="Bas 5 minute mein tayar ho rahi hoon. Physics has yet to calculate this specific unit of time." data-context="Every Indian Marriage">
            <span>BAS 5 MINUTE &rarr;</span>
          </button>
          
          <button class="gyan-pill" data-quote="Sharma Ji ka beta scored 97%. It doesn't matter if you got 96%, in Indian houses you have brought dishonor." data-context="Indian Parenting 101">
            <span>SHARMA JI KA BETA &rarr;</span>
          </button>

          <button class="gyan-pill" data-quote="The joint family WhatsApp group has 42 admins and not a single fact-checker." data-context="Family WhatsApp Chaos">
            <span>FAMILY WHATSAPP &rarr;</span>
          </button>
        </div>

        <div class="gyan-quote-display" id="gyan-quote-box">
          <p class="gyan-active-quote" id="gyan-active-text">
            “Bas 5 minute mein tayar ho rahi hoon. Physics has yet to calculate this specific unit of time.”
          </p>
          <span class="gyan-active-tag" id="gyan-active-tag">Every Indian Marriage</span>
        </div>
      </div>

    </div>
  </div>
</section>`;
}
