'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8198],
 {
  18439(e, n, t) {
   t.d(n, { R: () => i, x: () => a });
   var o = t(30758);
   const s = {},
    d = o.createContext(s);
   function i(e) {
    const n = o.useContext(d);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), o.createElement(d.Provider, { value: n }, e.children));
   }
  },
  85491(e, n, t) {
   (t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => o, toc: () => c }));
   const o = JSON.parse('{"id":"community/events/design-open-dag-success","title":"Bedankt voor je aanmelding","description":"Je wordt nu op de hoogte gehouden van Design Open Dagen.","source":"@site/docs/community/events/design-open-dag-success.mdx","sourceDirName":"community/events","slug":"/community/design-open-dag/bedankt","permalink":"/community/design-open-dag/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-dag-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design Open Dag","description":"Je wordt nu op de hoogte gehouden van Design Open Dagen.","slug":"/community/design-open-dag/bedankt","unlisted":true,"keywords":["nl design system"]}}');
   var s = t(86070),
    d = t(18439);
   const i = { title: 'Bedankt voor je aanmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design Open Dag', description: 'Je wordt nu op de hoogte gehouden van Design Open Dagen.', slug: '/community/design-open-dag/bedankt', unlisted: !0, keywords: ['nl design system'] },
    a = 'Bedankt voor je aanmelding bij de Design Open Dagen',
    r = {},
    c = [];
   function g(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, d.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'bedankt-voor-je-aanmelding-bij-de-design-open-dagen', children: 'Bedankt voor je aanmelding bij de Design Open Dagen' }) }), '\n', (0, s.jsx)(n.p, { children: 'Binnenkort voegen we je toe aan de calendar invites voor deze samenwerkdagen, zodat je in Outlook per dag kunt aangeven of je komt of niet.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
