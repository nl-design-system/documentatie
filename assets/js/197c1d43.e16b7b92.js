'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5463],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    r = t(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  63888: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => d, default: () => j, frontMatter: () => c, metadata: () => a, toc: () => h });
   var i = t(52676),
    r = t(24785),
    o = t(2334),
    s = t(21004),
    l = t(55400);
   const c = { title: 'Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie Buttons', sidebar_position: 1, pagination_label: 'Buttons in een formulier', description: 'Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor buttons in een formulier',
    a = { id: 'richtlijnen/formulieren/button/README', title: 'Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.', source: '@site/docs/richtlijnen/formulieren/button/README.mdx', sourceDirName: 'richtlijnen/formulieren/button', slug: '/richtlijnen/formulieren/buttons', permalink: '/richtlijnen/formulieren/buttons', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie Buttons', sidebar_position: 1, pagination_label: 'Buttons in een formulier', description: 'Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Introductie', permalink: '/richtlijnen/formulieren' }, next: { title: 'Buttons in een formulier', permalink: '/richtlijnen/formulieren/buttons' } },
    u = {},
    h = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-buttons-in-een-formulier', children: 'Richtlijnen NL Design System voor buttons in een formulier' }), '\n', (0, i.jsxs)(n.p, { children: ["Via een button verzend je een formulier of voer je aan andere actie uit, zoals het uploaden van een bestand.\nIn deze documentatie gebruiken we de Engelse benaming voor het Nederlandse woord knop: 'button'. Omdat ", (0, i.jsx)(n.code, { children: '<button>' }), ' het HTML-element is waar deze richtlijnen over gaan.'] }), '\n', (0, i.jsx)(n.p, { children: 'Binnen een formulier bestaan er drie soorten buttons:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<button type="submit">' }), ', om het formulier mee te verzenden (dit is de default waarde binnen een formulier);'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<button type="button">' }), ', dit zijn buttons die een andere functie hebben binnen een formulier, zoals het uploaden van documenten of openen van een modal;'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<button type="reset">' }), ', om alle ingevulde informatie binnen een formulier te wissen.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'De hier beschreven richtlijnen gelden voor al deze buttons.' }), '\n', (0, i.jsx)(n.p, { children: 'Voor de toegankelijkheid en goede code van het formulier zijn de volgende punten belangrijk voor een button:' }), '\n', (0, i.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/button/README'] }), '\n', (0, i.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, i.jsx)(o._, { id: 'toetsenbordbediening-van-een-button', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening', children: 'Toetsenbordbediening van een button' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een\nformulierveld' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'plaatsing-van-een-button-binnen-een-formulier', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/plaatsing', children: 'Plaatsing van een button binnen een formulier' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'duidelijk-buttontekst-die-beschrijft-wat-de-button-doet', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst', children: 'Duidelijk buttontekst die beschrijft wat de button doet' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'de-toegankelijke-naam-van-een-button', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam', children: 'De toegankelijke naam van een button' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'afbeeldingen-als-buttons', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button', children: 'Afbeeldingen als buttons' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'disabled-submitbuttons', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', children: 'Disabled submitbuttons' }), '.'] }) }), '\n', (0, i.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  2334: (e, n, t) => {
   t.d(n, { _: () => o });
   var i = t(4814),
    r = (t(75271), t(52676));
   const o = (e) => {
    let { children: n, className: t, ...o } = e;
    return (0, r.jsx)('div', { ...o, className: (0, i.Z)('nlds-fragment-redirect', t), children: n });
   };
  },
  21004: (e, n, t) => {
   t.d(n, { l: () => c });
   var i = t(34221),
    r = t(4814),
    o = (t(75271), t(20537)),
    s = t(52676);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: t, ...c } = e;
     const d = (0, i.jA)();
     return (0, s.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', t), children: (0, s.jsx)(o.Z, { items: l(d.items, n) }) });
    };
  },
  20537: (e, n, t) => {
   t.d(n, { Z: () => j });
   var i = t(34221),
    r = t(90441),
    o = t(56150),
    s = t(4814);
   t(75271);
   const l = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = t(52676);
   function d(e) {
    let { href: n, icon: t = '', title: i, description: o, children: d } = e;
    return (0, c.jsxs)('div', { className: (0, s.Z)('card', l.card), children: [n ? (0, c.jsx)(r.Z, { href: n, className: (0, s.Z)(l.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', i] }) }) : (0, c.jsxs)('h2', { className: (0, s.Z)(l.cardTitle), children: [t, ' ', i] }), o && (0, c.jsx)('p', { className: (0, s.Z)(l.cardDescription), children: o }), d] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, c.jsx)(d, { title: n.label, description: n.description, children: (0, c.jsx)(o.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.AS, { children: 'link' === e.type ? (0, c.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, c.jsx)(d, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(u, { item: n });
     case 'category':
      return (0, c.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function m(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, c.jsx)(j, { items: t.items, className: n });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(m, { ...e });
    const r = (0, i.MN)(n);
    return (0, c.jsx)('section', { className: (0, s.Z)('row', t), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var i = t(75271);
   const r = {},
    o = i.createContext(r);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
