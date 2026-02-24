'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12370],
 {
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
  58773(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => a, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"richtlijnen/stijl/space/README","title":"Introductie richtlijnen voor ruimte \xb7 Richtlijnen","description":"Ruimte (Spacing in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen.","source":"@site/docs/richtlijnen/stijl/space/README.mdx","sourceDirName":"richtlijnen/stijl/space","slug":"/richtlijnen/stijl/ruimte/","permalink":"/richtlijnen/stijl/ruimte/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/space/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Introductie richtlijnen voor ruimte \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie ruimte","sidebar_position":3,"pagination_label":"Introductie richtlijnen voor ruimte","description":"Ruimte (Spacing in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen.","slug":"/richtlijnen/stijl/ruimte/","keywords":["ruimte"]},"sidebar":"richtlijnen","previous":{"title":"Let op voorkeursinstellingen voor kleur","permalink":"/richtlijnen/stijl/kleuren/voorkeuren"},"next":{"title":"Introductie richtlijnen voor ruimte","permalink":"/richtlijnen/stijl/ruimte/"}}');
   var r = i(86070),
    s = i(18439),
    o = i(78734);
   const l = { title: 'Introductie richtlijnen voor ruimte \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie ruimte', sidebar_position: 3, pagination_label: 'Introductie richtlijnen voor ruimte', description: 'Ruimte (Spacing in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen.', slug: '/richtlijnen/stijl/ruimte/', keywords: ['ruimte'] },
    a = 'Richtlijnen NL Design System voor ruimte',
    c = {},
    d = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Gerelateerde WCAG-succescriteria:', id: 'gerelateerde-wcag-succescriteria', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...o.RM];
   function h(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-ruimte', children: 'Richtlijnen NL Design System voor ruimte' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Ruimte (', (0, r.jsx)(n.em, { children: 'Spacing' }), ' in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen. Dit geldt voor componenten maar ook voor de algehele opmaak van een pagina ofwel ', (0, r.jsx)(n.em, { children: 'layout' })] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/stijl/space/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-wcag-succescriteria', children: 'Gerelateerde WCAG-succescriteria:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/1.4.12/', children: '1.4.12 Tekstafstand' }), ' (niveau AA)'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.5.8/', children: '2.5.8 Grootte van het aanwijsgebied (minimum)' }), ' (niveau AA)'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.5.5/', children: '2.5.8 Grootte van het aanwijsgebied (uitgebreid)' }), ' (niveau AAA)'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/', children: 'Visual Perception And The Principles Of Gestalt - Steven Bradley' }), (0, r.jsx)('br', {}), '\nArtikel waarin de verschillende gestalt principes worden beschreven.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62', children: 'Space in design systems - Nathan Curtis' }), (0, r.jsx)('br', {}), '\nArtikel waarin het toepassen van ruimte binnen een design system wordt beschreven.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://axesslab.com/hand-tremors/', children: 'Hand tremors and the giant-button-problem - Hampus Sethfors' }), (0, r.jsx)('br', {}), '\nArtikel, en video, waarin duidelijk wordt waarom het van belang is om voldoende witruimte bij grote interactieve elementen toe te voegen.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG2/supplemental/patterns/o3p10-whitespace/', children: 'Use White Spacing - Supplemental Guidance to WCAG 2' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van spacing. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, r.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, r.jsx)(o.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
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
 },
]);
