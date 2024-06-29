'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [25616],
 {
  48392: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => l, default: () => r, frontMatter: () => i, metadata: () => s, toc: () => d });
   var a = t(52676),
    o = t(24785);
   const i = { title: 'Hall of Fame stappenplan', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Hall of Fame componenten', sidebar_position: 4, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    l = 'Stappenplan: Hall of Fame',
    s = { id: 'handboek/hall-of-fame-stappenplan', title: 'Hall of Fame stappenplan', description: 'Stappen voor de Hall of Fame fase van Definition of Done', source: '@site/docs/handboek/hall-of-fame-stappenplan.mdx', sourceDirName: 'handboek', slug: '/handboek/hall-of-fame-stappenplan', permalink: '/en/handboek/hall-of-fame-stappenplan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/hall-of-fame-stappenplan.mdx', tags: [], version: 'current', sidebarPosition: 4, frontMatter: { title: 'Hall of Fame stappenplan', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Hall of Fame componenten', sidebar_position: 4, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] }, sidebar: 'handboek', previous: { title: 'Candidate', permalink: '/en/handboek/candidate-stappenplan' }, next: { title: 'Design Tokens - Introductie', permalink: '/en/handboek/design-tokens/' } },
    p = {},
    d = [];
   function f(e) {
    const n = { h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'stappenplan-hall-of-fame', children: 'Stappenplan: Hall of Fame' }), '\n', (0, a.jsx)(n.p, { children: 'Dit stappenplan is nog in ontwikkeling.' })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var a = t(75271);
   const o = {},
    i = a.createContext(o);
   function l(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
