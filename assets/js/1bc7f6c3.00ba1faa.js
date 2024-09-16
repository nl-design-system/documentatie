'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51237],
 {
  79201: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => o, default: () => u, frontMatter: () => i, metadata: () => d, toc: () => l });
   var s = t(52676),
    a = t(24785);
   const i = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 },
    o = 'Bedankt!',
    d = { id: 'community/events/design-open-hour/aanmelden-success', title: 'Bedankt voor je aanmelding', description: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.', source: '@site/docs/community/events/design-open-hour/aanmelden-success.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden/bedankt', permalink: '/events/design-open-hour/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 } },
    r = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, s.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(43916).Z + '', children: 'Voeg toe aan je kalender (.ics)' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  43916: (e, n, t) => {
   t.d(n, { Z: () => s });
   const s = t.p + 'assets/files/design-open-hour-6cdeefbe4941dc951a49c6abb6edab34.ics';
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var s = t(75271);
   const a = {},
    i = s.createContext(a);
   function o(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
