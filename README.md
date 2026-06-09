# Kamaleshwaran P — Portfolio Website

A world-class personal portfolio built with pure **HTML5 · CSS3 · Vanilla JavaScript**.

**Live at:** `index.html` — open directly in any browser.

---

## 📁 Project Structure

```
Kamalesh Portfolio/
├── index.html          ← Main portfolio page
├── css/
│   └── styles.css      ← All styles (gold/black/white theme)
├── js/
│   └── main.js         ← All interactions & animations
├── resume.pdf          ← Place your resume PDF here
└── README.md
```

---

## 🚀 How to Run

### Option 1 — Direct Open
Double-click `index.html` to open in your browser. Everything works without a server.

### Option 2 — Live Server (Recommended for dev)
If you have VS Code, install the **Live Server** extension and click **"Go Live"** at the bottom.

Or with Python:
```bash
python -m http.server 5500
```
Then visit: `http://localhost:5500`

---

## 📄 Adding Your Resume

1. Export your resume as `resume.pdf`
2. Place it in the root folder: `Kamalesh Portfolio/resume.pdf`
3. The Download Resume button will work automatically.

---

## 🖼️ Adding Your Profile Photo

1. Add your photo as `images/profile.jpg` (recommended: 800×1000px, JPG/WebP)
2. In `index.html`, find `.about-image-placeholder` and replace with:
```html
<img src="images/profile.jpg" alt="Kamaleshwaran P" style="width:100%;height:100%;object-fit:cover;border-radius:20px;" />
```

---

## 🎨 Customization

| What | Where |
|---|---|
| Colors | `css/styles.css` → `:root` variables |
| Content | `index.html` → each section |
| Projects | `js/main.js` → `projectData` array |
| Animations speed | `css/styles.css` → `--transition` variable |
| Typewriter strings | `js/main.js` → `strings` array in `initTypewriter()` |

---

## ✅ Features

- 🌑 Dark / Light mode toggle
- ⚡ Loading screen with animated progress
- 🎯 Scroll progress indicator
- ✨ Gold particle hero canvas
- 📐 Engineering blueprint grid overlay
- 🔤 Typewriter tagline effect
- 🃏 3D card tilt on hover
- 🔢 Animated stat counters
- 📊 Skill bar animations
- 🔍 Project filter tabs
- 📋 Project detail modals
- 📅 Career timeline
- 📱 Fully responsive (mobile-first)
- ♿ Accessibility ready
- 🖱️ Subtle cursor trail effect
- 🔝 Back to top button
- 📧 Contact form (connect backend to activate)

---

## 🌐 Deployment

### GitHub Pages (Free)
1. Create repo → push all files
2. Go to **Settings → Pages → Branch: main / root**
3. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Recommended)
1. Drag & drop the entire `Kamalesh Portfolio` folder at [netlify.com/drop](https://netlify.com/drop)
2. Gets a free URL instantly. Add custom domain in settings.

### Vercel
```bash
npm i -g vercel
vercel
```

---

## 📞 Contact

**Kamaleshwaran P**
- Email: kamaleshwaranperumal07@gmail.com
- LinkedIn: [linkedin.com/in/kamaleshwaran-p](https://linkedin.com/in/kamaleshwaran-p)
- GitHub: [github.com/Kamaleshwaran-badboy](https://github.com/Kamaleshwaran-badboy)
