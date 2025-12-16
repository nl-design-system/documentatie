'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30295],
 {
  14334: (e, n, t) => {
   t.d(n, { A: () => o });
   const o = t.p + 'assets/files/2024-10-18-dfdf6e8078bec71bed0da2b6247df672.ics';
  },
  51936: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => u, frontMatter: () => m, metadata: () => o, toc: () => r });
   const o = JSON.parse('{"id":"community/events/community-bijeenkomst-2-success","title":"Bedankt voor je aanmelding \xb7 Communitybijeenkomst \xb7 Bijeenkomsten","description":"Je bent nu aangemeld voor de communitybijeenkomst.","source":"@site/docs/community/events/community-bijeenkomst-2-success.mdx","sourceDirName":"community/events","slug":"/community/communitybijeenkomst-18-10-2024/bedankt","permalink":"/community/communitybijeenkomst-18-10-2024/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Communitybijeenkomst \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"description":"Je bent nu aangemeld voor de communitybijeenkomst.","slug":"/community/communitybijeenkomst-18-10-2024/bedankt","unlisted":true,"keywords":["nl design system"]}}');
   var s = t(86070),
    i = t(85248);
   const m = { title: 'Bedankt voor je aanmelding \xb7 Communitybijeenkomst \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, description: 'Je bent nu aangemeld voor de communitybijeenkomst.', slug: '/community/communitybijeenkomst-18-10-2024/bedankt', unlisted: !0, keywords: ['nl design system'] },
    c = 'Leuk dat je erbij bent!',
    d = {},
    r = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'leuk-dat-je-erbij-bent', children: 'Leuk dat je erbij bent!' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je bent nu aangemeld voor de communitybijeenkomst op 18 oktober 2024.' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(14334).A + '', children: 'Voeg toe aan je kalender (.ics)' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => m, x: () => c });
   var o = t(30758);
   const s = {},
    i = o.createContext(s);
   function m(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : m(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
