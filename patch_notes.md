# C/26 Website — Dev Log & Patch Notes

**Project:** Class C/26 Informatics Engineering Website  
**Stack:** HTML · CSS · Vanilla JS  
**Status:** In Development

---

## [0.8.0] — Data & Card Expansion
> NIM field, card now shows NIM, marquee velocity tuning

### Added
- `nim` field on all 39 member entries (format `F1D02610XXX`)
- Member card now displays NIM alongside absen number: `#01 · F1D02610002`
- First skill tag in card gets accent styling (`.mc-tag-accent`) — blue border + bg

### Changed
- `applyCardData()` updated to render `#num · nim` in `.mc-num` field
- Marquee velocity lerp factor tuned to `0.045` for snappier scroll-direction response
- Marquee triple-duplicates items (`[...items, ...items, ...items]`) for seamless infinite loop in both directions

---

## [0.7.0] — Hero Entrance Animation System
> Staggered cascade animation on page load

### Added
- `hero-loaded` class injected on `<body>` via double `requestAnimationFrame` (~60ms after DOMContentLoaded) to gate all hero animations
- 6 distinct `@keyframes` for each hero layer, each with unique motion signature:
  - `heroEyebrow` — fade + slide up (0.1s delay)
  - `heroTitleReveal` — fade + scale from `0.96` (0.32s delay)
  - `heroSubtitle` — fade + slide up (0.62s delay)
  - `heroActions` — fade + scale from `0.94` (0.82s delay)
  - `heroStats` — fade + drift from right `translateX(20px)` (1.05s delay)
  - `heroPagination` — fade only (1.3s delay)
- `hero-photo-bg` fades in as backdrop alongside animation sequence
- **Hero Shimmer / Sheen** — `heroShimmer` keyframe on `.hero-title::after`: diagonal light sweep (`skewX(-15deg)`) triggers once at 1.8s, `mix-blend-mode: overlay`

### Changed
- All `.anim` hero elements now start `opacity: 0` by default, revealed only after `body.hero-loaded`
- `.hero-title` overrides any gradient text styles post-load — forced to flat `color: #F0F6FC` with `text-shadow` for photo-bg legibility

---

## [0.6.0] — People Directory: Marquee, Filters & Scroll Reveal
> Three major UX additions to the People section

### Added
- **Marquee ticker** (`#marqueeTrack`) — scrolling name strip above avatar grid
  - Renders all 39 members as `NAME · TRACK` items
  - Velocity-based: default auto-scrolls left; reverses direction on scroll-up
  - Seamless loop via triple-duplicate + position wrap logic
  - Edge fade via CSS `mask-image` gradient (8% fade on both sides)
  - Smooth velocity transition via lerp factor `0.045`
- **Filter pills** (`#peopleFilters`) — 8 track filters: All / Software / AI / Robotics / Data / Security / UI·UX / DevOps / Mobile
  - Active filter highlights pill with accent color
  - Non-matching avatars get `.dimmed` class: `opacity: 0.18`, `scale(0.95)`, `pointer-events: none`
  - Filtering uses `String.toLowerCase().includes()` — case-insensitive, partial match
- **People Stats mini-bar** — compact bar showing Members / Tracks / Divisions / Batch with dividers
- **Scroll Reveal** (`initScrollReveal`) — IntersectionObserver on all `.reveal` elements
  - Generic elements: fade + `translateY(22px)` → `translateY(0)`, threshold 15%
  - Marquee: slide from left `translateX(-18px)`
  - **Avatar grid: staggered per-item** — each `.av-item` delayed by `i × 18ms`, capped at 600ms total
  - All observers `unobserve` after first trigger (fire-once)

### Changed
- `positionCardByAvatar()` now also clamps card to bottom of viewport: `if (y + CARD_H > vh - 8) y = vh - CARD_H - 8`
- `pinnedIdx` variable added to track which avatar is currently active
- Card mousemove preview retained alongside click-pin: `mousemove` → `positionCard(e)`, `mouseleave` → `hideCard()`, `click` → `showCard(idx, e, true)`

---

## [0.5.0] — People Directory Overhaul + Hero Photo BG
> Avatar grid, floating card, cursor effect, class photo backdrop

### Added
- **Hero photo background** (`.hero-photo-bg`) — `FotoKelasC.jpeg` as full-bleed hero backdrop
  - `opacity: 0.13`, `blur(1.5px) grayscale(55%)`, `scale(1.04)` crop
  - Gradient overlay via `::after`: dark vignette top & bottom, lighter in middle
  - Fades in as part of hero animation sequence (via `heroPagination` keyframe)
- Avatar grid replacing previous list layout — 39 members rendered via JS
- Floating member card on avatar click, displays: name, number, hobby, skills, ket
- Smart card positioning: appears to the right of avatar, flips left if near viewport edge
- Cursor glow effect (blue radial blur) active only inside People Directory section
- Glow uses `lerp` for smooth non-rigid movement, `mix-blend-mode: screen` for clean blending
- Card z-index set below avatar grid — glow sits in background, not covering members

### Changed
- Avatar size increased: `48px → 72px`
- Avatar font switched to Instrument Serif italic for elegance
- Hover effect changed from `scale()` to `translateY(-2px)` — subtler lift
- Active state adds soft blue glow ring via `box-shadow`
- All sections centered via `display: flex; align-items: center`
- Section label now has divider lines on both sides (centered style)

---

## [0.4.0] — Interaction Model Change
> Hover → Click

### Changed
- Card trigger changed: hover delay removed, card now appears on **click only**
- Click outside to dismiss card
- Card re-clickable after close — fixed listener stacking bug that prevented re-open

### Fixed
- `{ once: true }` listener from previous click was consuming next click event → card couldn't reopen
- Fixed by: `removeEventListener` before each new open + 200ms delay before attaching new listener

---

## [0.3.0] — Card Position Bug Fixes

### Fixed
- **Card riding scroll** — card followed page scroll instead of staying anchored
  - Root cause: `position: fixed` coordinates not updating on scroll
  - Fix: `window.scroll` listener calls `closePinned()` — card dismisses on scroll (cleaner UX)
- **Card above navbar** — card appeared over sticky nav on top-row avatars
  - Fix: minimum `y` clamped to `NAV_H (64px)` below viewport top
- **Layout explosion** — People Directory section shifted down, overlapping Hero stats
  - Root cause: 7 elements incorrectly using `position: fixed` instead of `position: absolute`:
    - `.hero::before`, `.hero::after` — corner glows
    - `.hero-bg-tr`, `.hero-bg-bl` — accent blobs
    - `.hero-stats` — member/division/project count
    - `.hero-pagination` — page dots
    - `.gallery-item::before`, `.gallery-date` — gallery overlay
    - `.mc-photo::before` — card photo glow
  - Fix: all changed to `position: absolute`; only `.member-card` retains `position: fixed`
- **member-card inside flex section** — `position: fixed` behaved unexpectedly inside `display: flex` section
  - Fix: moved `#memberCard` out of `#people` section, placed as direct child of `<body>`

---

## [0.2.0] — Cursor Glow Effect

### Added
- Blue radial glow blob follows cursor inside `#people` section only
- Glow fades in/out on section enter/leave via `opacity` transition
- Uses `requestAnimationFrame` loop for 60fps tracking
- `lerp` factor tuned through iterations: `0.12 → 0.28` (final)

### Changed
- Glow brightness tuned: `rgba opacity 0.18 → 0.38` (center stop)
- Trail system attempted then removed — cleaner without it
- Trail iterations: 10 dots → 5 dots → 4 dots → removed entirely

---

## [0.1.0] — Initial Build
> Base layout, design system, static sections

### Added
- Design system: `#0D1117` base, `#58A6FF` accent, Instrument Serif + Inter
- Sections: Hero, People Directory, Works/Portfolio, Org Chart, Gallery, Footer
- Hero with radial corner glows, animated entrance (`fadeUp`)
- Works grid (6 projects, 2–3 col responsive)
- Org chart (flat hierarchy: Leader → Secretary / Treasurer / Coordinator)
- Gallery grid with mixed aspect ratios
- Sticky frosted-glass navbar
- Responsive breakpoints at 768px

---

*Last updated: 2026 · Built by the class, for the class*