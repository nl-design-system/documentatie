"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [33874],
 {
  95648: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => Z, contentTitle: () => U, default: () => C, frontMatter: () => F, metadata: () => X, toc: () => B });
   var l = o(11527),
    r = o(47214),
    i = o(35191),
    a = o(53623),
    t = o(30036);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(t.X, { appearance: "do", title: "Naast een telefoonnummer ook een e-mailadres uitvragen.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "telefoon1", children: "Uw telefoonnummer" }), (0, l.jsx)(n.input, { id: "telefoon1", type: "tel", name: "telefoon", autocomplete: "tel" }), (0, l.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, l.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" })] }) }) }), "\n", (0, l.jsx)(t.X, { appearance: "dont", title: "Alleen een telefoonnummer uitvragen.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "telefoon2", children: "Uw telefoonnummer (verplicht)" }), (0, l.jsx)(n.input, { id: "telefoon2", type: "tel", name: "telefoon", autocomplete: "tel", "aria-required": "true" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "biedt-verschillende-manieren-om-contact-op-te-nemen", children: "Biedt verschillende manieren om contact op te nemen" }), "\n", (0, l.jsx)(n.p, { children: "Vraag niet alleen om contact via een telefoonnummer.\nGebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.\nVoeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chat functionaliteit." })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function g(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(t.X, { appearance: "dont", title: "Herhaling ter bevestiging.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, l.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" }), (0, l.jsx)(n.label, { for: "email2", children: "Herhaal uw e-mailadres" }), (0, l.jsx)(n.input, { id: "email2", type: "email", name: "email", autocomplete: "email" })] }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g(e);
   }
   function h(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "vraag-niet-meerdere-keren-dezelfde-informatie-uit", children: "Vraag niet meerdere keren dezelfde informatie uit" }), "\n", (0, l.jsx)(n.p, { children: "Voorkom herhaling: om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruiksvriendelijker!" }), "\n", (0, l.jsx)(n.p, { children: "Als het essentieel is dat de informatie correct is, zijn er deze alternatieven:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: "toon dan voor het verzenden nog eens de invoer, bijvoorbeeld op een controlepagina;" }), "\n", (0, l.jsx)(n.li, { children: "(als het om een e-mailadres gaat) stuur een e-mail ter bevestiging om de juistheid van het e-mailadres te controleren." }), "\n"] }), "\n", (0, l.jsxs)(n.p, { children: ["Door gegevens niet meerdere keren binnen een formulier uit te vragen voldoe je aan het WCAG-Succescriterium ", (0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html", children: "3.3.7 Overbodige Invoer" }), " (niveau A)."] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
   function v(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(t.X, { appearance: "do", title: "Geef de mogelijkheid korte en lange teksten in te vullen.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "woonplaats1", children: "Uw woonplaats" }), (0, l.jsx)(n.input, { id: "woonplaats1", type: "text", name: "email", autocomplete: "address-level2" })] }) }) }), "\n", (0, l.jsx)(t.X, { appearance: "dont", title: "Limiteer het maximaal aantal in te voeren tekens.", description: "Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "woonplaats2", children: "Uw woonplaats" }), (0, l.jsx)(n.input, { id: "woonplaats2", type: "text", name: "email", maxlength: "20", autocomplete: "address-level2" })] }) }) }), "\n", (0, l.jsx)(t.X, { appearance: "dont", title: "Limiteer het minimaal aantal in te voeren tekens.", description: "Jo, Bo en X willen ook graag hun voornaam invullen.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "voornaam1", children: "Je voornaam" }), (0, l.jsx)(n.input, { id: "voornaam1", type: "text", name: "voornaam", minlength: "3", autocomplete: "given-name" })] }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
   function j(e) {
    const n = { h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "geef-invoervelden-geen-minimummaximum-tekstlengte", children: "Geef invoervelden geen minimum/maximum tekstlengte" }), "\n", (0, l.jsx)(n.p, { children: "Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies." })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j(e);
   }
   function f(e) {
    return (0, l.jsx)(l.Fragment, {});
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(f, { ...e }) }) : f();
   }
   function _(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "check-of-informatie-\xe8cht-nodig-is", children: "Check of informatie \xe8cht nodig is" }), "\n", (0, l.jsx)(n.p, { children: "Kortere formulieren kunnen sneller worden ingevuld. Ga dus per vraag na of deze informatie echt nodig is." }), "\n", (0, l.jsx)(n.p, { children: "Zo is het vaak onnodig om te vragen naar een straatnaam, als huisnummer en postcode al bekend zijn. Is het echt belangrijk om te weten of iemand een man/vrouw/andere is?" }), "\n", (0, l.jsxs)(n.p, { children: ["Is het nodig voor het afhandelen van het formulier dat gebruiker via DigiD inlogt, zodat ook het burgerservicenummer van de verzender bekend wordt? ", (0, l.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "Uitvragen van een BSN" }), " is aan wettelijke richtlijnen gebonden."] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(_, { ...e }) }) : _(e);
   }
   function y(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(t.X, { appearance: "do", title: "Leg het doel uit.", description: "Met uitleg weet de gebruiker waar die aan toe is.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "email", children: "E-mailadres" }), (0, l.jsx)(n.p, { id: "email-description", children: "We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen." }), (0, l.jsx)(n.input, { "aria-describedby": "email-description", autocomplete: "email", id: "email", type: "email" })] }) }) }), "\n", (0, l.jsx)(t.X, { appearance: "dont", title: "Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.", children: (0, l.jsx)(a.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "bsn", children: "Burgerservicenummer" }), (0, l.jsx)(n.input, { id: "bsn", type: "text" })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y(e);
   }
   function S(e) {
    const n = { h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "leg-uit-waarom-informatie-nodig-is", children: "Leg uit waarom informatie nodig is" }), "\n", (0, l.jsx)(n.p, { children: "Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven." }), "\n", (0, l.jsx)(n.p, { children: "Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen." })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(S, { ...e }) }) : S(e);
   }
   const F = { title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] },
    U = "Uit te vragen informatie in een formulier",
    X = { id: "richtlijnen/formulieren/alle-richtlijnen/questions", title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor uit te vragen informatie in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/06-questions.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/vragen", permalink: "/richtlijnen/formulieren/alle-richtlijnen/vragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/06-questions.mdx", tags: [], version: "current", sidebarPosition: 6, frontMatter: { title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Placeholders in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/placeholders" }, next: { title: "Voorkom fouten in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker" } },
    Z = {},
    B = [];
   function A(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(n.h1, { id: "uit-te-vragen-informatie-in-een-formulier", children: "Uit te vragen informatie in een formulier" }), "\n", (0, l.jsx)(n.p, { children: "Welke informatie heb je nodig van je gebruiker? En welke niet? Waarom heb je bepaalde informatie nodig en wat doe je ermee? Overweeg dit zorgvuldig bij het samenstellen van een formulier." }), "\n", (0, l.jsx)(n.p, { children: "Bij het uitvragen van informatie in een formulier zijn de volgende punten belangrijk:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: "Leg uit waarom informatie nodig is." }), "\n", (0, l.jsx)(n.li, { children: "Check of informatie \xe8cht nodig is." }), "\n", (0, l.jsx)(n.li, { children: "Biedt verschillende manieren om contact op te nemen." }), "\n", (0, l.jsx)(n.li, { children: "Vraag niet meerdere keren dezelfde informatie uit." }), "\n", (0, l.jsx)(n.li, { children: "Geef invoervelden geen minimum en/of maximum aantal in te voeren tekens." }), "\n"] }), "\n", (0, l.jsx)(N, {}), "\n", (0, l.jsx)(z, {}), "\n", (0, l.jsx)(w, {}), "\n", (0, l.jsx)(x, {}), "\n", (0, l.jsx)(m, {}), "\n", (0, l.jsx)(d, {}), "\n", (0, l.jsx)(p, {}), "\n", (0, l.jsx)(u, {}), "\n", (0, l.jsx)(k, {}), "\n", (0, l.jsx)(b, {}), "\n", (0, l.jsx)(i.ZP, {})] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(A, { ...e }) }) : A(e);
   }
  },
  35191: (e, n, o) => {
   o.d(n, { ZP: () => a });
   var l = o(11527),
    r = o(47214);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues/428", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  53623: (e, n, o) => {
   o.d(n, { X: () => j });
   var l = o(16532),
    r = o(5341),
    i = o(85630),
    a = o.n(i),
    t = o(63273),
    s = o.n(t),
    d = o(77192),
    c = o.n(d),
    m = (o(50959), o(9995)),
    g = o(4014),
    u = o(62950);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    p = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var v = o(11527);
   const b = (e) => {
     let { target: n } = e;
     const o = n.getAttribute("aria-controls"),
      l = n.ownerDocument.getElementById(o);
     (l.hidden = !l.hidden), n.setAttribute("aria-expanded", !l.hidden), (n.innerText = l.hidden ? "Bekijk code" : "Verberg code");
    },
    j = (e) => {
     let n,
      { code: o, copy: i = !1, defaultCollapsed: t = !0, children: d, language: j } = e;
     n = "function" == typeof d ? d() : d;
     const k = c().format(m.uS(o || n), { parser: "html", plugins: [a(), s()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      f = (0, u.Z)();
     return (0, v.jsxs)("div", {
      className: (0, r.Z)(h["nlds-canvas"]),
      children: [
       (0, v.jsx)("div", { className: (0, r.Z)(h["nlds-canvas__example"]), children: (0, v.jsx)(l.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, v.jsx)("div", { className: (0, r.Z)(h["nlds-canvas__toolbar"]), children: (0, v.jsx)(l.zx, { className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: b, "aria-expanded": !t, "aria-controls": f, children: t ? "Bekijk code" : "Verberg code" }) }),
       (0, v.jsxs)("div", {
        className: (0, r.Z)(h["nlds-canvas__code-block"], !i && h["nlds-canvas__code-block--user-select-none"]),
        id: f,
        hidden: t,
        children: [
         (0, v.jsx)(g.Z, { language: j, style: p, children: k }),
         i &&
          (0, v.jsx)("div", {
           className: (0, r.Z)(h["nlds-canvas__toolbar"]),
           children: (0, v.jsx)(l.zx, {
            className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
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
  30036: (e, n, o) => {
   o.d(n, { X: () => d });
   var l = o(17921),
    r = o(57),
    i = o(16532),
    a = o(5341);
   o(50959);
   const t = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = o(11527);
   const d = (e) => {
    let { title: n, appearance: o, description: d, children: c } = e;
    const m = "Doen",
     g = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, a.Z)(t["nlds-guideline"], t[`nlds-guideline--${o}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, a.Z)(t["nlds-guideline__description"]), children: ["dont" === o ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, a.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${o}`]), children: [(0, s.jsx)(l.Z, { className: t["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: t["nlds-guideline__title"], children: g })] }), (0, s.jsx)(i.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, a.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${o}`]), children: [(0, s.jsx)(r.Z, { className: t["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: t["nlds-guideline__title"], children: m })] }), (0, s.jsx)(i.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, a.Z)(t["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
