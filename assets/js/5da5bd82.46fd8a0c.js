'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [39528],
 {
  83010: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => r, contentTitle: () => o, default: () => h, frontMatter: () => a, metadata: () => g, toc: () => d });
   var t = i(52676),
    s = i(40139);
   const a = { title: 'Figma hygi\xebne \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma hygi\xebne', sidebar_position: 4, pagination_label: 'Figma hygi\xebne', description: 'Informatie voor designers over Figma hygi\xebne.', slug: '/handboek/designer/figma-hygiene', keywords: ['componenten', 'design system', 'figma', 'hygiene'] },
    o = 'Figma hygi\xebne',
    g = { id: 'handboek/designer/werken-met-nl-design-system/figma-hygiene', title: 'Figma hygi\xebne \xb7 Designer \xb7 Handboek', description: 'Informatie voor designers over Figma hygi\xebne.', source: '@site/docs/handboek/designer/werken-met-nl-design-system/figma-hygiene.mdx', sourceDirName: 'handboek/designer/werken-met-nl-design-system', slug: '/handboek/designer/figma-hygiene', permalink: '/handboek/designer/figma-hygiene', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/werken-met-nl-design-system/figma-hygiene.mdx', tags: [], version: 'current', sidebarPosition: 4, frontMatter: { title: 'Figma hygi\xebne \xb7 Designer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma hygi\xebne', sidebar_position: 4, pagination_label: 'Figma hygi\xebne', description: 'Informatie voor designers over Figma hygi\xebne.', slug: '/handboek/designer/figma-hygiene', keywords: ['componenten', 'design system', 'figma', 'hygiene'] }, sidebar: 'handboek', previous: { title: 'Figma stappenplan', permalink: '/handboek/designer/figma-stappenplan' }, next: { title: 'Werken met de Figma changelog', permalink: '/handboek/designer/werken-met-figma-changelog' } },
    r = {},
    d = [];
   function m(e) {
    const n = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'figma-hygi\xebne', children: 'Figma hygi\xebne' }), '\n', (0, t.jsx)(n.p, { children: 'Deze documentatie is nog in ontwikkeling.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => g, a: () => o });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function g(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
