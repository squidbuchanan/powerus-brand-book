/* Powerus Brand Bible — sections 08-19 (continuation) */

// ─────────────────────────────────────────────────────────────────────
// 08 — COLOR
// ─────────────────────────────────────────────────────────────────────
reg('color', 'Color');
add(`
<section id="color" class="page">
  <span class="page-num">PG <span>09</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">09 / System</span>Color<br/><span style="color:var(--stone)">Two surfaces. One signal. Earth in photography.</span></div>
    <div>
      <h2>Mostly nothing.<br/>Then a flare.</h2>
      <p class="lede">The Powerus palette is intentionally restrained. Bone and char carry 95% of every surface. Ember is a signal — used at less than 5% of any composition, exclusively for live states, key callouts, and rare brand moments. Color in the brand comes through photography, not UI.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">08.1</span> Core palette · brand surfaces</h3>
  <div class="palette">
    <div class="swatch bone"><div class="role">Primary surface</div><div><div class="name">Bone</div><div class="codes">#F5F1E8<br/>R245 G241 B232<br/>OKLCH 95% 0.012 88</div></div></div>
    <div class="swatch char"><div class="role">Primary ink</div><div><div class="name">Char</div><div class="codes">#161616<br/>R22 G22 B22<br/>OKLCH 16% 0 0</div></div></div>
    <div class="swatch graphite"><div class="role">Secondary ink</div><div><div class="name">Graphite</div><div class="codes">#3A3A38<br/>R58 G58 B56<br/>OKLCH 30% 0.003 95</div></div></div>
    <div class="swatch stone"><div class="role">Tertiary / meta</div><div><div class="name">Stone</div><div class="codes">#9A938A<br/>R154 G147 B138<br/>OKLCH 64% 0.014 80</div></div></div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">08.2</span> Signal — Ember</h3>
  <div class="col-2" style="align-items:start;">
    <div class="palette" style="grid-template-columns:1fr;">
      <div class="swatch ember" style="aspect-ratio:1.6/1; padding:32px;"><div class="role">Signal · Reserved</div><div><div class="name">Ember</div><div class="codes">#FF6200<br/>R255 G98 B0<br/>OKLCH 67% 0.21 42</div></div></div>
    </div>
    <div>
      <h4>Ember rules</h4>
      <p>Ember was the legacy primary. In V2.0 it is demoted to a signal color and protected as a recognition asset. Use only for: live indicators, hazard or alert states, single-stat hero callouts, isolated wordmark moments in motion, and one (1) merch hit per drop.</p>
      <p style="margin-top:14px;">Never as a brand surface. Never as a CTA fill on body pages. Never gradient-blended.</p>
    </div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">08.3</span> Earth tones · photography only</h3>
  <p style="color:var(--graphite); margin-bottom:18px;">These hues exist to describe the Powerus look in photography and video — they are not used as UI fills, type colors, or brand surfaces. They are pulled from the field, not painted onto the brand.</p>
  <div class="palette">
    <div class="swatch clay"><div class="role">Earth · skin / soil</div><div><div class="name">Clay</div><div class="codes">#A8806A · OKLCH 60% 0.06 50</div></div></div>
    <div class="swatch moss"><div class="role">Earth · vegetation</div><div><div class="name">Moss</div><div class="codes">#6F7158 · OKLCH 47% 0.04 110</div></div></div>
    <div class="swatch dust"><div class="role">Earth · dry/light</div><div><div class="name">Dust</div><div class="codes">#C2B5A0 · OKLCH 75% 0.03 80</div></div></div>
    <div class="swatch basalt"><div class="role">Earth · shadow</div><div><div class="name">Basalt</div><div class="codes">#2B2925 · OKLCH 22% 0.005 60</div></div></div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">08.4</span> Surface budget — every page, every screen</h3>
  <div class="usage-bar">
    <div class="u-bone">BONE · 60%</div>
    <div class="u-char">CHAR · 25%</div>
    <div class="u-stone">STONE · 10%</div>
    <div class="u-ember">5%</div>
  </div>
  <p style="margin-top:14px; color:var(--graphite); font-size:14px;">If you exceed 5% Ember on a surface, you are using it wrong. Pull it back. Let the photography carry the warmth.</p>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 09 — TYPOGRAPHY
// ─────────────────────────────────────────────────────────────────────
reg('typography', 'Typography');
add(`
<section id="typography" class="page">
  <span class="page-num">PG <span>10</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">10 / System</span>Typography<br/><span style="color:var(--stone)">Manrope. Plus a monospace.</span></div>
    <div>
      <h2>One family.<br/>Used loud.</h2>
      <p class="lede">Manrope across the system. Display set huge, tight, and confident. JetBrains Mono carries technical labels, readouts, and metadata. Two fonts is plenty. Discipline beats variety.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">09.1</span> The scale</h3>
  <div class="type-scale">
    <div class="type-row"><div class="meta">Display / D1</div><div class="specimen t-display">Powering autonomy.</div><div class="specs">Manrope 800<br/>96 / 88 / -0.05em<br/>Headlines, covers</div></div>
    <div class="type-row"><div class="meta">Heading / H1</div><div class="specimen t-h1">The mission extends.</div><div class="specs">Manrope 700<br/>64 / 64 / -0.04em<br/>Section opens</div></div>
    <div class="type-row"><div class="meta">Heading / H2</div><div class="specimen t-h2">Counter-drone interceptor.</div><div class="specs">Manrope 700<br/>44 / 46 / -0.03em<br/>Sub-sections</div></div>
    <div class="type-row"><div class="meta">Heading / H3</div><div class="specimen t-h3">Built American. Shipped quiet.</div><div class="specs">Manrope 600<br/>28 / 32 / -0.02em<br/>Block titles</div></div>
    <div class="type-row"><div class="meta">Lede / L1</div><div class="specimen t-lede">A 3D-printed, foldable 12-inch system engineered for thrust-to-weight performance the field demands.</div><div class="specs">Manrope 400<br/>22 / 31 / -0.01em<br/>Intros</div></div>
    <div class="type-row"><div class="meta">Body / B1</div><div class="specimen t-body">Powerus builds the systems the mission can't fail without. We work in the field. The lab is the field. Every system is American-made, accountable, and shipped.</div><div class="specs">Manrope 400<br/>17 / 26<br/>Long-form</div></div>
    <div class="type-row"><div class="meta">Small / B2</div><div class="specimen t-small">Pursuant to Executive Order 14307. Blue UAS Approved. Specifications subject to revision.</div><div class="specs">Manrope 500<br/>14 / 21<br/>Caption / legal</div></div>
    <div class="type-row"><div class="meta">Label / U1</div><div class="specimen t-label">Mission Systems · Tandem Defense</div><div class="specs">Manrope 700<br/>13 / 17 / +0.16em<br/>UI labels, captions</div></div>
    <div class="type-row"><div class="meta">Mono / M1</div><div class="specimen t-mono">[ MISSION SYSTEMS // TANDEM DEFENSE ]</div><div class="specs">JetBrains Mono 500<br/>11 / 17 / +0.22em<br/>Labels, readouts</div></div>
  </div>

  <div class="col-2" style="margin-top:48px;">
    <div>
      <h3><span class="num" style="color:var(--ember)">09.2</span> Display setting</h3>
      <p>Set display sizes between 64–240px. Tracking always negative: -0.04em at 64px, -0.05em at 96px+. Leading 0.88–0.95. Wrap by hand — never let display type orphan a single word on its own line.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">09.3</span> The bracket convention</h3>
      <p style="font-family:var(--mono); font-size:13px; letter-spacing:0.16em; color:var(--char);">[ POWERUS // BRAND OPERATING SYSTEM ]</p>
      <p style="margin-top:14px;">Square brackets and double-slashes are reserved for the section eyebrow, certification chips, and operating-context labels. They are part of the brand voice. Never decorative.</p>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 10 — GRID & LAYOUT
// ─────────────────────────────────────────────────────────────────────
reg('grid', 'Grid &amp; Layout');
add(`
<section id="grid" class="page">
  <span class="page-num">PG <span>11</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">11 / System</span>Grid<br/>&amp; Layout</div>
    <div>
      <h2>Engineered<br/>composition.</h2>
      <p class="lede">A 12-column grid with 24px gutters and 64px outer margins. Two-column splits dominate body copy. The faint 32px square grid is the brand's substrate — visible at low intensity behind everything we make.</p>
    </div>
  </div>

  <div class="grid-demo">
    <div class="grid-cols">
      <div></div><div></div><div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
    <div class="grid-meta">
      <span>12 COLUMNS · 24 PX GUTTER · 64 PX MARGIN</span>
      <span>BASELINE 8 PX</span>
    </div>
  </div>

  <div class="col-3" style="margin-top:48px;">
    <div>
      <h3><span class="num" style="color:var(--ember)">10.1</span> Square substrate</h3>
      <p>32×32 grid at 4–6% char on bone surfaces. 4–8% bone on char surfaces. Always present, never dominant.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">10.2</span> Hairline rules</h3>
      <p>1px char/15% to separate stat blocks, body sections, and table rows. Never thicker. Never colored.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">10.3</span> Stat tables</h3>
      <p>Always paired columns. Mono key, mono value, hairline rule beneath. Tabular numerals. Right-aligned values.</p>
    </div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">10.4</span> The slick layout — canonical pattern</h3>
  <p style="color:var(--graphite); margin-bottom:18px; max-width:none;">All single-product collateral inherits this composition: oversized product name (display), product photo aligned to right two-thirds, mono context label, certification chips, paired stat tables, brand mark bottom-left, contact bottom-right.</p>
  <div class="placeholder" style="max-width:520px; aspect-ratio: 1518/2149;">
    <span class="corner-tag">REF / SLICK CANONICAL</span>
    <img src="assets/refs/slick-matrix-12.png" alt="Matrix-12 product slick" style="position:absolute; inset:0; width:100%; height:100%; object-fit:contain; display:block;"/>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 11 — ICONOGRAPHY
// ─────────────────────────────────────────────────────────────────────
reg('icons', 'Iconography');
add(`
<section id="icons" class="page">
  <span class="page-num">PG <span>12</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">12 / System</span>Iconography</div>
    <div>
      <h2>Drawn like<br/>diagrams.</h2>
      <p class="lede">Icons are technical, not decorative. Single-weight 1.5px strokes on a 24px grid. Open terminals. No fills. They read like field manual schematics, not app store glyphs.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">11.1</span> Mission set</h3>
  <div class="icon-row">
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6l8-3z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg><span class="lbl">Defense</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M12 21c-3.5 0-6-2.5-6-5.5 0-2 1-3.5 2.5-5C9 11 9 9.5 8.5 8 11 9 12 11 12 13c0-1.5.5-3 1.5-4.5C15 11 17 13 17 15.5c0 3-2.5 5.5-5 5.5z"/><path d="M12 17c-1.2 0-2-.8-2-2 0-.8.4-1.4 1-2 .2.6.4 1 1 1.2.5-.4.7-1 .8-1.7.7.5 1.2 1.3 1.2 2.3 0 1.3-.8 2.2-2 2.2z"/></svg><span class="lbl">Wildfire</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 21V11"/><path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5z"/><path d="M12 14c0-2.5-2-4.5-4.5-4.5 0 2.5 2 4.5 4.5 4.5z"/><path d="M12 17c0-2 1.5-3.5 3.5-3.5 0 2-1.5 3.5-3.5 3.5z"/><path d="M5 21h14"/></svg><span class="lbl">Agriculture</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><path d="M10.5 10.5L7 7"/><path d="M13.5 10.5L17 7"/><path d="M10.5 13.5L7 17"/><path d="M13.5 13.5L17 17"/><circle cx="5" cy="5" r="2.2"/><circle cx="19" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/></svg><span class="lbl">Logistics</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 4v3"/><path d="M12 17v3"/><path d="M4 12h3"/><path d="M17 12h3"/></svg><span class="lbl">Search &amp; rescue</span></div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">11.2</span> System set</h3>
  <div class="icon-row">
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg><span class="lbl">Target</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12l9-9 9 9-9 9z"/><path d="M3 12h18M12 3v18"/></svg><span class="lbl">Compass</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l9 6v6l-9 6-9-6V9z"/><path d="M3 9l9 6 9-6"/></svg><span class="lbl">Module</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18l4-4 4 4 6-6 4 4"/><path d="M3 21h18"/></svg><span class="lbl">Range</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg><span class="lbl">Endurance</span></div>
    <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12c2-3 6-3 8 0s6 3 8 0"/><path d="M4 6c2-3 6-3 8 0s6 3 8 0"/><path d="M4 18c2-3 6-3 8 0s6 3 8 0"/></svg><span class="lbl">Signal</span></div>
  </div>

  <div style="margin-top:48px;">
    <h3><span class="num" style="color:var(--ember)">11.3</span> Construction</h3>
    <div class="data-readout"><span>GRID</span><span>24 × 24 PX</span></div>
    <div class="data-readout"><span>STROKE</span><span>1.5 PX</span></div>
    <div class="data-readout"><span>CORNERS</span><span>SQUARE OR 1 PX</span></div>
    <div class="data-readout"><span>FILL</span><span>NEVER</span></div>
    <div class="data-readout"><span>TERMINAL</span><span>OPEN</span></div>
    <div class="data-readout"><span>ALIGNMENT</span><span>OPTICAL CENTER</span></div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 12 — PHOTOGRAPHY PRINCIPLES
// ─────────────────────────────────────────────────────────────────────
reg('photo-principles', 'Photo Principles');
add(`
<section id="photo-principles" class="page">
  <span class="page-num">PG <span>13</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">13 / Photography</span>Photography<br/>Principles</div>
    <div>
      <h2>Story before<br/>spec sheet.</h2>
      <p class="lede">Photography is where the warmth lives. Every image tells the story of an outcome — a defended border, a contained burn, a yield brought in — not a product on a stand. The brand is muted so the world can be vivid.</p>
    </div>
  </div>

  <div>
    <div class="photo-principle">
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 01 ]</div>
        <div class="p-title">Kit in the field.</div>
        <p class="p-body">The product is shown in context — on the ground, beside the rucksack, in the grass before launch. Surrounded by the gear it operates with, in the terrain it operates in. Not on a studio cyc. Not floating on white. The image reads as a real frame from a real day.</p>
      </div>
      <div class="placeholder ratio-4-3 img photo" style="background-image:url('assets/photo/tactical-fpv.jpg'); filter: saturate(0.55) contrast(1.05) brightness(0.95);"><div class="hf-coords">UNIT · FPV-7"<br/>ROLE · KINETIC / OWA<br/>STATE · STAGED · PRE-LAUNCH<br/>TERRAIN · TEMPERATE / GRASS<br/>KIT · RUCK · BAT · HANDSET</div></div>
    </div>
    <div class="photo-principle">
      <div class="hero-frame" data-reticle style="order:-1; aspect-ratio:4/3;">
        <img src="assets/photo/guardian-hero.png" alt=""/>
        <div class="hf-coords">UNIT · GUARDIAN-1<br/>ROLE · C-UAS / TANDEM<br/>V · 160–3·40 KPH · R · 15K<br/>T+ · 28M · H · 5K0 M · W · 2.5KG</div>
      </div>
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 02 ]</div>
        <div class="p-title">Subject breaks the frame.</div>
        <p class="p-body">A single tight crop of terrain — the photographic field — meets a flat bone margin. The subject extends out of the photograph and into the page. The break tells you the subject is the point; the photograph is its context.</p>
      </div>
    </div>
    <div class="photo-principle">
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 03 ]</div>
        <div class="p-title">Terrain proves the role.</div>
        <p class="p-body">Every product is photographed in the terrain it was designed to operate in — desert for kinetic ISR, forest for fire, sea-deck for logistics, snowfield for high-altitude. The backdrop is not décor. It is proof of fit. A drone built for the line of contact never appears against a clean cyc.</p>
      </div>
      <div class="hero-frame on-light" data-reticle style="aspect-ratio:1279/857;">
        <img src="assets/photo/xfold-spy.png" alt=""/>
        <div class="hf-coords">UNIT · XFOLD-SPY<br/>ROLE · ISR / KAIZEN<br/>OPN 500×455 · CLS 535×225 MM<br/>V · 40 MPH · R · 20K · T+ · 30M<br/>H · 10K0 FT · W · 35 LB</div>
      </div>
    </div>
    <div class="photo-principle">
      <div class="placeholder ratio-4-3 img photo" style="order:-1; background-image:url('assets/photo/kaizen-drone.png')"><div class="hf-coords">UNIT · KAIZEN-HL<br/>ROLE · LOGISTICS / SLING<br/>PAYLD · 18.0 KG · CASED<br/>CRS · 042° · ALT · 38 M<br/>WIND · 12 KT · SEA · 1.2 M</div></div>
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 04 ]</div>
        <div class="p-title">Ambient light only.</div>
        <p class="p-body">Natural sources: dawn, dusk, headlamp, dashboard, cockpit. Never studio. Never ring-lit. If the moment looks lit, it isn't ours.</p>
      </div>
    </div>
    <div class="photo-principle">
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 05 ]</div>
        <div class="p-title">Earned restraint.</div>
        <p class="p-body">Muted saturation. Low chroma. Earth tones — clay, moss, dust, basalt — read as a single mood across the image library. Color is allowed when the mission demands it (fire, blood, sky), and only then.</p>
      </div>
      <div class="hero-frame natural on-light" data-reticle>
        <img src="assets/photo/fpv-desert.png" alt=""/>
        <div class="hf-coords">UNIT · FPV-5"<br/>ROLE · KINETIC / OWA<br/>FRAME · CFK · PROPS · 5128/3B<br/>LINK · ELRS · VID · O3<br/>PAYLD · CFG · MODE · 1-WAY</div>
      </div>
    </div>
    <div class="photo-principle">
      <div class="placeholder ratio-4-3 img photo on-light" style="order:-1; background-image:url('assets/photo/heavy-lift.jpg')"><div class="hf-coords">UNIT · KAIZEN-HL<br/>ROLE · LOGISTICS / DECK<br/>STATE · TOUCHDOWN · T+0.0<br/>PAD · HELIDECK · GRADE · STEEL<br/>FRAME · MID-ACTION · UNCUT</div></div>
      <div>
        <div class="p-meta-tag">[ PRINCIPLE · 06 ]</div>
        <div class="p-title">Documentary, not directed.</div>
        <p class="p-body">Photography captures the work, not a setup of the work. Hardware is shot in its real state — staged, in flight, mid-deploy, post-mission — never re-arranged for the camera. When operators are present, they are observed, not posed. The result feels closer to a frontline dispatch than a brand shoot. If a frame looks staged, it is rejected.</p>
      </div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 13 — SHOT LISTS
// ─────────────────────────────────────────────────────────────────────
reg('shot-lists', 'Shot Lists');
add(`
<section id="shot-lists" class="page">
  <span class="page-num">PG <span>14</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">14 / Photography</span>Shot Lists<br/><span style="color:var(--stone)">Per vertical · per shoot.</span></div>
    <div>
      <h2>What we<br/>always get.</h2>
      <p class="lede">Every shoot returns these frames at minimum. They form the spine of the image library and guarantee the brand is operable across web, social, and sales surfaces without staged b-roll.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">13.1</span> Defense — frontline ISR / counter-UAS</h3>
  <div class="shot-list">
    <div class="shot-row"><div class="n">D-01</div><div><div class="nm">Operator silhouette, ridge.</div></div><div class="desc">Backlit single figure at horizon, terrain dominant. Dawn or dusk. No platform visible.</div><div class="lens">35mm · f/4 · 1/500</div></div>
    <div class="shot-row"><div class="n">D-02</div><div><div class="nm">Hands on platform, fold.</div></div><div class="desc">Tight on grip — hands deploying or stowing the system. Focus on tactility, materials.</div><div class="lens">50mm · f/2.8 · 1/250</div></div>
    <div class="shot-row"><div class="n">D-03</div><div><div class="nm">Launch moment.</div></div><div class="desc">First three seconds of flight. Operator in frame, eyes tracking. Wide enough to read terrain.</div><div class="lens">24mm · f/4 · 1/2000</div></div>
    <div class="shot-row"><div class="n">D-04</div><div><div class="nm">Cockpit / GCS glow.</div></div><div class="desc">Face lit by display, night. Reflection of telemetry on the operator. Negative space above.</div><div class="lens">85mm · f/1.8 · 1/60</div></div>
    <div class="shot-row"><div class="n">D-05</div><div><div class="nm">Convoy at distance.</div></div><div class="desc">Vehicles moving through terrain, dust trail. Platforms airborne above as small specks.</div><div class="lens">200mm · f/5.6 · 1/1000</div></div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">13.2</span> Wildfire — suppression &amp; ISR</h3>
  <div class="shot-list">
    <div class="shot-row"><div class="n">F-01</div><div><div class="nm">Smoke ridge, dawn.</div></div><div class="desc">Wide. Layered smoke against pink/clay sky. No vehicles, no figures — establishing.</div><div class="lens">35mm · f/8 · 1/500</div></div>
    <div class="shot-row"><div class="n">F-02</div><div><div class="nm">Crew briefing, vehicle.</div></div><div class="desc">Three-shot of incident command around hood-mounted screen. Hands pointing at terrain.</div><div class="lens">35mm · f/2.8 · 1/250</div></div>
    <div class="shot-row"><div class="n">F-03</div><div><div class="nm">Platform deploy from truck bed.</div></div><div class="desc">Mid-action. Boots, ash on uniform. Platform visible but not central.</div><div class="lens">28mm · f/4 · 1/1000</div></div>
    <div class="shot-row"><div class="n">F-04</div><div><div class="nm">Aerial — burn perimeter.</div></div><div class="desc">Top-down. Black scar against living forest. No UI overlays. Geometry of the line.</div><div class="lens">DRONE · 24mm · f/5.6</div></div>
    <div class="shot-row"><div class="n">F-05</div><div><div class="nm">Aftermath, single figure.</div></div><div class="desc">Operator walking the cooled line. Boots in ash. Posture exhausted, not heroic.</div><div class="lens">85mm · f/2.8 · 1/500</div></div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">13.3</span> Agriculture · Logistics · Search &amp; Rescue</h3>
  <p style="color:var(--graphite);">Each vertical has its own 5-shot canonical list maintained in the Brand Office shared library. Pattern is identical: establishing, hands, action, aftermath, human moment. Shoots that return fewer than four of the five frames are not closed.</p>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 14 — PHOTO GRADE / LUT
// ─────────────────────────────────────────────────────────────────────
reg('grade', 'Photo Grade');
add(`
<section id="grade" class="page dark">
  <span class="page-num">PG <span>15</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--ember)">15 / Photography</span>Photo Grade<br/>&amp; LUT recipe</div>
    <div>
      <h2 style="color:var(--bone)">The Powerus<br/>look.</h2>
      <p class="lede" style="color:var(--dust)">A defined post-processing recipe applied to every published image. Lifted shadows, rolled-off highlights, desaturated greens and cyans, warm ochre tilt in midtones. Anyone shooting for Powerus calibrates to this curve.</p>
    </div>
  </div>

  <div class="lut-stack">

    <!-- ── PANEL 1 ─ Tone curve as a working scope ─────────────────── -->
    <div class="curve curve-scope">
      <div class="label">
        <span class="lbl-l">Tone curve · contrast</span>
        <span class="lbl-r">RGB · LIN · SCOPE</span>
      </div>
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" class="scope-svg">
        <defs>
          <!-- Phosphor-on-CRT vignette -->
          <radialGradient id="crt-vig" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#15110D" stop-opacity="0"/>
            <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
          </radialGradient>
          <!-- Histogram fill: ember at base, fades up -->
          <linearGradient id="histo-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#FF6200" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#FF6200" stop-opacity="0.10"/>
            <stop offset="100%" stop-color="#FF6200" stop-opacity="0"/>
          </linearGradient>
          <!-- Curve glow -->
          <filter id="curve-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <!-- Crosshair clip so it stops at the frame -->
          <clipPath id="scope-clip"><rect x="32" y="16" width="192" height="160"/></clipPath>
        </defs>

        <!-- Body -->
        <rect x="0" y="0" width="240" height="200" fill="#0A0907"/>
        <rect x="0" y="0" width="240" height="200" fill="url(#crt-vig)"/>

        <!-- Top status bar -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.5" fill="#7A736A">
          <text x="6" y="9">[ SC-01 // TONE ]</text>
          <text x="118" y="9">γ 2.4</text>
          <text x="156" y="9" fill="#FF6200">● REC</text>
          <text x="190" y="9">00:01:42</text>
        </g>

        <!-- Frame + corner ticks -->
        <rect x="32" y="16" width="192" height="160" fill="none" stroke="rgba(245,241,232,0.16)" stroke-width="0.8"/>
        <g stroke="rgba(245,241,232,0.5)" stroke-width="0.9" fill="none">
          <path d="M32 22 L32 16 L38 16"/>
          <path d="M218 16 L224 16 L224 22"/>
          <path d="M32 170 L32 176 L38 176"/>
          <path d="M218 176 L224 176 L224 170"/>
        </g>

        <!-- Grid: 4×4 cells, with the center crosshair brighter -->
        <g stroke="rgba(245,241,232,0.06)" stroke-width="0.6" clip-path="url(#scope-clip)">
          <line x1="32" y1="56" x2="224" y2="56"/>
          <line x1="32" y1="96" x2="224" y2="96"/>
          <line x1="32" y1="136" x2="224" y2="136"/>
          <line x1="80" y1="16" x2="80" y2="176"/>
          <line x1="128" y1="16" x2="128" y2="176"/>
          <line x1="176" y1="16" x2="176" y2="176"/>
        </g>

        <!-- Histogram silhouette behind the curve (smooth distribution) -->
        <g clip-path="url(#scope-clip)">
          <path d="M32 176
                   C 56 174, 72 134, 96 84
                   S 116 56, 128 62
                   S 156 102, 184 138
                   S 212 130, 224 102
                   L224 176 Z"
                fill="url(#histo-grad)"/>
          <!-- Outline of histogram, dim -->
          <path d="M32 176
                   C 56 174, 72 134, 96 84
                   S 116 56, 128 62
                   S 156 102, 184 138
                   S 212 130, 224 102"
                stroke="rgba(255,98,0,0.42)" stroke-width="0.8" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Identity diagonal -->
        <line x1="32" y1="176" x2="224" y2="16" stroke="rgba(245,241,232,0.22)" stroke-dasharray="2 3" stroke-width="0.7"/>

        <!-- Active S-curve: lifted blacks, rolled highlights -->
        <g filter="url(#curve-glow)">
          <path class="scope-curve"
                d="M32 162 C 64 156, 96 110, 128 76 S 200 24 224 30"
                stroke="#FF6200" stroke-width="1.6" fill="none"
                stroke-linecap="round"
                pathLength="1"/>
        </g>

        <!-- Anchor points (drawn after stroke-on completes) -->
        <g class="scope-anchors">
          <circle cx="32"  cy="162" r="2.4" fill="#FF6200" stroke="#FFC596" stroke-width="0.6"/>
          <circle cx="128" cy="76"  r="2.6" fill="#FF6200" stroke="#FFC596" stroke-width="0.6"/>
          <circle cx="224" cy="30"  r="2.4" fill="#FF6200" stroke="#FFC596" stroke-width="0.6"/>
          <!-- Live readout pip (animates along the curve) -->
          <circle class="scope-pip" cx="128" cy="76" r="3.2" fill="none" stroke="#FFC596" stroke-width="0.8" opacity="0.9"/>
        </g>

        <!-- Right-edge sample bar: shows how a value at mid (128) gets remapped -->
        <g>
          <rect x="226" y="16" width="6" height="160" fill="#0F0E0C" stroke="rgba(245,241,232,0.10)" stroke-width="0.6"/>
          <!-- Input mid (128 → y=96 on the diagonal, but mapped to ~76 by our curve) -->
          <rect class="sample-in"  x="226" y="93"  width="6" height="6" fill="rgba(245,241,232,0.4)"/>
          <rect class="sample-out" x="226" y="73"  width="6" height="6" fill="#FF6200"/>
        </g>

        <!-- Axis labels (kept inside the plot area, top-edge for input/output) -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5" letter-spacing="0.4" fill="#6A6862">
          <text x="34"  y="14">INPUT</text>
          <text x="200" y="14" text-anchor="end">OUTPUT</text>
          <text x="28"  y="178" text-anchor="end">0</text>
          <text x="28"  y="98"  text-anchor="end">128</text>
          <text x="28"  y="20"  text-anchor="end">255</text>
          <text x="32"  y="184">0</text>
          <text x="124" y="184" text-anchor="middle">128</text>
          <text x="216" y="184" text-anchor="end">255</text>
        </g>

        <!-- Bottom delta readout -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.4">
          <line x1="6" y1="188" x2="234" y2="188" stroke="rgba(245,241,232,0.10)" stroke-width="0.5"/>
          <text x="8"   y="196" fill="#7A736A">SHAD</text>
          <text x="36"  y="196" fill="#FF6200">+0.054</text>
          <text x="92"  y="196" fill="#7A736A">MID</text>
          <text x="116" y="196" fill="#FF6200">+0.078</text>
          <text x="170" y="196" fill="#7A736A">HIGH</text>
          <text x="200" y="196" fill="#FF6200">−0.024</text>
        </g>
      </svg>
    </div>

    <!-- ── PANEL 2 ─ HSL parade with channel pads ──────────────────── -->
    <div class="curve curve-scope">
      <div class="label">
        <span class="lbl-l">HSL · per-channel curves</span>
        <span class="lbl-r">WARM / COOL · PARADE</span>
      </div>
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" class="scope-svg">
        <defs>
          <radialGradient id="crt-vig-2" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#15110D" stop-opacity="0"/>
            <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
          </radialGradient>
          <filter id="curve-glow-2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="scope-clip-2"><rect x="32" y="16" width="192" height="160"/></clipPath>
        </defs>

        <rect x="0" y="0" width="240" height="200" fill="#0A0907"/>
        <rect x="0" y="0" width="240" height="200" fill="url(#crt-vig-2)"/>

        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.5" fill="#7A736A">
          <text x="6" y="9">[ SC-02 // PARADE ]</text>
          <text x="108" y="9">REC.709</text>
          <text x="148" y="9" fill="#FF6200">+0.06 WARM</text>
          <text x="200" y="9" fill="#9CA384">−0.20 COOL</text>
        </g>

        <rect x="32" y="16" width="192" height="160" fill="none" stroke="rgba(245,241,232,0.16)" stroke-width="0.8"/>
        <g stroke="rgba(245,241,232,0.5)" stroke-width="0.9" fill="none">
          <path d="M32 22 L32 16 L38 16"/>
          <path d="M218 16 L224 16 L224 22"/>
          <path d="M32 170 L32 176 L38 176"/>
          <path d="M218 176 L224 176 L224 170"/>
        </g>

        <g stroke="rgba(245,241,232,0.06)" stroke-width="0.6" clip-path="url(#scope-clip-2)">
          <line x1="32" y1="56" x2="224" y2="56"/>
          <line x1="32" y1="96" x2="224" y2="96"/>
          <line x1="32" y1="136" x2="224" y2="136"/>
          <line x1="80" y1="16" x2="80" y2="176"/>
          <line x1="128" y1="16" x2="128" y2="176"/>
          <line x1="176" y1="16" x2="176" y2="176"/>
        </g>

        <!-- Identity baseline -->
        <line x1="32" y1="96" x2="224" y2="96" stroke="rgba(245,241,232,0.20)" stroke-dasharray="2 3" stroke-width="0.7"/>

        <g filter="url(#curve-glow-2)">
          <!-- WARM (ember): boost in shadows/mids, slight pull in highlights -->
          <path class="parade-r"
                d="M32 102 C 70 80, 110 70, 150 84 S 210 110 224 108"
                stroke="#FF6200" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.95"
                pathLength="1"/>
          <!-- COOL (moss): rolled, pulled across mids -->
          <path class="parade-g"
                d="M32 92 C 70 108, 120 118, 160 116 S 210 102 224 92"
                stroke="#9CA384" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.9"
                pathLength="1"/>
        </g>

        <!-- Channel pads (top-left), styled like tally lights -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.4">
          <g class="pad-r">
            <rect x="38" y="24" width="68" height="10" fill="#1A0B04" stroke="#FF6200" stroke-width="0.6"/>
            <rect x="40" y="26" width="3" height="6" fill="#FF6200"/>
            <text x="46" y="31" fill="#FFB78A">WARM · +6 LUM</text>
          </g>
          <g class="pad-g" transform="translate(0,12)">
            <rect x="38" y="24" width="68" height="10" fill="#0E110A" stroke="#9CA384" stroke-width="0.6"/>
            <rect x="40" y="26" width="3" height="6" fill="#9CA384"/>
            <text x="46" y="31" fill="#C9CDB6">COOL · −20 ROLL</text>
          </g>
        </g>

        <!-- Right-side mini parade: two vertical bars showing warm/cool mid response -->
        <g transform="translate(208,30)">
          <rect x="0"  y="0" width="6" height="120" fill="#0F0E0C" stroke="rgba(245,241,232,0.10)" stroke-width="0.5"/>
          <rect x="10" y="0" width="6" height="120" fill="#0F0E0C" stroke="rgba(245,241,232,0.10)" stroke-width="0.5"/>
          <rect x="0"  y="32" width="6" height="88" fill="#FF6200" opacity="0.92"/>
          <rect x="10" y="68" width="6" height="52" fill="#9CA384" opacity="0.85"/>
          <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5" letter-spacing="0.3" fill="#7A736A">
            <text x="1"  y="128">W</text>
            <text x="11" y="128">C</text>
          </g>
        </g>

        <!-- Axis labels -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.4" fill="#6A6862">
          <text x="32"  y="184">SHAD</text>
          <text x="124" y="184" text-anchor="middle">MID</text>
          <text x="194" y="184" text-anchor="end">HIGH</text>
        </g>

        <!-- Bottom readout -->
        <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="5.5" letter-spacing="0.4">
          <line x1="6" y1="188" x2="234" y2="188" stroke="rgba(245,241,232,0.10)" stroke-width="0.5"/>
          <text x="6"   y="196" fill="#7A736A">WB</text>
          <text x="22"  y="196" fill="#FF6200">3850K</text>
          <text x="58"  y="196" fill="#7A736A">TINT</text>
          <text x="82"  y="196" fill="#FF6200">+04</text>
          <text x="106" y="196" fill="#7A736A">CAST</text>
          <text x="130" y="196" fill="#FF6200">WARM</text>
          <text x="160" y="196" fill="#7A736A">SAT</text>
          <text x="180" y="196" fill="#FF6200">82%</text>
          <text x="206" y="196" fill="#7A736A">LUT</text>
          <text x="222" y="196" fill="#FF6200">V1</text>
        </g>
      </svg>
    </div>

  </div>

  <div class="col-2" style="margin-top:48px; gap:48px;">
    <div>
      <h3 style="color:var(--bone)"><span class="num" style="color:var(--ember)">14.1</span> Curve recipe</h3>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>SHADOWS</span><span style="color:var(--bone)">+10 LIFT · WARM +6</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>MIDTONES</span><span style="color:var(--bone)">OCHRE +8 · -4 SAT</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>HIGHLIGHTS</span><span style="color:var(--bone)">-12 ROLL · COOL +4</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>BLACK POINT</span><span style="color:var(--bone)">RAISED · NEVER 0,0,0</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>WHITE POINT</span><span style="color:var(--bone)">ROLLED · NEVER 255</span></div>
    </div>
    <div>
      <h3 style="color:var(--bone)"><span class="num" style="color:var(--ember)">14.2</span> HSL adjustments</h3>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>RED · ORANGE</span><span style="color:var(--bone)">+6 LUM · -10 SAT</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>YELLOW</span><span style="color:var(--bone)">SHIFT TO ORANGE</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>GREEN</span><span style="color:var(--bone)">-25 SAT · MOSS TILT</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>CYAN · BLUE</span><span style="color:var(--bone)">-20 SAT · -8 LUM</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>GRAIN</span><span style="color:var(--bone)">FILM 35 · SIZE 25</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>FILE</span><span style="color:var(--bone)">PWR_LUT_V1.cube</span></div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 15 — VIDEO PRINCIPLES
// ─────────────────────────────────────────────────────────────────────
reg('video-principles', 'Video Principles');
add(`
<section id="video-principles" class="page">
  <span class="page-num">PG <span>16</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">16 / Video</span>Video<br/>Principles</div>
    <div>
      <h2>Cinema, not<br/>commercial.</h2>
      <p class="lede">Powerus video is field documentary with theatrical pacing. We hold shots until they finish breathing. Sound carries weight. Type is sparse and mono. Music is restrained. The mission tells the story; we get out of its way.</p>
    </div>
  </div>

  <div class="vp-grid">
    <div class="vp-card">
      <div class="vp-head">
        <span class="vp-num">01</span>
        <span class="vp-tag">[ TIMING ]</span>
      </div>
      <div class="vp-title">Pacing</div>
      <div class="vp-readout"><span>SHOT LENGTH</span><span>4–6 SEC AVG</span></div>
      <div class="vp-readout"><span>MOVEMENT</span><span>STATIC · SLOW PUSH</span></div>
      <div class="vp-readout"><span>FAST CUT FLOOR</span><span>1·5 SEC</span></div>
      <p class="vp-body">No rapid cuts under 1.5s except for kinetic field action. Every shot earns its duration.</p>
    </div>

    <div class="vp-card">
      <div class="vp-head">
        <span class="vp-num">02</span>
        <span class="vp-tag">[ AUDIO ]</span>
      </div>
      <div class="vp-title">Sound</div>
      <div class="vp-readout"><span>BED</span><span>DIEGETIC</span></div>
      <div class="vp-readout"><span>SOURCES</span><span>WIND · ROTOR · COMMS</span></div>
      <div class="vp-readout"><span>MUSIC ENTRY</span><span>BEAT 04</span></div>
      <p class="vp-body">Music enters late and exits before the line. The mission carries the score; we don't impose one.</p>
    </div>

    <div class="vp-card">
      <div class="vp-head">
        <span class="vp-num">03</span>
        <span class="vp-tag">[ TYPESETTING ]</span>
      </div>
      <div class="vp-title">Type</div>
      <div class="vp-readout"><span>FAMILY</span><span>JETBRAINS MONO</span></div>
      <div class="vp-readout"><span>TRACKING</span><span>+0·22 EM</span></div>
      <div class="vp-readout"><span>POSITION</span><span>LOWER LEFT THIRD</span></div>
      <p class="vp-body">Title cards bone-on-char or char-on-bone. Never centered. Never full-screen. Never a fade.</p>
    </div>

    <div class="vp-card">
      <div class="vp-head">
        <span class="vp-num">04</span>
        <span class="vp-tag">[ COLOR ]</span>
      </div>
      <div class="vp-title">Grade</div>
      <div class="vp-readout"><span>LUT</span><span>PWR_LUT_V1·CUBE</span></div>
      <div class="vp-readout"><span>SKIN</span><span>EARTHY · LOW SAT</span></div>
      <div class="vp-readout"><span>BANNED</span><span>TEAL+ORANGE</span></div>
      <p class="vp-body">Same recipe as photography. Greens muted, sky cool, blacks raised. No saturated 0,0,0.</p>
    </div>

    <div class="vp-card">
      <div class="vp-head">
        <span class="vp-num">05</span>
        <span class="vp-tag">[ CAMERA ]</span>
      </div>
      <div class="vp-title">Camera</div>
      <div class="vp-readout"><span>GROUND</span><span>HANDHELD</span></div>
      <div class="vp-readout"><span>PURSUIT</span><span>STABILIZED</span></div>
      <div class="vp-readout"><span>GEOMETRY</span><span>DRONE · TOPDOWN</span></div>
      <p class="vp-body">Never floating without intention. Every operator knows why the camera is where it is.</p>
    </div>

    <div class="vp-card vp-card-end">
      <div class="vp-head">
        <span class="vp-num">06</span>
        <span class="vp-tag">[ TERMINATION ]</span>
      </div>
      <div class="vp-title">The end card</div>
      <div class="vp-readout"><span>HOLD</span><span>2·00 SEC · BLACK</span></div>
      <div class="vp-readout"><span>MARK</span><span>CENTERED · BONE</span></div>
      <div class="vp-readout"><span>OUTRO</span><span>SILENCE · CUT</span></div>
      <p class="vp-body">No CTA. No website plate. The mark, the tagline, the cut. The film is over.</p>
    </div>
  </div>

  <div class="col-2" style="margin-top:48px;">
    <div>
      <h3><span class="num" style="color:var(--ember)">15.1</span> Title card spec</h3>
      <div class="card dark" style="aspect-ratio:16/9; padding:0; display:flex; align-items:flex-end; justify-content:flex-start; position:relative;">
        <img src="assets/logo/icon-light.svg" alt="" style="position:absolute; top:20px; right:20px; width:22px; height:22px; opacity:0.85;"/>
        <div style="padding:24px;">
          <div style="font-family:var(--mono); font-size:11px; letter-spacing:0.22em; color:var(--dust); margin-bottom:6px;">[ MISSION FILM // 03 ]</div>
          <div style="font-size:36px; font-weight:400; letter-spacing:-0.025em; line-height:1; color:var(--bone);">First light over<br/>Shasta County.</div>
        </div>
      </div>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">15.2</span> End card spec</h3>
      <div class="card dark" style="aspect-ratio:16/9; padding:0; position:relative; overflow:hidden;">
        <!-- Hairline frame & corner ticks -->
        <div style="position:absolute; inset:18px; border:1px solid rgba(245,241,232,0.08); pointer-events:none;"></div>
        <div style="position:absolute; top:18px; left:18px; width:14px; height:14px; border-top:1px solid var(--ember); border-left:1px solid var(--ember);"></div>
        <div style="position:absolute; top:18px; right:18px; width:14px; height:14px; border-top:1px solid var(--ember); border-right:1px solid var(--ember);"></div>
        <div style="position:absolute; bottom:18px; left:18px; width:14px; height:14px; border-bottom:1px solid var(--ember); border-left:1px solid var(--ember);"></div>
        <div style="position:absolute; bottom:18px; right:18px; width:14px; height:14px; border-bottom:1px solid var(--ember); border-right:1px solid var(--ember);"></div>

        <!-- Top-left mark -->
        <img src="assets/logo/icon-light.svg" alt="" style="position:absolute; top:30px; left:32px; width:24px; height:24px;"/>

        <!-- Top-right meta -->
        <div style="position:absolute; top:34px; right:32px; font-family:var(--mono); font-size:9px; letter-spacing:0.28em; color:var(--ember);">● END · 02:00</div>

        <!-- Tagline, lower-left -->
        <div style="position:absolute; left:32px; bottom:72px; max-width:60%;">
          <div style="font-family:var(--display); font-size:24px; font-weight:400; letter-spacing:-0.02em; color:var(--bone); line-height:1.05; text-align:left;">Powering the future<br/>of autonomy.</div>
        </div>

        <!-- Bottom: filebar -->
        <div style="position:absolute; bottom:30px; left:32px; right:32px;">
          <div style="display:flex; justify-content:space-between; font-family:var(--mono); font-size:9px; letter-spacing:0.24em; color:var(--stone); border-top:1px solid rgba(245,241,232,0.1); padding-top:8px;">
            <span>POWER.US</span>
            <span>2:00 / 2:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 16 — VIDEO TEMPLATES
// ─────────────────────────────────────────────────────────────────────
reg('video-templates', 'Video Templates');
add(`
<section id="video-templates" class="page">
  <span class="page-num">PG <span>17</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">17 / Video</span>Video<br/>Templates</div>
    <div>
      <h2>Five formats.<br/>One library.</h2>
      <p class="lede">Every Powerus film fits one of five templates. Each carries a fixed beat structure, runtime, and end-card. Editors do not improvise format; they fill it.</p>
    </div>
  </div>

  <div class="tmpl">
    <div class="id">T-01</div>
    <div>
      <div class="name">Mission Film</div>
      <div class="duration">60s · 90s · 120s · YEARLY HERO</div>
      <p class="body">A single operation, told in five beats. Establish the world. Introduce the operator. Show the work. Show the consequence. Hold the silence. No voiceover. No music until beat four.</p>
      <div class="beats">
        <div class="beat"><div class="t">00:00 / WORLD</div>Wide establishing. Terrain. Time of day.</div>
        <div class="beat"><div class="t">00:12 / OPERATOR</div>Face. Hands. Routine.</div>
        <div class="beat"><div class="t">00:30 / WORK</div>Deploy, transit, contact. Sound dominant.</div>
        <div class="beat"><div class="t">00:48 / CONSEQUENCE</div>Outcome read in faces, terrain, aftermath.</div>
        <div class="beat"><div class="t">00:56 / SILENCE</div>End card. Tagline. Cut.</div>
      </div>
    </div>
  </div>

  <div class="tmpl">
    <div class="id">T-02</div>
    <div>
      <div class="name">Product Reveal</div>
      <div class="duration">15s · 30s · LAUNCH</div>
      <p class="body">A new platform announced. Cold open on the system in motion in its environment. Spec readouts as type-on-screen at mono lower-third. End on platform name in display 800.</p>
      <div class="beats">
        <div class="beat"><div class="t">00:00 / IN MEDIA RES</div>Already in flight, already deployed.</div>
        <div class="beat"><div class="t">00:04 / SPEC TYPE</div>Mono readouts: speed, range, payload.</div>
        <div class="beat"><div class="t">00:09 / OPERATOR</div>Two-shot of system in hand or sky.</div>
        <div class="beat"><div class="t">00:12 / NAME</div>Display 800 platform name on bone.</div>
        <div class="beat"><div class="t">00:14 / END CARD</div>Mark. Cut.</div>
      </div>
    </div>
  </div>

  <div class="tmpl">
    <div class="id">T-03</div>
    <div>
      <div class="name">Field Dispatch</div>
      <div class="duration">30s–60s · MONTHLY · SOCIAL</div>
      <p class="body">Documentary cut from a real shoot. Operator-led, often unscripted. Captioned in mono. Shipped quickly. The brand's most frequent format and its truest tone of voice.</p>
      <div class="beats">
        <div class="beat"><div class="t">00:00 / SETTING</div>Place + date title card, mono.</div>
        <div class="beat"><div class="t">00:04 / VOICE</div>Operator speaks. Captioned, not narrated.</div>
        <div class="beat"><div class="t">00:18 / WORK</div>The action they describe.</div>
        <div class="beat"><div class="t">00:42 / RESULT</div>What changed. Stat or aftermath.</div>
        <div class="beat"><div class="t">00:55 / END</div>Mark + tagline.</div>
      </div>
    </div>
  </div>

  <div class="tmpl">
    <div class="id">T-04</div>
    <div>
      <div class="name">Spec Sheet (in motion)</div>
      <div class="duration">10s · 15s · SOCIAL · CUT-DOWN</div>
      <p class="body">An animated slick. The product against the bone surface, oversized name, mono stats appearing in sequence. Used as web hero loop, social motion, or as a section header on long-form films.</p>
      <div class="beats">
        <div class="beat"><div class="t">00:00 / NAME</div>Display 800 enters from baseline.</div>
        <div class="beat"><div class="t">00:02 / PRODUCT</div>Slow rotate or push-in on system.</div>
        <div class="beat"><div class="t">00:06 / STATS</div>Mono readouts cascade in.</div>
        <div class="beat"><div class="t">00:11 / CHIPS</div>Certifications animate in.</div>
        <div class="beat"><div class="t">00:14 / HOLD</div>Static frame. Cut.</div>
      </div>
    </div>
  </div>

  <div class="tmpl">
    <div class="id">T-05</div>
    <div>
      <div class="name">Recruiting</div>
      <div class="duration">90s · 2-3 PER YEAR</div>
      <p class="body">Aimed at engineers and operators. Footage from inside the company — bench, lab, range, hangar. Voice from a single Powerus team member. No corporate hype, no perks language. The work itself is the pitch.</p>
      <div class="beats">
        <div class="beat"><div class="t">00:00 / BENCH</div>Tight on hands, components, prints.</div>
        <div class="beat"><div class="t">00:18 / VOICE</div>Engineer or operator, unscripted.</div>
        <div class="beat"><div class="t">00:50 / RANGE</div>Field validation. Real conditions.</div>
        <div class="beat"><div class="t">01:15 / TEAM</div>Two-shot. Brief, quiet.</div>
        <div class="beat"><div class="t">01:25 / END</div>Mark + "We're hiring."</div>
      </div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 17 — MOTION
// ─────────────────────────────────────────────────────────────────────
reg('motion', 'Motion');
add(`
<section id="motion" class="page dark">
  <span class="page-num">PG <span>18</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--bone)">18 / Motion</span>Motion<br/>Principles<br/><span style="color:var(--stone)">Mechanical. Intentional.</span></div>
    <div>
      <h2 style="color:var(--bone);">How the brand<br/>moves.</h2>
      <p class="lede" style="color:var(--dust);">Three signature behaviors. Every Powerus surface — film, app, deck, web — uses these and only these. Motion in our system behaves like instrumentation, not animation. Things deploy, latch, and read out. They don't perform.</p>
    </div>
  </div>

  <!-- THREE SIGNATURE MOTIONS -->
  <div class="motion-grid">
    <!-- 01 — STROKE-ON REVEAL -->
    <div class="motion-card">
      <div class="mc-head">MOTION 01 / WORDMARK</div>
      <div class="mc-title">Stroke-on reveal.</div>
      <div class="mc-body">The mark is built, never popped. The icon's outline draws on stroke, then floods to a solid fill — 1.6s draw, 0.4s fill, custom curve. Used on every video ident, every loading state, every cold start.</div>
      <div class="mc-stage" style="min-height: 220px; padding-top: 28px;">
        <div class="stroke-stage" style="justify-content:center;">
          <span class="so-icon-svg" data-stroke-icon></span>
        </div>
      </div>
      <div class="mc-foot"><span>1.6S DRAW · 0.4S FILL · CB(.6,.05,.2,1)</span><span>STROKE-ON</span></div>
    </div>

    <!-- 02 — NUMBER SCRAMBLE -->
    <div class="motion-card">
      <div class="mc-head">MOTION 02 / DATA</div>
      <div class="mc-title">Number scramble.</div>
      <div class="mc-body">Live readouts cycle each digit through 0–9, then lock left-to-right at 28ms per digit. Total settle: ~420ms. Tabular numerals; widths never jitter. Used for telemetry, mission counters, and any number that means "currently true."</div>
      <div class="mc-stage" style="flex-direction:column; gap:14px;">
        <div class="scramble" data-scramble="0492" data-unit="M / ALT">
          <span class="lbl">ALT</span><span class="val"><span class="digit">0</span><span class="digit">4</span><span class="digit">9</span><span class="digit">2</span></span><span class="unit">M</span>
        </div>
        <div class="scramble" data-scramble="284" data-unit="DEG / BRG" style="font-size:32px;">
          <span class="lbl">BRG</span><span class="val"><span class="digit">2</span><span class="digit">8</span><span class="digit">4</span></span><span class="unit">°</span>
        </div>
      </div>
      <div class="mc-foot"><span>28MS / DIGIT · L→R LOCK</span><span>SCRAMBLE</span></div>
    </div>

    <!-- 03 — CROSSHAIR LOCK-ON -->
    <div class="motion-card">
      <div class="mc-head">MOTION 03 / FOCUS</div>
      <div class="mc-title">Crosshair lock-on.</div>
      <div class="mc-body">When the system selects a subject, two hairlines slide in from the edges — vertical from the top, horizontal from the left — and intersect on an ember reticle. Used for transitions between subjects, image focus, and any moment that says "this, exactly."</div>
      <div class="mc-stage" style="padding:0; min-height: 160px;">
        <div class="reticle-stage">
          <span class="rs-grid"></span>
          <span class="rs-v"></span>
          <span class="rs-h"></span>
          <span class="rs-tl"></span><span class="rs-tr"></span><span class="rs-bl"></span><span class="rs-br"></span>
          <span class="rs-dot"></span>
          <span class="rs-tag">N 34°09'21" / W 118°19'44"</span>
        </div>
      </div>
      <div class="mc-foot"><span>0.6S SLIDE · 0.2S LOCK · 0.1S TAG</span><span>LOCK-ON</span></div>
    </div>
  </div>

  <!-- SUPPORTING RULES -->
  <div class="col-3" style="margin-top: 56px;">
    <div>
      <h3 style="color: var(--dust);"><span class="num" style="color:var(--ember);">18.1</span> Easing</h3>
      <p style="font-family:var(--mono); font-size:13px; color:var(--bone); margin-top:14px;">cubic-bezier(.6, .05, .2, 1)</p>
      <p style="color:var(--dust); font-size:13px; line-height:1.55; margin-top:8px;">One curve. Mechanical-feeling, decisive, never bouncy. Never spring physics. Never overshoot. The brand is engineered, not playful.</p>
    </div>
    <div>
      <h3 style="color: var(--dust);"><span class="num" style="color:var(--ember);">18.2</span> Duration</h3>
      <div class="data-readout" style="border-color: rgba(245,241,232,0.18);"><span style="color:var(--stone);">MICRO</span><span style="color:var(--bone);">120 MS</span></div>
      <div class="data-readout" style="border-color: rgba(245,241,232,0.18);"><span style="color:var(--stone);">STANDARD</span><span style="color:var(--bone);">240 MS</span></div>
      <div class="data-readout" style="border-color: rgba(245,241,232,0.18);"><span style="color:var(--stone);">LARGE</span><span style="color:var(--bone);">480 MS</span></div>
      <div class="data-readout" style="border-color: rgba(245,241,232,0.18);"><span style="color:var(--stone);">SIGNATURE</span><span style="color:var(--bone);">900 – 1600 MS</span></div>
    </div>
    <div>
      <h3 style="color: var(--dust);"><span class="num" style="color:var(--ember);">18.3</span> Forbidden</h3>
      <p style="color:var(--dust); font-size:13px; line-height:1.55; margin-top:14px;">No bounce. No spring. No parallax-on-scroll. No floating cards. No "magic" easing presets. No hover scale-ups. No gradient sweeps that aren't a stroke-on. Anything not on this page is not allowed.</p>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 18 — WEB COMPONENTS
// ─────────────────────────────────────────────────────────────────────
reg('components', 'Web Components');
add(`
<section id="components" class="page">
  <span class="page-num">PG <span>19</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">19 / Application</span>Web<br/>Components</div>
    <div>
      <h2>Built like<br/>the slicks.</h2>
      <p class="lede">The Powerus web inherits the slick layout language: oversized display, hairline structure, monospace metadata, restrained motion. These are the canonical building blocks.</p>
    </div>
  </div>

  <div class="comp-grid">
    <div class="comp-tile">
      <h4>18.1 / Buttons</h4>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <button class="web-button">Request brief <span class="arrow">→</span></button>
        <button class="web-button ghost">Read the spec <span class="arrow">→</span></button>
        <button class="web-button ember">Live demo <span class="arrow">→</span></button>
      </div>
      <p style="margin-top:18px; color:var(--graphite); font-size:14px;">Char primary, char ghost, ember reserved for one CTA per page. Mono labels, +0.22em tracked.</p>
    </div>

    <div class="comp-tile">
      <h4>18.2 / Certification chips</h4>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <span class="chip"><img class="cert-icon" src="assets/cert/us-flag.png" alt=""/>US Manufactured</span>
        <span class="chip"><img class="cert-icon" src="assets/cert/ndaa.png" alt=""/>NDAA-Compliant</span>
        <span class="chip"><img class="cert-icon" src="assets/cert/blue-uas.png" alt=""/>Blue UAS</span>
      </div>
      <p style="margin-top:18px; color:var(--graphite); font-size:14px;">Hairline border, mono caps, +0.18em tracked. Ember reserved for active certifications.</p>
    </div>

    <div class="comp-tile">
      <h4>18.3 / Stat readout</h4>
      <div class="stat-row">
        <div class="stat-cell"><span class="k">Cruise speed</span><span class="v">160 km/h</span></div>
        <div class="stat-cell"><span class="k">Range</span><span class="v">15 km</span></div>
        <div class="stat-cell"><span class="k">Burst speed</span><span class="v">340 km/h</span></div>
        <div class="stat-cell"><span class="k">Endurance</span><span class="v">28 min</span></div>
      </div>
    </div>

    <div class="comp-tile">
      <h4>18.4 / Telemetry list</h4>
      <div class="data-readout"><span>System</span><span>MATRIX-12</span></div>
      <div class="data-readout"><span>Status</span><span style="color:var(--ember)">● LIVE · ON STATION</span></div>
      <div class="data-readout"><span>Altitude</span><span>4,820 M</span></div>
      <div class="data-readout"><span>Heading</span><span>082°</span></div>
      <div class="data-readout"><span>Endurance</span><span>22 MIN REMAINING</span></div>
    </div>

    <div class="comp-tile" style="grid-column:1/-1;">
      <h4>18.5 / Page header pattern</h4>
      <div style="border:1px solid var(--hairline); padding:32px; background:var(--bone);">
        <div style="font-family:var(--mono); font-size:10.5px; letter-spacing:0.22em; color:var(--graphite); margin-bottom:18px;">[ MISSION SYSTEMS // TANDEM DEFENSE ]</div>
        <div style="font-size:96px; font-weight:400; letter-spacing:-0.05em; line-height:0.92;">Matrix<br/>12</div>
        <div style="display:flex; gap:10px; margin:18px 0;">
          <span class="chip"><img class="cert-icon" src="assets/cert/us-flag.png" alt=""/>US Manufactured</span>
          <span class="chip"><img class="cert-icon" src="assets/cert/ndaa.png" alt=""/>NDAA-Compliant</span>
          <span class="chip"><img class="cert-icon" src="assets/cert/blue-uas.png" alt=""/>Blue UAS Cleared</span>
        </div>
        <div style="font-size:22px; max-width:50ch; color:var(--graphite); letter-spacing:-0.01em;">A 3D-printed, foldable 12-inch system engineered for thrust-to-weight performance the field demands.</div>
      </div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 20 — DOWNLOADS / ASSET LIBRARY
// ─────────────────────────────────────────────────────────────────────
reg('downloads', 'Downloads');
add(`
<section id="downloads" class="page">
  <span class="page-num">PG <span>20</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">20 / Application</span>Asset<br/>Library<br/><span style="color:var(--stone)">Take what you need.</span></div>
    <div>
      <h2>Take it.<br/>Use it right.</h2>
      <p class="lede">Logos, icons, certifications, photography, references, and tokens — pulled directly from this document. Every file is the canonical version. If a partner or vendor needs something, send them this page; if they need more, they don't have it for a reason.</p>
    </div>
  </div>

  <div class="dl-summary">
    <div><span class="num" style="color:var(--ember)">01</span><span class="count">5</span><span class="label">Logos</span></div>
    <div><span class="num" style="color:var(--ember)">02</span><span class="count">3</span><span class="label">Icons / Mark</span></div>
    <div><span class="num" style="color:var(--ember)">03</span><span class="count">3</span><span class="label">Certifications</span></div>
    <div><span class="num" style="color:var(--ember)">04</span><span class="count">12</span><span class="label">Photography</span></div>
    <div><span class="num" style="color:var(--ember)">05</span><span class="count">3</span><span class="label">References</span></div>
    <div><span class="num" style="color:var(--ember)">06</span><span class="count">2</span><span class="label">Tokens</span></div>
  </div>

  <!-- 20.1 LOGOS -->
  <div class="dl-group">
    <div class="dl-group-head">
      <h3><span class="num" style="color:var(--ember)">20.1</span>Logos · primary lockups</h3>
      <button class="dl-grab-all" data-grab-group="logos">GRAB ALL · LOGOS</button>
    </div>
    <div class="dl-rows" data-group="logos">
      <div class="dl-row">
        <span class="idx">01</span>
        <span class="thumb"><img src="assets/logo/powerus-lockup-charcoal.png" alt=""/></span>
        <span class="name">Powerus lockup · Char<span class="file">powerus-lockup-charcoal.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1711 × 387</span><span class="wt">37 KB</span>
        <a class="dl-cta" href="assets/logo/powerus-lockup-charcoal.png" download="powerus-lockup-charcoal.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">02</span>
        <span class="thumb dark"><img src="assets/logo/powerus-lockup-bone.png" alt=""/></span>
        <span class="name">Powerus lockup · Bone<span class="file">powerus-lockup-bone.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1711 × 387</span><span class="wt">34 KB</span>
        <a class="dl-cta" href="assets/logo/powerus-lockup-bone.png" download="powerus-lockup-bone.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">03</span>
        <span class="thumb"><img src="assets/logo/icon-dark.svg" alt=""/></span>
        <span class="name">Monogram icon · Dark<span class="file">icon-dark.svg</span></span>
        <span class="fmt">SVG · vector</span><span class="dims">scalable</span><span class="wt">2.3 KB</span>
        <a class="dl-cta" href="assets/logo/icon-dark.svg" download="powerus-icon-dark.svg">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">04</span>
        <span class="thumb dark"><img src="assets/logo/icon-light.svg" alt=""/></span>
        <span class="name">Monogram icon · Light<span class="file">icon-light.svg</span></span>
        <span class="fmt">SVG · vector</span><span class="dims">scalable</span><span class="wt">2.3 KB</span>
        <a class="dl-cta" href="assets/logo/icon-light.svg" download="powerus-icon-light.svg">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">05</span>
        <span class="thumb"><img src="assets/logo/icon-mark.svg" alt=""/></span>
        <span class="name">Monogram · Stroke / Master<span class="file">icon-mark.svg</span></span>
        <span class="fmt">SVG · vector</span><span class="dims">scalable</span><span class="wt">2.3 KB</span>
        <a class="dl-cta" href="assets/logo/icon-mark.svg" download="powerus-icon-mark.svg">Download</a>
      </div>
    </div>
  </div>

  <!-- 20.2 CERTIFICATIONS -->
  <div class="dl-group">
    <div class="dl-group-head">
      <h3><span class="num" style="color:var(--ember)">20.2</span>Certification glyphs</h3>
      <button class="dl-grab-all" data-grab-group="certs">GRAB ALL · CERTS</button>
    </div>
    <div class="dl-rows" data-group="certs">
      <div class="dl-row">
        <span class="idx">01</span>
        <span class="thumb"><img src="assets/cert/us-flag.png" alt=""/></span>
        <span class="name">U.S. Manufactured<span class="file">us-flag.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">123 × 81</span><span class="wt">5 KB</span>
        <a class="dl-cta" href="assets/cert/us-flag.png" download="powerus-cert-us-flag.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">02</span>
        <span class="thumb"><img src="assets/cert/ndaa.png" alt=""/></span>
        <span class="name">NDAA Section 848<span class="file">ndaa.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">92 × 92</span><span class="wt">3 KB</span>
        <a class="dl-cta" href="assets/cert/ndaa.png" download="powerus-cert-ndaa.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">03</span>
        <span class="thumb"><img src="assets/cert/blue-uas.png" alt=""/></span>
        <span class="name">Blue UAS Cleared<span class="file">blue-uas.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">110 × 108</span><span class="wt">10 KB</span>
        <a class="dl-cta" href="assets/cert/blue-uas.png" download="powerus-cert-blue-uas.png">Download</a>
      </div>
    </div>
  </div>

  <!-- 20.3 PHOTOGRAPHY -->
  <div class="dl-group">
    <div class="dl-group-head">
      <h3><span class="num" style="color:var(--ember)">20.3</span>Photography · approved library</h3>
      <button class="dl-grab-all" data-grab-group="photos">GRAB ALL · PHOTOS</button>
    </div>
    <div class="dl-rows" data-group="photos">
      <div class="dl-row">
        <span class="idx">01</span>
        <span class="thumb photo" style="background-image:url('assets/photo/defense-hero.png')"></span>
        <span class="name">Defense · hero<span class="file">defense-hero.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1832 × 1136</span><span class="wt">1.9 MB</span>
        <a class="dl-cta" href="assets/photo/defense-hero.png" download="powerus-defense-hero.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">02</span>
        <span class="thumb photo" style="background-image:url('assets/photo/fire-hero.png')"></span>
        <span class="name">Wildfire · hero<span class="file">fire-hero.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1456 × 816</span><span class="wt">1.2 MB</span>
        <a class="dl-cta" href="assets/photo/fire-hero.png" download="powerus-fire-hero.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">03</span>
        <span class="thumb photo" style="background-image:url('assets/photo/agriculture-hero.png')"></span>
        <span class="name">Agriculture · hero<span class="file">agriculture-hero.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1456 × 816</span><span class="wt">1.8 MB</span>
        <a class="dl-cta" href="assets/photo/agriculture-hero.png" download="powerus-agriculture-hero.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">04</span>
        <span class="thumb photo" style="background-image:url('assets/photo/logistics-hero.jpg')"></span>
        <span class="name">Logistics · hero<span class="file">logistics-hero.jpg</span></span>
        <span class="fmt">JPG · RGB</span><span class="dims">913 × 648</span><span class="wt">137 KB</span>
        <a class="dl-cta" href="assets/photo/logistics-hero.jpg" download="powerus-logistics-hero.jpg">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">05</span>
        <span class="thumb photo" style="background-image:url('assets/photo/search-rescue-hero.png')"></span>
        <span class="name">Search &amp; rescue · hero<span class="file">search-rescue-hero.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1456 × 816</span><span class="wt">1.4 MB</span>
        <a class="dl-cta" href="assets/photo/search-rescue-hero.png" download="powerus-search-rescue-hero.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">06</span>
        <span class="thumb photo" style="background-image:url('assets/photo/guardian-hero.png')"></span>
        <span class="name">Guardian-1 · platform<span class="file">guardian-hero.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1190 × 933</span><span class="wt">1.2 MB</span>
        <a class="dl-cta" href="assets/photo/guardian-hero.png" download="powerus-guardian-hero.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">07</span>
        <span class="thumb photo" style="background-image:url('assets/photo/xfold-spy.png')"></span>
        <span class="name">xFold Spy · platform<span class="file">xfold-spy.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1279 × 857</span><span class="wt">1.0 MB</span>
        <a class="dl-cta" href="assets/photo/xfold-spy.png" download="powerus-xfold-spy.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">08</span>
        <span class="thumb photo" style="background-image:url('assets/photo/kaizen-drone.png')"></span>
        <span class="name">Kaizen-HL · platform<span class="file">kaizen-drone.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1161 × 1080</span><span class="wt">1.1 MB</span>
        <a class="dl-cta" href="assets/photo/kaizen-drone.png" download="powerus-kaizen-drone.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">09</span>
        <span class="thumb photo" style="background-image:url('assets/photo/fpv-desert.png')"></span>
        <span class="name">FPV · desert / kinetic<span class="file">fpv-desert.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">946 × 971</span><span class="wt">1.3 MB</span>
        <a class="dl-cta" href="assets/photo/fpv-desert.png" download="powerus-fpv-desert.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">10</span>
        <span class="thumb photo" style="background-image:url('assets/photo/fpv-platforms.jpg')"></span>
        <span class="name">FPV · platform array<span class="file">fpv-platforms.jpg</span></span>
        <span class="fmt">JPG · RGB</span><span class="dims">1392 × 768</span><span class="wt">175 KB</span>
        <a class="dl-cta" href="assets/photo/fpv-platforms.jpg" download="powerus-fpv-platforms.jpg">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">11</span>
        <span class="thumb photo" style="background-image:url('assets/photo/tactical-fpv.jpg')"></span>
        <span class="name">Tactical · FPV in context<span class="file">tactical-fpv.jpg</span></span>
        <span class="fmt">JPG · RGB</span><span class="dims">6230 × 4209</span><span class="wt">1.4 MB</span>
        <a class="dl-cta" href="assets/photo/tactical-fpv.jpg" download="powerus-tactical-fpv.jpg">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">12</span>
        <span class="thumb photo" style="background-image:url('assets/photo/heavy-lift.jpg')"></span>
        <span class="name">Heavy lift · sling<span class="file">heavy-lift.jpg</span></span>
        <span class="fmt">JPG · RGB</span><span class="dims">1920 × 1080</span><span class="wt">611 KB</span>
        <a class="dl-cta" href="assets/photo/heavy-lift.jpg" download="powerus-heavy-lift.jpg">Download</a>
      </div>
    </div>
  </div>

  <!-- 20.4 REFS -->
  <div class="dl-group">
    <div class="dl-group-head">
      <h3><span class="num" style="color:var(--ember)">20.4</span>Reference slicks</h3>
      <button class="dl-grab-all" data-grab-group="refs">GRAB ALL · REFS</button>
    </div>
    <div class="dl-rows" data-group="refs">
      <div class="dl-row">
        <span class="idx">01</span>
        <span class="thumb photo" style="background-image:url('assets/refs/slick-matrix-12.png'); background-size:contain; background-repeat:no-repeat;"></span>
        <span class="name">Slick · Matrix-12<span class="file">slick-matrix-12.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1518 × 2149</span><span class="wt">922 KB</span>
        <a class="dl-cta" href="assets/refs/slick-matrix-12.png" download="powerus-slick-matrix-12.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">02</span>
        <span class="thumb photo" style="background-image:url('assets/refs/slick-guardian.png'); background-size:contain; background-repeat:no-repeat;"></span>
        <span class="name">Slick · Guardian-1<span class="file">slick-guardian.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1518 × 2149</span><span class="wt">1.4 MB</span>
        <a class="dl-cta" href="assets/refs/slick-guardian.png" download="powerus-slick-guardian.png">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">03</span>
        <span class="thumb photo" style="background-image:url('assets/refs/slick-xfold.png'); background-size:contain; background-repeat:no-repeat;"></span>
        <span class="name">Slick · xFold Spy<span class="file">slick-xfold.png</span></span>
        <span class="fmt">PNG · RGB</span><span class="dims">1518 × 2149</span><span class="wt">1.2 MB</span>
        <a class="dl-cta" href="assets/refs/slick-xfold.png" download="powerus-slick-xfold.png">Download</a>
      </div>
    </div>
  </div>

  <!-- 20.5 TOKENS -->
  <div class="dl-group">
    <div class="dl-group-head">
      <h3><span class="num" style="color:var(--ember)">20.5</span>Tokens · color &amp; type</h3>
      <span class="mono mono-sm" style="color:var(--stone);">GENERATED ON DEMAND</span>
    </div>
    <div class="dl-rows" data-group="tokens">
      <div class="dl-row">
        <span class="idx">01</span>
        <span class="thumb" style="background:linear-gradient(180deg,#F5F1E8 0 25%,#161616 25% 50%,#3A3A38 50% 75%,#FF6200 75% 100%);"></span>
        <span class="name">Brand color tokens<span class="file">powerus-tokens.css</span></span>
        <span class="fmt">CSS · vars</span><span class="dims">8 tokens</span><span class="wt">~1 KB</span>
        <a class="dl-cta" href="#" data-gen-tokens="css" download="powerus-tokens.css">Download</a>
      </div>
      <div class="dl-row">
        <span class="idx">02</span>
        <span class="thumb"><span style="font-family:var(--sans); font-weight:300; font-size:34px; letter-spacing:-0.04em;">Aa</span></span>
        <span class="name">Type stack<span class="file">manrope + jetbrains-mono</span></span>
        <span class="fmt">External</span><span class="dims">Google Fonts</span><span class="wt">CDN</span>
        <a class="dl-cta" href="https://fonts.google.com/?selection.family=Manrope|JetBrains+Mono" target="_blank" rel="noopener" style="background:transparent;color:var(--char);">Open</a>
      </div>
    </div>
  </div>

  <div class="dl-fineprint">
    <div class="label">[ TERMS OF USE ]</div>
    <div>
      <p>These assets are released for use by Powerus team members, vetted partners, and authorized vendors only. Do not redistribute, repackage, or post on a public asset library. Lockups and the monogram are trademarks of Powerus, Inc.</p>
      <p>Modifications to color, proportion, or composition of the logo system are prohibited. See <a href="#clearspace" style="color:var(--ember); text-decoration:underline;">08 / Clear Space &amp; Misuse</a> for hard rules. Questions or exceptions: <span style="font-family:var(--mono); letter-spacing:0.16em; color:var(--char);">squid@power.us</span>.</p>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 19 — COLLATERAL & MERCH
// ─────────────────────────────────────────────────────────────────────
reg('collateral', 'Collateral');
add(`
<section id="collateral" class="page">
  <span class="page-num">PG <span>21</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">21 / Application</span>Collateral</div>
    <div>
      <h2>The brand,<br/>applied.</h2>
      <p class="lede">Sales sheets, decks, applied surfaces — every output inherits the same composition language: utility chrome at the edges, a single dominant idea in the center, and copy that earns its space.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">21.1</span> Sales sheets · canonical references</h3>
  <div class="col-2" style="margin-top:18px;">
    <div style="position:relative;">
      <div class="corner mono mono-sm" style="position:absolute; top:8px; right:8px; color:var(--stone);">REF / GUARDIAN-1</div>
      <img src="assets/refs/slick-guardian.png" alt="" style="width:100%; border:1px solid var(--hairline); display:block;"/>
    </div>
    <div style="position:relative;">
      <div class="corner mono mono-sm" style="position:absolute; top:8px; right:8px; color:var(--stone);">REF / xFOLD SPY</div>
      <img src="assets/refs/slick-xfold.png" alt="" style="width:100%; border:1px solid var(--hairline); display:block;"/>
    </div>
  </div>

  <div class="hairline" style="margin-top:64px; padding-top:24px;">
    <div class="col-2 colophon">
      <div>
        <div class="mono">[ COLOPHON ]</div>
        <p style="margin-top:12px;">Powerus Brand Operating System V2.0. Issued July 2026 by the Powerus Brand Office. Set in Manrope and JetBrains Mono. This document is internal and is updated quarterly. Questions, exceptions, and revision requests: <span style="font-family:var(--mono); letter-spacing:0.16em;">squid@power.us</span>.</p>
      </div>
      <div style="text-align:right;">
        <div class="mono">END / BBL_001</div>
        <div style="font-size:22px; font-weight: 400; letter-spacing:-0.02em; line-height:1.2; margin-top:12px; color: var(--char);">Powering the future<br/>of autonomy.</div>
      </div>
    </div>
  </div>
</section>
`);

// Render TOC at the end
window.renderTOC();
