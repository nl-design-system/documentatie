'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41787],
 {
  85248: (e, n, t) => {
   t.d(n, { R: () => d, x: () => a });
   var o = t(30758);
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
  92234: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => c, frontMatter: () => d, metadata: () => o, toc: () => p });
   const o = JSON.parse('{"id":"handboek/developer/component-uitbreiden","title":"Component uitbreiden \xb7 Developer \xb7 Handboek","description":"Hoe kun je een component uitbreiden","source":"@site/docs/handboek/developer/06-component-uitbreiden.md","sourceDirName":"handboek/developer","slug":"/handboek/developer/component-uitbreiden","permalink":"/handboek/developer/component-uitbreiden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/06-component-uitbreiden.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Component uitbreiden \xb7 Developer \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Component uitbreiden","pagination_label":"Component uitbreiden","description":"Hoe kun je een component uitbreiden","keywords":["developer","bijdragen"]},"sidebar":"handboek","previous":{"title":"Component inzetten","permalink":"/handboek/developer/component-inzetten"},"next":{"title":"Componenten maken","permalink":"/handboek/developer/componenten-maken"}}');
   var i = t(86070),
    r = t(85248);
   const d = { title: 'Component uitbreiden \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Component uitbreiden', pagination_label: 'Component uitbreiden', description: 'Hoe kun je een component uitbreiden', keywords: ['developer', 'bijdragen'] },
    a = 'Hoe kun je een bestaande component uitbreiden',
    s = {},
    p = [];
   function l(e) {
    const n = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'hoe-kun-je-een-bestaande-component-uitbreiden', children: 'Hoe kun je een bestaande component uitbreiden' }) });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
