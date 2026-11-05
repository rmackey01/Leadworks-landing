document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap\" rel=\"stylesheet\">\n<style>\n:root{--navy:#0E1A2B;--gold:#F2B35E;--cream:#F4F1EA;--line:#E3E6EA;--muted:#5B6472}\n*{box-sizing:border-box}\nhtml{scroll-behavior:smooth;scroll-padding-top:88px}\nbody{margin:0;background:#FFFFFF;color:var(--navy);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na,button{font-family:inherit}\nbutton{cursor:pointer}\na:focus-visible,button:focus-visible{outline:3px solid var(--gold);outline-offset:3px}\n.d-skip{position:absolute;left:-999px;top:8px;z-index:100;padding:12px 18px;border-radius:999px;background:#FFFFFF;color:#0E1A2B}.d-skip:focus{left:16px}\n.d-wrap{width:100%;max-width:1280px;margin:0 auto;padding:0 48px}\n.d-cond{font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n.d-kicker{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}\n.d-h2{margin:8px 0 0;font-weight:300;font-size:48px;line-height:1.05;letter-spacing:-.02em}\n.d-lede{margin:14px 0 0;max-width:560px;font-size:18px;line-height:1.55;color:var(--muted)}\n.d-hero{background-image:linear-gradient(90deg,rgba(8,14,26,.72) 0%,rgba(8,14,26,.35) 45%,rgba(8,14,26,.05) 75%),linear-gradient(0deg,rgba(8,14,26,.55) 0%,rgba(8,14,26,0) 40%),linear-gradient(180deg,rgba(8,14,26,.45) 0%,rgba(8,14,26,0) 22%),url(/parkcityvillage/assets/bbe0964fe01a8527.jpg);background-size:cover;background-position:50% 45%}\n.d-band{background-image:linear-gradient(90deg,rgba(14,26,43,.85) 0%,rgba(14,26,43,.35) 70%),url(/parkcityvillage/assets/ca4d387494b9b28f.jpg);background-size:cover;background-position:55% 50%}\n.d-navlink{color:inherit;text-decoration:none;font-size:15px;font-weight:500;padding:10px 4px;border-bottom:2px solid transparent;transition:border-color .2s}\n.d-navlink:hover{border-color:var(--gold)}\n.d-btn{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 24px;border-radius:999px;border:0;font-weight:600;font-size:15px;text-decoration:none;transition:transform .15s,box-shadow .2s,background .2s}\n.d-btn:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(8,14,26,.18)}\n.d-glass{background:rgba(255,255,255,.18);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.35)}\n.d-chip{min-height:44px;padding:0 18px;border-radius:999px;font-size:14px;font-weight:600;transition:background .2s,color .2s}\n.d-card{border-radius:20px;background:#FFFFFF;border:1px solid var(--line);overflow:hidden;transition:transform .2s,box-shadow .2s}\n.d-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,26,43,.12)}\n.d-logo{display:flex;align-items:center;gap:14px;width:100%;padding:10px 12px;border-radius:16px;border:0;background:transparent;color:var(--navy);text-align:left;transition:background .2s}\n.d-logo:hover{background:rgba(14,26,43,.05)}\n.d-row{display:flex;align-items:center;gap:18px;padding:18px 0;border-top:1px solid var(--line)}\n.d-dirlink{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid var(--line);color:var(--navy);text-decoration:none;font-size:15px}\n.d-dirlink:hover .d-dn{color:var(--accent)}\n.d-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:32px;background:rgba(9,16,30,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);animation:dFade .25s ease both}\n.d-modal{position:relative;width:100%;max-height:calc(100vh - 64px);overflow:auto;border-radius:26px;background:#FFFFFF;color:var(--navy);box-shadow:0 30px 80px rgba(0,0,0,.35);animation:dUp .3s cubic-bezier(.2,.8,.2,1) both}\n@keyframes dFade{from{opacity:0}to{opacity:1}}\n@keyframes dUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n@keyframes mFillA{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes mFillB{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n.m-fillA{animation:mFillA 5s linear forwards}\n.m-fillB{animation:mFillB 5s linear forwards}\n@keyframes mRingA{from{stroke-dashoffset:125.7}to{stroke-dashoffset:0}}\n@keyframes mRingB{from{stroke-dashoffset:125.7}to{stroke-dashoffset:0}}\n.m-ringA{animation:mRingA 5s linear forwards}\n.m-ringB{animation:mRingB 5s linear forwards}\n@keyframes dSlideA{from{opacity:.4;transform:scale(1.03)}to{opacity:1;transform:none}}\n@keyframes dSlideB{from{opacity:.4;transform:scale(1.03)}to{opacity:1;transform:none}}\n.d-slideA{animation:dSlideA .6s ease both}\n.d-slideB{animation:dSlideB .6s ease both}\n@media (max-width:1180px){.d-wrap{padding:0 32px}.d-h2{font-size:40px}}\n@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.d-slideA,.d-slideB{animation:none}}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { accent, agendaChips, agendaEmpty, agendaEmptyLabel, agendaFeatured, agendaRows, agendaTitle, b, bars, c, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, closeCal, closeParking, counterN, counterTotal, cp, dLogos, dNavBg, dNavBlur, dNavLine, dParkingRows, directory, downloadIcs, e, f, food, footer, g, hoverIn, hoverOut, it, k, l, lk, nextSlide, openParking, parkingOpen, paused, prevSlide, r, slideCls } = v || {}; return html`<div style="--accent: ${accent}">

<a href="#todo" class="d-skip">Skip to content</a>

<header style="position: fixed; top: 0; left: 0; right: 0; z-index: 60; background: ${dNavBg}; -webkit-backdrop-filter: ${dNavBlur}; backdrop-filter: ${dNavBlur}; border-bottom: 1px solid ${dNavLine}; transition: background .3s ease, border-color .3s ease; color: #FFFFFF">
<div class="d-wrap" style="display: flex; align-items: center; gap: 40px; height: 76px">
<a href="#top" style="display: flex; align-items: center; gap: 12px; color: #FFFFFF; text-decoration: none; flex: none">
<svg width="36" height="36" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.6"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<span class="d-cond" style="font-size: 21px; line-height: 1">Park City Village</span>
</a>
<nav aria-label="Main" style="display: flex; gap: 28px; flex: 1; justify-content: center">
<a class="d-navlink" href="#todo">Who's here</a>
<a class="d-navlink" href="#eat">Eat & drink</a>
<a class="d-navlink" href="#agenda">Events</a>
<a class="d-navlink" href="#explore">Directory</a>
<a class="d-navlink" href="#visit">Parking</a>
</nav>
<a class="d-btn" href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" style="min-height: 44px; padding: 0 20px; background: ${accent}; color: #FFFFFF; flex: none">Find the Village</a>
</div>
</header>

<section id="top" class="d-hero" style="position: relative; height: 88vh; min-height: 640px; max-height: 920px; color: #FFFFFF; display: flex; align-items: flex-end; text-shadow: 0 1px 18px rgba(8,14,26,.45)">
<div class="d-wrap" style="display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; padding-bottom: 64px">
<div style="max-width: 680px">
<h1 class="d-cond" style="margin: 0; font-size: 104px; line-height: .9; letter-spacing: .04em">Park City<br />Village</h1>
<p style="margin: 18px 0 0; font-size: 24px; font-weight: 300; letter-spacing: .01em">Where the mountain feels like home</p>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin-top: 30px; text-shadow: none">
<a class="d-btn" href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" style="background: ${accent}; color: #FFFFFF"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"></path></svg>Find the Village</a>
<button type="button" class="d-btn d-glass" onClick=${openParking} style="color: #FFFFFF"><span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 7px; background: #FFFFFF; color: #0E1A2B; font-weight: 700">P</span><span style="text-align: left; line-height: 1.2"><span style="display: block">Free parking after noon</span><span style="display: block; font-size: 12px; font-weight: 400; opacity: .85">No reservation needed · see other times</span></span></button>
</div>
</div>
<a href="https://www.resortcentericerink.com/tickets" target="_blank" rel="noopener" class="d-card" style="display: flex; gap: 16px; align-items: center; width: 380px; flex: none; padding: 14px; color: #0E1A2B; text-decoration: none; text-shadow: none">
<img src="/parkcityvillage/assets/6aaea81152c3aff7.jpg" alt="Holiday tree over the rink at night" style="width: 108px; height: 108px; object-fit: cover; border-radius: 14px; flex: none" />
<span><span class="d-cond" style="display: block; font-size: 13px; color: ${accent}">Opening day</span><span style="display: block; margin-top: 4px; font-size: 21px; line-height: 1.2">The ice rink reopens November 19</span><span style="display: block; margin-top: 8px; font-size: 14px; font-weight: 600; color: ${accent}">Skate info ↗</span></span>
</a>
</div>
</section>

<section id="todo" style="padding: 112px 0 96px">
<div class="d-wrap">
<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 32px">
<div><div class="d-kicker">Who's in the Village</div><h2 class="d-h2">Meet you at the Village</h2><p class="d-lede">Coffee on a Saturday, cocoa after school, a skate on a weeknight. Locally run shops and restaurants at the base of the mountain.</p></div>
<div style="display: flex; gap: 10px; flex: none">
<button type="button" onClick=${prevSlide} aria-label="Previous business" style="width: 52px; height: 52px; border-radius: 50%; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font-size: 20px">←</button>
<button type="button" onClick=${nextSlide} aria-label="Next business" style="width: 52px; height: 52px; border-radius: 50%; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font-size: 20px">→</button>
</div>
</div>
<div style="display: grid; grid-template-columns: 300px 1fr; gap: 32px; margin-top: 40px" onMouseEnter=${hoverIn} onMouseLeave=${hoverOut}>
<div role="tablist" aria-label="Businesses" style="display: flex; flex-direction: column; gap: 2px">
${(dLogos||[]).map((l) => html`
<button type="button" role="tab" class="d-logo" aria-selected=${l.current} onClick=${l.pick} style="background: ${l.rowBg}">
<span style="position: relative; width: 48px; height: 48px; flex: none">
<svg width="48" height="48" viewBox="0 0 44 44" aria-hidden="true" style="position: absolute; top: 0; left: 0; transform: rotate(-90deg)"><circle cx="22" cy="22" r="20" fill="none" stroke="#E3E6EA" stroke-width="2.5"></circle><circle cx="22" cy="22" r="20" fill="none" stroke=${accent} stroke-width="2.5" stroke-dasharray="125.7" stroke-dashoffset=${l.offset} class=${l.ring} style="animation-play-state: ${l.play}"></circle></svg>
<span style="position: absolute; top: 5px; left: 5px; width: 38px; height: 38px; border-radius: 50%; background: #FFFFFF; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.12)"><img src=${l.src} alt="" style="width: 30px; height: 30px; object-fit: contain; filter: ${l.filter}" /></span>
</span>
<span style="min-width: 0"><span style="display: block; font-size: 15px; font-weight: ${l.weight}">${l.name}</span><span style="display: block; font-size: 12px; color: #5B6472">${l.kind}</span></span>
</button>
`)}
</div>
<div style="position: relative; height: 600px; border-radius: 28px; overflow: hidden; color: #FFFFFF; background: rgb(${cp.rgb})">
<div class=${slideCls} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: linear-gradient(90deg, rgba(${cp.rgb},${cp.a0}) 0%, rgba(${cp.rgb},${cp.a2}) 45%, rgba(${cp.rgb},${cp.a1}) 100%), url(${cp.img}); background-size: cover; background-position: ${cp.pos}"></div>
<div style="position: absolute; top: 20px; left: 24px; right: 24px; display: flex; gap: 6px">
${(bars||[]).map((b) => html`<span style="flex: 1; height: 3px; border-radius: 2px; background: ${b.base}; overflow: hidden"><span class=${b.fill} style="display: block; height: 100%; background: #FFFFFF; transform-origin: 0 50%; transform: scaleX(0); animation-play-state: ${b.play}"></span></span>`)}
</div>
<div style="position: absolute; top: 40px; left: 24px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: .1em">${counterN} / ${counterTotal}</div>
${(paused) ? html`<div style="position: absolute; top: 38px; right: 24px; display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: rgba(0,0,0,.3); font-size: 12px; font-weight: 600">❚❚ Paused while you look</div>` : null}
<div class=${slideCls} style="position: absolute; left: 48px; bottom: 48px; max-width: 560px">
<div class="d-cond" style="font-size: 15px; color: #F2B35E">${cp.kind}</div>
<h3 style="margin: 8px 0 0; font-weight: 300; font-size: 56px; line-height: 1.02; letter-spacing: -.02em">${cp.name}</h3>
<p style="margin: 14px 0 0; font-size: 19px; line-height: 1.5; opacity: .92">${cp.blurb}</p>
<div style="margin-top: 12px; font-size: 14px; opacity: .8">${cp.where}</div>
<a class="d-btn" href=${cp.url} target="_blank" rel="noopener" style="margin-top: 24px; background: #FFFFFF; color: #0E1A2B">${cp.cta} ↗</a>
</div>
</div>
</div>
</div>
</section>

<section id="eat" style="background: #F4F1EA; padding: 96px 0">
<div class="d-wrap">
<div class="d-kicker">Eat & drink</div>
<h2 class="d-h2">Where locals eat at the base</h2>
<p class="d-lede">Breakfast before the first chair, a burger after the last one, and coffee any time.</p>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px">
${(food||[]).map((f) => html`
<article class="d-card" style="display: flex; flex-direction: column">
<div style="position: relative">
<img src=${f.img} alt=${f.alt} style="display: block; width: 100%; height: 210px; object-fit: cover; object-position: ${f.pos}" />
<span style="position: absolute; left: 14px; bottom: -22px; height: 52px; min-width: 52px; padding: 0 10px; border-radius: 14px; background: #FFFFFF; box-shadow: 0 4px 14px rgba(0,0,0,.14); display: flex; align-items: center; justify-content: center"><img src=${f.logo} alt="" style="height: 30px; max-width: 110px; object-fit: contain" /></span>
</div>
<div style="padding: 34px 20px 20px; display: flex; flex-direction: column; flex: 1">
<div class="d-cond" style="font-size: 12px; color: ${accent}">${f.kind}</div>
<h3 style="margin: 6px 0 0; font-size: 21px; font-weight: 500; line-height: 1.2">${f.name}</h3>
<p style="margin: 8px 0 0; font-size: 14px; line-height: 1.5; color: #5B6472">${f.blurb}</p>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px">${(f.known||[]).map((k) => html`<span style="padding: 5px 10px; border-radius: 999px; background: #F4F1EA; font-size: 12px; font-weight: 500">${k}</span>`)}</div>
<div style="margin-top: 14px; font-size: 13px; color: #5B6472">🕐 ${f.hours}</div>
<div style="display: flex; gap: 8px; margin-top: auto; padding-top: 16px">
<a href=${f.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none">${f.cta} ↗</a>
${(f.url2) ? html`<a href=${f.url2} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 42px; padding: 0 16px; border-radius: 999px; border: 1px solid #D5D9DF; color: #0E1A2B; font-size: 14px; font-weight: 600; text-decoration: none">${f.cta2} ↗</a>` : null}
</div>
</div>
</article>
`)}
</div>
</div>
</section>

<section id="agenda" style="padding: 96px 0">
<div class="d-wrap" style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 64px; align-items: start">
<div>
<div class="d-kicker">On the calendar</div>
<h2 class="d-h2">${agendaTitle}</h2>
<p class="d-lede">Everything happening at the base, from every business, in one calendar.</p>
<div role="group" aria-label="When" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px">
${(agendaChips||[]).map((c) => html`<button type="button" class="d-chip" onClick=${c.pick} aria-pressed=${c.pressed} style="background: ${c.bg}; color: ${c.fg}; border: 1px solid ${c.border}">${c.label}</button>`)}
</div>
<a class="d-btn" href="/parkcityvillage/glass/calendar" style="margin-top: 32px; background: #0E1A2B; color: #FFFFFF">See the full calendar →</a>
</div>
<div>
${(agendaEmpty) ? html`<div style="padding: 40px; border-radius: 22px; background: #F4F1EA; text-align: center; font-size: 16px; color: #5B6472">Nothing on the calendar ${agendaEmptyLabel} yet. The shops are open, so come say hi.</div>` : null}
${(agendaFeatured||[]).map((e) => html`
<article style="display: flex; gap: 24px; align-items: center; padding: 28px; border-radius: 24px; background: #0E1A2B; color: #FFFFFF">
<div style="width: 96px; flex: none; text-align: center; padding: 14px 0; border-radius: 18px; background: rgba(255,255,255,.08)"><div class="d-cond" style="font-size: 14px; color: #F2B35E">${e.wdShort}</div><div style="font-size: 44px; font-weight: 300; line-height: 1">${e.dayNum}</div><div class="d-cond" style="font-size: 14px">${e.monthShort}</div></div>
<div style="flex: 1; min-width: 0"><div class="d-cond" style="font-size: 13px; color: #F2B35E">Next up · ${e.timeRange}</div><h3 style="margin: 6px 0 0; font-size: 28px; font-weight: 400; line-height: 1.15">${e.title}</h3><div style="margin-top: 6px; font-size: 15px; opacity: .8">${e.where} · ${e.cat}</div></div>
<button type="button" onClick=${e.add} style="flex: none; min-height: 48px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(255,255,255,.35); background: transparent; color: #FFFFFF; font-size: 14px; font-weight: 600">+ Add to calendar</button>
</article>
`)}
<div style="margin-top: 8px">
${(agendaRows||[]).map((e) => html`
<div class="d-row">
<div style="width: 64px; flex: none; text-align: center"><div class="d-cond" style="font-size: 12px; color: ${accent}">${e.wdShort}</div><div style="font-size: 30px; font-weight: 300; line-height: 1">${e.dayNum}</div><div class="d-cond" style="font-size: 12px; color: #5B6472">${e.monthShort}</div></div>
<div style="flex: 1; min-width: 0"><div style="font-size: 13px; color: #5B6472">${e.timeRange} · ${e.cat}</div><div style="margin-top: 2px; font-size: 19px; font-weight: 500">${e.title}</div><div style="margin-top: 2px; font-size: 14px; color: #5B6472">${e.where}</div></div>
<button type="button" onClick=${e.add} style="flex: none; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font-size: 14px; font-weight: 600">+ Add</button>
</div>
`)}
</div>
</div>
</div>
</section>

<section id="explore" style="padding: 32px 0 96px">
<div class="d-wrap">
<div class="d-kicker">The directory</div>
<h2 class="d-h2">Everyone in the Village</h2>
<p class="d-lede">The full list, and which level to find them on.</p>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px 48px; margin-top: 40px; align-items: start">
${(directory||[]).map((g) => html`
<div>
<h3 style="margin: 0 0 6px; font-size: 18px; font-weight: 600">${g.title} <span style="font-weight: 400; color: #5B6472">${g.count}</span></h3>
${(g.items||[]).map((it) => html`
${(it.url) ? html`<a class="d-dirlink" href=${it.url} target="_blank" rel="noopener"><span class="d-dn" style="transition: color .2s">${it.name} ↗</span><span style="color: #5B6472; font-size: 13px; white-space: nowrap">${it.where}</span></a>` : null}
${(it.plain) ? html`<div class="d-dirlink"><span>${it.name}</span><span style="color: #5B6472; font-size: 13px; white-space: nowrap">${it.where}</span></div>` : null}
`)}
</div>
`)}
</div>
</div>
</section>

<section id="visit" style="padding: 0 0 96px">
<div class="d-wrap" style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px">
<div id="rink" class="d-band" style="min-height: 380px; border-radius: 28px; padding: 48px; color: #FFFFFF; display: flex; flex-direction: column; justify-content: flex-end">
<div class="d-cond" style="font-size: 14px; color: #F2B35E">The ice rink</div>
<h2 style="margin: 8px 0 0; font-weight: 300; font-size: 48px; line-height: 1.05">Lace up any day of the week</h2>
<a class="d-btn" href="https://www.resortcentericerink.com/tickets" target="_blank" rel="noopener" style="align-self: flex-start; margin-top: 24px; background: #FFFFFF; color: #0E1A2B">Rink hours & tickets ↗</a>
</div>
<div style="border-radius: 28px; padding: 40px; background: #F4F1EA; display: flex; flex-direction: column">
<div class="d-cond" style="font-size: 14px; color: ${accent}">Locals tip</div>
<h2 style="margin: 8px 0 0; font-weight: 300; font-size: 40px; line-height: 1.05">Free parking after noon</h2>
<p style="margin: 12px 0 0; font-size: 16px; line-height: 1.55; color: #5B6472">No reservation needed, any day. Main Lot, 1345 Lowell Ave.</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 24px">
<button type="button" class="d-btn" onClick=${openParking} style="background: #0E1A2B; color: #FFFFFF">Parking at other times</button>
<a class="d-btn" href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" style="background: #FFFFFF; color: #0E1A2B; border: 1px solid #D5D9DF">Directions ↗</a>
</div>
</div>
</div>
</section>

<footer style="background: #0E1A2B; color: #FFFFFF; padding: 72px 0 40px">
<div class="d-wrap">
<div style="display: grid; grid-template-columns: 1.5fr repeat(3, 1fr); gap: 40px">
<div>
<div class="d-cond" style="font-size: 26px">Park City Village</div>
<div style="margin-top: 6px; font-size: 15px; color: rgba(255,255,255,.7)">At the base of Park City Mountain</div>
<div style="margin-top: 18px; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,.7)">1415 Lowell Ave<br />Park City, Utah</div>
</div>
${(footer||[]).map((c) => html`
<div><div class="d-cond" style="font-size: 14px; color: #F2B35E">${c.title}</div>${(c.links||[]).map((lk) => html`<div style="margin-top: 12px; font-size: 15px; color: rgba(255,255,255,.85)">${lk}</div>`)}</div>
`)}
</div>
<div style="display: flex; justify-content: space-between; margin-top: 56px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); font-size: 13px; color: rgba(255,255,255,.55)"><span>© 2026 Park City Village</span><a href="?view=mobile" style="color: rgba(255,255,255,.8)">View the mobile version</a></div>
</div>
</footer>

${(parkingOpen) ? html`
<div class="d-overlay" role="dialog" aria-modal="true" aria-label="Parking at the Village">
<button type="button" aria-label="Close parking info" onClick=${closeParking} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div class="d-modal" style="max-width: 920px; padding: 40px">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px">
<div><div class="d-kicker">Mountain Village lots · 2026/27 winter</div><h2 style="margin: 6px 0 0; font-weight: 300; font-size: 36px">Parking, made simple</h2></div>
<button type="button" onClick=${closeParking} aria-label="Close" style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font-size: 18px; flex: none">✕</button>
</div>
<div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 32px; margin-top: 24px">
<div style="display: flex; flex-direction: column; gap: 10px">
${(dParkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 16px; background: ${r.lightBg}">
<div style="flex: 1; min-width: 0"><div style="font-size: 14px; font-weight: 700">${r.when}</div><div style="margin-top: 2px; font-size: 14px; line-height: 1.45; color: #3B4452"><b>${r.what}</b> ${r.more}</div></div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: #0E1A2B; color: #FFFFFF; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
</div>
`)}
</div>
<div>
<h3 style="margin: 0; font-size: 16px; font-weight: 600">More free ways in</h3>
<div style="display: grid; gap: 8px; margin-top: 12px">
<a href="https://www.parkcity.gov/services/transit/routes_schedules/index.php" target="_blank" rel="noopener" class="d-dirlink" style="border-top: 0; padding: 12px 14px; border-radius: 12px; background: #F4F1EA"><span>Park City Transit · free buses</span><span>↗</span></a>
<a href="https://www.hvtutah.gov/" target="_blank" rel="noopener" class="d-dirlink" style="border-top: 0; padding: 12px 14px; border-radius: 12px; background: #F4F1EA"><span>High Valley Transit · from the valley</span><span>↗</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Richardson+Flat+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" class="d-dirlink" style="border-top: 0; padding: 12px 14px; border-radius: 12px; background: #F4F1EA"><span>Richardson Flat park & ride</span><span>↗</span></a>
<a href="https://www.google.com/maps/search/?api=1&query=Ecker+Hill+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" class="d-dirlink" style="border-top: 0; padding: 12px 14px; border-radius: 12px; background: #F4F1EA"><span>Ecker Hill park & ride</span><span>↗</span></a>
</div>
<h3 style="margin: 24px 0 0; font-size: 16px; font-weight: 600">Good to know</h3>
<ul style="margin: 10px 0 0; padding-left: 18px; font-size: 14px; line-height: 1.6; color: #3B4452">
<li>Park City High School lot is free on weekends and holidays.</li>
<li>Bookings open Nov 3 at 8 am; hold up to 5 at a time.</li>
<li>Arrive before noon and stay all day. No overnight parking.</li>
<li>Cancel before 8 am for a refund; no-shows may get a $125 violation.</li>
</ul>
<a href="https://www.parkatparkcitymountain.com/parkmountainvillage" target="_blank" rel="noopener" style="display: inline-block; margin-top: 14px; font-size: 14px; font-weight: 600; color: ${accent}">Full parking rules ↗</a>
</div>
</div>
</div>
</div>
` : null}

${(calOpen) ? html`
<div class="d-overlay" role="dialog" aria-modal="true" aria-label="Add to calendar">
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div class="d-modal" style="max-width: 460px; padding: 32px">
<div class="d-kicker">Add to calendar</div>
<h2 style="margin: 6px 0 0; font-weight: 400; font-size: 28px; line-height: 1.15">${calTitle}</h2>
<div style="margin-top: 8px; font-size: 15px; line-height: 1.5; color: #5B6472">${calWhen}<br />${calWhere}</div>
<div style="display: grid; gap: 10px; margin-top: 22px">
<button type="button" onClick=${downloadIcs} class="d-btn" style="justify-content: center; background: #0E1A2B; color: #FFFFFF">Apple Calendar (.ics)</button>
<a href=${calGoogle} target="_blank" rel="noopener" class="d-btn" style="justify-content: center; border: 1px solid #D5D9DF; color: #0E1A2B">Google Calendar ↗</a>
<a href=${calOutlook} target="_blank" rel="noopener" class="d-btn" style="justify-content: center; border: 1px solid #D5D9DF; color: #0E1A2B">Outlook ↗</a>
<button type="button" onClick=${closeCal} style="min-height: 44px; border: 0; background: transparent; color: #5B6472; font-size: 14px; font-weight: 600">Cancel</button>
</div>
</div>
</div>
` : null}

</div>`; }
class DCLogic extends preact.Component { render() { return TPL(this.renderVals()); } }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { i: 0, cycle: 0, menu: false, paused: false, nav: true, navSolid: false };
    // Hold to pause, like stories: press and hold ~0.2s stops the timer and bar; release resumes.
    this.onHoldStart = (e) => {
      if (e.target && e.target.closest && e.target.closest('a, button')) return;
      this.downX = e.clientX; this.downY = e.clientY;
      clearTimeout(this.holdT);
      this.holdT = setTimeout(() => this.pause(), 220);
    };
    this.onHoldMove = (e) => {
      if (Math.abs(e.clientX - (this.downX || 0)) > 10 || Math.abs(e.clientY - (this.downY || 0)) > 10) clearTimeout(this.holdT);
    };
    this.onHoldEnd = () => {
      clearTimeout(this.holdT);
      if (this.state.paused) { this.suppress = true; this.resume(); setTimeout(() => { this.suppress = false; }, 350); }
    };
    this.onCtx = (e) => { if (this.state.paused || this.holdT) e.preventDefault(); };
    this.openMenu = () => this.setState({ menu: true });
    this.openParking = () => this.setState({ parking: true, menu: false });
    this.closeParking = () => this.setState({ parking: false });
    this.closeMenu = () => this.setState({ menu: false });
    this.closeCal = () => this.setState({ calEv: null });
    this.downloadIcs = () => {
      try {
        const blob = new Blob([this.curIcs || ''], { type: 'text/calendar;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = (this.curName || 'park-city-village-event') + '.ics';
        document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      } catch (err) { /* download blocked: Google and Outlook links still work */ }
    };
    // Glass nav: slides in when scrolling up past the hero, tucks away when scrolling down.
    this.onWinScroll = () => {
      if (this.locked) return;
      const y = window.scrollY, last = this.lastY || 0;
      this.lastY = y;
      const hero = document.querySelector('.m-hero');
      const heroEnd = hero ? hero.offsetHeight - 80 : 600;
      let show = this.state.nav;
      const solid = y > 24;                  // glass fades in once you leave the very top
      if (solid !== this.state.navSolid) this.setState({ navSolid: solid });
      if (y < heroEnd) show = true;          // it IS the header through the hero
      else if (y < last - 6) show = true;    // past the hero: back when scrolling up
      else if (y > last + 6) show = false;   // and out of the way when scrolling down
      if (show !== this.state.nav) this.setState({ nav: show });
    };
    this.count = 8;
    this.setSlider = (el) => { this.el = el; };
    this.goTo = (k) => { this.setState({ i: k, cycle: this.state.cycle + 1 }); if (this.el) this.jump(k + 1); this.startTimer(); };
    this.prevSlide = () => this.step(-1, true);
    this.nextSlide = () => this.step(1, true);
    // Story-style taps: left third goes back, the rest goes forward. Links and buttons keep working.
    this.onTap = (e) => {
      if (this.suppress) { this.suppress = false; return; }
      if (!this.el || (e.target && e.target.closest && e.target.closest('a, button'))) return;
      const r = this.el.getBoundingClientRect();
      if (e.clientX - r.left < r.width * 0.33) this.step(-1, true); else this.step(1, true);
    };
    this.onSlide = () => {
      clearTimeout(this.settle);
      this.settle = setTimeout(() => this.settled(), 140);
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onWinScroll, { passive: true });
    if (this.el) this.jump(1);
    // Only start the timer once the slider is about halfway on screen; pause it again when it leaves.
    if (this.el && 'IntersectionObserver' in window) {
      this.io = new IntersectionObserver((entries) => {
        const vis = entries[0].intersectionRatio >= 0.5;
        if (vis === this.visible) return;
        this.visible = vis;
        if (vis) { this.setState({ inView: true, cycle: this.state.cycle + 1 }); this.startTimer(); }
        else { clearTimeout(this.timer); this.setState({ inView: false }); }
      }, { threshold: [0, 0.5, 1] });
      this.io.observe(this.el);
    } else { this.visible = true; this.setState({ inView: true }); this.startTimer(); }
  }
  componentWillUnmount() { clearInterval(this.timer); clearTimeout(this.settle); this.lockScroll(false); if (this.io) this.io.disconnect(); window.removeEventListener('scroll', this.onWinScroll); }
  componentDidUpdate() { this.lockScroll(!!(this.state.parking || this.state.menu || this.state.calEv)); }
  // Freeze the page behind the menu or parking popup so only the overlay moves.
  lockScroll(on) {
    if (this.locked === on) return;
    this.locked = on;
    const b = document.body, h = document.documentElement;
    if (on) {
      this.scrollY = window.scrollY;
      h.style.overflow = 'hidden';
      b.style.overflow = 'hidden'; b.style.position = 'fixed'; b.style.top = -this.scrollY + 'px'; b.style.left = '0'; b.style.right = '0';
    } else {
      h.style.overflow = ''; b.style.overflow = ''; b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = '';
      window.scrollTo(0, this.scrollY || 0);
    }
  }
  startTimer(ms) {
    clearTimeout(this.timer);
    if (!this.visible) return;
    this.dur = ms || 5000;
    this.cycleStart = Date.now();
    this.timer = setTimeout(() => this.advance(), this.dur);
  }
  pause() {
    if (this.state.paused) return;
    clearTimeout(this.timer);
    this.left = Math.max(300, this.dur - (Date.now() - this.cycleStart));
    this.setState({ paused: true });
  }
  resume() {
    this.setState({ paused: false });
    this.startTimer(this.left);
  }
  jump(p) {
    const el = this.el;
    el.style.scrollSnapType = 'none';
    el.scrollLeft = p * el.clientWidth;
    void el.offsetWidth;
    el.style.scrollSnapType = '';
  }
  settled() {
    const el = this.el; if (!el) return;
    const n = this.count, p = Math.round(el.scrollLeft / el.clientWidth);
    let real;
    if (p <= 0) { this.jump(n); real = n - 1; }
    else if (p >= n + 1) { this.jump(1); real = 0; }
    else real = p - 1;
    if (real !== this.state.i) { this.setState({ i: real, cycle: this.state.cycle + 1 }); this.startTimer(); }
  }
  advance() { this.step(1); }
  step(d, instant) {
    const n = this.count, cur = this.state.i, i = (cur + d + n) % n;
    this.setState({ i, cycle: this.state.cycle + 1 });
    if (this.el) {
      // Taps cut straight to the next place like stories; the timer still slides.
      if (instant) this.jump(i + 1);
      else this.el.scrollTo({ left: (cur + 1 + d) * this.el.clientWidth, behavior: 'smooth' });
    }
    this.startTimer();
  }
  renderVals() {
    const accent = this.props.accent ?? '#C8402A';
    // ---- Village calendar (mock events until the weekly feed is live) ----
    const EVENTS = [
      { id: 'e1', title: "Pre-season boot-fitting week", start: '2026-10-29T10:00', mins: 480, where: "Bootworks", cat: 'Gear', img: '/parkcityvillage/assets/d52c119782b14df5.jpg' },
      { id: 'e2', title: "Thursday trivia night", start: '2026-10-29T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e3', title: "Harvest pumpkin bread morning", start: '2026-10-30T08:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/parkcityvillage/assets/778a3affa50bc3e5.jpg' },
      { id: 'e4', title: "Season locker sign-ups", start: '2026-10-30T09:00', mins: 480, where: "Jackson's Base Camp", cat: 'Gear', img: '/parkcityvillage/assets/b9852ef17e4b2672.jpg' },
      { id: 'e5', title: "Caramel apple dipping for kids", start: '2026-10-31T13:00', mins: 90, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/parkcityvillage/assets/92b6d944f3a847e1.jpg' },
      { id: 'e6', title: "Halloween costume apr\u00e8s (21+)", start: '2026-10-31T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e7', title: "Trick-or-treat around the Village", start: '2026-10-31T16:00', mins: 120, where: "Shops across the Village", cat: 'Family', img: '/parkcityvillage/assets/d5a44ce8e5fedc98.jpg' },
      { id: 'e8', title: "Sunday brunch & coffee tasting", start: '2026-11-01T09:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/parkcityvillage/assets/a94074167a72111b.jpg' },
      { id: 'e9', title: "Ski & board swap drop-off", start: '2026-11-01T10:00', mins: 360, where: "Cole Sport", cat: 'Gear', img: '/parkcityvillage/assets/9c02e1080b7531b8.jpg' },
      { id: 'e10', title: "Wax & tune clinic", start: '2026-11-03T17:30', mins: 90, where: "Jackson's Base Camp", cat: 'Gear', img: '/parkcityvillage/assets/b9852ef17e4b2672.jpg' },
      { id: 'e11', title: "Locals night: half-price apps", start: '2026-11-05T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink', img: '/parkcityvillage/assets/3894071d13b9b254.jpg' },
      { id: 'e12', title: "Rental pre-booking party", start: '2026-11-06T16:00', mins: 180, where: "Aloha Ski & Snowboard", cat: 'Gear', img: '/parkcityvillage/assets/ee743ee8a8d189b8.jpg' },
      { id: 'e13', title: "Ski swap: buy day", start: '2026-11-07T09:00', mins: 420, where: "Cole Sport", cat: 'Shopping', img: '/parkcityvillage/assets/9c02e1080b7531b8.jpg' },
      { id: 'e14', title: "Live acoustic set", start: '2026-11-07T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg' },
      { id: 'e15', title: "Family fudge demo", start: '2026-11-08T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/parkcityvillage/assets/c571300f29e493b0.jpg' },
      { id: 'e16', title: "Thursday trivia night", start: '2026-11-12T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e17', title: "Demo day: new skis on snow", start: '2026-11-14T10:00', mins: 300, where: "Jackson's Base Camp", cat: 'Gear', img: '/parkcityvillage/assets/b9852ef17e4b2672.jpg' },
      { id: 'e18', title: "Live music on the deck", start: '2026-11-14T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg' },
      { id: 'e19', title: "Custom insole open house", start: '2026-11-15T11:00', mins: 240, where: "Bootworks", cat: 'Gear', img: '/parkcityvillage/assets/d52c119782b14df5.jpg' },
      { id: 'e20', title: "Opening night on the ice", start: '2026-11-19T16:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/ca4d387494b9b28f.jpg' },
      { id: 'e21', title: "Opening day pancake breakfast", start: '2026-11-20T07:30', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/parkcityvillage/assets/778a3affa50bc3e5.jpg' },
      { id: 'e22', title: "First chair apr\u00e8s party", start: '2026-11-20T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e23', title: "Live apr\u00e8s set on the deck", start: '2026-11-21T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg' },
      { id: 'e24', title: "Learn-to-skate morning", start: '2026-11-22T10:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/ca4d387494b9b28f.jpg' },
      { id: 'e25', title: "Thanksgiving Day skate", start: '2026-11-26T12:00', mins: 240, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/ca4d387494b9b28f.jpg' },
      { id: 'e26', title: "Black Friday gear sale", start: '2026-11-27T09:00', mins: 480, where: "Cole Sport", cat: 'Shopping', img: '/parkcityvillage/assets/9c02e1080b7531b8.jpg' },
      { id: 'e27', title: "Village tree lighting", start: '2026-11-27T17:30', mins: 90, where: "Rinkside plaza", cat: 'Family', img: '/parkcityvillage/assets/e7562d68353e4d04.jpg' },
      { id: 'e28', title: "Small Business Saturday", start: '2026-11-28T10:00', mins: 420, where: "Shops across the Village", cat: 'Shopping', img: '/parkcityvillage/assets/9c02e1080b7531b8.jpg' },
      { id: 'e29', title: "Live music on the deck", start: '2026-11-28T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg' },
      { id: 'e30', title: "Cocoa & carols by the fire", start: '2026-12-05T16:00', mins: 120, where: "Fire pits, Village plaza", cat: 'Family', img: '/parkcityvillage/assets/927bfd1c3ce12cd3.jpg' },
      { id: 'e31', title: "Boot-fitting clinic", start: '2026-12-06T10:00', mins: 180, where: "Bootworks", cat: 'Gear', img: '/parkcityvillage/assets/d52c119782b14df5.jpg' },
      { id: 'e32', title: "Thursday trivia night", start: '2026-12-10T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e33', title: "Family skate night with a DJ", start: '2026-12-11T18:00', mins: 150, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/ca4d387494b9b28f.jpg' },
      { id: 'e34', title: "Ugly sweater apr\u00e8s (21+)", start: '2026-12-12T15:00', mins: 180, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e35', title: "Fudge-making demo", start: '2026-12-13T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/parkcityvillage/assets/92b6d944f3a847e1.jpg' },
      { id: 'e36', title: "Holiday gift wrap & shop night", start: '2026-12-17T16:00', mins: 240, where: "Shops across the Village", cat: 'Shopping', img: '/parkcityvillage/assets/d5a44ce8e5fedc98.jpg' },
      { id: 'e37', title: "Ugly sweater skate", start: '2026-12-19T15:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/ca4d387494b9b28f.jpg' },
      { id: 'e38', title: "Live holiday music", start: '2026-12-20T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg' },
      { id: 'e39', title: "Christmas Eve skate & cocoa", start: '2026-12-24T14:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/6aaea81152c3aff7.jpg' },
      { id: 'e40', title: "Holiday truffle tasting", start: '2026-12-26T13:00', mins: 120, where: "Rocky Mountain Chocolate Factory", cat: 'Food & drink', img: '/parkcityvillage/assets/c571300f29e493b0.jpg' },
      { id: 'e41', title: "New Year's Eve apr\u00e8s bash (21+)", start: '2026-12-31T15:00', mins: 300, where: "Pig Pen Saloon", cat: 'Music', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e42', title: "New Year's Eve glow skate", start: '2026-12-31T17:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/e7562d68353e4d04.jpg' },
      { id: 'e43', title: "New Year recovery brunch", start: '2027-01-01T09:00', mins: 240, where: "Harvest at the Base", cat: 'Food & drink', img: '/parkcityvillage/assets/778a3affa50bc3e5.jpg' },
      { id: 'e44', title: "Kids ski-gear swap", start: '2027-01-09T10:00', mins: 240, where: "Aloha Ski & Snowboard", cat: 'Family', img: '/parkcityvillage/assets/ee743ee8a8d189b8.jpg' },
      { id: 'e45', title: "Locals night: half-price apps", start: '2027-01-14T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink', img: '/parkcityvillage/assets/3894071d13b9b254.jpg' },
      { id: 'e46', title: "Sundance week apr\u00e8s", start: '2027-01-22T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Music', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg' },
      { id: 'e47', title: "Moonlight skate", start: '2027-01-23T19:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/parkcityvillage/assets/e7562d68353e4d04.jpg' },
      { id: 'e48', title: "Winter boot tune-up day", start: '2027-01-30T10:00', mins: 300, where: "Bootworks", cat: 'Gear', img: '/parkcityvillage/assets/d52c119782b14df5.jpg' }
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
    const calLinks = (e) => {
      const s = parts(e.start), en = addMins(s, e.mins);
      const loc = `${e.where}, ${ADDR}`;
      const details = `${e.title} at Park City Village. Free parking after noon.`;
      const q = encodeURIComponent;
      return {
        google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${q(e.title)}&dates=${stamp(s)}/${stamp(en)}&ctz=America/Denver&location=${q(loc)}&details=${q(details)}`,
        outlook: `https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=${q(e.title)}&startdt=${q(iso(s) + '-07:00')}&enddt=${q(iso(en) + '-07:00')}&location=${q(loc)}&body=${q(details)}`,
        ics: ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Park City Village//Calendar//EN', 'BEGIN:VTIMEZONE', 'TZID:America/Denver', 'BEGIN:STANDARD', 'DTSTART:19701101T020000', 'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU', 'TZOFFSETFROM:-0600', 'TZOFFSETTO:-0700', 'TZNAME:MST', 'END:STANDARD', 'BEGIN:DAYLIGHT', 'DTSTART:19700308T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU', 'TZOFFSETFROM:-0700', 'TZOFFSETTO:-0600', 'TZNAME:MDT', 'END:DAYLIGHT', 'END:VTIMEZONE', 'BEGIN:VEVENT', `UID:${e.id}@parkcityvillage`, `DTSTAMP:${stamp(s)}Z`, `DTSTART;TZID=America/Denver:${stamp(s)}`, `DTEND;TZID=America/Denver:${stamp(en)}`, `SUMMARY:${e.title.replace(/,/g, '\\,')}`, `LOCATION:${loc.replace(/,/g, '\\,')}`, `DESCRIPTION:${details.replace(/,/g, '\\,')}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
      };
    };
    const decorate = (e) => {
      const s = parts(e.start), en = addMins(s, e.mins);
      const wd = DAY[new Date(Date.UTC(s.y, s.m - 1, s.d)).getUTCDay()];
      return { ...e, ...calLinks(e), dayNum: pad(s.d), monthName: MON[s.m - 1], monthKey: `${s.y}-${pad(s.m)}`, weekday: wd, wdShort: wd.slice(0, 3), dateLong: `${wd}, ${MON[s.m - 1]} ${s.d}`, timeRange: `${clock(s)} – ${clock(en)}`, startClock: clock(s), add: () => this.setState({ calEv: e.id }) };
    };
    const allEvents = EVENTS.map(decorate);
    const calEv = allEvents.find(x => x.id === this.state.calEv) || null;
    this.curIcs = calEv ? calEv.ics : ''; this.curName = calEv ? calEv.id : '';
    // Homepage shows the next 7 days; if nothing is that close, the next few events.
    const nowMs = Date.now();
    const startMs = (e) => { const p = parts(e.start); return Date.UTC(p.y, p.m - 1, p.d, p.hh, p.mm) + 7 * 3600000; };
    const upcoming = allEvents.filter(e => startMs(e) + e.mins * 60000 > nowMs);
    const week = upcoming.filter(e => startMs(e) < nowMs + 7 * 86400000);
    const agendaTitle = week.length ? 'This week at the Village' : 'Coming up at the Village';
    // Homepage events: chips filter by when; first result is the featured card, next three are rows.
    const todayKey = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver' }).format(new Date());
    const tk = parts(todayKey + 'T00:00');
    const dayKey = (n) => { const t = new Date(Date.UTC(tk.y, tk.m - 1, tk.d) + n * 86400000); return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`; };
    const dow = new Date(Date.UTC(tk.y, tk.m - 1, tk.d)).getUTCDay();
    const weekendKeys = dow === 0 ? [dayKey(0)] : dow === 6 ? [dayKey(0), dayKey(1)] : [dayKey(5 - dow), dayKey(6 - dow), dayKey(7 - dow)];
    const next7 = Array.from({ length: 7 }, (_, n) => dayKey(n));
    const af = this.state.agendaFilter || 'next';
    const AF = [['next', 'Coming up'], ['today', 'Today'], ['weekend', 'This weekend'], ['week', 'Next 7 days']];
    const pickList = af === 'today' ? upcoming.filter(e => e.start.slice(0, 10) === todayKey) : af === 'weekend' ? upcoming.filter(e => weekendKeys.includes(e.start.slice(0, 10))) : af === 'week' ? upcoming.filter(e => next7.includes(e.start.slice(0, 10))) : upcoming;
    const shortMon = (e) => e.monthName.slice(0, 3);
    const shape = (e) => ({ ...e, monthShort: shortMon(e), dateShort: `${e.wdShort}, ${shortMon(e)} ${Number(e.dayNum)}` });
    const agendaFeatured = pickList.slice(0, 1).map(shape);
    const agendaRows = pickList.slice(1, 4).map(shape);
    const chipStyle = (on) => on ? { bg: '#0E1A2B', fg: '#FFFFFF', border: '#0E1A2B', pressed: 'true' } : { bg: '#FFFFFF', fg: '#0E1A2B', border: '#D5D9DF', pressed: 'false' };
    const agendaChips = AF.map(([k, label]) => ({ label, ...chipStyle(af === k), pick: () => this.setState({ agendaFilter: k }) }));
    const agendaEmpty = pickList.length === 0;
    const agendaEmptyLabel = af === 'today' ? 'today' : af === 'weekend' ? 'this weekend' : af === 'week' ? 'in the next 7 days' : '';
    const agenda = (week.length ? week : upcoming.slice(0, 4)).map(e => ({ when: e.dateLong + ' · ' + e.timeRange, title: e.title, where: e.where, big: e.dayNum, small: e.monthName, img: e.img, alt: e.title, add: e.add }));
    const IMG = { hero: '/parkcityvillage/assets/a0ea0543f06f09ed.jpg', tree: '/parkcityvillage/assets/6aaea81152c3aff7.jpg', fire: '/parkcityvillage/assets/927bfd1c3ce12cd3.jpg', rink: '/parkcityvillage/assets/08f13bcfdb17bb03.jpg', cafe: '/parkcityvillage/assets/87a32a36c4f8e00b.jpg', drinks: '/parkcityvillage/assets/4ae477c01885df5c.jpg', summer: '/parkcityvillage/assets/43daf429f344c44b.jpg' };
    const featured = [
      { name: 'Pig Pen Saloon', kind: 'Saloon · burgers & après', blurb: 'The local spot for everyone, family owned since 1999. Home of the Shot & Shirt.', where: 'Rink level · daily 11–6', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg', url: 'https://www.pigpensaloon.com/menus', cta: 'See the menus' },
      { name: 'Bluebird Après Cafe', kind: 'Café · lunch & après', blurb: 'Ski hard, après harder. A sunny deck, fire pits and live music on weekends.', where: 'Second level, with deck · daily from 11', img: '/parkcityvillage/assets/d59bc581659f4cd4.jpg', pos: '50% 55%', url: 'https://www.bluebirdpc.com/menu', cta: 'See the menu' },
      { name: 'Harvest at the Base', kind: 'Café · breakfast & lunch', blurb: 'All-day breakfast, local coffee, healthy bowls and fresh pastries. Dine in or take out.', where: 'Up the steps from Cole Sport · 7:30–3', img: '/parkcityvillage/assets/a94074167a72111b.jpg', url: 'https://www.harvestparkcity.com/harvest-at-base', cta: 'Menu & order ahead' },
      { name: 'Rocky Mountain Chocolate Factory', kind: 'Chocolate & treats', blurb: 'Watch them make fudge, then pick from dozens of caramel apples.', where: 'Second level, facing Lowell Ave', img: '/parkcityvillage/assets/92b6d944f3a847e1.jpg', pos: '30% 50%', url: 'https://www.rmcf.com/', cta: 'Shop online' },
      { name: "Jackson's Base Camp", kind: 'Demos, rentals & tuning', blurb: 'Locally owned on-mountain ski shop: demos, custom boot fitting, tuning and lockers.', where: 'Rink level, next to Pig Pen · daily 8–6', img: '/parkcityvillage/assets/b9852ef17e4b2672.jpg', pos: '35% 50%', url: 'https://jacksonsbasecamp.com/', cta: 'Demos & rentals' },
      { name: 'Cole Sport', kind: 'Rentals, apparel & repair', blurb: 'Family owned since 1982. Rentals, ski fashion, boot fitting and a full repair shop.', where: 'Resort Center · 1385 Lowell Ave', img: '/parkcityvillage/assets/9c02e1080b7531b8.jpg', pos: '40% 50%', url: 'https://www.colesport.com/park-city-ski-snowboard-rentals/', cta: 'Reserve rentals' },
      { name: 'Aloha Ski & Snowboard', kind: 'Ski & board rentals', blurb: 'Locally owned rentals with unlimited exchanges and free overnight storage.', where: 'Second level & the Loft', img: '/parkcityvillage/assets/ee743ee8a8d189b8.jpg', pos: '30% 50%', url: 'https://www.parkcityskirentals.com/', cta: 'Reserve rentals' },
      { name: 'Bootworks', kind: 'Boot fitting & insoles', blurb: "Park City's ski boot specialists for 40 years. Custom fitting, insoles and alterations in-house.", where: 'The Loft', img: '/parkcityvillage/assets/d52c119782b14df5.jpg', pos: '55% 50%', url: 'https://www.bootworks.com/', cta: 'Book a fitting' }
    ];
    const food = [
      { name: 'Harvest at the Base', kind: 'Café · breakfast & lunch', blurb: 'All-day breakfast, local coffee, healthy bowls and fresh pastries. Dine in or take out.', known: ['Chicken laksa soup', 'Omelets', 'Paleo banana bread'], hours: 'Daily 7:30 am–3 pm (winter)', img: '/parkcityvillage/assets/778a3affa50bc3e5.jpg', alt: 'Meatball sandwich with greens at Harvest', logo: '/parkcityvillage/assets/1e17c5705199a350.png', logoH: '26px', url: 'https://www.harvestparkcity.com/harvest-at-base#BaseMenu', cta: 'Menu', url2: 'https://www.facebook.com/harvestpc/', cta2: 'Facebook', pos: '50% 50%' },
      { name: 'Bluebird Après Cafe', kind: 'Café · lunch & après', blurb: 'Slopeside deck, fire pits and live après sets on weekends. Kids’ meals come with fruit and organic juice.', known: ['Mac Bowl', 'Brisket Melty', 'Dubai Chocolate Churros'], hours: 'Daily from 11 am', img: '/parkcityvillage/assets/3894071d13b9b254.jpg', pos: '50% 65%', alt: 'Honey maple tenders, fries and a cocktail on the Bluebird deck', logo: '/parkcityvillage/assets/572b540d387fbdbc.png', logoH: '44px', url: 'https://www.bluebirdpc.com/menu', cta: 'Menu', url2: 'https://www.instagram.com/bluebird.parkcity/', cta2: 'Instagram' },
      { name: 'Rocky Mountain Chocolate Factory', kind: 'Chocolate & treats', blurb: 'Watch them make fudge, then pick from dozens of caramel apples. A sweet stop for the whole family.', known: ['Fresh fudge', 'Caramel apples', 'Truffles'], hours: '[HOURS]', img: '/parkcityvillage/assets/c571300f29e493b0.jpg', pos: '50% 50%', alt: 'Dark chocolate truffles with gold sprinkles', logo: '/parkcityvillage/assets/bbec4d2fa692fae5.svg', logoH: '38px', url: 'https://www.rmcf.com/', cta: 'Shop online', url2: '' },
      { name: 'Pig Pen Saloon', kind: 'Saloon · burgers & après', blurb: 'The local spot for everyone. Family owned since 1999 and home of the Shot & Shirt.', known: ['Pig Pen Burger', "Parley's Prime", 'Après menu 3 pm–close'], hours: 'Daily 11–6 · 21+', img: '/parkcityvillage/assets/554eb72bcdb0490f.jpg', alt: 'Regulars at the Pig Pen Saloon', logo: '/parkcityvillage/assets/188aa4478905b10a.png', logoH: '34px', url: 'https://www.pigpensaloon.com/menus', cta: 'Menus', url2: 'https://www.instagram.com/pigpensaloon/', cta2: 'Instagram', pos: '50% 50%' }
    ];
    // Fair placement: a fresh random order on every visit, kept steady while the page is open.
    const order = (key, n) => {
      if (!this[key] || this[key].length !== n) {
        const a = Array.from({ length: n }, (_, k) => k);
        for (let k = n - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); const t = a[k]; a[k] = a[j]; a[j] = t; }
        this[key] = a;
      }
      return this[key];
    };
    // Each slide is washed in that business's own brand color so white type always reads.
    const TINT = { 'Pig Pen Saloon': '#3B1A12', 'Bluebird Après Cafe': '#1C4A96', 'Harvest at the Base': '#24402F', 'Rocky Mountain Chocolate Factory': '#371910', "Jackson's Base Camp": '#003E72', 'Cole Sport': '#1E1E22', 'Aloha Ski & Snowboard': '#0A5F78', 'Bootworks': '#7A1C0C' };
    // Photos that already come color-graded get only a light scrim for the text, not a second tint.
    const PRETINTED = { 'Pig Pen Saloon': true };
    const rgbOf = (h) => [1, 3, 5].map(k => parseInt(h.slice(k, k + 2), 16)).join(',');
    const featuredS = order('permPlaces', featured.length).map(k => featured[k]);
    const foodS = order('permFood', food.length).map(k => food[k]);
    const total = String(featured.length).padStart(2, '0');
    // Tiny logo row under the slider: the current business pops, tap any logo to jump to it.
    const LOGO = { 'Pig Pen Saloon': '/parkcityvillage/assets/188aa4478905b10a.png', 'Bluebird Après Cafe': '/parkcityvillage/assets/572b540d387fbdbc.png', 'Harvest at the Base': '/parkcityvillage/assets/1e17c5705199a350.png', 'Rocky Mountain Chocolate Factory': '/parkcityvillage/assets/bbec4d2fa692fae5.svg', "Jackson's Base Camp": '/parkcityvillage/assets/afb5e9cb0c1e7532.png', 'Cole Sport': '/parkcityvillage/assets/9730185b62bdf003.png', 'Aloha Ski & Snowboard': '/parkcityvillage/assets/dadaf3c7fec1eff4.png', 'Bootworks': '/parkcityvillage/assets/578c210b47b80106.png' };
    const popCls = this.state.cycle % 2 ? 'm-popA' : 'm-popB';
    const ringCls = this.state.cycle % 2 ? 'm-ringA' : 'm-ringB';
    const running = !this.state.paused && this.state.inView;
    const logos = featuredS.map((p, k) => { const on = k === this.state.i, done = k < this.state.i; const dark = p.name === 'Cole Sport'; return { name: p.name, src: LOGO[p.name] || '', bg: '#FFFFFF', filter: dark ? 'brightness(0)' : 'none', current: on ? 'true' : 'false', pick: () => this.goTo(k), pop: on ? popCls : '', scale: on ? '1.06' : '0.94', op: on || done ? '1' : '0.78', ring: on && this.state.inView ? ringCls : '', offset: done ? '0' : '125.7', play: running ? 'running' : 'paused' }; });
    const places = featuredS.map((p, i) => ({ ...p, n: String(i + 1).padStart(2, '0'), total, hint: i === 0 ? 'Tap or swipe →' : '', pos: p.pos || '50% 50%', rgb: rgbOf(TINT[p.name] || '#0E1A2B'), ...(PRETINTED[p.name] ? { a0: 0.85, a1: 0.12, a2: 0.3 } : { a0: 0.94, a1: 0.55, a2: 0.68 }) }));
    this.count = featured.length;
    const cur = this.state.i, flip = this.state.cycle % 2 ? 'm-fillA' : 'm-fillB';
    const bars = featured.map((_, j) => ({ base: j < cur ? '#FFFFFF' : 'rgba(255,255,255,0.3)', fill: j === cur && this.state.inView ? flip : '', play: this.state.paused || !this.state.inView ? 'paused' : 'running' }));
    const slides = [places[places.length - 1], ...places, places[0]];
    const groups = [
      { title: 'Eat, drink & treats', items: [['Pig Pen Saloon', 'Rink level', 'https://www.pigpensaloon.com/'], ['Bluebird Après Cafe', 'Second level', 'https://www.bluebirdpc.com/'], ['Harvest at the Base', 'Second level', 'https://www.harvestparkcity.com/harvest-at-base'], ['Rocky Mountain Chocolate Factory', 'Second level', 'https://www.rmcf.com/'], ['Food For Thought (market)', 'Rink level · 8–8']] },
      { title: 'Rentals, gear & tuning', items: [["Jackson's Base Camp", 'Rink level', 'https://jacksonsbasecamp.com/'], ['Breeze Ski Rentals', 'Rink level', 'https://www.skiutah.com/members/breeze-ski-rentals'], ['Cole Sport', 'Village Ventures', 'https://www.colesport.com/'], ['Cole Sport Tuning', 'Rink level', 'https://www.colesport.com/ski-tuning-repair/'], ['Aloha Ski & Snowboard', 'Second level', 'https://www.parkcityskirentals.com/'], ['Aloha Ski & Snowboard, Loft', 'The Loft', 'https://www.parkcityskirentals.com/'], ['Bahnhof Sports', 'The Loft'], ['Bootworks', 'The Loft', 'https://www.bootworks.com/'], ['Alpine Ski Services', 'The Loft'], ['Ski Vault', 'Second level']] },
      { title: 'Lockers & ski clubs', items: [['Jackson Lockers', 'Resort Center', 'https://jacksonsbasecamp.com/lockers-valet-seasonal/'], ["Jackson's Hideaway (ski club)", 'Rink level', 'https://jacksonshideaway.com/'], ['The Lockers at the Lodge', 'Rink level']] },
      { title: 'Places to stay', items: [["All Season's Resort Lodging", 'Rink level', 'https://www.allseasonsresortlodging.com/'], ["Marriott's MountainSide", 'Rink level']] },
      { title: 'Also in the Village', items: [['Wildings', 'Rink level'], ['Engel & Völkers', 'Rink level'], ['Berkshire Hathaway HomeServices', 'Second level', 'https://www.bhhsutah.com/'], ['Compass Management', 'Second level'], ['Park City Sport (office)', 'The Loft', 'https://parkcitysport.com/']] }
    ];
    const directory = groups.map(g => ({ title: g.title, count: String(g.items.length), items: g.items.slice().sort((a, b) => a[0].localeCompare(b[0])).map(([name, where, url]) => ({ name, where, url: url || '', plain: !url })) }));
    const footer = [
      { title: 'Visit', links: ['Shop & Dine', 'Ice Rink', 'Events'] },
      { title: 'Plan your visit', links: ['Getting here', 'Parking', 'Village map'] },
      { title: 'The Village', links: ['Private events', 'Leasing', 'Contact'] }
    ];
    const events = agenda.map(e => { const [date, time] = e.when.split(' · '); return { ...e, date, time: time || '' }; });
    const menuItems = [
      { label: "Who's in the Village", sub: 'Après, cafés, chocolate & gear', href: '#todo' },
      { label: 'Eat & drink', sub: 'Menus, hours & après', href: '#eat' },
      { label: 'Upcoming events', sub: 'Skate nights & holiday lights', href: '#agenda' },
      { label: 'Everyone in the Village', sub: 'The full directory', href: '#explore' },
      { label: 'The Ice Rink', sub: 'Skating, rentals & tickets', href: '#rink' },
      { label: 'Plan your visit', sub: 'Parking & directions', href: '#visit' }
    ].map((m, i) => ({ ...m, num: String(i + 1).padStart(2, '0'), delay: (120 + i * 55) + 'ms', sep: i === 0 ? '0' : '1px solid rgba(255,255,255,0.14)' }));
    const LOTS = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageLots/welcome';
    const GARAGE = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageGarage/welcome';
    const parkingRows = [
      { when: 'After noon', what: 'Free.', more: 'Any day, surface lots.', free: true },
      { when: 'Before 8:30 am', what: 'Free', more: 'if you leave before 8:30.', free: true },
      { when: '8:30 am – noon', what: 'Reserve:', more: 'free Nov 20 – Dec 4, then $29.', url: LOTS, cta: 'Book lot' },
      { when: 'Carpool of 4+', what: 'Free reservation, anytime.', more: 'Book ahead, then park in the First Time lot.', url: LOTS, cta: 'Book free' },
      { when: 'Garage', what: '$50 a day,', more: 'book up to 72 hrs ahead.', url: GARAGE, cta: 'Book garage' }
    ].map((r, i) => ({ ...r, url: r.url || '', free: !!r.free, bg: i === 0 ? 'rgba(242,179,94,0.22)' : 'rgba(255,255,255,0.06)', whenColor: i === 0 ? '#F2B35E' : '#FFFFFF' }));
    return { accent, logos, agendaTitle, agendaChips, agendaFeatured, agendaRows, agendaEmpty, agendaEmptyLabel, calOpen: !!calEv, calTitle: calEv ? calEv.title : '', calWhen: calEv ? calEv.dateLong + ' · ' + calEv.timeRange : '', calWhere: calEv ? calEv.where : '', calGoogle: calEv ? calEv.google : '#', calOutlook: calEv ? calEv.outlook : '#', closeCal: this.closeCal, downloadIcs: this.downloadIcs, navY: this.state.nav ? '0' : 'calc(-100% - 12px)', navPad: this.state.navSolid ? 'max(8px, env(safe-area-inset-top)) 16px 8px 20px' : '16px 24px 16px 24px', navBg: this.state.navSolid ? 'rgba(14,26,43,0.5)' : 'rgba(14,26,43,0)', navBlur: this.state.navSolid ? 'blur(20px) saturate(180%)' : 'blur(0px) saturate(100%)', navBorder: this.state.navSolid ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0)', navShadow: this.state.navSolid ? '0 6px 20px rgba(8,14,26,0.18)' : '0 0 0 rgba(8,14,26,0)', navOpacity: this.state.nav ? '1' : '0', navHidden: this.state.nav ? 'false' : 'true', navTab: this.state.nav ? '0' : '-1', counterN: String(cur + 1).padStart(2, '0'), counterTotal: total, food: foodS, parkingRows, parkingOpen: !!this.state.parking, openParking: this.openParking, closeParking: this.closeParking, menuItems, menuOpen: this.state.menu, menuExpanded: this.state.menu ? 'true' : 'false', openMenu: this.openMenu, closeMenu: this.closeMenu, places, slides, bars, setSlider: this.setSlider, onSlide: this.onSlide, onTap: this.onTap, onHoldStart: this.onHoldStart, onHoldMove: this.onHoldMove, onHoldEnd: this.onHoldEnd, onCtx: this.onCtx, paused: this.state.paused, prevSlide: this.prevSlide, nextSlide: this.nextSlide, agenda: events, directory, footer };
  }
}


class Desktop extends Component {
  componentDidMount() {
    this.onWinScroll = () => { const s = window.scrollY > 40; if (s !== this.state.navSolid) this.setState({ navSolid: s }); };
    window.addEventListener('scroll', this.onWinScroll, { passive: true });
    this.onKey = (e) => {
      if (e.key === 'Escape') this.setState({ parking: false, calEv: null, menu: false });
    };
    window.addEventListener('keydown', this.onKey);
    this.visible = true; this.setState({ inView: true }); this.startTimer();
    this.onWinScroll();
  }
  componentWillUnmount() { super.componentWillUnmount(); window.removeEventListener('keydown', this.onKey); }
  renderVals() {
    const v = super.renderVals();
    const i = this.state.i || 0;
    const cp = v.places[i] || v.places[0];
    const kinds = {}; v.places.forEach(p => { kinds[p.name] = p.kind; });
    const dLogos = v.logos.map(l => ({ ...l, kind: kinds[l.name] || '', weight: l.current === 'true' ? '600' : '400', rowBg: l.current === 'true' ? 'rgba(14,26,43,0.05)' : 'transparent' }));
    const dParkingRows = v.parkingRows.map((r, k) => ({ ...r, lightBg: k === 0 ? 'rgba(242,179,94,0.28)' : '#F4F1EA' }));
    const solid = !!this.state.navSolid;
    return { ...v, cp, dLogos, dParkingRows, slideCls: this.state.cycle % 2 ? 'd-slideA' : 'd-slideB',
      hoverIn: () => this.pause(), hoverOut: () => { if (this.state.paused) this.resume(); },
      dNavBg: solid ? 'rgba(14,26,43,0.82)' : 'rgba(14,26,43,0)', dNavBlur: solid ? 'blur(18px) saturate(170%)' : 'blur(0px)', dNavLine: solid ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0)' };
  }
}

preact.render(preact.h(Desktop, {"accent": "#C8402A"}), document.getElementById('app'));
})();
