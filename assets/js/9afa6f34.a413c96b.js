'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84839],
 {
  18439(e, n, t) {
   t.d(n, { R: () => d, x: () => r });
   var s = t(30758);
   const o = {},
    i = s.createContext(o);
   function d(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), s.createElement(i.Provider, { value: n }, e.children));
   }
  },
  77091(e, n, t) {
   (t.r(n), t.d(n, { assets: () => a, contentTitle: () => r, default: () => g, frontMatter: () => d, metadata: () => s, toc: () => l }));
   const s = JSON.parse('{"id":"handboek/developer/design-tokens/index","title":"Design tokens","description":"NL Design System Design tokens","source":"@site/docs/handboek/developer/04-design-tokens/index.md","sourceDirName":"handboek/developer/04-design-tokens","slug":"/handboek/developer/design-tokens/","permalink":"/handboek/developer/design-tokens/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/04-design-tokens/index.md","tags":[],"version":"current","frontMatter":{"title":"Design tokens","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design tokens","pagination_label":"Design tokens","description":"NL Design System Design tokens","slug":"/handboek/developer/design-tokens/"},"sidebar":"handboek","previous":{"title":"Deprecation","permalink":"/handboek/developer/deprecation-conventie/"},"next":{"title":"Design tokens vastleggen","permalink":"/handboek/developer/thema-maken/"}}');
   var o = t(86070),
    i = t(18439);
   const d = { title: 'Design tokens', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design tokens', pagination_label: 'Design tokens', description: 'NL Design System Design tokens', slug: '/handboek/developer/design-tokens/' },
    r = 'Design tokens',
    a = {},
    l = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', ...(0, i.R)(), ...e.components },
     { OverviewPage: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'design-tokens', children: 'Design tokens' }) }), '\n', (0, o.jsx)(t, { excludeDocIDs: ['handboek/developer/design-tokens/index'] })] })
    );
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
