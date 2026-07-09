'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [24874],
 {
  7310(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => v, frontMatter: () => r, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"handboek/developer/conventies/index","title":"Conventies","description":"Conventies van NL Design System","source":"@site/docs/handboek/developer/03-conventies/index.mdx","sourceDirName":"handboek/developer/03-conventies","slug":"/handboek/developer/conventies/","permalink":"/handboek/developer/conventies/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-conventies/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Conventies","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Conventies","pagination_label":"Conventies","description":"Conventies van NL Design System","slug":"/handboek/developer/conventies/"},"sidebar":"handboek","previous":{"title":"Migreer van een CDN naar pnpm","permalink":"/handboek/developer/cdn-migratie/"},"next":{"title":"Design Token conventie","permalink":"/handboek/developer/design-token-conventie/"}}');
   var i = t(86070),
    s = t(18439);
   const r = { title: 'Conventies', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Conventies', pagination_label: 'Conventies', description: 'Conventies van NL Design System', slug: '/handboek/developer/conventies/' },
    a = 'Conventies van NL Design System',
    d = {},
    c = [];
   function l(e) {
    const n = { h1: 'h1', header: 'header', ...(0, s.R)(), ...e.components },
     { OverviewPage: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'conventies-van-nl-design-system', children: 'Conventies van NL Design System' }) }), '\n', (0, i.jsx)(t, { excludeDocIDs: ['handboek/developer/conventies/index'] })] })
    );
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => a });
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
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
 },
]);
