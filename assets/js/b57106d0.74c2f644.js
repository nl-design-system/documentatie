'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [18419],
 {
  73134: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => o, default: () => k, frontMatter: () => r, metadata: () => d, toc: () => a });
   var s = t(52676),
    i = t(40139);
   const r = { title: 'Werken met NL Design System \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Werken met NL Design System', sidebar_position: 1, pagination_label: 'Werken met NL Design System', description: 'Informatie voor designers hoe je kunt werken met NL Design System.', slug: '/handboek/designer/werken-met-nl-design-system', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'figma'] },
    o = 'Werken met NL Design System',
    d = { id: 'handboek/designer/werken-met-nl-design-system/werken-met-nl-design-system', title: 'Werken met NL Design System \xb7 Designer \xb7 Handboek', description: 'Informatie voor designers hoe je kunt werken met NL Design System.', source: '@site/docs/handboek/designer/werken-met-nl-design-system/werken-met-nl-design-system.mdx', sourceDirName: 'handboek/designer/werken-met-nl-design-system', slug: '/handboek/designer/werken-met-nl-design-system', permalink: '/handboek/designer/werken-met-nl-design-system', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/werken-met-nl-design-system/werken-met-nl-design-system.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Werken met NL Design System \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Werken met NL Design System', sidebar_position: 1, pagination_label: 'Werken met NL Design System', description: 'Informatie voor designers hoe je kunt werken met NL Design System.', slug: '/handboek/designer/werken-met-nl-design-system', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'figma'] }, sidebar: 'handboek', previous: { title: 'Index', permalink: '/handboek/designer/introductie' }, next: { title: 'Figma structuur', permalink: '/handboek/designer/figma-structuur' } },
    m = {},
    a = [];
   function g(e) {
    const n = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'werken-met-nl-design-system', children: 'Werken met NL Design System' }), '\n', (0, s.jsx)(n.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var s = t(75271);
   const i = {},
    r = s.createContext(i);
   function o(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
