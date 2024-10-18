'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69592],
 {
  97697: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => m, contentTitle: () => r, default: () => c, frontMatter: () => a, metadata: () => s, toc: () => d });
   var t = o(52676),
    i = o(24785);
   const a = { title: 'Componenten maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Componenten maken', pagination_label: 'Componenten maken', description: 'Eigen componenten maken voor NL Design System', keywords: ['developer', 'bijdragen', 'componenten maken'] },
    r = 'Eigen componenten maken voor NL Design System',
    s = { id: 'handboek/developer/componenten-maken', title: 'Componenten maken \xb7 Developer \xb7 Handboek', description: 'Eigen componenten maken voor NL Design System', source: '@site/docs/handboek/developer/07-componenten-maken.md', sourceDirName: 'handboek/developer', slug: '/handboek/developer/componenten-maken', permalink: '/en/handboek/developer/componenten-maken', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/07-componenten-maken.md', tags: [], version: 'current', sidebarPosition: 7, frontMatter: { title: 'Componenten maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Componenten maken', pagination_label: 'Componenten maken', description: 'Eigen componenten maken voor NL Design System', keywords: ['developer', 'bijdragen', 'componenten maken'] }, sidebar: 'handboek', previous: { title: 'Component uitbreiden', permalink: '/en/handboek/developer/component-uitbreiden' }, next: { title: 'Meewerken', permalink: '/en/handboek/developer/meewerken-als-developer' } },
    m = {},
    d = [];
   function p(e) {
    const n = { h1: 'h1', ...(0, i.a)(), ...e.components };
    return (0, t.jsx)(n.h1, { id: 'eigen-componenten-maken-voor-nl-design-system', children: 'Eigen componenten maken voor NL Design System' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => r });
   var t = o(75271);
   const i = {},
    a = t.createContext(i);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
