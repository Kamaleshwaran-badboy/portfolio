# CERTIFICATE UPLOAD GUIDE
## How to Add New Certificates to Your Portfolio

---

## Quick Summary

To add a new certificate, you need to do **two things**:

1. Place the certificate image/file in `certificates/images/`
2. Add one entry to `certificates/certificates.json`

That's it. The website automatically picks it up.

---

## Step 1 — Place the File

Copy your certificate file into:

```
/certificates/images/
```

**Supported formats:**
- `.png` — recommended for image certificates
- `.jpg` / `.jpeg` — photos or scanned certificates
- `.webp` — optimized web images
- `.pdf` — PDF certificates

**Recommended naming convention:**

```
Organization_CertificateName_Year.extension
```

**Examples:**
```
Google_AI_Essentials_2026.png
NVIDIA_Deep_Learning_2025.jpg
Infosys_Java_Fundamentals_2026.png
Coursera_Machine_Learning_2026.png
DxEDGE_Digital_Maturity_Framework_2026.png
```

Avoid spaces in filenames — use underscores instead.

---

## Step 2 — Add to certificates.json

Open `certificates/certificates.json` and add a new entry at the **top** of the array (for newest-first display):

```json
{
  "id": 64,
  "title": "Your Certificate Title",
  "org": "Issuing Organization",
  "date": "2026",
  "category": "technical",
  "icon": "fas fa-certificate",
  "level": "Certified",
  "description": "Brief description of what this certificate covers.",
  "image": "certificates/images/YourFile.png"
}
```

**Important:** The `id` must be unique. Use the next sequential number.

---

## Field Reference

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ | Unique number (increment from last) | `64` |
| `title` | ✅ | Certificate name | `"Java Fundamentals"` |
| `org` | ✅ | Issuing organization | `"Infosys Springboard"` |
| `date` | ✅ | Year issued | `"2026"` |
| `category` | ✅ | One of the categories below | `"technical"` |
| `icon` | ✅ | Font Awesome 5 icon class | `"fas fa-code"` |
| `level` | ✅ | Achievement level label | `"Certified"` |
| `description` | ✅ | Short description | `"Completed Java course..."` |
| `image` | ✅ | Relative path to file | `"certificates/images/cert-64.png"` |

---

## Categories

Use one of these exact category values:

| Value | Label | Use For |
|-------|-------|---------|
| `technical` | Technical | Online courses, certifications, software skills |
| `internship` | Internship | Work experience, training programs |
| `conference` | Conference | Paper presentations, published research |
| `competition` | Competition | Hackathons, challenges, championships |
| `leadership` | Leadership | Club roles, ambassador titles, memberships |

---

## Recommended Icons (Font Awesome 5)

```
fas fa-certificate      — Generic certificate
fas fa-code             — Programming / web development
fas fa-brain            — AI / machine learning
fas fa-microchip        — Electronics / embedded systems
fas fa-industry         — Manufacturing / mechanical
fas fa-trophy           — Competitions / awards
fas fa-briefcase        — Internships
fas fa-scroll           — Research / conferences
fas fa-crown            — Leadership
fas fa-network-wired    — Networking / digital systems
fas fa-coffee           — Java programming
fas fa-project-diagram  — Systems / design
fas fa-graduation-cap   — Academic achievements
fas fa-dumbbell         — Sports / fitness
fas fa-flag-checkered   — Racing / automotive
fas fa-bicycle          — Cycling / SAE events
```

Browse all icons at: https://fontawesome.com/v5/search?s=solid

---

## Folder Structure

```
site/
├── index.html                    ← Main webpage (inline cert data here)
├── certificates/
│   ├── certificates.json         ← Master certificate data file
│   └── images/
│       ├── cert-01.png           ← Certificate images
│       ├── cert-02.png
│       ├── ...
│       └── cert-63.png
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── profile.jpg
├── resume.pdf
├── HOW_TO_ADD_CERT.md
└── CERTIFICATE_UPLOAD_GUIDE.md   ← This file
```

---

## Both Files Must Be Updated

> ⚠️ **Important:** The site stores certificate data in two places:
>
> 1. `certificates/certificates.json` — used for live fetch (production)
> 2. Inline `<script id="cert-data-inline">` block inside `index.html` — used as fallback
>
> Always update **both** when adding a certificate. The inline block in `index.html` is between the `<script id="cert-data-inline" type="application/json">` and `</script>` tags around line 1464. Simply paste the full updated JSON array there.

---

## Complete Example Workflow

**Scenario:** Add your new Google Cloud certificate.

### 1. Copy the file
```
Copy: Google_Cloud_Professional_2026.png
  To: certificates/images/Google_Cloud_Professional_2026.png
```

### 2. Add JSON entry
In `certificates/certificates.json`, add to the beginning of the array:
```json
[
  {
    "id": 64,
    "title": "Google Cloud Professional Certificate",
    "org": "Google",
    "date": "2026",
    "category": "technical",
    "icon": "fas fa-cloud",
    "level": "Certified",
    "description": "Professional certification in Google Cloud infrastructure and services.",
    "image": "certificates/images/Google_Cloud_Professional_2026.png"
  },
  ... (rest of existing entries)
]
```

### 3. Update inline data in index.html
Replace the content between the `cert-data-inline` script tags with the same updated JSON.

### 4. Deploy
Push your changes or upload the updated files to your server.

---

## Troubleshooting

### Certificate not showing up

**Check:** Is the filename in `certificates.json` exactly matching the actual file?
```
❌ "image": "certificates/images/cert-64.PNG"  ← wrong case
✅ "image": "certificates/images/cert-64.png"  ← correct
```

**Check:** Did you update both `certificates.json` AND the inline block in `index.html`?

**Check:** Is the `id` unique? No two certificates should share the same `id` number.

---

### Image shows broken / not loading

- Verify the file is in `certificates/images/` (not elsewhere)
- Verify the path in JSON starts with `certificates/images/`
- Check the file is a supported format (png, jpg, jpeg, webp, pdf)
- Make sure the file isn't corrupted

---

### Wrong certificate details shown

- Check the `id` field — make sure it doesn't duplicate another certificate's id
- Check the `image` path — make sure each certificate points to its own image file
- Verify there are no duplicate entries with the same image path

---

### PDF certificates not previewing

PDFs display as a card with an icon (no image preview in the grid). This is expected behavior. Clicking the certificate will open the PDF in the viewer. Ensure the PDF file is in the correct location.

---

## Current Certificate Count

As of the last update: **63 certificates** across 5 categories.

| Category | Count |
|----------|-------|
| Technical | ~31 |
| Internship | ~3 |
| Competition | ~11 |
| Conference | ~4 |
| Leadership | ~5 |

Next certificate ID to use: **64**

---

## Contact

For questions about the certificate system, contact the site owner (Kamaleshwaran P).
