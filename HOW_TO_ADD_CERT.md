# How to Add a New Certificate

## Quick Steps (No code changes needed)

1. **Add the image or PDF** into `certificates/images/`
   - Supported: `.png`, `.jpg`, `.jpeg`, `.webp`, `.pdf`
   - Name it clearly, e.g. `cert-62.png`

2. **Add one entry** to `certificates/certificates.json`:
```json
{
  "id": 62,
  "title": "Your Certificate Title",
  "org": "Issuing Organisation",
  "date": "2026",
  "category": "technical",
  "icon": "fas fa-certificate",
  "level": "Certified",
  "description": "Brief description of what this certification covers.",
  "image": "certificates/images/cert-62.png"
}
```

3. **Also update** the `<script id="cert-data-inline">` block in `index.html`
   (copy the same entry into that JSON array — this ensures it works offline/file://)

4. **Push to Git:**
```bash
git add .
git commit -m "Add cert: Your Certificate Title"
git push
```

The certificate will appear automatically — newest first.

---

## Categories
- `technical` — courses, skills, tools
- `competition` — hackathons, championships
- `internship` — work experience
- `conference` — papers, presentations
- `leadership` — roles, memberships

## Category Icons (Font Awesome 6)
- technical:   `fas fa-microchip`
- competition: `fas fa-trophy`
- internship:  `fas fa-briefcase`
- conference:  `fas fa-scroll`
- leadership:  `fas fa-crown`
- generic:     `fas fa-certificate`

## PDF Certificates
Just use a `.pdf` extension in the `image` field. The site will show a PDF icon and open it in a new tab when clicked.

## Naming Convention (Auto-parse fallback)
If you add an image without a JSON entry, the filename is parsed:
```
Google_AI_Essentials_2026.png
→ Title: "AI Essentials"
→ Org: "Google"
→ Year: 2026
```
But always prefer adding a proper JSON entry for best display quality.
