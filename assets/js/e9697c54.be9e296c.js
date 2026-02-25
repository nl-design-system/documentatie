'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50967],
 {
  18439(e, t, n) {
   n.d(t, { R: () => i, x: () => c });
   var o = n(30758);
   const s = {},
    r = o.createContext(s);
   function i(e) {
    const t = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(r.Provider, { value: t }, e.children));
   }
  },
  78521(e, t, n) {
   (n.r(t), n.d(t, { assets: () => l, contentTitle: () => c, default: () => p, frontMatter: () => i, metadata: () => o, toc: () => a }));
   const o = JSON.parse('{"id":"project/README","title":"Project","description":"{/ @license CC0-1.0 /}","source":"@site/docs/project/README.mdx","sourceDirName":"project","slug":"/project/","permalink":"/project/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Project","hide_title":true,"hide_table_of_contents":true},"sidebar":"project","next":{"title":"Over NL Design System","permalink":"/project/over-nl-design-system"}}');
   var s = n(86070),
    r = n(18439);
   const i = { title: 'Project', hide_title: !0, hide_table_of_contents: !0 },
    c = void 0,
    l = {},
    a = [];
   function d(e) {
    const t = { span: 'span', ...(0, r.R)(), ...e.components },
     { DocCardList: n, OverviewPage: o } = t;
    return (n || u('DocCardList', !0), o || u('OverviewPage', !0), (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(o, { excludeDocIDs: ['project/README', 'project/global-design-system'] }), '\n', (0, s.jsx)(n, { items: [{ type: 'link', href: '/project/global-design-system', label: (0, s.jsx)(t.span, { lang: 'en', children: 'Global Design System' }), description: (0, s.jsx)(t.span, { lang: 'en', children: 'Links to global design systems for governments.' }) }] })] }));
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e, t) {
    throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
 },
]);
