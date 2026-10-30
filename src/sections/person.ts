import type { SiteContent } from "../lib/types";
import { images } from "../content/images";

export function renderPerson(site: SiteContent): string {
  const credits = site.about.credits
    .map(
      (c) => `
      <div class="bio-credit-item" data-reveal>
        <span class="credit-platform">${c.label}</span>
        <p class="credit-detail">${c.value}</p>
      </div>`
    )
    .join("");

  return `
<section class="about-section" id="about" aria-label="About Amit Tandon">
  <div class="wrap">
    <div class="about-hero-banner" data-reveal>
      <img src="${images.aboutBanner}" alt="Amit Tandon smiling on stage" width="1600" height="600" loading="lazy" />
      <div class="about-hero-gradient"></div>
      <div class="about-hero-text">
        <div class="chapter-tag" style="color:#fca5a5">Biography & Roots</div>
        <h2 class="display about-head-title">From IIT Delhi to Global Stages</h2>
        <p class="about-head-sub">${site.about.journeyLine}</p>
      </div>
    </div>

    <div class="about-body-grid">
      <div class="about-narrative" data-reveal>
        <h3 class="display narrative-title">Finding the Joke in the Everyday</h3>
        <p class="narrative-p">
          Amit Tandon pioneered clean, middle-class observational stand-up comedy in India. Before taking the stage full-time, he earned his degree in Mechanical Engineering, completed his MBA from IIT Delhi, and spent over a decade running successful corporate recruitment startups.
        </p>
        <p class="narrative-p">
          His comedy deliberately avoids shock humor, vulgarity, or partisan rage. Instead, he zeroes in on the hilarious contradictions of married life, parenting teenage children, navigating Indian relatives, and the cultural absurdities that emerge when middle-class households get upgraded.
        </p>
        <p class="narrative-p">
          Today, with over 200 million YouTube views and 2,000+ live shows across 30+ countries, multi-generational families—from teenagers to grandparents—pack his shows together worldwide.
        </p>

        <div class="about-social-row">
          <a class="social-pill" href="${site.social.youtube}" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube (2M+)</span>
          </a>
          <a class="social-pill" href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>Instagram (@amitandon17)</span>
          </a>
          <a class="social-pill" href="${site.social.x}" target="_blank" rel="noopener noreferrer">
            <span>X / Twitter</span>
          </a>
        </div>
      </div>

      <div class="about-credits-column" data-reveal>
        <div class="credits-box">
          <h4 class="credits-box-title">Creative Milestones</h4>
          <div class="credits-list">
            ${credits}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
