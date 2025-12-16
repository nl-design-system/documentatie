'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [62546],
 {
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
  98831: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => r, default: () => m, frontMatter: () => s, metadata: () => a, toc: () => d });
   const a = JSON.parse('{"id":"handboek/naamgeving","title":"Naamgeving \xb7 Handboek","description":"Naamgeving voor componenten, attributen en variaties","source":"@site/docs/handboek/naamgeving.mdx","sourceDirName":"handboek","slug":"/handboek/naamgeving","permalink":"/handboek/naamgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/naamgeving.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Naamgeving \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Naamgeving","sidebar_position":2,"pagination_label":"Naamgeving","description":"Naamgeving voor componenten, attributen en variaties","keywords":["design token","design tokens","naamgeving"]}}');
   var i = t(86070),
    o = t(85248);
   const s = { title: 'Naamgeving \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Naamgeving', sidebar_position: 2, pagination_label: 'Naamgeving', description: 'Naamgeving voor componenten, attributen en variaties', keywords: ['design token', 'design tokens', 'naamgeving'] },
    r = 'Naamgeving voor componenten, attributen en variaties',
    g = {},
    d = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'naamgeving-voor-componenten-attributen-en-variaties', children: 'Naamgeving voor componenten, attributen en variaties' }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
