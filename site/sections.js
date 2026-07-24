/* Powerus Brand Bible — section content
   Each section is registered in order. The TOC builds from window.__BBL_TOC.
*/

const main = document.getElementById('main');
function add(html) { main.insertAdjacentHTML('beforeend', html); }
function reg(id, short) { window.registerSection({ id, short }); }

// ─────────────────────────────────────────────────────────────────────
// 00 — COVER
// ─────────────────────────────────────────────────────────────────────
reg('cover', 'Cover');
add(`
<section id="cover" class="cover page" style="border-bottom:1px solid var(--hairline);">
  <span class="page-num">PG <span>00</span><span class="of">/</span>21</span>
  <div class="top-block">
    <div>
      <div class="mono mono-md" style="margin-bottom:18px;">[ POWERUS // BRAND OPERATING SYSTEM ]</div>
      <div style="font-family:var(--sans); font-weight:600; font-size:10.5px; letter-spacing:0.22em; text-transform:uppercase; color:var(--graphite);">Internal Reference · V2.0 · July 2026</div>
    </div>
    <div style="display:flex; align-items:flex-end; gap:32px;">
      <div class="meta" style="line-height:1.9; text-align:right;">
        Authored by<br/>The Brand Office<br/>
        <span style="color:var(--stone)">For internal &amp; partner use</span>
      </div>
      <div style="width:64px;"><img src="assets/logo/icon-dark.svg" alt="" style="width:100%; display:block;"/></div>
    </div>
  </div>

  <div class="word" style="letter-spacing: -4.6px; line-height: 0.9;" data-headline>
    <span class="line"><span class="line-ink">Powering</span><span class="redact" aria-hidden="true"></span></span><br/>
    <span class="line"><span class="line-ink">the future</span><span class="redact" aria-hidden="true"></span></span><br/>
    <span class="line"><span class="line-ink">of autonomy<span class="em">.</span></span><span class="redact" aria-hidden="true"></span></span>
  </div>

  <div class="bottom">
    <div>
      <div class="stat-k">Document</div>
      <div class="stat-v">POWERUS_BBL_001</div>
    </div>
    <div>
      <div class="stat-k">Version</div>
      <div class="stat-v">2.0 · JUL 2026</div>
    </div>
    <div>
      <div class="stat-k">Custodian</div>
      <div class="stat-v">squid@power.us</div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 01 — INDEX
// ─────────────────────────────────────────────────────────────────────
reg('index', 'Index');
add(`
<section id="index" class="page">
  <span class="page-num">PG <span>01</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">01 / Index</span>Contents<br/>21 chapters</div>
    <div>
      <h2>Index.</h2>
      <p class="lede">Read in order, or jump. Every chapter resolves in one screen of structured rules and one screen of applied examples.</p>
    </div>
  </div>

  <div class="index-grid">
    <div class="grp">
      <div class="grp-title">Foundation</div>
      <div class="item"><span class="n">02</span><span class="t">Manifesto</span><span class="pg">P. 04</span></div>
      <div class="item"><span class="n">03</span><span class="t">Mission &amp; Verticals</span><span class="pg">P. 05</span></div>
      <div class="item"><span class="n">04</span><span class="t">Voice &amp; Tone</span><span class="pg">P. 06</span></div>

      <div class="grp-title" style="margin-top:32px;">Identity</div>
      <div class="item"><span class="n">05</span><span class="t">The Logo System</span><span class="pg">P. 07</span></div>
      <div class="item"><span class="n">06</span><span class="t">The Monogram</span><span class="pg">P. 08</span></div>
      <div class="item"><span class="n">07</span><span class="t">Clear Space &amp; Misuse</span><span class="pg">P. 09</span></div>

      <div class="grp-title" style="margin-top:32px;">System</div>
      <div class="item"><span class="n">08</span><span class="t">Color</span><span class="pg">P. 10</span></div>
      <div class="item"><span class="n">09</span><span class="t">Typography</span><span class="pg">P. 11</span></div>
      <div class="item"><span class="n">10</span><span class="t">Grid &amp; Layout</span><span class="pg">P. 12</span></div>
      <div class="item"><span class="n">11</span><span class="t">Iconography</span><span class="pg">P. 13</span></div>
    </div>
    <div class="grp">
      <div class="grp-title">Imagery</div>
      <div class="item"><span class="n">12</span><span class="t">Photography Principles</span><span class="pg">P. 14</span></div>
      <div class="item"><span class="n">13</span><span class="t">Photography Shot Lists</span><span class="pg">P. 15</span></div>
      <div class="item"><span class="n">14</span><span class="t">Photo Grade &amp; LUT</span><span class="pg">P. 16</span></div>
      <div class="item"><span class="n">15</span><span class="t">Video Principles</span><span class="pg">P. 17</span></div>
      <div class="item"><span class="n">16</span><span class="t">Video Templates</span><span class="pg">P. 18</span></div>
      <div class="item"><span class="n">17</span><span class="t">Motion Principles</span><span class="pg">P. 19</span></div>

      <div class="grp-title" style="margin-top:32px;">Application</div>
      <div class="item"><span class="n">18</span><span class="t">Web &amp; Component Patterns</span><span class="pg">P. 20</span></div>
      <div class="item"><span class="n">19</span><span class="t">Collateral, Sales Sheets, Merch</span><span class="pg">P. 21</span></div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 02 — MANIFESTO
// ─────────────────────────────────────────────────────────────────────
reg('manifesto', 'Manifesto');
add(`
<section id="manifesto" class="page dark">
  <span class="page-num">PG <span>02</span><span class="of">/</span>21</span>
  <div class="eyebrow"><span class="bracket">[</span> 02 / Foundation / Manifesto · The Axioms <span class="bracket">]</span></div>
  <div class="manifesto">
    Autonomy is not a product. It is a <span class="em">posture</span>.
  </div>
  <p style="color:var(--dust); max-width:60ch; margin-top:32px; font-size:15px; line-height:1.7;">Seven axioms. Strong opinions, not aspirational values. The standard the company is built to defend — quotable in a hearing, defensible in a press cycle, true today and true in fifty years. Every page that follows is downstream of these.</p>

  <div class="axiom-list">
    <div class="axiom">
      <div class="num">001</div>
      <div class="head">Sovereignty is a supply chain.</div>
      <div class="body">A platform built on someone else's silicon, someone else's firmware, or someone else's factory is not sovereign. Sovereignty is not declared. It is sourced.</div>
    </div>
    <div class="axiom">
      <div class="num">002</div>
      <div class="head">Speed is a moral act.</div>
      <div class="body">Procurement timelines have killed more allies than autonomous systems ever will. We design, ship, and iterate at the cadence of the threat — not the cadence of the contract.</div>
    </div>
    <div class="axiom">
      <div class="num">003</div>
      <div class="head">Hardware is destiny.</div>
      <div class="body">Software companies acquire hardware companies and forget how to build atoms. We are a hardware company. The atoms come first; the bits enable them.</div>
    </div>
    <div class="axiom">
      <div class="num">004</div>
      <div class="head">A human is on the loop, always.</div>
      <div class="body">Autonomy makes the operator more capable; it does not replace the operator's judgment. Lethal authority is a human decision, made by a human, accountable to a chain of command.</div>
    </div>
    <div class="axiom">
      <div class="num">005</div>
      <div class="head">If we cannot build it here, we will not build it.</div>
      <div class="body">United States manufacturing is not a marketing feature — it is the precondition. Every airframe, every serial, every revision. Assembled, tested, and signed in America.</div>
    </div>
    <div class="axiom">
      <div class="num">006</div>
      <div class="head">The field is the lab.</div>
      <div class="body">Specifications written in conference rooms become rounds-on-target in the wrong direction. Our engineers fly to the field. Doctrine is informed by dirt.</div>
    </div>
    <div class="axiom">
      <div class="num">007</div>
      <div class="head">Beauty is residue. Function is doctrine.</div>
      <div class="body">We do not design for the showroom. The aesthetic of the product is whatever falls out of solving the mission well. When we get it right, the result is beautiful — and that is the only beauty we recognize.</div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 03 — MISSION & VERTICALS
// ─────────────────────────────────────────────────────────────────────
reg('mission', 'Mission &amp; Verticals');
add(`
<section id="mission" class="page">
  <span class="page-num">PG <span>03</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">03 / Foundation</span>Mission<br/>&amp; Verticals<br/><span style="color:var(--stone)">Where we operate.</span></div>
    <div>
      <h2>The mission<br/>extends.</h2>
      <p class="lede">Defense is the spine. But autonomy compounds anywhere a human life is at stake or a critical system is at the edge of failure. The brand follows the mission, not the sector.</p>
    </div>
  </div>

  <div class="vertical-grid">
    <div class="v-card feat">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/defense-hero.png')"></div>
      <div class="body">
        <div class="name">Defense &amp; ISR.</div>
        <p class="blurb">Intelligence, surveillance, reconnaissance, strike, force protection. The work that pays for the mission and proves the platform.</p>
      </div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/fire-hero.png')"></div>
      <div class="body"><div class="name">Wildfire response.</div><p class="blurb">Autonomous detection, navigation, aerial suppression, night operations. Frontline saves, not aerial b-roll.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/agriculture-hero.png')"></div>
      <div class="body"><div class="name">Precision agriculture.</div><p class="blurb">High-payload crop spraying, field mapping, large-scale operations. Yield, water, livestock, across acreage no human can walk.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/maritime-hero.png')"></div>
      <div class="body"><div class="name">Maritime operations.</div><p class="blurb">Autonomous vessels, drone-from-vessel, fleet conversion, persistent patrol. Aligned with Navy Project 33.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/search-rescue-hero.png')"></div>
      <div class="body"><div class="name">Emergency response.</div><p class="blurb">Search &amp; rescue, disaster relief, medical delivery, medevac. When the weather closes and a human can't go in.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/logistics-hero.jpg')"></div>
      <div class="body"><div class="name">Logistics &amp; resupply.</div><p class="blurb">Heavy-lift delivery, point-to-point cargo, oil &amp; gas operations. Move what matters, where it's hardest.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/counter-uas-hero.png')"></div>
      <div class="body"><div class="name">Counter-UAS.</div><p class="blurb">Secure operations in contested environments. GPS-denied, EW-resistant, kinetic defeat of hostile UAS.</p></div>
    </div>

    <div class="v-card">
      <div class="placeholder ratio-16-9 img photo" style="background-image:url('assets/photo/training-hero.jpeg')"></div>
      <div class="body"><div class="name">Training &amp; simulation.</div><p class="blurb">High-repetition operator training, target practice, certification programs. Train on what you fly.</p></div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 04 — DIVISIONS
// ─────────────────────────────────────────────────────────────────────
reg('divisions', 'Divisions');
add(`
<section id="divisions" class="page">
  <span class="page-num">PG <span>04</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">04 / Foundation</span>Divisions<br/><span style="color:var(--stone)">How we deliver.</span></div>
    <div>
      <h2>Four divisions.<br/>One platform.</h2>
      <p class="lede">Powerus is one company speaking with one voice. Underneath that surface sits a vertically integrated operation — four divisions, four disciplines, one supply chain. Each division owns its function end-to-end. The brand is what the world sees; this is the engine that makes it true.</p>
    </div>
  </div>

  <div class="div-grid">
    <div class="div-card">
      <div class="d-num">01</div>
      <div class="d-icon">
        <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="square">
          <circle cx="28" cy="28" r="3" fill="var(--ember)" stroke="none"/>
          <path d="M 36 28 a 8 8 0 0 0 -16 0"/>
          <path d="M 42 28 a 14 14 0 0 0 -28 0"/>
          <path d="M 48 28 a 20 20 0 0 0 -40 0"/>
          <line x1="28" y1="28" x2="28" y2="50" stroke-dasharray="2 3"/>
        </svg>
      </div>
      <div class="d-name">Signal.</div>
      <div class="d-role">Sales &amp; Marketing</div>
      <p class="d-blurb">The brand-facing surface. Commercial pursuit, government engagement, partner channels, and the public-facing language of the company.</p>
      <ul class="d-deliverables">
        <li>Customer pursuit &amp; account management</li>
        <li>Brand, marketing, communications</li>
        <li>Partner &amp; channel programs</li>
        <li>Trade events &amp; press</li>
      </ul>
    </div>

    <div class="div-card">
      <div class="d-num">02</div>
      <div class="d-icon">
        <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="square">
          <rect x="8" y="8" width="32" height="32"/>
          <rect x="16" y="16" width="32" height="32"/>
          <line x1="16" y1="40" x2="40" y2="16" stroke="var(--ember)"/>
          <circle cx="40" cy="16" r="2" fill="var(--ember)" stroke="none"/>
        </svg>
      </div>
      <div class="d-name">Forge.</div>
      <div class="d-role">Research &amp; Prototyping</div>
      <p class="d-blurb">Where new airframes are designed, simulated, and proven. Platform engineering, autonomy stack, payload integration, advanced concepts.</p>
      <ul class="d-deliverables">
        <li>Airframe design &amp; flight testing</li>
        <li>Autonomy &amp; control software</li>
        <li>Payload integration</li>
        <li>Advanced concepts &amp; IRAD</li>
      </ul>
    </div>

    <div class="div-card">
      <div class="d-num">03</div>
      <div class="d-icon">
        <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="square" stroke-linejoin="miter">
          <polygon points="28,6 46,17 46,39 28,50 10,39 10,17"/>
          <polygon points="28,16 38,22 38,34 28,40 18,34 18,22"/>
          <circle cx="28" cy="28" r="3" fill="var(--ember)" stroke="none"/>
        </svg>
      </div>
      <div class="d-name">Works.</div>
      <div class="d-role">Logistics &amp; Manufacturing</div>
      <p class="d-blurb">Where airframes are built, tested, and shipped at scale. U.S.-based manufacturing, supply chain, quality, fulfillment, and aftermarket.</p>
      <ul class="d-deliverables">
        <li>Manufacturing &amp; assembly (U.S.)</li>
        <li>Supply chain &amp; sourcing</li>
        <li>Quality, test, certification</li>
        <li>Fulfillment &amp; sustainment</li>
      </ul>
    </div>

    <div class="div-card">
      <div class="d-num">04</div>
      <div class="d-icon">
        <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="square">
          <line x1="4" y1="28" x2="52" y2="28"/>
          <line x1="28" y1="4" x2="28" y2="52"/>
          <circle cx="28" cy="28" r="10"/>
          <circle cx="28" cy="28" r="3" fill="var(--ember)" stroke="none"/>
          <line x1="38" y1="18" x2="44" y2="12" stroke="var(--ember)"/>
        </svg>
      </div>
      <div class="d-name">Field.</div>
      <div class="d-role">Training &amp; Field Integration</div>
      <p class="d-blurb">Where the platform meets the operator. Operator training, on-site commissioning, field-deployable support, and after-action capture.</p>
      <ul class="d-deliverables">
        <li>Operator training &amp; certification</li>
        <li>Field commissioning &amp; integration</li>
        <li>On-mission support</li>
        <li>After-action data &amp; iteration</li>
      </ul>
    </div>
  </div>

  <div class="div-footnote">
    <span class="d-fn-tag">[ NOTE ]</span>
    <span>Divisions report to a single executive function. The brand speaks as one voice. Internal coordination follows the chain; external communication does not expose it.</span>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 04 — U.S. ORIGIN (BUILT IN AMERICA)
// ─────────────────────────────────────────────────────────────────────
reg('origin', 'U.S. Origin');
add(`
<section id="origin" class="page dark">
  <span class="page-num">PG <span>04</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--bone)">04 / Foundation</span>U.S. Origin<br/><span style="color:var(--stone)">Built here. On purpose.</span></div>
    <div>
      <h2>Built in the<br/>United States.</h2>
      <p class="lede" style="color:var(--dust)">This is not a marketing claim. It is a manufacturing posture, a supply-chain decision, and a national-security commitment. Powerus designs, manufactures, assembles, tests, and supports every airframe inside the United States. Every unit. Every variant. Every serial.</p>
    </div>
  </div>

  <!-- Doctrine -->
  <div class="col-2" style="margin-top: 56px; gap: 64px;">
    <div>
      <h3 style="color: var(--dust)"><span class="num" style="color:var(--ember)">04.1</span> The doctrine</h3>
      <div style="font-family: var(--display); font-size: 32px; font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; color: var(--bone); margin-top: 18px;">The aircraft fighting for American interests should be built by American hands, on American soil, from American parts.</div>
      <p style="color: var(--dust); margin-top: 18px; max-width: 52ch;">When we say "Powering the future of autonomy," we mean a future where the country that depends on the aircraft also makes the aircraft. That's not nostalgia. It is supply-chain hardening, IP protection, and operational sovereignty in a single decision.</p>
    </div>
    <div>
      <h3 style="color: var(--dust)"><span class="num" style="color:var(--ember)">04.2</span> What this gets the operator</h3>
      <div style="display: grid; gap: 0; margin-top: 18px; border-top: 1px solid rgba(245,241,232,0.18);">
        <div style="display:grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid rgba(245,241,232,0.18); align-items: baseline;">
          <span style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--ember);">01</span>
          <div><div style="color: var(--bone); font-weight: 600; font-size: 16px;">No export holds, no cleared-supply delays.</div><div style="color: var(--dust); font-size: 14px; margin-top: 4px;">DoD-compatible, ITAR-aware from day one.</div></div>
        </div>
        <div style="display:grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid rgba(245,241,232,0.18); align-items: baseline;">
          <span style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--ember);">02</span>
          <div><div style="color: var(--bone); font-weight: 600; font-size: 16px;">Firmware is ours, signed and sovereign.</div><div style="color: var(--dust); font-size: 14px; margin-top: 4px;">No foreign radios. No foreign flight stack. No phone-home.</div></div>
        </div>
        <div style="display:grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid rgba(245,241,232,0.18); align-items: baseline;">
          <span style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--ember);">03</span>
          <div><div style="color: var(--bone); font-weight: 600; font-size: 16px;">Replacement parts ship in days, not seasons.</div><div style="color: var(--dust); font-size: 14px; margin-top: 4px;">No Pacific transit, no customs lottery, no surprise tariff.</div></div>
        </div>
        <div style="display:grid; grid-template-columns: 28px 1fr; gap: 14px; padding: 16px 0; align-items: baseline;">
          <span style="font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--ember);">04</span>
          <div><div style="color: var(--bone); font-weight: 600; font-size: 16px;">Engineers fly to the field, not the factory.</div><div style="color: var(--dust); font-size: 14px; margin-top: 4px;">U.S. manufacturing means U.S. engineers in the same time zone as the operator.</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Cert chips -->
  <div style="margin-top: 64px;">
    <h3 style="color: var(--dust)"><span class="num" style="color:var(--ember)">04.3</span> Certification posture</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px;">
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);"><img class="cert-icon" src="assets/cert/us-flag.png" alt=""/>U.S. Manufactured</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);"><img class="cert-icon" src="assets/cert/ndaa.png" alt=""/>NDAA Section 848</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);"><img class="cert-icon" src="assets/cert/blue-uas.png" alt=""/>Blue UAS Cleared</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);">EO 14307 — compliant</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);">DFARS-validated supply chain</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);">CMMC L2 (in audit)</span>
      <span class="chip" style="border-color: rgba(245,241,232,0.4); color: var(--bone);">ITAR-registered</span>
    </div>
    <p style="color: var(--dust); font-size: 13px; margin-top: 16px; max-width: 80ch;">These chips appear on every spec sheet, every product slick, and every public-facing surface where origin is relevant. Order is fixed: U.S. Manufactured first, always.</p>
  </div>

  <!-- Footprint -->
  <div style="margin-top: 64px;">
    <h3 style="color: var(--dust)"><span class="num" style="color:var(--ember)">04.4</span> Footprint</h3>
    <div style="margin-top: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: baseline;">
      <div style="font-family: var(--display); font-size: clamp(28px, 3.2vw, 44px); font-weight: 400; letter-spacing: -0.02em; line-height: 1.1; color: var(--bone);">Manufactured in<br/><span style="color: var(--ember);">Charlotte, North Carolina.</span></div>
      <p style="color: var(--dust); font-size: 14px; line-height: 1.6; max-width: 52ch; padding-top: 8px;">Every Powerus serial number traces back through a U.S. supply chain to a final-assembly line in Charlotte. The provenance is auditable, end to end.</p>
    </div>
  </div>

  <!-- Closing pull-line -->
  <div class="hairline" style="margin-top: 64px; padding-top: 32px;">
    <div style="font-family: var(--display); font-size: clamp(20px, 2.4vw, 32px); font-weight: 400; letter-spacing: -0.02em; line-height: 1.1; color: var(--bone); white-space: nowrap;">If we cannot build it here, we will not build it.</div>
    <div style="font-family: var(--sans); font-weight: 600; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--stone); margin-top: 18px;">[ Founding principle ]</div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 05 — VOICE & TONE
// ─────────────────────────────────────────────────────────────────────
reg('voice', 'Voice &amp; Tone');
add(`
<section id="voice" class="page">
  <span class="page-num">PG <span>05</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">05 / Foundation</span>Voice<br/>&amp; Tone</div>
    <div>
      <h2>How we sound.</h2>
      <p class="lede">Confident. Declarative. Technical. Mission-driven. Short sentences. Numbers are facts. We never hedge. We never market. The product earns the noun.</p>
    </div>
  </div>

  <div class="principle-grid" style="margin-bottom:48px;">
    <div class="p-card">
      <div class="p-num">01</div>
      <div class="p-content">
        <div class="p-rule"><span class="p-tok">Outcome</span> <span class="p-op">&gt;</span> <span class="p-tok">Feature</span></div>
        <p class="p-callout">State the outcome before the feature.</p>
        <p class="p-foot">Lead with what changes. Mechanics support, never lead.</p>
      </div>
    </div>
    <div class="p-card">
      <div class="p-num">02</div>
      <div class="p-content">
        <div class="p-rule"><span class="p-tok">Number</span> <span class="p-op">=</span> <span class="p-tok">Verifiable</span></div>
        <p class="p-callout">If a number isn't real, it isn't there.</p>
        <p class="p-foot">Every figure carries a unit, a context, and a source on file.</p>
      </div>
    </div>
    <div class="p-card">
      <div class="p-num">03</div>
      <div class="p-content">
        <div class="p-rule"><span class="p-tok">Plain</span> <span class="p-op">&gt;</span> <span class="p-tok">Jargon</span></div>
        <p class="p-callout">Plain English beats domain jargon. Always.</p>
        <p class="p-foot">If an operator wouldn't say it in the field, we don't write it here.</p>
      </div>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">04.1</span> Writing examples — say / don't say</h3>
  <div class="voice-table">
    <div class="voice-row">
      <div class="axis">Headline /<br/>Product</div>
      <div class="col do"><h4>Say</h4><p>Counter-drone interceptor. 340 km/h burst. Hundreds of confirmed intercepts.</p></div>
      <div class="col dont"><h4>Don't say</h4><p>Revolutionary, AI-powered, next-generation aerial defense ecosystem.</p></div>
    </div>
    <div class="voice-row">
      <div class="axis">Capability /<br/>Body</div>
      <div class="col do"><h4>Say</h4><p>Folded in 12 seconds. Carried in a ruck. Operated by one.</p></div>
      <div class="col dont"><h4>Don't say</h4><p>Ergonomically optimized for rapid field deployment by single users.</p></div>
    </div>
    <div class="voice-row">
      <div class="axis">Mission /<br/>Brand line</div>
      <div class="col do"><h4>Say</h4><p>We build the systems the mission can't fail without.</p></div>
      <div class="col dont"><h4>Don't say</h4><p>We empower customers with cutting-edge autonomous solutions.</p></div>
    </div>
    <div class="voice-row">
      <div class="axis">Wildfire /<br/>Application</div>
      <div class="col do"><h4>Say</h4><p>Eyes on the ridge before the wind shifts. Twenty minutes of warning is everything.</p></div>
      <div class="col dont"><h4>Don't say</h4><p>Leveraging AI to revolutionize emergency response paradigms.</p></div>
    </div>
    <div class="voice-row">
      <div class="axis">Stat /<br/>Callout</div>
      <div class="col do"><h4>Say</h4><p>15 KM range. 28 minutes endurance. 5,000 m max altitude.</p></div>
      <div class="col dont"><h4>Don't say</h4><p>Class-leading range, industry-leading endurance, best-in-class altitude.</p></div>
    </div>
  </div>

  <div class="col-2" style="margin-top:48px;">
    <div>
      <h3><span class="num" style="color:var(--ember)">04.2</span> Banned words</h3>
      <p>Revolutionary · cutting-edge · world-class · best-in-class · solution · ecosystem · synergy · empower · unleash · leverage · disrupt · seamless · innovative · game-changing · paradigm · holistic.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">04.3</span> Tone matrix</h3>
      <div class="data-readout"><span>SALES &amp; PRODUCT</span><span>CONFIDENT · TECHNICAL</span></div>
      <div class="data-readout"><span>OPERATIONS &amp; FIELD</span><span>DIRECT · OPERATIONAL</span></div>
      <div class="data-readout"><span>MISSION &amp; CINEMATIC</span><span>STOIC · CONSEQUENTIAL</span></div>
      <div class="data-readout"><span>RECRUITING &amp; CULTURE</span><span>HUMAN · MISSION-DRIVEN</span></div>
      <div class="data-readout"><span>SOCIAL / EXTERNAL</span><span>TIGHT · LOW-EGO</span></div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 05 — LOGO SYSTEM
// ─────────────────────────────────────────────────────────────────────
reg('logo', 'Logo System');
add(`
<section id="logo" class="page">
  <span class="page-num">PG <span>06</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">06 / Identity</span>The Logo<br/>System</div>
    <div>
      <h2>One mark.<br/>Three forms.</h2>
      <p class="lede">The Powerus identity is a system: full lockup, monogram, and wordmark. Each has a specific role and is never improvised at the application layer.</p>
    </div>
  </div>

  <h3><span class="num" style="color:var(--ember)">05.1</span> Primary lockup</h3>
  <div class="logo-gallery">
    <div class="logo-tile bone"><span class="tag">01 / Bone surface</span><img src="assets/logo/powerus-lockup-charcoal.png" alt="Powerus charcoal lockup"/></div>
    <div class="logo-tile char"><span class="tag">02 / Char surface</span><img src="assets/logo/powerus-lockup-bone.png" alt="Powerus bone lockup"/></div>
    <div class="logo-tile bone-2"><span class="tag">03 / Bone secondary</span><img src="assets/logo/powerus-lockup-charcoal.png" alt=""/></div>
    <div class="logo-tile photo"><span class="tag">04 / Over photography</span><img src="assets/logo/powerus-lockup-bone.png" alt=""/></div>
  </div>

  <div class="col-2" style="margin-top:48px;">
    <div>
      <h3><span class="num" style="color:var(--ember)">05.2</span> Use the lockup when…</h3>
      <p>The viewer has not yet encountered the brand in the current surface. First-touch placements: covers, footers, sales sheet headers, video bumpers, business documents, contractual artifacts.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">05.3</span> Minimum sizes</h3>
      <div class="data-readout"><span>DIGITAL · LOCKUP</span><span>120 PX WIDE</span></div>
      <div class="data-readout"><span>PRINT · LOCKUP</span><span>32 MM WIDE</span></div>
      <div class="data-readout"><span>MONOGRAM · DIGITAL</span><span>24 PX</span></div>
      <div class="data-readout"><span>MONOGRAM · PRINT</span><span>8 MM</span></div>
    </div>
  </div>

  <h3 style="margin-top:48px;"><span class="num" style="color:var(--ember)">05.4</span> Color treatments</h3>
  <p style="color:var(--graphite); margin-bottom:24px;">Two approved color states. Ember is reserved for one-off motion or merch moments and requires brand approval.</p>
  <div class="logo-gallery">
    <div class="logo-tile bone"><span class="tag">CHAR ON BONE · DEFAULT</span><img src="assets/logo/powerus-lockup-charcoal.png" alt=""/></div>
    <div class="logo-tile char"><span class="tag">BONE ON CHAR · DARK</span><img src="assets/logo/powerus-lockup-bone.png" alt=""/></div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 06 — MONOGRAM
// ─────────────────────────────────────────────────────────────────────
reg('monogram', 'The Monogram');
add(`
<section id="monogram" class="page dark">
  <span class="page-num">PG <span>07</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta" style="color:var(--dust)"><span class="num" style="color:var(--bone)">07 / Identity</span>The Monogram<br/><span style="color:var(--stone)">Used alone, with weight.</span></div>
    <div>
      <h2 style="color:var(--bone)">Standalone.<br/>Stoic.</h2>
      <p class="lede" style="color:var(--dust)">The Powerus mark, alone, is a signature gesture. Used at oversize on covers, end-cards, and merch when the brand is already established in the moment.</p>
    </div>
  </div>

  <div class="col-2" style="align-items:center; gap:64px;">
    <div style="display:flex; align-items:center; justify-content:center; aspect-ratio:1/1; border:1px solid rgba(245,241,232,.2); position:relative;">
      <span class="mono-tick mono-tl"></span>
      <span class="mono-tick mono-tr"></span>
      <span class="mono-tick mono-bl"></span>
      <span class="mono-tick mono-br"></span>
      <span class="mono-tag-tl">[ MARK ]</span>
      <span class="mono-tag-br">SPEC · 0.7</span>
      <div style="width:60%; color:var(--bone);">
        <div style="aspect-ratio:1/1; display:flex; align-items:center; justify-content:center;">
          <img src="assets/logo/icon-light.svg" alt="" style="width:100%; height:100%;"/>
        </div>
      </div>
    </div>
    <div>
      <h3 style="color:var(--bone)"><span class="num" style="color:var(--ember)">06.1</span> When to use the monogram alone</h3>
      <p style="color:var(--dust)">The monogram is a closing gesture, not an opening one. Use it where the audience has already been introduced to the brand within the surface (e.g. video end-card after a lockup intro, app icon, page corner watermark, oversize merch hit).</p>

      <h3 style="color:var(--bone); margin-top:32px;"><span class="num" style="color:var(--ember)">06.2</span> Preferred surfaces</h3>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>VIDEO END-CARD</span><span style="color:var(--bone)">FULL-BLEED · 60% AREA</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>APP / FAVICON</span><span style="color:var(--bone)">SQUARE TILE</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>MERCH · CHEST HIT</span><span style="color:var(--bone)">EMBROIDERED · 70 MM</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>MERCH · BACK PRINT</span><span style="color:var(--bone)">SCREENPRINT · 280 MM</span></div>
      <div class="data-readout" style="border-color:rgba(245,241,232,.15); color:var(--dust);"><span>VEHICLE / CRATE</span><span style="color:var(--bone)">STENCIL · 200 MM MIN</span></div>
    </div>
  </div>
</section>
`);

// ─────────────────────────────────────────────────────────────────────
// 07 — CLEAR SPACE & MISUSE
// ─────────────────────────────────────────────────────────────────────
reg('clearspace', 'Clear Space &amp; Misuse');
add(`
<section id="clearspace" class="page">
  <span class="page-num">PG <span>08</span><span class="of">/</span>21</span>
  <div class="section-head">
    <div class="meta"><span class="num" style="color:var(--ember)">08 / Identity</span>Clear Space<br/>&amp; Misuse</div>
    <div>
      <h2>Give it air.</h2>
      <p class="lede">The clear space around the lockup is one full cap-height of the wordmark on every side. Never less. The mark commands authority because we let it.</p>
    </div>
  </div>

  <div class="col-2" style="gap:48px; align-items:start;">
    <div>
      <h3><span class="num" style="color:var(--ember)">07.1</span> Clear space</h3>
      <div class="clearspace-diagram">
        <span class="x-mark x-top">X</span>
        <span class="x-mark x-bot">X</span>
        <span class="x-mark x-l">X</span>
        <span class="x-mark x-r">X</span>
        <div class="cs-frame">
          <img src="assets/logo/powerus-lockup-charcoal.png" alt=""/>
        </div>
      </div>
      <p style="margin-top:16px; color:var(--graphite); font-size:14px;">X = the cap-height of the wordmark. Apply on all four sides regardless of orientation or surface.</p>
    </div>
    <div>
      <h3><span class="num" style="color:var(--ember)">07.2</span> Pairing</h3>
      <p>The lockup may sit alongside one (1) approved partner mark in a strict horizontal lockup, separated by a 1px char rule with X clear space on either side. Never stacked. Never inside a "powered by" badge.</p>

      <h3 style="margin-top:32px;"><span class="num" style="color:var(--ember)">07.3</span> Background contrast</h3>
      <p>Minimum contrast of 7:1 between mark and surface. On photography, mark sits over the darkest 25% of the frame or against a hairline-bordered chip pulled from the brand surface palette.</p>

      <h3 style="margin-top:32px;"><span class="num" style="color:var(--ember)">07.4</span> File system</h3>
      <div class="data-readout"><span>PRIMARY · SVG</span><span>powerus_lockup.svg</span></div>
      <div class="data-readout"><span>RASTER · 2X PNG</span><span>powerus_lockup@2x.png</span></div>
      <div class="data-readout"><span>MONOGRAM · SVG</span><span>powerus_mark.svg</span></div>
      <div class="data-readout"><span>WORDMARK · SVG</span><span>powerus_wordmark.svg</span></div>
    </div>
  </div>

  <h3 style="margin-top:64px;"><span class="num" style="color:var(--ember)">07.5</span> Misuse — never do this</h3>
  <div class="misuse-grid">
    <div class="misuse-tile"><img class="mark stretched" src="assets/logo/powerus-lockup-charcoal.png" alt=""/><span class="ban">DO NOT STRETCH</span></div>
    <div class="misuse-tile"><img class="mark tilted" src="assets/logo/powerus-lockup-charcoal.png" alt=""/><span class="ban">DO NOT ROTATE</span></div>
    <div class="misuse-tile"><img class="mark shadowed" src="assets/logo/powerus-lockup-charcoal.png" alt=""/><span class="ban">NO DROP SHADOW</span></div>
    <div class="misuse-tile gradient-bg"><img class="mark" src="assets/logo/powerus-lockup-bone.png" alt=""/><span class="ban">NO GRADIENT BG</span></div>
    <div class="misuse-tile lo-contrast"><img class="mark" src="assets/logo/powerus-lockup-bone.png" alt=""/><span class="ban">LOW CONTRAST</span></div>
    <div class="misuse-tile busy-photo"><img class="mark" style="width:70%;" src="assets/logo/powerus-lockup-bone.png" alt=""/><span class="ban">NO BUSY BG</span></div>
  </div>
</section>
`);

// (sections 08+ continue in sections-2.js to keep this file under the size limit)
