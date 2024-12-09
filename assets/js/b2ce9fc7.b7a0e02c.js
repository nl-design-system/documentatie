'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51056],
 {
  47491: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => r });
   var t = i(52676),
    s = i(87118);
   const a = { title: 'Baseline toegankelijkheidsondersteuning', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline toegankelijkheidsondersteuning', pagination_label: 'Baseline toegankelijkheidsondersteuning', description: 'Baseline toegankelijkheidsondersteuning.', slug: 'baseline-toegankelijkheidsondersteuning', keywords: ['WCAG'] },
    o = 'Baseline toegankelijkheids-ondersteuning',
    l = { id: 'wcag/baseline', title: 'Baseline toegankelijkheidsondersteuning', description: 'Baseline toegankelijkheidsondersteuning.', source: '@site/docs/wcag/0-baseline.mdx', sourceDirName: 'wcag', slug: '/wcag/baseline-toegankelijkheidsondersteuning', permalink: '/wcag/baseline-toegankelijkheidsondersteuning', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/0-baseline.mdx', tags: [], version: 'current', sidebarPosition: 0, frontMatter: { title: 'Baseline toegankelijkheidsondersteuning', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline toegankelijkheidsondersteuning', pagination_label: 'Baseline toegankelijkheidsondersteuning', description: 'Baseline toegankelijkheidsondersteuning.', slug: 'baseline-toegankelijkheidsondersteuning', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: "Introductie WCAG-pagina's", permalink: '/wcag' }, next: { title: "Introductie WCAG-pagina's", permalink: '/wcag' } },
    d = {},
    r = [];
   function g(e) {
    const n = { h1: 'h1', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(n.h1, { id: 'baseline-toegankelijkheids-ondersteuning', children: 'Baseline toegankelijkheids-ondersteuning' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
  },
  87118: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
