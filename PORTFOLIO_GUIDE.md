# Kamaleshwaran P — Portfolio Guide

## Setup & Running

No build step required. Open `index.html` in any modern browser, or deploy the entire folder to any static host (Netlify, Vercel, GitHub Pages).

```
portfolio/
├── index.html          ← Main portfolio page
├── css/styles.css      ← All styles
├── js/main.js          ← All JavaScript, project data, certificate data
├── images/
│   └── profile.jpg     ← Your profile photo
├── certificates/
│   └── certificates.json  ← Certificate metadata (editable)
├── resume.pdf          ← Your downloadable resume
└── certification.pdf   ← Main certification document
```

---

## How to Add a Certificate

**Option A — Edit certificates.json (recommended for future uploads):**

1. Open `certificates/certificates.json`
2. Add a new entry:
```json
{
  "id": 31,
  "title": "Certificate Name",
  "org": "Issuing Organization",
  "date": "2025",
  "category": "technical",
  "level": "Certified",
  "description": "Brief description of what this certifies.",
  "image": "certificates/your-cert-image.jpg"
}
```
3. Categories: `technical` | `competition` | `internship` | `conference` | `leadership`
4. Save the file — the certificate appears automatically.

**Option B — Edit certificatesData in js/main.js:**

Find the `const certificatesData = [...]` array and add a new entry following the same format.

---

## How to Add a Project

1. Open `js/main.js`
2. Find `const projectData = [...]`
3. Add a new entry:
```js
{
  id: 13,
  title: 'Your Project Title',
  category: 'Category · Subcategory',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  problem: 'What problem did this solve?',
  solution: 'How did you solve it?',
  tech: ['Tech1', 'Tech2'],
  results: ['Result 1', 'Result 2'],
  scope: 'Future plans/scope.',
},
```
4. In `index.html`, add a project card in the `#projects-grid` div with `data-project="13"`

Categories for data-category on project cards:
- `ai` — AI & Machine Learning
- `fullstack` — Full Stack Development  
- `embedded` — Embedded Systems / Robotics
- `patent` — Patent Projects
- `research` — Research & Simulation
- `mechanical` — Mechanical Design

---

## How to Update Personal Info

- **Name, email, phone**: Search for `kamaleshwaranperumal07@gmail.com` and `+917397583709` in `index.html`
- **LinkedIn**: Search for `linkedin.com/in/kamaleshwaran-p`
- **GitHub**: Search for `github.com/Kamaleshwaran-badboy`
- **Profile photo**: Replace `images/profile.jpg`
- **Resume**: Replace `resume.pdf`

---

## Deployment

**Netlify (recommended):**
1. Drag and drop the `portfolio/` folder to app.netlify.com
2. Done — live URL provided instantly

**GitHub Pages:**
1. Push the folder to a GitHub repo
2. Settings → Pages → Deploy from main branch

**Vercel:**
1. Import repo or drag folder
2. Framework: None (Static)

---

## Issues Fixed in This Version

- ✅ Hero name alignment and clipping — fixed with responsive clamp + word-break
- ✅ Scroll locking — removed `overflow-y: hidden` from body; replaced with class-based system
- ✅ Hero badge — replaced patent badge with professional multidisciplinary branding
- ✅ Personal branding — now reflects AI Developer, Full Stack Dev, Embedded Systems Engineer
- ✅ Project ordering — correct order per brief; AI/Innovation first, Kart last
- ✅ Project categories — AI, Full Stack, Embedded, Patent, Research, Mechanical
- ✅ New projects added — AI Laser QR, Caterpillar Challenge, TN-IMPACT, Hospital Website, Jhumka E-Commerce
- ✅ Achievement reordering — SIH first, Karting/Weightlifting/Bodybuilding at end
- ✅ Skills — added AI & ML tab (TensorFlow, OpenCV, Neural Networks, SLAM, GraphRAG)
- ✅ Typewriter — updated to multidisciplinary strings
- ✅ Certificate system — automated gallery with filter, modal, JSON-based
- ✅ Mobile responsiveness — improved across 320px–1440px+
- ✅ SEO meta tags updated
