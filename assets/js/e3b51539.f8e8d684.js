'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20710],
 {
  32279: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => m, contentTitle: () => s, default: () => l, frontMatter: () => i, metadata: () => t, toc: () => d });
   const t = JSON.parse('{"id":"handboek/developer/componenten-maken","title":"Componenten maken \xb7 Developer \xb7 Handboek","description":"Eigen componenten maken voor NL Design System","source":"@site/docs/handboek/developer/07-componenten-maken.md","sourceDirName":"handboek/developer","slug":"/handboek/developer/componenten-maken","permalink":"/handboek/developer/componenten-maken","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/07-componenten-maken.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Componenten maken \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Componenten maken","pagination_label":"Componenten maken","description":"Eigen componenten maken voor NL Design System","keywords":["developer","bijdragen","componenten maken"]},"sidebar":"handboek","previous":{"title":"Component uitbreiden","permalink":"/handboek/developer/component-uitbreiden"},"next":{"title":"Meewerken","permalink":"/handboek/developer/meewerken-als-developer"}}');
   var a = o(86070),
    r = o(85248);
   const i = { title: 'Componenten maken \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Componenten maken', pagination_label: 'Componenten maken', description: 'Eigen componenten maken voor NL Design System', keywords: ['developer', 'bijdragen', 'componenten maken'] },
    s = 'Eigen componenten maken voor NL Design System',
    m = {},
    d = [];
   function p(e) {
    const n = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'eigen-componenten-maken-voor-nl-design-system', children: 'Eigen componenten maken voor NL Design System' }) });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => i, x: () => s });
   var t = o(30758);
   const a = {},
    r = t.createContext(a);
   function i(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
