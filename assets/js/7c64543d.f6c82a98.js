/*! For license information please see 7c64543d.f6c82a98.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89033],
 {
  790(e) {
   e.exports = [];
  },
  18439(e, s, t) {
   t.d(s, { R: () => r, x: () => a });
   var n = t(30758);
   const i = {},
    o = n.createContext(i);
   function r(e) {
    const s = n.useContext(o);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), n.createElement(o.Provider, { value: s }, e.children));
   }
  },
  18652(e, s, t) {
   t.d(s, { A: () => o });
   var n = t(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, s, t, o) => {
    const r = (0, n.forwardRef)(({ color: t = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: m, children: d, ...c }, g) => (0, n.createElement)('svg', { ref: g, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${s}`, m].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: a, stroke: t }), ...c }, [l && (0, n.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, s]) => (0, n.createElement)(e, s)), ...(Array.isArray(d) ? d : [d])]));
    return ((r.displayName = `${t}`), r);
   };
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  51273(e, s, t) {
   (t.r(s), t.d(s, { assets: () => c, contentTitle: () => d, default: () => y, frontMatter: () => m, metadata: () => n, toc: () => g }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/en/timetable","title":"Timetable","description":"Timetable for the Design Systems Week 2026 organised by NL Design System","source":"@site/docs/community/events/design-systems-week/en/timetable.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week-2026/en/timetable","permalink":"/events/design-systems-week-2026/en/timetable","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/timetable.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Timetable","description":"Timetable for the Design Systems Week 2026 organised by NL Design System","lang":"en","hide_table_of_contents":true,"sidebar_label":"Timetable","pagination_label":"Timetable","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/en/timetable","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"Design Systems Week 2026","permalink":"/events/design-systems-week-2026/en/program"},"next":{"title":"Videos 2025","permalink":"/events/design-systems-week-2025/en/program"}}');
   var i = t(86070),
    o = t(18439),
    r = t(46447),
    a = t(64249),
    l = (t(790), t(86109), t(59541), t(51130));
   const m = { title: 'Timetable', description: 'Timetable for the Design Systems Week 2026 organised by NL Design System', lang: 'en', hide_table_of_contents: !0, sidebar_label: 'Timetable', pagination_label: 'Timetable', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/en/timetable', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    d = 'Design Systems Week settings.year Timetable',
    c = {},
    g = [
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
    ];
   function h(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsxs)(s.h1, { id: 'design-systems-week-settingsyear-timetable', children: ['Design Systems Week ', l.Ok, ' Timetable'] }) }), '\n', (0, i.jsx)(r.fz, { lead: !0, children: (0, i.jsxs)(s.p, { children: ['NL Design System is organising the Design Systems Week for the ', l.en.Z, ' time. It will feature a number of\nshort talks about the how and why of design systems. All online. From ', l.en.M, ', we will cover subjects\nlike managing design systems, integrating accessibility, user research and code.'] }) }), '\n', !l.dF && (0, i.jsx)(r.e2, { children: (0, i.jsxs)(r.vx, { href: '/events/design-systems-week/en', appearance: 'primary-action-button', children: ['About Design Systems Week', (0, i.jsx)(a.A, {})] }) }), '\n', !!l.dF && (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(r.e2, { children: [(0, i.jsxs)(r.vx, { href: `/events/design-systems-week-${l.Ok}/en/program`, appearance: 'primary-action-button', children: ['See the program', (0, i.jsx)(a.A, {})] }), !!l.MX && (0, i.jsxs)(r.vx, { href: l.MX, appearance: 'secondary-action-button', children: ['Use Miro', (0, i.jsx)(a.A, {})] })] }) }), '\n', '\n', '\n', '\n', !!l.dF && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)('hr', {}) }), '\n', (0, i.jsx)(s.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, i.jsxs)(s.p, { children: ['Design Systems Week is organised by the NL Design System core team, thanks to the support of the Ministry of the Interior and Kingdom Relations (BZK) and ', (0, i.jsx)(r.N_, { href: 'https://international.gebruikercentraal.nl', children: 'User Needs First' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), ". By signing up for one or more sessions you've agreed to these terms."] }), '\n', (0, i.jsx)(s.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, i.jsxs)(s.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at ', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: s } = { ...(0, o.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  59541(e, s, t) {
   (t(46447), t(86070));
  },
  64249(e, s, t) {
   t.d(s, { A: () => n });
   const n = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  86109(e) {
   e.exports = {};
  },
 },
]);
