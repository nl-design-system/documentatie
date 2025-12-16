'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92907],
 {
  60548: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => r, default: () => c, frontMatter: () => i, metadata: () => a, toc: () => d });
   var a = n(73863),
    s = n(86070),
    o = n(85248);
   const i = { title: 'Van start! Een gezamelijk design system voor de overheid', slug: 'een-overheid-practice-what-you-preach', authors: 'Edo Plantinga', tags: ['NL Design System'], image: 'https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png', hide_table_of_contents: !1, date: new Date('2019-01-25T00:00:00.000Z') },
    r = void 0,
    l = { authorsImageUrls: [void 0] },
    d = [];
   function m(e) {
    const t = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsx)(t.p, { children: 'Doe mee! Samen werken aan \xe9\xe9n design system voor Nederland. Sluit je aan, doe mee via bijeenkomsten, praat mee via Slack.' });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  73863: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/een-overheid-practice-what-you-preach","source":"@site/blog/2019/20190125-van-start-een-gezamelijk-design-system-voor-de-overheid.md","title":"Van start! Een gezamelijk design system voor de overheid","description":"Doe mee! Samen werken aan \xe9\xe9n design system voor Nederland. Sluit je aan, doe mee via bijeenkomsten, praat mee via Slack.","date":"2019-01-25T00:00:00.000Z","tags":[{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"}],"hasTruncateMarker":true,"authors":[{"name":"Edo Plantinga","title":"Freelance projectleider en communitymanager","url":"https://www.linkedin.com/in/edoplantinga","key":"Edo Plantinga","page":null}],"frontMatter":{"title":"Van start! Een gezamelijk design system voor de overheid","slug":"een-overheid-practice-what-you-preach","authors":"Edo Plantinga","tags":["NL Design System"],"image":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2019/01/Schermafbeelding-2019-01-25-om-13.28.37-e1548707554969.png","hide_table_of_contents":false,"date":"2019-01-25T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"E\xe9n over\xadheid - practise what you preach","permalink":"/blog/van-start-een-gezamelijk-design-system-voor-de-overheid"},"nextItem":{"title":"Design systems in het buitenland - 6 lessen","permalink":"/blog/design-systems-in-het-buitenland-6-lessen"}}');
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => i, x: () => r });
   var a = n(30758);
   const s = {},
    o = a.createContext(s);
   function i(e) {
    const t = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), a.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
