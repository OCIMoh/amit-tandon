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
  setupEvidenceDeskMotion(reduce);
  setupTourInteractions();
  setupCinemaModal();
  setupCinemaLightbox();
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
    // Floating Audit Collage 3D Parallax Tilt
    setupAuditCollagePhysics(heroSection, playTactileFeedback);
  }

  // Entrance Stagger Animation
  if (!reduce) {
    const billboard = heroSection.querySelector(".billboard-giant-word");
    const folder = heroSection.querySelector(".dossier-manilla-folder");
    const receipt = heroSection.querySelector(".thermal-receipt-artifact");
    const photo = heroSection.querySelector(".photo-candid-artifact");
    const tag = heroSection.querySelector(".luggage-tag-artifact");
    const bottomBand = heroSection.querySelector(".panoramic-bottom-band");
    const tl = gsap.timeline({ delay: 0.1 });
    if (billboard) tl.fromTo(billboard, { autoAlpha: 0, y: 50, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" });
    if (folder) tl.fromTo(folder, { autoAlpha: 0, y: 60, rotation: -6, scale: 0.92 }, { autoAlpha: 1, y: 0, rotation: -1.5, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.5");
    if (receipt) tl.fromTo(receipt, { autoAlpha: 0, x: -30, rotation: -8 }, { autoAlpha: 1, x: 0, rotation: 3.5, duration: 0.7, ease: "back.out(1.4)" }, "-=0.6");
    if (photo) tl.fromTo(photo, { autoAlpha: 0, scale: 0.85, y: 20 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6");
    if (tag) tl.fromTo(tag, { autoAlpha: 0, x: 30, rotation: 12 }, { autoAlpha: 1, x: 0, rotation: 4, duration: 0.7, ease: "back.out(1.4)" }, "-=0.6");
    if (bottomBand) tl.fromTo(bottomBand, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

  }
}

/** 60fps Asymmetric Physics & Tactile Mouse Parallax for Audit Collage */
function setupAuditCollagePhysics(heroSection: HTMLElement, playSound?: () => void): void {
  const folder = heroSection.querySelector<HTMLElement>(".dossier-manilla-folder");
  const receipt = heroSection.querySelector<HTMLElement>(".thermal-receipt-artifact");
  const photo = heroSection.querySelector<HTMLElement>(".photo-candid-artifact");
  const tag = heroSection.querySelector<HTMLElement>(".luggage-tag-artifact");
  if (!folder) return;

  heroSection.addEventListener("pointermove", (e: PointerEvent) => {
    const rect = heroSection.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(folder, { x: nx * 10, y: ny * 8, rotation: -1.5 + nx * 2, duration: 0.5, ease: "power2.out" });
    if (receipt) gsap.to(receipt, { x: nx * 18, y: ny * 14, rotation: 3.5 + nx * 4, duration: 0.45, ease: "power2.out" });
    if (photo) gsap.to(photo, { x: nx * 8, y: ny * 6, rotation: -1.5 + nx * 2, duration: 0.55, ease: "power2.out" });
    if (tag) gsap.to(tag, { x: nx * 22, y: ny * 18, rotation: 4 + nx * 6, duration: 0.4, ease: "power2.out" });
  }, { passive: true });

  [receipt, photo, tag].forEach((el) => {
    if (!el) return;
    el.addEventListener("pointerenter", () => { playSound?.(); });
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
  const docketStack = section.querySelector<HTMLElement>("#case-docket-stack");
  const tabBtns = section.querySelectorAll<HTMLButtonElement>(".case-index-tab");
  const sheets = section.querySelectorAll<HTMLElement>(".case-evidence-sheet");

  let currentSheetIdx = 0;
  const totalSheets = sheets.length;

  const goToSheet = (targetIdx: number) => {
    if (targetIdx === currentSheetIdx && sheets[currentSheetIdx]?.classList.contains("is-active")) {
      return;
    }

    currentSheetIdx = (targetIdx + totalSheets) % totalSheets;

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
            { opacity: 0, x: 18, rotate: 1 },
            { opacity: 1, x: 0, rotate: 0, duration: 0.38, ease: "power2.out" }
          );
        }
      } else {
        sheet.classList.remove("is-active");
        sheet.setAttribute("hidden", "true");
      }
    });
  };

  // Click on Index Tabs
  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSheet(idx);
    });
  });

  // Clicking anywhere on the Right Page Docket flips to next exhibit!
  if (docketStack) {
    docketStack.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      // Do not flip page if clicking direct links like WhatsApp
      if (target.closest("[data-stop-propagation='true']") || target.closest("a")) {
        return;
      }
      goToSheet(currentSheetIdx + 1);
    });
  }

  // 2. Scroll-triggered entrance reveal for Master Folder
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

    // 3. Subtle Asymmetric 3D Parallax on Photo Frames
    const photoLeft = folder.querySelector<HTMLElement>(".subject-photo-frame");
    const photoRight = folder.querySelector<HTMLElement>(".sheet-photo-frame");

    section.addEventListener("pointermove", (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

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
  }
}

/** Section 8: Tour Schedule Filtering & Instant Search */
function setupTourInteractions(): void {
  const filterTabs = document.querySelectorAll<HTMLButtonElement>(".region-tab");
  const featuredCards = document.querySelectorAll<HTMLElement>(".featured-tour-card");
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

  const applyFilters = () => {
    let visibleCount = 0;
    const q = activeSearchQuery.toLowerCase().trim();

    if (searchClear) {
      searchClear.style.display = q ? "block" : "none";
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

    // Filter featured 4 flagship cards
    featuredCards.forEach((card) => {
      const reg = card.dataset.region || "";
      const text = card.textContent?.toLowerCase() || "";
      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || text.includes(q);
      card.style.display = matchRegion && matchSearch ? "block" : "none";
    });

    // Filter schedule rows
    schedRows.forEach((row) => {
      const reg = row.dataset.region || "";
      const city = row.dataset.city || "";
      const venue = row.dataset.venue || "";
      const isInitialFold = row.classList.contains("in-initial-fold");

      const matchRegion = activeRegionFilter === "all" || reg === activeRegionFilter;
      const matchSearch = !q || city.includes(q) || venue.includes(q) || reg.includes(q);

      if (matchRegion && matchSearch) {
        // If not expanded and belongs to extended fold, CSS controls visibility or display: grid
        if (shouldBeExpanded || isInitialFold) {
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
      countBadge.textContent = `SHOWING ${visibleCount} OF ${schedRows.length} DATES`;
    }

    if (noResultsBox && noResultsQuery) {
      if (visibleCount === 0) {
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
      isManuallyExpanded = false;
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

  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      isManuallyExpanded = !isManuallyExpanded;
      applyFilters();
      if (isManuallyExpanded && searchInput && window.innerWidth > 768) {
        setTimeout(() => searchInput.focus(), 150);
      }
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
      primaryLink: "https://www.youtube.com/@AmitTandonStandUp",
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

      // Projector gate shutter flash animation
      if (frameEl) {
        gsap.fromTo(
          frameEl,
          { filter: "brightness(2.2) contrast(1.6)" },
          { filter: "brightness(1) contrast(1.12)", duration: 0.35, ease: "power2.out" }
        );
      }

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
    });
  });
}
