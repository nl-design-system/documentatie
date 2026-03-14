'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50967],
 {
  18439(e, t, n) {
   n.d(t, { R: () => i, x: () => c });
   var s = n(30758);
   const o = {},
    r = s.createContext(o);
   function i(e) {
    const t = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(r.Provider, { value: t }, e.children));
   }
  },
  78521(e, t, n) {
   (n.r(t), n.d(t, { assets: () => l, contentTitle: () => c, default: () => d, frontMatter: () => i, metadata: () => s, toc: () => a }));
   const s = JSON.parse('{"id":"project/README","title":"Project","description":"Over het project NL Design System","source":"@site/docs/project/README.mdx","sourceDirName":"project","slug":"/project/","permalink":"/project/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Project","description":"Over het project NL Design System","hide_title":true,"hide_table_of_contents":true},"sidebar":"project","next":{"title":"Over NL Design System","permalink":"/project/over-nl-design-system"}}');
   var o = n(86070),
    r = n(18439);
   const i = { title: 'Project', description: 'Over het project NL Design System', hide_title: !0, hide_table_of_contents: !0 },
    c = void 0,
    l = {},
    a = [];
   function p(e) {
    const t = { span: 'span', ...(0, r.R)(), ...e.components },
     { DocCardList: n, OverviewPage: s } = t;
    return (n || m('DocCardList', !0), s || m('OverviewPage', !0), (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(s, { excludeDocIDs: ['project/README', 'project/global-design-system'] }), '\n', (0, o.jsx)(n, { items: [{ type: 'link', href: '/project/global-design-system', label: (0, o.jsx)(t.span, { lang: 'en', children: 'Global Design System' }), description: (0, o.jsx)(t.span, { lang: 'en', children: 'Links to global design systems for governments.' }) }] })] }));
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e, t) {
    throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
 },
]);
