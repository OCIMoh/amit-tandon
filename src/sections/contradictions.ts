import type { MaterialItem } from "../lib/types";
import { images } from "../content/images";

export function renderContradictions(_items: MaterialItem[]): string {
  return `
<section class="watch-vault-section" id="watch" aria-label="Curated Comedy Performances and Specials">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="watch-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">CURATED PERFORMANCES · STAND-UP SPECIALS & VIRAL BITS</span>
      </div>
      <div class="watch-title-row">
        <h2 class="display watch-main-title">
          <span>THE COMEDY </span>
          <span class="highlight-red">VAULT.</span>
        </h2>
        <p class="watch-lead-copy">
          From a global Netflix Original special streaming in 190+ countries to viral observational bits dissecting joint-family politics, parenting, and modern middle-class survival.
        </p>
      </div>
    </div>

    <!-- Curated Cinema Layout: One Prominent Featured Video + Two Supporting Compositions -->
    <div class="watch-cinema-layout">
      
      <!-- Prominent Featured Performance: Family Tandoncies -->
      <article class="featured-performance-card" data-reveal>
        <div class="featured-thumbnail-frame">
          <img 
            src="${images.material.familyTandoncies}" 
            alt="Amit Tandon: Family Tandoncies on Netflix" 
            class="featured-poster-img"
            width="1280" 
            height="720"
            loading="lazy"
          />
          <div class="featured-media-overlay" aria-hidden="true"></div>
          
          <!-- Netflix Badge -->
          <div class="featured-corner-badge">
            <span class="netflix-red-n">N</span>
            <span class="badge-text mono">NETFLIX ORIGINAL SPECIAL</span>
          </div>

          <!-- Interactive Play Affordance with Circular Target -->
          <button 
            class="cinema-play-trigger" 
            data-video-id="C7b0TAg0xMU" 
            aria-label="Play Family Tandoncies Trailer"
          >
            <div class="play-circle">
              <svg class="play-triangle-svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,3 20,12 6,21"/>
              </svg>
            </div>
            <span class="play-action-text mono">WATCH TRAILER (2:14)</span>
          </button>
        </div>

        <div class="featured-card-details">
          <div class="featured-meta-strip">
            <span class="meta-tag mono">1h 12m</span>
            <span class="meta-dot">&bull;</span>
            <span class="meta-tag mono">STREAMING IN 190+ COUNTRIES</span>
            <span class="meta-dot">&bull;</span>
            <span class="meta-tag mono highlight-gold">&starf; 4.9 AUDIENCE RATING</span>
          </div>

          <h3 class="featured-title">FAMILY TANDONCIES</h3>
          <p class="featured-synopsis">
            Amit’s breakout worldwide Netflix special dissecting joint-family hierarchies, WhatsApp uncle politics, matrimonial biodatas, and why Indian mothers hold executive veto power over everything.
          </p>

          <div class="featured-actions-row">
            <a 
              href="https://www.netflix.com/title/81077759" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-netflix"
            >
              <span>STREAM ON NETFLIX</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
            <button 
              type="button" 
              class="btn btn-secondary" 
              data-video-id="C7b0TAg0xMU"
            >
              <span>PLAY TRAILER</span>
            </button>
          </div>
        </div>
      </article>

      <!-- Supporting Curated Bits (2 Distinct Compositions) -->
      <div class="supporting-performances-col">
        
        <!-- Supporting Card 1: Masala Sandwich -->
        <article class="supporting-card" data-reveal>
          <div class="supporting-thumbnail-box">
            <img 
              src="${images.material.masalaSandwich}" 
              alt="Amit Tandon in Masala Sandwich Solo Tour" 
              class="supporting-poster"
              width="640" 
              height="360"
              loading="lazy"
            />
            <button 
              class="supporting-play-btn" 
              data-video-id="2WkO1nJ3u1Y" 
              aria-label="Play Masala Sandwich live clip"
            >
              <svg class="sup-play-svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,3 20,12 6,21"/>
              </svg>
            </button>
            <span class="supporting-duration mono">SOLO TOUR</span>
          </div>

          <div class="supporting-content">
            <span class="supporting-eyebrow mono">GLOBAL THEATRE TOUR</span>
            <h4 class="supporting-title">MASALA SANDWICH</h4>
            <p class="supporting-desc">
              Three generations trapped under one roof with infinite unsolicited opinions. Packed auditoriums across London, Dubai, and Sydney.
            </p>
            <div class="supporting-link-row">
              <a href="#tour" class="supporting-action-link">
                <span>VIEW TOUR DATES &rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Supporting Card 2: Paisa Aa Gaya... Class Nahi Aayi -->
        <article class="supporting-card" data-reveal>
          <div class="supporting-thumbnail-box">
            <img 
              src="${images.material.paisaAaGaya}" 
              alt="Amit Tandon: Paisa Aa Gaya Class Nahi Aayi" 
              class="supporting-poster"
              width="640" 
              height="360"
              loading="lazy"
            />
            <button 
              class="supporting-play-btn" 
              data-video-id="C7b0TAg0xMU" 
              aria-label="Play Paisa Aa Gaya live clip"
            >
              <svg class="sup-play-svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,3 20,12 6,21"/>
              </svg>
            </button>
            <span class="supporting-duration mono">18M+ VIEWS</span>
          </div>

          <div class="supporting-content">
            <span class="supporting-eyebrow mono">VIRAL OBSERVATIONAL BIT</span>
            <h4 class="supporting-title">PAISA AA GAYA… CLASS NAHI AAYI!</h4>
            <p class="supporting-desc">
              What happens when middle-class Indian families get unexpected credit card upgrades and discover five-star hotel buffet etiquette.
            </p>
            <div class="supporting-link-row">
              <a 
                href="https://www.youtube.com/@AmitTandonStandUp" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="supporting-action-link"
              >
                <span>WATCH MORE ON YOUTUBE &rarr;</span>
              </a>
            </div>
          </div>
        </article>

      </div>

    </div>

  </div>
</section>`;
}
