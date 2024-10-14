'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [61442],
 {
  55400: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var l = i(52676),
    r = i(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  11762: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => o, default: () => j, frontMatter: () => c, metadata: () => d, toc: () => m });
   var l = i(52676),
    r = i(24785),
    t = i(2334),
    s = i(21004),
    a = i(55400);
   const c = { title: 'Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie labels', sidebar_position: 6, pagination_label: 'Labels in een formulier', description: 'Richtlijnen voor labels in een formulier.', slug: '/richtlijnen/formulieren/labels/', keywords: ['labels', 'formulier', 'design', 'code'] },
    o = 'Richtlijnen NL Design System voor labels in een formulier',
    d = { id: 'richtlijnen/formulieren/label/README', title: 'Labels in een formulier | Richtlijnen', description: 'Richtlijnen voor labels in een formulier.', source: '@site/docs/richtlijnen/formulieren/label/README.mdx', sourceDirName: 'richtlijnen/formulieren/label', slug: '/richtlijnen/formulieren/labels/', permalink: '/richtlijnen/formulieren/labels/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/README.mdx', tags: [], version: 'current', sidebarPosition: 6, frontMatter: { title: 'Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie labels', sidebar_position: 6, pagination_label: 'Labels in een formulier', description: 'Richtlijnen voor labels in een formulier.', slug: '/richtlijnen/formulieren/labels/', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Screenreaderfeedback', permalink: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback' }, next: { title: 'Labels in een formulier', permalink: '/richtlijnen/formulieren/labels/' } },
    h = {},
    m = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-labels-in-een-formulier', children: 'Richtlijnen NL Design System voor labels in een formulier' }), '\n', (0, l.jsx)(n.p, { children: 'Een label geeft aan welke gegevens de gebruiker bij een formulierveld in kan vullen.' }), '\n', (0, l.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, l.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/label/README'] }), '\n', (0, l.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, l.jsx)(t._, { id: 'geef-een-formulierveld-toegankelijke-naam-met-een-label', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '.'] }) }), '\n', (0, l.jsx)(t._, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '.'] }) }), '\n', (0, l.jsx)(t._, { id: 'zet-het-label-boven-het-formulierveld', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/plaatsing', children: 'Zet het label boven het formulierveld' }), '.'] }) }), '\n', (0, l.jsx)(t._, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }) }), '\n', (0, l.jsx)(t._, { id: 'zet-alleen-tekst-in-het-label', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst', children: 'Zet alleen tekst in het label' }), '.'] }) }), '\n', (0, l.jsx)(t._, { id: 'gebruik-duidelijke-labelteksten', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst', children: 'Gebruik duidelijke labelteksten' }), '.'] }) }), '\n', (0, l.jsx)(a.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
  },
  2334: (e, n, i) => {
   i.d(n, { _: () => t });
   var l = i(4814),
    r = (i(75271), i(52676));
   const t = (e) => {
    let { children: n, className: i, ...t } = e;
    return (0, r.jsx)('div', { ...t, className: (0, l.Z)('nlds-fragment-redirect', i), children: n });
   };
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => c });
   var l = i(34221),
    r = i(4814),
    t = (i(75271), i(20537)),
    s = i(52676);
   const a = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: a(i.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: i, ...c } = e;
     const o = (0, l.jA)();
     return (0, s.jsx)('div', { ...c, className: (0, r.Z)('margin-top--lg', i), children: (0, s.jsx)(t.Z, { items: a(o.items, n) }) });
    };
  },
  20537: (e, n, i) => {
   i.d(n, { Z: () => j });
   var l = i(34221),
    r = i(90441),
    t = i(56150),
    s = i(4814);
   i(75271);
   const a = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var c = i(52676);
   function o(e) {
    let { href: n, icon: i = '', title: l, description: t, children: o } = e;
    return (0, c.jsxs)('div', { className: (0, s.Z)('card', a.card), children: [n ? (0, c.jsx)(r.Z, { href: n, className: (0, s.Z)(a.cardLink, 'utrecht-link'), children: (0, c.jsxs)('h2', { className: (0, s.Z)(a.cardTitle), children: [i, ' ', l] }) }) : (0, c.jsxs)('h2', { className: (0, s.Z)(a.cardTitle), children: [i, ' ', l] }), t && (0, c.jsx)('p', { className: (0, s.Z)(a.cardDescription), children: t }), o] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, c.jsx)(o, { title: n.label, description: n.description, children: (0, c.jsx)(t.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(t.AS, { children: 'link' === e.type ? (0, c.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h(e) {
    let { item: n } = e;
    const i = (0, l.xz)(n.docId);
    return (0, c.jsx)(o, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, c.jsx)(h, { item: n });
     case 'category':
      return (0, c.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function u(e) {
    let { className: n } = e;
    const i = (0, l.jA)();
    return (0, c.jsx)(j, { items: i.items, className: n });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const r = (0, l.MN)(n);
    return (0, c.jsx)('section', { className: (0, s.Z)('row', i), children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => s });
   var l = i(75271);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
