/* ============================================================
   Jacob F. Welin — portfolio
   Vanilla JS + GSAP (CDN). Everything degrades gracefully:
   content is fully visible without JS/GSAP; animations are
   an enhancement and respect prefers-reduced-motion.
   ============================================================ */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     Nav: scrolled state + mobile menu
     ---------------------------------------------------------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = document.querySelector(".nav__burger");
  const navLinks = document.getElementById("nav-links");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     Hero canvas: slow-drifting particles in petrol tones,
     softly linked when close. Static + sparse when reduced
     motion is preferred; paused when the tab is hidden.
     ---------------------------------------------------------- */
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let rafId = null;
  let w = 0, h = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const pointer = { x: -9999, y: -9999 };

  function sizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function buildParticles() {
    const count = Math.min(90, Math.round((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.8 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      a: 0.25 + Math.random() * 0.45,
      copper: Math.random() < 0.12,
    }));
  }

  function drawFrame(animate) {
    ctx.clearRect(0, 0, w, h);
    const LINK = 130;

    for (const p of particles) {
      if (animate) {
        p.x += p.vx;
        p.y += p.vy;
        // gentle pointer repulsion
        const dx = p.x - pointer.x, dy = p.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 16000 && d2 > 0.01) {
          const f = 14 / d2;
          p.x += dx * f;
          p.y += dy * f;
        }
        if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.copper
        ? `rgba(224, 170, 120, ${p.a})`
        : `rgba(116, 198, 212, ${p.a * 0.8})`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79, 163, 178, ${0.09 * (1 - d / LINK)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    drawFrame(true);
    rafId = requestAnimationFrame(loop);
  }

  function startCanvas() {
    sizeCanvas();
    buildParticles();
    if (reducedMotion) {
      drawFrame(false); // one static, calm frame
    } else {
      loop();
    }
  }

  startCanvas();
  window.addEventListener("resize", () => {
    cancelAnimationFrame(rafId);
    startCanvas();
  });
  document.addEventListener("visibilitychange", () => {
    if (reducedMotion) return;
    if (document.hidden) cancelAnimationFrame(rafId);
    else loop();
  });
  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
  }, { passive: true });

  /* ----------------------------------------------------------
     Stat counters (da-DK formatting)
     ---------------------------------------------------------- */
  const fmtDa = new Intl.NumberFormat("da-DK");
  const fmtDec = new Intl.NumberFormat("da-DK", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  function renderCount(el, value) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const v = Math.min(value, target);
    el.textContent = (el.dataset.format === "decimal" ? fmtDec.format(v) : fmtDa.format(Math.round(v))) + suffix;
  }

  function animateCounters(root) {
    root.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      if (reducedMotion || !window.gsap) {
        renderCount(el, target);
        return;
      }
      const state = { v: 0 };
      gsap.to(state, {
        v: target,
        duration: 1.6,
        ease: "power3.out",
        onUpdate: () => renderCount(el, state.v),
      });
    });
  }

  /* ----------------------------------------------------------
     GSAP: hero load sequence + scroll reveals
     ---------------------------------------------------------- */
  const heroEls = document.querySelectorAll("[data-hero]");
  const revealEls = document.querySelectorAll("[data-reveal]");
  let heroCountersDone = false;

  if (window.gsap && !reducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from(heroEls, {
      y: 34,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.15,
      onStart: () => {
        // counters kick in as the stat row appears
        setTimeout(() => {
          if (!heroCountersDone) {
            heroCountersDone = true;
            animateCounters(document.querySelector(".hero"));
          }
        }, 550);
      },
    });

    // Scroll reveals
    revealEls.forEach((el) => {
      gsap.from(el, {
        y: 42,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          once: true,
        },
      });
    });

    // Mit EDC stat cards: count up when they scroll into view
    ScrollTrigger.create({
      trigger: ".edc__stats",
      start: "top 85%",
      once: true,
      onEnter: () => animateCounters(document.querySelector(".edc__stats")),
    });

    // Screenshot strip drifts slightly against scroll for depth
    gsap.to("#edc-strip", {
      x: -60,
      ease: "none",
      scrollTrigger: {
        trigger: ".edc__strip-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  } else {
    // No GSAP / reduced motion: show everything, set final numbers
    animateCounters(document);
  }

  /* ----------------------------------------------------------
     Screenshot strip: drag to scroll
     ---------------------------------------------------------- */
  const strip = document.getElementById("edc-strip");
  let dragging = false, startX = 0, startScroll = 0;

  strip.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    startScroll = strip.scrollLeft;
    strip.classList.add("is-dragging");
    strip.setPointerCapture(e.pointerId);
  });
  strip.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    strip.scrollLeft = startScroll - (e.clientX - startX);
  });
  const endDrag = () => {
    dragging = false;
    strip.classList.remove("is-dragging");
  };
  strip.addEventListener("pointerup", endDrag);
  strip.addEventListener("pointercancel", endDrag);

  /* ----------------------------------------------------------
     Lightbox
     ---------------------------------------------------------- */
  const DETAILS = {
    profcal: {
      img: "assets/img/profcal-detail.jpg",
      alt: "ProfCalculator — appens skærme med menuer, ingredienser og profitberegning",
      title: "ProfCalculator",
      text: "Profitberegner til restauranter — ingredienser, menuer, moms og timeløn regnes om til præcis profit pr. ret. Udgivet på App Store & Google Play.",
    },
    walldodge: {
      img: "assets/img/walldodge-detail.jpg",
      alt: "Wall Dodge — gameplay og menu fra mobilspillet",
      title: "Wall Dodge",
      text: "Mobilspil: rotér figuren og undvig væggene — \"Rotate to Win\". Udgivet til iOS & Android.",
    },
    leoswok: {
      img: "assets/img/leoswok-detail.jpg",
      alt: "Leo's Wok — madbestilling med menu og kurv",
      title: "Leo's Wok",
      text: "Komplet madbestillingssystem til restaurant — digital menu, kurv og ordrestyring direkte fra gæstens telefon.",
    },
    chiangmai: {
      img: "assets/img/chiangmai-detail.jpg",
      alt: "Chiang Mai Køge — thairestaurantens app",
      title: "Chiang Mai Køge",
      text: "App til thairestauranten Chiang Mai i Køge — menu, information og bestilling til iOS & Android.",
    },
    wejeosmart: {
      img: "assets/img/wejeosmart-detail.jpg",
      alt: "Wejeo Smart — enheder, login og tidsplaner i smart home-appen",
      title: "Wejeo Smart",
      text: "Smart home-app til Wejeos smart-stik — styring af enheder, tidsplaner og automatisering i hjemmet.",
    },
    sejerslev: {
      img: "assets/img/sejerslev-detail.jpg",
      alt: "Sejerslev — live-målinger af gasflow og tryk i svejseappen",
      title: "Sejerslev",
      text: "AI-drevet svejseapp — live-overvågning af gasflow, tryk og temperatur fra svejseudstyret, med grafer og historik.",
    },
    abone: {
      img: "assets/img/abone-detail.jpg",
      alt: "AB one — medlemsprofil med aktiviteter og nøgletal",
      title: "AB one",
      text: "Medlemsapp til erhvervsnetværk — profil, medlemmer, møder og tracking af omsætning og anbefalinger.",
    },
    // camino: intet detail-billede endnu — genereres med AI (se gemini-prompts.md)
  };

  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");

  document.querySelectorAll("[data-lightbox]").forEach((card) => {
    const key = card.dataset.lightbox;
    const detail = DETAILS[key];
    if (!detail) {
      card.style.cursor = "default";
      return;
    }
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    const open = () => {
      lbImg.src = detail.img;
      lbImg.alt = detail.alt;
      lbCaption.innerHTML = "";
      const strong = document.createElement("strong");
      strong.textContent = detail.title;
      lbCaption.append(strong, document.createTextNode(detail.text));
      lightbox.showModal();
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (e) => {
    // click on the backdrop (outside the figure) closes
    if (e.target === lightbox) lightbox.close();
  });
})();
