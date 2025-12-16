'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18426],
 {
  40054: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => r, default: () => u, frontMatter: () => a, metadata: () => s, toc: () => l });
   const s = JSON.parse('{"id":"community/events/design-open-hour/aanmelden-success","title":"Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten","description":"Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.","source":"@site/docs/community/events/design-open-hour/aanmelden-success.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden/bedankt","permalink":"/events/design-open-hour/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden/bedankt","unlisted":true}}');
   var i = t(86070),
    o = t(85248);
   const a = { title: 'Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    d = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(56169).A + '', children: 'Voeg toe aan je kalender (.ics)' }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  56169: (e, n, t) => {
   t.d(n, { A: () => s });
   const s = t.p + 'assets/files/design-open-hour-51094cb693e927e39726c5650572743c.ics';
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => r });
   var s = t(30758);
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
