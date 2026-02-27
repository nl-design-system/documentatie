'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18426],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => d });
   var s = t(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), s.createElement(i.Provider, { value: n }, e.children));
   }
  },
  40054(e, n, t) {
   (t.r(n), t.d(n, { assets: () => r, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => s, toc: () => l }));
   const s = JSON.parse('{"id":"community/events/design-open-hour/aanmelden-success","title":"Bedankt voor je aanmelding","description":"Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.","source":"@site/docs/community/events/design-open-hour/aanmelden-success.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden/bedankt","permalink":"/events/design-open-hour/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden/bedankt","unlisted":true}}');
   var a = t(86070),
    i = t(18439);
   const o = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 },
    d = 'Bedankt!',
    r = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(96744).A + '', children: 'Voeg toe aan je kalender (.ics)' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  96744(e, n, t) {
   t.d(n, { A: () => s });
   const s = t.p + 'assets/files/design-open-hour-f4effbd4308d03aea8bb6b66d4f5b1b6.ics';
  },
 },
]);
