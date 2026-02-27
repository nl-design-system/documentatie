'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14408],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => c });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  62120(e, n, t) {
   (t.r(n), t.d(n, { assets: () => a, contentTitle: () => c, default: () => l, frontMatter: () => r, metadata: () => o, toc: () => d }));
   const o = JSON.parse('{"id":"componenten/README","title":"Componenten Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","source":"@site/docs/componenten/README.mdx","sourceDirName":"componenten","slug":"/componenten/","permalink":"/componenten/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Componenten Overzicht","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Overzicht","sidebar_position":1,"pagination_label":"Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","keywords":["componenten","design system","overzicht","utrecht","den haag"]},"sidebar":"componenten","next":{"title":"Accordion","permalink":"/accordion"}}');
   var i = t(86070),
    s = t(18439);
   const r = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    c = 'Componenten',
    a = {},
    d = [];
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components },
     { ComponentOverview: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentOverview', !0),
     (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'componenten', children: 'Componenten' }) }), '\n', (0, i.jsxs)(n.p, { children: ['De componenten van NL Design System worden met een ', (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, i.jsx)(t, { headingLevel: 2 })] })
    );
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
