"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8323],
 {
  3324: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var s = t(11527),
    o = t(47214);
   function r(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, s.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, s.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  46681: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => F, contentTitle: () => W, default: () => E, frontMatter: () => G, metadata: () => B, toc: () => V });
   var s = t(11527),
    o = t(47214);
   function r(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r();
   }
   function l(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", pre: "pre", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "de-toegankelijke-naam-van-een-button", children: "De toegankelijke naam van een button" }), "\n", (0, s.jsx)(n.p, { children: "Maak de buttontekst voor iedereen beschikbaar, zorg dus voor een toegankelijke naam. Dan kunnen screenreadergebruikers deze tekst ook lezen en weten ze wat er gaat gebeuren als ze op de button klikken." }), "\n", (0, s.jsx)(n.p, { children: "We beschrijven hieronder een aantal technieken om een button een toegankelijke naam te geven." }), "\n", (0, s.jsx)(n.h3, { id: "button-met-alleen-tekst", children: "Button met alleen tekst" }), "\n", (0, s.jsx)(n.p, { children: "Dit is de eenvoudigste en meest robuuste manier om een button een naam te geven. Met CSS kan de buttontekst gestyled worden. De toegankelijke naam is de buttontekst." }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: "<button>Geef je op</button>\n" }) }), "\n", (0, s.jsx)(n.h3, { id: "een-button-met-een-icoontje-en-tekst", children: "Een button met een icoontje en tekst" }), "\n", (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: "Optie 1" }), ": Een icoon toevoegen via CSS met daarnaast tekst geplaatst. De toegankelijke naam is de buttontekst."] }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: '<button class="icon-delete" type="button">Verwijder bestand</button>\n' }) }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <span class="fa-solid fa-trash-can" aria-hidden="true"> </span>\n  Verwijder bestand\n</button>\n' }) }), "\n", (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: "Optie 2" }), ": Een decoratief icoon als SVG-bestand samen met tekst. De afbeelding heeft een ", (0, s.jsx)(n.code, { children: "alt" }), " attribuut met een lege waarde, waardoor het wordt overgeslagen door schermlezers. De toegankelijke naam is de buttontekst."] }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <img src="close.svg" alt="" />\n  Sluit\n</button>\n' }) }), "\n", (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: "Optie 3" }), ": Een decoratief icoon als SVG-code samen met de tekst. Voeg hiervoor ", (0, s.jsx)(n.code, { children: 'aria-hidden="true"' }), " toe aan de SVG, waardoor het wordt overgeslagen door hulptechnologie\xebn zoals schermlezers. De toegankelijke naam is de buttontekst.\nDeze optie heeft de voorkeur omdat nu ", (0, s.jsx)(n.code, { children: "currentColor" }), " kan worden gebruikt in de CSS waardoor forced colors kunnen worden overgenomen."] }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <svg aria-hidden="true" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n  Sluit\n</button>\n' }) }), "\n", (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: "Optie 4" }), ": SVG-code met een ", (0, s.jsx)(n.code, { children: 'role="img"' }), " en een ", (0, s.jsx)(n.code, { children: "aria-label" }), " met de toegankelijke naam.\nDeze optie heeft niet de voorkeur omdat er geen visuele tekst bij het icoontje staat."] }), "\n", (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <svg role="img" aria-label="Sluit" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n</button>\n' }) }), "\n", (0, s.jsxs)(n.p, { children: ["Voor het toekennen van toegankelijke namen aan SVGs bestaan ook andere technieken, Carie Fisher beschrijft ze in ", (0, s.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/", children: "Accessible SVGs: Perfect Patterns For Screen Reader Users" }), "."] }), "\n", (0, s.jsxs)(n.p, { children: ["Door te zorgen voor een toegankelijke naam voor de button, voldoe je aan \xe9\xe9n van de voorwaarden voor het WCAG-succescriterium: ", (0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value", children: "4.1.2 Naam, rol en waarde" }), " (niveau A)."] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
   function d(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "disabled-submitbuttons", children: "Disabled submitbuttons" }), "\n", (0, s.jsx)(n.p, { children: "Disabled submit buttons worden gebruikt om\nte verhinderen dat een gebruiker het formulier verzendt als nog niet alle waarden (goed) zijn ingevuld." }), "\n", (0, s.jsx)(n.p, { children: "Er is een aantal toegankelijkheidsproblemen met het gebruik van disabled buttons:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "De gebuiker moet zoeken wat er mis is, waarom kan het formulier niet worden verzonden?" }), "\n", (0, s.jsx)(n.li, { children: "Meestal is een disabled button grijs met grijze tekst. Dit is voor veel gebruikers slecht zichtbaar." }), "\n", (0, s.jsx)(n.li, { children: "Toetsenbord- en screenreadergebruikers kunnen de disabled button geen focus geven en dat is verwarrend en onverwacht in het gebruik." }), "\n", (0, s.jsx)(n.li, { children: "Gebruikers kunnen verandering van disabled in enabled soms niet opmerken als deze uit beeld is en blijven zoeken naar wat er mis is." }), "\n"] }), "\n", (0, s.jsx)(n.p, { children: "Een goede oplossing en vervanging voor een disabled button: schrijf goede labelteksten, descriptions en foutmeldingen. Zodat de gebruiker weet wat er mis is en niet hoeft te puzzelen." }), "\n", (0, s.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/", children: "The problem with disabled buttons and what to do instead" }), ", Adam Silver."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://gomakethings.com/dont-disable-buttons/", children: "Don't disable buttons" }), ", Chris Ferdinandi in Go Make Things."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/", children: "Usability Pitfalls of Disabled Buttons, and How To Avoid Them" }), ", Vitaly Friedman in Smashing Magazine."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://axesslab.com/disabled-buttons-suck/", children: "Disabled buttons suck" }), "."] }), "\n"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u();
   }
   function b(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
   function g(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "afbeeldingen-als-buttons", children: "Afbeeldingen als buttons" }), "\n", (0, s.jsx)(n.p, { children: "Zorg ervoor dat tekst in afbeeldingen goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen." }), "\n", (0, s.jsx)(n.p, { children: "Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst. Maar gebruik bij voorkeur CSS om buttontekst mooi gestyled weer te geven. Dan heeft de gebruiker meer controle over de weergave en grootte van de tekst." }), "\n", (0, s.jsx)(n.p, { children: "Door te zorgen voor een schaalbare en flexibele weergave tekst in buttons voldoe je aan de WCAG-succescritera:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html", children: "1.4.4: Herschalen van tekst" }), " (niveau AA)."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html", children: "1.4.10 Reflow" }), " (niveau AA)"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html", children: "1.4.5 Afbeeldingen van tekst" }), " (niveau AA)."] }), "\n"] }), "\n", (0, s.jsx)(n.p, { children: (0, s.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_label-as-image.png", alt: "Een button met het label 'Verstuur uw vraag' daarnaast een vergroting waarbij de tekst korrelig wordt" }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
   var j = t(73460),
    v = t(30036);
   function x(e) {
    const n = { button: "button", div: "div", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", "\n", "\n", (0, s.jsx)(v.X, { appearance: "do", title: "Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.", children: (0, s.jsx)(j.X, { language: "html", children: () => (0, s.jsx)(n.button, { class: "doFancyStuff button", children: "Geef je op" }) }) }), "\n", (0, s.jsx)(v.X, { appearance: "dont", title: "Een div gebruiken die alleen met de muis aanklikbaar is.", children: (0, s.jsx)(j.X, { language: "html", children: () => (0, s.jsx)(n.div, { class: "doFancyStuff button", children: "Geef je op" }) }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e);
   }
   function f(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "toetsenbordbediening-van-een-button", children: "Toetsenbordbediening van een button" }), "\n", (0, s.jsx)(n.p, { children: "Veel gebruikers navigeren door een formulier met hun Tab-toets om van focusable element naar focusable element te springen (buttons, links, invoervelden, radio buttons, checkboxes etc)." }), "\n", (0, s.jsx)(n.p, { children: "Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button." }), "\n", (0, s.jsxs)(n.p, { children: ["Door te zorgen voor een consistente toetsenbordbediening, voldoe je aan het volgende WCAG-succescriterium: ", (0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html", children: "2.1.1 Toetsenbord" }), " (niveau A).\nEn voldoe je aan de ", (0, s.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/predictable.html", children: "WCAG richtlijn 3.2 Voorspelbaar" }), ": Maak het uiterlijk en de bediening van webpagina's voorspelbaar."] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(f, { ...e }) }) : f(e);
   }
   function y(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
   function z(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "plaatsing-van-een-button-binnen-een-formulier", children: "Plaatsing van een button binnen een formulier" }), "\n", (0, s.jsx)(n.p, { children: "Plaats buttons aan het begin van de regel. Zo wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), "\n", (0, s.jsxs)(n.p, { children: ["Ze vormen zo \xe9\xe9n lijn. Ook is het zo voor gebruikers die inzoomen (bijvoorbeeld gebruikers met een visuele beperking) makkelijker om de knop te vinden.\nDaarbij zullen gebruikers die inzoomen, een scherm vergrootglas gebruiken of een visuele beperking zoals ", (0, s.jsx)(n.a, { href: "https://nl.wikipedia.org/wiki/Kokervisus", children: "Kokervisus" }), " hebben buttons goed kunnen vinden."] }), "\n", (0, s.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.lukew.com/ff/entry.asp?571", children: "Primary & Secondary Actions in Web Forms" }), ", Luke Wroblewski"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://adamsilver.io/blog/where-to-put-buttons-on-forms/", children: "Where to put buttons on forms" }), ", Adam Silver"] }), "\n"] }), "\n", (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--do.png", alt: "Button uitgelijnd met formulier labels en invoervelden" }), "\n", (0, s.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--dont.png", alt: "Button niet uitgelijnd met formulier labels en invoervelden" })] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(z, { ...e }) }) : z(e);
   }
   function S(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(S, { ...e }) }) : S();
   }
   function A(e) {
    const n = { a: "a", blockquote: "blockquote", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: "duidelijk-buttontekst-die-beschrijft-wat-de-button-doet", children: "Duidelijk buttontekst die beschrijft wat de button doet" }), "\n", (0, s.jsx)(n.p, { children: "Geef buttons een duidelijke tekst, die beschrijft wat er gaat gebeuren." }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: 'Liever niet "Verstuur", maar bijvoorbeeld \u201cMeld je aan\u201d, "Aanmelden", \u201cGeef je op\u201d, \u201cVerstuur uw klacht\u201d of "Registreer".' }), "\n", (0, s.jsx)(n.li, { children: "Liever niet \u201cWijzig\u201d, maar bijvoorbeeld \u201cWijzig uw adresgegevens\u201d." }), "\n", (0, s.jsx)(n.li, { children: "Liever niet \u201cVolgende\u201d, maar bijvoorbeeld \u201cNaar stap 2, je gegevens invullen\u201d." }), "\n", (0, s.jsx)(n.li, { children: "Liever niet \u201cVolgende\u201d, maar bijvoorbeeld \u201cNaar stap 3, uw gegevens controleren\u201d." }), "\n"] }), "\n", (0, s.jsx)(n.p, { children: "Dit is geruststellend en duidelijk. De gebruiker weet wat er gaat gebeuren en zal minder onzeker zijn om een formulier in te vullen en te versturen. Bij \u201cVolgende\u201d kan er tenslotte van alles gebeuren." }), "\n", (0, s.jsx)(n.p, { children: (0, s.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_label.png", alt: "Een button met het label 'wijzig' en een button met het label 'Wijzig uw gegevens'." }) }), "\n", (0, s.jsxs)(n.p, { children: ["Buttons kunnen tekst bevatten, een icoontje en een combinatie van beide. Uit gebruikersonderzoek blijkt dat niet iedereen alle icoontjes snapt. Het is beter om naast een icoontje ook zichtbare tekst te plaatsen. Volgens de Nielsen Norman Group in ", (0, s.jsx)(n.a, { href: "https://www.nngroup.com/articles/icon-usability/", children: "Icon Usability" }), "."] }), "\n", (0, s.jsxs)(n.blockquote, { children: ["\n", (0, s.jsx)(n.p, { children: "Het begrijpen van een icoon is gebaseerd op eerdere ervaringen. Omdat de meeste iconen geen vaste betekenis hebben, zijn tekstlabels nodig om de betekenis eenduidig over te brengen." }), "\n"] }), "\n", (0, s.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://www.ncdt.nl/programma/wat-overheden-kunnen-leren-van-de-ideale-webshop", children: "Wat overheden kunnen leren van de ideale webshop" }), ", presentatie van Anouk Butterlin."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://uxmovement.com/forms/why-your-form-buttons-should-never-say-submit/", children: "Why Your Form Buttons Should Never Say 'Submit'" }), ", UX Movement."] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "https://adamsilver.io/blog/3-common-examples-of-button-text-that-degrades-ux-and-how-to-rewrite-them-so-theyre-clear/", children: "3 common examples of button text that degrades UX and how to rewrite them so they\u2019re clear" }), ", Adam Silver."] }), "\n"] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(A, { ...e }) }) : A(e);
   }
   var Z = t(3324);
   const G = { title: "Buttons in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Buttons", pagination_label: "Buttons in een formulier", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    W = "Buttons in een formulier",
    B = { id: "richtlijnen/formulieren/alle-richtlijnen/buttons", title: "Buttons in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/buttons.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/buttons", permalink: "/richtlijnen/formulieren/alle-richtlijnen/buttons", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/buttons.mdx", tags: [], version: "current", frontMatter: { title: "Buttons in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Buttons", pagination_label: "Buttons in een formulier", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Autocomplete in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/autocomplete" }, next: { title: "Bevestigingspagina", permalink: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina" } },
    F = {},
    V = [];
   function P(e) {
    const n = { code: "code", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", "\n", "\n", (0, s.jsx)(n.h1, { id: "buttons-in-een-formulier", children: "Buttons in een formulier" }), "\n", (0, s.jsxs)(n.p, { children: ["Via een button verzend je een formulier of voer je aan andere actie uit, zoals het uploaden van een bestand.\nIn deze documentatie gebruiken we de Engelse benaming voor het Nederlandse woord knop: \u201cbutton\u201d. Omdat ", (0, s.jsx)(n.code, { children: "<button>" }), " het HTML-element is waar deze richtlijnen over gaan."] }), "\n", (0, s.jsx)(n.p, { children: "Binnen een formulier bestaan er drie soorten knoppen:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: '<button type="submit">' }), ", om het formulier mee te verzenden (dit is de default waarde binnen een formulier);"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: '<button type="button">' }), ", dit zijn knoppen die een andere functie hebben binnen een formulier, zoals het uploaden van documenten of openen van een modal;"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: '<button type="reset">' }), ", om alle ingevulde informatie binnen een formulier te wissen."] }), "\n"] }), "\n", (0, s.jsx)(n.p, { children: "De hier beschreven richtlijnen gelden voor al deze buttons." }), "\n", (0, s.jsx)(n.p, { children: "Voor de toegankelijkheid en goede code van het formulier zijn de volgende punten belangrijk voor een button:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Toetsenbordbediening van een button." }), "\n", (0, s.jsx)(n.li, { children: "Plaatsing van een button binnen een formulier." }), "\n", (0, s.jsx)(n.li, { children: "Duidelijk buttontekst die beschrijft wat de button doet." }), "\n", (0, s.jsx)(n.li, { children: "De toegankelijke naam van een button." }), "\n", (0, s.jsx)(n.li, { children: "Afbeeldingen en iconen als buttons." }), "\n", (0, s.jsx)(n.li, { children: "Disabled submitbuttons." }), "\n"] }), "\n", (0, s.jsx)(w, {}), "\n", (0, s.jsx)(k, {}), "\n", (0, s.jsx)(N, {}), "\n", (0, s.jsx)(_, {}), "\n", (0, s.jsx)(C, {}), "\n", (0, s.jsx)(D, {}), "\n", (0, s.jsx)(a, {}), "\n", (0, s.jsx)(i, {}), "\n", (0, s.jsx)(p, {}), "\n", (0, s.jsx)(m, {}), "\n", (0, s.jsx)(c, {}), "\n", (0, s.jsx)(h, {}), "\n", (0, s.jsx)(Z.ZP, {})] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(P, { ...e }) }) : P(e);
   }
  },
  73460: (e, n, t) => {
   t.d(n, { X: () => v });
   var s = t(16532),
    o = t(86259),
    r = t(11910),
    i = t(59560),
    l = t(80486),
    a = t(69267),
    d = t(80495),
    c = t(50959),
    u = t(9995);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var b = t(41179),
    m = t(11527);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(s.BB, { className: (0, o.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, m.jsx)(s.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const p = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(s.BB, { className: (0, o.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   p.displayName = "DocumentContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   j.displayName = "SurfaceContainer";
   const v = (e) => {
    let { code: n, copy: t = !1, defaultExpandedCode: v = !1, displayCode: x = !0, children: k, container: f = "document", language: w, designTokens: y } = e,
     _ = "function" == typeof k ? k() : k,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = "string" == typeof n ? n : u.uS(z || _),
     [S, D] = (0, c.useState)(N),
     [A, C] = (0, c.useState)(v);
    (0, c.useEffect)(() => {
     (async () => {
      (S = await d.ZP.format(N, { parser: w, plugins: [r.Z, i.ZP, l.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), D(S);
     })();
    }, [N]);
    const Z = (0, c.useId)();
    let G = c.Fragment;
    return (
     "paragraph" === f ? (G = g) : "document" === f ? (G = p) : "surface" === f && (G = j),
     (0, m.jsxs)("div", {
      className: (0, o.Z)(h["nlds-canvas"]),
      children: [
       _ && (0, m.jsx)("div", { className: (0, o.Z)(h["nlds-canvas__example"]), children: (0, m.jsx)("div", { className: "voorbeeld-theme", style: y, children: (0, m.jsx)(G, { children: (0, m.jsx)(s.pu, { children: _ }) }) }) }),
       x &&
        (0, m.jsx)("div", {
         className: (0, o.Z)(h["nlds-canvas__toolbar"]),
         children: (0, m.jsx)(s.zx, {
          className: (0, o.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           C(!A);
          },
          "aria-expanded": A,
          "aria-controls": Z,
          children: A ? "Verberg code" : "Bekijk code",
         }),
        }),
       x &&
        (0, m.jsxs)("div", {
         className: (0, o.Z)(h["nlds-canvas__code-block"], !t && h["nlds-canvas__code-block--user-select-none"]),
         id: Z,
         hidden: !A,
         children: [
          (0, m.jsx)(b.u, { syntax: w, textContent: S, trim: !0 }),
          t &&
           (0, m.jsx)("div", {
            className: (0, o.Z)(h["nlds-canvas__toolbar"]),
            children: (0, m.jsx)(s.zx, {
             className: (0, o.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error("Copy code failed", e));
             },
             children: "Kopieer",
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, t) => {
   t.d(n, { u: () => l });
   var s = t(16532),
    o = t(2425);
   t(50959);
   const r = {
    plain: { color: "var(--nlds-code-block-color)", backgroundColor: "var(--nlds-code-block-background-color)" },
    styles: [
     { types: ["comment"], style: { color: "var(--nlds-code-block-comment-color)", fontStyle: "italic" } },
     { types: ["prolog"], style: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "italic" } },
     { types: ["cdata"], style: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "italic" } },
     { types: ["punctuation"], style: { color: "var(--nlds-code-block-punctuation-color)" } },
     { types: ["deleted"], style: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "italic" } },
     { types: ["symbol"], style: { color: "var(--nlds-code-block-symbol-color)" } },
     { types: ["property"], style: { color: "var(--nlds-code-block-property-color)" } },
     { types: ["tag"], style: { color: "var(--nlds-code-block-tag-color)" } },
     { types: ["operator"], style: { color: "var(--nlds-code-block-operator-color)" } },
     { types: ["keyword"], style: { color: "var(--nlds-code-block-keyword-color)" } },
     { types: ["boolean"], style: { color: "var(--nlds-code-block-boolean-color)" } },
     { types: ["number"], style: { color: "var(--nlds-code-block-number-color)" } },
     { types: ["constant"], style: { color: "var(--nlds-code-block-constant-color)" } },
     { types: ["function"], style: { color: "var(--nlds-code-block-function-color)" } },
     { types: ["builtin"], style: { color: "var(--nlds-code-block-builtin-color)" } },
     { types: ["char"], style: { color: "var(--nlds-code-block-char-color)" } },
     { types: ["selector"], style: { color: "var(--nlds-code-block-selector-color)", fontStyle: "italic" } },
     { types: ["doctype"], style: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "italic" } },
     { types: ["attr-name"], style: { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "italic" } },
     { types: ["inserted"], style: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "italic" } },
     { types: ["string"], style: { color: "var(--nlds-code-block-string-color)" } },
     { types: ["url"], style: { color: "var(--nlds-code-block-url-color)" } },
     { types: ["entity"], style: { color: "var(--nlds-code-block-entity-color)" } },
     { types: ["class-name"], style: { color: "var(--nlds-code-block-class-name-color)" } },
     { types: ["atrule"], style: { color: "var(--nlds-code-block-atrule-color)" } },
     { types: ["attr-value"], style: { color: "var(--nlds-code-block-attr-value-color)" } },
     { types: ["regex"], style: { color: "var(--nlds-code-block-regex-color)" } },
     { types: ["important"], style: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" } },
     { types: ["variable"], style: { color: "var(--nlds-code-block-variable-color)" } },
     { types: ["bold"], style: { fontWeight: "bold" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
    ],
   };
   var i = t(11527);
   function l(e) {
    let { lineNumber: n, syntax: t, textContent: l, trim: a } = e,
     d = l;
    return (
     a && (d = d.trim()),
     (0, i.jsx)(o.y$, {
      theme: r,
      code: d,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: l } = e;
       return (0, i.jsx)(s.dn, { style: t, children: o.map((e, t) => (0, i.jsxs)("span", { ...r({ line: e }), children: [n && (0, i.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, i.jsx)("span", { ...l({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  30036: (e, n, t) => {
   t.d(n, { X: () => d });
   var s = t(35893),
    o = t(71139),
    r = t(16532),
    i = t(86259);
   t(50959);
   const l = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(11527);
   const d = (e) => {
    let { title: n, appearance: t, description: d, children: c, figure: u } = e;
    const h = "Doen",
     b = "Niet doen",
     m = u ? "figure" : "div",
     g = u ? "figcaption" : "div";
    return (0, a.jsxs)(m, { className: (0, i.Z)(l["nlds-guideline"], l[`nlds-guideline--${t}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(g, { className: (0, i.Z)(l["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(s.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: b })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: h })] }), (0, a.jsx)(r.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, i.Z)(l["nlds-guideline__example"]), children: c })] });
   };
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => i });
   var s = t(50959);
   const o = {},
    r = s.createContext(o);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
