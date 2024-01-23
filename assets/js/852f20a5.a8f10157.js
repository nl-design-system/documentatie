"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7710],
 {
  3324: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var l = i(1527),
    t = i(7214);
   function s(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, l.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, l.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  2909: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => f, contentTitle: () => k, default: () => w, frontMatter: () => b, metadata: () => x, toc: () => _ });
   var l = i(1527),
    t = i(7214);
   function s(e) {
    const n = { a: "a", code: "code", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "maak-de-succesmelding-toegankelijk-voor-alle-gebruikers", children: "Maak de succesmelding toegankelijk voor alle gebruikers" }), "\n", (0, l.jsx)(n.p, { children: "Net zoals bij de foutmeldingen is het belangrijk dat de gebruiker de succesmelding ziet en/of hoort. Dit kan met dezelfde technieken die zijn beschrijven bij de [url foutmeldingen](weergave van de foutmeldingen) zoals:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: "Screenreaderfeedback en focusmanagement na submit." }), "\n", (0, l.jsxs)(n.li, { children: ["Update van de ", (0, l.jsx)(n.code, { children: "<title>" }), " in het ", (0, l.jsx)(n.code, { children: "<head>" }), "-element."] }), "\n"] }), "\n", (0, l.jsx)(n.p, { children: "Door de succesmelding toegankelijk te maken voor alle gebruikers voldoe je aan de WCAG-succescriteria:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html", children: "1.3.1 Info en relaties" }), " (niveau A)."] }), "\n", (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html", children: "2.4.2 Paginatitel" }), " (niveau A)."] }), "\n"] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
   function r(e) {
    const n = { h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "zorg-dat-de-gebruiker-contact-op-kan-nemen-bij-vragen", children: "Zorg dat de gebruiker contact op kan nemen bij vragen" }), "\n", (0, l.jsx)(n.p, { children: "Zorg dat de gebruiker contact op kan nemen bij vragen. Dit kan in de bevestiging, maar ook via een contactmogelijkheid op de website. Biedt dan niet alleen een telefoonnummer aan als wijze van contact opnemen." }), "\n", (0, l.jsx)(n.p, { children: "Telefonisch contact is voor sommige gebruikers niet mogelijk of niet handig. Denk aan gebruikers die doof zijn, stotteren of een vorm van autisme hebben. Of aan gebruikers die heel verlegen zijn, of de Nederlandse taal niet zo goed spreken." }), "\n", (0, l.jsx)(n.p, { children: "Voeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chatfunctionaliteit." })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
   var d = i(3460),
    c = i(36);
   function g(e) {
    const n = { div: "div", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(c.X, { appearance: "do", title: "Informeren dat het formulier is verzonden en wat de vervolgacties zijn.", children: (0, l.jsx)(d.X, { language: "html", children: () => (0, l.jsxs)(n.div, { children: [(0, l.jsx)(n.p, { children: "Uw vraag is met succes verstuurd. Zaaknummer 123456789." }), (0, l.jsx)(n.p, { children: "Wat gaat er nu gebeuren?" }), (0, l.jsxs)(n.ul, { children: [(0, l.jsx)(n.li, { children: "U ontvangt een bevestigingsmail op gebruiker@voorbeeld.com" }), (0, l.jsx)(n.li, { children: "De afdeling Vraagbaak gaat met uw vraag aan de slag." }), (0, l.jsx)(n.li, { children: "U wordt per e-mail op de hoogte gehouden maar kunt de voortgang ook inzien binnen uw Mijn omgeving." })] })] }) }) }), "\n", (0, l.jsx)(c.X, { appearance: "dont", title: "Vervolgstappen weglaten.", children: (0, l.jsx)(d.X, { language: "html", children: () => (0, l.jsx)(n.p, { children: "Uw vraag is verstuurd." }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "vertel-wat-de-vervolgacties-zijn", children: "Vertel wat de vervolgacties zijn" }), "\n", (0, l.jsx)(n.p, { children: 'Vermeld wat er gaat gebeuren, bijvoorbeeld "U krijgt na 5 werkdagen reactie via een e-mail", "Wij nemen contact met u op via e-mail als we een antwoord hebben op uw vraag". Wat van toepassing is voor het betreffende formulier.' }), "\n", (0, l.jsxs)(n.p, { children: ['Uit gebruikersonderzoek van de "Mijn Omgeving" van Den Haag is \xe9\xe9n van de conclusies: ', (0, l.jsx)(n.a, { href: "http://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/mijn-zaken/denhaag-mijn-omgeving", children: "Houd rekening met de wens van inwoners om veel bevestiging te krijgen" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
   function p(e) {
    const n = { a: "a", blockquote: "blockquote", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: "vermeld-dat-het-formulier-succesvol-is-verzonden", children: "Vermeld dat het formulier succesvol is verzonden" }), "\n", (0, l.jsx)(n.p, { children: "Geef de gebruiker de zekerheid dat het formulier en de inhoud ervan succesvol zijn verzonden. Dat voorkomt onzekerheid: heb ik het goed gedaan, is de informatie wel verstuurd?" }), "\n", (0, l.jsx)(n.p, { children: "Geef duidelijk aan dat het formulier succesvol is verzonden door een zichtbare melding op de website." }), "\n", (0, l.jsx)(n.p, { children: "Bijvoorbeeld:" }), "\n", (0, l.jsxs)(n.blockquote, { children: ["\n", (0, l.jsxs)(n.p, { children: ['"Bedankt voor uw aanvraag. Er is een e-mail ter bevestiging gestuurd naar ', (0, l.jsx)(n.a, { href: "mailto:gebruiker@voorbeeld.com", children: "gebruiker@voorbeeld.com" }), '. Heeft u geen e-mail ontvangen, neem dan contact op."'] }), "\n"] }), "\n", (0, l.jsx)(n.p, { children: "Waarbij contact bijvoorbeeld linkt naar de contactpagina van de website, of vermeld concrete contactgegevens." }), "\n", (0, l.jsx)(n.p, { children: 'Geef de gebruiker zekerheid welke informatie is verstuurd. Dit kan bijvoorbeeld in een bevestigingsmail waarin de ingevulde informatie wordt herhaald of een verwijzing naar de "Mijn Omgeving", waar de informatie is terug te vinden.' }), "\n", (0, l.jsx)(n.p, { children: 'Alleen de melding geven "Uw formulier is verzonden", of automatisch naar de voorpagina gaan is onvoldoende.' }), "\n", (0, l.jsxs)(n.p, { children: ["Goede feedback is geen vereiste om te voldoen aan WCAG, maar wordt wel geadviseerd in ", (0, l.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Techniques/general/G199.html", children: "Technique G199: Providing success feedback when data is submitted successfully" }), "."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   var j = i(3324);
   const b = { title: "Bevestigingspagina | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Bevestigingspagina", pagination_label: "Bevestigingspagina", description: "Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.", slug: "bevestigingspagina", keywords: ["informatie", "formulier", "design", "code"] },
    k = "Bevestigingspagina",
    x = { id: "richtlijnen/formulieren/alle-richtlijnen/confirmation", title: "Bevestigingspagina | Richtlijnen | NL Design System", description: "Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/confirmation.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina", permalink: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/confirmation.mdx", tags: [], version: "current", frontMatter: { title: "Bevestigingspagina | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Bevestigingspagina", pagination_label: "Bevestigingspagina", description: "Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn.", slug: "bevestigingspagina", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Autocomplete in een formulier", permalink: "/richtlijnen/formulieren/alle-richtlijnen/autocomplete" }, next: { title: "Toegankelijk", permalink: "/richtlijnen/formulieren/toegankelijk" } },
    f = {},
    _ = [];
   function y(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", (0, l.jsx)(n.h1, { id: "bevestigingspagina", children: "Bevestigingspagina" }), "\n", (0, l.jsx)(n.p, { children: "Een bevestigingspagina informeert gebruikers dat hun data met succes is verstuurd en wat de eventuele vervolgacties zijn." }), "\n", (0, l.jsx)(n.p, { children: "Belangrijk voor het informeren van de gebruiker is hierbij:" }), "\n", (0, l.jsxs)(n.ul, { children: ["\n", (0, l.jsx)(n.li, { children: "Vermeld dat het formulier succesvol is verzonden." }), "\n", (0, l.jsx)(n.li, { children: "Maak de succesmelding toegankelijk voor alle gebruikers." }), "\n", (0, l.jsx)(n.li, { children: "Vertel wat de vervolgacties zijn." }), "\n", (0, l.jsx)(n.li, { children: "Zorg dat de gebruiker contact op kan nemen bij vragen." }), "\n"] }), "\n", (0, l.jsx)(m, {}), "\n", (0, l.jsx)(o, {}), "\n", (0, l.jsx)(h, {}), "\n", (0, l.jsx)(u, {}), "\n", (0, l.jsx)(a, {}), "\n", (0, l.jsx)(j.ZP, {})] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y(e);
   }
  },
  3460: (e, n, i) => {
   i.d(n, { X: () => j });
   var l = i(6532),
    t = i(6259),
    s = i(1910),
    o = i(9560),
    r = i(486),
    a = i(9267),
    d = i(495),
    c = i(959),
    g = i(9995),
    u = i(2950);
   const v = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = i(1179),
    p = i(1527);
   const m = (e) => {
     let { target: n } = e;
     const i = n.getAttribute("aria-controls"),
      l = n.ownerDocument.getElementById(i);
     (l.hidden = !l.hidden), n.setAttribute("aria-expanded", !l.hidden), (n.innerText = l.hidden ? "Bekijk code" : "Verberg code");
    },
    j = (e) => {
     let { code: n, copy: i = !1, defaultCollapsed: j = !0, children: b, language: k } = e,
      x = "function" == typeof b ? b() : b,
      f = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      _ = "string" == typeof n ? n : g.uS(f || x),
      [y, w] = (0, c.useState)(_);
     (0, c.useEffect)(() => {
      (async () => {
       (y = await d.ZP.format(_, { parser: k, plugins: [s.Z, o.ZP, r.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), w(y);
      })();
     }, [_]);
     const z = (0, u.Z)();
     return (0, p.jsxs)("div", {
      className: (0, t.Z)(v["nlds-canvas"]),
      children: [
       (0, p.jsx)("div", { className: (0, t.Z)(v["nlds-canvas__example"]), children: (0, p.jsx)(l.pu, { className: "voorbeeld-theme", children: x }) }),
       (0, p.jsx)("div", { className: (0, t.Z)(v["nlds-canvas__toolbar"]), children: (0, p.jsx)(l.zx, { className: (0, t.Z)(v["nlds-canvas__button"], v["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: m, "aria-expanded": !j, "aria-controls": z, children: j ? "Bekijk code" : "Verberg code" }) }),
       (0, p.jsxs)("div", {
        className: (0, t.Z)(v["nlds-canvas__code-block"], !i && v["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: j,
        children: [
         (0, p.jsx)(h.u, { syntax: k, textContent: y, trim: !0 }),
         i &&
          (0, p.jsx)("div", {
           className: (0, t.Z)(v["nlds-canvas__toolbar"]),
           children: (0, p.jsx)(l.zx, {
            className: (0, t.Z)(v["nlds-canvas__button"], v["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(y).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, i) => {
   i.d(n, { u: () => r });
   var l = i(6532),
    t = i(2425);
   i(959);
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
   var o = i(1527);
   function r(e) {
    let { lineNumber: n, syntax: i, textContent: r, trim: a } = e,
     d = r;
    return (
     a && (d = d.trim()),
     (0, o.jsx)(t.y$, {
      theme: s,
      code: d,
      language: i || "",
      children: (e) => {
       let { style: i, tokens: t, getLineProps: s, getTokenProps: r } = e;
       return (0, o.jsx)(l.dn, { style: i, children: t.map((e, i) => (0, o.jsxs)("span", { ...s({ line: e }), children: [n && (0, o.jsx)("span", { children: i + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...r({ token: e }) }, n)), "\n"] }, i)) });
      },
     })
    );
   }
  },
  36: (e, n, i) => {
   i.d(n, { X: () => d });
   var l = i(5893),
    t = i(1139),
    s = i(6532),
    o = i(6259);
   i(959);
   const r = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = i(1527);
   const d = (e) => {
    let { title: n, appearance: i, description: d, children: c } = e;
    const g = "Doen",
     u = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, o.Z)(r["nlds-guideline"], r[`nlds-guideline--${i}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, o.Z)(r["nlds-guideline__description"]), children: ["dont" === i ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, o.Z)(r["nlds-guideline__badge"], r[`nlds-guideline__badge--${i}`]), children: [(0, a.jsx)(l.Z, { className: r["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: r["nlds-guideline__title"], children: u })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, o.Z)(r["nlds-guideline__badge"], r[`nlds-guideline__badge--${i}`]), children: [(0, a.jsx)(t.Z, { className: r["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: r["nlds-guideline__title"], children: g })] }), (0, a.jsx)(s.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, o.Z)(r["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
