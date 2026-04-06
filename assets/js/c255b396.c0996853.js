'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93266],
 {
  18439(e, t, n) {
   n.d(t, { R: () => a, x: () => i });
   var r = n(30758);
   const s = {},
    u = r.createContext(s);
   function a(e) {
    const t = r.useContext(u);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), r.createElement(u.Provider, { value: t }, e.children));
   }
  },
  56166(e, t, n) {
   (n.r(t), n.d(t, { assets: () => o, contentTitle: () => i, default: () => l, frontMatter: () => a, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"handboek/developer/infrastructuur/index","title":"Infrastructuur","description":"Infrastructuur van NL Design System","source":"@site/docs/handboek/developer/05-infrastructuur/index.md","sourceDirName":"handboek/developer/05-infrastructuur","slug":"/handboek/developer/infrastructuur/","permalink":"/handboek/developer/infrastructuur/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/05-infrastructuur/index.md","tags":[],"version":"current","frontMatter":{"title":"Infrastructuur","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Infrastructuur","pagination_label":"Infrastructuur","description":"Infrastructuur van NL Design System","slug":"/handboek/developer/infrastructuur/"},"sidebar":"handboek","previous":{"title":"Design tokens vastleggen","permalink":"/handboek/developer/thema-maken/"},"next":{"title":"GitHub","permalink":"/github"}}');
   var s = n(86070),
    u = n(18439);
   const a = { title: 'Infrastructuur', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Infrastructuur', pagination_label: 'Infrastructuur', description: 'Infrastructuur van NL Design System', slug: '/handboek/developer/infrastructuur/' },
    i = 'Infrastructuur van NL Design System',
    o = {},
    c = [];
   function d(e) {
    const t = { h1: 'h1', header: 'header', ...(0, u.R)(), ...e.components },
     { OverviewPage: n } = t;
    return (
     n ||
      (function (e, t) {
       throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: 'infrastructuur-van-nl-design-system', children: 'Infrastructuur van NL Design System' }) }), '\n', (0, s.jsx)(n, { excludeDocIDs: ['handboek/developer/infrastructuur/index'] })] })
    );
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
