(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98634],
 {
  93514: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  47901: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  47913: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;" }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte;' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  68934: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  50553: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  96620: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Je kunt de link focussen met de tabtoets en activeren met de entertoets.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  77293: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  71504: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een manier om dit in te stellen, is dat de actie niet activeert als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. Zo kan de bezoeker de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken. Gebruik hiervoor bij voorkeur het ', (0, r.jsx)(n.code, { children: 'click' }), '-event, omdat dit apparaatonafhankelijk is.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  65666: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, r.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Maar:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  29618: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  56050: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  23930: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  71811: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De link heeft een rol van ', (0, r.jsx)(n.code, { children: 'link' }), ' en een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' die duidelijk maakt waar de link voor dient.'] }), '\n', (0, r.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, r.jsx)(n.code, { children: 'a' }), '-element als je een link nodig hebt:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url">Contact</a>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, r.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, r.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40878: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => $, component: () => Q, contentTitle: () => I, default: () => ee, description: () => K, frontMatter: () => U, issueNumber: () => q, metadata: () => B, title: () => J, toc: () => X });
   var r,
    i,
    s,
    o,
    a,
    c,
    l,
    d,
    h,
    u = t(52676),
    m = t(40139),
    g = t(43166),
    j = t(93514),
    p = t(75271);
   function k() {
    return (
     (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
         }
         return e;
        }),
     k.apply(this, arguments)
    );
   }
   const v = (e) => {
    let { title: n, titleId: t, ...u } = e;
    return p.createElement('svg', k({ width: 960, height: 540, viewBox: '0 0 960 540', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-label': 'Een stuk lopende tekst, waarvan de laatste twee woorden blauw zijn en onderstreept. Dat deel is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van de link component\\u201D.', role: 'img', 'aria-labelledby': t }, u), n ? p.createElement('title', { id: t }, n) : null, r || (r = p.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = p.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = p.createElement('path', { d: 'M321.904 263.976c1.664 0 2.997.389 4 1.168 1.013.768 1.52 2.197 1.52 4.288 0 2.037-.507 3.477-1.52 4.32-1.003.832-2.224 1.248-3.664 1.248h-2.64v-11.024h2.304Zm-.784 1.216v8.608h1.232c1.024 0 1.856-.315 2.496-.944.64-.629.96-1.771.96-3.424 0-1.163-.165-2.053-.496-2.672-.331-.629-.752-1.045-1.264-1.248-.512-.213-1.115-.32-1.808-.32h-1.12Zm10.169 1.376V275h-1.472v-8.432h1.472Zm-.752-4.048c.309 0 .56.096.752.288a.977.977 0 0 1 .288.72.977.977 0 0 1-.288.72c-.192.181-.443.272-.752.272-.299 0-.544-.091-.736-.272a.977.977 0 0 1-.288-.72c0-.288.096-.528.288-.72a.996.996 0 0 1 .736-.288Zm8.052 12.096a3.238 3.238 0 0 1-1.888.576c-.715 0-1.275-.203-1.68-.608-.395-.416-.592-1.013-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024c0 .437.074.757.224.96.16.192.421.288.784.288.33 0 .704-.112 1.12-.336l.56.976Zm7.231-8.048V275h-1.472v-8.432h1.472Zm-.752-4.048c.309 0 .56.096.752.288a.977.977 0 0 1 .288.72.977.977 0 0 1-.288.72c-.192.181-.443.272-.752.272-.299 0-.544-.091-.736-.272a.977.977 0 0 1-.288-.72c0-.288.096-.528.288-.72a.996.996 0 0 1 .736-.288Zm6.084 3.856c.576 0 1.093.08 1.552.24.458.16.896.4 1.312.72l-.624.928a5.02 5.02 0 0 0-1.104-.544 3.335 3.335 0 0 0-1.088-.176c-.48 0-.859.101-1.136.304a.918.918 0 0 0-.416.8c0 .341.128.608.384.8.266.192.741.379 1.424.56.938.235 1.637.555 2.096.96.469.405.704.96.704 1.664 0 .832-.326 1.467-.976 1.904-.64.437-1.424.656-2.352.656-1.28 0-2.342-.368-3.184-1.104l.784-.896c.714.544 1.504.816 2.368.816.554 0 .992-.112 1.312-.336.33-.235.496-.549.496-.944 0-.288-.059-.517-.176-.688-.118-.181-.32-.336-.608-.464-.288-.139-.71-.283-1.264-.432-.896-.235-1.547-.549-1.952-.944-.395-.395-.592-.896-.592-1.504 0-.437.128-.832.384-1.184.266-.363.629-.64 1.088-.832a3.909 3.909 0 0 1 1.568-.304Zm15.783 4.16c0 .245-.011.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .779-.059 1.12-.176a4.504 4.504 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm10.175.432c0 .245-.011.496-.032.752h-5.376c.064.928.298 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .778-.059 1.12-.176a4.523 4.523 0 0 0 1.072-.56l.64.88c-.896.704-1.878 1.056-2.944 1.056-1.174 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.138-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.978.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.166-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.206 0-1.862.885-1.968 2.656h3.952v-.096Zm7.774-3.728c.768 0 1.366.229 1.792.688.438.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.554-.368-.992-.368-.448 0-.842.128-1.184.384-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm15.834.192L394.942 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12h1.552Zm4.788-.192c1.184 0 2.102.395 2.752 1.184.662.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.298.661-.73 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.106-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.15-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.566-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.726 3.216 2.176 3.216 1.451 0 2.176-1.077 2.176-3.232 0-2.144-.72-3.216-2.16-3.216Zm9.344-1.184c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.565-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216s2.176-1.077 2.176-3.232c0-2.144-.72-3.216-2.16-3.216Zm9.84-1.184c.298 0 .576.032.832.096l-.272 1.44a3.038 3.038 0 0 0-.736-.096c-.523 0-.944.192-1.264.576-.32.384-.571.981-.752 1.792V275h-1.472v-8.432h1.264l.144 1.712c.224-.629.528-1.104.912-1.424.384-.32.832-.48 1.344-.48Zm6.364 0c.96 0 1.722.389 2.288 1.168.565.768.848 1.845.848 3.232 0 .875-.134 1.648-.4 2.32-.267.661-.651 1.179-1.152 1.552-.502.363-1.088.544-1.76.544-.886 0-1.632-.373-2.24-1.12l-.144.928h-1.296v-11.824l1.472-.176v4.624c.608-.832 1.402-1.248 2.384-1.248Zm-.528 7.648c.65 0 1.157-.261 1.52-.784.373-.533.56-1.355.56-2.464 0-1.141-.171-1.963-.512-2.464-.342-.512-.827-.768-1.456-.768-.747 0-1.403.437-1.968 1.312v4.032c.224.352.496.629.816.832.33.203.677.304 1.04.304Zm12.54-3.488c0 .245-.011.496-.032.752h-5.376c.064.928.298 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .778-.059 1.12-.176a4.523 4.523 0 0 0 1.072-.56l.64.88c-.896.704-1.878 1.056-2.944 1.056-1.174 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.138-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.978.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.166-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.206 0-1.862.885-1.968 2.656h3.952v-.096Zm10.174.432c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm5.487 5.088c-.544 0-.976-.16-1.296-.48-.309-.331-.464-.789-.464-1.376v-10.16l1.472-.176v10.304c0 .235.037.405.112.512.085.107.224.16.416.16.203 0 .384-.032.544-.096l.384 1.024a2.398 2.398 0 0 1-1.168.288Zm9.458-12.016V275h-1.296l-.144-1.168a3.126 3.126 0 0 1-1.04 1.008 2.78 2.78 0 0 1-1.392.352c-1.003 0-1.787-.395-2.352-1.184-.555-.789-.832-1.851-.832-3.184 0-.864.133-1.632.4-2.304.266-.672.65-1.195 1.152-1.568.501-.384 1.088-.576 1.76-.576.864 0 1.621.347 2.272 1.04V263l1.472.176Zm-3.552 10.848c.448 0 .832-.101 1.152-.304.32-.213.629-.528.928-.944v-4.128c-.278-.363-.576-.635-.896-.816a1.964 1.964 0 0 0-1.056-.288c-.651 0-1.158.272-1.52.816-.352.544-.528 1.355-.528 2.432 0 1.088.165 1.899.496 2.432.33.533.805.8 1.424.8Zm17.012-7.456L472.957 275h-1.776l-2.912-8.432h1.6l2.208 7.12 2.192-7.12h1.552Zm7.113 6.464c0 .341.059.597.176.768a1.1 1.1 0 0 0 .528.368l-.336 1.024c-.437-.053-.789-.176-1.056-.368-.266-.192-.464-.491-.592-.896-.565.843-1.402 1.264-2.512 1.264-.832 0-1.488-.235-1.968-.704s-.72-1.083-.72-1.84c0-.896.32-1.584.96-2.064.651-.48 1.568-.72 2.752-.72h1.296v-.624c0-.597-.144-1.024-.432-1.28-.288-.256-.73-.384-1.328-.384-.618 0-1.376.149-2.272.448l-.368-1.072c1.046-.384 2.016-.576 2.912-.576.992 0 1.734.245 2.224.736.491.48.736 1.168.736 2.064v3.856Zm-3.456 1.056c.843 0 1.504-.437 1.984-1.312v-1.936h-1.104c-1.557 0-2.336.576-2.336 1.728 0 .501.123.88.368 1.136.246.256.608.384 1.088.384Zm10.448-7.712c.768 0 1.365.229 1.792.688.437.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.555-.368-.992-.368a1.92 1.92 0 0 0-1.184.384c-.342.256-.662.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.298-.448.666-.8 1.104-1.056a2.914 2.914 0 0 1 1.472-.384Zm16.169-3.2V275h-1.296l-.144-1.168a3.117 3.117 0 0 1-1.04 1.008 2.78 2.78 0 0 1-1.392.352c-1.003 0-1.787-.395-2.352-1.184-.555-.789-.832-1.851-.832-3.184 0-.864.133-1.632.4-2.304.267-.672.651-1.195 1.152-1.568.501-.384 1.088-.576 1.76-.576.864 0 1.621.347 2.272 1.04V263l1.472.176Zm-3.552 10.848c.448 0 .832-.101 1.152-.304.32-.213.629-.528.928-.944v-4.128c-.277-.363-.576-.635-.896-.816a1.96 1.96 0 0 0-1.056-.288c-.651 0-1.157.272-1.52.816-.352.544-.528 1.355-.528 2.432 0 1.088.165 1.899.496 2.432.331.533.805.8 1.424.8Zm12.954-3.488c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Z', fill: '#0A2750' })), o || (o = p.createElement('path', { d: 'M524.2 275.192c-.544 0-.976-.16-1.296-.48-.309-.331-.464-.789-.464-1.376v-10.16l1.472-.176v10.304c0 .235.037.405.112.512.085.107.224.16.416.16.203 0 .384-.032.544-.096l.384 1.024a2.398 2.398 0 0 1-1.168.288Zm4.48-8.624V275h-1.472v-8.432h1.472Zm-.752-4.048c.309 0 .56.096.752.288a.977.977 0 0 1 .288.72.977.977 0 0 1-.288.72c-.192.181-.443.272-.752.272-.299 0-.544-.091-.736-.272a.977.977 0 0 1-.288-.72c0-.288.096-.528.288-.72a.996.996 0 0 1 .736-.288Zm7.763 3.856c.768 0 1.365.229 1.792.688.437.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.555-.368-.992-.368a1.92 1.92 0 0 0-1.184.384c-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384ZM542.57 263v12h-1.472v-11.824l1.472-.176Zm4.848 3.568-3.104 3.728L547.77 275h-1.76l-3.344-4.608 3.104-3.824h1.648Zm9.174-.192c.501 0 .96.075 1.376.224.416.139.816.368 1.2.688l-.704.928a3.365 3.365 0 0 0-.88-.464 2.56 2.56 0 0 0-.928-.16c-.683 0-1.216.272-1.6.816-.373.544-.56 1.349-.56 2.416s.187 1.856.56 2.368c.373.501.907.752 1.6.752.331 0 .635-.048.912-.144.277-.107.587-.272.928-.496l.672.96c-.768.619-1.627.928-2.576.928-1.141 0-2.043-.384-2.704-1.152-.651-.768-.976-1.829-.976-3.184 0-.896.149-1.68.448-2.352.299-.672.72-1.195 1.264-1.568.555-.373 1.211-.56 1.968-.56Zm7.424 0c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.149 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.565.363-1.237.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.661-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.299-.672.731-1.189 1.296-1.552.565-.373 1.243-.56 2.032-.56Zm0 1.184c-1.461 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216s2.176-1.077 2.176-3.232c0-2.144-.72-3.216-2.16-3.216Zm14.64-1.184c.693 0 1.248.235 1.664.704.416.459.624 1.083.624 1.872V275h-1.472v-5.84c0-1.088-.395-1.632-1.184-1.632-.416 0-.768.123-1.056.368-.288.235-.597.608-.928 1.12V275h-1.472v-5.84c0-1.088-.395-1.632-1.184-1.632-.427 0-.784.123-1.072.368-.288.245-.592.619-.912 1.12V275h-1.472v-8.432h1.264l.128 1.232c.629-.949 1.44-1.424 2.432-1.424.523 0 .965.133 1.328.4.373.267.64.64.8 1.12.331-.491.693-.864 1.088-1.12.405-.267.88-.4 1.424-.4Zm9.127 0c1.077 0 1.866.384 2.368 1.152.501.768.752 1.851.752 3.248 0 1.323-.288 2.389-.864 3.2-.576.811-1.392 1.216-2.448 1.216-.939 0-1.675-.32-2.208-.96v4l-1.472.176v-11.84h1.264l.112 1.136a3.137 3.137 0 0 1 1.12-.976 2.866 2.866 0 0 1 1.376-.352Zm-.544 7.616c1.386 0 2.08-1.072 2.08-3.216 0-2.155-.635-3.232-1.904-3.232-.416 0-.795.123-1.136.368a3.6 3.6 0 0 0-.896.944v4.112c.213.331.48.587.8.768.32.171.672.256 1.056.256Zm9.34-7.616c1.184 0 2.101.395 2.752 1.184.661.789.992 1.861.992 3.216 0 .875-.15 1.648-.448 2.32-.299.661-.731 1.179-1.296 1.552-.566.363-1.238.544-2.016.544-1.184 0-2.107-.395-2.768-1.184-.662-.789-.992-1.861-.992-3.216 0-.875.149-1.643.448-2.304.298-.672.73-1.189 1.296-1.552.565-.373 1.242-.56 2.032-.56Zm0 1.184c-1.462 0-2.192 1.077-2.192 3.232 0 2.144.725 3.216 2.176 3.216 1.45 0 2.176-1.077 2.176-3.232 0-2.144-.72-3.216-2.16-3.216Zm10.143-1.184c.768 0 1.366.229 1.792.688.438.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.554-.368-.992-.368-.448 0-.842.128-1.184.384-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm11.775 4.16c0 .245-.01.496-.032.752h-5.376c.064.928.299 1.611.704 2.048.406.437.928.656 1.568.656a3.43 3.43 0 0 0 1.12-.176 4.486 4.486 0 0 0 1.072-.56l.64.88c-.896.704-1.877 1.056-2.944 1.056-1.173 0-2.09-.384-2.752-1.152-.65-.768-.976-1.824-.976-3.168 0-.875.139-1.648.416-2.32.288-.683.694-1.216 1.216-1.6.534-.384 1.158-.576 1.872-.576 1.12 0 1.979.368 2.576 1.104.598.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.165-1.467-.496-1.904-.33-.437-.826-.656-1.488-.656-1.205 0-1.861.885-1.968 2.656h3.952v-.096Zm7.775-3.728c.768 0 1.365.229 1.792.688.437.459.656 1.088.656 1.888V275h-1.472v-5.84c0-.597-.112-1.019-.336-1.264-.224-.245-.555-.368-.992-.368a1.92 1.92 0 0 0-1.184.384c-.341.256-.661.624-.96 1.104V275h-1.472v-8.432h1.264l.128 1.248c.299-.448.667-.8 1.104-1.056a2.916 2.916 0 0 1 1.472-.384Zm9.663 8.24a3.238 3.238 0 0 1-1.888.576c-.715 0-1.275-.203-1.68-.608-.395-.416-.592-1.013-.592-1.792v-5.088h-1.472v-1.136h1.472v-1.904l1.472-.176v2.08h2l-.16 1.136h-1.84v5.024c0 .437.075.757.224.96.16.192.421.288.784.288.331 0 .704-.112 1.12-.336l.56.976Z', fill: '#5315F6' })), a || (a = p.createElement('path', { d: 'M521 276.6h113.479v.8H521v-.8Z', fill: '#5315F6' })), c || (c = p.createElement('path', { d: 'M640.904 272.968c.32 0 .587.107.8.32.213.213.32.475.32.784 0 .309-.107.576-.32.8-.213.213-.48.32-.8.32-.309 0-.571-.107-.784-.32a1.122 1.122 0 0 1-.32-.8c0-.309.107-.571.32-.784.213-.213.475-.32.784-.32Z', fill: '#0A2750' })), l || (l = p.createElement('path', { d: 'M521 250h114M578 210v39.5', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'bevel' })), d || (d = p.createElement('rect', { x: 562, y: 178, width: 32, height: 32, rx: 16, fill: '#DE00A4' })), h || (h = p.createElement('path', { d: 'M580.502 188.368V200.5H578v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43h2.25Z', fill: '#fff' })));
   };
   function w(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, u.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, u.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, u.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, u.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, u.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, u.jsxs)(n.p, { children: ['Een ', (0, u.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, u.jsxs)(n.ul, { children: ['\n', (0, u.jsx)(n.li, { children: (0, u.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, u.jsx)(n.li, { children: (0, u.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(w, { ...e }) }) : w(e);
   }
   var y = t(47901),
    x = t(47913),
    b = t(68934),
    A = t(50553),
    C = t(96620),
    z = t(77293),
    T = t(71504),
    G = t(65666),
    L = t(29618),
    Z = t(56050),
    W = t(23930),
    R = t(71811),
    N = t(1459),
    D = t(4607),
    S = t(97183),
    _ = t(15953),
    P = t(97520),
    F = t(76233),
    M = t(55240),
    V = t(94443);
   function E(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', p: 'p', pre: 'pre', ...(0, m.a)(), ...e.components };
    return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(n.h1, { id: 'gebruik-link', children: 'Gebruik Link' }), '\n', (0, u.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, u.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, u.jsxs)(n.p, { children: [(0, u.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: [(0, u.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Flink-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/link-css'] }), '\nversie 1.'] }), '\n', (0, u.jsxs)(n.p, { children: ['Gebruik de ', (0, u.jsx)(n.code, { children: 'nl-link' }), ' class name op een ', (0, u.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-html', children: '<a href="https://example.com" class="nl-link">example.com</a>\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-css\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/link-css@1/dist/link.css" />\n' }) }), '\n', (0, u.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, u.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/link-css/dist/link.css" />\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/link-css/link.css";\n' }) }), '\n', (0, u.jsx)(n.h3, { id: 'link-om-een-image-of-andere-inline-box-componenten', children: 'Link om een Image of andere inline-box componenten' }), '\n', (0, u.jsxs)(n.p, { children: ['Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de ', (0, u.jsx)(n.code, { children: 'nl-link' }), ' class name in combinatie met ', (0, u.jsx)(n.code, { children: 'nl-link--inline-box' }), ' class name.'] }), '\n', (0, u.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, u.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, u.jsxs)(n.p, { children: [(0, u.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: [(0, u.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Flink-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/link-react'] }), '\nversie 1.'] }), '\n', (0, u.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-react\n' }) }), '\n', (0, u.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, u.jsx)(n.pre, { children: (0, u.jsx)(n.code, { className: 'language-jsx', children: 'import { Link } from "@nl-design-system-candidate/link-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <p>\n          <Link href="https://example.com">example.com</Link>\n        </p>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, u.jsx)(n.h2, { id: 'figma', children: 'Figma' }), '\n', (0, u.jsxs)(n.p, { children: ['De Figma component staat in ', (0, u.jsx)(n.a, { href: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=15527-6188&t=ZSZqzM6JyRQFQVSy-4', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Link' }), '.'] })] });
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(E, { ...e }) }) : E(e);
   }
   var H = t(57716);
   const U = { title: 'Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link', pagination_label: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', slug: '/link', keywords: ['a', 'a tag', 'anchor', 'anchor element', 'anchor link', 'back link', 'button as link', 'call to action link', 'cta link', 'externe link', 'external link', 'href', 'hyper link', 'hyperlink', 'inline link', 'koppeling', 'label', 'link', 'link button', 'links', 'navigatie', 'navigation', 'navlink', 'ordinal', 'standalone', 'standalone link', 'text link', 'URL', 'url', 'verwijzing', 'web address'] },
    I = void 0,
    B = { id: 'componenten/link/index', title: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', source: '@site/docs/componenten/link/index.mdx', sourceDirName: 'componenten/link', slug: '/link', permalink: '/link', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/link/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link', pagination_label: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', slug: '/link', keywords: ['a', 'a tag', 'anchor', 'anchor element', 'anchor link', 'back link', 'button as link', 'call to action link', 'cta link', 'externe link', 'external link', 'href', 'hyper link', 'hyperlink', 'inline link', 'koppeling', 'label', 'link', 'link button', 'links', 'navigatie', 'navigation', 'navlink', 'ordinal', 'standalone', 'standalone link', 'text link', 'URL', 'url', 'verwijzing', 'web address'] }, sidebar: 'componenten', previous: { title: 'Language Navigation', permalink: '/language-navigation' }, next: { title: 'Link List', permalink: '/link-list' } },
    $ = {},
    X = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Gebruik deze component', id: 'gebruik-deze-component', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    J = 'Link',
    K = 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.',
    q = 118,
    Q = g.find((e) => e.number === q);
   function Y(e) {
    const n = { h2: 'h2', ...(0, m.a)(), ...e.components };
    return (0, u.jsxs)(u.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, u.jsx)(V.Rv, { component: Q, headingLevel: 1, description: K }),
      '\n',
      (0, u.jsx)(P.I, { component: Q }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, u.jsx)(F.B, { component: Q, illustration: v }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'gebruik-deze-component', children: 'Gebruik deze component' }),
      '\n',
      (0, u.jsx)(H.U, { omitH1: !0, headingLevel: 3, children: (0, u.jsx)(O, {}) }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, u.jsx)(V.cN, { component: Q, headingLevel: 3 }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, u.jsx)(V.W, { component: Q, headingLevel: 3 }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, u.jsx)(j.ZP, {}),
      '\n',
      (0, u.jsx)(M.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid algemeen',
       items: [
        { title: 'Het label van de Link bestaat uit gewone tekst, niet uit een afbeelding van tekst', sc: '1.4.5', status: '', component: (0, u.jsx)(N.ZP, {}) },
        { title: 'De linktekst van de Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: (0, u.jsx)(_.ZP, {}) },
        { title: 'Als de gebruiker de Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken', sc: '2.5.2', status: '', component: (0, u.jsx)(T.ZP, {}) },
        { title: 'De zichtbare naam van de Link komt voor in de toegankelijke naam', sc: '2.5.3', status: '', component: (0, u.jsx)(G.ZP, {}) },
        { title: 'Als de tekst van de Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode', sc: '3.1.2', status: '', component: (0, u.jsx)(Z.ZP, {}) },
       ],
      }),
      '\n',
      (0, u.jsx)(M.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid visueel ontwerp',
       items: [
        { title: 'De contrastverhouding van de tekstkleur van de Link met de achtergrondkleur is hoog genoeg', sc: '1.4.3', status: '', component: (0, u.jsx)(b.ZP, {}) },
        { title: 'Als het zichtbare label van de Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1', sc: '1.4.11', status: '', component: (0, u.jsx)(y.ZP, {}) },
        { title: 'De Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels', sc: '2.5.5', status: '', component: (0, u.jsx)(L.ZP, {}) },
        { title: 'Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label', sc: '3.2.4', status: '', component: (0, u.jsx)(W.ZP, {}) },
       ],
      }),
      '\n',
      (0, u.jsx)(M.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, u.jsx)(A.ZP, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, u.jsx)(x.ZP, {}) },
       ],
      }),
      '\n',
      (0, u.jsx)(M.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid toetsenbord',
       items: [
        { title: 'Je kunt de Link focussen met de tabtoets en activeren met de entertoets', sc: '2.1.1', status: '', component: (0, u.jsx)(C.ZP, {}) },
        { title: 'De functionaliteit van de Link veroorzaakt geen toetsenbordval', sc: '2.1.2', status: '', component: (0, u.jsx)(D.ZP, {}) },
        { title: 'Wanneer de Link de toetsenbordfocus krijgt is de focus zichtbaar', sc: '2.4.7', status: '', component: (0, u.jsx)(z.ZP, {}) },
        { title: 'Als de Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: (0, u.jsx)(S.ZP, {}) },
       ],
      }),
      '\n',
      (0, u.jsx)(M.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid screenreader',
       items: [
        { title: 'Als het label van de Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief', sc: '1.1.1', status: '', component: (0, u.jsx)(f, {}) },
        { title: 'De Link heeft een rol van link en een toegankelijke naam die duidelijk maakt waar de Link voor dient', sc: '4.1.2', status: '', component: (0, u.jsx)(R.ZP, {}) },
       ],
      }),
      '\n',
      (0, u.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, u.jsx)(V.vM, { component: Q, headingLevel: 3 }),
     ],
    });
   }
   function ee(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(Y, { ...e }) }) : Y(e);
   }
  },
  1459: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik geen afbeeldingen van tekst, wanneer je ook gewone tekst kan gebruiken met vergelijkbare visuele opmaak.' }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer het technisch niet mogelijk is om een tekst er uit te laten zien zoals bedoeld, dan zijn er twee uitzondering om een afbeelding te gebruiken.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De tekst in een logo, die hoort bij het beeldmerk.' }), '\n', (0, r.jsx)(n.li, { children: 'De gebruiker kan weergave van de afbeelding wijzigen, zoals font, kleur en tekstgrootte.' }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  4607: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer een gebruiker met het toetsenbord de focus verplaatst naar een deel van de pagina, dan moet deze ook weer weg kunnen gaan met het toetsenbord. De gebruiker kan daarvoor bijvoorbeeld de Tab-toets, Escape-toets of de pijltjestoetsen gebruiken. Zo niet, beschrijf dan met welke toets het wel kan.' }), '\n', (0, r.jsx)(n.p, { children: 'Als een toetsenbordgebruiker niet verder kan in de pagina, zonder goede uitleg, dan zit deze in de val. Dit is een blokkade bij het navigeren van een website met het toetsenbord alleen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  97183: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Zorg ervoor dat een element dat de toetsenbordfocus heeft zichtbaar is en niet volledig bedekt is door andere inhoud.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  15953: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is een ', (0, r.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is het ', (0, r.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat betekent ', (0, r.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  54907: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [16972, 16972], './utrecht-backdrop.entry.js': [52078, 52078], './utrecht-breadcrumb-nav.entry.js': [79009, 79009], './utrecht-checkbox.entry.js': [40557, 40557], './utrecht-column-layout.entry.js': [91097, 91097], './utrecht-contact-card-template.entry.js': [78516, 78516], './utrecht-custom-checkbox.entry.js': [92912, 92912], './utrecht-data-list-actions.entry.js': [59737, 59737], './utrecht-data-list-item.entry.js': [65183, 65183], './utrecht-data-list-key.entry.js': [22659, 22659], './utrecht-data-list-value.entry.js': [22226, 22226], './utrecht-data-list.entry.js': [94967, 94967], './utrecht-digid-button.entry.js': [9767, 9767], './utrecht-digid-logo.entry.js': [70738, 70738], './utrecht-eherkenning-logo.entry.js': [97179, 97179], './utrecht-eidas-logo.entry.js': [85142, 85142], './utrecht-form-field-error-message.entry.js': [94003, 94003], './utrecht-form-toggle.entry.js': [69578, 69578], './utrecht-html-content.entry.js': [13111, 13111], './utrecht-icon-afspraak-maken.entry.js': [74085, 74085], './utrecht-icon-afval-container.entry.js': [8380, 8380], './utrecht-icon-afval-containerpas.entry.js': [73921, 73921], './utrecht-icon-afval-kalender.entry.js': [35838, 35838], './utrecht-icon-afval-pmd.entry.js': [70258, 70258], './utrecht-icon-afval-scheiden.entry.js': [73169, 73169], './utrecht-icon-afval.entry.js': [30047, 30047], './utrecht-icon-afvalkalender.entry.js': [7893, 7893], './utrecht-icon-alleen.entry.js': [96351, 96351], './utrecht-icon-arrow.entry.js': [6280, 6280], './utrecht-icon-auto.entry.js': [20926, 20926], './utrecht-icon-begroting.entry.js': [26977, 26977], './utrecht-icon-bestemmingsplan.entry.js': [19164, 19164], './utrecht-icon-betaaldatum.entry.js': [39098, 39098], './utrecht-icon-bewijsstukken.entry.js': [2026, 2026], './utrecht-icon-bijstand.entry.js': [2557, 2557], './utrecht-icon-blad.entry.js': [63857, 63857], './utrecht-icon-bouwproject.entry.js': [53604, 53604], './utrecht-icon-brandgevaar.entry.js': [74905, 74905], './utrecht-icon-brief-betalen.entry.js': [81034, 81034], './utrecht-icon-checkmark.entry.js': [60864, 74128], './utrecht-icon-chevron-down.entry.js': [64999, 64999], './utrecht-icon-chevron-left.entry.js': [24758, 24758], './utrecht-icon-chevron-right.entry.js': [77469, 77469], './utrecht-icon-chevron-up.entry.js': [55652, 55652], './utrecht-icon-close.entry.js': [79952, 79952], './utrecht-icon-college-b-w.entry.js': [75898, 75898], './utrecht-icon-container-bio.entry.js': [31755, 31755], './utrecht-icon-container-glas.entry.js': [83173, 83173], './utrecht-icon-container-groenafval.entry.js': [59761, 59761], './utrecht-icon-container-met-zak.entry.js': [96408, 96408], './utrecht-icon-container-papier.entry.js': [91158, 91158], './utrecht-icon-container-pmd.entry.js': [89783, 89783], './utrecht-icon-container-restafval.entry.js': [10406, 10406], './utrecht-icon-container-textiel.entry.js': [66131, 66131], './utrecht-icon-container.entry.js': [1461, 1461], './utrecht-icon-cross.entry.js': [38826, 38826], './utrecht-icon-dakloos.entry.js': [39885, 39885], './utrecht-icon-dementie.entry.js': [69566, 69566], './utrecht-icon-documenten.entry.js': [86548, 86548], './utrecht-icon-duurzaam.entry.js': [48962, 48962], './utrecht-icon-eenzaamheid.entry.js': [89742, 89742], './utrecht-icon-eikenprocessie.entry.js': [6216, 6216], './utrecht-icon-elektrisch-rijden.entry.js': [61879, 61879], './utrecht-icon-energie-vergoeding.entry.js': [26188, 26188], './utrecht-icon-energietransitie.entry.js': [32518, 32518], './utrecht-icon-error.entry.js': [33743, 33743], './utrecht-icon-evenementen.entry.js': [29820, 29820], './utrecht-icon-facebook.entry.js': [19030, 19030], './utrecht-icon-fiets.entry.js': [31091, 31091], './utrecht-icon-filter.entry.js': [22837, 22837], './utrecht-icon-geboorte.entry.js': [79323, 79323], './utrecht-icon-gebruiker-centraal.entry.js': [74635, 74635], './utrecht-icon-gebruiker-ingelogd.entry.js': [49541, 49541], './utrecht-icon-gegevenswoordenboek.entry.js': [43115, 43115], './utrecht-icon-geluid.entry.js': [89497, 89497], './utrecht-icon-gemeente-locatie.entry.js': [98544, 98544], './utrecht-icon-gemeenteraad.entry.js': [6130, 6130], './utrecht-icon-gereedschap.entry.js': [60876, 60876], './utrecht-icon-gezicht.entry.js': [70334, 70334], './utrecht-icon-gezin.entry.js': [54918, 54918], './utrecht-icon-glas-afval.entry.js': [26105, 26105], './utrecht-icon-glijbaan.entry.js': [34660, 34660], './utrecht-icon-grafiek.entry.js': [51307, 51307], './utrecht-icon-grofvuil-ophalen.entry.js': [43954, 43954], './utrecht-icon-grofvuil.entry.js': [14169, 14169], './utrecht-icon-hamburger-menu.entry.js': [82625, 82625], './utrecht-icon-herdenking.entry.js': [20733, 20733], './utrecht-icon-hondenbelasting.entry.js': [30716, 30716], './utrecht-icon-horeca.entry.js': [13184, 94971], './utrecht-icon-horecavergunning.entry.js': [23463, 23463], './utrecht-icon-huis-en-omgeving.entry.js': [49431, 49431], './utrecht-icon-huis.entry.js': [61342, 61342], './utrecht-icon-huishoudelijk-geweld.entry.js': [46064, 46064], './utrecht-icon-hulp-huishouden.entry.js': [83765, 83765], './utrecht-icon-hulp-vervoer.entry.js': [36393, 36393], './utrecht-icon-hulp-zorg.entry.js': [57093, 57093], './utrecht-icon-hulpmiddelen-gezin.entry.js': [47490, 47490], './utrecht-icon-hulpverlening.entry.js': [28993, 28993], './utrecht-icon-idee.entry.js': [28821, 28821], './utrecht-icon-informatie.entry.js': [53212, 53212], './utrecht-icon-information.entry.js': [45569, 45569], './utrecht-icon-innovatie.entry.js': [73749, 73749], './utrecht-icon-inspraak-inwoners.entry.js': [95335, 95335], './utrecht-icon-instagram.entry.js': [70878, 70878], './utrecht-icon-kalender.entry.js': [9566, 9566], './utrecht-icon-kennis.entry.js': [98742, 98742], './utrecht-icon-kerstbomen.entry.js': [63846, 63846], './utrecht-icon-klachten.entry.js': [2727, 2727], './utrecht-icon-kroon.entry.js': [55176, 55176], './utrecht-icon-laadpaal.entry.js': [90512, 90512], './utrecht-icon-language.entry.js': [64754, 64754], './utrecht-icon-lantaarnpaal-oud.entry.js': [69909, 36257], './utrecht-icon-lantaarnpaal.entry.js': [92511, 92511], './utrecht-icon-leren.entry.js': [17941, 17941], './utrecht-icon-let-op.entry.js': [93473, 93473], './utrecht-icon-linkedin.entry.js': [16570, 16570], './utrecht-icon-list-check.entry.js': [5875, 5875], './utrecht-icon-list-number.entry.js': [43033, 43033], './utrecht-icon-list.entry.js': [63983, 63983], './utrecht-icon-loupe.entry.js': [32649, 32649], './utrecht-icon-markt.entry.js': [2436, 2436], './utrecht-icon-melding-boom.entry.js': [750, 750], './utrecht-icon-melding-klacht.entry.js': [32543, 32543], './utrecht-icon-melding-openbareruimte.entry.js': [53376, 53376], './utrecht-icon-melding-verlichting.entry.js': [24930, 24930], './utrecht-icon-melding.entry.js': [96035, 96035], './utrecht-icon-menselijk.entry.js': [14769, 14769], './utrecht-icon-menu-dot-open.entry.js': [82806, 82806], './utrecht-icon-menu-dot.entry.js': [66049, 66049], './utrecht-icon-meterkast.entry.js': [35165, 35165], './utrecht-icon-milieu-ontheffing.entry.js': [76015, 76015], './utrecht-icon-milieu-zone.entry.js': [58570, 58570], './utrecht-icon-minus-vertical.entry.js': [42635, 42635], './utrecht-icon-minus.entry.js': [28496, 28496], './utrecht-icon-mobiliteit.entry.js': [12294, 12294], './utrecht-icon-natuur.entry.js': [99563, 99563], './utrecht-icon-nieuw-huis.entry.js': [62672, 62672], './utrecht-icon-nieuwsbrief.entry.js': [87584, 87584], './utrecht-icon-nummerbord.entry.js': [18866, 18866], './utrecht-icon-om-het-huis.entry.js': [28408, 28408], './utrecht-icon-omgeving.entry.js': [99690, 99690], './utrecht-icon-omgevingsvisie.entry.js': [32683, 32683], './utrecht-icon-omgevingswet.entry.js': [99536, 99536], './utrecht-icon-onderhoud.entry.js': [65024, 65024], './utrecht-icon-ondernemen.entry.js': [93386, 93386], './utrecht-icon-openingstijden.entry.js': [87141, 87141], './utrecht-icon-over-de-stad.entry.js': [21962, 21962], './utrecht-icon-overlijden.entry.js': [8355, 8355], './utrecht-icon-panden.entry.js': [24623, 24623], './utrecht-icon-park.entry.js': [71062, 71062], './utrecht-icon-parkeerkaart.entry.js': [39396, 39396], './utrecht-icon-parkeervergunning.entry.js': [80821, 80821], './utrecht-icon-parken.entry.js': [64639, 64639], './utrecht-icon-parkeren-bedrijven.entry.js': [63253, 63253], './utrecht-icon-parkeren-betaalautomaat.entry.js': [97549, 97549], './utrecht-icon-parkeren-betalen.entry.js': [27509, 27509], './utrecht-icon-parkeren.entry.js': [98802, 98802], './utrecht-icon-participatie-campagne.entry.js': [42189, 42189], './utrecht-icon-participatie-like.entry.js': [22727, 22727], './utrecht-icon-participatie-pitch.entry.js': [77481, 77481], './utrecht-icon-paspoort.entry.js': [31350, 31350], './utrecht-icon-presentatie.entry.js': [86378, 86378], './utrecht-icon-prijskaartje.entry.js': [66375, 66375], './utrecht-icon-read-aloud.entry.js': [56911, 56911], './utrecht-icon-rijbewijs.entry.js': [21081, 21081], './utrecht-icon-rioolheffing.entry.js': [18216, 18216], './utrecht-icon-rolstoel.entry.js': [94479, 94479], './utrecht-icon-schild-gemeente-utrecht.entry.js': [37446, 37446], './utrecht-icon-search.entry.js': [32835, 32835], './utrecht-icon-shoppen.entry.js': [24709, 24709], './utrecht-icon-sinterklaas.entry.js': [55432, 55432], './utrecht-icon-slechtziende-hoordende.entry.js': [26098, 26098], './utrecht-icon-sport-en-cultuur.entry.js': [42266, 42266], './utrecht-icon-sport-voetbal.entry.js': [71966, 71966], './utrecht-icon-sport.entry.js': [95628, 95628], './utrecht-icon-stookverbod.entry.js': [96254, 96254], './utrecht-icon-strand.entry.js': [23488, 23488], './utrecht-icon-strooien.entry.js': [32778, 32778], './utrecht-icon-subsidie-gezin.entry.js': [80567, 80567], './utrecht-icon-subsidie.entry.js': [94682, 94682], './utrecht-icon-t-shirt.entry.js': [54545, 54545], './utrecht-icon-thuiswerken.entry.js': [25321, 25321], './utrecht-icon-toeslag.entry.js': [39183, 39183], './utrecht-icon-trein.entry.js': [87486, 87486], './utrecht-icon-trouwen.entry.js': [34612, 34612], './utrecht-icon-twitter.entry.js': [82414, 82414], './utrecht-icon-user.entry.js': [65113, 65113], './utrecht-icon-uw-wijk.entry.js': [32690, 32690], './utrecht-icon-vaccinatie.entry.js': [75263, 75263], './utrecht-icon-veilige-wijk.entry.js': [28892, 28892], './utrecht-icon-vergaderen.entry.js': [74219, 74219], './utrecht-icon-vergaderendigitaal.entry.js': [19472, 19472], './utrecht-icon-vergoeding.entry.js': [42704, 42704], './utrecht-icon-verhuizen.entry.js': [7159, 7159], './utrecht-icon-verkeerslicht.entry.js': [49443, 49443], './utrecht-icon-verkiezingen.entry.js': [91507, 91507], './utrecht-icon-verslaving.entry.js': [56316, 56316], './utrecht-icon-vervoersvoorziening.entry.js': [31768, 31768], './utrecht-icon-virus.entry.js': [49030, 49030], './utrecht-icon-vluchtelingen.entry.js': [10731, 10731], './utrecht-icon-voorzieningen-vervoer.entry.js': [31915, 31915], './utrecht-icon-vrijwilligerswerk.entry.js': [77206, 77206], './utrecht-icon-vuilnisbak.entry.js': [26762, 26762], './utrecht-icon-vuilniszak.entry.js': [3290, 3290], './utrecht-icon-vuurwerk.entry.js': [81261, 21118], './utrecht-icon-wandelstok.entry.js': [44566, 44566], './utrecht-icon-warm.entry.js': [90649, 90649], './utrecht-icon-warning.entry.js': [32737, 32737], './utrecht-icon-werken.entry.js': [1415, 1415], './utrecht-icon-werkzaamheden.entry.js': [17237, 17237], './utrecht-icon-whatsapp.entry.js': [33821, 33821], './utrecht-icon-wonen-kosten.entry.js': [81883, 81883], './utrecht-icon-woning-zoeken.entry.js': [80571, 80571], './utrecht-icon-x.entry.js': [45434, 45434], './utrecht-icon-youtube.entry.js': [46609, 46609], './utrecht-icon-zelfstandig-wonen.entry.js': [29956, 29956], './utrecht-icon-zoom-minus.entry.js': [72154, 72154], './utrecht-icon-zoom-plus.entry.js': [77634, 77634], './utrecht-icon-zoomin.entry.js': [54755, 54755], './utrecht-icon-zoomout.entry.js': [21405, 21405], './utrecht-icon-zorg-huis.entry.js': [50787, 50787], './utrecht-icon-zweefpaal.entry.js': [90563, 90563], './utrecht-icon-zwemmen.entry.js': [10572, 10572], './utrecht-logo-button.entry.js': [34913, 34913], './utrecht-map-marker.entry.js': [38104, 38104], './utrecht-multiline-data.entry.js': [10150, 10150], './utrecht-number-badge.entry.js': [87062, 87062], './utrecht-page-footer.entry.js': [84907, 84907], './utrecht-pagination.entry.js': [57930, 57930], './utrecht-progress-list-item.entry.js': [26946, 26946], './utrecht-progress-list.entry.js': [36009, 36009], './utrecht-progress-sublist-item.entry.js': [26235, 26235], './utrecht-sidenav.entry.js': [38835, 38835], './utrecht-surface.entry.js': [61084, 81261], './utrecht-table-body.entry.js': [99709, 99709], './utrecht-table-caption.entry.js': [24554, 24554], './utrecht-table-cell.entry.js': [82736, 82736], './utrecht-table-footer.entry.js': [80097, 80097], './utrecht-table-header-cell.entry.js': [9931, 9931], './utrecht-table-header.entry.js': [19668, 19668], './utrecht-table-row.entry.js': [30422, 30422], './utrecht-table.entry.js': [62665, 62665], './utrecht-textarea.entry.js': [83251, 83251], './utrecht-textbox.entry.js': [958, 958] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 54907), (e.exports = i);
  },
  35038: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => c, aY: () => a, um: () => l, wu: () => o });
   var r = t(16167),
    i = t(4814),
    s = t(52676);
   const o = (e) => {
     let { background: n, children: t, className: r, ...o } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('card__illustration', n && 'card__illustration--background', r), ...o, children: t });
    },
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: n, appearance: t, className: o, component: a = 'div', children: c } = e;
     const l = (e) => ('article' === a ? (0, s.jsx)('article', { ...e }) : 'section' === a ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(l, { className: (0, i.Z)('cardgroup__card', `cardgroup__card--${t}`, o), children: c });
     return n ? (0, s.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  97520: (e, n, t) => {
   'use strict';
   t.d(n, { I: () => a });
   var r = t(57716),
    i = t(75271),
    s = t(14669),
    o = t(52676);
   const a = (e) => {
    let { component: n } = e;
    const { title: a } = n,
     c = (0, s.mA)(a),
     l = i.lazy(() => t(42767)(`./${c}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(l, {}) }) });
   };
  },
  76233: (e, n, t) => {
   'use strict';
   t.d(n, { B: () => d });
   var r = t(57716),
    i = t(4814),
    s = t(75271),
    o = t(14669),
    a = t(52676);
   const c = (e) => {
     let { children: n } = e;
     return (0, a.jsx)('ol', { className: 'nlds-anatomy-list', children: n });
    },
    l = (e) => {
     let { children: n } = e;
     return (0, a.jsx)('li', { className: 'nlds-anatomy-list__item', children: n });
    },
    d = (e) => {
     let { component: n, illustration: d } = e;
     const { title: h } = n,
      u = (0, o.mA)(h),
      m = s.lazy(() => t(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, a.jsx)(s.Suspense, {
      fallback: null,
      children: (0, a.jsxs)('figure', {
       className: (0, i.Z)('component-anatomy'),
       children: [
        d && (0, a.jsx)(d, { height: null, className: (0, i.Z)('component-anatomy__illustration') }),
        d &&
         m &&
         (0, a.jsx)('figcaption', {
          children: (0, a.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: n } = e;
             return (0, a.jsx)(c, { children: n });
            },
            li: (e) => {
             let { children: n } = e;
             return (0, a.jsx)(l, { children: n });
            },
           },
           children: (0, a.jsx)(m, {}),
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
   var r = t(16167);
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
      let { sc: n } = e;
      return !s.find((e) => e.sc === n);
     }),
    a = new Map(o.map((e) => [e.sc, e]));
   var c = t(41115),
    l = t(52676);
   const d = (e) => {
     let { title: n, sc: t, status: i, component: s, headingLevel: o = 4 } = e;
     const c = a.get(t),
      d = c ? `${t} ${c.nl?.title}` : t;
     return (0, l.jsxs)('div', { className: 'component-criteria-section', children: [(0, l.jsx)(r.X6, { appearance: 'utrecht-heading-4', level: o, className: 'component-criteria-section__heading', children: n }), (t || i) && (0, l.jsxs)('dl', { className: 'component-criteria-section__dl', children: [t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, l.jsx)(r.rU, { href: `/wcag/${t}`, children: d }) })] }), i && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dl', children: i })] })] }), s] });
    },
    h = (e) => {
     let { testCategory: n, items: t } = e;
     return (0, l.jsx)(c.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 3, expanded: !1, label: (0, l.jsx)('span', { children: n }), body: t.map((e, n) => (0, l.jsx)(d, { ...e }, n)) }] });
    };
  },
  94443: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => y, vM: () => b, W: () => x, Rv: () => A });
   var r = t(41115),
    i = t(4814),
    s = t(39854),
    o = t(7522),
    a = t(62559),
    c = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(s.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(a.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var m = t(35038),
    g = t(23355),
    j = t(41757),
    p = t(16167),
    k = t(55476);
   const v = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    w = (e) => {
     let { checked: n, children: t, title: r, description: s, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(k.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(p.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), s, t] })] });
    };
   var f = t(14669);
   const y = (e) => {
     let { component: n, headingLevel: t } = e;
     const s = n && n.projects.filter((e) => f.e9.includes(e.id)),
      o = s && f.e9.map((e) => s.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, f.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(v, {
            children: e.tasks.map((e) => {
             let { checked: n, name: r, id: i } = e;
             return (0, d.jsx)(w, { headingLevel: t + 1, checked: n, title: r, description: (0, f.Q6)(i) }, i);
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
     const i = n && n.projects.filter((e) => !f.e9.includes(e.id));
     return n && i.length
      ? (0, d.jsx)(m.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
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
            i = n?.value,
            s = (0, f.ps)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return o.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            m.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(m.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] }) }),
               (a.length > 0 || s.length > 0) && (0, d.jsx)(r.X6, { level: t + 1, children: 'Snel aan de slag' }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.Mc, {
                  links: a
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const n = o.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(u, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: s.map((e) => {
                  let { frameworkName: n, tasks: s } = e;
                  return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: t + 2, children: [i, ' in ', n] }), (0, d.jsx)(r.Mc, { links: s.map((e) => ({ children: e.description, icon: (0, d.jsx)(u, { brand: e.brand }), href: e.value })) })] });
                 }),
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
    b = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    A = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const s = n && f.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(j.V, { level: t, suffix: s && (0, d.jsx)(g.y, { state: s }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => a });
   var r = t(16167),
    i = t(4814),
    s = t(14669),
    o = t(52676);
   const a = (e) => {
    let { state: n } = e;
    const t = (0, s.mA)(n);
    return (0, o.jsx)(r.Ou, { className: (0, i.Z)('estafette-badge', t && `estafette-badge--${t}`), children: n });
   };
  },
  41757: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => s });
   var r = t(4814),
    i = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: o, ...a } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, t), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(40139),
    i = t(16167),
    s = t(52676);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    c = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: o(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: o = '', components: a = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...l(t, i), ...c(o), ...a }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, BA: () => a, Ee: () => d, Q6: () => s, U: () => m, d: () => h, e9: () => o, mA: () => i, ps: () => g });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function c(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const n = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular'];
     return [...e].sort((e, t) => n.indexOf(e) - n.indexOf(t));
    },
    d = (e) => {
     const n = e
      .flatMap((e) => {
       let { projects: n } = e;
       return n;
      })
      .flatMap((e) => u(e));
     return l(c(n));
    },
    h = (e, n) => m(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return l(
      c(
       e.tasks
        .filter((e) => {
         let { name: t, value: r } = e;
         return '' !== r && n.test(t);
        })
        .map((e) => {
         let { name: t } = e;
         return n.exec(t)?.[1];
        }),
      ),
     );
    },
    m = (e) => l(c(e.projects.flatMap((e) => u(e)))),
    g = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find((e) => {
        let { name: n } = e;
        return 'Naam' === n;
       });
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter((e) => {
        let { name: t, value: r } = e;
        return '' !== r && t.includes(n);
       })
       .map((r) => {
        let { name: i, id: s, value: o } = r;
        const a = /^(.+) URL/.exec(i)[1],
         c = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: i, id: s, value: o, description: c };
       });
      return { frameworkName: n, tasks: r };
     });
    };
  },
  42767: (e, n, t) => {
   var r = { './code-block-docs/docs/aliases.md': [33272, 33272], './code-docs/docs/aliases.md': [45077, 45077], './color-sample-docs/docs/aliases.md': [16992, 16992], './data-badge-docs/docs/aliases.md': [594, 594], './heading-1-docs/docs/aliases.md': [53016, 53016], './heading-2-docs/docs/aliases.md': [85698, 85698], './heading-3-docs/docs/aliases.md': [87232, 87232], './heading-4-docs/docs/aliases.md': [8683, 8683], './heading-docs/docs/aliases.md': [71918, 71918], './link-docs/docs/aliases.md': [63694, 63694], './mark-docs/docs/aliases.md': [69269, 69269], './number-badge-docs/docs/aliases.md': [40519, 40519], './paragraph-docs/docs/aliases.md': [47096, 47096], './skip-link-docs/docs/aliases.md': [71218, 71218] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 42767), (e.exports = i);
  },
  22930: (e, n, t) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [7231, 7231], './code-docs/docs/anatomy/anatomy.md': [68449, 68449], './color-sample-docs/docs/anatomy/anatomy.md': [4853, 4853], './data-badge-docs/docs/anatomy/anatomy.md': [23242, 23242], './heading-1-docs/docs/anatomy/anatomy.md': [37039, 37039], './heading-2-docs/docs/anatomy/anatomy.md': [55167, 55167], './heading-3-docs/docs/anatomy/anatomy.md': [68844, 68844], './heading-4-docs/docs/anatomy/anatomy.md': [70868, 70868], './heading-5-docs/docs/anatomy/anatomy.md': [3549, 3549], './heading-6-docs/docs/anatomy/anatomy.md': [41448, 41448], './heading-docs/docs/anatomy/anatomy.md': [36472, 36472], './link-docs/docs/anatomy/anatomy.md': [96372, 96372], './mark-docs/docs/anatomy/anatomy.md': [9429, 9429], './number-badge-docs/docs/anatomy/anatomy.md': [31598, 31598], './paragraph-docs/docs/anatomy/anatomy.md': [48260, 48260], './skip-link-docs/docs/anatomy/anatomy.md': [54962, 54962] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 22930), (e.exports = i);
  },
 },
]);
