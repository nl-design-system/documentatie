'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90676],
 {
  60759: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => s, default: () => c, frontMatter: () => o, metadata: () => d, toc: () => l });
   var a = t(52676),
    i = t(40139);
   const o = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, slug: '/community/belangenorganisaties/aanmelden-bedankt', unlisted: !0 },
    s = 'Bedankt voor je aanmelding!',
    d = { id: 'community/belangenorganisaties/aanmelden-bedankt', title: 'Bedankt voor je aanmelding', description: 'Je bent nu aangemeld voor onze mailinglist voor belangenorganisaties die meedenken met NL Design System.', source: '@site/docs/community/belangenorganisaties/aanmelden-bedankt.mdx', sourceDirName: 'community/belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden-bedankt', permalink: '/community/belangenorganisaties/aanmelden-bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden-bedankt.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, slug: '/community/belangenorganisaties/aanmelden-bedankt', unlisted: !0 } },
    r = {},
    l = [];
   function m(e) {
    const n = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'bedankt-voor-je-aanmelding', children: 'Bedankt voor je aanmelding!' }), '\n', (0, a.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze mailinglist voor belangenorganisaties die meedenken met NL Design System.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => s });
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
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
