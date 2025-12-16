'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65078],
 {
  37133: (e, n, t) => {
   t.d(n, { A: () => o });
   const o = t.p + 'assets/files/developer-open-hour-oneven-d27edd61ab5b5f8a02237f1137cb5082.ics';
  },
  40138: (e, n, t) => {
   t.d(n, { A: () => o });
   const o = t.p + 'assets/files/developer-open-hour-even-d9ba27a3557437eef96f200febd4a1b7.ics';
  },
  83135: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => d });
   const o = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden-success","title":"Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten","description":"Je bent nu aangemeld voor onze wekelijkse Developer Open Hour.","source":"@site/docs/community/events/developer-open-hour/aanmelden-success.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden/bedankt","permalink":"/events/developer-open-hour/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Developer Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/developer-open-hour/aanmelden/bedankt","unlisted":true}}');
   var s = t(86070),
    a = t(85248);
   const r = { title: 'Bedankt voor je aanmelding \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Developer Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden/bedankt', unlisted: !0 },
    i = 'Bedankt!',
    l = {},
    d = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze wekelijkse Developer Open Hour.' }), '\n', (0, s.jsx)(n.p, { children: 'We hebben bijeenkomsten op verschillende tijden bij even weken (11:00 uur) en oneven weken (13:00 uur):' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(40138).A + '', children: 'Voeg even weken toe aan je kalender (.ics)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(37133).A + '', children: 'Voeg oneven weken toe aan je kalender (.ics)' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => r, x: () => i });
   var o = t(30758);
   const s = {},
    a = o.createContext(s);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
