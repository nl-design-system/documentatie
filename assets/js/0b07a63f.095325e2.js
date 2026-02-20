/*! For license information please see 0b07a63f.095325e2.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8424],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var i = t(30758);
   const s = {},
    r = i.createContext(s);
   function o(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => r });
   var i = t(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, t, r) => {
    const o = (0, i.forwardRef)(({ color: t = 'currentColor', size: o = 24, stroke: a = 2, title: l, className: m, children: c, ...d }, u) => (0, i.createElement)('svg', { ref: u, ...s[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, m].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: a, stroke: t }), ...d }, [l && (0, i.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${t}`), o);
   };
  },
  24955(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => p, frontMatter: () => m, metadata: () => i, toc: () => u }));
   const i = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden-success","title":"Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints","description":"Welkom bij de MijnServices Community, fijn dat je erbij bent!","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","permalink":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bedankt voor je aanmelding","pagination_label":"Bedankt voor je aanmelding","slug":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","unlisted":true}}');
   var s = t(86070),
    r = t(18439),
    o = t(90578),
    a = t(88666),
    l = t(46447);
   const m = { title: 'Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', unlisted: !0 },
    c = 'Bedankt!',
    d = {},
    u = [];
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, s.jsx)(n.p, { children: 'Welkom bij de MijnServices Community, fijn dat je erbij bent!' }), '\n', (0, s.jsx)(n.p, { children: 'Handige links:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system-developers Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services', children: 'Bekijk de code op GitHub' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Bekijk onze ', (0, s.jsx)(n.a, { href: 'https://www.youtube.com/playlist?list=PLnAxFMscDU3F1VYQxlJLpmV-Z-FQ6hCU_', children: "video's in de MijnServices Community Sprint playlist op YouTube" }), ' en abonneer je op ons kanaal.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Vind alle relevante linkjes en informatie op de ', (0, s.jsx)(n.a, { href: '/community/community-sprints/mijn-services-community/', children: 'MijnServices Community pagina' }), '.'] }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Elke week op donderdag van 10:00 tot 11:00 kan je meedoen aan de ', (0, s.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' huddle en de thread volgen in het #nl-design-system-designers kanaal. Deze is voor zowel developers als designers.'] }), '\n', (0, s.jsx)(l.e2, { children: (0, s.jsxs)(a.v, { appearance: 'secondary-action', href: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-check-in.ics', download: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-check-in.ics', 'aria-label': 'iCal bestand voor de MijnServices Community Check-in (download)', children: [(0, s.jsx)(o.A, {}), ' Download het kalenderbestand'] }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  45282(e, n, t) {
   t.d(n, { F: () => r, N: () => o });
   var i = t(13526),
    s = t(86070);
   const r = ({ children: e, ...n }) => {
     const { to: t, href: i, ...r } = n;
     let o = t || i;
     const a = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (o = a.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, s.jsx)(r, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  88666(e, n, t) {
   t.d(n, { v: () => o });
   var i = t(45282),
    s = t(13526),
    r = t(86070);
   const o = ({ appearance: e, ...n }) => (0, r.jsx)(i.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
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
