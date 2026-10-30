import type { SiteContent } from "../lib/types";
import { svgs } from "../content/svgs";

export function renderCorporate(_site: SiteContent): string {
  const whatsappUrl = "https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20we%20would%20like%20to%20inquire%20about%20a%20corporate%20keynote%20show.";

  return `
<section class="corporate-pop-section" id="corporate" aria-label="Corporate Keynotes and Private Shows">
  <div class="wrap">
    
    <div class="corporate-pop-grid" data-reveal>
      
      <!-- Left Column: Chalkboard Equation -->
      <div class="corp-chalkboard-card tilt-left-sm">
        <div class="corp-title-row">
          <h2 class="display corp-pop-title">
            <span>CORPORATE, </span>
            <span class="highlight-red">BUT MAKE IT FUNNY.</span>
          </h2>
          <div class="corp-doodle-note">
            <span>Less boring people, please.</span>
          </div>
        </div>

        <!-- The Equation -->
        <div class="corp-equation-row">
          <!-- Box 1 -->
          <div class="eq-box">
            <span class="eq-icon">🎓</span>
            <span class="eq-label">ENGINEERING DEGREE</span>
          </div>

          <div class="eq-operator">&times;</div>

          <!-- Box 2 -->
          <div class="eq-box">
            <span class="eq-icon">🪑</span>
            <span class="eq-label">CORPORATE LIFE</span>
          </div>

          <div class="eq-operator">=</div>

          <!-- Box 3 -->
          <div class="eq-box eq-result">
            <span class="eq-icon">📢</span>
            <span class="eq-label">UNFILTERED TRUTHS</span>
          </div>
        </div>

        <!-- Event Types Checklist -->
        <div class="corp-features-list">
          <span class="corp-tag-check"><span class="check-mark">&#10003;</span> LEADERSHIP SUMMITS</span>
          <span class="corp-tag-check"><span class="check-mark">&#10003;</span> OFFSITE RETREATS</span>
          <span class="corp-tag-check"><span class="check-mark">&#10003;</span> TEAM EVENTS</span>
          <span class="corp-tag-check"><span class="check-mark">&#10003;</span> CUSTOM SESSIONS</span>
        </div>
      </div>

      <!-- Right Column: Vintage Red Rotary Telephone Hotline -->
      <div class="corp-phone-card tilt-right-sm">
        <div class="corp-coiled-cord-wrap">
          ${svgs.coiledCord}
        </div>
        <a 
          href="${whatsappUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="phone-hotline-link"
          aria-label="Book Corporate Show via WhatsApp Hotline"
        >
          <div class="phone-wrapper-interactive">
            ${svgs.redRotaryPhone}
            
            <div class="phone-handset-plaque">
              <span class="plaque-sub">CLICK TO INQUIRE</span>
              <span class="plaque-main">BOOK A CORPORATE SHOW</span>
            </div>
          </div>

          <div class="phone-number-badge">
            <span class="phone-icon-tel">&#9742;</span>
            <span class="phone-digits">+91 9004040003</span>
          </div>
        </a>
      </div>

    </div>

  </div>
</section>`;
}
