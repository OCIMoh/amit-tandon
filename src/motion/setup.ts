import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { svgs } from "../content/svgs";

gsap.registerPlugin(ScrollTrigger);

export async function setupMotion(): Promise<void> {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Initialize smooth scrolling with snappy natural duration
  const lenis = new Lenis({
    duration: reduce ? 0 : 0.8,
    smoothWheel: true,
    touchMultiplier: 1.15,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Setup interactive sub-systems
  setupScrollReveals(reduce);
  setupPunchlineTrigger();
  setupGyanSoundboard();
  setupTourInteractions();
  setupSlotMachine();
  setupCinemaModal();
}

/** Non-blocking staggered reveals without scroll-trapping */
function setupScrollReveals(reduce: boolean): void {
  const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reduce) {
    reveals.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // Hero section instant entrance
  const heroReveals = document.querySelectorAll<HTMLElement>(".pop-hero-section [data-reveal]");
  if (heroReveals.length) {
    gsap.fromTo(
      heroReveals,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }

  // Other section batch reveals
  const otherReveals = gsap.utils.toArray<HTMLElement>(
    "section:not(.pop-hero-section) [data-reveal]"
  );

  ScrollTrigger.batch(otherReveals, {
    start: "top 90%",
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.75,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    },
    once: true,
  });
}

/** Interactive Punchline Trigger: Spawns floating comic badges */
function setupPunchlineTrigger(): void {
  const btn = document.querySelector<HTMLButtonElement>("#trigger-punchline-btn");
  const dock = document.querySelector<HTMLDivElement>("#punchline-bubble-dock");
  if (!btn || !dock) return;

  const punchlines = [
    "“Bas 5 minute mein aayi!” — World's longest unit of time.",
    "“Sharma Ji ka beta scored 97%. Log kya kahenge?!”",
    "“Wife packed 4 suitcases for a 2-day Goa wedding.”",
    "“AC set to 16°C: Middle-class Everest simulation.”",
    "“Papa on WhatsApp: FORWARDED MANY TIMES.”",
    "“Aise kaise bhai?! Logic has left the flat!”"
  ];

  const soundWords = ["*WHISTLE!*", "*HAHA!*", "*TAALIYAN!*", "*WAH WAH!*", "*AISE KAISE?!*"];

  let lastIndex = -1;

  const trigger = (e: MouseEvent) => {
    e.preventDefault();

    // Pick a fresh punchline
    let idx = Math.floor(Math.random() * punchlines.length);
    if (idx === lastIndex) idx = (idx + 1) % punchlines.length;
    lastIndex = idx;

    // Pick a random sound word
    const sound = soundWords[Math.floor(Math.random() * soundWords.length)];

    // Create floating comic badge
    const bubble = document.createElement("div");
    bubble.className = "floating-punchline-bubble tilt-left";
    bubble.innerHTML = `
      <span class="fp-sound">${sound}</span>
      <span class="fp-quote">${punchlines[idx]}</span>
    `;

    // Position around center/mouse
    const x = Math.min(Math.max(e.clientX - 140, 20), window.innerWidth - 300);
    const y = e.clientY - 60;
    bubble.style.position = "fixed";
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.zIndex = "9999";

    document.body.appendChild(bubble);

    gsap.fromTo(
      bubble,
      { scale: 0.5, y: 0, opacity: 0 },
      {
        scale: 1,
        y: -40,
        opacity: 1,
        duration: 0.35,
        ease: "back.out(2)",
        onComplete: () => {
          gsap.to(bubble, {
            y: -80,
            opacity: 0,
            duration: 0.5,
            delay: 1.8,
            ease: "power2.in",
            onComplete: () => bubble.remove(),
          });
        },
      }
    );
  };

  btn.addEventListener("click", trigger);

  // Also hook the hero speech bubbles
  const speechBubbles = document.querySelectorAll(".comic-bubble-anchor, .bubble-speech");
  speechBubbles.forEach(b => {
    b.addEventListener("click", (e) => trigger(e as MouseEvent));
  });
}

/** Gyan Bites Soundboard Pill Switcher */
function setupGyanSoundboard(): void {
  const pills = document.querySelectorAll<HTMLButtonElement>(".gyan-pill");
  const quoteText = document.querySelector<HTMLElement>("#gyan-active-text");
  const quoteTag = document.querySelector<HTMLElement>("#gyan-active-tag");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");

      const quote = pill.dataset.quote;
      const context = pill.dataset.context;

      if (quoteText && quote) {
        gsap.fromTo(
          quoteText,
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            onStart: () => {
              quoteText.textContent = `“${quote}”`;
            },
          }
        );
      }

      if (quoteTag && context) {
        quoteTag.textContent = context;
      }
    });
  });
}

/** Tour Filters & Expander Drawer */
function setupTourInteractions(): void {
  const filterTabs = document.querySelectorAll<HTMLButtonElement>(".filter-tab");
  const tickets = document.querySelectorAll<HTMLElement>(".concert-ticket");
  const schedCards = document.querySelectorAll<HTMLElement>(".schedule-card");
  const expandBtn = document.querySelector<HTMLButtonElement>("#toggle-full-schedule-btn");
  const drawer = document.querySelector<HTMLDivElement>("#full-schedule-drawer");
  const btnText = document.querySelector<HTMLElement>("#expand-btn-text");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const filter = tab.dataset.regionFilter || "all";

      // Filter featured tickets
      tickets.forEach((ticket) => {
        const reg = ticket.dataset.region;
        const match = filter === "all" || reg === filter;
        ticket.style.display = match ? "flex" : "none";
      });

      // Filter schedule cards
      schedCards.forEach((card) => {
        const reg = card.dataset.region;
        const match = filter === "all" || reg === filter;
        card.style.display = match ? "flex" : "none";
      });
    });
  });

  // Toggle 33 cities drawer
  if (expandBtn && drawer) {
    expandBtn.addEventListener("click", () => {
      const isClosed = drawer.style.display === "none";
      drawer.style.display = isClosed ? "block" : "none";
      if (btnText) {
        btnText.innerHTML = isClosed 
          ? "HIDE FULL SCHEDULE &uarr;" 
          : "VIEW ALL 33 GLOBAL TOUR DATES &darr;";
      }
    });
  }
}

/** The Aise Kaise? Machine: Interactive 3-Reel Slot Machine */
function setupSlotMachine(): void {
  const spinBtn = document.querySelector<HTMLButtonElement>("#generate-dilemma-btn");
  const lever = document.querySelector<HTMLElement>("#lever-assembly");
  const leverDock = document.querySelector<HTMLElement>("#slot-lever-dock");

  const reel1Text = document.querySelector<HTMLElement>("#reel-1-content .reel-text");
  const reel1Illus = document.querySelector<HTMLElement>("#reel-1-illus");
  const reel2Text = document.querySelector<HTMLElement>("#reel-2-content .reel-text");
  const reel2Illus = document.querySelector<HTMLElement>("#reel-2-illus");
  const obsText = document.querySelector<HTMLElement>("#obs-quote-text");

  if (!spinBtn) return;

  const optionsWho = [
    { illus: svgs.cartoonWife, label: "WIFE" },
    { illus: svgs.cartoonSharmaJi, label: "SHARMA JI" },
    { illus: svgs.cartoonWife, label: "MOTHER-IN-LAW" },
    { illus: svgs.cartoonSharmaJi, label: "DELHI AUTO WALA" },
    { illus: svgs.cartoonSharmaJi, label: "SOCIETY UNCLE" }
  ];

  const optionsSituation = [
    { illus: svgs.cartoonSuitcases, label: "2-DAY TRIP.<br/>4 SUITCASES." },
    { illus: svgs.cartoonSuitcases, label: "SCORED 95%<br/>IN PRE-BOARDS." },
    { illus: svgs.cartoonSuitcases, label: "REQUEST TO GO<br/>ON GOA TRIP." },
    { illus: svgs.cartoonSuitcases, label: "AC TEMPERATURE<br/>SET TO 16°C." },
    { illus: svgs.cartoonSuitcases, label: "“BAS 5 MINUTE<br/>MEIN AAYI.”" }
  ];

  const optionsObservation = [
    "“THE LOGIC HAS LEFT THE CHAT.”",
    "“ERROR 404: SHARMA JI'S SON SCORED 97%.”",
    "“MISSION ABORTED: ZERO PARENTAL FUNDING.”",
    "“RELATIVISTIC TIME DILATION CONFIRMED.”",
    "“MUMMY DECLARES: 'NAHI! KABHI NAHI!'”",
    "“NOW CALLING 42 WHATSAPP GROUP ADMINS.”"
  ];

  let spinning = false;

  const spin = () => {
    if (spinning) return;
    spinning = true;

    // Pull lever animation
    if (lever) {
      lever.classList.add("is-pulled");
      setTimeout(() => lever.classList.remove("is-pulled"), 300);
    }

    // Add spin blur class to reels
    const reels = document.querySelectorAll(".reel-content");
    reels.forEach(r => r.classList.add("is-spinning"));

    // Randomize results after 450ms
    setTimeout(() => {
      const who = optionsWho[Math.floor(Math.random() * optionsWho.length)];
      const sit = optionsSituation[Math.floor(Math.random() * optionsSituation.length)];
      const obs = optionsObservation[Math.floor(Math.random() * optionsObservation.length)];

      if (reel1Illus && reel1Text) {
        reel1Illus.innerHTML = who.illus;
        reel1Text.textContent = who.label;
      }

      if (reel2Illus && reel2Text) {
        reel2Illus.innerHTML = sit.illus;
        reel2Text.innerHTML = sit.label;
      }

      if (obsText) {
        obsText.textContent = obs;
      }

      reels.forEach(r => r.classList.remove("is-spinning"));
      spinning = false;
    }, 450);
  };

  spinBtn.addEventListener("click", spin);
  if (leverDock) {
    leverDock.addEventListener("click", spin);
  }
}

/** Inline Cinema Player Modal Controller */
function setupCinemaModal(): void {
  const modal = document.querySelector<HTMLDivElement>("#videoModal");
  const iframe = document.querySelector<HTMLIFrameElement>("#videoModalIframe");
  const closeBtn = document.querySelector<HTMLButtonElement>("#videoModalClose");

  if (!modal || !iframe || !closeBtn) return;

  const open = (videoId: string) => {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    iframe.src = "";
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll<HTMLElement>("[data-video-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const videoId = el.getAttribute("data-video-id");
      if (videoId) open(videoId);
    });
  });

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      close();
    }
  });
}
