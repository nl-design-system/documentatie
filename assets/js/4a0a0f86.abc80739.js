"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9872],
 {
  3324: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var l = t(1527),
    o = t(7214);
   function r(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  8848: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => b, contentTitle: () => m, default: () => j, frontMatter: () => p, metadata: () => h, toc: () => g });
   var l = t(1527),
    o = t(7214),
    r = t(3460),
    i = t(36);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(i.X, { appearance: "do", title: "Het autocomplete-attribuut gebruiken.", children: (0, l.jsx)(r.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "voornaam", children: "Je voornaam" }), (0, l.jsx)(n.input, { id: "voornaam", type: "text", autocomplete: "given-name" })] }) }) }), "\n", (0, l.jsx)(i.X, { appearance: "dont", title: "Het autocomplete-attribuut niet gebruiken.", description: "Het input type alleen is hier niet voldoende om te voldoen aan WCAG.", children: (0, l.jsx)(r.X, { language: "html", children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { for: "telefoon", children: "Uw telefoonnummer" }), (0, l.jsx)(n.input, { id: "telefoon", type: "tel" })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
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
    h = { id: "richtlijnen/formulieren/alle-richtlijnen/autocomplete", title: "Autocomplete | Richtlijnen | NL Design System", description: "Richtlijnen voor het gebruik van het autocomplete-attribuut.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/autocomplete.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/autocomplete", permalink: "/richtlijnen/formulieren/alle-richtlijnen/autocomplete", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/autocomplete.mdx", tags: [], version: "current", frontMatter: { title: "Autocomplete | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Autocomplete", pagination_label: "Autocomplete in een formulier", description: "Richtlijnen voor het gebruik van het autocomplete-attribuut.", slug: "autocomplete", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Voorkom fouten in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker" }, next: { title: "Bevestigingspagina", permalink: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina" } },
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
  3460: (e, n, t) => {
   t.d(n, { X: () => v });
   var l = t(6532),
    o = t(6259),
    r = t(1910),
    i = t(9560),
    s = t(486),
    a = t(9267),
    c = t(495),
    d = t(959),
    u = t(9995),
    p = t(2950);
   const m = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = t(1179),
    b = t(1527);
   const g = (e) => {
     let { target: n } = e;
     const t = n.getAttribute("aria-controls"),
      l = n.ownerDocument.getElementById(t);
     (l.hidden = !l.hidden), n.setAttribute("aria-expanded", !l.hidden), (n.innerText = l.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: t = !1, defaultCollapsed: v = !0, children: j, language: _ } = e,
      y = "function" == typeof j ? j() : j,
      x = "function" == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
      k = "string" == typeof n ? n : u.uS(x || y),
      [f, w] = (0, d.useState)(k);
     (0, d.useEffect)(() => {
      (async () => {
       (f = await c.ZP.format(k, { parser: _, plugins: [r.Z, i.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), w(f);
      })();
     }, [k]);
     const A = (0, p.Z)();
     return (0, b.jsxs)("div", {
      className: (0, o.Z)(m["nlds-canvas"]),
      children: [
       y && (0, b.jsx)("div", { className: (0, o.Z)(m["nlds-canvas__example"]), children: (0, b.jsx)(l.pu, { className: "voorbeeld-theme", children: y }) }),
       (0, b.jsx)("div", { className: (0, o.Z)(m["nlds-canvas__toolbar"]), children: (0, b.jsx)(l.zx, { className: (0, o.Z)(m["nlds-canvas__button"], m["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: g, "aria-expanded": !v, "aria-controls": A, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, b.jsxs)("div", {
        className: (0, o.Z)(m["nlds-canvas__code-block"], !t && m["nlds-canvas__code-block--user-select-none"]),
        id: A,
        hidden: v,
        children: [
         (0, b.jsx)(h.u, { syntax: _, textContent: f, trim: !0 }),
         t &&
          (0, b.jsx)("div", {
           className: (0, o.Z)(m["nlds-canvas__toolbar"]),
           children: (0, b.jsx)(l.zx, {
            className: (0, o.Z)(m["nlds-canvas__button"], m["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(f).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, t) => {
   t.d(n, { u: () => s });
   var l = t(6532),
    o = t(2425);
   t(959);
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
   var i = t(1527);
   function s(e) {
    let { lineNumber: n, syntax: t, textContent: s, trim: a } = e,
     c = s;
    return (
     a && (c = c.trim()),
     (0, i.jsx)(o.y$, {
      theme: r,
      code: c,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsx)(l.dn, { style: t, children: o.map((e, t) => (0, i.jsxs)("span", { ...r({ line: e }), children: [n && (0, i.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, i.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  36: (e, n, t) => {
   t.d(n, { X: () => c });
   var l = t(5893),
    o = t(1139),
    r = t(6532),
    i = t(6259);
   t(959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(1527);
   const c = (e) => {
    let { title: n, appearance: t, description: c, children: d } = e;
    const u = "Doen",
     p = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, i.Z)(s["nlds-guideline"], s[`nlds-guideline--${t}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, i.Z)(s["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: p })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: u })] }), (0, a.jsx)(r.nv, { children: n })] }), c] }), (0, a.jsx)("div", { className: (0, i.Z)(s["nlds-guideline__example"]), children: d })] });
   };
  },
 },
]);
