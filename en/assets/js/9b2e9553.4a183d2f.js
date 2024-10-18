'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [85063],
 {
  44997: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => d, default: () => u, frontMatter: () => r, metadata: () => a, toc: () => p });
   var o = t(52676),
    i = t(24785);
   const r = { title: 'Component uitbreiden \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component uitbreiden', pagination_label: 'Component uitbreiden', description: 'Hoe kun je een component uitbreiden', keywords: ['developer', 'bijdragen'] },
    d = 'Hoe kun je een bestaande component uitbreiden',
    a = { id: 'handboek/developer/component-uitbreiden', title: 'Component uitbreiden \xb7 Developer \xb7 Handboek', description: 'Hoe kun je een component uitbreiden', source: '@site/docs/handboek/developer/06-component-uitbreiden.md', sourceDirName: 'handboek/developer', slug: '/handboek/developer/component-uitbreiden', permalink: '/en/handboek/developer/component-uitbreiden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/06-component-uitbreiden.md', tags: [], version: 'current', sidebarPosition: 6, frontMatter: { title: 'Component uitbreiden \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component uitbreiden', pagination_label: 'Component uitbreiden', description: 'Hoe kun je een component uitbreiden', keywords: ['developer', 'bijdragen'] }, sidebar: 'handboek', previous: { title: 'Component inzetten', permalink: '/en/handboek/developer/component-inzetten' }, next: { title: 'Componenten maken', permalink: '/en/handboek/developer/componenten-maken' } },
    s = {},
    p = [];
   function c(e) {
    const n = { h1: 'h1', ...(0, i.a)(), ...e.components };
    return (0, o.jsx)(n.h1, { id: 'hoe-kun-je-een-bestaande-component-uitbreiden', children: 'Hoe kun je een bestaande component uitbreiden' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => d });
   var o = t(75271);
   const i = {},
    r = o.createContext(i);
   function d(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
