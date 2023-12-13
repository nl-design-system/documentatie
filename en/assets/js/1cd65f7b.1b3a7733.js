"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [65793],
 {
  36621: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => V, contentTitle: () => C, default: () => M, frontMatter: () => G, metadata: () => F, toc: () => Z });
   var t = o(85893),
    r = o(11151);
   function l(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", pre: "pre", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "de-toegankelijke-naam-van-een-button", children: "De toegankelijke naam van een button" }), "\n", (0, t.jsx)(n.p, { children: "Maak de buttontekst voor iedereen beschikbaar, zorg dus voor een toegankelijke naam. Dan kunnen screenreadergebruikers deze tekst ook lezen en weten ze wat er gaat gebeuren als ze op de button klikken." }), "\n", (0, t.jsx)(n.p, { children: "We beschrijven hieronder een aantal technieken om een button een toegankelijke naam te geven." }), "\n", (0, t.jsx)(n.h3, { id: "button-met-alleen-tekst", children: "Button met alleen tekst" }), "\n", (0, t.jsx)(n.p, { children: "Dit is de eenvoudigste en meest robuuste manier om een button een naam te geven. Met CSS kan de buttontekst gestyled worden. De toegankelijke naam is de buttontekst." }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: "<button>Geef je op</button>\n" }) }), "\n", (0, t.jsx)(n.h3, { id: "een-button-met-een-icoontje-en-tekst", children: "Een button met een icoontje en tekst" }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Optie 1" }), ": Een icoon toevoegen via CSS met daarnaast tekst geplaatst. De toegankelijke naam is de buttontekst."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<button class="icon-delete" type="button">Verwijder bestand</button>\n' }) }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <span class="fa-solid fa-trash-can" aria-hidden="true"> </span>\n  Verwijder bestand\n</button>\n' }) }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Optie 2" }), ": Een decoratief icoon als SVG-bestand samen met tekst. De afbeelding heeft een ", (0, t.jsx)(n.code, { children: "alt" }), " attribuut met een lege waarde, waardoor het wordt overgeslagen door schermlezers. De toegankelijke naam is de buttontekst."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <img src="close.svg" alt="" />\n  Sluit\n</button>\n' }) }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Optie 3" }), ": Een decoratief icoon als SVG-code samen met de tekst. Voeg hiervoor ", (0, t.jsx)(n.code, { children: 'aria-hidden="true"' }), " toe aan de SVG, waardoor het wordt overgeslagen door hulptechnologie\xebn zoals schermlezers. De toegankelijke naam is de buttontekst.\nDeze optie heeft de voorkeur omdat nu ", (0, t.jsx)(n.code, { children: "currentColor" }), " kan worden gebruikt in de CSS waardoor forced colors kunnen worden overgenomen."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <svg aria-hidden="true" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n  Sluit\n</button>\n' }) }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Optie 4" }), ": SVG-code met een ", (0, t.jsx)(n.code, { children: 'role="img"' }), " en een ", (0, t.jsx)(n.code, { children: "aria-label" }), " met de toegankelijke naam.\nDeze optie heeft niet de voorkeur omdat er geen visuele tekst bij het icoontje staat."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<button type="button">\n  <svg role="img" aria-label="Sluit" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n</button>\n' }) }), "\n", (0, t.jsxs)(n.p, { children: ["Voor het toekennen van toegankelijke namen aan SVGs bestaan ook andere technieken, Carie Fisher beschrijft ze in ", (0, t.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/", children: "Accessible SVGs: Perfect Patterns For Screen Reader Users" }), "."] }), "\n", (0, t.jsxs)(n.p, { children: ["Door te zorgen voor een toegankelijke naam voor de button, voldoe je aan \xe9\xe9n van de voorwaarden voor het WCAG-succescriterium: ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value", children: "4.1.2 Naam, rol en waarde" }), " (niveau A)."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   function i(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i();
   }
   function d(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "disabled-submitbuttons", children: "Disabled submitbuttons" }), "\n", (0, t.jsx)(n.p, { children: "Disabled submit buttons worden gebruikt om\nte verhinderen dat een gebruiker het formulier verzendt als nog niet alle waarden (goed) zijn ingevuld." }), "\n", (0, t.jsx)(n.p, { children: "Er is een aantal toegankelijkheidsproblemen met het gebruik van disabled buttons:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "De gebuiker moet zoeken wat er mis is, waarom kan het formulier niet worden verzonden?" }), "\n", (0, t.jsx)(n.li, { children: "Meestal is een disabled button grijs met grijze tekst. Dit is voor veel gebruikers slecht zichtbaar." }), "\n", (0, t.jsx)(n.li, { children: "Toetsenbord- en screenreadergebruikers kunnen de disabled button geen focus geven en dat is verwarrend en onverwacht in het gebruik." }), "\n", (0, t.jsx)(n.li, { children: "Gebruikers kunnen verandering van disabled in enabled soms niet opmerken als deze uit beeld is en blijven zoeken naar wat er mis is." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Een goede oplossing en vervanging voor een disabled button: schrijf goede labelteksten, descriptions en foutmeldingen. Zodat de gebruiker weet wat er mis is en niet hoeft te puzzelen." }), "\n", (0, t.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/", children: "The problem with disabled buttons and what to do instead" }), ", Adam Silver."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://gomakethings.com/dont-disable-buttons/", children: "Don't disable buttons" }), ", Chris Ferdinandi in Go Make Things."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/", children: "Usability Pitfalls of Disabled Buttons, and How To Avoid Them" }), ", Vitaly Friedman in Smashing Magazine."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://axesslab.com/disabled-buttons-suck/", children: "Disabled buttons suck" }), "."] }), "\n"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u();
   }
   function h(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "afbeeldingen-als-buttons", children: "Afbeeldingen als buttons" }), "\n", (0, t.jsx)(n.p, { children: "Zorg ervoor dat tekst in afbeeldingen goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen." }), "\n", (0, t.jsx)(n.p, { children: "Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst. Maar gebruik bij voorkeur CSS om buttontekst mooi gestyled weer te geven. Dan heeft de gebruiker meer controle over de weergave en grootte van de tekst." }), "\n", (0, t.jsx)(n.p, { children: "Door te zorgen voor een schaalbare en flexibele weergave tekst in buttons voldoe je aan de WCAG-succescritera:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html", children: "1.4.4: Herschalen van tekst" }), " (niveau AA)."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html", children: "1.4.10 Reflow" }), " (niveau AA)"] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html", children: "1.4.5 Afbeeldingen van tekst" }), " (niveau AA)."] }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_label-as-image.png", alt: "Een button met het label 'Verstuur uw vraag' daarnaast een vergroting waarbij de tekst korrelig wordt" }) })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m();
   }
   function p(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "toetsenbordbediening-van-een-button", children: "Toetsenbordbediening van een button" }), "\n", (0, t.jsx)(n.p, { children: "Veel gebruikers navigeren door een formulier met hun Tab-toets om van focusable element naar focusable element te springen (buttons, links, invoervelden, radio buttons, checkboxes etc)." }), "\n", (0, t.jsx)(n.p, { children: "Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button." }), "\n", (0, t.jsxs)(n.p, { children: ["Door te zorgen voor een consistente toetsenbordbediening, voldoe je aan het volgende WCAG-succescriterium: ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html", children: "2.1.1 Toetsenbord" }), " (niveau A).\nEn voldoe je aan de ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/predictable.html", children: "WCAG richtlijn 3.2 Voorspelbaar" }), ": Maak het uiterlijk en de bediening van webpagina's voorspelbaar."] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   var v = o(13455),
    x = o(31092);
   function f(e) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(x.X, { appearance: "do", title: "Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.", children: (0, t.jsx)(v.X, { language: "html", children: (0, t.jsx)("button", { class: "doFancyStuff button", children: "Geef je op" }) }) }), "\n", (0, t.jsx)(x.X, { appearance: "dont", title: "Een div gebruiken die alleen met de muis aanklikbaar is.", children: (0, t.jsx)(v.X, { language: "html", children: (0, t.jsx)("div", { class: "doFancyStuff button", children: "Geef je op" }) }) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f();
   }
   function _(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "plaatsing-van-een-buttons-binnen-een-formulier", children: "Plaatsing van een buttons binnen een formulier" }), "\n", (0, t.jsx)(n.p, { children: "Plaats buttons aan het begin van de regel. Zo wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), "\n", (0, t.jsxs)(n.p, { children: ["Ze vormen zo \xe9\xe9n lijn. Ook is het zo voor gebruikers die inzoomen (bijvoorbeeld gebruikers met een visuele beperking) makkelijker om de knop te vinden.\nDaarbij zullen gebruikers die inzoomen, een scherm vergrootglas gebruiken of een visuele beperking zoals ", (0, t.jsx)(n.a, { href: "https://nl.wikipedia.org/wiki/Kokervisus", children: "Kokervisus" }), " hebben buttons goed kunnen vinden."] }), "\n", (0, t.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.lukew.com/ff/entry.asp?571", children: "Primary & Secondary Actions in Web Forms" }), ", Luke Wroblewski"] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://adamsilver.io/blog/where-to-put-buttons-on-forms/", children: "Where to put buttons on forms" }), ", Adam Silver"] }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--do.png", alt: "Button uitgelijnd met formulier labels en invoervelden" }), "\n", (0, t.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--dont.png", alt: "Button niet uitgelijnd met formulier labels en invoervelden" })] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _(e);
   }
   function z(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(z, { ...e }) }) : z();
   }
   function A(e) {
    const n = { a: "a", blockquote: "blockquote", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "duidelijk-buttontekst-die-beschrijft-wat-de-button-doet", children: "Duidelijk buttontekst die beschrijft wat de button doet" }), "\n", (0, t.jsx)(n.p, { children: "Geef buttons een duidelijke tekst, die beschrijft wat er gaat gebeuren." }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: 'Liever niet "Verstuur", maar bijvoorbeeld \u201cMeld je aan\u201d, "Aanmelden", \u201cGeef je op\u201d, \u201cVerstuur uw klacht\u201d of "Registreer".' }), "\n", (0, t.jsx)(n.li, { children: "Liever niet \u201cWijzig\u201d, maar bijvoorbeeld \u201cWijzig uw adresgegevens\u201d." }), "\n", (0, t.jsx)(n.li, { children: "Liever niet \u201cVolgende\u201d, maar bijvoorbeeld \u201cNaar stap 2, je gegevens invullen\u201d." }), "\n", (0, t.jsx)(n.li, { children: "Liever niet \u201cVolgende\u201d, maar bijvoorbeeld \u201cNaar stap 3, uw gegevens controleren\u201d." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Dit is geruststellend en duidelijk. De gebruiker weet wat er gaat gebeuren en zal minder onzeker zijn om een formulier in te vullen en te versturen. Bij \u201cVolgende\u201d kan er tenslotte van alles gebeuren." }), "\n", (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_label.png", alt: "Een button met het label 'wijzig' en een button met het label 'Wijzig uw gegevens'." }) }), "\n", (0, t.jsxs)(n.p, { children: ["Buttons kunnen tekst bevatten, een icoontje en een combinatie van beide. Uit gebruikersonderzoek blijkt dat niet iedereen alle icoontjes snapt. Het is beter om naast een icoontje ook zichtbare tekst te plaatsen. Volgens de Nielsen Norman Group in ", (0, t.jsx)(n.a, { href: "https://www.nngroup.com/articles/icon-usability/", children: "Icon Usability" }), "."] }), "\n", (0, t.jsxs)(n.blockquote, { children: ["\n", (0, t.jsx)(n.p, { children: "Het begrijpen van een icoon is gebaseerd op eerdere ervaringen. Omdat de meeste iconen geen vaste betekenis hebben, zijn tekstlabels nodig om de betekenis eenduidig over te brengen." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.ncdt.nl/programma/wat-overheden-kunnen-leren-van-de-ideale-webshop", children: "Wat overheden kunnen leren van de ideale webshop" }), ", presentatie van Anouk Butterlin."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://uxmovement.com/forms/why-your-form-buttons-should-never-say-submit/", children: "Why Your Form Buttons Should Never Say 'Submit'" }), ", UX Movement."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://adamsilver.io/blog/3-common-examples-of-button-text-that-degrades-ux-and-how-to-rewrite-them-so-theyre-clear/", children: "3 common examples of button text that degrades UX and how to rewrite them so they\u2019re clear" }), ", Adam Silver."] }), "\n"] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(A, { ...e }) }) : A(e);
   }
   function N(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(N, { ...e }) }) : N();
   }
   var B = o(59467);
   const G = { title: "Buttons in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Buttons", pagination_label: "Buttons in een formulier", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    C = "Buttons in een formulier",
    F = { id: "richtlijnen/formulieren/alle-richtlijnen/buttons", title: "Buttons in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/04-buttons.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/buttons", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/buttons", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/04-buttons.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Buttons in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Buttons", pagination_label: "Buttons in een formulier", description: "Richtlijnen voor het ontwerp en de code van buttons (knoppen) in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Links in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/links" }, next: { title: "Placeholders in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/placeholders" } },
    V = {},
    Z = [];
   function E(e) {
    const n = { code: "code", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "buttons-in-een-formulier", children: "Buttons in een formulier" }), "\n", (0, t.jsxs)(n.p, { children: ["Via een button verzend je een formulier of voer je aan andere actie uit, zoals het uploaden van een bestand.\nIn deze documentatie gebruiken we de Engelse benaming voor het Nederlandse woord knop: \u201cbutton\u201d. Omdat ", (0, t.jsx)(n.code, { children: "<button>" }), " het HTML-element is waar deze richtlijnen over gaan."] }), "\n", (0, t.jsx)(n.p, { children: "Binnen een formulier bestaan er drie soorten knoppen:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<button type="submit">' }), ", om het formulier mee te verzenden (dit is de default waarde binnen een formulier);"] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<button type="button">' }), ", dit zijn knoppen die een andere functie hebben binnen een formulier, zoals het uploaden van documenten of openen van een modal;"] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<button type="reset">' }), ", om alle ingevulde informatie binnen een formulier te wissen."] }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "De hier beschreven richtlijnen gelden voor al deze buttons." }), "\n", (0, t.jsx)(n.p, { children: "Voor de toegankelijkheid en goede code van het formulier zijn de volgende punten belangrijk voor een button:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Toetsenbordbediening van buttons." }), "\n", (0, t.jsx)(n.li, { children: "Plaatsing van een submitbutton binnen een formulier." }), "\n", (0, t.jsx)(n.li, { children: "Duidelijk buttontekst die beschrijft wat de button doet." }), "\n", (0, t.jsx)(n.li, { children: "De toegankelijke naam van een button." }), "\n", (0, t.jsx)(n.li, { children: "Afbeeldingen iconen als buttons." }), "\n", (0, t.jsx)(n.li, { children: "Disabled submitbuttons." }), "\n", (0, t.jsx)(n.li, { children: "Links versus buttons, wanneer gebruik je welk element." }), "\n"] }), "\n", (0, t.jsx)(k, {}), "\n", (0, t.jsx)(w, {}), "\n", (0, t.jsx)(y, {}), "\n", (0, t.jsx)(S, {}), "\n", (0, t.jsx)(D, {}), "\n", (0, t.jsx)(W, {}), "\n", (0, t.jsx)(s, {}), "\n", (0, t.jsx)(a, {}), "\n", (0, t.jsx)(g, {}), "\n", (0, t.jsx)(j, {}), "\n", (0, t.jsx)(c, {}), "\n", (0, t.jsx)(b, {}), "\n", (0, t.jsx)(B.ZP, {})] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(E, { ...e }) }) : E(e);
   }
  },
  59467: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(85893),
    r = o(11151);
   function l(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues/new", children: "Open een issue op GitHub" }), " met je suggesties."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  13455: (e, n, o) => {
   o.d(n, { X: () => k });
   o(67294);
   const t = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var r = o(90512),
    l = o(28182),
    s = o.n(l),
    i = o(72237),
    a = o.n(i),
    d = o(73945),
    c = o.n(d),
    u = o(97762),
    b = o(1775);
   const h = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var g = o(65663),
    m = o(25934),
    j = o(85893);
   const p = (e) => {
     let { target: n } = e;
     const o = n.getAttribute("aria-controls"),
      t = n.ownerDocument.getElementById(o);
     (t.hidden = !t.hidden), n.setAttribute("aria-expanded", !t.hidden), (n.innerText = t.hidden ? "Bekijk code" : "Verberg code");
    },
    k = (e) => {
     let { code: n, copy: o = !1, defaultCollapsed: l = !0, children: i, language: d } = e;
     "function" == typeof i && (i = i());
     const k = c().format(u.uS(n || i), { parser: "html", plugins: [s(), a()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      v = (0, m.Z)();
     return (0, j.jsxs)("div", {
      className: (0, r.Z)(t["nlds-canvas"], "voorbeeld-theme", "utrecht-html"),
      children: [
       (0, j.jsx)("div", { className: (0, r.Z)(t["nlds-canvas__example"]), children: i }),
       (0, j.jsx)("div", { className: (0, r.Z)(t["nlds-canvas__toolbar"]), children: (0, j.jsx)(g.zx, { className: (0, r.Z)(t["nlds-canvas__button"], t["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: p, "aria-expanded": !l, "aria-controls": v, children: l ? "Bekijk code" : "Verberg code" }) }),
       (0, j.jsxs)("div", {
        className: (0, r.Z)(t["nlds-canvas__code-block"], !o && t["nlds-canvas__code-block--user-select-none"]),
        id: v,
        hidden: l,
        children: [
         (0, j.jsx)(b.Z, { language: d, style: h, children: k }),
         o &&
          (0, j.jsx)("div", {
           className: (0, r.Z)(t["nlds-canvas__toolbar"]),
           children: (0, j.jsx)(g.zx, {
            className: (0, r.Z)(t["nlds-canvas__button"], t["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(k).catch((e) => console.error("Copy code failed", e));
            },
            children: "Kopieer",
           }),
          }),
        ],
       }),
      ],
     });
    };
  },
  31092: (e, n, o) => {
   o.d(n, { X: () => d });
   o(67294);
   var t = o(12569),
    r = o(46451);
   const l = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = o(90512),
    i = o(65663),
    a = o(85893);
   const d = (e) => {
    let { title: n, appearance: o, description: d, children: c } = e;
    const u = "Doen",
     b = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, s.Z)(l["nlds-guideline"], l[`nlds-guideline--${o}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, s.Z)(l["nlds-guideline__description"]), children: ["dont" === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${o}`]), children: [(0, a.jsx)(t.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: b })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${o}`]), children: [(0, a.jsx)(r.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: u })] }), (0, a.jsx)(i.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, s.Z)(l["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
