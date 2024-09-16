'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [75386],
 {
  53307: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => i, default: () => f, frontMatter: () => o, metadata: () => c, toc: () => a });
   var r = n(52676),
    s = n(24785);
   const o = {},
    i = void 0,
    c = { id: 'project/nieuwsbrief', title: 'nieuwsbrief', description: '', source: '@site/docs/project/nieuwsbrief.mdx', sourceDirName: 'project', slug: '/project/nieuwsbrief', permalink: '/project/nieuwsbrief', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/nieuwsbrief.mdx', tags: [], version: 'current', frontMatter: {} },
    u = {},
    a = [];
   function d(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function f(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d();
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => c, a: () => i });
   var r = n(75271);
   const s = {},
    o = r.createContext(s);
   function i(e) {
    const t = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), r.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
