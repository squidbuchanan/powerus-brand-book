/* ─────────────────────────────────────────────────────────────────────
   sections-4.js — Powerus Brand Bible
   VIDEO LIBRARY — every film from the @powerususa channel as a browsable
   thumbnail grid. Clicking a tile loads it into the hero player.

   Runs AFTER sections-3.js and BEFORE reorder-motion.js (source of truth
   for numbering, TOC groups, index page). This file only injects the
   section after #video-templates and registers it in the Video group.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  const anchor = document.getElementById('video-templates');
  if (!anchor) return;

  // Channel uploads — newest first (order as provided).
  const IDS = [
    'osVV2p108zw','5mIdHMzPJN8','i6nACp2rXww','9yShmYBYfCk','LyQGdUzjSAo',
    'ukxmAZU2j0U','Hyo2QIa0nuo','d0WQVYaItL4','58L50CaV6x8','qo6L8UqAwRo',
    'nkhC0ekprRA','kiTVNzD-V6Q','NVYDs-wj9eA','8EZnjTvVYbY','4FryRDvylBk',
    'a2cEeRpGX3I','-O093lsk7tQ','CnanBU9x8x8','cXjlfyvrZvo','Avi7Tnr7x7I',
    '5r3lO88vVcg','N3rtFT6HfLc','5WVsElg9vWo','f4elBYFJ7o0','l4DrHSST4Os',
    'j_W54Xz5vJE'
  ];
  const total = String(IDS.length).padStart(2, '0');

  const embed = (id, auto) =>
    `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${auto ? '&autoplay=1' : ''}`;

  const tiles = IDS.map((id, i) => `
        <button class="vl-tile" type="button" data-id="${id}" aria-label="Play film ${String(i + 1).padStart(2, '0')}">
          <img loading="lazy" src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="Powerus film ${String(i + 1).padStart(2, '0')}" />
          <span class="vl-idx">${String(i + 1).padStart(2, '0')}</span>
          <span class="vl-play" aria-hidden="true"></span>
        </button>`).join('');

  const wrap = document.createElement('div');
  wrap.innerHTML = `
<section id="video-library" class="page dark">
  <span class="page-num">PG <span>21</span><span class="of">/</span>23</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--bone)">21 / Video</span>Video<br/>Library</div>
    <div>
      <h2 style="color:var(--bone);">Every film,<br/>one archive.</h2>
      <p class="lede" style="color:var(--dust);">The complete Powerus channel — ${total} films. Field documentary, product demonstrations, and mission footage from @powerususa. Select a frame below; it plays in the deck above. Newest first.</p>
    </div>
  </div>

  <div class="vl-grid">
    <div class="vl-stage">
      <div class="vl-frame">
        <iframe id="vl-player"
          src="${embed(IDS[0], false)}"
          title="Powerus — video library"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
        <span class="vl-coord">NOW PLAYING</span>
        <span class="vl-tag" id="vl-nowtag">FILM 01 / ${total}</span>
      </div>
      <div class="vl-caption">
        <span class="live-tag"><span class="live-dot"></span>Channel archive · ${total} films</span>
        <a class="vl-src-link" href="https://www.youtube.com/channel/UCa9U4xij0snrB9b1kpgRhgg" target="_blank" rel="noopener">Source // youtube.com/@powerususa <span class="arrow">&rarr;</span></a>
      </div>
    </div>
  </div>

  <div class="vl-tiles" id="vl-tiles">${tiles}
  </div>

  <div class="vl-note">
    <div>
      <div class="n-tag">21.1 / SOURCE</div>
      <p>Every tile links to a published film on @powerususa. Thumbnails are served live from YouTube — nothing is mirrored or re-hosted. When the channel updates, add the new IDs to keep this archive current.</p>
    </div>
    <div>
      <div class="n-tag">21.2 / USAGE</div>
      <p>Embed this archive on owned surfaces only. Do not clip, re-caption, or re-upload channel footage. Link back to the source channel for full context and current publish dates.</p>
    </div>
    <div>
      <div class="n-tag">21.3 / PLAYBACK</div>
      <p>One player, ${total} sources. Selecting a frame loads it in place — no autoplay until the operator chooses. Reduced-motion and data-saver settings are respected by the player.</p>
    </div>
  </div>
</section>
  `.trim();

  const section = wrap.firstElementChild;
  anchor.parentNode.insertBefore(section, anchor.nextElementSibling);

  // Wire tile → hero player
  const player = section.querySelector('#vl-player');
  const nowTag = section.querySelector('#vl-nowtag');
  const tileEls = [...section.querySelectorAll('.vl-tile')];
  tileEls[0]?.classList.add('active');
  tileEls.forEach((tile, i) => {
    tile.addEventListener('click', () => {
      const id = tile.getAttribute('data-id');
      player.src = embed(id, true);
      nowTag.textContent = `FILM ${String(i + 1).padStart(2, '0')} / ${total}`;
      tileEls.forEach(t => t.classList.remove('active'));
      tile.classList.add('active');
    });
  });

  // Register so reorder-motion.js can slot it into the Video group.
  if (typeof reg === 'function') reg('video-library', 'Video Library');
})();
