import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export async function setupMotion(): Promise<void> {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Initialize smooth scrolling with natural duration
  const lenis = new Lenis({
    duration: reduce ? 0 : 0.85,
    smoothWheel: true,
    touchMultiplier: 1.15,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Setup sub-systems
  setupNavScroll();
  setupPosterHero(reduce);
  setupScrollReveals(reduce);
  setupPerspectiveShift(reduce);
  setupTourInteractions();
  setupSlotMachine();
  setupGyanDeck();
  setupCinemaModal();
  setupMagneticPlayheads(reduce);
  setupAmbientSpotlight(reduce);
  setupMicAudioWaveClick();
}

/** Section 11.A: Compact Dark Navigation on Scroll */
function setupNavScroll(): void {
  const nav = document.querySelector<HTMLElement>("#main-nav");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/** Theatrical Arena Hero Controller (Asymmetric Stage + Interactive Gyan Card Deck) */
function setupPosterHero(reduce: boolean): void {
  const heroSection = document.querySelector<HTMLElement>(".theatrical-hero-section");
  if (!heroSection) return;

  const magneticPrimary = heroSection.querySelector<HTMLElement>("#btn-hero-tickets");
  const magneticSecondary = heroSection.querySelector<HTMLElement>("#btn-hero-trailer");

  // Subtle acoustic sound on interaction
  let audioCtx: AudioContext | null = null;
  const playTactileFeedback = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        void audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.02);
    } catch {
      // Audio autoplay fallback
    }
  };

  // Wire up the interactive Gyan Card Deck on right flank
  setupGyanCardDeck(playTactileFeedback);

  // Interactive Follow-Spotlight & Mouse Physics
  if (!reduce) {
    let targetX = 50;
    let currentX = 50;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      targetX = Math.max(15, Math.min(85, px));
    };

    heroSection.addEventListener("pointermove", handlePointerMove, { passive: true });

    const updateSpotlight = () => {
      currentX += (targetX - currentX) * 0.08;
      const tilt = ((currentX - 50) / 50) * 12;
      heroSection.style.setProperty("--spotlight-x", `${currentX.toFixed(2)}%`);
      heroSection.style.setProperty("--spotlight-tilt", `${tilt.toFixed(2)}deg`);
      requestAnimationFrame(updateSpotlight);
    };

    requestAnimationFrame(updateSpotlight);

    // Magnetic CTA Button Physics
    const bindMagnetic = (el: HTMLElement | null, strength = 0.3) => {
      if (!el) return;
      el.addEventListener("pointermove", (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) * strength;
        const dy = (e.clientY - centerY) * strength;
        gsap.to(el, { x: dx, y: dy, duration: 0.2, ease: "power2.out" });
      });

      el.addEventListener("pointerenter", () => {
        playTactileFeedback();
      });

      el.addEventListener("pointerleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1.2, 0.4)" });
      });
    };

    bindMagnetic(magneticPrimary, 0.32);
    bindMagnetic(magneticSecondary, 0.22);
  }

  // Entrance Stagger Animation
  if (!reduce) {
    const badges = heroSection.querySelector(".hero-badges-row");
    const titleWords = heroSection.querySelectorAll(".hero-headliner-title .title-word");
    const tagline = heroSection.querySelector(".hero-tagline");
    const lead = heroSection.querySelector(".hero-lead-text");
    const ctas = heroSection.querySelector(".hero-cta-cluster");
    const departure = heroSection.querySelector(".hero-departure-strip");
    const cardItem = heroSection.querySelector(".gyan-card-item");
    const dock = heroSection.querySelector(".hero-unified-base-dock");

    const tl = gsap.timeline({ delay: 0.1 });
    if (badges) tl.fromTo(badges, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" });
    if (titleWords.length > 0) {
      tl.fromTo(
        titleWords,
        { autoAlpha: 0, y: 40, scale: 0.94 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );
    }
    if (tagline) tl.fromTo(tagline, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4");
    if (lead) tl.fromTo(lead, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
    if (ctas) tl.fromTo(ctas, { autoAlpha: 0, scale: 0.94, y: 20 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.4)" }, "-=0.3");
    if (departure) tl.fromTo(departure, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
    if (cardItem) tl.fromTo(cardItem, { autoAlpha: 0, scale: 0.9, y: 35 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.2)" }, "-=0.6");
    if (dock) tl.fromTo(dock, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
  }
}

/** Interactive Gyan Card Stage Deck Controller */
function setupGyanCardDeck(onSoundFeedback?: () => void): void {
  const cardItem = document.querySelector<HTMLElement>("#gyan-card-item");
  const dealBtn = document.querySelector<HTMLButtonElement>("#btn-deal-gyan");
  const activeImg = document.querySelector<HTMLImageElement>("#gyan-active-img");
  const activeTag = document.querySelector<HTMLElement>("#gyan-active-tag");
  const activeCounter = document.querySelector<HTMLElement>("#gyan-num");
  const activeCaption = document.querySelector<HTMLElement>("#gyan-caption-text");
  const activeShares = document.querySelector<HTMLElement>("#gyan-active-shares");
  const whatsappBtn = document.querySelector<HTMLAnchorElement>("#btn-gyan-whatsapp");
  const clipBtn = document.querySelector<HTMLButtonElement>("#btn-gyan-clip");

  if (!cardItem || !dealBtn || !activeImg || !activeCaption) return;

  const cards = [
    {
      id: 1,
      tag: "WHATSAPP FAMILY DIPLOMACY",
      title: "Family WhatsApp Groups",
      caption: "42 members, 120 Good Morning forwards by 7 AM, zero replies to genuine questions.",
      image: "/gyan/gyan-1.jpg",
      shares: "45K Shares",
      videoId: "2WkO1nJ3u1Y",
    },
    {
      id: 2,
      tag: "NORTH INDIAN LOGIC",
      title: "Butter Chicken in Agra",
      caption: "If the monument doesn't have butter chicken within 200 meters, why did Shah Jahan even build it?",
      image: "/gyan/gyan-2.jpg",
      shares: "62K Shares",
      videoId: "2WkO1nJ3u1Y",
    },
    {
      id: 3,
      tag: "MARRIAGE CLIMATE CONTROL",
      title: "AC Temperature Diplomacy",
      caption: "AC Temperature Diplomacy: 18°C is Arctic tundra, 24°C is Sahara desert, 22°C is a pending court case.",
      image: "/gyan/gyan-3.jpg",
      shares: "88K Shares",
      videoId: "C7b0TAg0xMU",
    },
    {
      id: 4,
      tag: "PARENTING GEN-Z",
      title: "The ₹4 Lakh 'Bruh'",
      caption: "You pay ₹4 lakh school fees so they can reply 'bruh' to your earnest life advice.",
      image: "/gyan/gyan-4.jpg",
      shares: "71K Shares",
      videoId: "C7b0TAg0xMU",
    },
    {
      id: 5,
      tag: "THE 5-MINUTE ELASTICITY",
      title: "The 5-Minute Myth",
      caption: "'Bas 5 minute mein tayar ho rahi hoon' violates Einstein's theory of general relativity.",
      image: "/gyan/gyan-5.jpg",
      shares: "94K Shares",
      videoId: "2WkO1nJ3u1Y",
    },
    {
      id: 6,
      tag: "DELHI DIET RESOLUTIONS",
      title: "Chole Bhature Tuesday",
      caption: "Starting a strict diet on Monday, ordering 2 plates of Chole Bhature on Tuesday morning.",
      image: "/gyan/gyan-6.jpg",
      shares: "53K Shares",
      videoId: "C7b0TAg0xMU",
    },
    {
      id: 7,
      tag: "MALL EXPEDITIONS",
      title: "14-Kilometer Hair Clip",
      caption: "Walking 14 kilometers inside a mall to buy a hair clip that was available right at the entrance.",
      image: "/gyan/gyan-7.jpg",
      shares: "83K Shares",
      videoId: "2WkO1nJ3u1Y",
    },
    {
      id: 8,
      tag: "MARRIAGE CEASEFIRE",
      title: "The Married Guy Rule",
      caption: "Apologizing to your wife is not an admission of guilt; it is a tactical military ceasefire.",
      image: "/gyan/gyan-8.jpg",
      shares: "110K Shares",
      videoId: "C7b0TAg0xMU",
    },
    {
      id: 9,
      tag: "INDIAN FLIGHT ANNOUNCEMENTS",
      title: "Touchdown Seatbelt Click",
      caption: "Indian uncle unbuckling his seatbelt the exact microsecond the aircraft tire touches the runway.",
      image: "/gyan/gyan-9.jpg",
      shares: "77K Shares",
      videoId: "C7b0TAg0xMU",
    },
    {
      id: 10,
      tag: "THE SHAGUN LEDGER",
      title: "The ₹501 Wedding Audit",
      caption: "Tracking exactly how much Sharma ji gave in 2011 so we can return ₹501 in 2026.",
      image: "/gyan/gyan-10.jpg",
      shares: "65K Shares",
      videoId: "C7b0TAg0xMU",
    },
  ];

  let currentIndex = 2; // Initial card is index 2 (item 3: AC Temperature)

  // 3D Parallax Tilt Physics on Mouse Move
  cardItem.addEventListener("pointermove", (e: PointerEvent) => {
    const rect = cardItem.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 7;
    const rotY = (x / (rect.width / 2)) * 7;
    cardItem.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.02)`;
  });

  cardItem.addEventListener("pointerleave", () => {
    cardItem.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });

  // Deal Next Card with Tactile Spin & 3D Flip
  const dealNextCard = () => {
    let nextIdx = Math.floor(Math.random() * cards.length);
    if (nextIdx === currentIndex) {
      nextIdx = (nextIdx + 1) % cards.length;
    }
    currentIndex = nextIdx;
    const item = cards[currentIndex];
    onSoundFeedback?.();

    // Spin dice icon
    const dice = dealBtn.querySelector(".shuffle-dice");
    if (dice) {
      gsap.fromTo(dice, { rotation: 0 }, { rotation: 360, duration: 0.35, ease: "power2.out" });
    }

    // Card 3D Flip Transition
    gsap.to(activeImg, {
      scale: 0.92,
      opacity: 0,
      rotateY: 90,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        activeImg.src = item.image;
        if (activeTag) activeTag.textContent = item.tag;
        if (activeCounter) activeCounter.textContent = String(item.id).padStart(2, "0");
        activeCaption.textContent = `“${item.caption}”`;
        if (activeShares) activeShares.textContent = item.shares;
        if (clipBtn) clipBtn.setAttribute("data-video-id", item.videoId);
        if (whatsappBtn) {
          whatsappBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(
            `Amit Tandon Gyan Bite: "${item.caption}" (amittandon.in)`
          )}`;
        }

        gsap.fromTo(
          activeImg,
          { scale: 0.92, opacity: 0, rotateY: -90 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 0.28, ease: "back.out(1.2)" }
        );
      },
    });
  };

  dealBtn.addEventListener("click", dealNextCard);
}



/** Section 1.3 & 1.6: What I Said / What She Heard Seam Controller */
export function setupSplitHeroSeam(reduce: boolean): void {
  const stage = document.querySelector<HTMLElement>(".split-hero-stage");
  const divider = document.querySelector<HTMLElement>("#hero-seam-divider");
  const pills = document.querySelectorAll<HTMLButtonElement>("#mobile-perspective-pills .m-pill");

  const captionLeft = document.querySelector<HTMLElement>("#caption-left-text");
  const captionRight = document.querySelector<HTMLElement>("#caption-right-text");
  const counter = document.querySelector<HTMLElement>("#caption-counter");
  const prevBtn = document.querySelector<HTMLButtonElement>("#caption-prev-btn");
  const nextBtn = document.querySelector<HTMLButtonElement>("#caption-next-btn");

  if (!stage) return;

  const captionPairs = [
    { said: "“Nice dinner, thanks.”", heard: "“Your cooking is terrible.”" },
    { said: "“I'm not angry.”", heard: "“I'm furious.”" },
    { said: "“Do whatever you like.”", heard: "“You'll regret this.”" },
    { said: "“I'll be ready in five minutes.”", heard: "“Start without me.”" },
    { said: "“Fine.”", heard: "“Nothing is fine.”" },
  ];

  let currentIdx = 0;
  let captionInterval: number | null = null;
  let isHovered = false;

  const updateCaption = (idx: number) => {
    currentIdx = (idx + captionPairs.length) % captionPairs.length;
    const pair = captionPairs[currentIdx];

    if (counter) counter.textContent = `${currentIdx + 1} / ${captionPairs.length}`;

    if (captionLeft && captionRight) {
      gsap.to([captionLeft, captionRight], {
        opacity: 0.2,
        y: -4,
        duration: 0.15,
        onComplete: () => {
          captionLeft.textContent = pair.said;
          captionRight.textContent = pair.heard;
          gsap.to([captionLeft, captionRight], {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        },
      });
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateCaption(currentIdx - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateCaption(currentIdx + 1);
    });
  }

  // Automatic 6-second rotation (pauses on hover per Section 1.6)
  const startCaptionTimer = () => {
    if (captionInterval) clearInterval(captionInterval);
    captionInterval = window.setInterval(() => {
      if (!isHovered) {
        updateCaption(currentIdx + 1);
      }
    }, 6000);
  };
  startCaptionTimer();

  stage.addEventListener("mouseenter", () => {
    isHovered = true;
  });
  stage.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  // Seam State Variables
  let targetSeam = 50;
  let currentSeam = 50;
  let isDragging = false;
  let isInteracting = false;
  let lastActivityTime = Date.now();

  const setSeamTarget = (val: number) => {
    lastActivityTime = Date.now();
    isInteracting = true;
    // Magnetic Snap check (0%, 50%, 100%)
    if (val < 7) {
      targetSeam = 0;
    } else if (val > 93) {
      targetSeam = 100;
    } else if (Math.abs(val - 50) < 4) {
      targetSeam = 50;
    } else {
      targetSeam = Math.max(0, Math.min(100, val));
    }
  };

  const updateLoop = () => {
    const now = Date.now();

    // Idle drift after 3 seconds of inactivity (Section 1.3)
    if (!isInteracting && !isDragging && !reduce && now - lastActivityTime > 3000) {
      const elapsed = (now - lastActivityTime - 3000) * 0.001;
      targetSeam = 50 + Math.sin(elapsed * 1.2) * 8.5;
    }

    // Lerp smoothing (lerp ~0.14)
    currentSeam += (targetSeam - currentSeam) * (reduce ? 1 : 0.14);

    // Apply CSS variable and divider position
    stage.style.setProperty("--seam", `${currentSeam.toFixed(2)}%`);
    if (divider) {
      divider.style.left = `${currentSeam.toFixed(2)}%`;
      divider.setAttribute("aria-valuenow", Math.round(currentSeam).toString());
    }

    requestAnimationFrame(updateLoop);
  };

  requestAnimationFrame(updateLoop);

  // Desktop Pointer / Cursor Follow
  const onPointerMove = (e: PointerEvent) => {
    if (window.innerWidth < 768) return;
    const rect = stage.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right) {
      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      setSeamTarget(relX);
    }
  };

  stage.addEventListener("pointermove", onPointerMove, { passive: true });

  // Handle Dragging
  if (divider) {
    const onDragStart = (e: PointerEvent) => {
      isDragging = true;
      isInteracting = true;
      divider.setPointerCapture(e.pointerId);
    };

    const onDragMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const rect = stage.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      setSeamTarget(relX);
    };

    const onDragEnd = (e: PointerEvent) => {
      isDragging = false;
      try {
        divider.releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    };

    divider.addEventListener("pointerdown", onDragStart);
    divider.addEventListener("pointermove", onDragMove);
    divider.addEventListener("pointerup", onDragEnd);
    divider.addEventListener("pointercancel", onDragEnd);

    // Keyboard navigation (ArrowLeft, ArrowRight, Home, End)
    divider.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSeamTarget(targetSeam - 5);
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        setSeamTarget(targetSeam + 5);
        e.preventDefault();
      } else if (e.key === "Home") {
        setSeamTarget(0);
        e.preventDefault();
      } else if (e.key === "End") {
        setSeamTarget(100);
        e.preventDefault();
      }
    });
  }

  // Mobile Pills
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const targetVal = parseFloat(pill.dataset.target || "50");
      setSeamTarget(targetVal);
    });
  });
}

/** Non-blocking staggered batch reveals for all downstream sections */
function setupScrollReveals(reduce: boolean): void {
  const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reduce) {
    reveals.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const downstream = gsap.utils.toArray<HTMLElement>(
    "section:not(.domestic-hero-section) [data-reveal]"
  );

  ScrollTrigger.batch(downstream, {
    start: "top 88%",
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    },
    once: true,
  });
}

/** Subtle acoustic UI click using Web Audio API */
function playTactileSwitchClick(): void {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(360, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.035);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(720, ctx.currentTime);
    filter.Q.setValueAtTime(4, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.035);

    setTimeout(() => {
      ctx.close();
    }, 80);
  } catch {
    // Audio safe fallback
  }
}

/** Section 5: Signature Interaction 1 - The Perspective Shift: Jaipur Luggage Audit */
function setupPerspectiveShift(reduce: boolean): void {
  const section = document.querySelector<HTMLElement>("#perspective");
  if (!section) return;

  const slider = document.querySelector<HTMLInputElement>("#luggage-balance-slider");
  const needleArm = document.querySelector<HTMLElement>("#dial-needle-arm");
  const plateImg = document.querySelector<HTMLElement>("#audit-plate-img");
  const glowHis = document.querySelector<HTMLElement>("#glow-his");
  const glowHer = document.querySelector<HTMLElement>("#glow-her");
  const hudBtnHis = document.querySelector<HTMLButtonElement>("#hud-btn-his");
  const hudBtnHer = document.querySelector<HTMLButtonElement>("#hud-btn-her");
  const telemetryText = document.querySelector<HTMLElement>("#telemetry-text");
  const truthBanner = document.querySelector<HTMLElement>("#shared-truth-banner");
  const btnBalanceTruth = document.querySelector<HTMLButtonElement>("#btn-balance-truth");
  const btnResumeAudit = document.querySelector<HTMLButtonElement>("#btn-resume-audit");

  const markerHis = document.querySelector<HTMLButtonElement>("#marker-his");
  const markerTruth = document.querySelector<HTMLButtonElement>("#marker-truth");
  const markerHer = document.querySelector<HTMLButtonElement>("#marker-her");

  const popover = document.querySelector<HTMLElement>("#audit-popover");
  const popoverSideBadge = document.querySelector<HTMLElement>("#popover-side-badge");
  const popoverTitle = document.querySelector<HTMLElement>("#popover-title");
  const popoverQuote = document.querySelector<HTMLElement>("#popover-quote");
  const popoverWeight = document.querySelector<HTMLElement>("#popover-weight");
  const popoverStat = document.querySelector<HTMLElement>("#popover-stat");
  const popoverTime = document.querySelector<HTMLElement>("#popover-time");
  const popoverCloseBtn = document.querySelector<HTMLButtonElement>("#popover-close-btn");

  const pins = document.querySelectorAll<HTMLButtonElement>(".hotspot-pin");
  const pills = document.querySelectorAll<HTMLButtonElement>(".audit-pill");

  interface AuditItemData {
    side: "his" | "her";
    badge: string;
    title: string;
    quote: string;
    weight: string;
    stat: string;
    time: string;
  }

  const AUDIT_ITEMS: Record<string, AuditItemData> = {
    toothbrush: {
      side: "his",
      badge: "HIS REALITY · AUDIT ITEM #01",
      title: "Toothbrush in Outer Mesh Pocket",
      quote: "“Survived 3 weddings, 2 corporate offsites, and 4 years of domestic diplomacy without replacement. Total weight: 18 grams. Ready in 4 seconds.”",
      weight: "0.018 KG",
      stat: "100% EFFICIENT",
      time: "4 SECONDS",
    },
    charger: {
      side: "his",
      badge: "HIS REALITY · AUDIT ITEM #02",
      title: "The Universal Tangled Multi-Cable",
      quote: "“Powers 4 phones, 2 iPads, the car dashcam, and possibly the hotel elevator. Rolled with zero geometric discipline into a ball of pure optimism.”",
      weight: "0.120 KG",
      stat: "8/10 KNOT COMPLEXITY",
      time: "10 SECONDS",
    },
    kurta: {
      side: "his",
      badge: "HIS REALITY · AUDIT ITEM #03",
      title: "The Emergency Linen Kurta Roll",
      quote: "“Worn at my cousin’s Roka in 2019. Rolled into a tight cylinder so it fits beside the socks. Will iron with the hotel hair-dryer if aunties notice.”",
      weight: "0.350 KG",
      stat: "NEEDS HAIR-DRYER",
      time: "1 MINUTE",
    },
    steamer: {
      side: "her",
      badge: "HER REALITY · AUDIT ITEM #04",
      title: "Industrial Handheld Garment Steamer",
      quote: "“Because hotel irons have questionable moral integrity and leave scorch marks on Raw Silk. Packed with 3 spare nozzle attachments.”",
      weight: "1.450 KG",
      stat: "NON-NEGOTIABLE",
      time: "3 DAYS PREP",
    },
    safetypins: {
      side: "her",
      badge: "HER REALITY · AUDIT ITEM #05",
      title: "Strategic 140-Pin Metal Reserve",
      quote: "“Enough architectural steel to anchor the Howrah Bridge or salvage an auntie’s saree pallu collapse during the Bhangra entrance.”",
      weight: "0.250 KG",
      stat: "DEFENSE GRADE",
      time: "2 WEEKS PREP",
    },
    lehenga: {
      side: "her",
      badge: "HER REALITY · AUDIT ITEM #06",
      title: "The 14kg Sangeet Showstopper Lehenga",
      quote: "“Hand-embroidered zardozi work with real metal wire. Cannot be repeated across any photo album in five northern states. Resale value: 1 BHK in Noida.”",
      weight: "14.20 KG",
      stat: "MANDATORY / NO REPEATS",
      time: "3 WEEKS PREP",
    },
    shoes: {
      side: "her",
      badge: "HER REALITY · AUDIT ITEM #07",
      title: "Terrain-Specific Footwear Array",
      quote: "“Lawn stilettos with anti-sink caps, indoor marble kitten heels, and gold juttis in case the DJ plays 'Gud Naal Ishq Mitha'. 35% of total luggage volume.”",
      weight: "4.800 KG",
      stat: "TERRAIN-OPTIMIZED",
      time: "4 DAYS PREP",
    },
  };

  const inspectItem = (pinId: string, triggerSound = true) => {
    const data = AUDIT_ITEMS[pinId];
    if (!data || !popover) return;

    if (triggerSound) playTactileSwitchClick();

    // Update active pin states
    pins.forEach((p) => {
      p.classList.toggle("is-inspected", p.dataset.pin === pinId);
    });

    // Update quick pills
    pills.forEach((pill) => {
      pill.classList.toggle("is-active", pill.dataset.targetPin === pinId);
    });

    // Update popover content
    if (popoverSideBadge) popoverSideBadge.textContent = data.badge;
    if (popoverTitle) popoverTitle.textContent = data.title;
    if (popoverQuote) popoverQuote.textContent = data.quote;
    if (popoverWeight) popoverWeight.textContent = data.weight;
    if (popoverStat) popoverStat.textContent = data.stat;
    if (popoverTime) popoverTime.textContent = data.time;

    popover.classList.toggle("side-her", data.side === "her");
    popover.classList.add("is-open");
    popover.setAttribute("aria-hidden", "false");

    // Close shared truth if open
    if (truthBanner) {
      truthBanner.classList.remove("is-active");
      truthBanner.setAttribute("aria-hidden", "true");
    }

    if (!reduce) {
      gsap.fromTo(
        popover,
        { autoAlpha: 0.2, y: 12, scale: 0.97 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.5)" }
      );
    }
  };

  const closePopover = () => {
    if (!popover) return;
    popover.classList.remove("is-open");
    popover.setAttribute("aria-hidden", "true");
    pins.forEach((p) => p.classList.remove("is-inspected"));
    pills.forEach((pill) => pill.classList.remove("is-active"));
  };

  const updateBalanceScale = (val: number, showTruthModal = false) => {
    // Map slider 0..100 to angle -35deg .. +35deg
    const angle = ((val - 50) / 50) * 35;

    if (needleArm) {
      needleArm.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }

    const isHis = val < 40;
    const isHer = val > 60;
    const isBalanced = val >= 40 && val <= 60;

    if (glowHis) glowHis.classList.toggle("is-active", isHis);
    if (glowHer) glowHer.classList.toggle("is-active", isHer);

    if (hudBtnHis) {
      hudBtnHis.classList.toggle("is-active", isHis);
      hudBtnHis.setAttribute("aria-pressed", isHis ? "true" : "false");
    }
    if (hudBtnHer) {
      hudBtnHer.classList.toggle("is-active", isHer);
      hudBtnHer.setAttribute("aria-pressed", isHer ? "true" : "false");
    }

    if (markerHis) markerHis.classList.toggle("is-active", isHis);
    if (markerTruth) markerTruth.classList.toggle("is-active", isBalanced);
    if (markerHer) markerHer.classList.toggle("is-active", isHer);

    if (telemetryText) {
      if (isBalanced) {
        telemetryText.textContent = "⚖️ EQUILIBRIUM REACHED · SHARED TRUTH UNLOCKED";
      } else if (isHis) {
        telemetryText.textContent = "SCALE TILTED: +52.4 KG BAGGAGE IMBALANCE (HIS REALITY)";
      } else {
        telemetryText.textContent = "SCALE OVERLOAD: 2,183% OVERWEIGHT (HER REALITY)";
      }
    }

    if (plateImg && !reduce) {
      const panX = isHis ? 1.5 : isHer ? -1.5 : 0;
      plateImg.style.transform = `scale(1.02) translateX(${panX}%)`;
    }

    if ((isBalanced && showTruthModal) || showTruthModal) {
      closePopover();
      if (truthBanner) {
        truthBanner.classList.add("is-active");
        truthBanner.setAttribute("aria-hidden", "false");
        playTactileSwitchClick();
      }
    }
  };

  // Pin events
  pins.forEach((pin) => {
    pin.addEventListener("click", () => {
      const pinId = pin.dataset.pin;
      if (pinId) inspectItem(pinId);
    });
  });

  // Pill strip events
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const pinId = pill.dataset.targetPin;
      if (pinId) inspectItem(pinId);
    });
  });

  // Popover close
  if (popoverCloseBtn) {
    popoverCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closePopover();
    });
  }

  // Truth banner backdrop click to dismiss
  if (truthBanner) {
    truthBanner.addEventListener("click", (e) => {
      if (e.target === truthBanner) {
        truthBanner.classList.remove("is-active");
        truthBanner.setAttribute("aria-hidden", "true");
        if (slider) slider.value = "15";
        updateBalanceScale(15);
      }
    });
  }

  // Slider interaction
  if (slider) {
    slider.addEventListener("input", () => {
      const val = parseInt(slider.value, 10);
      updateBalanceScale(val, val >= 48 && val <= 52);
    });
  }

  // Marker buttons
  if (markerHis) {
    markerHis.addEventListener("click", () => {
      if (slider) slider.value = "15";
      updateBalanceScale(15);
      inspectItem("toothbrush");
    });
  }

  if (markerTruth) {
    markerTruth.addEventListener("click", () => {
      if (slider) slider.value = "50";
      updateBalanceScale(50, true);
    });
  }

  if (markerHer) {
    markerHer.addEventListener("click", () => {
      if (slider) slider.value = "85";
      updateBalanceScale(85);
      inspectItem("lehenga");
    });
  }

  // HUD buttons
  if (hudBtnHis) {
    hudBtnHis.addEventListener("click", () => {
      if (slider) slider.value = "15";
      updateBalanceScale(15);
      inspectItem("toothbrush");
    });
  }

  if (hudBtnHer) {
    hudBtnHer.addEventListener("click", () => {
      if (slider) slider.value = "85";
      updateBalanceScale(85);
      inspectItem("lehenga");
    });
  }

  if (btnBalanceTruth) {
    btnBalanceTruth.addEventListener("click", () => {
      if (slider) slider.value = "50";
      updateBalanceScale(50, true);
    });
  }

  if (btnResumeAudit) {
    btnResumeAudit.addEventListener("click", (e) => {
      e.stopPropagation();
      if (truthBanner) {
        truthBanner.classList.remove("is-active");
        truthBanner.setAttribute("aria-hidden", "true");
      }
      if (slider) slider.value = "15";
      updateBalanceScale(15);
    });
  }

  // Keyboard navigation (1: His, 2: Shared Truth, 3: Her, Escape: close)
  section.addEventListener("keydown", (e) => {
    if (e.key === "1") {
      if (slider) slider.value = "15";
      updateBalanceScale(15);
      inspectItem("toothbrush");
    } else if (e.key === "2") {
      if (slider) slider.value = "50";
      updateBalanceScale(50, true);
    } else if (e.key === "3") {
      if (slider) slider.value = "85";
      updateBalanceScale(85);
      inspectItem("lehenga");
    } else if (e.key === "Escape") {
      closePopover();
      if (truthBanner) {
        truthBanner.classList.remove("is-active");
        truthBanner.setAttribute("aria-hidden", "true");
      }
    }
  });

  // Initial state setup
  updateBalanceScale(15);
}

/** Section 8: Tour Schedule Filtering & Instant Search */
function setupTourInteractions(): void {
  const filterTabs = document.querySelectorAll<HTMLButtonElement>(".region-tab");
  const featuredCards = document.querySelectorAll<HTMLElement>(".featured-tour-card");
  const schedRows = document.querySelectorAll<HTMLElement>(".tour-row-card");
  const expandBtn = document.querySelector<HTMLButtonElement>("#toggle-full-schedule-btn");
  const drawer = document.querySelector<HTMLDivElement>("#full-schedule-drawer");
  const btnText = document.querySelector<HTMLElement>("#expand-btn-text");

  const searchInput = document.querySelector<HTMLInputElement>("#tour-search-input");
  const searchClear = document.querySelector<HTMLButtonElement>("#tour-search-clear");
  const countBadge = document.querySelector<HTMLElement>("#tour-search-count");
  const noResultsBox = document.querySelector<HTMLDivElement>("#tour-no-results");
  const noResultsQuery = document.querySelector<HTMLElement>("#no-results-query");
  const resetBtn = document.querySelector<HTMLButtonElement>("#reset-tour-search-btn");
  const cityChips = document.querySelectorAll<HTMLButtonElement>(".tour-city-chip");

  let activeRegionFilter = "all";
  let activeSearchQuery = "";

  const applyFilters = () => {
    let visibleCount = 0;
    const q = activeSearchQuery.toLowerCase().trim();

    if (searchClear) {
      searchClear.style.display = q ? "block" : "none";
    }

    // Filter featured 4 cities
    featuredCards.forEach((card) => {
      const reg = card.dataset.region || "";
      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      card.style.display = matchRegion ? "block" : "none";
    });

    // Filter drawer rows
    schedRows.forEach((row) => {
      const reg = row.dataset.region || "";
      const city = row.dataset.city || "";
      const venue = row.dataset.venue || "";

      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || city.includes(q) || venue.includes(q) || reg.includes(q);

      if (matchRegion && matchSearch) {
        row.style.display = "grid";
        visibleCount++;
      } else {
        row.style.display = "none";
      }
    });

    if (countBadge) {
      countBadge.textContent = `SHOWING ${visibleCount} OF ${schedRows.length} DATES`;
    }

    if (noResultsBox && noResultsQuery) {
      if (visibleCount === 0) {
        noResultsBox.style.display = "block";
        noResultsQuery.textContent = q || activeRegionFilter.toUpperCase();
      } else {
        noResultsBox.style.display = "none";
      }
    }
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      activeRegionFilter = tab.dataset.regionFilter || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = (e.target as HTMLInputElement).value;
      cityChips.forEach((chip) => {
        const term = chip.dataset.searchTerm?.toLowerCase() || "";
        chip.classList.toggle("is-active", term === activeSearchQuery.toLowerCase().trim());
      });
      applyFilters();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      activeSearchQuery = "";
      cityChips.forEach((c) => c.classList.remove("is-active"));
      searchInput.focus();
      applyFilters();
    });
  }

  if (resetBtn && searchInput) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      activeSearchQuery = "";
      activeRegionFilter = "all";
      filterTabs.forEach((t) => {
        t.classList.toggle("is-active", t.dataset.regionFilter === "all");
      });
      cityChips.forEach((c) => c.classList.remove("is-active"));
      applyFilters();
    });
  }

  cityChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const term = chip.dataset.searchTerm || "";
      if (activeSearchQuery.toLowerCase() === term.toLowerCase()) {
        chip.classList.remove("is-active");
        if (searchInput) searchInput.value = "";
        activeSearchQuery = "";
      } else {
        cityChips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        if (searchInput) searchInput.value = term;
        activeSearchQuery = term;
      }
      applyFilters();
    });
  });

  if (expandBtn && drawer) {
    expandBtn.addEventListener("click", () => {
      const isClosed = drawer.style.display === "none";
      drawer.style.display = isClosed ? "block" : "none";
      expandBtn.setAttribute("aria-expanded", isClosed ? "true" : "false");
      if (btnText) {
        btnText.innerHTML = isClosed 
          ? "HIDE FULL TOUR SCHEDULE &uarr;" 
          : "EXPLORE ALL 33 GLOBAL TOUR DATES &darr;";
      }
      if (isClosed && searchInput) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });
  }
}

/** Section 6: Corporate-to-Marriage Translation Instrument */
function setupSlotMachine(): void {
  const nextBtn = document.querySelector<HTMLButtonElement>("#trans-next-btn");
  const copyBtn = document.querySelector<HTMLButtonElement>("#trans-copy-btn");
  const copyLabel = document.querySelector<HTMLElement>("#trans-copy-label");
  const filterBtns = document.querySelectorAll<HTMLButtonElement>(".trans-cat-pill");

  const corpText = document.querySelector<HTMLElement>("#corp-statement-text");
  const typewriterHomeText = document.querySelector<HTMLElement>("#typewriter-home-text");
  const typewriterCaret = document.querySelector<HTMLElement>("#typewriter-caret");
  const ruleText = document.querySelector<HTMLElement>("#amit-rule-text");
  const categoryTag = document.querySelector<HTMLElement>("#corp-category-tag");
  const counterTag = document.querySelector<HTMLElement>("#scenario-counter");

  if (!nextBtn || !corpText) return;

  interface Scenario {
    category: "office" | "finances" | "whatsapp" | "travel";
    categoryLabel: string;
    corporate: string;
    home: string;
    rule: string;
  }

  const allScenarios: Scenario[] = [
    {
      category: "office",
      categoryLabel: "OFFICE VS HOME",
      corporate: "“Let's take this offline and circle back after evaluating our Q3 bandwidth.”",
      home: "“I am pretending to listen, but if I answer right now we won’t speak for three days.”",
      rule: "Amit's Finding: Never offer a logical solution when someone is venting. Just nod slowly and say 'Bilkul'.",
    },
    {
      category: "finances",
      categoryLabel: "MONTHLY BUDGET",
      corporate: "“We need to optimize our capital expenditure and prioritize essential runway.”",
      home: "“She wants a 4-day weekend in Udaipur with 14 outfit changes; my account has Rs 4,200 and a prayer.”",
      rule: "Amit's Finding: In an Indian household, 'budgeting' is an abstract philosophical debate, not an actual practice.",
    },
    {
      category: "whatsapp",
      categoryLabel: "FAMILY WHATSAPP",
      corporate: "“As per my previous email, please review the attached compliance protocols.”",
      home: "“My mother-in-law has already vetoed our vacation plan in the family WhatsApp group without typing a single word.”",
      rule: "Amit's Finding: The family WhatsApp group has 42 admins and zero fact-checkers.",
    },
    {
      category: "travel",
      categoryLabel: "TRAVEL DELAYS",
      corporate: "“We are experiencing a temporary operational delay in delivery timelines.”",
      home: "“‘Bas 5 minute mein tayar ho rahi hoon!’ — Physics and NASA are still unable to calculate this specific duration.”",
      rule: "Amit's Finding: 5 minutes in marriage time is roughly 87 minutes in civilian time.",
    },
    {
      category: "office",
      categoryLabel: "OFFICE VS HOME",
      corporate: "“Let's align our core performance metrics to ensure maximum stakeholder satisfaction.”",
      home: "“At work I was Vice President managing 200 people. At home, my wife’s only KPI for me is: 'Bas chup raho'.”",
      rule: "Amit's Finding: Agreeing with your wife has 100% ROI. Even when you are right, refer to Clause 1.",
    },
    {
      category: "whatsapp",
      categoryLabel: "FAMILY WHATSAPP",
      corporate: "“Competitor benchmarking indicates we are currently lagging behind industry standards.”",
      home: "“Sharma Ji’s beta scored 97%. You scored 96.8%, which in our house is treated as treason.”",
      rule: "Amit's Finding: Indian parents don’t care if you succeed; they just want you to beat Sharma Ji’s son.",
    },
  ];

  let currentCategory = "all";
  let activeIndex = 0;
  let audioCtx: AudioContext | null = null;
  let typewriterTimer: number | null = null;
  let isTyping = false;

  const getFilteredList = () => {
    if (currentCategory === "all") return allScenarios;
    return allScenarios.filter((s) => s.category === currentCategory);
  };

  const playTypewriterKeySound = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      const pitches = [1850, 2100, 2350, 2600];
      const pitch = pitches[Math.floor(Math.random() * pitches.length)];
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.02);
    } catch {
      // Audio fallback
    }
  };

  const renderScenario = (animate = true) => {
    const list = getFilteredList();
    if (!list.length) return;
    if (activeIndex >= list.length) activeIndex = 0;

    const item = list[activeIndex];

    if (categoryTag) categoryTag.textContent = item.categoryLabel;
    if (counterTag) counterTag.textContent = `SITUATION ${activeIndex + 1} OF ${list.length}`;

    if (typewriterTimer) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
    }

    if (animate) {
      isTyping = true;
      nextBtn.classList.add("is-typing");
      const nextBtnSpan = nextBtn.querySelector("span");
      if (nextBtnSpan) nextBtnSpan.textContent = "DECODING REALITY...";

      corpText.textContent = item.corporate;
      if (ruleText) ruleText.textContent = item.rule;

      gsap.fromTo(
        [corpText, ruleText],
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.25, ease: "power2.out" }
      );

      const targetText = item.home;
      let charIdx = 0;
      if (typewriterHomeText) {
        typewriterHomeText.textContent = "";
        if (typewriterCaret) typewriterCaret.classList.remove("is-hidden");

        typewriterTimer = window.setInterval(() => {
          if (charIdx < targetText.length) {
            typewriterHomeText.textContent = targetText.slice(0, charIdx + 1);
            if (charIdx % 2 === 0) playTypewriterKeySound();
            charIdx++;
          } else {
            if (typewriterTimer) clearInterval(typewriterTimer);
            typewriterTimer = null;
            isTyping = false;
            nextBtn.classList.remove("is-typing");
            if (nextBtnSpan) nextBtnSpan.textContent = "TRANSLATE NEXT SITUATION";
          }
        }, 22);
      }
    } else {
      corpText.textContent = item.corporate;
      if (typewriterHomeText) typewriterHomeText.textContent = item.home;
      if (ruleText) ruleText.textContent = item.rule;
    }
  };

  nextBtn.addEventListener("click", () => {
    if (isTyping) return;
    const list = getFilteredList();
    activeIndex = (activeIndex + 1) % list.length;
    renderScenario(true);
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCategory = btn.dataset.cat || "all";
      activeIndex = 0;
      renderScenario(true);
    });
  });

  if (copyBtn && copyLabel) {
    copyBtn.addEventListener("click", async () => {
      const list = getFilteredList();
      const item = list[activeIndex];
      const textToCopy = `Corporate Jargon: ${item.corporate}\nDomestic Reality: ${item.home}\n— Amit Tandon (amittandon.in)`;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = copyLabel.textContent;
        copyLabel.textContent = "COPIED TO CLIPBOARD! ✓";
        setTimeout(() => {
          copyLabel.textContent = originalText;
        }, 2000);
      } catch {
        // Fallback
      }
    });
  }

  renderScenario(false);
}

/** Viral Gyan Bites Deck Controller */
function setupGyanDeck(): void {
  const cardFrame = document.querySelector<HTMLElement>("#gyan-card-frame");
  const cardInner = document.querySelector<HTMLElement>("#gyan-card-inner");
  const activeImg = document.querySelector<HTMLImageElement>("#gyan-active-img");
  const pillNum = document.querySelector<HTMLElement>("#gyan-pill-num");
  const captionText = document.querySelector<HTMLElement>("#gyan-caption-text");
  const whatsappLink = document.querySelector<HTMLAnchorElement>("#btn-gyan-whatsapp");

  const dealBtn = document.querySelector<HTMLButtonElement>("#btn-gyan-deal");
  const nextBtn = document.querySelector<HTMLButtonElement>("#btn-gyan-next");
  const prevBtn = document.querySelector<HTMLButtonElement>("#btn-gyan-prev");

  if (!cardFrame || !activeImg || !captionText) return;

  const gyanItems = [
    { id: 1, caption: "WhatsApp Family Groups: 42 members, 120 Good Morning forwards by 7 AM, zero replies to genuine questions." },
    { id: 2, caption: "Punjabis in Agra: If the monument doesn't have butter chicken within 200 meters, why did Shah Jahan even build it?" },
    { id: 3, caption: "AC Temperature Diplomacy: 18°C is Arctic tundra, 24°C is Sahara desert, 22°C is a pending court case." },
    { id: 4, caption: "Parenting Gen-Z: You pay ₹4 lakh school fees so they can reply 'bruh' to your life advice." },
    { id: 5, caption: "The 5-Minute Myth: 'Bas 5 minute mein tayar ho rahi hoon' violates Einstein's theory of general relativity." },
    { id: 6, caption: "Diet in Delhi: Starting a strict diet on Monday, ordering 2 plates of Chole Bhature on Tuesday morning." },
    { id: 7, caption: "Shopping with Wife: Walking 14 kilometers inside a mall to buy a hair clip that was available at the entrance." },
    { id: 8, caption: "The Married Guy Rule: Apologizing is not an admission of guilt; it is a tactical ceasefire." },
    { id: 9, caption: "Flight Announcements: Indian uncle unbuckling his seatbelt the microsecond the aircraft tire touches the runway." },
    { id: 10, caption: "Wedding Envelopes (Shagun): Tracking exactly how much Sharma ji gave in 2011 so we can return ₹501 in 2026." },
  ];

  let currentIndex = 0;

  // 3D Card Parallax on Mouse Move
  cardFrame.addEventListener("pointermove", (e: PointerEvent) => {
    const rect = cardFrame.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / rect.height) * 16;
    const rotY = (x / rect.width) * 16;
    if (cardInner) {
      cardInner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.02)`;
    }
  });

  cardFrame.addEventListener("pointerleave", () => {
    if (cardInner) {
      cardInner.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  });

  const showGyan = (index: number) => {
    currentIndex = (index + gyanItems.length) % gyanItems.length;
    const item = gyanItems[currentIndex];

    gsap.to(activeImg, {
      opacity: 0,
      scale: 0.95,
      duration: 0.16,
      onComplete: () => {
        activeImg.src = `/gyan/gyan-${item.id}.jpg`;
        if (pillNum) pillNum.textContent = `CARD ${String(item.id).padStart(2, "0")} OF 10`;
        captionText.textContent = `"${item.caption}"`;
        if (whatsappLink) {
          whatsappLink.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Amit Tandon Gyan Bite: ${item.caption} (amittandon.in)`)}`;
        }

        gsap.to(activeImg, {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      },
    });
  };

  dealBtn?.addEventListener("click", () => {
    const nextIndex = Math.floor(Math.random() * gyanItems.length);
    showGyan(nextIndex === currentIndex ? (nextIndex + 1) % gyanItems.length : nextIndex);
  });

  nextBtn?.addEventListener("click", () => showGyan(currentIndex + 1));
  prevBtn?.addEventListener("click", () => showGyan(currentIndex - 1));
}

/** Section 7: Cinema Player Modal Controller */
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

/** Ambient Warm Tungsten Roving Glow */
function setupAmbientSpotlight(reduce: boolean): void {
  const spotlight = document.querySelector<HTMLDivElement>("#stage-mouse-spotlight");
  if (!spotlight || reduce) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight * 0.35;
  let currentX = mouseX;
  let currentY = mouseY;
  let rafId: number | null = null;

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateSpotlight);
    }
  }, { passive: true });

  function updateSpotlight() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    document.documentElement.style.setProperty("--mouse-x", `${currentX.toFixed(1)}px`);
    document.documentElement.style.setProperty("--mouse-y", `${currentY.toFixed(1)}px`);

    if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
      rafId = requestAnimationFrame(updateSpotlight);
    } else {
      rafId = null;
    }
  }
}

/** Micro-interaction: Magnetic Playhead on Cinema & Video Cards */
function setupMagneticPlayheads(reduce: boolean): void {
  if (reduce) return;

  const magneticTargets: { container: HTMLElement; target: HTMLElement; maxDelta: number }[] = [];

  // Featured Performance Card
  const featuredFrame = document.querySelector<HTMLElement>(".featured-thumbnail-frame");
  const featuredPlayBtn = document.querySelector<HTMLElement>(".cinema-play-trigger");
  if (featuredFrame && featuredPlayBtn) {
    magneticTargets.push({ container: featuredFrame, target: featuredPlayBtn, maxDelta: 28 });
  }

  // Supporting Clip Cards
  const supportingBoxes = document.querySelectorAll<HTMLElement>(".supporting-thumbnail-box");
  supportingBoxes.forEach((box) => {
    const playBtn = box.querySelector<HTMLElement>(".supporting-play-btn");
    if (playBtn) {
      magneticTargets.push({ container: box, target: playBtn, maxDelta: 16 });
    }
  });

  magneticTargets.forEach(({ container, target, maxDelta }) => {
    gsap.set(target, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(target, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(target, "y", { duration: 0.35, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const rawX = (e.clientX - centerX) * 0.32;
      const rawY = (e.clientY - centerY) * 0.32;

      // Clamp to maxDelta
      const clampedX = Math.max(-maxDelta, Math.min(maxDelta, rawX));
      const clampedY = Math.max(-maxDelta, Math.min(maxDelta, rawY));

      xTo(clampedX);
      yTo(clampedY);
    };

    const onMouseLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: "elastic.out(1, 0.45)",
      });
    };

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave);
  });
}

/** Micro-interaction: Stand-Up Mic Soundwave Pulse on Click */
function setupMicAudioWaveClick(): void {
  window.addEventListener(
    "click",
    (e: MouseEvent) => {
      const wave = document.createElement("div");
      wave.className = "mic-click-wave";
      wave.style.left = `${e.clientX}px`;
      wave.style.top = `${e.clientY}px`;
      document.body.appendChild(wave);

      gsap.fromTo(
        wave,
        { scale: 0.2, opacity: 0.9 },
        {
          scale: 2.2,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            wave.remove();
          },
        }
      );
    },
    { passive: true }
  );
}


