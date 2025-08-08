(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21229],
 {
  94398: (e, n, t) => {
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
  25653: (e, n, t) => {
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
  90361: (e, n, t) => {
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
  54768: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => H, component: () => $, contentTitle: () => E, default: () => K, description: () => B, frontMatter: () => I, issueNumber: () => U, metadata: () => M, title: () => Z, toc: () => V });
   var r = t(52676),
    i = t(40139),
    o = t(94398),
    s = t(25653),
    c = t(90361);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Een informatief icon is een visueel symbool dat ontworpen is om snel en intu\xeftief specifieke informatie over te brengen, zonder dat daar tekst voor nodig is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als een informatief icon g\xe9\xe9n onderdeel is van een interactief component, zoals een ', (0, r.jsx)(n.code, { children: 'button' }), ' of ', (0, r.jsx)(n.code, { children: 'link' }), ', heeft het icon een alternatieve tekst nodig.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' toe te voegen aan een ', (0, r.jsx)(n.code, { children: 'svg' }), ' icon met ', (0, r.jsx)(n.code, { children: 'role="img"' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een ', (0, r.jsx)(n.code, { children: 'button' }), ' of een ', (0, r.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met ', (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de component.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Informatieve icons kunnen worden voorzien van een beschrijvende interactieve tekst, doordat het ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, r.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Decoratieve icons kunnen verborgen worden voor hulpsoftware, doordat het ', (0, r.jsx)(n.code, { children: 'aria-hidden' }), ' attribuut gebruikt kan worden in de component.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Informatieve icons moeten herkenbaar zijn als afbeelding voor gebruikers die hulpsoftware, zoals een ', (0, r.jsx)(n.a, { href: 'woordenlijst/#screenreader', children: 'screenreader' }), ', gebruiken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Bijvoorbeeld: een ', (0, r.jsx)(n.code, { children: 'svg' }), ' icon heeft ', (0, r.jsx)(n.code, { children: 'role="img"' }), ' als attribuut.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Een icon kan uit een afbeelding van een letter bestaan (bijvoorbeeld B voor dikgedrukte tekst). Gebruik geen icons van letters om woorden of teksten te maken.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button', children: 'Afbeeldingen als buttons' }) }), '\n'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
   function k(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   function x(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function A(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Icons zijn regelmatig onderdeel van een link, m\xe9t of zonder begeleidende linktekst.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg er voor dat het duidelijk is waar de link naar verwijst, in plaats van dat het uiterlijk van het icon beschreven wordt. Dit is belangrijk voor gebruikers die gebruik maken van hulpsoftware, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: "Bijvoorbeeld: Een link met een icon dat aangeeft dat een link naar een externe website verwijst heeft als beschrijving in de accessibility tree 'Gemeente Den Haag (externe website)' en niet 'Gemeente Den Haag klein vierkantje met een pijl die naar rechtsboven wijst'." }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen', children: 'Functionele afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstuele kop of label, moet het voor de doelgroep duidelijk zijn wat het icon vertegenwoordigt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een zoekfunctie gebruikt een vergrootglas icon.' }), '\n', (0, r.jsx)(n.li, { children: 'De link naar de homepage in een broodkruimelpad is een huis icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Een knop om een dialoogvenster te sluiten gebruikt een kruis (x) icon.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
   function T(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Componenten of functionaliteiten die op meerdere pagina's voorkomen en die gebruik maken van icons, maken overal gebruik van dezelfde icons. Wees ook zoveel mogelijk consistent in het gebruik van icons. Als je in een component op de ene pagina gebruik maakt van een icon, doe dat dan in datzelfde component op een andere pagina ook." }), '\n', (0, r.jsx)(n.p, { children: 'Dit is belangrijk om snel te navigeren en snel belangrijke functionaliteiten terug te kunnen vinden, zeker voor gebruikers met bijvoorbeeld een cognitieve beperking.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zoekfuncties die consistent gebruik maken van een vergrootglas icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Waarschuwingen die consistent gebruik maken van een uitroepteken icon.' }), '\n', (0, r.jsx)(n.li, { children: 'Informatie-opties, zoals bij mogelijk moeilijke termen, die consistent gebruik maken van een vraagteken icon.' }), '\n', (0, r.jsx)(n.li, { children: 'De optie om vooruit of achteruit te gaan in een proces, die consistent gebruik maakt van pijl-icons.' }), '\n', (0, r.jsx)(n.li, { children: 'De optie om een dialoogvenster te sluiten, maakt overal gebruik van een kruisje.' }), '\n', (0, r.jsx)(n.li, { children: 'Bij een goed ingevuld formulierveld staat overal een vinkje.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(T, { ...e }) }) : T(e);
   }
   function R(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstueel label bij een invoerveld, moet het duidelijk zijn wat de gebruiker moet doen of moet invullen.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icon van een slot in een inlogformulier vraagt om een wachtwoord.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icon van een vergrootglas in een zoekfunctie vraagt om een zoekterm.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Gerelateerde NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(R, { ...e }) }) : R(e);
   }
   var D = t(27794),
    S = t(12745),
    L = t(8657),
    _ = t(57716);
   function O(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }), '\n', (0, r.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, r.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, r.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, r.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, r.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, r.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, r.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, r.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, r.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, r.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan screenreaders.'] }), '\n', (0, r.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, r.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan dat een tekstverduidelijking wel aan screenreaders aangeboden wordt.' }), '\n', (0, r.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.11', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, r.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, r.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, r.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, r.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, r.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, r.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, r.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, r.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, r.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, r.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(O, { ...e }) }) : O(e);
   }
   var F = t(6503);
   const I = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.', slug: '/icon', keywords: ['button icon', 'graphic', 'icon', 'icoon', 'illustratie', 'illustration', 'pictogram', 'svg', 'svg icon', 'symbol', 'symbool'] },
    E = void 0,
    M = { id: 'componenten/icon/index', title: 'Icon', description: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.', source: '@site/docs/componenten/icon/index.mdx', sourceDirName: 'componenten/icon', slug: '/icon', permalink: '/icon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.', slug: '/icon', keywords: ['button icon', 'graphic', 'icon', 'icoon', 'illustratie', 'illustration', 'pictogram', 'svg', 'svg icon', 'symbol', 'symbool'] }, sidebar: 'componenten', previous: { title: 'Heading Group', permalink: '/heading-group' }, next: { title: 'Image', permalink: '/image' } },
    H = {},
    V = [
     { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 },
     { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 },
     { value: 'Icons uit icon fonts', id: 'icons-uit-icon-fonts', level: 4 },
     { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    Z = 'Icon',
    B = 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.',
    U = 275,
    $ = S.find((e) => e.number === U);
   function X(e) {
    const n = { h2: 'h2', h3: 'h3', h4: 'h4', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, r.jsx)(L.Rv, { component: $, headingLevel: 1, description: B }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, r.jsx)(c.ZP, {}),
      '\n',
      (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, r.jsx)(s.ZP, {}),
      '\n',
      (0, r.jsx)(F.W, {
       items: [
        { title: 'Informatieve icons hebben een beschrijvende alternatieve tekst.', sc: '1.1.1', status: '', component: (0, r.jsx)(l, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Decoratieve icons zijn verborgen voor hulpsoftware.', sc: '1.1.1', status: '', component: (0, r.jsx)(u, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Als een icon een status aangeeft, is die informatie niet alleen afhankelijk van kleur.', sc: '1.4.1', status: '', component: (0, r.jsx)(D.ZP, {}), tags: ['designer'] },
        { title: 'Gebruik geen icons om teksten te vormen.', sc: '1.4.5', status: '', component: (0, r.jsx)(f, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Bij zoom overlapt een icon niet met andere content.', sc: '1.4.10', status: '', component: (0, r.jsx)(b, {}), tags: ['designer', 'developer'] },
        { title: 'Een informatief icon heeft een contrastratio van minimaal 3:1 met de achtergrond.', sc: '1.4.11', status: '', component: (0, r.jsx)(y, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als een icon onderdeel is van een link, beschrijft de alternatieve tekst het doel van het icon.', sc: '2.4.4', status: '', component: (0, r.jsx)(C, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Als een icon wordt gebruikt als visueel label, is het duidelijk wat de betekenis is.', sc: '2.4.6', status: '', component: (0, r.jsx)(G, {}), tags: ['designer', 'contentmaker'] },
        { title: "Een component met dezelfde functionaliteit die op meerdere pagina's voorkomt, heeft op alle pagina's hetzelfde icon.", sc: '3.2.4', status: '', component: (0, r.jsx)(W, {}), tags: ['developer', 'designer'] },
        { title: 'Als een icon wordt gebruikt als visueel label van een invoermogelijkheid, is het duidelijk welke invoer gevraagd wordt. ', sc: '3.3.2', status: '', component: (0, r.jsx)(N, {}), tags: ['designer', 'contentmaker'] },
       ],
      }),
      '\n',
      (0, r.jsx)(n.h4, { id: 'icons-uit-icon-fonts', children: 'Icons uit icon fonts' }),
      '\n',
      (0, r.jsx)(n.p, { children: 'Gebruik je een icon font in plaats van SVG afbeeldingen? Houdt er dan rekening mee dat niet iedereen de iconen kan zien.\nSommige gebruikers kiezen ervoor om altijd een eigen font te gebruiken, of schakelen web fonts uit om data te besparen.\nWij raden daarom aan om SVG te gebruiken in plaats van een icon font. Als je wel een icon font gebruikt, probeer dan Unicode-karakters te gebruiken.\nDeze icons werken ook als de gebruiker een systeem font gebruikt.' }),
      '\n',
      (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, r.jsx)(o.ZP, {}),
      '\n',
      (0, r.jsx)(F.W, {
       items: [
        { title: 'Informatieve icons kunnen een alternatieve tekst hebben.', sc: '1.1.1', status: '', component: (0, r.jsx)(g, {}), tags: ['developer'] },
        { title: 'Decoratieve icons kunnen verborgen worden voor hulpsoftware.', sc: '1.1.1', status: '', component: (0, r.jsx)(m, {}), tags: ['developer'] },
        { title: 'Informatieve icons hebben de rol van afbeelding in de accessibility tree.', sc: '1.3.1', status: '', component: (0, r.jsx)(v, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }),
      '\n',
      (0, r.jsx)(_.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(P, {}) }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, r.jsx)(L.W, { component: $, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, r.jsx)(L.cN, { component: $, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, r.jsx)(L.vM, { component: $, headingLevel: 3 }),
     ],
    });
   }
   function K(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(X, { ...e }) }) : X(e);
   }
  },
  27794: (e, n, t) => {
   'use strict';
   t.d(n, { ZP: () => s });
   var r = t(52676),
    i = t(40139);
   function o(e) {
    const n = { p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
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
   t.d(n, { Zb: () => a, aY: () => c, um: () => l, wu: () => s });
   var r = t(16167),
    i = t(4814),
    o = t(52676);
   const s = (e) => {
     let { background: n, children: t, className: r, ...s } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('card__illustration', n && 'card__illustration--background', r), ...s, children: t });
    },
    c = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    a = (e) => {
     let { href: n, appearance: t, className: s, component: c = 'div', children: a } = e;
     const l = (e) => ('article' === c ? (0, o.jsx)('article', { ...e }) : 'section' === c ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(l, { className: (0, i.Z)('cardgroup__card', `cardgroup__card--${t}`, s), children: a });
     return n ? (0, o.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  6503: (e, n, t) => {
   'use strict';
   t.d(n, { W: () => u });
   var r = t(57229),
    i = t(51678),
    o = t(41115),
    s = t(70997),
    c = t(4814),
    a = t(75271),
    l = t(52676);
   const d = (e) => {
     let { title: n, sc: t, component: d, tags: u } = e;
     const h = (0, a.useId)(),
      g = [...u];
     if (t) {
      g.push(t);
      const e = i.fg.get(t);
      e?.conformance && g.push(`Niveau ${e.conformance}`);
     }
     return (0, l.jsx)('li', {
      className: (0, c.Z)(
       'new-checklist__item',
       u.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, l.jsxs)('details', {
       children: [
        (0, l.jsx)('summary', { children: (0, l.jsx)('span', { className: 'new-checklist__title', id: h, children: n }) }),
        (0, l.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, l.jsx)('div', { children: d }),
          (0, l.jsx)(o.k, {
           className: 'new-checklist__badge-list',
           children: g.map((e, n) => {
            let t = (0, l.jsx)(s.O, { children: e }, n);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const o = i.fg.get(e);
             t = (0, l.jsx)(r.r, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${o.sc} ${o.nl.title}`, style: { lineHeight: 1 }, children: (0, l.jsx)(s.O, { children: `WCAG ${e}` }) }, n);
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
     let { items: n } = e;
     const [t, r] = (0, a.useState)([]),
      i = (e) => t.includes(e),
      c = n.reduce(
       (e, n) => (
        n.tags.forEach((n) => {
         e.add(n);
        }),
        e
       ),
       new Set(),
      ),
      u = (0, a.useId)(),
      h = n.filter((e) => {
       let { tags: n } = e;
       return 0 === t.length || n.some((e) => t.includes(e));
      }),
      g = n.length - h.length;
     return (0, l.jsxs)('div', {
      children: [
       (0, l.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, l.jsx)('span', { id: u, children: 'Ik ben: ' }),
         (0, l.jsx)(o.k, {
          role: 'group',
          'aria-labelledby': u,
          className: 'ma-badge-toggle-button-group',
          children: Array.from(c.values()).map((e, n) =>
           (0, l.jsx)(
            o.zx,
            {
             onClick: () =>
              ((e, n) => {
               const o = ('boolean' == typeof n ? n : !i(e)) ? [...t, e] : t.filter((n) => n !== e);
               r(o);
              })(e),
             pressed: i(e),
             appearance: 'subtle',
             className: 'utrecht-button--contents',
             children: (0, l.jsx)(s.O, { children: e }),
            },
            n,
           ),
          ),
         }),
         (0, l.jsx)('div', {
          children:
           t.length >= 1
            ? (0, l.jsxs)(l.Fragment, {
               children: [
                (0, l.jsxs)('p', { role: 'status', children: ['Er wordt op ', t.length, ' onderwerpen gefilterd.'] }),
                (0, l.jsxs)('p', { children: [g, ' van de ', n.length, ' items zijn nu niet zichtbaar.'] }),
                (0, l.jsx)(o.zx, {
                 appearance: 'secondary-action-button',
                 onClick: () => {
                  r([]);
                 },
                 children: 'Toon alles',
                }),
               ],
              })
            : 'Alle onderwerpen worden getoond.',
         }),
         ' ',
        ],
       }),
       (0, l.jsx)('ul', { className: 'new-checklist', role: 'list', children: h.map((e, n) => (0, l.jsx)(d, { ...e }, n)) }),
      ],
     });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => y, vM: () => C, W: () => A, Rv: () => z });
   var r = t(41115),
    i = t(4814),
    o = t(39854),
    s = t(7522),
    c = t(62559),
    a = t(79734),
    l = t(32636),
    d = t(52676);
   const u = { figma: (0, d.jsx)(o.Z, {}), github: (0, d.jsx)(s.Z, {}), npm: (0, d.jsx)(c.Z, {}), storybook: (0, d.jsx)(a.Z, {}) },
    h = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: u[n] || (0, d.jsx)(l.Z, {}) });
    };
   var g = t(35038),
    j = t(40598);
   const m = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(j.Z, {
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
   var p = t(23355),
    v = t(41757),
    w = t(16167),
    f = t(55476);
   const k = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    b = (e) => {
     let { checked: n, children: t, title: r, description: o, headingLevel: s = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(f.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(w.X6, { appearance: 'utrecht-heading-3', level: s, children: r }), o, t] })] });
    };
   var x = t(14669);
   const y = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => x.e9.includes(e.id)),
      s = o && x.e9.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
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
             return (0, d.jsx)(b, { headingLevel: t + 1, checked: n, title: r, description: (0, x.Q6)(i) }, i);
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
            c = e.tasks.filter((e) => {
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
               (c.length > 0 || o.length > 0) && (0, d.jsx)(r.X6, { level: t + 1, children: 'Snel aan de slag' }),
               c.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.Mc, {
                  links: c
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
    C = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    z = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const o = n && x.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v.V, { level: t, suffix: o && (0, d.jsx)(p.y, { state: o }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => c });
   var r = t(16167),
    i = t(4814),
    o = t(14669),
    s = t(52676);
   const c = (e) => {
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
    let { children: n, className: t, level: o = 1, suffix: s, ...c } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, t), ...c, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(40139),
    i = t(16167),
    o = t(52676);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    c = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, o.jsx)('img', { ...r, src: s(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...c[n - 1] };
      return (e.h1 = () => null), e;
     }
     return c[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: s = '', components: c = {} } = e;
     return (0, o.jsx)(r.Z, { components: { ...l(t, i), ...a(s), ...c }, children: n });
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
   t.d(n, { $3: () => r, $e: () => p, BA: () => c, Ee: () => d, Q6: () => o, U: () => g, Yr: () => v, d: () => u, e9: () => s, fO: () => f, mA: () => i, ps: () => j, qU: () => k, s0: () => w, zP: () => m });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function a(e) {
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
     return l(a(n));
    },
    u = (e, n) => g(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return l(
      a(
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
    g = (e) => l(a(e.projects.flatMap((e) => h(e)))),
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
        const c = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === c ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${c}`;
        return { brand: c.toLowerCase(), name: i, id: o, value: s, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    m = (e) => e.join('.'),
    p = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function w(e, n) {
    return void 0 === n && (n = []), Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? w(e[t], [...n, t]) : []));
   }
   function f(e) {
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
    i = t(58190),
    o = t(52676),
    s = t(4814),
    c = t(75271),
    a = ['children'],
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
   var g = (0, c.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, i.Z)(e, a),
     c = (0, s.W)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var u = r.dateTime,
      g = (0, i.Z)(r, l);
     return (0, o.jsx)('time', h(h({}, g), {}, { dateTime: u, className: c, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var j = r.value,
      m = (0, i.Z)(r, d);
     return (0, o.jsx)('data', h(h({}, m), {}, { value: j, className: c, ref: n, children: t }));
    }
    return (0, o.jsx)('span', h(h({}, r), {}, { className: c, ref: n, children: t }));
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
