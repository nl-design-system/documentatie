'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [97146],
 {
  85248: (e, n, o) => {
   o.d(n, { R: () => s, x: () => d });
   var t = o(30758);
   const r = {},
    i = t.createContext(r);
   function s(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
  86815: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => l, contentTitle: () => d, default: () => b, frontMatter: () => s, metadata: () => t, toc: () => a });
   const t = JSON.parse('{"id":"voorbeelden/introductie","title":"Introductie \xb7 Voorbeelden","description":"Voorbeelden van veelvoorkomende pagina\'s en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.","source":"@site/docs/voorbeelden/introductie.mdx","sourceDirName":"voorbeelden","slug":"/voorbeelden","permalink":"/voorbeelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/introductie.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie \xb7 Voorbeelden","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie","sidebar_position":1,"pagination_label":"Index","description":"Voorbeelden van veelvoorkomende pagina\'s en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.","slug":"/voorbeelden","keywords":["index","voorbeelden","patronen","templates","gebruikersonderzoek"]},"sidebar":"voorbeelden","next":{"title":"Index","permalink":"/voorbeelden"}}');
   var r = o(86070),
    i = o(85248);
   const s = { title: 'Introductie \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Index', description: "Voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.", slug: '/voorbeelden', keywords: ['index', 'voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    d = 'Voorbeelden',
    l = {},
    a = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'voorbeelden', children: 'Voorbeelden' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System verzamelt hier voorbeelden van veelvoorkomende patronen en templates voor digitale diensten. Deze voorbeelden zijn ontwikkeld door verschillende organisaties op basis van de richtlijnen en componenten van NL Design System.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates/', children: 'Bekijk de patronen en templates' }) }), '\n', (0, r.jsx)(n.p, { children: 'De uitgangspunten zijn toegankelijkheid, gebruiksvriendelijkheid en consistentie. Deze worden onderbouwd met gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/voorbeelden/onderzoek/', children: 'Lees meer over gebruikersonderzoek' }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
