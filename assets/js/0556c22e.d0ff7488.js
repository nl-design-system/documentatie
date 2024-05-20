"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3696],
 {
  2065: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: "a", em: "em", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "over-deze-richtlijnen", children: "Over deze richtlijnen" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ", (0, i.jsx)(n.em, { children: "beta" }), "."] }), "\n", (0, i.jsxs)(n.p, { children: ["We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92897: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => K, contentTitle: () => S, default: () => I, frontMatter: () => C, metadata: () => X, toc: () => W });
   var i = r(52676),
    o = r(24785),
    s = r(94091),
    t = r(69265);
   function l(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(t.X, { appearance: "do", title: "Koppel een description aan het formulierveld, met aria-describedby.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { id: "description-wachtwoord", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.input, { id: "wachtwoord", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord" })] }) }) }), "\n", (0, i.jsx)(t.X, { appearance: "dont", title: "Koppeling weglaten.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord0", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.input, { id: "wachtwoord0", type: "password", name: "nieuw-wachtwoord" })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   function d(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "koppel-een-description-aan-het-formulierveld", children: "Koppel een description aan het formulierveld" }), "\n", (0, i.jsx)(n.p, { children: "Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld." }), "\n", (0, i.jsxs)(n.p, { children: ["Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ", (0, i.jsx)(n.code, { children: "<form>" }), " element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ", (0, i.jsx)(n.code, { children: "aria-describedby" }), "). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt."] }), "\n", (0, i.jsx)(n.p, { children: "Meer informatie over de formulierenmodus:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/tutorials/forms/instructions/", children: "Form Instructions" }), ", Web Accessibility Initiative."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes", children: "Browse and focus modes" }), ", Accessibility Developer Guide."] }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), "\n", (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: "Let op:" }), " De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen."] }), "\n", (0, i.jsx)(n.p, { children: "Opzet in de HTML:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Geef description een ID: ", (0, i.jsx)(n.code, { children: 'id="description-name"' }), "."] }), "\n", (0, i.jsxs)(n.li, { children: ["Verwijs in het formulierveld naar dat ID: ", (0, i.jsx)(n.code, { children: 'aria-describedby="description-name"' }), "."] }), "\n"] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), "\n", (0, i.jsxs)(n.p, { children: ["Lees ook: ", (0, i.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby", children: "MDN over aria-describedby" }), "."] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(t.X, { appearance: "do", title: "Koppel een description aan de legend van de fieldset, met aria-describedby.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(n.fieldset, { "aria-describedby": "description-inloggen", children: [(0, i.jsx)(n.legend, { children: "Wilt u inloggen?" }), (0, i.jsx)(n.p, { id: "description-inloggen", children: "Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen." }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.input, { id: "inloggen-ja", type: "radio", name: "inloggen", value: "ja" }), (0, i.jsx)(n.label, { for: "inloggen-ja", children: " Ja" })] }), (0, i.jsxs)(n.div, { children: [(0, i.jsx)(n.input, { id: "inloggen-nee", type: "radio", name: "inloggen", value: "nee" }), (0, i.jsx)(n.label, { for: "inloggen-nee", children: " Nee" })] })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "fieldset-plaats-descriptions-tussen-legend-en-eerste-item", children: "Fieldset: Plaats descriptions tussen legend en eerste item" }), "\n", (0, i.jsx)(n.p, { children: 'Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g();
   }
   function x(e) {
    const n = { h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "houd-de-description-kort-en-to-the-point", children: "Houd de description kort en to-the-point" }), "\n", (0, i.jsx)(n.p, { children: "Heb je erg veel tekst nodig om het formulier goed in te vullen, vermeld deze tekst dan boven het formulier of op een introductiepagina voordat een gebruiker het formulier gaat invullen." }), "\n", (0, i.jsx)(n.p, { children: "Soms is het niet te voorkomen dat een formulier jargon bevat, bijvoorbeeld omdat termen wettelijk zijn vastgelegd. Leg in zulke gevallen duidelijk uit wat zo'n term betekent." }), "\n", (0, i.jsx)(n.p, { children: "Als informatie als losse tekstblokken tussen de vragen staat, bestaat de kans dat een screenreadergebruiker deze informatie mist." }), "\n", (0, i.jsx)(n.p, { children: "Gebruik liever geen tooltips, dan maak je het voor de gebruiker moeilijker om belangrijke informatie te lezen. Het vergt een extra klik (of toetsenbordaanslagen) en wordt niet door alle gebruikers goed begrepen. Als het echt belangrijk is, laat de informatie dan meteen zien." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
   function v(e) {
    const n = { div: "div", input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(t.X, { appearance: "do", title: "Koppel alle descriptions aan het formulierveld.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord5", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.div, { id: "description-wachtwoord5", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.div, { id: "error-wachtwoord5", children: "Je gekozen wachtwoord is te kort." }), (0, i.jsx)(n.input, { id: "wachtwoord5", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord5 error-wachtwoord5" })] }) }) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   function f(e) {
    const n = { code: "code", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "meerdere-descriptions-koppelen", children: "Meerdere descriptions koppelen" }), "\n", (0, i.jsx)(n.p, { children: "Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is." }), "\n", (0, i.jsxs)(n.p, { children: ["Geef dan ", (0, i.jsx)(n.code, { children: "aria-describedby" }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, i.jsx)(n.code, { children: "aria-describedby" }), " is de volgorde waarin het voorgelezen wordt."] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
   function y(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(t.X, { appearance: "do", title: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord1", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { id: "description-wachtwoord1", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.input, { id: "wachtwoord1", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord1" })] }) }) }), "\n", (0, i.jsx)(t.X, { appearance: "do", title: "Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord2", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { id: "description-wachtwoord2", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.p, { id: "error-wachtwoord2", children: "Je gekozen wachtwoord is te kort." }), (0, i.jsx)(n.input, { id: "wachtwoord2", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord2 error-wachtwoord2" })] }) }) }), "\n", (0, i.jsx)(t.X, { appearance: "dont", title: "Description onder het formulierveld plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord3", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.input, { id: "wachtwoord3", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord3" }), (0, i.jsx)(n.p, { id: "description-wachtwoord3", children: "Kies een wachtwoord van minimaal 8 karakters lang." })] }) }) }), "\n", (0, i.jsx)(t.X, { appearance: "dont", title: "Description boven het formulierveld en foutmelding eronder plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "wachtwoord4", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { id: "description-wachtwoord4", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, i.jsx)(n.input, { id: "wachtwoord4", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord4 error-wachtwoord4" }), (0, i.jsx)(n.p, { id: "error-wachtwoord4", children: "Je gekozen wachtwoord is te kort." })] }) }) })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   function z(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "plaats-descriptions-tussen-label-en-formulierveld", children: "Plaats descriptions tussen label en formulierveld" }), "\n", (0, i.jsx)(n.p, { children: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde." }), "\n", (0, i.jsxs)(n.p, { children: ["Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ", (0, i.jsx)(n.a, { href: "https://adrianroselli.com/2017/01/avoid-messages-under-fields.html", children: (0, i.jsx)("span", { lang: "en", children: "Avoid Messages Under Fields" }) }), " van Adrian Roselli."] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(z, { ...e }) }) : z(e);
   }
   function D(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(D, { ...e }) }) : D();
   }
   function Z(e) {
    const n = { a: "a", h2: "h2", img: "img", p: "p", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "houd-het-aanklikbare-gedeelte-groot-genoeg", children: "Houd het aanklikbare gedeelte groot genoeg" }), "\n", (0, i.jsx)(n.p, { children: "Bij een goede koppeling tussen het label en het formulierveld, zijn beide elementen aanklikbaar. Dat maakt het aanklikbare gedeelte groot." }), "\n", (0, i.jsxs)(n.p, { children: ["Een description ertussen verkleint de aanklikbare ruimte. Zorg er daarom voor dat het aanklikbare gedeelte van een formulierveld ", (0, i.jsx)(n.strong, { children: "tenminste" }), " 24 bij 24 pixels is, liever nog groter waar mogelijk. Zodat gebruikers met dikke vingertoppen op een mobiel of met trillende handen met een muis toch een formulierveld kunnen selecteren."] }), "\n", (0, i.jsxs)(n.p, { children: ["Een minimale grootte van het aanklikbare gedeelte is nodig om te voldoen aan het WCAG-succescriterium ", (0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", children: "2.5.8: Minimale grootte van het aanwijsgebied" }), " (niveau A)."] }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_description_size.png", alt: "Formfield met textbox van 48 pixels hoog, en formfield met radiobuttons van 24 pixels hoog." }) }), "\n", (0, i.jsx)(n.p, { children: "Voor het 'Voorbeeld thema' maken we gebruik van een grootte van 24x24 bij checkboxes en radio buttons. En houden we een grootte van 48x48px aan voor componenten zoals buttons en text inputs. Dit sluit mooi aan bij de spacing scale van het voorbeeld thema." })] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(Z, { ...e }) }) : Z(e);
   }
   var A = r(2065);
   const C = { title: "Descriptions in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", sidebar_position: 4, pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    S = "Descriptions in een formulier",
    X = { id: "richtlijnen/formulieren/descriptions", title: "Descriptions in een formulier | Richtlijnen", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", source: "@site/docs/richtlijnen/formulieren/descriptions.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/descriptions", permalink: "/richtlijnen/formulieren/descriptions", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/descriptions.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Descriptions in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", sidebar_position: 4, pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Bevestigingspagina", permalink: "/richtlijnen/formulieren/bevestigingspagina" }, next: { title: "Foutmeldingen", permalink: "/richtlijnen/formulieren/foutmeldingen" } },
    K = {},
    W = [];
   function B(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "descriptions-in-een-formulier", children: "Descriptions in een formulier" }), "\n", (0, i.jsx)(n.p, { children: "Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen." }), "\n", (0, i.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, i.jsx)(n.a, { href: "https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description", children: "\u201caccessible description\u201d" }), ", die in toegankelijkheidsstandaarden wordt gebruikt."] }), "\n", (0, i.jsx)(n.p, { children: "Belangrijk voor een goede description:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#koppel-een-description-aan-het-formulierveld", children: "Koppel een description in code aan het formulierveld" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#plaats-descriptions-tussen-label-en-formulierveld", children: "Plaats descriptions tussen label en formulierveld" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#meerdere-descriptions-koppelen", children: "Meerdere descriptions koppelen" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#fieldset-plaats-descriptions-tussen-legend-en-eerste-item", children: "Fieldset: Plaats descriptions tussen legend en eerste item" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#houd-het-aanklikbare-gedeelte-groot-genoeg", children: "Houd het aanklikbare gedeelte groot genoeg" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#houd-de-description-kort-en-to-the-point", children: "Houd de description kort en to-the-point" }), "."] }), "\n"] }), "\n", (0, i.jsx)(c, {}), "\n", (0, i.jsx)(a, {}), "\n", (0, i.jsx)(N, {}), "\n", (0, i.jsx)(_, {}), "\n", (0, i.jsx)(k, {}), "\n", (0, i.jsx)(w, {}), "\n", (0, i.jsx)(m, {}), "\n", (0, i.jsx)(h, {}), "\n", (0, i.jsx)(P, {}), "\n", (0, i.jsx)(F, {}), "\n", (0, i.jsx)(b, {}), "\n", (0, i.jsx)(j, {}), "\n", (0, i.jsx)(A.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(B, { ...e }) }) : B(e);
   }
  },
  94091: (e, n, r) => {
   r.d(n, { X: () => b });
   var i = r(51256),
    o = r(4814),
    s = r(28942),
    t = r(76653),
    l = r(33691),
    a = r(99821),
    d = r(64663),
    c = r(75271),
    p = r(60027);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var u = r(41179),
    m = r(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, o.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, m.jsx)(i.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, o.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   j.displayName = "DocumentContainer";
   const x = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   x.displayName = "SurfaceContainer";
   const b = (e) => {
    let { code: n, copy: r = !1, defaultExpandedCode: b = !1, displayCode: v = !0, children: w, container: f = "document", language: k, designTokens: y } = e,
     _ = "function" == typeof w ? w() : w,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = "string" == typeof n ? n : p.uS(z || _),
     [D, F] = (0, c.useState)(N),
     [Z, P] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (D = await d.ZP.format(N, { parser: k, plugins: [s.Z, t.ZP, l.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), F(D);
     })();
    }, [N]);
    const A = (0, c.useId)();
    let C = c.Fragment;
    return (
     "paragraph" === f ? (C = g) : "document" === f ? (C = j) : "surface" === f && (C = x),
     (0, m.jsxs)("div", {
      className: (0, o.Z)(h["nlds-canvas"]),
      children: [
       _ && (0, m.jsx)("div", { className: (0, o.Z)(h["nlds-canvas__example"]), children: (0, m.jsx)("div", { className: "voorbeeld-theme", style: y, children: (0, m.jsx)(C, { children: (0, m.jsx)(i.pu, { children: _ }) }) }) }),
       v &&
        (0, m.jsx)("div", {
         className: (0, o.Z)(h["nlds-canvas__toolbar"]),
         children: (0, m.jsx)(i.zx, {
          className: (0, o.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           P(!Z);
          },
          "aria-expanded": Z,
          "aria-controls": A,
          children: Z ? "Verberg code" : "Bekijk code",
         }),
        }),
       v &&
        (0, m.jsxs)("div", {
         className: (0, o.Z)(h["nlds-canvas__code-block"], !r && h["nlds-canvas__code-block--user-select-none"]),
         id: A,
         hidden: !Z,
         children: [
          (0, m.jsx)(u.u, { syntax: k, textContent: D, trim: !0 }),
          r &&
           (0, m.jsx)("div", {
            className: (0, o.Z)(h["nlds-canvas__toolbar"]),
            children: (0, m.jsx)(i.zx, {
             className: (0, o.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(D).catch((e) => console.error("Copy code failed", e));
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
  41179: (e, n, r) => {
   r.d(n, { u: () => l });
   var i = r(51256),
    o = r(12429);
   r(75271);
   const s = {
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
   var t = r(52676);
   function l(e) {
    let { lineNumber: n, syntax: r, textContent: l, trim: a } = e,
     d = l;
    return (
     a && (d = d.trim()),
     (0, t.jsx)(o.y$, {
      theme: s,
      code: d,
      language: r || "",
      children: (e) => {
       let { style: r, tokens: o, getLineProps: s, getTokenProps: l } = e;
       return (0, t.jsx)(i.dn, { style: r, children: o.map((e, r) => (0, t.jsxs)("span", { ...s({ line: e }), children: [n && (0, t.jsx)("span", { children: r + 1 }), e.map((e, n) => (0, t.jsx)("span", { ...l({ token: e }) }, n)), "\n"] }, r)) });
      },
     })
    );
   }
  },
  69265: (e, n, r) => {
   r.d(n, { X: () => d });
   var i = r(14319),
    o = r(9913),
    s = r(51256),
    t = r(4814);
   r(75271);
   const l = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = r(52676);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: p } = e;
    const h = "Doen",
     u = "Niet doen",
     m = p ? "figure" : "div",
     g = p ? "figcaption" : "div";
    return (0, a.jsxs)(m, { className: (0, t.Z)(l["nlds-guideline"], l[`nlds-guideline--${r}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(g, { className: (0, t.Z)(l["nlds-guideline__description"]), children: ["dont" === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, t.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(i.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: u })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, t.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(o.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: h })] }), (0, a.jsx)(s.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, t.Z)(l["nlds-guideline__example"]), children: c })] });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => t });
   var i = r(75271);
   const o = {},
    s = i.createContext(o);
   function t(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
