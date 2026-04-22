'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46236],
 {
  18439(e, t, o) {
   o.d(t, { R: () => a, x: () => d });
   var n = o(30758);
   const s = {},
    r = n.createContext(s);
   function a(e) {
    const t = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function d(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), n.createElement(r.Provider, { value: t }, e.children));
   }
  },
  76266(e, t, o) {
   (o.r(t), o.d(t, { assets: () => i, contentTitle: () => d, default: () => c, frontMatter: () => a, metadata: () => n, toc: () => p }));
   const n = JSON.parse('{"id":"handboek/developer/aan-de-slag/prototypes/index","title":"Prototypes met NL Design System","description":"Als developer prototypes maken met NL Design System","source":"@site/docs/handboek/developer/02-aan-de-slag/01-prototypes/index.md","sourceDirName":"handboek/developer/02-aan-de-slag/01-prototypes","slug":"/handboek/developer/prototypes/","permalink":"/handboek/developer/prototypes/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/02-aan-de-slag/01-prototypes/index.md","tags":[],"version":"current","frontMatter":{"title":"Prototypes met NL Design System","title_sm":"Prototypes","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Prototypes","pagination_label":"Prototypes","description":"Als developer prototypes maken met NL Design System","slug":"/handboek/developer/prototypes/"},"sidebar":"handboek","previous":{"title":"Aan de slag","permalink":"/handboek/developer/aan-de-slag/"},"next":{"title":"Prototypes zonder front-end framework","permalink":"/handboek/developer/prototypes/zonder-front-end-framework/"}}');
   var s = o(86070),
    r = o(18439);
   const a = { title: 'Prototypes met NL Design System', title_sm: 'Prototypes', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Prototypes', pagination_label: 'Prototypes', description: 'Als developer prototypes maken met NL Design System', slug: '/handboek/developer/prototypes/' },
    d = 'Prototypes met NL Design System',
    i = {},
    p = [];
   function l(e) {
    const t = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components },
     { OverviewPage: o } = t;
    return (
     o ||
      (function (e, t) {
       throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: 'prototypes-met-nl-design-system', children: 'Prototypes met NL Design System' }) }), '\n', (0, s.jsx)(o, { excludeDocIDs: ['handboek/developer/aan-de-slag/prototypes/index'] })] })
    );
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
