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

/* ── CERTIFICATE DATA ────────────────────────────────────────── */
const certificatesData = [
  // Technical Certifications
  { id: 1, title: 'MATLAB Onramp', org: 'MathWorks', date: '2024', category: 'technical', icon: 'fas fa-square-root-alt', level: 'Certified', description: 'Official MATLAB programming certification from MathWorks.', image: 'certificates/images/cert-01.png' },
  { id: 2, title: 'Simulink Onramp', org: 'MathWorks', date: '2024', category: 'technical', icon: 'fas fa-project-diagram', level: 'Certified', description: 'Official Simulink model-based design certification.', image: 'certificates/images/cert-02.png' },
  { id: 3, title: 'Innovations in Automation & Machine Vision', org: 'Industry Training', date: '2024', category: 'technical', icon: 'fas fa-eye', level: 'Completed', description: 'Training on automation systems and machine vision technologies.', image: 'certificates/images/cert-03.png' },
  { id: 4, title: 'Neural Networks & AI Model Creation', org: 'AI Training Program', date: '2024', category: 'technical', icon: 'fas fa-brain', level: 'Completed', description: 'Hands-on training in neural network architecture and AI model development.', image: 'certificates/images/cert-04.png' },
  { id: 5, title: 'Innovating with GraphRAG', org: 'AI Program', date: '2025', category: 'technical', icon: 'fas fa-network-wired', level: 'Completed', description: 'Advanced AI training on Graph Retrieval Augmented Generation.', image: 'certificates/images/cert-05.png' },
  { id: 6, title: 'Welding Engineering Certification', org: 'SRIT / Industry', date: '2024', category: 'technical', icon: 'fas fa-tools', level: 'Certified', description: 'Practical welding engineering and fabrication certification.', image: 'certificates/images/cert-06.png' },
  { id: 7, title: 'Event Management Certification', org: 'SRIT', date: '2024', category: 'technical', icon: 'fas fa-calendar-check', level: 'Certified', description: 'Professional event management and coordination certification.', image: 'certificates/images/cert-07.png' },
  { id: 8, title: 'Sales & Marketing Certification', org: 'Training Institute', date: '2024', category: 'technical', icon: 'fas fa-chart-line', level: 'Certified', description: 'Sales strategy and digital marketing certification.', image: 'certificates/images/cert-08.png' },
  { id: 9, title: 'Learnathon', org: 'SRIT', date: '2024', category: 'technical', icon: 'fas fa-graduation-cap', level: 'Completed', description: 'Intensive learning marathon covering multiple engineering disciplines.', image: 'certificates/images/cert-09.png' },
  // Internships
  { id: 10, title: 'Mechanical Engineering Internship', org: 'Sri Jayasurya Engineering', date: '2026', category: 'internship', icon: 'fas fa-industry', level: 'Internship', description: 'Robotic arm development, kinematic design, quality inspection in live manufacturing.', image: 'certificates/images/cert-10.png' },
  { id: 11, title: 'Web Development Internship', org: 'ZyvOne Technologies', date: '2026', category: 'internship', icon: 'fas fa-code', level: 'Internship', description: 'Built hospital management website and Jhumka e-commerce platform.', image: 'certificates/images/cert-11.png' },
  { id: 12, title: 'Virtual Campus Development', org: 'SRIT / Training', date: '2024', category: 'internship', icon: 'fas fa-globe', level: 'Internship', description: 'Developed virtual campus platform for SRIT using HTML5 and CSS3.', image: 'certificates/images/cert-12.png' },
  // Conferences
  { id: 13, title: 'Pebble Bed Heat Exchanger — Conference Paper', org: 'Dr. NGP Institute of Technology', date: '2025', category: 'conference', icon: 'fas fa-fire', level: 'National', description: 'National Conference on Ghost Manufacturing & Digital Supply Chain for Viksit Bharat 2047.', image: 'certificates/images/cert-13.png' },
  { id: 14, title: 'Shell & Tube Heat Exchanger — Published Paper', org: 'SRM Institute of Technology', date: '2025', category: 'conference', icon: 'fas fa-sun', level: 'National · Published', description: 'Published conference paper on shell and tube heat exchanger with parabolic solar collector.', image: 'certificates/images/cert-14.png' },
  { id: 15, title: 'FORSCH 2025 — Paper Presentation', org: 'Anna University Regional Campus', date: '2025', category: 'conference', icon: 'fas fa-scroll', level: 'University', description: 'University-level research paper presentation at FORSCH 2025.', image: 'certificates/images/cert-15.png' },
  { id: 16, title: 'Engineers Day — Technical Paper Presentation', org: 'SRIT', date: '2024', category: 'conference', icon: 'fas fa-award', level: 'Institutional', description: 'Technical paper presented on Engineers Day at SRIT.', image: 'certificates/images/cert-16.png' },
  // Competitions
  { id: 17, title: 'Smart India Hackathon — Internal 1st Place', org: 'SRIT / SIH', date: '2025', category: 'competition', icon: 'fas fa-trophy', level: 'National', description: 'Won 1st Place in SIH internal round, advancing team to national stage.', image: 'certificates/images/cert-17.png' },
  { id: 18, title: 'Caterpillar Autonomy Challenge — Semi-Finalist', org: 'IIT Madras Shaastra', date: '2026', category: 'competition', icon: 'fas fa-robot', level: 'National Semi-Finalist', description: 'Autonomous rover navigation challenge at IIT Madras (Jan 2026).', image: 'certificates/images/cert-18.png' },
  { id: 19, title: 'TN-IMPACT — AI for Assembly', org: 'Tamil Nadu IMPACT', date: '2025', category: 'competition', icon: 'fas fa-industry', level: 'State', description: 'AI-powered assembly intelligence competition.', image: 'certificates/images/cert-19.png' },
  { id: 20, title: 'SAE Bicycle Design Challenge', org: 'SAE India', date: '2025', category: 'competition', icon: 'fas fa-bicycle', level: 'National', description: 'Designed and presented innovative bicycle concept to SAE India.', image: 'certificates/images/cert-20.png' },
  { id: 21, title: 'MSME Idea Hackathon — Finalist', org: 'MSME / Government of India', date: '2025', category: 'competition', icon: 'fas fa-lightbulb', level: 'National Finalist', description: 'National MSME hackathon finalist for innovative engineering solutions.', image: 'certificates/images/cert-21.png' },
  { id: 22, title: 'Pivot Challenge — Finalist', org: 'Entrepreneurship Cell', date: '2025', category: 'competition', icon: 'fas fa-sync', level: 'National Finalist', description: 'National-level startup pivot challenge finalist.', image: 'certificates/images/cert-22.png' },
  { id: 23, title: 'Statathon — Finalist', org: 'Analytics Competition', date: '2025', category: 'competition', icon: 'fas fa-chart-bar', level: 'National Finalist', description: 'National-level data analytics competition finalist.', image: 'certificates/images/cert-23.png' },
  // Leadership
  { id: 24, title: 'ASME Design Head — Certificate', org: 'ASME SRIT Chapter', date: '2023', category: 'leadership', icon: 'fas fa-drafting-compass', level: 'Leadership', description: 'Official appointment as Design Head of ASME SRIT Student Section.', image: 'certificates/images/cert-24.png' },
  { id: 25, title: 'SAE Membership', org: 'SAE India', date: '2023', category: 'leadership', icon: 'fas fa-car', level: 'Member', description: 'Active member of Society of Automotive Engineers India Chapter.', image: 'certificates/images/cert-25.png' },
  { id: 26, title: 'Rotaract International Service Director', org: 'Rotaract International — SRIT', date: '2023', category: 'leadership', icon: 'fas fa-globe', level: 'Director', description: 'International Service Director, Rotaract SRIT Chapter.', image: 'certificates/images/cert-26.png' },
  { id: 27, title: 'HIVE Innovation Ambassador', org: 'HIVE — SRIT', date: '2023', category: 'leadership', icon: 'fas fa-lightbulb', level: 'Ambassador', description: 'Innovation Ambassador at HIVE entrepreneurship cell, SRIT.', image: 'certificates/images/cert-27.png' },
  { id: 28, title: 'IIC Membership', org: 'IIC — SRIT', date: '2023', category: 'leadership', icon: 'fas fa-university', level: 'Member', description: 'Member of Institution Innovation Council, SRIT.', image: 'certificates/images/cert-28.png' },
  { id: 29, title: 'Tamil Nadu Karting Championship — Title Certificate', org: 'Tamil Nadu Karting Association', date: '2024', category: 'competition', icon: 'fas fa-flag-checkered', level: 'State Champion', description: 'Title victory certificate — Tamil Nadu Karting Championship Season 02.', image: 'certificates/images/cert-29.png' },
  { id: 30, title: 'State Weightlifting Championship', org: 'Tamil Nadu Weightlifting Association', date: '2024', category: 'competition', icon: 'fas fa-dumbbell', level: '2× State Champion', description: 'Open State Weightlifting Champion — 60 kg category.', image: 'certificates/images/cert-30.png' },
  // Additional certificates extracted from PDF
  { id: 31, title: 'Certificate #31', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-31.png' },
  { id: 32, title: 'Certificate #32', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-32.png' },
  { id: 33, title: 'Certificate #33', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-33.png' },
  { id: 34, title: 'Certificate #34', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-34.png' },
  { id: 35, title: 'Certificate #35', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-35.png' },
  { id: 36, title: 'Certificate #36', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-36.png' },
  { id: 37, title: 'Certificate #37', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-37.png' },
  { id: 38, title: 'Certificate #38', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-38.png' },
  { id: 39, title: 'Certificate #39', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-39.png' },
  { id: 40, title: 'Certificate #40', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-40.png' },
  { id: 41, title: 'Certificate #41', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-41.png' },
  { id: 42, title: 'Certificate #42', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-42.png' },
  { id: 43, title: 'Certificate #43', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-43.png' },
  { id: 44, title: 'Certificate #44', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-44.png' },
  { id: 45, title: 'Certificate #45', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-45.png' },
  { id: 46, title: 'Certificate #46', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-46.png' },
  { id: 47, title: 'Certificate #47', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-47.png' },
  { id: 48, title: 'Certificate #48', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-48.png' },
  { id: 49, title: 'Certificate #49', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-49.png' },
  { id: 50, title: 'Certificate #50', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-50.png' },
  { id: 51, title: 'Certificate #51', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-51.png' },
  { id: 52, title: 'Certificate #52', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-52.png' },
  { id: 53, title: 'Certificate #53', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-53.png' },
  { id: 54, title: 'Certificate #54', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-54.png' },
  { id: 55, title: 'Certificate #55', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-55.png' },
  { id: 56, title: 'Certificate #56', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-56.png' },
  { id: 57, title: 'Certificate #57', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-57.png' },
  { id: 58, title: 'Certificate #58', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-58.png' },
  { id: 59, title: 'Certificate #59', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-59.png' },
  { id: 60, title: 'Certificate #60', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-60.png' },
  { id: 61, title: 'Certificate #61', org: 'Achievement', date: '2024', category: 'technical', icon: 'fas fa-certificate', level: 'Certified', description: 'Certificate from portfolio archive.', image: 'certificates/images/cert-61.png' },
];

/* ── CERTIFICATE SYSTEM ──────────────────────────────────────── */
function initCertificates() {
  renderCertPreview('all');
  renderCertModal('all');

  // Filter buttons (main page)
  document.querySelectorAll('.cert-filter-btn[data-cert-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cert-filter-btn[data-cert-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertPreview(btn.dataset.certFilter);
    });
  });

  // Filter buttons (modal)
  document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertModal(); // reads active filter + search input
    });
  });
}

function renderCertPreview(filter) {
  const grid = document.getElementById('cert-preview-grid');
  if (!grid) return;

  const certs = filter === 'all' ? certificatesData : certificatesData.filter(c => c.category === filter);
  const preview = certs.slice(0, 8); // show max 8 thumbnails

  grid.innerHTML = preview.map(cert => `
    <div class="cert-thumb" onclick="openCertModal()">
      ${cert.image
        ? `<div class="cert-thumb-img-wrap"><img src="${cert.image}" alt="${cert.title}" class="cert-thumb-img" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'cert-thumb-icon\\'><i class=\\"${cert.icon}\\"></i></div>'"/></div>`
        : `<div class="cert-thumb-icon"><i class="${cert.icon}"></i></div>`}
      <div class="cert-thumb-name">${cert.title}</div>
      <div class="cert-thumb-org">${cert.org}</div>
    </div>
  `).join('');

  // Update count display
  const countEl = document.getElementById('cert-total-count');
  if (countEl) countEl.textContent = certificatesData.length + '+';
}

function renderCertModal(filter) {
  const grid = document.getElementById('cert-modal-grid');
  if (!grid) return;

  // Read active filter from button if not passed
  if (!filter) {
    const activeBtn = document.querySelector('.cert-filter-btn[data-modal-filter].active');
    filter = activeBtn ? activeBtn.dataset.modalFilter : 'all';
  }

  // Read search query
  const searchInput = document.getElementById('cert-search-input');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  let certs = filter === 'all' ? certificatesData : certificatesData.filter(c => c.category === filter);

  // Apply search filter
  if (query) {
    certs = certs.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.org.toLowerCase().includes(query)
    );
  }

  if (certs.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--text-muted);font-size:0.9rem;">No certificates found matching your search.</div>`;
    return;
  }

  grid.innerHTML = certs.map(cert => `
    <div class="cert-modal-card">
      ${cert.image
        ? `<div class="cert-modal-img-wrap"><img src="${cert.image}" alt="${cert.title}" class="cert-modal-img" loading="lazy" onerror="this.parentElement.style.display='none';this.parentElement.nextElementSibling.style.display='flex'"/></div><div class="cert-modal-card-icon" style="display:none"><i class="${cert.icon}"></i></div>`
        : `<div class="cert-modal-card-icon"><i class="${cert.icon}"></i></div>`}
      <div class="cert-modal-card-title">${cert.title}</div>
      <div class="cert-modal-card-org">${cert.org}</div>
      <div class="cert-modal-card-meta">
        <span><i class="fas fa-calendar" style="font-size:0.65rem;margin-right:3px"></i>${cert.date}</span>
        <span>${cert.level}</span>
      </div>
      ${cert.description ? `<div class="cert-modal-card-desc">${cert.description}</div>` : ''}
    </div>
  `).join('');
}

function openCertModal() {
  const overlay = document.getElementById('cert-modal-overlay');
  if (overlay) {
    // Reset search and filters
    const searchInput = document.getElementById('cert-search-input');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.cert-filter-btn[data-modal-filter]').forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.cert-filter-btn[data-modal-filter="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderCertModal();
    overlay.classList.add('open');
    document.body.style.overflowY = 'hidden';
  }
}

function closeCertModal() {
  const overlay = document.getElementById('cert-modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflowY = '';
  }
}

function closeCertModalOutside(e) {
  if (e.target === document.getElementById('cert-modal-overlay')) closeCertModal();
}
