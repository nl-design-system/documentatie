'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [22275],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => f });
   var r = i(63674),
    t = i(92420),
    l = i(45648),
    o = i(14537),
    s = i(13526),
    d = i(86070);
   function c({ href: e, icon: n = '', title: i, description: r, children: l }) {
    return (0, d.jsxs)('div', { className: 'card', children: [e ? (0, d.jsx)(t.N, { href: e, className: (0, s.A)('cardLink', 'utrecht-link'), children: (0, d.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, d.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, d.jsx)('p', { className: 'cardDescription', children: r }), l] });
   }
   function a({ item: e }) {
    return (0, d.jsx)(c, { title: e.label, description: e.description, children: (0, d.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, d.jsx)(o.Er, { children: 'link' === e.type ? (0, d.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, d.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, d.jsx)(d.Fragment, {}) }, n)) }) });
   }
   function u({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, d.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, d.jsx)(u, { item: e });
     case 'category':
      return (0, d.jsx)(a, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, r.$S)();
    return (0, d.jsx)(f, { items: n.items, className: e });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, d.jsx)(m, { ...e });
    const t = (0, r.d1)(n);
    return (0, d.jsx)('section', { className: (0, s.A)('row', i), ...e, children: t.map((e, n) => (0, d.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, d.jsx)(h, { item: e }) }, n)) });
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => l });
   var r = i(13526),
    t = i(86070);
   const l = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => d });
   var r = i(63674),
    t = i(13526),
    l = i(7361),
    o = i(86070);
   const s = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: s(i.items, n) }] : e), []),
    d = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const d = (0, r.$S)();
     return (0, o.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, o.jsx)(l.A, { items: s(d.items, e) }) });
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
  76065: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => a, default: () => f, frontMatter: () => c, metadata: () => r, toc: () => h });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/error/README","title":"Foutmeldingen in een formulier \xb7 Richtlijnen","description":"Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?","source":"@site/docs/richtlijnen/formulieren/error/README.mdx","sourceDirName":"richtlijnen/formulieren/error","slug":"/richtlijnen/formulieren/foutmeldingen/","permalink":"/richtlijnen/formulieren/foutmeldingen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Foutmeldingen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie foutmeldingen","sidebar_position":5,"pagination_label":"Foutmeldingen","description":"Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?","slug":"/richtlijnen/formulieren/foutmeldingen/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Lengte description","permalink":"/richtlijnen/formulieren/descriptions/lengte"},"next":{"title":"Foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/"}}');
   var t = i(86070),
    l = i(85248),
    o = i(78734),
    s = i(14996),
    d = i(49484);
   const c = { title: 'Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie foutmeldingen', sidebar_position: 5, pagination_label: 'Foutmeldingen', description: 'Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?', slug: '/richtlijnen/formulieren/foutmeldingen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor foutmeldingen in een formulier',
    u = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-foutmeldingen-in-een-formulier', children: 'Richtlijnen NL Design System voor foutmeldingen in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik duidelijke en goed getimede foutmeldingen en logische validatieregels. Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?' }), '\n', (0, t.jsxs)(n.p, { children: ['Lees ook onze blogpost ', (0, t.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ', die stap voor stap ingaat op het voorkomen, aanduiden en het geven van hulp bij foutmeldingen in een formulier voor verschillende soorten gebruikers.'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(d.F, { excludeDocIDs: ['richtlijnen/formulieren/error/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'controleer-op-het-juiste-moment-op-fouten', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/controleren/', children: 'Controleer op het juiste moment op fouten' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/beschrijven/', children: 'Schrijf een foutmelding uit in tekst' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'schrijf-een-duidelijke-foutmelding', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/duidelijk/', children: 'Schrijf een duidelijke foutmelding' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/plaatsing/', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'gebruik-geen-html-formuliervalidatie', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/', children: 'Gebruik geen HTML-formuliervalidatie' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/samenvatting/', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-feedback-aan-screenreadergebruikers', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback/', children: 'Geef feedback aan screenreadergebruikers' }), '.'] }) }), '\n', (0, t.jsx)(n.p, { children: 'Twee uitgebreide bronnen die de aspecten van foutmeldingen goed beschrijven:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Nielsen Norman Group: ', (0, t.jsx)(n.a, { href: 'https://www.nngroup.com/articles/error-message-guidelines/', children: (0, t.jsx)('span', { lang: 'en', children: 'Error-Message Guidelines' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['GOV.UK: ', (0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/', children: (0, t.jsx)('span', { lang: 'en', children: 'Error Message' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => s, RM: () => l });
   var r = i(86070),
    t = i(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => s });
   var r = i(30758);
   const t = {},
    l = r.createContext(t);
   function o(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => o });
   var r = i(71170),
    t = i(13526),
    l = i(86070);
   const o = ({ className: e, ...n }) => (0, l.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
