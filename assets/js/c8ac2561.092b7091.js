'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67586],
 {
  37482: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => s, default: () => m, frontMatter: () => o, metadata: () => r, toc: () => c });
   var a = t(52676),
    i = t(24785);
   const o = { title: 'Naamgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Naamgeving', sidebar_position: 2, pagination_label: 'Naamgeving', description: 'Naamgeving voor componenten, attributen en variaties', keywords: ['design token', 'design tokens', 'naamgeving'] },
    s = 'Naamgeving voor componenten, attributen en variaties',
    r = { id: 'handboek/naamgeving', title: 'Naamgeving', description: 'Naamgeving voor componenten, attributen en variaties', source: '@site/docs/handboek/naamgeving.mdx', sourceDirName: 'handboek', slug: '/handboek/naamgeving', permalink: '/handboek/naamgeving', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/naamgeving.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Naamgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Naamgeving', sidebar_position: 2, pagination_label: 'Naamgeving', description: 'Naamgeving voor componenten, attributen en variaties', keywords: ['design token', 'design tokens', 'naamgeving'] } },
    g = {},
    c = [];
   function d(e) {
    const n = { h1: 'h1', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(n.h1, { id: 'naamgeving-voor-componenten-attributen-en-variaties', children: 'Naamgeving voor componenten, attributen en variaties' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function s(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
