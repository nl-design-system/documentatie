"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5701],
 {
  6870: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => S, contentTitle: () => w, default: () => F, frontMatter: () => _, metadata: () => z, toc: () => N });
   var r = l(1527),
    o = l(7214),
    t = l(3460),
    i = l(36);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.X, { appearance: "do", title: "Geen placeholder gebruiken als het label duidelijk genoeg is.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "voornaam1", children: "Je voornaam" }), (0, r.jsx)(n.input, { autocomplete: "given-name", id: "voornaam1", name: "voornaam", type: "text" })] }) }) }), "\n", (0, r.jsx)(i.X, { appearance: "dont", title: "De labeltekst herhalen in de placeholder.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "voornaam2", children: "Voornaam" }), (0, r.jsx)(n.input, { autocomplete: "given-name", id: "voornaam2", name: "voornaam", placeholder: "Voornaam", type: "text" })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "voorkom-verwarring-bij-de-gebruiker", children: "Voorkom verwarring bij de gebruiker" }), "\n", (0, r.jsxs)(n.p, { children: ["De placeholder kan ook voor verwarring zorgen bij gebruikers. Is een veld al ingevuld? De combinatie van een label met een ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", children: "description" }), " is een betere manier om de gebruiker te vertellen hoe een veld in te vullen. Herhaal nooit de labeltekst in de placeholder, dat geeft geen extra informatie en is dus zinloos."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zie het onderzoek ", (0, r.jsx)(n.a, { href: "https://www.nngroup.com/articles/form-design-placeholders/", children: "Placeholders in Form Fields Are Harmful" }), " van de Nielsen Norman Group en ", (0, r.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/", children: "The problem with placeholders and what to do instead" }), " van Adam Silver."] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.X, { appearance: "do", title: "De placeholder opacity: 1 meegeven in de CSS.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "auto", children: "Welk auto rij je?" }), (0, r.jsx)(n.input, { class: "nlds-opacity", id: "auto", name: "merk", type: "text", placeholder: "Vul een merknaam in" })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", pre: "pre", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst", children: "Zorg voor een goed kleurcontrast van de placeholdertekst" }), "\n", (0, r.jsx)(n.p, { children: "Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders." }), "\n", (0, r.jsxs)(n.p, { children: ["Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ", (0, r.jsx)(n.code, { children: "opacity: 1" }), " toe voor de placeholder."] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-css!", children: "::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n" }) }), "\n", (0, r.jsxs)(n.p, { children: ["Zie ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder", children: "::placeholder - CSS: Cascading Style Sheets" }), ", op MDN."] }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: "Tip:" }), " De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117)."] }), "\n", (0, r.jsxs)(n.p, { children: ["Wanneer je zorgt voor voldoende kleurcontrast tussen placeholder en achtergrond, voldoe je aan het WCAG-succescriterium: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", children: "Contrast (minimum)" }), " (niveau AA)."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.X, { appearance: "do", title: "Het label altijd tonen en een description gebruiken als aanvullende informatie.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "lievelingskleur1", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.p, { id: "description-kleur1", children: "Vul de naam van een kleur in." }), (0, r.jsx)(n.input, { "aria-describedby": "description-kleur1", id: "lievelingskleur1", name: "lievelingskleur", type: "text" })] }) }) }), "\n", (0, r.jsx)(i.X, { appearance: "do", title: "Het label altijd tonen en een placeholder als korte hint gebruiken.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "lievelingskleur2", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.input, { id: "lievelingskleur2", type: "text", name: "lievelingskleur", placeholder: "Vul een kleurnaam in" })] }) }) }), "\n", (0, r.jsx)(i.X, { appearance: "dont", title: "Het label onzichtbaar maken.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { class: "sr-only", for: "lievelingskleur3", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.input, { id: "lievelingskleur3", name: "lievelingskleur", placeholder: "Wat is je lievelingskleur?", type: "text" })] }) }) }), "\n", (0, r.jsx)(i.X, { appearance: "dont", title: "Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "lievelingskleur4", children: "Wat is je lievelingskleur?" }), (0, r.jsx)(n.input, { id: "lievelingskleur4", name: "lievelingskleur", placeholder: "Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.", type: "text" })] }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "een-placeholder-is-geen-vervanger-van-een-label", children: "Een placeholder is geen vervanger van een label" }), "\n", (0, r.jsx)(n.p, { children: "De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld." }), "\n", (0, r.jsx)(n.p, { children: "Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen." }), "\n", (0, r.jsx)(n.p, { children: "Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt." }), "\n", (0, r.jsxs)(n.p, { children: ["Door het permanent goed zichtbaar tonen van het label voldoe je aan het WCAG-succescriterium 3.3.2: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions", children: "Labels of instructies" }), " (niveau A). Meer hierover bij de ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/links", children: "richtlijnen over labels" }), "."] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function x(e) {
    const n = { button: "button", input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(i.X, { appearance: "do", title: "De placeholder samen met tekst van de submitknop gebruiken zichtbaar label in een kort zoekformulier.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { class: "sr-only", for: "header-search", children: "Zoek" }), (0, r.jsx)(n.input, { id: "header-search", placeholder: "Zoek", type: "search" }), (0, r.jsx)(n.button, { children: "Zoek" })] }) }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function y(e) {
    const n = { h3: "h3", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h3, { id: "placeholders-en-de-zoekfunctie", children: "Placeholders en de zoekfunctie" }), "\n", (0, r.jsx)(n.p, { children: "Een gebruikelijke opzet voor een zoekoptie in de header is:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "een onzichtbaar label;" }), "\n", (0, r.jsx)(n.li, { children: "de placeholder als zichtbaar label;" }), "\n", (0, r.jsx)(n.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht." })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   const _ = { title: "Placeholders in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Placeholders", pagination_label: "Placeholders in een formulier", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", keywords: ["placeholders", "formulier", "design", "code"] },
    w = "Placeholders in een formulier",
    z = { id: "richtlijnen/formulieren/alle-richtlijnen/placeholders", title: "Placeholders in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/05-placeholders.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/placeholders", permalink: "/richtlijnen/formulieren/alle-richtlijnen/placeholders", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/05-placeholders.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Placeholders in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Placeholders", pagination_label: "Placeholders in een formulier", description: "Richtlijnen voor het ontwerp en de code van placeholders in een formulier.", keywords: ["placeholders", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Buttons in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/buttons" }, next: { title: "Uit te vragen informatie in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/vragen" } },
    S = {},
    N = [];
   function Z(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "placeholders-in-een-formulier", children: "Placeholders in een formulier" }), "\n", (0, r.jsx)(n.p, { children: "Een placeholder geeft de gebruiker een korte hint over het verwachte type gegevens dat in het formulierveld moet worden." }), "\n", (0, r.jsxs)(n.p, { children: ["Een ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels/", children: "label" }), " vertelt ", (0, r.jsx)(n.strong, { children: "wat" }), " je moet invullen en een ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder", children: "placeholder" }), " vertelt wat voor ", (0, r.jsx)(n.strong, { children: "soort gegevens" }), ' in een veld wordt verwacht. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, r.jsx)(n.a, { href: "mailto:naam@voorbeeld.com", children: "naam@voorbeeld.com" }), '".'] }), "\n", (0, r.jsx)(n.p, { children: "Voor de toegankelijkheid en gebruiksvriendelijkheid van een placeholder is het volgende van belang:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Een placeholder is geen vervanger van een label." }), "\n", (0, r.jsx)(n.li, { children: "Voorkom verwarring bij de gebruiker." }), "\n", (0, r.jsx)(n.li, { children: "Zorg voor een voldoende kleurcontract voor de placeholdertekst." }), "\n"] }), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(j, {}), "\n", (0, r.jsx)(f, {}), "\n", (0, r.jsx)(k, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(a, {}), "\n", (0, r.jsx)(m, {}), "\n", (0, r.jsx)(p, {})] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Z, { ...e }) }) : Z(e);
   }
  },
  3460: (e, n, l) => {
   l.d(n, { X: () => v });
   var r = l(6532),
    o = l(6259),
    t = l(1910),
    i = l(9560),
    s = l(486),
    a = l(9267),
    c = l(495),
    d = l(959),
    h = l(9995),
    p = l(2950);
   const u = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = l(1179),
    g = l(1527);
   const j = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(l);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: v = !0, children: b, language: x } = e,
      k = "function" == typeof b ? b() : b,
      y = "function" == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
      f = "string" == typeof n ? n : h.uS(y || k),
      [_, w] = (0, d.useState)(f);
     (0, d.useEffect)(() => {
      (async () => {
       (_ = await c.ZP.format(f, { parser: x, plugins: [t.Z, i.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), w(_);
      })();
     }, [f]);
     const z = (0, p.Z)();
     return (0, g.jsxs)("div", {
      className: (0, o.Z)(u["nlds-canvas"]),
      children: [
       (0, g.jsx)("div", { className: (0, o.Z)(u["nlds-canvas__example"]), children: (0, g.jsx)(r.pu, { className: "voorbeeld-theme", children: k }) }),
       (0, g.jsx)("div", { className: (0, o.Z)(u["nlds-canvas__toolbar"]), children: (0, g.jsx)(r.zx, { className: (0, o.Z)(u["nlds-canvas__button"], u["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: j, "aria-expanded": !v, "aria-controls": z, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, g.jsxs)("div", {
        className: (0, o.Z)(u["nlds-canvas__code-block"], !l && u["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: v,
        children: [
         (0, g.jsx)(m.u, { syntax: x, textContent: _, trim: !0 }),
         l &&
          (0, g.jsx)("div", {
           className: (0, o.Z)(u["nlds-canvas__toolbar"]),
           children: (0, g.jsx)(r.zx, {
            className: (0, o.Z)(u["nlds-canvas__button"], u["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(_).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, l) => {
   l.d(n, { u: () => s });
   var r = l(6532),
    o = l(2425);
   l(959);
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
   var i = l(1527);
   function s(e) {
    let { lineNumber: n, syntax: l, textContent: s, trim: a } = e,
     c = s;
    return (
     a && (c = c.trim()),
     (0, i.jsx)(o.y$, {
      theme: t,
      code: c,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: o, getLineProps: t, getTokenProps: s } = e;
       return (0, i.jsx)(r.dn, { style: l, children: o.map((e, l) => (0, i.jsxs)("span", { ...t({ line: e }), children: [n && (0, i.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, i.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  36: (e, n, l) => {
   l.d(n, { X: () => c });
   var r = l(5893),
    o = l(1139),
    t = l(6532),
    i = l(6259);
   l(959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = l(1527);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d } = e;
    const h = "Doen",
     p = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, i.Z)(s["nlds-guideline"], s[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, i.Z)(s["nlds-guideline__description"]), children: ["dont" === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(r.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: p })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }), c] }), (0, a.jsx)("div", { className: (0, i.Z)(s["nlds-guideline__example"]), children: d })] });
   };
  },
 },
]);
