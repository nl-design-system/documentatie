'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15504],
 {
  90761: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => c, default: () => d, frontMatter: () => o, metadata: () => r, toc: () => m });
   var s = n(52676),
    i = n(24785);
   const o = {},
    c = void 0,
    r = { id: 'community/events/design-systems-week/sign-up-thanks', title: 'sign-up-thanks', description: '', source: '@site/docs/community/events/design-systems-week/sign-up-thanks.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/community/events/design-systems-week/sign-up-thanks', permalink: '/community/events/design-systems-week/sign-up-thanks', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sign-up-thanks.mdx', tags: [], version: 'current', frontMatter: {} },
    u = {},
    m = [];
   function a(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a();
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => c });
   var s = n(75271);
   const i = {},
    o = s.createContext(i);
   function c(e) {
    const t = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : c(e.components)), s.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
