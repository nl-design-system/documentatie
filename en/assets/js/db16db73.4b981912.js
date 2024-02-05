"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5545],
 {
  4670: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => u, contentTitle: () => a, default: () => h, frontMatter: () => d, metadata: () => c, toc: () => m });
   var o = l(11527),
    t = l(47214),
    r = l(73460),
    i = l(30036),
    s = l(83778);
   const d = { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    a = "Goed gecontroleerd",
    c = { id: "richtlijnen/formulieren/goed-gecontroleerd", title: "Goed gecontroleerd | Formulieren", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", source: "@site/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/goed-gecontroleerd", permalink: "/en/richtlijnen/formulieren/goed-gecontroleerd", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Makkelijk in te vullen", permalink: "/en/richtlijnen/formulieren/makkelijk-in-te-vullen" }, next: { title: "Voorspelbaar", permalink: "/en/richtlijnen/formulieren/voorspelbaar" } },
    u = {},
    m = [
     { value: "Zorg voor duidelijke foutmeldingen", id: "zorg-voor-duidelijke-foutmeldingen", level: 2 },
     { value: "Toon foutmeldingen op het juiste moment", id: "toon-foutmeldingen-op-het-juiste-moment", level: 2 },
     { value: "Keur niet te snel af", id: "keur-niet-te-snel-af", level: 2 },
     { value: "Geldige e-mailadressen", id: "geldige-e-mailadressen", level: 3 },
     { value: "Eenduidig te herschrijven", id: "eenduidig-te-herschrijven", level: 3 },
     { value: "Minimale en maximale tekstlengtes", id: "minimale-en-maximale-tekstlengtes", level: 3 },
    ];
   function g(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", h3: "h3", input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "goed-gecontroleerd", children: "Goed gecontroleerd" }), "\n", (0, o.jsx)(s.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels." }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-duidelijke-foutmeldingen", children: "Zorg voor duidelijke foutmeldingen" }), "\n", (0, o.jsx)(n.p, { children: "Bij foutmeldingen is het belangrijk dat ze precies beschrijven wat er niet klopt aan de invoer, om het gebruikers zo makkelijk mogelijk te maken een fout te herstellen." }), "\n", (0, o.jsx)(n.p, { children: "Zeg bijvoorbeeld niet: \u201cDit BSN is niet geldig\u201d, maar leg uit dat een BSN-nummer uit 10 karakters bestaat." }), "\n", (0, o.jsx)(n.p, { children: "Plaats foutmeldingen tussen het invoerveld en het label. Zo zijn ze het best te vinden voor bijvoorbeeld gebruikers met vergrootsoftware." }), "\n", (0, o.jsx)(i.X, { appearance: "do", title: "Foutmelding tussen label en veld", description: (0, o.jsx)(s.nv, { children: "Foutmeldingen werken het best tussen label en veld." }), children: (0, o.jsx)(r.X, { language: "html", code: (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: "bsn", children: "Burgerservicenummer" }), (0, o.jsx)(n.p, { id: "error", children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers" }), (0, o.jsx)(n.input, { type: "text", name: "bsn", id: "bsn", "aria-describedby": "error" })] }), copy: !0, defaultCollapsed: !0, children: (0, o.jsxs)(s.Wi, { type: "text", children: [(0, o.jsx)(s.nv, { className: "utrecht-form-field__label", children: (0, o.jsx)(s.lX, { htmlFor: "bsn", children: "Burgerservicenummer" }) }), (0, o.jsx)(s.ue, { className: "utrecht-form-field__description", style: { color: "darkred" }, id: "error", children: (0, o.jsx)(n.p, { children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers." }) }), (0, o.jsx)(s.fE, { name: "bsn", id: "bsn", "aria-describedby": "error" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "toon-foutmeldingen-op-het-juiste-moment", children: "Toon foutmeldingen op het juiste moment" }), "\n", (0, o.jsx)(n.p, { children: "Wacht met het tonen van foutmeldingen totdat de gebruiker het veld heeft ingevuld, of zelfs tot de hele sectie of het hele formulier is ingevuld. Zo wordt de gebruiker niet met foutmeldingen geconfronteerd, terwijl ze nog niet klaar zijn met hun invoer." }), "\n", (0, o.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, o.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige mensen gebruiken een ", (0, o.jsx)(n.code, { children: "+" }), " in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen. Zo kiezen ze voor ", (0, o.jsx)(n.code, { children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, o.jsx)(n.code, { children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, o.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters)." }), "\n", (0, o.jsxs)(n.p, { children: ["In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "minimale-en-maximale-tekstlengtes", children: "Minimale en maximale tekstlengtes" }), "\n", (0, o.jsxs)(n.p, { children: ["Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar dit kan er bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen.\nLees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/vragen", children: "richtlijnen over uit te vragen informatie" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  73460: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(16532),
    t = l(86259),
    r = l(11910),
    i = l(59560),
    s = l(80486),
    d = l(69267),
    a = l(80495),
    c = l(50959),
    u = l(9995);
   const m = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var g = l(41179),
    h = l(11527);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: (0, h.jsx)(o.BB, { className: (0, t.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: (0, h.jsx)(o.nv, { className: m["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   v.displayName = "ParagraphContainer";
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: (0, h.jsx)(o.BB, { className: (0, t.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: n }) });
   };
   p.displayName = "DocumentContainer";
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: n });
   };
   b.displayName = "SurfaceContainer";
   const _ = (e) => {
    let { code: n, copy: l = !1, defaultExpandedCode: _ = !1, displayCode: j = !0, children: k, container: y = "document", language: f, designTokens: x } = e,
     N = "function" == typeof k ? k() : k,
     w = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = "string" == typeof n ? n : u.uS(w || N),
     [z, C] = (0, c.useState)(Z),
     [F, S] = (0, c.useState)(_);
    (0, c.useEffect)(() => {
     (async () => {
      (z = await a.ZP.format(Z, { parser: f, plugins: [r.Z, i.ZP, s.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), C(z);
     })();
    }, [Z]);
    const P = (0, c.useId)();
    let B = c.Fragment;
    return (
     "paragraph" === y ? (B = v) : "document" === y ? (B = p) : "surface" === y && (B = b),
     (0, h.jsxs)("div", {
      className: (0, t.Z)(m["nlds-canvas"]),
      children: [
       N && (0, h.jsx)("div", { className: (0, t.Z)(m["nlds-canvas__example"]), children: (0, h.jsx)("div", { className: "voorbeeld-theme", style: x, children: (0, h.jsx)(B, { children: (0, h.jsx)(o.pu, { children: N }) }) }) }),
       j &&
        (0, h.jsx)("div", {
         className: (0, t.Z)(m["nlds-canvas__toolbar"]),
         children: (0, h.jsx)(o.zx, {
          className: (0, t.Z)(m["nlds-canvas__button"], m["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           S(!F);
          },
          "aria-expanded": F,
          "aria-controls": P,
          children: F ? "Verberg code" : "Bekijk code",
         }),
        }),
       j &&
        (0, h.jsxs)("div", {
         className: (0, t.Z)(m["nlds-canvas__code-block"], !l && m["nlds-canvas__code-block--user-select-none"]),
         id: P,
         hidden: !F,
         children: [
          (0, h.jsx)(g.u, { syntax: f, textContent: z, trim: !0 }),
          l &&
           (0, h.jsx)("div", {
            className: (0, t.Z)(m["nlds-canvas__toolbar"]),
            children: (0, h.jsx)(o.zx, {
             className: (0, t.Z)(m["nlds-canvas__button"], m["nlds-canvas__copy-button"]),
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
  41179: (e, n, l) => {
   l.d(n, { u: () => s });
   var o = l(16532),
    t = l(2425);
   l(50959);
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
   var i = l(11527);
   function s(e) {
    let { lineNumber: n, syntax: l, textContent: s, trim: d } = e,
     a = s;
    return (
     d && (a = a.trim()),
     (0, i.jsx)(t.y$, {
      theme: r,
      code: a,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: t, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, i.jsxs)("span", { ...r({ line: e }), children: [n && (0, i.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, i.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  30036: (e, n, l) => {
   l.d(n, { X: () => a });
   var o = l(9842),
    t = l(91406),
    r = l(16532),
    i = l(86259);
   l(50959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var d = l(11527);
   const a = (e) => {
    let { title: n, appearance: l, description: a, children: c, figure: u } = e;
    const m = "Doen",
     g = "Niet doen",
     h = u ? "figure" : "div",
     v = u ? "figcaption" : "div";
    return (0, d.jsxs)(h, { className: (0, i.Z)(s["nlds-guideline"], s[`nlds-guideline--${l}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, d.jsxs)(v, { className: (0, i.Z)(s["nlds-guideline__description"]), children: ["dont" === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: g })] }), (0, d.jsx)(r.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { className: (0, i.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(t.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: m })] }), (0, d.jsx)(r.nv, { children: n })] }), a] }), (0, d.jsx)("div", { className: (0, i.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  47214: (e, n, l) => {
   l.d(n, { Z: () => s, a: () => i });
   var o = l(50959);
   const t = {},
    r = o.createContext(t);
   function i(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
