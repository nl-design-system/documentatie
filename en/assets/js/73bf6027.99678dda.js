'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96103],
 {
  53875: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => r, default: () => m, frontMatter: () => i, metadata: () => o, toc: () => l });
   var a = t(52676),
    s = t(24785);
   const i = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    o = { id: 'community/events/heartbeat/aanmelden-success', title: 'Bedankt voor je aanmelding', description: 'Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.', source: '@site/docs/community/events/heartbeat/aanmelden-success.mdx', sourceDirName: 'community/events/heartbeat', slug: '/events/heartbeat/aanmelden/bedankt', permalink: '/en/events/heartbeat/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden/bedankt', unlisted: !0 } },
    d = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, a.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(29560).Z + '', children: 'Voeg toe aan je kalender (.ics)' }) }), '\n', (0, a.jsx)(n.p, { children: 'Zie ook:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/events/heartbeat/videos', children: "Video's van eerdere Heartbeats" }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  29560: (e, n, t) => {
   t.d(n, { Z: () => a });
   const a = t.p + 'assets/files/heartbeat-6b4da003e651efaa9192a8bf111929b0.ics';
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => r });
   var a = t(75271);
   const s = {},
    i = a.createContext(s);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
