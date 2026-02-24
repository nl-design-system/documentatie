'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36246],
 {
  18439(e, n, i) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  40371(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => d, default: () => m, frontMatter: () => a, metadata: () => r, toc: () => u }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/README","title":"Visueel ontwerp van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor het visueel ontwerp van formulieren.","source":"@site/docs/richtlijnen/formulieren/visual-design/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design","slug":"/richtlijnen/formulieren/visueel-ontwerp/","permalink":"/richtlijnen/formulieren/visueel-ontwerp/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/README.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Visueel ontwerp van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie visueel ontwerp","sidebar_position":12,"pagination_label":"Visueel ontwerp van formulieren","description":"Richtlijnen voor het visueel ontwerp van formulieren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geef gebruikers voldoende tijd","permalink":"/richtlijnen/formulieren/status/enough-time"},"next":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"}}');
   var t = i(86070),
    o = i(18439),
    l = i(78734),
    s = i(67414);
   const a = { title: 'Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie visueel ontwerp', sidebar_position: 12, pagination_label: 'Visueel ontwerp van formulieren', description: 'Richtlijnen voor het visueel ontwerp van formulieren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor het visueel ontwerp van een formulier',
    c = {},
    u = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...l.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-het-visueel-ontwerp-van-een-formulier', children: 'Richtlijnen NL Design System voor het visueel ontwerp van een formulier' }) }), '\n', (0, t.jsx)(n.p, { children: 'Waarmee moet je als (UX-)designer rekening houden bij het ontwerpen van een toegankelijk en gebruikersvriendelijke formulier.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/visual-design/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(s.T, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar/', children: 'Geef duidelijk aan waar het invoerveld is' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-tekst-voldoende-kleurcontrast', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-placeholders-voldoende-kleurcontrast', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar/', children: 'Geef placeholders voldoende kleurcontrast' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'maak-toetsenbord-focus-goed-zichtbaar', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'maak-aanklikbare-formuliervelden-groot-genoeg', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'geef-fouten-weer-met-meer-dan-alleen-kleur', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur/', children: 'Geef fouten weer met meer dan alleen kleur' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons/', children: 'Gebruik geen afbeelding voor buttons maar stijl tekst met\nCSS' }), '.'] }) }), '\n', (0, t.jsx)(s.T, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }) }), '\n', (0, t.jsx)(l.Ay, {})] })
    );
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => o });
   var r = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, ...i }) => (0, t.jsx)('div', { ...i, className: (0, r.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => o });
   var r = i(86070),
    t = i(18439);
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
 },
]);
