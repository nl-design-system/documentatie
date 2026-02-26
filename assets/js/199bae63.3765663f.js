'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [35143],
 {
  17362(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => m, frontMatter: () => a, metadata: () => r, toc: () => h }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/link/README","title":"Links in een formulier","description":"Richtlijnen voor het plaatsen van links binnen een formulier.","source":"@site/docs/richtlijnen/formulieren/link/README.mdx","sourceDirName":"richtlijnen/formulieren/link","slug":"/richtlijnen/formulieren/links/","permalink":"/richtlijnen/formulieren/links/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Links in een formulier","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie links","sidebar_position":7,"pagination_label":"Links in een formulier","description":"Richtlijnen voor het plaatsen van links binnen een formulier.","slug":"/richtlijnen/formulieren/links/","keywords":["links","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke tekst label","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst"},"next":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"}}');
   var t = i(86070),
    l = i(18439),
    o = i(78734),
    s = i(67414);
   const a = { title: 'Links in een formulier', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie links', sidebar_position: 7, pagination_label: 'Links in een formulier', description: 'Richtlijnen voor het plaatsen van links binnen een formulier.', slug: '/richtlijnen/formulieren/links/', keywords: ['links', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor links in een formulier',
    d = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, l.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-links-in-een-formulier', children: 'Richtlijnen NL Design System voor links in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/link/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/plaatsing/', children: 'Plaats de link boven het gerelateerde formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'zet-geen-link-in-een-label', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/niet-in-label/', children: 'Zet geen link in een label' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/nieuwe-tab/', children: 'Geef aan als een link in een nieuwe tab opent' }), '.'] }) }), '\n', (0, t.jsx)(o.Ay, {})] })
    );
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  18439(e, n, i) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(l.Provider, { value: n }, e.children));
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => l });
   var r = i(13526),
    t = i(86070);
   const l = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => l });
   var r = i(86070),
    t = i(18439);
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
 },
]);
