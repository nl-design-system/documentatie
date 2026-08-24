/*! For license information please see fddd8b30.bf29a531.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21242],
 {
  790(e) {
   e.exports = [];
  },
  18439(e, s, n) {
   n.d(s, { R: () => r, x: () => a });
   var t = n(30758);
   const i = {},
    o = t.createContext(i);
   function r(e) {
    const s = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(o.Provider, { value: s }, e.children));
   }
  },
  18652(e, s, n) {
   n.d(s, { A: () => o });
   var t = n(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, s, n, o) => {
    const r = (0, t.forwardRef)(({ color: n = 'currentColor', size: r = 24, stroke: a = 2, title: d, className: m, children: l, ...c }, g) => (0, t.createElement)('svg', { ref: g, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${s}`, m].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: a, stroke: n }), ...c }, [d && (0, t.createElement)('title', { key: 'svg-title' }, d), ...o.map(([e, s]) => (0, t.createElement)(e, s)), ...(Array.isArray(l) ? l : [l])]));
    return ((r.displayName = `${n}`), r);
   };
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  53190(e, s, n) {
   (n.r(s), n.d(s, { assets: () => c, contentTitle: () => l, default: () => k, frontMatter: () => m, metadata: () => t, toc: () => g }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/tijdschema","title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/tijdschema.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/tijdschema/","permalink":"/events/design-systems-week-2026/tijdschema/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/tijdschema.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","hide_table_of_contents":true,"sidebar_label":"Tijdschema","pagination_label":"Tijdschema","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/tijdschema/","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Programma","permalink":"/events/design-systems-week-2026/programma"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var i = n(86070),
    o = n(18439),
    r = n(46447),
    a = n(64249),
    d = (n(790), n(86109), n(59541), n(51130));
   const m = { title: 'Tijdschema', description: 'Tijdschema per dag voor de Design Systems Week 2026', hide_table_of_contents: !0, sidebar_label: 'Tijdschema', pagination_label: 'Tijdschema', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/tijdschema/', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    l = 'Tijdschema Design Systems Week settings.year',
    c = {},
    g = [
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function h(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsxs)(s.h1, { id: 'tijdschema-design-systems-week-settingsyear', children: ['Tijdschema Design Systems Week ', d.Ok] }) }), '\n', (0, i.jsx)(r.fz, { lead: !0, children: (0, i.jsxs)(s.p, { children: ['NL Design System organiseert in ', d.Ok, ' voor de ', d.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, i.jsx)('strong', { children: d.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, i.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', !d.dF && (0, i.jsx)(r.e2, { children: (0, i.jsxs)(r.vx, { href: '/events/design-systems-week/', appearance: 'primary-action-button', children: ['Over Design Systems Week', (0, i.jsx)(a.A, {})] }) }), '\n', !!d.dF && (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(r.e2, { children: [(0, i.jsxs)(r.vx, { href: `/events/design-systems-week-${d.Ok}/programma`, appearance: 'primary-action-button', children: ['Bekijk het programma', (0, i.jsx)(a.A, {})] }), !!d.MX && (0, i.jsxs)(r.vx, { href: d.MX, appearance: 'secondary-action-button', children: ['Gebruik Miro', (0, i.jsx)(a.A, {})] })] }) }), '\n', '\n', '\n', '\n', !!d.dF && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)('hr', {}) }), '\n', (0, i.jsx)(s.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System, vanuit Stichting ICTU, met dank aan het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties.' }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['Op Design Systems Week is de ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, i.jsx)(s.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, i.jsxs)(s.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function k(e = {}) {
    const { wrapper: s } = { ...(0, o.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  59541(e, s, n) {
   (n(46447), n(86070));
  },
  64249(e, s, n) {
   n.d(s, { A: () => t });
   const t = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  86109(e) {
   e.exports = {};
  },
 },
]);
