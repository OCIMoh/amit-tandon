import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { foley } from "./foley";

gsap.registerPlugin(ScrollTrigger);

export async function setupMotion(): Promise<void> {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Initialize smooth scrolling with natural duration and responsive wheel handling
  const lenis = new Lenis({
    duration: reduce ? 0 : 0.65,
    smoothWheel: true,
    touchMultiplier: 1.0,
    wheelMultiplier: 1.0,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(500, 33);

  // Setup sub-systems
  setupNavScroll();
  setupPosterHero(reduce);
  setupScrollReveals(reduce);
  setupEvidenceDeskMotion(reduce);
  setupTourInteractions();
  setupCinemaModal();
  setupCinemaLightbox();
  setupMagneticPlayheads(reduce);
  setupAmbientSpotlight(reduce);
  setupMicAudioWaveClick();
  setupFooterArchivalStamp();
  setupInteractiveStamps();
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

/** Theatrical Arena Hero Controller (Two-Layer Background Stage + Hover Spotlight Reveal) */
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

  // Wire up the dual-layer background spotlight (reveals a little part of multiple-faces on hover)
  setupHeroBackgroundSpotlight(heroSection, playTactileFeedback);

  // Interactive Follow-Spotlight & Mouse Physics
  if (!reduce) {
    let targetX = 50;
    let currentX = 50;

    let rafId: number | null = null;
    const updateSpotlight = () => {
      currentX += (targetX - currentX) * 0.08;
      const tilt = ((currentX - 50) / 50) * 12;
      heroSection.style.setProperty("--spotlight-x", `${currentX.toFixed(2)}%`);
      heroSection.style.setProperty("--spotlight-tilt", `${tilt.toFixed(2)}deg`);
      if (Math.abs(targetX - currentX) > 0.05) {
        rafId = requestAnimationFrame(updateSpotlight);
      } else {
        rafId = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      targetX = Math.max(15, Math.min(85, px));
      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    };

    heroSection.addEventListener("pointermove", handlePointerMove, { passive: true });

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
    // Floating Audit Collage 3D Parallax Tilt
    setupAuditCollagePhysics(heroSection, playTactileFeedback);
  }

  // Entrance Stagger Animation
  if (!reduce) {
    const isMobile = window.innerWidth <= 768;
    const billboard = heroSection.querySelector(".billboard-giant-word");
    const folder = heroSection.querySelector(".dossier-manilla-folder");
    const receipt = heroSection.querySelector(".thermal-receipt-artifact");
    const photo = heroSection.querySelector(".photo-candid-artifact");
    const tag = heroSection.querySelector(".luggage-tag-artifact");
    const bottomBand = heroSection.querySelector(".panoramic-bottom-band");
    const tl = gsap.timeline({ delay: 0.1 });
    if (billboard) tl.fromTo(billboard, { autoAlpha: 0, y: 50, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" });
    if (folder) tl.fromTo(folder, { autoAlpha: 0, y: 60, rotation: isMobile ? 0 : -6, scale: 0.92 }, { autoAlpha: 1, y: 0, rotation: isMobile ? 0 : -1.5, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.5");
    if (receipt) tl.fromTo(receipt, { autoAlpha: 0, x: -30, rotation: isMobile ? 0 : -8 }, { autoAlpha: 1, x: 0, rotation: isMobile ? 0 : 3.5, duration: 0.7, ease: "back.out(1.4)" }, "-=0.6");
    if (photo) tl.fromTo(photo, { autoAlpha: 0, scale: 0.85, y: 20 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6");
    if (tag) tl.fromTo(tag, { autoAlpha: 0, x: 30, rotation: isMobile ? 0 : 12 }, { autoAlpha: 1, x: 0, rotation: isMobile ? 0 : 4, duration: 0.7, ease: "back.out(1.4)" }, "-=0.6");
    if (bottomBand) tl.fromTo(bottomBand, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

  }
}

/** 60fps Asymmetric Physics & Tactile Mouse Parallax for Audit Collage */
function setupAuditCollagePhysics(heroSection: HTMLElement, _playSound?: () => void): void {
  if (window.innerWidth <= 768) return; // Dedicated to desktop pointer hover
  const folder = heroSection.querySelector<HTMLElement>(".dossier-manilla-folder");
  const receipt = heroSection.querySelector<HTMLElement>(".thermal-receipt-artifact");
  const photo = heroSection.querySelector<HTMLElement>(".photo-candid-artifact");
  const tag = heroSection.querySelector<HTMLElement>(".luggage-tag-artifact");
  const paperclips = heroSection.querySelectorAll<HTMLElement>(".brass-paperclip");
  const stamps = heroSection.querySelectorAll<HTMLElement>(".rubber-stamp");
  if (!folder) return;

  let isFolderHovered = false;

  // 1. Direct Case File Hover & 3D Tilt on Pointer Movements (Moves dynamically on hover, no click needed)
  folder.addEventListener("pointerenter", () => {
    isFolderHovered = true;
    foley.playPaperRustle(0.75);

    // Forward and downward inspection glide on hover (unveiling the billboard title)
    gsap.to(folder, {
      y: 32,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });

    // Sub-artifacts fan out on hover for inspection
    if (receipt) {
      gsap.to(receipt, {
        x: -14,
        y: -6,
        rotationZ: 5.5,
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
    if (photo) {
      gsap.to(photo, {
        y: -8,
        scale: 1.04,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
    if (tag) {
      gsap.to(tag, {
        x: 18,
        y: 6,
        rotationZ: 8.5,
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  });

  folder.addEventListener("pointermove", (e: PointerEvent) => {
    const folderRect = folder.getBoundingClientRect();
    // Normalized [-1, 1] relative to folder center
    const relX = (e.clientX - (folderRect.left + folderRect.width / 2)) / (folderRect.width / 2);
    const relY = (e.clientY - (folderRect.top + folderRect.height / 2)) / (folderRect.height / 2);
    const fx = Math.max(-1, Math.min(1, relX));
    const fy = Math.max(-1, Math.min(1, relY));

    // Dynamic light coordinates on folder
    const lightX = Math.max(0, Math.min(100, ((e.clientX - folderRect.left) / folderRect.width) * 100));
    const lightY = Math.max(0, Math.min(100, ((e.clientY - folderRect.top) / folderRect.height) * 100));
    folder.style.setProperty("--light-x", `${lightX.toFixed(1)}%`);
    folder.style.setProperty("--light-y", `${lightY.toFixed(1)}%`);

    // Dynamic 3D tilt tracking cursor across the case file
    gsap.to(folder, {
      transformPerspective: 1200,
      rotationX: -fy * 10,
      rotationY: fx * 12,
      rotationZ: -1.5 + fx * 2.5,
      x: fx * 16,
      y: 32 + fy * 12,
      scale: 1.02,
      duration: 0.28,
      ease: "power1.out",
      overwrite: "auto"
    });

    if (receipt) {
      gsap.to(receipt, {
        transformPerspective: 900,
        rotationX: -fy * 14,
        rotationY: fx * 16,
        rotationZ: 5.5 + fx * 4,
        x: -14 + fx * 24,
        y: -6 + fy * 16,
        scale: 1.03,
        duration: 0.32,
        ease: "power1.out",
        overwrite: "auto"
      });
    }

    if (photo) {
      gsap.to(photo, {
        transformPerspective: 1000,
        rotationX: -fy * 8,
        rotationY: fx * 10,
        rotationZ: -1.5 + fx * 2,
        x: fx * 14,
        y: -8 + fy * 10,
        scale: 1.04,
        duration: 0.35,
        ease: "power1.out",
        overwrite: "auto"
      });
    }

    if (tag) {
      gsap.to(tag, {
        transformPerspective: 800,
        transformOrigin: "50% 0%",
        rotationZ: 8.5 + fx * 12,
        x: 18 + fx * 28,
        y: 6 + fy * 18,
        scale: 1.03,
        duration: 0.28,
        ease: "power1.out",
        overwrite: "auto"
      });
    }
  });

  folder.addEventListener("pointerleave", () => {
    isFolderHovered = false;
    foley.playPaperRustle(0.4);

    gsap.to(folder, {
      rotationX: 0,
      rotationY: 0,
      rotationZ: -1.5,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
      overwrite: "auto"
    });

    if (receipt) {
      gsap.to(receipt, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 3.5,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    if (photo) {
      gsap.to(photo, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: -1.5,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    if (tag) {
      gsap.to(tag, {
        rotationZ: 4,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  });

  // 2. Ambient Parallax when hovering hero canvas outside the folder
  heroSection.addEventListener("pointermove", (e: PointerEvent) => {
    if (isFolderHovered) return; // Dedicated folder hover takes priority

    const rect = heroSection.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Ambient subtle tilt
    gsap.to(folder, {
      transformPerspective: 1200,
      rotationX: -ny * 5,
      rotationY: nx * 7,
      rotationZ: -1.5 + nx * 1.2,
      x: nx * 10,
      y: ny * 6,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto"
    });

    if (receipt) {
      gsap.to(receipt, {
        transformPerspective: 900,
        rotationX: -ny * 7,
        rotationY: nx * 9,
        rotationZ: 3.5 + nx * 2.5,
        x: nx * 16,
        y: ny * 12,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    if (photo) {
      gsap.to(photo, {
        transformPerspective: 1000,
        rotationX: -ny * 4,
        rotationY: nx * 5,
        rotationZ: -1.5 + nx * 1.4,
        x: nx * 8,
        y: ny * 6,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    if (tag) {
      gsap.to(tag, {
        transformPerspective: 800,
        transformOrigin: "50% 0%",
        rotationZ: 4 + nx * 6,
        x: nx * 20,
        y: ny * 14,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  }, { passive: true });

  heroSection.addEventListener("pointerleave", () => {
    if (isFolderHovered) return;
    gsap.to(folder, {
      rotationX: 0,
      rotationY: 0,
      rotationZ: -1.5,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto"
    });
    if (receipt) gsap.to(receipt, { rotationX: 0, rotationY: 0, rotationZ: 3.5, x: 0, y: 0, scale: 1, duration: 0.8, ease: "power2.out", overwrite: "auto" });
    if (photo) gsap.to(photo, { rotationX: 0, rotationY: 0, rotationZ: -1.5, x: 0, y: 0, scale: 1, duration: 0.8, ease: "power2.out", overwrite: "auto" });
    if (tag) gsap.to(tag, { rotationZ: 4, x: 0, y: 0, scale: 1, duration: 0.8, ease: "power2.out", overwrite: "auto" });
  });

  // Material Foley sound triggers
  if (receipt) {
    receipt.addEventListener("pointerenter", () => foley.playPaperRustle(1.2));
  }
  if (photo) {
    photo.addEventListener("pointerenter", () => foley.playTapeSnap());
  }
  if (tag) {
    tag.addEventListener("pointerenter", () => foley.playPaperRustle(0.9));
  }
  paperclips.forEach(clip => {
    clip.style.pointerEvents = "auto";
    clip.style.cursor = "pointer";
    clip.addEventListener("pointerenter", () => foley.playMetalClick());
    clip.addEventListener("click", () => foley.playMetalClick());
  });
  stamps.forEach(stamp => {
    stamp.style.pointerEvents = "auto";
    stamp.style.cursor = "pointer";
    stamp.addEventListener("pointerenter", () => foley.playStampThud());
    stamp.addEventListener("click", () => foley.playStampThud());
  });
}

/** Two-Layer Background Spotlight Controller: on hover reveals a circular part of multiple-faces.jpg */
function setupHeroBackgroundSpotlight(heroSection: HTMLElement, onSoundFeedback?: () => void): void {
  let isHovered = false;

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const rect = heroSection.getBoundingClientRect();
    let clientX: number;
    let clientY: number;

    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ("clientX" in e) {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    } else {
      return;
    }

    const px = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const py = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));

    heroSection.style.setProperty("--mouse-x", `${px.toFixed(2)}%`);
    heroSection.style.setProperty("--mouse-y", `${py.toFixed(2)}%`);
  };

  heroSection.addEventListener("mousemove", handleMove as EventListener, { passive: true });
  heroSection.addEventListener("touchmove", handleMove as EventListener, { passive: true });

  heroSection.addEventListener("mouseenter", () => {
    heroSection.classList.add("is-hovered");
    if (!isHovered) {
      onSoundFeedback?.();
      isHovered = true;
    }
  });

  heroSection.addEventListener("mouseleave", () => {
    heroSection.classList.remove("is-hovered");
    isHovered = false;
  });

  // Touch tap / drag for touchscreens
  heroSection.addEventListener("touchstart", (e) => {
    handleMove(e);
    heroSection.classList.add("is-hovered");
  }, { passive: true });
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

/** Case File #41: The Declassified Evidence Desk Controller */
function setupEvidenceDeskMotion(reduce: boolean): void {
  const section = document.querySelector<HTMLElement>("#about, #perspective");
  if (!section) return;

  // 1. Evidence Case Docket Page Flipping (Physical Document Interaction)
  const tabBtns = section.querySelectorAll<HTMLButtonElement>(".case-index-tab");
  const sheets = section.querySelectorAll<HTMLElement>(".case-evidence-sheet");
  const docketStack = section.querySelector<HTMLElement>("#case-docket-stack");
  const waxSeal = section.querySelector<HTMLElement>(".dock-wax-seal");
  const customsStamps = section.querySelectorAll<HTMLElement>(".customs-stamp");

  let currentSheetIdx = 0;
  const totalSheets = sheets.length;

  const goToSheet = (targetIdx: number, playSound = false) => {
    if (targetIdx === currentSheetIdx && sheets[currentSheetIdx]?.classList.contains("is-active")) {
      return;
    }

    currentSheetIdx = (targetIdx + totalSheets) % totalSheets;

    // Trigger physical cardstock page turn foley
    if (playSound) {
      foley.playDocketFlip();
    }

    // Update Tab States
    tabBtns.forEach((btn, idx) => {
      const isTarget = idx === currentSheetIdx;
      btn.classList.toggle("is-active", isTarget);
      btn.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    // Update Sheets with Physical Paper Flip Animation
    sheets.forEach((sheet, idx) => {
      const isMatch = idx === currentSheetIdx;
      if (isMatch) {
        sheet.removeAttribute("hidden");
        sheet.classList.add("is-active");

        if (!reduce) {
          gsap.fromTo(
            sheet,
            { opacity: 0, x: 22, rotationY: -4, rotate: 1 },
            { opacity: 1, x: 0, rotationY: 0, rotate: 0, duration: 0.42, ease: "power2.out" }
          );
        }
      } else {
        sheet.classList.remove("is-active");
        sheet.setAttribute("hidden", "true");
      }
    });
  };

  // Auto-cycle Gyan Records every 2 seconds between the 3
  let autoCycleTimer: number | null = null;
  let isDocketHovered = false;

  const startAutoCycle = () => {
    if (autoCycleTimer !== null) clearInterval(autoCycleTimer);
    autoCycleTimer = window.setInterval(() => {
      if (!isDocketHovered && document.visibilityState === "visible") {
        goToSheet(currentSheetIdx + 1, false);
      }
    }, 2000);
  };

  startAutoCycle();

  if (docketStack) {
    docketStack.addEventListener("pointerenter", () => {
      isDocketHovered = true;
    });
    docketStack.addEventListener("pointerleave", () => {
      isDocketHovered = false;
    });
  }

  // Click on Index Tabs
  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSheet(idx, true);
      startAutoCycle();
    });
    btn.addEventListener("pointerenter", () => {
      foley.playPaperRustle(0.7);
    });
  });

  // Dog-ear corner page turn (dedicated page turn control — avoids conflict with stamping paper sheets)
  const dogEars = section.querySelectorAll<HTMLElement>(".dog-ear-corner");
  dogEars.forEach((de) => {
    de.addEventListener("pointerenter", () => {
      foley.playPaperRustle(0.9);
    });
    de.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSheet(currentSheetIdx + 1, true);
      startAutoCycle();
    });
  });

  // Wax seal interaction
  if (waxSeal) {
    waxSeal.addEventListener("click", (e) => {
      e.stopPropagation();
      foley.playWaxSeal();
    });
    waxSeal.addEventListener("pointerenter", () => {
      foley.playWaxSeal();
    });
  }

  // Customs stamps interaction
  customsStamps.forEach((stamp) => {
    stamp.addEventListener("click", (e) => {
      e.stopPropagation();
      foley.playCustomsStamp();
    });
    stamp.addEventListener("pointerenter", () => {
      foley.playCustomsStamp();
    });
  });

  // 2. Scroll-triggered entrance reveal for Master Folder & Dynamic Mouse Physics
  const folder = section.querySelector<HTMLElement>(".master-case-folder");
  if (folder && !reduce) {
    gsap.from(folder, {
      scrollTrigger: {
        trigger: folder,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 45,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });

    // 3. Dynamic Key Light & 3D Parallax on Folder and Photo Frames
    const photoLeft = folder.querySelector<HTMLElement>(".subject-photo-frame");
    const photoRight = folder.querySelector<HTMLElement>(".sheet-photo-frame");

    section.addEventListener("pointermove", (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      // Dynamic light coordinates on folder
      const folderRect = folder.getBoundingClientRect();
      const folderX = Math.max(0, Math.min(100, ((e.clientX - folderRect.left) / folderRect.width) * 100));
      const folderY = Math.max(0, Math.min(100, ((e.clientY - folderRect.top) / folderRect.height) * 100));
      folder.style.setProperty("--case-light-x", `${folderX.toFixed(1)}%`);
      folder.style.setProperty("--case-light-y", `${folderY.toFixed(1)}%`);

      // Subtle 3D gyroscopic tilt on master folder
      gsap.to(folder, {
        transformPerspective: 1600,
        rotationX: -ny * 3.5,
        rotationY: nx * 4.5,
        duration: 0.6,
        ease: "power2.out"
      });

      if (photoLeft) {
        gsap.to(photoLeft, {
          x: nx * 10,
          y: ny * 8,
          rotation: -2.5 + nx * 2,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (photoRight) {
        gsap.to(photoRight, {
          x: nx * 8,
          y: ny * 6,
          rotation: -1.5 + nx * 1.5,
          duration: 0.55,
          ease: "power1.out",
        });
      }
    }, { passive: true });

    section.addEventListener("pointerleave", () => {
      gsap.to(folder, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }
}

/** Section 4 & 5 Unified: The Backstage Tour Dispatch & Box Office Command Center */
function setupTourInteractions(): void {
  const filterTabs = document.querySelectorAll<HTMLButtonElement>(".region-tab");
  const featuredCards = document.querySelectorAll<HTMLElement>(".featured-tour-card");
  const solariRows = document.querySelectorAll<HTMLElement>(".solari-row");
  const schedGrid = document.querySelector<HTMLDivElement>("#schedule-cards-grid");
  const schedRows = document.querySelectorAll<HTMLElement>(".tour-row-card");
  const expandBtn = document.querySelector<HTMLButtonElement>("#toggle-full-schedule-btn");
  const btnText = document.querySelector<HTMLElement>("#expand-btn-text");

  const searchInput = document.querySelector<HTMLInputElement>("#tour-search-input");
  const searchClear = document.querySelector<HTMLButtonElement>("#tour-search-clear");
  const countBadge = document.querySelector<HTMLElement>("#tour-search-count");
  const noResultsBox = document.querySelector<HTMLDivElement>("#tour-no-results");
  const noResultsQuery = document.querySelector<HTMLElement>("#no-results-query");
  const resetBtn = document.querySelector<HTMLButtonElement>("#reset-tour-search-btn");
  const cityChips = document.querySelectorAll<HTMLButtonElement>(".tour-city-chip");
  const waRequestBtn = document.querySelector<HTMLAnchorElement>("#whatsapp-request-city-btn");

  let activeRegionFilter = "all";
  let activeSearchQuery = "";
  let isManuallyExpanded = false;

  // Kinetic Mechanical Solari Tile Flip
  const triggerSolariTileFlip = () => {
    foley.playSolariFlutter();
    const activeTiles = document.querySelectorAll<HTMLElement>(".solari-row:not([style*='display: none']) .flap-tile");
    if (activeTiles.length > 0) {
      gsap.fromTo(
        activeTiles,
        { transformPerspective: 400, rotateX: -80, opacity: 0.65 },
        {
          transformPerspective: 400,
          rotateX: 0,
          opacity: 1,
          duration: 0.32,
          stagger: 0.015,
          ease: "power2.out",
        }
      );
    }
  };

  const applyFilters = (isUserEvent = false) => {
    let visibleCount = 0;
    const q = activeSearchQuery.toLowerCase().trim();

    if (searchClear) {
      searchClear.style.display = q ? "block" : "none";
    }

    // Filter Solari Mechanical Rows
    solariRows.forEach((row) => {
      const reg = row.dataset.region || "";
      const text = row.textContent?.toLowerCase() || "";
      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || text.includes(q);
      row.style.display = matchRegion && matchSearch ? "grid" : "none";
    });

    if (isUserEvent) {
      triggerSolariTileFlip();
    }

    // Auto-expand the grid if user is searching or has selected a specific region
    const hasActiveFilter = Boolean(q || activeRegionFilter !== "all");
    const shouldBeExpanded = isManuallyExpanded || hasActiveFilter;
    if (schedGrid) {
      schedGrid.classList.toggle("is-expanded", shouldBeExpanded);
    }
    if (expandBtn && btnText) {
      expandBtn.setAttribute("aria-expanded", shouldBeExpanded ? "true" : "false");
      btnText.innerHTML = shouldBeExpanded
        ? "COLLAPSE FULL TOUR SCHEDULE &uarr;"
        : "EXPLORE ALL 32 GLOBAL TOUR DATES &darr;";
    }

    // Filter featured 4 flagship boarding passes
    featuredCards.forEach((card) => {
      const reg = card.dataset.region || "";
      const text = card.textContent?.toLowerCase() || "";
      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || text.includes(q);
      card.style.display = matchRegion && matchSearch ? "flex" : "none";
    });

    // Filter schedule rows
    schedRows.forEach((row) => {
      const reg = row.dataset.region || "";
      const city = row.dataset.city || "";
      const venue = row.dataset.venue || "";

      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || city.includes(q) || venue.includes(q) || reg.includes(q);

      if (matchRegion && matchSearch) {
        if (shouldBeExpanded) {
          row.style.display = "grid";
        } else {
          row.style.display = "none";
        }
        visibleCount++;
      } else {
        row.style.display = "none";
      }
    });

    if (countBadge) {
      countBadge.textContent = shouldBeExpanded
        ? `SHOWING ${visibleCount} OF ${schedRows.length} DATES`
        : `32 GLOBAL DATES · COLLAPSED`;
    }

    if (noResultsBox && noResultsQuery) {
      if (visibleCount === 0 && hasActiveFilter) {
        noResultsBox.style.display = "block";
        const queryTerm = q || (activeRegionFilter !== "all" ? activeRegionFilter.replace("-", " ").toUpperCase() : "selected criteria");
        noResultsQuery.textContent = queryTerm;
        if (waRequestBtn) {
          const enc = encodeURIComponent(queryTerm);
          waRequestBtn.href = `https://wa.me/919004040003?text=Hi%20Amit%20Tandon%20Management,%20please%20bring%20the%20Aise%20Kaise%20world%20tour%20to%20${enc}!`;
        }
      } else {
        noResultsBox.style.display = "none";
      }
    }
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.classList.remove("active");
      });
      tab.classList.add("is-active");
      tab.classList.add("active");
      activeRegionFilter = tab.dataset.regionFilter || "all";
      applyFilters(true);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = (e.target as HTMLInputElement).value;
      cityChips.forEach((chip) => {
        const term = chip.dataset.searchTerm?.toLowerCase() || "";
        chip.classList.toggle("is-active", term === activeSearchQuery.toLowerCase().trim());
      });
      applyFilters(true);
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      activeSearchQuery = "";
      cityChips.forEach((c) => c.classList.remove("is-active"));
      searchInput.focus();
      applyFilters(true);
    });
  }

  if (resetBtn && searchInput) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      activeSearchQuery = "";
      activeRegionFilter = "all";
      isManuallyExpanded = false;
      filterTabs.forEach((t) => {
        const isAll = t.dataset.regionFilter === "all";
        t.classList.toggle("is-active", isAll);
        t.classList.toggle("active", isAll);
      });
      cityChips.forEach((c) => c.classList.remove("is-active"));
      applyFilters(true);
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
      applyFilters(true);
    });
  });

  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      isManuallyExpanded = !isManuallyExpanded;
      applyFilters(false);
      if (isManuallyExpanded && searchInput && window.innerWidth > 768) {
        setTimeout(() => searchInput.focus(), 150);
      }
    });
  }

  // --- Physical Prop Interaction: Industrial Executive Dispatch Console ---
  const consoleActuatorBtn = document.querySelector<HTMLAnchorElement>("#btn-console-dispatch");
  const teletypeSheet = document.querySelector<HTMLElement>("#teletype-dispatch-sheet");
  const stickyNote = document.querySelector<HTMLElement>(".console-sticky-note");
  const bookableStamp = document.querySelector<HTMLElement>(".rubber-stamp.stamp-bookable");

  if (consoleActuatorBtn) {
    consoleActuatorBtn.addEventListener("mouseenter", () => {
      foley.playMetalClick();
      gsap.to(consoleActuatorBtn, { y: -2, duration: 0.18, ease: "power2.out" });
    });
    consoleActuatorBtn.addEventListener("mouseleave", () => {
      gsap.to(consoleActuatorBtn, { y: 0, duration: 0.22, ease: "power2.out" });
    });
    consoleActuatorBtn.addEventListener("click", () => {
      foley.playMetalClick();
    });
  }

  if (teletypeSheet) {
    teletypeSheet.addEventListener("mouseenter", () => {
      foley.playPaperRustle(0.7);
    });
    // Click animation now handled by setupInteractiveStamps()
  }

  if (stickyNote) {
    stickyNote.addEventListener("mouseenter", () => {
      foley.playPaperRustle(0.85);
    });
    stickyNote.addEventListener("click", () => {
      foley.playPaperRustle(1.0);
      gsap.fromTo(stickyNote, { rotation: -1, scale: 1.03 }, { rotation: -2, scale: 1.0, duration: 0.35, ease: "back.out(2)" });
    });
  }

  if (bookableStamp) {
    bookableStamp.addEventListener("click", () => {
      foley.playCustomsStamp();
      gsap.fromTo(bookableStamp, { scale: 0.92, rotation: -8 }, { scale: 1.0, rotation: -6, duration: 0.3, ease: "elastic.out(1, 0.3)" });
    });
  }

  // --- Physical Prop Interaction: Boarding Passes & Perforated Ticket Stubs ---
  featuredCards.forEach((card) => {
    const stub = card.querySelector<HTMLElement>(".ticket-stub-tearoff");
    const bookBtn = card.querySelector<HTMLAnchorElement>(".tour-card-btn");

    if (stub) {
      stub.addEventListener("pointerenter", () => foley.playPaperRustle(0.9));
      stub.addEventListener("click", () => {
        foley.playTicketTear();
        gsap.fromTo(stub, { x: -4, rotation: 2 }, { x: 0, rotation: 0, duration: 0.3, ease: "elastic.out(1, 0.3)" });
      });
    }

    if (bookBtn) {
      bookBtn.addEventListener("pointerenter", () => foley.playPaperRustle(0.7));
      bookBtn.addEventListener("click", () => foley.playTicketTear());
    }
  });

  // --- Physical Prop Interaction: Telex Continuous Paper Rollout & Stamps ---
  const telexPaper = document.querySelector<HTMLElement>(".telex-paper-strip");
  if (telexPaper) {
    telexPaper.addEventListener("pointerenter", () => foley.playTelexChatter());
    telexPaper.addEventListener("click", () => foley.playTelexChatter());

    gsap.fromTo(
      telexPaper,
      { y: 30, opacity: 0.6 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".console-chassis",
          start: "top 85%",
        },
      }
    );
  }

  // --- Dynamic Pointer Lighting & 3D Gyroscopic Tilt on Command Desk ---
  const dispatchDesk = document.querySelector<HTMLElement>(".dispatch-command-desk");
  const deskSurface = document.querySelector<HTMLElement>(".dispatch-desk-surface");
  const solariWing = document.querySelector<HTMLElement>(".solari-terminal-wing");
  const hotlineWing = document.querySelector<HTMLElement>(".hotline-dispatch-wing");

  if (dispatchDesk && deskSurface) {
    dispatchDesk.addEventListener("pointermove", (e: PointerEvent) => {
      const surfRect = deskSurface.getBoundingClientRect();
      const sx = Math.max(0, Math.min(100, ((e.clientX - surfRect.left) / surfRect.width) * 100));
      const sy = Math.max(0, Math.min(100, ((e.clientY - surfRect.top) / surfRect.height) * 100));
      deskSurface.style.setProperty("--dispatch-x", `${sx.toFixed(1)}%`);
      deskSurface.style.setProperty("--dispatch-y", `${sy.toFixed(1)}%`);

      const deskRect = dispatchDesk.getBoundingClientRect();
      const nx = (e.clientX - deskRect.left) / deskRect.width - 0.5;
      const ny = (e.clientY - deskRect.top) / deskRect.height - 0.5;

      gsap.to(dispatchDesk, {
        transformPerspective: 1800,
        rotationX: -ny * 2.8,
        rotationY: nx * 3.2,
        duration: 0.6,
        ease: "power2.out"
      });

      if (solariWing) {
        gsap.to(solariWing, {
          x: nx * 6,
          y: ny * 5,
          duration: 0.5,
          ease: "power1.out"
        });
      }

      if (hotlineWing) {
        gsap.to(hotlineWing, {
          x: -nx * 6,
          y: -ny * 5,
          duration: 0.55,
          ease: "power1.out"
        });
      }
    }, { passive: true });

    dispatchDesk.addEventListener("pointerleave", () => {
      gsap.to(dispatchDesk, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      if (solariWing) gsap.to(solariWing, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
      if (hotlineWing) gsap.to(hotlineWing, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    });
  }
}

/** Section 7: Cinema Player Modal Controller */
function setupCinemaModal(): void {
  const modal = document.querySelector<HTMLDivElement>("#videoModal");
  const iframe = document.querySelector<HTMLIFrameElement>("#videoModalIframe");
  const closeBtn = document.querySelector<HTMLButtonElement>("#videoModalClose");

  if (!modal || !iframe || !closeBtn) return;

  const open = (videoId: string) => {
    foley.playFilmSpool();
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    foley.playMetalClick();
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

    spotlight?.style.setProperty("--mouse-x", `${currentX.toFixed(1)}px`);
    spotlight?.style.setProperty("--mouse-y", `${currentY.toFixed(1)}px`);

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

  // Cinema Lightbox 35mm Projector Trigger
  const cinemaScreen = document.querySelector<HTMLElement>(".cinema-screening-frame");
  const projectorPlayBtn = document.querySelector<HTMLElement>(".projector-play-trigger");
  if (cinemaScreen && projectorPlayBtn) {
    magneticTargets.push({ container: cinemaScreen, target: projectorPlayBtn, maxDelta: 26 });
  }

  // Playbill Media Cards (Direction 3)
  const playbillFrames = document.querySelectorAll<HTMLElement>(".playbill-media-frame");
  playbillFrames.forEach((frame) => {
    const playBtn = frame.querySelector<HTMLElement>(".playbill-play-trigger");
    if (playBtn) {
      magneticTargets.push({ container: frame, target: playBtn, maxDelta: 24 });
    }
  });

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




/** Section 3 (Watch): 35mm Lightbox Film Canister Reel Swapping Controller */
function setupCinemaLightbox(): void {
  const canisterBtns = document.querySelectorAll<HTMLButtonElement>(".film-canister-item");
  if (!canisterBtns.length) return;

  const reelData = [
    {
      title: "FAMILY TANDONCIES",
      label: "REEL NO. 01 // 35MM MASTER NEGATIVE",
      time: "RUN: 1H 12M 44S",
      quote: "“Indian mothers don't negotiate. They hold executive veto power over every household decision on Earth.”",
      desc: "Amit’s breakout worldwide Netflix special dissecting joint-family hierarchies, WhatsApp uncle politics, matrimonial biodatas, and why modern marriage is an extreme survival sport.",
      image: "/images/material-YT1-family-tandoncies.jpg",
      videoId: "C7b0TAg0xMU",
      slateTitle: "SCENE 41 // TAKE 01",
      slateSub: "NETFLIX ORIGINAL SPECIAL",
      syncText: "SYNC AUDIO // 106 dB ROAR",
      pencilNote: "Cut here: audience roar 42 sec straight",
      edgeCode: "EASTMAN 5219 · SAFETY FILM · REEL 01 · 190 COUNTRIES",
      playLabel: "RUN PROJECTOR (2:14 TRAILER)",
      primaryLink: "https://www.netflix.com/title/81077759",
      primaryText: "STREAM ON NETFLIX",
      secondaryText: "PLAY PROJECTION TRAILER",
    },
    {
      title: "MASALA SANDWICH",
      label: "REEL NO. 02 // LONDON & DUBAI ARCHIVE",
      time: "RUN: 80 MINS",
      quote: "“Three generations trapped under one roof with infinite unsolicited opinions and one remote control.”",
      desc: "The critically acclaimed international stage tour that packed historic auditoriums from Leicester Square Theatre in London to Dubai Opera House and Town Hall Sydney.",
      image: "/images/material-YT4-masala-sandwich.jpg",
      videoId: "Rl41e71vObE",
      slateTitle: "TOUR REEL // LEICESTER SQ",
      slateSub: "SOLD-OUT ARENA ARCHIVE",
      syncText: "SYNC AUDIO // 2,500 SEATS",
      pencilNote: "Rule #41: Never let the family preview this reel",
      edgeCode: "KODAK VISION3 500T · LONDON LIVE PRINT · 33 CITIES",
      playLabel: "RUN TOUR REEL (FULL SHOW CLIP)",
      primaryLink: "#live-shows",
      primaryText: "VIEW TOUR DATES",
      secondaryText: "PLAY TOUR REEL",
    },
    {
      title: "PAISA AA GAYA… CLASS NAHI AAYI!",
      label: "REEL NO. 03 // UNCENSORED VIRAL MASTER",
      time: "18,400,000+ VIEWS",
      quote: "“When middle-class Indian families get unexpected credit card upgrades, five-star hotel buffets become battlegrounds.”",
      desc: "The viral observational bit that became a pan-Indian cultural idiom — capturing the hilarious cognitive dissonance between newfound wealth and deeply ingrained thriftiness.",
      image: "/images/material-YT3-paisa-aa-gaya.jpg",
      videoId: "FgHw42e-3qE",
      slateTitle: "VIRAL REEL // VIRAL HIT",
      slateSub: "UNCENSORED MASTER PRINT",
      syncText: "SHARE RATIO // 98.4%",
      pencilNote: "Frame 1040: Peak laughter threshold",
      edgeCode: "EASTMAN DOUBLE-X · VIRAL CUT · 18M+ PLAYS",
      playLabel: "RUN VIRAL BIT (FULL CLIP)",
      primaryLink: "https://www.youtube.com/@TandonAmit",
      primaryText: "YOUTUBE (60+ BITS) ↗",
      secondaryText: "PLAY VIRAL REEL",
    },
  ];

  const imgEl = document.querySelector<HTMLImageElement>("#active-reel-image");
  const playBtn = document.querySelector<HTMLButtonElement>("#active-reel-play-btn");
  const secBtn = document.querySelector<HTMLButtonElement>("#active-reel-secondary-btn");
  const slateTitle = document.querySelector<HTMLElement>("#active-slate-title");
  const slateSub = document.querySelector<HTMLElement>("#active-slate-sub");
  const syncText = document.querySelector<HTMLElement>("#active-sync-text");
  const pencilNote = document.querySelector<HTMLElement>("#active-pencil-note");
  const edgeCode = document.querySelector<HTMLElement>("#active-edge-code");
  const playLabel = document.querySelector<HTMLElement>("#active-play-label");
  const reelLabel = document.querySelector<HTMLElement>("#active-reel-label");
  const reelTime = document.querySelector<HTMLElement>("#active-reel-time");
  const reelTitle = document.querySelector<HTMLElement>("#active-reel-title");
  const reelQuote = document.querySelector<HTMLElement>("#active-reel-quote");
  const reelDesc = document.querySelector<HTMLElement>("#active-reel-desc");
  const primaryLink = document.querySelector<HTMLAnchorElement>("#active-reel-primary-link");
  const primaryText = document.querySelector<HTMLElement>("#active-reel-primary-text");
  const secText = document.querySelector<HTMLElement>("#active-reel-secondary-text");
  const frameEl = document.querySelector<HTMLElement>("#active-screening-screen");

  canisterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-reel-index") || "0", 10);
      const data = reelData[idx];
      if (!data) return;

      canisterBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
        const statusText = b.querySelector<HTMLElement>(".canister-status-text");
        if (statusText) statusText.textContent = "CLICK TO LOAD REEL ➔";
      });

      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      const activeStatus = btn.querySelector<HTMLElement>(".canister-status-text");
      if (activeStatus) activeStatus.textContent = "LOADED ON LIGHTBOX";

// (shutter flash handled below)

      if (imgEl) imgEl.src = data.image;
      if (playBtn) playBtn.setAttribute("data-video-id", data.videoId);
      if (secBtn) secBtn.setAttribute("data-video-id", data.videoId);
      if (slateTitle) slateTitle.textContent = data.slateTitle;
      if (slateSub) slateSub.textContent = data.slateSub;
      if (syncText) syncText.textContent = data.syncText;
      if (pencilNote) pencilNote.textContent = data.pencilNote;
      if (edgeCode) edgeCode.textContent = data.edgeCode;
      if (playLabel) playLabel.textContent = data.playLabel;
      if (reelLabel) reelLabel.textContent = data.label;
      if (reelTime) reelTime.textContent = data.time;
      if (reelTitle) reelTitle.textContent = data.title;
      if (reelQuote) reelQuote.textContent = data.quote;
      if (reelDesc) reelDesc.textContent = data.desc;
      if (primaryLink) {
        primaryLink.href = data.primaryLink;
        if (data.primaryLink.startsWith("http")) {
          primaryLink.target = "_blank";
          primaryLink.rel = "noopener noreferrer";
        } else {
          primaryLink.removeAttribute("target");
          primaryLink.removeAttribute("rel");
        }
      }
      if (primaryText) primaryText.textContent = data.primaryText;
      if (secText) secText.textContent = data.secondaryText;

      // Trigger 35mm canister & film spool foley
      foley.playCanisterClink();
      foley.playFilmSpool();

      // Projector gate optical shutter double-flicker
      if (frameEl) {
        const tl = gsap.timeline();
        tl.to(frameEl, { filter: "brightness(2.6) contrast(1.8) saturate(0.2)", duration: 0.07, ease: "power1.in" })
          .to(frameEl, { filter: "brightness(0.3) contrast(1.4)", duration: 0.05 })
          .to(frameEl, { filter: "brightness(1.9) contrast(1.3)", duration: 0.07 })
          .to(frameEl, { filter: "brightness(1) contrast(1.12)", duration: 0.28, ease: "power2.out" });
      }
    });

    btn.addEventListener("pointerenter", () => {
      foley.playMetalClick();
    });
  });

  // Dynamic Specular Backlight & 3D Gyroscopic Tilt on Editing Desk
  const desk = document.querySelector<HTMLElement>(".editing-lightbox-desk");
  const glass = document.querySelector<HTMLElement>(".lightbox-illuminated-glass");
  const masterPod = document.querySelector<HTMLElement>(".master-projection-pod");
  const canisterPod = document.querySelector<HTMLElement>(".canister-vault-pod");

  if (desk && glass) {
    desk.addEventListener("pointermove", (e: PointerEvent) => {
      const glassRect = glass.getBoundingClientRect();
      const gx = Math.max(0, Math.min(100, ((e.clientX - glassRect.left) / glassRect.width) * 100));
      const gy = Math.max(0, Math.min(100, ((e.clientY - glassRect.top) / glassRect.height) * 100));
      glass.style.setProperty("--lightbox-x", `${gx.toFixed(1)}%`);
      glass.style.setProperty("--lightbox-y", `${gy.toFixed(1)}%`);

      const deskRect = desk.getBoundingClientRect();
      const nx = (e.clientX - deskRect.left) / deskRect.width - 0.5;
      const ny = (e.clientY - deskRect.top) / deskRect.height - 0.5;

      gsap.to(desk, {
        transformPerspective: 1800,
        rotationX: -ny * 3.0,
        rotationY: nx * 3.5,
        duration: 0.6,
        ease: "power2.out"
      });

      if (masterPod) {
        gsap.to(masterPod, {
          x: nx * 8,
          y: ny * 6,
          duration: 0.5,
          ease: "power1.out"
        });
      }

      if (canisterPod) {
        gsap.to(canisterPod, {
          x: -nx * 6,
          y: -ny * 4,
          duration: 0.55,
          ease: "power1.out"
        });
      }
    }, { passive: true });

    desk.addEventListener("pointerleave", () => {
      gsap.to(desk, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      if (masterPod) gsap.to(masterPod, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
      if (canisterPod) gsap.to(canisterPod, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    });
  }

  // Interactive Lightbox Inspection Tools
  const toolLoupe = document.querySelector<HTMLButtonElement>("#tool-loupe");
  const toolChinagraph = document.querySelector<HTMLButtonElement>("#tool-chinagraph");
  const toolSplicer = document.querySelector<HTMLButtonElement>("#tool-splicer");

  if (toolLoupe) {
    toolLoupe.addEventListener("pointerenter", () => foley.playMetalClick());
    toolLoupe.addEventListener("click", () => {
      foley.playMetalClick();
      if (imgEl) {
        gsap.fromTo(imgEl, { scale: 1.15 }, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      }
    });
  }

  if (toolChinagraph) {
    toolChinagraph.addEventListener("pointerenter", () => foley.playWaxSeal());
    toolChinagraph.addEventListener("click", () => {
      foley.playWaxSeal();
      const markup = document.querySelector<HTMLElement>(".grease-pencil-markup");
      if (markup) {
        gsap.fromTo(markup, { rotation: -3, scale: 1.08 }, { rotation: 0, scale: 1, duration: 0.4, ease: "back.out(2)" });
      }
    });
  }

  if (toolSplicer) {
    toolSplicer.addEventListener("pointerenter", () => foley.playMetalClick());
    toolSplicer.addEventListener("click", () => {
      foley.playSplicerSnap();
      gsap.fromTo(toolSplicer, { y: 3 }, { y: 0, duration: 0.25, ease: "power2.out" });
    });
  }

  // Film Sprocket Tracks & Play Trigger Feedback
  const sprockets = document.querySelectorAll<HTMLElement>(".film-sprocket-track");
  sprockets.forEach((sprocket) => {
    sprocket.addEventListener("pointerenter", () => foley.playPaperRustle(0.7));
  });

  if (playBtn) {
    playBtn.addEventListener("pointerenter", () => foley.playMetalClick());
    playBtn.addEventListener("click", () => foley.playFilmSpool());
  }
  if (secBtn) {
    secBtn.addEventListener("pointerenter", () => foley.playMetalClick());
    secBtn.addEventListener("click", () => foley.playFilmSpool());
  }
}

/** Section 5 (Footer): Archival Case Docket Closing Stamp & Wax Seal */
function setupFooterArchivalStamp(): void {
  const stampBtn = document.querySelector<HTMLButtonElement>("#footer-stamp-closed");
  const waxSeal = document.querySelector<HTMLElement>("#footer-wax-seal");

  if (stampBtn) {
    stampBtn.addEventListener("pointerenter", () => foley.playStampThud());
    stampBtn.addEventListener("click", () => {
      foley.playStampThud();
      gsap.fromTo(stampBtn, { scale: 0.92, rotation: -6 }, { scale: 1, rotation: -3.5, duration: 0.35, ease: "back.out(2)" });
    });
  }

  if (waxSeal) {
    waxSeal.addEventListener("pointerenter", () => foley.playWaxSeal());
    waxSeal.addEventListener("click", () => {
      foley.playWaxSeal();
      gsap.fromTo(waxSeal, { scale: 0.92, rotation: 8 }, { scale: 1, rotation: 12, duration: 0.35, ease: "back.out(2)" });
    });
  }
}


/** Interactive Rubber Stamp Animation (Option A) — No Audio */
function setupInteractiveStamps(): void {
  const STAMP_PHRASES = [
    ['★ 100% CLEAN FAMILY COMEDY', 'ZERO HR LIABILITIES // VERIFIED'],
    ['★ 15 YEARS OF MARRIAGE', 'SURVIVAL & SANITY CERTIFIED'],
    ['★ CONFIDENTIAL DOMESTIC GYAN', 'STRICTLY NO IN-LAWS ALLOWED'],
    ['★ OFFICIALLY AUDITED & CLEARED', 'SHARMA JI & PARENTS APPROVED'],
  ];
  const MAX_STAMPS = 6;
  let phraseIndex = 0;

  const stampables = document.querySelectorAll<HTMLElement>('[data-stampable="true"]');
  if (!stampables.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  stampables.forEach((container) => {
    const stamps: HTMLElement[] = [];

    container.addEventListener('click', (e: MouseEvent) => {
      // Don't stamp on interactive elements
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-stop-propagation]')
      ) {
        return;
      }

      // Stop bubbling so nested containers don't trigger double stamps
      e.stopPropagation();

      // Compute click position relative to container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Enforce max stamps — fade and remove the oldest
      if (stamps.length >= MAX_STAMPS) {
        const oldest = stamps.shift();
        if (oldest) {
          oldest.classList.add('stamp-fading');
          setTimeout(() => oldest.remove(), 650);
        }
      }

      // Get the current phrase pair
      const phrase = STAMP_PHRASES[phraseIndex % STAMP_PHRASES.length];
      phraseIndex++;

      // Randomization per stamp: mask offset, subtle rotation (±3deg), opacity (.80 - .95)
      const mx = Math.floor(Math.random() * 160);
      const my = Math.floor(Math.random() * 160);
      const angle = (Math.random() * 6 - 3).toFixed(2);
      const opacity = (0.80 + Math.random() * 0.15).toFixed(3);

      // --- Create the Ink Imprint (stays permanently) ---
      const imprint = document.createElement('div');
      imprint.className = 'stamped-ink-imprint stamp-fresh';
      imprint.setAttribute('aria-hidden', 'true');
      imprint.innerHTML = `<span class="stamp-line">${phrase[0]}</span><span class="stamp-line">${phrase[1]}</span>`;
      imprint.style.setProperty('--mx', `${mx}px`);
      imprint.style.setProperty('--my', `${my}px`);
      imprint.style.left = `${x}px`;
      imprint.style.top = `${y}px`;
      imprint.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      container.appendChild(imprint);
      stamps.push(imprint);

      if (reduce) {
        // In reduced motion mode, place stamp immediately without slam
        imprint.style.opacity = opacity;
        imprint.classList.remove('stamp-fresh');
        imprint.style.willChange = 'auto';
        return;
      }

      // Match tool footprint to the rendered imprint dimensions
      const imprintWidth = imprint.offsetWidth || 282;
      const imprintHeight = imprint.offsetHeight || 56;

      // --- Create the Stamp Apparatus (with separate shadow & head elements) ---
      const apparatus = document.createElement('div');
      apparatus.className = 'rubber-stamp-apparatus';
      apparatus.setAttribute('aria-hidden', 'true');
      apparatus.innerHTML = '<div class="stamp-shadow"></div><div class="stamp-head"></div>';
      apparatus.style.width = `${imprintWidth}px`;
      apparatus.style.height = `${imprintHeight}px`;
      apparatus.style.left = `${x}px`;
      apparatus.style.top = `${y}px`;
      apparatus.style.transform = 'translate(-50%, -50%)';
      container.appendChild(apparatus);

      const stampHead = apparatus.querySelector<HTMLElement>('.stamp-head');
      const stampShadow = apparatus.querySelector<HTMLElement>('.stamp-shadow');

      // --- GSAP Timeline: Slam → Show Ink → Micro-shake → Lift (transform & opacity only) ---
      const tl = gsap.timeline({
        onComplete: () => {
          apparatus.remove();
          // Settle wet ink aura to dry state over 1.5s, then remove will-change
          setTimeout(() => {
            imprint.classList.remove('stamp-fresh');
            imprint.style.willChange = 'auto';
          }, 1500);
        },
      });

      // 1. Slam down from above (scale 2.2 -> 1.0, y -44 -> 0)
      if (stampHead) {
        tl.fromTo(
          stampHead,
          { scale: 2.2, opacity: 0, y: -44 },
          { scale: 1.0, opacity: 1, y: 0, duration: 0.14, ease: 'power4.in' }
        );
      }
      if (stampShadow) {
        tl.fromTo(
          stampShadow,
          { scale: 2.0, opacity: 0.12, y: 18 },
          { scale: 1.0, opacity: 0.55, y: 2, duration: 0.14, ease: 'power4.in' },
          '<'
        );
      }

      // 2. At contact moment: show ink imprint at randomized opacity & micro-shake paper
      tl.to(
        imprint,
        {
          opacity: Number(opacity),
          duration: 0.05,
        },
        '>'
      );

      tl.to(
        container,
        {
          y: '+=2',
          duration: 0.04,
          ease: 'power1.in',
          yoyo: true,
          repeat: 1,
        },
        '<'
      );

      // 3. Lift stamp tool away
      if (stampHead) {
        tl.to(
          stampHead,
          { scale: 1.35, opacity: 0, y: -32, duration: 0.22, ease: 'power2.out' },
          '+=0.06'
        );
      }
      if (stampShadow) {
        tl.to(
          stampShadow,
          { scale: 1.5, opacity: 0, y: 14, duration: 0.22, ease: 'power2.out' },
          '<'
        );
      }
    });
  });
}
