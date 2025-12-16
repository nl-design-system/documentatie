'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35143],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => j });
   var t = i(63674),
    r = i(92420),
    l = i(45648),
    s = i(14537),
    c = i(13526),
    o = i(86070);
   function a({ href: e, icon: n = '', title: i, description: t, children: l }) {
    return (0, o.jsxs)('div', { className: 'card', children: [e ? (0, o.jsx)(r.N, { href: e, className: (0, c.A)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, o.jsx)('p', { className: 'cardDescription', children: t }), l] });
   }
   function d({ item: e }) {
    return (0, o.jsx)(a, { title: e.label, description: e.description, children: (0, o.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(s.Er, { children: 'link' === e.type ? (0, o.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, o.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, o.jsx)(h, { item: e });
     case 'category':
      return (0, o.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, t.$S)();
    return (0, o.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(m, { ...e });
    const r = (0, t.d1)(n);
    return (0, o.jsx)('section', { className: (0, c.A)('row', i), ...e, children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(u, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => l });
   var t = i(13526),
    r = i(86070);
   const l = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, t.A)('nlds-fragment-redirect', n), children: e });
  },
  17362: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => d, default: () => j, frontMatter: () => a, metadata: () => t, toc: () => u });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/link/README","title":"Links in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het plaatsen van links binnen een formulier.","source":"@site/docs/richtlijnen/formulieren/link/README.mdx","sourceDirName":"richtlijnen/formulieren/link","slug":"/richtlijnen/formulieren/links/","permalink":"/richtlijnen/formulieren/links/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Links in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie links","sidebar_position":7,"pagination_label":"Links in een formulier","description":"Richtlijnen voor het plaatsen van links binnen een formulier.","slug":"/richtlijnen/formulieren/links/","keywords":["links","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke tekst label","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst"},"next":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"}}');
   var r = i(86070),
    l = i(85248),
    s = i(78734),
    c = i(14996),
    o = i(49484);
   const a = { title: 'Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie links', sidebar_position: 7, pagination_label: 'Links in een formulier', description: 'Richtlijnen voor het plaatsen van links binnen een formulier.', slug: '/richtlijnen/formulieren/links/', keywords: ['links', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor links in een formulier',
    h = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...s.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-links-in-een-formulier', children: 'Richtlijnen NL Design System voor links in een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(o.F, { excludeDocIDs: ['richtlijnen/formulieren/link/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(c.T, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/links/plaatsing/', children: 'Plaats de link boven het gerelateerde formulierveld' }), '.'] }) }), '\n', (0, r.jsx)(c.T, { id: 'zet-geen-link-in-een-label', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/links/niet-in-label/', children: 'Zet geen link in een label' }), '.'] }) }), '\n', (0, r.jsx)(c.T, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/links/nieuwe-tab/', children: 'Geef aan als een link in een nieuwe tab opent' }), '.'] }) }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => o });
   var t = i(63674),
    r = i(13526),
    l = i(7361),
    s = i(86070);
   const c = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: c(i.items, n) }] : e), []),
    o = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const o = (0, t.$S)();
     return (0, s.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(l.A, { items: c(o.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => t, d1: () => r });
   i(34374);
   function t(...e) {
    return i(41863).$S(...e);
   }
   function r(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => c, RM: () => l });
   var t = i(86070),
    r = i(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => c });
   var t = i(30758);
   const r = {},
    l = t.createContext(r);
   function s(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => s });
   var t = i(71170),
    r = i(13526),
    l = i(86070);
   const s = ({ className: e, ...n }) => (0, l.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
