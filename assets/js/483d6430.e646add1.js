'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57797],
 {
  11094: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => g, default: () => p, frontMatter: () => h, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"richtlijnen/stijl/icons/svg/README","title":"Gebruik SVG voor iconen en geen font \xb7 Iconen \xb7 Richtlijnen","description":"In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.","source":"@site/docs/richtlijnen/stijl/icons/8-svg/README.mdx","sourceDirName":"richtlijnen/stijl/icons/8-svg","slug":"/richtlijnen/stijl/iconen/gebruik-svg","permalink":"/richtlijnen/stijl/iconen/gebruik-svg","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/icons/8-svg/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik SVG voor iconen en geen font \xb7 Iconen \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Gebruik SVG voor iconen en geen font","pagination_label":"Gebruik SVG voor iconen en geen font","description":"In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.","slug":"/richtlijnen/stijl/iconen/gebruik-svg","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Respecteer conventies","permalink":"/richtlijnen/stijl/iconen/respecteer-conventies"},"next":{"title":"Content","permalink":"/richtlijnen/content"}}');
   var o = i(86070),
    r = i(85248),
    s = i(78734);
   function l(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l();
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'gebruik-svg-voor-iconen', children: 'Gebruik SVG voor iconen.' }), '\n', (0, o.jsx)(n.p, { children: 'SVG staat voor Scalable Vector Graphics en is een ideaal bestandsformaat voor iconen.' }), '\n', (0, o.jsx)(n.p, { children: 'Voordelen van SVG:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Schaalbaar zonder kwaliteitsverlies.' }), '\n', (0, o.jsx)(n.li, { children: 'Licht in gewicht wat bijdraagt aan korte laadtijden.' }), '\n', (0, o.jsx)(n.li, { children: 'Te kleuren door middel van CSS.' }), '\n', (0, o.jsx)(n.li, { children: 'Te animeren.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'gebruik-geen-font-voor-iconen', children: 'Gebruik geen font voor iconen.' }), '\n', (0, o.jsx)(n.p, { children: "In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden. Zo kan iemand een eigen lettertype hebben ge\xefnstalleerd. Mensen met dyslexie stellen soms hun eigen lettertypen in voor een betere leesbaarheid. In dat geval worden de iconen vervangen door 'ontbrekende tekens'-symbolen. Dat gebeurt trouwens ook als het font niet geladen wordt." }), '\n', (0, o.jsxs)(n.p, { children: ["Ook kan een icoon bij een icoon-font gekoppeld zijn aan \xe9\xe9n bepaald teken. Zo kan een icoon voor sluiten toegewezen zijn aan een 'A'. Wanneer men een ander font gebruikt of als het font met de iconen niet wordt geladen staat er simpelweg een 'A'. Daarnaast wordt dit icoon door ", (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), " ook uitgesproken als 'A'."] }), '\n', (0, o.jsx)(n.h2, { id: 'toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }), '\n', (0, o.jsx)(n.p, { children: 'Iconen moeten altijd vergezeld worden door een, eventueel visueel verborgen, tekstlabel.' }), '\n', (0, o.jsxs)(n.p, { children: ['Het icoon zelf moet het attribuut ', (0, o.jsx)(n.code, { children: 'focusable="false"' }), ' hebben om het uit de focus-volgorde te verwijderen. Dit is een standaardinstelling in sommige versies van Internet Explorer en Edge.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het is niet nodig een alternatieve tekst aan te bieden voor iconen waarbij de tekst al beschikbaar is. In dit geval geef je het icoon in de code ', (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' mee. Zo is het tekstlabel "Verwijderen" in het volgende voorbeeld voldoende, en is het niet nodig om het icoon te identificeren.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button>\n  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">\n    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>\n  </svg>\n  <span>Delete</span>\n</button>\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Alleen iconen die zeer goed ingeburgerd zijn, zoals een vergrootglas (voor zoeken) of een kruis (voor sluiten), zou je kunnen gebruiken zonder aanvullende visuele tekst. In deze gevallen wordt een visueel verborgen ', (0, o.jsx)(n.code, { children: '<span>' }), ' aanbevolen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Verberg in deze gevallen de ', (0, o.jsx)(n.code, { children: '<span>' }), ' met behulp van de class ', (0, o.jsx)(n.code, { children: 'visually-hidden' }), ' of iets vergelijkbaars. Deze class verbergt de tekst enkel visueel. Screenreaders zullen de tekst nog steeds voorlezen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Ook ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' kan dit voor elkaar krijgen maar ', (0, o.jsxs)(n.a, { href: 'https://heydonworks.com/article/aria-label-is-a-xenophobe', children: [(0, o.jsx)(n.code, { children: 'aria-label' }), ' kan voor vertaalproblemen zorgen'] }), '.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n' }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   const h = { title: 'Gebruik SVG voor iconen en geen font \xb7 Iconen \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Gebruik SVG voor iconen en geen font', pagination_label: 'Gebruik SVG voor iconen en geen font', description: 'In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en ge\xefnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden.', slug: '/richtlijnen/stijl/iconen/gebruik-svg', keywords: ['iconen'] },
    g = 'Gebruik SVG voor iconen en geen font',
    u = {},
    v = [{ value: 'Gebruik SVG voor iconen.', id: 'gebruik-svg-voor-iconen', level: 2 }, { value: 'Gebruik geen font voor iconen.', id: 'gebruik-geen-font-voor-iconen', level: 2 }, { value: 'Toepassen van een SVG in code', id: 'toepassen-van-een-svg-in-code', level: 2 }, ...s.RM];
   function j(e) {
    const n = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-svg-voor-iconen-en-geen-font', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j(e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => r });
   var t = i(86070),
    o = i(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
