'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8333],
 {
  84629: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => r, metadata: () => s, toc: () => l });
   const s = JSON.parse('{"id":"project/newsletter-success","title":"Bedankt voor je aanmelding \xb7 Nieuwsbrief","description":"Je bent nu aangemeld voor onze nieuwsbrief!","source":"@site/docs/project/newsletter-success.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte/nieuwsbrief/bedankt","permalink":"/project/blijf-op-de-hoogte/nieuwsbrief/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/newsletter-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding \xb7 Nieuwsbrief","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/project/blijf-op-de-hoogte/nieuwsbrief/bedankt","unlisted":true}}');
   var o = n(86070),
    i = n(85248);
   const r = { title: 'Bedankt voor je aanmelding \xb7 Nieuwsbrief', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', unlisted: !0 },
    a = 'Bedankt!',
    d = {},
    l = [];
   function c(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.header, { children: (0, o.jsx)(t.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, o.jsx)(t.p, { children: 'Je bent nu aangemeld voor onze nieuwsbrief!' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => r, x: () => a });
   var s = n(30758);
   const o = {},
    i = s.createContext(o);
   function r(e) {
    const t = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
