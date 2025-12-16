'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65685],
 {
  35672: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => r, default: () => c, frontMatter: () => s, metadata: () => a, toc: () => l });
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden-bedankt","title":"Bedankt voor je aanmelding","description":"Je bent nu aangemeld voor onze mailinglist voor belangenorganisaties die meedenken met NL Design System.","source":"@site/docs/community/belangenorganisaties/aanmelden-bedankt.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden-bedankt","permalink":"/community/belangenorganisaties/aanmelden-bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding","hide_title":true,"hide_table_of_contents":false,"slug":"/community/belangenorganisaties/aanmelden-bedankt","unlisted":true}}');
   var i = t(86070),
    o = t(85248);
   const s = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, slug: '/community/belangenorganisaties/aanmelden-bedankt', unlisted: !0 },
    r = 'Bedankt voor je aanmelding!',
    d = {},
    l = [];
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'bedankt-voor-je-aanmelding', children: 'Bedankt voor je aanmelding!' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze mailinglist voor belangenorganisaties die meedenken met NL Design System.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => r });
   var a = t(30758);
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
