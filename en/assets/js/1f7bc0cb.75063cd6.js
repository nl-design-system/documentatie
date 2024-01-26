"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1154],
 {
  5626: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => u, contentTitle: () => d, default: () => k, frontMatter: () => a, metadata: () => c, toc: () => h });
   var o = l(1527),
    t = l(7214),
    i = l(3460),
    s = l(36),
    r = l(3778);
   const a = { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    d = "Toegankelijk",
    c = { id: "richtlijnen/formulieren/toegankelijk", title: "Toegankelijk | Formulieren", description: "Een formulier moet toegankelijk zijn", source: "@site/docs/richtlijnen/formulieren/01-toegankelijk.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/01-toegankelijk.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Visueel ontwerp van formulieren", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp" }, next: { title: "Duidelijk", permalink: "/en/richtlijnen/formulieren/duidelijk" } },
    u = {},
    h = [
     { value: "Maak alles bereikbaar met het toetsenbord", id: "maak-alles-bereikbaar-met-het-toetsenbord", level: 2 },
     { value: "Geef elk veld een naam", id: "geef-elk-veld-een-naam", level: 2 },
     { value: "Vertrouw niet alleen op kleur", id: "vertrouw-niet-alleen-op-kleur", level: 2 },
     { value: "Zorg voor focusstijlen", id: "zorg-voor-focusstijlen", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", code: "code", em: "em", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "toegankelijk", children: "Toegankelijk" }), "\n", (0, o.jsx)(r.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Een formulier moet toegankelijk zijn. Dit betekent dat er in ontwerp en techniek rekening is gehouden met alle\nverschillende manieren waarop mensen websites gebruiken, inclusief mensen met een beperking." }) }), "\n", (0, o.jsx)(n.h2, { id: "maak-alles-bereikbaar-met-het-toetsenbord", children: "Maak alles bereikbaar met het toetsenbord" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige gebruikers navigeren door een formulier met hun ", (0, o.jsx)(n.code, { children: "Tab" }), "-toets. Zorg dat alle onderdelen van het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord (inclusief bijvoorbeeld kalenders). Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbordpresenteert, zoals een ", (0, o.jsx)(n.em, { children: "switch control" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "geef-elk-veld-een-naam", children: "Geef elk veld een naam" }), "\n", (0, o.jsx)(n.p, { children: "Elk formulierveld moet een \u201ctoegankelijke naam\u201d hebben, dit is een naam die in de code gekoppeld is aan het veld. Dit wordt bijvoorbeeld gebruikt in hulptechnologie\xebn als schermlezers en stembediening." }), "\n", (0, o.jsxs)(n.p, { children: ["De snelste manier om een veld een naam te geven, is door een ", (0, o.jsx)(n.code, { children: "<label>" }), "-element in code te koppelen aan het veld."] }), "\n", (0, o.jsx)(n.p, { children: "Tips:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["houd de toegankelijke naam en de zichtbare naam hetzelfde (zie ook ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#label-in-naam", children: "WCAG 2.5.3 Label in naam" }), ")"] }), "\n", (0, o.jsx)(n.li, { children: "een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt" }), "\n"] }), "\n", (0, o.jsxs)(n.p, { children: ["Lees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over labels" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "vertrouw-niet-alleen-op-kleur", children: "Vertrouw niet alleen op kleur" }), "\n", (0, o.jsx)(n.p, { children: "Soms gebruikt een formulier kleur om een status aan te geven, bijvoorbeeld dat een veld een fout bevat. Zorg er dan voor dat kleur niet de enige manier is waarop het verschil tussen \u201cgoede\u201d en \u201cfoute\u201d invoer wordt aangegeven. Dan is de status namelijk mogelijk niet te onderscheiden door mensen met kleurenblindheid." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#gebruik-van-kleur", children: "1.4.1 Gebruik van kleur" }), "."] }) }), "\n", (0, o.jsx)(s.X, { appearance: "do", title: "Beschrijf in tekst", description: (0, o.jsx)(r.nv, { children: "Vul de kleur aan met een beschrijving in tekst dat een melding een fout betreft, bijvoorbeeld \u201cFout: \u201d." }), children: (0, o.jsx)(i.X, { language: "html", code: (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(r.Wi, { children: [(0, o.jsx)(r.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(r.ue, { invalid: "true", children: "Fout: Dit is geen goede naam" }), (0, o.jsx)(r.fE, { type: "text", name: "first_name", id: "name" })] }) }), children: (0, o.jsxs)(r.Wi, { children: [(0, o.jsx)(r.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(r.ue, { invalid: "true", style: { color: "darkred" }, children: (0, o.jsx)(n.p, { children: "Fout: Dit is geen goede naam" }) }), (0, o.jsx)(r.fE, { type: "text", name: "first_name", id: "name" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-focusstijlen", children: "Zorg voor focusstijlen" }), "\n", (0, o.jsx)(n.p, { children: "Er is op je hele website altijd precies \xe9\xe9n element dat \u201cfocus\u201d heeft. Als gebruikers een formulier invullen, krijgt het veld waar ze in typen focus. Zorg dat het als zodanig herkenbaar is door een duidelijke focusstijl te gebruiken." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, criterium ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#focus-zichtbaar", children: "2.4.7 Focus Zichtbaar" }), "."] }) }), "\n", (0, o.jsx)(s.X, { appearance: "dont", title: "Focus uitgezet", description: (0, o.jsxs)(r.nv, { children: ["In CSS kan focus worden uitgezet met ", (0, o.jsx)(n.code, { children: "outline: none" }), " of ", (0, o.jsx)(n.code, { children: "outline: 0" }), ". Doe dit net, want het zorgt dat gebruikers niet kunnen zien of het veld focus heeft."] }), children: (0, o.jsx)(i.X, { language: "css", code: ":focus { outline: none; }" }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  3460: (e, n, l) => {
   l.d(n, { X: () => p });
   var o = l(6532),
    t = l(6259),
    i = l(1910),
    s = l(9560),
    r = l(486),
    a = l(9267),
    d = l(495),
    c = l(959),
    u = l(9995),
    h = l(2950);
   const m = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var k = l(1179),
    g = l(1527);
   const b = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      o = n.ownerDocument.getElementById(l);
     (o.hidden = !o.hidden), n.setAttribute("aria-expanded", !o.hidden), (n.innerText = o.hidden ? "Bekijk code" : "Verberg code");
    },
    p = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: p = !0, children: j, language: v, designTokens: _ } = e,
      y = "function" == typeof j ? j() : j,
      x = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      f = "string" == typeof n ? n : u.uS(x || y),
      [w, Z] = (0, c.useState)(f);
     (0, c.useEffect)(() => {
      (async () => {
       (w = await d.ZP.format(f, { parser: v, plugins: [i.Z, s.ZP, r.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), Z(w);
      })();
     }, [f]);
     const z = (0, h.Z)();
     return (0, g.jsxs)("div", {
      className: (0, t.Z)(m["nlds-canvas"]),
      children: [
       y && (0, g.jsx)("div", { className: (0, t.Z)(m["nlds-canvas__example"]), children: (0, g.jsx)(o.pu, { className: "voorbeeld-theme", style: _, children: y }) }),
       (0, g.jsx)("div", { className: (0, t.Z)(m["nlds-canvas__toolbar"]), children: (0, g.jsx)(o.zx, { className: (0, t.Z)(m["nlds-canvas__button"], m["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: b, "aria-expanded": !p, "aria-controls": z, children: p ? "Bekijk code" : "Verberg code" }) }),
       (0, g.jsxs)("div", {
        className: (0, t.Z)(m["nlds-canvas__code-block"], !l && m["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: p,
        children: [
         (0, g.jsx)(k.u, { syntax: v, textContent: w, trim: !0 }),
         l &&
          (0, g.jsx)("div", {
           className: (0, t.Z)(m["nlds-canvas__toolbar"]),
           children: (0, g.jsx)(o.zx, {
            className: (0, t.Z)(m["nlds-canvas__button"], m["nlds-canvas__copy-button"]),
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
   l.d(n, { u: () => r });
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
   var s = l(1527);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: a } = e,
     d = r;
    return (
     a && (d = d.trim()),
     (0, s.jsx)(t.y$, {
      theme: i,
      code: d,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: t, getLineProps: i, getTokenProps: r } = e;
       return (0, s.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, s.jsxs)("span", { ...i({ line: e }), children: [n && (0, s.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, s.jsx)("span", { ...r({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  36: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(5893),
    t = l(1139),
    i = l(6532),
    s = l(6259);
   l(959);
   const r = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = l(1527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const u = "Doen",
     h = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, s.Z)(r["nlds-guideline"], r[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, s.Z)(r["nlds-guideline__description"]), children: ["dont" === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(r["nlds-guideline__badge"], r[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: r["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: r["nlds-guideline__title"], children: h })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(r["nlds-guideline__badge"], r[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(t.Z, { className: r["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: r["nlds-guideline__title"], children: u })] }), (0, a.jsx)(i.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, s.Z)(r["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
