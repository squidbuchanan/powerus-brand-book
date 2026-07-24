# Powerus — Brand Operating System

Static site. No build step, no dependencies — plain HTML/CSS/JS.

## Deploy (Vercel)
1. Push this folder to a GitHub repo (these files at the repo root).
2. Vercel → New Project → import the repo. Framework preset: **Other**. No build command. Output directory: `./`.
3. Project → Settings → Domains → add `brand.power.us`.
4. In GoDaddy DNS, add a record: **CNAME**, Host `brand`, Value `cname.vercel-dns.com`.
5. Vercel auto-issues SSL once the record resolves (usually minutes).

## Files
- `index.html` — entry point
- `styles.css`, `colors_and_type.css`, `sections.css` — styles
- `toc.js`, `sections*.js`, `reorder-motion.js`, `cover-motion.js` — content + motion
- `assets/` — logos, certification glyphs, photography
