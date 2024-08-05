'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [56327],
 {
  29977: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => d, default: () => c, frontMatter: () => i, metadata: () => o, toc: () => r });
   var s = t(52676),
    a = t(24785);
   const i = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden/bedankt', unlisted: !0 },
    d = 'Bedankt!',
    o = { id: 'community/events/design-systems-week/aanmelden-bedankt', title: 'Bedankt voor je aanmelding', description: 'Je bent nu aangemeld voor Design Systems Week!', source: '@site/docs/community/events/design-systems-week/aanmelden-bedankt.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden/bedankt', permalink: '/events/design-systems-week/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden-bedankt.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden/bedankt', unlisted: !0 } },
    l = {},
    r = [];
   function m(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, s.jsx)(n.p, { children: 'Je bent nu aangemeld voor Design Systems Week!' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(29560).Z + '', children: 'Voeg toe aan je kalender (.ics)' }) }), '\n', (0, s.jsx)(n.p, { children: 'Zie ook:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/events/design-systems-week-2024/programma', children: 'Programma voor Design Systems Week 2024' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/events/design-systems-week-2023/programma', children: "Video's van Design Systems Week 2023" }) }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  29560: (e, n, t) => {
   t.d(n, { Z: () => s });
   const s = t.p + 'assets/files/heartbeat-6b4da003e651efaa9192a8bf111929b0.ics';
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => d });
   var s = t(75271);
   const a = {},
    i = s.createContext(a);
   function d(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : d(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
