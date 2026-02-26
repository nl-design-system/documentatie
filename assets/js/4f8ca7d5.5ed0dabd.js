'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [48087],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => s });
   var o = i(30758);
   const r = {},
    t = o.createContext(r);
   function l(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => t });
   var o = i(13526),
    r = i(86070);
   const t = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, o.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => t });
   var o = i(86070),
    r = i(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  81001(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => a, default: () => m, frontMatter: () => d, metadata: () => o, toc: () => h }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/README","title":"Voorkom fouten in een formulier","description":"Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.","source":"@site/docs/richtlijnen/formulieren/help/README.mdx","sourceDirName":"richtlijnen/formulieren/help","slug":"/richtlijnen/formulieren/voorkom-fouten/","permalink":"/richtlijnen/formulieren/voorkom-fouten/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/README.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Voorkom fouten in een formulier","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie voorkom fouten","sidebar_position":13,"pagination_label":"Voorkom fouten in een formulier","description":"Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.","slug":"/richtlijnen/formulieren/voorkom-fouten/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Logische volgorde","permalink":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde"},"next":{"title":"Voorkom fouten in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/"}}');
   var r = i(86070),
    t = i(18439),
    l = i(78734),
    s = i(67414);
   const d = { title: 'Voorkom fouten in een formulier', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen voor het voorkomen van fouten door hulp te bieden aan de gebruiker in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor het voorkomen van fouten',
    c = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...l.RM];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, t.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-het-voorkomen-van-fouten', children: 'Richtlijnen NL Design System voor het voorkomen van fouten' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/help/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(s.T, { id: 'vermeld-duidelijk-of-een-veld-verplicht-is', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', children: 'Vermeld duidelijk of een veld verplicht is' }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/', children: 'Sta knippen en plakken van gegevens (zoals een wachtwoord)\ntoe' }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'keur-niet-te-snel-af', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af/', children: 'Keur niet te snel af' }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes/', children: 'Geef geldige waardes aan voor een invoerveld' }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'autocomplete', children: (0, r.jsxs)(n.p, { children: [(0, r.jsxs)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete/', children: ['Vertel aan de browser met ', (0, r.jsx)(n.code, { children: 'autocomplete' }), ' welke waarde verwacht wordt bij het invullen van een\nformulierveld'] }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen/', children: 'Vul bekende informatie in waar mogelijk' }), '.'] }) }), '\n', (0, r.jsx)(s.T, { id: 'maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen/', children: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te\nmaken' }), '.'] }) }), '\n', (0, r.jsx)(l.Ay, {})] })
    );
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
