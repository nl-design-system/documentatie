'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20814],
 {
  3227(e, n, i) {
   i.d(n, { A: () => f });
   var t = i(60316),
    r = i(45282),
    s = i(2264),
    o = i(29181),
    l = i(13526),
    a = i(86070);
   function c({ href: e, icon: n = '', title: i, description: t, children: s }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, a.jsx)('p', { className: 'cardDescription', children: t }), s] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(o.Er, { children: 'link' === e.type ? (0, a.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function m({ item: e }) {
    const n = (0, s.cC)(e.docId);
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
    const n = (0, t.$S)();
    return (0, a.jsx)(f, { items: n.items, className: e });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, a.jsx)(u, { ...e });
    const r = (0, t.d1)(n);
    return (0, a.jsx)('section', { className: (0, l.A)('row', i), ...e, children: r.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(h, { item: e }) }, n)) });
   }
  },
  12458(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => d, default: () => f, frontMatter: () => c, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/questions/README","title":"Uit te vragen informatie in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor uit te vragen informatie in een formulier.","source":"@site/docs/richtlijnen/formulieren/questions/README.mdx","sourceDirName":"richtlijnen/formulieren/questions","slug":"/richtlijnen/formulieren/vragen/","permalink":"/richtlijnen/formulieren/vragen/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/README.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Uit te vragen informatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie uit te vragen informatie","sidebar_position":11,"pagination_label":"Uit te vragen informatie in een formulier","description":"Richtlijnen voor uit te vragen informatie in een formulier.","slug":"/richtlijnen/formulieren/vragen/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen positieve tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var r = i(86070),
    s = i(18439),
    o = i(78734),
    l = i(67414),
    a = i(89874);
   const c = { title: 'Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie uit te vragen informatie', sidebar_position: 11, pagination_label: 'Uit te vragen informatie in een formulier', description: 'Richtlijnen voor uit te vragen informatie in een formulier.', slug: '/richtlijnen/formulieren/vragen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor uit te vragen informatie in een formulier',
    m = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-uit-te-vragen-informatie-in-een-formulier', children: 'Richtlijnen NL Design System voor uit te vragen informatie in een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Welke informatie heb je nodig van je gebruiker? En welke niet? Waarom heb je bepaalde informatie nodig en wat doe je ermee? Overweeg dit zorgvuldig bij het samenstellen van een formulier.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(a.F, { excludeDocIDs: ['richtlijnen/formulieren/questions/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l.T, { id: 'leg-uit-waarom-informatie-nodig-is', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/leg-uit-waarom/', children: 'Leg uit waarom informatie nodig is' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'check-of-informatie-\xe8cht-nodig-is', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/check-noodzaak/', children: 'Check of informatie \xe8cht nodig is' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/manieren-voor-contact/', children: 'Biedt verschillende manieren om contact op te nemen' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'vraag-niet-meerdere-keren-dezelfde-informatie-uit', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk/', children: 'Vraag niet meerdere keren dezelfde informatie uit' }), '.'] }) }), '\n', (0, r.jsx)(l.T, { id: 'geef-invoervelden-geen-minimummaximum-tekstlengte', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/geen-min-max-lengte/', children: 'Geef invoervelden geen minimum en/of maximum aantal in te voeren\ntekens' }), '.'] }) }), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => l });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  45282(e, n, i) {
   i.d(n, { F: () => s, N: () => o });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, ...n }) => {
     const { to: i, href: t, ...s } = n;
     let o = i || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...s, children: e }));
    },
    o = ({ className: e, ...n }) => (0, r.jsx)(s, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60316(e, n, i) {
   i.d(n, { $S: () => t, d1: () => r });
   i(74147);
   function t(...e) {
    return i(97819).$S(...e);
   }
   function r(...e) {
    return i(97819).d1(...e);
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, t.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  89874(e, n, i) {
   i.d(n, { F: () => a });
   var t = i(60316),
    r = i(13526),
    s = i(3227),
    o = i(86070);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const a = (0, t.$S)();
     return (0, o.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, o.jsx)(s.A, { items: l(a.items, e) }) });
    };
  },
 },
]);
