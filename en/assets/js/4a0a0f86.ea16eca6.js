"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9872],
 {
  3324: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var l = t(11527),
    o = t(47214);
   function s(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88848: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => b, contentTitle: () => m, default: () => j, frontMatter: () => p, metadata: () => h, toc: () => g });
   var l = t(11527),
    o = t(47214),
    s = t(73460),
    r = t(30036);
   function i(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(r.X, { appearance: "do", title: "Het autocomplete-attribuut gebruiken.", children: (0, l.jsx)(s.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "voornaam", children: "Je voornaam" }), (0, l.jsx)(n.input, { id: "voornaam", type: "text", autocomplete: "given-name" })] }) }) }), "\n", (0, l.jsx)(r.X, { appearance: "dont", title: "Het autocomplete-attribuut niet gebruiken.", description: "Het input type alleen is hier niet voldoende om te voldoen aan WCAG.", children: (0, l.jsx)(s.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "telefoon", children: "Uw telefoonnummer" }), (0, l.jsx)(n.input, { id: "telefoon", type: "tel" })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function c(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd", children: "Gebruik autocomplete als er een waarde voor is gedefinieerd" }), "\n", (0, l.jsxs)(n.p, { children: ["WCAG bevat een volledige ", (0, l.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#input-purposes", children: "lijst van waarden voor autocomplete" }), ". Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst."] }), "\n", (0, l.jsxs)(n.p, { children: ["Jules Ernst van 200 OK heeft van deze lijst een ", (0, l.jsx)(n.a, { href: "https://www.200ok.nl/tips/autocomplete/", children: "Nederlandse interpretatie" }), " gemaakt."] }), "\n", (0, l.jsxs)(n.p, { children: ["Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de ", (0, l.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over labels" }), "."] }), "\n", (0, l.jsxs)(n.p, { children: ["Het gebruik van het juiste ", (0, l.jsx)(n.code, { children: "autocomplete" }), "-attribuut is een manier om te voldoen aan het WCAG-succescriterium ", (0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose", children: "1.3.5 Identificeer het doel van de input" }), " (niveau AA)."] }), "\n", (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: "Let op" }), ": ", (0, l.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete", children: "aria-autocomplete" }), " heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. ", (0, l.jsx)(n.code, { children: "aria-autocomplete" }), " wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten."] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   var u = t(3324);
   const p = { title: "Autocomplete | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Autocomplete", pagination_label: "Autocomplete in een formulier", description: "Richtlijnen voor het gebruik van het autocomplete-attribuut.", slug: "autocomplete", keywords: ["informatie", "formulier", "design", "code"] },
    m = "Autocomplete",
    h = { id: "richtlijnen/formulieren/alle-richtlijnen/autocomplete", title: "Autocomplete | Richtlijnen | NL Design System", description: "Richtlijnen voor het gebruik van het autocomplete-attribuut.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/autocomplete.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/autocomplete", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/autocomplete", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/autocomplete.mdx", tags: [], version: "current", frontMatter: { title: "Autocomplete | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Autocomplete", pagination_label: "Autocomplete in een formulier", description: "Richtlijnen voor het gebruik van het autocomplete-attribuut.", slug: "autocomplete", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Alle richtlijnen (beta)", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen" }, next: { title: "Buttons in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/buttons" } },
    b = {},
    g = [];
   function v(e) {
    const n = { a: "a", code: "code", h1: "h1", p: "p", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(n.h1, { id: "autocomplete", children: "Autocomplete" }), "\n", (0, l.jsxs)(n.p, { children: ["Het ", (0, l.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete", children: "HTML-attribuut autocomplete" }), " vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld."] }), "\n", (0, l.jsxs)(n.p, { children: ["Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het ", (0, l.jsx)(n.code, { children: "autocomplete" }), " attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser."] }), "\n", (0, l.jsx)(n.p, { children: "Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal." }), "\n", (0, l.jsx)(d, {}), "\n", (0, l.jsx)(a, {}), "\n", (0, l.jsx)(u.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
  },
  73460: (e, n, t) => {
   t.d(n, { X: () => j });
   var l = t(16532),
    o = t(86259),
    s = t(11910),
    r = t(59560),
    i = t(80486),
    a = t(69267),
    c = t(80495),
    d = t(50959),
    u = t(9995);
   const p = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = t(41179),
    h = t(11527);
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: p["nlds-canvas__example-surface"], children: (0, h.jsx)(l.BB, { className: (0, o.Z)("utrecht-document--surface", p["nlds-canvas__example-document"]), children: (0, h.jsx)(l.nv, { className: p["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   b.displayName = "ParagraphContainer";
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: p["nlds-canvas__example-surface"], children: (0, h.jsx)(l.BB, { className: (0, o.Z)("utrecht-document--surface", p["nlds-canvas__example-document"]), children: n }) });
   };
   g.displayName = "DocumentContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: p["nlds-canvas__example-surface"], children: n });
   };
   v.displayName = "SurfaceContainer";
   const j = (e) => {
    let { code: n, copy: t = !1, defaultExpandedCode: j = !1, displayCode: _ = !0, children: y, container: x = "document", language: f, designTokens: k } = e,
     w = "function" == typeof y ? y() : y,
     N = "function" == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     A = "string" == typeof n ? n : u.uS(N || w),
     [Z, C] = (0, d.useState)(A),
     [S, z] = (0, d.useState)(j);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(A, { parser: f, plugins: [s.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), C(Z);
     })();
    }, [A]);
    const P = (0, d.useId)();
    let D = d.Fragment;
    return (
     "paragraph" === x ? (D = b) : "document" === x ? (D = g) : "surface" === x && (D = v),
     (0, h.jsxs)("div", {
      className: (0, o.Z)(p["nlds-canvas"]),
      children: [
       w && (0, h.jsx)("div", { className: (0, o.Z)(p["nlds-canvas__example"]), children: (0, h.jsx)("div", { className: "voorbeeld-theme", style: k, children: (0, h.jsx)(D, { children: (0, h.jsx)(l.pu, { children: w }) }) }) }),
       _ &&
        (0, h.jsx)("div", {
         className: (0, o.Z)(p["nlds-canvas__toolbar"]),
         children: (0, h.jsx)(l.zx, {
          className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           z(!S);
          },
          "aria-expanded": S,
          "aria-controls": P,
          children: S ? "Verberg code" : "Bekijk code",
         }),
        }),
       _ &&
        (0, h.jsxs)("div", {
         className: (0, o.Z)(p["nlds-canvas__code-block"], !t && p["nlds-canvas__code-block--user-select-none"]),
         id: P,
         hidden: !S,
         children: [
          (0, h.jsx)(m.u, { syntax: f, textContent: Z, trim: !0 }),
          t &&
           (0, h.jsx)("div", {
            className: (0, o.Z)(p["nlds-canvas__toolbar"]),
            children: (0, h.jsx)(l.zx, {
             className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error("Copy code failed", e));
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
   t.d(n, { u: () => i });
   var l = t(16532),
    o = t(2425);
   t(50959);
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
   var r = t(11527);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: a } = e,
     c = i;
    return (
     a && (c = c.trim()),
     (0, r.jsx)(o.y$, {
      theme: s,
      code: c,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(l.dn, { style: t, children: o.map((e, t) => (0, r.jsxs)("span", { ...s({ line: e }), children: [n && (0, r.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, r.jsx)("span", { ...i({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  30036: (e, n, t) => {
   t.d(n, { X: () => c });
   var l = t(9842),
    o = t(91406),
    s = t(16532),
    r = t(86259);
   t(50959);
   const i = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(11527);
   const c = (e) => {
    let { title: n, appearance: t, description: c, children: d, figure: u } = e;
    const p = "Doen",
     m = "Niet doen",
     h = u ? "figure" : "div",
     b = u ? "figcaption" : "div";
    return (0, a.jsxs)(h, { className: (0, r.Z)(i["nlds-guideline"], i[`nlds-guideline--${t}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(b, { className: (0, r.Z)(i["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: i["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: i["nlds-guideline__title"], children: m })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: i["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: i["nlds-guideline__title"], children: p })] }), (0, a.jsx)(s.nv, { children: n })] }), c] }), (0, a.jsx)("div", { className: (0, r.Z)(i["nlds-guideline__example"]), children: d })] });
   };
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var l = t(50959);
   const o = {},
    s = l.createContext(o);
   function r(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
