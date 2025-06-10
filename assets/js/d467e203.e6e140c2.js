'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [76902],
 {
  77376: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => c, frontMatter: () => r, metadata: () => a, toc: () => d });
   var s = t(52676),
    i = t(40139);
   const r = { title: 'Spacing tokens als systeem voor verticale ruimte', slug: 'spacing-tokens', authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }], tags: ['NL Design System', 'design tokens'], hide_table_of_contents: !1, date: new Date('2023-11-09T00:00:00.000Z') },
    o = void 0,
    a = {
     permalink: '/blog/spacing-tokens',
     source: '@site/blog/2023/20231109-spacing-tokens.md',
     title: 'Spacing tokens als systeem voor verticale ruimte',
     description: 'Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in de Design Open Hour.',
     date: '2023-11-09T00:00:00.000Z',
     formattedDate: '9 november 2023',
     tags: [
      { label: 'NL Design System', permalink: '/blog/tags/nl-design-system' },
      { label: 'design tokens', permalink: '/blog/tags/design-tokens' },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }],
     frontMatter: { title: 'Spacing tokens als systeem voor verticale ruimte', slug: 'spacing-tokens', authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }], tags: ['NL Design System', 'design tokens'], hide_table_of_contents: !1, date: '2023-11-09T00:00:00.000Z' },
     unlisted: !1,
     prevItem: { title: 'Testen met Wmebv-formulieren: eerste lessen', permalink: '/blog/wmebv-gebruikerstesten' },
     nextItem: { title: 'Design Systems Week 2023 komt eraan!', permalink: '/blog/design-systems-week-2023-komt-eraan' },
    },
    l = { authorsImageUrls: [void 0] },
    d = [];
   function m(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in de Design Open Hour.' });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => o });
   var s = t(75271);
   const i = {},
    r = s.createContext(i);
   function o(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
