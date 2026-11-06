/* ─────────────────────────────────────────────────────────────────────
   asset-bank.js — Powerus Brand Bible
   Asset Library: logo kit + product image bank (photos + cutouts).
   Source: Powerus Design System image bank (Figma "Image Bank" page),
   synced November 2026. Runs last; fills #lk-root and #ib-root inside
   the Image Bank and Downloads sections and binds delegated handlers so later DOM
   rewrites never drop listeners.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  const B = file => 'assets/bank/' + file;

  // ── Logo kit ─────────────────────────────────────────────────────────
  const K = 'assets/logo/kit/';
  const LOGOS = [
    { name: 'Full logo', ink: 'Char', note: 'On bone / light surfaces', dark: false, base: 'powerus-logo-char',
      dims: { svg: 'Vector', large: '3422 × 774', small: '800 × 181' } },
    { name: 'Full logo', ink: 'Bone', note: 'On char / dark surfaces', dark: true, base: 'powerus-logo-bone',
      dims: { svg: 'Vector', large: '3422 × 774', small: '800 × 181' } },
    { name: 'Icon', ink: 'Char', note: 'Monogram · on bone', dark: false, base: 'powerus-icon-char', icon: true,
      dims: { svg: 'Vector', large: '1024 × 1027', small: '256 × 257' } },
    { name: 'Icon', ink: 'Bone', note: 'Monogram · on char', dark: true, base: 'powerus-icon-bone', icon: true,
      dims: { svg: 'Vector', large: '1024 × 1027', small: '256 × 257' } }
  ];

  // ── Image bank, by product ───────────────────────────────────────────
  // p: [file, blobId, label]   c: [file, blobId, label]
  const PRODUCTS = [
    { id: 'guardian', name: 'Guardian', family: 'Tactical · Interceptor',
      p: [
        ['guardian-1-closeup-01.jpg', '3af60d9b89cb2b5f494077eeae9f4906', 'Guardian 1 · close-up'],
        ['guardian-1-closeup-02.jpg', '10fd57cb20f1ea86314b700dd707879c', 'Guardian 1 · close-up'],
        ['guardian-1-factory-01.jpg', 'e6ea3ea791b35a0f0b8a20fb3016b404', 'Guardian 1 · factory'],
        ['guardian-2-01.jpg', 'abdad5203b782f59eb38c2e1fee64ecd', 'Guardian 2'],
        ['guardian-2-02.jpg', 'db1f5b7fba3150d3008f70f5a40ad5b3', 'Guardian 2'],
        ['guardian-2-uae-01.jpg', '9b0ce076b33bc6b45152d950cb024862', 'Guardian 2 · UAE'],
        ['guardian-3-aether-01.jpg', '8369306f281f3efcd70046a78ae9296f', 'Guardian 3 · Aether'],
        ['guardian-3-aether-02.jpg', '1b81d402333c9351679b5582c8dd36a3', 'Guardian 3 · Aether'],
        ['guardian-3-aether-03.jpg', '2333bd8613b0da7c5f92aaeea5a5817b', 'Guardian 3 · Aether'],
        ['guardian-3-aether-04.jpg', '0bc35e047cf462bd1dcb6b4a700ecb05', 'Guardian 3 · Aether'],
        ['guardian-3-aether-05.jpg', '98d4cab1a8abb6eb43daccfbe43a5381', 'Guardian 3 · Aether'],
        ['guardian-3-aether-06.jpg', 'c6bb2804f523a39ec739bc2bce38b77c', 'Guardian 3 · Aether'],
        ['guardian-3-aether-07.jpg', '37bcfe0d5eaf6858a7d8068c2f65d82c', 'Guardian 3 · Aether'],
        ['guardian-3-aether-08.jpg', '48765851bb3a6a0020c7009585e622f8', 'Guardian 3 · Aether'],
        ['guardian-3-aether-09.jpg', 'b5641d7c24bc6ab1007454a19a6b2b43', 'Guardian 3 · Aether'],
        ['guardian-3-aether-10.jpg', '0c03aa56b8af8aedbfb02b2e48317027', 'Guardian 3 · Aether'],
        ['guardian-3-aether-11.jpg', '9d1c25409b8c6b76812a3182808c6cb8', 'Guardian 3 · Aether'],
        ['guardian-3-aether-12.jpg', 'fd60ccadc6bd9e761005cf7bbcecc35d', 'Guardian 3 · Aether'],
        ['guardian-3-aether-screenshot-01.jpg', '92588bce414bea652b4355b5d99ab966', 'Guardian 3 · screen'],
        ['guardian-3-aether-screenshot-02.jpg', 'fe09883fec94a7b5f7c01fed884c15f1', 'Guardian 3 · screen'],
        ['guardian-3-burst-01.jpg', 'adbcd5aaebc3ea0833afc4f919261009', 'Guardian 3 · burst']
      ],
      c: [
        ['guardian-1-cutout-01.png', '00a8f933de57638ee8b458f86b178ce9', 'Guardian 1'],
        ['guardian-2-cutout-01.png', '71aea0f2270869bad9a75d299ebe5204', 'Guardian 2'],
        ['guardian-3-cutout-01.png', '563c1d40cc453d1fd6457a5edc7dc5b2', 'Guardian 3']
      ] },
    { id: 'matrix', name: 'Matrix', family: 'Tactical',
      p: [
        ['matrix-t-hero-01.jpg', 'b1579899f8b18208384bb7f91bdee575', 'Matrix T · hero'],
        ['matrix-fold-hero-01.jpg', '21f05b70f317e16f1dc7feb8059c4ade', 'Matrix Fold · hero'],
        ['matrix-10-hero-01.jpg', '687efcbaf8dd9f415de93e93c619262c', 'Matrix 10 · hero'],
        ['matrix-7-hero-01.jpg', '2470df954b6be59b899e50ae73e452b6', 'Matrix 7 · hero'],
        ['matrix-7-field-01.jpg', '4ab66ed5a94e355ea121b973e5290524', 'Matrix 7 · field'],
        ['matrix-5-hero-01.jpg', 'dd6805519b67333cd25d414faf15ef36', 'Matrix 5 · hero']
      ],
      c: [
        ['matrix-fold-cutout-01.png', 'b0854f616587df2d4dd009e3f901b970', 'Matrix Fold'],
        ['matrix-10-cutout-01.png', '921107654f2f1900dff41efc6a50da80', 'Matrix 10'],
        ['matrix-7-cutout-01.png', '21f3aa13c29cec1777b00796bb83b867', 'Matrix 7'],
        ['matrix-5-cutout-01.png', '811cf1b93c36418fdd21cfc97ea5510d', 'Matrix 5']
      ] },
    { id: 'dragon', name: 'Dragon', family: 'Heavy-lift',
      p: [
        ['dragon-h100-hero-01.jpg', '4b1a25637f7cac644a9f7e22e048c746', 'Dragon H100 · hero'],
        ['dragon-h500-hero-01.jpg', '9ae69a87a47746626c68097e6a8f0d09', 'Dragon H500 · hero'],
        ['dragon-h1000-hero-01.jpg', '71f125984c405b786545ffee3727421e', 'Dragon H1000 · hero']
      ],
      c: [
        ['dragon-h100-cutout-01.png', '33b732aa94cff7861fe78f1fc1dd9253', 'Dragon H100'],
        ['dragon-h500-cutout-01.png', '84be0eddca0824001f8fd20031fe2ed3', 'Dragon H500'],
        ['dragon-h1000-cutout-01.png', 'ccc960accfc64502c82e964d8543a779', 'Dragon H1000']
      ] },
    { id: 'firebreak', name: 'Firebreak', family: 'Heavy-lift',
      p: [['firebreak-hero-01.jpg', '915cb398a2b66494dadd45bc481e1d57', 'Firebreak · hero']],
      c: [['firebreak-cutout-01.png', '0f6dc8d08cb7e315fa3dc143205b398d', 'Firebreak']] },
    { id: 'harvest', name: 'Harvest', family: 'Heavy-lift',
      p: [['harvest-hero-01.jpg', 'a9806f56495c03e67975d3c1035ff4c2', 'Harvest · hero']],
      c: [
        ['harvest-cutout-01.png', 'f7beb830bbaab409e767b0622260645d', 'Harvest · alt 1'],
        ['harvest-cutout-02.png', '078ffd3ccedff422e173296d44f10d6d', 'Harvest · alt 2']
      ] },
    { id: 'xfold', name: 'ISR', family: 'Spy · Travel · Cinema',
      p: [
        ['xfold-spy-hero-01.jpg', 'a97236843a8e237a04e543d2535b1037', 'ISR Spy · hero'],
        ['xfold-travel-hero-01.jpg', '78baeb97036c2552f72e39095947e24c', 'ISR Travel · hero'],
        ['xfold-cinema-hero-01.jpg', '1652643b13029f6874d4e0d83c8d006b', 'ISR Cinema · hero']
      ],
      c: [
        ['xfold-spy-cutout-01.png', '2cad41304c44ac67b5e9ac9cc022594c', 'ISR Spy'],
        ['xfold-travel-cutout-01.png', '8ead67104985a976e4a20603e96edb70', 'ISR Travel'],
        ['xfold-cinema-cutout-01.png', 'c0304911eaf284514276402b32480d27', 'ISR Cinema']
      ] },
    { id: 'reach', name: 'Reach', family: 'ISR',
      p: [['reach-hero-01.jpg', 'd5fb3c5b983b6f8efe7037b1d2f617a6', 'Reach · hero']],
      c: [['reach-cutout-01.png', '4928d84646fc3d5abcc72689c4cabe34', 'Reach']] },
    { id: 'blue-sky', name: 'Blue Sky', family: 'Maritime',
      p: [
        ['blue-sky-hero-01.jpg', '09ad928faca40c4c3cb5ea962ca95f32', 'Blue Sky · hero'],
        ['blue-sky-horizon-hero-01.jpg', '7e59a2eb241e9ffeecee13a4777baf9c', 'Blue Sky Horizon · hero']
      ],
      c: [
        ['blue-sky-cutout-01.png', '2310ea8c88be705bfc557f866c0b5887', 'Blue Sky'],
        ['blue-sky-horizon-cutout-01.png', '5d984f3625c8a0ea83bdf9f581537d30', 'Blue Sky Horizon']
      ] },
    { id: 'xnav-ai', name: 'xNav AI', family: 'Software',
      p: [['xnav-ai-hero-01.jpg', 'a1bf577efa803504a954548cefb5aa0e', 'xNav AI · hero']],
      c: [['xnav-ai-cutout-01.png', '68ac10583b40b8d33230561e118a066c', 'xNav AI']] }
  ];

  const pad = n => String(n).padStart(2, '0');
  const totalP = PRODUCTS.reduce((s, p) => s + p.p.length, 0);
  const totalC = PRODUCTS.reduce((s, p) => s + p.c.length, 0);

  // ── Render: logo kit ─────────────────────────────────────────────────
  const lk = document.getElementById('lk-root');
  if (lk) {
    lk.innerHTML = `<div class="lk-grid">${LOGOS.map(l => `
      <div class="lk-card${l.dark ? ' dark' : ''}${l.icon ? ' icon' : ''}">
        <div class="lk-stage"><img src="${K}${l.base}.svg" alt="Powerus ${l.name.toLowerCase()} · ${l.ink}"/></div>
        <div class="lk-meta">
          <div class="lk-name">${l.name} <span>· ${l.ink}</span></div>
          <div class="lk-note">${l.note}</div>
        </div>
        <div class="lk-fmts">
          <a class="lk-fmt" href="${K}${l.base}.svg" download="${l.base}.svg"><b>SVG</b><i>${l.dims.svg}</i></a>
          <a class="lk-fmt" href="${K}${l.base}-large.png" download="${l.base}-large.png"><b>PNG · L</b><i>${l.dims.large}</i></a>
          <a class="lk-fmt" href="${K}${l.base}-small.png" download="${l.base}-small.png"><b>PNG · S</b><i>${l.dims.small}</i></a>
        </div>
      </div>`).join('')}
    </div>`;
  }

  // ── Render: image bank ───────────────────────────────────────────────
  const ib = document.getElementById('ib-root');
  if (ib) {
    const tile = (f, kind) => `
      <figure class="ib-tile ${kind}" data-kind="${kind}">
        <a class="ib-img" href="${B(f[0])}" download="powerus-${f[0]}" title="Download ${f[0]}">
          <img loading="lazy" src="${B(f[0])}" alt="${f[2]}"/>
          <span class="ib-kind">${kind === 'cutout' ? 'Cutout · PNG' : 'Photo · JPG'}</span>
          <span class="ib-dl" aria-hidden="true">↓</span>
        </a>
        <figcaption>
          <span class="ib-label">${f[2]}</span>
          <span class="ib-file">${f[0]}<em class="ib-dims"></em></span>
        </figcaption>
      </figure>`;

    const chips = [`<button class="ib-chip on" data-ib-filter="all">All <span>${pad(PRODUCTS.length)}</span></button>`]
      .concat(PRODUCTS.map(p => `<button class="ib-chip" data-ib-filter="${p.id}">${p.name} <span>${pad(p.p.length + p.c.length)}</span></button>`))
      .join('');

    ib.innerHTML = `
      <div class="ib-bar">
        <div class="ib-chips" role="tablist">${chips}</div>
        <div class="ib-mode" role="group" aria-label="Image type">
          <button class="on" data-ib-mode="all">All</button>
          <button data-ib-mode="photo">Photos <span>${totalP}</span></button>
          <button data-ib-mode="cutout">Cutouts <span>${totalC}</span></button>
        </div>
      </div>
      ${PRODUCTS.map((p, i) => `
      <div class="ib-product" data-product="${p.id}" id="ib-${p.id}">
        <div class="ib-phead">
          <span class="ib-idx">${pad(i + 1)}</span>
          <h4 class="ib-pname">${p.name}</h4>
          <span class="ib-fam">${p.family}</span>
          <span class="ib-count">${p.p.length} photo${p.p.length === 1 ? '' : 's'} · ${p.c.length} cutout${p.c.length === 1 ? '' : 's'}</span>
          <button class="dl-grab-all" data-ib-grab="${p.id}">Grab all · ${p.name}</button>
        </div>
        <div class="ib-grid">
          ${p.c.map(f => tile(f, 'cutout')).join('')}
          ${p.p.map(f => tile(f, 'photo')).join('')}
        </div>
      </div>`).join('')}`;

    // Dimensions from the real file once each image loads
    ib.querySelectorAll('.ib-tile img').forEach(img => {
      const set = () => {
        const d = img.closest('.ib-tile').querySelector('.ib-dims');
        if (d && img.naturalWidth) d.textContent = ` · ${img.naturalWidth} × ${img.naturalHeight}`;
      };
      if (img.complete) set(); else img.addEventListener('load', set, { once: true });
    });
  }

  // ── Delegated handlers ───────────────────────────────────────────────
  let mode = 'all', filter = 'all';
  const apply = () => {
    const root = document.getElementById('ib-root');
    if (!root) return;
    root.querySelectorAll('.ib-product').forEach(el => {
      const showP = filter === 'all' || el.dataset.product === filter;
      let any = false;
      el.querySelectorAll('.ib-tile').forEach(t => {
        const ok = mode === 'all' || t.dataset.kind === mode;
        t.hidden = !ok; if (ok) any = true;
      });
      el.hidden = !(showP && any);
    });
  };

  const ghost = (href, name) => {
    const a = document.createElement('a');
    a.href = href; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };
  const chain = (btn, links) => {
    if (!links.length || btn.classList.contains('busy')) return;
    const original = btn.textContent;
    btn.classList.add('busy');
    links.forEach((a, i) => setTimeout(() => {
      ghost(a.getAttribute('href'), a.getAttribute('download'));
      btn.textContent = `Downloading · ${i + 1} / ${links.length}`;
      if (i === links.length - 1) setTimeout(() => { btn.classList.remove('busy'); btn.textContent = original; }, 900);
    }, i * 320));
  };

  document.addEventListener('click', e => {
    const f = e.target.closest('[data-ib-filter]');
    if (f) {
      filter = f.dataset.ibFilter;
      f.parentNode.querySelectorAll('[data-ib-filter]').forEach(b => b.classList.toggle('on', b === f));
      apply(); return;
    }
    const m = e.target.closest('[data-ib-mode]');
    if (m) {
      mode = m.dataset.ibMode;
      m.parentNode.querySelectorAll('[data-ib-mode]').forEach(b => b.classList.toggle('on', b === m));
      apply(); return;
    }
    const g = e.target.closest('[data-ib-grab]');
    if (g) {
      const prod = document.querySelector(`.ib-product[data-product="${g.dataset.ibGrab}"]`);
      if (prod) chain(g, [...prod.querySelectorAll('.ib-tile:not([hidden]) a.ib-img')]);
      return;
    }
    const lg = e.target.closest('[data-lk-grab]');
    if (lg) {
      const root = document.getElementById('lk-root');
      if (root) chain(lg, [...root.querySelectorAll('a.lk-fmt')]);
    }
  });
})();
