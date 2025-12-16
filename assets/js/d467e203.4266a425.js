'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25508],
 {
  52207: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/spacing-tokens","source":"@site/blog/2023/20231109-spacing-tokens.md","title":"Spacing tokens als systeem voor verticale ruimte","description":"Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in de Design Open Hour.","date":"2023-11-09T00:00:00.000Z","tags":[{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"},{"inline":false,"label":"Design Tokens","permalink":"/blog/tags/design-tokens"}],"hasTruncateMarker":true,"authors":[{"name":"Hidde de Vries","title":"Public relations & Toegankelijkheidsspecialist NL Design System","url":"https://www.linkedin.com/in/hiddedevries/","key":"Hidde de Vries","page":null,"socials":{}}],"frontMatter":{"title":"Spacing tokens als systeem voor verticale ruimte","slug":"spacing-tokens","authors":[{"key":"Hidde de Vries","title":"Public relations & Toegankelijkheidsspecialist NL Design System"}],"tags":["NL Design System","design tokens"],"hide_table_of_contents":false,"date":"2023-11-09T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Testen met Wmebv-formulieren: eerste lessen","permalink":"/blog/wmebv-gebruikerstesten"},"nextItem":{"title":"Design Systems Week 2023 komt eraan!","permalink":"/blog/design-systems-week-2023-komt-eraan"}}');
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => r, x: () => a });
   var s = t(30758);
   const i = {},
    o = s.createContext(i);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
  89569: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => r, metadata: () => s, toc: () => d });
   var s = t(52207),
    i = t(86070),
    o = t(85248);
   const r = { title: 'Spacing tokens als systeem voor verticale ruimte', slug: 'spacing-tokens', authors: [{ key: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System' }], tags: ['NL Design System', 'design tokens'], hide_table_of_contents: !1, date: new Date('2023-11-09T00:00:00.000Z') },
    a = void 0,
    l = { authorsImageUrls: [void 0] },
    d = [];
   function c(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in de Design Open Hour.' });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
