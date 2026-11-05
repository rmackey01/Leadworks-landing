document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&amp;family=Instrument+Serif:ital@0;1&amp;family=Inter:wght@400;500;600;700&amp;display=swap\" rel=\"stylesheet\">\n<style>\nbody{margin:0;background:#120E0B}\na{color:#F2B35E}a:hover{color:#FFD28A}\n.ad-hero{background-image:linear-gradient(0deg,rgba(18,14,11,0.95) 0%,rgba(18,14,11,0.55) 38%,rgba(18,14,11,0.1) 65%,rgba(18,14,11,0.45) 100%),url(/thebaseatparkcitymountain/assets/e7562d68353e4d04.jpg);background-size:cover;background-position:42% 50%}\n.ad-band{background-image:linear-gradient(0deg,rgba(18,14,11,0.92),rgba(18,14,11,0.55)),url(/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg);background-size:cover;background-position:55% 50%}\n.ad-rail{display:flex;gap:8px;overflow-x:auto;padding:0 20px;scrollbar-width:none}\n.ad-rail::-webkit-scrollbar{display:none}\n.ad-rail > *{flex:none}\n.ad-marquee{display:flex;width:max-content;animation:adMarq 28s linear infinite}\n@keyframes adMarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n.ad-in{animation:adIn .5s cubic-bezier(.2,.8,.2,1) both}\n@keyframes adIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\n.ad-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:60;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}\n.ad-range{-webkit-appearance:none;appearance:none;width:100%;height:44px;background:transparent;margin:0}\n.ad-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#5C7FA6,#F2B35E 45%,#E4572E 70%,#1C2A4A)}\n.ad-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#5C7FA6,#F2B35E 45%,#E4572E 70%,#1C2A4A)}\n.ad-range::-webkit-slider-thumb{-webkit-appearance:none;width:30px;height:30px;margin-top:-12px;border-radius:50%;background:#F3E9DC;border:3px solid #120E0B;box-shadow:0 0 0 2px #F3E9DC,0 6px 16px rgba(0,0,0,.4)}\n.ad-range::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#F3E9DC;border:3px solid #120E0B}\n.ad-range:focus-visible{outline:2px solid #F2B35E;outline-offset:4px}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { accent, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, closeCal, closeMenu, closeParking, d, dayPart, dirItems, dirTabs, downloadIcs, hour, hourLabel, k, l, m, menuItems, menuOpen, moreLabel, navBg, navBlur, navLine, nextUp, o, onHour, openCount, openList, openMenu, openParking, parkingOpen, parkingRows, r, skyBottom, skyTop, sunColor, sunGlow, sunX, sunY, t, tickets, toggleMore } = v || {}; return html`<div style="width: 100%; max-width: 480px; margin: 0 auto; font-family: Inter, system-ui, sans-serif; color: #F3E9DC; background: #120E0B; overflow: hidden">

<div style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; max-width: 480px; margin: 0 auto">
<div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px; background: ${navBg}; -webkit-backdrop-filter: ${navBlur}; backdrop-filter: ${navBlur}; border-bottom: 1px solid ${navLine}; transition: background .35s ease, border-color .35s ease">
<a href="#top" style="color: #F3E9DC; text-decoration: none; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 22px; letter-spacing: 0.05em">PARK CITY VILLAGE</a>
<button type="button" onClick=${openMenu} aria-label="Open menu" style="display: inline-flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1px solid rgba(243,233,220,0.35); background: transparent; color: #F3E9DC; font: 600 13px Inter, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer">Menu<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><path d="M0 1h18M6 11h12" stroke="currentColor" stroke-width="1.8"></path></svg></button>
</div>
</div>

<section id="top" class="ad-hero" style="position: relative; height: 92vh; height: 92svh; min-height: 620px; max-height: 800px; box-sizing: border-box; padding: 0 20px 28px; display: flex; flex-direction: column; justify-content: flex-end">
<div style="font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 22px; color: #F2B35E">Where the mountain feels like home</div>
<h1 style="margin: 8px 0 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 104px; line-height: 0.84; letter-spacing: -0.01em; text-transform: uppercase">Park City<br />Village</h1>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px">
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" style="display: inline-flex; align-items: center; min-height: 50px; padding: 0 22px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-weight: 600; font-size: 15px; text-decoration: none">Find the Village</a>
<button type="button" onClick=${openParking} style="display: inline-flex; align-items: center; gap: 10px; min-height: 50px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(243,233,220,0.45); background: rgba(18,14,11,0.35); color: #F3E9DC; font: 600 15px Inter, sans-serif; cursor: pointer"><span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 6px; background: #F3E9DC; color: #120E0B; font-size: 13px; font-weight: 700">P</span>Free after noon</button>
</div>
<a href="#tickets" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(243,233,220,0.25); color: #F3E9DC; text-decoration: none">
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.12em; text-transform: uppercase; color: #F2B35E">Next up</span>
<span style="flex: 1; min-width: 0; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">${nextUp}</span>
<span aria-hidden="true">→</span>
</a>
</section>

<div aria-hidden="true" style="background: #F2B35E; color: #120E0B; overflow: hidden; padding: 10px 0">
<div class="ad-marquee" style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 22px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap">
<span style="padding-right: 28px">Skate the rink ✦ Après on the deck ✦ Breakfast at the base ✦ Fresh fudge ✦ Demo skis ✦ Live music ✦ Boot fitting ✦ Trivia night ✦</span>
<span style="padding-right: 28px">Skate the rink ✦ Après on the deck ✦ Breakfast at the base ✦ Fresh fudge ✦ Demo skis ✦ Live music ✦ Boot fitting ✦ Trivia night ✦</span>
</div>
</div>

<section id="open" style="padding: 56px 0 48px">
<div style="padding: 0 20px">
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.14em; text-transform: uppercase; color: ${accent}">Drag the clock</div>
<h2 style="margin: 6px 0 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 56px; line-height: 0.92; text-transform: uppercase">What's open at…</h2>
</div>
<div style="position: relative; margin: 22px 20px 0; height: 190px; border-radius: 22px; overflow: hidden; background: linear-gradient(180deg, ${skyTop} 0%, ${skyBottom} 100%); transition: background .4s ease">
<div aria-hidden="true" style="position: absolute; left: ${sunX}; top: ${sunY}; width: 44px; height: 44px; margin-left: -22px; border-radius: 50%; background: ${sunColor}; box-shadow: 0 0 40px 12px ${sunGlow}; transition: left .4s ease, top .4s ease, background .4s ease"></div>
<svg aria-hidden="true" viewBox="0 0 350 90" preserveAspectRatio="none" style="position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: 90px"><path d="M0 90 L0 52 L40 30 L78 48 L120 12 L160 42 L200 22 L250 50 L290 28 L350 46 L350 90 Z" fill="rgba(18,14,11,0.55)"></path><path d="M0 90 L0 70 L60 56 L110 68 L170 50 L230 66 L300 54 L350 64 L350 90 Z" fill="#120E0B"></path></svg>
<div style="position: absolute; left: 18px; bottom: 14px; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 58px; line-height: 1; color: #F3E9DC; text-shadow: 0 2px 16px rgba(0,0,0,0.35)">${hourLabel}</div>
<div style="position: absolute; right: 18px; bottom: 22px; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 20px; color: #F3E9DC">${dayPart}</div>
</div>
<div style="padding: 10px 20px 0">
<label for="ad-hour" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Time of day</label>
<input id="ad-hour" class="ad-range" type="range" min="7" max="22" step="0.5" value=${hour} onInput=${onHour} />
<div style="display: flex; justify-content: space-between; font-size: 12px; color: rgba(243,233,220,0.7)"><span>7 am</span><span>Noon</span><span>5 pm</span><span>10 pm</span></div>
</div>
<div style="padding: 18px 20px 0">
<div style="font-size: 14px; color: rgba(243,233,220,0.8)">${openCount}</div>
<div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px">
${(openList||[]).map((o) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: ${o.bg}; border: 1px solid ${o.line}; transition: background .3s ease, border-color .3s ease">
<span aria-hidden="true" style="width: 10px; height: 10px; border-radius: 50%; background: ${o.dot}; box-shadow: 0 0 10px ${o.dot}; flex: none"></span>
<div style="flex: 1; min-width: 0">
<div style="font-size: 16px; font-weight: 600; color: ${o.fg}">${o.name}</div>
<div style="font-size: 13px; color: ${o.sub}">${o.status}</div>
</div>
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${o.tagColor}">${o.tag}</span>
</div>
`)}
</div>
<p style="margin: 14px 0 0; font-size: 12px; line-height: 1.5; color: rgba(243,233,220,0.6)">Showing Village businesses that post their hours. More join as tenants share theirs.</p>
</div>
</section>

<section id="directory" style="background: #F3E9DC; color: #120E0B; padding: 56px 0 40px">
<div style="padding: 0 20px">
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.14em; text-transform: uppercase; color: #B8431F">The directory</div>
<h2 style="margin: 6px 0 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 56px; line-height: 0.92; text-transform: uppercase">Who's here</h2>
</div>
<div class="ad-rail" style="margin-top: 18px">
${(dirTabs||[]).map((t) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="min-height: 42px; padding: 0 16px; border-radius: 999px; border: 1.5px solid #120E0B; background: ${t.bg}; color: ${t.fg}; font: 600 14px Inter, sans-serif; cursor: pointer; white-space: nowrap">${t.label}</button>
`)}
</div>
<div style="padding: 14px 20px 0">
${(dirItems||[]).map((d) => html`
<div style="border-bottom: 1px solid rgba(18,14,11,0.18)">
<button type="button" onClick=${d.toggle} aria-expanded=${d.expanded} style="display: flex; align-items: baseline; gap: 14px; width: 100%; min-height: 60px; padding: 16px 0; border: 0; background: transparent; color: #120E0B; text-align: left; cursor: pointer">
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 18px; color: #B8431F; width: 26px; flex: none">${d.num}</span>
<span style="flex: 1; min-width: 0"><span style="display: block; font-family: 'Instrument Serif', Georgia, serif; font-size: 28px; line-height: 1.05">${d.name}</span><span style="display: block; margin-top: 4px; font: 500 13px Inter, sans-serif; color: #5A4E44">${d.kind}</span></span>
<span aria-hidden="true" style="font-size: 22px; transform: rotate(${d.rot}); transition: transform .3s ease">+</span>
</button>
${(d.expanded) ? html`
<div class="ad-in" style="padding: 0 0 20px 40px">
${(d.img) ? html`<img src=${d.img} alt="" style="width: 100%; height: 190px; object-fit: cover; border-radius: 14px; display: block; margin-bottom: 12px" />` : null}
<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #3B322B">${d.blurb}</p>
<div style="margin-top: 10px; font-size: 13px; color: #5A4E44">${d.where}<span style="display: block">${d.hours}</span></div>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px">
${(d.links||[]).map((l) => html`<a href=${l.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #120E0B; color: #F3E9DC; font-size: 13px; font-weight: 600; text-decoration: none">${l.label} ↗</a>`)}
</div>
</div>
` : null}
</div>
`)}
</div>
<p style="margin: 14px 20px 0; font-size: 12px; color: #5A4E44">Order shuffles every visit so every business gets its turn at the top.</p>
</section>

<section id="tickets" style="padding: 56px 20px 48px">
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.14em; text-transform: uppercase; color: ${accent}">On the calendar</div>
<h2 style="margin: 6px 0 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 56px; line-height: 0.92; text-transform: uppercase">Grab a ticket</h2>
<p style="margin: 10px 0 0; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 20px; color: rgba(243,233,220,0.85)">Every event at the base, from every business.</p>
<div style="margin-top: 22px; display: flex; flex-direction: column; gap: 14px">
${(tickets||[]).map((k) => html`
<article style="position: relative; display: flex; background: #F3E9DC; color: #120E0B; border-radius: 16px; overflow: hidden">
<div style="width: 78px; flex: none; padding: 14px 0; text-align: center; background: ${k.stub}; color: #FFFFFF">
<div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase">${k.wdShort}</div>
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 40px; line-height: 1">${k.dayNum}</div>
<div style="font-size: 12px; font-weight: 600; text-transform: uppercase">${k.monthShort}</div>
</div>
<span aria-hidden="true" style="position: absolute; left: 70px; top: -8px; width: 16px; height: 16px; border-radius: 50%; background: #120E0B"></span>
<span aria-hidden="true" style="position: absolute; left: 70px; bottom: -8px; width: 16px; height: 16px; border-radius: 50%; background: #120E0B"></span>
<div style="flex: 1; min-width: 0; padding: 12px 12px 12px 16px; border-left: 2px dashed rgba(18,14,11,0.25)">
<div style="display: flex; justify-content: space-between; gap: 8px; font-size: 12px; font-weight: 600; color: #8A3A1C"><span>${k.timeRange}</span><span style="text-transform: uppercase; letter-spacing: 0.08em">${k.cat}</span></div>
<h3 style="margin: 4px 0 0; font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: 22px; line-height: 1.1">${k.title}</h3>
<div style="margin-top: 3px; font-size: 13px; color: #5A4E44">${k.where}</div>
<button type="button" onClick=${k.add} style="margin-top: 8px; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1.5px solid #120E0B; background: transparent; color: #120E0B; font: 600 12px Inter, sans-serif; letter-spacing: 0.04em; cursor: pointer">+ Add to calendar</button>
</div>
</article>
`)}
</div>
<button type="button" onClick=${toggleMore} style="width: 100%; margin-top: 18px; min-height: 50px; border-radius: 999px; border: 1px solid rgba(243,233,220,0.4); background: transparent; color: #F3E9DC; font: 600 15px Inter, sans-serif; cursor: pointer">${moreLabel}</button>
</section>

<section id="parking" class="ad-band" style="padding: 56px 20px">
<div style="display: flex; align-items: center; gap: 18px">
<div aria-hidden="true" style="width: 132px; height: 132px; flex: none; border-radius: 50%; border: 3px double #F2B35E; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: rotate(-10deg); color: #F2B35E; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; text-transform: uppercase; line-height: 0.9; text-align: center"><span style="font-size: 30px">Free</span><span style="font-size: 16px; letter-spacing: 0.1em">after</span><span style="font-size: 30px">Noon</span></div>
<div>
<h2 style="margin: 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 34px; line-height: 0.95; text-transform: uppercase">Parking, minus the headache</h2>
<p style="margin: 8px 0 0; font-size: 14px; line-height: 1.5; color: rgba(243,233,220,0.85)">Surface lots are free with no reservation after 12 pm, every day. Mornings need a reservation.</p>
</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px">
<button type="button" onClick=${openParking} style="min-height: 48px; padding: 0 20px; border-radius: 999px; border: 0; background: #F3E9DC; color: #120E0B; font: 600 15px Inter, sans-serif; cursor: pointer">How parking works</button>
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" style="display: inline-flex; align-items: center; min-height: 48px; padding: 0 20px; border-radius: 999px; border: 1px solid rgba(243,233,220,0.5); color: #F3E9DC; font-size: 15px; font-weight: 600; text-decoration: none">Directions</a>
</div>
</section>

<footer style="padding: 44px 20px 48px; background: #0B0907">
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 44px; line-height: 0.9; text-transform: uppercase">Park City<br />Village</div>
<div style="margin-top: 10px; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 18px; color: #F2B35E">Where the mountain feels like home</div>
<p style="margin: 18px 0 0; font-size: 13px; line-height: 1.6; color: rgba(243,233,220,0.65)">1415 Lowell Ave, Park City, Utah · At the base of Park City Mountain</p>
<div style="display: flex; gap: 6px; margin-top: 10px">
<a href="#top" aria-label="Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #F3E9DC"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a>
<a href="#top" aria-label="Facebook" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #F3E9DC"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.8.4-1.5 1.6-1.5H17V2h-2.6C11.6 2 11 4 11 5.8V8H8.5v3H11v11h3V11h2.6l.4-3z"></path></svg></a>
</div>
<div style="margin-top: 18px; font-size: 12px; color: rgba(243,233,220,0.5)">© 2026 Park City Village</div>
</footer>

${(menuOpen) ? html`
<div class="ad-overlay" role="dialog" aria-modal="true" aria-label="Menu" style="background: #120E0B; color: #F3E9DC">
<div style="max-width: 480px; margin: 0 auto; min-height: 100%; box-sizing: border-box; padding: 10px 12px 32px 20px; display: flex; flex-direction: column">
<div style="display: flex; align-items: center; justify-content: space-between">
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 22px; letter-spacing: 0.05em">PARK CITY VILLAGE</span>
<button type="button" onClick=${closeMenu} style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1px solid rgba(243,233,220,0.35); background: transparent; color: #F3E9DC; font: 600 13px Inter, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer">Close ✕</button>
</div>
<nav aria-label="Menu" style="margin-top: 36px; display: flex; flex-direction: column">
${(menuItems||[]).map((m) => html`
<a href=${m.href} onClick=${closeMenu} class="ad-in" style="display: flex; align-items: baseline; gap: 14px; padding: 10px 0; border-bottom: 1px solid rgba(243,233,220,0.15); color: #F3E9DC; text-decoration: none; animation-delay: ${m.delay}">
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 16px; color: ${accent}; width: 26px">${m.num}</span>
<span style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 52px; line-height: 1; text-transform: uppercase">${m.label}</span>
</a>
`)}
</nav>
<div class="ad-in" style="margin-top: auto; padding-top: 28px; animation-delay: 380ms">
<div style="font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 22px; color: #F2B35E">Free parking after noon.</div>
<div style="margin-top: 6px; font-size: 13px; color: rgba(243,233,220,0.7)">1415 Lowell Ave · Park City, Utah</div>
</div>
</div>
</div>
` : null}

${(parkingOpen) ? html`
<div class="ad-overlay" role="dialog" aria-modal="true" aria-label="Parking" style="background: rgba(11,9,7,0.78); display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<button type="button" aria-label="Close parking info" onClick=${closeParking} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="ad-in" style="position: relative; width: 100%; max-width: 420px; max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px); overflow-y: auto; box-sizing: border-box; border-radius: 22px; padding: 22px 18px; background: #F3E9DC; color: #120E0B">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px">
<div><div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #B8431F">Mountain Village lots · 2026/27</div><h2 style="margin: 4px 0 0; font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 900; font-size: 34px; line-height: 0.95; text-transform: uppercase">Parking, made simple</h2></div>
<button type="button" onClick=${closeParking} aria-label="Close" style="width: 44px; height: 44px; flex: none; border-radius: 999px; border: 1.5px solid #120E0B; background: transparent; color: #120E0B; font-size: 16px; cursor: pointer">✕</button>
</div>
<div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px">
${(parkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 14px; background: ${r.bg}">
<div style="flex: 1; min-width: 0"><div style="font-size: 13px; font-weight: 700">${r.when}</div><div style="margin-top: 2px; font-size: 13px; line-height: 1.4; color: #3B322B">${r.text}</div></div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 40px; padding: 0 12px; border-radius: 999px; background: #120E0B; color: #F3E9DC; font-size: 12px; font-weight: 600; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
</div>
`)}
</div>
<div style="margin-top: 16px; font-size: 13px; line-height: 1.55; color: #3B322B"><b>More free ways in:</b> <a href="https://www.parkcity.gov/services/transit/routes_schedules/index.php" target="_blank" rel="noopener" style="color: #8A3A1C; font-weight: 600">Park City Transit ↗</a> and <a href="https://www.hvtutah.gov/" target="_blank" rel="noopener" style="color: #8A3A1C; font-weight: 600">High Valley Transit ↗</a> are free, with park-and-rides at <a href="https://www.google.com/maps/search/?api=1&query=Richardson+Flat+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="color: #8A3A1C; font-weight: 600">Richardson Flat ↗</a> and <a href="https://www.google.com/maps/search/?api=1&query=Ecker+Hill+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="color: #8A3A1C; font-weight: 600">Ecker Hill ↗</a>. Park City High School is free on weekends and holidays.</div>
<p style="margin: 12px 0 0; font-size: 12px; color: #5A4E44">Bookings open Nov 3. Arrive before noon and stay all day, no overnight. Cancel before 8 am for a refund. From Park at Park City Mountain's 2026/27 rules.</p>
</div>
</div>
` : null}

${(calOpen) ? html`
<div class="ad-overlay" role="dialog" aria-modal="true" aria-label="Add to calendar" style="background: rgba(11,9,7,0.78); display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="ad-in" style="position: relative; width: 100%; max-width: 380px; box-sizing: border-box; border-radius: 22px; padding: 22px 18px 18px; background: #F3E9DC; color: #120E0B">
<div style="font-family: 'Big Shoulders Display', Impact, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #B8431F">Add to calendar</div>
<h2 style="margin: 4px 0 0; font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: 28px; line-height: 1.1">${calTitle}</h2>
<div style="margin-top: 6px; font-size: 14px; line-height: 1.45; color: #3B322B">${calWhen}<br />${calWhere}</div>
<div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px">
<button type="button" onClick=${downloadIcs} style="min-height: 50px; border-radius: 14px; border: 0; background: #120E0B; color: #F3E9DC; font: 600 15px Inter, sans-serif; cursor: pointer">Apple Calendar</button>
<a href=${calGoogle} target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; min-height: 50px; border-radius: 14px; border: 1.5px solid #120E0B; color: #120E0B; font-size: 15px; font-weight: 600; text-decoration: none">Google Calendar ↗</a>
<a href=${calOutlook} target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; min-height: 50px; border-radius: 14px; border: 1.5px solid #120E0B; color: #120E0B; font-size: 15px; font-weight: 600; text-decoration: none">Outlook ↗</a>
<button type="button" onClick=${closeCal} style="min-height: 44px; border: 0; background: transparent; color: #5A4E44; font: 600 14px Inter, sans-serif; cursor: pointer">Cancel</button>
</div>
</div>
</div>
` : null}

</div>`; }
class DCLogic extends preact.Component { render() { return TPL(this.renderVals()); } }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    const h = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Denver', hour: 'numeric', hourCycle: 'h23' }).format(new Date()));
    this.state = { hour: Math.min(22, Math.max(7, h)), tab: 'eat', openId: null, more: false, menu: false, parking: false, calEv: null, solid: false };
    this.onHour = (e) => this.setState({ hour: Number(e.target.value) });
    this.openMenu = () => this.setState({ menu: true });
    this.closeMenu = () => this.setState({ menu: false });
    this.openParking = () => this.setState({ parking: true, menu: false });
    this.closeParking = () => this.setState({ parking: false });
    this.closeCal = () => this.setState({ calEv: null });
    this.toggleMore = () => this.setState({ more: !this.state.more });
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
  componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); this.lock(false); }
  componentDidUpdate() { this.lock(!!(this.state.menu || this.state.parking || this.state.calEv)); }
  lock(on) {
    if (this.locked === on) return; this.locked = on;
    const b = document.body, h = document.documentElement;
    if (on) { this.y = window.scrollY; h.style.overflow = 'hidden'; b.style.overflow = 'hidden'; b.style.position = 'fixed'; b.style.top = -this.y + 'px'; b.style.left = '0'; b.style.right = '0'; }
    else { h.style.overflow = ''; b.style.overflow = ''; b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; window.scrollTo(0, this.y || 0); }
  }
  renderVals() {
    const accent = this.props.accent ?? '#E4572E';
    const B = '/thebaseatparkcitymountain/assets/';
    // ---- Tenants (shared content from the main concept) ----
    const TENANTS = [
      { id: 'pigpen', group: 'eat', name: 'Pig Pen Saloon', kind: 'Saloon · burgers & après', blurb: 'The local spot for everyone. Family owned since 1999 and home of the Shot & Shirt.', where: 'Rink level · Resort Center', hours: [11, 18], hoursLabel: 'Daily 11–6 · 21+', img: B + '554eb72bcdb0490f.jpg', links: [{ label: 'Menus', url: 'https://www.pigpensaloon.com/menus' }, { label: 'Instagram', url: 'https://www.instagram.com/pigpensaloon/' }] },
      { id: 'bluebird', group: 'eat', name: 'Bluebird Après Cafe', kind: 'Café · lunch & après', blurb: 'Slopeside deck, fire pits and live après sets on weekends. Kids’ meals come with fruit and organic juice.', where: 'Second level, with deck · Village Ventures', hours: [11, null], hoursLabel: 'Daily from 11 am', img: B + 'd59bc581659f4cd4.jpg', links: [{ label: 'Menu', url: 'https://www.bluebirdpc.com/menu' }, { label: 'Instagram', url: 'https://www.instagram.com/bluebird.parkcity/' }] },
      { id: 'harvest', group: 'eat', name: 'Harvest at the Base', kind: 'Café · breakfast & lunch', blurb: 'All-day breakfast, local coffee, healthy bowls and fresh pastries. Dine in or take out.', where: 'Up the steps from Cole Sport · Village Ventures', hours: [7.5, 15], hoursLabel: 'Daily 7:30 am–3 pm (winter)', img: B + 'a94074167a72111b.jpg', links: [{ label: 'Menu', url: 'https://www.harvestparkcity.com/harvest-at-base#BaseMenu' }, { label: 'Order ahead', url: 'https://harvestparkcity.square.site/s/order' }, { label: 'Facebook', url: 'https://www.facebook.com/harvestpc/' }] },
      { id: 'rmcf', group: 'eat', name: 'Rocky Mountain Chocolate Factory', kind: 'Chocolate & treats', blurb: 'Watch them make fudge, then pick from dozens of caramel apples. A sweet stop for the whole family.', where: 'Second level, facing Lowell Ave · Village Ventures', hours: null, hoursLabel: 'Hours: [HOURS]', img: B + '92b6d944f3a847e1.jpg', links: [{ label: 'Shop online', url: 'https://www.rmcf.com/' }] },
      { id: 'fft', group: 'eat', name: 'Food For Thought', kind: 'Market', blurb: 'A small market for snacks and everyday basics at the base.', where: 'Rink level · Resort Center', hours: [8, 20], hoursLabel: 'Daily 8 am–8 pm', img: '', links: [] },
      { id: 'jbc', group: 'gear', name: "Jackson's Base Camp", kind: 'Demos, rentals & tuning', blurb: 'Locally owned on-mountain ski shop: demos, custom boot fitting, tuning and lockers.', where: 'Rink level, next to Pig Pen · Resort Center', hours: [8, 18], hoursLabel: 'Daily 8 am–6 pm', img: B + 'b9852ef17e4b2672.jpg', links: [{ label: 'Website', url: 'https://jacksonsbasecamp.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/jacksonsbasecamp/' }] },
      { id: 'cole', group: 'gear', name: 'Cole Sport', kind: 'Rentals, apparel & repair', blurb: 'Family owned since 1982. Rentals, ski fashion, boot fitting and a full repair shop.', where: 'Village Ventures · 1385 Lowell Ave', hours: null, hoursLabel: 'Hours: [HOURS]', img: B + '9c02e1080b7531b8.jpg', links: [{ label: 'Reserve rentals', url: 'https://www.colesport.com/park-city-ski-snowboard-rentals/' }, { label: 'Instagram', url: 'https://instagram.com/colesport/' }] },
      { id: 'aloha', group: 'gear', name: 'Aloha Ski & Snowboard', kind: 'Ski & board rentals', blurb: 'Locally owned rentals with unlimited exchanges and free overnight storage.', where: 'Second level & the Loft', hours: null, hoursLabel: 'Hours: [HOURS]', img: B + 'ee743ee8a8d189b8.jpg', links: [{ label: 'Reserve', url: 'https://www.parkcityskirentals.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/alohaskirentals/' }] },
      { id: 'bootworks', group: 'gear', name: 'Bootworks', kind: 'Boot fitting & insoles', blurb: "Park City's ski boot specialists for 40 years. Custom fitting, insoles and alterations in-house.", where: 'The Loft', hours: null, hoursLabel: 'Hours: [HOURS]', img: B + 'd52c119782b14df5.jpg', links: [{ label: 'Book a fitting', url: 'https://www.bootworks.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/bootworks_parkcity/' }] },
      { id: 'breeze', group: 'gear', name: 'Breeze Ski Rentals', kind: 'Rentals', blurb: 'Rentals at the ice rink level, with pickup and return at any of their locations.', where: 'Rink level · Resort Center', hours: null, hoursLabel: '', img: '', links: [{ label: 'Listing', url: 'https://www.skiutah.com/members/breeze-ski-rentals' }] },
      { id: 'hideaway', group: 'more', name: "Jackson's Hideaway", kind: 'Ski club', blurb: 'A ski club with unlimited rentals and demos, tuning, coffee, and pool and hot tub access.', where: 'Rink level · Resort Center', hours: null, hoursLabel: '', img: B + '100899fb409ca358.jpg', links: [{ label: 'Membership', url: 'https://jacksonshideaway.com/' }] },
      { id: 'asrl', group: 'more', name: "All Season's Resort Lodging", kind: 'Places to stay', blurb: 'Vacation rentals right at the base, including the Lodge at Mountain Village.', where: 'Rink level · Resort Center', hours: null, hoursLabel: '', img: B + 'd5a44ce8e5fedc98.jpg', links: [{ label: 'Book a stay', url: 'https://www.allseasonsresortlodging.com/' }, { label: 'Instagram', url: 'https://www.instagram.com/asr_lodging/' }] },
      { id: 'lockers', group: 'more', name: 'Jackson Lockers', kind: 'Seasonal lockers', blurb: 'Seasonal ski lockers and valet at the base.', where: 'Resort Center', hours: null, hoursLabel: '', img: '', links: [{ label: 'Lockers', url: 'https://jacksonsbasecamp.com/lockers-valet-seasonal/' }] },
      { id: 'marriott', group: 'more', name: "Marriott's MountainSide", kind: 'Places to stay', blurb: 'Slopeside resort at the base of Park City Mountain.', where: 'Rink level · Village Ventures', hours: null, hoursLabel: '', img: '', links: [] },
      { id: 'others', group: 'more', name: 'Also in the Village', kind: 'Services & offices', blurb: 'Cole Sport Tuning, Bahnhof Sports, Alpine Ski Services, Ski Vault, The Lockers at the Lodge, Wildings, Engel & Völkers, Berkshire Hathaway HomeServices, Compass Management and Park City Sport.', where: 'Resort Center, Village Ventures and the Loft', hours: null, hoursLabel: '', img: '', links: [] }
    ];
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
    const nowMs = Date.now();
    const upcoming = EVENTS.map(decorate).filter(e => e.endMs > nowMs);
    const STUB = { 'Skating': '#2E5E8C', 'Food & drink': '#B8431F', 'Music': '#6B3FA0', 'Family': '#2F6B4A', 'Shopping': '#8A5A1C', 'Gear': '#3B322B' };
    const tickets = upcoming.slice(0, this.state.more ? 16 : 5).map(e => ({ ...e, stub: STUB[e.cat] || '#3B322B' }));
    const calEv = upcoming.find(x => x.id === this.state.calEv) || null;
    this.curIcs = calEv ? calEv.ics : ''; this.curName = calEv ? calEv.id : '';
    const nextUp = upcoming[0] ? `${upcoming[0].title} · ${upcoming[0].wdShort} ${upcoming[0].monthShort} ${Number(upcoming[0].dayNum)}, ${upcoming[0].timeRange.split(' – ')[0]}` : 'See the calendar';

    // ---- What's open at… (hour scrubber) ----
    const hr = this.state.hour;
    const fmtH = (v) => { const hh = Math.floor(v), mm = v % 1 ? 30 : 0, h12 = hh % 12 || 12; return `${h12}${mm ? ':30' : ''} ${hh < 12 ? 'am' : 'pm'}`; };
    const hourLabel = fmtH(hr).toUpperCase();
    const dayPart = hr < 10 ? 'first coffee' : hr < 12 ? 'gearing up' : hr < 15 ? 'lunch at the base' : hr < 17.5 ? 'après hour' : hr < 20 ? 'lights on' : 'nightcap';
    const mix = (a, b, t) => { const pa = a.match(/\w\w/g).map(x => parseInt(x, 16)), pb = b.match(/\w\w/g).map(x => parseInt(x, 16)); return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
    const STOPS = [[7, '5C7FA6', 'F6B38E'], [11, '6FA8DC', 'DCEAF5'], [15, '7DA7CF', 'F2D3A0'], [17, 'C8603A', 'F2B35E'], [18.5, '2B3A67', 'E4572E'], [20, '1C2A4A', '6B3FA0'], [22, '0B1220', '1C2A4A']];
    let k = 0; while (k < STOPS.length - 2 && hr > STOPS[k + 1][0]) k++;
    const [h0, t0, b0] = STOPS[k], [h1, t1, b1] = STOPS[k + 1];
    const tt = Math.min(1, Math.max(0, (hr - h0) / (h1 - h0)));
    const skyTop = mix(t0, t1, tt), skyBottom = mix(b0, b1, tt);
    const prog = (hr - 7) / 15;
    const isNight = hr >= 19;
    const sunX = (8 + prog * 84).toFixed(1) + '%';
    const sunY = Math.round(110 - Math.sin(Math.PI * Math.min(1, prog * 1.15)) * 80) + 'px';
    const sunColor = isNight ? '#F3E9DC' : hr >= 17 ? '#F2B35E' : '#FFE8B0';
    const sunGlow = isNight ? 'rgba(243,233,220,0.35)' : 'rgba(255,214,140,0.55)';
    const withHours = TENANTS.filter(t => t.hours);
    const openList = withHours.map(t => {
      const [o, c] = t.hours; let state, status;
      if (hr < o) { state = 'soon'; status = `Opens at ${fmtH(o)}`; }
      else if (c === null) { state = 'open'; status = `Open from ${fmtH(o)} · closing time not listed`; }
      else if (hr < c) { state = 'open'; status = `Open now · until ${fmtH(c)}${t.id === 'pigpen' ? ' · 21+' : ''}`; }
      else { state = 'closed'; status = `Closed · opens ${fmtH(o)} tomorrow`; }
      const on = state === 'open';
      return { name: t.name, status, order: on ? 0 : state === 'soon' ? 1 : 2, tag: on ? 'Open' : state === 'soon' ? 'Soon' : 'Closed', dot: on ? '#7BD88F' : state === 'soon' ? '#F2B35E' : 'rgba(243,233,220,0.3)', bg: on ? 'rgba(243,233,220,0.1)' : 'transparent', line: on ? 'rgba(243,233,220,0.25)' : 'rgba(243,233,220,0.1)', fg: on ? '#F3E9DC' : 'rgba(243,233,220,0.75)', sub: on ? 'rgba(243,233,220,0.85)' : 'rgba(243,233,220,0.6)', tagColor: on ? '#7BD88F' : state === 'soon' ? '#F2B35E' : 'rgba(243,233,220,0.55)' };
    }).sort((a, b) => a.order - b.order);
    const nOpen = openList.filter(o => o.order === 0).length;
    const openCount = `${nOpen} of ${openList.length} open at ${fmtH(hr)}`;

    // ---- Directory (fair shuffle per visit) ----
    if (!this.perm) { this.perm = TENANTS.map((_, i) => i); for (let i = this.perm.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = this.perm[i]; this.perm[i] = this.perm[j]; this.perm[j] = x; } }
    const TABS = [['eat', 'Eat & drink'], ['gear', 'Gear & rentals'], ['more', 'Stay & more']];
    const dirTabs = TABS.map(([key, label]) => ({ label, pressed: this.state.tab === key ? 'true' : 'false', bg: this.state.tab === key ? '#120E0B' : 'transparent', fg: this.state.tab === key ? '#F3E9DC' : '#120E0B', pick: () => this.setState({ tab: key, openId: null }) }));
    const dirItems = this.perm.map(i => TENANTS[i]).filter(t => t.group === this.state.tab).sort((a, b) => (a.id === 'others') - (b.id === 'others')).map((t, i) => { const open = this.state.openId === t.id; return { ...t, num: pad(i + 1), hours: t.hoursLabel, expanded: open, rot: open ? '45deg' : '0deg', toggle: () => this.setState({ openId: open ? null : t.id }) }; });

    // ---- Parking (Park at Park City Mountain 2026/27) ----
    const LOTS = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageLots/welcome';
    const GARAGE = 'https://reserve.inflowparking.com/qr/ParkatParkCityMountainVillageGarage/welcome';
    const parkingRows = [
      { when: 'After noon', text: 'Free. No reservation, any day. Surface lots.', url: '', bg: 'rgba(242,179,94,0.35)' },
      { when: 'Before 8:30 am', text: 'Free if you leave before 8:30.', url: '', bg: 'rgba(18,14,11,0.06)' },
      { when: '8:30 am – noon', text: 'Reservation required: free Nov 20 – Dec 4, then $29.', url: LOTS, cta: 'Book lot', bg: 'rgba(18,14,11,0.06)' },
      { when: 'Carpool of 4+', text: 'Free reservation, anytime. Book ahead, then park in the First Time lot.', url: LOTS, cta: 'Book free', bg: 'rgba(18,14,11,0.06)' },
      { when: 'Garage', text: '$50 a day, bookable up to 72 hours ahead.', url: GARAGE, cta: 'Book garage', bg: 'rgba(18,14,11,0.06)' }
    ];
    const menuItems = [['What’s open', '#open'], ['Directory', '#directory'], ['Calendar', '#tickets'], ['Parking', '#parking']].map(([label, href], i) => ({ label, href, num: pad(i + 1), delay: (80 + i * 60) + 'ms' }));
    const solid = this.state.solid;
    return {
      accent, nextUp, hour: hr, hourLabel, dayPart, onHour: this.onHour, skyTop, skyBottom, sunX, sunY, sunColor, sunGlow, openList, openCount,
      dirTabs, dirItems, tickets, toggleMore: this.toggleMore, moreLabel: this.state.more ? 'Show fewer' : 'Show more events',
      parkingRows, menuItems, menuOpen: this.state.menu, openMenu: this.openMenu, closeMenu: this.closeMenu, parkingOpen: this.state.parking, openParking: this.openParking, closeParking: this.closeParking,
      calOpen: !!calEv, calTitle: calEv ? calEv.title : '', calWhen: calEv ? calEv.dateLong + ' · ' + calEv.timeRange : '', calWhere: calEv ? calEv.where : '', calGoogle: calEv ? calEv.google : '#', calOutlook: calEv ? calEv.outlook : '#', closeCal: this.closeCal, downloadIcs: this.downloadIcs,
      navBg: solid ? 'rgba(18,14,11,0.82)' : 'rgba(18,14,11,0)', navBlur: solid ? 'blur(16px)' : 'blur(0px)', navLine: solid ? 'rgba(243,233,220,0.12)' : 'rgba(243,233,220,0)'
    };
  }
}

preact.render(preact.h(Component, {"accent": "#E4572E"}), document.getElementById('app'));
})();
