/* ─────────────────────────────────────────────────────────────────────
   hero-intro.js — Powerus Brand Bible
   Load sequence: "system acquire". A char field boots, a reticle
   locks, the monogram draws itself, telemetry resolves, and the
   field splits open onto the cover, which then runs its own headline
   reveal (cover-motion.js, offset by window.__coverDelay).

   Timeline (ms)
     0     field + grid on, HUD corners draw, reticle ring spins up
     250   monogram stroke-draw (1100ms, linear)
     300   boot log lines resolve, one every 190ms
     1350  monogram fill snaps in · reticle collapses to LOCK
     1650  ember scan sweeps the field
     1950  shutters split · mark punches through
     2400  overlay gone · cover headline reveal begins

   Click, any key, or the SKIP control ends it early.
   prefers-reduced-motion → no intro, cover shows at rest.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const OPEN_AT = 1950;      // shutters start
  const DONE_AT = 2400;      // overlay removed

  const COVER_AT = DONE_AT - 150;  // cover reveal starts as the shutters clear
  window.__coverDelay = REDUCED ? 0 : COVER_AT;
  if (REDUCED) return;

  const MARK = 'M175.598 12.5583C180.727 -4.04538 204.304 -4.23473 209.677 12.2868L212.135 19.4851C214.127 25.0427 216.309 30.5121 218.671 35.8864L219.07 35.6931C304.081 -9.22008 398.033 81.0899 354.432 166.905L353.584 168.701C359.931 171.367 366.406 173.783 372.997 175.931C388.732 181.06 389.713 202.46 375.941 209.618L372.997 210.863C366.385 213.018 359.889 215.44 353.522 218.117C353.825 218.774 354.141 219.426 354.47 220.074C398.034 305.815 308.539 397.507 222.813 358.058L218.726 356.088C218.103 355.77 217.475 355.465 216.843 355.171C214.201 361.493 211.808 367.943 209.677 374.508L208.462 377.402C201.429 390.94 180.407 389.805 175.598 374.237C173.542 367.582 171.216 361.045 168.633 354.64C167.633 355.081 166.642 355.55 165.662 356.05L161.633 358.001C78.5601 396.184 -6.67286 307.173 32.7064 224.417L34.7113 220.419C35.0006 219.869 35.2786 219.314 35.5491 218.757C30.3526 216.55 25.0649 214.515 19.6917 212.662L12.4271 210.281C-4.14235 205.14 -4.14237 181.655 12.4271 176.513C20.2876 174.076 27.9776 171.253 35.4769 168.071L34.7874 166.656C-9.54255 82.4128 81.3372 -8.64825 165.413 35.7692C165.884 36.0179 166.358 36.2593 166.834 36.4939C170.145 28.7095 173.075 20.7233 175.598 12.5583ZM318.787 236C284.596 257.08 255.691 286.06 234.675 320.334C235.275 320.59 235.872 320.868 236.465 321.171C289.648 348.299 346.697 291.137 319.622 237.848C319.309 237.231 319.032 236.614 318.787 236ZM70.137 236.82C69.9012 237.452 69.6211 238.082 69.2913 238.709C41.378 291.77 97.9885 346.604 147.923 321.133C149.02 320.573 150.123 320.09 151.231 319.674C131.075 286.063 103.248 257.612 70.137 236.82ZM193.03 72.5036C166.186 123.882 124.381 166.178 73.2396 193.397C124.381 220.617 166.186 262.912 193.03 314.291C220.609 262.987 263.011 220.747 314.385 193.397C263.011 166.047 220.609 123.808 193.03 72.5036ZM319.584 149.131C345.006 99.0967 290.281 42.3738 237.325 70.3425C237.269 70.3719 237.211 70.3984 237.155 70.4255C257.948 102.986 285.944 130.557 318.828 150.821C319.051 150.252 319.301 149.688 319.584 149.131ZM147.178 70.4382C97.1065 43.9846 42.9857 98.2134 69.387 148.384C69.6658 148.914 69.9117 149.447 70.1292 149.98C101.894 130.034 128.796 103.04 148.728 71.2038C148.217 70.9683 147.7 70.714 147.178 70.4382Z';

  const LOG = [
    ['SYS // INIT', 'OK'],
    ['AIRFRAME · AUTONOMY · C2', 'LINKED'],
    ['SENSOR → EFFECTOR', 'ONLINE'],
    ['ORIGIN · ROCK HILL, SC', 'VERIFIED'],
    ['BRAND OS · V2.0', 'READY']
  ];

  // Reticle ring ticks (every 10°, long every 30°)
  const ticks = Array.from({ length: 36 }, (_, i) => {
    const a = (i * 10) * Math.PI / 180, long = i % 3 === 0;
    const r1 = 182, r2 = long ? 168 : 175;
    const p = (r) => [200 + r * Math.sin(a), 200 - r * Math.cos(a)].map(n => n.toFixed(1));
    const [x1, y1] = p(r1), [x2, y2] = p(r2);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  }).join('');

  function play() {
  const el = document.createElement('div');
  el.className = 'intro';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="intro-shutter top"></div>
    <div class="intro-shutter bot"></div>
    <div class="intro-grid"></div>

    <div class="intro-corners"><i></i><i></i><i></i><i></i></div>

    <div class="intro-hud tl">[ POWERUS // BRAND OPERATING SYSTEM ]</div>
    <div class="intro-hud tr">V2.0 · NOV 2026 · <b>POWERUS_BBL_001</b></div>
    <div class="intro-hud br">34.9249° N &nbsp; 81.0251° W<br/>ROCK HILL · SOUTH CAROLINA</div>

    <div class="intro-log">${LOG.map(([k, v]) =>
      `<div class="ln"><span class="k" data-t="${k}"></span><span class="dots"></span><span class="v" data-t="${v}"></span></div>`).join('')}
    </div>

    <div class="intro-core">
      <svg class="intro-reticle" viewBox="0 0 400 400">
        <g class="ring"><circle cx="200" cy="200" r="182" pathLength="1"/></g>
        <g class="ticks">${ticks}</g>
        <g class="cross">
          <line x1="200" y1="-40" x2="200" y2="6"/><line x1="200" y1="394" x2="200" y2="440"/>
          <line x1="-40" y1="200" x2="6" y2="200"/><line x1="394" y1="200" x2="440" y2="200"/>
        </g>
        <g class="brackets">
          <polyline points="40,90 40,40 90,40"/><polyline points="310,40 360,40 360,90"/>
          <polyline points="360,310 360,360 310,360"/><polyline points="90,360 40,360 40,310"/>
        </g>
      </svg>
      <svg class="intro-mark" viewBox="-8 -8 402 403">
        <path class="stroke" d="${MARK}" pathLength="1"/>
        <path class="fill" d="${MARK}"/>
      </svg>
      <div class="intro-lock"><span class="dot"></span><span class="txt">ACQUIRING</span></div>
    </div>

    <div class="intro-bar"><span></span><em>000%</em></div>
    <div class="intro-scan"></div>
    <button class="intro-skip" type="button" tabindex="-1">Skip <span>↵</span></button>
  `;
  document.body.appendChild(el);
  document.documentElement.classList.add('intro-on');

  // ── Text resolve (glyph scramble → lock L→R) ───────────────────────
  const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*';
  const resolve = (node, dur = 260) => {
    const target = node.dataset.t, t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const lockN = Math.floor(p * target.length);
      node.textContent = [...target].map((c, i) =>
        i < lockN || c === ' ' || c === '·' || c === '→' || c === ',' || c === '/' ? c
          : POOL[(Math.random() * POOL.length) | 0]).join('');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const timers = [];
  const at = (ms, fn) => timers.push(setTimeout(fn, ms));

  const add = (c) => el.classList.add(c);

  // ── Sequence ───────────────────────────────────────────────────────
  requestAnimationFrame(() => add('s-boot'));
  at(250, () => add('s-draw'));
  el.querySelectorAll('.intro-log .ln').forEach((ln, i) => {
    at(300 + i * 190, () => {
      ln.classList.add('on');
      resolve(ln.querySelector('.k'), 220);
      setTimeout(() => { ln.classList.add('ok'); resolve(ln.querySelector('.v'), 160); }, 150);
    });
  });
  // Progress counter, stepped
  const pct = el.querySelector('.intro-bar em');
  for (let i = 1; i <= 12; i++) at(120 + i * 105, () => { pct.textContent = String(Math.round(i / 12 * 100)).padStart(3, '0') + '%'; });
  at(1350, () => { add('s-lock'); el.querySelector('.intro-lock .txt').textContent = 'LOCK · POWERUS'; });
  at(1650, () => add('s-scan'));
  at(OPEN_AT, () => { add('s-open'); document.documentElement.classList.remove('intro-on'); });
  at(DONE_AT, finish);

  let done = false;
  function finish() {
    if (done) return; done = true;
    timers.forEach(clearTimeout);
    document.documentElement.classList.remove('intro-on');
    el.remove();
    window.removeEventListener('keydown', skip, true);
  }
  // Skip: jump straight to the open, then let the cover reveal run now.
  function skip(e) {
    if (done || el.classList.contains('s-open')) return;
    if (e && e.type === 'keydown' && ['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;
    timers.forEach(clearTimeout);
    add('s-draw'); add('s-lock'); add('s-open');
    document.documentElement.classList.remove('intro-on');
    if (window.__playCover) window.__playCover(250);
    setTimeout(finish, 450);
  }
  el.addEventListener('click', skip);
  window.addEventListener('keydown', skip, true);

  }

  play();

  // ── Replay (for presenting) ────────────────────────────────────────
  window.__replayIntro = () => {
    if (document.querySelector('.intro')) return;
    window.scrollTo(0, 0);
    play();
    if (window.__playCover) window.__playCover(COVER_AT);
  };
})();
