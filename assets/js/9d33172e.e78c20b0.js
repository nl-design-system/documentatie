/*! For license information please see 9d33172e.e78c20b0.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32537],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => l });
   var i = t(30758);
   const s = {},
    o = i.createContext(s);
   function r(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, n, t, o) => {
    const r = (0, i.forwardRef)(({ color: t = 'currentColor', size: r = 24, stroke: l = 2, title: a, className: d, children: m, ...c }, u) => (0, i.createElement)('svg', { ref: u, ...s[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: l, stroke: t }), ...c }, [a && (0, i.createElement)('title', { key: 'svg-title' }, a), ...o.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(m) ? m : [m])]));
    return ((r.displayName = `${t}`), r);
   };
  },
  20698(e, n, t) {
   t.d(n, { v: () => r });
   var i = t(53538),
    s = t(13526),
    o = t(86070);
   const r = ({ appearance: e, ...n }) => (0, o.jsx)(i.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  40535(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, contentTitle: () => m, default: () => j, frontMatter: () => d, metadata: () => i, toc: () => u }));
   const i = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden-success","title":"Bedankt voor je aanmelding","description":"Welkom bij de Rijkshuisstijl Community, fijn dat je erbij bent. We hopen je snel (weer) eens te zien in het #rijkshuisstijl-community Slack kanaal of bij een van de bijeenkomsten!","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden-success.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bedankt voor je aanmelding","pagination_label":"Bedankt voor je aanmelding","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","unlisted":true}}');
   var s = t(86070),
    o = t(18439),
    r = t(90578),
    l = t(20698),
    a = t(46447);
   const d = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', unlisted: !0 },
    m = 'Bedankt!',
    c = {},
    u = [{ value: 'Open Hour', id: 'open-hour', level: 2 }];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Welkom bij de Rijkshuisstijl Community, fijn dat je erbij bent. We hopen je snel (weer) eens te zien in het ', (0, s.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ' Slack kanaal of bij een van de bijeenkomsten!'] }), '\n', (0, s.jsx)(n.p, { children: 'Handige links:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Word lid van het ', (0, s.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ' kanaal op ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community', children: 'Bekijk de code op GitHub' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Bekijk onze ', (0, s.jsx)(n.a, { href: 'https://www.youtube.com/playlist?list=PLnAxFMscDU3FHVDYR9WvX3d84JdQ5Q3tJ', children: "video's in de Rijkshuisstijl Community Sprint playlist op YouTube" }), ' en abonneer je op ons kanaal.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Vind alle relevante linkjes en informatie op de ', (0, s.jsx)(n.a, { href: 'https://rijkshuisstijl-community.nl/', children: 'Rijkshuisstijl Community homepage' }), ' en op ', (0, s.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'NL Design System onder Rijkshuisstijl Community' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'open-hour', children: 'Open Hour' }), '\n', (0, s.jsxs)(n.p, { children: ['Voor iedereen die interesse heeft in de Rijkshuisstijl is er in de oneven weken, iedere dinsdag om 16:00 uur, een ', (0, s.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }), '. Dit is een moment om kennis te delen en samen vraagstukken rond de Rijkshuisstijl te bespreken. Ook het delen van work-in-progress, tips of inzichten uit gebruikersonderzoek wordt gewaardeerd!'] }), '\n', (0, s.jsx)(a.e2, { children: (0, s.jsxs)(l.v, { appearance: 'secondary-action', href: 'https://nldesignsystem.nl/rijkshuisstijl-community/rijkshuisstijl-community-open-hour.ics', download: 'https://nldesignsystem.nl/rijkshuisstijl-community/rijkshuisstijl-community-open-hour.ics', 'aria-label': 'iCal bestand voor de Rijkshuisstijl Community Open Hour (download)', children: [(0, s.jsx)(r.A, {}), ' Download het kalenderbestand voor de Open Hour'] }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  53538(e, n, t) {
   t.d(n, { F: () => o, N: () => r });
   var i = t(13526),
    s = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: i, ...o } = n;
     let r = t || i;
     const l = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (r = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: r, ...o, children: e }));
    },
    r = ({ className: e, ...n }) => (0, s.jsx)(o, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  90578(e, n, t) {
   t.d(n, { A: () => i });
   const i = (0, t(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
