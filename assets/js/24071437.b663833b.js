'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [46699],
 {
  67484: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => c, frontMatter: () => a, metadata: () => r, toc: () => m });
   var r = t(71604),
    i = t(86070),
    o = t(85248);
   const a = { title: 'Rian en Francesca aanwezig bij Community Online Formulieren ', slug: 'community-online-formulieren', authors: 'Renate Bruinenberg', tags: ['NL Design System', 'formulieren'], hide_table_of_contents: !1, date: new Date('2023-12-14T00:00:00.000Z') },
    l = void 0,
    s = { authorsImageUrls: [void 0] },
    m = [];
   function u(e) {
    const n = { a: 'a', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Op donderdag 7 december kwam de ', (0, i.jsx)(n.a, { href: 'https://www.gebruikercentraal.nl/community-online-formulieren/', children: 'Community Online Formulieren' }), ' van Gebruiker Centraal bij elkaar. Francesca Vonk en Rian Rietveld waren uitgenodigd om meer te vertellen over de richtlijnen voor formulieren \xe9n over het testen met gebruikers.'] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  71604: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/community-online-formulieren","source":"@site/blog/2023/20231214-community-online-formulieren.md","title":"Rian en Francesca aanwezig bij Community Online Formulieren ","description":"Op donderdag 7 december kwam de Community Online Formulieren van Gebruiker Centraal bij elkaar. Francesca Vonk en Rian Rietveld waren uitgenodigd om meer te vertellen over de richtlijnen voor formulieren \xe9n over het testen met gebruikers.","date":"2023-12-14T00:00:00.000Z","tags":[{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"},{"inline":false,"label":"Formulieren","permalink":"/blog/tags/formulieren"}],"hasTruncateMarker":true,"authors":[{"name":"Renate Bruinenberg","title":"Communicatieadviseur NL Design System","url":"https://www.linkedin.com/in/renate-bruinenberg-886019163/","key":"Renate Bruinenberg","page":null}],"frontMatter":{"title":"Rian en Francesca aanwezig bij Community Online Formulieren ","slug":"community-online-formulieren","authors":"Renate Bruinenberg","tags":["NL Design System","formulieren"],"hide_table_of_contents":false,"date":"2023-12-14T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"NL Design System nu als zelfstandig project verder","permalink":"/blog/nl-design-system-zelfstandig-verder"},"nextItem":{"title":"Testen met Wmebv-formulieren: eerste lessen","permalink":"/blog/wmebv-gebruikerstesten"}}');
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => l });
   var r = t(30758);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
