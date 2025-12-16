'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20814],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => f });
   var r = i(63674),
    t = i(92420),
    o = i(45648),
    s = i(14537),
    l = i(13526),
    a = i(86070);
   function c({ href: e, icon: n = '', title: i, description: r, children: o }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(t.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), r && (0, a.jsx)('p', { className: 'cardDescription', children: r }), o] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(s.Er, { children: 'link' === e.type ? (0, a.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, o.cC)(e.docId);
    return (0, a.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(m, { item: e });
     case 'category':
      return (0, a.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const n = (0, r.$S)();
    return (0, a.jsx)(f, { items: n.items, className: e });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, a.jsx)(u, { ...e });
    const t = (0, r.d1)(n);
    return (0, a.jsx)('section', { className: (0, l.A)('row', i), ...e, children: t.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(h, { item: e }) }, n)) });
   }
  },
  12458: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => d, default: () => f, frontMatter: () => c, metadata: () => r, toc: () => h });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/questions/README","title":"Uit te vragen informatie in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor uit te vragen informatie in een formulier.","source":"@site/docs/richtlijnen/formulieren/questions/README.mdx","sourceDirName":"richtlijnen/formulieren/questions","slug":"/richtlijnen/formulieren/vragen/","permalink":"/richtlijnen/formulieren/vragen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/README.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Uit te vragen informatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie uit te vragen informatie","sidebar_position":11,"pagination_label":"Uit te vragen informatie in een formulier","description":"Richtlijnen voor uit te vragen informatie in een formulier.","slug":"/richtlijnen/formulieren/vragen/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen positieve tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var t = i(86070),
    o = i(85248),
    s = i(78734),
    l = i(14996),
    a = i(49484);
   const c = { title: 'Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie uit te vragen informatie', sidebar_position: 11, pagination_label: 'Uit te vragen informatie in een formulier', description: 'Richtlijnen voor uit te vragen informatie in een formulier.', slug: '/richtlijnen/formulieren/vragen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor uit te vragen informatie in een formulier',
    m = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-uit-te-vragen-informatie-in-een-formulier', children: 'Richtlijnen NL Design System voor uit te vragen informatie in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Welke informatie heb je nodig van je gebruiker? En welke niet? Waarom heb je bepaalde informatie nodig en wat doe je ermee? Overweeg dit zorgvuldig bij het samenstellen van een formulier.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(a.F, { excludeDocIDs: ['richtlijnen/formulieren/questions/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(l.T, { id: 'leg-uit-waarom-informatie-nodig-is', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/leg-uit-waarom/', children: 'Leg uit waarom informatie nodig is' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'check-of-informatie-\xe8cht-nodig-is', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/check-noodzaak/', children: 'Check of informatie \xe8cht nodig is' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/manieren-voor-contact/', children: 'Biedt verschillende manieren om contact op te nemen' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'vraag-niet-meerdere-keren-dezelfde-informatie-uit', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk/', children: 'Vraag niet meerdere keren dezelfde informatie uit' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'geef-invoervelden-geen-minimummaximum-tekstlengte', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/geen-min-max-lengte/', children: 'Geef invoervelden geen minimum en/of maximum aantal in te voeren\ntekens' }), '.'] }) }), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  14996: (e, n, i) => {
   i.d(n, { T: () => o });
   var r = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => a });
   var r = i(63674),
    t = i(13526),
    o = i(7361),
    s = i(86070);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const a = (0, r.$S)();
     return (0, s.jsx)('div', { ...i, className: (0, t.A)('margin-top--lg', n), children: (0, s.jsx)(o.A, { items: l(a.items, e) }) });
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
   i.d(n, { Ay: () => l, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => s });
   var r = i(71170),
    t = i(13526),
    o = i(86070);
   const s = ({ className: e, ...n }) => (0, o.jsx)(r.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
