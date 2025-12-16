'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8198],
 {
  85248: (e, n, t) => {
   t.d(n, { R: () => d, x: () => a });
   var o = t(30758);
   const s = {},
    i = o.createContext(s);
   function d(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : d(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
  85491: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => u, frontMatter: () => d, metadata: () => o, toc: () => g });
   const o = JSON.parse('{"id":"community/events/design-open-dag-success","title":"Bedankt voor je aanmelding \xb7 Design Open Dagen \xb7 Bijeenkomsten","description":"Je wordt nu op de hoogte gehouden van Design Open Dagen.","source":"@site/docs/community/events/design-open-dag-success.mdx","sourceDirName":"community/events","slug":"/community/design-open-dag/bedankt","permalink":"/community/design-open-dag/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-dag-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Design Open Dagen \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design Open Dag","description":"Je wordt nu op de hoogte gehouden van Design Open Dagen.","slug":"/community/design-open-dag/bedankt","unlisted":true,"keywords":["nl design system"]}}');
   var s = t(86070),
    i = t(85248);
   const d = { title: 'Bedankt voor je aanmelding \xb7 Design Open Dagen \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design Open Dag', description: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.', slug: '/community/design-open-dag/bedankt', unlisted: !0, keywords: ['nl design system'] },
    a = 'Bedankt voor je aanmelding bij de Design Open Dagen',
    r = {},
    g = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'bedankt-voor-je-aanmelding-bij-de-design-open-dagen', children: 'Bedankt voor je aanmelding bij de Design Open Dagen' }) }), '\n', (0, s.jsx)(n.p, { children: 'Binnenkort voegen we je toe aan de calendar invites voor deze samenwerkdagen, zodat je in Outlook per dag kunt aangeven of je komt of niet.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
