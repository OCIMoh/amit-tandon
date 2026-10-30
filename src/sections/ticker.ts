export function renderTicker(): string {
  const items = [
    `▶ 200M+ VIEWS`,
    `🌐 30+ COUNTRIES`,
    `🎫 2,000+ SHOWS`,
    `👨‍👩‍👧‍👦 NO UNCLE WAS HARMED`,
    `📺 #1 NETFLIX INDIA`,
    `💥 CLEAN COMEDY • EXTRA MASALA`,
    `🎙️ GLOBAL TOUR 2026 LIVE`
  ];

  const content = items.map(item => `
    <span class="ticker-item">${item}</span>
    <span class="ticker-star">★</span>
  `).join("");

  return `
<div class="hazard-ticker" role="region" aria-label="Quick Highlights Ticker">
  <div class="ticker-track">
    <div class="ticker-inner">
      ${content}
      ${content}
    </div>
  </div>
</div>`;
}
