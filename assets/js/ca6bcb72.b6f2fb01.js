'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [29895],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  35441(e, n, i) {
   (i.r(n), i.d(n, { assets: () => p, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/multistep/README","title":"Meerdere stappen in een formulier \xb7 Richtlijnen","description":"Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.","source":"@site/docs/richtlijnen/formulieren/multistep/README.mdx","sourceDirName":"richtlijnen/formulieren/multistep","slug":"/richtlijnen/formulieren/meerdere-stappen/","permalink":"/richtlijnen/formulieren/meerdere-stappen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/README.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Meerdere stappen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie meerdere stappen","sidebar_position":8,"pagination_label":"Meerdere stappen","description":"Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.","slug":"/richtlijnen/formulieren/meerdere-stappen/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Link in nieuwe tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab"},"next":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"}}');
   var t = i(86070),
    s = i(18439),
    a = i(78734),
    o = i(67414);
   const l = { title: 'Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie meerdere stappen', sidebar_position: 8, pagination_label: 'Meerdere stappen', description: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.', slug: '/richtlijnen/formulieren/meerdere-stappen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor meerdere stappen in een formulier',
    p = {},
    c = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...a.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-meerdere-stappen-in-een-formulier', children: 'Richtlijnen NL Design System voor meerdere stappen in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Of je een meerstappenformulier gebruikt hangt af van de hoeveelheid en de complexiteit van de vragen die je de bezoekers wilt stellen. Doe vooraf gebruikersonderzoek voordat je beslist een formulier in meerdere stappen op te delen. Adam Silver beschrijft zijn overwegingen in ', (0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/', children: (0, t.jsx)('span', { lang: 'en', children: 'Better Form Design: One Thing Per Page (Case Study)' }) }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/multistep/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(o.T, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich\nbevindt' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang/', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het\nformulier' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en\nbuttons' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'bied-als-laatste-stap-een-opsomming-aan-van-alle-ingevoerde-gegevens', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/samenvatting/', children: 'Bied als laatste stap een opsomming aan van alle ingevoerde\ngegevens' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven/', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat\nworden' }), '.'] }) }), '\n', (0, t.jsx)(a.Ay, {})] })
    );
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
