/*! For license information please see 68ddddde.be016f72.js.LICENSE.txt */
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5643],
 {
  85423: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  67588: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  89823: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  27512: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85578: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39659: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72628: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  37012: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, r.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  48665: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, r.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  12145: (e, n, t) => {
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
  83110: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  61498: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De link heeft een rol van ', (0, r.jsx)(n.code, { children: 'link' }), ' en een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' die duidelijk maakt waar de link voor dient.'] }), '\n', (0, r.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, r.jsx)(n.code, { children: 'a' }), '-element met het ', (0, r.jsx)(n.code, { children: 'href' }), ' attribuut als je een link nodig hebt:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url">Contact</a>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, r.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, r.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  58538: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => ue, component: () => ke, contentTitle: () => de, default: () => fe, description: () => ge, frontMatter: () => ce, issueNumber: () => je, metadata: () => he, title: () => me, toc: () => pe });
   var r,
    i,
    s,
    o,
    a,
    l,
    c,
    d,
    h,
    u,
    p = t(52676),
    m = t(40139),
    g = t(64332),
    j = t(67588),
    k = t(89823),
    v = t(27512),
    f = t(75271);
   function y() {
    return (
     (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
         }
         return e;
        }),
     y.apply(this, arguments)
    );
   }
   const w = (e) => {
    let { title: n, titleId: t, ...p } = e;
    return f.createElement('svg', y({ width: 960, height: 540, viewBox: '0 0 960 540', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-label': 'Een woord \\u201Clabel\\u201D met een achtergrondkleur en dikke stippellijn eromheen. Het geheel is aangeduid met het cijfer 1.', role: 'img', 'aria-labelledby': t }, p), n ? f.createElement('title', { id: t }, n) : null, r || (r = f.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = f.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = f.createElement('path', { fill: '#FFE76B', d: 'M444 246h72v48h-72z' })), o || (o = f.createElement('path', { stroke: '#5315F6', strokeDasharray: '2 2', d: 'M443.5 245.5h73v49h-73z' })), a || (a = f.createElement('path', { stroke: '#fff', strokeWidth: 2, d: 'M443 245h74v50h-74z' })), l || (l = f.createElement('path', { stroke: '#5315F6', strokeWidth: 2, strokeDasharray: '2 2', d: 'M443 245h74v50h-74z' })), c || (c = f.createElement('path', { d: 'M463.12 263.976v9.696h4.528l-.176 1.328H461.6v-11.024h1.52Zm11.893 9.056c0 .341.058.597.176.768.117.16.293.283.528.368l-.336 1.024c-.438-.053-.79-.176-1.056-.368-.267-.192-.464-.491-.592-.896-.566.843-1.403 1.264-2.512 1.264-.832 0-1.488-.235-1.968-.704s-.72-1.083-.72-1.84c0-.896.32-1.584.96-2.064.65-.48 1.568-.72 2.752-.72h1.296v-.624c0-.597-.144-1.024-.432-1.28-.288-.256-.731-.384-1.328-.384-.619 0-1.376.149-2.272.448l-.368-1.072c1.045-.384 2.016-.576 2.912-.576.992 0 1.733.245 2.224.736.49.48.736 1.168.736 2.064v3.856Zm-3.456 1.056c.842 0 1.504-.437 1.984-1.312v-1.936h-1.104c-1.558 0-2.336.576-2.336 1.728 0 .501.122.88.368 1.136.245.256.608.384 1.088.384Zm10.335-7.712c.96 0 1.722.389 2.288 1.168.565.768.848 1.845.848 3.232 0 .875-.134 1.648-.4 2.32-.267.661-.651 1.179-1.152 1.552-.502.363-1.088.544-1.76.544-.886 0-1.632-.373-2.24-1.12l-.144.928h-1.296v-11.824l1.472-.176v4.624c.608-.832 1.402-1.248 2.384-1.248Zm-.528 7.648c.65 0 1.157-.261 1.52-.784.373-.533.56-1.355.56-2.464 0-1.141-.171-1.963-.512-2.464-.342-.512-.827-.768-1.456-.768-.747 0-1.403.437-1.968 1.312v4.032c.224.352.496.629.816.832.33.203.677.304 1.04.304Zm12.54-3.488c0 .245-.011.496-.032.752h-5.376c.064.928.298 1.611.704 2.048.405.437.928.656 1.568.656.405 0 .778-.059 1.12-.176a4.523 4.523 0 0 0 1.072-.56l.64.88c-.896.704-1.878 1.056-2.944 1.056-1.174 0-2.091-.384-2.752-1.152-.651-.768-.976-1.824-.976-3.168 0-.875.138-1.648.416-2.32.288-.683.693-1.216 1.216-1.6.533-.384 1.157-.576 1.872-.576 1.12 0 1.978.368 2.576 1.104.597.736.896 1.755.896 3.056Zm-1.456-.432c0-.832-.166-1.467-.496-1.904-.331-.437-.827-.656-1.488-.656-1.206 0-1.862.885-1.968 2.656h3.952v-.096Zm5.486 5.088c-.544 0-.976-.16-1.296-.48-.309-.331-.464-.789-.464-1.376v-10.16l1.472-.176v10.304c0 .235.038.405.112.512.086.107.224.16.416.16.203 0 .384-.032.544-.096l.384 1.024a2.398 2.398 0 0 1-1.168.288Z', fill: '#000' })), d || (d = f.createElement('rect', { x: 364, y: 254, width: 32, height: 32, rx: 16, fill: '#DE00A4' })), h || (h = f.createElement('path', { d: 'M382.502 264.368V276.5H380v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43h2.25Z', fill: '#fff' })), u || (u = f.createElement('path', { d: 'M396 270h48', stroke: '#DE00A4', strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'bevel' })));
   };
   function b(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in de component in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden:" }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, p.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, p.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, p.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(b, { ...e }) }) : b(e);
   }
   t(85578);
   var A = t(39659);
   t(72628);
   function z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, bijvoorbeeld via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst in de component volledig zichtbaar.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(z, { ...e }) }) : z(e);
   }
   t(37012);
   function S(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Interactieve elementen in de component zijn bedienbaar met het toetsenbord.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function T(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(S, { ...e }) }) : S(e);
   }
   function L(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Interactieve elementen in de component hebben een goed zichtbare focusindicator met een minimale dikte van 2 pixels.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n'] })] });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(L, { ...e }) }) : L(e);
   }
   function D(e) {
    const n = { code: 'code', p: 'p', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'De Skip Link naar de hoofdinhoud van de pagina is het eerste interactieve element op de pagina dat toetsenbordfocus krijgt. Overige Skip Links naar andere onderdelen van de pagina, zoals het hoofdmenu, volgen daarna.' }), '\n', (0, p.jsxs)(n.p, { children: ['De Skip Link verwijst naar de plek op de pagina waar de hoofdinhoud start. Dit is bijvoorbeeld de ', (0, p.jsx)(n.code, { children: 'main' }), ' van de pagina. Omdat dit normaal gesproken geen interactief element is, moet het element focusbaar gemaakt worden. Aangezien het niet de bedoeling is dat de ', (0, p.jsx)(n.code, { children: 'main' }), ' in de normale focusvolgorde van de pagina voorkomt, kun je hiervoor ', (0, p.jsx)(n.code, { children: 'tabindex="-1"' }), ' gebruiken. Geef het vervolgens een ', (0, p.jsx)(n.code, { children: 'id' }), ' attribuut mee, bijvoorbeeld ', (0, p.jsx)(n.code, { children: 'id="hoofdinhoud"' }), ' waar je in de Skip Link in het ', (0, p.jsx)(n.code, { children: 'href' }), ' attribuut naar verwijst. Vergeet niet ook een focusstijl in te stellen voor het element waar je naar verwijst, zodat toetsenbordgebruikers weten waar ze zich op de pagina bevinden.'] }), '\n', (0, p.jsxs)(n.p, { children: ['Let op: Bevat je ', (0, p.jsx)(n.code, { children: 'main' }), ' w\xe9l herhalende content? Gebruik dan een ander element n\xe1 de herhalende content.'] }), '\n', (0, p.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(D, { ...e }) }) : D(e);
   }
   function W(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'De linktekst in de Skip Link vertelt duidelijk waar de link naar verwijst. Bijvoorbeeld: "Direct naar de inhoud" of "Hoofdinhoud".' }), '\n', (0, p.jsx)(n.p, { children: 'Je kunt er ook voor kiezen om meerdere Skip Links toe te voegen. Zorg er dan voor dat iedere link een unieke beschrijvende linktekst heeft. Een beschrijvende naam voor een Skip Link waarmee bezoekers direct naar de hoofdnavigatie kunnen, is bijvoorbeeld "Direct naar het hoofdmenu".' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(W, { ...e }) }) : W(e);
   }
   function Z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Wanneer een interactief element in de component toetsenbordfocus heeft is het element en de focusindicator zichtbaar.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(Z, { ...e }) }) : Z(e);
   }
   function O(e) {
    const n = { p: 'p', ...(0, m.a)(), ...e.components };
    return (0, p.jsx)(n.p, { children: 'Het is mogelijk om een actie te voorkomen of ongedaan te maken als de gebruiker een interactief element in de component indrukt met een enkele aanwijzer zoals een muis of vinger.' });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(O, { ...e }) }) : O(e);
   }
   t(48665);
   var F = t(12145);
   function _(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Het aanwijsgebied van interactieve elementen in de component is minimaal 44 bij 44 pixels.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(_, { ...e }) }) : _(e);
   }
   var H = t(83110);
   function $(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: "Op pagina's met \xe9\xe9n of meerdere Skip Links:" }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Link naar de hoofdinhoud van de pagina het eerste interactieve element op de pagina is.' }), '\n', (0, p.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Links naar andere onderdelen van de pagina in dezelfde volgorde staan.' }), '\n'] }), '\n', (0, p.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)($, { ...e }) }) : $(e);
   }
   function U(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.p, { children: 'Links die dezelfde functie hebben binnen een website, zien er hetzelfde uit en werken ook hetzelfde.' }), '\n', (0, p.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, p.jsxs)(n.ul, { children: ['\n', (0, p.jsx)(n.li, { children: (0, p.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function B(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(U, { ...e }) }) : U(e);
   }
   t(61498);
   var I = t(85423),
    X = t(56133),
    J = t(12537),
    K = t(15043),
    q = t(17998),
    Y = t(73591),
    Q = t(33846),
    ee = t(97520),
    ne = t(76233),
    te = t(8657),
    re = t(49556),
    ie = t(57716);
   function se(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.h1, { id: 'gebruik-skip-link', children: 'Gebruik Skip Link' }), '\n', (0, p.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, p.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, p.jsxs)(n.p, { children: [(0, p.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css', children: [(0, p.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fskip-link-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/skip-link-css'] }), '\nversie 1.'] }), '\n', (0, p.jsxs)(n.p, { children: ['Gebruik de ', (0, p.jsx)(n.code, { children: 'nl-skip-link' }), ' class name op een ', (0, p.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-html', children: '<a href="#inhoud" class="nl-skip-link nl-skip-link--visible-on-focus">Naar de inhoud</a>\n' }) }), '\n', (0, p.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-css\n' }) }), '\n', (0, p.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/skip-link-css@1/dist/skip-link.css"\n/>\n' }) }), '\n', (0, p.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, p.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/skip-link-css/dist/skip-link.css" />\n' }) }), '\n', (0, p.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/skip-link-css/skip-link.css";\n' }) }), '\n', (0, p.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, p.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, p.jsxs)(n.p, { children: [(0, p.jsxs)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-react', children: [(0, p.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fskip-link-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/skip-link-react'] }), '\nversie 1.'] }), '\n', (0, p.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-react\n' }) }), '\n', (0, p.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, p.jsx)(n.pre, { children: (0, p.jsx)(n.code, { className: 'language-jsx', children: 'import { SkipLink } from "@nl-design-system-candidate/skip-link-react";\n\nexport const MyComponent = () => <SkipLink href="#inhoud">Direct naar de hoofdinhoud</SkipLink>;\n' }) }), '\n', (0, p.jsx)(n.h2, { id: 'figma', children: 'Figma' }), '\n', (0, p.jsxs)(n.p, { children: ['De Figma component staat in ', (0, p.jsx)(n.a, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2217-10122', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Skip Link' }), '.'] })] });
   }
   function oe(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(se, { ...e }) }) : se(e);
   }
   const ae = JSON.parse('{"nl":{"skip-link":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"min-block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-block":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-inline":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"},"text-underline-offset":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}}}}');
   var le = t(6503);
   const ce = { title: 'Skip Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Skip Link', pagination_label: 'Skip Link', description: 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.', slug: '/skip-link', keywords: ['anchor link', 'accessibility link', 'blokken omzijlen', 'direct naar link', 'direct naar x', 'content', 'go to content', 'hidden link', 'inhoud', 'inhoud overslaan', 'jump link', 'jump to', 'jump to main content', 'keyboard', 'link', 'naar content', 'naar de inhoud', 'navigeer snel naar', 'overslaan', 'quick link', 'screen reader link', 'section', 'skip link', 'skip links', 'skiplinks', 'skipnav', 'skip to content', 'skip to main', 'skip navigation', 'skip to section', 'skip nav', 'snel naar inhoud', 'spring naar inhoud', 'springlink', 'springplank link'] },
    de = void 0,
    he = { id: 'componenten/skip-link/index', title: 'Skip Link', description: 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.', source: '@site/docs/componenten/skip-link/index.mdx', sourceDirName: 'componenten/skip-link', slug: '/skip-link', permalink: '/skip-link', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/skip-link/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Skip Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Skip Link', pagination_label: 'Skip Link', description: 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.', slug: '/skip-link', keywords: ['anchor link', 'accessibility link', 'blokken omzijlen', 'direct naar link', 'direct naar x', 'content', 'go to content', 'hidden link', 'inhoud', 'inhoud overslaan', 'jump link', 'jump to', 'jump to main content', 'keyboard', 'link', 'naar content', 'naar de inhoud', 'navigeer snel naar', 'overslaan', 'quick link', 'screen reader link', 'section', 'skip link', 'skip links', 'skiplinks', 'skipnav', 'skip to content', 'skip to main', 'skip navigation', 'skip to section', 'skip nav', 'snel naar inhoud', 'spring naar inhoud', 'springlink', 'springplank link'] }, sidebar: 'componenten', previous: { title: 'Side Navigation', permalink: '/side-navigation' }, next: { title: 'Spinner', permalink: '/spinner' } },
    ue = {},
    pe = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Candidate component gebruiken', id: 'candidate-component-gebruiken', level: 2 },
     { value: 'Design tokens', id: 'design-tokens', level: 3 },
     { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 },
     { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 },
     { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    me = 'Skip Link',
    ge = 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.',
    je = 74,
    ke = g.find((e) => e.number === je);
   function ve(e) {
    const n = { h2: 'h2', h3: 'h3', p: 'p', ...(0, m.a)(), ...e.components };
    return (0, p.jsxs)(p.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, p.jsx)(te.Rv, { component: ke, headingLevel: 1, description: ge }),
      '\n',
      (0, p.jsx)(n.p, { children: "Gebruik de Skip Link zodat gebruikers met een toetsenbord of hulpsoftware makkelijk contentblokken kunnen overslaan. Bijvoorbeeld navigatie die op meerdere pagina's herhaald wordt." }),
      '\n',
      (0, p.jsx)(ee.I, { component: ke }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, p.jsx)(ne.B, { component: ke, illustration: w }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'candidate-component-gebruiken', children: 'Candidate component gebruiken' }),
      '\n',
      (0, p.jsx)(n.h3, { id: 'design-tokens', children: 'Design tokens' }),
      '\n',
      (0, p.jsx)(re.W, { tokens: ae }),
      '\n',
      (0, p.jsx)(ie.U, { omitH1: !0, headingLevel: 3, children: (0, p.jsx)(oe, {}) }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, p.jsx)(v.ZP, {}),
      '\n',
      (0, p.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, p.jsx)(k.ZP, {}),
      '\n',
      (0, p.jsx)(le.W, {
       headingLevel: '4',
       items: [
        { title: 'De tekstkleur van de Skip Link heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: (0, p.jsx)(A.ZP, {}), tags: ['designer'] },
        { title: 'Het label van de Skip Link bestaat uit tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: (0, p.jsx)(J.ZP, {}), tags: ['developer', 'contentmaker'] },
        { title: 'De Skip Link slaat 1 of meerdere herhalende contentblokken over.', sc: '2.4.1', status: '', component: (0, p.jsx)(q.ZP, {}), tags: ['developer'] },
        { title: 'De Skip Link staat vooraan in de focusvolgorde van een pagina en verwijst naar de eerste niet-herhalende content op de pagina.', sc: '2.4.3', status: '', component: (0, p.jsx)(N, {}), tags: ['developer'] },
        { title: 'De linktekst van de Skip Link beschrijft duidelijk het linkdoel.', sc: '2.4.4', status: '', component: (0, p.jsx)(R, {}), tags: ['developer', 'contentmaker'] },
        { title: 'De Skip Link wordt niet bedekt door een ander element op de pagina.', sc: '2.4.11', status: '', component: (0, p.jsx)(Y.ZP, {}), tags: ['developer'] },
        { title: 'Als de tekst van de Skip Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, p.jsx)(H.ZP, {}), tags: ['developer', 'contentmaker'] },
        { title: "Skip Links die op meerdere pagina's voorkomen staan op iedere pagina vooraan in de focusvolgorde van een pagina.", sc: '3.2.3', status: '', component: (0, p.jsx)(V, {}), tags: ['developer', 'designer'] },
       ],
      }),
      '\n',
      (0, p.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, p.jsx)(j.ZP, {}),
      '\n',
      (0, p.jsx)(le.W, {
       headingLevel: '4',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, p.jsx)(C, {}), tags: ['developer'] },
        { title: 'Als je de hele webpagina inzoomt tot 400% veroorzaakt de Skip Link geen horizontale scrollbalk en blijft alle tekst op de pagina leesbaar.', sc: '1.4.10', status: '', component: (0, p.jsx)(X.ZP, {}), tags: ['developer', 'designer'] },
        { title: 'De tekst in de Skip Link blijft zichtbaar als je de tekstafstand vergoot.', sc: '1.4.12', status: '', component: (0, p.jsx)(x, {}), tags: ['developer', 'designer'] },
        { title: 'Je kunt de Skip Link focussen met de tabtoets en activeren met de entertoets.', sc: '2.1.1', status: '', component: (0, p.jsx)(T, {}), tags: ['developer'] },
        { title: 'Als een gebruiker de Skip Link focust met het toetsenbord, dan moet deze ook weer weg kunnen gaan met het toetsenbord.', sc: '2.1.2', status: '', component: (0, p.jsx)(K.ZP, {}), tags: ['developer'] },
        { title: 'De Skip Link heeft een zichtbare focusindicator.', sc: '2.4.7', status: '', component: (0, p.jsx)(M, {}), tags: ['developer', 'designer'] },
        { title: 'De Skip Link heeft een zichtbare focusindicator met een dikte van minimaal 2 pixels.', sc: '2.4.13', status: '', component: (0, p.jsx)(G, {}), tags: ['developer', 'designer'] },
        { title: 'De Skip Link activeren met een enkele aanwijzer kan voorkomen of geannuleerd worden.', sc: '2.5.2', status: '', component: (0, p.jsx)(P, {}), tags: ['developer'] },
        { title: 'De zichtbare naam van de Skip Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: (0, p.jsx)(F.ZP, {}), tags: ['developer'] },
        { title: 'Het aanwijsgebied van de Skip Link is groot genoeg.', sc: '2.5.5', status: '', component: (0, p.jsx)(E, {}), tags: ['developer'] },
        { title: 'Als de Skip Link toetsenbordfocus krijgt vindt er geen contextwijziging plaats.', sc: '3.2.1', status: '', component: (0, p.jsx)(Q.ZP, {}), tags: ['developer'] },
        { title: 'Skip Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.', sc: '3.2.4', status: '', component: (0, p.jsx)(B, {}), tags: ['developer', 'designer'] },
        { title: 'De Skip Link heeft een rol van link.', sc: '4.1.2', status: '', component: (0, p.jsx)(I.ZP, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, p.jsx)(te.W, { component: ke, headingLevel: 3 }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, p.jsx)(te.cN, { component: ke, headingLevel: 3 }),
      '\n',
      (0, p.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, p.jsx)(te.vM, { component: ke, headingLevel: 3 }),
     ],
    });
   }
   function fe(e = {}) {
    const { wrapper: n } = { ...(0, m.a)(), ...e.components };
    return n ? (0, p.jsx)(n, { ...e, children: (0, p.jsx)(ve, { ...e }) }) : ve(e);
   }
  },
  56133: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  12537: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  15043: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  17998: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Geef gebruikers van hulpmiddelen de mogelijkheid om binnen een pagina snel te navigeren door onderdelen, zoals een menu, te kunnen overslaan.' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruikers die de website van boven naar beneden doornemen moeten makkelijk grote stukken content kunnen overslaan om bijvoorbeeld direct naar de hoofdinhoud kunnen gaan. Het gaat hierbij om grote stukken content die op elke pagina herhaald wordt, zoals de hoofdnavigatie en een filter.' }), '\n', (0, r.jsx)(n.p, { children: 'Dan voorkom je dat een toetsenbordgebruiker eerst door een menu of filter moet tabben om bij een link in de hoofdinhoud te komen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  73591: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33846: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
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
   t.d(n, { Zb: () => l, aY: () => a, um: () => c, wu: () => o });
   var r = t(37943),
    i = t(4814),
    s = t(52676);
   const o = (e) => {
     let { background: n, children: t, className: r, ...o } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('card__illustration', n && `card__illustration--${n}`, r), ...o, children: t });
    },
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: o, component: a = 'div', background: l, children: c } = e;
     const d = (e) => ('article' === a ? (0, s.jsx)('article', { ...e }) : 'section' === a ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      h = (0, s.jsx)(d, { className: (0, i.Z)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, o), children: c });
     return n ? (0, s.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    c = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  6503: (e, n, t) => {
   'use strict';
   t.d(n, { W: () => u });
   var r = t(57229),
    i = t(51678),
    s = t(74824),
    o = t(70997),
    a = t(4814),
    l = t(75271),
    c = t(37943),
    d = t(52676);
   const h = (e) => {
     let { title: n, sc: t, component: c, tags: h } = e;
     const u = (0, l.useId)(),
      p = [...h];
     if (t) {
      p.push(t);
      const e = i.fg.get(t);
      e?.conformance && p.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, a.Z)(
       'new-checklist__item',
       h.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: u, children: n }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: c }),
          (0, d.jsx)(s.k, {
           className: 'new-checklist__badge-list',
           children: p.map((e, n) => {
            let t = (0, d.jsx)(o.O, { children: e }, n);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const s = i.fg.get(e);
             t = (0, d.jsx)(r.r, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${s.sc} ${s.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(o.O, { children: `WCAG ${e}` }) }, n);
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
    u = (e) => {
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
      [i, o] = (0, l.useState)(Array.from(r.values())),
      a = (e) => i.includes(e),
      u = (0, l.useId)(),
      p =
       i.length >= 1
        ? n.filter((e) => {
           let { tags: n } = e;
           return n.some((e) => i.includes(e));
          })
        : n,
      m = n.length - p.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(c.pg, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': u,
          children: [
           (0, d.jsx)(c.X6, { level: t, id: u, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(r.values()).map((e) =>
            (0, d.jsxs)(
             c.Wi,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(c.XZ, {
                defaultChecked: a(e),
                checked: a(e),
                id: e,
                onChange: () =>
                 ((e, n) => {
                  const t = ('boolean' == typeof n ? n : !a(e)) ? [...i, e] : i.filter((n) => n !== e);
                  o(t);
                 })(e),
               }),
               (0, d.jsx)(c.lX, { htmlFor: e, children: e }),
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
            (0, d.jsxs)('p', { role: 'status', children: [n.length - m, ' van de ', n.length, ' items zijn nu zichtbaar.'] }),
            m >= 1
             ? (0, d.jsx)(s.zx, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 o(Array.from(r.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: p.map((e, n) => (0, d.jsx)(h, { ...e }, n)) }),
      ],
     });
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
     l = (0, s.mA)(a),
     c = i.lazy(() => t(42767)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(c, {}) }) });
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
   const l = (e) => {
     let { children: n } = e;
     return (0, a.jsx)('ol', { className: 'nlds-anatomy-list', children: n });
    },
    c = (e) => {
     let { children: n } = e;
     return (0, a.jsx)('li', { className: 'nlds-anatomy-list__item', children: n });
    },
    d = (e) => {
     let { component: n, illustration: d } = e;
     const { title: h } = n,
      u = (0, o.mA)(h),
      p = s.lazy(() => t(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, a.jsx)(s.Suspense, {
      fallback: null,
      children: (0, a.jsxs)('figure', {
       className: (0, i.Z)('component-anatomy'),
       children: [
        d && (0, a.jsx)(d, { height: null, className: (0, i.Z)('component-anatomy__illustration') }),
        d &&
         p &&
         (0, a.jsx)('figcaption', {
          children: (0, a.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: n } = e;
             return (0, a.jsx)(l, { children: n });
            },
            li: (e) => {
             let { children: n } = e;
             return (0, a.jsx)(c, { children: n });
            },
           },
           children: (0, a.jsx)(p, {}),
          }),
         }),
       ],
      }),
     });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => x, vM: () => z, W: () => A, Rv: () => C });
   var r = t(74824),
    i = t(4814),
    s = t(39854),
    o = t(7522),
    a = t(62559),
    l = t(79734),
    c = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(s.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(a.Z, {}), storybook: (0, d.jsx)(l.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(c.Z, {}) });
    };
   var p = t(35038),
    m = t(28743);
   const g = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(m.Z, {
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
   var j = t(23355),
    k = t(41757),
    v = t(37943),
    f = t(59954);
   const y = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    w = (e) => {
     let { checked: n, children: t, title: r, description: s, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(f.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(v.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), s, t] })] });
    };
   var b = t(14669);
   const x = (e) => {
     let { component: n, headingLevel: t } = e;
     const s = n && n.projects.filter((e) => b.e9.includes(e.id)),
      o = s && b.e9.map((e) => s.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       sections: o.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, b.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(y, {
            children: e.tasks.map((e) => {
             let { checked: n, name: r, id: i } = e;
             return (0, d.jsx)(w, { headingLevel: t + 1, checked: n, title: r, description: (0, b.Q6)(i) }, i);
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
     const i = n && n.projects.filter((e) => !b.e9.includes(e.id));
     return n && i.length
      ? (0, d.jsx)(p.um, {
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
            s = (0, b.ps)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return o.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            p.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(p.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
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
    z = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    C = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const s = n && b.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(k.V, { level: t, suffix: s && (0, d.jsx)(j.y, { state: s }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  49556: (e, n, t) => {
   'use strict';
   t.d(n, { W: () => C });
   var r = t(55410),
    i = t(70997),
    s = t(14669),
    o = t(37943),
    a = t(64642),
    l = t(93872),
    c = t(48231),
    d = t(75119),
    h = t(38548),
    u = t(74824),
    p = t(52676);
   function m(e) {
    let { children: n, content: t, language: r } = e;
    return 'clipboard' in navigator
     ? (0, p.jsxs)(o.zx, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.ZP.format(t, { parser: r, plugins: [a.Z, l.ZP, c.ZP] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [n, (0, p.jsx)(u.JO, { children: (0, p.jsx)(h.Z, {}) })],
       })
     : null;
   }
   var g = t(6076),
    j = t(32463),
    k = t(85904),
    v = t(86384),
    f = t(65012),
    y = t(31795),
    w = t(37923),
    b = t(49003),
    x = t(75271);
   const A = { color: g.Z, dimension: j.Z, fontFamilies: k.Z, fontSizes: v.Z, fontWeights: f.Z, lineHeights: y.Z, other: w.Z, textDecoration: b.Z },
    z = (e) => {
     let { type: n } = e;
     return (0, p.jsx)(u.JO, { children: (0, x.createElement)(A[n]) });
    };
   function C(e) {
    let { tokens: n } = e;
    const t = (0, s.s0)(n),
     a = (0, s.fO)(t),
     l = a.map((e) => (0, s.$e)(e) + ': ;').join('\n'),
     c = JSON.stringify((0, s.qU)(a));
    return (0, p.jsxs)(p.Fragment, {
     children: [
      (0, p.jsxs)(o.iA, {
       children: [
        (0, p.jsx)(o.xD, { children: (0, p.jsxs)(o.SC, { children: [(0, p.jsx)(o.xs, { children: 'name' }), (0, p.jsx)(o.xs, { children: 'type' })] }) }),
        (0, p.jsx)(o.RM, {
         children: a.map((e) => {
          const t = (0, s.zP)(e),
           a = (0, s.Yr)(n, e).$type;
          return (0, p.jsxs)(o.SC, { children: [(0, p.jsx)(o.pj, { children: (0, p.jsx)(r.E, { children: (0, p.jsx)(o.YG, { children: t }) }) }), (0, p.jsx)(o.pj, { children: (0, p.jsxs)(i.O, { children: [(0, p.jsx)(z, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, p.jsxs)(o.hE, { children: [(0, p.jsx)(m, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, p.jsx)(m, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => a });
   var r = t(37943),
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
  57229: (e, n, t) => {
   'use strict';
   t.d(n, { r: () => o });
   var r = t(44679),
    i = t(4814),
    s = t(52676);
   const o = (e) => {
    let { className: n, ...t } = e;
    return (0, s.jsx)(r.Z, { className: (0, i.W)('utrecht-link', 'utrecht-link--html-a', n), ...t });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(40139),
    i = t(37943),
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
    l = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: o(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: o = '', components: a = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...c(t, i), ...l(o), ...a }, children: n });
    };
  },
  51678: (e, n, t) => {
   'use strict';
   t.d(n, { fg: () => o });
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
    s = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: n } = e;
      return !i.find((e) => e.sc === n);
     }),
    o = new Map(s.map((e) => [e.sc, e]));
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, $e: () => j, BA: () => a, Ee: () => d, Q6: () => s, U: () => p, Yr: () => k, d: () => h, e9: () => o, fO: () => f, mA: () => i, ps: () => m, qU: () => y, s0: () => v, zP: () => g });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function l(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => {
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
     return c(l(n));
    },
    h = (e, n) => p(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(
      l(
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
    p = (e) => c(l(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
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
         l = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: i, id: s, value: o, description: l };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n) {
    return void 0 === n && (n = []), Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, g(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function y(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
  },
  42767: (e, n, t) => {
   var r = { './code-block-docs/docs/aliases.md': [7546, 7546], './code-docs/docs/aliases.md': [43727, 43727], './color-sample-docs/docs/aliases.md': [15333, 15333], './data-badge-docs/docs/aliases.md': [30527, 30527], './heading-1-docs/docs/aliases.md': [48218, 35715], './heading-2-docs/docs/aliases.md': [68764, 68764], './heading-3-docs/docs/aliases.md': [62141, 62141], './heading-4-docs/docs/aliases.md': [2521, 2521], './heading-docs/docs/aliases.md': [44602, 44602], './link-docs/docs/aliases.md': [40725, 40725], './mark-docs/docs/aliases.md': [74069, 74069], './number-badge-docs/docs/aliases.md': [11039, 11039], './paragraph-docs/docs/aliases.md': [64503, 64503], './skip-link-docs/docs/aliases.md': [86161, 86161] };
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
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [85041, 85041], './code-docs/docs/anatomy/anatomy.md': [82977, 82977], './color-sample-docs/docs/anatomy/anatomy.md': [86555, 86555], './data-badge-docs/docs/anatomy/anatomy.md': [72447, 72447], './heading-1-docs/docs/anatomy/anatomy.md': [89810, 89810], './heading-2-docs/docs/anatomy/anatomy.md': [28262, 28262], './heading-3-docs/docs/anatomy/anatomy.md': [855, 855], './heading-4-docs/docs/anatomy/anatomy.md': [73912, 73912], './heading-5-docs/docs/anatomy/anatomy.md': [17734, 17734], './heading-6-docs/docs/anatomy/anatomy.md': [94497, 94497], './heading-docs/docs/anatomy/anatomy.md': [61505, 61505], './link-docs/docs/anatomy/anatomy.md': [57510, 57510], './mark-docs/docs/anatomy/anatomy.md': [27236, 27236], './number-badge-docs/docs/anatomy/anatomy.md': [47609, 47609], './paragraph-docs/docs/anatomy/anatomy.md': [7828, 7828], './skip-link-docs/docs/anatomy/anatomy.md': [90778, 90778] };
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
  55410: (e, n, t) => {
   'use strict';
   t.d(n, { E: () => h });
   var r = t(24994),
    i = t(66567),
    s = t(52676),
    o = t(4814),
    a = t(75271),
    l = ['children', 'className'];
   function c(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.Z)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     r = e.className,
     a = (0, i.Z)(e, l);
    return (0, s.jsx)('code', d(d({ dir: 'ltr', translate: 'no', className: (0, o.W)('nl-code', r) }, a), {}, { ref: n, children: t }));
   });
   h.displayName = 'Code';
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     (i.type = 'text/css'), 'top' === t && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
   })('.nl-code{background-color:var(--nl-code-background-color);color:var(--nl-code-color);font-family:var(--nl-code-font-family, monospace),monospace;font-size:var(--nl-code-font-size, inherit);hyphens:none;white-space:pre-wrap}\n');
  },
  70997: (e, n, t) => {
   'use strict';
   t.d(n, { O: () => p });
   var r = t(24994),
    i = t(66567),
    s = t(52676),
    o = t(4814),
    a = t(75271),
    l = ['children'],
    c = ['dateTime'],
    d = ['value'];
   function h(e, n) {
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
   function u(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? h(Object(t), !0).forEach(function (n) {
         (0, r.Z)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : h(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, i.Z)(e, l),
     a = (0, o.W)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var h = r.dateTime,
      p = (0, i.Z)(r, c);
     return (0, s.jsx)('time', u(u({}, p), {}, { dateTime: h, className: a, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var m = r.value,
      g = (0, i.Z)(r, d);
     return (0, s.jsx)('data', u(u({}, g), {}, { value: m, className: a, ref: n, children: t }));
    }
    return (0, s.jsx)('span', u(u({}, r), {}, { className: a, ref: n, children: t }));
   });
   p.displayName = 'DataBadge';
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
  65012: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'bold', 'IconBold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6z', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  38548: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'copy', 'IconCopy', [
    ['path', { d: 'M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  85904: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'file-typography', 'IconFileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  37923: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'file-unknown', 'IconFileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  31795: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'line-height', 'IconLineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  6076: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'palette', 'IconPalette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  32463: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'ruler', 'IconRuler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  86384: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'text-size', 'IconTextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  49003: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'underline', 'IconUnderline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
 },
]);
