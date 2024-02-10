"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4991],
 {
  3324: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var l = t(11527),
    o = t(27034);
   function r(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  38836: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => h, default: () => x, frontMatter: () => m, metadata: () => b, toc: () => g });
   var l = t(11527),
    o = t(27034),
    r = t(3324),
    i = t(73460),
    s = t(30036);
   function a(e) {
    const n = { button: "button", div: "div", form: "form", input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(s.X, { appearance: "do", title: "Formulier zonder tabindex.", children: (0, l.jsx)(i.X, { language: "html", children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { for: "naam1", children: "Uw naam" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: "naam1", autocomplete: "name" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: "email1", autocomplete: "email" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief!" }) })] }) }) }) }), "\n", (0, l.jsx)(s.X, { appearance: "dont", title: "Formulier met gebruik van een positieve tabindex.", children: (0, l.jsx)(i.X, { language: "html", children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { for: "naam2", children: "Uw naam" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: "naam2", autocomplete: "name", tabindex: "1" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { for: "email2", children: "Uw e-mailadres" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: "email2", autocomplete: "email" }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.button, { children: "Stuur mij de nieuwsbrief!" }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "gebruik-geen-positieve-tabindex", children: "Gebruik geen positieve tabindex" }), "\n", (0, l.jsxs)(n.p, { children: ["Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ", (0, l.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex", children: "tabindex" }), " te geven met een waarde groter dan nul, bijvoorbeeld ", (0, l.jsx)(n.code, { children: 'tabindex="1"' }), " of met gebruik van ", (0, l.jsx)(n.code, { children: "autofocus" }), ". De gebruiker is meteen klaar om het formulier in te gaan vullen."] }), "\n", (0, l.jsx)(n.p, { children: "Maar dit levert voor toetsenbord- en screenreadergebruikers problemen op. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren." }), "\n", (0, l.jsx)(n.p, { children: "Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen." }), "\n", (0, l.jsx)(n.p, { children: "Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden." }), "\n", (0, l.jsx)(n.p, { children: "Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact." }), "\n", (0, l.jsxs)(n.p, { children: ["Adam Silver geeft hier uitgebereid uitleg over in ", (0, l.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/", children: "The problem with automatically focusing the first input and what to do instead" }), "."] }), "\n", (0, l.jsxs)(n.p, { children: ["Let wel: ", (0, l.jsx)(n.code, { children: 'tabindex="0"' }), " en ", (0, l.jsx)(n.code, { children: 'tabindex="-1"' }), " zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ", (0, l.jsx)(n.a, { href: "https://webaim.org/techniques/keyboard/tabindex#zero-negative-one", children: "0 and -1 Values" }), " van WebAIM."] }), "\n", (0, l.jsxs)(n.p, { children: ["Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ", (0, l.jsx)(n.a, { href: "https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/", children: "How To Avoid Breaking Web Pages For Keyboard Users" }), " van Andrew Nevins."] }), "\n", (0, l.jsx)(n.p, { children: "Geen positieve tabindex of autofocus gebruiken is nodig om te voldoen aan de volgende WCAG-succescriteria:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html", children: "2.4.3 Focusvolgorde" }), " (niveau A)."] }), "\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html", children: "3.2.3 Consistente navigatie" }), " (niveau AA)."] }), "\n"] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   const m = { title: "Toetsenbord | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toetsenbord", pagination_label: "Zorg dat het formulier werkt met een toetsenbord", description: "Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.", slug: "toetsenbord", keywords: ["informatie", "formulier", "design", "code"] },
    h = "Zorg dat het formulier werkt met een toetsenbord",
    b = { id: "richtlijnen/formulieren/alle-richtlijnen/keyboard-behaviour", title: "Toetsenbord | Richtlijnen | NL Design System", description: "Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/keyboard-behaviour.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/toetsenbord", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/toetsenbord", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/keyboard-behaviour.mdx", tags: [], version: "current", frontMatter: { title: "Toetsenbord | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toetsenbord", pagination_label: "Zorg dat het formulier werkt met een toetsenbord", description: "Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.", slug: "toetsenbord", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Voorkom fouten in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker" }, next: { title: "Labels in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/labels" } },
    p = {},
    g = [];
   function v(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(n.h1, { id: "zorg-dat-het-formulier-werkt-met-een-toetsenbord", children: "Zorg dat het formulier werkt met een toetsenbord" }), "\n", (0, l.jsx)(n.p, { children: "Een formulier moet goed werken en goed te begrijpen zijn voor een toetsenbordgebruiker. Hierbij is van toepassing:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp/#maak-toetsenbord-focus-goed-zichtbaar", children: "Maak de toetsenbordfocus goed zichtbaar" }), " op de pagina Visueel Ontwerp van formulieren."] }), "\n", (0, l.jsx)(n.li, { children: "Gebruik geen positieve tabindex." }), "\n"] }), "\n", (0, l.jsx)(n.p, { children: "Documentatie over hoe formuliervelden moeten werken met het toetsenbord:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://webaim.org/techniques/keyboard/", children: "Keyboard Accessibility" }), " van WebAIM."] }), "\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/", children: "A Guide To Keyboard Accessibility: HTML And CSS" }), " by Cristian D\xedaz in Smashing Magazine."] }), "\n"] }), "\n", (0, l.jsx)(u, {}), "\n", (0, l.jsx)(d, {}), "\n", (0, l.jsx)(r.ZP, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
  },
  73460: (e, n, t) => {
   t.d(n, { X: () => x });
   var l = t(16532),
    o = t(86259),
    r = t(11910),
    i = t(59560),
    s = t(80486),
    a = t(69267),
    d = t(80495),
    c = t(50959),
    u = t(9995);
   const m = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = t(41179),
    b = t(11527);
   const p = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: m["nlds-canvas__example-surface"], children: (0, b.jsx)(l.BB, { className: (0, o.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: (0, b.jsx)(l.nv, { className: m["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   p.displayName = "ParagraphContainer";
   const g = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: m["nlds-canvas__example-surface"], children: (0, b.jsx)(l.BB, { className: (0, o.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: n }) });
   };
   g.displayName = "DocumentContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: m["nlds-canvas__example-surface"], children: n });
   };
   v.displayName = "SurfaceContainer";
   const x = (e) => {
    let { code: n, copy: t = !1, defaultExpandedCode: x = !1, displayCode: j = !0, children: f, container: _ = "document", language: y, designTokens: k } = e,
     w = "function" == typeof f ? f() : f,
     N = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = "string" == typeof n ? n : u.uS(N || w),
     [z, S] = (0, c.useState)(Z),
     [C, A] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (z = await d.ZP.format(Z, { parser: y, plugins: [r.Z, i.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), S(z);
     })();
    }, [Z]);
    const T = (0, c.useId)();
    let D = c.Fragment;
    return (
     "paragraph" === _ ? (D = p) : "document" === _ ? (D = g) : "surface" === _ && (D = v),
     (0, b.jsxs)("div", {
      className: (0, o.Z)(m["nlds-canvas"]),
      children: [
       w && (0, b.jsx)("div", { className: (0, o.Z)(m["nlds-canvas__example"]), children: (0, b.jsx)("div", { className: "voorbeeld-theme", style: k, children: (0, b.jsx)(D, { children: (0, b.jsx)(l.pu, { children: w }) }) }) }),
       j &&
        (0, b.jsx)("div", {
         className: (0, o.Z)(m["nlds-canvas__toolbar"]),
         children: (0, b.jsx)(l.zx, {
          className: (0, o.Z)(m["nlds-canvas__button"], m["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           A(!C);
          },
          "aria-expanded": C,
          "aria-controls": T,
          children: C ? "Verberg code" : "Bekijk code",
         }),
        }),
       j &&
        (0, b.jsxs)("div", {
         className: (0, o.Z)(m["nlds-canvas__code-block"], !t && m["nlds-canvas__code-block--user-select-none"]),
         id: T,
         hidden: !C,
         children: [
          (0, b.jsx)(h.u, { syntax: y, textContent: z, trim: !0 }),
          t &&
           (0, b.jsx)("div", {
            className: (0, o.Z)(m["nlds-canvas__toolbar"]),
            children: (0, b.jsx)(l.zx, {
             className: (0, o.Z)(m["nlds-canvas__button"], m["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error("Copy code failed", e));
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
   t.d(n, { u: () => s });
   var l = t(16532),
    o = t(2425);
   t(50959);
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
   var i = t(11527);
   function s(e) {
    let { lineNumber: n, syntax: t, textContent: s, trim: a } = e,
     d = s;
    return (
     a && (d = d.trim()),
     (0, i.jsx)(o.y$, {
      theme: r,
      code: d,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsx)(l.dn, { style: t, children: o.map((e, t) => (0, i.jsxs)("span", { ...r({ line: e }), children: [n && (0, i.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, i.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  30036: (e, n, t) => {
   t.d(n, { X: () => d });
   var l = t(9842),
    o = t(91406),
    r = t(16532),
    i = t(86259);
   t(50959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(11527);
   const d = (e) => {
    let { title: n, appearance: t, description: d, children: c, figure: u } = e;
    const m = "Doen",
     h = "Niet doen",
     b = u ? "figure" : "div",
     p = u ? "figcaption" : "div";
    return (0, a.jsxs)(b, { className: (0, i.Z)(s["nlds-guideline"], s[`nlds-guideline--${t}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(p, { className: (0, i.Z)(s["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: m })] }), (0, a.jsx)(r.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, i.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var l = t(50959);
   const o = {},
    r = l.createContext(o);
   function i(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
