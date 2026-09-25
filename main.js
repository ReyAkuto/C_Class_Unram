/* ============================================================
   C / 26 — Main Script
   Handles: Avatar grid, floating member card, works grid, pagination
   ============================================================ */

/* ── DATA — 39 members ── */
const people = [
  { num:"01", nim:"F1D02610002", name:"Albuhiadiyasa Putra",             initial:"AP", hobby:"Cari Cwe", skills:["Software", "UI/UX"],  ket:"Ketua Kelas" },
  { num:"02", nim:"F1D02610005", name:"Casuarina Raudhatul Oktaviani",   initial:"CR", hobby:"Futsal", skills:["Data", "AI"],  ket:"Wakil Ketua" },
  { num:"03", nim:"F1D02610008", name:"Desak Putu Saras Puspita Dewi",   initial:"DS", hobby:"Nonton Anime", skills:["AI", "UI/UX"],  ket:"Sekretaris" },
  { num:"04", nim:"F1D02610012", name:"Ghina Ramawardani",               initial:"GR", hobby:"Dengerin Musik", skills:["DevOps", "Software"],  ket:"Bendahara" },
  { num:"05", nim:"F1D02610018", name:"Kharisma Yani",                   initial:"KY", hobby:"Memasak", skills:["AI", "Mobile"],  ket:"Anggota" },
  { num:"06", nim:"F1D02610022", name:"Muhammad Wisnu Dwi Utama",        initial:"MW", hobby:"Olahraga", skills:["Software", "Security"],  ket:"Anggota" },
  { num:"07", nim:"F1D02610025", name:"Amalia Syahida",                  initial:"AS", hobby:"Olahraga", skills:["DevOps", "AI"],  ket:"Anggota" },
  { num:"08", nim:"F1D02610028", name:"Elyana Sahira",                   initial:"ES", hobby:"Hiking", skills:["Security", "DevOps", "Software"],  ket:"Anggota" },
  { num:"09", nim:"F1D02610032", name:"Ahsanul Fuad",                    initial:"AF", hobby:"Musik", skills:["DevOps", "Robotics"],  ket:"Anggota" },
  { num:"10", nim:"F1D02610036", name:"Anggun Rizqina Widara",           initial:"AR", hobby:"Ngoding", skills:["Robotics", "AI"],  ket:"Anggota" },
  { num:"11", nim:"F1D02610041", name:"Bayu Dwi Febrian",                initial:"BF", hobby:"Futsal", skills:["AI", "Software"],  ket:"Anggota" },
  { num:"12", nim:"F1D02610044", name:"Dendy Aprila Utama Putra",        initial:"DA", hobby:"Renang", skills:["AI", "Robotics", "DevOps"],  ket:"Anggota" },
  { num:"13", nim:"F1D02610047", name:"Favian Zhiven Pradefa",           initial:"FZ", hobby:"Skateboard", skills:["Software", "UI/UX"],  ket:"Anggota" },
  { num:"14", nim:"F1D02610054", name:"I Gusti Bagus Ramaditya Nugraha", initial:"IG", hobby:"Musik", skills:["AI", "Data", "Software"],  ket:"Anggota" },
  { num:"15", nim:"F1D02610062", name:"Julian Ahmad Dani",               initial:"JA", hobby:"Dengerin Musik", skills:["UI/UX", "Security"],  ket:"Anggota" },
  { num:"16", nim:"F1D02610065", name:"Lalu Danish Nabil Putra",         initial:"LD", hobby:"Berkebun", skills:["AI", "Software"],  ket:"Anggota" },
  { num:"17", nim:"F1D02610069", name:"Maura Adya Puteri",               initial:"MA", hobby:"Nonton Anime", skills:["Security", "Software"],  ket:"Anggota" },
  { num:"18", nim:"F1D02610073", name:"Muhammad Alwa Alfarizi",          initial:"ML", hobby:"Nonton Film", skills:["AI", "Data"],  ket:"Anggota" },
  { num:"19", nim:"F1D02610078", name:"Nur Haeron",                      initial:"NH", hobby:"Dengerin Musik", skills:["Mobile", "UI/UX"],  ket:"Anggota" },
  { num:"20", nim:"F1D02610084", name:"Raka Abbasy Rianzila",            initial:"RA", hobby:"Nulis Cerpen", skills:["Robotics", "Mobile"],  ket:"Anggota" },
  { num:"21", nim:"F1D02610087", name:"Rizka Syabrina",                  initial:"RS", hobby:"Nonton Anime", skills:["Data", "UI/UX"],  ket:"Anggota" },
  { num:"22", nim:"F1D02610090", name:"Suhendra G. Felandika P.",        initial:"SF", hobby:"Badminton", skills:["AI", "Security"],  ket:"Anggota" },
  { num:"23", nim:"F1D02610094", name:"Viana Dwi Yanti",                 initial:"VY", hobby:"Futsal", skills:["Data", "AI"],  ket:"Anggota" },
  { num:"24", nim:"F1D02610098", name:"Kadek Raditya Wijaya Nanda",      initial:"KR", hobby:"Nonton Anime", skills:["DevOps", "Robotics", "UI/UX"],  ket:"Anggota" },
  { num:"25", nim:"F1D02610102", name:"Adiba Rahman",                    initial:"AD", hobby:"Hiking", skills:["UI/UX", "DevOps"],  ket:"Anggota" },
  { num:"26", nim:"F1D02610105", name:"Ahmad Muhibbur Rahman Mahmud",    initial:"AM", hobby:"Menggambar", skills:["Data", "DevOps"],  ket:"Anggota" },
  { num:"27", nim:"F1D02610108", name:"Alfita Ulfatul Khuluq",           initial:"AU", hobby:"Memasak", skills:["UI/UX", "Data"],  ket:"Anggota" },
  { num:"28", nim:"F1D02610111", name:"Baiq Galuh Kirania Amanda",       initial:"BG", hobby:"Nulis Cerpen", skills:["AI", "Mobile"],  ket:"Anggota" },
  { num:"29", nim:"F1D02610114", name:"Dwi Damayanti",                   initial:"DD", hobby:"Traveling", skills:["Data", "UI/UX"],  ket:"Anggota" },
  { num:"30", nim:"F1D02610117", name:"Hayyu Naprillahi",                initial:"HN", hobby:"Musik", skills:["DevOps", "UI/UX", "Data"],  ket:"Anggota" },
  { num:"31", nim:"F1D02610120", name:"Khaizuran",                       initial:"KH", hobby:"Renang", skills:["Security", "AI"],  ket:"Anggota" },
  { num:"32", nim:"F1D02610124", name:"Muh. Filzah Athari Z.",           initial:"MF", hobby:"Musik", skills:["Security", "UI/UX"],  ket:"Anggota" },
  { num:"33", nim:"F1D02610128", name:"Muhammad Fadhil Allam",           initial:"MF", hobby:"Berkebun", skills:["DevOps", "Robotics", "AI"],  ket:"Anggota" },
  { num:"34", nim:"F1D02610131", name:"Muhammad Imam W.",                initial:"MI", hobby:"Traveling", skills:["Mobile", "Software"],  ket:"Anggota" },
  { num:"35", nim:"F1D02610135", name:"Nasywa Aliya Novianty",           initial:"NA", hobby:"Futsal", skills:["AI", "Mobile"],  ket:"Anggota" },
  { num:"36", nim:"F1D02610138", name:"Putri Unmairah",                  initial:"PU", hobby:"Membaca", skills:["DevOps", "Security"],  ket:"Anggota" },
  { num:"37", nim:"F1D02610141", name:"Syintia Aspiradiamega",           initial:"SA", hobby:"Ngoding", skills:["DevOps", "Data"],  ket:"Anggota" },
  { num:"38", nim:"F1D02610147", name:"Ade Alvin Al-Farizi",             initial:"AA", hobby:"Skateboard", skills:["Security", "Mobile", "Software"],  ket:"Anggota" },
  { num:"39", nim:"F1D02610150", name:"Azizah Syakira",                  initial:"AZ", hobby:"Gaming", skills:["Security", "DevOps"],  ket:"Anggota" },
];

const works = [
  { num:"01", title:"Large display\nserif title",     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", tags:["Project","Tags"] },
  { num:"02", title:"AI-Powered\nVision System",      desc:"Computer vision pipeline built with PyTorch for real-time object recognition on edge hardware.",        tags:["AI","Python"] },
  { num:"03", title:"Distributed\nWeb Platform",      desc:"Full-stack platform for coordinating class resources and assignments with real-time sync.",              tags:["Software","Node.js"] },
  { num:"04", title:"Robotics\nNavigation",            desc:"Autonomous path-planning algorithm implemented on a custom-built differential drive robot.",             tags:["Robotics","C++"] },
  { num:"05", title:"Data Pipeline\nDashboard",        desc:"Live analytics dashboard aggregating academic performance metrics across all divisions.",                tags:["Data","React"] },
  { num:"06", title:"Security\nAudit Tool",            desc:"Lightweight penetration testing toolkit developed as part of the cybersecurity track curriculum.",      tags:["Security","Go"] },
];


/* ── MARQUEE ── */

function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;

  const items = people.map(p =>
    `<span class="marquee-item">
      <span>${p.name}</span>
      <span class="marquee-dot"></span>
      <span style="color:var(--accent);opacity:0.6;">${p.skills[0]}</span>
    </span>`
  );

  // 3x duplicate for seamless loop in both directions
  track.innerHTML = [...items, ...items, ...items].join("");

  // Wait for layout so scrollWidth is accurate
  requestAnimationFrame(() => {
    const totalW    = track.scrollWidth / 3;
    let   pos       = totalW;          // start at middle copy
    let   velocity  = 0;
    let   targetVel = -1.2;            // default: scroll left
    let   lastScrollY = window.scrollY;

    track.style.transform = `translateX(${-pos}px)`;

    window.addEventListener("scroll", () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      if (dy > 0) targetVel = -1.2;   // scroll down → move left
      if (dy < 0) targetVel =  1.2;   // scroll up   → move right
    }, { passive: true });

    function animate() {
      requestAnimationFrame(animate);

      // Smooth velocity transition (lerp)
      velocity += (targetVel - velocity) * 0.045;
      pos      += velocity;

      // Seamless wrap
      if (pos >= totalW * 2) pos -= totalW;
      if (pos <= 0)          pos += totalW;

      track.style.transform = `translateX(${-pos}px)`;
    }

    animate();
  });
}



/* ── FILTER PILLS ── */

function initFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.dataset.filter;
      const items  = document.querySelectorAll(".av-item");

      items.forEach(item => {
        const idx = parseInt(item.dataset.idx);
        const person = people[idx];
        if (filter === "all") {
          item.classList.remove("dimmed", "matched");
        } else {
          const match = person.skills.some(s =>
            s.toLowerCase().includes(filter.toLowerCase())
          );
          item.classList.toggle("dimmed",  !match);
          item.classList.toggle("matched",  match);
        }
      });
    });
  });
}


/* ── AVATAR GRID ── */

function renderAvatarGrid() {
  const grid = document.getElementById("avatarGrid");
  if (!grid) return;

  grid.innerHTML = people.map((p, i) => `
    <div class="av-item" data-idx="${i}">
      <div class="av-circle">${p.initial}</div>
      <div class="av-name">${p.name.split(" ")[0]}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".av-item").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      showCard(parseInt(el.dataset.idx));
    });
  });
}


/* ══════════════════════════════════════════
   FLY-MORPH CARD SYSTEM
   Single element (#flyBall) handles the entire lifecycle:
   fly → expand → IS the card → collapse → fly back
   .member-card is only a hidden data template, never shown.
   ══════════════════════════════════════════ */

const CARD_W   = 280;
const CARD_H   = 310;
const OFFSET_X = 18;
const NAV_H    = 64;

let cardPinned  = false;
let pinnedIdx   = null;
let cardSource  = 'people';
let isAnimating = false;
let lastAvCX    = 0;   // avatar center coords for close reverse
let lastAvCY    = 0;
let lastAvSize  = 72;

function isMobile() { return window.innerWidth <= 768; }

/* Stagger items dropping in from above */
function staggerCardIn(ball) {
  const items = ball.querySelectorAll(".mc-photo, .mc-section");
  items.forEach((el, i) => {
    el.style.opacity    = "0";
    el.style.transform  = "translateY(-18px)";
    el.style.transition = "none";
    setTimeout(() => {
      el.style.transition = "opacity 0.22s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)";
      el.style.opacity    = "1";
      el.style.transform  = "translateY(0)";
    }, 60 + i * 70);
  });
}

/* Stagger items flying out upward (reverse order) */
function staggerCardOut(ball, onAllDone) {
  const items = [...ball.querySelectorAll(".mc-photo, .mc-section")].reverse();
  items.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.16s ease, transform 0.2s ease";
      el.style.opacity    = "0";
      el.style.transform  = "translateY(-14px)";
    }, i * 50);
  });
  setTimeout(onAllDone, 50 * (items.length - 1) + 220);
}

/* Build card HTML content string */
function buildCardHTML(p) {
  const skills = p.skills
    .map((s, i) => `<span class="mc-tag${i === 0 ? ' mc-tag-accent' : ''}">${s}</span>`)
    .join('');
  return `
    <div class="mc-content">
      <div class="mc-photo">
        <div class="mc-avatar-ring"><span>${p.initial}</span></div>
        <div class="mc-header-info">
          <div class="mc-name">${p.name}</div>
          <div class="mc-num">#${p.num} · ${p.nim}</div>
        </div>
        <button class="mc-close" id="mcCloseBtn" aria-label="Close">×</button>
      </div>
      <div class="mc-body">
        <div class="mc-section">
          <div class="mc-label">Hobby</div>
          <div class="mc-value">${p.hobby}</div>
        </div>
        <div class="mc-section">
          <div class="mc-label">Skill</div>
          <div class="mc-tags">${skills}</div>
        </div>
        <div class="mc-section">
          <div class="mc-label">Ket</div>
          <div class="mc-value mc-ket">${p.ket || '—'}</div>
        </div>
      </div>
    </div>`;
}

function getCardPos(avRect) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let x = avRect.right + OFFSET_X;
  let y = avRect.top + avRect.height / 2 - CARD_H / 2;

  if (x + CARD_W > vw - 12) x = avRect.left - CARD_W - OFFSET_X;

  if (isMobile()) {
    x = (vw - CARD_W) / 2;
    y = avRect.bottom + 12;
    if (y + CARD_H > vh - 12) y = avRect.top - CARD_H - 12;
  }

  if (y < NAV_H)           y = NAV_H;
  if (y + CARD_H > vh - 8) y = vh - CARD_H - 8;

  return { x, y };
}

function easeOut(t) {
  // easeInOutQuart — slow lift-off, fast arc, hard landing
  return t < 0.5 ? 8*t*t*t*t : 1 - Math.pow(-2*t+2, 4)/2;
}
function lerp(a, b, t) { return a + (b - a) * t; }

/* ── Core morph animator ── shared by open + close ── */
function runMorph({ ball, fromX, fromY, fromW, fromH, fromBR, toX, toY, toW, toH, toBR, dur, arcDir, onDone }) {
  let start = null;
  ball.style.transition = 'background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, opacity 0.1s ease';
  function tick(ts) {
    if (!start) start = ts;
    const t    = Math.min((ts - start) / dur, 1);
    const ease = easeOut(t);

    // Parabolic arc: rise high then fall to target
    // t=0 → 0, t=0.5 → peak, t=1 → 0
    // arcDir -1 = open (arc goes UP = negative Y), 1 = close (arc goes UP too, same parabola back)
    const arcHeight = isMobile() ? 80 : 130;
    const arc = Math.sin(t * Math.PI) * arcHeight * arcDir;

    ball.style.left         = lerp(fromX, toX, ease) + 'px';
    ball.style.top          = lerp(fromY, toY, ease) + arc + 'px';
    ball.style.width        = lerp(fromW, toW, ease) + 'px';
    ball.style.height       = lerp(fromH, toH, ease) + 'px';
    ball.style.borderRadius = lerp(fromBR, toBR, ease) + '%';

    if (t < 1) requestAnimationFrame(tick);
    else onDone();
  }
  requestAnimationFrame(tick);
}

/* ── SWITCH (card already open → open another) ── */
function _switchCard(idx, avRect) {
  const ball = document.getElementById('flyBall');
  const p    = people[idx];
  const { x: newCardX, y: newCardY } = getCardPos(avRect);

  const fromX = parseFloat(ball.style.left);
  const fromY = parseFloat(ball.style.top);

  pinnedIdx  = idx;
  lastAvCX   = avRect.left + avRect.width / 2;
  lastAvCY   = avRect.top  + avRect.height / 2;
  lastAvSize = avRect.width;

  // Stagger current content out, then morph + inject new content
  staggerCardOut(ball, () => {
    isAnimating = true;
    ball.style.pointerEvents = 'none';

    // Custom tween: shrink → arc fly → expand into new position
    const dur = 420;
    let start = null;
    function easeSwitchOut(t) { return t < 0.5 ? 2*t*t : 1-(Math.pow(-2*t+2,2)/2); }

    function tick(ts) {
      if (!start) start = ts;
      const t    = Math.min((ts - start) / dur, 1);
      const ease = easeSwitchOut(t);

      // Squish: shrink to ~60% in first half, expand back in second half
      const squish = t < 0.5
        ? 1 - (t / 0.5) * 0.4          // shrink to 0.6
        : 0.6 + ((t - 0.5) / 0.5) * 0.4; // grow back to 1.0

      // Arc upward during travel
      const arcH = isMobile() ? 60 : 100;
      const arc  = Math.sin(t * Math.PI) * arcH;

      const cx = fromX + CARD_W/2 + (newCardX + CARD_W/2 - (fromX + CARD_W/2)) * ease;
      const cy = fromY + CARD_H/2 + (newCardY + CARD_H/2 - (fromY + CARD_H/2)) * ease - arc;

      const w = CARD_W  * squish;
      const h = CARD_H  * squish;

      ball.style.width  = w + 'px';
      ball.style.height = h + 'px';
      ball.style.left   = (cx - w/2) + 'px';
      ball.style.top    = (cy - h/2) + 'px';
      ball.style.borderRadius = '14px';

      if (t < 1) requestAnimationFrame(tick);
      else {
        // Snap to final
        ball.style.width  = CARD_W + 'px';
        ball.style.height = CARD_H + 'px';
        ball.style.left   = newCardX + 'px';
        ball.style.top    = newCardY + 'px';
        ball.style.pointerEvents = 'auto';
        ball.style.display   = 'block';
        ball.style.overflow  = 'hidden';

        ball.innerHTML = buildCardHTML(p);
        staggerCardIn(ball);

        const closeBtn = ball.querySelector('#mcCloseBtn');
        if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); closePinned(); };

        isAnimating = false;
        setTimeout(() => document.addEventListener('click', closePinned), 200);
      }
    }
    requestAnimationFrame(tick);
  });
}

/* ── OPEN ── */
function _openCard(idx, avCX, avCY, avSize, avRect) {
  if (isAnimating) return;
  document.removeEventListener('click', closePinned);

  // If a card is already open — morph directly card→card, no close/reopen
  if (cardPinned && cardSource === 'people') {
    _switchCard(idx, avRect);
    return;
  }

  isAnimating = true;
  cardPinned  = true;
  pinnedIdx   = idx;
  cardSource  = 'people';
  lastAvCX    = avCX;
  lastAvCY    = avCY;
  lastAvSize  = avSize;

  const p    = people[idx];
  const ball = document.getElementById('flyBall');
  const { x: cardX, y: cardY } = getCardPos(avRect);

  // Show inisial only during morph flight
  ball.innerHTML = `<span style="font-family:'Instrument Serif',serif;font-style:italic;color:var(--t2);font-size:${isMobile()?14:16}px;">${p.initial}</span>`;

  ball.style.cssText = `
    position:fixed; z-index:1100; pointer-events:none;
    background:var(--s2); border:1.5px solid var(--b3);
    overflow:hidden; opacity:1;
    display:flex; align-items:center; justify-content:center;
    width:${avSize}px; height:${avSize}px;
    left:${avCX - avSize/2}px; top:${avCY - avSize/2}px;
    border-radius:50%;
    box-shadow:0 2px 8px rgba(0,0,0,.2);
    transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
  `;

  // Start morph
  runMorph({
    ball,
    fromX: avCX - avSize/2, fromY: avCY - avSize/2,
    fromW: avSize, fromH: avSize, fromBR: 50,
    toX: cardX, toY: cardY,
    toW: CARD_W, toH: CARD_H, toBR: 5,
    dur: 520,
    arcDir: -1,
    onDone: () => {
      // Card lands — snap to final size/position explicitly before injecting content
      ball.style.width        = CARD_W + 'px';
      ball.style.height       = CARD_H + 'px';
      ball.style.left         = cardX + 'px';
      ball.style.top          = cardY + 'px';
      ball.style.borderRadius = '14px';
      ball.style.background   = 'var(--s1)';
      ball.style.border       = '1px solid var(--b2)';
      ball.style.boxShadow    = '0 2px 8px rgba(0,0,0,.3),0 12px 40px rgba(0,0,0,.5)';
      ball.style.pointerEvents = 'auto';
      ball.style.cursor        = 'default';
      ball.style.display       = 'block';
      ball.style.overflow      = 'hidden';

      // Inject content now that ball has correct dimensions
      ball.innerHTML = buildCardHTML(p);

      // Stagger items dropping in from above
      staggerCardIn(ball);

      const closeBtn = ball.querySelector('#mcCloseBtn');
      if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); closePinned(); };

      isAnimating = false;
      setTimeout(() => document.addEventListener('click', closePinned), 200);
    }
  });
}

function showCard(idx) {
  const avEl = document.querySelector(`.av-item[data-idx="${idx}"]`);
  if (!avEl) return;

  // Update active state
  document.querySelectorAll('.av-item').forEach(el => el.classList.remove('active', 'is-flying'));
  avEl.classList.add('active');

  // If already open, _switchCard handles is-flying itself via _openCard early return
  if (!cardPinned) avEl.classList.add('is-flying');

  const avRect = avEl.getBoundingClientRect();
  const avSize = avRect.width;
  _openCard(idx, avRect.left + avSize/2, avRect.top + avSize/2, avSize, avRect);
}

function showCardFromPoint(idx, cx, cy, size) {
  // Hub uses sky-drop animation instead of fly-morph
  _openCardFromSky(idx, cx, cy);
}

/* ── SKY DROP (Community Hub) ── */
function _openCardFromSky(idx, cx, cy) {
  if (isAnimating) return;
  document.removeEventListener('click', closePinned);

  isAnimating = true;
  cardPinned  = true;
  pinnedIdx   = idx;
  cardSource  = 'hub';

  const p    = people[idx];
  const ball = document.getElementById('flyBall');

  // Compute final card position from click point
  const fakeRect = { left:cx - CARD_W/2, top:cy, right:cx + CARD_W/2, bottom:cy + CARD_H, width:CARD_W, height:CARD_H };
  const { x: cardX, y: cardY } = getCardPos(fakeRect);

  // Start position: same X as final, but above the screen
  const startY = -CARD_H - 20;

  ball.innerHTML = buildCardHTML(p);
  ball.style.cssText = `
    position:fixed; z-index:1100; pointer-events:none;
    background:var(--s1); border:1px solid var(--b2);
    box-shadow:0 2px 8px rgba(0,0,0,.3),0 24px 60px rgba(0,0,0,.6);
    overflow:hidden; opacity:1;
    width:${CARD_W}px; height:${CARD_H}px;
    left:${cardX}px; top:${startY}px;
    border-radius:14px;
  `;

  // Stagger items hidden initially
  staggerCardIn(ball);

  // Animate drop: from startY to cardY with spring overshoot
  const dur = 480;
  let start = null;
  function easeSpring(t) {
    // Overshoot spring: goes slightly past then settles
    return 1 - Math.pow(2, -10 * t) * Math.cos(t * Math.PI * 2.2);
  }
  function tick(ts) {
    if (!start) start = ts;
    const t = Math.min((ts - start) / dur, 1);
    const ease = easeSpring(t);
    ball.style.top = (startY + (cardY - startY) * ease) + 'px';
    if (t < 1) requestAnimationFrame(tick);
    else {
      ball.style.top = cardY + 'px';
      ball.style.pointerEvents = 'auto';
      ball.style.cursor = 'default';
      const closeBtn = ball.querySelector('#mcCloseBtn');
      if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); _closeCardToSky(); };
      isAnimating = false;
      setTimeout(() => document.addEventListener('click', _closeCardToSky), 200);
    }
  }
  requestAnimationFrame(tick);
}

function _closeCardToSky() {
  if (isAnimating) return;
  document.removeEventListener('click', _closeCardToSky);

  const ball = document.getElementById('flyBall');
  if (!ball || !ball.style.left) return;

  isAnimating = true;

  const cardY = parseFloat(ball.style.top);

  staggerCardOut(ball, () => {
    // Fly up and out
    const targetY = -CARD_H - 20;
    const dur = 380;
    let start = null;
    function easeIn(t) { return t * t * t; }
    function tick(ts) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / dur, 1);
      ball.style.top     = (cardY + (targetY - cardY) * easeIn(t)) + 'px';
      ball.style.opacity = (1 - t * t).toString();
      if (t < 1) requestAnimationFrame(tick);
      else {
        ball.innerHTML     = '';
        ball.style.cssText = '';
        isAnimating = false;
        pinnedIdx   = null;
        cardPinned  = false;
      }
    }
    requestAnimationFrame(tick);
  });
}

/* ── CLOSE ── */
function closePinned() {
  if (isAnimating) return;
  document.removeEventListener('click', closePinned);

  const ball = document.getElementById('flyBall');
  const avEl = document.querySelector(`.av-item[data-idx="${pinnedIdx}"]`);

  if (!ball || ball.style.opacity === '0') return;

  isAnimating = true;

  const cardX = parseFloat(ball.style.left);
  const cardY = parseFloat(ball.style.top);

  // Get fresh av coords
  const avRect = avEl?.getBoundingClientRect();
  const avCX   = avRect ? avRect.left + avRect.width/2  : lastAvCX;
  const avCY   = avRect ? avRect.top  + avRect.height/2 : lastAvCY;
  const avSize = avRect ? avRect.width : lastAvSize;

  ball.style.pointerEvents = 'none';
  ball.style.cursor = 'default';

  // Stagger items flying out upward first, then morph back
  staggerCardOut(ball, () => {
    // Items gone — swap content to inisial, snap bg back to avatar style
    ball.innerHTML = `<span style="font-family:'Instrument Serif',serif;font-style:italic;color:var(--t2);font-size:${isMobile()?14:16}px;">${people[pinnedIdx].initial}</span>`;
    ball.style.display      = 'flex';
    ball.style.alignItems   = 'center';
    ball.style.justifyContent = 'center';
    ball.style.background   = 'var(--s2)';
    ball.style.borderColor  = 'var(--b3)';
    ball.style.boxShadow    = 'none';

    runMorph({
      ball,
      fromX: cardX, fromY: cardY,
      fromW: CARD_W, fromH: CARD_H, fromBR: 5,
      toX: avCX - avSize/2, toY: avCY - avSize/2,
      toW: avSize, toH: avSize, toBR: 50,
      dur: 460,
      arcDir: 1,
      onDone: () => {
        // Ball is now exactly on top of the avatar — reveal avatar first, THEN remove ball
        // No fade-out gap: avatar appears under ball, then ball is silently cleared
        document.querySelectorAll('.av-item').forEach(el => el.classList.remove('active', 'is-flying', 'bouncing'));
        requestAnimationFrame(() => {
          ball.innerHTML     = '';
          ball.style.cssText = '';
          isAnimating = false;
          pinnedIdx   = null;
          cardPinned  = false;
        });
      }
    });
  });
}

// Dismiss on scroll
window.addEventListener('scroll', () => {
  if (cardPinned && !isAnimating) { if (cardSource === 'hub') _closeCardToSky(); else closePinned(); }
}, { passive: true });


/* ── WORKS: TILT 3D ── */

function initWorksTilt() {
  const section = document.getElementById("works");
  if (!section) return;

  const cards = section.querySelectorAll(".ghost-card");
  if (!cards.length) return;

  const MAX_TILT = 10;
  const LERP_F   = 0.12;

  const state = Array.from(cards).map(() => ({
    targetRx: 0, targetRy: 0,
    currentRx: 0, currentRy: 0,
    hovering: false
  }));

  let rafRunning = false;

  function tick() {
    rafRunning = true;
    requestAnimationFrame(() => {
      cards.forEach((card, i) => {
        const s = state[i];
        s.currentRx += (s.targetRx - s.currentRx) * LERP_F;
        s.currentRy += (s.targetRy - s.currentRy) * LERP_F;

        const scale = s.hovering ? 1.025 : 1;
        card.style.transform =
          `perspective(1000px) rotateX(${s.currentRx}deg) rotateY(${s.currentRy}deg) scale(${scale})`;
      });

      const stillMoving = state.some(s =>
        Math.abs(s.currentRx - s.targetRx) > 0.01 ||
        Math.abs(s.currentRy - s.targetRy) > 0.01
      );
      if (stillMoving) tick();
      else rafRunning = false;
    });
  }

  cards.forEach((card, i) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      state[i].targetRy =  dx * MAX_TILT;
      state[i].targetRx = -dy * MAX_TILT;
      state[i].hovering = true;
      if (!rafRunning) tick();
    });

    card.addEventListener("mouseleave", () => {
      state[i].targetRx = 0;
      state[i].targetRy = 0;
      state[i].hovering = false;
      if (!rafRunning) tick();
    });
  });
}


/* ── WORKS GRID ── */

function renderWorks() {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  grid.innerHTML = works.map(w => `
    <div class="work-card">
      <span class="work-num">${w.num}</span>
      <div class="work-thumb"><div class="work-thumb-inner"></div></div>
      <div class="work-title">${w.title.replace("\n", "<br>")}</div>
      <p class="work-desc">${w.desc}</p>
      <div class="work-tags">
        ${w.tags.map((t, i) => `<span class="tag ${i === 0 ? "tag-accent" : ""}">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}


/* ── HERO SLIDESHOW ── */

const heroSlides = [
  {
    eyebrow: "Informatics Engineering · 2026",
    titleHTML: `Class <em>C</em> / 26`,
    subtitle: "We build, we learn, we ship. Satu kelas, satu tujuan — dari Mataram untuk dunia.",
    actions: true,   // show CTA buttons
  },
  {
    eyebrow: "The People Behind the Code",
    titleHTML: `39 <em>minds,</em><br>one class.`,
    subtitle: "Dari yang jago nge-code, suka ngoding jam 2 pagi, sampai yang hobi futsal tapi ngerti AI — semua ada di sini.",
    actions: false,
    spotlight: true, // show random member spotlight
  },
  {
    eyebrow: "Semester 1 · Just Getting Started",
    titleHTML: `We're only<br><em>beginning.</em>`,
    subtitle: "Masih semester pertama, tapi semangat udah semester delapan. The best projects haven't been built yet.",
    actions: false,
    quote: true,     // show quote/vibe block
  },
];

// Pick 3 random members for slide 2 spotlight, refreshed on each slide visit
function getSpotlightMembers() {
  const shuffled = [...people].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

let currentSlide     = 0;
let slideInterval    = null;
let isSliding        = false;
let spotlightInterval = null;

function renderSpotlight(extra, animate) {
  const members = getSpotlightMembers();
  const html = `<div class="hero-spotlight">${members.map(m => `
    <div class="spotlight-member">
      <div class="spotlight-avatar">${m.initial}</div>
      <div class="spotlight-info">
        <div class="spotlight-name">${m.name.split(" ")[0]}</div>
        <div class="spotlight-skill">${m.skills[0]}</div>
      </div>
    </div>`).join("")}</div>`;

  if (!animate) {
    extra.innerHTML = html;
    return;
  }

  // fade out current cards
  const current = extra.querySelector(".hero-spotlight");
  if (current) {
    current.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    current.style.opacity = "0";
    current.style.transform = "translateY(-8px)";
    setTimeout(() => {
      extra.innerHTML = html;
      const next = extra.querySelector(".hero-spotlight");
      if (next) {
        next.style.opacity = "0";
        next.style.transform = "translateY(8px)";
        void next.offsetHeight;
        next.style.transition = "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)";
        next.style.opacity = "1";
        next.style.transform = "translateY(0)";
      }
    }, 320);
  } else {
    extra.innerHTML = html;
  }
}

function startSpotlightRotation(extra) {
  clearInterval(spotlightInterval);
  spotlightInterval = setInterval(() => {
    if (currentSlide === 1) renderSpotlight(extra, true);
  }, 2500);
}

function stopSpotlightRotation() {
  clearInterval(spotlightInterval);
  spotlightInterval = null;
}



/* ── SLIDE TRANSITION ENGINE ──
   Strategy: fade+translate each element in-place.
   NO DOM moving, NO wrapper, NO layout shift.
   Elements stay exactly where they are — only opacity+transform animated.
──────────────────────────────── */

function slideOut(el, yDir) {
  if (!el || el.style.display === 'none') return Promise.resolve();
  return new Promise(resolve => {
    // Step 1: snap to current state with no transition
    el.style.transition = 'none';
    el.style.opacity    = '1';
    el.style.transform  = 'translateY(0)';
    // Step 2: force reflow so browser registers the above
    void el.offsetHeight;
    // Step 3: now animate out
    el.style.transition = 'opacity 0.28s ease, transform 0.32s cubic-bezier(0.4,0,1,1)';
    el.style.opacity    = '0';
    el.style.transform  = `translateY(${yDir * 18}px)`;
    setTimeout(resolve, 340);
  });
}

function slideIn(el, yDir, delay) {
  if (!el || el.style.display === 'none') return;
  // Set start state immediately (no transition, no reflow yet)
  el.style.transition = 'none';
  el.style.opacity    = '0';
  el.style.transform  = `translateY(${yDir * 22}px)`;
  setTimeout(() => {
    // Reflow inside the timeout — browser has painted the start state
    void el.offsetHeight;
    el.style.transition = 'opacity 0.52s cubic-bezier(0.16,1,0.3,1), transform 0.58s cubic-bezier(0.16,1,0.3,1)';
    el.style.opacity    = '1';
    el.style.transform  = 'translateY(0)';
  }, delay);
}

function goToSlide(idx, dir) {
  if (isSliding || idx === currentSlide) return;
  isSliding = true;

  const hero    = document.querySelector('.hero');
  const dots    = document.querySelectorAll('.page-dot');
  const eyebrow = hero.querySelector('.hero-eyebrow');
  const title   = hero.querySelector('.hero-title');
  const sub     = hero.querySelector('.hero-subtitle');
  const actions = hero.querySelector('.hero-actions');
  const extra   = hero.querySelector('.hero-extra');

  // Strip .anim class so CSS keyframes stop overriding our inline transitions
  [eyebrow, title, sub, actions].forEach(el => el?.classList.remove('anim'));

  // Stop spotlight rotation when leaving slide 2
  stopSpotlightRotation();

  /* OUT — all fly the same direction, staggered 30ms */
  const outY = dir > 0 ? -1 : 1;  /* next → current flies up; prev → current flies down */
  const outEls = [eyebrow, title, sub, actions, extra];
  const outPromises = outEls.map((el, i) =>
    new Promise(resolve => setTimeout(() => slideOut(el, outY).then(resolve), i * 30))
  );

  Promise.all(outPromises).then(() => {
    /* SWAP — invisible, safe to change text */
    dots.forEach(d => d.classList.remove('active'));
    dots[idx]?.classList.add('active');
    currentSlide = idx;

    const s = heroSlides[idx];
    eyebrow.textContent = s.eyebrow;
    title.innerHTML     = s.titleHTML;
    sub.textContent     = s.subtitle;

    /* actions */
    actions.style.display = s.actions ? 'flex' : 'none';

    /* extra content */
    stopSpotlightRotation();
    if (s.spotlight) {
      renderSpotlight(extra, false);
      extra.style.display = 'block';
      // start rotating after slide-in finishes
      setTimeout(() => startSpotlightRotation(extra), 900);
    } else if (s.quote) {
      const qs = [
        { text: "The best way to predict the future is to build it.", src: "— Alan Kay" },
        { text: "Coding is today's language of creativity.",          src: "— Code.org" },
        { text: "First, solve the problem. Then, write the code.",    src: "— John Johnson" },
        { text: "Programs must be written for people to read.",       src: "— Harold Abelson" },
      ];
      const q = qs[Math.floor(Math.random() * qs.length)];
      extra.innerHTML = `<div class="hero-quote-block">
        <div class="hero-quote-mark">"</div>
        <p class="hero-quote-text">${q.text}</p>
        <div class="hero-quote-src">${q.src}</div>
      </div>`;
      extra.style.display = 'block';
    } else {
      extra.style.display = 'none';
      extra.innerHTML = '';
    }

    /* IN — arrive from opposite direction, staggered 60ms */
    const inY = dir > 0 ? 1 : -1;  /* arrives from below if going forward */
    const inEls = [eyebrow, title, sub, actions, extra];
    inEls.forEach((el, i) => slideIn(el, inY, i * 60));

    const total = inEls.length * 60 + 600;
    setTimeout(() => { isSliding = false; }, total);
  });
}

function initPagination() {
  const hero = document.querySelector('.hero');
  const dots = document.querySelectorAll('.page-dot');

  /* Inject .hero-extra placeholder if not in DOM */
  if (!hero.querySelector('.hero-extra')) {
    const extra = document.createElement('div');
    extra.className = 'hero-extra';
    extra.style.display = 'none';
    const actions = hero.querySelector('.hero-actions');
    if (actions) actions.after(extra);
  }

  // Wire dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const dir = i > currentSlide ? 1 : -1;
      goToSlide(i, dir);
      resetAutoPlay();
    });
  });

  // Keyboard arrow navigation on hero
  document.addEventListener('keydown', (e) => {
    const heroEl = document.querySelector('.hero');
    if (!heroEl) return;
    const rect = heroEl.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const next = (currentSlide + 1) % heroSlides.length;
      goToSlide(next, 1);
      resetAutoPlay();
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      goToSlide(prev, -1);
      resetAutoPlay();
    }
  });

  // Auto-advance every 6s
  function startAutoPlay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      const next = (currentSlide + 1) % heroSlides.length;
      goToSlide(next, 1);
    }, 6000);
  }

  function resetAutoPlay() {
    clearInterval(slideInterval);
    startAutoPlay();
  }

  // Expose so initIntroScreen can trigger autoplay AFTER intro finishes
  window._startHeroAutoPlay = startAutoPlay;

  // Don't start yet if intro screen exists — wait for intro to finish
  if (!document.getElementById('introScreen')) {
    startAutoPlay();
  }

  // Pause on hover
  hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
  hero.addEventListener('mouseleave', () => {
    if (window._introFinished) startAutoPlay();
  });
}


/* ── SMOOTH SCROLL HELPER ── */

function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}


/* ── CURSOR GLOW TRAIL (People Section only) ── */

function initCursorGlow() {
  const section = document.getElementById("people");
  if (!section) return;

  // Main glow blob ngikutin cursor
  const glow = document.createElement("div");
  glow.id = "cursor-glow";
  glow.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 0;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(88,166,255,0.38) 0%, rgba(88,166,255,0.14) 40%, transparent 70%);
    filter: blur(18px);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s ease;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX  = 0, glowY  = 0; // posisi smooth glow
  let active = false;
  let rafId  = null;

  function isInSection() {
    const rect = section.getBoundingClientRect();
    return (
      mouseX >= rect.left && mouseX <= rect.right &&
      mouseY >= rect.top  && mouseY <= rect.bottom
    );
  }

  function animate() {
    rafId = requestAnimationFrame(animate);

    if (!isInSection()) {
      if (active) {
        active = false;
        glow.style.opacity = "0";
      }
      return;
    }

    if (!active) {
      active = true;
      glow.style.opacity = "1";
    }

    // Glow lerp smooth — ngikutin mouse tapi ga kaku
    glowX += (mouseX - glowX) * 0.28;
    glowY += (mouseY - glowY) * 0.28;
    glow.style.left = glowX + "px";
    glow.style.top  = glowY + "px";
  }

  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // tutup card saat scroll — lebih clean daripada ngikutin
  window.addEventListener("scroll", () => {
    if (cardPinned) {
      closePinned();
    }
  }, { passive: true });

  animate();
}


/* ── SCROLL REVEAL ── */

function initScrollReveal() {
  // Observe generic .reveal elements (label, intro, stats, marquee, filters)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Avatar grid: staggered per-item with IntersectionObserver on the grid
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const items = entry.target.querySelectorAll(".av-item");
      items.forEach((item, i) => {
        item.classList.add("reveal");
        const delay = Math.min(i * 18, 600);
        setTimeout(() => {
          item.classList.add("visible");
          // Remove reveal after animation so it doesn't override filter transitions
          setTimeout(() => item.classList.remove("reveal", "visible"), 600);
        }, delay);
      });

      gridObserver.unobserve(entry.target);
    });
  }, { threshold: 0.05 });

  const grid = document.getElementById("avatarGrid");
  if (grid) gridObserver.observe(grid);
}


/* ── BACKGROUND MUSIC ── */

// Create audio element in JS and attach to window so it's never garbage collected
let musicReady = false;
window._bgMusic = new Audio('content/music/music.mp3');
const bgMusic = window._bgMusic;

bgMusic.volume = 0.55;
bgMusic.preload = 'auto';
bgMusic.loop = false;

bgMusic.addEventListener('canplaythrough', () => {
  musicReady = true;
}, { once: true });

bgMusic.addEventListener('ended', () => {
  bgMusic.currentTime = 17;
  bgMusic.play().catch(() => {});
});

function startMusic() {
  bgMusic.currentTime = 17;
  bgMusic.play().catch(() => {});
}


/* ── INTRO SCREEN ── */

function initIntroScreen() {
  const screen   = document.getElementById("introScreen");
  const loader   = document.getElementById("introLoader");
  const question = document.getElementById("introQuestion");
  const btn      = document.getElementById("introBtn");
  const welcome  = document.getElementById("introWelcome");
  const status   = document.getElementById("introLoadStatus");

  if (!screen) return;

  // Block page scroll while intro is active
  document.body.style.overflow = "hidden";

  // ── ASSET TRACKING ──
  // All assets that need to load before we show the "Let's go" button.
  // Each resolves when done (or times out gracefully).

  const HARD_TIMEOUT = 8000; // absolute max wait

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  // 1. Fonts (Inter + Instrument Serif)
  const fontsReady = document.fonts
    ? document.fonts.ready.then(() => true).catch(() => true)
    : Promise.resolve(true);

  // 2. Hero background photo
  const heroBgReady = new Promise(resolve => {
    const img = new Image();
    img.onload  = () => resolve(true);
    img.onerror = () => resolve(true); // non-fatal
    img.src = 'content/bg/FotoKelasC.jpeg';
  });

  // 3. Gallery photos (m1–m4, non-fatal if missing)
  const galleryReady = Promise.all(
    [1, 2, 3, 4].map(n => new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(true);
      img.onerror = () => resolve(true);
      img.src = `content/moments/m${n}.jpeg`;
    }))
  );

  // 4. Audio buffered enough to play
  const audioReady = new Promise(resolve => {
    if (window._bgMusic && window._bgMusic.readyState >= 3) {
      resolve(true);
      return;
    }
    const check = setInterval(() => {
      if (window._bgMusic && window._bgMusic.readyState >= 3) {
        clearInterval(check);
        resolve(true);
      }
    }, 150);
    // Audio fallback after 4s — don't block forever on slow connections
    setTimeout(() => { clearInterval(check); resolve(true); }, 4000);
  });

  // 5. Minimum display time so loader doesn't flash away instantly
  const minTime = new Promise(resolve => setTimeout(resolve, 1200));

  // ── Status label updates while waiting ──
  let statusStep = 0;
  const statusLabels = ['Loading assets', 'Loading fonts', 'Loading photos', 'Buffering audio', 'Almost there'];
  const statusTimer = setInterval(() => {
    statusStep = (statusStep + 1) % statusLabels.length;
    setStatus(statusLabels[statusStep]);
  }, 900);
  setStatus(statusLabels[0]);

  // Hard timeout — show question regardless after HARD_TIMEOUT ms
  const hardTimeout = new Promise(resolve => setTimeout(resolve, HARD_TIMEOUT));

  // Phase 1 — All assets loaded (or timed out) → reveal question
  Promise.race([
    Promise.all([fontsReady, heroBgReady, galleryReady, audioReady, minTime]),
    hardTimeout
  ]).then(() => {
    clearInterval(statusTimer);
    loader.classList.add("hidden");
    setTimeout(() => {
      question.classList.add("visible");
    }, 300);
  });

  // Phase 2 — Button click
  btn.addEventListener("click", () => {
    // Start music from second 17
    startMusic();

    // Fade out question
    question.classList.add("fading");

    // Show "Welcome" after question fades
    setTimeout(() => {
      welcome.classList.add("visible");

      // Phase 3 — Fade out Welcome, then split open
      setTimeout(() => {
        welcome.classList.remove("visible"); // fade out welcome

        setTimeout(() => {
          // Fire hero-loaded BEFORE split opens so content is ready underneath
          document.body.classList.add("hero-loaded");

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              screen.classList.add("exit");
              document.body.style.overflow = "";
              window._introFinished = true;
              if (window._startHeroAutoPlay) window._startHeroAutoPlay();

              setTimeout(() => {
                screen.remove();
              }, 950);
            });
          });
        }, 500); // wait for welcome fade out (0.5s)

      }, 900); // "Welcome" holds for 0.9s

    }, 400); // question fade duration
  });
}


/* ── INIT ── */

document.addEventListener("DOMContentLoaded", () => {
  // Force page to top on every load/refresh — prevent browser restoring scroll position
  window.scrollTo(0, 0);
  history.scrollRestoration = 'manual';
  currentSlide = 0;

  renderAvatarGrid();
  renderWorks();
  initPagination();
  initCursorGlow();
  initMarquee();
  initFilters();
  initScrollReveal();
  initWorksTilt();

  initCometCanvas();
  initPlexus();
  initCommunityHub();
  renderGallery();
  initGalleryLightbox();
  initIntroScreen();

  // hero-loaded only fires after intro completes (moved into initIntroScreen)
  // but if intro screen is somehow missing, fire normally
  if (!document.getElementById("introScreen")) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add("hero-loaded");
      });
    });
  }
});

/* ── COMET CANVAS ── */

function initCometCanvas() {
  const canvas = document.getElementById('cometCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const section = document.getElementById('works');

  // Resize canvas to match section
  function resize() {
    canvas.width  = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Comet config
  const MAX_COMETS   = 7;   // max alive at once
  const SPAWN_RATE   = 0.018; // chance per frame to spawn a new one
  const ANGLE        = 35;  // degrees from vertical (miring ke kanan)
  const RAD          = ANGLE * Math.PI / 180;
  const SIN          = Math.sin(RAD);
  const COS          = Math.cos(RAD);

  const comets = [];

  function spawnComet() {
    const speed  = 1.8 + Math.random() * 2.2;   // px per frame
    const length = 55  + Math.random() * 70;     // trail length
    const size   = 0.8 + Math.random() * 0.9;    // head radius
    // start anywhere along top edge + a bit left so diagonal enters naturally
    const startX = Math.random() * (canvas.width + canvas.height * SIN);
    const startY = -length;

    comets.push({
      x: startX,
      y: startY,
      speed,
      length,
      size,
      opacity: 0.18 + Math.random() * 0.22, // subtle, max ~0.4
    });
  }

  function drawComet(c) {
    // Head position
    const hx = c.x;
    const hy = c.y;

    // Tail end (opposite to travel direction)
    const tx = hx - SIN * c.length;
    const ty = hy - COS * c.length;

    // Gradient along the trail
    const grad = ctx.createLinearGradient(tx, ty, hx, hy);
    grad.addColorStop(0,   `rgba(180, 210, 255, 0)`);
    grad.addColorStop(0.6, `rgba(180, 210, 255, ${c.opacity * 0.4})`);
    grad.addColorStop(1,   `rgba(220, 235, 255, ${c.opacity})`);

    // Draw trail
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(hx, hy);
    ctx.strokeStyle = grad;
    ctx.lineWidth   = c.size * 0.9;
    ctx.lineCap     = 'round';
    ctx.stroke();

    // Draw head glow (soft radial bloom)
    const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, c.size * 4);
    glow.addColorStop(0,   `rgba(200, 225, 255, ${c.opacity * 0.9})`);
    glow.addColorStop(0.4, `rgba(180, 210, 255, ${c.opacity * 0.3})`);
    glow.addColorStop(1,   `rgba(180, 210, 255, 0)`);

    ctx.beginPath();
    ctx.arc(hx, hy, c.size * 4, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Bright core dot
    ctx.beginPath();
    ctx.arc(hx, hy, c.size * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(235, 245, 255, ${c.opacity * 1.2})`;
    ctx.fill();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn
    if (comets.length < MAX_COMETS && Math.random() < SPAWN_RATE) {
      spawnComet();
    }

    // Update + draw
    for (let i = comets.length - 1; i >= 0; i--) {
      const c = comets[i];
      c.x += SIN * c.speed;
      c.y += COS * c.speed;

      // Remove if fully off-screen
      if (c.y - c.length > canvas.height || c.x - c.length > canvas.width) {
        comets.splice(i, 1);
        continue;
      }

      drawComet(c);
    }

    if (cometRunning) requestAnimationFrame(tick);
  }

  let cometRunning = false;
  const cometObs = new IntersectionObserver(entries => {
    cometRunning = entries[0].isIntersecting;
    if (cometRunning) requestAnimationFrame(tick);
  }, { threshold: 0.01 });
  cometObs.observe(section);
}



/* ── HAMBURGER MENU ── */

function toggleMenu() {
  const links = document.getElementById('navLinks');
  const btn   = document.getElementById('navHamburger');
  const open  = links.classList.toggle('open');
  btn.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeMenu() {
  const links = document.getElementById('navLinks');
  const btn   = document.getElementById('navHamburger');
  links.classList.remove('open');
  btn.classList.remove('open');
  document.body.style.overflow = '';
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  const links = document.getElementById('navLinks');
  const btn   = document.getElementById('navHamburger');
  if (links && links.classList.contains('open')) {
    if (!links.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  }
});

// Close on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});


/* ── GALLERY ── */

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const photos  = ['m1', 'm2', 'm3', 'm4'];
  const layouts = ['g-tall', 'g-sm', 'g-sm', 'g-wide'];

  photos.forEach((name, i) => {
    const item = document.createElement('div');
    item.className = `gallery-item ${layouts[i] || ''}`;

    const img   = document.createElement('img');
    img.src     = `content/moments/${name}.jpeg`;
    img.alt     = `Moment ${i + 1}`;
    img.loading = 'lazy';
    img.onerror = () => { item.style.display = 'none'; };

    item.appendChild(img);
    grid.appendChild(item);

    // 3D tilt
    item.style.transition    = 'transform 0.12s ease, box-shadow 0.2s ease';
    item.style.willChange    = 'transform';
    item.style.transformStyle = 'preserve-3d';

    item.addEventListener('mousemove', e => {
      const r    = item.getBoundingClientRect();
      const x    = (e.clientX - r.left) / r.width  - 0.5;  // -0.5 to 0.5
      const y    = (e.clientY - r.top)  / r.height - 0.5;
      const rotX = -y * 14;   // tilt up/down
      const rotY =  x * 14;   // tilt left/right
      item.style.transform    = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
      item.style.boxShadow    = `${-rotY * 1.2}px ${rotX * 1.2}px 24px rgba(0,0,0,0.5)`;
      item.style.transition   = 'box-shadow 0.1s ease';
      item.style.zIndex       = '5';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transition = 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease';
      item.style.transform  = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
      item.style.boxShadow  = 'none';
      item.style.zIndex     = '';
    });
  });
}


/* ── GALLERY LIGHTBOX ── */

function initGalleryLightbox() {
  // Create lightbox overlay
  const lb = document.createElement('div');
  lb.id = 'galleryLightbox';
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-content">
      <img id="lbImg" src="" alt="">
      <button class="lb-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(lb);

  const lbImg     = document.getElementById('lbImg');
  const backdrop  = lb.querySelector('.lb-backdrop');
  const closeBtn  = lb.querySelector('.lb-close');

  function openLightbox(src) {
    lbImg.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  backdrop.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Attach hover (1.5s delay) + click to each gallery item
  function attachToItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;

      let hoverTimer = null;

      // Hover — expand in place after 1.5s
      item.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => {
          item.classList.add('expanded');
        }, 300);
      });

      item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        item.classList.remove('expanded');
      });

      // Click — open lightbox immediately
      item.addEventListener('click', () => {
        clearTimeout(hoverTimer);
        item.classList.remove('expanded');
        openLightbox(img.src);
      });
    });
  }

  // Items are injected by renderGallery — wait a tick
  setTimeout(attachToItems, 100);
}


/* ── COMMUNITY HUB ── */

function initCommunityHub() {
  const canvas = document.getElementById('hubCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  const TRACK_META = {
    'Software': { r:88,  g:166, b:255 },
    'AI':       { r:160, g:100, b:255 },
    'Robotics': { r:255, g:120, b:80  },
    'Data':     { r:50,  g:200, b:160 },
    'Security': { r:255, g:180, b:50  },
    'UI/UX':    { r:240, g:90,  b:150 },
    'DevOps':   { r:90,  g:210, b:100 },
    'Mobile':   { r:100, g:190, b:255 },
  };
  const TRACK_KEYS = Object.keys(TRACK_META);

  const nodes = people.map((p, i) => {
    const track = p.skills[0] || 'Software';
    const meta  = TRACK_META[track] || TRACK_META['Software'];
    return { p, i, x:0, y:0, vx:0, vy:0,
      r:meta.r, g:meta.g, b:meta.b, track,
      radius:6, glow:0, alpha:0, born:false };
  });

  const clusters = {};
  TRACK_KEYS.forEach(t => { clusters[t] = { x:0, y:0 }; });

  let W = 0, H = 0;
  const SUN_R = 28;

  function resize() {
    const pw = canvas.parentElement.clientWidth;
    W = pw; H = Math.round(pw * 0.72);
    canvas.width  = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.scale(DPR, DPR);

    const cx = W/2, cy = H/2;
    const tracks = TRACK_KEYS.filter(t => nodes.some(n => n.track === t));
    tracks.forEach((t, i) => {
      const angle = (i / tracks.length) * Math.PI * 2 - Math.PI/2;
      const radius = Math.min(W, H) * 0.30;
      clusters[t] = { x: cx + Math.cos(angle)*radius, y: cy + Math.sin(angle)*radius };
    });
  }
  resize();
  window.addEventListener('resize', () => { ctx.resetTransform(); resize(); });

  // ── Reveal state machine ──
  // Phase 0: waiting
  // Phase 1: sun pulses in (0→1, 600ms)
  // Phase 2: sun holds, wave starts expanding
  // Phase 3: wave reaches clusters → nodes born per-wave
  // Phase 4: fully alive, physics running
  let phase       = 0;
  let phaseStart  = 0;
  let waveRadius  = 0;
  let waveAlpha   = 0;
  const WAVE_SPEED = 1.8;   // px per frame
  const waves     = [];     // [{r, alpha}]
  let sunAlpha    = 0;
  let sunPulse    = 0;      // sin shimmer

  function startReveal(ts) {
    phase = 1; phaseStart = ts;
    // Place nodes at sun center — they'll fly out when born
    nodes.forEach(n => {
      n.x = W/2 + (Math.random()-0.5)*8;
      n.y = H/2 + (Math.random()-0.5)*8;
      n.vx = 0; n.vy = 0;
      n.alpha = 0; n.born = false;
    });
  }

  let revealFired = false;
  function checkReveal() {
    if (revealFired) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.72) {
      revealFired = true;
      window.removeEventListener('scroll', checkReveal);
    }
  }
  window.addEventListener('scroll', checkReveal, { passive: true });
  setTimeout(checkReveal, 300);

  // ── Hover / click ──
  let hoveredIdx = -1;
  let sunHovered = false;

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX-rect.left, my = e.clientY-rect.top;

    // Check sun hover first
    const sunDist = Math.hypot(mx - W/2, my - H/2);
    sunHovered = sunDist < SUN_R + 8 && sunAlpha > 0.5;

    let found = -1;
    if (!sunHovered) {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!n.born) continue;
        if (Math.hypot(n.x-mx, n.y-my) < n.radius+8) { found=i; break; }
      }
    }
    hoveredIdx = found;
    canvas.style.cursor = (found >= 0 || sunHovered) ? 'pointer' : 'default';
  });

  canvas.addEventListener('mouseleave', () => { hoveredIdx=-1; sunHovered=false; canvas.style.cursor='default'; });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX-rect.left, my = e.clientY-rect.top;

    // Sun click → open community chat
    if (Math.hypot(mx - W/2, my - H/2) < SUN_R + 8 && sunAlpha > 0.5) {
      window.open('https://wa.me/+6281234567890', '_blank');
      return;
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!n.born) continue;
      if (Math.hypot(n.x-mx, n.y-my) < n.radius+10) {
        showCardFromPoint(n.i, e.clientX, e.clientY, 18); break;
      }
    }
  });

  // ── Physics constants ──
  const REPEL   = 380;
  const CLUSTER = 0.015;
  const SUN_PULL = 0.003;   // gentle pull toward center
  const DAMPING  = 0.84;
  const EDGE_DIST = 85;

  let lastTs = 0;
  function tick(ts) {
    if (!hubRunning) return;
    requestAnimationFrame(tick);

    const dt = Math.min(ts - lastTs, 32); lastTs = ts;

    // ── Phase transitions ──
    if (!revealFired) { ctx.clearRect(0,0,W,H); return; }
    if (phase === 0) startReveal(ts);

    if (phase === 1) {
      // Sun fade in
      const prog = Math.min((ts - phaseStart) / 700, 1);
      sunAlpha = prog;
      if (prog >= 1) {
        phase = 2; phaseStart = ts;
        // Emit first wave
        waves.push({ r: SUN_R, alpha: 0.9 });
      }
    }

    if (phase === 2) {
      // Sun holds, emit repeating waves, wait for wave to reach clusters
      const elapsed = ts - phaseStart;
      // Emit a wave every 500ms, 3 waves total
      if (elapsed > 0   && waves.length < 2) waves.push({ r: SUN_R, alpha: 0.8 });
      if (elapsed > 500 && waves.length < 3) waves.push({ r: SUN_R, alpha: 0.7 });
      if (elapsed > 900) { phase = 3; phaseStart = ts; }
    }

    if (phase === 3 || phase === 4) {
      // Birth nodes as wave reaches them
      nodes.forEach(n => {
        if (n.born) return;
        const c  = clusters[n.track] || {x:W/2, y:H/2};
        const cd = Math.hypot(c.x - W/2, c.y - H/2);
        // Find leading wave
        const lead = waves.reduce((max, w) => w.r > max ? w.r : max, 0);
        if (lead >= cd - 20) {
          n.born = true;
          // Launch from sun toward cluster with some spread
          const angle = Math.atan2(c.y-H/2, c.x-W/2) + (Math.random()-0.5)*0.6;
          const speed = 3 + Math.random()*2;
          n.vx = Math.cos(angle)*speed;
          n.vy = Math.sin(angle)*speed;
        }
      });
      if (nodes.every(n => n.born) && phase === 3) phase = 4;
    }

    // ── Expand waves ──
    for (let i = waves.length-1; i >= 0; i--) {
      waves[i].r     += WAVE_SPEED;
      waves[i].alpha *= 0.978;
      if (waves[i].alpha < 0.008 || waves[i].r > Math.hypot(W,H)) waves.splice(i,1);
    }

    // ── Sun shimmer ──
    sunPulse += 0.04;

    // ── Physics (only born nodes) ──
    nodes.forEach(n => {
      if (!n.born) return;
      // Fade in
      n.alpha = Math.min(n.alpha + 0.04, 1);

      let fx = 0, fy = 0;

      // Cluster attraction
      const c = clusters[n.track] || {x:W/2, y:H/2};
      fx += (c.x - n.x) * CLUSTER;
      fy += (c.y - n.y) * CLUSTER;

      // Weak pull toward sun (keeps everything feeling connected)
      fx += (W/2 - n.x) * SUN_PULL;
      fy += (H/2 - n.y) * SUN_PULL;

      // Repel from other nodes
      for (let j = 0; j < nodes.length; j++) {
        const b = nodes[j];
        if (b === n || !b.born) continue;
        const dx = n.x-b.x, dy = n.y-b.y;
        const d2 = dx*dx+dy*dy+0.01;
        const d  = Math.sqrt(d2);
        if (d < 65) {
          const f = REPEL/d2;
          fx += (dx/d)*f; fy += (dy/d)*f;
        }
      }

      // Repel from sun center
      const sdx = n.x-W/2, sdy = n.y-H/2;
      const sd  = Math.hypot(sdx,sdy)+0.01;
      if (sd < SUN_R+30) {
        const f = 600/sd;
        fx += (sdx/sd)*f; fy += (sdy/sd)*f;
      }

      // Boundary
      const PAD = 24;
      if (n.x<PAD)   fx += (PAD-n.x)*0.18;
      if (n.x>W-PAD) fx -= (n.x-(W-PAD))*0.18;
      if (n.y<PAD)   fy += (PAD-n.y)*0.18;
      if (n.y>H-PAD) fy -= (n.y-(H-PAD))*0.18;

      n.vx = (n.vx+fx)*DAMPING;
      n.vy = (n.vy+fy)*DAMPING;
      n.x += n.vx; n.y += n.vy;
    });

    // Hover glow lerp
    nodes.forEach((n,i) => {
      const target = i===hoveredIdx ? 1 : 0;
      n.glow += (target-n.glow)*(target>n.glow ? 0.14 : 0.07);
    });

    // ── DRAW ──
    ctx.clearRect(0,0,W,H);

    // Waves
    waves.forEach(w => {
      ctx.beginPath();
      ctx.arc(W/2, H/2, w.r, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(88,166,255,${w.alpha * sunAlpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Edges
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!a.born) continue;
      for (let j = i+1; j < nodes.length; j++) {
        const b = nodes[j];
        if (!b.born || a.track !== b.track) continue;
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d > EDGE_DIST) continue;
        const op = (1-d/EDGE_DIST)*0.15*a.alpha*b.alpha;
        ctx.beginPath();
        ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = `rgba(${a.r},${a.g},${a.b},${op})`;
        ctx.lineWidth = 0.8; ctx.stroke();
      }
    }

    // Nodes
    nodes.forEach((n,i) => {
      if (!n.born) return;
      const gl   = n.glow;
      const drawR = n.radius + gl*3;
      const a    = n.alpha;

      if (gl > 0.05) {
        const grd = ctx.createRadialGradient(n.x,n.y,drawR*0.5,n.x,n.y,drawR*3.5);
        grd.addColorStop(0, `rgba(${n.r},${n.g},${n.b},${0.35*gl*a})`);
        grd.addColorStop(1, `rgba(${n.r},${n.g},${n.b},0)`);
        ctx.beginPath(); ctx.arc(n.x,n.y,drawR*3.5,0,Math.PI*2);
        ctx.fillStyle=grd; ctx.fill();
      }

      ctx.beginPath(); ctx.arc(n.x,n.y,drawR,0,Math.PI*2);
      ctx.fillStyle=`rgba(${n.r},${n.g},${n.b},${(0.5+gl*0.5)*a})`; ctx.fill();

      ctx.beginPath(); ctx.arc(n.x,n.y,drawR*0.45,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${(0.65+gl*0.35)*a})`; ctx.fill();

      if (gl > 0.1) {
        ctx.save(); ctx.globalAlpha = gl*a;
        ctx.font='500 12px Inter,sans-serif';
        ctx.textAlign='center'; ctx.textBaseline='bottom';
        const label = n.p.name.split(' ')[0];
        const lw = ctx.measureText(label).width;
        const px=6, py=3;
        ctx.fillStyle='rgba(13,17,23,0.82)';
        ctx.beginPath();
        ctx.roundRect(n.x-lw/2-px, n.y-drawR-8-14-py, lw+px*2, 14+py*2, 4);
        ctx.fill();
        ctx.fillStyle='rgb(230,237,243)';
        ctx.fillText(label, n.x, n.y-drawR-8);
        ctx.restore();
      }
    });

    // Sun
    if (sunAlpha > 0) {
      const pulse  = Math.sin(sunPulse)*0.12;
      const sr     = SUN_R * (1 + pulse*0.06);
      const cx=W/2, cy=H/2;

      // Outer ambient glow
      const ag = ctx.createRadialGradient(cx,cy,sr*0.5,cx,cy,sr*4);
      ag.addColorStop(0, `rgba(88,166,255,${0.12*sunAlpha})`);
      ag.addColorStop(1, `rgba(88,166,255,0)`);
      ctx.beginPath(); ctx.arc(cx,cy,sr*4,0,Math.PI*2);
      ctx.fillStyle=ag; ctx.fill();

      // Core glow
      const cg = ctx.createRadialGradient(cx,cy,0,cx,cy,sr);
      cg.addColorStop(0,   `rgba(200,225,255,${sunAlpha})`);
      cg.addColorStop(0.4, `rgba(88,166,255,${0.9*sunAlpha})`);
      cg.addColorStop(1,   `rgba(40,100,200,${0.6*sunAlpha})`);
      ctx.beginPath(); ctx.arc(cx,cy,sr,0,Math.PI*2);
      ctx.fillStyle=cg; ctx.fill();

      // Bright center dot
      ctx.beginPath(); ctx.arc(cx,cy,sr*0.35,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${0.95*sunAlpha})`; ctx.fill();

      // Accent ring
      ctx.beginPath(); ctx.arc(cx,cy,sr+2,0,Math.PI*2);
      ctx.strokeStyle=`rgba(88,166,255,${0.3*sunAlpha})`;
      ctx.lineWidth=1; ctx.stroke();

      // Hover label
      if (sunHovered) {
        const label = 'Community Hub';
        ctx.save();
        ctx.font = '500 13px Inter,sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        const lw = ctx.measureText(label).width;
        const px = 10, py = 5;
        const lx = cx, ly = cy - sr - 10;
        // Pill bg
        ctx.fillStyle = 'rgba(13,17,23,0.85)';
        ctx.beginPath();
        ctx.roundRect(lx - lw/2 - px, ly - 14 - py, lw + px*2, 14 + py*2, 6);
        ctx.fill();
        // Border
        ctx.strokeStyle = 'rgba(88,166,255,0.4)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
        // Text
        ctx.fillStyle = 'rgb(88,166,255)';
        ctx.fillText(label, lx, ly);
        // Small arrow hint
        ctx.font = '11px Inter,sans-serif';
        ctx.fillStyle = 'rgba(88,166,255,0.6)';
        ctx.fillText('↗ open chat', lx, ly + 16);
        ctx.restore();

        // Extra glow ring on hover
        ctx.beginPath(); ctx.arc(cx,cy,sr+10,0,Math.PI*2);
        ctx.strokeStyle=`rgba(88,166,255,0.2)`;
        ctx.lineWidth=2; ctx.stroke();
      }
    }

    // Legend
    const activeTracks = [...new Set(nodes.map(n=>n.track))];
    const bornAlpha = phase >= 3 ? Math.min((nodes.filter(n=>n.born).length/nodes.length)*2,1) : 0;
    ctx.save(); ctx.globalAlpha = 0.55 * bornAlpha;
    ctx.font='11px Inter,sans-serif';
    activeTracks.forEach((t,i) => {
      const m = TRACK_META[t]||TRACK_META['Software'];
      const lx=W-12, ly=16+i*18;
      ctx.beginPath(); ctx.arc(lx-62,ly,3.5,0,Math.PI*2);
      ctx.fillStyle=`rgb(${m.r},${m.g},${m.b})`; ctx.fill();
      ctx.fillStyle='rgba(139,148,158,0.85)';
      ctx.textAlign='left';
      ctx.fillText(t, lx-54, ly+4);
    });
    ctx.restore();
  }

  let hubRunning = false;
  const hubObs = new IntersectionObserver(entries => {
    hubRunning = entries[0].isIntersecting;
    if (hubRunning) requestAnimationFrame(tick);
  }, { threshold: 0.01 });
  hubObs.observe(canvas);
}

/* ── PLEXUS / PARTICLE NETWORK ── */

function initPlexus() {
  const canvas  = document.getElementById('plexusCanvas');
  if (!canvas) return;
  const ctx     = canvas.getContext('2d');
  const section = document.getElementById('gallery');

  function resize() {
    canvas.width  = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  const PARTICLE_COUNT = 48;
  const CONNECT_DIST   = 130;   // max distance to draw a line
  const SPEED          = 0.35;  // very slow drift
  const DOT_R          = 0.9;   // particle radius
  const DOT_OPACITY    = 0.7;
  const LINE_OPACITY   = 0.12;  // max line opacity at closest point
  const COLOR          = '255, 255, 255'; // white

  const particles = [];

  function rand(min, max) { return min + Math.random() * (max - min); }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x:  rand(0, canvas.width),
      y:  rand(0, canvas.height),
      vx: rand(-SPEED, SPEED),
      vy: rand(-SPEED, SPEED),
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update positions
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a  = particles[i];
        const b  = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < CONNECT_DIST) {
          const alpha = LINE_OPACITY * (1 - d / CONNECT_DIST);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw dots as spotlight glows
    for (const p of particles) {
      // Outer glow
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, DOT_R * 3);
      glow.addColorStop(0,   `rgba(${COLOR}, ${DOT_OPACITY})`);
      glow.addColorStop(0.4, `rgba(${COLOR}, ${DOT_OPACITY * 0.3})`);
      glow.addColorStop(1,   `rgba(${COLOR}, 0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_R * 3, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Bright core
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_R * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${COLOR}, 0.95)`;
      ctx.fill();
    }

    if (plexusRunning) requestAnimationFrame(tick);
  }

  let plexusRunning = false;
  const plexusObs = new IntersectionObserver(entries => {
    plexusRunning = entries[0].isIntersecting;
    if (plexusRunning) tick();
  }, { threshold: 0.01 });
  plexusObs.observe(section);
}
