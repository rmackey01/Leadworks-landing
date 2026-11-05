document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap\" rel=\"stylesheet\">\n<style>\nbody{margin:0;background:#FFFFFF}\n.m-hero{text-shadow:0 1px 16px rgba(8,14,26,0.55);background-image:linear-gradient(0deg,rgba(8,14,26,0.7) 0%,rgba(8,14,26,0.35) 45%,rgba(8,14,26,0) 70%),linear-gradient(180deg,rgba(8,14,26,0.35) 0%,rgba(8,14,26,0) 35%),linear-gradient(rgba(8,14,26,0.38),rgba(8,14,26,0.38)),url(/parkcityvillage/assets/bbe0964fe01a8527.jpg);background-size:cover;background-position:50% 50%}\n.m-band{background-image:linear-gradient(180deg,rgba(14,26,43,0.82) 0%,rgba(14,26,43,0.35) 60%,rgba(14,26,43,0.7) 100%),url(/parkcityvillage/assets/ca4d387494b9b28f.jpg);background-size:cover;background-position:55% 50%}\n.m-glass{background:rgba(255,255,255,0.22);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.m-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 24px !important;scroll-padding-inline:24px;scrollbar-width:none;-webkit-overflow-scrolling:touch;box-sizing:border-box;width:100%}\n.m-rail::after{content:'';flex:0 0 12px}\n.m-rail::-webkit-scrollbar{display:none}\n.m-rail > *{scroll-snap-align:start;flex:none}\n.m-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n.m-slider::-webkit-scrollbar{display:none}\n.m-slide{flex:0 0 100%;scroll-snap-align:start;height:85vh;height:85svh;max-height:760px;min-height:560px;box-sizing:border-box;padding:24px 24px 100px;display:flex;flex-direction:column;color:#FFFFFF;background-size:cover;background-position:50% 50%}\n@keyframes mFillA{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes mFillB{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n.m-fillA{animation:mFillA 5s linear forwards}\n.m-fillB{animation:mFillB 5s linear forwards}\n@keyframes mPopA{0%{transform:scale(0.9)}55%{transform:scale(1.16)}100%{transform:scale(1.06)}}\n@keyframes mPopB{0%{transform:scale(0.9)}55%{transform:scale(1.16)}100%{transform:scale(1.06)}}\n@keyframes mRingA{from{stroke-dashoffset:125.7}to{stroke-dashoffset:0}}\n@keyframes mRingB{from{stroke-dashoffset:125.7}to{stroke-dashoffset:0}}\n.m-ringA{animation:mRingA 5s linear forwards}\n.m-ringB{animation:mRingB 5s linear forwards}\n.m-popA{animation:mPopA 0.45s cubic-bezier(.2,.8,.2,1) both}\n.m-popB{animation:mPopB 0.45s cubic-bezier(.2,.8,.2,1) both}\n.m-sr{position:absolute;top:72px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.m-sr:focus-visible{width:auto;height:44px;padding:0 16px;margin:0;clip:auto;overflow:visible;border-radius:999px;background:#FFFFFF;color:#0E1A2B;font:600 14px Inter,sans-serif;z-index:5}\n.m-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:60;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;touch-action:pan-y;color:#FFFFFF;background:rgba(9,16,30,0.42);-webkit-backdrop-filter:blur(28px) saturate(170%);backdrop-filter:blur(28px) saturate(170%);animation:mMenuIn .45s cubic-bezier(.2,.8,.2,1) both}\n.m-menu-glow{position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;background-size:130% 130%;pointer-events:none;background:radial-gradient(38% 28% at 12% 8%,rgba(242,179,94,0.38),rgba(242,179,94,0) 70%),radial-gradient(44% 34% at 92% 42%,rgba(156,195,213,0.36),rgba(156,195,213,0) 70%),radial-gradient(48% 38% at 28% 96%,rgba(200,64,42,0.32),rgba(200,64,42,0) 70%);animation:mGlow 14s ease-in-out infinite alternate}\n.m-lg{position:relative;background:linear-gradient(140deg,rgba(255,255,255,0.24) 0%,rgba(255,255,255,0.08) 45%,rgba(255,255,255,0.14) 100%);-webkit-backdrop-filter:blur(20px) saturate(190%);backdrop-filter:blur(20px) saturate(190%);border:1px solid rgba(255,255,255,0.3);box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 -1px 1px rgba(255,255,255,0.12),inset 0 0 24px rgba(255,255,255,0.06),0 24px 48px rgba(0,0,0,0.28);overflow:hidden}\n.m-lg::after{content:'';position:absolute;left:0;right:0;top:0;height:46%;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0));pointer-events:none}\n.m-in{animation:mItemIn .55s cubic-bezier(.2,.8,.2,1) both}\n.m-row:active{background:rgba(255,255,255,0.1)}\n@keyframes mMenuIn{from{opacity:0}to{opacity:1}}\n@keyframes mItemIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}\n@keyframes mGlow{from{background-position:0% 0%}to{background-position:100% 60%}}\n.m-acc summary{list-style:none;cursor:pointer}\n.m-acc summary::-webkit-details-marker{display:none}\n.m-acc[open] .m-chev{transform:rotate(180deg)}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { accent, agendaChips, agendaEmpty, agendaEmptyLabel, agendaFeatured, agendaRows, c, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, closeCal, closeMenu, closeParking, counterN, counterTotal, directory, downloadIcs, f, food, footer, g, k, l, logos, m, menuExpanded, menuItems, menuOpen, navBg, navBlur, navBorder, navHidden, navOpacity, navPad, navShadow, navTab, navY, nextSlide, onCtx, onHoldEnd, onHoldMove, onHoldStart, onSlide, onTap, openMenu, openParking, parkingOpen, parkingRows, paused, pl, prevSlide, r, setSlider, slides, t } = v || {}; return html`<div style="width: 100%; max-width: 480px; margin: 0 auto; font-family: Inter, system-ui, sans-serif; color: #0E1A2B; background: #FFFFFF; overflow: hidden">

<section class="m-hero" style="position: relative; height: 80vh; height: 80svh; min-height: 600px; max-height: 760px; box-sizing: border-box; padding: 16px 24px 0; color: #FFFFFF; display: flex; flex-direction: column">
<header aria-hidden="true" style="display: flex; align-items: center; justify-content: space-between; visibility: hidden">
<a href="#top" style="display: flex; align-items: center; gap: 10px; color: #FFFFFF; text-decoration: none">
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.6"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 21px; letter-spacing: 0.05em; line-height: 1">PARK CITY<br />VILLAGE</span>
</a>
<div style="display: flex; gap: 10px">
<a href="#visit" aria-label="Find us" class="m-glass" style="display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 12px; color: #FFFFFF">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"></path><circle cx="12" cy="9.5" r="2.5"></circle></svg>
</a>
<button type="button" aria-label="Open menu" aria-expanded=${menuExpanded} onClick=${openMenu} class="m-glass" style="display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 12px; border: 0; color: #FFFFFF">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8h16M4 12h16M4 16h16"></path></svg>
</button>
</div>
</header>

<div style="text-align: center; margin-top: auto; margin-bottom: auto; padding-bottom: 24px">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 46px; letter-spacing: 0.06em; line-height: 1">PARK CITY VILLAGE</div>
<h1 style="margin: 14px 0 0; font-size: 13px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase">Where the mountain feels like home</h1>
</div>

<div style="margin-top: auto">
<div style="display: flex; gap: 6px">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; background: ${accent}" aria-hidden="true">
<svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M12 22s-7-6.4-7-12a7 7 0 0 1 14 0c0 5.6-7 12-7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></svg>
</span>
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 17px; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none">Find the Village</a>
</div>
</div>
<div style="align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; margin-top: 12px; margin-bottom: 124px; padding: 4px 6px 4px 8px; border-radius: 16px; color: #FFFFFF; max-width: 100%; box-sizing: border-box; background: linear-gradient(140deg, rgba(255,255,255,0.28), rgba(255,255,255,0.1)); -webkit-backdrop-filter: blur(14px) saturate(170%); backdrop-filter: blur(14px) saturate(170%); border: 1px solid rgba(255,255,255,0.4); box-shadow: inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 24px rgba(8,14,26,0.25); text-shadow: 0 1px 6px rgba(8,14,26,0.5)">
<span aria-hidden="true" style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 7px; background: #FFFFFF; color: #1F5C8A; font-weight: 700; font-size: 15px; flex: none">P</span>
<span style="font-size: 14px; font-weight: 500; line-height: 1.3">Free parking after noon<span style="display: block; font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.85)">No reservation needed</span></span>
<button type="button" onClick=${openParking} style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 10px; margin-left: 4px; border: 0; border-left: 1px solid rgba(255,255,255,0.3); background: transparent; color: #FFFFFF; font: 600 12px Inter, sans-serif; text-decoration: underline; text-underline-offset: 3px; white-space: nowrap; cursor: pointer">Other times</button>
</div>

<a href="#rink" style="position: absolute; left: 24px; right: 24px; bottom: -96px; box-sizing: border-box; display: flex; gap: 14px; align-items: center; padding: 12px; background: #FFFFFF; border-radius: 18px; box-shadow: 0 12px 32px rgba(8,14,26,0.18); color: #0E1A2B; text-decoration: none">
<img src="/parkcityvillage/assets/6aaea81152c3aff7.jpg" alt="Holiday tree over the rink at night" style="width: 104px; height: 128px; object-fit: cover; border-radius: 12px; flex: none" />
<span style="display: flex; flex-direction: column; gap: 6px; min-width: 0">
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${accent}">Opening day</span>
<span style="font-size: 20px; font-weight: 500; line-height: 1.2">The ice rink reopens November 19</span>
<span style="display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: ${accent}">
<span style="display: inline-flex; width: 18px; height: 18px; border-radius: 999px; background: ${accent}; align-items: center; justify-content: center" aria-hidden="true"><svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5h6M5.5 2.5L8 5 5.5 7.5" stroke="#FFFFFF" stroke-width="1.5" fill="none"></path></svg></span>Skate info</span>
</span>
</a>
</section>

<section id="todo" style="padding: 136px 0 0">
<div style="padding: 0 24px 32px">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${accent}">Who's in the Village</div>
<h2 style="margin: 10px 0 0; font-weight: 400; font-size: 32px; line-height: 1.15; letter-spacing: -0.01em">Meet you at the Village</h2>
<p style="margin: 14px 0 0; font-size: 17px; line-height: 1.55; color: #5B6472">Coffee on a Saturday, cocoa after school, a skate on a weeknight. Locally run shops and restaurants at the base of the mountain.</p>
</div>
<div style="position: relative">
<div class="m-slider" aria-label="Places in the Village" ref=${setSlider} onScroll=${onSlide} onClick=${onTap} onPointerDown=${onHoldStart} onPointerMove=${onHoldMove} onPointerUp=${onHoldEnd} onPointerCancel=${onHoldEnd} onPointerLeave=${onHoldEnd} onContextMenu=${onCtx} style="cursor: pointer; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent">
${(slides||[]).map((pl) => html`
<article class="m-slide" style="background-image: linear-gradient(0deg, rgba(${pl.rgb},${pl.a0}) 0%, rgba(${pl.rgb},${pl.a1}) 50%, rgba(${pl.rgb},${pl.a2}) 100%), url(${pl.img}); background-position: ${pl.pos}">
<div aria-hidden="true" style="height: 34px"></div>
<div style="margin-top: auto">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">${pl.kind}</div>
<h3 style="margin: 8px 0 0; font-weight: 400; font-size: 44px; line-height: 1.04; letter-spacing: -0.02em">${pl.name}</h3>
<p style="margin: 12px 0 0; font-size: 16px; line-height: 1.5; color: #E6EAF0">${pl.blurb}</p>
<div class="m-glass" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; padding: 10px 14px; border-radius: 10px; font-size: 14px">
<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s-7-6.4-7-12a7 7 0 0 1 14 0c0 5.6-7 12-7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></svg>${pl.where}</div>
${(pl.url) ? html`<div style="margin-top: 10px"><a href=${pl.url} style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 999px; background: #FFFFFF; color: #0E1A2B; font-size: 14px; font-weight: 600; text-decoration: none">${pl.cta}<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5h6M5.5 2.5L8 5 5.5 7.5" stroke="#0E1A2B" stroke-width="1.5" fill="none"></path></svg></a></div>` : null}
</div>
</article>
`)}
</div>
<span class="m-glass" aria-live="polite" style="position: absolute; top: 24px; left: 24px; padding: 8px 12px; border-radius: 999px; color: #FFFFFF; font-size: 13px; font-weight: 500; font-variant-numeric: tabular-nums; pointer-events: none">${counterN} / ${counterTotal}</span>
<div aria-hidden="true" style="position: absolute; top: 33px; right: 24px; display: flex; gap: 12px; font-size: 12px; color: #FFFFFF; opacity: 0.9; pointer-events: none">
<span style="display: inline-flex; align-items: center; gap: 5px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 9v6M14 9v6"></path></svg>Hold</span>
<span style="display: inline-flex; align-items: center; gap: 5px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3" fill="currentColor"></circle><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"></path></svg>Tap</span>
<span style="display: inline-flex; align-items: center; gap: 5px"><svg width="16" height="14" viewBox="0 0 28 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h22M8 7l-5 5 5 5M20 7l5 5-5 5"></path></svg>Swipe</span>
</div>
${(paused) ? html`<div aria-live="polite" class="m-glass" style="position: absolute; right: 24px; bottom: 76px; display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 999px; color: #FFFFFF; pointer-events: none"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1"></rect><rect x="14" y="4" width="5" height="16" rx="1"></rect></svg><span class="m-sr" style="top: 0">Paused</span></div>` : null}
<button type="button" class="m-sr" onClick=${prevSlide} style="left: 24px">Previous place</button>
<button type="button" class="m-sr" onClick=${nextSlide} style="right: 24px">Next place</button>
<div role="group" aria-label="Places in the slider" style="position: absolute; left: 12px; right: 12px; bottom: 20px; display: flex; justify-content: space-between; pointer-events: none">
${(logos||[]).map((l) => html`
<button type="button" aria-label="Show ${l.name}" aria-current=${l.current} onClick=${l.pick} class=${l.pop} style="position: relative; width: 44px; height: 44px; padding: 0; border: 0; background: transparent; cursor: pointer; pointer-events: auto; flex: none; transform: scale(${l.scale}); opacity: ${l.op}; transition: transform 0.35s cubic-bezier(.2,.8,.2,1), opacity 0.35s ease">
<svg viewBox="0 0 44 44" aria-hidden="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: rotate(-90deg); overflow: visible"><circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2.2"></circle><circle class=${l.ring} cx="22" cy="22" r="20" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="125.7" stroke-dashoffset=${l.offset} style="animation-play-state: ${l.play}"></circle></svg>
<span style="position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px; border-radius: 999px; background: ${l.bg}; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 2px 8px rgba(8,14,26,0.3)"><img src=${l.src} alt="" style="width: 82%; height: 82%; object-fit: contain; display: block; pointer-events: none; filter: ${l.filter}" /></span>
</button>
`)}
</div>
</div>
</section>

<section id="eat" style="background: #F4F1EA; padding: 56px 0">
<div style="padding: 0 24px">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: ${accent}">Eat & drink</div>
<h2 style="margin: 10px 0 0; font-weight: 400; font-size: 32px; line-height: 1.15; letter-spacing: -0.01em">Where locals eat at the base</h2>
<p style="margin: 14px 0 0; font-size: 17px; line-height: 1.55; color: #5B6472">Breakfast before the first chair, a burger after the last one, and coffee any time.</p>
</div>
<div class="m-rail" style="margin-top: 28px; padding-bottom: 8px">
${(food||[]).map((f) => html`
<article style="width: 300px; background: #FFFFFF; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(14,26,43,0.08); display: flex; flex-direction: column">
<div style="position: relative">
<img src=${f.img} alt=${f.alt} style="width: 100%; height: 220px; object-fit: cover; object-position: ${f.pos}; display: block" />
<div style="position: absolute; left: 12px; bottom: 12px; background: #FFFFFF; border-radius: 12px; padding: 8px 12px; display: flex; align-items: center; box-shadow: 0 4px 14px rgba(0,0,0,0.15)"><img src=${f.logo} alt="${f.name} logo" style="height: ${f.logoH}; width: auto; display: block" /></div>
</div>
<div style="padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 14px; flex: 1">
<div>
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${accent}">${f.kind}</div>
<h3 style="margin: 6px 0 0; font-weight: 500; font-size: 22px; line-height: 1.2">${f.name}</h3>
<p style="margin: 8px 0 0; font-size: 14px; line-height: 1.5; color: #5B6472">${f.blurb}</p>
</div>
<div>
<div style="font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #5B6472">Known for</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px">${(f.known||[]).map((k) => html`<span style="padding: 6px 10px; border-radius: 999px; background: #F4F1EA; font-size: 13px">${k}</span>`)}</div>
</div>
<div style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #0E1A2B"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>${f.hours}</div>
<div style="margin-top: auto; display: flex; gap: 8px">
<a href=${f.url} style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 18px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none">${f.cta}</a>
${(f.url2) ? html`<a href=${f.url2} style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid #D5D9DF; color: #0E1A2B; font-size: 14px; font-weight: 600; text-decoration: none">${f.cta2}</a>` : null}
</div>
</div>
</article>
`)}
</div>
</section>

<section id="agenda" style="padding: 40px 0 64px">
<div style="padding: 0 24px">
<h2 style="margin: 0; font-weight: 400; font-size: 32px; letter-spacing: -0.01em">Upcoming at the Village</h2>
<p style="margin: 12px 0 0; font-size: 16px; line-height: 1.55; color: #5B6472">Everything happening at the base, from every business, in one calendar.</p>
</div>
<div class="m-rail" style="margin-top: 18px; gap: 8px">
${(agendaChips||[]).map((c) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="min-height: 40px; padding: 0 16px; border-radius: 999px; border: 1px solid ${c.border}; background: ${c.bg}; color: ${c.fg}; font: 600 14px Inter, sans-serif; white-space: nowrap; cursor: pointer">${c.label}</button>
`)}
</div>
<div style="padding: 20px 24px 0">
${(agendaFeatured||[]).map((f) => html`
<article style="border-radius: 20px; overflow: hidden; background: #FFFFFF; box-shadow: 0 10px 30px rgba(14,26,43,0.10); border: 1px solid #EEF0F3">
<div style="display: flex; align-items: center; gap: 14px; padding: 16px">
<div style="width: 60px; flex: none; padding: 8px 0; border-radius: 14px; background: #0E1A2B; color: #FFFFFF; text-align: center; line-height: 1.1"><div style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #F2B35E">${f.wdShort}</div><div style="font-size: 26px; font-weight: 300">${f.dayNum}</div><div style="font-size: 11px">${f.monthShort}</div></div>
<div style="flex: 1; min-width: 0">
<div style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: ${accent}"><span style="padding: 3px 8px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase">Next up</span>${f.timeRange}</div>
<h3 style="margin: 6px 0 0; font-size: 19px; font-weight: 500; line-height: 1.2">${f.title}</h3>
<div style="margin-top: 6px; display: flex; align-items: center; gap: 6px; font-size: 14px; color: #1F5C8A"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s-7-6.4-7-12a7 7 0 0 1 14 0c0 5.6-7 12-7 12z"></path></svg>${f.where}</div>
</div>
<button type="button" aria-label="Add ${f.title} to calendar" onClick=${f.add} style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; flex: none; border-radius: 999px; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 10h16M9 3v4M15 3v4M12 13v4M10 15h4"></path></svg></button>
</div>
</article>
`)}
<div style="margin-top: 8px">
${(agendaRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 14px; padding: 14px 0; border-bottom: 1px solid #EEF0F3">
<div style="width: 44px; flex: none; text-align: center">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: ${accent}">${r.wdShort}</div>
<div style="font-size: 26px; font-weight: 300; line-height: 1.05">${r.dayNum}</div>
<div style="font-size: 11px; color: #5B6472">${r.monthShort}</div>
</div>
<div style="flex: 1; min-width: 0">
<div style="font-size: 13px; font-weight: 600; color: #1F5C8A">${r.timeRange}</div>
<div style="margin-top: 2px; font-size: 16px; font-weight: 500; line-height: 1.25">${r.title}</div>
<div style="margin-top: 2px; font-size: 13px; color: #5B6472; overflow-wrap: anywhere">${r.where}</div>
</div>
<button type="button" aria-label="Add ${r.title} to calendar" onClick=${r.add} style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; flex: none; border-radius: 999px; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 10h16M9 3v4M15 3v4M12 13v4M10 15h4"></path></svg></button>
</div>
`)}
</div>
${(agendaEmpty) ? html`<div style="padding: 22px; border-radius: 18px; background: #F4F1EA; font-size: 15px; line-height: 1.5; color: #5B6472">Nothing on the calendar ${agendaEmptyLabel} yet. Check the full calendar for what's coming up.</div>` : null}
<a href="/parkcityvillage/glass/calendar" style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 20px; min-height: 48px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none">See the full calendar →</a>
</div>
</section>

<section id="explore" style="padding: 32px 24px 72px">
<h2 style="margin: 0; font-weight: 400; font-size: 32px; line-height: 1.15; letter-spacing: -0.01em">Everyone in the Village</h2>
<p style="margin: 14px 0 0; font-size: 17px; line-height: 1.55; color: #5B6472">The full list, and which level to find them on.</p>
<div style="margin-top: 24px; border-top: 1px solid #E3E6EA">
${(directory||[]).map((g) => html`
<details class="m-acc" style="border-bottom: 1px solid #E3E6EA">
<summary style="display: flex; justify-content: space-between; align-items: center; min-height: 60px; font-size: 18px; font-weight: 500">
<span>${g.title} <span style="color: #8C96A3; font-weight: 400">${g.count}</span></span>
<svg class="m-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E1A2B" stroke-width="2" aria-hidden="true" style="transition: transform 0.2s"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div style="padding-bottom: 14px">
${(g.items||[]).map((t) => html`
<div style="display: flex; justify-content: space-between; gap: 16px; padding: 10px 0; font-size: 15px">
${(t.url) ? html`<a href=${t.url} style="font-weight: 500; color: #0E1A2B; text-decoration: underline; text-decoration-color: #C9CED6; text-underline-offset: 3px">${t.name} <span aria-hidden="true" style="color: ${accent}">↗</span></a>` : null}${(t.plain) ? html`<span style="font-weight: 500">${t.name}</span>` : null}<span style="color: #5B6472; text-align: right">${t.where}</span>
</div>
`)}
</div>
</details>
`)}
</div>
</section>

<section id="rink" class="m-band" style="min-height: 380px; box-sizing: border-box; padding: 40px 24px 28px; color: #FFFFFF; display: flex; flex-direction: column; justify-content: flex-end">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase">The Ice Rink</div>
<div style="margin-top: 10px; font-size: 30px; font-weight: 400; line-height: 1.15; letter-spacing: -0.01em">Lace up any day of the week</div>
<a href="https://www.resortcentericerink.com/tickets" style="align-self: flex-start; display: inline-flex; align-items: center; margin-top: 20px; min-height: 44px; padding: 0 20px; border-radius: 999px; background: #FFFFFF; color: #0E1A2B; font-size: 15px; font-weight: 600; text-decoration: none">Rink hours & tickets</a>
</section>

<section id="visit" style="padding: 24px 24px 48px">
<div style="background: #F4F1EA; color: #0E1A2B; border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px">
<div>
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: ${accent}">Locals tip</div>
<div style="margin-top: 4px; font-size: 18px; font-weight: 500">Free parking after noon</div>
<div style="margin-top: 4px; font-size: 13px; line-height: 1.5; color: #5B6472">No reservation needed, every day. Main Lot, 1345 Lowell Ave.</div>
<button type="button" onClick=${openParking} style="display: inline-flex; align-items: center; min-height: 32px; margin-top: 2px; padding: 0; border: 0; background: transparent; font: 600 13px Inter, sans-serif; color: #0E1A2B; text-decoration: underline; text-underline-offset: 3px; cursor: pointer">Parking at other times</button>
</div>
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" style="display: inline-flex; align-items: center; flex: none; min-height: 44px; padding: 0 16px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none">Directions</a>
</div>
</section>

<footer style="background: #0B1220; color: #FFFFFF; padding: 48px 24px 40px">
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center">
<svg width="52" height="52" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.4"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 26px; letter-spacing: 0.05em">PARK CITY VILLAGE</div>
<div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #C9D2DE">At the base of the mountain</div>
</div>
<div style="margin-top: 36px; border-top: 1px solid rgba(255,255,255,0.14)">
${(footer||[]).map((f) => html`
<details class="m-acc" style="border-bottom: 1px solid rgba(255,255,255,0.14)">
<summary style="display: flex; justify-content: space-between; align-items: center; min-height: 56px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: 0.04em; text-transform: uppercase">${f.title}<svg class="m-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" aria-hidden="true" style="transition: transform 0.2s"><path d="M6 9l6 6 6-6"></path></svg></summary>
<div style="display: flex; flex-direction: column; padding-bottom: 12px">
${(f.links||[]).map((l) => html`<a href="#top" style="display: flex; align-items: center; min-height: 40px; color: #C9D2DE; font-size: 15px; text-decoration: none">${l}</a>`)}
</div>
</details>
`)}
</div>
<div style="margin-top: 36px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase">Follow the Village</div>
<div style="display: flex; gap: 8px; margin-top: 8px">
<a href="#top" aria-label="Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #FFFFFF"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a>
<a href="#top" aria-label="Facebook" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #FFFFFF"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.8.4-1.5 1.6-1.5H17V2h-2.6C11.6 2 11 4 11 5.8V8H8.5v3H11v11h3V11h2.6l.4-3z"></path></svg></a>
</div>
<div style="margin-top: 28px; font-size: 12px; color: #8C98A9">© 2026 Park City Village · Park City, Utah</div>
</footer>

<div aria-hidden=${navHidden} style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; pointer-events: none; transform: translateY(${navY}); opacity: ${navOpacity}; max-width: 480px; margin: 0 auto; transition: transform 0.35s cubic-bezier(.2,.8,.2,1), opacity 0.25s ease">
<div style="pointer-events: auto; width: 100%; margin: 0; box-sizing: border-box; padding: ${navPad}; display: flex; align-items: center; justify-content: space-between; color: #FFFFFF; background: ${navBg}; -webkit-backdrop-filter: ${navBlur}; backdrop-filter: ${navBlur}; border-bottom: 1px solid ${navBorder}; box-shadow: ${navShadow}; transition: padding 0.35s cubic-bezier(.2,.8,.2,1), background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, -webkit-backdrop-filter 0.35s ease, backdrop-filter 0.35s ease">
<a href="#top" tabindex=${navTab} style="position: relative; z-index: 1; display: flex; align-items: center; gap: 10px; color: #FFFFFF; text-decoration: none">
<svg width="28" height="28" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.6"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.05em; line-height: 1">PARK CITY<br />VILLAGE</span>
</a>
<div style="position: relative; z-index: 1; display: flex; gap: 6px">
<button type="button" aria-label="Open menu" tabindex=${navTab} onClick=${openMenu} class="m-lg" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 14px; color: #FFFFFF; padding: 0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" style="position: relative; z-index: 1"><path d="M4 8h16M4 12h16M4 16h16"></path></svg></button>
</div>
</div>
</div>

${(calOpen) ? html`
<div class="m-menu" role="dialog" aria-modal="true" aria-label="Add to calendar" style="overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<div class="m-menu-glow" aria-hidden="true"></div>
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="m-lg m-in" style="position: relative; width: 100%; max-width: 380px; box-sizing: border-box; border-radius: 26px; padding: 22px 18px 18px; color: #FFFFFF">
<div style="position: relative; z-index: 1">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px">
<div style="min-width: 0">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">Add to calendar</div>
<h2 style="margin: 6px 0 0; font-weight: 400; font-size: 22px; line-height: 1.2">${calTitle}</h2>
<div style="margin-top: 6px; font-size: 14px; line-height: 1.45; color: rgba(255,255,255,0.85)">${calWhen}<br />${calWhere}</div>
</div>
<button type="button" aria-label="Close" onClick=${closeCal} class="m-lg" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; color: #FFFFFF; padding: 0; flex: none"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="position: relative; z-index: 1"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
</div>
<div style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px">
<button type="button" onClick=${downloadIcs} style="display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.12); color: #FFFFFF; font: 600 15px Inter, sans-serif; cursor: pointer; text-align: left"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"></rect><path d="M4 10h16M9 3v4M15 3v4"></path></svg><span style="flex: 1">Apple Calendar</span><span style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.7)">iPhone · Mac</span></button>
<a href=${calGoogle} target="_blank" rel="noopener" style="display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.12); color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"></rect><path d="M9 14h6M12 11v6"></path></svg><span style="flex: 1">Google Calendar</span><span style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.7)">Opens Google ↗</span></a>
<a href=${calOutlook} target="_blank" rel="noopener" style="display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.22); background: rgba(255,255,255,0.12); color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M3 8l9 6 9-6"></path></svg><span style="flex: 1">Outlook</span><span style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.7)">Opens Outlook ↗</span></a>
</div>
</div>
</div>
</div>
` : null}

${(menuOpen) ? html`
<div class="m-menu" role="dialog" aria-modal="true" aria-label="Menu">
<div class="m-menu-glow" aria-hidden="true"></div>
<div style="position: relative; max-width: 480px; margin: 0 auto; min-height: 100%; box-sizing: border-box; padding: 16px 24px 32px; display: flex; flex-direction: column; gap: 16px">
<div class="m-in" style="display: flex; align-items: center; justify-content: space-between">
<a href="#top" onClick=${closeMenu} style="display: flex; align-items: center; gap: 10px; color: #FFFFFF; text-decoration: none">
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.6"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 21px; letter-spacing: 0.05em; line-height: 1">PARK CITY<br />VILLAGE</span>
</a>
<button type="button" aria-label="Close menu" onClick=${closeMenu} class="m-lg" style="display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 999px; color: #FFFFFF; padding: 0">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
</button>
</div>

<nav class="m-lg m-in" aria-label="Menu" style="margin-top: 12px; border-radius: 30px; padding: 6px; animation-delay: 60ms">
${(menuItems||[]).map((m) => html`
<a href=${m.href} onClick=${closeMenu} class="m-row m-in" style="position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; min-height: 76px; padding: 12px 14px 12px 18px; border-radius: 24px; color: #FFFFFF; text-decoration: none; border-top: ${m.sep}; animation-delay: ${m.delay}">
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.06em; color: rgba(255,255,255,0.7); width: 22px">${m.num}</span>
<span style="flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0">
<span style="font-size: 25px; font-weight: 400; letter-spacing: -0.01em; line-height: 1.1">${m.label}</span>
<span style="font-size: 13px; color: rgba(255,255,255,0.78)">${m.sub}</span>
</span>
<span class="m-lg" aria-hidden="true" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 999px; flex: none"><svg width="14" height="14" viewBox="0 0 10 10" aria-hidden="true" style="position: relative; z-index: 1"><path d="M2 5h6M5.5 2.5L8 5 5.5 7.5" stroke="#FFFFFF" stroke-width="1.3" fill="none"></path></svg></span>
</a>
`)}
</nav>

<div class="m-in" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; animation-delay: 420ms">
<a href="https://www.resortcentericerink.com/tickets" style="position: relative; display: flex; flex-direction: column; justify-content: space-between; min-height: 124px; padding: 16px; box-sizing: border-box; border-radius: 26px; color: #FFFFFF; text-decoration: none; overflow: hidden; background: linear-gradient(140deg, rgba(220,84,60,0.85), rgba(170,46,26,0.7)); border: 1px solid rgba(255,255,255,0.35); box-shadow: inset 0 1px 0 rgba(255,255,255,0.55), 0 20px 40px rgba(120,30,15,0.35)">
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"></path><path d="M10 7v10" stroke-dasharray="2 2"></path></svg>
<span style="display: flex; flex-direction: column; gap: 2px"><span style="font-size: 18px; font-weight: 500">Rink tickets</span><span style="font-size: 12px; color: rgba(255,255,255,0.85)">Skate & rentals</span></span>
</a>
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" class="m-lg" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 124px; padding: 16px; box-sizing: border-box; border-radius: 26px; color: #FFFFFF; text-decoration: none">
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" style="position: relative; z-index: 1"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"></path><circle cx="12" cy="9.5" r="2.5"></circle></svg>
<span style="position: relative; z-index: 1; display: flex; flex-direction: column; gap: 2px"><span style="font-size: 18px; font-weight: 500">Find the Village</span><span style="font-size: 12px; color: rgba(255,255,255,0.8)">Free parking after noon</span></span>
</a>
</div>

<div class="m-lg m-in" style="display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 22px; animation-delay: 500ms">
<span style="position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 16px; background: rgba(255,255,255,0.16); flex: none; line-height: 1"><span style="font-size: 22px; font-weight: 300">19</span><span style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase">Nov</span></span>
<span style="position: relative; z-index: 1; display: flex; flex-direction: column; gap: 2px"><span style="font-size: 16px; font-weight: 500">The ice rink reopens</span><span style="font-size: 13px; color: rgba(255,255,255,0.78)">Park City's only outdoor rink</span></span>
</div>

<div class="m-in" style="margin-top: auto; padding-top: 12px; display: flex; align-items: center; justify-content: space-between; animation-delay: 560ms">
<span style="font-size: 13px; color: rgba(255,255,255,0.78)">1415 Lowell Ave · Park City</span>
<span style="display: flex; gap: 4px">
<a href="#top" aria-label="Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #FFFFFF"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a>
<a href="#top" aria-label="Facebook" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #FFFFFF"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.8.4-1.5 1.6-1.5H17V2h-2.6C11.6 2 11 4 11 5.8V8H8.5v3H11v11h3V11h2.6l.4-3z"></path></svg></a>
</span>
</div>
</div>
</div>
` : null}

${(parkingOpen) ? html`
<div class="m-menu" role="dialog" aria-modal="true" aria-label="Parking at the Village" style="overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box">
<div class="m-menu-glow" aria-hidden="true"></div>
<button type="button" aria-label="Close parking info" onClick=${closeParking} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent; cursor: pointer"></button>
<div class="m-lg m-in" style="position: relative; width: 100%; max-width: 420px; box-sizing: border-box; border-radius: 26px; padding: 22px 18px 22px; color: #FFFFFF; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px)">
<div style="position: relative; z-index: 1; min-width: 0">
<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px">
<div style="min-width: 0">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">Mountain Village lots · 2026/27 winter</div>
<h2 style="margin: 4px 0 0; font-weight: 400; font-size: 24px; line-height: 1.15">Parking, made simple</h2>
</div>
<button type="button" aria-label="Close" onClick=${closeParking} class="m-lg" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 999px; color: #FFFFFF; padding: 0; flex: none"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="position: relative; z-index: 1"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
</div>
<div style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px">
${(parkingRows||[]).map((r) => html`
<div style="display: flex; align-items: center; gap: 12px; padding: 12px 10px 12px 14px; border-radius: 16px; background: ${r.bg}; border: 1px solid rgba(255,255,255,0.14); min-width: 0">
<div style="flex: 1; min-width: 0">
<div style="font-size: 13px; font-weight: 600; color: ${r.whenColor}">${r.when}</div>
<div style="margin-top: 2px; font-size: 13px; line-height: 1.4; color: rgba(255,255,255,0.9); overflow-wrap: anywhere"><span style="font-weight: 600; color: #FFFFFF">${r.what}</span> ${r.more}</div>
</div>
${(r.url) ? html`<a href=${r.url} target="_blank" rel="noopener" style="display: inline-flex; align-items: center; flex: none; min-height: 40px; padding: 0 14px; border-radius: 999px; background: #FFFFFF; color: #0E1A2B; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap">${r.cta} ↗</a>` : null}
${(r.free) ? html`<span style="flex: none; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,0.14); font-size: 12px; font-weight: 600; white-space: nowrap">No booking</span>` : null}
</div>
`)}
</div>
<div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.16); font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">More free ways in</div>
<div style="margin-top: 12px; display: flex; flex-direction: column; gap: 14px; font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.9)">
<div><span style="font-weight: 600; color: #FFFFFF">Free buses</span> to the base: <a href="https://www.parkcity.gov/services/transit/routes_schedules/index.php" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600">Park City Transit ↗</a> · <a href="https://www.hvtutah.gov/" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600">High Valley Transit ↗</a></div>
<div><span style="font-weight: 600; color: #FFFFFF">Free park-and-rides</span> with a bus in: <a href="https://www.google.com/maps/search/?api=1&query=Richardson+Flat+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600">Richardson Flat ↗</a> · <a href="https://www.google.com/maps/search/?api=1&query=Ecker+Hill+Park+and+Ride+Park+City+UT" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600">Ecker Hill ↗</a>, plus Kimball Junction and Jeremy Ranch</div>
<div><span style="font-weight: 600; color: #FFFFFF">Park City High School:</span> free on weekends and holidays</div>
</div>
<div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.16); font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">Good to know</div>
<ul style="margin: 10px 0 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.9)">
<li>Reservations open Nov 3 at 8 am. You can book right up until you arrive.</li>
<li>With a reservation, arrive before noon and stay all day. No overnight parking.</li>
<li>Cancel before 8 am for a full refund. Missed reservations may get a $125 violation.</li>
</ul>
<p style="margin: 20px 0 0; font-size: 12px; color: rgba(255,255,255,0.6)">From Park at Park City Mountain's 2026/27 rules. Prices and dates can change.</p>
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

preact.render(preact.h(Component, {"accent": "#C8402A"}), document.getElementById('app'));
})();
