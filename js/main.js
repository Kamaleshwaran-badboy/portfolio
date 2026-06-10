/* ================================================================
   KAMALESHWARAN P — PORTFOLIO JAVASCRIPT
   All interactions, animations, canvas effects
================================================================ */

'use strict';

/* ── PROJECT DATA ────────────────────────────────────────────── */
const projectData = [
  {
    id: 0,
    title: 'AI-Based Quality Inspection System',
    category: 'Patent · AI · Computer Vision',
    tags: ['Artificial Intelligence', 'Computer Vision', 'Mechanical Integration', 'Patent Filed', 'India 2025'],
    problem: 'Industrial quality departments rely heavily on manual inspection processes that are slow, inconsistent, and prone to human error — leading to defective mechanical parts passing through production lines and increasing reject rates.',
    solution: 'Co-invented an AI-powered quality inspection system that uses computer vision and deep learning algorithms to automatically detect surface defects, dimensional deviations, and quality issues in mechanical components — reducing human error and improving production standards.',
    tech: ['Computer Vision', 'AI / Deep Learning', 'Hardware Interfacing', 'Embedded Systems', 'Mechanical Domain Knowledge'],
    results: ['Automated defect detection pipeline', 'Reduced human inspection error', 'Filed Indian Patent (2025)', 'Smart, reliable inspection solution at industrial scale'],
    scope: 'Scale to multi-line inspection, integrate with ERP systems, add predictive maintenance, and expand to full Quality 4.0 framework.',
  },
  {
    id: 1,
    title: 'Autonomous Rover System',
    category: 'Patent · Robotics · Embedded Systems',
    tags: ['Autonomous Navigation', 'Embedded Control', 'Mechanical Design', 'Patent Filed', 'India 2025'],
    problem: 'Autonomous ground vehicles for inspection and mapping require a tight integration of mechanical structural design, embedded firmware, and navigation intelligence — a challenge most student teams address only partially.',
    solution: 'Co-designed and co-developed a fully autonomous rover with complete system architecture — mechanical frame design, structural analysis, motor selection, sensor integration, firmware programming, and navigation algorithms. End-to-end engineering from design to deployment.',
    tech: ['Arduino / ESP32', 'Embedded C Firmware', 'Mechanical Frame Design (SolidWorks)', 'Sensor Integration (Ultrasonic, IMU)', 'Motor Control & Driver Circuits', 'Navigation Algorithms'],
    results: ['Fully functional autonomous rover prototype', 'End-to-end mechanical + software integration', 'Filed Indian Patent (2025)', 'Demonstrated autonomous movement & obstacle avoidance'],
    scope: 'Add SLAM (Simultaneous Localization and Mapping), upgrade to ROS framework, integrate camera-based AI vision, deploy in real industrial inspection environments.',
  },
  {
    id: 2,
    title: 'AR-Based Intelligent Assembly Guidance & Torque Monitoring System',
    category: 'Patent · Augmented Reality · Industry 4.0',
    tags: ['Augmented Reality', 'Assembly Guidance', 'Torque Monitoring', 'Industrial Valves', 'Patent Filed', 'India 2025'],
    problem: 'Industrial valve assembly is a precision-critical process where incorrect torque application and assembly sequence errors cause safety hazards, product failures, and expensive rework — particularly in high-stakes environments.',
    solution: 'Co-developed an AR-based intelligent system that overlays real-time visual assembly guidance on physical workpieces, monitors torque application in real-time, alerts operators on sequence errors, and logs assembly data for traceability — improving precision and reducing human error.',
    tech: ['Augmented Reality (AR)', 'Torque Sensor Integration', 'Real-Time Data Processing', 'Mechanical Domain Knowledge', 'Software & Hardware Integration', 'Industrial UI Design'],
    results: ['Real-time AR assembly guidance overlay', 'Torque monitoring with live alerts', 'Filed Indian Patent (2025)', 'Improved precision and operational safety in valve manufacturing'],
    scope: 'Expand to full Industry 4.0 integration, connect to digital twin systems, implement IoT-based remote monitoring, and scale across multi-station manufacturing lines.',
  },
  {
    id: 3,
    title: 'PointIQ — Real-Time Sports Scoreboard System',
    category: 'Electronics · IoT · Hardware',
    tags: ['Electronics', 'Hardware', 'Embedded Systems', 'Real-Time', 'Scoreboard'],
    problem: 'Sporting events at institutional level lacked a dedicated, reliable real-time scoreboard system — relying on manual displays that were slow, error-prone, and lacked live update capabilities.',
    solution: 'Designed and developed PointIQ — a real-time sports scoreboard system with live score display and management. Implemented component-level hardware interfacing, wiring, and data communication protocols between hardware modules.',
    tech: ['Electronic Components', 'Display Modules', 'Communication Protocols', 'Hardware Interfacing', 'Embedded Systems', 'Signal Flow Engineering'],
    results: ['Fully functional real-time scoreboard', 'Reliable hardware communication implementation', 'Hands-on component-level engineering experience', 'Deployed for institutional sporting events'],
    scope: 'Wireless score updating via smartphone app, multi-sport mode support, LED panel integration, and cloud-synced live broadcasting capability.',
  },
  {
    id: 4,
    title: 'Kart Design & Structural Analysis — Tamil Nadu Karting Championship',
    category: 'Mechanical Design · FEA · Motorsport',
    tags: ['SolidWorks', 'AutoCAD', 'ANSYS FEA', 'Chassis Design', 'Motorsport', 'Title Won'],
    problem: 'Designing a competition-ready kart requires simultaneous optimization of chassis geometry, component packaging, structural integrity, driver ergonomics, and regulatory compliance — all under strict weight and cost constraints with a hard competition deadline.',
    solution: 'Led complete end-to-end kart design and analysis as both Design Head and Analysis Head. Designed full chassis geometry, suspension layout, component packaging, and ergonomics using SolidWorks and AutoCAD. Performed ANSYS FEA on all critical components, iterated designs based on simulation results, and coordinated fabrication and pre-competition setup.',
    tech: ['SolidWorks 3D Modelling', 'AutoCAD 2D Drafting', 'ANSYS Workbench FEA', 'Structural Analysis', 'Suspension Geometry Design', 'Manufacturing & Fabrication Coordination'],
    results: ['Championship title win at Tamil Nadu Karting Championship Season 02', 'Structurally validated kart with optimized performance', 'FEA-confirmed safety margins on all critical components', 'Successful regulatory compliance across all competition categories'],
    scope: 'Advanced aerodynamics using CFD, lightweight carbon-composite chassis design, data-logging systems, and competing at national-level karting championships.',
  },
  {
    id: 5,
    title: 'Pebble Bed Heat Exchanger — CFD & Energy Storage Analysis',
    category: 'Research · CFD · Thermal Engineering',
    tags: ['CFD', 'ANSYS Fluent', 'Thermal Analysis', 'Energy Storage', 'National Conference'],
    problem: 'Pebble bed heat exchangers are a promising technology for thermal energy storage, but the impact of pebble arrangement on heat transfer coefficients, pressure drop, and storage efficiency was insufficiently characterized for practical design optimization.',
    solution: 'Conducted detailed CFD analysis and energy storage research using ANSYS Fluent, evaluating multiple pebble bed configurations. Analyzed heat transfer coefficients, pressure drop across arrangements, and thermal energy storage efficiency — providing data-driven design recommendations.',
    tech: ['ANSYS Fluent (CFD)', 'Thermal Analysis', 'Heat Transfer Engineering', 'Energy Storage Modelling', 'CFD Post-Processing & Visualization'],
    results: ['Quantified heat transfer vs. pressure drop trade-offs', 'Identified optimal pebble arrangement for maximum storage efficiency', 'Presented at National Conference — Dr. NGP Institute of Technology', 'Contributed to Viksit Bharat 2047 research initiatives'],
    scope: 'Experimental validation of CFD results, testing with alternative pebble materials, integration with solar thermal systems, and scaling to industrial TES (Thermal Energy Storage) applications.',
  },
  {
    id: 6,
    title: 'Shell & Tube Heat Exchanger with Parabolic Solar Collector',
    category: 'Research · Thermal · Renewable Energy',
    tags: ['Shell & Tube', 'Parabolic Solar', 'Thermal Efficiency', 'Renewable Energy', 'Published Paper'],
    problem: 'Integrating parabolic solar collectors with shell and tube heat exchangers for renewable thermal applications requires understanding complex coupling effects between collector performance and exchanger efficiency under varying irradiance conditions.',
    solution: 'Performed comprehensive performance evaluation of shell and tube heat exchangers integrated with parabolic solar collector systems. Analyzed thermal efficiency, heat transfer enhancement strategies, and collector-exchanger coupling performance under varying solar irradiance — resulting in a published conference paper.',
    tech: ['Thermal Engineering Analysis', 'Solar Collector Performance Modelling', 'Shell & Tube Heat Exchanger Design', 'Heat Transfer Enhancement Strategies', 'Performance Evaluation Methodology'],
    results: ['Published Conference Paper at SRM Institute of Technology National Conference', 'Quantified thermal efficiency under variable irradiance', 'Identified optimal heat transfer enhancement strategies', 'Contributed to renewable thermal energy research body'],
    scope: 'Scale to multi-pass configurations, integrate with thermal storage, model for different climate zones, and develop design guidelines for commercial solar thermal installations.',
  },
  {
    id: 7,
    title: 'Virtual Site Development — SRIT Campus Digital Platform',
    category: 'Web Development · Virtual Experience',
    tags: ['HTML5', 'CSS3', 'Virtual Tour', 'Web Development', 'SRIT'],
    problem: 'SRIT needed a digital campus experience platform for institutional outreach, remote student orientation, and online campus promotion — a virtual equivalent of physically visiting the campus.',
    solution: 'Developed a full virtual site project for SRIT campus using HTML5 and CSS3 during internship training. Designed navigation flow, multimedia integration, and virtual visualization — delivering a fully navigable digital campus experience for institutional digital outreach and campus promotion.',
    tech: ['HTML5', 'CSS3', 'Virtual Visualization', 'Navigation Flow Design', 'Multimedia Integration', 'UI/UX Design'],
    results: ['Delivered functional digital campus platform', 'Interactive navigation with multimedia integration', 'Applied real-world project management skills', 'Institutional deployment for SRIT digital outreach'],
    scope: 'Upgrade to 3D WebGL virtual tours, integrate 360° photography, add AR wayfinding, and develop mobile app version for prospective students.',
  },
];

/* ── DOM READY ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initTheme();
  initNavbar();
  initMobileDrawer();
  initHeroCanvas();
  initTypewriter();
  initScrollProgress();
  initRevealAnimations();
  initStatCounters();
  initSkillTabs();
  initProjectFilter();
  initBackToTop();
  initSmoothScrollLinks();
});

/* ── LOADING SCREEN ──────────────────────────────────────────── */
function initLoadingScreen() {
  const screen  = document.getElementById('loading-screen');
  const bar     = document.getElementById('loading-bar');
  const percent = document.getElementById('loading-percent');
  const canvas  = document.getElementById('loading-canvas');

  if (!screen) return;

  // Particle canvas on loading screen
  const ctx  = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  let rafId;
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
      ctx.fill();
    });
    rafId = requestAnimationFrame(drawParticles);
  }
  drawParticles();

  // Progress animation
  let prog = 0;
  const interval = setInterval(() => {
    prog += Math.random() * 4 + 1;
    if (prog > 100) prog = 100;
    bar.style.width = prog + '%';
    percent.textContent = Math.floor(prog) + '%';
    if (prog >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        cancelAnimationFrame(rafId);
        screen.classList.add('hidden');
        document.body.classList.add('loaded');
        // Trigger hero animations
        document.querySelectorAll('#hero .reveal-up').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120);
        });
      }, 400);
    }
  }, 40);

  document.body.style.overflow = 'hidden';
}

/* ── THEME TOGGLE ────────────────────────────────────────────── */
function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const html = document.documentElement;

  const saved = localStorage.getItem('kp-theme') || 'dark';
  setTheme(saved);

  btn && btn.addEventListener('click', () => {
    const current = html.dataset.theme;
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  function setTheme(t) {
    html.dataset.theme = t;
    localStorage.setItem('kp-theme', t);
    if (icon) {
      icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

/* ── NAVBAR ──────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scrolled style
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Active link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  }, { passive: true });
}

/* ── MOBILE DRAWER ───────────────────────────────────────────── */
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobile-drawer');
  const overlay   = document.getElementById('drawer-overlay');
  const closeBtn  = document.getElementById('drawer-close');

  function open()  { drawer.classList.add('open'); overlay.classList.add('active'); hamburger.classList.add('open'); document.body.style.overflowY = 'hidden'; }
  function close() { drawer.classList.remove('open'); overlay.classList.remove('active'); hamburger.classList.remove('open'); document.body.style.overflowY = ''; }

  hamburger && hamburger.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  closeBtn  && closeBtn.addEventListener('click', close);
  overlay   && overlay.addEventListener('click', close);

  // Close on link click
  document.querySelectorAll('.drawer-links a').forEach(a => a.addEventListener('click', close));
}

/* ── HERO CANVAS (Particles + Blueprint Grid) ────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles, animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));
  }

  function drawGrid() {
    const theme = document.documentElement.dataset.theme;
    const lineColor = theme === 'light' ? 'rgba(139,105,20,0.04)' : 'rgba(201,168,76,0.04)';
    const step = 60;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // Corner markers
    ctx.strokeStyle = theme === 'light' ? 'rgba(139,105,20,0.12)' : 'rgba(201,168,76,0.12)';
    for (let x = 0; x < W; x += step) {
      for (let y = 0; y < H; y += step) {
        const size = 4;
        ctx.beginPath();
        ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);
        ctx.stroke();
      }
    }
  }

  let t = 0;
  function animate() {
    ctx.clearRect(0, 0, W, H);

    // Dark radial bg overlay
    const theme = document.documentElement.dataset.theme;
    if (theme !== 'light') {
      const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H)*0.7);
      grad.addColorStop(0, 'rgba(10,6,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.6)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    drawGrid();
    t += 0.008;

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      p.pulse += 0.015;
      const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${a})`;
      ctx.fill();
    });

    // Connection lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(201,168,76,${0.04 * (1 - dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(animate);
  }

  resize();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    createParticles();
    animate();
  }, { passive: true });
}

/* ── TYPEWRITER EFFECT ───────────────────────────────────────── */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const strings = [
    'Mechanical Design Engineer',
    'Patent Co-Inventor',
    'Motorsport Engineer',
    'Product Developer',
    'Technology Innovator',
    'CAD & FEA Specialist',
  ];

  let si = 0, ci = 0, deleting = false;
  const typeSpeed = 75, deleteSpeed = 40, pauseTime = 2200;

  function type() {
    const current = strings[si];
    if (!deleting) {
      el.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) { deleting = true; setTimeout(type, pauseTime); return; }
      setTimeout(type, typeSpeed);
    } else {
      el.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; si = (si + 1) % strings.length; setTimeout(type, 350); return; }
      setTimeout(type, deleteSpeed);
    }
  }
  type();
}

/* ── SCROLL PROGRESS BAR ─────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct   = (window.scrollY / total) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ── REVEAL ANIMATIONS (IntersectionObserver) ────────────────── */
function initRevealAnimations() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill bars when they become visible
        const bars = entry.target.querySelectorAll ? entry.target.querySelectorAll('.skill-bar') : [];
        bars.forEach(b => animateSkillBar(b));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    // Don't observe hero elements (handled by loading screen)
    if (!el.closest('#hero')) observer.observe(el);
  });
}

/* ── STAT COUNTERS ───────────────────────────────────────────── */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

/* ── SKILL TABS ──────────────────────────────────────────────── */
function initSkillTabs() {
  const tabs   = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('tab-' + tab.dataset.tab);
      if (panel) {
        panel.classList.add('active');
        // Animate bars in newly shown panel
        panel.querySelectorAll('.skill-bar').forEach(b => {
          b.style.width = '0%';
          setTimeout(() => animateSkillBar(b), 50);
        });
        // Re-trigger reveal animations for panel items
        panel.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach((el, i) => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
      }
    });
  });

  // Animate bars in active (default) panel on scroll
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skills-panel.active .skill-bar').forEach(b => animateSkillBar(b));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(skillsSection);
  }
}

function animateSkillBar(bar) {
  const width = bar.dataset.width || '0';
  bar.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { bar.style.width = width + '%'; });
  });
}

/* ── PROJECT FILTER ──────────────────────────────────────────── */
function initProjectFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        if (show) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 60);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── PROJECT MODAL ───────────────────────────────────────────── */
function openProjectModal(id) {
  const data    = projectData[id];
  const overlay = document.getElementById('modal-overlay');
  const modal   = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!data || !modal) return;

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-category">${data.category}</div>
      <h2 class="modal-title">${data.title}</h2>
      <div class="modal-tags">${data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-sections">
      <div class="modal-section">
        <h4><i class="fas fa-exclamation-circle"></i> Problem Statement</h4>
        <p>${data.problem}</p>
      </div>
      <div class="modal-section">
        <h4><i class="fas fa-lightbulb"></i> Solution</h4>
        <p>${data.solution}</p>
      </div>
      <div class="modal-section">
        <h4><i class="fas fa-cogs"></i> Technologies Used</h4>
        <ul>${data.tech.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h4><i class="fas fa-chart-line"></i> Results & Impact</h4>
        <ul>${data.results.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="modal-section modal-section-full">
        <h4><i class="fas fa-rocket"></i> Future Scope</h4>
        <p>${data.scope}</p>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflowY = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('modal-overlay');
  const modal   = document.getElementById('project-modal');
  overlay.classList.remove('active');
  modal.classList.remove('active');
  document.body.style.overflowY = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProjectModal();
});

/* ── BACK TO TOP ─────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── SMOOTH SCROLL LINKS ─────────────────────────────────────── */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  const originalHTML = btn.innerHTML;

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  // Simulate send (replace with real backend integration)
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #4ADE80, #22C55E)';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }, 1500);
}

/* ── CURSOR TRAIL (subtle gold) ──────────────────────────────── */
(function initCursorTrail() {
  if (window.matchMedia('(hover: none)').matches) return; // skip on touch

  const trail = [];
  const COUNT = 6;
  for (let i = 0; i < COUNT; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:fixed; pointer-events:none; z-index:9998;
      width:${6 - i}px; height:${6 - i}px;
      border-radius:50%;
      background:rgba(201,168,76,${0.3 - i*0.04});
      transform:translate(-50%,-50%);
      transition:left ${0.05 + i*0.03}s ease, top ${0.05 + i*0.03}s ease;
      will-change:left,top;
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }

  document.addEventListener('mousemove', e => {
    trail.forEach(dot => {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });
  }, { passive: true });
})();

/* ── PARALLAX ON HERO TEXT ───────────────────────────────────── */
(function initParallax() {
  const hero = document.getElementById('hero');
  const content = hero && hero.querySelector('.hero-content');
  if (!content) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      content.style.transform = `translateY(${y * 0.18}px)`;
      content.style.opacity = 1 - y / (window.innerHeight * 0.85);
    }
  }, { passive: true });
})();

/* ── EXPERTISE CARD TILT ─────────────────────────────────────── */
(function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.expertise-card, .patent-card, .achievement-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ── NUMBERS TICKER ON ACHIEVEMENT SECTION ───────────────────── */
(function initAchievementReveal() {
  // Achievement cards use the standard .reveal-up observer — no extra logic needed.
  // This block intentionally left minimal to avoid conflicting with initRevealAnimations().
})();

/* ── TIMELINE LINE DRAW ──────────────────────────────────────── */
(function initTimelineDraw() {
  // Timeline items use .reveal-left / .reveal-right handled by initRevealAnimations().
  // The ::before line is CSS-only. No DOM override needed.
})();

/* ── SECTION BACKGROUND GLOW ─────────────────────────────────── */
(function initSectionGlow() {
  const glowSections = ['#patents', '#hero', '#about'];
  glowSections.forEach(sel => {
    const sec = document.querySelector(sel);
    if (!sec) return;
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:absolute; pointer-events:none; z-index:0;
      width:600px; height:600px; border-radius:50%;
      background:radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
      top:50%; left:50%; transform:translate(-50%,-50%);
    `;
    if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';
    sec.appendChild(glow);
  });
})();

/* ── NAV LINK HOVER SOUND (subtle) ───────────────────────────── */
// Skipped to keep it professional — no audio gimmicks

/* ── WINDOW RESIZE DEBOUNCE ──────────────────────────────────── */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Re-check visible skill bars
    document.querySelectorAll('.skills-panel.active .skill-bar').forEach(b => {
      if (b.style.width === '0%' || b.style.width === '') animateSkillBar(b);
    });
  }, 200);
}, { passive: true });

/* ── PRINT / REDUCED MOTION SUPPORT ─────────────────────────── */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reducedMotion.matches) {
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    el.classList.add('visible');
  });
}
