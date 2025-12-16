'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [48087],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => f });
   var r = i(63674),
    t = i(92420),
    o = i(45648),
    l = i(14537),
    s = i(13526),
    c = i(86070);
   function a({ href: e, icon: n = '', title: i, description: r, children: o }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, s.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, c.jsx)('p', { className: 'cardDescription', children: r }), o] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(l.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(l.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, o.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, r.$S)();
    return (0, c.jsx)(f, { items: n.items, className: e });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(m, { ...e });
    const t = (0, r.d1)(n);
    return (0, c.jsx)('section', { className: (0, s.A)('row', i), ...e, children: t.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(u, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => o });
   var r = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => c });
   var r = i(63674),
    t = i(13526),
    o = i(7361),
    l = i(86070);
   const s = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: s(i.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const c = (0, r.$S)();
     return (0, l.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, l.jsx)(o.A, { items: s(c.items, e) }) });
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
   i.d(n, { Ay: () => s, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  81001: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => d, default: () => f, frontMatter: () => a, metadata: () => r, toc: () => u });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/help/README","title":"Voorkom fouten in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.","source":"@site/docs/richtlijnen/formulieren/help/README.mdx","sourceDirName":"richtlijnen/formulieren/help","slug":"/richtlijnen/formulieren/voorkom-fouten/","permalink":"/richtlijnen/formulieren/voorkom-fouten/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/README.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Voorkom fouten in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie voorkom fouten","sidebar_position":13,"pagination_label":"Voorkom fouten in een formulier","description":"Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.","slug":"/richtlijnen/formulieren/voorkom-fouten/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Logische volgorde","permalink":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde"},"next":{"title":"Voorkom fouten in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/"}}');
   var t = i(86070),
    o = i(85248),
    l = i(78734),
    s = i(14996),
    c = i(49484);
   const a = { title: 'Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor het voorkomen van fouten',
    h = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...l.RM];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-het-voorkomen-van-fouten', children: 'Richtlijnen NL Design System voor het voorkomen van fouten' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/help/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'vermeld-duidelijk-of-een-veld-verplicht-is', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', children: 'Vermeld duidelijk of een veld verplicht is' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/', children: 'Sta knippen en plakken van gegevens (zoals een wachtwoord)\ntoe' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'keur-niet-te-snel-af', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af/', children: 'Keur niet te snel af' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes/', children: 'Geef geldige waardes aan voor een invoerveld' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'autocomplete', children: (0, t.jsxs)(n.p, { children: [(0, t.jsxs)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete/', children: ['Vertel aan de browser met ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' welke waarde verwacht wordt bij het invullen van een\nformulierveld'] }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen/', children: 'Vul bekende informatie in waar mogelijk' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen/', children: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te\nmaken' }), '.'] }) }), '\n', (0, t.jsx)(l.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => s });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function l(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => l });
   var r = i(71170),
    t = i(13526),
    o = i(86070);
   const l = ({ className: e, ...n }) => (0, o.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
