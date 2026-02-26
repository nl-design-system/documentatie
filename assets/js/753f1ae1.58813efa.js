'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79504],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => l });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  35710(e, n, i) {
   (i.r(n), i.d(n, { assets: () => a, contentTitle: () => c, default: () => u, frontMatter: () => d, metadata: () => r, toc: () => h }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/README","title":"Descriptions in een formulier","description":"Richtlijnen voor het toepassen van descriptions in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/README.mdx","sourceDirName":"richtlijnen/formulieren/description","slug":"/richtlijnen/formulieren/descriptions/","permalink":"/richtlijnen/formulieren/descriptions/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/README.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Descriptions in een formulier","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie descriptions","sidebar_position":4,"pagination_label":"Descriptions in een formulier","description":"Richtlijnen voor het toepassen van descriptions in een formulier.","slug":"/richtlijnen/formulieren/descriptions/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/succesmelding"},"next":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"}}');
   var t = i(86070),
    s = i(18439),
    o = i(78734),
    l = i(67414);
   const d = { title: 'Descriptions in een formulier', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie descriptions', sidebar_position: 4, pagination_label: 'Descriptions in een formulier', description: 'Richtlijnen voor het toepassen van descriptions in een formulier.', slug: '/richtlijnen/formulieren/descriptions/', keywords: ['labels', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor descriptions in een formulier',
    a = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-descriptions-in-een-formulier', children: 'Richtlijnen NL Design System voor descriptions in een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen.' }), '\n', (0, t.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description', children: '"accessible description"' }), ', die in toegankelijkheidsstandaarden wordt gebruikt.'] }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/description/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(l.T, { id: 'koppel-een-description-aan-het-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description in code aan het formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing/', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'meerdere-descriptions-koppelen', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/meerdere-koppelen/', children: 'Meerdere descriptions koppelen' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'fieldset-plaats-descriptions-tussen-legend-en-eerste-item', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: 'Fieldset: Plaats descriptions tussen legend en eerste\nitem' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'houd-het-aanklikbare-gedeelte-groot-genoeg', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte/', children: 'Houd het aanklikbare gedeelte groot genoeg' }), '.'] }) }), '\n', (0, t.jsx)(l.T, { id: 'houd-de-description-kort-en-to-the-point', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/lengte/', children: 'Houd de description kort en to-the-point' }), '.'] }) }), '\n', (0, t.jsx)(o.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
