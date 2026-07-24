/* ─────────────────────────────────────────────────────────────────
   reorder-motion.js — promotes Motion above Photography
   Runs AFTER sections-3.js. Source of truth for all numbering.

   New DOM order:
     00-04  Foundation:   cover, index, manifesto, mission, origin
     05-08  Identity:     voice, logo, monogram, clearspace
     09-12  System:       color, typography, grid, icons
     13-14  Motion:       motion, motion-graphics
     15-17  Photography:  photo-principles, shot-lists, grade
     18-19  Video:        video-principles, video-templates
     20-22  Application:  components, downloads, collateral

   Total pages: 23 (00..22).
   ───────────────────────────────────────────────────────────────── */
(function () {
  const order = [
    'cover','index','manifesto','mission','divisions','origin',
    'voice','logo','monogram','clearspace',
    'color','typography','grid','icons',
    'motion','motion-graphics',
    'shot-lists','grade',
    'video-principles','video-templates','video-library',
    'components','downloads','collateral'
  ];

  // Group label per section index (for "NN / Group" prefix)
  const groupOf = {
    0:'Foundation',1:'Index',2:'Foundation',3:'Foundation',4:'Foundation',5:'Foundation',
    6:'Identity',7:'Identity',8:'Identity',9:'Identity',
    10:'System',11:'System',12:'System',13:'System',
    14:'Motion',15:'Motion',
    16:'Photography',17:'Photography',
    18:'Video',19:'Video',20:'Video',
    21:'Application',22:'Application',23:'Application'
  };

  const main = document.getElementById('main');
  if (!main) return;

  // Removed for now — Photography / Photo Principles section.
  const _pp = document.getElementById('photo-principles');
  if (_pp) _pp.remove();

  // 1) Reorder DOM ─────────────────────────────────────────────────
  order.forEach(id => {
    const el = document.getElementById(id);
    if (el) main.appendChild(el); // appendChild moves the existing node
  });

  // 2) Renumber every section's page-num + section-head ────────────
  const total = order.length; // 23 → totals will read "/22" since 0-indexed display
  const totalDisplay = String(total - 1).padStart(2, '0'); // "22"

  order.forEach((id, idx) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const pg = String(idx).padStart(2, '0');

    // .page-num — "PG 13/22"
    const pgWrap = sec.querySelector('.page-num');
    if (pgWrap) {
      const numSpan = pgWrap.querySelector(':scope > span');
      if (numSpan) numSpan.textContent = pg;
      // bump the trailing total to /22
      // The structure is: "PG <span>NN</span><span class="of">/</span>NN"
      // Find the last text node and replace
      pgWrap.innerHTML = pgWrap.innerHTML.replace(
        /(<\/span>)(\d{1,2})(\s*)$/,
        `$1${totalDisplay}$3`
      );
    }

    // .section-head .num — "NN / Group"
    const headNum = sec.querySelector('.section-head .num');
    if (headNum) {
      const group = groupOf[idx] || '';
      // Preserve original innerHTML structure but replace leading "NN / Anything"
      headNum.innerHTML = headNum.innerHTML.replace(
        /^\s*\d+\s*\/\s*[A-Za-z& ]+/,
        `${pg} / ${group}`
      );
    }
  });

  // 3) Renumber sub-IDs inside Motion (was 18.x → now 13.x) ───────
  // and Motion Graphics (was 19.x → now 14.x), and Photo/Video/App
  // sub-IDs that were originally numbered against their old chapter.
  const subRemap = [
    // [section id, oldChapter, newChapter]
    ['motion',           18, 14],
    ['motion-graphics',  19, 15],
    ['shot-lists',       14, 16],
    ['grade',            15, 17],
    ['video-principles', 16, 18],
    ['video-templates',  17, 19],
    ['video-library',    21, 20],
    ['components',       18, 21], // sections-2.js wrote "18.1/Buttons" etc.
    ['downloads',        20, 22],
    ['collateral',       21, 23]
  ];
  subRemap.forEach(([id, oldN, newN]) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    // Replace patterns like "18.1", "18.2 / FORMATS" anywhere inside
    const re = new RegExp(`\\b${oldN}\\.(\\d+)\\b`, 'g');
    // Walk text nodes + simple innerHTML inside flagged elements
    sec.querySelectorAll('h3 .num, h4, .mg-num, div').forEach(el => {
      // Only mutate elements whose text actually starts/contains "NN."
      if (!re.test(el.innerHTML)) return;
      el.innerHTML = el.innerHTML.replace(re, `${newN}.$1`);
    });
  });

  // 4) Body text references — "Motion 18" → "Motion 13" ───────────
  document.querySelectorAll('p, span, div').forEach(el => {
    if (el.children.length === 0 && /Motion 18\b/.test(el.textContent)) {
      el.textContent = el.textContent.replace(/Motion 18\b/g, 'Motion 14');
    }
  });

  // 5) Rebuild the TOC with new groups ─────────────────────────────
  if (window.__BBL_TOC && window.renderTOC) {
    // Map id → original entry to preserve `short` labels
    const byId = {};
    window.__BBL_TOC.forEach(s => { if (s) byId[s.id] = s; });
    window.__BBL_TOC = order.map(id => byId[id]).filter(Boolean);

    // Override the groups by monkey-patching renderTOC's group config.
    // toc.js hard-codes the groups inside renderTOC, so we replace it.
    const tocEl = document.getElementById('toc');
    if (tocEl) {
      const newGroups = [
        { name: 'Foundation', range: [0, 5] },
        { name: 'Identity',   range: [6, 9] },
        { name: 'System',     range: [10, 13] },
        { name: 'Motion',     range: [14, 15] },
        { name: 'Photography',range: [16, 17] },
        { name: 'Video',      range: [18, 20] },
        { name: 'Application',range: [21, 23] }
      ];
      let html = '';
      newGroups.forEach(g => {
        html += `<li class="group-break">${g.name}</li>`;
        for (let i = g.range[0]; i <= g.range[1]; i++) {
          const s = window.__BBL_TOC[i];
          if (!s) continue;
          const num = String(i).padStart(2, '0');
          html += `<li><a href="#${s.id}" data-idx="${i}"><span class="tc-num">${num}</span><span>${s.short}</span></a></li>`;
        }
      });
      tocEl.innerHTML = html;

      // Re-bind active-section tracking
      const links = [...tocEl.querySelectorAll('a')];
      const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
      const pgEl = document.getElementById('pg-now');
      let current = -1;
      const setActive = (idx) => {
        links.forEach(l => l.classList.remove('active'));
        if (links[idx]) links[idx].classList.add('active');
        if (pgEl) pgEl.textContent = String(idx).padStart(2, '0');
      };
      const onScroll = () => {
        const y = window.scrollY + window.innerHeight * 0.3;
        let i = 0;
        for (let k = 0; k < sections.length; k++) {
          if (sections[k].offsetTop <= y) i = k;
        }
        if (i !== current) { current = i; setActive(i); }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // 6) Index page (section 01) — rebuild from canonical order ─────
  const indexGrid = document.querySelector('#index .index-grid');
  if (indexGrid) {
    const titleByShort = {
      'Manifesto': 'Manifesto',
      'Mission &amp; Verticals': 'Mission &amp; Verticals',
      'Divisions': 'Divisions',
      'U.S. Origin': 'Built in America',
      'Voice &amp; Tone': 'Voice &amp; Tone',
      'Logo System': 'The Logo System',
      'The Monogram': 'The Monogram',
      'Clear Space &amp; Misuse': 'Clear Space &amp; Misuse',
      'Color': 'Color',
      'Typography': 'Typography',
      'Grid &amp; Layout': 'Grid &amp; Layout',
      'Iconography': 'Iconography',
      'Motion': 'Motion Principles',
      'Motion Graphics': 'Motion Graphics',
      'Photo Principles': 'Photography Principles',
      'Shot Lists': 'Photography Shot Lists',
      'Photo Grade': 'Photo Grade &amp; LUT',
      'Video Principles': 'Video Principles',
      'Video Templates': 'Video Templates',
      'Video Library': 'Video Library',
      'Web Components': 'Web &amp; Component Patterns',
      'Downloads': 'Asset Library',
      'Collateral': 'Collateral &amp; Merch'
    };
    const groups = [
      { name: 'Foundation', range: [2, 5] },   // skip cover/index from listing
      { name: 'Identity',   range: [6, 9] },
      { name: 'System',     range: [10, 13] },
      { name: 'Motion',     range: [14, 15] },
      { name: 'Photography',range: [16, 17] },
      { name: 'Video',      range: [18, 20] },
      { name: 'Application',range: [21, 23] }
    ];
    // Two columns: split groups roughly down the middle (Foundation→System | Motion→Application)
    const colA = groups.slice(0, 3);
    const colB = groups.slice(3);
    const renderCol = (cols) => cols.map((g, gi) => {
      const items = [];
      for (let i = g.range[0]; i <= g.range[1]; i++) {
        const s = window.__BBL_TOC[i];
        if (!s) continue;
        const num = String(i).padStart(2, '0');
        const pg  = String(i).padStart(2, '0');
        const title = titleByShort[s.short] || s.short;
        items.push(
          `<div class="item"><span class="n">${num}</span><span class="t">${title}</span><span class="pg">P. ${pg}</span></div>`
        );
      }
      const mt = gi === 0 ? '' : ' style="margin-top:32px;"';
      return `<div class="grp-title"${mt}>${g.name}</div>${items.join('')}`;
    }).join('');
    indexGrid.innerHTML = `
      <div class="grp">${renderCol(colA)}</div>
      <div class="grp">${renderCol(colB)}</div>
    `;

    // Update the "21 chapters" subline (now 22 listed chapters: index + 22 others)
    const indexHead = document.querySelector('#index .section-head .meta');
    if (indexHead) {
      indexHead.innerHTML = indexHead.innerHTML.replace(
        /\d+\s+chapters/i, '22 chapters'
      );
    }
  }

  window.dispatchEvent(new CustomEvent('bbl:reordered', { detail: { order } }));
})();
