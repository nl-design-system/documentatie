(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [40284],
 {
  85423: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  67588: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  89823: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  27512: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85578: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  39659: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72628: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  18170: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  21049: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Je kunt het element focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  38228: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Er is een goed zichtbare focusindicator. Dit doe je met een minimale dikte van 2 pixels en een minimaal contrast van 3:1 ten opzichte van aangrenzende kleuren. Hou ook rekening met het contrast met de verschillende achtergrondkleuren waarop een element gebruikt kan worden. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  89131: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  48665: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, r.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  3454: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  83110: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  12783: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  75109: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => I, component: () => J, contentTitle: () => H, default: () => q, description: () => X, frontMatter: () => E, issueNumber: () => K, metadata: () => V, title: () => $, toc: () => U });
   var r = t(52676),
    i = t(40139),
    o = t(81133),
    s = t(67588),
    a = t(89823),
    c = t(27512);
   function l(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als het label van een button uit een afbeelding bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de button een naam heeft die duidelijk maakt waar de button voor dient.' }), '\n', (0, r.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is. Een ', (0, r.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, r.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, r.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, r.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon te tonen, hou dan rekening met het volgende.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een ', (0, r.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de naam van de button:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button>\n  <img src="trashcan.svg" alt="Delete" />\n</button>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een andere manier is een svg in de button op te nemen, samen met een visueel verborgen tekst die de naam van de button vormt :' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button>\n  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">\n    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>\n  </svg>\n  <span class="visually-hidden">Delete</span>\n</button>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   function u(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is deze informatie ook beschikbaar voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit doe je door het ', (0, r.jsx)(n.code, { children: 'aria-haspopup' }), ' attribuut te gebruiken en in te stellen als ', (0, r.jsx)(n.code, { children: '"menu"' }), ', ', (0, r.jsx)(n.code, { children: '"listbox"' }), ', ', (0, r.jsx)(n.code, { children: '"tree"' }), ', ', (0, r.jsx)(n.code, { children: '"grid"' }), ', ', (0, r.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, r.jsx)(n.code, { children: '"true"' }), '. Geef daarnaast de relatie aan met ', (0, r.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, r.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is het mogelijk deze informatie beschikbaar te maken voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, r.jsxs)(n.p, { children: ['Je kunt het ', (0, r.jsx)(n.code, { children: 'aria-haspopup' }), '-attribuut gebruiken en instellen als ', (0, r.jsx)(n.code, { children: '"menu"' }), ', ', (0, r.jsx)(n.code, { children: '"listbox"' }), ', ', (0, r.jsx)(n.code, { children: '"tree"' }), ', ', (0, r.jsx)(n.code, { children: '"grid"' }), ', ', (0, r.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, r.jsx)(n.code, { children: '"true"' }), '. Je kunt daarnaast de relatie aangeven met ', (0, r.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, r.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als het label van het element niet uit tekst bestaat maar uit bijvoorbeeld een icoon (zoals bij een zoekknop met een vergrootglas), dan is het contrast tussen het icoon en de achtergrond minimaal 3:1. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   var b = t(85578),
    f = t(39659),
    v = t(72628),
    k = t(18170),
    w = t(21049),
    x = t(38228);
   function y(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De focusvolgorde op de pagina en na het activeren van een Button moet logisch zijn. Zorg dat het voorspelbaar is waar de toetsenbordfocus heen gaat na het activeren van een knop.' }), '\n', (0, r.jsx)(n.p, { children: "Over het algemeen geldt: wanneer een button nieuwe content opent, zoals een dialoogvenster of een menu, verplaats je de toetsenbordfocus naar een logische plek in de nieuwe content. Bijvoorbeeld: Na het openen van een 'Menu' button verplaatst de toetsenbordfocus naar het eerste menu-item. Nadat de bezoeker de nieuwe content weer heeft gesloten verplaatst de toetsenbordfocus zich weer terug naar de 'Menu' button." }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient. Een label kan bestaan uit tekst of uit een icoon. Als je een icoon gebruikt, heeft het de voorkeur om ook een beschrijvende tekst in de button op te nemen.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
   var T = t(89131),
    G = t(48665);
   function W(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, r.jsx)(n.code, { children: 'button' }), '-element te gebruiken met daarin tekst:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button>Ga naar stap 2</button>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een button. Een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een button. Zodoende kan een button een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de button. Als je echt een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de button.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
   var R = t(3454),
    N = t(83110),
    P = t(12783);
   function L(e) {
    const n = { a: 'a', code: 'code', em: 'em', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De button heeft een rol van ', (0, r.jsx)(n.code, { children: 'button' }), ' en een toegankelijke naam die duidelijk maakt waar de button voor dient. Ook is de toestand (', (0, r.jsx)(n.em, { children: 'state' }), ') duidelijk en door de gebruiker te veranderen met hulpsoftware.'] }), '\n', (0, r.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, r.jsx)(n.code, { children: 'button' }), '-element als je een button nodig hebt:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button>Menu</button>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, r.jsx)(n.code, { children: 'role=button' }), ' toe te voegen aan een ander element dan een ', (0, r.jsx)(n.code, { children: 'button' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.'] }), '\n', (0, r.jsxs)(n.p, { children: ['ARIA is wel goed te gebruiken als je de ', (0, r.jsx)(n.em, { children: 'state' }), ' moet aangeven. Hiervoor bestaat geen HTML-attribuut. Bijvoorbeeld bij een uitgeklapte menuknop:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="true">Menu</button>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat ', (0, r.jsx)(n.code, { children: 'aria-expanded' }), ' de waarde ', (0, r.jsx)(n.code, { children: 'false' }), ' krijgt wanneer het menu weer is ingeklapt.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg er daarnaast voor dat het ', (0, r.jsx)(n.code, { children: 'type' }), '-attribuut kloppend is bij de rol van de knop, zoals ', (0, r.jsx)(n.code, { children: '"submit"' }), ' voor een verzendknop en ', (0, r.jsx)(n.code, { children: '"reset"' }), ' voor een resetknop.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(L, { ...e }) }) : L(e);
   }
   var _ = t(85423),
    Z = t(15043),
    F = t(33846),
    O = t(73591),
    M = t(6503),
    B = t(8657);
   const E = { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'btn', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knoop', 'knop', 'knopje', 'knoppen', 'navigatie knop', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] },
    H = void 0,
    V = { id: 'componenten/button/index', title: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', source: '@site/docs/componenten/button/index.mdx', sourceDirName: 'componenten/button', slug: '/button', permalink: '/button', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/button/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'btn', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knoop', 'knop', 'knopje', 'knoppen', 'navigatie knop', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] }, sidebar: 'componenten', previous: { title: 'Breadcrumb Navigation', permalink: '/breadcrumb-navigation' }, next: { title: 'Calendar', permalink: '/calendar' } },
    I = {},
    U = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 },
     { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 },
     { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    $ = 'Button',
    X = 'Biedt de mogelijkheid om een actie uit te voeren.',
    K = 38,
    J = o.find((e) => e.number === K);
   function Y(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, r.jsx)(B.Rv, { component: J, headingLevel: 1, description: X }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, r.jsx)(B.cN, { component: J, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, r.jsx)(B.W, { component: J, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, r.jsx)(c.ZP, {}),
      '\n',
      (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, r.jsx)(a.ZP, {}),
      '\n',
      (0, r.jsx)(M.W, {
       headingLevel: '4',
       items: [
        { title: 'Als het label van een button uit all\xe9\xe9n een icoon bestaat, dan heeft deze een goed tekstalternatief.', sc: '1.1.1', status: '', component: (0, r.jsx)(d, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.', sc: '1.3.1', status: '', component: (0, r.jsx)(h, {}), tags: ['developer'] },
        { title: 'De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: (0, r.jsx)(f.ZP, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: (0, r.jsx)(k.ZP, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.', sc: '1.4.11', status: '', component: (0, r.jsx)(p, {}), tags: ['designer', 'contentmaker'] },
        { title: 'De functionaliteit van de button veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: (0, r.jsx)(Z.ZP, {}), tags: ['developer'] },
        { title: 'De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.', sc: '2.4.3', status: '', component: (0, r.jsx)(A, {}), tags: ['developer'] },
        { title: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.', sc: '2.4.6', status: '', component: (0, r.jsx)(C, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.', sc: '2.4.11', status: '', component: (0, r.jsx)(O.ZP, {}), tags: ['designer', 'developer'] },
        { title: 'De button heeft een goed zichtbare focusindicator.', sc: '2.4.13', status: '', component: (0, r.jsx)(x.ZP, {}), tags: ['designer', 'developer'] },
        { title: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.', sc: '2.5.3', status: '', component: (0, r.jsx)(D, {}), tags: ['developer'] },
        { title: 'De button heeft een minimale grootte van 44 bij 44 pixels.', sc: '2.5.5', status: '', component: (0, r.jsx)(R.ZP, {}), tags: ['designer', 'developer'] },
        { title: 'Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, r.jsx)(N.ZP, {}), tags: ['developer', 'contentmaker'] },
        { title: 'De button activeert niet al bij toetsenbordfocus.', sc: '3.2.1', status: '', component: (0, r.jsx)(F.ZP, {}), tags: ['developer'] },
        { title: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.', sc: '3.2.4', status: '', component: (0, r.jsx)(P.ZP, {}), tags: ['designer', 'developer'] },
        { title: 'De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.', sc: '4.1.2', status: '', component: (0, r.jsx)(S, {}), tags: ['designer', 'contentmaker'] },
       ],
      }),
      '\n',
      (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, r.jsx)(s.ZP, {}),
      '\n',
      (0, r.jsx)(M.W, {
       headingLevel: '4',
       items: [
        { title: 'Het is mogelijk om relaties met andere componenten aan te geven.', sc: '1.3.1', status: '', component: (0, r.jsx)(j, {}), tags: ['developer'] },
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, r.jsx)(v.ZP, {}), tags: ['developer'] },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, r.jsx)(b.ZP, {}), tags: ['developer'] },
        { title: 'Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.', sc: '2.1.1', status: '', component: (0, r.jsx)(w.ZP, {}), tags: ['developer'] },
        { title: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: (0, r.jsx)(T.ZP, {}), tags: ['developer'] },
        { title: 'Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: (0, r.jsx)(G.ZP, {}), tags: ['developer'] },
        { title: 'De button heeft een rol van button en het type is instelbaar.', sc: '4.1.2', status: '', component: (0, r.jsx)(_.ZP, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, r.jsx)(B.vM, { component: J, headingLevel: 3 }),
     ],
    });
   }
   function q(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Y, { ...e }) }) : Y(e);
   }
  },
  15043: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  73591: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  33846: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  3050: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [2272, 2272], './utrecht-backdrop.entry.js': [94654, 94654], './utrecht-body.entry.js': [68530, 68530], './utrecht-breadcrumb-nav.entry.js': [89899, 89899], './utrecht-checkbox.entry.js': [97052, 97052], './utrecht-column-layout.entry.js': [69329, 69329], './utrecht-contact-card-template.entry.js': [86531, 86531], './utrecht-custom-checkbox.entry.js': [23109, 23109], './utrecht-data-list-actions.entry.js': [52048, 52048], './utrecht-data-list-item.entry.js': [70650, 70650], './utrecht-data-list-key.entry.js': [71724, 71724], './utrecht-data-list-value.entry.js': [68437, 68437], './utrecht-data-list.entry.js': [45677, 45677], './utrecht-digid-button.entry.js': [20292, 20292], './utrecht-digid-logo.entry.js': [76749, 76749], './utrecht-eherkenning-logo.entry.js': [17145, 17145], './utrecht-eidas-logo.entry.js': [70669, 70669], './utrecht-form-field-error-message.entry.js': [99509, 99509], './utrecht-form-toggle.entry.js': [36373, 36373], './utrecht-html-content.entry.js': [77661, 77661], './utrecht-icon-afspraak-maken.entry.js': [48443, 48443], './utrecht-icon-afval-container.entry.js': [26623, 26623], './utrecht-icon-afval-containerpas.entry.js': [50605, 50605], './utrecht-icon-afval-kalender.entry.js': [5106, 5106], './utrecht-icon-afval-pmd.entry.js': [42465, 42465], './utrecht-icon-afval-scheiden.entry.js': [23909, 23909], './utrecht-icon-afval.entry.js': [82821, 82821], './utrecht-icon-afvalkalender.entry.js': [78643, 78643], './utrecht-icon-alleen.entry.js': [81926, 81926], './utrecht-icon-arrow.entry.js': [52485, 52485], './utrecht-icon-auto.entry.js': [3373, 3373], './utrecht-icon-begroting.entry.js': [25235, 25235], './utrecht-icon-bestemmingsplan.entry.js': [65465, 65465], './utrecht-icon-betaaldatum.entry.js': [61251, 61251], './utrecht-icon-bewijsstukken.entry.js': [60870, 60870], './utrecht-icon-bijstand.entry.js': [83844, 83844], './utrecht-icon-blad.entry.js': [90749, 90749], './utrecht-icon-bluesky.entry.js': [44583, 44583], './utrecht-icon-bouwproject.entry.js': [35888, 35888], './utrecht-icon-brandgevaar.entry.js': [86871, 86871], './utrecht-icon-brief-betalen.entry.js': [34630, 34630], './utrecht-icon-checkmark.entry.js': [21848, 21848], './utrecht-icon-chevron-down.entry.js': [47124, 47124], './utrecht-icon-chevron-left.entry.js': [81932, 81932], './utrecht-icon-chevron-right.entry.js': [83559, 83559], './utrecht-icon-chevron-up.entry.js': [92506, 92506], './utrecht-icon-close.entry.js': [22639, 22639], './utrecht-icon-college-b-w.entry.js': [20142, 20142], './utrecht-icon-container-bio.entry.js': [92341, 92341], './utrecht-icon-container-glas.entry.js': [2424, 2424], './utrecht-icon-container-groenafval.entry.js': [9136, 9136], './utrecht-icon-container-met-zak.entry.js': [49460, 49460], './utrecht-icon-container-papier.entry.js': [84618, 84618], './utrecht-icon-container-pmd.entry.js': [30872, 30872], './utrecht-icon-container-restafval.entry.js': [40186, 40186], './utrecht-icon-container-textiel.entry.js': [13802, 13802], './utrecht-icon-container.entry.js': [80834, 80834], './utrecht-icon-cross.entry.js': [93882, 93882], './utrecht-icon-dakloos.entry.js': [98410, 98410], './utrecht-icon-dementie.entry.js': [61830, 61830], './utrecht-icon-documenten.entry.js': [18854, 18854], './utrecht-icon-duurzaam.entry.js': [94055, 94055], './utrecht-icon-eenzaamheid.entry.js': [88838, 88838], './utrecht-icon-eikenprocessie.entry.js': [99219, 99219], './utrecht-icon-elektrisch-rijden.entry.js': [25537, 25537], './utrecht-icon-energie-vergoeding.entry.js': [17377, 17377], './utrecht-icon-energietransitie.entry.js': [63764, 63764], './utrecht-icon-error.entry.js': [76150, 76150], './utrecht-icon-evenementen.entry.js': [91418, 91418], './utrecht-icon-facebook.entry.js': [30045, 30045], './utrecht-icon-fiets.entry.js': [85049, 85049], './utrecht-icon-filter.entry.js': [6612, 6612], './utrecht-icon-geboorte.entry.js': [27896, 27896], './utrecht-icon-gebruiker-centraal.entry.js': [11566, 11566], './utrecht-icon-gebruiker-ingelogd.entry.js': [52081, 52081], './utrecht-icon-gegevenswoordenboek.entry.js': [63695, 63695], './utrecht-icon-geluid.entry.js': [40882, 40882], './utrecht-icon-gemeente-locatie.entry.js': [73982, 73982], './utrecht-icon-gemeenteraad.entry.js': [31957, 48218], './utrecht-icon-gereedschap.entry.js': [36548, 36548], './utrecht-icon-gezicht.entry.js': [44467, 44467], './utrecht-icon-gezin.entry.js': [56911, 56911], './utrecht-icon-glas-afval.entry.js': [75863, 75863], './utrecht-icon-glijbaan.entry.js': [14653, 14653], './utrecht-icon-grafiek.entry.js': [35264, 35264], './utrecht-icon-grofvuil-ophalen.entry.js': [8604, 8604], './utrecht-icon-grofvuil.entry.js': [87591, 87591], './utrecht-icon-hamburger-menu.entry.js': [46670, 46670], './utrecht-icon-herdenking.entry.js': [59609, 48459], './utrecht-icon-hondenbelasting.entry.js': [79784, 79784], './utrecht-icon-horeca.entry.js': [34032, 34032], './utrecht-icon-horecavergunning.entry.js': [6444, 6444], './utrecht-icon-huis-en-omgeving.entry.js': [6453, 6453], './utrecht-icon-huis.entry.js': [85182, 85182], './utrecht-icon-huishoudelijk-geweld.entry.js': [69018, 69018], './utrecht-icon-hulp-huishouden.entry.js': [58515, 58515], './utrecht-icon-hulp-vervoer.entry.js': [74927, 74927], './utrecht-icon-hulp-zorg.entry.js': [89411, 88339], './utrecht-icon-hulpmiddelen-gezin.entry.js': [63608, 63608], './utrecht-icon-hulpverlening.entry.js': [63324, 63324], './utrecht-icon-idee.entry.js': [16347, 16347], './utrecht-icon-informatie.entry.js': [71322, 71322], './utrecht-icon-information.entry.js': [24117, 24117], './utrecht-icon-innovatie.entry.js': [17591, 17591], './utrecht-icon-inspraak-inwoners.entry.js': [53770, 53770], './utrecht-icon-instagram.entry.js': [48273, 48273], './utrecht-icon-kalender.entry.js': [90544, 90544], './utrecht-icon-kennis.entry.js': [26542, 26542], './utrecht-icon-kerstbomen.entry.js': [5458, 5458], './utrecht-icon-klachten.entry.js': [4815, 4815], './utrecht-icon-kroon.entry.js': [42124, 42124], './utrecht-icon-laadpaal.entry.js': [56186, 56186], './utrecht-icon-language.entry.js': [1655, 1655], './utrecht-icon-lantaarnpaal-oud.entry.js': [75348, 75348], './utrecht-icon-lantaarnpaal.entry.js': [59624, 59624], './utrecht-icon-leren.entry.js': [70031, 70031], './utrecht-icon-let-op.entry.js': [2474, 2474], './utrecht-icon-linkedin.entry.js': [41881, 41881], './utrecht-icon-list-check.entry.js': [27134, 27134], './utrecht-icon-list-number.entry.js': [81051, 81051], './utrecht-icon-list.entry.js': [63659, 63659], './utrecht-icon-loupe.entry.js': [85847, 85847], './utrecht-icon-markt.entry.js': [30477, 30477], './utrecht-icon-mastodon.entry.js': [64769, 64769], './utrecht-icon-melding-boom.entry.js': [91165, 91165], './utrecht-icon-melding-klacht.entry.js': [37284, 37284], './utrecht-icon-melding-openbareruimte.entry.js': [7819, 7819], './utrecht-icon-melding-verlichting.entry.js': [56046, 56046], './utrecht-icon-melding.entry.js': [20985, 20985], './utrecht-icon-menselijk.entry.js': [77475, 77475], './utrecht-icon-menu-dot-open.entry.js': [70136, 70136], './utrecht-icon-menu-dot.entry.js': [46538, 46538], './utrecht-icon-meterkast.entry.js': [923, 923], './utrecht-icon-milieu-ontheffing.entry.js': [91188, 5526], './utrecht-icon-milieu-zone.entry.js': [97780, 97780], './utrecht-icon-minus-vertical.entry.js': [47867, 47867], './utrecht-icon-minus.entry.js': [18033, 18033], './utrecht-icon-mobiliteit.entry.js': [68092, 68092], './utrecht-icon-natuur.entry.js': [36902, 36902], './utrecht-icon-nieuw-huis.entry.js': [89769, 89769], './utrecht-icon-nieuwsbrief.entry.js': [40060, 40060], './utrecht-icon-nummerbord.entry.js': [26495, 26495], './utrecht-icon-om-het-huis.entry.js': [10842, 10842], './utrecht-icon-omgeving.entry.js': [41162, 41162], './utrecht-icon-omgevingsvisie.entry.js': [21697, 21697], './utrecht-icon-omgevingswet.entry.js': [6868, 6868], './utrecht-icon-onderhoud.entry.js': [79530, 79530], './utrecht-icon-ondernemen.entry.js': [72034, 72034], './utrecht-icon-openingstijden.entry.js': [11601, 11601], './utrecht-icon-over-de-stad.entry.js': [3591, 3591], './utrecht-icon-overlijden.entry.js': [86968, 86968], './utrecht-icon-panden.entry.js': [8634, 8634], './utrecht-icon-park.entry.js': [4014, 4014], './utrecht-icon-parkeerkaart.entry.js': [88540, 88540], './utrecht-icon-parkeervergunning.entry.js': [63042, 63042], './utrecht-icon-parken.entry.js': [35312, 35312], './utrecht-icon-parkeren-bedrijven.entry.js': [87118, 87118], './utrecht-icon-parkeren-betaalautomaat.entry.js': [17285, 17285], './utrecht-icon-parkeren-betalen.entry.js': [48604, 23355], './utrecht-icon-parkeren.entry.js': [4555, 4555], './utrecht-icon-participatie-campagne.entry.js': [25039, 25039], './utrecht-icon-participatie-like.entry.js': [58755, 58755], './utrecht-icon-participatie-pitch.entry.js': [73122, 73122], './utrecht-icon-paspoort.entry.js': [80974, 80974], './utrecht-icon-presentatie.entry.js': [94618, 94618], './utrecht-icon-prijskaartje.entry.js': [66499, 66499], './utrecht-icon-read-aloud.entry.js': [19374, 19374], './utrecht-icon-rijbewijs.entry.js': [54730, 54730], './utrecht-icon-rioolheffing.entry.js': [770, 770], './utrecht-icon-rolstoel.entry.js': [63877, 63877], './utrecht-icon-schild-gemeente-utrecht.entry.js': [27300, 27300], './utrecht-icon-search.entry.js': [85186, 85186], './utrecht-icon-shoppen.entry.js': [99153, 99153], './utrecht-icon-sinterklaas.entry.js': [86463, 86463], './utrecht-icon-slechtziende-hoordende.entry.js': [5859, 5859], './utrecht-icon-sport-en-cultuur.entry.js': [11129, 11129], './utrecht-icon-sport-voetbal.entry.js': [40158, 40158], './utrecht-icon-sport.entry.js': [17490, 17490], './utrecht-icon-stookverbod.entry.js': [57970, 57970], './utrecht-icon-strand.entry.js': [27463, 27463], './utrecht-icon-strooien.entry.js': [18088, 18088], './utrecht-icon-subsidie-gezin.entry.js': [92078, 92078], './utrecht-icon-subsidie.entry.js': [5013, 5013], './utrecht-icon-t-shirt.entry.js': [3594, 3594], './utrecht-icon-threads.entry.js': [50966, 50966], './utrecht-icon-thuiswerken.entry.js': [56330, 56330], './utrecht-icon-toeslag.entry.js': [10013, 10013], './utrecht-icon-trein.entry.js': [93076, 93076], './utrecht-icon-trouwen.entry.js': [25130, 25130], './utrecht-icon-twitter.entry.js': [89472, 89472], './utrecht-icon-user.entry.js': [11275, 11275], './utrecht-icon-uw-wijk.entry.js': [77170, 77170], './utrecht-icon-vaccinatie.entry.js': [5362, 5362], './utrecht-icon-veilige-wijk.entry.js': [43144, 43144], './utrecht-icon-vergaderen.entry.js': [56439, 56439], './utrecht-icon-vergaderendigitaal.entry.js': [62307, 62307], './utrecht-icon-vergoeding.entry.js': [65389, 65389], './utrecht-icon-verhuizen.entry.js': [51358, 51358], './utrecht-icon-verkeerslicht.entry.js': [80816, 80816], './utrecht-icon-verkiezingen.entry.js': [87369, 87369], './utrecht-icon-verslaving.entry.js': [41954, 41954], './utrecht-icon-vervoersvoorziening.entry.js': [15956, 15956], './utrecht-icon-virus.entry.js': [25217, 25217], './utrecht-icon-vluchtelingen.entry.js': [12540, 24566], './utrecht-icon-voorzieningen-vervoer.entry.js': [77293, 77293], './utrecht-icon-vrijwilligerswerk.entry.js': [94230, 94230], './utrecht-icon-vuilnisbak.entry.js': [47050, 47050], './utrecht-icon-vuilniszak.entry.js': [87209, 87209], './utrecht-icon-vuurwerk.entry.js': [69081, 69081], './utrecht-icon-wandelstok.entry.js': [26380, 26380], './utrecht-icon-warm.entry.js': [25712, 25712], './utrecht-icon-warning.entry.js': [42252, 42252], './utrecht-icon-werken.entry.js': [20376, 20376], './utrecht-icon-werkzaamheden.entry.js': [68963, 68963], './utrecht-icon-whatsapp.entry.js': [64740, 64740], './utrecht-icon-wonen-kosten.entry.js': [70171, 70171], './utrecht-icon-woning-zoeken.entry.js': [4966, 4966], './utrecht-icon-x.entry.js': [71242, 71242], './utrecht-icon-youtube.entry.js': [3427, 3427], './utrecht-icon-zelfstandig-wonen.entry.js': [12034, 12034], './utrecht-icon-zoom-minus.entry.js': [92075, 92075], './utrecht-icon-zoom-plus.entry.js': [98679, 98679], './utrecht-icon-zoomin.entry.js': [8173, 8173], './utrecht-icon-zoomout.entry.js': [56702, 56702], './utrecht-icon-zorg-huis.entry.js': [14089, 14089], './utrecht-icon-zweefpaal.entry.js': [95181, 95181], './utrecht-icon-zwemmen.entry.js': [12029, 12029], './utrecht-logo-button.entry.js': [55748, 55748], './utrecht-map-marker.entry.js': [64202, 64202], './utrecht-multiline-data.entry.js': [33749, 33749], './utrecht-nav-bar.entry.js': [66111, 66111], './utrecht-number-badge.entry.js': [4138, 4138], './utrecht-page-body.entry.js': [6819, 6819], './utrecht-page-footer.entry.js': [2293, 2293], './utrecht-page-layout.entry.js': [21948, 21948], './utrecht-pagination.entry.js': [15046, 15046], './utrecht-preserve-data.entry.js': [43588, 43588], './utrecht-progress-list-item.entry.js': [18348, 18348], './utrecht-progress-list.entry.js': [25499, 25499], './utrecht-progress-sublist-item.entry.js': [72329, 72329], './utrecht-root.entry.js': [16417, 16417], './utrecht-sidenav.entry.js': [89108, 89108], './utrecht-surface.entry.js': [41601, 41601], './utrecht-table-body.entry.js': [40044, 40044], './utrecht-table-caption.entry.js': [98392, 98392], './utrecht-table-cell.entry.js': [68207, 68207], './utrecht-table-container.entry.js': [15512, 15512], './utrecht-table-footer.entry.js': [204, 204], './utrecht-table-header-cell.entry.js': [37759, 37759], './utrecht-table-header.entry.js': [54705, 54705], './utrecht-table-row.entry.js': [69816, 69816], './utrecht-table.entry.js': [27041, 27041], './utrecht-textarea.entry.js': [19078, 19078], './utrecht-textbox.entry.js': [98071, 98071], './utrecht-top-task-link.entry.js': [53366, 53366], './utrecht-top-task-nav.entry.js': [75836, 75836] };
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
   (i.keys = () => Object.keys(r)), (i.id = 3050), (e.exports = i);
  },
  35038: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => c, aY: () => a, um: () => l, wu: () => s });
   var r = t(37943),
    i = t(4814),
    o = t(52676);
   const s = (e) => {
     let { background: n, children: t, className: r, ...s } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('card__illustration', n && `card__illustration--${n}`, r), ...s, children: t });
    },
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: n, appearance: t, className: s, component: a = 'div', background: c, children: l } = e;
     const d = (e) => ('article' === a ? (0, o.jsx)('article', { ...e }) : 'section' === a ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      u = (0, o.jsx)(d, { className: (0, i.Z)('cardgroup__card', c && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, s), children: l });
     return n ? (0, o.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: u }) : u;
    },
    l = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  6503: (e, n, t) => {
   'use strict';
   t.d(n, { W: () => h });
   var r = t(57229),
    i = t(51678),
    o = t(74824),
    s = t(70997),
    a = t(4814),
    c = t(75271),
    l = t(37943),
    d = t(52676);
   const u = (e) => {
     let { title: n, sc: t, component: l, tags: u } = e;
     const h = (0, c.useId)(),
      g = [...u];
     if (t) {
      g.push(t);
      const e = i.fg.get(t);
      e?.conformance && g.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, a.Z)(
       'new-checklist__item',
       u.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: h, children: n }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: l }),
          (0, d.jsx)(o.k, {
           className: 'new-checklist__badge-list',
           children: g.map((e, n) => {
            let t = (0, d.jsx)(s.O, { children: e }, n);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const o = i.fg.get(e);
             t = (0, d.jsx)(r.r, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${o.sc} ${o.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(s.O, { children: `WCAG ${e}` }) }, n);
            }
            return t;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    h = (e) => {
     let { items: n, headingLevel: t } = e;
     const r = n.reduce(
       (e, n) => (
        n.tags.forEach((n) => {
         e.add(n);
        }),
        e
       ),
       new Set(),
      ),
      [i, s] = (0, c.useState)(Array.from(r.values())),
      a = (e) => i.includes(e),
      h = (0, c.useId)(),
      g =
       i.length >= 1
        ? n.filter((e) => {
           let { tags: n } = e;
           return n.some((e) => i.includes(e));
          })
        : n,
      j = n.length - g.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(l.pg, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': h,
          children: [
           (0, d.jsx)(l.X6, { level: t, id: h, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(r.values()).map((e) =>
            (0, d.jsxs)(
             l.Wi,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(l.XZ, {
                defaultChecked: a(e),
                checked: a(e),
                id: e,
                onChange: () =>
                 ((e, n) => {
                  const t = ('boolean' == typeof n ? n : !a(e)) ? [...i, e] : i.filter((n) => n !== e);
                  s(t);
                 })(e),
               }),
               (0, d.jsx)(l.lX, { htmlFor: e, children: e }),
              ],
             },
             e,
            ),
           ),
          ],
         }),
         (0, d.jsx)('div', {
          children: (0, d.jsxs)(d.Fragment, {
           children: [
            (0, d.jsxs)('p', { role: 'status', children: [n.length - j, ' van de ', n.length, ' items zijn nu zichtbaar.'] }),
            j >= 1
             ? (0, d.jsx)(o.zx, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 s(Array.from(r.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: g.map((e, n) => (0, d.jsx)(u, { ...e }, n)) }),
      ],
     });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => y, vM: () => z, W: () => A, Rv: () => C });
   var r = t(74824),
    i = t(4814),
    o = t(39854),
    s = t(7522),
    a = t(62559),
    c = t(79734),
    l = t(32636),
    d = t(52676);
   const u = { figma: (0, d.jsx)(o.Z, {}), github: (0, d.jsx)(s.Z, {}), npm: (0, d.jsx)(a.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    h = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: u[n] || (0, d.jsx)(l.Z, {}) });
    };
   var g = t(35038),
    j = t(28743);
   const m = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(j.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(80912).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: n, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var p = t(23355),
    b = t(41757),
    f = t(37943),
    v = t(59954);
   const k = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    w = (e) => {
     let { checked: n, children: t, title: r, description: o, headingLevel: s = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(v.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(f.X6, { appearance: 'utrecht-heading-3', level: s, children: r }), o, t] })] });
    };
   var x = t(14669);
   const y = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => x.e9.includes(e.id)),
      s = o && x.e9.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       sections: s.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, x.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(k, {
            children: e.tasks.map((e) => {
             let { checked: n, name: r, id: i } = e;
             return (0, d.jsx)(w, { headingLevel: t + 1, checked: n, title: r, description: (0, x.Q6)(i) }, i);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    A = (e) => {
     let { component: n, headingLevel: t } = e;
     const i = n && n.projects.filter((e) => !x.e9.includes(e.id));
     return n && i.length
      ? (0, d.jsx)(g.um, {
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
            o = (0, x.ps)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return s.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            g.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(g.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(m, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (a.length > 0 || o.length > 0) && (0, d.jsx)(r.X6, { level: t + 1, children: 'Snel aan de slag' }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.Mc, {
                  links: a
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(h, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: o.map((e) => {
                  let { frameworkName: n, tasks: o } = e;
                  return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: t + 2, children: [i, ' in ', n] }), (0, d.jsx)(r.Mc, { links: o.map((e) => ({ children: e.description, icon: (0, d.jsx)(h, { brand: e.brand }), href: e.value })) })] });
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
    z = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    C = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const o = n && x.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(b.V, { level: t, suffix: o && (0, d.jsx)(p.y, { state: o }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => a });
   var r = t(37943),
    i = t(4814),
    o = t(14669),
    s = t(52676);
   const a = (e) => {
    let { state: n } = e;
    const t = (0, o.mA)(n);
    return (0, s.jsx)(r.Ou, { className: (0, i.Z)('estafette-badge', t && `estafette-badge--${t}`), children: n });
   };
  },
  41757: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => o });
   var r = t(4814),
    i = t(52676);
   const o = (e) => {
    let { children: n, className: t, level: o = 1, suffix: s, ...a } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, t), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57229: (e, n, t) => {
   'use strict';
   t.d(n, { r: () => s });
   var r = t(44679),
    i = t(4814),
    o = t(52676);
   const s = (e) => {
    let { className: n, ...t } = e;
    return (0, o.jsx)(r.Z, { className: (0, i.W)('utrecht-link', 'utrecht-link--html-a', n), ...t });
   };
  },
  51678: (e, n, t) => {
   'use strict';
   t.d(n, { fg: () => s });
   const r = [
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
    i = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    o = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: n } = e;
      return !i.find((e) => e.sc === n);
     }),
    s = new Map(o.map((e) => [e.sc, e]));
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, $e: () => p, BA: () => a, Ee: () => d, Q6: () => o, U: () => g, Yr: () => b, d: () => u, e9: () => s, fO: () => v, mA: () => i, ps: () => j, qU: () => k, s0: () => f, zP: () => m });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
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
      .flatMap((e) => h(e));
     return l(c(n));
    },
    u = (e, n) => g(e).includes(n),
    h = (e) => {
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
    g = (e) => l(c(e.projects.flatMap((e) => h(e)))),
    j = (e) => {
     const n = h(e),
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
        let { name: i, id: o, value: s } = r;
        const a = /^(.+) URL/.exec(i)[1],
         c = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: i, id: o, value: s, description: c };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    m = (e) => e.join('.'),
    p = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n) {
    return void 0 === n && (n = []), Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, m(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function k(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
  },
  70997: (e, n, t) => {
   'use strict';
   t.d(n, { O: () => g });
   var r = t(24994),
    i = t(66567),
    o = t(52676),
    s = t(4814),
    a = t(75271),
    c = ['children'],
    l = ['dateTime'],
    d = ['value'];
   function u(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function h(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? u(Object(t), !0).forEach(function (n) {
         (0, r.Z)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : u(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, i.Z)(e, c),
     a = (0, s.W)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var u = r.dateTime,
      g = (0, i.Z)(r, l);
     return (0, o.jsx)('time', h(h({}, g), {}, { dateTime: u, className: a, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var j = r.value,
      m = (0, i.Z)(r, d);
     return (0, o.jsx)('data', h(h({}, m), {}, { value: j, className: a, ref: n, children: t }));
    }
    return (0, o.jsx)('span', h(h({}, r), {}, { className: a, ref: n, children: t }));
   });
   g.displayName = 'DataBadge';
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     (i.type = 'text/css'), 'top' === t && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
 },
]);
