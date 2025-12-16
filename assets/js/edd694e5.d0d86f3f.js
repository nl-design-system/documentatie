'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [97755],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => j });
   var r = i(63674),
    t = i(92420),
    l = i(45648),
    s = i(14537),
    o = i(13526),
    c = i(86070);
   function a({ href: e, icon: n = '', title: i, description: r, children: l }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, c.jsx)('p', { className: 'cardDescription', children: r }), l] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(s.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(m, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, r.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(u, { ...e });
    const t = (0, r.d1)(n);
    return (0, c.jsx)('section', { className: (0, o.A)('row', i), ...e, children: t.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(h, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => l });
   var r = i(13526),
    t = i(86070);
   const l = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => c });
   var r = i(63674),
    t = i(13526),
    l = i(7361),
    s = i(86070);
   const o = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: o(i.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const c = (0, r.$S)();
     return (0, s.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, s.jsx)(l.A, { items: o(c.items, e) }) });
    };
  },
  62934: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => d, default: () => j, frontMatter: () => a, metadata: () => r, toc: () => h });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/when-which/README","title":"Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen","description":"Richtlijnen voor het kiezen van formulierelementen.","source":"@site/docs/richtlijnen/formulieren/when-which/README.mdx","sourceDirName":"richtlijnen/formulieren/when-which","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/README.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie wanneer welk element?","sidebar_position":14,"pagination_label":"Wanneer gebruik je welk formulierelement","description":"Richtlijnen voor het kiezen van formulierelementen.","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Vermijd invoerpatronen","permalink":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen"},"next":{"title":"Wanneer gebruik je welk formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/"}}');
   var t = i(86070),
    l = i(85248),
    s = i(78734),
    o = i(14996),
    c = i(49484);
   const a = { title: 'Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie wanneer welk element?', sidebar_position: 14, pagination_label: 'Wanneer gebruik je welk formulierelement', description: 'Richtlijnen voor het kiezen van formulierelementen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor wanneer je welk formulierelement gebruikt',
    m = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-wanneer-je-welk-formulierelement-gebruikt', children: 'Richtlijnen NL Design System voor wanneer je welk formulierelement gebruikt' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je wilt natuurlijk dat zoveel mogelijk mensen een formulier kunnen invullen op de makkelijkste manier. We geven twee richtlijnen die hierbij helpen.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/when-which/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(o.T, { id: 'zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een\nalternatief' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'kies-voor-het-meest-gebruiksvriendelijke-formulierelement', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid/', children: 'Kies voor het meest gebruiksvriendelijke\nformulierelement' }), '.'] }) }), '\n', (0, t.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over wat het beste formulierelement is voor wat je wilt uitvragen. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
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
   i.d(n, { Ay: () => o, RM: () => l });
   var r = i(86070),
    t = i(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => o });
   var r = i(30758);
   const t = {},
    l = r.createContext(t);
   function s(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => s });
   var r = i(71170),
    t = i(13526),
    l = i(86070);
   const s = ({ className: e, ...n }) => (0, l.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
