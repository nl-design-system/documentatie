'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [97755],
 {
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
  62934(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => u, frontMatter: () => a, metadata: () => r, toc: () => m }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/when-which/README","title":"Wanneer gebruik je welk formulierelement?","description":"Richtlijnen voor het kiezen van formulierelementen.","source":"@site/docs/richtlijnen/formulieren/when-which/README.mdx","sourceDirName":"richtlijnen/formulieren/when-which","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/README.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Wanneer gebruik je welk formulierelement?","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie wanneer welk element?","sidebar_position":14,"pagination_label":"Wanneer gebruik je welk formulierelement","description":"Richtlijnen voor het kiezen van formulierelementen.","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Vermijd invoerpatronen","permalink":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen"},"next":{"title":"Wanneer gebruik je welk formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/"}}');
   var t = i(86070),
    l = i(18439),
    o = i(78734),
    s = i(67414);
   const a = { title: 'Wanneer gebruik je welk formulierelement?', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie wanneer welk element?', sidebar_position: 14, pagination_label: 'Wanneer gebruik je welk formulierelement', description: 'Richtlijnen voor het kiezen van formulierelementen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor wanneer je welk formulierelement gebruikt',
    d = {},
    m = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...o.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, l.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-wanneer-je-welk-formulierelement-gebruikt', children: 'Richtlijnen NL Design System voor wanneer je welk formulierelement gebruikt' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je wilt natuurlijk dat zoveel mogelijk mensen een formulier kunnen invullen op de makkelijkste manier. We geven twee richtlijnen die hierbij helpen.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/when-which/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een\nalternatief' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'kies-voor-het-meest-gebruiksvriendelijke-formulierelement', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid/', children: 'Kies voor het meest gebruiksvriendelijke\nformulierelement' }), '.'] }) }), '\n', (0, t.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over wat het beste formulierelement is voor wat je wilt uitvragen. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, t.jsx)(o.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
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
