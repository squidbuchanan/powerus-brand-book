// Build TOC from sections registered in sections.js
window.__BBL_TOC = [];
window.registerSection = function(s) {
  window.__BBL_TOC.push(s);
};
window.renderTOC = function() {
  const tocEl = document.getElementById('toc');
  if (!tocEl) return;
  const groups = [
    { name: 'Foundation', range: [0, 4] },
    { name: 'Identity',  range: [5, 7] },
    { name: 'System',    range: [8, 11] },
    { name: 'Photography', range: [12, 14] },
    { name: 'Video',     range: [15, 16] },
    { name: 'Motion',    range: [17, 18] },
    { name: 'Application', range: [19, 22] }
  ];
  let html = '';
  groups.forEach(g => {
    html += `<li class="group-break">${g.name}</li>`;
    for (let i = g.range[0]; i <= g.range[1]; i++) {
      const s = window.__BBL_TOC[i];
      if (!s) continue;
      const num = String(i).padStart(2, '0');
      html += `<li><a href="#${s.id}" data-idx="${i}"><span class="tc-num">${num}</span><span>${s.short}</span></a></li>`;
    }
  });
  tocEl.innerHTML = html;

  // Active section tracking via IntersectionObserver
  const links = [...tocEl.querySelectorAll('a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const pgEl = document.getElementById('pg-now');

  const setActive = (idx) => {
    links.forEach(l => l.classList.remove('active'));
    if (links[idx]) links[idx].classList.add('active');
    if (pgEl) pgEl.textContent = String(idx).padStart(2, '0');
  };

  let current = 0;
  const onScroll = () => {
    const y = window.scrollY + window.innerHeight * 0.3;
    let i = 0;
    for (let k = 0; k < sections.length; k++) {
      if (sections[k].offsetTop <= y) i = k;
    }
    if (i !== current) {
      current = i;
      setActive(i);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};
