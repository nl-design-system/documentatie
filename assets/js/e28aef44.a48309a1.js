'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21010],
 {
  33478: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => l, contentTitle: () => s, default: () => b, frontMatter: () => i, metadata: () => d, toc: () => a });
   var t = o(52676),
    r = o(40139);
   const i = { title: 'Introductie \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Index', description: "Voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.", slug: '/voorbeelden', keywords: ['index', 'voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] },
    s = 'Voorbeelden',
    d = { id: 'voorbeelden/introductie', title: 'Introductie \xb7 Voorbeelden', description: "Voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.", source: '@site/docs/voorbeelden/introductie.mdx', sourceDirName: 'voorbeelden', slug: '/voorbeelden', permalink: '/voorbeelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/introductie.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Introductie \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Index', description: "Voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit NL Design System.", slug: '/voorbeelden', keywords: ['index', 'voorbeelden', 'patronen', 'templates', 'gebruikersonderzoek'] }, sidebar: 'voorbeelden', next: { title: 'Index', permalink: '/voorbeelden' } },
    l = {},
    a = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System verzamelt hier voorbeelden van veelvoorkomende patronen en templates voor digitale diensten. Deze voorbeelden zijn ontwikkeld door verschillende organisaties op basis van de richtlijnen en componenten van NL Design System.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/voorbeelden/patronen-en-templates', children: 'Bekijk de patronen en templates' }) }), '\n', (0, t.jsx)(n.p, { children: 'De uitgangspunten zijn toegankelijkheid, gebruiksvriendelijkheid en consistentie. Deze worden onderbouwd met gebruikersonderzoek.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/voorbeelden/onderzoek', children: 'Lees meer over gebruikersonderzoek' }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => d, a: () => s });
   var t = o(75271);
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
 },
]);
