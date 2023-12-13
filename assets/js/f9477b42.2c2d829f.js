"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10606],
 {
  28754: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => L, contentTitle: () => Z, default: () => I, frontMatter: () => X, metadata: () => H, toc: () => G });
   var r = l(11527),
    i = l(47214),
    o = l(35191),
    a = l(53623),
    t = l(30036);
   function s(e) {
    const n = { input: "input", label: "label", option: "option", select: "select", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Het label inconsequent plaatsen in een formulier (visueel en in code).", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "lievelingskleur", children: "Wat is je lievelingskleur?" }), (0, r.jsxs)(n.select, { name: "lievelingskleur", id: "lievelingskleur", children: [(0, r.jsx)(n.option, { children: "Rood" }), (0, r.jsx)(n.option, { children: "Blauw" }), (0, r.jsx)(n.option, { children: "Wit" })] }), (0, r.jsx)(n.input, { type: "text", id: "dier", name: "lievelingsdier" }), (0, r.jsx)(n.label, { for: "dier", children: "Wat is je lievelingsdier?" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zet-het-label-boven-het-formulierveld", children: "Zet het label boven het formulierveld" }), "\n", (0, r.jsx)(n.p, { children: "Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd." }), "\n", (0, r.jsx)(n.p, { children: "Deze plaatsing heeft meerdere voordelen:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht." }), "\n", (0, r.jsx)(n.li, { children: "Dit werkt beter voor gebruikers die de tekst inzoomen." }), "\n", (0, r.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat." }), "\n", (0, r.jsxs)(n.p, { children: ["Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ", (0, r.jsx)(n.a, { href: "https://www.nldesignsystem.nl/richtlijnen/stijl/ruimte#ontwerpen-met-ruimte", children: "de richtlijnen over stijl: Ruimte" }), "."] }), "\n", (0, r.jsx)(n.p, { children: "Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond." }), "\n", (0, r.jsxs)(n.p, { children: ["Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ", (0, r.jsx)(n.a, { href: "https://www.smashingmagazine.com/2021/02/material-design-text-fields/", children: "Material Design Text Fields Are Badly Designed in Smashing Magazine" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { div: "div", input: "input", label: "label", option: "option", select: "select", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "do", title: "Koppel het label aan het formulierveld.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "kleur3", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.input, { type: "text", id: "kleur3", name: "lievelingskleur" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "do", title: "Koppel het label aan het formulierveld (select).", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "kleur4", children: "Wat is je lievelingskleur?" }), (0, r.jsxs)(n.select, { id: "kleur4", name: "lievelingskleur", children: [(0, r.jsx)(n.option, { children: "Rood" }), (0, r.jsx)(n.option, { children: "Blauw" }), (0, r.jsx)(n.option, { children: "Wit" })] })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Een div in plaats van een label gebruiken.", description: "De for en id koppeling werkt alleen met een label-element.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.div, { for: "kleur5", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.input, { type: "text", id: "kleur5", name: "lievelingskleur" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { children: "Wat is je lievelingskleur?" }), (0, r.jsxs)(n.select, { name: "lievelingskleur", children: [(0, r.jsx)(n.option, { children: "Rood" }), (0, r.jsx)(n.option, { children: "Blauw" }), (0, r.jsx)(n.option, { children: "Wit" })] })] }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-een-formulierveld-toegankelijke-naam-met-een-label", children: "Geef een formulierveld toegankelijke naam met een label" }), "\n", (0, r.jsxs)(n.p, { children: ["Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ", (0, r.jsx)(n.code, { children: "for" }), "/", (0, r.jsx)(n.code, { children: "id" }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), "\n", (0, r.jsx)(n.p, { children: "Waarom is dit belangrijk?" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt." }), "\n", (0, r.jsx)(n.li, { children: "Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken." }), "\n", (0, r.jsx)(n.li, { children: "Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description)." }), "\n", (0, r.jsx)(n.h3, { id: "de-forid-relatie", children: "De for/id relatie" }), "\n", (0, r.jsx)(n.p, { children: "Opzet in de HTML:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Geef het formulierveld een ID." }), "\n", (0, r.jsxs)(n.li, { children: ["Geef het label het attribute ", (0, r.jsx)(n.code, { children: "for" }), " met als waarde de ID van het bijbehorende formulierveld."] }), "\n"] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), "\n", (0, r.jsxs)(n.p, { children: ["Let op: De gebruikte ", (0, r.jsx)(n.strong, { children: "ID's" }), " moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen."] }), "\n", (0, r.jsx)(n.p, { children: "Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt." }), "\n", (0, r.jsxs)(n.p, { children: ["Doen: Gekoppeld label met ", (0, r.jsx)(n.code, { children: "for" }), " en ", (0, r.jsx)(n.code, { children: "id" }), ". Het ", (0, r.jsx)(n.code, { children: "<label>" }), "-element heeft een ", (0, r.jsx)(n.code, { children: "for" }), " attribuut (of ", (0, r.jsx)(n.code, { children: "htmlFor" }), " in React) dat verwijst naar het ", (0, r.jsx)(n.code, { children: "id" }), " van het bijbehorende formulierveld."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zo werkt dit bijvoorbeeld met een ", (0, r.jsx)(n.code, { children: "<select>" }), ":"] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), "\n", (0, r.jsx)(n.p, { children: "Het geven van een goede toegankelijke naam aan formuliervelden is verplicht volgens WCAG. Deze succescriteria zijn relevant:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels", children: "2.4.6: Koppen en labels" }), " (niveau AA)."] }), "\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions", children: "3.3.2: Labels of instructies" }), " (niveau A)."] }), "\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html", children: "4.1.2: Naam, rol, waarde" }), " (niveau A)."] }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   function j(e) {
    const n = { input: "input", label: "label", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "do", title: "Het label blijft zichtbaar, ook als de gebruiker gaat invullen.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "dier1", children: "Wat is je lievelingsdier?" }), (0, r.jsx)(n.input, { type: "text", id: "dier1", name: "lievelingsdier", placeholder: "Bijvoorbeeld cavia" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Alleen een placeholder gebruiken als zichtbaar label.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "dier2", class: "visually-hidden", children: "Wat is je lievelingsdier?" }), (0, r.jsx)(n.input, { type: "text", id: "dier2", name: "lievelingsdier", placeholder: "Wat is je lievelingsdier?" })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zorg-ervoor-dat-het-label-altijd-zichtbaar-is", children: "Zorg ervoor dat het label altijd zichtbaar is" }), "\n", (0, r.jsx)(n.p, { children: "Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label." }), "\n", (0, r.jsxs)(n.p, { children: ["De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ", (0, r.jsx)(n.a, { href: "https://www.nngroup.com/articles/form-design-placeholders/", children: "Placeholders in Form Fields Are Harmful" }), " van de Nielsen Norman Group."] }), "\n", (0, r.jsxs)(n.p, { children: ["Een label vertelt ", (0, r.jsx)(n.strong, { children: "wat" }), " je moet invullen en een placeholder ", (0, r.jsx)(n.strong, { children: "hoe" }), " je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld \u201cJouw e-mailadres\u201d zijn en de placeholder \u201c", (0, r.jsx)(n.a, { href: "mailto:naam@voorbeeld.com", children: "naam@voorbeeld.com" }), "\u201d."] }), "\n", (0, r.jsxs)(n.p, { children: ["De ", (0, r.jsx)(n.strong, { children: "hoe" }), " informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen."] }), "\n", (0, r.jsx)(n.p, { children: "Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete." }), "\n", (0, r.jsx)(n.p, { children: "Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker als het label altijd zichtbaar is." })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function x(e) {
    const n = { a: "a", input: "input", label: "label", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "do", title: "De link buiten het label plaatsen.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: "#", children: "Onze algemene leveringsvoorwaarden" }) }), (0, r.jsx)(n.input, { id: "alv1", type: "checkbox" }), (0, r.jsx)(n.label, { for: "alv1", children: "Ik ga akkoord met de algemene leveringsvoorwaarden" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "De link binnen het label plaatsen.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.input, { id: "alv2", type: "checkbox" }), (0, r.jsxs)(n.label, { for: "alv2", children: ["Ik ga akkoord met de ", (0, r.jsx)(n.a, { href: "#", children: "algemene leveringsvoorwaarden" })] })] }) }) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function w(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zet-alleen-tekst-in-het-label", children: "Zet alleen tekst in het label" }), "\n", (0, r.jsx)(n.p, { children: "Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes." }), "\n", (0, r.jsx)(n.p, { children: "Dit geeft problemen bij het voorlezen van het label door screenreaders en het activeren via voice recognition." }), "\n", (0, r.jsx)(n.p, { children: "Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips." }), "\n", (0, r.jsxs)(n.p, { children: ["Lees ook de ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/links", children: "richtlijnen voor links in formulieren" }), "."] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
   function y(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "do", title: "Simpel label met extra beschrijving. Gebruik waar nodig een losse description om meer uitleg te geven.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "first-name", children: "Voornaam (een of meerdere)" }), (0, r.jsx)(n.p, { id: "first-name-description", children: "Vul de voornaam of voornamen in zoals deze op je id-kaart of paspoort staan." }), (0, r.jsx)(n.input, { autocomplete: "given-name", type: "text", name: "first_name", id: "first-name", "aria-describedby": "first-name-description" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Ingewikkeld label. Door veel informatie in te korten wordt het label onduidelijk", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "first-name2", children: "Voornaam(en)" }), (0, r.jsx)(n.input, { autocomplete: "given-name", type: "text", name: "first_name", id: "first-name2" })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function S(e) {
    const n = { h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "gebruik-duidelijke-labelteksten", children: "Gebruik duidelijke labelteksten" }), "\n", (0, r.jsx)(n.p, { children: "Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Waar nodig wordt er ook extra hulp geboden worden, zoals een omschrijving van waar een BSN-nummer te vinden is." }), "\n", (0, r.jsx)(n.p, { children: "Wanneer je een afkorting gebruikt, of je moet jargon gebruiken omdat de offici\xeble term verplicht is, geef dan in de beschrijving een voorbeeld of uitleg." })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(S, { ...e }) }) : S(e);
   }
   function W(e) {
    const n = { div: "div", input: "input", label: "label", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(t.X, { appearance: "do", title: "Het zichtbare label is de toegankelijke naam.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "hond", children: "Hoe heet je hond" }), (0, r.jsx)(n.input, { type: "text", id: "hond", name: "hond" })] }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,", description: "terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsx)(n.input, { type: "text", name: "lievelingskleur", "aria-label": "Vul een kleur in", placeholder: "Wat is je lievelingskleur" }) }) }), "\n", (0, r.jsx)(t.X, { appearance: "dont", title: "Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,", description: "terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.", children: (0, r.jsx)(a.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.div, { children: "Zoek" }), (0, r.jsx)(n.input, { type: "search", name: "trefwoord", "aria-label": "Trefwoord" })] }) }) })] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
   function N(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam", children: "De zichtbare naam moet overeenkomen met de toegankelijke naam" }), "\n", (0, r.jsx)(n.p, { children: "Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken." }), "\n", (0, r.jsxs)(n.p, { children: ["Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ", (0, r.jsx)(n.code, { children: "aria-label" }), ". Met ", (0, r.jsx)(n.code, { children: "aria-label" }), " kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door te zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, voldoe je aan een WCAG-criterium: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html", children: "2.5.3: Label in naam" }), " (niveau A)."] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(N, { ...e }) }) : N(e);
   }
   const X = { title: "Labels in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Labels", pagination_label: "Labels in een formulier", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    Z = "Labels in een formulier",
    H = { id: "richtlijnen/formulieren/alle-richtlijnen/labels", title: "Labels in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/01-labels.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/labels", permalink: "/richtlijnen/formulieren/alle-richtlijnen/labels", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/01-labels.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Labels in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Labels", pagination_label: "Labels in een formulier", description: "Richtlijnen voor het ontwerp en de code van labels in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Alle richtlijnen (beta)", permalink: "/richtlijnen/formulieren/alle-richtlijnen" }, next: { title: "Descriptions in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/descriptions" } },
    L = {},
    G = [];
   function B(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "labels-in-een-formulier", children: "Labels in een formulier" }), "\n", (0, r.jsx)(n.p, { children: "Een label geeft aan welke gegevens de gebruiker bij een formulierveld in kan vullen.\nVoor de toegankelijkheid van labels en dus ook formuliervelden zijn de volgende punten belangrijk:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Geef een formulierveld een toegankelijke naam met een label." }), "\n", (0, r.jsx)(n.li, { children: "De zichtbare naam moet overeenkomen met de toegankelijke naam." }), "\n", (0, r.jsx)(n.li, { children: "Zet het label boven het formulierveld." }), "\n", (0, r.jsx)(n.li, { children: "Zorg ervoor dat het label altijd zichtbaar is." }), "\n", (0, r.jsx)(n.li, { children: "Zet alleen tekst in het label." }), "\n", (0, r.jsx)(n.li, { children: "Gebruik duidelijke labelteksten." }), "\n"] }), "\n", (0, r.jsx)(m, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(A, {}), "\n", (0, r.jsx)(F, {}), "\n", (0, r.jsx)(h, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(k, {}), "\n", (0, r.jsx)(p, {}), "\n", (0, r.jsx)(_, {}), "\n", (0, r.jsx)(f, {}), "\n", (0, r.jsx)(D, {}), "\n", (0, r.jsx)(z, {}), "\n", (0, r.jsx)(o.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(B, { ...e }) }) : B(e);
   }
  },
  35191: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var r = l(11527),
    i = l(47214);
   function o(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues/new", children: "Open een issue op GitHub" }), " met je suggesties."] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  53623: (e, n, l) => {
   l.d(n, { X: () => v });
   var r = l(16532),
    i = l(5341),
    o = l(85630),
    a = l.n(o),
    t = l(63273),
    s = l.n(t),
    d = l(77192),
    c = l.n(d),
    h = (l(50959), l(9995)),
    u = l(4014),
    b = l(62950);
   const g = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    m = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var j = l(11527);
   const p = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(l);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let n,
      { code: l, copy: o = !1, defaultCollapsed: t = !0, children: d, language: v } = e;
     n = "function" == typeof d ? d() : d;
     const k = c().format(h.uS(l || n), { parser: "html", plugins: [a(), s()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      x = (0, b.Z)();
     return (0, j.jsxs)("div", {
      className: (0, i.Z)(g["nlds-canvas"]),
      children: [
       (0, j.jsx)("div", { className: (0, i.Z)(g["nlds-canvas__example"]), children: (0, j.jsx)(r.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, j.jsx)("div", { className: (0, i.Z)(g["nlds-canvas__toolbar"]), children: (0, j.jsx)(r.zx, { className: (0, i.Z)(g["nlds-canvas__button"], g["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: p, "aria-expanded": !t, "aria-controls": x, children: t ? "Bekijk code" : "Verberg code" }) }),
       (0, j.jsxs)("div", {
        className: (0, i.Z)(g["nlds-canvas__code-block"], !o && g["nlds-canvas__code-block--user-select-none"]),
        id: x,
        hidden: t,
        children: [
         (0, j.jsx)(u.Z, { language: v, style: m, children: k }),
         o &&
          (0, j.jsx)("div", {
           className: (0, i.Z)(g["nlds-canvas__toolbar"]),
           children: (0, j.jsx)(r.zx, {
            className: (0, i.Z)(g["nlds-canvas__button"], g["nlds-canvas__copy-button"]),
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
  30036: (e, n, l) => {
   l.d(n, { X: () => d });
   var r = l(17921),
    i = l(57),
    o = l(16532),
    a = l(5341);
   l(50959);
   const t = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = l(11527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const h = "Doen",
     u = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, a.Z)(t["nlds-guideline"], t[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, a.Z)(t["nlds-guideline__description"]), children: ["dont" === l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.nv, { className: (0, a.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(r.Z, { className: t["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: t["nlds-guideline__title"], children: u })] }), (0, s.jsx)(o.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.nv, { className: (0, a.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(i.Z, { className: t["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: t["nlds-guideline__title"], children: h })] }), (0, s.jsx)(o.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, a.Z)(t["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
