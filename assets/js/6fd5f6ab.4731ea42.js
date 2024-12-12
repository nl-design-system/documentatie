(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [72755],
 {
  78187: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    i = n(87118);
   function s(e) {
    const t = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsxs)(t.p, { children: ['Als je implementatie voldoet aan de acceptatiecriteria voor dit component, kun je er vanuit gaan dat je gebruik van dit component voldoet aan WCAG, niveau A en AA, en voor twee succescriteria aan niveau AAA (', (0, r.jsx)(t.a, { href: 'https://nldesignsystem.nl/wcag/2.4.13', children: '2.4.13 Focusweergave' }), ' en ', (0, r.jsx)(t.a, { href: 'https://nldesignsystem.nl/wcag/2.5.5', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), ').'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  31573: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    i = n(87118);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;" }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  53590: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    i = n(87118);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82959: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    i = n(87118);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  64154: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    i = n(87118);
   function s(e) {
    const t = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  42204: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => _, component: () => F, contentTitle: () => z, default: () => O, description: () => M, frontMatter: () => L, issueNumber: () => P, metadata: () => Z, title: () => S, toc: () => D });
   var r,
    i,
    s,
    o,
    c,
    a,
    l,
    d = n(52676),
    h = n(87118),
    u = n(81862),
    m = n(75271);
   function g() {
    return (
     (g = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
         }
         return e;
        }),
     g.apply(this, arguments)
    );
   }
   const p = (e) => {
    let { title: t, titleId: n, ...d } = e;
    return m.createElement('svg', g({ width: 960, height: 540, viewBox: '0 0 960 540', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-label': 'Een tekst die groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', 'aria-labelledby': n }, d), t ? m.createElement('title', { id: n }, t) : null, r || (r = m.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = m.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = m.createElement('path', { d: 'M307.762 195v150', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square' })), o || (o = m.createElement('path', { d: 'M268 270h39', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'bevel' })), c || (c = m.createElement('rect', { x: 236, y: 254, width: 32, height: 32, rx: 16, fill: '#DE00A4' })), a || (a = m.createElement('path', { d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43h2.25Z', fill: '#fff' })), l || (l = m.createElement('path', { d: 'M327.12 219.44v5.16l.08 5.08h1.32c2.293 0 4.093-.933 5.4-2.8 1.333-1.893 2-4.573 2-8.04 0-3.52-.667-6.2-2-8.04-1.307-1.84-3.093-2.76-5.36-2.76h-1.36l-.08 5v6.4Zm-9.8-11.56v-2.16h11.88c2.853 0 5.293.533 7.32 1.6 2.027 1.04 3.587 2.533 4.68 4.48 1.093 1.947 1.64 4.28 1.64 7 0 2.773-.587 5.147-1.76 7.12-1.173 1.973-2.84 3.48-5 4.52-2.133 1.04-4.667 1.56-7.6 1.56h-11.16v-2.16l3-.32c.053-1.627.08-3.28.08-4.96v-11.4c0-1.68-.027-3.333-.08-4.96l-3-.32ZM345.403 232v-1.88l2.16-.48c.027-.96.04-2 .04-3.12v-4.84c0-1.093-.013-2-.04-2.72 0-.747-.027-1.52-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8V226.56c0 1.12.013 2.173.04 3.16l2 .4V232h-10.6Zm5.32-22.92c-.933 0-1.733-.293-2.4-.88a2.971 2.971 0 0 1-1-2.28c0-.933.333-1.693 1-2.28.667-.613 1.467-.92 2.4-.92.933 0 1.733.307 2.4.92.667.587 1 1.347 1 2.28 0 .907-.333 1.667-1 2.28-.667.587-1.467.88-2.4.88Zm14.856 23.52c-1.786 0-3.186-.427-4.2-1.28-1.013-.88-1.52-2.307-1.52-4.28v-1.92c.027-.613.04-1.307.04-2.08v-7.64h-2.6v-2.36l2.96-.4 2-5.6h4.08l-.08 5.64h4.2v2.72h-4.2v11.2c0 .933.187 1.627.56 2.08.4.427.894.64 1.48.64.694 0 1.414-.293 2.16-.88l1 .96a5.794 5.794 0 0 1-2.24 2.36c-.933.56-2.146.84-3.64.84Zm15.371-.6v-1.88l2.16-.48c.027-.96.04-2 .04-3.12v-4.84c0-1.093-.013-2-.04-2.72 0-.747-.027-1.52-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8V226.56c0 1.12.013 2.173.04 3.16l2 .4V232h-10.6Zm5.32-22.92c-.933 0-1.733-.293-2.4-.88a2.971 2.971 0 0 1-1-2.28c0-.933.333-1.693 1-2.28.667-.613 1.467-.92 2.4-.92.933 0 1.733.307 2.4.92.667.587 1 1.347 1 2.28 0 .907-.333 1.667-1 2.28-.667.587-1.467.88-2.4.88Zm14.296 23.52c-2.533 0-4.853-.613-6.96-1.84l.12-4.88h3.2l.68 3.96c.48.187.96.333 1.44.44.48.08 1 .12 1.56.12 1.147 0 2.027-.187 2.64-.56.614-.4.92-1 .92-1.8 0-.613-.226-1.147-.68-1.6-.453-.453-1.346-.867-2.68-1.24l-2.16-.64c-1.546-.453-2.746-1.187-3.6-2.2-.826-1.013-1.24-2.267-1.24-3.76 0-1.84.72-3.387 2.16-4.64 1.44-1.28 3.507-1.92 6.2-1.92 1.174 0 2.254.147 3.24.44a15.31 15.31 0 0 1 3.08 1.2l-.28 4.36h-3.2l-.8-3.44c-.56-.213-1.293-.32-2.2-.32-.906 0-1.64.187-2.2.56-.533.373-.8.933-.8 1.68 0 .533.214 1.013.64 1.44.427.4 1.334.813 2.72 1.24l1.96.56c1.894.56 3.254 1.36 4.08 2.4.827 1.04 1.24 2.307 1.24 3.8 0 2.107-.813 3.747-2.44 4.92-1.6 1.147-3.813 1.72-6.64 1.72Zm29.638-18.48c-.747 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.267-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.947 0-3.667-.4-5.16-1.2-1.493-.827-2.667-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.493-4.12 1.48-5.64 1.013-1.547 2.307-2.707 3.88-3.48 1.573-.8 3.213-1.2 4.92-1.2 1.76 0 3.253.373 4.48 1.12a7.259 7.259 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.133 2.107.707 3.667 1.72 4.68 1.04.987 2.253 1.48 3.64 1.48 1.093 0 2.027-.2 2.8-.6a8.48 8.48 0 0 0 2.04-1.56l1.4 1.28c-.827 1.573-1.947 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm20.779-18.48c-.746 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.266-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.946 0-3.666-.4-5.16-1.2-1.493-.827-2.666-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.494-4.12 1.48-5.64 1.014-1.547 2.307-2.707 3.88-3.48 1.574-.8 3.214-1.2 4.92-1.2 1.76 0 3.254.373 4.48 1.12a7.252 7.252 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.134 2.107.707 3.667 1.72 4.68 1.04.987 2.254 1.48 3.64 1.48 1.094 0 2.027-.2 2.8-.6a8.44 8.44 0 0 0 2.04-1.56l1.4 1.28c-.826 1.573-1.946 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm10.86-.6v-1.88l2.16-.48c.026-.96.04-2 .04-3.12v-5.24c0-1.093-.014-1.933-.04-2.52 0-.613-.027-1.32-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88c1.04-1.227 2.066-2.08 3.08-2.56a7.476 7.476 0 0 1 3.32-.76c1.733 0 3.12.573 4.16 1.72 1.066 1.147 1.6 2.867 1.6 5.16v7.68c0 1.093.013 2.133.04 3.12l2 .4V232h-10.56v-1.88l2.08-.44c.026-.987.04-2.027.04-3.12v-7.16c0-1.28-.174-2.173-.52-2.68-.347-.533-.907-.8-1.68-.8-1.04 0-2.187.48-3.44 1.44v9.2c0 1.12.013 2.173.04 3.16l1.88.4V232h-10.52ZM329.28 264.44v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28-2.52-.48Zm18.04 18.16c-2.08 0-3.88-.427-5.4-1.28a9.066 9.066 0 0 1-3.52-3.64c-.827-1.573-1.24-3.387-1.24-5.44 0-2.053.44-3.84 1.32-5.36a9.627 9.627 0 0 1 3.68-3.56c1.547-.853 3.267-1.28 5.16-1.28 1.893 0 3.6.413 5.12 1.24 1.547.827 2.773 2.013 3.68 3.56.907 1.52 1.36 3.32 1.36 5.4 0 2.08-.413 3.893-1.24 5.44a9.066 9.066 0 0 1-3.52 3.64c-1.52.853-3.32 1.28-5.4 1.28Zm0-2.08c1.12 0 1.96-.653 2.52-1.96s.84-3.373.84-6.2c0-2.853-.28-4.933-.84-6.24-.56-1.307-1.4-1.96-2.52-1.96-1.147 0-2 .653-2.56 1.96s-.84 3.387-.84 6.24c0 2.827.28 4.893.84 6.2.56 1.307 1.413 1.96 2.56 1.96Zm22.891 2.08c-2.08 0-3.88-.427-5.4-1.28a9.06 9.06 0 0 1-3.52-3.64c-.827-1.573-1.24-3.387-1.24-5.44 0-2.053.44-3.84 1.32-5.36a9.62 9.62 0 0 1 3.68-3.56c1.546-.853 3.266-1.28 5.16-1.28 1.893 0 3.6.413 5.12 1.24 1.546.827 2.773 2.013 3.68 3.56.906 1.52 1.36 3.32 1.36 5.4 0 2.08-.414 3.893-1.24 5.44a9.066 9.066 0 0 1-3.52 3.64c-1.52.853-3.32 1.28-5.4 1.28Zm0-2.08c1.12 0 1.96-.653 2.52-1.96s.84-3.373.84-6.2c0-2.853-.28-4.933-.84-6.24-.56-1.307-1.4-1.96-2.52-1.96-1.147 0-2 .653-2.56 1.96s-.84 3.387-.84 6.24c0 2.827.28 4.893.84 6.2.56 1.307 1.413 1.96 2.56 1.96Zm12.377 1.48v-1.88l2.2-.44c.026-.987.04-2.04.04-3.16V271.24c0-.747-.014-1.36-.04-1.84 0-.48-.014-.92-.04-1.32 0-.427-.014-.907-.04-1.44l-2.44-.36v-1.56l7.88-2.68.72.44.36 4.72c.56-1.707 1.346-2.987 2.36-3.84 1.013-.88 2.013-1.32 3-1.32.88 0 1.64.253 2.28.76.64.48 1.04 1.213 1.2 2.2-.027 1.04-.307 1.853-.84 2.44-.534.56-1.2.84-2 .84-1.12 0-2.147-.627-3.08-1.88l-.24-.32c-.587.56-1.134 1.267-1.64 2.12a9.966 9.966 0 0 0-1.04 2.68V276.44c0 1.067.013 2.067.04 3l3.16.68V282h-11.84Zm17.697.04v-1.88l2.12-.44c.027-.96.04-2 .04-3.12v-19.84l-2.48-.32v-1.68l8.28-1.8.64.4-.16 5.6v5.64c1.68-1.707 3.613-2.56 5.8-2.56 1.467 0 2.787.387 3.96 1.16 1.173.747 2.107 1.88 2.8 3.4.72 1.493 1.08 3.347 1.08 5.56 0 2.16-.4 4.027-1.2 5.6-.8 1.547-1.853 2.747-3.16 3.6a7.585 7.585 0 0 1-4.2 1.24c-2.187 0-3.947-.787-5.28-2.36l-.68 2.32-7.56-.52Zm11.32-16.52c-.507 0-.987.107-1.44.32a6.445 6.445 0 0 0-1.32.84v11.44c.827.747 1.733 1.12 2.72 1.12 1.173 0 2.133-.573 2.88-1.72.773-1.147 1.16-2.893 1.16-5.24 0-2.373-.373-4.093-1.12-5.16-.72-1.067-1.68-1.6-2.88-1.6Zm23.248-1.4c-.747 0-1.44.467-2.08 1.4-.614.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.346-.4.52-1.053.52-1.96 0-1.333-.267-2.32-.8-2.96-.534-.64-1.174-.96-1.92-.96Zm.08 18.48c-1.947 0-3.667-.4-5.16-1.2-1.494-.827-2.667-2-3.52-3.52-.854-1.547-1.28-3.387-1.28-5.52 0-2.24.493-4.12 1.479-5.64 1.014-1.547 2.307-2.707 3.881-3.48 1.573-.8 3.213-1.2 4.92-1.2 1.76 0 3.253.373 4.48 1.12a7.259 7.259 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.133 2.107.706 3.667 1.72 4.68 1.04.987 2.253 1.48 3.64 1.48 1.093 0 2.026-.2 2.8-.6a8.48 8.48 0 0 0 2.04-1.56l1.4 1.28c-.827 1.573-1.947 2.747-3.36 3.52-1.414.773-3.094 1.16-5.04 1.16Zm20.779-18.48c-.747 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.267-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.947 0-3.667-.4-5.16-1.2-1.493-.827-2.667-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.493-4.12 1.48-5.64 1.013-1.547 2.307-2.707 3.88-3.48 1.573-.8 3.213-1.2 4.92-1.2 1.76 0 3.253.373 4.48 1.12a7.259 7.259 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.133 2.107.707 3.667 1.72 4.68 1.04.987 2.253 1.48 3.64 1.48 1.093 0 2.027-.2 2.8-.6a8.48 8.48 0 0 0 2.04-1.56l1.4 1.28c-.827 1.573-1.947 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm10.115-.6v-1.88l2.2-.48c.027-1.013.04-2.027.04-3.04.027-1.013.04-2.013.04-3v-16.76l-2.48-.4v-1.68l8.4-1.8.64.4-.16 5.6v17.68l.08 3.04 2.2.44V282h-10.96Zm19.81-9.56c0 2.187.387 3.853 1.16 5 .773 1.12 1.773 1.68 3 1.68.907 0 1.733-.307 2.48-.92v-11.92c-.72-.56-1.507-.84-2.36-.84-1.227 0-2.253.573-3.08 1.72-.8 1.147-1.2 2.907-1.2 5.28Zm7.16 10-.32-2.28c-1.547 1.627-3.427 2.44-5.64 2.44-1.493 0-2.853-.387-4.08-1.16-1.2-.773-2.147-1.907-2.84-3.4-.693-1.52-1.04-3.36-1.04-5.52 0-2.187.413-4.053 1.24-5.6.853-1.573 1.947-2.773 3.28-3.6 1.36-.853 2.787-1.28 4.28-1.28 1.04 0 1.947.187 2.72.56.773.347 1.48.867 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V282l-7.8.44Zm30.505-18v-1.76h7.56v1.76l-2.32.44-6.6 17.2h-3.04l-7.2-17.24-1.96-.4v-1.76h11.36v1.76l-2.52.52 3.76 10.24 3.48-10.28-2.52-.48Zm23.359 18.12c-2.32 0-3.787-.96-4.4-2.88-.854.907-1.68 1.627-2.48 2.16-.774.507-1.854.76-3.24.76-1.547 0-2.814-.44-3.8-1.32-.96-.88-1.44-2.147-1.44-3.8 0-.96.213-1.827.64-2.6.426-.773 1.2-1.493 2.32-2.16 1.12-.667 2.706-1.293 4.76-1.88.4-.133.866-.267 1.4-.4.533-.133 1.08-.267 1.64-.4v-1.32c0-1.787-.227-3-.68-3.64-.427-.64-1.28-.96-2.56-.96h-.52c-.16 0-.347.013-.56.04l-.2 1.76c-.027 1.307-.334 2.253-.92 2.84-.56.587-1.227.88-2 .88-1.467 0-2.36-.667-2.68-2 .106-1.653.946-3 2.52-4.04 1.573-1.04 3.8-1.56 6.68-1.56 2.56 0 4.386.587 5.48 1.76 1.12 1.173 1.68 3.107 1.68 5.8v8.96c0 .773.293 1.16.88 1.16.213 0 .413-.053.6-.16.186-.133.386-.373.6-.72l1.08.72c-.48 1.067-1.107 1.84-1.88 2.32-.747.453-1.72.68-2.92.68Zm-9.44-6.12c0 .987.226 1.72.68 2.2a2.347 2.347 0 0 0 2.64.52c.32-.133.826-.44 1.52-.92v-6.48a16.22 16.22 0 0 0-1.04.36c-.32.107-.6.213-.84.32-.907.373-1.627.907-2.16 1.6-.534.667-.8 1.467-.8 2.4Zm15.21 5.56v-1.88l2.16-.48c.026-.96.04-2 .04-3.12v-5.24c0-1.093-.014-1.933-.04-2.52 0-.613-.027-1.32-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88c1.04-1.227 2.066-2.08 3.08-2.56a7.476 7.476 0 0 1 3.32-.76c1.733 0 3.12.573 4.16 1.72 1.066 1.147 1.6 2.867 1.6 5.16v7.68c0 1.093.013 2.133.04 3.12l2 .4V282h-10.56v-1.88l2.08-.44c.026-.987.04-2.027.04-3.12v-7.16c0-1.28-.174-2.173-.52-2.68-.347-.533-.907-.8-1.68-.8-1.04 0-2.187.48-3.44 1.44v9.2c0 1.12.013 2.173.04 3.16l1.88.4V282h-10.52ZM327.04 314.12c-.747 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.267-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.947 0-3.667-.4-5.16-1.2-1.493-.827-2.667-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.493-4.12 1.48-5.64 1.013-1.547 2.307-2.707 3.88-3.48 1.573-.8 3.213-1.2 4.92-1.2 1.76 0 3.253.373 4.48 1.12a7.259 7.259 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.133 2.107.707 3.667 1.72 4.68 1.04.987 2.253 1.48 3.64 1.48 1.093 0 2.027-.2 2.8-.6a8.48 8.48 0 0 0 2.04-1.56l1.4 1.28c-.827 1.573-1.947 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm20.779-18.48c-.746 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.266-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.946 0-3.666-.4-5.16-1.2-1.493-.827-2.666-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.494-4.12 1.48-5.64 1.014-1.547 2.307-2.707 3.88-3.48 1.574-.8 3.214-1.2 4.92-1.2 1.76 0 3.254.373 4.48 1.12a7.252 7.252 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.134 2.107.707 3.667 1.72 4.68 1.04.987 2.254 1.48 3.64 1.48 1.094 0 2.027-.2 2.8-.6a8.44 8.44 0 0 0 2.04-1.56l1.4 1.28c-.826 1.573-1.946 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm10.86-.6v-1.88l2.16-.48c.026-.96.04-2 .04-3.12v-5.24c0-1.093-.014-1.933-.04-2.52 0-.613-.027-1.32-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88c1.04-1.227 2.066-2.08 3.08-2.56a7.476 7.476 0 0 1 3.32-.76c1.733 0 3.12.573 4.16 1.72 1.066 1.147 1.6 2.867 1.6 5.16v7.68c0 1.093.013 2.133.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44c.026-.987.04-2.027.04-3.12v-7.16c0-1.28-.174-2.173-.52-2.68-.347-.533-.907-.8-1.68-.8-1.04 0-2.187.48-3.44 1.44v9.2c0 1.12.013 2.173.04 3.16l1.88.4V332h-10.52Zm33.203 0v-1.88l2.16-.48c.027-.96.04-2 .04-3.12v-19.68l-2.48-.4v-1.68l8.28-1.8.64.4-.16 5.6v6.44c1.067-1.253 2.093-2.12 3.08-2.6a7.228 7.228 0 0 1 3.28-.76c1.76 0 3.173.573 4.24 1.72 1.067 1.147 1.6 2.867 1.6 5.16v7.68c0 1.093.013 2.133.04 3.12l2 .4V332h-10.52v-1.88l2.08-.44c.027-.987.04-2.027.04-3.12v-7.16c0-1.307-.16-2.213-.48-2.72-.293-.507-.853-.76-1.68-.76-.533 0-1.107.16-1.72.48-.613.32-1.227.773-1.84 1.36v8.8c0 1.12.013 2.173.04 3.16l1.88.4V332h-10.52Zm34.607-17.88c-.746 0-1.44.467-2.08 1.4-.613.907-.96 2.587-1.04 5.04h3.4c.96 0 1.6-.187 1.92-.56.347-.4.52-1.053.52-1.96 0-1.333-.266-2.32-.8-2.96-.533-.64-1.173-.96-1.92-.96Zm.08 18.48c-1.946 0-3.666-.4-5.16-1.2-1.493-.827-2.666-2-3.52-3.52-.853-1.547-1.28-3.387-1.28-5.52 0-2.24.494-4.12 1.48-5.64 1.014-1.547 2.307-2.707 3.88-3.48 1.574-.8 3.214-1.2 4.92-1.2 1.76 0 3.254.373 4.48 1.12a7.252 7.252 0 0 1 2.84 3.04c.64 1.253.96 2.693.96 4.32 0 .773-.08 1.48-.24 2.12h-11.56c.134 2.107.707 3.667 1.72 4.68 1.04.987 2.254 1.48 3.64 1.48 1.094 0 2.027-.2 2.8-.6a8.44 8.44 0 0 0 2.04-1.56l1.4 1.28c-.826 1.573-1.946 2.747-3.36 3.52-1.413.773-3.093 1.16-5.04 1.16Zm26.223-.04c-2.32 0-3.787-.96-4.4-2.88-.854.907-1.68 1.627-2.48 2.16-.774.507-1.854.76-3.24.76-1.547 0-2.814-.44-3.8-1.32-.96-.88-1.44-2.147-1.44-3.8 0-.96.213-1.827.64-2.6.426-.773 1.2-1.493 2.32-2.16 1.12-.667 2.706-1.293 4.76-1.88.4-.133.866-.267 1.4-.4.533-.133 1.08-.267 1.64-.4v-1.32c0-1.787-.227-3-.68-3.64-.427-.64-1.28-.96-2.56-.96h-.52c-.16 0-.347.013-.56.04l-.2 1.76c-.027 1.307-.334 2.253-.92 2.84-.56.587-1.227.88-2 .88-1.467 0-2.36-.667-2.68-2 .106-1.653.946-3 2.52-4.04 1.573-1.04 3.8-1.56 6.68-1.56 2.56 0 4.386.587 5.48 1.76 1.12 1.173 1.68 3.107 1.68 5.8v8.96c0 .773.293 1.16.88 1.16.213 0 .413-.053.6-.16.186-.133.386-.373.6-.72l1.08.72c-.48 1.067-1.107 1.84-1.88 2.32-.747.453-1.72.68-2.92.68Zm-9.44-6.12c0 .987.226 1.72.68 2.2a2.347 2.347 0 0 0 2.64.52c.32-.133.826-.44 1.52-.92v-6.48a16.22 16.22 0 0 0-1.04.36c-.32.107-.6.213-.84.32-.907.373-1.627.907-2.16 1.6-.534.667-.8 1.467-.8 2.4Zm22.01-4c0 2.187.386 3.853 1.16 5 .773 1.12 1.773 1.68 3 1.68.906 0 1.733-.307 2.48-.92v-11.92c-.72-.56-1.507-.84-2.36-.84-1.227 0-2.254.573-3.08 1.72-.8 1.147-1.2 2.907-1.2 5.28Zm7.16 10-.32-2.28c-1.547 1.627-3.427 2.44-5.64 2.44-1.494 0-2.854-.387-4.08-1.16-1.2-.773-2.147-1.907-2.84-3.4-.694-1.52-1.04-3.36-1.04-5.52 0-2.187.413-4.053 1.24-5.6.853-1.573 1.946-2.773 3.28-3.6 1.36-.853 2.786-1.28 4.28-1.28 1.04 0 1.946.187 2.72.56.773.347 1.48.867 2.12 1.56v-7.32l-2.8-.4v-1.68l8.44-1.8.64.4-.16 5.6v20.76l1.96.4V332l-7.8.44Zm9.87-.44v-1.88l2.16-.48c.026-.96.04-2 .04-3.12v-4.84c0-1.093-.014-2-.04-2.72 0-.747-.027-1.52-.08-2.32l-2.48-.36v-1.56l8.4-2.68.68.44-.12 5.8V326.56c0 1.12.013 2.173.04 3.16l2 .4V332h-10.6Zm5.32-22.92c-.934 0-1.734-.293-2.4-.88a2.971 2.971 0 0 1-1-2.28c0-.933.333-1.693 1-2.28.666-.613 1.466-.92 2.4-.92.933 0 1.733.307 2.4.92.666.587 1 1.347 1 2.28 0 .907-.334 1.667-1 2.28-.667.587-1.467.88-2.4.88Zm7.256 22.92v-1.88l2.16-.48c.026-.96.04-2 .04-3.12v-5.24c0-1.093-.014-1.933-.04-2.52 0-.613-.027-1.32-.08-2.12l-2.44-.36v-1.56l7.88-2.68.72.44.24 2.88c1.04-1.227 2.066-2.08 3.08-2.56a7.476 7.476 0 0 1 3.32-.76c1.733 0 3.12.573 4.16 1.72 1.066 1.147 1.6 2.867 1.6 5.16v7.68c0 1.093.013 2.133.04 3.12l2 .4V332h-10.56v-1.88l2.08-.44c.026-.987.04-2.027.04-3.12v-7.16c0-1.28-.174-2.173-.52-2.68-.347-.533-.907-.8-1.68-.8-1.04 0-2.187.48-3.44 1.44v9.2c0 1.12.013 2.173.04 3.16l1.88.4V332h-10.52Zm33.328-8.96c.934 0 1.627-.413 2.08-1.24.48-.827.72-1.947.72-3.36 0-1.413-.24-2.507-.72-3.28-.453-.8-1.12-1.2-2-1.2-.906 0-1.586.4-2.04 1.2-.453.8-.68 1.907-.68 3.32 0 1.413.214 2.533.64 3.36.427.8 1.094 1.2 2 1.2Zm-5.32 12.28c0 1.173.44 2.027 1.32 2.56.88.56 2.227.84 4.04.84 2 0 3.507-.293 4.52-.88 1.014-.587 1.52-1.32 1.52-2.2 0-.587-.213-1.12-.64-1.6-.426-.453-1.186-.68-2.28-.68h-4.2c-1.466 0-2.68-.12-3.64-.36a5.401 5.401 0 0 0-.48 1.08c-.106.347-.16.76-.16 1.24Zm5.36-10.4c-1.386 0-2.6-.16-3.64-.48-.32.56-.48 1.173-.48 1.84 0 .453.174.827.52 1.12.347.267.947.4 1.8.4h4.68c2.027 0 3.64.253 4.84.76 1.2.48 2.054 1.16 2.56 2.04.534.853.8 1.867.8 3.04 0 1.333-.44 2.56-1.32 3.68-.88 1.147-2.2 2.053-3.96 2.72-1.733.693-3.88 1.04-6.44 1.04-2.213 0-3.946-.227-5.2-.68-1.253-.427-2.133-1-2.64-1.72-.506-.72-.76-1.48-.76-2.28 0-1.707 1.107-3.08 3.32-4.12-.826-.347-1.426-.8-1.8-1.36a3.434 3.434 0 0 1-.52-1.84c0-.933.267-1.813.8-2.64.56-.853 1.334-1.707 2.32-2.56-1.093-.56-1.906-1.307-2.44-2.24-.533-.933-.8-1.973-.8-3.12 0-1.867.68-3.413 2.04-4.64 1.387-1.227 3.494-1.84 6.32-1.84 1.44 0 2.694.16 3.76.48 1.067.32 1.934.773 2.6 1.36l4.48-1.92.64.4v3.08h-3.8c.48.88.72 1.907.72 3.08 0 1.787-.693 3.307-2.08 4.56-1.36 1.227-3.466 1.84-6.32 1.84Z', fill: '#0A2750' })));
   };
   var j = n(78187);
   function w(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, d.jsx)(t.code, { children: 'h1' }), ' tot en met ', (0, d.jsx)(t.code, { children: 'h6' }), '.'] }), '\n', (0, d.jsx)(t.p, { children: 'Voor screenreadergebruikers is een goede koppenstructuur een belangrijk navigatiemiddel. Gebruik daarom een heading-element van het juiste niveau met een tekst die de content van de sectie eronder beschrijft. Op die manier ontstaat een duidelijke inhoudsopgave wanneer een gebruiker met hulpsoftware een koppenlijst opvraagt.' }), '\n', (0, d.jsxs)(t.p, { children: ['Wil je tekst alleen maar vormgeven, bijvoorbeeld groter maken? Gebruik dan CSS in combinatie met bijvoorbeeld een ', (0, d.jsx)(t.code, { children: 'span' }), '- of een ', (0, d.jsx)(t.code, { children: 'p' }), '-element, geen heading-element.'] }), '\n', (0, d.jsxs)(t.p, { children: ['Sla geen kopniveaus over, dus bijvoorbeeld een ', (0, d.jsx)(t.code, { children: 'h3' }), ' na een ', (0, d.jsx)(t.code, { children: 'h1' }), '. Screenreadergebruikers kunnen dan het idee krijgen dat ze informatie missen.'] }), '\n', (0, d.jsxs)(t.p, { children: ['Let erop dat je per pagina 1 ', (0, d.jsx)(t.code, { children: 'h1' }), ' gebruikt en dat deze aan het begin van de ', (0, d.jsx)(t.code, { children: 'main' }), '-content staat. Door niet meer dan 1 ', (0, d.jsx)(t.code, { children: 'h1' }), ' te gebruiken, kan een screenreadergebruiker makkelijk naar het begin van de unieke content springen.'] }), '\n', (0, d.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, d.jsxs)(t.ul, { children: ['\n', (0, d.jsx)(t.li, { children: (0, d.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/opmaak/#kopjes', children: 'Gebruik betekenisvolle opmaak voor tekst, Kopjes' }) }), '\n', (0, d.jsx)(t.li, { children: (0, d.jsx)(t.a, { href: '/richtlijnen/stijl/ruimte/relaties#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: t } = { ...(0, h.a)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(w, { ...e }) }) : w(e);
   }
   var y = n(31573),
    A = n(53590),
    f = n(82959);
   function k(e) {
    const t = { p: 'p', ...(0, h.a)(), ...e.components };
    return (0, d.jsx)(t.p, { children: 'De tekst van de kop beschrijft kort en bondig waar de tekst eronder over gaat, als een soort samenvatting.' });
   }
   function b(e = {}) {
    const { wrapper: t } = { ...(0, h.a)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(k, { ...e }) }) : k(e);
   }
   var x = n(64154);
   function C(e) {
    const t = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.p, { children: ['Zorg ervoor dat je een heading op de juiste manier nest als je hem wilt gebruiken in combinatie een ander element, zoals een button of een link. Denk erom dat de elementen dan correct worden genest in de HTML. Check je code daarom met een ', (0, d.jsx)(t.a, { href: 'https://validator.w3.org/', children: 'HTML-validator' }), ' of ', (0, d.jsx)(t.a, { href: 'https://github.com/caramelomartins/awesome-linters?tab=readme-ov-file#html', children: 'HTML-linter' }), '.'] }), '\n', (0, d.jsx)(t.p, { children: 'Een voorbeeld is een button met een heading erin:' }), '\n', (0, d.jsx)(t.pre, { children: (0, d.jsx)(t.code, { className: 'language-html', children: '<h2>\n  <button>button in heading, wel toegestaan</button>\n</h2>\n' }) }), '\n', (0, d.jsx)(t.pre, { children: (0, d.jsx)(t.code, { className: 'language-html', children: '\x3c!-- dit niet doen --\x3e\n<button>\n  <h2>heading in button, niet toegestaan</h2>\n</button>\n' }) })] });
   }
   function T(e = {}) {
    const { wrapper: t } = { ...(0, h.a)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(C, { ...e }) }) : C(e);
   }
   var G = n(97520),
    W = n(76233),
    R = n(55240),
    N = n(8657);
   const L = { title: 'Heading', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading', pagination_label: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', slug: '/heading' },
    z = void 0,
    Z = { id: 'componenten/heading/index', title: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', source: '@site/docs/componenten/heading/index.mdx', sourceDirName: 'componenten/heading', slug: '/heading', permalink: '/heading', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Heading', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading', pagination_label: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', slug: '/heading' }, sidebar: 'componenten', previous: { title: 'Form Summary', permalink: '/form-summary' }, next: { title: 'Heading 1', permalink: '/heading-1' } },
    _ = {},
    D = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    S = 'Heading',
    M = 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.',
    P = 114,
    F = u.find((e) => e.number === P);
   function V(e) {
    const t = { h2: 'h2', ...(0, h.a)(), ...e.components };
    return (0, d.jsxs)(d.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, d.jsx)(N.Rv, { component: F, headingLevel: 1, description: M }),
      '\n',
      (0, d.jsx)(G.I, { component: F }),
      '\n',
      (0, d.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, d.jsx)(W.B, { component: F, illustration: p }),
      '\n',
      (0, d.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, d.jsx)(N.cN, { component: F, headingLevel: 3 }),
      '\n',
      (0, d.jsx)(t.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, d.jsx)(N.W, { component: F, headingLevel: 3 }),
      '\n',
      (0, d.jsx)(t.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, d.jsx)(j.ZP, {}),
      '\n',
      (0, d.jsx)(R.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid algemeen',
       items: [
        { title: 'De koptekst maakt duidelijk waar de sectie over gaat', sc: '2.4.6', status: '', component: (0, d.jsx)(b, {}) },
        { title: 'Elementen moeten genest zijn volgens de HTML-specificatie', sc: '4.1.1', status: '', component: (0, d.jsx)(T, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(R.t, { headingLevel: 4, testCategory: 'Toegankelijkheid visueel ontwerp', items: [{ title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg', sc: '1.4.3', status: '', component: (0, d.jsx)(A.ZP, {}) }] }),
      '\n',
      (0, d.jsx)(R.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, d.jsx)(f.ZP, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, d.jsx)(y.ZP, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(R.t, {
       headingLevel: 3,
       testCategory: 'Toegankelijkheid screenreader',
       items: [
        { title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn en geen vet gemaakte tekst', sc: '1.3.1', status: '', component: (0, d.jsx)(v, {}) },
        { title: 'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode', sc: '3.1.2', status: '', component: (0, d.jsx)(x.ZP, {}) },
       ],
      }),
      '\n',
      (0, d.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, d.jsx)(N.vM, { component: F, headingLevel: 3 }),
     ],
    });
   }
   function O(e = {}) {
    const { wrapper: t } = { ...(0, h.a)(), ...e.components };
    return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(V, { ...e }) }) : V(e);
   }
  },
  98507: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [99612, 99612], './utrecht-backdrop.entry.js': [191, 191], './utrecht-breadcrumb-nav.entry.js': [95643, 95643], './utrecht-checkbox.entry.js': [41865, 41865], './utrecht-column-layout.entry.js': [11868, 11868], './utrecht-contact-card-template.entry.js': [83069, 83069], './utrecht-custom-checkbox.entry.js': [64916, 64916], './utrecht-data-list-actions.entry.js': [27897, 27897], './utrecht-data-list-item.entry.js': [63619, 63619], './utrecht-data-list-key.entry.js': [5503, 5503], './utrecht-data-list-value.entry.js': [5183, 5183], './utrecht-data-list.entry.js': [17399, 17399], './utrecht-digid-button.entry.js': [36383, 36383], './utrecht-digid-logo.entry.js': [76975, 76975], './utrecht-eherkenning-logo.entry.js': [6453, 6453], './utrecht-eidas-logo.entry.js': [48911, 48911], './utrecht-form-field-error-message.entry.js': [59077, 59077], './utrecht-form-toggle.entry.js': [77346, 77346], './utrecht-html-content.entry.js': [77160, 77160], './utrecht-icon-afspraak-maken.entry.js': [82758, 82758], './utrecht-icon-afval-container.entry.js': [99748, 99748], './utrecht-icon-afval-containerpas.entry.js': [87122, 87122], './utrecht-icon-afval-kalender.entry.js': [44408, 44408], './utrecht-icon-afval-pmd.entry.js': [30590, 30590], './utrecht-icon-afval-scheiden.entry.js': [52052, 52052], './utrecht-icon-afval.entry.js': [51073, 51073], './utrecht-icon-afvalkalender.entry.js': [61043, 61043], './utrecht-icon-alleen.entry.js': [9137, 9137], './utrecht-icon-arrow.entry.js': [9698, 9698], './utrecht-icon-auto.entry.js': [37949, 37949], './utrecht-icon-begroting.entry.js': [22552, 22552], './utrecht-icon-bestemmingsplan.entry.js': [54782, 54782], './utrecht-icon-betaaldatum.entry.js': [40398, 40398], './utrecht-icon-bewijsstukken.entry.js': [4859, 4859], './utrecht-icon-bijstand.entry.js': [1813, 1813], './utrecht-icon-blad.entry.js': [32273, 32273], './utrecht-icon-bouwproject.entry.js': [68732, 68732], './utrecht-icon-brandgevaar.entry.js': [85576, 85576], './utrecht-icon-brief-betalen.entry.js': [6416, 6416], './utrecht-icon-checkmark.entry.js': [80180, 80180], './utrecht-icon-chevron-down.entry.js': [37822, 37822], './utrecht-icon-chevron-left.entry.js': [47567, 47567], './utrecht-icon-chevron-right.entry.js': [80431, 80431], './utrecht-icon-chevron-up.entry.js': [78767, 78767], './utrecht-icon-close.entry.js': [93658, 93658], './utrecht-icon-college-b-w.entry.js': [5132, 5132], './utrecht-icon-container-bio.entry.js': [8353, 8353], './utrecht-icon-container-glas.entry.js': [95483, 95483], './utrecht-icon-container-groenafval.entry.js': [39280, 39280], './utrecht-icon-container-met-zak.entry.js': [12825, 12825], './utrecht-icon-container-papier.entry.js': [43897, 43897], './utrecht-icon-container-pmd.entry.js': [12335, 12335], './utrecht-icon-container-restafval.entry.js': [74123, 74123], './utrecht-icon-container-textiel.entry.js': [54807, 54807], './utrecht-icon-container.entry.js': [98078, 98078], './utrecht-icon-cross.entry.js': [86788, 86788], './utrecht-icon-dakloos.entry.js': [15285, 15285], './utrecht-icon-dementie.entry.js': [87989, 87989], './utrecht-icon-documenten.entry.js': [38391, 38391], './utrecht-icon-duurzaam.entry.js': [87714, 87714], './utrecht-icon-eenzaamheid.entry.js': [85512, 85512], './utrecht-icon-eikenprocessie.entry.js': [7650, 7650], './utrecht-icon-elektrisch-rijden.entry.js': [75634, 75634], './utrecht-icon-energie-vergoeding.entry.js': [77197, 77197], './utrecht-icon-energietransitie.entry.js': [39032, 39032], './utrecht-icon-error.entry.js': [66684, 66684], './utrecht-icon-evenementen.entry.js': [16, 16], './utrecht-icon-facebook.entry.js': [96252, 96252], './utrecht-icon-fiets.entry.js': [86846, 86846], './utrecht-icon-filter.entry.js': [76417, 76417], './utrecht-icon-geboorte.entry.js': [77112, 77112], './utrecht-icon-gebruiker-centraal.entry.js': [14040, 14040], './utrecht-icon-gebruiker-ingelogd.entry.js': [69088, 69088], './utrecht-icon-gegevenswoordenboek.entry.js': [98552, 98552], './utrecht-icon-geluid.entry.js': [56042, 56042], './utrecht-icon-gemeente-locatie.entry.js': [51295, 51295], './utrecht-icon-gemeenteraad.entry.js': [73738, 73738], './utrecht-icon-gereedschap.entry.js': [11758, 11758], './utrecht-icon-gezicht.entry.js': [45251, 45251], './utrecht-icon-gezin.entry.js': [31054, 31559], './utrecht-icon-glas-afval.entry.js': [36827, 36827], './utrecht-icon-glijbaan.entry.js': [64246, 64246], './utrecht-icon-grafiek.entry.js': [8038, 8038], './utrecht-icon-grofvuil-ophalen.entry.js': [53455, 53455], './utrecht-icon-grofvuil.entry.js': [97402, 97402], './utrecht-icon-hamburger-menu.entry.js': [96403, 96403], './utrecht-icon-herdenking.entry.js': [21537, 21537], './utrecht-icon-hondenbelasting.entry.js': [2587, 2587], './utrecht-icon-horeca.entry.js': [42583, 42583], './utrecht-icon-horecavergunning.entry.js': [76720, 76720], './utrecht-icon-huis-en-omgeving.entry.js': [70389, 70389], './utrecht-icon-huis.entry.js': [74718, 74718], './utrecht-icon-huishoudelijk-geweld.entry.js': [71742, 71742], './utrecht-icon-hulp-huishouden.entry.js': [15743, 15743], './utrecht-icon-hulp-vervoer.entry.js': [64536, 64536], './utrecht-icon-hulp-zorg.entry.js': [20600, 20600], './utrecht-icon-hulpmiddelen-gezin.entry.js': [78043, 78043], './utrecht-icon-hulpverlening.entry.js': [33031, 33031], './utrecht-icon-idee.entry.js': [83921, 83921], './utrecht-icon-informatie.entry.js': [70196, 70196], './utrecht-icon-information.entry.js': [85103, 85103], './utrecht-icon-innovatie.entry.js': [57154, 57154], './utrecht-icon-inspraak-inwoners.entry.js': [47395, 47395], './utrecht-icon-instagram.entry.js': [20876, 20876], './utrecht-icon-kalender.entry.js': [66077, 66077], './utrecht-icon-kennis.entry.js': [80033, 80033], './utrecht-icon-kerstbomen.entry.js': [31714, 31714], './utrecht-icon-klachten.entry.js': [17400, 17400], './utrecht-icon-kroon.entry.js': [90589, 90589], './utrecht-icon-laadpaal.entry.js': [29065, 29065], './utrecht-icon-language.entry.js': [66689, 66689], './utrecht-icon-lantaarnpaal-oud.entry.js': [32607, 32607], './utrecht-icon-lantaarnpaal.entry.js': [10601, 10601], './utrecht-icon-leren.entry.js': [66234, 66234], './utrecht-icon-let-op.entry.js': [87315, 87315], './utrecht-icon-linkedin.entry.js': [94398, 94398], './utrecht-icon-list-check.entry.js': [40870, 40870], './utrecht-icon-list-number.entry.js': [28720, 28720], './utrecht-icon-list.entry.js': [65300, 65300], './utrecht-icon-loupe.entry.js': [97618, 97618], './utrecht-icon-markt.entry.js': [47171, 47171], './utrecht-icon-melding-boom.entry.js': [38023, 38023], './utrecht-icon-melding-klacht.entry.js': [60266, 60266], './utrecht-icon-melding-openbareruimte.entry.js': [41320, 41320], './utrecht-icon-melding-verlichting.entry.js': [80027, 80027], './utrecht-icon-melding.entry.js': [19928, 19928], './utrecht-icon-menselijk.entry.js': [26939, 26939], './utrecht-icon-menu-dot-open.entry.js': [407, 407], './utrecht-icon-menu-dot.entry.js': [69162, 69162], './utrecht-icon-meterkast.entry.js': [1176, 1176], './utrecht-icon-milieu-ontheffing.entry.js': [19679, 19679], './utrecht-icon-milieu-zone.entry.js': [52671, 52671], './utrecht-icon-minus-vertical.entry.js': [653, 653], './utrecht-icon-minus.entry.js': [81403, 81403], './utrecht-icon-mobiliteit.entry.js': [97788, 97788], './utrecht-icon-natuur.entry.js': [31377, 31377], './utrecht-icon-nieuw-huis.entry.js': [78740, 78740], './utrecht-icon-nieuwsbrief.entry.js': [22097, 22097], './utrecht-icon-nummerbord.entry.js': [56251, 56251], './utrecht-icon-om-het-huis.entry.js': [77372, 77372], './utrecht-icon-omgeving.entry.js': [27917, 27917], './utrecht-icon-omgevingsvisie.entry.js': [51285, 51285], './utrecht-icon-omgevingswet.entry.js': [18287, 18287], './utrecht-icon-onderhoud.entry.js': [42629, 42629], './utrecht-icon-ondernemen.entry.js': [84131, 84131], './utrecht-icon-openingstijden.entry.js': [50640, 50640], './utrecht-icon-over-de-stad.entry.js': [3350, 3350], './utrecht-icon-overlijden.entry.js': [29052, 29052], './utrecht-icon-panden.entry.js': [73874, 73874], './utrecht-icon-park.entry.js': [62396, 62396], './utrecht-icon-parkeerkaart.entry.js': [67e3, 67e3], './utrecht-icon-parkeervergunning.entry.js': [53164, 54866], './utrecht-icon-parken.entry.js': [51831, 51831], './utrecht-icon-parkeren-bedrijven.entry.js': [30200, 30200], './utrecht-icon-parkeren-betaalautomaat.entry.js': [8568, 8568], './utrecht-icon-parkeren-betalen.entry.js': [87733, 87733], './utrecht-icon-parkeren.entry.js': [20030, 20030], './utrecht-icon-participatie-campagne.entry.js': [34913, 34913], './utrecht-icon-participatie-like.entry.js': [38139, 38139], './utrecht-icon-participatie-pitch.entry.js': [11063, 11063], './utrecht-icon-paspoort.entry.js': [23249, 23249], './utrecht-icon-presentatie.entry.js': [21904, 21904], './utrecht-icon-prijskaartje.entry.js': [35137, 35137], './utrecht-icon-read-aloud.entry.js': [65225, 65225], './utrecht-icon-rijbewijs.entry.js': [77863, 77863], './utrecht-icon-rioolheffing.entry.js': [34030, 34030], './utrecht-icon-rolstoel.entry.js': [25514, 25514], './utrecht-icon-schild-gemeente-utrecht.entry.js': [80627, 80627], './utrecht-icon-search.entry.js': [48233, 48233], './utrecht-icon-shoppen.entry.js': [93607, 93607], './utrecht-icon-sinterklaas.entry.js': [69869, 69869], './utrecht-icon-slechtziende-hoordende.entry.js': [26489, 26489], './utrecht-icon-sport-en-cultuur.entry.js': [45330, 45330], './utrecht-icon-sport-voetbal.entry.js': [43350, 43350], './utrecht-icon-sport.entry.js': [18842, 18842], './utrecht-icon-stookverbod.entry.js': [87544, 87544], './utrecht-icon-strand.entry.js': [8824, 8824], './utrecht-icon-strooien.entry.js': [21764, 21764], './utrecht-icon-subsidie-gezin.entry.js': [12795, 12795], './utrecht-icon-subsidie.entry.js': [74362, 74362], './utrecht-icon-t-shirt.entry.js': [63424, 63424], './utrecht-icon-thuiswerken.entry.js': [45784, 45784], './utrecht-icon-toeslag.entry.js': [74545, 74545], './utrecht-icon-trein.entry.js': [88369, 88369], './utrecht-icon-trouwen.entry.js': [76990, 76990], './utrecht-icon-twitter.entry.js': [35149, 35149], './utrecht-icon-user.entry.js': [19878, 19878], './utrecht-icon-uw-wijk.entry.js': [45596, 45596], './utrecht-icon-vaccinatie.entry.js': [8305, 8305], './utrecht-icon-veilige-wijk.entry.js': [49973, 49973], './utrecht-icon-vergaderen.entry.js': [74755, 74755], './utrecht-icon-vergaderendigitaal.entry.js': [19918, 19918], './utrecht-icon-vergoeding.entry.js': [61950, 61950], './utrecht-icon-verhuizen.entry.js': [64874, 64874], './utrecht-icon-verkeerslicht.entry.js': [85865, 85865], './utrecht-icon-verkiezingen.entry.js': [82844, 82844], './utrecht-icon-verslaving.entry.js': [45363, 45363], './utrecht-icon-vervoersvoorziening.entry.js': [45210, 45210], './utrecht-icon-virus.entry.js': [79680, 79680], './utrecht-icon-vluchtelingen.entry.js': [87776, 87776], './utrecht-icon-voorzieningen-vervoer.entry.js': [80081, 80081], './utrecht-icon-vrijwilligerswerk.entry.js': [63802, 63802], './utrecht-icon-vuilnisbak.entry.js': [21374, 21374], './utrecht-icon-vuilniszak.entry.js': [29190, 29190], './utrecht-icon-vuurwerk.entry.js': [74652, 74652], './utrecht-icon-wandelstok.entry.js': [30982, 30982], './utrecht-icon-warm.entry.js': [97377, 97377], './utrecht-icon-warning.entry.js': [44075, 44075], './utrecht-icon-werken.entry.js': [59390, 59390], './utrecht-icon-werkzaamheden.entry.js': [51112, 51112], './utrecht-icon-whatsapp.entry.js': [26039, 26039], './utrecht-icon-wonen-kosten.entry.js': [18118, 18118], './utrecht-icon-woning-zoeken.entry.js': [29197, 29197], './utrecht-icon-x.entry.js': [19362, 19362], './utrecht-icon-youtube.entry.js': [20187, 20187], './utrecht-icon-zelfstandig-wonen.entry.js': [61393, 61393], './utrecht-icon-zoom-minus.entry.js': [50545, 50545], './utrecht-icon-zoom-plus.entry.js': [68278, 68278], './utrecht-icon-zoomin.entry.js': [25870, 25870], './utrecht-icon-zoomout.entry.js': [48005, 48005], './utrecht-icon-zorg-huis.entry.js': [7463, 7463], './utrecht-icon-zweefpaal.entry.js': [66426, 66426], './utrecht-icon-zwemmen.entry.js': [47566, 47566], './utrecht-logo-button.entry.js': [54250, 54250], './utrecht-map-marker.entry.js': [99319, 99319], './utrecht-multiline-data.entry.js': [13746, 13746], './utrecht-page-footer.entry.js': [2950, 2950], './utrecht-pagination.entry.js': [50370, 50370], './utrecht-progress-list-item.entry.js': [34351, 34351], './utrecht-progress-list.entry.js': [25989, 25989], './utrecht-progress-sublist-item.entry.js': [48316, 48316], './utrecht-sidenav.entry.js': [78510, 78510], './utrecht-surface.entry.js': [89905, 89905], './utrecht-table-body.entry.js': [92786, 92786], './utrecht-table-caption.entry.js': [66250, 24469], './utrecht-table-cell.entry.js': [75028, 75028], './utrecht-table-footer.entry.js': [78800, 78800], './utrecht-table-header-cell.entry.js': [99930, 99930], './utrecht-table-header.entry.js': [10472, 10472], './utrecht-table-row.entry.js': [45872, 45872], './utrecht-table.entry.js': [42176, 42176], './utrecht-textarea.entry.js': [41192, 41192], './utrecht-textbox.entry.js': [88451, 88451] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 98507), (e.exports = i);
  },
  35038: (e, t, n) => {
   'use strict';
   n.d(t, { Zb: () => a, aY: () => c, um: () => l, wu: () => o });
   var r = n(31916),
    i = n(4814),
    s = n(52676);
   const o = (e) => {
     let { background: t, children: n, className: r, ...o } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('card__illustration', t && 'card__illustration--background', r), ...o, children: n });
    },
    c = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    a = (e) => {
     let { href: t, appearance: n, className: o, component: c = 'div', children: a } = e;
     const l = (e) => ('article' === c ? (0, s.jsx)('article', { ...e }) : 'section' === c ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(l, { className: (0, i.Z)('cardgroup__card', `cardgroup__card--${n}`, o), children: a });
     return t ? (0, s.jsx)(r.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${t}`, r), children: n });
    };
  },
  97520: (e, t, n) => {
   'use strict';
   n.d(t, { I: () => c });
   var r = n(57716),
    i = n(75271),
    s = n(14669),
    o = n(52676);
   const c = (e) => {
    let { component: t } = e;
    const { title: c } = t,
     a = (0, s.mA)(c),
     l = i.lazy(() => n(42767)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(l, {}) }) });
   };
  },
  76233: (e, t, n) => {
   'use strict';
   n.d(t, { B: () => d });
   var r = n(57716),
    i = n(4814),
    s = n(75271),
    o = n(14669),
    c = n(52676);
   const a = (e) => {
     let { children: t } = e;
     return (0, c.jsx)('ol', { className: 'nlds-anatomy-list', children: t });
    },
    l = (e) => {
     let { children: t } = e;
     return (0, c.jsx)('li', { className: 'nlds-anatomy-list__item', children: t });
    },
    d = (e) => {
     let { component: t, illustration: d } = e;
     const { title: h } = t,
      u = (0, o.mA)(h),
      m = s.lazy(() => n(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, c.jsx)(s.Suspense, {
      fallback: null,
      children: (0, c.jsxs)('figure', {
       className: (0, i.Z)('component-anatomy'),
       children: [
        d && (0, c.jsx)(d, { role: 'img', height: null, className: (0, i.Z)('component-anatomy__illustration') }),
        d &&
         m &&
         (0, c.jsx)('figcaption', {
          children: (0, c.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: t } = e;
             return (0, c.jsx)(a, { children: t });
            },
            li: (e) => {
             let { children: t } = e;
             return (0, c.jsx)(l, { children: t });
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
  55240: (e, t, n) => {
   'use strict';
   n.d(t, { t: () => h });
   var r = n(31916);
   const i = [
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
    s = (new Map(i.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    o = [...i.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: t } = e;
      return !s.find((e) => e.sc === t);
     }),
    c = new Map(o.map((e) => [e.sc, e]));
   var a = n(95674),
    l = n(52676);
   const d = (e) => {
     let { title: t, sc: n, status: i, component: s, headingLevel: o = 4 } = e;
     const a = c.get(n),
      d = a ? `${n} ${a.nl?.title}` : n;
     return (0, l.jsxs)('div', { className: 'component-criteria-section', children: [(0, l.jsx)(r.X6, { appearance: 'utrecht-heading-4', level: o, className: 'component-criteria-section__heading', children: t }), (n || i) && (0, l.jsxs)('dl', { className: 'component-criteria-section__dl', children: [n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, l.jsx)(r.rU, { href: `/wcag/${n}`, children: d }) })] }), i && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dl', children: i })] })] }), s] });
    },
    h = (e) => {
     let { testCategory: t, items: n } = e;
     return (0, l.jsx)(a.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: !1, label: (0, l.jsx)('span', { children: t }), body: n.map((e, t) => (0, l.jsx)(d, { ...e }, t)) }] });
    };
  },
  8657: (e, t, n) => {
   'use strict';
   n.d(t, { cN: () => b, vM: () => C, W: () => x, Rv: () => T });
   var r = n(95674),
    i = n(4814),
    s = n(39854),
    o = n(7522),
    c = n(62559),
    a = n(79734),
    l = n(32636),
    d = n(52676);
   const h = { figma: (0, d.jsx)(s.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(c.Z, {}), storybook: (0, d.jsx)(a.Z, {}) },
    u = (e) => {
     let { brand: t } = e;
     return (0, d.jsx)(r.JO, { children: h[t] || (0, d.jsx)(l.Z, {}) });
    };
   var m = n(35038),
    g = n(76193);
   const p = (e) => {
    let { checked: t, unchecked: r } = e;
    return (0, d.jsx)(g.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = n(79333).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: t, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var j = n(23355),
    w = n(41757),
    v = n(31916),
    y = n(25953);
   const A = (e) => {
     let { children: t } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: t });
    },
    f = (e) => {
     let { checked: t, children: n, title: r, description: s, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', t && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: t ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), t && (0, d.jsx)(y.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(v.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), s, n] })] });
    };
   var k = n(14669);
   const b = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => k.e9.includes(e.id)),
      o = s && k.e9.map((e) => s.find((t) => t.id === e)).filter(Boolean);
     return (
      t &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, k.mA)(e.title)}`),
        headingLevel: n,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(A, {
            children: e.tasks.map((e) => {
             let { checked: t, name: r, id: i } = e;
             return (0, d.jsx)(f, { headingLevel: n + 1, checked: t, title: r, description: (0, k.Q6)(i) }, i);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${t.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    x = (e) => {
     let { component: t, headingLevel: n } = e;
     const i = t && t.projects.filter((e) => !k.e9.includes(e.id));
     return t && i.length
      ? (0, d.jsx)(m.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const t = e.tasks.find((e) => {
             let { name: t } = e;
             return 'Naam' === t;
            }),
            i = t?.value,
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${i} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${i} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${i} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter((e) => {
             let { name: t, value: n } = e;
             return s.has(t) && URL.canParse(n) && 'https:' === new URL(n).protocol;
            });
           return (0, d.jsx)(
            m.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(m.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: n, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               o.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: n + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: o.map((e) => {
                    const t = s.get(e.name);
                    return t ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: t.brand }), ' ', t.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
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
     let { component: t } = e;
     const n = t?.projects.find((e) => 'HELP_WANTED' === e.id).tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', t.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [n ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: n, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', t.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortang van ', t.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: t.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = (e) => {
     let { component: t, headingLevel: n, description: i } = e;
     const s = t && k.$3[t.relayStep];
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w.V, { level: n, suffix: s && (0, d.jsx)(j.y, { state: s }), children: t.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, t, n) => {
   'use strict';
   n.d(t, { y: () => c });
   var r = n(31916),
    i = n(4814),
    s = n(14669),
    o = n(52676);
   const c = (e) => {
    let { state: t } = e;
    const n = (0, s.mA)(t);
    return (0, o.jsx)(r.Ou, { className: (0, i.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  41757: (e, t, n) => {
   'use strict';
   n.d(t, { V: () => s });
   var r = n(4814),
    i = n(52676);
   const s = (e) => {
    let { children: t, className: n, level: s = 1, suffix: o, ...c } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, n), ...c, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: t }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, t, n) => {
   'use strict';
   n.d(t, { U: () => d });
   var r = n(87118),
    i = n(31916),
    s = n(52676);
   const o = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: i } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + i;
     }
     return n.toString();
    },
    c = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    a = (e) => ({
     img: (t) => {
      let { src: n, ...r } = t;
      return (0, s.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, t) => {
     if (e) {
      const e = { ...c[t - 1] };
      return (e.h1 = () => null), e;
     }
     return c[t];
    },
    d = (e) => {
     let { children: t, omitH1: n = !1, headingLevel: i = 1, baseUrl: o = '', components: c = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...l(n, i), ...a(o), ...c }, children: t });
    };
  },
  14669: (e, t, n) => {
   'use strict';
   n.d(t, { $3: () => r, BA: () => c, Q6: () => s, e9: () => o, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
  42767: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [33272, 33272], './code-docs/docs/aliases.md': [45077, 45077], './color-sample-docs/docs/aliases.md': [16992, 16992], './data-badge-docs/docs/aliases.md': [594, 594], './heading-1-docs/docs/aliases.md': [53016, 53016], './heading-2-docs/docs/aliases.md': [85698, 85698], './heading-3-docs/docs/aliases.md': [87232, 87232], './heading-4-docs/docs/aliases.md': [8683, 8683], './heading-docs/docs/aliases.md': [71918, 71918], './link-docs/docs/aliases.md': [63694, 63694], './mark-docs/docs/aliases.md': [69269, 69269], './number-badge-docs/docs/aliases.md': [40519, 40519], './paragraph-docs/docs/aliases.md': [47096, 47096], './skip-link-docs/docs/aliases.md': [71218, 71218] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 42767), (e.exports = i);
  },
  22930: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [7231, 7231], './code-docs/docs/anatomy/anatomy.md': [68449, 68449], './color-sample-docs/docs/anatomy/anatomy.md': [4853, 4853], './data-badge-docs/docs/anatomy/anatomy.md': [23242, 23242], './heading-1-docs/docs/anatomy/anatomy.md': [37039, 37039], './heading-2-docs/docs/anatomy/anatomy.md': [55167, 55167], './heading-3-docs/docs/anatomy/anatomy.md': [68844, 68844], './heading-4-docs/docs/anatomy/anatomy.md': [70868, 70868], './heading-5-docs/docs/anatomy/anatomy.md': [3549, 3549], './heading-6-docs/docs/anatomy/anatomy.md': [41448, 41448], './heading-docs/docs/anatomy/anatomy.md': [36472, 36472], './link-docs/docs/anatomy/anatomy.md': [96372, 96372], './mark-docs/docs/anatomy/anatomy.md': [9429, 9429], './number-badge-docs/docs/anatomy/anatomy.md': [31598, 31598], './paragraph-docs/docs/anatomy/anatomy.md': [48260, 48260], './skip-link-docs/docs/anatomy/anatomy.md': [54962, 54962] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 22930), (e.exports = i);
  },
 },
]);
