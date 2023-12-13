"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [74270],
 {
  94641: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => K, contentTitle: () => X, default: () => C, frontMatter: () => H, metadata: () => B, toc: () => L });
   var r = o(11527),
    l = o(47214),
    i = o(53623),
    s = o(30036);
   function t(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Koppel een description aan het formulierveld, met aria-describedby.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.input, { id: "wachtwoord", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord" })] }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Koppeling weglaten.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord0", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.input, { id: "wachtwoord0", type: "password", name: "nieuw-wachtwoord" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
   function a(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "koppel-een-description-aan-het-formulierveld", children: "Koppel een description aan het formulierveld" }), "\n", (0, r.jsx)(n.p, { children: "Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld. Dat kan door deze twee aan elkaar te koppelen via aria-describedby." }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: "Let op:" }), " De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen."] }), "\n", (0, r.jsx)(n.p, { children: "Opzet in de HTML:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Geef description een ID: ", (0, r.jsx)(n.code, { children: 'id="description-wachtwoord"' }), "."] }), "\n", (0, r.jsxs)(n.li, { children: ["Verwijs in het formulierveld naar dat ID:", (0, r.jsx)(n.code, { children: 'aria-describedby="description-wachtwoord"' }), "."] }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Hierdoor wordt naast de labeltekst ook de description voorgelezen, wanneer een screenreadergebruiker het formulierveld focus geeft." }), "\n", (0, r.jsxs)(n.p, { children: ["Lees ook: ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby", children: "MDN over aria-describedby" }), "."] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Koppel een description aan de legend van de fieldset, met aria-describedby.", children: (0, r.jsxs)(i.X, { language: "html", children: [() => (0, r.jsxs)(n.fieldset, { "aria-describedby": "description-inloggen", children: [(0, r.jsx)(n.legend, { children: "Wilt u inloggen?" }), (0, r.jsx)(n.p, { id: "description-inloggen", children: "Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen." }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { id: "inloggen-ja", type: "radio", name: "inloggen", value: "ja" }), (0, r.jsx)(n.label, { for: "inloggen-ja", children: " Ja" })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { id: "inloggen-nee", type: "radio", name: "inloggen", value: "nee" }), (0, r.jsx)(n.label, { for: "inloggen-nee", children: " Nee" })] })] }), (0, r.jsx)(n.p, { children: ")" })] }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "fieldset-plaats-descriptions-tussen-legend-en-eerste-item", children: "Fieldset: Plaats descriptions tussen legend en eerste item" }), "\n", (0, r.jsx)(n.p, { children: 'Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m();
   }
   function k(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "houd-de-description-kort-en-to-the-point", children: "Houd de description kort en to-the-point" }), "\n", (0, r.jsx)(n.p, { children: "Heb je erg veel tekst nodig om het formulier goed in te vullen, vermeld deze tekst dan boven het formulier of op een introductiepagina voordat een gebruiker het formulier gaat invullen." }), "\n", (0, r.jsx)(n.p, { children: "Als informatie als losse tekstblokken tussen de vragen staat, bestaat de kans dan een screenreadergebruiker deze informatie mist." }), "\n", (0, r.jsx)(n.p, { children: "Gebruik liever geen tooltips, dan maak je het voor de gebruiker moeilijker om belangrijke informatie te lezen. Het vergt een extra klik (of toetsenbordaanslagen) en wordt niet door alle gebruikers goed begrepen. Als het echt belangrijk is, laat de informatie dan meteen zien." })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   function v(e) {
    const n = { div: "div", input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Koppel alle descriptions aan het formulierveld.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord5", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.div, { id: "description-wachtwoord5", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.div, { id: "error-wachtwoord5", children: "Je gekozen wachtwoord is te kort." }), (0, r.jsx)(n.input, { id: "wachtwoord5", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord5 error-wachtwoord5" })] }) }) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function w(e) {
    const n = { code: "code", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "meerdere-descriptions-koppelen", children: "Meerdere descriptions koppelen" }), "\n", (0, r.jsx)(n.p, { children: "Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is." }), "\n", (0, r.jsxs)(n.p, { children: ["Geef dan ", (0, r.jsx)(n.code, { children: "aria-describedby" }), " twee waardes (IDs), mee gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, r.jsx)(n.code, { children: "aria-describedby" }), " is de volgorde waarin het voorgelezen wordt."] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
   function _(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord1", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord1", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.input, { id: "wachtwoord1", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord1" })] }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord2", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord2", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.p, { id: "error-wachtwoord2", children: "Je gekozen wachtwoord is te kort." }), (0, r.jsx)(n.input, { id: "wachtwoord2", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord2 error-wachtwoord2" })] }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Description onder het formulierveld plaatsen.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord3", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.input, { id: "wachtwoord3", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord3" }), (0, r.jsx)(n.p, { id: "description-wachtwoord3", children: "Kies een wachtwoord van minimaal 8 karakters lang." })] }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Description boven het formulierveld en foutmelding eronder plaatsen.", children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord4", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord4", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.input, { id: "wachtwoord4", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord4 error-wachtwoord4" }), (0, r.jsx)(n.p, { id: "error-wachtwoord4", children: "Je gekozen wachtwoord is te kort." })] }) }) })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
   function z(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "plaats-descriptions-tussen-label-en-formulierveld", children: "Plaats descriptions tussen label en formulierveld" }), "\n", (0, r.jsx)(n.p, { children: "Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde." }), "\n", (0, r.jsxs)(n.p, { children: ["Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ", (0, r.jsx)(n.a, { href: "https://adrianroselli.com/2017/01/avoid-messages-under-fields.html", children: "Avoid Messages Under Fields" }), " van Adrian Roselli."] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
   function D(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D();
   }
   function F(e) {
    const n = { a: "a", h2: "h2", img: "img", p: "p", strong: "strong", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "houd-het-aanklikbare-gedeelte-groot-genoeg", children: "Houd het aanklikbare gedeelte groot genoeg" }), "\n", (0, r.jsx)(n.p, { children: "Bij een goede koppeling tussen het label en het formulierveld, zijn beide elementen aanklikbaar. Dat maakt het aanklikbare gedeelte groot." }), "\n", (0, r.jsxs)(n.p, { children: ["Een description ertussen verkleint de aanklikbare ruimte. Zorg er daarom voor dat het aanklikbare gedeelte van een formulierveld ", (0, r.jsx)(n.strong, { children: "tenminste" }), " 24 bij 24 pixels is, liever nog groter waar mogelijk. Zodat gebruikers met dikke vingertoppen op een mobiel of met trillende handen met een muis toch een formulierveld kunnen selecteren."] }), "\n", (0, r.jsxs)(n.p, { children: ["Een minimale grootte van het aanklikbare gedeelte is een vereiste volgens WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", children: "2.5.8: Minimale grootte van het aanwijsgebied" }), " (niveau A)."] }), "\n", (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_description_size.png", alt: "Formfield met textbox van 48 pixels hoog, en formfield met radiobuttons van 24 pixels hoog." }) }), "\n", (0, r.jsx)(n.p, { children: "Voor het 'Voorbeeld thema' maken we gebruik van een grootte van 24x24 bij checkboxes en radio buttons. En houden we een grootte van 48x48px aan voor componenten zoals buttons en text inputs. Dit sluit mooi aan bij de spacing scale van het voorbeeld thema." })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(F, { ...e }) }) : F(e);
   }
   var Z = o(35191);
   const H = { title: "Descriptions in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] },
    X = "Descriptions in een formulier",
    B = { id: "richtlijnen/formulieren/alle-richtlijnen/descriptions", title: "Descriptions in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/02-descriptions.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", permalink: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/02-descriptions.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Descriptions in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Descriptions", pagination_label: "Descriptions in een formulier", description: "Richtlijnen voor het toepassen van descriptions in een formulier.", keywords: ["labels", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Labels in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/labels" }, next: { title: "Links in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/links" } },
    K = {},
    L = [];
   function M(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "descriptions-in-een-formulier", children: "Descriptions in een formulier" }), "\n", (0, r.jsx)(n.p, { children: "Bij een formulierveld kun je extra informatie plaatsen, met bijvoorbeeld uitleg over hoe een veld in te vullen, de eisen voor een wachtwoord, foutmeldingen of waarschuwingen." }), "\n", (0, r.jsxs)(n.p, { children: ['We geven deze extra informatie hier de verzamelnaam "descriptions", om aan te sluiten bij de term ', (0, r.jsx)(n.a, { href: "https://www.w3.org/TR/wai-aria-1.2/#dfn-accessible-description", children: "\u201caccessible description\u201d" }), ", die in toegankelijkheidsstandaarden wordt gebruikt."] }), "\n", (0, r.jsx)(n.p, { children: "Belangrijk voor een goede description:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Koppel een description in code aan het formulierveld." }), "\n", (0, r.jsx)(n.li, { children: "Plaats descriptions tussen label en formulierveld." }), "\n", (0, r.jsx)(n.li, { children: "Je kunt ook meerdere descriptions koppelen." }), "\n", (0, r.jsx)(n.li, { children: "Fieldset: Plaats descriptions tussen legend en eerste item." }), "\n", (0, r.jsx)(n.li, { children: "Houd het aanklikbare gedeelte groot genoeg." }), "\n", (0, r.jsx)(n.li, { children: "Houd de description kort en to-the-point." }), "\n"] }), "\n", (0, r.jsx)(c, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(S, {}), "\n", (0, r.jsx)(y, {}), "\n", (0, r.jsx)(f, {}), "\n", (0, r.jsx)(x, {}), "\n", (0, r.jsx)(g, {}), "\n", (0, r.jsx)(h, {}), "\n", (0, r.jsx)(A, {}), "\n", (0, r.jsx)(N, {}), "\n", (0, r.jsx)(j, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(Z.ZP, {})] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(M, { ...e }) }) : M(e);
   }
  },
  35191: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var r = o(11527),
    l = o(47214);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues/new", children: "Open een issue op GitHub" }), " met je suggesties."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  53623: (e, n, o) => {
   o.d(n, { X: () => j });
   var r = o(16532),
    l = o(5341),
    i = o(85630),
    s = o.n(i),
    t = o(63273),
    d = o.n(t),
    a = o(77192),
    c = o.n(a),
    p = (o(50959), o(9995)),
    h = o(4014),
    u = o(62950);
   const g = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    m = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var b = o(11527);
   const k = (e) => {
     let { target: n } = e;
     const o = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(o);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    j = (e) => {
     let n,
      { code: o, copy: i = !1, defaultCollapsed: t = !0, children: a, language: j } = e;
     n = "function" == typeof a ? a() : a;
     const v = c().format(p.uS(o || n), { parser: "html", plugins: [s(), d()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      x = (0, u.Z)();
     return (0, b.jsxs)("div", {
      className: (0, l.Z)(g["nlds-canvas"]),
      children: [
       (0, b.jsx)("div", { className: (0, l.Z)(g["nlds-canvas__example"]), children: (0, b.jsx)(r.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, b.jsx)("div", { className: (0, l.Z)(g["nlds-canvas__toolbar"]), children: (0, b.jsx)(r.zx, { className: (0, l.Z)(g["nlds-canvas__button"], g["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: k, "aria-expanded": !t, "aria-controls": x, children: t ? "Bekijk code" : "Verberg code" }) }),
       (0, b.jsxs)("div", {
        className: (0, l.Z)(g["nlds-canvas__code-block"], !i && g["nlds-canvas__code-block--user-select-none"]),
        id: x,
        hidden: t,
        children: [
         (0, b.jsx)(h.Z, { language: j, style: m, children: v }),
         i &&
          (0, b.jsx)("div", {
           className: (0, l.Z)(g["nlds-canvas__toolbar"]),
           children: (0, b.jsx)(r.zx, {
            className: (0, l.Z)(g["nlds-canvas__button"], g["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(v).catch((e) => console.error("Copy code failed", e));
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
  30036: (e, n, o) => {
   o.d(n, { X: () => a });
   var r = o(17921),
    l = o(57),
    i = o(16532),
    s = o(5341);
   o(50959);
   const t = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var d = o(11527);
   const a = (e) => {
    let { title: n, appearance: o, description: a, children: c } = e;
    const p = "Doen",
     h = "Niet doen";
    return (0, d.jsxs)("div", { className: (0, s.Z)(t["nlds-guideline"], t[`nlds-guideline--${o}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, d.jsxs)("div", { className: (0, s.Z)(t["nlds-guideline__description"]), children: ["dont" === o ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, s.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${o}`]), children: [(0, d.jsx)(r.Z, { className: t["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: t["nlds-guideline__title"], children: h })] }), (0, d.jsx)(i.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, s.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${o}`]), children: [(0, d.jsx)(l.Z, { className: t["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: t["nlds-guideline__title"], children: p })] }), (0, d.jsx)(i.nv, { children: n })] }), a] }), (0, d.jsx)("div", { className: (0, s.Z)(t["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
