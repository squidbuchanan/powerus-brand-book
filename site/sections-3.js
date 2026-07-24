/* ─────────────────────────────────────────────────────────────────────
   sections-3.js  —  Powerus Brand Bible
   Inserts the new MOTION GRAPHICS chapter (page 19) immediately after
   the Motion Principles section. Four product-page radar/HUD modules
   rebuilt in the Powerus visual vocabulary: terminal-green sensors,
   ember-orange kinetic, mono labels.

   This file mutates the registry that sections.js / sections-2.js own:
   - reg() prepends the new section into __BBL_TOC at the right index
     so the TOC group ranges still hold.
   - All later page-num spans (Web Components, Asset Library, Collateral)
     are renumbered live in the DOM, and the "/21" totals bumped to "/22".
   ───────────────────────────────────────────────────────────────────── */
(function () {
  // ── Inject the chapter HTML right after #motion ──────────────────────
  const motionEl = document.getElementById('motion');
  if (!motionEl) return;

  const wrap = document.createElement('div');
  wrap.innerHTML = `
<section id="motion-graphics" class="page dark">
  <span class="page-num">PG <span>19</span><span class="of">/</span>22</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--bone)">19 / Motion</span>Motion<br/>Graphics<br/><span style="color:var(--stone)">Radar &amp; HUD modules.</span></div>
    <div>
      <h2 style="color:var(--bone);">Instruments,<br/>not animations.</h2>
      <p class="lede" style="color:var(--dust);">A motion-graphics library built for the Guardian-1 Interceptor product page. Four radar/HUD modules, each tied to a specific stage of engagement: track, sweep, lock, swarm. They share one rule: every pixel is on screen because something is being measured. None of them are decorative. None of them push, parallax, or breathe.</p>
    </div>
  </div>

  <!-- ── 19.1 — TRAJECTORY TRACK ─────────────────────────────────── -->
  <div class="mg-block">
    <div class="mg-head">
      <span class="mg-num">19.1</span>
      <span class="mg-tag">G-1 · IN SERVICE</span>
      <span class="mg-name">Trajectory Track</span>
      <span class="mg-meta">7.2s loop · ember kinetic on charcoal</span>
    </div>
    <div class="mg-frame">
      <div class="mg-grid"></div>
      <svg class="mg-radar mg-trajectory" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice">
        <!-- horizon line -->
        <line x1="0" y1="220" x2="800" y2="220" stroke="rgba(245,241,232,0.10)" stroke-width="1"/>
        <!-- ground tick marks -->
        <g stroke="rgba(245,241,232,0.10)" stroke-width="1">
          <line x1="100" y1="216" x2="100" y2="224"/>
          <line x1="240" y1="216" x2="240" y2="224"/>
          <line x1="380" y1="216" x2="380" y2="224"/>
          <line x1="520" y1="216" x2="520" y2="224"/>
          <line x1="660" y1="216" x2="660" y2="224"/>
        </g>
        <!-- trajectory path (drawn-on) -->
        <path class="traj-path" d="M 80 220 Q 280 60 460 110 Q 600 145 720 145"
              stroke="#FF6200" stroke-width="1.5" fill="none"
              stroke-dasharray="3 4" pathLength="1"/>
        <!-- target marker -->
        <g class="traj-target" transform="translate(720 145)">
          <circle r="14" fill="none" stroke="#FF6200" stroke-width="1.2"/>
          <line x1="-22" y1="0" x2="-16" y2="0" stroke="#FF6200" stroke-width="1.2"/>
          <line x1="22"  y1="0" x2="16"  y2="0" stroke="#FF6200" stroke-width="1.2"/>
          <line x1="0" y1="-22" x2="0" y2="-16" stroke="#FF6200" stroke-width="1.2"/>
          <line x1="0" y1="22"  x2="0" y2="16"  stroke="#FF6200" stroke-width="1.2"/>
        </g>
        <!-- launch label -->
        <text x="80" y="240" fill="rgba(245,241,232,0.55)" font-family="ui-monospace, Menlo, monospace" font-size="9" letter-spacing="0.18em">LAUNCH</text>
        <text x="700" y="240" fill="rgba(245,241,232,0.55)" font-family="ui-monospace, Menlo, monospace" font-size="9" letter-spacing="0.18em">TARGET</text>
        <!-- interceptor sprite (drone shape) -->
        <g class="traj-sprite" fill="#FF6200">
          <polygon points="0,-6 7,5 0,2 -7,5"/>
        </g>
      </svg>
      <div class="mg-labels">
        <span>AIRCRAFT</span><span>WAYPOINT</span><span>ENGAGE</span><span>LASER TERMINAL</span>
      </div>
      <div class="mg-stamp">G-1 · MANUAL FLIGHT + AI GUIDANCE · 7K · 83% EFFICACY</div>
    </div>
  </div>

  <!-- ── 19.2 — PPI SWEEP ────────────────────────────────────────── -->
  <div class="mg-block">
    <div class="mg-head">
      <span class="mg-num">19.2</span>
      <span class="mg-tag">G-2 · SEMI-AUTO</span>
      <span class="mg-name">PPI Radar Sweep</span>
      <span class="mg-meta">4s rotation · phosphor-green sensor · ember-orange threats</span>
    </div>
    <div class="mg-frame">
      <div class="mg-ppi-wrap">
        <svg class="mg-ppi" viewBox="0 0 220 220">
          <defs>
            <radialGradient id="sweep-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stop-color="rgba(74,176,118,0.55)"/>
              <stop offset="100%" stop-color="rgba(74,176,118,0)"/>
            </radialGradient>
            <clipPath id="sweep-clip"><circle cx="110" cy="110" r="100"/></clipPath>
          </defs>
          <!-- range rings -->
          <g fill="none" stroke="rgba(74,176,118,0.22)" stroke-width="0.6">
            <circle cx="110" cy="110" r="100"/>
            <circle cx="110" cy="110" r="75"/>
            <circle cx="110" cy="110" r="50"/>
            <circle cx="110" cy="110" r="25"/>
          </g>
          <!-- crosshair -->
          <g stroke="rgba(74,176,118,0.22)" stroke-width="0.6">
            <line x1="10" y1="110" x2="210" y2="110"/>
            <line x1="110" y1="10" x2="110" y2="210"/>
          </g>
          <!-- sweep wedge -->
          <g clip-path="url(#sweep-clip)">
            <g class="ppi-sweep" style="transform-origin: 110px 110px;">
              <path d="M 110 110 L 110 0 A 110 110 0 0 1 210 110 Z" fill="url(#sweep-grad)" opacity="0.9"/>
              <line x1="110" y1="110" x2="110" y2="0" stroke="#4AB076" stroke-width="1.2"/>
            </g>
          </g>
          <!-- threat blips (each fades in on sweep pass) -->
          <g fill="#FF6200">
            <circle class="blip blip-1" cx="155" cy="78"  r="2.5"/>
            <circle class="blip blip-2" cx="68"  cy="148" r="2.5"/>
            <circle class="blip blip-3" cx="148" cy="155" r="2.5"/>
            <circle class="blip blip-4" cx="80"  cy="62"  r="2.5"/>
          </g>
          <!-- center dot -->
          <circle cx="110" cy="110" r="2" fill="#4AB076"/>
        </svg>
        <div class="mg-ppi-data">
          <div class="ppi-line"><span>TRACKING</span><span>04</span></div>
          <div class="ppi-line"><span>SWEEP</span><span>0.25 HZ</span></div>
          <div class="ppi-line"><span>RANGE</span><span>15 KM</span></div>
          <div class="ppi-line ember"><span>BRG 048</span><span>R 9.2K</span></div>
          <div class="ppi-line ember"><span>BRG 217</span><span>R 6.1K</span></div>
          <div class="ppi-line ember"><span>BRG 142</span><span>R 11.4K</span></div>
          <div class="ppi-line ember"><span>BRG 318</span><span>R 4.8K</span></div>
        </div>
      </div>
      <div class="mg-labels">
        <span>SCAN 360°</span><span>THREAT FILTER · ROTORY UAS</span><span>AUTO CLASSIFY</span>
      </div>
      <div class="mg-stamp">G-2 · AUTO LAUNCH + HUMAN TERMINAL AUTH · 8K · JETSON ORIN NANO</div>
    </div>
  </div>

  <!-- ── 19.3 — CV LOCK RETICLE ──────────────────────────────────── -->
  <div class="mg-block">
    <div class="mg-head">
      <span class="mg-num">19.3</span>
      <span class="mg-tag">G-3 · AUTONOMOUS</span>
      <span class="mg-name">CV Lock Reticle</span>
      <span class="mg-meta">3.2s loop · acquire → close → lock → release</span>
    </div>
    <div class="mg-frame">
      <svg class="mg-radar mg-lock" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice">
        <!-- horizon mountains -->
        <path d="M 0 230 L 90 200 L 170 215 L 250 195 L 340 220 L 430 198 L 520 218 L 610 200 L 700 222 L 800 205 L 800 280 L 0 280 Z"
              fill="rgba(245,241,232,0.04)" stroke="rgba(74,176,118,0.18)" stroke-width="1"/>
        <!-- baseline -->
        <line x1="0" y1="230" x2="800" y2="230" stroke="rgba(74,176,118,0.18)" stroke-width="0.8"/>
        <!-- target drone (orange) -->
        <g class="lock-target" transform="translate(440 145)">
          <polygon points="0,-9 11,7 0,4 -11,7" fill="#FF6200"/>
          <line x1="0" y1="-9" x2="0" y2="4" stroke="#FF6200" stroke-width="0.8"/>
        </g>
        <!-- reticle (green) -->
        <g class="lock-reticle" transform="translate(440 145)">
          <!-- corner brackets -->
          <g class="lock-brackets" stroke="#4AB076" stroke-width="1.4" fill="none" stroke-linecap="square">
            <polyline points="-30,-22 -30,-30 -22,-30"/>
            <polyline points="22,-30 30,-30 30,-22"/>
            <polyline points="30,22 30,30 22,30"/>
            <polyline points="-22,30 -30,30 -30,22"/>
          </g>
          <!-- inner crosshair -->
          <g stroke="#4AB076" stroke-width="0.9">
            <line x1="-14" y1="0" x2="-4" y2="0"/>
            <line x1="14"  y1="0" x2="4"  y2="0"/>
            <line x1="0" y1="-14" x2="0" y2="-4"/>
            <line x1="0" y1="14"  x2="0" y2="4"/>
          </g>
          <circle r="1.8" fill="#4AB076"/>
        </g>
        <!-- HUD readouts -->
        <g font-family="ui-monospace, Menlo, monospace" font-size="10" letter-spacing="0.2em" fill="#4AB076">
          <text x="40" y="38">TARGET CONF</text>
          <text x="160" y="38" class="lock-conf">99%</text>
          <text x="40" y="58">CLASS</text>
          <text x="160" y="58">UAS · ROTORY</text>
          <text x="700" y="38" text-anchor="end" class="lock-state">LOCK</text>
          <text x="700" y="58" text-anchor="end">RANGE 1.2K</text>
        </g>
      </svg>
      <div class="mg-labels">
        <span>AUTO TRACK</span><span>· DETECT · CLASSIFY · LOCK ·</span><span>NO OPERATOR REQUIRED</span>
      </div>
      <div class="mg-stamp">G-3 · FULLY AUTONOMOUS · 10K · COMPUTER VISION TERMINAL GUIDANCE</div>
    </div>
  </div>

  <!-- ── 19.4 — SWARM COORDINATION ───────────────────────────────── -->
  <div class="mg-block">
    <div class="mg-head">
      <span class="mg-num">19.4</span>
      <span class="mg-tag">G-∞ · SWARM</span>
      <span class="mg-name">Swarm Coordination Field</span>
      <span class="mg-meta">8s loop · 50 units · assignment lattice</span>
    </div>
    <div class="mg-frame">
      <svg class="mg-radar mg-swarm" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid slice">
        <!-- field grid -->
        <defs>
          <pattern id="swarm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(245,241,232,0.05)" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="800" height="280" fill="url(#swarm-grid)"/>
        <!-- assignment lattice (drawn-on lines from interceptors to threats) -->
        <g class="swarm-lattice" stroke="rgba(255,98,0,0.28)" stroke-width="0.6" fill="none" stroke-dasharray="2 3">
          <line x1="120" y1="180" x2="640" y2="80"  pathLength="1"/>
          <line x1="180" y1="220" x2="600" y2="120" pathLength="1"/>
          <line x1="240" y1="160" x2="680" y2="60"  pathLength="1"/>
          <line x1="300" y1="200" x2="540" y2="140" pathLength="1"/>
          <line x1="160" y1="120" x2="620" y2="40"  pathLength="1"/>
          <line x1="220" y1="240" x2="660" y2="160" pathLength="1"/>
          <line x1="100" y1="220" x2="580" y2="100" pathLength="1"/>
        </g>
        <!-- swarm interceptors (orange triangles, left side) -->
        <g class="swarm-units" fill="#FF6200">
          ${[
            [120,180],[180,220],[240,160],[300,200],[160,120],[220,240],[100,220],
            [280,240],[140,200],[200,160],[260,210],[80,180],[320,180],[150,250],
            [110,150],[200,110],[260,100],[180,90],[240,130],[120,90]
          ].map(([x,y],i)=>`<polygon class="su" style="--i:${i}" points="${x},${y-5} ${x+5},${y+3} ${x},${y+1} ${x-5},${y+3}"/>`).join('')}
        </g>
        <!-- threat markers (right side, red-orange) -->
        <g class="swarm-threats" fill="rgba(255,98,0,0.9)">
          <circle class="st" style="--i:0" cx="600" cy="120" r="4"/>
          <circle class="st" style="--i:1" cx="640" cy="80"  r="4"/>
          <circle class="st" style="--i:2" cx="680" cy="60"  r="4"/>
          <circle class="st" style="--i:3" cx="540" cy="140" r="4"/>
          <circle class="st" style="--i:4" cx="620" cy="40"  r="4"/>
          <circle class="st" style="--i:5" cx="660" cy="160" r="4"/>
          <circle class="st" style="--i:6" cx="580" cy="100" r="4"/>
        </g>
        <!-- HUD -->
        <g font-family="ui-monospace, Menlo, monospace" font-size="10" letter-spacing="0.2em" fill="rgba(245,241,232,0.55)">
          <text x="20" y="30">SWARM 50</text>
          <text x="20" y="48">DEPLOYED 20</text>
          <text x="780" y="30" text-anchor="end">THREATS 07</text>
          <text x="780" y="48" text-anchor="end">ASSIGNED 07</text>
        </g>
      </svg>
      <div class="mg-labels">
        <span>WAVE INCOMING</span><span>· SWARM DEPLOY · INTERCEPTOR ASSIGN ·</span><span>50 UNIT COHORT</span>
      </div>
      <div class="mg-stamp">G-∞ · MODULAR · SCALABLE · FIELD-RECONFIGURABLE · 50 × $7K &lt; $2M PATRIOT</div>
    </div>
  </div>

  <!-- ── Foot rule ────────────────────────────────────────────────── -->
  <div style="margin-top:64px; padding-top:32px; border-top:1px solid rgba(245,241,232,0.12); display:grid; grid-template-columns:repeat(4, 1fr); gap:32px;">
    <div>
      <div style="font-family:var(--mono); font-size:10px; letter-spacing:0.22em; color:var(--ember);">19.5 / RULES</div>
      <p style="color:var(--dust); font-size:13px; line-height:1.6; margin-top:14px;">Phosphor green is reserved for sensor surfaces. Ember orange is reserved for kinetic surfaces (the interceptor, the target, the threat). The two never blend — a sensor never glows orange, a kinetic asset never glows green.</p>
    </div>
    <div>
      <div style="font-family:var(--mono); font-size:10px; letter-spacing:0.22em; color:var(--ember);">19.6 / TIMING</div>
      <p style="color:var(--dust); font-size:13px; line-height:1.6; margin-top:14px;">Every loop runs at the same easing as Motion 18 — cubic-bezier(.6, .05, .2, 1). No bounce, no spring, no overshoot. The radar does not breathe. Idle frames hold. Action frames advance.</p>
    </div>
    <div>
      <div style="font-family:var(--mono); font-size:10px; letter-spacing:0.22em; color:var(--ember);">19.7 / PLACEMENT</div>
      <p style="color:var(--dust); font-size:13px; line-height:1.6; margin-top:14px;">Each module is the hero of one product variant page. They never appear stacked, never appear in carousels, never auto-cycle. One product, one motion. The motion <em>is</em> the demonstration.</p>
    </div>
    <div>
      <div style="font-family:var(--mono); font-size:10px; letter-spacing:0.22em; color:var(--ember);">19.8 / FORMATS</div>
      <p style="color:var(--dust); font-size:13px; line-height:1.6; margin-top:14px;">Ship as inline SVG with CSS animations — no canvas, no WebGL, no video. Decoded under 12&nbsp;KB each. Plays on every browser since 2019. Reduced-motion respected: idle frame holds, no animation runs.</p>
    </div>
  </div>
</section>
  `.trim();

  motionEl.parentNode.insertBefore(wrap.firstElementChild, motionEl.nextElementSibling);

  // ── Renumber later sections' page numbers + bump /21 → /22 ───────────
  document.querySelectorAll('section.page .page-num').forEach(el => {
    const txt = el.innerHTML;
    // bump every "/21" to "/22" so the totals are in sync
    el.innerHTML = txt.replace('/</span>21', '/</span>22');
  });
  const bump = (id, newPg) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const numSpan = sec.querySelector('.page-num > span');
    if (numSpan) numSpan.textContent = String(newPg).padStart(2, '0');
    // bump the section-head .num counter too (e.g. "19 / Application")
    const headNum = sec.querySelector('.section-head .num');
    if (headNum) {
      headNum.innerHTML = headNum.innerHTML.replace(/^\d+/, String(newPg));
    }
  };
  bump('components',  20);
  bump('downloads',   21);
  bump('collateral',  22);

  // Also bump any subsection numbers that hard-coded their old chapter
  // (e.g. "19.1 Logos" → "21.1 Logos", "21.1 Collateral … " → "22.1 …").
  const renumberSub = (id, oldNum, newNum) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    sec.querySelectorAll('.num, h3 .num').forEach(el => {
      el.innerHTML = el.innerHTML
        .replace(new RegExp(`^${oldNum}\\.`, 'g'), `${newNum}.`);
    });
  };
  renumberSub('components',  19, 20);
  renumberSub('downloads',   20, 21);
  renumberSub('collateral',  21, 22);

  // ── Register in TOC at the right index so groups still hold ──────────
  // The TOC was built from window.__BBL_TOC; we need to splice ours in
  // at index 17 (after Motion at 16) so the Application group still
  // starts at index 18. Then re-render.
  if (window.__BBL_TOC && window.renderTOC) {
    window.__BBL_TOC.splice(17, 0, { id: 'motion-graphics', short: 'Motion Graphics' });
    window.renderTOC();
  }
})();
