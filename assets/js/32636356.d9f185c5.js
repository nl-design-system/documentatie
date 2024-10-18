'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [52400],
 {
  69396: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => r, default: () => u, frontMatter: () => i, metadata: () => a, toc: () => d });
   var o = n(52676),
    s = n(24785);
   const i = { title: 'Bedankt voor je aanmelding \xb7 Nieuwsbrief', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    a = { id: 'project/newsletter-success', title: 'Bedankt voor je aanmelding \xb7 Nieuwsbrief', description: 'Je bent nu aangemeld voor onze nieuwsbrief!', source: '@site/docs/project/newsletter-success.mdx', sourceDirName: 'project', slug: '/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', permalink: '/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/newsletter-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding \xb7 Nieuwsbrief', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', unlisted: !0 } },
    c = {},
    d = [];
   function l(e) {
    const t = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, o.jsx)(t.p, { children: 'Je bent nu aangemeld voor onze nieuwsbrief!' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => a, a: () => r });
   var o = n(75271);
   const s = {},
    i = o.createContext(s);
   function r(e) {
    const t = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
