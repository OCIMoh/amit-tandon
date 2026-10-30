import type { MaterialItem } from "../lib/types";
import { images, materialImageByTitle } from "../content/images";
import siteJson from "../../data/site.json";

function getYouTubeId(url: string): string {
  const match = url.match(/[?&]v=([^&#]+)/);
  return match ? match[1] : "C7b0TAg0xMU";
}

function imgFor(item: MaterialItem): string {
  return item.image || materialImageByTitle[item.title] || images.material.familyTandoncies;
}

export function renderContradictions(items: MaterialItem[]): string {
  const featured = items.find((i) => i.role === "featured") || items[0];
  const listItems = items.filter((i) => i.title !== featured.title);

  const videoCardsHtml = listItems
    .map((item) => {
      const ytId = getYouTubeId(item.href);
      return `
      <div class="video-catalog-card" data-reveal>
        <div class="card-thumb-wrap">
          <img src="${imgFor(item)}" alt="${item.title}" loading="lazy" width="640" height="360" />
          <button class="cinema-play-btn" data-video-id="${ytId}" aria-label="Watch ${item.title}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <span class="platform-badge">${item.platform}</span>
        </div>
        <div class="card-info">
          <h4 class="card-title">${item.title}</h4>
          <p class="card-note">${item.note || "Stand-up comedy special segment"}</p>
          <button class="btn-text-watch" data-video-id="${ytId}">
            <span>Watch in Cinema</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>`;
    })
    .join("");

  const gyanBitesHtml = (siteJson.gyanBites || [])
    .map(
      (gb, idx) => `
      <div class="gyan-card" data-reveal>
        <span class="gyan-quote-mark">“</span>
        <p class="gyan-text">${gb.quote}</p>
        <div class="gyan-meta">
          <span class="gyan-context">${gb.context}</span>
          <span class="gyan-index">0${idx + 1}</span>
        </div>
      </div>`
    )
    .join("");

  const featuredYtId = getYouTubeId(featured.href);

  return `
<section class="material-section" id="material" aria-label="Comedy Specials and Material">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <div class="chapter-tag">Specials & Catalogue</div>
      <h2 class="display section-title">Comedy Crafted for the Mind</h2>
      <p class="section-sub">Deconstructing domestic contradictions across marriage, generational friction, and modern wealth.</p>
    </div>

    <!-- Featured Special Showcase -->
    <div class="featured-special-hero" data-reveal>
      <div class="f-media-wrap">
        <img src="${imgFor(featured)}" alt="${featured.title} on Netflix" width="1280" height="720" />
        <button class="hero-cinema-play" data-video-id="${featuredYtId}" aria-label="Play ${featured.title}">
          <div class="play-pulse-ring"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="f-content">
        <div class="f-eyebrow">
          <span class="netflix-red">Netflix Solo Special</span>
          <span class="f-record">Top 10 India for 15 Days</span>
        </div>
        <h3 class="f-title">${featured.title}</h3>
        <p class="f-desc">
          The first-ever Hindi stand-up solo special on Netflix. A masterclass in domestic observational humor exploring how modern middle-class family logic frays the moment anyone inspects it.
        </p>
        <div class="f-actions">
          <button class="btn btn-primary" data-video-id="${featuredYtId}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <span>Watch Trailer in Cinema</span>
          </button>
          <a class="btn btn-secondary" href="https://www.netflix.com/title/81077759" target="_blank" rel="noopener noreferrer">
            <span>Stream on Netflix →</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Comedy Clips Catalog -->
    <div class="video-grid">
      ${videoCardsHtml}
    </div>

    <!-- Gyan Bites Section -->
    <div class="gyan-bites-container" id="gyan">
      <div class="section-head" data-reveal>
        <div class="chapter-tag">Gyan Bites</div>
        <h3 class="display section-title" style="font-size: clamp(2rem, 4vw, 3rem)">Domestic Observations in a Sentence</h3>
        <p class="section-sub">Memorable one-liners from 15 years of watching human behavior.</p>
      </div>
      <div class="gyan-grid">
        ${gyanBitesHtml}
      </div>
    </div>
  </div>
</section>`;
}
