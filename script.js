/**
 * Interactive Script for Umair Siddique's Portfolio
 * Features:
 * - Ambient Particle Canvas with Mouse Interactivity & Theme Sync
 * - Typewriter Text Animation
 * - Scroll-Triggered Counter & Progress Bar Animations
 * - Dynamic Theme Accent Switcher with LocalStorage Persistence
 * - Custom Smooth Trailing Cursor
 * - Dynamic Rendering for About, Skills, Timeline, Services, Projects, Testimonials
 * - Project Details Modal System
 * - Testimonial Carousel (Auto + Manual Controls)
 * - Live Timezone Clock & One-Click Copy-to-Clipboard
 * - Form Validation with Interactive Toast Notification System
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initParticleCanvas();
  initTypewriter();
  initDynamicContent();
  initScrollObservers();
  initNavbarAndScroll();
  initTestimonialSlider();
  initContactAndTools();
});

/* ==========================================================================
   1. Theme Switcher System & Automatic Color Cycle
   ========================================================================== */
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeMenu = document.getElementById('theme-dropdown-menu');
  const themeOptions = document.querySelectorAll('.theme-option');
  const htmlEl = document.documentElement;

  const THEMES = ['cyan', 'violet', 'emerald', 'amber', 'rose'];
  const savedTheme = localStorage.getItem('portfolio_theme') || 'cyan';
  let currentThemeIndex = THEMES.indexOf(savedTheme) !== -1 ? THEMES.indexOf(savedTheme) : 0;

  applyTheme(THEMES[currentThemeIndex]);

  // Automatic Smooth Color Cycle
  let autoCycleInterval = null;
  let userInteractedTimeout = null;

  function startAutoCycle() {
    stopAutoCycle();
    autoCycleInterval = setInterval(() => {
      currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
      applyTheme(THEMES[currentThemeIndex]);
    }, 5000);
  }

  function stopAutoCycle() {
    if (autoCycleInterval) clearInterval(autoCycleInterval);
  }

  startAutoCycle();

  if (themeToggleBtn && themeMenu) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!themeMenu.contains(e.target) && !themeToggleBtn.contains(e.target)) {
        themeMenu.classList.remove('active');
      }
    });

    themeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-set-theme');
        const themeIdx = THEMES.indexOf(theme);
        if (themeIdx !== -1) currentThemeIndex = themeIdx;
        applyTheme(theme);
        themeMenu.classList.remove('active');
        showToast(`Theme switched to ${opt.textContent.trim()}!`, 'palette');

        // Pause briefly on user manual selection, then resume
        stopAutoCycle();
        if (userInteractedTimeout) clearTimeout(userInteractedTimeout);
        userInteractedTimeout = setTimeout(startAutoCycle, 12000);
      });
    });
  }

  function applyTheme(themeName) {
    htmlEl.setAttribute('data-theme', themeName);
    localStorage.setItem('portfolio_theme', themeName);

    themeOptions.forEach(opt => {
      if (opt.getAttribute('data-set-theme') === themeName) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   2. Ambient Particle Canvas with Mouse Interactivity
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particles = [];
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 22 : Math.min(Math.floor(window.innerWidth / 32), 48);
  const maxDistance = isMobile ? 85 : 110;
  const maxDistanceSq = maxDistance * maxDistance;

  const mouse = { x: null, y: null, radius: isMobile ? 90 : 130 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 1.8 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouse.radius * mouse.radius) {
          const distance = Math.sqrt(distSq);
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = (dx / (distance || 1)) * force * 2;
          const dirY = (dy / (distance || 1)) * force * 2;
          this.x -= dirX;
          this.y -= dirY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animFrameId = null;

  function animate() {
    if (document.hidden) {
      animFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines with squared distance check
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistanceSq) {
          const distance = Math.sqrt(distSq);
          const opacity = (1 - distance / maxDistance) * 0.16;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animFrameId = requestAnimationFrame(animate);
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !animFrameId) {
      animFrameId = requestAnimationFrame(animate);
    }
  });

  animate();
}

/* ==========================================================================
   4. Typewriter Animation
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'High-Caliber Software Engineer',
    'Full-Stack Systems Architect',
    'Algorithmic Problem Solver & Innovator',
    'BS Software Engineering @ UET Lahore',
    'Scalable Cloud & Backend Specialist',
    'Cross-Platform Flutter & Web Engineer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. Dynamic Content Rendering
   ========================================================================== */
function initDynamicContent() {
  if (typeof portfolioData === 'undefined') return;

  // Render Disciplines in Engineering Bento
  renderDisciplines();

  // Render All-in-One Tech Matrix (No fake percentage bars)
  renderTechMatrix('all');
  setupTechMatrixFilter();

  // Render Engineering Pipeline
  renderEngineeringPipeline();

  // Render Projects Gallery
  renderProjects('all');

  // Setup Projects Filter
  setupProjectsFilter();

  // Setup Project Modal
  setupProjectModal();
}

/* --- Render Disciplines in Bento Overview --- */
function renderDisciplines() {
  const container = document.getElementById('disciplines-container');
  if (!container || !portfolioData.about || !portfolioData.about.disciplines) return;

  container.innerHTML = portfolioData.about.disciplines.map(item => `
    <div class="discipline-item">
      <i class="${item.icon}"></i>
      <div>
        <div class="discipline-name">${item.name}</div>
        <div class="discipline-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');
}

/* --- Render Minimalist Tech Matrix --- */
function renderTechMatrix(filter = 'all') {
  const container = document.getElementById('tech-matrix-container');
  if (!container || !portfolioData.techMatrix) return;

  const categories = filter === 'all'
    ? portfolioData.techMatrix
    : portfolioData.techMatrix.filter(c => c.category === filter);

  container.innerHTML = categories.map(cat => `
    <div class="tech-layer-group glass-card" data-category="${cat.category}">
      <div class="tech-layer-header">
        <div class="tech-layer-title-wrap">
          <div class="tech-layer-icon">
            <i class="${cat.icon}"></i>
          </div>
          <h3 class="tech-layer-title">${cat.title}</h3>
        </div>
      </div>
      <div class="tech-chips-grid">
        ${cat.items.map(item => `
          <div class="tech-badge-chip">
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Setup Tech Matrix Filter --- */
function setupTechMatrixFilter() {
  const filterBtns = document.querySelectorAll('.tech-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-tech-filter');
      renderTechMatrix(cat);
      initScrollReveal();
    });
  });
}

/* --- Render Engineering Pipeline --- */
function renderEngineeringPipeline() {
  const grid = document.getElementById('how-i-work-grid');
  if (!grid) return;
  const processItems = portfolioData.engineeringProcess || portfolioData.howIWork;
  if (!processItems) return;

  grid.innerHTML = processItems.map(item => `
    <div class="pipeline-card glass-card">
      <div class="pipeline-top">
        <span class="pipeline-step-num">${item.step}</span>
        <span class="pipeline-tag">${item.tag || 'Standard'}</span>
      </div>
      <div class="pipeline-icon-wrap">
        <i class="fa-solid fa-${item.icon}"></i>
      </div>
      <h3 class="pipeline-title">${item.title}</h3>
      <p class="pipeline-desc">${item.description}</p>
    </div>
  `).join('');
}

/* --- Render Projects --- */
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container || !portfolioData.projects) return;

  const filtered = filterCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filterCategory || (Array.isArray(p.categories) && p.categories.includes(filterCategory)));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-projects-state glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; border-radius: var(--radius-lg);">
        <i class="fa-solid fa-laptop-code" style="font-size: 2.4rem; color: var(--accent-primary); margin-bottom: 1rem; display: inline-block;"></i>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary); font-family: var(--font-display);">More Projects Coming Soon!</h3>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem auto; font-size: 0.9rem; line-height: 1.5;">
          I am actively developing new software solutions in this track. Click below to view all current projects.
        </p>
        <button class="btn btn-primary btn-sm" id="reset-filter-btn" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-arrow-left"></i> <span>View All Projects</span>
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.click();
      });
    }
    return;
  }

  const iconMap = {
    cpu: 'fa-solid fa-microchip',
    activity: 'fa-solid fa-chart-line',
    layers: 'fa-solid fa-cubes',
    shield: 'fa-solid fa-shield-halved',
    'shopping-bag': 'fa-solid fa-bag-shopping',
    users: 'fa-solid fa-users-viewfinder'
  };

  container.innerHTML = filtered.map(proj => {
    const openUrl = proj.liveUrl || `coming-soon.html?project=${encodeURIComponent(proj.title)}`;
    const isExternal = Boolean(proj.liveUrl);

    return `
    <div class="project-card glass-card" data-project-id="${proj.id}">
      <div class="project-banner" style="background: ${proj.imageGradient}">
        <div class="project-banner-overlay"></div>
        <div class="project-category-tag">${proj.categoryLabel}</div>
        <span class="project-status-badge ${proj.status}">${proj.statusLabel}</span>
        <i class="${iconMap[proj.icon] || 'fa-solid fa-code'} project-icon-large"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-tech-pills">
          ${proj.technologies.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <a href="${openUrl}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-primary btn-sm project-open-btn">
            <span>Open Project</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <div class="project-links">
            <button class="btn-icon btn-sm" data-open-modal="${proj.id}" title="View Details" aria-label="View Project Details">
              <i class="fa-solid fa-circle-info"></i>
            </button>

          </div>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

/* --- Projects Filter Setup --- */
function setupProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
      initScrollReveal();
    });
  });
}

/* --- Project Modal System --- */
function setupProjectModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  // Open modal delegation
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (trigger) {
      const projId = trigger.getAttribute('data-open-modal');
      openModal(projId);
    }
  });

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal(id) {
    const proj = portfolioData.projects.find(p => p.id === id);
    if (!proj || !backdrop) return;

    document.getElementById('modal-banner').style.background = proj.imageGradient;
    document.getElementById('modal-title').textContent = proj.title;
    document.getElementById('modal-tagline').textContent = proj.tagline;
    document.getElementById('modal-desc').textContent = proj.description;

    // Stats
    const statsContainer = document.getElementById('modal-stats-container');
    statsContainer.innerHTML = Object.entries(proj.stats).map(([k, v]) => `
      <div class="modal-stat-box">
        <h4>${v}</h4>
        <p>${k.replace(/([A-Z])/g, ' $1').trim()}</p>
      </div>
    `).join('');

    // Highlights
    const highlightsList = document.getElementById('modal-highlights-list');
    highlightsList.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join('');

    // Tech Pills
    const techContainer = document.getElementById('modal-tech-pills');
    techContainer.innerHTML = proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('');

    // Links
    const liveLink = document.getElementById('modal-live-link');

    if (liveLink) {
      if (proj.liveUrl) {
        liveLink.href = proj.liveUrl;
        liveLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> <span>Live Demo</span>`;
        liveLink.classList.remove('btn-secondary');
        liveLink.classList.add('btn-primary');
        liveLink.style.display = 'inline-flex';
      } else {
        liveLink.href = `coming-soon.html?project=${encodeURIComponent(proj.title)}`;
        liveLink.innerHTML = `<i class="fa-solid fa-clock"></i> <span>Coming Soon</span>`;
        liveLink.classList.remove('btn-primary');
        liveLink.classList.add('btn-secondary');
        liveLink.style.display = 'inline-flex';
      }
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!backdrop) return;
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. Scroll Observers (Reveal Animations, Progress Bar & Observers)
   ========================================================================== */
function initScrollObservers() {
  initScrollReveal();

  // Number counters
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target + (target > 50 ? '%' : '+');
              clearInterval(timer);
            } else {
              counter.textContent = current + '+';
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) counterObserver.observe(heroStats);
}

function initScrollReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  });

  // Section headers
  document.querySelectorAll('.section-header').forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    }
  });

  // About Bento grid
  const profileSpec = document.querySelector('.about-profile-spec');
  const bentoRight = document.querySelector('.about-bento-right');
  if (profileSpec && !profileSpec.classList.contains('reveal-left')) {
    profileSpec.classList.add('reveal-left');
    revealObserver.observe(profileSpec);
  }
  if (bentoRight && !bentoRight.classList.contains('reveal-right')) {
    bentoRight.classList.add('reveal-right');
    revealObserver.observe(bentoRight);
  }

  // Tech Layer Groups
  document.querySelectorAll('.tech-layer-group').forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 2) * 0.12}s`;
      revealObserver.observe(el);
    }
  });

  // Project cards alternating from left and right
  document.querySelectorAll('.project-card').forEach((el, i) => {
    const animClass = i % 2 === 0 ? 'reveal-left' : 'reveal-right';
    el.classList.remove('reveal-scale', 'reveal-left', 'reveal-right');
    el.classList.add(animClass);
    el.style.transitionDelay = `${(i % 2) * 0.12}s`;
    revealObserver.observe(el);
  });

  // Engineering Pipeline cards
  document.querySelectorAll('.pipeline-card, .how-i-work-card').forEach((el, i) => {
    const animClass = i % 2 === 0 ? 'reveal-left' : 'reveal-right';
    el.classList.remove('reveal-scale', 'reveal-left', 'reveal-right');
    el.classList.add(animClass);
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
  });

  // Contact Form card reveal
  const contactForm = document.querySelector('.contact-form-card');
  if (contactForm && !contactForm.classList.contains('reveal-up')) {
    contactForm.classList.add('reveal-up');
    revealObserver.observe(contactForm);
  }
}

/* ==========================================================================
   7. Navbar & Scroll Spy & Progress Bar
   ========================================================================== */
function initNavbarAndScroll() {
  const header = document.getElementById('site-header');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // Scroll events
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Top glowing scroll progress bar
    if (scrollProgressBar) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      scrollProgressBar.style.width = scrolled + '%';
    }

    // Header glass background
    if (header) {
      if (scrollPos > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    // Scroll spy for active nav link
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Scroll to Top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   8. How I Work — Process Cards
   ========================================================================== */
function initTestimonialSlider() {
  renderEngineeringPipeline();
}

/* ==========================================================================
   9. Contact Form & Interactive Tools
   ========================================================================== */
function initContactAndTools() {
  // Live Pakistan Time Clock (PKT)
  const clockEl = document.getElementById('current-local-time');
  function updateTime() {
    if (!clockEl) return;
    const now = new Date();
    const options = {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = `${now.toLocaleTimeString('en-US', options)} PKT`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // One-click Copy Email
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = portfolioData.developer.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!', 'check');
      }).catch(() => {
        showToast(`Email: ${email}`, 'envelope');
      });
    });
  }

  // Terminal Copy Button
  const termCopyBtn = document.getElementById('terminal-copy-btn');
  if (termCopyBtn) {
    termCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.about.terminalCode).then(() => {
        showToast('Code snippet copied to clipboard!', 'code');
      });
    });
  }

  // Download CV Button
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      showToast('No resume available for download at this time.', 'info');
    });
  }

  // Contact Form Submit Handler (Real Submissions)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-form-btn');
      const origText = submitBtn.innerHTML;

      // Sanitize: strip HTML tags from user input
      const sanitize = (str) => str.replace(/<[^>]*>/g, '').trim();

      const name    = sanitize(document.getElementById('form-name').value);
      const email   = sanitize(document.getElementById('form-email').value);
      const subject = sanitize(document.getElementById('form-subject').value);
      const message = sanitize(document.getElementById('form-message').value);

      // Basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || name.length > 100) { showToast('Please enter a valid name (max 100 chars).', 'circle-exclamation'); return; }
      if (!emailRegex.test(email))     { showToast('Please enter a valid email address.', 'circle-exclamation'); return; }
      if (!subject || subject.length > 200) { showToast('Please enter a subject (max 200 chars).', 'circle-exclamation'); return; }
      if (!message || message.length > 5000) { showToast('Message too long (max 5000 characters).', 'circle-exclamation'); return; }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>`;

      // Check if Formspree or Web3Forms is configured
      const formspreeUrl = portfolioData.developer.formspreeUrl;
      const web3Key = portfolioData.developer.web3FormsAccessKey;

      if (formspreeUrl) {
        try {
          const res = await fetch(formspreeUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
          });
          if (res.ok) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            contactForm.reset();
            showToast('Message sent successfully!', 'check');
            return;
          }
        } catch (err) {
          console.error('Formspree error:', err);
        }
      } else if (web3Key) {
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: web3Key,
              name: name,
              email: email,
              from_name: name,
              subject: `Portfolio Message from ${name}: ${subject}`,
              message: message
            })
          });
          const data = await res.json();
          if (data.success) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            contactForm.reset();
            showToast('Message sent successfully!', 'check');
            return;
          } else {
            console.warn('Web3Forms response:', data);
          }
        } catch (err) {
          console.error('Web3Forms error:', err);
        }
      }

      // Direct fallback: opens email client pre-filled with visitor's message
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactForm.reset();
        
        const mailtoUrl = `mailto:${portfolioData.developer.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;

        showToast('Opening your email app to send message to Umair...', 'envelope');
      }, 500);
    });
  }

  // Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ==========================================================================
   10. Toast Notification System
   ========================================================================== */
function showToast(message, iconName = 'bell') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  // Use safe DOM construction — never put message string into innerHTML
  const icon = document.createElement('i');
  icon.className = `fa-solid fa-${iconName}`;

  const text = document.createElement('span');
  text.textContent = message; // safe: renders as plain text, not HTML

  toast.appendChild(icon);
  toast.appendChild(text);

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


