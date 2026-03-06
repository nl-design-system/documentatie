'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15008],
 {
  18439(e, n, t) {
   t.d(n, { R: () => d, x: () => l });
   var a = t(30758);
   const s = {},
    o = a.createContext(s);
   function d(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : d(e.components)), a.createElement(o.Provider, { value: n }, e.children));
   }
  },
  70177(e, n, t) {
   (t.r(n), t.d(n, { assets: () => i, contentTitle: () => l, default: () => p, frontMatter: () => d, metadata: () => a, toc: () => r }));
   const a = JSON.parse('{"id":"handboek/developer/aan-de-slag/index","title":"Aan de slag met NL Design System","description":"Als developer aan de slag met NL Design System","source":"@site/docs/handboek/developer/02-aan-de-slag/index.md","sourceDirName":"handboek/developer/02-aan-de-slag","slug":"/handboek/developer/aan-de-slag/","permalink":"/handboek/developer/aan-de-slag/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/02-aan-de-slag/index.md","tags":[],"version":"current","frontMatter":{"title":"Aan de slag met NL Design System","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aan de slag","pagination_label":"Aan de slag","description":"Als developer aan de slag met NL Design System"},"sidebar":"handboek","previous":{"title":"Introductie","permalink":"/handboek/developer/introductie"},"next":{"title":"Prototypes","permalink":"/handboek/developer/aan-de-slag/prototypes/"}}');
   var s = t(86070),
    o = t(18439);
   const d = { title: 'Aan de slag met NL Design System', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aan de slag', pagination_label: 'Aan de slag', description: 'Als developer aan de slag met NL Design System' },
    l = 'Als developer aan de slag met NL Design System',
    i = {},
    r = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', ...(0, o.R)(), ...e.components },
     { OverviewPage: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'als-developer-aan-de-slag-met-nl-design-system', children: 'Als developer aan de slag met NL Design System' }) }), '\n', (0, s.jsx)(t, { excludeDocIDs: ['handboek/developer/aan-de-slag/index'] })] })
    );
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
