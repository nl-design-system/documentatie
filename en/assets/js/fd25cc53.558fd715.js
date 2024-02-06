"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9568],
 {
  3324: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var o = r(11527),
    i = r(47214);
   function t(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, o.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  89542: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => K, contentTitle: () => X, default: () => R, frontMatter: () => S, metadata: () => A, toc: () => B });
   var o = r(11527),
    i = r(47214),
    t = r(73460),
    s = r(30036);
   function l(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Koppel een description aan het formulierveld, met aria-describedby.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.p, { id: "description-wachtwoord", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.input, { id: "wachtwoord", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord" })] }) }) }), "\n", (0, o.jsx)(s.X, { appearance: "dont", title: "Koppeling weglaten.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord0", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.p, { children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.input, { id: "wachtwoord0", type: "password", name: "nieuw-wachtwoord" })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
   function d(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "koppel-een-description-aan-het-formulierveld", children: "Koppel een description aan het formulierveld" }), "\n", (0, o.jsx)(n.p, { children: "Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld. Dat kan door deze twee aan elkaar te koppelen via aria-describedby." }), "\n", (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: "Let op:" }), " De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen."] }), "\n", (0, o.jsx)(n.p, { children: "Opzet in de HTML:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Geef description een ID: ", (0, o.jsx)(n.code, { children: 'id="description-wachtwoord"' }), "."] }), "\n", (0, o.jsxs)(n.li, { children: ["Verwijs in het formulierveld naar dat ID:", (0, o.jsx)(n.code, { children: 'aria-describedby="description-wachtwoord"' }), "."] }), "\n"] }), "\n", (0, o.jsx)(n.p, { children: "Hierdoor wordt naast de labeltekst ook de description voorgelezen, wanneer een screenreadergebruiker het formulierveld focus geeft." }), "\n", (0, o.jsxs)(n.p, { children: ["Lees ook: ", (0, o.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby", children: "MDN over aria-describedby" }), "."] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Koppel een description aan de legend van de fieldset, met aria-describedby.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(n.fieldset, { "aria-describedby": "description-inloggen", children: [(0, o.jsx)(n.legend, { children: "Wilt u inloggen?" }), (0, o.jsx)(n.p, { id: "description-inloggen", children: "Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen." }), (0, o.jsxs)(n.div, { children: [(0, o.jsx)(n.input, { id: "inloggen-ja", type: "radio", name: "inloggen", value: "ja" }), (0, o.jsx)(n.label, { for: "inloggen-ja", children: " Ja" })] }), (0, o.jsxs)(n.div, { children: [(0, o.jsx)(n.input, { id: "inloggen-nee", type: "radio", name: "inloggen", value: "nee" }), (0, o.jsx)(n.label, { for: "inloggen-nee", children: " Nee" })] })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "fieldset-plaats-descriptions-tussen-legend-en-eerste-item", children: "Fieldset: Plaats descriptions tussen legend en eerste item" }), "\n", (0, o.jsx)(n.p, { children: 'Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
   function x(e) {
    const n = { h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "houd-de-description-kort-en-to-the-point", children: "Houd de description kort en to-the-point" }), "\n", (0, o.jsx)(n.p, { children: "Heb je erg veel tekst nodig om het formulier goed in te vullen, vermeld deze tekst dan boven het formulier of op een introductiepagina voordat een gebruiker het formulier gaat invullen." }), "\n", (0, o.jsx)(n.p, { children: "Als informatie als losse tekstblokken tussen de vragen staat, bestaat de kans dat een screenreadergebruiker deze informatie mist." }), "\n", (0, o.jsx)(n.p, { children: "Gebruik liever geen tooltips, dan maak je het voor de gebruiker moeilijker om belangrijke informatie te lezen. Het vergt een extra klik (of toetsenbordaanslagen) en wordt niet door alle gebruikers goed begrepen. Als het echt belangrijk is, laat de informatie dan meteen zien." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x(e);
   }
   function v(e) {
    const n = { div: "div", input: "input", label: "label", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Koppel alle descriptions aan het formulierveld.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord5", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.div, { id: "description-wachtwoord5", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.div, { id: "error-wachtwoord5", children: "Je gekozen wachtwoord is te kort." }), (0, o.jsx)(n.input, { id: "wachtwoord5", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord5 error-wachtwoord5" })] }) }) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v(e);
   }
   function f(e) {
    const n = { code: "code", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "meerdere-descriptions-koppelen", children: "Meerdere descriptions koppelen" }), "\n", (0, o.jsx)(n.p, { children: "Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is." }), "\n", (0, o.jsxs)(n.p, { children: ["Geef dan ", (0, o.jsx)(n.code, { children: "aria-describedby" }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, o.jsx)(n.code, { children: "aria-describedby" }), " is de volgorde waarin het voorgelezen wordt."] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
   }
   function y(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord1", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.p, { id: "description-wachtwoord1", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.input, { id: "wachtwoord1", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord1" })] }) }) }), "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord2", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.p, { id: "description-wachtwoord2", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.p, { id: "error-wachtwoord2", children: "Je gekozen wachtwoord is te kort." }), (0, o.jsx)(n.input, { id: "wachtwoord2", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord2 error-wachtwoord2" })] }) }) }), "\n", (0, o.jsx)(s.X, { appearance: "dont", title: "Description onder het formulierveld plaatsen.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord3", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.input, { id: "wachtwoord3", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord3" }), (0, o.jsx)(n.p, { id: "description-wachtwoord3", children: "Kies een wachtwoord van minimaal 8 karakters lang." })] }) }) }), "\n", (0, o.jsx)(s.X, { appearance: "dont", title: "Description boven het formulierveld en foutmelding eronder plaatsen.", children: (0, o.jsx)(t.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "wachtwoord4", children: "Nieuw wachtwoord" }), (0, o.jsx)(n.p, { id: "description-wachtwoord4", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, o.jsx)(n.input, { id: "wachtwoord4", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord4 error-wachtwoord4" }), (0, o.jsx)(n.p, { id: "error-wachtwoord4", children: "Je gekozen wachtwoord is te kort." })] }) }) })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y(e);
   }
   function N(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "plaats-descriptions-tussen-label-en-formulierveld", children: "Plaats descriptions tussen label en formulierveld" }), "\n", (0, o.jsx)(n.p, { children: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde." }), "\n", (0, o.jsxs)(n.p, { children: ["Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ", (0, o.jsx)(n.a, { href: "https://adrianroselli.com/2017/01/avoid-messages-under-fields.html", children: (0, o.jsx)("span", { lang: "en", children: "Avoid Messages Under Fields" }) }), " van Adrian Roselli."] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(N, { ...e }) }) : N(e);
   }
   function F(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(F, { ...e }) }) : F();
   }
   function Z(e) {
    const n = { a: "a", h2: "h2", img: "img", p: "p", strong: "strong", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "houd-het-aanklikbare-gedeelte-groot-genoeg", children: "Houd het aanklikbare gedeelte groot genoeg" }), "\n", (0, o.jsx)(n.p, { children: "Bij een goede koppeling tussen het label en het formulierveld, zijn beide elementen aanklikbaar. Dat maakt het aanklikbare gedeelte groot." }), "\n", (0, o.jsxs)(n.p, { children: ["Een description ertussen verkleint de aanklikbare ruimte. Zorg er daarom voor dat het aanklikbare gedeelte van een formulierveld ", (0, o.jsx)(n.strong, { children: "tenminste" }), " 24 bij 24 pixels is, liever nog groter waar mogelijk. Zodat gebruikers met dikke vingertoppen op een mobiel of met trillende handen met een muis toch een formulierveld kunnen selecteren."] }), "\n", (0, o.jsxs)(n.p, { children: ["Een minimale grootte van het aanklikbare gedeelte is nodig om te voldoen aan het WCAG-succescriterium ", (0, o.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", children: "2.5.8: Minimale grootte van het aanwijsgebied" }), " (niveau A)."] }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_description_size.png", alt: "Formfield met textbox van 48 pixels hoog, en formfield met radiobuttons van 24 pixels hoog." }) }), "\n", (0, o.jsx)(n.p, { children: "Voor het 'Voorbeeld thema' maken we gebruik van een grootte van 24x24 bij checkboxes en radio buttons. En houden we een grootte van 48x48px aan voor componenten zoals buttons en text inputs. Dit sluit mooi aan bij de spacing scale van het voorbeeld thema." })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(Z, { ...e }) }) : Z(e);
   }
   var P = r(3324);
   const S = { title: "Descriptions in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    X = "Descriptions in een formulier",
    A = { id: "richtlijnen/formulieren/alle-richtlijnen/descriptions", title: "Descriptions in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/descriptions.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/descriptions", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/descriptions.mdx", tags: [], version: "current", frontMatter: { title: "Descriptions in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Bevestigingspagina", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina" }, next: { title: "Foutmeldingen", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/foutmeldingen" } },
    K = {},
    B = [];
   function L(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "descriptions-in-een-formulier", children: "Descriptions in een formulier" }), "\n", (0, o.jsx)(n.p, { children: "Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen." }), "\n", (0, o.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, o.jsx)(n.a, { href: "https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description", children: "\u201caccessible description\u201d" }), ", die in toegankelijkheidsstandaarden wordt gebruikt."] }), "\n", (0, o.jsx)(n.p, { children: "Belangrijk voor een goede description:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Koppel een description in code aan het formulierveld." }), "\n", (0, o.jsx)(n.li, { children: "Plaats descriptions tussen label en formulierveld." }), "\n", (0, o.jsx)(n.li, { children: "Je kunt ook meerdere descriptions koppelen." }), "\n", (0, o.jsx)(n.li, { children: "Fieldset: Plaats descriptions tussen legend en eerste item." }), "\n", (0, o.jsx)(n.li, { children: "Houd het aanklikbare gedeelte groot genoeg." }), "\n", (0, o.jsx)(n.li, { children: "Houd de description kort en to-the-point." }), "\n"] }), "\n", (0, o.jsx)(c, {}), "\n", (0, o.jsx)(a, {}), "\n", (0, o.jsx)(D, {}), "\n", (0, o.jsx)(_, {}), "\n", (0, o.jsx)(k, {}), "\n", (0, o.jsx)(w, {}), "\n", (0, o.jsx)(m, {}), "\n", (0, o.jsx)(h, {}), "\n", (0, o.jsx)(C, {}), "\n", (0, o.jsx)(z, {}), "\n", (0, o.jsx)(b, {}), "\n", (0, o.jsx)(j, {}), "\n", (0, o.jsx)(P.ZP, {})] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(L, { ...e }) }) : L(e);
   }
  },
  73460: (e, n, r) => {
   r.d(n, { X: () => b });
   var o = r(16532),
    i = r(86259),
    t = r(11910),
    s = r(59560),
    l = r(80486),
    a = r(69267),
    d = r(80495),
    c = r(50959),
    p = r(9995);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var u = r(41179),
    m = r(11527);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(o.BB, { className: (0, i.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, m.jsx)(o.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(o.BB, { className: (0, i.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   j.displayName = "DocumentContainer";
   const x = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   x.displayName = "SurfaceContainer";
   const b = (e) => {
    let { code: n, copy: r = !1, defaultExpandedCode: b = !1, displayCode: v = !0, children: w, container: f = "document", language: k, designTokens: y } = e,
     _ = "function" == typeof w ? w() : w,
     N = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     D = "string" == typeof n ? n : p.uS(N || _),
     [F, z] = (0, c.useState)(D),
     [Z, C] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (F = await d.ZP.format(D, { parser: k, plugins: [t.Z, s.ZP, l.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), z(F);
     })();
    }, [D]);
    const P = (0, c.useId)();
    let S = c.Fragment;
    return (
     "paragraph" === f ? (S = g) : "document" === f ? (S = j) : "surface" === f && (S = x),
     (0, m.jsxs)("div", {
      className: (0, i.Z)(h["nlds-canvas"]),
      children: [
       _ && (0, m.jsx)("div", { className: (0, i.Z)(h["nlds-canvas__example"]), children: (0, m.jsx)("div", { className: "voorbeeld-theme", style: y, children: (0, m.jsx)(S, { children: (0, m.jsx)(o.pu, { children: _ }) }) }) }),
       v &&
        (0, m.jsx)("div", {
         className: (0, i.Z)(h["nlds-canvas__toolbar"]),
         children: (0, m.jsx)(o.zx, {
          className: (0, i.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           C(!Z);
          },
          "aria-expanded": Z,
          "aria-controls": P,
          children: Z ? "Verberg code" : "Bekijk code",
         }),
        }),
       v &&
        (0, m.jsxs)("div", {
         className: (0, i.Z)(h["nlds-canvas__code-block"], !r && h["nlds-canvas__code-block--user-select-none"]),
         id: P,
         hidden: !Z,
         children: [
          (0, m.jsx)(u.u, { syntax: k, textContent: F, trim: !0 }),
          r &&
           (0, m.jsx)("div", {
            className: (0, i.Z)(h["nlds-canvas__toolbar"]),
            children: (0, m.jsx)(o.zx, {
             className: (0, i.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error("Copy code failed", e));
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
   var o = r(16532),
    i = r(2425);
   r(50959);
   const t = {
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
   var s = r(11527);
   function l(e) {
    let { lineNumber: n, syntax: r, textContent: l, trim: a } = e,
     d = l;
    return (
     a && (d = d.trim()),
     (0, s.jsx)(i.y$, {
      theme: t,
      code: d,
      language: r || "",
      children: (e) => {
       let { style: r, tokens: i, getLineProps: t, getTokenProps: l } = e;
       return (0, s.jsx)(o.dn, { style: r, children: i.map((e, r) => (0, s.jsxs)("span", { ...t({ line: e }), children: [n && (0, s.jsx)("span", { children: r + 1 }), e.map((e, n) => (0, s.jsx)("span", { ...l({ token: e }) }, n)), "\n"] }, r)) });
      },
     })
    );
   }
  },
  30036: (e, n, r) => {
   r.d(n, { X: () => d });
   var o = r(9842),
    i = r(91406),
    t = r(16532),
    s = r(86259);
   r(50959);
   const l = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = r(11527);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: p } = e;
    const h = "Doen",
     u = "Niet doen",
     m = p ? "figure" : "div",
     g = p ? "figcaption" : "div";
    return (0, a.jsxs)(m, { className: (0, s.Z)(l["nlds-guideline"], l[`nlds-guideline--${r}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(g, { className: (0, s.Z)(l["nlds-guideline__description"]), children: ["dont" === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(o.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: u })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(i.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, s.Z)(l["nlds-guideline__example"]), children: c })] });
   };
  },
  47214: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => s });
   var o = r(50959);
   const i = {},
    t = o.createContext(i);
   function s(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
