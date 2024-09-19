'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [95594],
 {
  27925: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => u, frontMatter: () => a, metadata: () => i, toc: () => d });
   var o = t(52676),
    s = t(24785);
   const a = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    i = { id: 'community/events/developer-open-hour/aanmelden-success', title: 'Bedankt voor je aanmelding', description: 'Je bent nu aangemeld voor onze wekelijkse Developer Open Hour.', source: '@site/docs/community/events/developer-open-hour/aanmelden-success.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour/aanmelden/bedankt', permalink: '/events/developer-open-hour/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In het Developer Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden/bedankt', unlisted: !0 } },
    l = {},
    d = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, o.jsx)(n.p, { children: 'Je bent nu aangemeld voor onze wekelijkse Developer Open Hour.' }), '\n', (0, o.jsx)(n.p, { children: 'We hebben bijeenkomsten op verschillende tijden bij even weken (11:00 uur) en oneven weken (13:00 uur):' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(48707).Z + '', children: 'Voeg even weken toe aan je kalender (.ics)' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(69324).Z + '', children: 'Voeg oneven weken toe aan je kalender (.ics)' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  48707: (e, n, t) => {
   t.d(n, { Z: () => o });
   const o = t.p + 'assets/files/developer-open-hour-even-98adc3afa1de917e34ffae486438d6a0.ics';
  },
  69324: (e, n, t) => {
   t.d(n, { Z: () => o });
   const o = t.p + 'assets/files/developer-open-hour-oneven-6cfa924bf3b6c34eb196baa0cfb54ee3.ics';
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var o = t(75271);
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