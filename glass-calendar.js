document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap\" rel=\"stylesheet\">\n<style>\nbody{margin:0;background:#FFFFFF}\n.m-hero{text-shadow:0 1px 16px rgba(8,14,26,0.55);background-image:linear-gradient(0deg,rgba(8,14,26,0.7) 0%,rgba(8,14,26,0.35) 45%,rgba(8,14,26,0) 70%),linear-gradient(180deg,rgba(8,14,26,0.35) 0%,rgba(8,14,26,0) 35%),linear-gradient(rgba(8,14,26,0.38),rgba(8,14,26,0.38)),url(/thebaseatparkcitymountain/assets/bbe0964fe01a8527.jpg);background-size:cover;background-position:50% 50%}\n.m-band{background-image:linear-gradient(180deg,rgba(14,26,43,0.82) 0%,rgba(14,26,43,0.35) 60%,rgba(14,26,43,0.7) 100%),url(/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg);background-size:cover;background-position:55% 50%}\n.m-glass{background:rgba(255,255,255,0.22);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.m-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 24px !important;scroll-padding-inline:24px;scrollbar-width:none;-webkit-overflow-scrolling:touch;box-sizing:border-box;width:100%}\n.m-rail::after{content:'';flex:0 0 12px}\n.m-rail::-webkit-scrollbar{display:none}\n.m-rail > *{scroll-snap-align:start;flex:none}\n.m-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n.m-slider::-webkit-scrollbar{display:none}\n.m-slide{flex:0 0 100%;scroll-snap-align:start;height:85vh;height:85svh;max-height:760px;min-height:560px;box-sizing:border-box;padding:24px 24px 60px;display:flex;flex-direction:column;color:#FFFFFF;background-size:cover;background-position:50% 50%}\n@keyframes mFillA{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes mFillB{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n.m-fillA{animation:mFillA 5s linear forwards}\n.m-fillB{animation:mFillB 5s linear forwards}\n.m-sr{position:absolute;top:72px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.m-sr:focus-visible{width:auto;height:44px;padding:0 16px;margin:0;clip:auto;overflow:visible;border-radius:999px;background:#FFFFFF;color:#0E1A2B;font:600 14px Inter,sans-serif;z-index:5}\n.m-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:60;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;touch-action:pan-y;color:#FFFFFF;background:rgba(9,16,30,0.42);-webkit-backdrop-filter:blur(28px) saturate(170%);backdrop-filter:blur(28px) saturate(170%);animation:mMenuIn .45s cubic-bezier(.2,.8,.2,1) both}\n.m-menu-glow{position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;background-size:130% 130%;pointer-events:none;background:radial-gradient(38% 28% at 12% 8%,rgba(242,179,94,0.38),rgba(242,179,94,0) 70%),radial-gradient(44% 34% at 92% 42%,rgba(156,195,213,0.36),rgba(156,195,213,0) 70%),radial-gradient(48% 38% at 28% 96%,rgba(200,64,42,0.32),rgba(200,64,42,0) 70%);animation:mGlow 14s ease-in-out infinite alternate}\n.m-lg{position:relative;background:linear-gradient(140deg,rgba(255,255,255,0.24) 0%,rgba(255,255,255,0.08) 45%,rgba(255,255,255,0.14) 100%);-webkit-backdrop-filter:blur(20px) saturate(190%);backdrop-filter:blur(20px) saturate(190%);border:1px solid rgba(255,255,255,0.3);box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 -1px 1px rgba(255,255,255,0.12),inset 0 0 24px rgba(255,255,255,0.06),0 24px 48px rgba(0,0,0,0.28);overflow:hidden}\n.m-lg::after{content:'';position:absolute;left:0;right:0;top:0;height:46%;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0));pointer-events:none}\n.m-in{animation:mItemIn .55s cubic-bezier(.2,.8,.2,1) both}\n.m-row:active{background:rgba(255,255,255,0.1)}\n@keyframes mMenuIn{from{opacity:0}to{opacity:1}}\n@keyframes mItemIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}\n@keyframes mGlow{from{background-position:0% 0%}to{background-position:100% 60%}}\n.m-acc summary{list-style:none;cursor:pointer}\n.m-acc summary::-webkit-details-marker{display:none}\n.m-acc[open] .m-chev{transform:rotate(180deg)}\n.c-hero{background-image:linear-gradient(0deg,rgba(8,14,26,0.82) 0%,rgba(8,14,26,0.45) 60%,rgba(8,14,26,0.6) 100%),url(/thebaseatparkcitymountain/assets/e7562d68353e4d04.jpg);background-size:cover;background-position:45% 50%}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { accent, c, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, cats, closeCal, countLabel, downloadIcs, empty, ev, g, groups, mo, months } = v || {}; return html`<div style="width: 100%; max-width: 480px; margin: 0 auto; font-family: Inter, system-ui, sans-serif; color: #0E1A2B; background: #FFFFFF; overflow: hidden">

<div style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; max-width: 480px; margin: 0 auto">
<div style="display: flex; align-items: center; justify-content: space-between; padding: max(8px, env(safe-area-inset-top)) 16px 8px 12px; color: #FFFFFF; background: rgba(14,26,43,0.55); -webkit-backdrop-filter: blur(20px) saturate(180%); backdrop-filter: blur(20px) saturate(180%); border-bottom: 1px solid rgba(255,255,255,0.18); box-shadow: 0 6px 20px rgba(8,14,26,0.18)">
<a href="/thebaseatparkcitymountain/glass" style="display: flex; align-items: center; gap: 8px; min-height: 44px; padding-right: 8px; color: #FFFFFF; text-decoration: none">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg>
<span style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.05em; line-height: 1">PARK CITY VILLAGE</span>
</a>
</div>
</div>

<section class="c-hero" style="padding: 104px 24px 32px; color: #FFFFFF">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: #F2B35E">Events at the base</div>
<h1 style="margin: 8px 0 0; font-weight: 400; font-size: 40px; line-height: 1.05; letter-spacing: -0.02em">Village Calendar</h1>
<p style="margin: 12px 0 0; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.9)">Everything happening at the base, from every business, in one place.</p>
<a href="#subscribe" class="m-lg" style="display: flex; align-items: center; gap: 12px; margin-top: 22px; padding: 14px 16px; border-radius: 18px; color: #FFFFFF; text-decoration: none">
<span style="position: relative; z-index: 1; display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: #FFFFFF; color: #0E1A2B; flex: none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 10h16M9 3v4M15 3v4M9 15l2 2 4-4"></path></svg></span>
<span style="position: relative; z-index: 1; flex: 1; min-width: 0"><span style="display: block; font-size: 16px; font-weight: 600">Subscribe to the calendar</span><span style="display: block; margin-top: 2px; font-size: 13px; color: rgba(255,255,255,0.85)">Every Village event on your phone, always up to date</span></span>
<span aria-hidden="true" style="position: relative; z-index: 1; font-size: 18px">→</span>
</a>
</section>

<section style="padding: 20px 0 8px">
<div style="display: flex; gap: 8px; padding: 0 24px">
${(months||[]).map((mo) => html`
<button type="button" onClick=${mo.pick} aria-pressed=${mo.pressed} style="flex: 1; min-height: 48px; border-radius: 14px; border: 1px solid ${mo.border}; background: ${mo.bg}; color: ${mo.fg}; font: 600 15px Inter, sans-serif; cursor: pointer">${mo.label}</button>
`)}
</div>
<div class="m-rail" style="margin-top: 12px; gap: 8px">
${(cats||[]).map((c) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="min-height: 40px; padding: 0 16px; border-radius: 999px; border: 1px solid ${c.border}; background: ${c.bg}; color: ${c.fg}; font: 600 14px Inter, sans-serif; white-space: nowrap; cursor: pointer">${c.label}</button>
`)}
</div>
</section>

<section style="padding: 12px 24px 48px">
<div style="font-size: 13px; color: #5B6472">${countLabel}</div>
${(groups||[]).map((g) => html`
<div style="display: flex; gap: 14px; padding-top: 22px">
<div style="width: 48px; flex: none; text-align: center; padding-top: 2px">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: ${accent}">${g.wd}</div>
<div style="font-size: 30px; font-weight: 300; line-height: 1.05">${g.day}</div>
</div>
<div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid #E3E6EA; padding-top: 14px">
${(g.items||[]).map((ev) => html`
<article style="display: flex; gap: 12px; min-width: 0">
<img src=${ev.img} alt="" style="width: 76px; height: 76px; border-radius: 14px; object-fit: cover; flex: none" />
<div style="flex: 1; min-width: 0">
<div style="font-size: 13px; font-weight: 600; color: #1F5C8A">${ev.timeRange}</div>
<h3 style="margin: 3px 0 0; font-size: 17px; font-weight: 500; line-height: 1.25">${ev.title}</h3>
<div style="margin-top: 3px; font-size: 13px; color: #5B6472; overflow-wrap: anywhere">${ev.where} · ${ev.cat}</div>
<button type="button" onClick=${ev.add} style="display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; min-height: 36px; padding: 0 12px; border-radius: 999px; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font: 600 13px Inter, sans-serif; cursor: pointer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 10h16M9 3v4M15 3v4M12 13v4M10 15h4"></path></svg>Add to calendar</button>
</div>
</article>
`)}
</div>
</div>
`)}
${(empty) ? html`<div style="margin-top: 24px; padding: 24px; border-radius: 18px; background: #F4F1EA; text-align: center; font-size: 15px; color: #5B6472">Nothing in this category yet this month.</div>` : null}
</section>

<footer id="subscribe" style="background: #0B1220; color: #FFFFFF; padding: 40px 24px">
<div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: 0.05em">PARK CITY VILLAGE</div>
<p style="margin: 10px 0 0; font-size: 14px; line-height: 1.6; color: #C9D2DE">Events are gathered weekly from Village businesses, the rink and local calendars. Times can change, so check with the host before you go.</p>
<a href="/thebaseatparkcitymountain/glass" style="display: inline-flex; align-items: center; min-height: 44px; margin-top: 12px; color: #FFFFFF; font-size: 14px; font-weight: 600">← Back to the Village</a>
</footer>

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

</div>`; }
class DCLogic extends preact.Component { render() { return TPL(this.renderVals()); } }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { month: null, cat: 'All', calEv: null };
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
  }
  renderVals() {
    const accent = this.props.accent ?? '#C8402A';
    // ---- Village calendar (mock events until the weekly feed is live) ----
    const EVENTS = [
      { id: 'e1', title: "Pre-season boot-fitting week", start: '2026-10-29T10:00', mins: 480, where: "Bootworks", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/d52c119782b14df5.jpg' },
      { id: 'e2', title: "Thursday trivia night", start: '2026-10-29T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e3', title: "Harvest pumpkin bread morning", start: '2026-10-30T08:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/778a3affa50bc3e5.jpg' },
      { id: 'e4', title: "Season locker sign-ups", start: '2026-10-30T09:00', mins: 480, where: "Jackson's Base Camp", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/b9852ef17e4b2672.jpg' },
      { id: 'e5', title: "Caramel apple dipping for kids", start: '2026-10-31T13:00', mins: 90, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/thebaseatparkcitymountain/assets/92b6d944f3a847e1.jpg' },
      { id: 'e6', title: "Halloween costume apr\u00e8s (21+)", start: '2026-10-31T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e7', title: "Trick-or-treat around the Village", start: '2026-10-31T16:00', mins: 120, where: "Shops across the Village", cat: 'Family', img: '/thebaseatparkcitymountain/assets/d5a44ce8e5fedc98.jpg' },
      { id: 'e8', title: "Sunday brunch & coffee tasting", start: '2026-11-01T09:00', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/a94074167a72111b.jpg' },
      { id: 'e9', title: "Ski & board swap drop-off", start: '2026-11-01T10:00', mins: 360, where: "Cole Sport", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/9c02e1080b7531b8.jpg' },
      { id: 'e10', title: "Wax & tune clinic", start: '2026-11-03T17:30', mins: 90, where: "Jackson's Base Camp", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/b9852ef17e4b2672.jpg' },
      { id: 'e11', title: "Locals night: half-price apps", start: '2026-11-05T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/3894071d13b9b254.jpg' },
      { id: 'e12', title: "Rental pre-booking party", start: '2026-11-06T16:00', mins: 180, where: "Aloha Ski & Snowboard", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/ee743ee8a8d189b8.jpg' },
      { id: 'e13', title: "Ski swap: buy day", start: '2026-11-07T09:00', mins: 420, where: "Cole Sport", cat: 'Shopping', img: '/thebaseatparkcitymountain/assets/9c02e1080b7531b8.jpg' },
      { id: 'e14', title: "Live acoustic set", start: '2026-11-07T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/thebaseatparkcitymountain/assets/d59bc581659f4cd4.jpg' },
      { id: 'e15', title: "Family fudge demo", start: '2026-11-08T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/thebaseatparkcitymountain/assets/c571300f29e493b0.jpg' },
      { id: 'e16', title: "Thursday trivia night", start: '2026-11-12T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e17', title: "Demo day: new skis on snow", start: '2026-11-14T10:00', mins: 300, where: "Jackson's Base Camp", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/b9852ef17e4b2672.jpg' },
      { id: 'e18', title: "Live music on the deck", start: '2026-11-14T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/thebaseatparkcitymountain/assets/d59bc581659f4cd4.jpg' },
      { id: 'e19', title: "Custom insole open house", start: '2026-11-15T11:00', mins: 240, where: "Bootworks", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/d52c119782b14df5.jpg' },
      { id: 'e20', title: "Opening night on the ice", start: '2026-11-19T16:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg' },
      { id: 'e21', title: "Opening day pancake breakfast", start: '2026-11-20T07:30', mins: 180, where: "Harvest at the Base", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/778a3affa50bc3e5.jpg' },
      { id: 'e22', title: "First chair apr\u00e8s party", start: '2026-11-20T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e23', title: "Live apr\u00e8s set on the deck", start: '2026-11-21T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/thebaseatparkcitymountain/assets/d59bc581659f4cd4.jpg' },
      { id: 'e24', title: "Learn-to-skate morning", start: '2026-11-22T10:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg' },
      { id: 'e25', title: "Thanksgiving Day skate", start: '2026-11-26T12:00', mins: 240, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg' },
      { id: 'e26', title: "Black Friday gear sale", start: '2026-11-27T09:00', mins: 480, where: "Cole Sport", cat: 'Shopping', img: '/thebaseatparkcitymountain/assets/9c02e1080b7531b8.jpg' },
      { id: 'e27', title: "Village tree lighting", start: '2026-11-27T17:30', mins: 90, where: "Rinkside plaza", cat: 'Family', img: '/thebaseatparkcitymountain/assets/e7562d68353e4d04.jpg' },
      { id: 'e28', title: "Small Business Saturday", start: '2026-11-28T10:00', mins: 420, where: "Shops across the Village", cat: 'Shopping', img: '/thebaseatparkcitymountain/assets/9c02e1080b7531b8.jpg' },
      { id: 'e29', title: "Live music on the deck", start: '2026-11-28T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/thebaseatparkcitymountain/assets/d59bc581659f4cd4.jpg' },
      { id: 'e30', title: "Cocoa & carols by the fire", start: '2026-12-05T16:00', mins: 120, where: "Fire pits, Village plaza", cat: 'Family', img: '/thebaseatparkcitymountain/assets/927bfd1c3ce12cd3.jpg' },
      { id: 'e31', title: "Boot-fitting clinic", start: '2026-12-06T10:00', mins: 180, where: "Bootworks", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/d52c119782b14df5.jpg' },
      { id: 'e32', title: "Thursday trivia night", start: '2026-12-10T18:30', mins: 120, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e33', title: "Family skate night with a DJ", start: '2026-12-11T18:00', mins: 150, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg' },
      { id: 'e34', title: "Ugly sweater apr\u00e8s (21+)", start: '2026-12-12T15:00', mins: 180, where: "Pig Pen Saloon", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e35', title: "Fudge-making demo", start: '2026-12-13T13:00', mins: 60, where: "Rocky Mountain Chocolate Factory", cat: 'Family', img: '/thebaseatparkcitymountain/assets/92b6d944f3a847e1.jpg' },
      { id: 'e36', title: "Holiday gift wrap & shop night", start: '2026-12-17T16:00', mins: 240, where: "Shops across the Village", cat: 'Shopping', img: '/thebaseatparkcitymountain/assets/d5a44ce8e5fedc98.jpg' },
      { id: 'e37', title: "Ugly sweater skate", start: '2026-12-19T15:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/ca4d387494b9b28f.jpg' },
      { id: 'e38', title: "Live holiday music", start: '2026-12-20T15:00', mins: 150, where: "Bluebird Apr\u00e8s Cafe", cat: 'Music', img: '/thebaseatparkcitymountain/assets/d59bc581659f4cd4.jpg' },
      { id: 'e39', title: "Christmas Eve skate & cocoa", start: '2026-12-24T14:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/6aaea81152c3aff7.jpg' },
      { id: 'e40', title: "Holiday truffle tasting", start: '2026-12-26T13:00', mins: 120, where: "Rocky Mountain Chocolate Factory", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/c571300f29e493b0.jpg' },
      { id: 'e41', title: "New Year's Eve apr\u00e8s bash (21+)", start: '2026-12-31T15:00', mins: 300, where: "Pig Pen Saloon", cat: 'Music', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e42', title: "New Year's Eve glow skate", start: '2026-12-31T17:00', mins: 180, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/e7562d68353e4d04.jpg' },
      { id: 'e43', title: "New Year recovery brunch", start: '2027-01-01T09:00', mins: 240, where: "Harvest at the Base", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/778a3affa50bc3e5.jpg' },
      { id: 'e44', title: "Kids ski-gear swap", start: '2027-01-09T10:00', mins: 240, where: "Aloha Ski & Snowboard", cat: 'Family', img: '/thebaseatparkcitymountain/assets/ee743ee8a8d189b8.jpg' },
      { id: 'e45', title: "Locals night: half-price apps", start: '2027-01-14T16:00', mins: 180, where: "Bluebird Apr\u00e8s Cafe", cat: 'Food & drink', img: '/thebaseatparkcitymountain/assets/3894071d13b9b254.jpg' },
      { id: 'e46', title: "Sundance week apr\u00e8s", start: '2027-01-22T15:00', mins: 240, where: "Pig Pen Saloon", cat: 'Music', img: '/thebaseatparkcitymountain/assets/554eb72bcdb0490f.jpg' },
      { id: 'e47', title: "Moonlight skate", start: '2027-01-23T19:00', mins: 120, where: "Resort Center Ice Rink", cat: 'Skating', img: '/thebaseatparkcitymountain/assets/e7562d68353e4d04.jpg' },
      { id: 'e48', title: "Winter boot tune-up day", start: '2027-01-30T10:00', mins: 300, where: "Bootworks", cat: 'Gear', img: '/thebaseatparkcitymountain/assets/d52c119782b14df5.jpg' }
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
    const chip = (on) => on ? { bg: '#0E1A2B', fg: '#FFFFFF', border: '#0E1A2B', pressed: 'true' } : { bg: '#FFFFFF', fg: '#0E1A2B', border: '#D5D9DF', pressed: 'false' };
    const nowKey = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver' }).format(new Date()).slice(0, 7);
    const monthKeys = [...new Set(allEvents.map(e => e.monthKey))].filter(k => k >= nowKey).sort();
    const curMonth = monthKeys.includes(this.state.month) ? this.state.month : monthKeys[0];
    const months = monthKeys.map(k => ({ label: MON[Number(k.slice(5)) - 1].slice(0, 3), ...chip(curMonth === k), pick: () => this.setState({ month: k }) }));
    const cats = ['All', 'Skating', 'Food & drink', 'Music', 'Family', 'Shopping', 'Gear'].map(label => ({ label, ...chip(this.state.cat === label), pick: () => this.setState({ cat: label }) }));
    const list = allEvents.filter(e => e.monthKey === curMonth && (this.state.cat === 'All' || e.cat === this.state.cat));
    const byDay = [];
    list.forEach(e => { const last = byDay[byDay.length - 1]; if (last && last.key === e.start.slice(0, 10)) last.items.push(e); else byDay.push({ key: e.start.slice(0, 10), wd: e.wdShort, day: e.dayNum, items: [e] }); });
    const monthName = curMonth ? MON[Number(curMonth.slice(5)) - 1] : '';
    return {
      accent, months, cats, groups: byDay, empty: list.length === 0,
      countLabel: `${list.length} event${list.length === 1 ? '' : 's'} in ${monthName}${this.state.cat === 'All' ? '' : ' · ' + this.state.cat}`,
      calOpen: !!calEv, calTitle: calEv ? calEv.title : '', calWhen: calEv ? calEv.dateLong + ' · ' + calEv.timeRange : '', calWhere: calEv ? calEv.where : '',
      calGoogle: calEv ? calEv.google : '#', calOutlook: calEv ? calEv.outlook : '#', closeCal: this.closeCal, downloadIcs: this.downloadIcs
    };
  }
}

preact.render(preact.h(Component, {"accent": "#C8402A"}), document.getElementById('app'));
})();
