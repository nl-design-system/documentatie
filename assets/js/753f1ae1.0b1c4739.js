'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [55234],
 {
  66968: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  62699: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => a, toc: () => p });
   var r = i(52676),
    t = i(40139),
    s = i(66968),
    l = i(2334),
    o = i(21004);
   const c = { title: 'Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie descriptions', sidebar_position: 4, pagination_label: 'Descriptions in een formulier', description: 'Richtlijnen voor het toepassen van descriptions in een formulier.', slug: '/richtlijnen/formulieren/descriptions/', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor descriptions in een formulier',
    a = { id: 'richtlijnen/formulieren/description/README', title: 'Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor het toepassen van descriptions in een formulier.', source: '@site/docs/richtlijnen/formulieren/description/README.mdx', sourceDirName: 'richtlijnen/formulieren/description', slug: '/richtlijnen/formulieren/descriptions/', permalink: '/richtlijnen/formulieren/descriptions/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/README.mdx', tags: [], version: 'current', sidebarPosition: 4, frontMatter: { title: 'Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie descriptions', sidebar_position: 4, pagination_label: 'Descriptions in een formulier', description: 'Richtlijnen voor het toepassen van descriptions in een formulier.', slug: '/richtlijnen/formulieren/descriptions/', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijke succesmelding', permalink: '/richtlijnen/formulieren/bevestigingspagina/succesmelding' }, next: { title: 'Descriptions in een formulier', permalink: '/richtlijnen/formulieren/descriptions/' } },
    h = {},
    p = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-descriptions-in-een-formulier', children: 'Richtlijnen NL Design System voor descriptions in een formulier' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen.' }), '\n', (0, r.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description', children: '"accessible description"' }), ', die in toegankelijkheidsstandaarden wordt gebruikt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(o.l, { excludeDocIDs: ['richtlijnen/formulieren/description/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l._, { id: 'koppel-een-description-aan-het-formulierveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen', children: 'Koppel een description in code aan het formulierveld' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'meerdere-descriptions-koppelen', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', children: 'Meerdere descriptions koppelen' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'fieldset-plaats-descriptions-tussen-legend-en-eerste-item', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', children: 'Fieldset: Plaats descriptions tussen legend en eerste\nitem' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'houd-het-aanklikbare-gedeelte-groot-genoeg', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte', children: 'Houd het aanklikbare gedeelte groot genoeg' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'houd-de-description-kort-en-to-the-point', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/lengte', children: 'Houd de description kort en to-the-point' }), '.'] }) }), '\n', (0, r.jsx)(s.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
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
   i.d(n, { l: () => c });
   var r = i(73436),
    t = i(4814),
    s = i(39772),
    l = i(52676);
   const o = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: o(i.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: i, ...c } = e;
     const d = (0, r.jA)();
     return (0, l.jsx)('div', { ...c, className: (0, t.Z)('margin-top--lg', i), children: (0, l.jsx)(s.Z, { items: o(d.items, n) }) });
    };
  },
  39772: (e, n, i) => {
   i.d(n, { Z: () => m });
   var r = i(73436),
    t = i(57229),
    s = i(41115),
    l = i(4814),
    o = i(52676);
   function c(e) {
    let { href: n, icon: i = '', title: r, description: s, children: c } = e;
    return (0, o.jsxs)('div', { className: 'card', children: [n ? (0, o.jsx)(t.r, { href: n, className: (0, l.Z)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', r] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [i, ' ', r] }), s && (0, o.jsx)('p', { className: 'cardDescription', children: s }), c] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, o.jsx)(c, { title: n.label, description: n.description, children: (0, o.jsx)(s.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(s.AS, { children: 'link' === e.type ? (0, o.jsx)(t.r, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(t.r, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function a(e) {
    let { item: n } = e;
    const i = (0, r.xz)(n.docId);
    return (0, o.jsx)(c, { href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, o.jsx)(a, { item: n });
     case 'category':
      return (0, o.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function p(e) {
    let { className: n } = e;
    const i = (0, r.jA)();
    return (0, o.jsx)(m, { items: i.items, className: n });
   }
   function m(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(p, { ...e });
    const t = (0, r.MN)(n);
    return (0, o.jsx)('section', { className: (0, l.Z)('row', i), children: t.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(h, { item: e }) }, n)) });
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var r = i(75271);
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
 },
]);
