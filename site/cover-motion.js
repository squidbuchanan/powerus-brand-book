/* ─────────────────────────────────────────────────────────────────
   Cover — reveal (runs after the hero intro, see hero-intro.js)
   • Mono scramble on the eyebrow, reference line and stat row
   • Redaction-bar wipe on the three headline lines (line 3 stutters)
   • Ember tracking rule sweeps the headline; brackets + TARGET · LOCKED
     lock on, hold, then clear (the resting hero has no lock marks)
   window.__playCover(delayMs) replays it (used by intro skip/replay).
   Start is offset by window.__coverDelay so it lands as the intro
   shutters open.
   ───────────────────────────────────────────────────────────────── */
(function () {
  const cover = document.getElementById('cover');
  if (!cover) return;

  const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*';
  const randGlyph = () => POOL[(Math.random() * POOL.length) | 0];
  const FROZEN = new Set([' ', '/', '[', ']', '·', '.', ',', '(', ')', '-', '_', ':', '@', ' ']);

  const topEyebrow = cover.querySelector('.top-block .mono.mono-md');
  const refLine = topEyebrow ? topEyebrow.nextElementSibling : null;
  const statVals = [...cover.querySelectorAll('.bottom .stat-v')];
  const headline = cover.querySelector('.word[data-headline]');
  const targets = [topEyebrow, refLine, ...statVals].filter(Boolean);
  targets.forEach(el => { el.dataset.final = el.textContent; });

  // Ember tracking rule across the headline
  let fx = null;
  if (headline) {
    fx = document.createElement('div');
    fx.className = 'cover-fx';
    fx.setAttribute('aria-hidden', 'true');
    fx.innerHTML = '<span class="rule"></span><i></i><i></i><i></i><i></i><span class="tag">TARGET · LOCKED</span>';
    headline.appendChild(fx);
  }

  let timers = [];
  const at = (ms, fn) => timers.push(setTimeout(fn, ms));

  function scramble(el, delay, scrambleMs, lockStep) {
    const chars = [...el.dataset.final];
    el.textContent = chars.map(c => FROZEN.has(c) ? c : randGlyph()).join('');
    at(delay, () => {
      const start = performance.now();
      const lockedAt = chars.map((c, i) => FROZEN.has(c) ? 0 : scrambleMs + i * lockStep);
      const tick = (now) => {
        const t = now - start;
        let all = true;
        el.textContent = chars.map((c, i) => {
          if (FROZEN.has(c) || t >= lockedAt[i]) return c;
          all = false; return randGlyph();
        }).join('');
        if (!all) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function reset() {
    timers.forEach(clearTimeout); timers = [];
    if (headline) {
      headline.classList.remove('wipe-1', 'wipe-2', 'em-on', 'fx-on', 'fx-lock', 'fx-clear');
      const l3 = headline.querySelector('.line:nth-child(5) .redact');
      if (l3) { l3.style.transition = 'none'; l3.style.transform = 'scaleX(1)'; }
      headline.querySelectorAll('.line .redact').forEach(r => { r.style.transition = 'none'; });
      void headline.offsetWidth;
      headline.querySelectorAll('.line:not(:nth-child(5)) .redact').forEach(r => { r.style.transition = ''; });
    }
    cover.classList.remove('cover-in');
  }

  function play(D) {
    reset();
    targets.forEach(el => { el.textContent = el.dataset.final; });
    // Hold content hidden until the intro opens, then cascade in
    cover.classList.add('cover-pre');
    at(D, () => { cover.classList.remove('cover-pre'); cover.classList.add('cover-in'); });

    if (topEyebrow) scramble(topEyebrow, D + 40, 380, 22);
    if (refLine)    scramble(refLine,    D + 160, 340, 18);
    statVals.forEach((el, i) => scramble(el, D + 380 + i * 130, 360, 24));

    if (!headline) return;
    // Ember rule sweeps across the headline
    at(D + 120, () => headline.classList.add('fx-on'));
    // Redaction bars retract
    at(D + 520, () => headline.classList.add('wipe-1', 'wipe-2'));
    const l3 = headline.querySelector('.line:nth-child(5) .redact');
    if (l3) {
      at(D + 520, () => { l3.style.transition = 'transform 140ms steps(2, end)'; l3.style.transform = 'scaleX(0.30)'; });
      at(D + 760, () => { l3.style.transition = 'transform 70ms steps(1, end)'; l3.style.transform = 'scaleX(0)'; });
    }
    at(D + 900, () => headline.classList.add('em-on', 'fx-lock'));
    // Lock holds, then clears so the hero rests clean
    at(D + 2300, () => headline.classList.add('fx-clear'));
  }

  // Replay control — for presenting
  const rp = document.createElement('button');
  rp.type = 'button';
  rp.className = 'cover-replay';
  rp.innerHTML = '<span>↻</span> Replay intro';
  rp.addEventListener('click', () => {
    if (window.__replayIntro) window.__replayIntro(); else play(0);
  });
  cover.appendChild(rp);

  window.__playCover = play;
  // Hold the cover until the intro has really started on screen.
  if (window.__introReady) {
    cover.classList.add('cover-pre');
    window.__introReady.then(() => play(window.__coverDelay || 0));
  } else {
    play(window.__coverDelay || 0);
  }
})();
