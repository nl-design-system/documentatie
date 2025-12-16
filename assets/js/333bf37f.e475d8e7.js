'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14044],
 {
  40759: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => r, metadata: () => s, toc: () => g });
   var s = n(61610),
    o = n(86070),
    i = n(85248);
   const r = { title: 'Over Figma als keuze voor het NL Design System', slug: 'over-figma-als-keuze-voor-het-nl-design-system', authors: 'Rogier Barendregt', tags: ['Figma', 'NL Design System'], image: 'https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png', hide_table_of_contents: !1, date: new Date('2021-12-15T00:00:00.000Z') },
    a = void 0,
    l = { authorsImageUrls: [void 0] },
    g = [];
   function m(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(t.p, { children: 'Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken.' });
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  61610: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/over-figma-als-keuze-voor-het-nl-design-system","source":"@site/blog/2021/20211215-over-figma-als-keuze-voor-het-nl-design-system.md","title":"Over Figma als keuze voor het NL Design System","description":"Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken.","date":"2021-12-15T00:00:00.000Z","tags":[{"inline":false,"label":"Figma","permalink":"/blog/tags/figma"},{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"}],"hasTruncateMarker":true,"authors":[{"name":"Rogier Barendregt","title":"Designer kernteam NL Design System","url":"https://www.linkedin.com/in/rogierdesign/","key":"Rogier Barendregt","page":null}],"frontMatter":{"title":"Over Figma als keuze voor het NL Design System","slug":"over-figma-als-keuze-voor-het-nl-design-system","authors":"Rogier Barendregt","tags":["Figma","NL Design System"],"image":"https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png","hide_table_of_contents":false,"date":"2021-12-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"NL Design System in 2021","permalink":"/blog/nl-design-system-in-2021"},"nextItem":{"title":"Innovatiebudget voor de werkwijze van het NL Design System","permalink":"/blog/innovatiebudget-voor-de-werkwijze-van-het-nl-design-system"}}');
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
