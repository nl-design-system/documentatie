'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35132],
 {
  6087: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => r, metadata: () => s, toc: () => g });
   var s = n(18184),
    i = n(86070),
    a = n(85248);
   const r = { title: 'NL Design System in 2021', slug: 'nl-design-system-in-2021', authors: 'Jessica Straetemans', tags: ['Figma', 'NL Design System'], image: 'https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg', hide_table_of_contents: !1, date: new Date('2021-12-23T00:00:00.000Z') },
    o = void 0,
    l = { authorsImageUrls: [void 0] },
    g = [];
   function m(e) {
    const t = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(t.p, { children: 'Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar.' });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, a.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  18184: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/nl-design-system-in-2021","source":"@site/blog/2021/20211223-nl-design-system-in-2021.md","title":"NL Design System in 2021","description":"Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar.","date":"2021-12-23T00:00:00.000Z","tags":[{"inline":false,"label":"Figma","permalink":"/blog/tags/figma"},{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"}],"hasTruncateMarker":true,"authors":[{"name":"Jessica Straetemans","title":"Co\xf6rdinator Communicatie bij Gebruiker Centraal","url":"https://www.linkedin.com/in/jessicastraetemans/","key":"Jessica Straetemans","page":null}],"frontMatter":{"title":"NL Design System in 2021","slug":"nl-design-system-in-2021","authors":"Jessica Straetemans","tags":["Figma","NL Design System"],"image":"https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg","hide_table_of_contents":false,"date":"2021-12-23T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Bryan de Jong vertelt over zijn ervaring met het NL Design System","permalink":"/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system"},"nextItem":{"title":"Over Figma als keuze voor het NL Design System","permalink":"/blog/over-figma-als-keuze-voor-het-nl-design-system"}}');
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => r, x: () => o });
   var s = n(30758);
   const i = {},
    a = s.createContext(i);
   function r(e) {
    const t = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), s.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
