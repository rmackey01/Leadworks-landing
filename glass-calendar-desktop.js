document.head.insertAdjacentHTML('beforeend', "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"\">\n<link href=\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap\" rel=\"stylesheet\">\n<style>\n*{box-sizing:border-box}\nbody{margin:0;background:#FFFFFF;color:#0E1A2B;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na,button{font-family:inherit}\nbutton{cursor:pointer}\na:focus-visible,button:focus-visible{outline:3px solid #F2B35E;outline-offset:3px}\n.d-wrap{width:100%;max-width:1280px;margin:0 auto;padding:0 48px}\n.d-cond{font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:.06em;text-transform:uppercase}\n.d-navlink{color:#FFFFFF;text-decoration:none;font-size:15px;font-weight:500;padding:10px 4px;border-bottom:2px solid transparent}\n.d-navlink:hover{border-color:#F2B35E}\n.d-calhero{background-image:linear-gradient(90deg,rgba(8,14,26,.85) 0%,rgba(8,14,26,.45) 60%,rgba(8,14,26,.2) 100%),url(/parkcityvillage/assets/e7562d68353e4d04.jpg);background-size:cover;background-position:50% 55%}\n.d-month{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:52px;padding:0 18px;border-radius:14px;font-size:16px;font-weight:600;text-align:left;transition:background .2s}\n.d-ev{display:flex;gap:20px;align-items:center;padding:16px;border-radius:20px;border:1px solid #E3E6EA;background:#FFFFFF;transition:box-shadow .2s,transform .2s}\n.d-ev:hover{box-shadow:0 14px 34px rgba(14,26,43,.1);transform:translateY(-2px)}\n.d-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:32px;background:rgba(9,16,30,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}\n.d-modal{position:relative;width:100%;max-width:460px;padding:32px;border-radius:26px;background:#FFFFFF;box-shadow:0 30px 80px rgba(0,0,0,.35)}\n.d-btn{display:flex;align-items:center;justify-content:center;min-height:52px;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none}\n</style>");
(function () {
var html = htm.bind(preact.h);
function TPL(v) { var { accent, c, calGoogle, calOpen, calOutlook, calTitle, calWhen, calWhere, cats, closeCal, countLabel, downloadIcs, empty, ev, g, groups, mo, months } = v || {}; return html`<div>
<header style="position: sticky; top: 0; z-index: 60; background: rgba(14,26,43,0.92); -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px)">
<div class="d-wrap" style="display: flex; align-items: center; gap: 40px; height: 72px">
<a href="/parkcityvillage/glass" style="display: flex; align-items: center; gap: 12px; color: #FFFFFF; text-decoration: none">
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="15" fill="none" stroke="#FFFFFF" stroke-width="1.6"></circle><path d="M7 23 L14 13 L18 18 L21 14 L27 23 Z" fill="#FFFFFF"></path><circle cx="24" cy="10" r="2.4" fill="#F2B35E"></circle></svg>
<span class="d-cond" style="font-size: 20px">Park City Village</span>
</a>
<nav aria-label="Main" style="display: flex; gap: 28px; flex: 1; justify-content: center">
<a class="d-navlink" href="/parkcityvillage/glass#todo">Who's here</a>
<a class="d-navlink" href="/parkcityvillage/glass#eat">Eat & drink</a>
<a class="d-navlink" href="/parkcityvillage/glass#agenda" aria-current="page" style="border-color: #F2B35E">Events</a>
<a class="d-navlink" href="/parkcityvillage/glass#explore">Directory</a>
<a class="d-navlink" href="/parkcityvillage/glass#visit">Parking</a>
</nav>
<a href="https://maps.app.goo.gl/arkNoUVzA3h5zyaUA?g_st=ac" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 20px; border-radius: 999px; background: ${accent}; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none">Find the Village</a>
</div>
</header>

<section class="d-calhero" style="color: #FFFFFF; padding: 88px 0 72px">
<div class="d-wrap">
<a href="/parkcityvillage/glass" style="color: rgba(255,255,255,.85); font-size: 14px; font-weight: 600; text-decoration: none">← Back to the Village</a>
<div class="d-cond" style="margin-top: 22px; font-size: 14px; color: #F2B35E">Events at the base</div>
<h1 style="margin: 8px 0 0; font-weight: 300; font-size: 64px; line-height: 1; letter-spacing: -.02em">Village Calendar</h1>
<p style="margin: 14px 0 0; max-width: 560px; font-size: 18px; line-height: 1.55; color: rgba(255,255,255,.9)">Everything happening at the base, from every business, in one place. Add anything to your own calendar in one click.</p>
</div>
</section>

<section class="d-wrap" style="display: grid; grid-template-columns: 300px 1fr; gap: 56px; padding-top: 48px; padding-bottom: 96px; align-items: start">
<aside style="position: sticky; top: 104px">
<div class="d-cond" style="font-size: 13px; color: #5B6472">Month</div>
<div role="group" aria-label="Month" style="display: grid; gap: 6px; margin-top: 10px">
${(months||[]).map((mo) => html`<button type="button" class="d-month" onClick=${mo.pick} aria-pressed=${mo.pressed} style="border: 1px solid ${mo.border}; background: ${mo.bg}; color: ${mo.fg}">${mo.label}<span aria-hidden="true">→</span></button>`)}
</div>
<div class="d-cond" style="margin-top: 28px; font-size: 13px; color: #5B6472">Category</div>
<div role="group" aria-label="Category" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px">
${(cats||[]).map((c) => html`<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="min-height: 40px; padding: 0 16px; border-radius: 999px; border: 1px solid ${c.border}; background: ${c.bg}; color: ${c.fg}; font-size: 14px; font-weight: 600">${c.label}</button>`)}
</div>
<div style="margin-top: 28px; padding: 20px; border-radius: 18px; background: #F4F1EA; font-size: 14px; line-height: 1.55; color: #3B4452">Events are gathered weekly from Village businesses, the rink and local calendars. Times can change, so check with the host before you go.</div>
</aside>
<div>
<div aria-live="polite" style="font-size: 15px; color: #5B6472">${countLabel}</div>
${(groups||[]).map((g) => html`
<div style="display: grid; grid-template-columns: 88px 1fr; gap: 20px; padding-top: 28px">
<div style="text-align: center; padding-top: 14px"><div class="d-cond" style="font-size: 14px; color: ${accent}">${g.wd}</div><div style="font-size: 44px; font-weight: 300; line-height: 1">${g.day}</div></div>
<div style="display: grid; gap: 12px">
${(g.items||[]).map((ev) => html`
<article class="d-ev">
<img src=${ev.img} alt="" style="width: 132px; height: 96px; border-radius: 14px; object-fit: cover; flex: none" />
<div style="flex: 1; min-width: 0">
<div style="font-size: 14px; font-weight: 600; color: #1F5C8A">${ev.timeRange} <span style="color: #5B6472; font-weight: 500">· ${ev.cat}</span></div>
<h3 style="margin: 4px 0 0; font-size: 20px; font-weight: 500; line-height: 1.25">${ev.title}</h3>
<div style="margin-top: 4px; font-size: 14px; color: #5B6472">${ev.where}</div>
</div>
<button type="button" onClick=${ev.add} style="flex: none; min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid #D5D9DF; background: #FFFFFF; color: #0E1A2B; font-size: 14px; font-weight: 600">+ Add to calendar</button>
</article>
`)}
</div>
</div>
`)}
${(empty) ? html`<div style="margin-top: 24px; padding: 40px; border-radius: 20px; background: #F4F1EA; text-align: center; font-size: 16px; color: #5B6472">Nothing in this category yet this month.</div>` : null}
</div>
</section>

<footer style="background: #0B1220; color: #FFFFFF; padding: 40px 0">
<div class="d-wrap" style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: rgba(255,255,255,.7)">
<span class="d-cond" style="font-size: 20px; color: #FFFFFF">Park City Village</span>
<span>1415 Lowell Ave, Park City, Utah</span>
<a href="?view=mobile" style="color: rgba(255,255,255,.85)">View the mobile version</a>
</div>
</footer>

${(calOpen) ? html`
<div class="d-overlay" role="dialog" aria-modal="true" aria-label="Add to calendar">
<button type="button" aria-label="Close" onClick=${closeCal} style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 0; background: transparent"></button>
<div class="d-modal">
<div class="d-cond" style="font-size: 14px; color: ${accent}">Add to calendar</div>
<h2 style="margin: 6px 0 0; font-weight: 400; font-size: 28px; line-height: 1.15">${calTitle}</h2>
<div style="margin-top: 8px; font-size: 15px; line-height: 1.5; color: #5B6472">${calWhen}<br />${calWhere}</div>
<div style="display: grid; gap: 10px; margin-top: 22px">
<button type="button" onClick=${downloadIcs} class="d-btn" style="border: 0; background: #0E1A2B; color: #FFFFFF">Apple Calendar (.ics)</button>
<a href=${calGoogle} target="_blank" rel="noopener" class="d-btn" style="border: 1px solid #D5D9DF; color: #0E1A2B">Google Calendar ↗</a>
<a href=${calOutlook} target="_blank" rel="noopener" class="d-btn" style="border: 1px solid #D5D9DF; color: #0E1A2B">Outlook ↗</a>
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


class Desktop extends Component {
  componentDidMount() {
    if (super.componentDidMount) super.componentDidMount();
    this.onKey = (e) => { if (e.key === 'Escape') this.setState({ calEv: null }); };
    window.addEventListener('keydown', this.onKey);
  }
  componentWillUnmount() { if (super.componentWillUnmount) super.componentWillUnmount(); window.removeEventListener('keydown', this.onKey); }
}

preact.render(preact.h(Desktop, {"accent": "#C8402A"}), document.getElementById('app'));
})();
