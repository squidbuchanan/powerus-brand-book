/* ─────────────────────────────────────────────────────────────────
   Cover — monospace scramble (one-shot on load)
   Targets:
     • The eyebrow tag           [ POWERUS // BRAND OPERATING SYSTEM ]
     • The "Internal Reference" line under it
     • The three .stat-v values  (Document, Version, Custodian)

   Each character cycles random glyphs from a constrained alphabet,
   then locks left→right. Spaces / punctuation pass through untouched
   so the brackets and slashes hold their shape.

   Different elements get different "settle delays" so the cover
   resolves in a deliberate cascade — top first, then the bottom row
   from left to right. Total cover settle ≈ 1.1s.
   ───────────────────────────────────────────────────────────────── */
(function () {
  const cover = document.getElementById('cover');
  if (!cover) return;

  // Glyph pool — uppercase + digits + a couple of mono symbols.
  // Skips glyphs that read as punctuation so brackets/slashes don't flicker.
  const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*';
  const POOL_LEN = POOL.length;
  function randGlyph() { return POOL[(Math.random() * POOL_LEN) | 0]; }

  // Characters we DO NOT scramble — they stay locked in place so
  // structural punctuation reads as stable from frame one.
  const FROZEN = new Set([' ', '/', '[', ']', '·', '.', ',', '(', ')', '-', '_', ':', '\u00A0']);

  /**
   * Animate one element's textContent into its target string.
   *  - delay:      ms before this element starts
   *  - scramble:   ms of free-cycling before per-char lock starts
   *  - lockStep:   ms between each char locking
   */
  function scramble(el, opts) {
    const target = (opts.text != null ? opts.text : el.textContent);
    const chars = [...target];
    const delay = opts.delay || 0;
    const scrambleMs = opts.scramble != null ? opts.scramble : 320;
    const lockStep = opts.lockStep != null ? opts.lockStep : 22;

    // Pre-fill with random glyphs so the element doesn't flash empty.
    el.textContent = chars.map(c => FROZEN.has(c) ? c : randGlyph()).join('');

    setTimeout(() => {
      const start = performance.now();
      const lockedAt = chars.map((c, i) =>
        FROZEN.has(c) ? 0 : scrambleMs + i * lockStep
      );

      function tick(now) {
        const t = now - start;
        let allLocked = true;
        const out = new Array(chars.length);
        for (let i = 0; i < chars.length; i++) {
          const c = chars[i];
          if (FROZEN.has(c)) { out[i] = c; continue; }
          if (t >= lockedAt[i]) {
            out[i] = c;
          } else {
            out[i] = randGlyph();
            allLocked = false;
          }
        }
        el.textContent = out.join('');
        if (!allLocked) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
  }

  // ─── Pick out the elements we want to animate ───────────────────
  const topEyebrow = cover.querySelector('.top-block .mono.mono-md');
  // The "Internal Reference · V2.0 · April 2026" line is the sibling
  // <div> right after the eyebrow inside the same column.
  const refLine = topEyebrow ? topEyebrow.nextElementSibling : null;
  const statVals = cover.querySelectorAll('.bottom .stat-v');

  // Cascade timing — top resolves first, then bottom row L→R.
  // Slowed ~40% from the original pass — feels more deliberate, less twitchy.
  if (topEyebrow) scramble(topEyebrow, { delay:   80, scramble: 460, lockStep: 30 });
  if (refLine)    scramble(refLine,    { delay:  300, scramble: 400, lockStep: 24 });
  statVals.forEach((el, i) => {
    scramble(el, { delay: 560 + i * 170, scramble: 440, lockStep: 32 });
  });

  // ─── Headline reveal — all three lines fire at the same instant.
  // Differences come from per-line step counts, durations,
  // and (line 3) the stutter — NOT from staggered start times.
  //
  // Slower + chunkier pass — fewer steps over longer durations so
  // each tick is a more visible jump. Less interpolated, more mechanical.
  //
  //   T+1700   all three bars begin retracting:
  //              line 1: L→R wipe   (4 steps / 220ms)
  //              line 2: L→R wipe   (6 steps / 340ms)
  //              line 3 phase A: snaps to ~70% retracted (2 steps / 140ms)
  //   T+1840   line 3 stuck-relay pause
  //   T+1940   line 3 phase B: snaps the rest off       (2 steps / 70ms)
  //   T+2120   ember period punches in
  const headline = cover.querySelector('.word[data-headline]');
  if (headline) {
    setTimeout(() => {
      headline.classList.add('wipe-1');
      headline.classList.add('wipe-2');
    }, 1700);

    // Line 3 — manual two-phase stutter (CSS can't pause a transition mid-flight)
    const line3Bar = headline.querySelector('.line:nth-child(5) .redact');
    if (line3Bar) {
      // Phase A: collapse to 30% width (70% retracted) over 140ms / 2 steps.
      setTimeout(() => {
        line3Bar.style.transition = 'transform 140ms steps(2, end)';
        line3Bar.style.transform = 'scaleX(0.30)';
      }, 1700);
      // Phase B (after a stuck-relay pause): snap the remaining 30% off in one step.
      setTimeout(() => {
        line3Bar.style.transition = 'transform 70ms steps(1, end)';
        line3Bar.style.transform = 'scaleX(0)';
      }, 1940);
    }

    setTimeout(() => headline.classList.add('em-on'),   2120);
  }
})();
