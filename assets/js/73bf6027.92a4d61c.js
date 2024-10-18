'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96103],
 {
  53875: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => r, default: () => m, frontMatter: () => i, metadata: () => o, toc: () => l });
   var a = n(52676),
    s = n(24785);
   const i = { title: 'Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    o = { id: 'community/events/heartbeat/aanmelden-success', title: 'Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten', description: 'Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.', source: '@site/docs/community/events/heartbeat/aanmelden-success.mdx', sourceDirName: 'community/events/heartbeat', slug: '/events/heartbeat/aanmelden/bedankt', permalink: '/events/heartbeat/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden/bedankt', unlisted: !0 } },
    d = {},
    l = [];
   function c(e) {
    const t = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, a.jsx)(t.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.' }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: n(29560).Z + '', children: 'Voeg toe aan je kalender (.ics)' }) }), '\n', (0, a.jsx)(t.p, { children: 'Zie ook:' }), '\n', (0, a.jsxs)(t.ul, { children: ['\n', (0, a.jsx)(t.li, { children: (0, a.jsx)(t.a, { href: '/events/heartbeat/videos', children: "Video's van eerdere Heartbeats" }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  29560: (e, t, n) => {
   n.d(t, { Z: () => a });
   const a = n.p + 'assets/files/heartbeat-6b4da003e651efaa9192a8bf111929b0.ics';
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => o, a: () => r });
   var a = n(75271);
   const s = {},
    i = a.createContext(s);
   function r(e) {
    const t = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), a.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
