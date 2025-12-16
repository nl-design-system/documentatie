'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98811],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => m });
   var t = i(63674),
    r = i(92420),
    s = i(45648),
    a = i(14537),
    c = i(13526),
    l = i(86070);
   function o({ href: e, icon: n = '', title: i, description: t, children: s }) {
    return (0, l.jsxs)('div', { className: 'card', children: [e ? (0, l.jsx)(r.N, { href: e, className: (0, c.A)('cardLink', 'utrecht-link'), children: (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, l.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, l.jsx)('p', { className: 'cardDescription', children: t }), s] });
   }
   function d({ item: e }) {
    return (0, l.jsx)(o, { title: e.label, description: e.description, children: (0, l.jsx)(a.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, l.jsx)(a.Er, { children: 'link' === e.type ? (0, l.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, l.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, l.jsx)(l.Fragment, {}) }, n)) }) });
   }
   function g({ item: e }) {
    const n = (0, s.cC)(e.docId);
    return (0, l.jsx)(o, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, l.jsx)(g, { item: e });
     case 'category':
      return (0, l.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const n = (0, t.$S)();
    return (0, l.jsx)(m, { items: n.items, className: e });
   }
   function m(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, l.jsx)(h, { ...e });
    const r = (0, t.d1)(n);
    return (0, l.jsx)('section', { className: (0, c.A)('row', i), ...e, children: r.map((e, n) => (0, l.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, l.jsx)(u, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, t.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => l });
   var t = i(63674),
    r = i(13526),
    s = i(7361),
    a = i(86070);
   const c = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: c(i.items, n) }] : e), []),
    l = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const l = (0, t.$S)();
     return (0, a.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, a.jsx)(s.A, { items: c(l.items, e) }) });
    };
  },
  55345: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => d, default: () => m, frontMatter: () => o, metadata: () => t, toc: () => u });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/README","title":"Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.","source":"@site/docs/richtlijnen/formulieren/confirmation/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation","slug":"/richtlijnen/formulieren/bevestigingspagina/","permalink":"/richtlijnen/formulieren/bevestigingspagina/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie bevestigingspagina","sidebar_position":3,"pagination_label":"Bevestigingspagina","description":"Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.","slug":"/richtlijnen/formulieren/bevestigingspagina/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Disabled submitbuttons","permalink":"/richtlijnen/formulieren/buttons/disabled-submitbuttons"},"next":{"title":"Bevestigingspagina","permalink":"/richtlijnen/formulieren/bevestigingspagina/"}}');
   var r = i(86070),
    s = i(85248),
    a = i(78734),
    c = i(14996),
    l = i(49484);
   const o = { title: 'Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie bevestigingspagina', sidebar_position: 3, pagination_label: 'Bevestigingspagina', description: 'Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.', slug: '/richtlijnen/formulieren/bevestigingspagina/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor de bevestigingspagina van een formulier',
    g = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...a.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-de-bevestigingspagina-van-een-formulier', children: 'Richtlijnen NL Design System voor de bevestigingspagina van een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Belangrijk voor het informeren van de gebruiker is hierbij:' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(l.F, { excludeDocIDs: ['richtlijnen/formulieren/confirmation/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(c.T, { id: 'vermeld-dat-het-formulier-succesvol-is-verzonden', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/succesmelding/', children: 'Vermeld dat het formulier succesvol is verzonden' }), '.'] }) }), '\n', (0, r.jsx)(c.T, { id: 'maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle\ngebruikers' }), '.'] }) }), '\n', (0, r.jsx)(c.T, { id: 'vertel-wat-de-vervolgacties-zijn', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen/', children: 'Vertel wat de vervolgacties zijn' }), '.'] }) }), '\n', (0, r.jsx)(c.T, { id: 'zorg-dat-de-gebruiker-contact-op-kan-nemen-bij-vragen', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen/', children: 'Zorg dat de gebruiker contact op kan nemen bij\nvragen' }), '.'] }) }), '\n', (0, r.jsx)(a.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
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
   i.d(n, { Ay: () => c, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => c });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => a });
   var t = i(71170),
    r = i(13526),
    s = i(86070);
   const a = ({ className: e, ...n }) => (0, s.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
