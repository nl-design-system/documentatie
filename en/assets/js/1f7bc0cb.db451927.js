"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1154],
 {
  95626: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => u, contentTitle: () => d, default: () => p, frontMatter: () => a, metadata: () => c, toc: () => m });
   var o = l(11527),
    t = l(47214),
    s = l(73460),
    r = l(30036),
    i = l(83778);
   const a = { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] },
    d = "Toegankelijk",
    c = { id: "richtlijnen/formulieren/toegankelijk", title: "Toegankelijk | Formulieren", description: "Een formulier moet toegankelijk zijn", source: "@site/docs/richtlijnen/formulieren/01-toegankelijk.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/01-toegankelijk.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Toegankelijk | Formulieren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toegankelijk", sidebar_position: 1, pagination_label: "Toegankelijk", description: "Een formulier moet toegankelijk zijn", keywords: ["richtlijnen", "formulieren", "toegankelijkheid", "labels"] }, sidebar: "richtlijnen", previous: { title: "Visueel ontwerp van formulieren", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp" }, next: { title: "Duidelijk", permalink: "/en/richtlijnen/formulieren/duidelijk" } },
    u = {},
    m = [
     { value: "Maak alles bereikbaar met het toetsenbord", id: "maak-alles-bereikbaar-met-het-toetsenbord", level: 2 },
     { value: "Geef elk veld een naam", id: "geef-elk-veld-een-naam", level: 2 },
     { value: "Vertrouw niet alleen op kleur", id: "vertrouw-niet-alleen-op-kleur", level: 2 },
     { value: "Zorg voor focusstijlen", id: "zorg-voor-focusstijlen", level: 2 },
    ];
   function h(e) {
    const n = { a: "a", code: "code", em: "em", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", "\n", (0, o.jsx)(n.h1, { id: "toegankelijk", children: "Toegankelijk" }), "\n", (0, o.jsx)(i.nv, { lead: !0, children: (0, o.jsx)(n.p, { children: "Een formulier moet toegankelijk zijn. Dit betekent dat er in ontwerp en techniek rekening is gehouden met alle\nverschillende manieren waarop mensen websites gebruiken, inclusief mensen met een beperking." }) }), "\n", (0, o.jsx)(n.h2, { id: "maak-alles-bereikbaar-met-het-toetsenbord", children: "Maak alles bereikbaar met het toetsenbord" }), "\n", (0, o.jsxs)(n.p, { children: ["Sommige gebruikers navigeren door een formulier met hun ", (0, o.jsx)(n.code, { children: "Tab" }), "-toets. Zorg dat alle onderdelen van het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord (inclusief bijvoorbeeld kalenders). Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbordpresenteert, zoals een ", (0, o.jsx)(n.em, { children: "switch control" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "geef-elk-veld-een-naam", children: "Geef elk veld een naam" }), "\n", (0, o.jsx)(n.p, { children: "Elk formulierveld moet een \u201ctoegankelijke naam\u201d hebben, dit is een naam die in de code gekoppeld is aan het veld. Dit wordt bijvoorbeeld gebruikt in hulptechnologie\xebn als schermlezers en stembediening." }), "\n", (0, o.jsxs)(n.p, { children: ["De snelste manier om een veld een naam te geven, is door een ", (0, o.jsx)(n.code, { children: "<label>" }), "-element in code te koppelen aan het veld."] }), "\n", (0, o.jsx)(n.p, { children: "Tips:" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["houd de toegankelijke naam en de zichtbare naam hetzelfde (zie ook ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#label-in-naam", children: "WCAG 2.5.3 Label in naam" }), ")"] }), "\n", (0, o.jsx)(n.li, { children: "een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt" }), "\n"] }), "\n", (0, o.jsxs)(n.p, { children: ["Lees hierover meer op de ", (0, o.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over labels" }), "."] }), "\n", (0, o.jsx)(n.h2, { id: "vertrouw-niet-alleen-op-kleur", children: "Vertrouw niet alleen op kleur" }), "\n", (0, o.jsx)(n.p, { children: "Soms gebruikt een formulier kleur om een status aan te geven, bijvoorbeeld dat een veld een fout bevat. Zorg er dan voor dat kleur niet de enige manier is waarop het verschil tussen \u201cgoede\u201d en \u201cfoute\u201d invoer wordt aangegeven. Dan is de status namelijk mogelijk niet te onderscheiden door mensen met kleurenblindheid." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#gebruik-van-kleur", children: "1.4.1 Gebruik van kleur" }), "."] }) }), "\n", (0, o.jsx)(r.X, { appearance: "do", title: "Beschrijf in tekst", description: (0, o.jsx)(i.nv, { children: "Vul de kleur aan met een beschrijving in tekst dat een melding een fout betreft, bijvoorbeeld \u201cFout: \u201d." }), children: (0, o.jsx)(s.X, { language: "html", code: (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(i.Wi, { children: [(0, o.jsx)(i.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(i.ue, { invalid: "true", children: "Fout: Dit is geen goede naam" }), (0, o.jsx)(i.fE, { type: "text", name: "first_name", id: "name" })] }) }), children: (0, o.jsxs)(i.Wi, { children: [(0, o.jsx)(i.lX, { htmlFor: "name", children: "Voornaam" }), (0, o.jsx)(i.ue, { invalid: "true", style: { color: "darkred" }, children: (0, o.jsx)(n.p, { children: "Fout: Dit is geen goede naam" }) }), (0, o.jsx)(i.fE, { type: "text", name: "first_name", id: "name" })] }) }) }), "\n", (0, o.jsx)(n.h2, { id: "zorg-voor-focusstijlen", children: "Zorg voor focusstijlen" }), "\n", (0, o.jsx)(n.p, { children: "Er is op je hele website altijd precies \xe9\xe9n element dat \u201cfocus\u201d heeft. Als gebruikers een formulier invullen, krijgt het veld waar ze in typen focus. Zorg dat het als zodanig herkenbaar is door een duidelijke focusstijl te gebruiken." }), "\n", (0, o.jsx)(n.p, { children: (0, o.jsxs)(n.em, { children: ["Dit is verplicht om te voldoen aan WCAG 2.1, criterium ", (0, o.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#focus-zichtbaar", children: "2.4.7 Focus Zichtbaar" }), "."] }) }), "\n", (0, o.jsx)(r.X, { appearance: "dont", title: "Focus uitgezet", description: (0, o.jsxs)(i.nv, { children: ["In CSS kan focus worden uitgezet met ", (0, o.jsx)(n.code, { children: "outline: none" }), " of ", (0, o.jsx)(n.code, { children: "outline: 0" }), ". Doe dit net, want het zorgt dat gebruikers niet kunnen zien of het veld focus heeft."] }), children: (0, o.jsx)(s.X, { language: "css", code: ":focus { outline: none; }" }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
  73460: (e, n, l) => {
   l.d(n, { X: () => v });
   var o = l(16532),
    t = l(86259),
    s = l(11910),
    r = l(59560),
    i = l(80486),
    a = l(69267),
    d = l(80495),
    c = l(50959),
    u = l(9995);
   const m = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = l(41179),
    p = l(11527);
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: (0, p.jsx)(o.BB, { className: (0, t.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: (0, p.jsx)(o.nv, { className: m["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const k = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: (0, p.jsx)(o.BB, { className: (0, t.Z)("utrecht-document--surface", m["nlds-canvas__example-document"]), children: n }) });
   };
   k.displayName = "DocumentContainer";
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: m["nlds-canvas__example-surface"], children: n });
   };
   b.displayName = "SurfaceContainer";
   const v = (e) => {
    let { code: n, copy: l = !1, defaultExpandedCode: v = !0, displayCode: j = !0, children: _, container: x = "document", language: f, designTokens: y } = e,
     w = "function" == typeof _ ? _() : _,
     N = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = "string" == typeof n ? n : u.uS(N || w),
     [z, C] = (0, c.useState)(Z),
     [T, S] = (0, c.useState)(v);
    (0, c.useEffect)(() => {
     (async () => {
      (z = await d.ZP.format(Z, { parser: f, plugins: [s.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), C(z);
     })();
    }, [Z]);
    const F = (0, c.useId)();
    let D = c.Fragment;
    return (
     "paragraph" === x ? (D = g) : "document" === x ? (D = k) : "surface" === x && (D = b),
     (0, p.jsxs)("div", {
      className: (0, t.Z)(m["nlds-canvas"]),
      children: [
       w && (0, p.jsx)("div", { className: (0, t.Z)(m["nlds-canvas__example"]), children: (0, p.jsx)("div", { className: "voorbeeld-theme", style: y, children: (0, p.jsx)(D, { children: (0, p.jsx)(o.pu, { children: w }) }) }) }),
       j &&
        (0, p.jsx)("div", {
         className: (0, t.Z)(m["nlds-canvas__toolbar"]),
         children: (0, p.jsx)(o.zx, {
          className: (0, t.Z)(m["nlds-canvas__button"], m["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           S(!T);
          },
          "aria-expanded": T,
          "aria-controls": F,
          children: T ? "Verberg code" : "Bekijk code",
         }),
        }),
       j &&
        (0, p.jsxs)("div", {
         className: (0, t.Z)(m["nlds-canvas__code-block"], !l && m["nlds-canvas__code-block--user-select-none"]),
         id: F,
         hidden: !T,
         children: [
          (0, p.jsx)(h.u, { syntax: f, textContent: z, trim: !0 }),
          l &&
           (0, p.jsx)("div", {
            className: (0, t.Z)(m["nlds-canvas__toolbar"]),
            children: (0, p.jsx)(o.zx, {
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
   l.d(n, { u: () => i });
   var o = l(16532),
    t = l(2425);
   l(50959);
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
   var r = l(11527);
   function i(e) {
    let { lineNumber: n, syntax: l, textContent: i, trim: a } = e,
     d = i;
    return (
     a && (d = d.trim()),
     (0, r.jsx)(t.y$, {
      theme: s,
      code: d,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)("span", { ...s({ line: e }), children: [n && (0, r.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, r.jsx)("span", { ...i({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  30036: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(35893),
    t = l(71139),
    s = l(16532),
    r = l(86259);
   l(50959);
   const i = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = l(11527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: u } = e;
    const m = "Doen",
     h = "Niet doen",
     p = u ? "figure" : "div",
     g = u ? "figcaption" : "div";
    return (0, a.jsxs)(p, { className: (0, r.Z)(i["nlds-guideline"], i[`nlds-guideline--${l}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(g, { className: (0, r.Z)(i["nlds-guideline__description"]), children: ["dont" === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: i["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: i["nlds-guideline__title"], children: h })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i["nlds-guideline__badge"], i[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(t.Z, { className: i["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: i["nlds-guideline__title"], children: m })] }), (0, a.jsx)(s.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, r.Z)(i["nlds-guideline__example"]), children: c })] });
   };
  },
  47214: (e, n, l) => {
   l.d(n, { Z: () => i, a: () => r });
   var o = l(50959);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
