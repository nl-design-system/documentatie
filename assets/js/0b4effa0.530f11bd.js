'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98811],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => o });
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
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  55345(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => g }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/README","title":"Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.","source":"@site/docs/richtlijnen/formulieren/confirmation/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation","slug":"/richtlijnen/formulieren/bevestigingspagina/","permalink":"/richtlijnen/formulieren/bevestigingspagina/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie bevestigingspagina","sidebar_position":3,"pagination_label":"Bevestigingspagina","description":"Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.","slug":"/richtlijnen/formulieren/bevestigingspagina/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Disabled submitbuttons","permalink":"/richtlijnen/formulieren/buttons/disabled-submitbuttons"},"next":{"title":"Bevestigingspagina","permalink":"/richtlijnen/formulieren/bevestigingspagina/"}}');
   var r = i(86070),
    s = i(18439),
    a = i(78734),
    o = i(67414);
   const l = { title: 'Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie bevestigingspagina', sidebar_position: 3, pagination_label: 'Bevestigingspagina', description: 'Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.', slug: '/richtlijnen/formulieren/bevestigingspagina/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor de bevestigingspagina van een formulier',
    d = {},
    g = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...a.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-de-bevestigingspagina-van-een-formulier', children: 'Richtlijnen NL Design System voor de bevestigingspagina van een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Belangrijk voor het informeren van de gebruiker is hierbij:' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/confirmation/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(o.T, { id: 'vermeld-dat-het-formulier-succesvol-is-verzonden', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/succesmelding/', children: 'Vermeld dat het formulier succesvol is verzonden' }), '.'] }) }), '\n', (0, r.jsx)(o.T, { id: 'maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle\ngebruikers' }), '.'] }) }), '\n', (0, r.jsx)(o.T, { id: 'vertel-wat-de-vervolgacties-zijn', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen/', children: 'Vertel wat de vervolgacties zijn' }), '.'] }) }), '\n', (0, r.jsx)(o.T, { id: 'zorg-dat-de-gebruiker-contact-op-kan-nemen-bij-vragen', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen/', children: 'Zorg dat de gebruiker contact op kan nemen bij\nvragen' }), '.'] }) }), '\n', (0, r.jsx)(a.Ay, {})] })
    );
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, t.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
