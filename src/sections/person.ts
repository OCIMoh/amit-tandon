import type { SiteContent } from "../lib/types";
import { images } from "../content/images";

export function renderPerson(site: SiteContent): string {
  const credits = site.about.credits
    .map(
      (c) => `
      <div class="bio-credit-item">
        <span class="credit-platform mono">${c.label}</span>
        <p class="credit-detail">${c.value}</p>
      </div>`
    )
    .join("");

  return `
<section class="about-editorial-section" id="about" aria-label="About Amit Tandon - The Person Behind the Comedy">
  <div class="wrap">
    
    <!-- Section Header -->
    <div class="about-header" data-reveal>
      <div class="section-eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="mono">BIOGRAPHY & STORYTELLING · THE PERSON BEHIND THE COMEDY</span>
      </div>
      <div class="about-title-row">
        <h2 class="display about-main-title">
          <span>THE PERSON </span>
          <span class="highlight-red">BEHIND THE COMEDY.</span>
        </h2>
        <p class="about-lead-copy">
          Before packing auditoriums in London, Dubai, and Sydney, Amit spent 15 years in boardrooms, engineering labs, and the quiet absurdities of middle-class domestic life.
        </p>
      </div>
    </div>

    <!-- 2-Column Editorial Story Grid -->
    <div class="about-story-grid">
      
      <!-- Left Column: 5 Narrative Chapters -->
      <div class="about-narrative-col" data-reveal>
        
        <!-- Chapter 1 -->
        <article class="story-chapter-card">
          <span class="chapter-num mono">CHAPTER 01</span>
          <h3 class="chapter-title">The Engineering & Boardroom Years</h3>
          <p class="chapter-body">
            Armed with a degree in Mechanical Engineering and an MBA from IIT Delhi, Amit spent over a decade climbing corporate ranks, eventually serving as a corporate Vice President and launching successful executive recruitment ventures. He knows boardroom diplomacy because he lived it.
          </p>
        </article>

        <!-- Chapter 2 -->
        <article class="story-chapter-card">
          <span class="chapter-num mono">CHAPTER 02</span>
          <h3 class="chapter-title">The Everyday Observations</h3>
          <p class="chapter-body">
            While corporate meetings were about quarterly projections, real life was happening in joint-family WhatsApp groups, Sharma Ji comparisons, and the unsolvable mysteries of marriage. He began jotting down observations about ordinary domestic interactions that everyone experienced but nobody spoke aloud.
          </p>
        </article>

        <!-- Chapter 3 -->
        <article class="story-chapter-card">
          <span class="chapter-num mono">CHAPTER 03</span>
          <h3 class="chapter-title">The First Open Mic</h3>
          <p class="chapter-body">
            In his mid-30s, Amit stepped onto Delhi’s comedy club stages. Unlike the aggressive, shock-driven humor popular at the time, Amit spoke about parenting teenagers, buying vegetables with his wife, and middle-class frugality. Audiences laughed not at the absurdity of the performer, but at the reflection of their own living rooms.
          </p>
        </article>

        <!-- Chapter 4 -->
        <article class="story-chapter-card">
          <span class="chapter-num mono">CHAPTER 04</span>
          <h3 class="chapter-title">The Domestic Core: Clean Comedy</h3>
          <p class="chapter-body">
            Amit pioneered clean observational comedy in India. His shows became rare cultural events where three generations—teenagers, parents, and grandparents—could sit side-by-side without anyone feeling embarrassed. Clean comedy wasn’t a restriction; it was his superpower.
          </p>
        </article>

        <!-- Chapter 5 -->
        <article class="story-chapter-card">
          <span class="chapter-num mono">CHAPTER 05</span>
          <h3 class="chapter-title">The World Stage</h3>
          <p class="chapter-body">
            Today, with over 200 Million online views, 2,000+ live shows across 30+ countries, and a breakout worldwide Netflix Original special (<em>Family Tandoncies</em>), Amit continues touring globally with his hit solo tour <em>Aise Kaise</em>.
          </p>
        </article>

      </div>

      <!-- Right Column: Visual Anchor & Verified Milestones -->
      <div class="about-visual-col" data-reveal>
        <div class="about-portrait-frame">
          <img 
            src="${images.aboutBanner}" 
            alt="Amit Tandon smiling on stage" 
            class="about-portrait-img"
            width="800" 
            height="500"
            loading="lazy"
          />
          <div class="about-portrait-overlay" aria-hidden="true"></div>
          <div class="about-portrait-caption">
            <span class="caption-quote editorial-italic">“If you can make a family laugh together in the same room, you've done something meaningful.”</span>
            <span class="caption-author mono">— AMIT TANDON</span>
          </div>
        </div>

        <!-- Verified Milestones Box -->
        <div class="about-milestones-box">
          <span class="milestones-heading mono">VERIFIED CAREER MILESTONES</span>
          <div class="milestones-list">
            ${credits}
          </div>
        </div>

        <!-- Social Connect Row -->
        <div class="about-social-strip">
          <a class="social-btn" href="${site.social.youtube}" target="_blank" rel="noopener noreferrer">
            <span>YouTube (2M+)</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
          <a class="social-btn" href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">
            <span>Instagram (@amitandon17)</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
          <a class="social-btn" href="${site.social.x}" target="_blank" rel="noopener noreferrer">
            <span>X / Twitter</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>`;
}
