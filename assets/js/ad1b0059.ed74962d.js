'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31843],
 {
  18439(e, t, n) {
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
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), a.createElement(r.Provider, { value: t }, e.children));
   }
  },
  46253(e, t, n) {
   (n.r(t), n.d(t, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => i, metadata: () => a, toc: () => l }));
   const a = JSON.parse('{"id":"community/events/heartbeat/deelnemen","title":"Deel mee aan de Heartbeat","description":"Met onderstaande Microsoft Teams-link kun je deelnemen aan de Heartbeat:","source":"@site/docs/community/events/heartbeat/deelnemen.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/deelnemen","permalink":"/events/heartbeat/deelnemen","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/deelnemen.mdx","tags":[],"version":"current","frontMatter":{"title":"Deel mee aan de Heartbeat","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Deelnemen","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/deelnemen","unlisted":true}}');
   var s = n(86070),
    r = n(18439);
   const i = { title: 'Deel mee aan de Heartbeat', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Deelnemen', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/deelnemen', unlisted: !0 },
    o = 'Deel mee aan de Heartbeat!',
    d = {},
    l = [];
   function m(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: 'deel-mee-aan-de-heartbeat', children: 'Deel mee aan de Heartbeat!' }) }), '\n', (0, s.jsx)(t.p, { children: 'Met onderstaande Microsoft Teams-link kun je deelnemen aan de Heartbeat:' }), '\n', (0, s.jsx)(t.p, { children: (0, s.jsx)(t.a, { href: 'https://teams.microsoft.com/meet/39054458712259?p=gZ3QeP70yyScWdz2LG', children: 'Open de Heartbeat-meeting in Microsoft Teams' }) }), '\n', (0, s.jsx)(t.p, { children: 'Als deze Microsoft Teams-link ooit verandert, kun je altijd de meest recente link vinden op deze deelnemen-pagina!' })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
