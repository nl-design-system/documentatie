'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [40339],
 {
  7361: (e, n, t) => {
   t.d(n, { A: () => j });
   var i = t(63674),
    r = t(92420),
    s = t(45648),
    o = t(14537),
    l = t(13526),
    c = t(86070);
   function d({ href: e, icon: n = '', title: t, description: i, children: s }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), s] });
   }
   function a({ item: e }) {
    return (0, c.jsx)(d, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function u({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, c.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(u, { item: e });
     case 'category':
      return (0, c.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, c.jsx)(m, { ...e });
    const r = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, l.A)('row', t), ...e, children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  14996: (e, n, t) => {
   t.d(n, { T: () => s });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, ...t }) => (0, r.jsx)('div', { ...t, className: (0, i.A)('nlds-fragment-redirect', n), children: e });
  },
  19903: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => a, default: () => j, frontMatter: () => d, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/button/README","title":"Buttons in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.","source":"@site/docs/richtlijnen/formulieren/button/README.mdx","sourceDirName":"richtlijnen/formulieren/button","slug":"/richtlijnen/formulieren/buttons","permalink":"/richtlijnen/formulieren/buttons","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Buttons in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie Buttons","sidebar_position":1,"pagination_label":"Buttons in een formulier","description":"Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.","slug":"/richtlijnen/formulieren/buttons","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen/formulieren"},"next":{"title":"Buttons in een formulier","permalink":"/richtlijnen/formulieren/buttons"}}');
   var r = t(86070),
    s = t(85248),
    o = t(78734),
    l = t(14996),
    c = t(49484);
   const d = { title: 'Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie Buttons', sidebar_position: 1, pagination_label: 'Buttons in een formulier', description: 'Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons', keywords: ['labels', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor buttons in een formulier',
    u = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-buttons-in-een-formulier', children: 'Richtlijnen NL Design System voor buttons in een formulier' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Via een button verzend je een formulier of voer je aan andere actie uit, zoals het uploaden van een bestand.\nIn deze documentatie gebruiken we de Engelse benaming voor het Nederlandse woord knop: 'button'. Omdat ", (0, r.jsx)(n.code, { children: '<button>' }), ' het HTML-element is waar deze richtlijnen over gaan.'] }), '\n', (0, r.jsx)(n.p, { children: 'Binnen een formulier bestaan er drie soorten buttons:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<button type="submit">' }), ', om het formulier mee te verzenden (dit is de default waarde binnen een formulier);'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<button type="button">' }), ', dit zijn buttons die een andere functie hebben binnen een formulier, zoals het uploaden van documenten of openen van een modal;'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<button type="reset">' }), ', om alle ingevulde informatie binnen een formulier te wissen.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'De hier beschreven richtlijnen gelden voor al deze buttons.' }), '\n', (0, r.jsx)(n.p, { children: 'Voor de toegankelijkheid en goede code van het formulier zijn de volgende punten belangrijk voor een button:' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/button/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l.T, { id: 'toetsenbordbediening-van-een-button', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen/', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een\nformulierveld' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'plaatsing-van-een-button-binnen-een-formulier', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/plaatsing/', children: 'Plaatsing van een button binnen een formulier' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'duidelijk-buttontekst-die-beschrijft-wat-de-button-doet', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijk buttontekst die beschrijft wat de button doet' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'de-toegankelijke-naam-van-een-button', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'afbeeldingen-als-buttons', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'disabled-submitbuttons', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }), '.'] }) }), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  49484: (e, n, t) => {
   t.d(n, { F: () => c });
   var i = t(63674),
    r = t(13526),
    s = t(7361),
    o = t(86070);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const c = (0, i.$S)();
     return (0, o.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, o.jsx)(s.A, { items: l(c.items, e) }) });
    };
  },
  63674: (e, n, t) => {
   t.d(n, { $S: () => i, d1: () => r });
   t(34374);
   function i(...e) {
    return t(41863).$S(...e);
   }
   function r(...e) {
    return t(41863).d1(...e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => l });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, t) => {
   t.d(n, { N: () => o });
   var i = t(71170),
    r = t(13526),
    s = t(86070);
   const o = ({ className: e, ...n }) => (0, s.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
