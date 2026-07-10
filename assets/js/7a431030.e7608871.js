'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90174],
 {
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => c });
   var s = t(30758);
   const i = {},
    o = s.createContext(i);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  36858(e, n, t) {
   t.d(n, { A: () => s });
   const s = t.p + 'assets/files/2025-04-10-introduction-european-design-systems-a6cea9d18d92f7026245d9f390aa3eb0.ics';
  },
  66796(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, contentTitle: () => c, default: () => l, frontMatter: () => r, metadata: () => s, toc: () => a }));
   const s = JSON.parse('{"id":"community/events/introduction-european-design-systems-success","title":"Thanks for signing up for the Introduction into European Design Systems 2025!","description":"Signed up for Introduction into European Design Systems 2025.","source":"@site/docs/community/events/introduction-european-design-systems-success.mdx","sourceDirName":"community/events","slug":"/community/events/introduction-european-design-systems-2025/thanks","permalink":"/community/events/introduction-european-design-systems-2025/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for signing up for the Introduction into European Design Systems 2025!","hide_title":true,"hide_table_of_contents":false,"lang":"en","description":"Signed up for Introduction into European Design Systems 2025.","slug":"/community/events/introduction-european-design-systems-2025/thanks","unlisted":true,"keywords":["nl design system","User Needs First Conference"]}}');
   var i = t(86070),
    o = t(18439);
   const r = { title: 'Thanks for signing up for the Introduction into European Design Systems 2025!', hide_title: !0, hide_table_of_contents: !1, lang: 'en', description: 'Signed up for Introduction into European Design Systems 2025.', slug: '/community/events/introduction-european-design-systems-2025/thanks', unlisted: !0, keywords: ['nl design system', 'User Needs First Conference'] },
    c = 'Thanks for signing up',
    u = {},
    a = [];
   function d(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsxs)('div', { lang: 'en', children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'thanks-for-signing-up', children: 'Thanks for signing up' }) }), (0, i.jsx)(n.p, { children: 'You are now signed up for joining the session Introduction into European Design Systems on March 10th 2025 online.' }), (0, i.jsxs)(n.p, { children: ['This session is part of the International ', (0, i.jsx)(n.a, { href: 'https://international.gebruikercentraal.nl/conference2025', children: 'User Needs First Conference' }), ' which can also be attended in person.'] }), (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(36858).A + '', children: 'Add the invite to your calendar (.ics)' }) }), '\n'] })] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
