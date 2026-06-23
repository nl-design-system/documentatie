'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54762],
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
  77773(e, t, n) {
   (n.r(t), n.d(t, { assets: () => a, contentTitle: () => c, default: () => p, frontMatter: () => i, metadata: () => o, toc: () => l }));
   const o = JSON.parse('{"id":"project/index","title":"Project","description":"Over het project NL Design System","source":"@site/docs/project/index.mdx","sourceDirName":"project","slug":"/project/","permalink":"/project/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Project","description":"Over het project NL Design System","page_layout":"overview","hide_title":true,"hide_table_of_contents":true},"sidebar":"project","next":{"title":"Over NL Design System","permalink":"/project/over-nl-design-system"}}');
   var s = n(86070),
    r = n(18439);
   const i = { title: 'Project', description: 'Over het project NL Design System', page_layout: 'overview', hide_title: !0, hide_table_of_contents: !0 },
    c = void 0,
    a = {},
    l = [];
   function d(e) {
    const { DocCardList: t, OverviewPage: n } = { ...(0, r.R)(), ...e.components };
    return (t || m('DocCardList', !0), n || m('OverviewPage', !0), (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n, { excludeDocIDs: ['project/index'] }), '\n', (0, s.jsx)(t, { items: [{ type: 'link', href: '/community/global-design-system/', label: 'Global Design System', labelLang: 'en', description: 'Links to global design systems for governments.', descriptionLang: 'en' }] })] }));
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function m(e, t) {
    throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
 },
]);
