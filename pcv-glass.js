/* Park City Village — Glass concept interactions for the Webflow build. Works on the native Webflow elements via data-pcv hooks. */
(function () {
  'use strict';
  var R = document.querySelector('[data-pcv-root]');
  if (!R) return;
  var $ = function (s, r) { return (r || R).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || R).querySelectorAll(s)); };
  var pcv = function (name, r) { return $('[data-pcv="' + name + '"]', r); };
  var pcvs = function (name, r) { return $$('[data-pcv="' + name + '"]', r); };
  var shuffle = function (a) { for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = a[k]; a[k] = a[j]; a[j] = t; } return a; };

  // Converted buttons are links with href="#": never jump to the top.
  $$('[data-btn]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); }); });

  // ---------- scroll lock + overlays ----------
  var locked = false, lockY = 0;
  function lock(on) {
    if (locked === on) return; locked = on;
    var b = document.body, h = document.documentElement;
    if (on) { lockY = window.scrollY; h.style.overflow = 'hidden'; b.style.overflow = 'hidden'; b.style.position = 'fixed'; b.style.top = -lockY + 'px'; b.style.left = '0'; b.style.right = '0'; b.style.width = '100%'; }
    else { h.style.overflow = ''; b.style.overflow = ''; b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = ''; window.scrollTo(0, lockY); }
  }
  var OVER = ['menu', 'parking', 'cal'];
  function isOpen(n) { var o = pcv(n); return o && o.style.display && o.style.display !== 'none'; }
  function show(n) { var o = pcv(n); if (!o) return; o.style.display = o.getAttribute('data-display') || 'block'; lock(true); }
  function hide(n) { var o = pcv(n); if (!o) return; o.style.display = 'none'; if (!OVER.some(isOpen)) lock(false); }
  pcvs('open-menu').forEach(function (b) { b.addEventListener('click', function () { show('menu'); }); });
  pcvs('close-menu').forEach(function (b) { b.addEventListener('click', function () { hide('menu'); }); });
  pcvs('menu-link').forEach(function (a) { a.addEventListener('click', function () { hide('menu'); }); });
  pcvs('open-parking').forEach(function (b) { b.addEventListener('click', function () { hide('menu'); show('parking'); }); });
  pcvs('close-parking').forEach(function (b) { b.addEventListener('click', function () { hide('parking'); }); });
  pcvs('close-cal').forEach(function (b) { b.addEventListener('click', function () { hide('cal'); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') OVER.forEach(hide); });

  // ---------- glass nav: is the header through the hero, then hides on scroll down / returns on scroll up ----------
  var nav = pcv('nav'), bar = pcv('nav-bar'), hero = $('section');
  var navShown = true, navSolid = false, lastY = 0;
  function paintNav() {
    nav.style.transform = navShown ? 'translateY(0)' : 'translateY(calc(-100% - 12px))';
    nav.style.opacity = navShown ? '1' : '0';
    nav.setAttribute('aria-hidden', navShown ? 'false' : 'true');
    bar.style.padding = navSolid ? 'max(8px, env(safe-area-inset-top)) 16px 8px 20px' : '16px 24px';
    bar.style.background = navSolid ? 'rgba(14,26,43,0.5)' : 'rgba(14,26,43,0)';
    bar.style.webkitBackdropFilter = bar.style.backdropFilter = navSolid ? 'blur(20px) saturate(180%)' : 'blur(0px) saturate(100%)';
    bar.style.borderBottomColor = navSolid ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0)';
    bar.style.boxShadow = navSolid ? '0 6px 20px rgba(8,14,26,0.18)' : '0 0 0 rgba(8,14,26,0)';
  }
  if (nav && bar) {
    window.addEventListener('scroll', function () {
      if (locked) return;
      var y = window.scrollY, heroEnd = hero ? hero.offsetHeight - 80 : 600;
      var solid = y > 24, shown = navShown;
      if (y < heroEnd) shown = true; else if (y < lastY - 6) shown = true; else if (y > lastY + 6) shown = false;
      lastY = y;
      if (solid !== navSolid || shown !== navShown) { navSolid = solid; navShown = shown; paintNav(); }
    }, { passive: true });
    paintNav();
  }

  // ---------- places slider (stories) ----------
  var slider = pcv('slider'), logosBox = pcv('logos'), wrap = pcv('slider-wrap');
  if (slider && logosBox) (function () {
    var slides = pcvs('slide', slider), logos = pcvs('logo', logosBox), n = slides.length;
    // fair order: shuffle slides and their logos together
    var perm = shuffle(slides.map(function (_, k) { return k; }));
    perm.forEach(function (k) { slider.appendChild(slides[k]); logosBox.appendChild(logos[k]); });
    slides = perm.map(function (k) { return slides[k]; }); logos = perm.map(function (k) { return logos[k]; });
    var total = String(n).padStart(2, '0');
    var c1 = slides[n - 1].cloneNode(true), c2 = slides[0].cloneNode(true);
    [c1, c2].forEach(function (c) { c.removeAttribute('data-pcv'); c.setAttribute('aria-hidden', 'true'); $$('a', c).forEach(function (a) { a.setAttribute('tabindex', '-1'); }); });
    slider.insertBefore(c1, slider.firstChild); slider.appendChild(c2);
    var counter = pcv('counter'), i = 0, cycle = 0, paused = false, visible = false, timer = 0, dur = 5000, started = 0, left = 0, settle = 0, holdT = 0, suppress = false, dx = 0, dy = 0;
    var badge = document.createElement('div');
    badge.setAttribute('aria-live', 'polite');
    badge.setAttribute('style', 'position:absolute;right:24px;bottom:76px;display:none;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;color:#fff;pointer-events:none;background:rgba(255,255,255,0.22);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)');
    badge.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1"></rect><rect x="14" y="4" width="5" height="16" rx="1"></rect></svg>';
    (wrap || slider.parentElement).appendChild(badge);
    function paint() {
      if (counter) counter.textContent = String(i + 1).padStart(2, '0') + ' / ' + total;
      var running = !paused && visible;
      logos.forEach(function (l, k) {
        var on = k === i, done = k < i, ring = $('[data-pcv="ring"]', l);
        l.style.transform = 'scale(' + (on ? '1.06' : '0.94') + ')';
        l.style.opacity = on || done ? '1' : '0.78';
        l.setAttribute('aria-current', on ? 'true' : 'false');
        l.setAttribute('data-fx', on ? (cycle % 2 ? 'm-popA' : 'm-popB') : '');
        if (ring) {
          ring.setAttribute('data-fx', on && visible ? (cycle % 2 ? 'm-ringA' : 'm-ringB') : '');
          ring.setAttribute('stroke-dashoffset', done ? '0' : '125.7');
          ring.style.animationPlayState = running ? 'running' : 'paused';
        }
      });
      badge.style.display = paused ? 'inline-flex' : 'none';
    }
    function jump(p) { slider.style.scrollSnapType = 'none'; slider.scrollLeft = p * slider.clientWidth; void slider.offsetWidth; slider.style.scrollSnapType = ''; }
    function startTimer(ms) { clearTimeout(timer); if (!visible) return; dur = ms || 5000; started = Date.now(); timer = setTimeout(function () { step(1); }, dur); }
    function step(d, instant) {
      var cur = i; i = (cur + d + n) % n; cycle++;
      if (instant) jump(i + 1); else slider.scrollTo({ left: (cur + 1 + d) * slider.clientWidth, behavior: 'smooth' });
      paint(); startTimer();
    }
    function goTo(k) { i = k; cycle++; jump(k + 1); paint(); startTimer(); }
    function pause() { if (paused) return; clearTimeout(timer); left = Math.max(300, dur - (Date.now() - started)); paused = true; paint(); }
    function resume() { paused = false; paint(); startTimer(left); }
    function settled() {
      var p = Math.round(slider.scrollLeft / slider.clientWidth), real;
      if (p <= 0) { jump(n); real = n - 1; } else if (p >= n + 1) { jump(1); real = 0; } else real = p - 1;
      if (real !== i) { i = real; cycle++; paint(); startTimer(); }
    }
    slider.addEventListener('scroll', function () { clearTimeout(settle); settle = setTimeout(settled, 140); }, { passive: true });
    slider.addEventListener('click', function (e) {
      if (suppress) { suppress = false; return; }
      if (e.target.closest && e.target.closest('a:not([data-btn]), button')) return;
      var r = slider.getBoundingClientRect();
      if (e.clientX - r.left < r.width * 0.33) step(-1, true); else step(1, true);
    });
    slider.addEventListener('pointerdown', function (e) {
      if (e.target.closest && e.target.closest('a:not([data-btn]), button')) return;
      dx = e.clientX; dy = e.clientY; clearTimeout(holdT); holdT = setTimeout(pause, 220);
    });
    slider.addEventListener('pointermove', function (e) { if (Math.abs(e.clientX - dx) > 10 || Math.abs(e.clientY - dy) > 10) clearTimeout(holdT); });
    var end = function () { clearTimeout(holdT); holdT = 0; if (paused) { suppress = true; resume(); setTimeout(function () { suppress = false; }, 350); } };
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) { slider.addEventListener(t, end); });
    slider.addEventListener('contextmenu', function (e) { if (paused || holdT) e.preventDefault(); });
    logos.forEach(function (l, k) { l.addEventListener('click', function (e) { e.preventDefault(); goTo(k); }); });
    var pb = pcv('prev'), nb = pcv('next');
    if (pb) pb.addEventListener('click', function () { step(-1, true); });
    if (nb) nb.addEventListener('click', function () { step(1, true); });
    jump(1); paint();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        var vis = es[0].intersectionRatio >= 0.5;
        if (vis === visible) return; visible = vis;
        if (vis) { cycle++; paint(); startTimer(); } else { clearTimeout(timer); paint(); }
      }, { threshold: [0, 0.5, 1] }).observe(slider);
    } else { visible = true; paint(); startTimer(); }
    window.addEventListener('resize', function () { jump(i + 1); });
  })();

  // ---------- food: fair order ----------
  var food = pcv('food');
  if (food) { shuffle(pcvs('food-card', food)).forEach(function (c) { food.appendChild(c); }); food.scrollLeft = 0; requestAnimationFrame(function () { food.scrollLeft = 0; }); }

  // ---------- accordions (directory + footer) ----------
  pcvs('acc').forEach(function (acc) {
    var sum = pcv('acc-sum', acc), body = pcv('acc-body', acc), chev = pcv('chev', acc);
    if (!sum || !body) return;
    sum.setAttribute('aria-expanded', 'false');
    sum.addEventListener('click', function (e) {
      e.preventDefault();
      var open = body.style.display === 'none' || !body.style.display && getComputedStyle(body).display === 'none';
      body.style.display = open ? 'block' : 'none';
      sum.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (chev) { chev.style.transition = 'transform .25s ease'; chev.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)'; }
    });
  });

  // ---------- events ----------
  var EVENTS = [
      { id: 'e1', title: "Pre-season boot-fitting week", start: '2026-10-29T10:00', mins: 480, where: "Bootworks", cat: 'Gear' },
      { id: 'e2', title: "Thursday trivia night", start: '2026-10-29T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e3', title: "Harvest pumpkin bread morning", start: '2026-10-30T08:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e4', title: "Season locker sign-ups", start: '2026-10-30T09:00', mins: 480, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e5', title: "Caramel apple dipping for kids", start: '2026-10-31T13:00', mins: 90, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e6', title: "Halloween costume apr\u00e8s (21+)", start: '2026-10-31T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e7', title: "Trick-or-treat around the Village", start: '2026-10-31T16:00', mins: 120, where: "Shops across the Village", cat: 'Family' },
      { id: 'e8', title: "Sunday brunch & coffee tasting", start: '2026-11-01T09:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e9', title: "Ski & board swap drop-off", start: '2026-11-01T10:00', mins: 360, where: "Cole Sport", cat: 'Gear' },
      { id: 'e10', title: "Wax & tune clinic", start: '2026-11-03T17:30', mins: 90, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e11', title: "Locals night: half-price apps", start: '2026-11-05T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink' },
      { id: 'e12', title: "Rental pre-booking party", start: '2026-11-06T16:00', mins: 180, where: "Aloha Ski & Snowboard", cat: 'Gear' },
      { id: 'e13', title: "Ski swap: buy day", start: '2026-11-07T09:00', mins: 420, where: "Cole Sport", cat: 'Shopping' },
      { id: 'e14', title: "Live acoustic set", start: '2026-11-07T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music' },
      { id: 'e15', title: "Family fudge demo", start: '2026-11-08T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e16', title: "Thursday trivia night", start: '2026-11-12T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e17', title: "Demo day: new skis on snow", start: '2026-11-14T10:00', mins: 300, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e18', title: "Live music on the deck", start: '2026-11-14T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music' },
      { id: 'e19', title: "Custom insole open house", start: '2026-11-15T11:00', mins: 240, where: "Bootworks", cat: 'Gear' },
      { id: 'e20', title: "Opening night on the ice", start: '2026-11-19T16:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e21', title: "Opening day pancake breakfast", start: '2026-11-20T07:30', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e22', title: "First chair apr\u00e8s party", start: '2026-11-20T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e23', title: "Live apr\u00e8s set on the deck", start: '2026-11-21T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music' },
      { id: 'e24', title: "Learn-to-skate morning", start: '2026-11-22T10:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e25', title: "Thanksgiving Day skate", start: '2026-11-26T12:00', mins: 240, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e26', title: "Black Friday gear sale", start: '2026-11-27T09:00', mins: 480, where: "Cole Sport", cat: 'Shopping' },
      { id: 'e27', title: "Village tree lighting", start: '2026-11-27T17:30', mins: 90, where: "Rinkside plaza", cat: 'Family' },
      { id: 'e28', title: "Small Business Saturday", start: '2026-11-28T10:00', mins: 420, where: "Shops across the Village", cat: 'Shopping' },
      { id: 'e29', title: "Live music on the deck", start: '2026-11-28T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music' },
      { id: 'e30', title: "Cocoa & carols by the fire", start: '2026-12-05T16:00', mins: 120, where: "Fire pits, Village plaza", cat: 'Family' },
      { id: 'e31', title: "Boot-fitting clinic", start: '2026-12-06T10:00', mins: 180, where: "Bootworks", cat: 'Gear' },
      { id: 'e32', title: "Thursday trivia night", start: '2026-12-10T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e33', title: "Family skate night with a DJ", start: '2026-12-11T18:00', mins: 150, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e34', title: "Ugly sweater apr\u00e8s (21+)", start: '2026-12-12T15:00', mins: 180, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e35', title: "Fudge-making demo", start: '2026-12-13T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e36', title: "Holiday gift wrap & shop night", start: '2026-12-17T16:00', mins: 240, where: "Shops across the Village", cat: 'Shopping' },
      { id: 'e37', title: "Ugly sweater skate", start: '2026-12-19T15:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e38', title: "Live holiday music", start: '2026-12-20T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music' },
      { id: 'e39', title: "Christmas Eve skate & cocoa", start: '2026-12-24T14:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e40', title: "Holiday truffle tasting", start: '2026-12-26T13:00', mins: 120, where: "Rocky Mountain Chocolate Factory", cat: 'Food & drink' },
      { id: 'e41', title: "New Year's Eve apr\u00e8s bash (21+)", start: '2026-12-31T15:00', mins: 300, where: "Pig Pen Saloon", cat: 'Music' },
      { id: 'e42', title: "New Year's Eve glow skate", start: '2026-12-31T17:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e43', title: "New Year recovery brunch", start: '2027-01-01T09:00', mins: 240, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e44', title: "Kids ski-gear swap", start: '2027-01-09T10:00', mins: 240, where: "Aloha Ski & Snowboard", cat: 'Family' },
      { id: 'e45', title: "Locals night: half-price apps", start: '2027-01-14T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink' },
      { id: 'e46', title: "Sundance week apr\u00e8s", start: '2027-01-22T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Music' },
      { id: 'e47', title: "Moonlight skate", start: '2027-01-23T19:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e48', title: "Winter boot tune-up day", start: '2027-01-30T10:00', mins: 300, where: "Bootworks", cat: 'Gear' }
    ];
  var MON = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var pad = function (x) { return String(x).padStart(2, '0'); };
  var parts = function (s) { var dt = s.split('T'), d = dt[0].split('-').map(Number), t = dt[1].split(':').map(Number); return { y: d[0], m: d[1], d: d[2], hh: t[0], mm: t[1] }; };
  var addMins = function (p, mins) { var t = new Date(Date.UTC(p.y, p.m - 1, p.d, p.hh, p.mm) + mins * 60000); return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate(), hh: t.getUTCHours(), mm: t.getUTCMinutes() }; };
  var stamp = function (p) { return '' + p.y + pad(p.m) + pad(p.d) + 'T' + pad(p.hh) + pad(p.mm) + '00'; };
  var iso = function (p) { return p.y + '-' + pad(p.m) + '-' + pad(p.d) + 'T' + pad(p.hh) + ':' + pad(p.mm) + ':00'; };
  var clock = function (p) { var h = p.hh % 12 || 12; return h + (p.mm ? ':' + pad(p.mm) : '') + ' ' + (p.hh < 12 ? 'am' : 'pm'); };
  var ADDR = 'Park City Village, 1415 Lowell Ave, Park City, UT 84060', q = encodeURIComponent;
  var esc = function (s) { return s.replace(/,/g, '\\,'); };
  function decorate(e) {
    var s = parts(e.start), en = addMins(s, e.mins), loc = e.where + ', ' + ADDR, details = e.title + ' at Park City Village. Free parking after noon.';
    var wd = DAY[new Date(Date.UTC(s.y, s.m - 1, s.d)).getUTCDay()];
    return {
      e: e, key: e.start.slice(0, 10), wdShort: wd.slice(0, 3), dayNum: pad(s.d), monthShort: MON[s.m - 1].slice(0, 3), dateLong: wd + ', ' + MON[s.m - 1] + ' ' + s.d,
      timeRange: clock(s) + ' – ' + clock(en), startMs: Date.UTC(s.y, s.m - 1, s.d, s.hh, s.mm) + 7 * 3600000, endMs: Date.UTC(en.y, en.m - 1, en.d, en.hh, en.mm) + 7 * 3600000,
      google: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + q(e.title) + '&dates=' + stamp(s) + '/' + stamp(en) + '&ctz=America/Denver&location=' + q(loc) + '&details=' + q(details),
      outlook: 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=' + q(e.title) + '&startdt=' + q(iso(s) + '-07:00') + '&enddt=' + q(iso(en) + '-07:00') + '&location=' + q(loc) + '&body=' + q(details),
      ics: ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Park City Village//Calendar//EN', 'BEGIN:VTIMEZONE', 'TZID:America/Denver', 'BEGIN:STANDARD', 'DTSTART:19701101T020000', 'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU', 'TZOFFSETFROM:-0600', 'TZOFFSETTO:-0700', 'TZNAME:MST', 'END:STANDARD', 'BEGIN:DAYLIGHT', 'DTSTART:19700308T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU', 'TZOFFSETFROM:-0700', 'TZOFFSETTO:-0600', 'TZNAME:MDT', 'END:DAYLIGHT', 'END:VTIMEZONE', 'BEGIN:VEVENT', 'UID:' + e.id + '@parkcityvillage', 'DTSTAMP:' + stamp(s) + 'Z', 'DTSTART;TZID=America/Denver:' + stamp(s), 'DTEND;TZID=America/Denver:' + stamp(en), 'SUMMARY:' + esc(e.title), 'LOCATION:' + esc(loc), 'DESCRIPTION:' + esc(details), 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
    };
  }
  var ALL = EVENTS.map(decorate);
  var current = null;
  function openCal(ev) {
    current = ev; var c = pcv('cal'); if (!c) return;
    var t = $('[data-f="title"]', c); if (t) t.textContent = ev.e.title;
    var w = $('[data-f="whenwhere"]', c); if (w) { w.textContent = ''; w.appendChild(document.createTextNode(ev.dateLong + ' · ' + ev.timeRange)); w.appendChild(document.createElement('br')); w.appendChild(document.createTextNode(ev.e.where)); }
    var g = pcv('cal-google', c); if (g) { g.href = ev.google; g.target = '_blank'; g.rel = 'noopener'; }
    var o = pcv('cal-outlook', c); if (o) { o.href = ev.outlook; o.target = '_blank'; o.rel = 'noopener'; }
    show('cal');
  }
  var ics = pcv('cal-ics');
  if (ics) ics.addEventListener('click', function (e) {
    e.preventDefault(); if (!current) return;
    try { var blob = new Blob([current.ics], { type: 'text/calendar;charset=utf-8' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = current.e.id + '.ics'; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); } catch (err) {}
  });
  var box = pcv('agenda-box'), featTpl = pcv('featured'), rowsBox = pcv('rows'), rowTpl = rowsBox && pcv('row', rowsBox), empty = pcv('empty');
  if (box && featTpl && rowsBox && rowTpl) (function () {
    rowTpl.parentNode.removeChild(rowTpl);
    function fill(el, ev) {
      var set = function (k, v) { var x = $('[data-f="' + k + '"]', el); if (x) x.textContent = v; };
      set('wd', ev.wdShort); set('day', ev.dayNum); set('mon', ev.monthShort); set('time', ev.timeRange); set('title', ev.e.title); set('where', ev.e.where);
      var add = pcv('add', el); if (add) { add.setAttribute('aria-label', 'Add ' + ev.e.title + ' to calendar'); add.onclick = function (x) { x.preventDefault(); openCal(ev); }; }
    }
    var today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver' }).format(new Date()), tk = parts(today + 'T00:00');
    var dayKey = function (k) { var t = new Date(Date.UTC(tk.y, tk.m - 1, tk.d) + k * 86400000); return t.getUTCFullYear() + '-' + pad(t.getUTCMonth() + 1) + '-' + pad(t.getUTCDate()); };
    var dow = new Date(Date.UTC(tk.y, tk.m - 1, tk.d)).getUTCDay();
    var weekend = dow === 0 ? [dayKey(0)] : dow === 6 ? [dayKey(0), dayKey(1)] : [dayKey(5 - dow), dayKey(6 - dow), dayKey(7 - dow)];
    var next7 = [0, 1, 2, 3, 4, 5, 6].map(dayKey);
    function render(f) {
      var now = Date.now(), up = ALL.filter(function (x) { return x.endMs > now; });
      var list = f === 'today' ? up.filter(function (x) { return x.key === today; }) : f === 'weekend' ? up.filter(function (x) { return weekend.indexOf(x.key) >= 0; }) : f === 'week' ? up.filter(function (x) { return next7.indexOf(x.key) >= 0; }) : up;
      featTpl.style.display = list.length ? '' : 'none';
      if (list[0]) fill(featTpl, list[0]);
      rowsBox.innerHTML = '';
      list.slice(1, 4).forEach(function (ev) { var r = rowTpl.cloneNode(true); fill(r, ev); rowsBox.appendChild(r); });
      if (empty) empty.style.display = list.length ? 'none' : 'block';
      pcvs('chip').forEach(function (c) {
        var on = c.getAttribute('data-filter') === f;
        c.style.background = on ? '#0E1A2B' : '#FFFFFF'; c.style.color = on ? '#FFFFFF' : '#0E1A2B'; c.style.borderColor = on ? '#0E1A2B' : '#D5D9DF';
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    pcvs('chip').forEach(function (c) { c.addEventListener('click', function (e) { e.preventDefault(); render(c.getAttribute('data-filter')); }); });
    render('next');
  })();
})();
