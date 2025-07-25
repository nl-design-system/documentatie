'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7151],
 {
  15253: (e, n, s) => {
   s.r(n), s.d(n, { assets: () => g, contentTitle: () => r, default: () => m, frontMatter: () => o, metadata: () => a, toc: () => u });
   var t = s(52676),
    i = s(40139);
   const o = { title: 'Thanks for signing up! \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Signing up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up/thanks', unlisted: !0, displayed_sidebar: 'community' },
    r = 'Thanks for signing up for Design Systems Week!',
    a = { id: 'community/events/design-systems-week/en/sign-up-thanks', title: 'Thanks for signing up! \xb7 Design Systems Week', description: "Design Systems Week 2025 will be held from Oktober 27th to 30th. We are now busy preparing and curating the program, we'll keep you updated.", source: '@site/docs/community/events/design-systems-week/en/sign-up-thanks.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/sign-up/thanks', permalink: '/events/design-systems-week/en/sign-up/thanks', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up-thanks.mdx', tags: [], version: 'current', frontMatter: { title: 'Thanks for signing up! \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Signing up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up/thanks', unlisted: !0, displayed_sidebar: 'community' }, sidebar: 'community' },
    g = {},
    u = [];
   function d(e) {
    const n = { h1: 'h1', p: 'p', strong: 'strong', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'thanks-for-signing-up-for-design-systems-week', children: 'Thanks for signing up for Design Systems Week!' }), '\n', (0, t.jsxs)(n.p, { children: ['Design Systems Week 2025 will be held from ', (0, t.jsx)(n.strong, { children: 'Oktober 27th to 30th' }), ". We are now busy preparing and curating the program, we'll keep you updated."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  40139: (e, n, s) => {
   s.d(n, { Z: () => a, a: () => r });
   var t = s(75271);
   const i = {},
    o = t.createContext(i);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
