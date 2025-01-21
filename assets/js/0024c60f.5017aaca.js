(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [72837],
 {
  78187: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    s = t(87118);
   function i(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA, en voor ', (0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/wcag/2.5.5', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), ') AAA.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  31573: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    s = t(87118);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;" }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte;' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  82959: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    s = t(87118);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  41730: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => H, component: () => I, contentTitle: () => O, default: () => X, description: () => V, frontMatter: () => M, issueNumber: () => B, metadata: () => E, title: () => U, toc: () => Z });
   var r,
    s,
    i,
    o,
    c,
    l,
    a,
    d = t(52676),
    h = t(87118),
    u = t(17223),
    m = t(75271);
   function g() {
    return (
     (g = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
         }
         return e;
        }),
     g.apply(this, arguments)
    );
   }
   const p = (e) => {
    let { title: n, titleId: t, ...d } = e;
    return m.createElement('svg', g({ width: 960, height: 540, viewBox: '0 0 960 540', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-label': 'Een gekleurd vierkantje, aangeduid met het cijfer 1.', role: 'img', 'aria-labelledby': t }, d), n ? m.createElement('title', { id: t }, n) : null, r || (r = m.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), s || (s = m.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), i || (i = m.createElement('path', { fill: '#5315F6', d: 'M463.5 253.5h33v33h-33z' })), o || (o = m.createElement('path', { stroke: '#E4E7EC', d: 'M463.5 253.5h33v33h-33z' })), c || (c = m.createElement('rect', { x: 384, y: 254, width: 32, height: 32, rx: 16, fill: '#DE00A4' })), l || (l = m.createElement('path', { d: 'M402.502 264.368V276.5H400v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43h2.25Z', fill: '#fff' })), a || (a = m.createElement('path', { d: 'M416 270h48', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'bevel' })));
   };
   var j = t(78187);
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(n.p, { children: 'Vertel in tekst welke kleur wordt weergegeven. Denk hierbij bijvoorbeeld de naam van de kleur, de hex-code of de hsl-waarde, de transparantie, het doel van de kleur, de CSS-class.' }), '\n', (0, d.jsx)(n.p, { children: 'Dan is het voor screenreadergebruikers en mensen die slechtziend of kleurenblind zijn ook duidelijk welke kleur bedoeld wordt.' }), '\n', (0, d.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, d.jsxs)(n.ul, { children: ['\n', (0, d.jsx)(n.li, { children: (0, d.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/niet-kleur-alleen', children: 'Vertrouw niet op kleur alleen' }) }), '\n', (0, d.jsx)(n.li, { children: (0, d.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/waarneming', children: 'Let op verschillen in waarneming van kleur' }) }), '\n'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(w, { ...e }) }) : w(e);
   }
   function v(e) {
    const n = { code: 'code', p: 'p', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(n.p, { children: 'Een screenreadergebruiker kan herkennen welk kleurvlak bij welke eigenschappen hoort.\nDit is niet alleen via de visuele informatie beschikbaar, maar ook vanuit de semantiek van de HTML-code.' }), '\n', (0, d.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door het weergeven van het kleurvlak en de data in een tabel ', (0, d.jsx)(n.code, { children: '<table>' }), ', een description list ', (0, d.jsx)(n.code, { children: '<dl>' }), ' of in een ongenummerde lijst ', (0, d.jsx)(n.code, { children: '<ul>' }), '.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(v, { ...e }) }) : v(e);
   }
   function k(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.p, { children: ['Een screenreadergebruiker kan herkennen welke kleurvlakken bij welke eigenschappen horen als de gebruiker van boven naar beneden de webpagina doorleest.\nDe connectie tussen kleurvlak en eigenschappen is niet alleen via de visuele informatie beschikbaar, maar ook in de volgorde van de HTML-code in de ', (0, d.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), '.'] }), '\n', (0, d.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen' }), '\n', (0, d.jsxs)(n.ul, { children: ['\n', (0, d.jsx)(n.li, { children: (0, d.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n'] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(k, { ...e }) }) : k(e);
   }
   var b = t(54042);
   function x(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(n.p, { children: ['Geef het kleurvlak (of een kader rond het kleurvlak) een kleurcontrast met de achtergrond van minimaal 3:1. Dit is te controleren met de ', (0, d.jsx)(n.a, { href: 'https://nldesignsystem.nl/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, d.jsx)(n.p, { children: 'Zorg ervoor dat het vlak visueel goed te onderscheiden is als kleurvlak.' }), '\n', (0, d.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, d.jsxs)(n.ul, { children: ['\n', (0, d.jsx)(n.li, { children: (0, d.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(x, { ...e }) }) : x(e);
   }
   var T = t(31573),
    G = t(82959);
   function W(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(n.p, { children: 'Gebruik geen afbeelding om de eigenschappen van een kleurvlak weer te geven, maar gebruik hiervoor tekst. Dan schaalt de tekst goed mee als de gebruiker inzoomt en blijft deze leesbaar.' }), '\n', (0, d.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, d.jsxs)(n.ul, { children: ['\n', (0, d.jsx)(n.li, { children: (0, d.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button', children: 'Afbeeldingen als buttons' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(W, { ...e }) }) : W(e);
   }
   var z = t(98388),
    S = t(97520),
    N = t(76233),
    L = t(55240),
    _ = t(8657);
   function D(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(n.h1, { id: 'gebruik-color-sample', children: 'Gebruik Color Sample' }), '\n', (0, d.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, d.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, d.jsxs)(n.p, { children: [(0, d.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: [(0, d.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/color-sample-css'] }), '\nversie 1.'] }), '\n', (0, d.jsxs)(n.p, { children: ['Gebruik de ', (0, d.jsx)(n.code, { children: 'nl-color-sample' }), ' class name op een ', (0, d.jsx)(n.code, { children: 'svg' }), ' element:'] }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-html', children: '<svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n  <path d="M0 0H32V32H0Z" fill="currentcolor" />\n</svg>\n' }) }), '\n', (0, d.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan dat je ze goed aan elkaar linkt. Bijvoorbeeld door er een ', (0, d.jsx)(n.code, { children: 'figure' }), ' omheen te zetten:'] }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-html', children: '<h1>Huisstijlkleuren</h1>\n<figure>\n  <ColorSample value="deeppink" aria-labelledby="kleur-1" />\n  <figcaption id="kleur-1">Roze</figcaption>\n</figure>\n' }) }), '\n', (0, d.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-css\n' }) }), '\n', (0, d.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/color-sample-css@1/dist/color-sample.css"\n/>\n' }) }), '\n', (0, d.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, d.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/color-sample-css/dist/color-sample.css" />\n' }) }), '\n', (0, d.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/color-sample-css/color-sample.css";\n' }) }), '\n', (0, d.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, d.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, d.jsxs)(n.p, { children: [(0, d.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: [(0, d.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/color-sample-react'] }), '\nversie 1.'] }), '\n', (0, d.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-react\n' }) }), '\n', (0, d.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-jsx', children: 'import { ColorSample } from "@nl-design-system-candidate/color-sample-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <ColorSample value="deeppink" />\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, d.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan een ', (0, d.jsx)(n.code, { children: 'id' }), ' op de beschrijving die je met ', (0, d.jsx)(n.code, { children: 'aria-labelledby' }), ' koppelt aan de ', (0, d.jsx)(n.code, { children: 'ColorSample' }), ':'] }), '\n', (0, d.jsx)(n.pre, { children: (0, d.jsx)(n.code, { className: 'language-jsx', children: 'export const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <figure>\n          <ColorSample value="deeppink"/>\n          <figcaption>\n            Roze\n          </figcaption>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, d.jsx)(n.h2, { id: 'figma', children: 'Figma' }), '\n', (0, d.jsxs)(n.p, { children: ['De Figma component staat in ', (0, d.jsx)(n.a, { href: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=15527-33899&t=j0HWpfOYWPeYBX0r-4', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Color Sample' }), '.'] })] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(D, { ...e }) }) : D(e);
   }
   var F = t(57716);
   const M = { title: 'Color Sample', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Color Sample', pagination_label: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', slug: '/color-sample', keywords: ['colour', 'kleur', 'voorbeeld', 'color swatch'] },
    O = void 0,
    E = { id: 'componenten/color-sample/index', title: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', source: '@site/docs/componenten/color-sample/index.mdx', sourceDirName: 'componenten/color-sample', slug: '/color-sample', permalink: '/color-sample', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/color-sample/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Color Sample', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Color Sample', pagination_label: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', slug: '/color-sample', keywords: ['colour', 'kleur', 'voorbeeld', 'color swatch'] }, sidebar: 'componenten', previous: { title: 'Code Block', permalink: '/code-block' }, next: { title: 'Data Badge', permalink: '/data-badge' } },
    H = {},
    Z = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Gebruik deze component', id: 'gebruik-deze-component', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    U = 'Color Sample',
    V = 'Toont een voorbeeld van een kleur.',
    B = 325,
    I = u.find((e) => e.number === B);
   function $(e) {
    const n = { h2: 'h2', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, d.jsx)(_.Rv, { component: I, headingLevel: 1, description: V }),
      '\n',
      (0, d.jsx)(S.I, { component: I }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, d.jsx)(N.B, { component: I, illustration: p }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'gebruik-deze-component', children: 'Gebruik deze component' }),
      '\n',
      (0, d.jsx)(F.U, { omitH1: !0, headingLevel: 3, children: (0, d.jsx)(P, {}) }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, d.jsx)(_.cN, { component: I, headingLevel: 3 }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, d.jsx)(_.W, { component: I, headingLevel: 3 }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, d.jsx)(j.ZP, {}),
      '\n',
      (0, d.jsx)(L.t, { headingLevel: 4, testCategory: 'Toegankelijkheid algemeen', items: [{ title: 'De eigenschappen van de Color Sample staan in tekst', sc: '1.4.5', status: '', component: (0, d.jsx)(R, {}) }] }),
      '\n',
      (0, d.jsx)(L.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid visueel ontwerp',
       items: [
        { title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is', sc: '1.4.1', status: '', component: (0, d.jsx)(b.ZP, {}) },
        { title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende', sc: '1.4.3', status: '', component: (0, d.jsx)(z.ZP, {}) },
        { title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond', sc: '1.4.11', status: '', component: (0, d.jsx)(C, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(L.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, d.jsx)(G.ZP, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, d.jsx)(T.ZP, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(L.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid screenreader',
       items: [
        { title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven', sc: '1.1.1', status: '', component: (0, d.jsx)(y, {}) },
        { title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar', sc: '1.3.1', status: '', component: (0, d.jsx)(f, {}) },
        { title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort', sc: '1.3.2', status: '', component: (0, d.jsx)(A, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, d.jsx)(_.vM, { component: I, headingLevel: 3 }),
     ],
    });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, h.a)(), ...e.components };
    return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)($, { ...e }) }) : $(e);
   }
  },
  54042: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    s = t(87118);
   function i(e) {
    const n = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  98388: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    s = t(87118);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het contrast van de tekstkleur ten opzichte van de achtergrondkleur moet hoog genoeg zijn, zodat de tekst in het algemeen goed leesbaar wordt gevonden.' }), '\n', (0, r.jsx)(n.p, { children: 'De criteria voor kleurcontrast zijn:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/contrast/?background-color=white&color=%23767676', children: '4,5:1 contrast' }), ' voor normale tekst.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/contrast/?background-color=white&color=%23949494', children: '3:1 contrast' }), ' voor grotere letters (vanaf 24 pixels).'] }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Tekst die over een afbeelding staat, moet ook voldoende contrast hebben met de kleuren in de afbeelding er omheen.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze eis geldt niet voor tekst op een logo of van een merknaam, of tekst op een afbeelding die alleen ter decoratie dient en geen deel uitmaakt van de inhoud.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  98507: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [99612, 99612], './utrecht-backdrop.entry.js': [191, 191], './utrecht-breadcrumb-nav.entry.js': [95643, 95643], './utrecht-checkbox.entry.js': [41865, 41865], './utrecht-column-layout.entry.js': [11868, 11868], './utrecht-contact-card-template.entry.js': [83069, 83069], './utrecht-custom-checkbox.entry.js': [64916, 64916], './utrecht-data-list-actions.entry.js': [27897, 27897], './utrecht-data-list-item.entry.js': [63619, 63619], './utrecht-data-list-key.entry.js': [5503, 5503], './utrecht-data-list-value.entry.js': [5183, 5183], './utrecht-data-list.entry.js': [17399, 17399], './utrecht-digid-button.entry.js': [36383, 36383], './utrecht-digid-logo.entry.js': [76975, 76975], './utrecht-eherkenning-logo.entry.js': [6453, 6453], './utrecht-eidas-logo.entry.js': [48911, 48911], './utrecht-form-field-error-message.entry.js': [59077, 59077], './utrecht-form-toggle.entry.js': [77346, 77346], './utrecht-html-content.entry.js': [77160, 77160], './utrecht-icon-afspraak-maken.entry.js': [82758, 82758], './utrecht-icon-afval-container.entry.js': [99748, 99748], './utrecht-icon-afval-containerpas.entry.js': [87122, 87122], './utrecht-icon-afval-kalender.entry.js': [44408, 44408], './utrecht-icon-afval-pmd.entry.js': [30590, 30590], './utrecht-icon-afval-scheiden.entry.js': [52052, 52052], './utrecht-icon-afval.entry.js': [51073, 51073], './utrecht-icon-afvalkalender.entry.js': [61043, 61043], './utrecht-icon-alleen.entry.js': [9137, 9137], './utrecht-icon-arrow.entry.js': [9698, 9698], './utrecht-icon-auto.entry.js': [37949, 37949], './utrecht-icon-begroting.entry.js': [22552, 22552], './utrecht-icon-bestemmingsplan.entry.js': [54782, 54782], './utrecht-icon-betaaldatum.entry.js': [40398, 40398], './utrecht-icon-bewijsstukken.entry.js': [4859, 4859], './utrecht-icon-bijstand.entry.js': [1813, 1813], './utrecht-icon-blad.entry.js': [32273, 32273], './utrecht-icon-bouwproject.entry.js': [68732, 68732], './utrecht-icon-brandgevaar.entry.js': [85576, 85576], './utrecht-icon-brief-betalen.entry.js': [6416, 6416], './utrecht-icon-checkmark.entry.js': [80180, 80180], './utrecht-icon-chevron-down.entry.js': [37822, 37822], './utrecht-icon-chevron-left.entry.js': [47567, 47567], './utrecht-icon-chevron-right.entry.js': [80431, 80431], './utrecht-icon-chevron-up.entry.js': [78767, 78767], './utrecht-icon-close.entry.js': [93658, 93658], './utrecht-icon-college-b-w.entry.js': [5132, 5132], './utrecht-icon-container-bio.entry.js': [8353, 8353], './utrecht-icon-container-glas.entry.js': [95483, 95483], './utrecht-icon-container-groenafval.entry.js': [39280, 39280], './utrecht-icon-container-met-zak.entry.js': [12825, 12825], './utrecht-icon-container-papier.entry.js': [43897, 43897], './utrecht-icon-container-pmd.entry.js': [12335, 12335], './utrecht-icon-container-restafval.entry.js': [74123, 74123], './utrecht-icon-container-textiel.entry.js': [54807, 54807], './utrecht-icon-container.entry.js': [98078, 98078], './utrecht-icon-cross.entry.js': [86788, 86788], './utrecht-icon-dakloos.entry.js': [15285, 15285], './utrecht-icon-dementie.entry.js': [87989, 87989], './utrecht-icon-documenten.entry.js': [38391, 38391], './utrecht-icon-duurzaam.entry.js': [87714, 87714], './utrecht-icon-eenzaamheid.entry.js': [85512, 85512], './utrecht-icon-eikenprocessie.entry.js': [7650, 7650], './utrecht-icon-elektrisch-rijden.entry.js': [75634, 75634], './utrecht-icon-energie-vergoeding.entry.js': [77197, 77197], './utrecht-icon-energietransitie.entry.js': [39032, 39032], './utrecht-icon-error.entry.js': [66684, 66684], './utrecht-icon-evenementen.entry.js': [16, 16], './utrecht-icon-facebook.entry.js': [96252, 96252], './utrecht-icon-fiets.entry.js': [86846, 86846], './utrecht-icon-filter.entry.js': [76417, 76417], './utrecht-icon-geboorte.entry.js': [77112, 77112], './utrecht-icon-gebruiker-centraal.entry.js': [14040, 14040], './utrecht-icon-gebruiker-ingelogd.entry.js': [69088, 69088], './utrecht-icon-gegevenswoordenboek.entry.js': [98552, 98552], './utrecht-icon-geluid.entry.js': [56042, 56042], './utrecht-icon-gemeente-locatie.entry.js': [51295, 51295], './utrecht-icon-gemeenteraad.entry.js': [73738, 73738], './utrecht-icon-gereedschap.entry.js': [11758, 11758], './utrecht-icon-gezicht.entry.js': [45251, 45251], './utrecht-icon-gezin.entry.js': [31054, 31559], './utrecht-icon-glas-afval.entry.js': [36827, 36827], './utrecht-icon-glijbaan.entry.js': [64246, 64246], './utrecht-icon-grafiek.entry.js': [8038, 8038], './utrecht-icon-grofvuil-ophalen.entry.js': [53455, 53455], './utrecht-icon-grofvuil.entry.js': [97402, 97402], './utrecht-icon-hamburger-menu.entry.js': [96403, 96403], './utrecht-icon-herdenking.entry.js': [21537, 21537], './utrecht-icon-hondenbelasting.entry.js': [2587, 2587], './utrecht-icon-horeca.entry.js': [42583, 42583], './utrecht-icon-horecavergunning.entry.js': [76720, 76720], './utrecht-icon-huis-en-omgeving.entry.js': [70389, 70389], './utrecht-icon-huis.entry.js': [74718, 74718], './utrecht-icon-huishoudelijk-geweld.entry.js': [71742, 71742], './utrecht-icon-hulp-huishouden.entry.js': [15743, 15743], './utrecht-icon-hulp-vervoer.entry.js': [64536, 64536], './utrecht-icon-hulp-zorg.entry.js': [20600, 20600], './utrecht-icon-hulpmiddelen-gezin.entry.js': [78043, 78043], './utrecht-icon-hulpverlening.entry.js': [33031, 33031], './utrecht-icon-idee.entry.js': [83921, 83921], './utrecht-icon-informatie.entry.js': [70196, 70196], './utrecht-icon-information.entry.js': [85103, 85103], './utrecht-icon-innovatie.entry.js': [57154, 57154], './utrecht-icon-inspraak-inwoners.entry.js': [47395, 47395], './utrecht-icon-instagram.entry.js': [20876, 20876], './utrecht-icon-kalender.entry.js': [66077, 66077], './utrecht-icon-kennis.entry.js': [80033, 80033], './utrecht-icon-kerstbomen.entry.js': [31714, 31714], './utrecht-icon-klachten.entry.js': [17400, 17400], './utrecht-icon-kroon.entry.js': [90589, 90589], './utrecht-icon-laadpaal.entry.js': [29065, 29065], './utrecht-icon-language.entry.js': [66689, 66689], './utrecht-icon-lantaarnpaal-oud.entry.js': [32607, 32607], './utrecht-icon-lantaarnpaal.entry.js': [10601, 10601], './utrecht-icon-leren.entry.js': [66234, 66234], './utrecht-icon-let-op.entry.js': [87315, 87315], './utrecht-icon-linkedin.entry.js': [94398, 94398], './utrecht-icon-list-check.entry.js': [40870, 40870], './utrecht-icon-list-number.entry.js': [28720, 28720], './utrecht-icon-list.entry.js': [65300, 65300], './utrecht-icon-loupe.entry.js': [97618, 97618], './utrecht-icon-markt.entry.js': [47171, 47171], './utrecht-icon-melding-boom.entry.js': [38023, 38023], './utrecht-icon-melding-klacht.entry.js': [60266, 60266], './utrecht-icon-melding-openbareruimte.entry.js': [41320, 41320], './utrecht-icon-melding-verlichting.entry.js': [80027, 80027], './utrecht-icon-melding.entry.js': [19928, 19928], './utrecht-icon-menselijk.entry.js': [26939, 26939], './utrecht-icon-menu-dot-open.entry.js': [407, 407], './utrecht-icon-menu-dot.entry.js': [69162, 69162], './utrecht-icon-meterkast.entry.js': [1176, 1176], './utrecht-icon-milieu-ontheffing.entry.js': [19679, 19679], './utrecht-icon-milieu-zone.entry.js': [52671, 52671], './utrecht-icon-minus-vertical.entry.js': [653, 653], './utrecht-icon-minus.entry.js': [81403, 81403], './utrecht-icon-mobiliteit.entry.js': [97788, 97788], './utrecht-icon-natuur.entry.js': [31377, 31377], './utrecht-icon-nieuw-huis.entry.js': [78740, 78740], './utrecht-icon-nieuwsbrief.entry.js': [22097, 22097], './utrecht-icon-nummerbord.entry.js': [56251, 56251], './utrecht-icon-om-het-huis.entry.js': [77372, 77372], './utrecht-icon-omgeving.entry.js': [27917, 27917], './utrecht-icon-omgevingsvisie.entry.js': [51285, 51285], './utrecht-icon-omgevingswet.entry.js': [18287, 18287], './utrecht-icon-onderhoud.entry.js': [42629, 42629], './utrecht-icon-ondernemen.entry.js': [84131, 84131], './utrecht-icon-openingstijden.entry.js': [50640, 50640], './utrecht-icon-over-de-stad.entry.js': [3350, 3350], './utrecht-icon-overlijden.entry.js': [29052, 29052], './utrecht-icon-panden.entry.js': [73874, 73874], './utrecht-icon-park.entry.js': [62396, 62396], './utrecht-icon-parkeerkaart.entry.js': [67e3, 67e3], './utrecht-icon-parkeervergunning.entry.js': [53164, 54866], './utrecht-icon-parken.entry.js': [51831, 51831], './utrecht-icon-parkeren-bedrijven.entry.js': [30200, 30200], './utrecht-icon-parkeren-betaalautomaat.entry.js': [8568, 8568], './utrecht-icon-parkeren-betalen.entry.js': [87733, 87733], './utrecht-icon-parkeren.entry.js': [20030, 20030], './utrecht-icon-participatie-campagne.entry.js': [34913, 34913], './utrecht-icon-participatie-like.entry.js': [38139, 38139], './utrecht-icon-participatie-pitch.entry.js': [11063, 11063], './utrecht-icon-paspoort.entry.js': [23249, 23249], './utrecht-icon-presentatie.entry.js': [21904, 21904], './utrecht-icon-prijskaartje.entry.js': [35137, 35137], './utrecht-icon-read-aloud.entry.js': [65225, 65225], './utrecht-icon-rijbewijs.entry.js': [77863, 77863], './utrecht-icon-rioolheffing.entry.js': [34030, 34030], './utrecht-icon-rolstoel.entry.js': [25514, 25514], './utrecht-icon-schild-gemeente-utrecht.entry.js': [80627, 80627], './utrecht-icon-search.entry.js': [48233, 48233], './utrecht-icon-shoppen.entry.js': [93607, 93607], './utrecht-icon-sinterklaas.entry.js': [69869, 69869], './utrecht-icon-slechtziende-hoordende.entry.js': [26489, 26489], './utrecht-icon-sport-en-cultuur.entry.js': [45330, 45330], './utrecht-icon-sport-voetbal.entry.js': [43350, 43350], './utrecht-icon-sport.entry.js': [18842, 18842], './utrecht-icon-stookverbod.entry.js': [87544, 87544], './utrecht-icon-strand.entry.js': [8824, 8824], './utrecht-icon-strooien.entry.js': [21764, 21764], './utrecht-icon-subsidie-gezin.entry.js': [12795, 12795], './utrecht-icon-subsidie.entry.js': [74362, 74362], './utrecht-icon-t-shirt.entry.js': [63424, 63424], './utrecht-icon-thuiswerken.entry.js': [45784, 45784], './utrecht-icon-toeslag.entry.js': [74545, 74545], './utrecht-icon-trein.entry.js': [88369, 88369], './utrecht-icon-trouwen.entry.js': [76990, 76990], './utrecht-icon-twitter.entry.js': [35149, 35149], './utrecht-icon-user.entry.js': [19878, 19878], './utrecht-icon-uw-wijk.entry.js': [45596, 45596], './utrecht-icon-vaccinatie.entry.js': [8305, 8305], './utrecht-icon-veilige-wijk.entry.js': [49973, 49973], './utrecht-icon-vergaderen.entry.js': [74755, 74755], './utrecht-icon-vergaderendigitaal.entry.js': [19918, 19918], './utrecht-icon-vergoeding.entry.js': [61950, 61950], './utrecht-icon-verhuizen.entry.js': [64874, 64874], './utrecht-icon-verkeerslicht.entry.js': [85865, 85865], './utrecht-icon-verkiezingen.entry.js': [82844, 82844], './utrecht-icon-verslaving.entry.js': [45363, 45363], './utrecht-icon-vervoersvoorziening.entry.js': [45210, 45210], './utrecht-icon-virus.entry.js': [79680, 79680], './utrecht-icon-vluchtelingen.entry.js': [87776, 87776], './utrecht-icon-voorzieningen-vervoer.entry.js': [80081, 80081], './utrecht-icon-vrijwilligerswerk.entry.js': [63802, 63802], './utrecht-icon-vuilnisbak.entry.js': [21374, 21374], './utrecht-icon-vuilniszak.entry.js': [29190, 29190], './utrecht-icon-vuurwerk.entry.js': [74652, 74652], './utrecht-icon-wandelstok.entry.js': [30982, 30982], './utrecht-icon-warm.entry.js': [97377, 97377], './utrecht-icon-warning.entry.js': [44075, 44075], './utrecht-icon-werken.entry.js': [59390, 59390], './utrecht-icon-werkzaamheden.entry.js': [51112, 51112], './utrecht-icon-whatsapp.entry.js': [26039, 26039], './utrecht-icon-wonen-kosten.entry.js': [18118, 18118], './utrecht-icon-woning-zoeken.entry.js': [29197, 29197], './utrecht-icon-x.entry.js': [19362, 19362], './utrecht-icon-youtube.entry.js': [20187, 20187], './utrecht-icon-zelfstandig-wonen.entry.js': [61393, 61393], './utrecht-icon-zoom-minus.entry.js': [50545, 50545], './utrecht-icon-zoom-plus.entry.js': [68278, 68278], './utrecht-icon-zoomin.entry.js': [25870, 25870], './utrecht-icon-zoomout.entry.js': [48005, 48005], './utrecht-icon-zorg-huis.entry.js': [7463, 7463], './utrecht-icon-zweefpaal.entry.js': [66426, 66426], './utrecht-icon-zwemmen.entry.js': [47566, 47566], './utrecht-logo-button.entry.js': [54250, 54250], './utrecht-map-marker.entry.js': [99319, 99319], './utrecht-multiline-data.entry.js': [13746, 13746], './utrecht-page-footer.entry.js': [2950, 2950], './utrecht-pagination.entry.js': [50370, 50370], './utrecht-progress-list-item.entry.js': [34351, 34351], './utrecht-progress-list.entry.js': [25989, 25989], './utrecht-progress-sublist-item.entry.js': [48316, 48316], './utrecht-sidenav.entry.js': [78510, 78510], './utrecht-surface.entry.js': [89905, 89905], './utrecht-table-body.entry.js': [92786, 92786], './utrecht-table-caption.entry.js': [66250, 24469], './utrecht-table-cell.entry.js': [75028, 75028], './utrecht-table-footer.entry.js': [78800, 78800], './utrecht-table-header-cell.entry.js': [99930, 99930], './utrecht-table-header.entry.js': [10472, 10472], './utrecht-table-row.entry.js': [45872, 45872], './utrecht-table.entry.js': [42176, 42176], './utrecht-textarea.entry.js': [41192, 41192], './utrecht-textbox.entry.js': [88451, 88451] };
   function s(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 98507), (e.exports = s);
  },
  35038: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => c, um: () => a, wu: () => o });
   var r = t(31916),
    s = t(4814),
    i = t(52676);
   const o = (e) => {
     let { background: n, children: t, className: r, ...o } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('card__illustration', n && 'card__illustration--background', r), ...o, children: t });
    },
    c = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: o, component: c = 'div', children: l } = e;
     const a = (e) => ('article' === c ? (0, i.jsx)('article', { ...e }) : 'section' === c ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(a, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${t}`, o), children: l });
     return n ? (0, i.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    a = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  97520: (e, n, t) => {
   'use strict';
   t.d(n, { I: () => c });
   var r = t(57716),
    s = t(75271),
    i = t(14669),
    o = t(52676);
   const c = (e) => {
    let { component: n } = e;
    const { title: c } = n,
     l = (0, i.mA)(c),
     a = s.lazy(() => t(42767)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(s.Suspense, { fallback: null, children: (0, o.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(a, {}) }) });
   };
  },
  76233: (e, n, t) => {
   'use strict';
   t.d(n, { B: () => d });
   var r = t(57716),
    s = t(4814),
    i = t(75271),
    o = t(14669),
    c = t(52676);
   const l = (e) => {
     let { children: n } = e;
     return (0, c.jsx)('ol', { className: 'nlds-anatomy-list', children: n });
    },
    a = (e) => {
     let { children: n } = e;
     return (0, c.jsx)('li', { className: 'nlds-anatomy-list__item', children: n });
    },
    d = (e) => {
     let { component: n, illustration: d } = e;
     const { title: h } = n,
      u = (0, o.mA)(h),
      m = i.lazy(() => t(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, c.jsx)(i.Suspense, {
      fallback: null,
      children: (0, c.jsxs)('figure', {
       className: (0, s.Z)('component-anatomy'),
       children: [
        d && (0, c.jsx)(d, { height: null, className: (0, s.Z)('component-anatomy__illustration') }),
        d &&
         m &&
         (0, c.jsx)('figcaption', {
          children: (0, c.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: n } = e;
             return (0, c.jsx)(l, { children: n });
            },
            li: (e) => {
             let { children: n } = e;
             return (0, c.jsx)(a, { children: n });
            },
           },
           children: (0, c.jsx)(m, {}),
          }),
         }),
       ],
      }),
     });
    };
  },
  55240: (e, n, t) => {
   'use strict';
   t.d(n, { t: () => h });
   var r = t(31916);
   const s = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    i = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    o = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: n } = e;
      return !i.find((e) => e.sc === n);
     }),
    c = new Map(o.map((e) => [e.sc, e]));
   var l = t(95674),
    a = t(52676);
   const d = (e) => {
     let { title: n, sc: t, status: s, component: i, headingLevel: o = 4 } = e;
     const l = c.get(t),
      d = l ? `${t} ${l.nl?.title}` : t;
     return (0, a.jsxs)('div', { className: 'component-criteria-section', children: [(0, a.jsx)(r.X6, { appearance: 'utrecht-heading-4', level: o, className: 'component-criteria-section__heading', children: n }), (t || s) && (0, a.jsxs)('dl', { className: 'component-criteria-section__dl', children: [t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, a.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, a.jsx)(r.rU, { href: `/wcag/${t}`, children: d }) })] }), s && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, a.jsx)('dd', { className: 'component-criteria-section__dl', children: s })] })] }), i] });
    },
    h = (e) => {
     let { testCategory: n, items: t } = e;
     return (0, a.jsx)(l.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: !1, label: (0, a.jsx)('span', { children: n }), body: t.map((e, n) => (0, a.jsx)(d, { ...e }, n)) }] });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => b, vM: () => C, W: () => x, Rv: () => T });
   var r = t(95674),
    s = t(4814),
    i = t(39854),
    o = t(7522),
    c = t(62559),
    l = t(79734),
    a = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(i.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(c.Z, {}), storybook: (0, d.jsx)(l.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(a.Z, {}) });
    };
   var m = t(35038),
    g = t(76193);
   const p = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(g.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(79333).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: n, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var j = t(23355),
    w = t(41757),
    y = t(31916),
    v = t(25953);
   const f = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    k = (e) => {
     let { checked: n, children: t, title: r, description: i, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, s.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, s.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(v.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), i, t] })] });
    };
   var A = t(14669);
   const b = (e) => {
     let { component: n, headingLevel: t } = e;
     const i = n && n.projects.filter((e) => A.e9.includes(e.id)),
      o = i && A.e9.map((e) => i.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, s.Z)('definition-of-done', e && `definition-of-done--${(0, A.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(f, {
            children: e.tasks.map((e) => {
             let { checked: n, name: r, id: s } = e;
             return (0, d.jsx)(k, { headingLevel: t + 1, checked: n, title: r, description: (0, A.Q6)(s) }, s);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    x = (e) => {
     let { component: n, headingLevel: t } = e;
     const s = n && n.projects.filter((e) => !A.e9.includes(e.id));
     return n && s.length
      ? (0, d.jsx)(m.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: s
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const n = e.tasks.find((e) => {
             let { name: n } = e;
             return 'Naam' === n;
            }),
            s = n?.value,
            i = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${s} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${s} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${s} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return i.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            m.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(m.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               o.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: o.map((e) => {
                    const n = i.get(e.name);
                    return n ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: n.brand }), ' ', n.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
                   }),
                  }),
                 ],
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    C = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [s ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = (e) => {
     let { component: n, headingLevel: t, description: s } = e;
     const i = n && A.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w.V, { level: t, suffix: i && (0, d.jsx)(j.y, { state: i }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: s })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => c });
   var r = t(31916),
    s = t(4814),
    i = t(14669),
    o = t(52676);
   const c = (e) => {
    let { state: n } = e;
    const t = (0, i.mA)(n);
    return (0, o.jsx)(r.Ou, { className: (0, s.Z)('estafette-badge', t && `estafette-badge--${t}`), children: n });
   };
  },
  41757: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => i });
   var r = t(4814),
    s = t(52676);
   const i = (e) => {
    let { children: n, className: t, level: i = 1, suffix: o, ...c } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${i}`, t), ...c, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(87118),
    s = t(31916),
    i = t(52676);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + s;
     }
     return t.toString();
    },
    c = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    l = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, i.jsx)('img', { ...r, src: o(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    a = (e, n) => {
     if (e) {
      const e = { ...c[n - 1] };
      return (e.h1 = () => null), e;
     }
     return c[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: s = 1, baseUrl: o = '', components: c = {} } = e;
     return (0, i.jsx)(r.Z, { components: { ...a(t, s), ...l(o), ...c }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, BA: () => c, Q6: () => i, e9: () => o, mA: () => s });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
  42767: (e, n, t) => {
   var r = { './code-block-docs/docs/aliases.md': [33272, 33272], './code-docs/docs/aliases.md': [45077, 45077], './color-sample-docs/docs/aliases.md': [16992, 16992], './data-badge-docs/docs/aliases.md': [594, 594], './heading-1-docs/docs/aliases.md': [53016, 53016], './heading-2-docs/docs/aliases.md': [85698, 85698], './heading-3-docs/docs/aliases.md': [87232, 87232], './heading-4-docs/docs/aliases.md': [8683, 8683], './heading-docs/docs/aliases.md': [71918, 71918], './link-docs/docs/aliases.md': [63694, 63694], './mark-docs/docs/aliases.md': [69269, 69269], './number-badge-docs/docs/aliases.md': [40519, 40519], './paragraph-docs/docs/aliases.md': [47096, 47096], './skip-link-docs/docs/aliases.md': [71218, 71218] };
   function s(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 42767), (e.exports = s);
  },
  22930: (e, n, t) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [7231, 7231], './code-docs/docs/anatomy/anatomy.md': [68449, 68449], './color-sample-docs/docs/anatomy/anatomy.md': [4853, 4853], './data-badge-docs/docs/anatomy/anatomy.md': [23242, 23242], './heading-1-docs/docs/anatomy/anatomy.md': [37039, 37039], './heading-2-docs/docs/anatomy/anatomy.md': [55167, 55167], './heading-3-docs/docs/anatomy/anatomy.md': [68844, 68844], './heading-4-docs/docs/anatomy/anatomy.md': [70868, 70868], './heading-5-docs/docs/anatomy/anatomy.md': [3549, 3549], './heading-6-docs/docs/anatomy/anatomy.md': [41448, 41448], './heading-docs/docs/anatomy/anatomy.md': [36472, 36472], './link-docs/docs/anatomy/anatomy.md': [96372, 96372], './mark-docs/docs/anatomy/anatomy.md': [9429, 9429], './number-badge-docs/docs/anatomy/anatomy.md': [31598, 31598], './paragraph-docs/docs/anatomy/anatomy.md': [48260, 48260], './skip-link-docs/docs/anatomy/anatomy.md': [54962, 54962] };
   function s(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 22930), (e.exports = s);
  },
 },
]);
