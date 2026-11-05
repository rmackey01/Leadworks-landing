document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap\" rel=\"stylesheet\">\n<style>\n*{box-sizing:border-box}\nhtml{scroll-behavior:smooth;scroll-padding-top:96px}\nbody{margin:0;background:#0A1322;color:#EAF2FB;font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na,button{font-family:inherit}\nbutton{cursor:pointer}\na:focus-visible,button:focus-visible{outline:3px solid #FFC873;outline-offset:3px}\n.s-wrap{width:100%;max-width:1280px;margin:0 auto;padding:0 48px}\n.s-serif{font-family:'DM Serif Display',Georgia,serif;font-weight:400}\n.s-k{font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#9CC9F0}\n.s-glass{background:rgba(234,242,251,.07);-webkit-backdrop-filter:blur(18px) saturate(1.3);backdrop-filter:blur(18px) saturate(1.3);border:1px solid rgba(234,242,251,.15)}\n.s-hero{background-image:linear-gradient(90deg,rgba(10,19,34,.85) 0%,rgba(10,19,34,.35) 50%,rgba(10,19,34,.1) 100%),linear-gradient(180deg,rgba(10,19,34,.4) 0%,rgba(10,19,34,0) 25%,rgba(10,19,34,1) 100%),url(/parkcityvillage/assets/bbe0964fe01a8527.jpg);background-size:cover;background-position:50% 45%}\n.s-flake{position:absolute;top:-12px;border-radius:50%;background:#FFFFFF;pointer-events:none;animation-name:sgFall;animation-timing-function:linear;animation-iteration-count:infinite}\n@keyframes sgFall{0%{transform:translate3d(0,-10px,0)}50%{transform:translate3d(18px,50vh,0)}100%{transform:translate3d(-8px,105vh,0)}}\n.s-nav a{color:#EAF2FB;text-decoration:none;font-size:15px;font-weight:600;padding:8px 14px;border-radius:999px;transition:background .2s}\n.s-nav a:hover{background:rgba(234,242,251,.1)}\n.s-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 24px;border-radius:999px;border:0;font-weight:700;font-size:15px;text-decoration:none;transition:transform .15s,filter .2s}\n.s-btn:hover{transform:translateY(-1px);filter:brightness(1.06)}\n.s-story{display:flex;flex-direction:column;align-items:center;gap:10px;width:110px;padding:8px 0;border:0;background:transparent;color:#EAF2FB;border-radius:18px;transition:transform .2s}\n.s-story:hover{transform:translateY(-3px)}\n.s-doorwrap{perspective:900px}\n.s-door{transform-origin:0 50%;transition:transform .7s cubic-bezier(.3,.8,.2,1);backface-visibility:hidden;-webkit-backface-visibility:hidden}\n.s-doorwrap:hover .s-door{filter:brightness(1.15)}\n.sg-glow{animation:sgGlow 3s ease-in-out infinite}\n@keyframes sgGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,200,115,0)}50%{box-shadow:0 0 26px 2px rgba(255,200,115,.35)}}\n.s-dir{display:flex;flex-direction:column;justify-content:space-between;min-height:104px;padding:18px;border-radius:20px;color:#EAF2FB;text-decoration:none;transition:border-color .2s,background .2s}\n.s-dir:hover{border-color:rgba(255,200,115,.5);background:rgba(234,242,251,.1)}\n.s-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:32px;background:rgba(6,12,22,.82);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}\n.s-modal{position:relative;width:100%;max-height:calc(100vh - 64px);overflow:auto;border-radius:26px;background:#12223D;border:1px solid rgba(234,242,251,.16);color:#EAF2FB;animation:sIn .3s cubic-bezier(.2,.9,.2,1) both}\n@keyframes sIn{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}\n.s-in{animation:sIn .4s cubic-bezier(.2,.9,.2,1) both}\n.sg-fillA{animation:sgFillA 5s linear forwards}\n.sg-fillB{animation:sgFillB 5s linear forwards}\n@keyframes sgFillA{from{width:0}to{width:100%}}\n@keyframes sgFillB{from{width:0}to{width:100%}}\n.s-arrow{width:56px;height:56px;border-radius:50%;border:1px solid rgba(234,242,251,.3);background:rgba(234,242,251,.08);color:#EAF2FB;font-size:22px;flex:none;transition:background .2s}\n.s-arrow:hover{background:rgba(234,242,251,.18)}\n@media (max-width:1180px){.s-wrap{padding:0 32px}}\n@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.s-flake{display:none}.s-door{transition:none}}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { b, bars, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, closeCal, closeParking, closeStory, d, dFlakes, dir, doors, downloadIcs, e, f, hasSel, l, navBg, navChip, nextStory, noSel, openParking, parkingOpen, parkingRows, prevStory, r, s, selEmpty, selEvents, selTitle, st, stFilter, storyCount, storyHoverIn, storyHoverOut, storyOpen, storyPaused, storyPlay, storyRail, t, watchAll } = v || {}; return html`<div style="background: radial-gradient(90% 50% at 50% 0%, #16294A 0%, #0E1A2E 45%, #0A1322 100%)">

<div style="position: fixed; top: 0; left: 0; right: 0; z-index: 60; padding: 14px 0 0">
<div class="s-wrap">
<div class="s-glass" style="display: flex; align-items: center; gap: 24px; padding: 8px 8px 8px 22px; border-radius: 999px; background: ${navBg}; transition: background .35s ease">
<a href="#top" class="s-serif" style="color: #EAF2FB; text-decoration: none; font-size: 22px; flex: none">Park City Village</a>
<nav class="s-nav" aria-label="Main" style="display: flex; gap: 4px; flex: 1; justify-content: center">
<a href="#stories">Around the Village</a><a href="#doors">Events</a><a href="#directory">Directory</a><a href="#parking">Parking</a>
</nav>
<button type="button" onClick=${openParking} class="s-btn" style="min-height: 44px; padding: 0 18px; background: #FFC873; color: #0A1322; font-size: 14px">P · ${navChip}</button>
</div>
</div>
</div>

<section id="top" class="s-hero" style="position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden">
<div aria-hidden="true" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none">
${(dFlakes||[]).map((f) => html`<span class="s-flake" style="left: ${f.left}; width: ${f.size}; height: ${f.size}; opacity: ${f.op}; animation-duration: ${f.dur}; animation-delay: ${f.delay}; filter: blur(${f.blur})"></span>`)}
</div>
<div class="s-wrap" style="position: relative; display: flex; justify-content: space-between; align-items: flex-end; gap: 48px; padding-bottom: 80px">
<div style="max-width: 760px">
<a href="#doors" class="s-glass" style="display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px 8px 8px; border-radius: 999px; color: #EAF2FB; text-decoration: none; font-size: 14px; font-weight: 600"><span aria-hidden="true" style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #9CC9F0; color: #0A1322">⛸</span>Rink reopens Nov 19</a>
<h1 class="s-serif" style="margin: 22px 0 0; font-size: 96px; line-height: .98; letter-spacing: -.01em">Where the mountain feels <span style="font-style: italic; color: #FFC873">like home</span></h1>
<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px">
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" class="s-btn" style="background: #EAF2FB; color: #0A1322">Find the Village</a>
<button type="button" onClick=${openParking} class="s-btn s-glass" style="color: #EAF2FB; font-weight: 600">Free parking after noon</button>
</div>
</div>
<button type="button" onClick=${watchAll} class="s-glass" style="display: flex; align-items: center; gap: 16px; padding: 16px 22px 16px 16px; border-radius: 24px; color: #EAF2FB; text-align: left; flex: none">
<span style="width: 64px; height: 64px; border-radius: 50%; padding: 3px; background: conic-gradient(from 200deg, #FFC873, #9CC9F0, #EAF2FB, #FFC873)"><span style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; border-radius: 50%; border: 3px solid #0E1A2E; background: #12223D; font-size: 22px">▶</span></span>
<span><span style="display: block; font-size: 16px; font-weight: 700">Watch the Village stories</span><span style="display: block; margin-top: 2px; font-size: 13px; color: rgba(234,242,251,.7)">${storyCount} local businesses · 5 sec each</span></span>
</button>
</div>
</section>

<section id="stories" style="padding: 88px 0 24px">
<div class="s-wrap">
<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 24px">
<div><div class="s-k">Stories</div><h2 class="s-serif" style="margin: 8px 0 0; font-size: 52px">Around the Village</h2></div>
<span style="font-size: 14px; color: rgba(234,242,251,.6)">Click a circle to watch · ← → to skip · Esc to close</span>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 12px 8px; margin-top: 32px; justify-items: center">
${(storyRail||[]).map((s) => html`
<button type="button" class="s-story" onClick=${s.open} aria-label="Watch ${s.name}">
<span style="width: 96px; height: 96px; border-radius: 50%; padding: 3px; background: ${s.ring}">
<span style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; border-radius: 50%; border: 4px solid #0E1A2E; overflow: hidden; background: ${s.logoBg}">
${(s.logo) ? html`<img src=${s.logo} alt="" style="width: 78%; height: 78%; object-fit: contain; filter: ${s.filter}" />` : null}
${(s.noLogo) ? html`<span class="s-serif" style="font-size: 30px; color: #0A1322">${s.initials}</span>` : null}
</span>
</span>
<span style="font-size: 13px; font-weight: 700; text-align: center; line-height: 1.25; opacity: ${s.labelOp}">${s.short}</span>
</button>
`)}
</div>
</div>
</section>

<section id="doors" style="padding: 88px 0 24px">
<div class="s-wrap">
<div class="s-k">The next 12 days</div>
<h2 class="s-serif" style="margin: 8px 0 0; font-size: 52px">Open a door, find a night out</h2>
<div style="display: grid; grid-template-columns: 1.15fr 1fr; gap: 40px; margin-top: 32px; align-items: start">
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px">
${(doors||[]).map((d) => html`
<button type="button" onClick=${d.pick} aria-pressed=${d.pressed} aria-label=${d.aria} class="s-doorwrap" style="position: relative; height: 128px; padding: 0; border: 0; background: transparent">
<span class=${d.glowClass} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 18px; background: ${d.insideBg}; border: 1.5px solid ${d.insideLine}; display: flex; flex-direction: column; align-items: center; justify-content: center; color: ${d.insideFg}">
<span aria-hidden="true" style="font-size: 26px; line-height: 1">${d.icon}</span>
<span style="margin-top: 6px; font-size: 13px; font-weight: 700">${d.wd} ${d.num}</span>
<span style="font-size: 12px; font-weight: 600; opacity: .85">${d.countLabel}</span>
</span>
<span class="s-door" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 18px; background: linear-gradient(160deg, #1D3560 0%, #132542 100%); border: 1.5px solid rgba(156,201,240,.35); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #EAF2FB; transform: ${d.doorT}; box-shadow: inset 0 0 0 5px rgba(10,19,34,.25)">
<span style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #9CC9F0">${d.wd}</span>
<span class="s-serif" style="font-size: 42px; line-height: 1">${d.num}</span>
<span aria-hidden="true" style="position: absolute; right: 10px; top: 50%; width: 6px; height: 6px; border-radius: 50%; background: #FFC873"></span>
${(d.has) ? html`<span aria-hidden="true" style="position: absolute; top: 9px; right: 11px; font-size: 12px; color: #FFC873">✦</span>` : null}
</span>
</button>
`)}
</div>
<div style="position: sticky; top: 110px">
${(noSel) ? html`<div class="s-glass" style="padding: 32px; border-radius: 26px; font-size: 16px; color: rgba(234,242,251,.8)">Click a door. Stars ✦ mean something's happening that day.</div>` : null}
${(hasSel) ? html`
<div class="s-glass" style="padding: 28px; border-radius: 26px" aria-live="polite">
<div class="s-serif" style="font-size: 32px">${selTitle}</div>
${(selEmpty) ? html`<p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: rgba(234,242,251,.8)">A quiet one. The shops and cafés are still open, so come warm up.</p>` : null}
${(selEvents||[]).map((e) => html`
<div style="display: flex; align-items: center; gap: 16px; padding: 18px 0; border-top: 1px solid rgba(234,242,251,.12)">
<div style="flex: 1; min-width: 0"><div style="font-size: 13px; font-weight: 700; color: #FFC873">${e.timeRange} · ${e.cat}</div><div style="margin-top: 3px; font-size: 19px; font-weight: 600; line-height: 1.3">${e.title}</div><div style="margin-top: 2px; font-size: 14px; color: rgba(234,242,251,.65)">${e.where}</div></div>
<button type="button" onClick=${e.add} style="flex: none; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(234,242,251,.3); background: transparent; color: #EAF2FB; font-size: 14px; font-weight: 600">+ Add to calendar</button>
</div>
`)}
</div>
` : null}
</div>
</div>
</div>
</section>

<section id="directory" style="padding: 88px 0 24px">
<div class="s-wrap">
<div class="s-k">A to Z</div>
<h2 class="s-serif" style="margin: 8px 0 0; font-size: 52px">Everyone at the base</h2>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 32px">
${(dir||[]).map((t) => html`
<a href=${t.url} target="_blank" rel="noopener" class="s-dir s-glass">
<span style="font-size: 16px; font-weight: 700; line-height: 1.3">${t.name}</span>
<span style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; font-size: 13px; color: rgba(234,242,251,.6)">${t.kind}<span aria-hidden="true" style="color: #9CC9F0">${t.arrow}</span></span>
</a>
`)}
</div>
</div>
</section>

<section id="parking" style="padding: 88px 0 24px">
<div class="s-wrap" style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 24px; align-items: stretch">
<div class="s-glass" style="padding: 40px; border-radius: 30px; background: linear-gradient(150deg, rgba(255,200,115,.22), rgba(234,242,251,.05)); display: flex; flex-direction: column">
<div class="s-k" style="color: #FFC873">Locals tip</div>
<div class="s-serif" style="margin-top: 10px; font-size: 56px; line-height: 1">Free parking after noon</div>
<p style="margin: 14px 0 0; font-size: 16px; line-height: 1.55; color: rgba(234,242,251,.85)">No reservation, every day, in the surface lots.</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 28px">
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" class="s-btn" style="background: #FFC873; color: #0A1322">Directions ↗</a>
<a href="https://www.resortcentericerink.com/tickets" target="_blank" rel="noopener" class="s-btn s-glass" style="color: #EAF2FB; font-weight: 600">⛸ Rink tickets ↗</a>
</div>
</div>
<div class="s-glass" style="padding: 28px; border-radius: 30px">
<div class="s-k">Mountain Village lots · 2026/27</div>
<div style="display: grid; gap: 8px; margin-top: 14px">
${(parkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 16px; background: ${r.bg}">
<div style="width: 130px; flex: none; font-size: 14px; font-weight: 800; color: ${r.whenColor}">${r.when}</div>
<div style="flex: 1; min-width: 0; font-size: 14px; line-height: 1.45; color: rgba(234,242,251,.85)">${r.text}</div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #EAF2FB; color: #0A1322; font-size: 13px; font-weight: 700; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
</div>
`)}
</div>
<button type="button" onClick=${openParking} style="margin-top: 14px; min-height: 44px; padding: 0 4px; border: 0; background: transparent; color: #9CC9F0; font-size: 14px; font-weight: 700">Free rides & fine print →</button>
</div>
</div>
</section>

<footer style="margin-top: 88px; padding: 48px 0 40px; border-top: 1px solid rgba(234,242,251,.1)">
<div class="s-wrap" style="display: flex; justify-content: space-between; align-items: flex-end; gap: 32px">
<div><div class="s-serif" style="font-size: 36px">Park City Village</div><div class="s-serif" style="margin-top: 4px; font-style: italic; font-size: 19px; color: #FFC873">Where the mountain feels like home</div></div>
<div style="text-align: right; font-size: 14px; line-height: 1.7; color: rgba(234,242,251,.6)">1415 Lowell Ave, Park City, Utah · At the base of Park City Mountain<br />© 2026 Park City Village · <a href="?view=mobile" style="color: #EAF2FB">View the mobile version</a></div>
</div>
</footer>

${(storyOpen) ? html`
<div class="s-overlay" role="dialog" aria-modal="true" aria-label=${st.name}>
<button type="button" aria-label="Close stories" onClick=${closeStory} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div style="position: relative; display: flex; align-items: center; gap: 28px">
<button type="button" class="s-arrow" onClick=${prevStory} aria-label="Previous story">←</button>
<div class="s-in" style="position: relative; width: 460px; height: min(800px, calc(100vh - 64px)); border-radius: 28px; overflow: hidden; background: ${st.tint}; box-shadow: 0 40px 100px rgba(0,0,0,.5)" onMouseEnter=${storyHoverIn} onMouseLeave=${storyHoverOut}>
${(st.img) ? html`<img src=${st.img} alt="" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover" />` : null}
<div aria-hidden="true" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(180deg, rgba(10,19,34,.6) 0%, rgba(10,19,34,0) 22%, rgba(10,19,34,0) 42%, rgba(10,19,34,.96) 100%)"></div>
<div style="position: absolute; top: 12px; left: 12px; right: 12px; display: flex; gap: 4px">
${(bars||[]).map((b) => html`<span style="flex: 1; height: 3px; border-radius: 2px; background: rgba(255,255,255,.3); overflow: hidden"><span class=${b.cls} style="display: block; height: 100%; width: ${b.w}; background: #FFFFFF; animation-play-state: ${storyPlay}"></span></span>`)}
</div>
<div style="position: absolute; top: 26px; left: 16px; right: 10px; display: flex; align-items: center; gap: 10px">
<span style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden; background: ${st.logoBg}; display: flex; align-items: center; justify-content: center">${(st.logo) ? html`<img src=${st.logo} alt="" style="width: 80%; height: 80%; object-fit: contain; filter: ${stFilter}" />` : null}</span>
<span style="flex: 1; font-size: 15px; font-weight: 700">${st.name}</span>
${(storyPaused) ? html`<span style="font-size: 12px; font-weight: 700; padding: 5px 10px; border-radius: 999px; background: rgba(0,0,0,.35)">❚❚ Paused</span>` : null}
<button type="button" onClick=${closeStory} aria-label="Close" style="width: 44px; height: 44px; border: 0; background: transparent; color: #FFFFFF; font-size: 22px">✕</button>
</div>
<div style="position: absolute; left: 24px; right: 24px; bottom: 30px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #FFC873">${st.kind}</div>
<div class="s-serif" style="margin-top: 6px; font-size: 44px; line-height: 1">${st.name}</div>
<p style="margin: 12px 0 0; font-size: 16px; line-height: 1.5; color: rgba(234,242,251,.92)">${st.blurb}</p>
<div style="margin-top: 6px; font-size: 14px; color: rgba(234,242,251,.7)">${st.where} · ${st.hoursLabel}</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px">
${(st.links||[]).map((l) => html`<a href=${l.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 46px; padding: 0 18px; border-radius: 999px; background: ${l.bg}; color: ${l.fg}; font-size: 14px; font-weight: 700; text-decoration: none">${l.label} ↗</a>`)}
</div>
</div>
</div>
<button type="button" class="s-arrow" onClick=${nextStory} aria-label="Next story">→</button>
</div>
</div>
` : null}

${(parkingOpen) ? html`
<div class="s-overlay" role="dialog" aria-modal="true" aria-label="Parking">
<button type="button" aria-label="Close parking info" onClick=${closeParking} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div class="s-modal" style="max-width: 900px; padding: 36px">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px">
<div><div class="s-k">Mountain Village lots · 2026/27</div><h2 class="s-serif" style="margin: 6px 0 0; font-size: 40px">Parking, made simple</h2></div>
<button type="button" onClick=${closeParking} aria-label="Close" style="width: 48px; height: 48px; flex: none; border-radius: 50%; border: 1px solid rgba(234,242,251,.3); background: transparent; color: #EAF2FB; font-size: 18px">✕</button>
</div>
<div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; margin-top: 20px">
<div style="display: grid; gap: 8px">
${(parkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: ${r.bg}">
<div style="flex: 1; min-width: 0"><div style="font-size: 14px; font-weight: 800; color: ${r.whenColor}">${r.when}</div><div style="margin-top: 2px; font-size: 14px; line-height: 1.45; color: rgba(234,242,251,.85)">${r.text}</div></div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 40px; padding: 0 12px; border-radius: 999px; background: #EAF2FB; color: #0A1322; font-size: 12px; font-weight: 700; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
</div>
`)}
</div>
<div>
<div class="s-k">More free ways in</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px">
<a href="https://www.parkcity.gov/services/transit/routes_schedules/index.php" target="_blank" rel="noopener" class="s-dir s-glass" style="min-height: 80px; padding: 14px"><span style="font-size: 14px; font-weight: 700">Park City Transit ↗</span><span style="font-size: 12px; color: rgba(234,242,251,.6)">Free buses</span></a>
<a href="https://www.hvtutah.gov/" target="_blank" rel="noopener" class="s-dir s-glass" style="min-height: 80px; padding: 14px"><span style="font-size: 14px; font-weight: 700">High Valley Transit ↗</span><span style="font-size: 12px; color: rgba(234,242,251,.6)">From the valley</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Richardson+Flat+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" class="s-dir s-glass" style="min-height: 80px; padding: 14px"><span style="font-size: 14px; font-weight: 700">Richardson Flat ↗</span><span style="font-size: 12px; color: rgba(234,242,251,.6)">Park & ride</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Ecker+Hill+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" class="s-dir s-glass" style="min-height: 80px; padding: 14px"><span style="font-size: 14px; font-weight: 700">Ecker Hill ↗</span><span style="font-size: 12px; color: rgba(234,242,251,.6)">Park & ride</span></a>
</div>
<p style="margin: 14px 0 0; font-size: 13px; line-height: 1.6; color: rgba(234,242,251,.7)"><b style="color: #EAF2FB">Good to know:</b> Park City High School is free on weekends and holidays. Bookings open Nov 3 at 8 am; hold up to 5. Arrive before noon and stay all day, no overnight. Cancel before 8 am for a refund; no-shows may get a $125 violation. <a href="https://www.parkatparkcitymountain.com/parkmountainvillage" target="_blank" rel="noopener" style="color: #9CC9F0; font-weight: 700">Full rules ↗</a></p>
</div>
</div>
</div>
</div>
` : null}

${(calOpen) ? html`
<div class="s-overlay" role="dialog" aria-modal="true" aria-label="Add to calendar">
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div class="s-modal" style="max-width: 440px; padding: 30px">
<div class="s-k">Add to calendar</div>
<h2 class="s-serif" style="margin: 6px 0 0; font-size: 30px; line-height: 1.1">${calTitle}</h2>
<div style="margin-top: 8px; font-size: 15px; line-height: 1.5; color: rgba(234,242,251,.8)">${calWhen}<br />${calWhere}</div>
<div style="display: grid; gap: 10px; margin-top: 20px">
<button type="button" onClick=${downloadIcs} class="s-btn" style="background: #EAF2FB; color: #0A1322">Apple Calendar (.ics)</button>
<a href=${calGoogle} target="_blank" rel="noopener" class="s-btn" style="border: 1px solid rgba(234,242,251,.3); color: #EAF2FB">Google Calendar ↗</a>
<a href=${calOutlook} target="_blank" rel="noopener" class="s-btn" style="border: 1px solid rgba(234,242,251,.3); color: #EAF2FB">Outlook ↗</a>
<button type="button" onClick=${closeCal} style="min-height: 44px; border: 0; background: transparent; color: rgba(234,242,251,.6); font-size: 14px; font-weight: 600">Cancel</button>
</div>
</div>
</div>
` : null}
</div>`; }
class DCLogic extends preact.Component { render() { return TPL(this.renderVals()); } }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { story: null, seen: {}, door: null, opened: {}, parking: false, calEv: null, solid: false };
    this.closeStory = () => { clearTimeout(this.t); this.setState({ story: null }); };
    this.nextStory = () => { const n = (this.state.story ?? -1) + 1; if (n >= (this.order || []).length) this.closeStory(); else this.goStory(n); };
    this.prevStory = () => this.goStory(Math.max(0, (this.state.story || 0) - 1));
    this.goStory = (i) => { clearTimeout(this.t); const id = this.order[i]; this.setState({ story: i, seen: { ...this.state.seen, [id]: true } }); this.t = setTimeout(this.nextStory, 5000); };
    this.openParking = () => this.setState({ parking: true });
    this.closeParking = () => this.setState({ parking: false });
    this.closeCal = () => this.setState({ calEv: null });
    this.onScroll = () => { const s = window.scrollY > 40; if (s !== this.state.solid) this.setState({ solid: s }); };
    this.downloadIcs = () => {
      try {
        const blob = new Blob([this.curIcs || ''], { type: 'text/calendar;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = (this.curName || 'park-city-village-event') + '.ics';
        document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      } catch (err) { /* download blocked: Google and Outlook still work */ }
    };
  }
  componentDidMount() { window.addEventListener('scroll', this.onScroll, { passive: true }); }
  componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); clearTimeout(this.t); this.lock(false); }
  componentDidUpdate() { this.lock(!!(this.state.story !== null || this.state.parking || this.state.calEv)); }
  lock(on) {
    if (this.locked === on) return; this.locked = on;
    const b = document.body, h = document.documentElement;
    if (on) { this.y = window.scrollY; h.style.overflow = 'hidden'; b.style.overflow = 'hidden'; b.style.position = 'fixed'; b.style.top = -this.y + 'px'; b.style.left = '0'; b.style.right = '0'; }
    else { h.style.overflow = ''; b.style.overflow = ''; b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; window.scrollTo(0, this.y || 0); }
  }
  renderVals() {
    const B = '/parkcityvillage/assets/';
    // ---- Tenants (shared content from the main concept); tint = brand color ----
    const T = {
      pigpen: { name: 'Pig Pen Saloon', short: 'Pig Pen', kind: 'Saloon · burgers & après', where: 'Rink level', hoursLabel: 'Daily 11–6 · 21+', blurb: 'The local spot for everyone. Family owned since 1999 and home of the Shot & Shirt.', img: B + '554eb72bcdb0490f.jpg', logo: B + '188aa4478905b10a.png', logoBg: '#FFFFFF', tint: '#5A2A1E', links: [{ label: 'Menus', url: 'https://www.pigpensaloon.com/menus' }, { label: 'Instagram', url: 'https://www.instagram.com/pigpensaloon/' }] },
      bluebird: { name: 'Bluebird Après Cafe', short: 'Bluebird', kind: 'Café · lunch & après', where: 'Second level, deck', hoursLabel: 'Daily from 11 am', blurb: 'Ski hard, après harder. Mac bowls, brisket melties, Dubai chocolate churros and kids’ meals.', img: B + 'd59bc581659f4cd4.jpg', logo: B + '572b540d387fbdbc.png', logoBg: '#FFFFFF', tint: '#1E4C7A', links: [{ label: 'Menu', url: 'https://www.bluebirdpc.com/menu' }, { label: 'Instagram', url: 'https://www.instagram.com/bluebird.parkcity/' }] },
      harvest: { name: 'Harvest at the Base', short: 'Harvest', kind: 'Café · breakfast & lunch', where: 'Up the steps from Cole Sport', hoursLabel: 'Daily 7:30 am–3 pm', blurb: 'All-day breakfast, local coffee, chicken laksa soup and paleo banana bread.', img: B + 'a94074167a72111b.jpg', logo: B + '1e17c5705199a350.png', logoBg: '#FFFFFF', tint: '#3E5A2E', links: [{ label: 'Menu', url: 'https://www.harvestparkcity.com/harvest-at-base#BaseMenu' }, { label: 'Order ahead', url: 'https://harvestparkcity.square.site/s/order' }, { label: 'Facebook', url: 'https://www.facebook.com/harvestpc/' }] },
      rmcf: { name: 'Rocky Mountain Chocolate Factory', short: 'Chocolate', kind: 'Chocolate & treats', where: 'Second level, facing Lowell', hoursLabel: 'Hours: [HOURS]', blurb: 'Watch them make fudge, then pick from dozens of caramel apples.', img: B + '92b6d944f3a847e1.jpg', logo: B + 'bbec4d2fa692fae5.svg', logoBg: '#FFFFFF', tint: '#4A2C1C', links: [{ label: 'Shop', url: 'https://www.rmcf.com/' }] },
      jbc: { name: "Jackson's Base Camp", short: 'Base Camp', kind: 'Demos, rentals & tuning', where: 'Rink level, next to Pig Pen', hoursLabel: 'Daily 8 am–6 pm', blurb: 'Locally owned on-mountain ski shop: demos, custom boot fitting, tuning and lockers.', img: B + 'b9852ef17e4b2672.jpg', logo: B + 'afb5e9cb0c1e7532.png', logoBg: '#FFFFFF', tint: '#203A2E', links: [{ label: 'Website', url: 'https://jacksonsbasecamp.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/jacksonsbasecamp/' }] },
      cole: { name: 'Cole Sport', short: 'Cole Sport', kind: 'Rentals, apparel & repair', where: '1385 Lowell Ave', hoursLabel: 'Family owned since 1982', blurb: 'Rentals, ski fashion, boot fitting and a full repair shop.', img: B + '9c02e1080b7531b8.jpg', logo: B + '9730185b62bdf003.png', logoBg: '#FFFFFF', tint: '#7A1E22', links: [{ label: 'Rentals', url: 'https://www.colesport.com/park-city-ski-snowboard-rentals/' }, { label: 'Instagram', url: 'https://instagram.com/colesport/' }] },
      aloha: { name: 'Aloha Ski & Snowboard', short: 'Aloha', kind: 'Ski & board rentals', where: 'Second level & the Loft', hoursLabel: 'Hours: [HOURS]', blurb: 'Locally owned rentals with unlimited exchanges and free overnight storage.', img: B + 'ee743ee8a8d189b8.jpg', logo: B + 'dadaf3c7fec1eff4.png', logoBg: '#FFFFFF', tint: '#1E5A5A', links: [{ label: 'Reserve', url: 'https://www.parkcityskirentals.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/alohaskirentals/' }] },
      bootworks: { name: 'Bootworks', short: 'Bootworks', kind: 'Boot fitting & insoles', where: 'The Loft', hoursLabel: '40 years of boot fitting', blurb: "Park City's ski boot specialists. Custom fitting, insoles and alterations in-house.", img: B + 'd52c119782b14df5.jpg', logo: B + '578c210b47b80106.png', logoBg: '#FFFFFF', tint: '#2A2A3A', links: [{ label: 'Book a fitting', url: 'https://www.bootworks.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/bootworks_parkcity/' }] },
      hideaway: { name: "Jackson's Hideaway", short: 'Hideaway', kind: 'Ski club', where: 'Rink level', hoursLabel: 'Members club', blurb: 'Unlimited rentals and demos, tuning, coffee, plus pool and hot tub access.', img: B + '100899fb409ca358.jpg', logo: '', logoBg: '#9CC9F0', tint: '#2E2A40', links: [{ label: 'Membership', url: 'https://jacksonshideaway.com/' }] },
      asrl: { name: "All Season's Resort Lodging", short: 'Lodging', kind: 'Places to stay', where: 'Rink level', hoursLabel: 'Right at the base', blurb: 'Vacation rentals right at the base, including the Lodge at Mountain Village.', img: B + 'd5a44ce8e5fedc98.jpg', logo: '', logoBg: '#FFC873', tint: '#2A3A55', links: [{ label: 'Book a stay', url: 'https://www.allseasonsresortlodging.com/' }] }
    };
    if (!this.order) { const ks = Object.keys(T); for (let i = ks.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = ks[i]; ks[i] = ks[j]; ks[j] = x; } this.order = ks; }
    const ini = (n) => n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('');
    const storyRail = this.order.map((k, i) => { const t = T[k], seen = !!this.state.seen[k]; return { ...t, initials: ini(t.name), noLogo: !t.logo, ring: seen ? 'rgba(234,242,251,0.25)' : 'conic-gradient(from 200deg, #FFC873, #9CC9F0, #EAF2FB, #FFC873)', labelOp: seen ? 0.6 : 1, open: () => this.goStory(i) }; });
    const si = this.state.story;
    const stT = si !== null ? T[this.order[si]] : T[this.order[0]];
    const st = { ...stT, links: stT.links.map((l, i) => ({ ...l, bg: i === 0 ? '#FFC873' : 'rgba(234,242,251,0.15)', fg: i === 0 ? '#0A1322' : '#EAF2FB' })) };
    const bars = this.order.map((_, i) => ({ w: si !== null && i < si ? '100%' : '0', cls: i === si ? (si % 2 ? 'sg-fillB' : 'sg-fillA') : '' }));

    // ---- Snow ----
    if (!this.flakes) { this.flakes = Array.from({ length: 36 }, (_, i) => { const s = 2 + Math.random() * 4; return { left: (Math.random() * 100).toFixed(1) + '%', size: s.toFixed(1) + 'px', op: (0.35 + Math.random() * 0.55).toFixed(2), dur: (8 + Math.random() * 10).toFixed(1) + 's', delay: (-Math.random() * 16).toFixed(1) + 's', blur: s > 4.5 ? '1px' : '0px' }; }); }

    // ---- Calendar (mock events until the weekly feed is live) ----
const EVENTS = [
      { id: 'e1', title: "Pre-season boot-fitting week", start: '2026-10-29T10:00', mins: 480, where: "Bootworks", cat: 'Gear' },
      { id: 'e2', title: "Thursday trivia night", start: '2026-10-29T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e3', title: "Harvest pumpkin bread morning", start: '2026-10-30T08:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e4', title: "Season locker sign-ups", start: '2026-10-30T09:00', mins: 480, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e5', title: "Caramel apple dipping for kids", start: '2026-10-31T13:00', mins: 90, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e6', title: "Halloween costume après (21+)", start: '2026-10-31T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e7', title: "Trick-or-treat around the Village", start: '2026-10-31T16:00', mins: 120, where: "Shops across the Village", cat: 'Family' },
      { id: 'e8', title: "Sunday brunch & coffee tasting", start: '2026-11-01T09:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e9', title: "Ski & board swap drop-off", start: '2026-11-01T10:00', mins: 360, where: "Cole Sport", cat: 'Gear' },
      { id: 'e10', title: "Wax & tune clinic", start: '2026-11-03T17:30', mins: 90, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e11', title: "Locals night: half-price apps", start: '2026-11-05T16:00', mins: 180, where: "Bluebird Après Cafe", cat: 'Food & drink' },
      { id: 'e12', title: "Rental pre-booking party", start: '2026-11-06T16:00', mins: 180, where: "Aloha Ski & Snowboard", cat: 'Gear' },
      { id: 'e13', title: "Ski swap: buy day", start: '2026-11-07T09:00', mins: 420, where: "Cole Sport", cat: 'Shopping' },
      { id: 'e14', title: "Live acoustic set", start: '2026-11-07T15:00', mins: 150, where: "Bluebird Après Cafe", cat: 'Music' },
      { id: 'e15', title: "Family fudge demo", start: '2026-11-08T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e16', title: "Thursday trivia night", start: '2026-11-12T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e17', title: "Demo day: new skis on snow", start: '2026-11-14T10:00', mins: 300, where: "Jackson's Base Camp", cat: 'Gear' },
      { id: 'e18', title: "Live music on the deck", start: '2026-11-14T15:00', mins: 150, where: "Bluebird Après Cafe", cat: 'Music' },
      { id: 'e19', title: "Custom insole open house", start: '2026-11-15T11:00', mins: 240, where: "Bootworks", cat: 'Gear' },
      { id: 'e20', title: "Opening night on the ice", start: '2026-11-19T16:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e21', title: "Opening day pancake breakfast", start: '2026-11-20T07:30', mins: 180, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e22', title: "First chair après party", start: '2026-11-20T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e23', title: "Live après set on the deck", start: '2026-11-21T15:00', mins: 150, where: "Bluebird Après Cafe", cat: 'Music' },
      { id: 'e24', title: "Learn-to-skate morning", start: '2026-11-22T10:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e25', title: "Thanksgiving Day skate", start: '2026-11-26T12:00', mins: 240, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e26', title: "Black Friday gear sale", start: '2026-11-27T09:00', mins: 480, where: "Cole Sport", cat: 'Shopping' },
      { id: 'e27', title: "Village tree lighting", start: '2026-11-27T17:30', mins: 90, where: "Rinkside plaza", cat: 'Family' },
      { id: 'e28', title: "Small Business Saturday", start: '2026-11-28T10:00', mins: 420, where: "Shops across the Village", cat: 'Shopping' },
      { id: 'e29', title: "Live music on the deck", start: '2026-11-28T15:00', mins: 150, where: "Bluebird Après Cafe", cat: 'Music' },
      { id: 'e30', title: "Cocoa & carols by the fire", start: '2026-12-05T16:00', mins: 120, where: "Fire pits, Village plaza", cat: 'Family' },
      { id: 'e31', title: "Boot-fitting clinic", start: '2026-12-06T10:00', mins: 180, where: "Bootworks", cat: 'Gear' },
      { id: 'e32', title: "Thursday trivia night", start: '2026-12-10T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e33', title: "Family skate night with a DJ", start: '2026-12-11T18:00', mins: 150, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e34', title: "Ugly sweater après (21+)", start: '2026-12-12T15:00', mins: 180, where: "Pig Pen Saloon", cat: 'Food & drink' },
      { id: 'e35', title: "Fudge-making demo", start: '2026-12-13T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family' },
      { id: 'e36', title: "Holiday gift wrap & shop night", start: '2026-12-17T16:00', mins: 240, where: "Shops across the Village", cat: 'Shopping' },
      { id: 'e37', title: "Ugly sweater skate", start: '2026-12-19T15:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e38', title: "Live holiday music", start: '2026-12-20T15:00', mins: 150, where: "Bluebird Après Cafe", cat: 'Music' },
      { id: 'e39', title: "Christmas Eve skate & cocoa", start: '2026-12-24T14:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e40', title: "Holiday truffle tasting", start: '2026-12-26T13:00', mins: 120, where: "Rocky Mountain Chocolate Factory", cat: 'Food & drink' },
      { id: 'e41', title: "New Year's Eve après bash (21+)", start: '2026-12-31T15:00', mins: 300, where: "Pig Pen Saloon", cat: 'Music' },
      { id: 'e42', title: "New Year's Eve glow skate", start: '2026-12-31T17:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e43', title: "New Year recovery brunch", start: '2027-01-01T09:00', mins: 240, where: "Harvest at the Base", cat: 'Food & drink' },
      { id: 'e44', title: "Kids ski-gear swap", start: '2027-01-09T10:00', mins: 240, where: "Aloha Ski & Snowboard", cat: 'Family' },
      { id: 'e45', title: "Locals night: half-price apps", start: '2027-01-14T16:00', mins: 180, where: "Bluebird Après Cafe", cat: 'Food & drink' },
      { id: 'e46', title: "Sundance week après", start: '2027-01-22T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Music' },
      { id: 'e47', title: "Moonlight skate", start: '2027-01-23T19:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating' },
      { id: 'e48', title: "Winter boot tune-up day", start: '2027-01-30T10:00', mins: 300, where: "Bootworks", cat: 'Gear' }
    ];
    const MON = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const DAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const pad = (n) => String(n).padStart(2, '0');
    const parts = (s) => { const [d, t] = s.split('T'); const [y, m, dd] = d.split('-').map(Number); const [hh, mm] = t.split(':').map(Number); return { y, m, d: dd, hh, mm }; };
    const addMins = (p, mins) => { const t = new Date(Date.UTC(p.y, p.m - 1, p.d, p.hh, p.mm) + mins * 60000); return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate(), hh: t.getUTCHours(), mm: t.getUTCMinutes() }; };
    const stamp = (p) => `${p.y}${pad(p.m)}${pad(p.d)}T${pad(p.hh)}${pad(p.mm)}00`;
    const iso = (p) => `${p.y}-${pad(p.m)}-${pad(p.d)}T${pad(p.hh)}:${pad(p.mm)}:00`;
    const clock = (p) => { const h = p.hh % 12 || 12; return `${h}${p.mm ? ':' + pad(p.mm) : ''} ${p.hh < 12 ? 'am' : 'pm'}`; };
    const ADDR = 'Park City Village, 1415 Lowell Ave, Park City, UT 84060';
    const q = encodeURIComponent;
    const decorate = (e) => {
      const s = parts(e.start), en = addMins(s, e.mins), loc = `${e.where}, ${ADDR}`, details = `${e.title} at Park City Village. Free parking after noon.`;
      const wd = DAY[new Date(Date.UTC(s.y, s.m - 1, s.d)).getUTCDay()];
      return { ...e, wdShort: wd.slice(0, 3), dayNum: pad(s.d), monthShort: MON[s.m - 1].slice(0, 3), dateLong: `${wd}, ${MON[s.m - 1]} ${s.d}`, timeRange: `${clock(s)} – ${clock(en)}`,
        startMs: Date.UTC(s.y, s.m - 1, s.d, s.hh, s.mm) + 7 * 3600000, endMs: Date.UTC(en.y, en.m - 1, en.d, en.hh, en.mm) + 7 * 3600000,
        google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${q(e.title)}&dates=${stamp(s)}/${stamp(en)}&ctz=America/Denver&location=${q(loc)}&details=${q(details)}`,
        outlook: `https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=${q(e.title)}&startdt=${q(iso(s) + '-07:00')}&enddt=${q(iso(en) + '-07:00')}&location=${q(loc)}&body=${q(details)}`,
        ics: ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Park City Village//Calendar//EN', 'BEGIN:VTIMEZONE', 'TZID:America/Denver', 'BEGIN:STANDARD', 'DTSTART:19701101T020000', 'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU', 'TZOFFSETFROM:-0600', 'TZOFFSETTO:-0700', 'TZNAME:MST', 'END:STANDARD', 'BEGIN:DAYLIGHT', 'DTSTART:19700308T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU', 'TZOFFSETFROM:-0700', 'TZOFFSETTO:-0600', 'TZNAME:MDT', 'END:DAYLIGHT', 'END:VTIMEZONE', 'BEGIN:VEVENT', `UID:${e.id}@parkcityvillage`, `DTSTAMP:${stamp(s)}Z`, `DTSTART;TZID=America/Denver:${stamp(s)}`, `DTEND;TZID=America/Denver:${stamp(en)}`, `SUMMARY:${e.title.replace(/,/g, '\\,')}`, `LOCATION:${loc.replace(/,/g, '\\,')}`, `DESCRIPTION:${details.replace(/,/g, '\\,')}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n'),
        add: () => this.setState({ calEv: e.id }) };
    };
    const all = EVENTS.map(decorate);
    const todayKey = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const [ty, tm, td] = todayKey.split('-').map(Number);
    const ICON = { 'Skating': '⛸', 'Food & drink': '🍽', 'Music': '🎶', 'Family': '🎈', 'Shopping': '🛍', 'Gear': '🎿' };
    const doors = [];
    for (let i = 0; i < 12; i++) {
      const dt = new Date(Date.UTC(ty, tm - 1, td + i)); const key = dt.toISOString().slice(0, 10);
      const evs = all.filter(e => e.start.slice(0, 10) === key);
      const open = !!this.state.opened[key], sel = this.state.door === key;
      doors.push({ key, evs, wd: i === 0 ? 'Today' : DAY[dt.getUTCDay()].slice(0, 3), num: dt.getUTCDate(), long: `${DAY[dt.getUTCDay()]}, ${MON[dt.getUTCMonth()]} ${dt.getUTCDate()}`, has: evs.length > 0,
        aria: `${DAY[dt.getUTCDay()]} ${MON[dt.getUTCMonth()]} ${dt.getUTCDate()}, ${evs.length} events`, pressed: sel ? 'true' : 'false',
        doorT: open ? 'rotateY(-104deg)' : 'rotateY(0deg)', icon: evs.length ? (ICON[evs[0].cat] || '✦') : '☕', countLabel: evs.length ? `${evs.length} ${evs.length === 1 ? 'event' : 'events'}` : 'Quiet day',
        insideBg: sel ? '#FFC873' : evs.length ? 'rgba(255,200,115,0.16)' : 'rgba(234,242,251,0.06)', insideFg: sel ? '#0A1322' : '#EAF2FB', insideLine: sel ? '#FFC873' : 'rgba(234,242,251,0.15)', glowClass: sel ? 'sg-glow' : '',
        pick: () => this.setState({ door: key, opened: { ...this.state.opened, [key]: true } }) });
    }
    const D = doors.find(d => d.key === this.state.door) || null;
    const calEv = all.find(x => x.id === this.state.calEv) || null;
    this.curIcs = calEv ? calEv.ics : ''; this.curName = calEv ? calEv.id : '';

    // ---- Directory (A–Z, links out) ----
    const DIR = [
      ...Object.values(T).map(t => [t.name, t.kind, t.links[0] ? t.links[0].url : '']),
      ['Food For Thought', 'Market', ''], ['Breeze Ski Rentals', 'Rentals', 'https://www.skiutah.com/members/breeze-ski-rentals'], ['Jackson Lockers', 'Seasonal lockers', 'https://jacksonsbasecamp.com/lockers-valet-seasonal/'], ["Marriott's MountainSide", 'Places to stay', ''],
      ['Berkshire Hathaway HomeServices', 'Real estate', 'https://www.bhhsutah.com/'], ['Park City Sport', 'Office', 'https://parkcitysport.com/'], ['Resort Center Ice Rink', 'Skating', 'https://www.resortcentericerink.com/tickets']
    ].sort((a, b) => a[0].localeCompare(b[0])).map(([name, kind, url]) => ({ name, kind, url: url || '#directory', arrow: url ? '↗' : '' }));

    // ---- Parking (Park at Park City Mountain 2026/27) ----
    const LOTS = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageLots/welcome';
    const GARAGE = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageGarage/welcome';
    const parkingRows = [
      { when: 'After noon', text: 'Free. No reservation, any day.', url: '', bg: 'rgba(255,200,115,0.18)', whenColor: '#FFC873' },
      { when: 'Before 8:30 am', text: 'Free if you leave before 8:30.', url: '', bg: 'rgba(234,242,251,0.06)', whenColor: '#EAF2FB' },
      { when: '8:30 am – noon', text: 'Reservation required: free Nov 20 – Dec 4, then $29.', url: LOTS, cta: 'Book lot', bg: 'rgba(234,242,251,0.06)', whenColor: '#EAF2FB' },
      { when: 'Carpool of 4+', text: 'Free reservation, anytime. Book ahead, then park in the First Time lot.', url: LOTS, cta: 'Book free', bg: 'rgba(234,242,251,0.06)', whenColor: '#EAF2FB' },
      { when: 'Garage', text: '$50 a day, bookable up to 72 hours ahead. Limited season permits exist.', url: GARAGE, cta: 'Book garage', bg: 'rgba(234,242,251,0.06)', whenColor: '#EAF2FB' }
    ];
    const dh = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Denver', hour: 'numeric', hourCycle: 'h23' }).format(new Date()));
    return {
      navBg: this.state.solid ? 'rgba(14,26,46,0.72)' : 'rgba(234,242,251,0.08)', navChip: dh >= 12 ? 'Free now' : 'Free at noon', openParking: this.openParking,
      flakes: this.flakes, storyRail, storyOpen: si !== null, st, bars, closeStory: this.closeStory, nextStory: this.nextStory, prevStory: this.prevStory,
      doors, noSel: !D, hasSel: !!D, selTitle: D ? D.long : '', selEmpty: D ? D.evs.length === 0 : false, selEvents: D ? D.evs : [],
      dir: DIR, parkingRows, parkingOpen: this.state.parking, closeParking: this.closeParking,
      calOpen: !!calEv, calTitle: calEv ? calEv.title : '', calWhen: calEv ? calEv.dateLong + ' · ' + calEv.timeRange : '', calWhere: calEv ? calEv.where : '', calGoogle: calEv ? calEv.google : '#', calOutlook: calEv ? calEv.outlook : '#', closeCal: this.closeCal, downloadIcs: this.downloadIcs
    };
  }
}


class Desktop extends Component {
  componentDidMount() {
    super.componentDidMount();
    const todayKey = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    this.setState({ door: todayKey, opened: { [todayKey]: true } });
    this.onKey = (e) => {
      if (e.key === 'Escape') { if (this.state.story !== null) this.closeStory(); this.setState({ parking: false, calEv: null }); }
      else if (this.state.story !== null && e.key === 'ArrowRight') this.nextStory();
      else if (this.state.story !== null && e.key === 'ArrowLeft') this.prevStory();
    };
    window.addEventListener('keydown', this.onKey);
  }
  componentWillUnmount() { super.componentWillUnmount(); window.removeEventListener('keydown', this.onKey); }
  pauseStory() { if (this.state.story === null || this.state.sPaused) return; clearTimeout(this.t); this.left = Math.max(400, 5000 - (Date.now() - (this.started || Date.now()))); this.setState({ sPaused: true }); }
  resumeStory() { if (!this.state.sPaused) return; this.setState({ sPaused: false }); clearTimeout(this.t); this.t = setTimeout(this.nextStory, this.left || 2000); }
  renderVals() {
    if (!this.wrapped) {
      this.wrapped = true;
      const go = this.goStory;
      this.goStory = (i) => { this.started = Date.now(); if (this.state.sPaused) this.setState({ sPaused: false }); go(i); };
      this.nextStory = () => { const n = (this.state.story ?? -1) + 1; if (n >= (this.order || []).length) this.closeStory(); else this.goStory(n); };
      this.prevStory = () => this.goStory(Math.max(0, (this.state.story || 0) - 1));
    }
    const v = super.renderVals();
    if (!this.dFlakes) { this.dFlakes = Array.from({ length: 70 }, () => { const s = 2 + Math.random() * 4.5; return { left: (Math.random() * 100).toFixed(1) + '%', size: s.toFixed(1) + 'px', op: (0.3 + Math.random() * 0.6).toFixed(2), dur: (10 + Math.random() * 12).toFixed(1) + 's', delay: (-Math.random() * 20).toFixed(1) + 's', blur: s > 5 ? '1px' : '0px' }; }); }
    const dark = (n) => n === 'Cole Sport' ? 'brightness(0)' : 'none';
    const storyRail = v.storyRail.map(s => ({ ...s, filter: dark(s.name) }));
    return { ...v, storyRail, dFlakes: this.dFlakes, storyCount: String(storyRail.length), watchAll: () => this.goStory(0), nextStory: this.nextStory, prevStory: this.prevStory,
      stFilter: dark(v.st.name), storyPaused: !!this.state.sPaused, storyPlay: this.state.sPaused ? 'paused' : 'running', storyHoverIn: () => this.pauseStory(), storyHoverOut: () => this.resumeStory() };
  }
}

preact.render(preact.h(Desktop, {}), document.getElementById('app'));
})();
