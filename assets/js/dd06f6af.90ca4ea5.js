'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [18148],
 {
  47732: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => b, frontMatter: () => i, metadata: () => d, toc: () => a });
   var o = t(52676),
    r = t(87118);
   const i = { title: 'Overzicht \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Voorbeelden Overzicht', keywords: ['index', 'voorbeelden'] },
    s = 'Voorbeelden',
    d = { id: 'voorbeelden/README', title: 'Overzicht \xb7 Voorbeelden', description: 'Voorbeelden Overzicht', source: '@site/docs/voorbeelden/README.md', sourceDirName: 'voorbeelden', slug: '/voorbeelden/', permalink: '/voorbeelden/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/README.md', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Overzicht \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Voorbeelden Overzicht', keywords: ['index', 'voorbeelden'] }, sidebar: 'voorbeelden', next: { title: 'Overzicht', permalink: '/voorbeelden/onderzoek/' } },
    l = {},
    a = [];
   function c(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(n.p, { children: "Hier tonen we voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit het NL Design System. Deze voorbeelden zijn door diverse organisaties gemaakt op basis van documentatie, patronen en componenten van het NL Design System." }), '\n', (0, o.jsx)(n.p, { children: 'Op dit moment werken we hard om voorbeelden te delen. Hou deze pagina in de gaten!' })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  87118: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => s });
   var o = t(75271);
   const r = {},
    i = o.createContext(r);
   function s(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
