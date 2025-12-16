'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [29895],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => u });
   var r = i(63674),
    t = i(92420),
    s = i(45648),
    a = i(14537),
    l = i(13526),
    o = i(86070);
   function d({ href: e, icon: n = '', title: i, description: r, children: s }) {
    return (0, o.jsxs)('div', { className: 'card', children: [e ? (0, o.jsx)(t.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, o.jsx)('p', { className: 'cardDescription', children: r }), s] });
   }
   function c({ item: e }) {
    return (0, o.jsx)(d, { title: e.label, description: e.description, children: (0, o.jsx)(a.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(a.Er, { children: 'link' === e.type ? (0, o.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, o.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, o.jsx)(m, { item: e });
     case 'category':
      return (0, o.jsx)(c, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function p({ className: e }) {
    const n = (0, r.$S)();
    return (0, o.jsx)(u, { items: n.items, className: e });
   }
   function u(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(p, { ...e });
    const t = (0, r.d1)(n);
    return (0, o.jsx)('section', { className: (0, l.A)('row', i), ...e, children: t.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(h, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  35441: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => c, default: () => u, frontMatter: () => d, metadata: () => r, toc: () => h });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/multistep/README","title":"Meerdere stappen in een formulier \xb7 Richtlijnen","description":"Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.","source":"@site/docs/richtlijnen/formulieren/multistep/README.mdx","sourceDirName":"richtlijnen/formulieren/multistep","slug":"/richtlijnen/formulieren/meerdere-stappen/","permalink":"/richtlijnen/formulieren/meerdere-stappen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/README.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Meerdere stappen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie meerdere stappen","sidebar_position":8,"pagination_label":"Meerdere stappen","description":"Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.","slug":"/richtlijnen/formulieren/meerdere-stappen/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Link in nieuwe tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab"},"next":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"}}');
   var t = i(86070),
    s = i(85248),
    a = i(78734),
    l = i(14996),
    o = i(49484);
   const d = { title: 'Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie meerdere stappen', sidebar_position: 8, pagination_label: 'Meerdere stappen', description: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.', slug: '/richtlijnen/formulieren/meerdere-stappen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor meerdere stappen in een formulier',
    m = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...a.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-meerdere-stappen-in-een-formulier', children: 'Richtlijnen NL Design System voor meerdere stappen in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Of je een meerstappenformulier gebruikt hangt af van de hoeveelheid en de complexiteit van de vragen die je de bezoekers wilt stellen. Doe vooraf gebruikersonderzoek voordat je beslist een formulier in meerdere stappen op te delen. Adam Silver beschrijft zijn overwegingen in ', (0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/', children: (0, t.jsx)('span', { lang: 'en', children: 'Better Form Design: One Thing Per Page (Case Study)' }) }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(o.F, { excludeDocIDs: ['richtlijnen/formulieren/multistep/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(l.T, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich\nbevindt' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang/', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het\nformulier' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en\nbuttons' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'bied-als-laatste-stap-een-opsomming-aan-van-alle-ingevoerde-gegevens', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/samenvatting/', children: 'Bied als laatste stap een opsomming aan van alle ingevoerde\ngegevens' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven/', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat\nworden' }), '.'] }) }), '\n', (0, t.jsx)(a.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => o });
   var r = i(63674),
    t = i(13526),
    s = i(7361),
    a = i(86070);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    o = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const o = (0, r.$S)();
     return (0, a.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, a.jsx)(s.A, { items: l(o.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => r, d1: () => t });
   i(34374);
   function r(...e) {
    return i(41863).$S(...e);
   }
   function t(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => l });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => a });
   var r = i(71170),
    t = i(13526),
    s = i(86070);
   const a = ({ className: e, ...n }) => (0, s.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
