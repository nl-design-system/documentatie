'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17066],
 {
  34064: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => i, metadata: () => a, toc: () => l });
   const a = JSON.parse('{"id":"community/events/heartbeat/aanmelden-success","title":"Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten","description":"Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.","source":"@site/docs/community/events/heartbeat/aanmelden-success.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/aanmelden/bedankt","permalink":"/events/heartbeat/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/aanmelden/bedankt","unlisted":true}}');
   var s = n(86070),
    r = n(85248);
   const i = { title: 'Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden/bedankt', unlisted: !0 },
    o = 'Bedankt!',
    d = {},
    l = [];
   function c(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, s.jsx)(t.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.' }), '\n', (0, s.jsx)(t.p, { children: (0, s.jsx)(t.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: n(62047).A + '', children: 'Voeg toe aan je kalender (.ics)' }) }), '\n', (0, s.jsx)(t.p, { children: 'Zie ook:' }), '\n', (0, s.jsxs)(t.ul, { children: ['\n', (0, s.jsx)(t.li, { children: (0, s.jsx)(t.a, { href: '/events/heartbeat/videos/', children: "Video's van eerdere Heartbeats" }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  62047: (e, t, n) => {
   n.d(t, { A: () => a });
   const a = n.p + 'assets/files/heartbeat-de3d4e9cd3a5ca159b02ac021e705fc8.ics';
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => i, x: () => o });
   var a = n(30758);
   const s = {},
    r = a.createContext(s);
   function i(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), a.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
