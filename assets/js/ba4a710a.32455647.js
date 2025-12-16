'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84140],
 {
  68243: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => u, contentTitle: () => a, default: () => l, frontMatter: () => o, metadata: () => t, toc: () => g });
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up-thanks","title":"Thanks for signing up! \xb7 Design Systems Week","description":"Design Systems Week 2025 will be held from Oktober 27th to 30th. We are now busy preparing and curating the program, we\'ll keep you updated.","source":"@site/docs/community/events/design-systems-week/en/sign-up-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up/thanks","permalink":"/events/design-systems-week/en/sign-up/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for signing up! \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Signing up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up/thanks","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var i = n(86070),
    r = n(85248);
   const o = { title: 'Thanks for signing up! \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Signing up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up/thanks', unlisted: !0, displayed_sidebar: 'community' },
    a = 'Thanks for signing up for Design Systems Week!',
    u = {},
    g = [];
   function d(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'thanks-for-signing-up-for-design-systems-week', children: 'Thanks for signing up for Design Systems Week!' }) }), '\n', (0, i.jsxs)(s.p, { children: ['Design Systems Week 2025 will be held from ', (0, i.jsx)(s.strong, { children: 'Oktober 27th to 30th' }), ". We are now busy preparing and curating the program, we'll keep you updated."] })] });
   }
   function l(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  85248: (e, s, n) => {
   n.d(s, { R: () => o, x: () => a });
   var t = n(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const s = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
