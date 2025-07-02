'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96597],
 {
  45339: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => i, default: () => r, frontMatter: () => l, metadata: () => s, toc: () => d });
   var a = t(52676),
    o = t(40139);
   const l = { title: 'Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Hall of Fame', sidebar_position: 6, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/hall-of-fame-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] },
    i = 'Stappenplan: Hall of Fame',
    s = { id: 'handboek/component-bijdragen/hall-of-fame-stappenplan', title: 'Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', description: 'Stappen voor de Hall of Fame fase van Definition of Done', source: '@site/docs/handboek/component-bijdragen/hall-of-fame-stappenplan.mdx', sourceDirName: 'handboek/component-bijdragen', slug: '/handboek/estafettemodel/componenten/hall-of-fame-stappenplan', permalink: '/handboek/estafettemodel/componenten/hall-of-fame-stappenplan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/component-bijdragen/hall-of-fame-stappenplan.mdx', tags: [], version: 'current', sidebarPosition: 6, frontMatter: { title: 'Hall of Fame stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Hall of Fame', sidebar_position: 6, pagination_label: 'Hall of Fame', description: 'Stappen voor de Hall of Fame fase van Definition of Done', slug: '/handboek/estafettemodel/componenten/hall-of-fame-stappenplan', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'hall of fame'] }, sidebar: 'handboek', previous: { title: 'Candidate', permalink: '/handboek/estafettemodel/componenten/candidate-stappenplan' }, next: { title: 'Voor designers', permalink: '/handboek/designer/overzicht' } },
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
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var a = t(75271);
   const o = {},
    l = a.createContext(o);
   function i(e) {
    const n = a.useContext(l);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), a.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
