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
    problem: 'SRIT needed a digital campus experience platform for institutional outreach, remote student orientation, and online campus promotion.',
    solution: 'Developed a full virtual site project for SRIT campus using HTML5 and CSS3. Designed navigation flow, multimedia integration, and virtual visualization — delivering a fully navigable digital campus experience.',
    tech: ['HTML5', 'CSS3', 'Virtual Visualization', 'Navigation Flow Design', 'Multimedia Integration', 'UI/UX Design'],
    results: ['Delivered functional digital campus platform', 'Interactive navigation with multimedia integration', 'Applied real-world project management skills', 'Institutional deployment for SRIT digital outreach'],
    scope: 'Upgrade to 3D WebGL virtual tours, integrate 360° photography, add AR wayfinding, and develop mobile app version for prospective students.',
  },
  {
    id: 8,
    title: 'AI-Powered Laser QR Code Marking & Monitoring System',
    category: 'AI & Computer Vision · Embedded Systems · Indian Railways',
    tags: ['AI', 'Computer Vision', 'Laser Marking', 'QR Code', 'Indian Railways', 'IoT', 'Quality Monitoring'],
    problem: 'Manual QR code marking and monitoring for railway components is slow, inconsistent, and not scalable. A fully automated AI-driven pipeline was needed for precise laser marking and real-time quality validation.',
    solution: 'Developed an AI-powered system integrating laser marking hardware with computer vision for automated QR code generation, precise laser etching, and real-time monitoring of marking quality — ensuring zero-defect output for Indian Railways components.',
    tech: ['Computer Vision', 'OpenCV', 'AI / Deep Learning', 'Laser Hardware Integration', 'IoT', 'Real-Time Processing', 'Embedded Systems'],
    results: ['Automated QR code laser marking pipeline', 'Real-time AI quality validation', 'Designed for Indian Railways component tracking', 'Significantly reduced human error in marking process'],
    scope: 'Scale to full production line integration, add multi-format marking support, integrate with Railway ERP/tracking systems.',
  },
  {
    id: 9,
    title: 'Autonomous Rover Navigation — Caterpillar Autonomy Challenge',
    category: 'AI & Robotics · Embedded Systems · Competition',
    tags: ['SLAM', 'Monocular Vision', 'Autonomous Navigation', 'Caterpillar Challenge', 'IIT Madras', 'Semi-Finalist', 'Shaastra 2026'],
    problem: 'The Caterpillar Autonomy Challenge required fully autonomous rover navigation in unstructured outdoor environments — demanding tight integration of perception, mapping, and motion planning without GPS.',
    solution: 'Engineered complete autonomous navigation system using SLAM (Simultaneous Localization and Mapping) and monocular computer vision. Integrated mechanical design, embedded firmware, sensor fusion, and navigation software for full system autonomy. Qualified as Semi-Finalist at Shaastra, IIT Madras (January 2026).',
    tech: ['SLAM', 'Monocular Vision (OpenCV)', 'Embedded C Firmware', 'Sensor Fusion (IMU + Camera)', 'Motor Control', 'SolidWorks (Mechanical Design)', 'ROS-compatible Architecture'],
    results: ['Semi-Finalist — Caterpillar Autonomy Challenge, IIT Madras (Jan 2026)', 'Full autonomous navigation in unstructured environments', 'SLAM + monocular vision pipeline developed', 'Complete mechanical-software integrated system'],
    scope: 'Add stereo vision for improved depth estimation, integrate GPS-denied localization for industrial environments, and compete at international robotics competitions.',
  },
  {
    id: 10,
    title: 'AI for Assembly — TN-IMPACT Competition',
    category: 'AI & Computer Vision · Industry 4.0',
    tags: ['AI', 'Assembly Intelligence', 'Machine Vision', 'TN-IMPACT', 'Industry 4.0', 'Error Detection'],
    problem: 'Assembly line errors in manufacturing cause costly rework, safety incidents, and quality escapes. Manual inspection cannot scale to high-throughput production.',
    solution: 'Developed an AI-powered assembly intelligence system for the TN-IMPACT competition that uses machine vision to automatically verify assembly steps, detect errors in real-time, and guide operators through correct assembly sequences.',
    tech: ['Computer Vision', 'AI / ML', 'OpenCV', 'Real-Time Processing', 'Embedded Integration', 'Industrial UI'],
    results: ['Competed at TN-IMPACT state-level competition', 'Automated assembly verification pipeline', 'Real-time error detection and operator guidance', 'Demonstrated Industry 4.0 readiness'],
    scope: 'Integrate with AR overlays for operator guidance, connect to MES systems, scale to multi-station assembly monitoring.',
  },
  {
    id: 11,
    title: 'Hospital Management Website',
    category: 'Full Stack Web Development',
    tags: ['HTML5', 'CSS3', 'Web Development', 'Hospital Management', 'ZyvOne Technologies', 'Internship'],
    problem: 'Healthcare institutions needed a clean, functional web platform for patient management, appointment scheduling, and department navigation.',
    solution: 'Built a comprehensive hospital management website during ZyvOne Technologies internship. Implemented patient flow navigation, appointment booking UI, department listings, doctor profiles, and emergency contacts — with a clean, professional responsive design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'Form Handling'],
    results: ['Fully functional hospital management website delivered', 'Professional UI with complete patient navigation flows', 'Responsive across all device sizes', 'Delivered as ZyvOne Technologies internship project'],
    scope: 'Integrate with backend APIs for real appointment booking, add patient portal login, and connect to hospital information systems.',
  },
  {
    id: 12,
    title: 'Jhumka E-Commerce Website',
    category: 'Full Stack Web Development · E-Commerce',
    tags: ['HTML5', 'CSS3', 'E-Commerce', 'Fashion', 'Traditional Jewellery', 'ZyvOne Technologies', 'Internship'],
    problem: 'Traditional jewellery brands needed a modern, aesthetically appealing e-commerce platform to reach online customers and showcase their product catalogue.',
    solution: 'Designed and built a full fashion e-commerce website for traditional Jhumka jewellery during ZyvOne Technologies internship. Product catalogue, filtering, shopping cart flow, responsive design, and polished product photography layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-Commerce UI/UX', 'Product Grid Design'],
    results: ['Complete e-commerce platform with product catalogue', 'Responsive design across all devices', 'Shopping and navigation flow fully implemented', 'Professional fashion brand aesthetic delivered'],
    scope: 'Integrate with payment gateways, add inventory management backend, build mobile app version, and connect to WhatsApp ordering flow.',
  },
];

/* ── DOM READY ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initTheme();
  initNavbar();
  initMobileDrawer();
  initResumeDropdown();
  initHeroCanvas();
  initTypewriter();
  initScrollProgress();
  initRevealAnimations();
  initStatCounters();
  initSkillTabs();
  initProjectFilter();
  initBackToTop();
  initSmoothScrollLinks();
  initCertificates();
});

/* ── LOADING SCREEN ──────────────────────────────────────────── */
function initLoadingScreen() {
  const screen  = document.getElementById('loading-screen');
  const bar     = document.getElementById('loading-bar');
  const percent = document.getElementById('loading-percent');
  const canvas  = document.getElementById('loading-canvas');
  const titleEl = document.getElementById('loading-identities');

  if (!screen) return;

  // Static single-line identity display — no rotation
  if (titleEl) {
    titleEl.style.opacity = '0';
    setTimeout(() => {
      titleEl.style.transition = 'opacity 0.6s ease';
      titleEl.style.opacity = '1';
    }, 300);
  }

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
        if (screen._titleInterval) clearInterval(screen._titleInterval);
        screen.classList.add('hidden');
        document.body.classList.remove('loading-active');
        document.body.classList.add('loaded');
        // Trigger hero animations
        document.querySelectorAll('#hero .reveal-up').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120);
        });
      }, 400);
    }
  }, 40);

  document.body.classList.add('loading-active');
  document.body.style.overflow = '';
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

  function open()  { drawer.classList.add('open'); overlay.classList.add('active'); hamburger.classList.add('open'); document.body.classList.add('loading-active'); }
  function close() { drawer.classList.remove('open'); overlay.classList.remove('active'); hamburger.classList.remove('open'); document.body.classList.remove('loading-active'); }

  hamburger && hamburger.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  closeBtn  && closeBtn.addEventListener('click', close);
  overlay   && overlay.addEventListener('click', close);

  // Close on link click
  document.querySelectorAll('.drawer-links a').forEach(a => a.addEventListener('click', close));
}

/* ── RESUME DROPDOWN ──────────────────────────────────────────── */
function initResumeDropdown() {
  const wrap = document.getElementById('resume-dropdown');
  const btn  = document.getElementById('resume-btn');
  const menu = document.getElementById('resume-menu');
  if (!wrap || !btn || !menu) return;

  function closeMenu() { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  btn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) closeMenu(); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
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
    'Mechanical Engineer',
    'AI Developer',
    'Full Stack Developer',
    'Product Builder',
    'Embedded Systems Developer',
    'Engineering Innovator',
    'Technical Leader',
    'Patent Co-Inventor',
    'Computer Vision Builder',
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
        const cats = (card.dataset.category || '').split(/\s+/);
        const show = filter === 'all' || cats.includes(filter);
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


/* ================================================================
   CERTIFICATE SYSTEM — FULLY DYNAMIC & FUTURE-PROOF
   ================================================================
   HOW TO ADD A NEW CERTIFICATE (zero code changes needed):
   1. Add the image/PDF into  certificates/images/
   2. Add one JSON entry to   certificates/certificates.json
   3. git add . && git commit && git push — done.

   NAMING CONVENTION (auto-parsed if no JSON entry exists):
     Org_Title_Words_YYYY.ext
     e.g. Google_AI_Essentials_2026.png
          → Title: "AI Essentials", Org: "Google", Year: 2026
================================================================ */

/* ── Global cert data store ──────────────────────────────────── */
let certificatesData = [];

/* ── CATEGORY ICON MAP ───────────────────────────────────────── */
const CERT_ICONS = {
  technical:   'fas fa-microchip',
  competition: 'fas fa-trophy',
  internship:  'fas fa-briefcase',
  conference:  'fas fa-scroll',
  leadership:  'fas fa-crown',
  default:     'fas fa-certificate',
};

/* ── SMART FILENAME PARSER ───────────────────────────────────── */
function parseCertFilename(filename) {
  // Remove extension
  const base = filename.replace(/\.[^.]+$/, '');
  // Split on underscores
  const parts = base.split('_').map(p => p.trim()).filter(Boolean);

  // Last part that is a 4-digit year → date
  let date = '';
  let titleParts = [...parts];
  const yearIdx = parts.map((p, i) => /^\d{4}$/.test(p) ? i : -1).filter(i => i >= 0).pop();
  if (yearIdx !== undefined && yearIdx >= 0) {
    date = parts[yearIdx];
    titleParts.splice(yearIdx, 1);
  }

  // First part is treated as org if >1 part remains
  let org = 'Achievement';
  let title = base.replace(/_/g, ' ');
  if (titleParts.length >= 2) {
    org = titleParts[0];
    title = titleParts.slice(1).join(' ');
  } else if (titleParts.length === 1) {
    title = titleParts[0];
  }

  return {
    title,
    org,
    date: date || 'N/A',
    category: 'technical',
    icon: CERT_ICONS.technical,
    level: 'Certified',
    description: 'Details coming soon.',
    image: '',
  };
}

/* ── DETECT FILE TYPE ────────────────────────────────────────── */
function isCertPDF(imagePath) {
  return /\.pdf$/i.test(imagePath || '');
}

/* ── LOAD CERTIFICATES (inline → fetch → merge) ─────────────── */
function initCertificates() {
  // Step 1: Try inline JSON first (always works, even on file://)
  const inlineEl = document.getElementById('cert-data-inline');
  if (inlineEl) {
    try {
      const parsed = JSON.parse(inlineEl.textContent);
      if (Array.isArray(parsed) && parsed.length > 0) {
        certificatesData = parsed;
        _bootstrapCertificates();
      }
    } catch (e) {
      console.warn('[Certificates] Inline JSON parse error:', e);
    }
  }

  // Step 2: Also fetch live (picks up additions pushed to repo without page rebuild)
  fetch('certificates/certificates.json?_=' + Math.floor(Date.now() / 60000))
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) return;
      // Use fresh fetch data; merge any auto-detected extras from inline
      const fetchIds = new Set(data.map(c => String(c.id || c.image)));
      // Keep any inline-only entries (auto-detected) not in fetched data
      const extras = certificatesData.filter(c => c._auto && !fetchIds.has(String(c.image)));
      certificatesData = [...data, ...extras];
      _bootstrapCertificates();
    })
    .catch(err => {
      // Fetch failed (file:// protocol, network issue, etc.) — inline data is already loaded
      console.info('[Certificates] Live fetch skipped:', err.message || err);
    });
}

/* ── BOOTSTRAP UI after data is ready ───────────────────────── */
function _bootstrapCertificates() {
  // Sort by date desc, then id desc
  certificatesData.sort((a, b) => {
    const da = parseInt(b.date) || 0, db = parseInt(a.date) || 0;
    if (da !== db) return da - db;
    return (parseInt(b.id) || 0) - (parseInt(a.id) || 0);
  });

  // Remove duplicates (by image path or id)
  const seen = new Set();
  certificatesData = certificatesData.filter(c => {
    const key = c.image || String(c.id);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  renderCertPreview('all');
  _buildYearFilters();
  renderCertModal('all');
  _attachCertFilterListeners();
  _buildImageLightbox();
}

/* ── YEAR FILTER BUILDER ─────────────────────────────────────── */
function _buildYearFilters() {
  const years = [...new Set(certificatesData.map(c => String(c.date)).filter(y => y && y !== 'N/A'))].sort((a,b) => b - a);
  const container = document.getElementById('cert-year-filters');
  if (!container) return;
  container.innerHTML =
    `<button class="cert-year-btn active" data-year="all">All Years</button>` +
    years.map(y => `<button class="cert-year-btn" data-year="${y}">${y}</button>`).join('');
}

/* ── FILTER LISTENERS ────────────────────────────────────────── */
function _attachCertFilterListeners() {
  // Category filters — main preview
  document.querySelectorAll('.cert-filter-btn[data-cert-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cert-filter-btn[data-cert-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertPreview(btn.dataset.certFilter);
    });
  });

  // Category filters — modal
  document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertModal();
    });
  });

  // Year filter (delegated — buttons are built dynamically)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.cert-year-btn');
    if (!btn) return;
    document.querySelectorAll('.cert-year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCertModal();
  });
}

/* ── CATEGORY LABEL MAP ──────────────────────────────────────── */
const CAT_LABEL = {
  technical:   'Technical',
  competition: 'Competition',
  internship:  'Internship',
  conference:  'Conference',
  leadership:  'Leadership',
};

/* ── RENDER HOMEPAGE PREVIEW (6 cards, newest first) ────────── */
function renderCertPreview(filter) {
  const grid = document.getElementById('cert-preview-grid');
  if (!grid) return;

  const all = filter === 'all' ? certificatesData : certificatesData.filter(c => c.category === filter);
  const preview = all.slice(0, 6);   // already sorted newest-first

  if (preview.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--text-muted);font-size:0.9rem;">No certificates in this category yet.</div>`;
  } else {
    grid.innerHTML = preview.map(cert => `
      <div class="cert-card" onclick="openCertModal('${_escAttr(filter === 'all' ? 'all' : cert.category)}')" title="Click to view all certificates">
        <div class="cert-card-top">
          <span class="cert-card-category">${CAT_LABEL[cert.category] || cert.category || 'Certificate'}</span>
          <span class="cert-card-date">${cert.date || ''}</span>
        </div>
        <div class="cert-card-icon"><i class="${cert.icon || CERT_ICONS[cert.category] || CERT_ICONS.default}"></i></div>
        <div class="cert-card-title">${_esc(cert.title)}</div>
        <div class="cert-card-org"><i class="fas fa-building" style="font-size:0.6rem;margin-right:4px;opacity:0.7"></i>${_esc(cert.org)}</div>
        ${cert.description ? `<div class="cert-card-desc">${_esc(cert.description)}</div>` : ''}
        <div class="cert-card-level"><span>${_esc(cert.level || 'Certified')}</span></div>
      </div>
    `).join('');
  }

  // Update total count
  const countEl = document.getElementById('cert-total-count');
  if (countEl) countEl.textContent = certificatesData.length + '+';
}

/* ── RENDER MODAL GRID (all certs, filterable) ───────────────── */
function renderCertModal(filter) {
  const grid = document.getElementById('cert-modal-grid');
  if (!grid) return;

  // Resolve category filter
  if (!filter) {
    const activeBtn = document.querySelector('.cert-filter-btn[data-modal-filter].active');
    filter = activeBtn ? activeBtn.dataset.modalFilter : 'all';
  }

  // Year filter
  const activeYear = (document.querySelector('.cert-year-btn.active') || {}).dataset?.year || 'all';

  // Search query
  const query = ((document.getElementById('cert-search-input') || {}).value || '').trim().toLowerCase();

  let certs = filter === 'all' ? [...certificatesData] : certificatesData.filter(c => c.category === filter);

  if (activeYear !== 'all') certs = certs.filter(c => String(c.date) === activeYear);
  if (query) certs = certs.filter(c =>
    (c.title || '').toLowerCase().includes(query) ||
    (c.org  || '').toLowerCase().includes(query) ||
    (c.description || '').toLowerCase().includes(query)
  );

  // Result count
  const countEl = document.getElementById('cert-modal-result-count');
  if (countEl) countEl.textContent = `${certs.length} certificate${certs.length !== 1 ? 's' : ''}`;

  if (certs.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);font-size:0.9rem;">
      <i class="fas fa-search" style="font-size:2rem;margin-bottom:12px;display:block;opacity:0.3"></i>No certificates found.
    </div>`;
    return;
  }

  grid.innerHTML = certs.map(cert => _renderModalCard(cert)).join('');
}

/* ── BUILD ONE MODAL CARD ────────────────────────────────────── */
function _renderModalCard(cert) {
  const isPDF  = isCertPDF(cert.image);
  const hasImg = cert.image && !isPDF;
  const icon   = cert.icon || CERT_ICONS[cert.category] || CERT_ICONS.default;

  const imageHtml = hasImg
    ? `<div class="cert-modal-img-wrap" onclick="openCertLightbox('${_escAttr(cert.image)}','${_escAttr(cert.title)}')" title="Click to view full certificate">
         <img src="${_escAttr(cert.image)}" alt="${_escAttr(cert.title)}" class="cert-modal-img" loading="lazy"
              onerror="this.closest('.cert-modal-img-wrap').style.display='none';this.closest('.cert-modal-card').querySelector('.cert-modal-card-icon').style.display='flex'"/>
         <div class="cert-img-zoom-hint"><i class="fas fa-expand-alt"></i> View</div>
       </div>
       <div class="cert-modal-card-icon" style="display:none"><i class="${icon}"></i></div>`
    : isPDF
      ? `<div class="cert-modal-pdf-wrap" onclick="openCertPDF('${_escAttr(cert.image)}','${_escAttr(cert.title)}')" title="Click to view PDF">
           <i class="fas fa-file-pdf cert-pdf-icon"></i>
           <span class="cert-pdf-label">PDF Certificate</span>
           <div class="cert-img-zoom-hint"><i class="fas fa-external-link-alt"></i> Open</div>
         </div>`
      : `<div class="cert-modal-card-icon"><i class="${icon}"></i></div>`;

  const downloadBtn = cert.image
    ? `<a href="${_escAttr(cert.image)}" download class="cert-download-btn" title="Download certificate">
         <i class="${isPDF ? 'fas fa-file-pdf' : 'fas fa-download'}"></i>
       </a>`
    : '';

  return `
    <div class="cert-modal-card" data-category="${_escAttr(cert.category || '')}">
      ${imageHtml}
      <div class="cert-modal-card-title">
        ${_esc(cert.title)}
        ${downloadBtn}
      </div>
      <div class="cert-modal-card-org">${_esc(cert.org)}</div>
      <div class="cert-modal-card-meta">
        <span><i class="fas fa-calendar" style="font-size:0.65rem;margin-right:3px"></i>${_esc(String(cert.date || ''))}</span>
        <span>${_esc(cert.level || 'Certified')}</span>
        <span class="cert-meta-cat">${CAT_LABEL[cert.category] || cert.category || ''}</span>
      </div>
      ${cert.description ? `<div class="cert-modal-card-desc">${_esc(cert.description)}</div>` : ''}
    </div>`;
}

/* ── LIGHTBOX (fullscreen image viewer) ─────────────────────── */
function _buildImageLightbox() {
  if (document.getElementById('cert-lightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'cert-lightbox';
  lb.innerHTML = `
    <div class="cert-lb-backdrop" onclick="closeCertLightbox()"></div>
    <div class="cert-lb-inner">
      <button class="cert-lb-close" onclick="closeCertLightbox()" aria-label="Close"><i class="fas fa-times"></i></button>
      <img id="cert-lb-img" src="" alt="" class="cert-lb-img"/>
      <div id="cert-lb-caption" class="cert-lb-caption"></div>
      <a id="cert-lb-dl" href="#" download class="cert-lb-dl"><i class="fas fa-download"></i> Download</a>
    </div>`;
  document.body.appendChild(lb);

  // Keyboard close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertLightbox();
  });
}

function openCertLightbox(src, title) {
  const lb  = document.getElementById('cert-lightbox');
  const img = document.getElementById('cert-lb-img');
  const cap = document.getElementById('cert-lb-caption');
  const dl  = document.getElementById('cert-lb-dl');
  if (!lb || !img) return;
  img.src      = src;
  img.alt      = title;
  if (cap) cap.textContent = title;
  if (dl)  { dl.href = src; dl.download = title; }
  lb.classList.add('open');
  document.body.style.overflowY = 'hidden';
}

function closeCertLightbox() {
  const lb = document.getElementById('cert-lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflowY = '';
}

function openCertPDF(src, title) {
  // Open PDF in new tab (most reliable cross-browser approach)
  window.open(src, '_blank', 'noopener,noreferrer');
}

/* ── OPEN / CLOSE CERT MODAL ─────────────────────────────────── */
function openCertModal(prefilter) {
  const overlay = document.getElementById('cert-modal-overlay');
  if (!overlay) return;

  // Reset search
  const si = document.getElementById('cert-search-input');
  if (si) si.value = '';

  // Reset category filters
  document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(b => b.classList.remove('active'));
  const target = prefilter && prefilter !== 'all'
    ? document.querySelector(`.cert-filter-btn[data-modal-filter="${prefilter}"]`)
    : document.querySelector('.cert-filter-btn[data-modal-filter="all"]');
  if (target) target.classList.add('active');

  // Reset year filter
  document.querySelectorAll('.cert-year-btn').forEach(b => b.classList.remove('active'));
  const allYear = document.querySelector('.cert-year-btn[data-year="all"]');
  if (allYear) allYear.classList.add('active');

  renderCertModal(prefilter || 'all');
  overlay.classList.add('open');
  document.body.style.overflowY = 'hidden';
}

function closeCertModal() {
  const overlay = document.getElementById('cert-modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflowY = '';
}

function closeCertModalOutside(e) {
  if (e.target === document.getElementById('cert-modal-overlay')) closeCertModal();
}

/* ── HTML HELPERS ────────────────────────────────────────────── */
function _esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function _escAttr(str) {
  return String(str || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}
