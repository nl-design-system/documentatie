'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26877],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => j });
   var l = i(63674),
    r = i(92420),
    t = i(45648),
    s = i(14537),
    a = i(13526),
    c = i(86070);
   function o({ href: e, icon: n = '', title: i, description: l, children: t }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, a.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), l && (0, c.jsx)('p', { className: 'cardDescription', children: l }), t] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(o, { title: e.label, description: e.description, children: (0, c.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(s.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, t.cC)(e.docId);
    return (0, c.jsx)(o, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function m({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, l.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const r = (0, l.d1)(n);
    return (0, c.jsx)('section', { className: (0, a.A)('row', i), ...e, children: r.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(m, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => t });
   var l = i(13526),
    r = i(86070);
   const t = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, l.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => c });
   var l = i(63674),
    r = i(13526),
    t = i(7361),
    s = i(86070);
   const a = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: a(i.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const c = (0, l.$S)();
     return (0, s.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(t.A, { items: a(c.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => l, d1: () => r });
   i(34374);
   function l(...e) {
    return i(41863).$S(...e);
   }
   function r(...e) {
    return i(41863).d1(...e);
   }
  },
  78e3: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => d, default: () => j, frontMatter: () => o, metadata: () => l, toc: () => m });
   const l = JSON.parse('{"id":"richtlijnen/formulieren/label/README","title":"Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor labels in een formulier.","source":"@site/docs/richtlijnen/formulieren/label/README.mdx","sourceDirName":"richtlijnen/formulieren/label","slug":"/richtlijnen/formulieren/labels/","permalink":"/richtlijnen/formulieren/labels/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/README.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie labels","sidebar_position":6,"pagination_label":"Labels in een formulier","description":"Richtlijnen voor labels in een formulier.","slug":"/richtlijnen/formulieren/labels/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Descriptions in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/descriptions"},"next":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"}}');
   var r = i(86070),
    t = i(85248),
    s = i(78734),
    a = i(14996),
    c = i(49484);
   const o = { title: 'Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie labels', sidebar_position: 6, pagination_label: 'Labels in een formulier', description: 'Richtlijnen voor labels in een formulier.', slug: '/richtlijnen/formulieren/labels/', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor labels in een formulier',
    h = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-labels-in-een-formulier', children: 'Richtlijnen NL Design System voor labels in een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een label geeft aan welke gegevens de gebruiker bij een formulierveld in kan vullen.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/label/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(a.T, { id: 'geef-een-formulierveld-toegankelijke-naam-met-een-label', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '.'] }) }), '\n', (0, r.jsx)(a.T, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '.'] }) }), '\n', (0, r.jsx)(a.T, { id: 'zet-het-label-boven-het-formulierveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/plaatsing/', children: 'Zet het label boven het formulierveld' }), '.'] }) }), '\n', (0, r.jsx)(a.T, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar/', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }) }), '\n', (0, r.jsx)(a.T, { id: 'zet-alleen-tekst-in-het-label', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst/', children: 'Zet alleen tekst in het label' }), '.'] }) }), '\n', (0, r.jsx)(a.T, { id: 'gebruik-duidelijke-labelteksten', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst/', children: 'Gebruik duidelijke labelteksten' }), '.'] }) }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => t });
   var l = i(86070),
    r = i(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => a });
   var l = i(30758);
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
  92420: (e, n, i) => {
   i.d(n, { N: () => s });
   var l = i(71170),
    r = i(13526),
    t = i(86070);
   const s = ({ className: e, ...n }) => (0, t.jsx)(l.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
