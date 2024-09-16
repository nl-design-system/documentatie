'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15504],
 {
  80208: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => r, toc: () => l });
   var t = n(52676),
    i = n(24785);
   const a = { title: 'Thanks for signing up!', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up/thanks', unlisted: !0 },
    o = 'Thanks!',
    r = { id: 'community/events/design-systems-week/sign-up-thanks', title: 'Thanks for signing up!', description: 'You are now signed up for Design Systems Week!', source: '@site/docs/community/events/design-systems-week/sign-up-thanks.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sign-up/thanks', permalink: '/events/design-systems-week/sign-up/thanks', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sign-up-thanks.mdx', tags: [], version: 'current', frontMatter: { title: 'Thanks for signing up!', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up/thanks', unlisted: !0 } },
    d = {},
    l = [];
   function c(e) {
    const s = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'thanks', children: 'Thanks!' }), '\n', (0, t.jsx)(s.p, { children: 'You are now signed up for Design Systems Week!' }), '\n', (0, t.jsx)(s.p, { children: (0, t.jsx)(s.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: n(51913).Z + '', children: 'Add to your calendar (.ics)' }) }), '\n', (0, t.jsx)(s.p, { children: 'See also:' }), '\n', (0, t.jsxs)(s.ul, { children: ['\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program', children: "Program of this year's Design Systems Week" }) }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program', children: "Videos of last year's Design Systems Week" }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, i.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  51913: (e, s, n) => {
   n.d(s, { Z: () => t });
   const t = n.p + 'assets/files/dsweek-2024-8ea220d16a74f3d91591ee3953b9a300.ics';
  },
  24785: (e, s, n) => {
   n.d(s, { Z: () => r, a: () => o });
   var t = n(75271);
   const i = {},
    a = t.createContext(i);
   function o(e) {
    const s = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function r(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
