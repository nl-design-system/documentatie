/*! For license information please see 235c86a2.8292419d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21057],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => l });
   var a = t(30758);
   const r = {},
    i = a.createContext(r);
   function s(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), a.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => i });
   var a = t(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, t, i) => {
    const s = (0, a.forwardRef)(({ color: t = 'currentColor', size: s = 24, stroke: l = 2, title: o, className: d, children: h, ...c }, m) => (0, a.createElement)('svg', { ref: m, ...r[e], width: s, height: s, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: l, stroke: t }), ...c }, [o && (0, a.createElement)('title', { key: 'svg-title' }, o), ...i.map(([e, n]) => (0, a.createElement)(e, n)), ...(Array.isArray(h) ? h : [h])]));
    return ((s.displayName = `${t}`), s);
   };
  },
  30522(e, n, t) {
   t.d(n, { A: () => a });
   const a = t.p + 'assets/files/heartbeat-dfc3f6a16749638d019e231117d9bead.ics';
  },
  45282(e, n, t) {
   t.d(n, { F: () => i, N: () => s });
   var a = t(13526),
    r = t(86070);
   const i = ({ children: e, ...n }) => {
     const { to: t, href: a, ...i } = n;
     let s = t || a;
     const l = new URL(s, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (s = l.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: s, ...i, children: e }));
    },
    s = ({ className: e, ...n }) => (0, r.jsx)(i, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60755(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => c, default: () => u, frontMatter: () => h, metadata: () => a, toc: () => j }));
   const a = JSON.parse('{"id":"community/events/heartbeat/heartbeat","title":"Heartbeat","description":"Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?","source":"@site/docs/community/events/heartbeat/heartbeat.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat","permalink":"/events/heartbeat","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/heartbeat.mdx","tags":[],"version":"current","frontMatter":{"title":"Heartbeat","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heartbeat","pagination_label":"2 wekelijkse updates van het kernteam en community","description":"Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?","slug":"/events/heartbeat"},"sidebar":"community","previous":{"title":"Heartbeat","permalink":"/events/heartbeat/overzicht"},"next":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"}}');
   var r = t(86070),
    i = t(18439),
    s = t(88666),
    l = t(45282),
    o = t(64249),
    d = t(46447);
   const h = { title: 'Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heartbeat', pagination_label: '2 wekelijkse updates van het kernteam en community', description: 'Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?', slug: '/events/heartbeat' },
    c = 'Heartbeat',
    m = {},
    j = [
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Vragen?', id: 'vragen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'heartbeat', children: 'Heartbeat' }) }), '\n', (0, r.jsx)(n.p, { children: 'In de Heartbeat vertelt het kernteam van NL Design System elke twee weken wat de laatste stand van zaken is. Daarnaast laten we organisaties aan het woord die met/aan het NL Design System werken.' }), '\n', (0, r.jsxs)(d.e2, { children: [(0, r.jsxs)(s.v, { href: '/events/heartbeat/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(o.A, {})] }), (0, r.jsxs)(s.v, { href: '/events/heartbeat/videos', appearance: 'secondary-action', children: ['Kijk de Heartbeat terug', (0, r.jsx)(o.A, {})] })] }), '\n', (0, r.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen kan aansluiten!' }), '\n', (0, r.jsxs)(n.p, { children: ['De Heartbeat is elke even week, op dinsdag om 13:00 uur ', (0, r.jsx)('a', { className: 'utrecht-link utrecht-link--html-a', href: '/events/heartbeat/deelnemen/', children: 'in Microsoft Teams' }), '. De sessies zijn publiek toegankelijk en worden opgenomen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Door je aan te melden kunnen wij je op de hoogte houden van Heartbeats. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Heartbeat makkelijk aan je agenda kan toevoegen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Werk jij met of aan het NL Design System? Dan kun je zelf ook iets presenteren! Lees meer over hoe dat werkt op ', (0, r.jsx)(l.N, { href: '/events/heartbeat/zelf-iets-vertellen', children: 'zelf iets vertellen in de Heartbeat' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, r.jsx)(n.p, { children: 'De Heartbeat vindt om de week plaats op dinsdag. Dit zijn de data voor 2026:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '6 januari' }), '\n', (0, r.jsx)(n.li, { children: '20 januari' }), '\n', (0, r.jsx)(n.li, { children: '3 februari' }), '\n', (0, r.jsx)(n.li, { children: '17 februari' }), '\n', (0, r.jsx)(n.li, { children: '3 maart' }), '\n', (0, r.jsx)(n.li, { children: '17 maart' }), '\n', (0, r.jsx)(n.li, { children: '31 maart' }), '\n', (0, r.jsx)(n.li, { children: '14 april' }), '\n', (0, r.jsx)(n.li, { children: '28 april' }), '\n', (0, r.jsx)(n.li, { children: '12 mei' }), '\n', (0, r.jsx)(n.li, { children: '26 mei' }), '\n', (0, r.jsx)(n.li, { children: '9 juni' }), '\n', (0, r.jsx)(n.li, { children: '23 juni' }), '\n', (0, r.jsx)(n.li, { children: '7 juli' }), '\n', (0, r.jsx)(n.li, { children: '18 augustus' }), '\n', (0, r.jsx)(n.li, { children: '1 september' }), '\n', (0, r.jsx)(n.li, { children: '15 september' }), '\n', (0, r.jsx)(n.li, { children: '29 september' }), '\n', (0, r.jsx)(n.li, { children: '13 oktober' }), '\n', (0, r.jsx)(n.li, { children: '27 oktober' }), '\n', (0, r.jsx)(n.li, { children: '10 november' }), '\n', (0, r.jsx)(n.li, { children: '24 november' }), '\n', (0, r.jsx)(n.li, { children: '8 december' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(30522).A + '', children: 'Voeg Heartbeats aan je kalender (.ics)' }) }), '\n', (0, r.jsx)(n.h2, { id: 'vragen', children: 'Vragen?' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je nog vragen? Stuur ons dan een mailtje op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), ' of neem contact op via ', (0, r.jsx)(n.a, { href: 'https://app.slack.com/huddle/T68FXPFQV/C7KDQRXMZ', children: 'het #nl-design-system kanaal' }), ' op ', (0, r.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'de Code for NL Slack' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  64249(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  88666(e, n, t) {
   t.d(n, { v: () => s });
   var a = t(45282),
    r = t(13526),
    i = t(86070);
   const s = ({ appearance: e, ...n }) => (0, i.jsx)(a.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
 },
]);
