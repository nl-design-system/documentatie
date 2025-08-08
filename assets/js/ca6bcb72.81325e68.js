'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [71854],
 {
  66968: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  10172: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => c, toc: () => p });
   var r = i(52676),
    t = i(40139),
    s = i(66968),
    a = i(2334),
    l = i(21004);
   const o = { title: 'Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie meerdere stappen', sidebar_position: 8, pagination_label: 'Meerdere stappen', description: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.', slug: '/richtlijnen/formulieren/meerdere-stappen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor meerdere stappen in een formulier',
    c = { id: 'richtlijnen/formulieren/multistep/README', title: 'Meerdere stappen in een formulier \xb7 Richtlijnen', description: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.', source: '@site/docs/richtlijnen/formulieren/multistep/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep', slug: '/richtlijnen/formulieren/meerdere-stappen/', permalink: '/richtlijnen/formulieren/meerdere-stappen/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/README.mdx', tags: [], version: 'current', sidebarPosition: 8, frontMatter: { title: 'Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie meerdere stappen', sidebar_position: 8, pagination_label: 'Meerdere stappen', description: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.', slug: '/richtlijnen/formulieren/meerdere-stappen/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Link in nieuwe tab', permalink: '/richtlijnen/formulieren/links/nieuwe-tab' }, next: { title: 'Meerdere stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/' } },
    m = {},
    p = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-meerdere-stappen-in-een-formulier', children: 'Richtlijnen NL Design System voor meerdere stappen in een formulier' }), '\n', (0, r.jsx)(n.p, { children: 'Bestaat een formulier uit veel vragen, dan kan het gebruiksvriendelijk en overzichtelijk zijn om het formulier in meerdere stappen op te delen, of om een vraag per stap te stellen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Of je een meerstappenformulier gebruikt hangt af van de hoeveelheid en de complexiteit van de vragen die je de bezoekers wilt stellen. Doe vooraf gebruikersonderzoek voordat je beslist een formulier in meerdere stappen op te delen. Adam Silver beschrijft zijn overwegingen in ', (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/', children: (0, r.jsx)('span', { lang: 'en', children: 'Better Form Design: One Thing Per Page (Case Study)' }) }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(l.l, { excludeDocIDs: ['richtlijnen/formulieren/multistep/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(a._, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen/', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich\nbevindt' }), '.'] }) }), '\n', (0, r.jsx)(a._, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang/', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het\nformulier' }), '.'] }) }), '\n', (0, r.jsx)(a._, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en\nbuttons' }), '.'] }) }), '\n', (0, r.jsx)(a._, { id: 'bied-als-laatste-stap-een-opsomming-aan-van-alle-ingevoerde-gegevens', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/samenvatting/', children: 'Bied als laatste stap een opsomming aan van alle ingevoerde\ngegevens' }), '.'] }) }), '\n', (0, r.jsx)(a._, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven/', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat\nworden' }), '.'] }) }), '\n', (0, r.jsx)(s.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  2334: (e, n, i) => {
   i.d(n, { _: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, ...s } = e;
    return (0, t.jsx)('div', { ...s, className: (0, r.Z)('nlds-fragment-redirect', i), children: n });
   };
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => o });
   var r = i(73436),
    t = i(4814),
    s = i(39772),
    a = i(52676);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    o = (e) => {
     let { excludeDocIDs: n = [], className: i, ...o } = e;
     const d = (0, r.jA)();
     return (0, a.jsx)('div', { ...o, className: (0, t.Z)('margin-top--lg', i), children: (0, a.jsx)(s.Z, { items: l(d.items, n) }) });
    };
  },
  39772: (e, n, i) => {
   i.d(n, { Z: () => h });
   var r = i(73436),
    t = i(57229),
    s = i(41115),
    a = i(4814),
    l = i(52676);
   function o(e) {
    let { href: n, icon: i = '', title: r, description: s, children: o } = e;
    return (0, l.jsxs)('div', { className: 'card', children: [n ? (0, l.jsx)(t.r, { href: n, className: (0, a.Z)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', r] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', r] }), s && (0, l.jsx)('p', { className: 'cardDescription', children: s }), o] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, l.jsx)(o, { title: n.label, description: n.description, children: (0, l.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, l.jsx)(s.AS, { children: 'link' === e.type ? (0, l.jsx)(t.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(t.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, n)) }) });
   }
   function c(e) {
    let { item: n } = e;
    const i = (0, r.xz)(n.docId);
    return (0, l.jsx)(o, { href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, l.jsx)(c, { item: n });
     case 'category':
      return (0, l.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function p(e) {
    let { className: n } = e;
    const i = (0, r.jA)();
    return (0, l.jsx)(h, { items: i.items, className: n });
   }
   function h(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, l.jsx)(p, { ...e });
    const t = (0, r.MN)(n);
    return (0, l.jsx)('section', { className: (0, a.Z)('row', i), children: t.map((e, n) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(m, { item: e }) }, n)) });
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var r = i(75271);
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
 },
]);
