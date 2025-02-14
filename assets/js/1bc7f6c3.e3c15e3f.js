'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51237],
 {
  57032: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => o, metadata: () => r, toc: () => l });
   var s = t(52676),
    i = t(40139);
   const o = { title: 'Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 },
    a = 'Bedankt!',
    r = { id: 'community/events/design-open-hour/aanmelden-success', title: 'Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten', description: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.', source: '@site/docs/community/events/design-open-hour/aanmelden-success.mdx', sourceDirName: 'community/events/design-open-hour', slug: '/events/design-open-hour/aanmelden/bedankt', permalink: '/events/design-open-hour/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 } },
    d = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, s.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(43916).Z + '', children: 'Voeg toe aan je kalender (.ics)' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  43916: (e, n, t) => {
   t.d(n, { Z: () => s });
   const s = t.p + 'assets/files/design-open-hour-c558860df9b9c023aab6c7193073cb31.ics';
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var s = t(75271);
   const i = {},
    o = s.createContext(i);
   function a(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
