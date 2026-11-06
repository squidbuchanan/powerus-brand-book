# brand.power.us — Powerus Brand Operating System V2.0 (Nov 2026)

Static site. No build step: `index.html` at the root, plain CSS/JS, images under `assets/`.

## Deploy to the existing Vercel project

### Option A: Git (if brand.power.us deploys from a repo)

```bash
# in your local clone of the brand site repo
git checkout -b brand-os-nov-2026
# remove the old site files (keep .git, vercel.json, etc. if you have them)
# then copy everything from this folder into the repo root
cp -R /path/to/brand-power-us/* .
git add -A
git commit -m "Brand OS V2.0 — November 2026 update"
git push -u origin brand-os-nov-2026
```

Vercel builds a preview for the branch. Check it, then merge to `main` (or your production branch) to go live on brand.power.us.

### Option B: Vercel CLI (direct upload)

```bash
cd /path/to/brand-power-us
npx vercel link          # pick your team and the existing brand.power.us project
npx vercel               # preview deploy, check it
npx vercel --prod        # promote to production (brand.power.us)
```

Project settings if Vercel asks: Framework preset **Other**, no build command, output directory `.` (root).

## What's in here

- `index.html`: page shell
- `styles.css`, `sections.css`, `hero-intro.css`, `social.css`: styles
- `toc.js`, `sections*.js`, `social.js`, `reorder-motion.js`, `hero-intro.js`, `cover-motion.js`, `asset-bank.js`: content and behaviour, loaded in that order
- `assets/logo/kit/`: logo downloads (SVG + large and small PNG)
- `assets/bank/`: Image Bank photos and cutouts (59 files)
- `assets/social/`: images used by the Social System posts
- `assets/photo`, `assets/refs`, `assets/cert`, `assets/logo`: images the guideline pages use

Fonts load from Google Fonts. Video Library thumbnails and players load from YouTube.
