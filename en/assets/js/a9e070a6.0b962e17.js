"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [55701],
 {
  17370: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => S, contentTitle: () => y, default: () => Z, frontMatter: () => w, metadata: () => z, toc: () => N });
   var o = l(11527),
    r = l(47214),
    a = l(53623),
    i = l(30036);
   function t(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(i.X, { appearance: "do", title: "Geen placeholder gebruiken als het label duidelijk genoeg is.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "voornaam1", children: "Je voornaam" }), (0, o.jsx)(n.input, { autocomplete: "given-name", id: "voornaam1", name: "voornaam", type: "text" })] }) }) }), "\n", (0, o.jsx)(i.X, { appearance: "dont", title: "De labeltekst herhalen in de placeholder", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "voornaam2", children: "Voornaam" }), (0, o.jsx)(n.input, { autocomplete: "given-name", id: "voornaam2", name: "voornaam", placeholder: "Voornaam", type: "text" })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
   function d(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "voorkom-verwarring-bij-de-gebruiker", children: "Voorkom verwarring bij de gebruiker" }), "\n", (0, o.jsxs)(n.p, { children: ["De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het een veld al ingevuld? De combinatie van een label met een ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", children: "description" }), " is een betere manier om de gebruiker te vertellen hoe een veld in te vullen. Herhaal nooit de labeltekst in de placeholder, dat geeft geen extra informatie en is dus zinloos."] }), "\n", (0, o.jsxs)(n.p, { children: ["Zie het onderzoek ", (0, o.jsx)(n.a, { href: "https://www.nngroup.com/articles/form-design-placeholders/", children: "Placeholders in Form Fields Are Harmful" }), " van de Nielsen Norman Group en ", (0, o.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/", children: "The problem with placeholders and what to do instead" }), " van Adam Silver."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(i.X, { appearance: "do", title: "De placeholder opacity: 1 meegeven in de CSS.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "auto", children: "Welk auto rij je?" }), (0, o.jsx)(n.input, { class: "nlds-opacity", id: "auto", name: "merk", type: "text", placeholder: "Vul een merknaam in" })] }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", pre: "pre", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst", children: "Zorg voor een goed kleurcontrast van de placeholdertekst" }), "\n", (0, o.jsx)(n.p, { children: "Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders." }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ", (0, o.jsx)(n.code, { children: "opacity: 1" }), " toe voor de placeholder."] }), "\n", (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: "language-css!", children: "::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n" }) }), "\n", (0, o.jsxs)(n.p, { children: ["Zie ", (0, o.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder", children: "::placeholder - CSS: Cascading Style Sheets" }), ", op MDN."] }), "\n", (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: "Tip:" }), " De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117)."] }), "\n", (0, o.jsxs)(n.p, { children: ["Wanneer je zorgt voor voldoende kleurcontrast tussen placeholder en achtergrond, voldoe je aan het WCAG-succescriterium: ", (0, o.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", children: "Contrast (minimum)" }), " (niveau AA)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function b(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(i.X, { appearance: "do", title: "Het label altijd tonen en een description gebruiken als aanvullende informatie.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "lievelingskleur1", children: "Wat is je lievelingskleur?" }), (0, o.jsx)(n.p, { id: "description-kleur1", children: "Vul de naam van een kleur in." }), (0, o.jsx)(n.input, { "aria-describedby": "description-kleur1", id: "lievelingskleur1", name: "lievelingskleur", type: "text" })] }) }) }), "\n", (0, o.jsx)(i.X, { appearance: "do", title: "Het label altijd tonen en een placeholder als korte hint gebruiken.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "lievelingskleur2", children: "Wat is je lievelingskleur?" }), (0, o.jsx)(n.input, { id: "lievelingskleur2", type: "text", name: "lievelingskleur", placeholder: "Vul een kleurnaam in" })] }) }) }), "\n", (0, o.jsx)(i.X, { appearance: "dont", title: "Het label onzichtbaar maken.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { class: "sr-only", for: "lievelingskleur3", children: "Wat is je lievelingskleur?" }), (0, o.jsx)(n.input, { id: "lievelingskleur3", name: "lievelingskleur", placeholder: "Wat is je lievelingskleur?", type: "text" })] }) }) }), "\n", (0, o.jsx)(i.X, { appearance: "dont", title: "Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: "lievelingskleur4", children: "Wat is je lievelingskleur?" }), (0, o.jsx)(n.input, { id: "lievelingskleur4", name: "lievelingskleur", placeholder: "Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.", type: "text" })] }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: "een-placeholder-is-geen-vervanger-van-een-label", children: "Een placeholder is geen vervanger van een label" }), "\n", (0, o.jsx)(n.p, { children: "De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld." }), "\n", (0, o.jsx)(n.p, { children: "Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen." }), "\n", (0, o.jsx)(n.p, { children: "Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt." }), "\n", (0, o.jsxs)(n.p, { children: ["Door het permanent goed zichtbaar tonen van het label voldoe je aan het WCAG-succescriterium 3.3.2: ", (0, o.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions", children: "Labels of instructies" }), " (niveau A). Meer hierover bij de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/links", children: "richtlijnen over labels" }), "."] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v(e);
   }
   function j(e) {
    const n = { button: "button", input: "input", label: "label", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(i.X, { appearance: "do", title: "De placeholder samen met tekst van de submitknop gebruiken zichtbaar label in een kort zoekformulier.", children: (0, o.jsx)(a.X, { language: "html", children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { class: "sr-only", for: "header-search", children: "Zoek" }), (0, o.jsx)(n.input, { id: "header-search", placeholder: "Zoek", type: "search" }), (0, o.jsx)(n.button, { children: "Zoek" })] }) }) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j(e);
   }
   function f(e) {
    const n = { h3: "h3", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h3, { id: "placeholders-en-de-zoekfunctie", children: "Placeholders en de zoekfunctie" }), "\n", (0, o.jsx)(n.p, { children: "Een gebruikelijke opzet voor een zoekoptie in de header is:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "een onzichtbaar label;" }), "\n", (0, o.jsx)(n.li, { children: "de placeholder als zichtbaar label;" }), "\n", (0, o.jsx)(n.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), "\n"] }), "\n", (0, o.jsx)(n.p, { children: "Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht." })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
   }
   const w = { title: "Placeholders in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Placeholders", pagination_label: "Placeholders in een formulier", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", keywords: ["placeholders", "formulier", "design", "code"] },
    y = "Placeholders in een formulier",
    z = { id: "richtlijnen/formulieren/alle-richtlijnen/placeholders", title: "Placeholders in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/05-placeholders.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/placeholders", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/placeholders", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/05-placeholders.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Placeholders in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Placeholders", pagination_label: "Placeholders in een formulier", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", keywords: ["placeholders", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Buttons in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/buttons" }, next: { title: "Uit te vragen informatie in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/vragen" } },
    S = {},
    N = [];
   function F(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "placeholders-in-een-formulier", children: "Placeholders in een formulier" }), "\n", (0, o.jsx)(n.p, { children: "Een placeholder geeft de gebruiker een korte hint over het verwachte type gegevens dat in het formulierveld moet worden." }), "\n", (0, o.jsxs)(n.p, { children: ["Een ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels/", children: "label" }), " vertelt ", (0, o.jsx)(n.strong, { children: "wat" }), " je moet invullen en een ", (0, o.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder", children: "placeholder" }), " vertelt wat voor ", (0, o.jsx)(n.strong, { children: "soort gegevens" }), ' in een veld wordt verwacht. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, o.jsx)(n.a, { href: "mailto:naam@voorbeeld.com", children: "naam@voorbeeld.com" }), '".'] }), "\n", (0, o.jsx)(n.p, { children: "Voor de toegankelijkheid en gebruiksvriendelijkheid van een placeholder is het volgende van belang:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsx)(n.li, { children: "Een placeholder is geen vervanger van een label." }), "\n", (0, o.jsx)(n.li, { children: "Voorkom verwarring bij de gebruiker." }), "\n", (0, o.jsx)(n.li, { children: "Zorg voor een voldoende kleurcontract voor de placeholdertekst." }), "\n"] }), "\n", (0, o.jsx)(k, {}), "\n", (0, o.jsx)(m, {}), "\n", (0, o.jsx)(_, {}), "\n", (0, o.jsx)(x, {}), "\n", (0, o.jsx)(s, {}), "\n", (0, o.jsx)(c, {}), "\n", (0, o.jsx)(g, {}), "\n", (0, o.jsx)(u, {})] });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(F, { ...e }) }) : F(e);
   }
  },
  53623: (e, n, l) => {
   l.d(n, { X: () => k });
   var o = l(16532),
    r = l(5341),
    a = l(85630),
    i = l.n(a),
    t = l(63273),
    c = l.n(t),
    d = l(77192),
    s = l.n(d),
    h = (l(50959), l(9995)),
    u = l(4014),
    p = l(62950);
   const g = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    b = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var m = l(11527);
   const v = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    k = (e) => {
     let n,
      { code: l, copy: a = !1, defaultCollapsed: t = !0, children: d, language: k } = e;
     n = "function" == typeof d ? d() : d;
     const j = s().format(h.uS(l || n), { parser: "html", plugins: [i(), c()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      x = (0, p.Z)();
     return (0, m.jsxs)("div", {
      className: (0, r.Z)(g["nlds-canvas"]),
      children: [
       (0, m.jsx)("div", { className: (0, r.Z)(g["nlds-canvas__example"]), children: (0, m.jsx)(o.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, m.jsx)("div", { className: (0, r.Z)(g["nlds-canvas__toolbar"]), children: (0, m.jsx)(o.zx, { className: (0, r.Z)(g["nlds-canvas__button"], g["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: v, "aria-expanded": !t, "aria-controls": x, children: t ? "Bekijk code" : "Verberg code" }) }),
       (0, m.jsxs)("div", {
        className: (0, r.Z)(g["nlds-canvas__code-block"], !a && g["nlds-canvas__code-block--user-select-none"]),
        id: x,
        hidden: t,
        children: [
         (0, m.jsx)(u.Z, { language: k, style: b, children: j }),
         a &&
          (0, m.jsx)("div", {
           className: (0, r.Z)(g["nlds-canvas__toolbar"]),
           children: (0, m.jsx)(o.zx, {
            className: (0, r.Z)(g["nlds-canvas__button"], g["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(j).catch((e) => console.error("Copy code failed", e));
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
   var o = l(17921),
    r = l(57),
    a = l(16532),
    i = l(5341);
   l(50959);
   const t = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var c = l(11527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: s } = e;
    const h = "Doen",
     u = "Niet doen";
    return (0, c.jsxs)("div", { className: (0, i.Z)(t["nlds-guideline"], t[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, c.jsxs)("div", { className: (0, i.Z)(t["nlds-guideline__description"]), children: ["dont" === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.nv, { className: (0, i.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { className: t["nlds-guideline__icon"] }), (0, c.jsx)("span", { className: t["nlds-guideline__title"], children: u })] }), (0, c.jsx)(a.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.nv, { className: (0, i.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(r.Z, { className: t["nlds-guideline__icon"] }), (0, c.jsx)("span", { className: t["nlds-guideline__title"], children: h })] }), (0, c.jsx)(a.nv, { children: n })] }), d] }), (0, c.jsx)("div", { className: (0, i.Z)(t["nlds-guideline__example"]), children: s })] });
   };
  },
 },
]);
