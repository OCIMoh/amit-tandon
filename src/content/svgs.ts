/**
 * Vector SVG illustrations and icons for the Neo-Brutalist Pop-Art Website (Image 1)
 */

export const svgs = {
  // Yellow cartoon crown doodle for headline
  crown: `
    <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-crown">
      <path d="M4 38L10 10L26 26L32 6L42 26L54 10L60 38H4Z" fill="#FFE500" stroke="#0C0B0E" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="10" cy="10" r="3" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="1.5"/>
      <circle cx="32" cy="6" r="3" fill="#00F0FF" stroke="#0C0B0E" stroke-width="1.5"/>
      <circle cx="54" cy="10" r="3" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="1.5"/>
      <circle cx="20" cy="34" r="2" fill="#0C0B0E"/>
      <circle cx="32" cy="34" r="2" fill="#0C0B0E"/>
      <circle cx="44" cy="34" r="2" fill="#0C0B0E"/>
    </svg>
  `,

  // Large Whistling Pressure Cooker with multi-color neon steam
  pressureCooker: `
    <div class="cooker-container">
      <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="cooker-svg">
        <!-- Multi-Color Steam plumes -->
        <g class="steam-plumes">
          <path d="M68 28C60 14 74 4 68 -8" stroke="#00F0FF" stroke-width="4.5" stroke-linecap="round" fill="none" class="steam-cyan-1"/>
          <path d="M78 30C86 16 76 6 84 -4" stroke="#FF007A" stroke-width="4.5" stroke-linecap="round" fill="none" class="steam-pink"/>
          <path d="M88 28C96 14 88 2 98 -10" stroke="#FFE500" stroke-width="4" stroke-linecap="round" fill="none" class="steam-yellow"/>
          <circle cx="70" cy="-14" r="3" fill="#00F0FF" class="steam-dot-1"/>
          <circle cx="86" cy="-12" r="3.5" fill="#FF007A" class="steam-dot-2"/>
          <circle cx="102" cy="-16" r="2.5" fill="#FFE500" class="steam-dot-3"/>
        </g>
        <!-- Cooker Body -->
        <rect x="25" y="52" width="105" height="68" rx="10" fill="#E4E3DD" stroke="#0C0B0E" stroke-width="4"/>
        <rect x="38" y="52" width="24" height="68" fill="#F6F3EB" fill-opacity="0.75"/>
        <line x1="28" y1="110" x2="128" y2="110" stroke="#0C0B0E" stroke-width="3"/>
        <!-- Lid -->
        <path d="M22 52C22 40 42 36 78 36C114 36 134 40 134 52H22Z" fill="#C5C4BE" stroke="#0C0B0E" stroke-width="4"/>
        <!-- Whistle / Vent Weight -->
        <rect x="71" y="20" width="14" height="18" rx="3" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="3.5"/>
        <line x1="78" y1="12" x2="78" y2="20" stroke="#0C0B0E" stroke-width="3.5"/>
        <!-- Main Handle -->
        <path d="M130 42H170C173 42 175 44 175 47V51C175 54 173 56 170 56H130" fill="#18171B" stroke="#0C0B0E" stroke-width="4"/>
        <!-- Side knob -->
        <rect x="5" y="60" width="22" height="12" rx="4" fill="#18171B" stroke="#0C0B0E" stroke-width="3.5"/>
      </svg>
    </div>
  `,

  // Comic Starburst Bubble (AISE KAISE?!)
  comicBurstBubble: `
    <div class="burst-bubble-wrap">
      <svg viewBox="0 0 160 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="burst-svg">
        <path d="M12 40L2 28L18 24L12 8L30 14L40 2L55 16L75 2L85 16L108 4L114 18L135 10L135 26L155 30L145 44L158 58L140 64L144 80L126 72L116 84L100 72L86 84L76 70L54 82L50 68L30 76L32 60L16 60L20 46L6 42Z" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="3.5" stroke-linejoin="round"/>
      </svg>
      <span class="burst-bubble-label">AISE KAISE?!</span>
    </div>
  `,

  // Thought Cloud Bubble (HUH?)
  thoughtCloudBubble: `
    <div class="cloud-bubble-wrap">
      <svg viewBox="0 0 100 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="cloud-svg">
        <path d="M22 45C14 45 8 38 8 30C8 22 15 16 23 16C26 8 36 4 46 4C58 4 68 11 72 20C80 20 88 26 88 34C88 42 81 48 72 48H22Z" fill="#00F0FF" stroke="#0C0B0E" stroke-width="3.5"/>
        <circle cx="20" cy="54" r="4" fill="#00F0FF" stroke="#0C0B0E" stroke-width="2.5"/>
        <circle cx="14" cy="60" r="2.5" fill="#00F0FF" stroke="#0C0B0E" stroke-width="2"/>
      </svg>
      <span class="cloud-bubble-label">HUH?</span>
    </div>
  `,

  // Comic Oval Bubble (WHY?)
  comicOvalBubble: `
    <div class="oval-bubble-wrap">
      <svg viewBox="0 0 90 55" fill="none" xmlns="http://www.w3.org/2000/svg" class="oval-svg">
        <ellipse cx="45" cy="26" rx="38" ry="20" fill="#FFE500" stroke="#0C0B0E" stroke-width="3.5"/>
        <path d="M25 40L16 52L32 44" fill="#FFE500" stroke="#0C0B0E" stroke-width="3"/>
      </svg>
      <span class="oval-bubble-label">WHY?</span>
    </div>
  `,

  // Cartoon Wife Face (Slot Machine Reel 1)
  cartoonWife: `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="reel-illustration-svg">
      <!-- Hair -->
      <circle cx="40" cy="38" r="28" fill="#18171B" stroke="#0C0B0E" stroke-width="2.5"/>
      <!-- Face -->
      <circle cx="40" cy="42" r="20" fill="#FFDFC4" stroke="#0C0B0E" stroke-width="2.5"/>
      <!-- Glasses -->
      <circle cx="33" cy="40" r="6" fill="#00F0FF" fill-opacity="0.3" stroke="#0C0B0E" stroke-width="2"/>
      <circle cx="47" cy="40" r="6" fill="#00F0FF" fill-opacity="0.3" stroke="#0C0B0E" stroke-width="2"/>
      <line x1="39" y1="40" x2="41" y2="40" stroke="#0C0B0E" stroke-width="2"/>
      <!-- Bindi -->
      <circle cx="40" cy="33" r="1.8" fill="#FF3B1D"/>
      <!-- Smile -->
      <path d="M35 49C37 53 43 53 45 49" stroke="#0C0B0E" stroke-width="2" stroke-linecap="round"/>
      <!-- Saree drape -->
      <path d="M24 62C24 55 32 54 40 54C48 54 56 55 56 62V72H24V62Z" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="2.5"/>
    </svg>
  `,

  // Cartoon Sharma Ji (Slot Machine Reel 1)
  cartoonSharmaJi: `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="reel-illustration-svg">
      <!-- Hair white/gray -->
      <path d="M20 40C20 25 30 18 40 18C50 18 60 25 60 40" stroke="#0C0B0E" stroke-width="2.5" fill="#E4E3DD"/>
      <!-- Face -->
      <circle cx="40" cy="42" r="20" fill="#F4D0B8" stroke="#0C0B0E" stroke-width="2.5"/>
      <!-- Glasses -->
      <rect x="27" y="36" width="10" height="8" rx="2" fill="#0C0B0E" fill-opacity="0.1" stroke="#0C0B0E" stroke-width="2"/>
      <rect x="43" y="36" width="10" height="8" rx="2" fill="#0C0B0E" fill-opacity="0.1" stroke="#0C0B0E" stroke-width="2"/>
      <line x1="37" y1="40" x2="43" y2="40" stroke="#0C0B0E" stroke-width="2"/>
      <!-- Mustache -->
      <path d="M32 48C36 46 38 48 40 48C42 48 44 46 48 48C44 51 36 51 32 48Z" fill="#0C0B0E"/>
      <!-- Nehru Jacket -->
      <path d="M22 62C22 55 30 54 40 54C50 54 58 55 58 62V72H22V62Z" fill="#FFE500" stroke="#0C0B0E" stroke-width="2.5"/>
    </svg>
  `,

  // Stack of 4 Suitcases (Slot Machine Reel 2)
  cartoonSuitcases: `
    <svg viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="reel-illustration-svg">
      <!-- Bottom Suitcase 1 (Red) -->
      <rect x="8" y="58" width="74" height="20" rx="3" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="2.5"/>
      <line x1="22" y1="58" x2="22" y2="78" stroke="#0C0B0E" stroke-width="1.8"/>
      <line x1="68" y1="58" x2="68" y2="78" stroke="#0C0B0E" stroke-width="1.8"/>
      <!-- Suitcase 2 (Cyan) -->
      <rect x="14" y="42" width="62" height="18" rx="3" fill="#00F0FF" stroke="#0C0B0E" stroke-width="2.5"/>
      <line x1="28" y1="42" x2="28" y2="60" stroke="#0C0B0E" stroke-width="1.8"/>
      <line x1="62" y1="42" x2="62" y2="60" stroke="#0C0B0E" stroke-width="1.8"/>
      <!-- Suitcase 3 (Yellow) -->
      <rect x="20" y="28" width="50" height="16" rx="3" fill="#FFE500" stroke="#0C0B0E" stroke-width="2.5"/>
      <!-- Vanity Bag on top (Magenta) -->
      <rect x="28" y="14" width="34" height="16" rx="4" fill="#FF007A" stroke="#0C0B0E" stroke-width="2.5"/>
      <path d="M38 14V8C38 6 40 5 45 5C50 5 52 6 52 8V14" stroke="#0C0B0E" stroke-width="2"/>
      <!-- Luggage Tag -->
      <rect x="66" y="22" width="8" height="14" rx="1" fill="#FFFFFF" stroke="#0C0B0E" stroke-width="1.5"/>
    </svg>
  `,

  // London Landmark (Big Ben / Westminster)
  bigBen: `
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="landmark-svg">
      <path d="M42 10L50 2L58 10V22H42V10Z" fill="#0C0B0E"/>
      <rect x="40" y="22" width="20" height="14" fill="#FFE500" stroke="#0C0B0E" stroke-width="2"/>
      <circle cx="50" cy="29" r="4" fill="#FFFFFF" stroke="#0C0B0E" stroke-width="1.5"/>
      <rect x="36" y="36" width="28" height="60" fill="#0C0B0E" fill-opacity="0.1" stroke="#0C0B0E" stroke-width="2"/>
      <line x1="42" y1="42" x2="42" y2="90" stroke="#0C0B0E" stroke-width="1.5"/>
      <line x1="50" y1="42" x2="50" y2="90" stroke="#0C0B0E" stroke-width="1.5"/>
      <line x1="58" y1="42" x2="58" y2="90" stroke="#0C0B0E" stroke-width="1.5"/>
      <path d="M10 80H36V100H4V84C4 82 6 80 10 80Z" fill="#0C0B0E" fill-opacity="0.15" stroke="#0C0B0E" stroke-width="2"/>
      <path d="M64 80H90C94 80 96 82 96 84V100H64V80Z" fill="#0C0B0E" fill-opacity="0.15" stroke="#0C0B0E" stroke-width="2"/>
      <line x1="2" y1="100" x2="98" y2="100" stroke="#0C0B0E" stroke-width="3"/>
    </svg>
  `,

  // Mumbai Landmark (Gateway of India)
  gatewayOfIndia: `
    <svg viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="landmark-svg">
      <path d="M20 85V35L26 28H84L90 35V85" stroke="#0C0B0E" stroke-width="2.5" fill="#E4E3DD"/>
      <path d="M38 28C38 18 45 10 55 10C65 10 72 18 72 28H38Z" fill="#0C0B0E"/>
      <line x1="55" y1="4" x2="55" y2="10" stroke="#0C0B0E" stroke-width="2"/>
      <rect x="14" y="24" width="10" height="61" fill="#C5C4BE" stroke="#0C0B0E" stroke-width="2"/>
      <rect x="86" y="24" width="10" height="61" fill="#C5C4BE" stroke="#0C0B0E" stroke-width="2"/>
      <path d="M40 85V54C40 46 47 40 55 40C63 40 70 46 70 54V85H40Z" fill="#0C0B0E"/>
      <line x1="8" y1="85" x2="102" y2="85" stroke="#0C0B0E" stroke-width="3"/>
    </svg>
  `,

  // Dubai Landmark (Burj Al Arab)
  burjAlArab: `
    <svg viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg" class="landmark-svg">
      <line x1="45" y1="6" x2="45" y2="20" stroke="#0C0B0E" stroke-width="2.5"/>
      <path d="M45 20C45 20 20 45 20 85C20 98 28 102 45 102" stroke="#0C0B0E" stroke-width="2.5" fill="#00F0FF" fill-opacity="0.3"/>
      <line x1="45" y1="20" x2="45" y2="102" stroke="#0C0B0E" stroke-width="3"/>
      <line x1="26" y1="50" x2="45" y2="44" stroke="#0C0B0E" stroke-width="1.8"/>
      <line x1="21" y1="70" x2="45" y2="64" stroke="#0C0B0E" stroke-width="1.8"/>
      <line x1="22" y1="90" x2="45" y2="84" stroke="#0C0B0E" stroke-width="1.8"/>
      <line x1="45" y1="40" x2="65" y2="40" stroke="#0C0B0E" stroke-width="2.5"/>
      <circle cx="65" cy="40" r="3" fill="#FFE500" stroke="#0C0B0E" stroke-width="1.5"/>
      <line x1="12" y1="102" x2="78" y2="102" stroke="#0C0B0E" stroke-width="3"/>
    </svg>
  `,

  // Sydney Landmark (Sydney Opera House)
  sydneyOpera: `
    <svg viewBox="0 0 110 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="landmark-svg">
      <path d="M15 70C20 40 42 20 52 20C48 38 42 60 40 70H15Z" fill="#FFFFFF" stroke="#0C0B0E" stroke-width="2.5"/>
      <path d="M38 70C44 44 65 28 74 28C70 44 65 62 62 70H38Z" fill="#FFE500" stroke="#0C0B0E" stroke-width="2.5"/>
      <path d="M60 70C65 52 82 40 90 40C86 52 82 65 80 70H60Z" fill="#FFFFFF" stroke="#0C0B0E" stroke-width="2.2"/>
      <line x1="8" y1="70" x2="102" y2="70" stroke="#0C0B0E" stroke-width="3"/>
      <path d="M10 74H100" stroke="#0C0B0E" stroke-width="1.5" stroke-dasharray="4 3"/>
    </svg>
  `,

  // Scannable barcode SVG
  barcode: `
    <svg viewBox="0 0 80 34" fill="#0C0B0E" xmlns="http://www.w3.org/2000/svg" class="barcode-svg">
      <rect x="2" y="0" width="3" height="34"/>
      <rect x="7" y="0" width="1.5" height="34"/>
      <rect x="11" y="0" width="4" height="34"/>
      <rect x="18" y="0" width="2" height="34"/>
      <rect x="23" y="0" width="5" height="34"/>
      <rect x="31" y="0" width="1.5" height="34"/>
      <rect x="35" y="0" width="3" height="34"/>
      <rect x="41" y="0" width="6" height="34"/>
      <rect x="50" y="0" width="2" height="34"/>
      <rect x="54" y="0" width="4" height="34"/>
      <rect x="61" y="0" width="1.5" height="34"/>
      <rect x="65" y="0" width="5" height="34"/>
      <rect x="73" y="0" width="3" height="34"/>
    </svg>
  `,

  // Retro Red Rotary Phone
  redRotaryPhone: `
    <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="phone-svg">
      <g class="phone-handset">
        <path d="M25 42C25 30 40 22 80 22C120 22 135 30 135 42C135 48 126 50 115 46C105 42 98 38 80 38C62 38 55 42 45 46C34 50 25 48 25 42Z" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="3.5"/>
        <rect x="18" y="36" width="22" height="26" rx="6" fill="#CC280F" stroke="#0C0B0E" stroke-width="3"/>
        <rect x="120" y="36" width="22" height="26" rx="6" fill="#CC280F" stroke="#0C0B0E" stroke-width="3"/>
      </g>
      <path d="M40 58H120L135 118C135 124 130 128 124 128H36C30 128 25 124 25 118L40 58Z" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="3.5"/>
      <circle cx="80" cy="94" r="26" fill="#F6F3EB" stroke="#0C0B0E" stroke-width="3"/>
      <circle cx="80" cy="94" r="10" fill="#E4E3DD" stroke="#0C0B0E" stroke-width="2"/>
      <circle cx="80" cy="74" r="3.5" fill="#0C0B0E"/>
      <circle cx="93" cy="78" r="3.5" fill="#0C0B0E"/>
      <circle cx="100" cy="90" r="3.5" fill="#0C0B0E"/>
      <circle cx="97" cy="103" r="3.5" fill="#0C0B0E"/>
      <circle cx="87" cy="112" r="3.5" fill="#0C0B0E"/>
      <circle cx="73" cy="112" r="3.5" fill="#0C0B0E"/>
      <circle cx="63" cy="103" r="3.5" fill="#0C0B0E"/>
      <circle cx="60" cy="90" r="3.5" fill="#0C0B0E"/>
      <circle cx="67" cy="78" r="3.5" fill="#0C0B0E"/>
      <path d="M72 114L80 110" stroke="#C5C4BE" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 115C18 120 10 130 16 136C22 142 32 136 28 128" stroke="#0C0B0E" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Slot machine pull lever with glossy 3D red ball
  slotLever: `
    <svg viewBox="0 0 50 110" fill="none" xmlns="http://www.w3.org/2000/svg" class="lever-svg">
      <rect x="4" y="75" width="22" height="28" rx="4" fill="#0C0B0E" stroke="#E4E3DD" stroke-width="2"/>
      <line x1="15" y1="80" x2="32" y2="28" stroke="#E4E3DD" stroke-width="7" stroke-linecap="round"/>
      <line x1="15" y1="80" x2="32" y2="28" stroke="#0C0B0E" stroke-width="2" stroke-linecap="round"/>
      <circle cx="35" cy="22" r="18" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="3"/>
      <circle cx="29" cy="16" r="6" fill="#FFA595"/>
      <circle cx="27" cy="14" r="2.5" fill="#FFFFFF"/>
    </svg>
  `,

  // Hero stage bottom audience applause silhouette
  audienceSilhouette: `
    <svg viewBox="0 0 1200 80" fill="#0C0B0E" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="audience-svg">
      <path d="M0 80V50C20 48 35 32 45 42C55 52 70 38 85 45C100 52 110 30 125 38C140 46 155 35 170 42C185 50 195 36 210 40C225 44 235 24 250 32C265 40 280 28 295 38C310 48 325 34 340 40C355 46 365 20 380 30C395 40 410 32 425 42C440 52 455 36 470 44C485 52 495 28 510 36C525 44 540 32 555 40C570 48 585 24 600 32C615 40 630 30 645 38C660 46 675 22 690 32C705 42 720 34 735 44C750 54 765 26 780 34C795 42 810 30 825 40C840 50 855 24 870 34C885 44 900 32 915 42C930 52 945 28 960 36C975 44 990 34 1005 42C1020 50 1035 26 1050 34C1065 42 1080 32 1095 40C1110 48 1125 24 1140 32C1155 40 1175 36 1200 48V80H0Z"/>
      <path d="M75 45L80 18L86 19L83 45" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M245 36L252 12L258 14L254 36" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M375 34L382 8L388 10L384 34" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M505 40L512 14L518 16L514 40" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M685 36L692 10L698 12L694 36" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M865 38L872 14L878 16L874 38" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
      <path d="M1045 38L1052 12L1058 14L1054 38" stroke="#0C0B0E" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,

  // 3D Bombay Masala Toast Sandwich wrapped in printed newsprint paper
  masalaSandwichGraphic: `
    <div class="sandwich-graphic-container">
      <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="sandwich-svg">
        <ellipse cx="120" cy="148" rx="90" ry="10" fill="#0C0B0E" fill-opacity="0.3"/>
        <path d="M25 110L40 145L195 145L215 110L200 90L170 115L120 100L70 120L25 110Z" fill="#F6F3EB" stroke="#0C0B0E" stroke-width="3"/>
        <line x1="50" y1="125" x2="85" y2="125" stroke="#0C0B0E" stroke-width="2"/>
        <line x1="50" y1="130" x2="105" y2="130" stroke="#0C0B0E" stroke-width="1.5"/>
        <line x1="50" y1="135" x2="95" y2="135" stroke="#0C0B0E" stroke-width="1.5"/>
        <line x1="120" y1="122" x2="180" y2="122" stroke="#0C0B0E" stroke-width="2.5"/>
        <line x1="120" y1="128" x2="175" y2="128" stroke="#0C0B0E" stroke-width="1.5"/>
        <line x1="120" y1="134" x2="185" y2="134" stroke="#0C0B0E" stroke-width="1.5"/>
        <polygon points="35,88 205,88 190,102 20,102" fill="#D49B4B" stroke="#0C0B0E" stroke-width="3"/>
        <polygon points="28,82 198,82 205,88 35,88" fill="#FFE500" stroke="#0C0B0E" stroke-width="2"/>
        <path d="M30 84C45 88 60 81 75 85C90 89 110 82 130 86C150 90 170 83 195 85" stroke="#22C55E" stroke-width="3.5" stroke-linecap="round"/>
        <polygon points="32,74 202,74 198,82 28,82" fill="#E8B872" stroke="#0C0B0E" stroke-width="3"/>
        <polygon points="30,68 200,68 202,74 32,74" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="2"/>
        <circle cx="55" cy="70" r="5" fill="#86EFAC" stroke="#0C0B0E" stroke-width="1.5"/>
        <circle cx="95" cy="70" r="5" fill="#86EFAC" stroke="#0C0B0E" stroke-width="1.5"/>
        <circle cx="135" cy="70" r="5" fill="#86EFAC" stroke="#0C0B0E" stroke-width="1.5"/>
        <circle cx="175" cy="70" r="5" fill="#86EFAC" stroke="#0C0B0E" stroke-width="1.5"/>
        <path d="M42 68C42 75 48 78 50 72C52 68 58 76 62 70C65 67 72 77 75 69" fill="#FFF9C4" stroke="#0C0B0E" stroke-width="2"/>
        <path d="M120 68C120 76 128 78 130 71C132 67 138 77 142 69" fill="#FFF9C4" stroke="#0C0B0E" stroke-width="2"/>
        <polygon points="38,50 208,50 200,68 30,68" fill="#FBBF24" stroke="#0C0B0E" stroke-width="3.5"/>
        <line x1="60" y1="52" x2="80" y2="66" stroke="#92400E" stroke-width="2.5"/>
        <line x1="85" y1="52" x2="105" y2="66" stroke="#92400E" stroke-width="2.5"/>
        <line x1="110" y1="52" x2="130" y2="66" stroke="#92400E" stroke-width="2.5"/>
        <line x1="135" y1="52" x2="155" y2="66" stroke="#92400E" stroke-width="2.5"/>
        <line x1="160" y1="52" x2="180" y2="66" stroke="#92400E" stroke-width="2.5"/>
        <line x1="75" y1="66" x2="95" y2="52" stroke="#92400E" stroke-width="2.5"/>
        <line x1="100" y1="66" x2="120" y2="52" stroke="#92400E" stroke-width="2.5"/>
        <line x1="125" y1="66" x2="145" y2="52" stroke="#92400E" stroke-width="2.5"/>
        <line x1="150" y1="66" x2="170" y2="52" stroke="#92400E" stroke-width="2.5"/>
        <line x1="70" y1="24" x2="80" y2="54" stroke="#0C0B0E" stroke-width="2.5"/>
        <circle cx="70" cy="24" r="5" fill="#FF3B1D" stroke="#0C0B0E" stroke-width="2"/>
        <line x1="160" y1="24" x2="150" y2="54" stroke="#0C0B0E" stroke-width="2.5"/>
        <circle cx="160" cy="24" r="5" fill="#00F0FF" stroke="#0C0B0E" stroke-width="2"/>
      </svg>
    </div>
  `,

  // Coiled telephone cord connecting the rotary phone
  coiledCord: `
    <svg viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="phone-cord-svg">
      <path d="M10 35C15 15 25 15 25 35C25 55 35 55 35 35C35 15 45 15 45 35C45 55 55 55 55 35C55 15 65 15 65 35C65 55 75 55 75 35C75 15 85 15 85 35C85 55 95 55 95 35C95 15 105 15 105 35C105 55 115 55 115 35C115 15 125 15 125 35" stroke="#0C0B0E" stroke-width="5" stroke-linecap="round"/>
      <path d="M10 35C15 15 25 15 25 35C25 55 35 55 35 35C35 15 45 15 45 35C45 55 55 55 55 35C55 15 65 15 65 35C65 55 75 55 75 35C75 15 85 15 85 35C85 55 95 55 95 35C95 15 105 15 105 35C105 55 115 55 115 35C115 15 125 15 125 35" stroke="#3C3A44" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // Comic Explosion Starburst behind Amit's head (Yellow #FFE500 with thick black stroke and dynamic rays)
  comicExplosionBurst: `
    <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" class="comic-explosion-svg">
      <!-- Outer starburst -->
      <polygon points="180,5 202,78 260,25 240,98 315,62 272,130 350,152 284,185 342,238 270,238 298,312 232,274 225,355 180,295 135,355 128,274 62,312 90,238 18,238 76,185 10,152 88,130 45,62 120,98 100,25 158,78" fill="#FFE500" stroke="#0C0B0E" stroke-width="7" stroke-linejoin="round"/>
      <!-- Inner comic accent points and dots -->
      <circle cx="180" cy="180" r="95" fill="#FFE500" stroke="#0C0B0E" stroke-width="4" stroke-dasharray="8 6"/>
      <path d="M180 30L180 65M325 160L290 165M180 325L180 290M35 160L70 165" stroke="#0C0B0E" stroke-width="4.5" stroke-linecap="round"/>
    </svg>
  `,

  // White chalk doodles: Mic on wooden bar stool in upper right, lightning bolts, stars, arrows
  heroChalkDoodles: `
    <svg viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="chalk-doodles-svg" preserveAspectRatio="xMidYMid slice">
      <!-- Stool and mic in top right (x: 920-1120, y: 30-340) -->
      <g class="chalk-stool-mic" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.65">
        <!-- Vintage Standup Microphone on Stool -->
        <rect x="1038" y="42" width="16" height="26" rx="8" fill="#FFFFFF" fill-opacity="0.2"/>
        <line x1="1040" y1="50" x2="1052" y2="50"/>
        <line x1="1040" y1="56" x2="1052" y2="56"/>
        <line x1="1040" y1="62" x2="1052" y2="62"/>
        <line x1="1046" y1="68" x2="1046" y2="88" stroke-width="3"/>
        <path d="M1036 54 C1036 74 1056 74 1056 54" stroke-width="2"/>
        <line x1="1038" y1="88" x2="1054" y2="88" stroke-width="3"/>
        <path d="M1046 88C1042 110 1060 140 1050 170C1040 200 1058 240 1052 280" stroke-dasharray="5 3" stroke-width="1.8"/>

        <!-- Tall Wooden Bar Stool Seat -->
        <ellipse cx="1046" cy="115" rx="38" ry="12" fill="#FFFFFF" fill-opacity="0.15" stroke-width="3"/>
        <ellipse cx="1046" cy="121" rx="38" ry="12" stroke-width="2.5"/>
        <line x1="1008" y1="115" x2="1008" y2="121"/>
        <line x1="1084" y1="115" x2="1084" y2="121"/>
        <!-- Stool 4 flared legs -->
        <line x1="1022" y1="124" x2="996" y2="295" stroke-width="3"/>
        <line x1="1038" y1="126" x2="1026" y2="295" stroke-width="2.5"/>
        <line x1="1054" y1="126" x2="1066" y2="295" stroke-width="2.5"/>
        <line x1="1070" y1="124" x2="1096" y2="295" stroke-width="3"/>
        <!-- Upper leg rungs -->
        <ellipse cx="1046" cy="190" rx="28" ry="8" stroke-width="2"/>
        <!-- Lower leg rungs -->
        <ellipse cx="1046" cy="245" rx="36" ry="10" stroke-width="2.5"/>
      </g>

      <!-- Chalk Lightning Bolt 1 (Left near AMIT) -->
      <g stroke="#FFFFFF" stroke-width="2.5" fill="#FFFFFF" fill-opacity="0.25" opacity="0.6">
        <polygon points="110,80 135,80 120,115 142,115 95,160 108,125 90,125"/>
      </g>
      <!-- Chalk Lightning Bolt 2 (Near TANDON) -->
      <g stroke="#FFE500" stroke-width="2.2" fill="#FFE500" fill-opacity="0.3" opacity="0.7">
        <polygon points="50,260 70,260 58,290 76,290 40,335 48,300 35,300"/>
      </g>

      <!-- Chalk Stars & Sparkles -->
      <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" opacity="0.55">
        <path d="M520 60 Q520 80 500 80 Q520 80 520 100 Q520 80 540 80 Q520 80 520 60Z" fill="#FFFFFF" fill-opacity="0.3"/>
        <path d="M860 120 Q860 135 845 135 Q860 135 860 150 Q860 135 875 135 Q860 135 860 120Z" fill="#FFFFFF" fill-opacity="0.3"/>
        <path d="M220 50 L220 66 M212 58 L228 58"/>
        <path d="M640 40 L640 54 M633 47 L647 47"/>
        <path d="M780 85 L780 97 M774 91 L786 91"/>
      </g>

      <!-- Sketched Arrow pointing from headline to Amit -->
      <g stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5">
        <path d="M420 220 C460 210 500 230 525 260" stroke-dasharray="6 4"/>
        <path d="M515 262 L527 262 L524 250"/>
      </g>
    </svg>
  `,

  // Hero stage bottom audience applause silhouette - white chalk line art on dark stage (Image 1)
  denseAudienceSilhouette: `
    <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="dense-audience-svg">
      <!-- Base dark silhouette fill -->
      <path d="M0 90V65C20 60 40 54 60 58C80 50 100 46 120 52C140 44 165 42 185 48C205 40 230 38 250 44C270 36 295 40 315 46C335 38 360 36 380 42C400 34 425 38 445 44C465 36 490 34 510 42C530 32 555 36 575 44C595 34 620 32 640 40C660 30 685 34 705 42C725 32 750 30 770 40C790 32 815 34 835 42C855 30 880 32 900 40C920 30 945 34 965 42C985 32 1010 30 1030 40C1050 32 1075 36 1095 44C1115 34 1140 32 1160 40C1180 30 1205 34 1225 42C1245 32 1270 30 1290 40C1310 32 1335 36 1355 44C1380 38 1405 48 1440 55V90H0Z" fill="#0C0B0E"/>
      
      <!-- White chalk sketched heads & shoulders with chalky line art -->
      <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
        <!-- Head 1 -->
        <circle cx="35" cy="55" r="14" fill="#0C0B0E"/>
        <path d="M12 85C14 72 24 66 35 66C46 66 56 72 58 85"/>
        
        <!-- Head 2 & Raised Clap -->
        <circle cx="105" cy="50" r="15" fill="#0C0B0E"/>
        <path d="M80 85C82 68 93 62 105 62C117 62 128 68 130 85"/>
        <!-- Clapping hands pair 1 -->
        <path d="M125 52L132 24L139 26L135 52"/>
        <path d="M142 52L137 24L130 26L134 52"/>
        <!-- Sound lines around clapping hands -->
        <line x1="124" y1="18" x2="118" y2="12" stroke-width="1.8"/>
        <line x1="135" y1="14" x2="135" y2="6" stroke-width="1.8"/>
        <line x1="146" y1="18" x2="152" y2="12" stroke-width="1.8"/>

        <!-- Head 3 -->
        <circle cx="190" cy="46" r="16" fill="#0C0B0E"/>
        <path d="M165 85C167 66 178 60 190 60C202 60 213 66 215 85"/>

        <!-- Head 4 & Raised Fist -->
        <circle cx="270" cy="48" r="15" fill="#0C0B0E"/>
        <path d="M245 85C247 68 258 62 270 62C282 62 293 68 295 85"/>
        <path d="M290 50L297 18L305 20L300 50"/>
        <circle cx="301" cy="16" r="6" fill="#0C0B0E"/>

        <!-- Head 5 -->
        <circle cx="355" cy="45" r="16" fill="#0C0B0E"/>
        <path d="M330 85C332 64 343 58 355 58C367 58 378 64 380 85"/>
        <!-- Clapping pair 2 -->
        <path d="M380 48L388 20L396 22L390 48"/>
        <path d="M400 48L394 20L386 22L391 48"/>
        <line x1="392" y1="12" x2="392" y2="5" stroke-width="1.8"/>

        <!-- Head 6 -->
        <circle cx="445" cy="48" r="15" fill="#0C0B0E"/>
        <path d="M420 85C422 68 433 62 445 62C457 62 468 68 470 85"/>

        <!-- Head 7 & Hands raised -->
        <circle cx="530" cy="44" r="16" fill="#0C0B0E"/>
        <path d="M505 85C507 64 518 58 530 58C542 58 553 64 555 85"/>
        <path d="M550 48L558 16L566 18L560 48"/>
        <circle cx="562" cy="14" r="6" fill="#0C0B0E"/>
        <line x1="552" y1="10" x2="546" y2="4" stroke-width="1.8"/>
        <line x1="572" y1="10" x2="578" y2="4" stroke-width="1.8"/>

        <!-- Head 8 -->
        <circle cx="620" cy="46" r="15" fill="#0C0B0E"/>
        <path d="M595 85C597 66 608 60 620 60C632 60 643 66 645 85"/>

        <!-- Head 9 & Clapping pair 3 -->
        <circle cx="700" cy="44" r="16" fill="#0C0B0E"/>
        <path d="M675 85C677 64 688 58 700 58C712 58 723 64 725 85"/>
        <path d="M725 46L732 18L740 20L735 46"/>
        <path d="M744 46L738 18L730 20L736 46"/>
        <line x1="735" y1="10" x2="735" y2="4" stroke-width="1.8"/>

        <!-- Head 10 -->
        <circle cx="790" cy="48" r="15" fill="#0C0B0E"/>
        <path d="M765 85C767 68 778 62 790 62C802 62 813 68 815 85"/>

        <!-- Head 11 & Raised Arm -->
        <circle cx="875" cy="44" r="16" fill="#0C0B0E"/>
        <path d="M850 85C852 64 863 58 875 58C887 58 898 64 900 85"/>
        <path d="M895 46L903 16L911 18L905 46"/>
        <circle cx="907" cy="14" r="6" fill="#0C0B0E"/>

        <!-- Head 12 & Clapping pair 4 -->
        <circle cx="970" cy="46" r="15" fill="#0C0B0E"/>
        <path d="M945 85C947 66 958 60 970 60C982 60 993 66 995 85"/>
        <path d="M995 48L1002 20L1010 22L1005 48"/>
        <path d="M1014 48L1008 20L1000 22L1006 48"/>

        <!-- Head 13 -->
        <circle cx="1060" cy="44" r="16" fill="#0C0B0E"/>
        <path d="M1035 85C1037 64 1048 58 1060 58C1072 58 1083 64 1085 85"/>

        <!-- Head 14 & Raised fist -->
        <circle cx="1145" cy="46" r="15" fill="#0C0B0E"/>
        <path d="M1120 85C1122 66 1133 60 1145 60C1157 60 1168 66 1170 85"/>
        <path d="M1165 48L1173 18L1181 20L1175 48"/>
        <circle cx="1177" cy="16" r="6" fill="#0C0B0E"/>

        <!-- Head 15 & Clapping pair 5 -->
        <circle cx="1235" cy="44" r="16" fill="#0C0B0E"/>
        <path d="M1210 85C1212 64 1223 58 1235 58C1247 58 1258 64 1260 85"/>
        <path d="M1260 46L1268 18L1276 20L1270 46"/>
        <path d="M1280 46L1274 18L1266 20L1272 46"/>
        <line x1="1271" y1="10" x2="1271" y2="4" stroke-width="1.8"/>

        <!-- Head 16 -->
        <circle cx="1330" cy="48" r="15" fill="#0C0B0E"/>
        <path d="M1305 85C1307 68 1318 62 1330 62C1342 62 1353 68 1355 85"/>

        <!-- Head 17 -->
        <circle cx="1405" cy="52" r="14" fill="#0C0B0E"/>
        <path d="M1380 85C1382 70 1393 64 1405 64C1417 64 1428 70 1430 85"/>
      </g>
    </svg>
  `
};
