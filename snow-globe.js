document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap\" rel=\"stylesheet\">\n<style>\nbody{margin:0;background:#0A1322}\n.sg-hero{background-image:linear-gradient(180deg,rgba(10,19,34,0.55) 0%,rgba(10,19,34,0.2) 35%,rgba(10,19,34,0.92) 100%),url(/thebaseatparkcitymountain/assets/bbe0964fe01a8527.jpg);background-size:cover;background-position:50% 45%}\n.sg-glass{background:rgba(234,242,251,0.08);-webkit-backdrop-filter:blur(18px) saturate(1.3);backdrop-filter:blur(18px) saturate(1.3);border:1px solid rgba(234,242,251,0.16)}\n.sg-flake{position:absolute;top:-12px;border-radius:50%;background:#FFFFFF;pointer-events:none;animation-name:sgFall;animation-timing-function:linear;animation-iteration-count:infinite}\n@keyframes sgFall{0%{transform:translate3d(0,-10px,0)}50%{transform:translate3d(14px,50vh,0)}100%{transform:translate3d(-6px,100vh,0)}}\n.sg-rail{display:flex;gap:14px;overflow-x:auto;padding:4px 20px 8px;scrollbar-width:none}\n.sg-rail::-webkit-scrollbar{display:none}\n.sg-rail > *{flex:none}\n.sg-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:70;overflow:hidden;overscroll-behavior:contain}\n.sg-in{animation:sgIn .4s cubic-bezier(.2,.9,.2,1) both}\n@keyframes sgIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}\n.sg-fillA{animation:sgFillA 5s linear forwards}\n.sg-fillB{animation:sgFillB 5s linear forwards}\n@keyframes sgFillA{from{width:0}to{width:100%}}\n@keyframes sgFillB{from{width:0}to{width:100%}}\n.sg-doorwrap{perspective:700px}\n.sg-door{transform-origin:0 50%;transition:transform .7s cubic-bezier(.3,.8,.2,1);backface-visibility:hidden;-webkit-backface-visibility:hidden}\n.sg-glow{animation:sgGlow 3s ease-in-out infinite}\n@keyframes sgGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,200,115,0)}50%{box-shadow:0 0 22px 2px rgba(255,200,115,0.35)}}\nbutton:focus-visible,a:focus-visible{outline:3px solid #FFC873;outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.sg-flake{display:none}.sg-door{transition:none}}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { b, bars, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, closeCal, closeParking, closeStory, d, dir, doors, downloadIcs, e, f, flakes, hasSel, l, navBg, navChip, nextStory, noSel, openParking, parkingOpen, parkingRows, prevStory, r, s, selEmpty, selEvents, selTitle, st, storyOpen, storyRail, t } = v || {}; return html`<div style="position: relative; width: 100%; max-width: 480px; margin: 0 auto; font-family: Manrope, system-ui, sans-serif; color: #EAF2FB; background: radial-gradient(120% 60% at 50% 0%, #16294A 0%, #0E1A2E 45%, #0A1322 100%); overflow: hidden">

<div style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; max-width: 480px; margin: 0 auto; padding: 10px 12px 0; box-sizing: border-box">
<div class="sg-glass" style="display: flex; align-items: center; justify-content: space-between; padding: 6px 6px 6px 16px; border-radius: 999px; background: ${navBg}; transition: background .35s ease">
<a href="#top" style="color: #EAF2FB; text-decoration: none; font-family: 'DM Serif Display', Georgia, serif; font-size: 19px">Park City Village</a>
<button type="button" onClick=${openParking} style="display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 14px; border-radius: 999px; border: 0; background: #FFC873; color: #0A1322; font: 700 13px Manrope, sans-serif; cursor: pointer"><span aria-hidden="true">P</span>${navChip}</button>
</div>
</div>

<section id="top" class="sg-hero" style="position: relative; height: 84vh; height: 84svh; min-height: 600px; max-height: 760px; box-sizing: border-box; padding: 0 20px 26px; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden">
<div aria-hidden="true" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none">
${(flakes||[]).map((f) => html`<span class="sg-flake" style="left: ${f.left}; width: ${f.size}; height: ${f.size}; opacity: ${f.op}; animation-duration: ${f.dur}; animation-delay: ${f.delay}; filter: blur(${f.blur})"></span>`)}
</div>
<a href="#doors" class="sg-glass" style="position: relative; align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; padding: 8px 14px 8px 8px; border-radius: 999px; color: #EAF2FB; text-decoration: none; font-size: 13px; font-weight: 600"><span aria-hidden="true" style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: #9CC9F0; color: #0A1322">⛸</span>Rink reopens Nov 19</a>
<h1 style="position: relative; margin: 18px 0 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 52px; line-height: 0.98; letter-spacing: -0.01em">Where the mountain feels <span style="font-style: italic; color: #FFC873">like home</span></h1>
<div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px">
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" style="display: inline-flex; align-items: center; min-height: 50px; padding: 0 22px; border-radius: 999px; background: #EAF2FB; color: #0A1322; font-weight: 700; font-size: 15px; text-decoration: none">Find the Village</a>
<button type="button" onClick=${openParking} class="sg-glass" style="display: inline-flex; align-items: center; min-height: 50px; padding: 0 18px; border-radius: 999px; color: #EAF2FB; font: 600 15px Manrope, sans-serif; cursor: pointer">Free parking after noon</button>
</div>
</section>

<section id="stories" style="position: relative; padding: 34px 0 10px">
<div style="padding: 0 20px; display: flex; align-items: baseline; justify-content: space-between">
<h2 style="margin: 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 30px">Around the Village</h2>
<span style="font-size: 12px; color: rgba(234,242,251,0.6)">Tap to watch</span>
</div>
<div class="sg-rail" style="margin-top: 16px">
${(storyRail||[]).map((s) => html`
<button type="button" onClick=${s.open} style="display: flex; flex-direction: column; align-items: center; gap: 8px; width: 76px; padding: 0; border: 0; background: transparent; color: #EAF2FB; cursor: pointer">
<span style="width: 72px; height: 72px; border-radius: 50%; padding: 3px; box-sizing: border-box; background: ${s.ring}">
<span style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; border-radius: 50%; border: 3px solid #0E1A2E; box-sizing: border-box; overflow: hidden; background: ${s.logoBg}">
${(s.logo) ? html`<img src=${s.logo} alt="" style="width: 78%; height: 78%; object-fit: contain" />` : null}
${(s.noLogo) ? html`<span style="font-family: 'DM Serif Display', Georgia, serif; font-size: 22px; color: #0A1322">${s.initials}</span>` : null}
</span>
</span>
<span style="font-size: 11px; font-weight: 600; line-height: 1.2; text-align: center; opacity: ${s.labelOp}">${s.short}</span>
</button>
`)}
</div>
</section>

<section id="doors" style="position: relative; padding: 40px 20px 10px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #9CC9F0">The next 12 days</div>
<h2 style="margin: 6px 0 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 34px; line-height: 1.05">Open a door, find a night out</h2>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 20px">
${(doors||[]).map((d) => html`
<button type="button" onClick=${d.pick} aria-pressed=${d.pressed} aria-label=${d.aria} class="sg-doorwrap" style="position: relative; height: 92px; padding: 0; border: 0; background: transparent; cursor: pointer; font-family: Manrope, sans-serif">
<span class=${d.glowClass} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 16px; background: ${d.insideBg}; border: 1.5px solid ${d.insideLine}; display: flex; flex-direction: column; align-items: center; justify-content: center; color: ${d.insideFg}">
<span aria-hidden="true" style="font-size: 20px; line-height: 1">${d.icon}</span>
<span style="margin-top: 4px; font-size: 11px; font-weight: 700">${d.countLabel}</span>
</span>
<span class="sg-door" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 16px; background: linear-gradient(160deg, #1D3560 0%, #132542 100%); border: 1.5px solid rgba(156,201,240,0.35); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #EAF2FB; transform: ${d.doorT}; box-shadow: inset 0 0 0 4px rgba(10,19,34,0.25)">
<span style="font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9CC9F0">${d.wd}</span>
<span style="font-family: 'DM Serif Display', Georgia, serif; font-size: 30px; line-height: 1">${d.num}</span>
<span aria-hidden="true" style="position: absolute; right: 8px; top: 50%; width: 5px; height: 5px; border-radius: 50%; background: #FFC873"></span>
${(d.has) ? html`<span aria-hidden="true" style="position: absolute; top: 7px; right: 8px; font-size: 10px; color: #FFC873">✦</span>` : null}
</span>
</button>
`)}
</div>
<div style="margin-top: 18px">
${(noSel) ? html`
<div class="sg-glass" style="padding: 18px; border-radius: 22px; text-align: center; font-size: 14px; color: rgba(234,242,251,0.8)">Tap a door. Stars ✦ mean something's happening.</div>
` : null}
${(hasSel) ? html`
<div class="sg-in sg-glass" style="padding: 18px 16px; border-radius: 24px">
<div style="font-family: 'DM Serif Display', Georgia, serif; font-size: 24px">${selTitle}</div>
${(selEmpty) ? html`<p style="margin: 8px 0 0; font-size: 14px; line-height: 1.5; color: rgba(234,242,251,0.8)">A quiet one. The shops and cafés are still open, so come warm up.</p>` : null}
<div style="display: flex; flex-direction: column">
${(selEvents||[]).map((e) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 14px 0; border-top: 1px solid rgba(234,242,251,0.12)">
<div style="flex: 1; min-width: 0">
<div style="font-size: 12px; font-weight: 700; color: #FFC873">${e.timeRange} · ${e.cat}</div>
<div style="margin-top: 2px; font-size: 16px; font-weight: 600; line-height: 1.3">${e.title}</div>
<div style="margin-top: 2px; font-size: 13px; color: rgba(234,242,251,0.65)">${e.where}</div>
</div>
<button type="button" onClick=${e.add} aria-label="Add to calendar" style="width: 44px; height: 44px; flex: none; border-radius: 50%; border: 1px solid rgba(234,242,251,0.3); background: transparent; color: #EAF2FB; font-size: 20px; cursor: pointer">+</button>
</div>
`)}
</div>
</div>
` : null}
</div>
</section>

<section id="directory" style="position: relative; padding: 40px 20px 10px">
<h2 style="margin: 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 30px">Everyone at the base</h2>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px">
${(dir||[]).map((t) => html`
<a href=${t.url} target="_blank" rel="noopener" class="sg-glass" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 92px; padding: 14px; border-radius: 20px; color: #EAF2FB; text-decoration: none; box-sizing: border-box">
<span style="font-size: 14px; font-weight: 700; line-height: 1.25">${t.name}</span>
<span style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 12px; color: rgba(234,242,251,0.6)">${t.kind}<span aria-hidden="true" style="color: #9CC9F0">${t.arrow}</span></span>
</a>
`)}
</div>
</section>

<section id="parking" style="position: relative; padding: 40px 20px 10px">
<div class="sg-glass" style="position: relative; overflow: hidden; padding: 24px 20px; border-radius: 28px; background: linear-gradient(150deg, rgba(255,200,115,0.22), rgba(234,242,251,0.06))">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #FFC873">Locals tip</div>
<div style="margin-top: 6px; font-family: 'DM Serif Display', Georgia, serif; font-size: 36px; line-height: 1.02">Free parking after noon</div>
<p style="margin: 10px 0 0; font-size: 14px; line-height: 1.5; color: rgba(234,242,251,0.85)">No reservation, every day, in the surface lots.</p>
<button type="button" onClick=${openParking} style="margin-top: 16px; min-height: 48px; padding: 0 20px; border-radius: 999px; border: 0; background: #FFC873; color: #0A1322; font: 700 15px Manrope, sans-serif; cursor: pointer">Other times & free rides</button>
</div>
<a href="https://www.resortcentericerink.com/tickets" target="_blank" rel="noopener" class="sg-glass" style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px; padding: 18px 20px; border-radius: 22px; color: #EAF2FB; text-decoration: none"><span><span style="display: block; font-family: 'DM Serif Display', Georgia, serif; font-size: 22px">Lace up any day of the week</span><span style="display: block; margin-top: 2px; font-size: 13px; color: rgba(234,242,251,0.65)">Rink tickets</span></span><span aria-hidden="true" style="font-size: 20px">↗</span></a>
</section>

<footer style="position: relative; padding: 44px 20px 40px; margin-top: 30px; border-top: 1px solid rgba(234,242,251,0.1)">
<div style="font-family: 'DM Serif Display', Georgia, serif; font-size: 30px">Park City Village</div>
<div style="margin-top: 4px; font-style: italic; font-family: 'DM Serif Display', Georgia, serif; font-size: 17px; color: #FFC873">Where the mountain feels like home</div>
<p style="margin: 14px 0 0; font-size: 13px; line-height: 1.6; color: rgba(234,242,251,0.6)">1415 Lowell Ave, Park City, Utah · At the base of Park City Mountain</p>
<div style="margin-top: 16px; font-size: 12px; color: rgba(234,242,251,0.45)">© 2026 Park City Village</div>
</footer>

${(storyOpen) ? html`
<div class="sg-overlay" role="dialog" aria-modal="true" aria-label=${st.name} style="background: #0A1322">
<div style="position: relative; max-width: 480px; height: 100%; margin: 0 auto; overflow: hidden; background: ${st.tint}">
${(st.img) ? html`<img src=${st.img} alt="" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover" />` : null}
<div aria-hidden="true" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(180deg, rgba(10,19,34,0.6) 0%, rgba(10,19,34,0) 22%, rgba(10,19,34,0) 45%, rgba(10,19,34,0.95) 100%)"></div>
<div style="position: absolute; top: 10px; left: 10px; right: 10px; display: flex; gap: 4px; z-index: 3">
${(bars||[]).map((b) => html`<span style="flex: 1; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.3); overflow: hidden"><span class=${b.cls} style="display: block; height: 100%; width: ${b.w}; background: #FFFFFF"></span></span>`)}
</div>
<div style="position: absolute; top: 22px; left: 14px; right: 8px; display: flex; align-items: center; gap: 10px; z-index: 3">
<span style="width: 36px; height: 36px; border-radius: 50%; overflow: hidden; background: ${st.logoBg}; display: flex; align-items: center; justify-content: center">${(st.logo) ? html`<img src=${st.logo} alt="" style="width: 80%; height: 80%; object-fit: contain" />` : null}</span>
<span style="flex: 1; font-size: 14px; font-weight: 700">${st.name}</span>
<button type="button" onClick=${closeStory} aria-label="Close" style="width: 44px; height: 44px; border: 0; background: transparent; color: #FFFFFF; font-size: 22px; cursor: pointer">✕</button>
</div>
<button type="button" onClick=${prevStory} aria-label="Previous" style="position: absolute; top: 80px; left: 0; width: 35%; bottom: 220px; border: 0; background: transparent; cursor: pointer; z-index: 2"></button>
<button type="button" onClick=${nextStory} aria-label="Next" style="position: absolute; top: 80px; right: 0; width: 65%; bottom: 220px; border: 0; background: transparent; cursor: pointer; z-index: 2"></button>
<div class="sg-in" style="position: absolute; left: 20px; right: 20px; bottom: 28px; z-index: 3">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFC873">${st.kind}</div>
<div style="margin-top: 6px; font-family: 'DM Serif Display', Georgia, serif; font-size: 38px; line-height: 1">${st.name}</div>
<p style="margin: 10px 0 0; font-size: 15px; line-height: 1.5; color: rgba(234,242,251,0.9)">${st.blurb}</p>
<div style="margin-top: 6px; font-size: 13px; color: rgba(234,242,251,0.7)">${st.where} · ${st.hoursLabel}</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px">
${(st.links||[]).map((l) => html`<a href=${l.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; border-radius: 999px; background: ${l.bg}; color: ${l.fg}; font-size: 14px; font-weight: 700; text-decoration: none">${l.label} ↗</a>`)}
</div>
</div>
</div>
</div>
` : null}

${(parkingOpen) ? html`
<div class="sg-overlay" role="dialog" aria-modal="true" aria-label="Parking" style="background: rgba(10,19,34,0.7); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<button type="button" aria-label="Close parking info" onClick=${closeParking} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="sg-in" style="position: relative; width: 100%; max-width: 420px; max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px); overflow-y: auto; overflow-x: hidden; box-sizing: border-box; border-radius: 26px; padding: 22px 18px; background: #12223D; border: 1px solid rgba(234,242,251,0.16); color: #EAF2FB">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px">
<div><div style="font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #9CC9F0">Mountain Village lots · 2026/27</div><h2 style="margin: 4px 0 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 30px; line-height: 1.05">Parking, made simple</h2></div>
<button type="button" onClick=${closeParking} aria-label="Close" style="width: 44px; height: 44px; flex: none; border-radius: 50%; border: 1px solid rgba(234,242,251,0.3); background: transparent; color: #EAF2FB; font-size: 16px; cursor: pointer">✕</button>
</div>
<div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px">
${(parkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: ${r.bg}">
<div style="flex: 1; min-width: 0"><div style="font-size: 13px; font-weight: 800; color: ${r.whenColor}">${r.when}</div><div style="margin-top: 2px; font-size: 13px; line-height: 1.45; color: rgba(234,242,251,0.85)">${r.text}</div></div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 40px; padding: 0 12px; border-radius: 999px; background: #EAF2FB; color: #0A1322; font-size: 12px; font-weight: 700; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
</div>
`)}
</div>
<div style="margin-top: 18px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #9CC9F0">More free ways in</div>
<div style="margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
<a href="https://www.parkcity.gov/services/transit/routes_schedules/index.php" target="_blank" rel="noopener" style="padding: 12px; border-radius: 14px; background: rgba(234,242,251,0.07); color: #EAF2FB; text-decoration: none; font-size: 13px; font-weight: 600">Park City Transit ↗<span style="display: block; font-weight: 400; color: rgba(234,242,251,0.6)">Free buses</span></a>
<a href="https://www.hvtutah.gov/" target="_blank" rel="noopener" style="padding: 12px; border-radius: 14px; background: rgba(234,242,251,0.07); color: #EAF2FB; text-decoration: none; font-size: 13px; font-weight: 600">High Valley Transit ↗<span style="display: block; font-weight: 400; color: rgba(234,242,251,0.6)">From the valley</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Richardson+Flat+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="padding: 12px; border-radius: 14px; background: rgba(234,242,251,0.07); color: #EAF2FB; text-decoration: none; font-size: 13px; font-weight: 600">Richardson Flat ↗<span style="display: block; font-weight: 400; color: rgba(234,242,251,0.6)">Park & ride</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Ecker+Hill+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="padding: 12px; border-radius: 14px; background: rgba(234,242,251,0.07); color: #EAF2FB; text-decoration: none; font-size: 13px; font-weight: 600">Ecker Hill ↗<span style="display: block; font-weight: 400; color: rgba(234,242,251,0.6)">Park & ride</span></a>
</div>
<p style="margin: 14px 0 0; font-size: 12px; line-height: 1.55; color: rgba(234,242,251,0.65)"><b style="color: #EAF2FB">Good to know:</b> Park City High School is free on weekends and holidays. Bookings open Nov 3 at 8 am; hold up to 5. Arrive before noon and stay all day, no overnight. Cancel before 8 am for a refund; no-shows may get a $125 violation. <a href="https://www.parkatparkcitymountain.com/parkmountainvillage" target="_blank" rel="noopener" style="color: #9CC9F0; font-weight: 600">Full rules ↗</a></p>
</div>
</div>
` : null}

${(calOpen) ? html`
<div class="sg-overlay" role="dialog" aria-modal="true" aria-label="Add to calendar" style="background: rgba(10,19,34,0.7); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="sg-in" style="position: relative; width: 100%; max-width: 380px; box-sizing: border-box; border-radius: 26px; padding: 22px 18px 16px; background: #12223D; border: 1px solid rgba(234,242,251,0.16); color: #EAF2FB">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #9CC9F0">Add to calendar</div>
<h2 style="margin: 4px 0 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-size: 26px; line-height: 1.1">${calTitle}</h2>
<div style="margin-top: 6px; font-size: 14px; line-height: 1.45; color: rgba(234,242,251,0.8)">${calWhen}<br />${calWhere}</div>
<div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px">
<button type="button" onClick=${downloadIcs} style="min-height: 50px; border-radius: 16px; border: 0; background: #EAF2FB; color: #0A1322; font: 700 15px Manrope, sans-serif; cursor: pointer">Apple Calendar</button>
<a href=${calGoogle} target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; min-height: 50px; border-radius: 16px; border: 1px solid rgba(234,242,251,0.3); color: #EAF2FB; font-size: 15px; font-weight: 600; text-decoration: none">Google Calendar ↗</a>
<a href=${calOutlook} target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; min-height: 50px; border-radius: 16px; border: 1px solid rgba(234,242,251,0.3); color: #EAF2FB; font-size: 15px; font-weight: 600; text-decoration: none">Outlook ↗</a>
<button type="button" onClick=${closeCal} style="min-height: 44px; border: 0; background: transparent; color: rgba(234,242,251,0.6); font: 600 14px Manrope, sans-serif; cursor: pointer">Cancel</button>
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
    const B = '/thebaseatparkcitymountain/assets/';
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

preact.render(preact.h(Component, {}), document.getElementById('app'));
})();
