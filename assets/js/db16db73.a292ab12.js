"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5545],
 {
  4670: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => u, contentTitle: () => a, default: () => h, frontMatter: () => d, metadata: () => c, toc: () => m });
   var o = l(1527),
    t = l(7214),
    i = l(3460),
    r = l(36),
    s = l(3778);
   const d = { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    a = "Goed gecontroleerd",
    c = { id: "richtlijnen/formulieren/goed-gecontroleerd", title: "Goed gecontroleerd | Formulieren", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", source: "@site/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/goed-gecontroleerd", permalink: "/richtlijnen/formulieren/goed-gecontroleerd", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/04-goed-gecontroleerd.mdx", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Goed gecontroleerd | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Goed gecontroleerd", sidebar_position: 4, pagination_label: "Goed gecontroleerd", description: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Makkelijk in te vullen", permalink: "/richtlijnen/formulieren/makkelijk-in-te-vullen" }, next: { title: "Voorspelbaar", permalink: "/richtlijnen/formulieren/voorspelbaar" } },
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
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "goed-gecontroleerd", children: "Goed gecontroleerd" }), "\n", (0, o.jsx)(s.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels." }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-duidelijke-foutmeldingen", children: "Zorg voor duidelijke foutmeldingen" }), "\n", (0, o.jsx)(n.p, { children: "Bij foutmeldingen is het belangrijk dat ze precies beschrijven wat er niet klopt aan de invoer, om het gebruikers zo makkelijk mogelijk te maken een fout te herstellen." }), "\n", (0, o.jsx)(n.p, { children: "Zeg bijvoorbeeld niet: \u201cDit BSN is niet geldig\u201d, maar leg uit dat een BSN-nummer uit 10 karakters bestaat." }), "\n", (0, o.jsx)(n.p, { children: "Plaats foutmeldingen tussen het invoerveld en het label. Zo zijn ze het best te vinden voor bijvoorbeeld gebruikers met vergrootsoftware." }), "\n", (0, o.jsx)(r.X, { appearance: "do", title: "Foutmelding tussen label en veld", description: (0, o.jsx)(s.nv, { children: "Foutmeldingen werken het best tussen label en veld." }), children: (0, o.jsx)(i.X, { language: "html", code: (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: "bsn", children: "Burgerservicenummer" }), (0, o.jsx)(n.p, { id: "error", children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers" }), (0, o.jsx)(n.input, { type: "text", name: "bsn", id: "bsn", "aria-describedby": "error" })] }), copy: !0, defaultCollapsed: !0, children: (0, o.jsxs)(s.Wi, { type: "text", children: [(0, o.jsx)(s.nv, { className: "utrecht-form-field__label", children: (0, o.jsx)(s.lX, { htmlFor: "bsn", children: "Burgerservicenummer" }) }), (0, o.jsx)(s.ue, { className: "utrecht-form-field__description", style: { color: "darkred" }, id: "error", children: (0, o.jsx)(n.p, { children: "Foutieve invoer: een burgerservicenummer bestaat uit 10 cijfers." }) }), (0, o.jsx)(s.fE, { name: "bsn", id: "bsn", "aria-describedby": "error" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "toon-foutmeldingen-op-het-juiste-moment", children: "Toon foutmeldingen op het juiste moment" }), "\n", (0, o.jsx)(n.p, { children: "Wacht met het tonen van foutmeldingen totdat de gebruiker het veld heeft ingevuld, of zelfs tot de hele sectie of het hele formulier is ingevuld. Zo wordt de gebruiker niet met foutmeldingen geconfronteerd, terwijl ze nog niet klaar zijn met hun invoer." }), "\n", (0, o.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, o.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige mensen gebruiken een ", (0, o.jsx)(n.code, { children: "+" }), " in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen. Zo kiezen ze voor ", (0, o.jsx)(n.code, { children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, o.jsx)(n.code, { children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, o.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters)." }), "\n", (0, o.jsxs)(n.p, { children: ["In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem.\nLees ook de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "richtlijnen over het voorkomen van fouten" }), "."] }), "\n", (0, o.jsx)(n.h3, { id: "minimale-en-maximale-tekstlengtes", children: "Minimale en maximale tekstlengtes" }), "\n", (0, o.jsxs)(n.p, { children: ["Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar dit kan er bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen.\nLees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/vragen", children: "richtlijnen over uit te vragen informatie" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  3460: (e, n, l) => {
   l.d(n, { X: () => p });
   var o = l(6532),
    t = l(6259),
    i = l(1910),
    r = l(9560),
    s = l(486),
    d = l(9267),
    a = l(495),
    c = l(959),
    u = l(9995),
    m = l(2950);
   const g = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = l(1179),
    v = l(1527);
   const b = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    p = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: p = !0, children: j, language: k, designTokens: _ } = e,
      y = "function" == typeof j ? j() : j,
      f = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      x = "string" == typeof n ? n : u.uS(f || y),
      [w, Z] = (0, c.useState)(x);
     (0, c.useEffect)(() => {
      (async () => {
       (w = await a.ZP.format(x, { parser: k, plugins: [i.Z, r.ZP, s.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), Z(w);
      })();
     }, [x]);
     const N = (0, m.Z)();
     return (0, v.jsxs)("div", {
      className: (0, t.Z)(g["nlds-canvas"]),
      children: [
       y && (0, v.jsx)("div", { className: (0, t.Z)(g["nlds-canvas__example"]), children: (0, v.jsx)(o.pu, { className: "voorbeeld-theme", style: _, children: y }) }),
       (0, v.jsx)("div", { className: (0, t.Z)(g["nlds-canvas__toolbar"]), children: (0, v.jsx)(o.zx, { className: (0, t.Z)(g["nlds-canvas__button"], g["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: b, "aria-expanded": !p, "aria-controls": N, children: p ? "Bekijk code" : "Verberg code" }) }),
       (0, v.jsxs)("div", {
        className: (0, t.Z)(g["nlds-canvas__code-block"], !l && g["nlds-canvas__code-block--user-select-none"]),
        id: N,
        hidden: p,
        children: [
         (0, v.jsx)(h.u, { syntax: k, textContent: w, trim: !0 }),
         l &&
          (0, v.jsx)("div", {
           className: (0, t.Z)(g["nlds-canvas__toolbar"]),
           children: (0, v.jsx)(o.zx, {
            className: (0, t.Z)(g["nlds-canvas__button"], g["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(w).catch((e) => console.error("Copy code failed", e));
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
   var o = l(6532),
    t = l(2425);
   l(959);
   const i = {
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
   var r = l(1527);
   function s(e) {
    let { lineNumber: n, syntax: l, textContent: s, trim: d } = e,
     a = s;
    return (
     d && (a = a.trim()),
     (0, r.jsx)(t.y$, {
      theme: i,
      code: a,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: t, getLineProps: i, getTokenProps: s } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)("span", { ...i({ line: e }), children: [n && (0, r.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, r.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  36: (e, n, l) => {
   l.d(n, { X: () => a });
   var o = l(5893),
    t = l(1139),
    i = l(6532),
    r = l(6259);
   l(959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var d = l(1527);
   const a = (e) => {
    let { title: n, appearance: l, description: a, children: c } = e;
    const u = "Doen",
     m = "Niet doen";
    return (0, d.jsxs)("div", { className: (0, r.Z)(s["nlds-guideline"], s[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, d.jsxs)("div", { className: (0, r.Z)(s["nlds-guideline__description"]), children: ["dont" === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, r.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: m })] }), (0, d.jsx)(i.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, r.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(t.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: u })] }), (0, d.jsx)(i.nv, { children: n })] }), a] }), (0, d.jsx)("div", { className: (0, r.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
