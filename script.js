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
   1. Theme Switcher System
   ========================================================================== */
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeMenu = document.getElementById('theme-dropdown-menu');
  const themeOptions = document.querySelectorAll('.theme-option');
  const htmlEl = document.documentElement;

  // Load saved theme from localStorage (default: Cyber Cyan)
  const savedTheme = localStorage.getItem('portfolio_theme') || 'cyan';
  applyTheme(savedTheme);

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
        applyTheme(theme);
        themeMenu.classList.remove('active');
        showToast(`Theme switched to ${opt.textContent.trim()}!`, 'palette');
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
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 75);

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
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
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = (dx / distance) * force * 2.5;
          const dirY = (dy / distance) * force * 2.5;
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

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const opacity = (1 - distance / 110) * 0.18;
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

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   4. Typewriter Animation
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'MERN & Next.js Developer',
    'Web Application Builder'
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

  // Render About Tabs
  renderAboutTabs();

  // Render Skills
  renderSkills();

  // Render Experience Timeline
  renderExperience();

  // Render Services
  renderServices();

  // Render Projects Gallery
  renderProjects('all');

  // Setup Projects Filter
  setupProjectsFilter();

  // Setup Project Modal
  setupProjectModal();
}

/* --- Render About Tabs --- */
function renderAboutTabs() {
  const eduList = document.getElementById('education-list');
  const toolsList = document.getElementById('tools-list');

  // Education
  if (eduList && portfolioData.about.tabs.education) {
    eduList.innerHTML = portfolioData.about.tabs.education.items.map(item => `
      <div class="tab-item-card">
        <div class="tab-item-header">
          <span class="tab-item-title">${item.degree}</span>
          <span class="tab-item-year">${item.year}</span>
        </div>
        <div class="tab-item-sub">${item.institution}</div>
        <div class="tab-item-honors"><i class="fa-solid fa-award"></i> ${item.honors}</div>
      </div>
    `).join('');
  }

  // Tools & Workflow
  if (toolsList && portfolioData.about.tabs.workflow) {
    toolsList.innerHTML = portfolioData.about.tabs.workflow.tags.map(tag => `
      <div class="tool-tag">
        <i class="fa-solid fa-check"></i>
        <span>${tag}</span>
      </div>
    `).join('');
  }

  // Tab switching click handlers
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) activeContent.classList.add('active');
    });
  });
}

/* --- Render Skills --- */
function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container || !portfolioData.skills) return;

  const iconMap = {
    layout: 'fa-solid fa-layer-group',
    server: 'fa-solid fa-server',
    database: 'fa-solid fa-database',
    'pen-tool': 'fa-solid fa-compass-drafting'
  };

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-category-card glass-card">
      <div class="skill-category-header">
        <div class="skill-icon-wrap">
          <i class="${iconMap[cat.icon] || 'fa-solid fa-code'}"></i>
        </div>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      <div class="skill-bars-list">
        ${cat.items.map(item => `
          <div class="skill-bar-item">
            <div class="skill-info">
              <span class="skill-name">${item.name}</span>
              <span class="skill-pct">${item.level}%</span>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" data-progress="${item.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Render Experience --- */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !portfolioData.experience) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-card-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company} &bull; ${exp.location}</span>
          </div>
          <div class="timeline-meta">
            <span class="timeline-period">${exp.period}</span>
            <span class="timeline-badge">${exp.badge}</span>
          </div>
        </div>
        <ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* --- Render Services --- */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !portfolioData.services) return;

  const iconMap = {
    code: 'fa-solid fa-code',
    layout: 'fa-solid fa-palette',
    zap: 'fa-solid fa-bolt',
    cpu: 'fa-solid fa-microchip'
  };

  container.innerHTML = portfolioData.services.map(svc => `
    <div class="service-card glass-card">
      <div class="service-icon-box">
        <i class="${iconMap[svc.icon] || 'fa-solid fa-laptop-code'}"></i>
      </div>
      <h3 class="service-title">${svc.title}</h3>
      <p class="service-desc">${svc.description}</p>
      <ul class="service-checklist">
        ${svc.features.map(f => `<li><i class="fa-solid fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* --- Render Projects --- */
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container || !portfolioData.projects) return;

  const filtered = filterCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filterCategory);

  const iconMap = {
    cpu: 'fa-solid fa-microchip',
    activity: 'fa-solid fa-chart-line',
    layers: 'fa-solid fa-cubes',
    shield: 'fa-solid fa-shield-halved',
    'shopping-bag': 'fa-solid fa-bag-shopping',
    users: 'fa-solid fa-users-viewfinder'
  };

  container.innerHTML = filtered.map(proj => {
    const liveLink = proj.liveUrl
      ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon btn-sm" title="Live Preview">
           <i class="fa-solid fa-external-link"></i>
         </a>`
      : `<a href="coming-soon.html?project=${encodeURIComponent(proj.title)}" class="btn-icon btn-sm" title="Coming Soon">
           <i class="fa-solid fa-clock"></i>
         </a>`;

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
          <button class="project-details-btn" data-open-modal="${proj.id}">
            <span>View Details</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <div class="project-links">
            ${liveLink}
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon btn-sm" title="GitHub Repo">
              <i class="fa-brands fa-github"></i>
            </a>
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
    const githubLink = document.getElementById('modal-github-link');
    githubLink.href = proj.githubUrl;
    
    if (proj.liveUrl) {
      liveLink.href = proj.liveUrl;
      liveLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> <span>Live Demo</span>`;
      liveLink.classList.remove('btn-secondary');
      liveLink.classList.add('btn-primary');
    } else {
      liveLink.href = `coming-soon.html?project=${encodeURIComponent(proj.title)}`;
      liveLink.innerHTML = `<i class="fa-solid fa-clock"></i> <span>Coming Soon</span>`;
      liveLink.classList.remove('btn-primary');
      liveLink.classList.add('btn-secondary');
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
   6. Scroll Observers (Counters & Skill Progress Bars)
   ========================================================================== */
function initScrollObservers() {
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

  // Skill Bars Observer
  const skillsGrid = document.getElementById('skills-grid-container');
  if (skillsGrid) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = document.querySelectorAll('.skill-progress-fill');
          fills.forEach(f => {
            const width = f.getAttribute('data-progress');
            f.style.width = `${width}%`;
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsGrid);
  }
}

/* ==========================================================================
   7. Navbar & Scroll Spy
   ========================================================================== */
function initNavbarAndScroll() {
  const header = document.getElementById('site-header');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
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
  // Replaced: renders "How I Work" process cards instead of fake testimonials
  const grid = document.getElementById('how-i-work-grid');
  if (!grid || !portfolioData.howIWork) return;

  grid.innerHTML = portfolioData.howIWork.map(item => `
    <div class="how-i-work-card glass-card">
      <div class="hiw-step-badge">${item.step}</div>
      <div class="hiw-icon-box">
        <i class="fa-solid fa-${item.icon}"></i>
      </div>
      <h3 class="hiw-title">${item.title}</h3>
      <p class="hiw-desc">${item.description}</p>
    </div>
  `).join('');
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
            showToast('Message sent successfully! I will get back to you soon.', 'paper-plane');
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
            showToast('Message sent successfully! I will get back to you within 24 hours.', 'check');
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


