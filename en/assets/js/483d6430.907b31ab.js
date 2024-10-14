'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7100],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var i = t(52676),
    o = t(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  58805: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => g, default: () => v, frontMatter: () => d, metadata: () => h, toc: () => j });
   var i = t(52676),
    o = t(24785);
   function r(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r();
   }
   function l(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'gebruik-svg-voor-iconen', children: 'Gebruik SVG voor iconen.' }), '\n', (0, i.jsx)(n.p, { children: 'SVG staat voor Scalable Vector Graphics en is een ideaal bestandsformaat voor iconen.' }), '\n', (0, i.jsx)(n.p, { children: 'Voordelen van SVG:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Schaalbaar zonder kwaliteitsverlies.' }), '\n', (0, i.jsx)(n.li, { children: 'Licht in gewicht wat bijdraagt aan korte laadtijden.' }), '\n', (0, i.jsx)(n.li, { children: 'Te kleuren door middel van CSS.' }), '\n', (0, i.jsx)(n.li, { children: 'Te animeren.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruik-geen-font-voor-iconen', children: 'Gebruik geen font voor iconen.' }), '\n', (0, i.jsx)(n.p, { children: "In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden. Zo kan iemand een eigen lettertype hebben ge\xefnstalleerd. Mensen met dyslexie stellen soms hun eigen lettertypen in voor een betere leesbaarheid. In dat geval worden de iconen vervangen door 'ontbrekende tekens'-symbolen. Dat gebeurt trouwens ook als het font niet geladen wordt." }), '\n', (0, i.jsx)(n.p, { children: "Ook kan een icoon bij een icoon-font gekoppeld zijn aan \xe9\xe9n bepaald teken. Zo kan een icoon voor sluiten toegewezen zijn aan een 'A'. Wanneer men een ander font gebruikt of als het font met de iconen niet wordt geladen staat er simpelweg een 'A'. Daarnaast wordt dit icoon door schermlezers ook uitgesproken als 'A'." }), '\n', (0, i.jsx)(n.h2, { id: 'toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }), '\n', (0, i.jsx)(n.p, { children: 'Iconen moeten altijd vergezeld worden door een, eventueel visueel verborgen, tekstlabel.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het icoon zelf moet het attribuut ', (0, i.jsx)(n.code, { children: 'focusable="false"' }), ' hebben om het uit de focus-volgorde te verwijderen. Dit is een standaardinstelling in sommige versies van Internet Explorer en Edge.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het is niet nodig een alternatieve tekst aan te bieden voor iconen waarbij de tekst al beschikbaar is. In dit geval geef je het icoon in de code ', (0, i.jsx)(n.code, { children: 'aria-hidden="true"' }), ' mee. Zo is het tekstlabel "Verwijderen" in het volgende voorbeeld voldoende, en is het niet nodig om het icoon te identificeren.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>\n  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">\n    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>\n  </svg>\n  <span>Delete</span>\n</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Alleen iconen die zeer goed ingeburgerd zijn, zoals een vergrootglas (voor zoeken) of een kruis (voor sluiten), zou je kunnen gebruiken zonder aanvullende visuele tekst. In deze gevallen wordt een visueel verborgen ', (0, i.jsx)(n.code, { children: '<span>' }), ' aanbevolen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg in deze gevallen de ', (0, i.jsx)(n.code, { children: '<span>' }), ' met behulp van de class ', (0, i.jsx)(n.code, { children: 'visually-hidden' }), ' of iets vergelijkbaars. Deze class verbergt de tekst enkel visueel. Schermlezers zullen de tekst nog steeds voorlezen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ook ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' kan dit voor elkaar krijgen maar ', (0, i.jsxs)(n.a, { href: 'https://heydonworks.com/article/aria-label-is-a-xenophobe', children: [(0, i.jsx)(n.code, { children: 'aria-label' }), ' kan voor vertaalproblemen zorgen'] }), '.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n' }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   var c = t(55400);
   const d = { title: 'Gebruik SVG voor iconen en geen font | Iconen | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Gebruik SVG voor iconen en geen font', pagination_label: 'Gebruik SVG voor iconen en geen font', description: 'In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.', slug: '/richtlijnen/stijl/iconen/gebruik-svg', keywords: ['iconen'] },
    g = 'Gebruik SVG voor iconen en geen font',
    h = { id: 'richtlijnen/stijl/icons/svg/README', title: 'Gebruik SVG voor iconen en geen font | Iconen | Richtlijnen', description: 'In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.', source: '@site/docs/richtlijnen/stijl/icons/8-svg/README.mdx', sourceDirName: 'richtlijnen/stijl/icons/8-svg', slug: '/richtlijnen/stijl/iconen/gebruik-svg', permalink: '/en/richtlijnen/stijl/iconen/gebruik-svg', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/icons/8-svg/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik SVG voor iconen en geen font | Iconen | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Gebruik SVG voor iconen en geen font', pagination_label: 'Gebruik SVG voor iconen en geen font', description: 'In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.', slug: '/richtlijnen/stijl/iconen/gebruik-svg', keywords: ['iconen'] }, sidebar: 'richtlijnen', previous: { title: 'Respecteer conventies', permalink: '/en/richtlijnen/stijl/iconen/respecteer-conventies' }, next: { title: 'Introductie', permalink: '/en/richtlijnen/formulieren' } },
    u = {},
    j = [];
   function p(e) {
    const n = { h1: 'h1', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'gebruik-svg-voor-iconen-en-geen-font', children: 'Gebruik SVG voor iconen en geen font' }), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(s, {}), '\n', (0, i.jsx)(c.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var i = t(75271);
   const o = {},
    r = i.createContext(o);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
