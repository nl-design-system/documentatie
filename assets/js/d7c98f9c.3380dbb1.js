'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36246],
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
   function u({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(u, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function m({ className: e }) {
    const n = (0, r.$S)();
    return (0, c.jsx)(j, { items: n.items, className: e });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, c.jsx)(m, { ...e });
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
  40371: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => d, default: () => j, frontMatter: () => a, metadata: () => r, toc: () => h });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/README","title":"Visueel ontwerp van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het visueel ontwerp van formulieren.","source":"@site/docs/richtlijnen/formulieren/visual-design/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design","slug":"/richtlijnen/formulieren/visueel-ontwerp/","permalink":"/richtlijnen/formulieren/visueel-ontwerp/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/README.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Visueel ontwerp van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie visueel ontwerp","sidebar_position":12,"pagination_label":"Visueel ontwerp van formulieren","description":"Richtlijnen voor het visueel ontwerp van formulieren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geef gebruikers voldoende tijd","permalink":"/richtlijnen/formulieren/status/enough-time"},"next":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"}}');
   var t = i(86070),
    l = i(85248),
    s = i(78734),
    o = i(14996),
    c = i(49484);
   const a = { title: 'Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie visueel ontwerp', sidebar_position: 12, pagination_label: 'Visueel ontwerp van formulieren', description: 'Richtlijnen voor het visueel ontwerp van formulieren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor het visueel ontwerp van een formulier',
    u = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...s.RM];
   function m(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-het-visueel-ontwerp-van-een-formulier', children: 'Richtlijnen NL Design System voor het visueel ontwerp van een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Waarmee moet je als (UX-)designer rekening houden bij het ontwerpen van een toegankelijk en gebruikersvriendelijke formulier.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(c.F, { excludeDocIDs: ['richtlijnen/formulieren/visual-design/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(o.T, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar/', children: 'Geef duidelijk aan waar het invoerveld is' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'geef-tekst-voldoende-kleurcontrast', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'geef-placeholders-voldoende-kleurcontrast', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar/', children: 'Geef placeholders voldoende kleurcontrast' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'maak-toetsenbord-focus-goed-zichtbaar', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'maak-aanklikbare-formuliervelden-groot-genoeg', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'geef-fouten-weer-met-meer-dan-alleen-kleur', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur/', children: 'Geef fouten weer met meer dan alleen kleur' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons/', children: 'Gebruik geen afbeelding voor buttons maar stijl tekst met\nCSS' }), '.'] }) }), '\n', (0, t.jsx)(o.T, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }) }), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
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
