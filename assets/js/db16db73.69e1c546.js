"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [55545],
 {
  4670: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => c, default: () => b, frontMatter: () => a, metadata: () => s, toc: () => m });
   var o = l(11527),
    r = l(47214),
    d = l(53623),
    i = l(30036),
    t = l(83778);
   const a = { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    c = "Goed gecontroleerd",
    s = { id: "richtlijnen/formulieren/goed-gecontroleerd", title: "Goed gecontroleerd | Formulieren", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", source: "@site/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/goed-gecontroleerd", permalink: "/richtlijnen/formulieren/goed-gecontroleerd", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Makkelijk in te vullen", permalink: "/richtlijnen/formulieren/makkelijk-in-te-vullen" }, next: { title: "Voorspelbaar", permalink: "/richtlijnen/formulieren/voorspelbaar" } },
    g = {},
    m = [
     { value: "Zorg voor duidelijke foutmeldingen", id: "zorg-voor-duidelijke-foutmeldingen", level: 2 },
     { value: "Toon foutmeldingen op het juiste moment", id: "toon-foutmeldingen-op-het-juiste-moment", level: 2 },
     { value: "Keur niet te snel af", id: "keur-niet-te-snel-af", level: 2 },
     { value: "Geldige e-mailadressen", id: "geldige-e-mailadressen", level: 3 },
     { value: "Eenduidig te herschrijven", id: "eenduidig-te-herschrijven", level: 3 },
     { value: "Minimale en maximale tekstlengtes", id: "minimale-en-maximale-tekstlengtes", level: 3 },
    ];
   function u(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", h3: "h3", input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "goed-gecontroleerd", children: "Goed gecontroleerd" }), "\n", (0, o.jsx)(t.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels." }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-duidelijke-foutmeldingen", children: "Zorg voor duidelijke foutmeldingen" }), "\n", (0, o.jsx)(n.p, { children: "Bij foutmeldingen is het belangrijk dat ze precies beschrijven wat er niet klopt aan de invoer, om het gebruikers zo makkelijk mogelijk te maken een fout te herstellen." }), "\n", (0, o.jsx)(n.p, { children: "Zeg bijvoorbeeld niet: \u201cDit BSN is niet geldig\u201d, maar leg uit dat een BSN-nummer uit 10 karakters bestaat." }), "\n", (0, o.jsx)(n.p, { children: "Plaats foutmeldingen tussen het invoerveld en het label. Zo zijn ze het best te vinden voor bijvoorbeeld gebruikers met vergrootsoftware." }), "\n", (0, o.jsx)(i.X, { appearance: "do", title: "Foutmelding tussen label en veld", description: (0, o.jsx)(t.nv, { children: "Foutmeldingen werken het best tussen label en veld." }), children: (0, o.jsx)(d.X, { language: "html", code: (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: "bsn", children: "Burgerservicenummer" }), (0, o.jsx)(n.p, { id: "error", children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers" }), (0, o.jsx)(n.input, { type: "text", name: "bsn", id: "bsn", "aria-describedby": "error" })] }), copy: !0, defaultCollapsed: !0, children: (0, o.jsxs)(t.Wi, { type: "text", children: [(0, o.jsx)(t.nv, { className: "utrecht-form-field__label", children: (0, o.jsx)(t.lX, { htmlFor: "bsn", children: "Burgerservicenummer" }) }), (0, o.jsx)(t.ue, { className: "utrecht-form-field__description", style: { color: "darkred" }, id: "error", children: (0, o.jsx)(n.p, { children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers." }) }), (0, o.jsx)(t.fE, { name: "bsn", id: "bsn", "aria-describedby": "error" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "toon-foutmeldingen-op-het-juiste-moment", children: "Toon foutmeldingen op het juiste moment" }), "\n", (0, o.jsx)(n.p, { children: "Wacht met het tonen van foutmeldingen totdat de gebruiker het veld heeft ingevuld, of zelfs tot de hele sectie of het hele formulier is ingevuld. Zo wordt de gebruiker niet met foutmeldingen geconfronteerd, terwijl ze nog niet klaar zijn met hun invoer." }), "\n", (0, o.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, o.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige mensen gebruiken een ", (0, o.jsx)(n.code, { children: "+" }), " in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen. Zo kiezen ze voor ", (0, o.jsx)(n.code, { children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, o.jsx)(n.code, { children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, o.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters)." }), "\n", (0, o.jsxs)(n.p, { children: ["In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "minimale-en-maximale-tekstlengtes", children: "Minimale en maximale tekstlengtes" }), "\n", (0, o.jsxs)(n.p, { children: ["Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar dit kan er bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen.\nLees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/vragen", children: "richtlijnen over uit te vragen informatie" }), "."] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
  },
  53623: (e, n, l) => {
   l.d(n, { X: () => p });
   var o = l(16532),
    r = l(86259),
    d = l(85630),
    i = l.n(d),
    t = l(63273),
    a = l.n(t),
    c = l(77192),
    s = l.n(c),
    g = (l(50959), l(9995)),
    m = l(4014),
    u = l(62950);
   const b = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    h = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var v = l(11527);
   const k = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    p = (e) => {
     let n,
      { code: l, copy: d = !1, defaultCollapsed: t = !0, children: c, language: p } = e;
     n = "function" == typeof c ? c() : c;
     const j = s().format(g.uS(l || n), { parser: "html", plugins: [i(), a()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      _ = (0, u.Z)();
     return (0, v.jsxs)("div", {
      className: (0, r.Z)(b["nlds-canvas"]),
      children: [
       (0, v.jsx)("div", { className: (0, r.Z)(b["nlds-canvas__example"]), children: (0, v.jsx)(o.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, v.jsx)("div", { className: (0, r.Z)(b["nlds-canvas__toolbar"]), children: (0, v.jsx)(o.zx, { className: (0, r.Z)(b["nlds-canvas__button"], b["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: k, "aria-expanded": !t, "aria-controls": _, children: t ? "Bekijk code" : "Verberg code" }) }),
       (0, v.jsxs)("div", {
        className: (0, r.Z)(b["nlds-canvas__code-block"], !d && b["nlds-canvas__code-block--user-select-none"]),
        id: _,
        hidden: t,
        children: [
         (0, v.jsx)(m.Z, { language: p, style: h, children: j }),
         d &&
          (0, v.jsx)("div", {
           className: (0, r.Z)(b["nlds-canvas__toolbar"]),
           children: (0, v.jsx)(o.zx, {
            className: (0, r.Z)(b["nlds-canvas__button"], b["nlds-canvas__copy-button"]),
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
   l.d(n, { X: () => c });
   var o = l(81913),
    r = l(7219),
    d = l(16532),
    i = l(86259);
   l(50959);
   const t = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = l(11527);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: s } = e;
    const g = "Doen",
     m = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, i.Z)(t["nlds-guideline"], t[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, i.Z)(t["nlds-guideline__description"]), children: ["dont" === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(d.nv, { className: (0, i.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: t["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: t["nlds-guideline__title"], children: m })] }), (0, a.jsx)(d.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(d.nv, { className: (0, i.Z)(t["nlds-guideline__badge"], t[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(r.Z, { className: t["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: t["nlds-guideline__title"], children: g })] }), (0, a.jsx)(d.nv, { children: n })] }), c] }), (0, a.jsx)("div", { className: (0, i.Z)(t["nlds-guideline__example"]), children: s })] });
   };
  },
 },
]);
