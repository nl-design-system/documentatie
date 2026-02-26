'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84140],
 {
  18439(e, n, s) {
   s.d(n, { R: () => o, x: () => a });
   var t = s(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  68243(e, n, s) {
   (s.r(n), s.d(n, { assets: () => u, contentTitle: () => a, default: () => l, frontMatter: () => o, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up-thanks","title":"Thanks for signing up!","description":"Design Systems Week 2025 will be held from Oktober 27th to 30th. We are now busy preparing and curating the program, we\'ll keep you updated.","source":"@site/docs/community/events/design-systems-week/en/sign-up-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up/thanks","permalink":"/events/design-systems-week/en/sign-up/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for signing up!","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Signing up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up/thanks","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var i = s(86070),
    r = s(18439);
   const o = { title: 'Thanks for signing up!', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Signing up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up/thanks', unlisted: !0, displayed_sidebar: 'community' },
    a = 'Thanks for signing up for Design Systems Week!',
    u = {},
    d = [];
   function g(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'thanks-for-signing-up-for-design-systems-week', children: 'Thanks for signing up for Design Systems Week!' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Design Systems Week 2025 will be held from ', (0, i.jsx)(n.strong, { children: 'Oktober 27th to 30th' }), ". We are now busy preparing and curating the program, we'll keep you updated."] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
