'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48074],
 {
  85585: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => a, default: () => c, frontMatter: () => l, metadata: () => i, toc: () => d });
   var s = n(52676),
    o = n(40139);
   const l = { title: 'Templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Templates', sidebar_position: 1, pagination_label: 'Templates', description: 'Templates', keywords: ['index', 'voorbeelden', 'templates'] },
    a = 'Templates',
    i = { id: 'voorbeelden/templates/README', title: 'Templates \xb7 Voorbeelden', description: 'Templates', source: '@site/docs/voorbeelden/templates/README.md', sourceDirName: 'voorbeelden/templates', slug: '/voorbeelden/templates/', permalink: '/voorbeelden/templates/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/templates/README.md', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Templates \xb7 Voorbeelden', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Templates', sidebar_position: 1, pagination_label: 'Templates', description: 'Templates', keywords: ['index', 'voorbeelden', 'templates'] } },
    r = {},
    d = [];
   function p(e) {
    const t = { h1: 'h1', ...(0, o.a)(), ...e.components };
    return (0, s.jsx)(t.h1, { id: 'templates', children: 'Templates' });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  40139: (e, t, n) => {
   n.d(t, { Z: () => i, a: () => a });
   var s = n(75271);
   const o = {},
    l = s.createContext(o);
   function a(e) {
    const t = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function i(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(l.Provider, { value: t }, e.children);
   }
  },
 },
]);
