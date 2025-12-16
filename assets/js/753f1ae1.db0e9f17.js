'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79504],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => m });
   var r = i(63674),
    t = i(92420),
    s = i(45648),
    l = i(14537),
    o = i(13526),
    c = i(86070);
   function d({ href: e, icon: n = '', title: i, description: r, children: s }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, c.jsx)('p', { className: 'cardDescription', children: r }), s] });
   }
   function a({ item: e }) {
    return (0, c.jsx)(d, { title: e.label, description: e.description, children: (0, c.jsx)(l.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(l.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, c.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function p({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, r.$S)();
    return (0, c.jsx)(m, { items: n.items, className: e });
   }
   function m(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const t = (0, r.d1)(n);
    return (0, c.jsx)('section', { className: (0, o.A)('row', i), ...e, children: t.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(p, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  35710: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => a, default: () => m, frontMatter: () => d, metadata: () => r, toc: () => p });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/README","title":"Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het toepassen van descriptions in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/README.mdx","sourceDirName":"richtlijnen/formulieren/description","slug":"/richtlijnen/formulieren/descriptions/","permalink":"/richtlijnen/formulieren/descriptions/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/README.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie descriptions","sidebar_position":4,"pagination_label":"Descriptions in een formulier","description":"Richtlijnen voor het toepassen van descriptions in een formulier.","slug":"/richtlijnen/formulieren/descriptions/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/succesmelding"},"next":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"}}');
   var t = i(86070),
    s = i(85248),
    l = i(78734),
    o = i(14996),
    c = i(49484);
   const d = { title: 'Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie descriptions', sidebar_position: 4, pagination_label: 'Descriptions in een formulier', description: 'Richtlijnen voor het toepassen van descriptions in een formulier.', slug: '/richtlijnen/formulieren/descriptions/', keywords: ['labels', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor descriptions in een formulier',
    h = {},
    p = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...l.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-descriptions-in-een-formulier', children: 'Richtlijnen NL Design System voor descriptions in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen.' }), '\n', (0, t.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description', children: '"accessible description"' }), ', die in toegankelijkheidsstandaarden wordt gebruikt.'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/description/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(o.T, { id: 'koppel-een-description-aan-het-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description in code aan het formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing/', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'meerdere-descriptions-koppelen', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/meerdere-koppelen/', children: 'Meerdere descriptions koppelen' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'fieldset-plaats-descriptions-tussen-legend-en-eerste-item', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: 'Fieldset: Plaats descriptions tussen legend en eerste\nitem' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'houd-het-aanklikbare-gedeelte-groot-genoeg', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte/', children: 'Houd het aanklikbare gedeelte groot genoeg' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'houd-de-description-kort-en-to-the-point', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/lengte/', children: 'Houd de description kort en to-the-point' }), '.'] }) }), '\n', (0, t.jsx)(l.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => c });
   var r = i(63674),
    t = i(13526),
    s = i(7361),
    l = i(86070);
   const o = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: o(i.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const c = (0, r.$S)();
     return (0, l.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, l.jsx)(s.A, { items: o(c.items, e) }) });
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
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function l(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => l });
   var r = i(71170),
    t = i(13526),
    s = i(86070);
   const l = ({ className: e, ...n }) => (0, s.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
