import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // Setup sub-systems
  setupNavThemeSync();
  setupScrollReveals(reduce);
  setupTourInteractions();
  setupCinemaModal();
}

/** Sync nav dark mode dynamically when crossing dark stage sections */
function setupNavThemeSync(): void {
  const nav = document.querySelector<HTMLElement>(".nav");
  if (!nav) return;

  const darkSections = gsap.utils.toArray<HTMLElement>(".tour-section");

  const sync = () => {
    const scrollY = window.scrollY + 60;
    let isDark = false;
    for (const sec of darkSections) {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        isDark = true;
        break;
      }
    }
    nav.classList.toggle("is-dark", isDark);
  };

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: sync,
    onRefresh: sync,
  });
  sync();
}

/** Fluid, non-blocking staggered reveals without scroll-trapping */
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
  const heroReveals = document.querySelectorAll<HTMLElement>(".hero-section [data-reveal]");
  if (heroReveals.length) {
    gsap.fromTo(
      heroReveals,
      { autoAlpha: 0, y: 26 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }

  // Other section batch reveals
  const otherReveals = gsap.utils.toArray<HTMLElement>(
    "section:not(.hero-section) [data-reveal]"
  );

  ScrollTrigger.batch(otherReveals, {
    start: "top 88%",
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    },
    once: true,
  });
}

/** Tour Ledger tab filtering & search */
function setupTourInteractions(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>(".filter-tab");
  const searchInput = document.querySelector<HTMLInputElement>("#tourSearchInput");
  const rows = document.querySelectorAll<HTMLTableRowElement>(".tour-row");

  if (!tabs.length || !rows.length) return;

  let currentRegion = "all";
  let currentSearch = "";

  const applyFilters = () => {
    rows.forEach((row) => {
      const region = row.getAttribute("data-region") || "";
      const text = row.innerText.toLowerCase();

      const matchesRegion = currentRegion === "all" || region === currentRegion;
      const matchesSearch = !currentSearch || text.includes(currentSearch);

      if (matchesRegion && matchesSearch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
    ScrollTrigger.refresh();
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      currentRegion = tab.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = (e.target as HTMLInputElement).value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/** Inline Cinema Player Modal without bouncing to external YouTube */
function setupCinemaModal(): void {
  const modal = document.querySelector<HTMLElement>("#videoModal");
  const iframe = document.querySelector<HTMLIFrameElement>("#videoModalIframe");
  const closeBtn = document.querySelector<HTMLButtonElement>("#videoModalClose");
  const triggers = document.querySelectorAll<HTMLElement>("[data-video-id]");

  if (!modal || !iframe) return;

  const openModal = (videoId: string) => {
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    iframe.src = "";
    document.body.style.overflow = "";
  };

  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const videoId = btn.getAttribute("data-video-id");
      if (videoId) {
        openModal(videoId);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}
