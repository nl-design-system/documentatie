"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7049],
 {
  2003: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => _, contentTitle: () => f, default: () => L, frontMatter: () => x, metadata: () => y, toc: () => w });
   var i = l(1527),
    r = l(7214),
    t = l(3324),
    s = l(3460),
    a = l(36);
   function o(e) {
    const n = { a: "a", input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "De link boven het gerelateerde invoerveld plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] }), (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.input, { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, i.jsx)(n.label, { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "De link onder het gerelateerde invoerveld plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.input, { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, i.jsx)(n.label, { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] }), (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
   function c(e) {
    const n = { h2: "h2", p: "p", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "plaats-de-link-boven-het-gerelateerde-formulierveld", children: "Plaats de link boven het gerelateerde formulierveld" }), "\n", (0, i.jsx)(n.p, { children: "Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is." }), "\n", (0, i.jsx)(n.p, { children: "Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld." }), "\n", (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: "Let op" }), ": de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor screenreadergebruikers."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: "a", span: "span", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Alle informatie als zichtbare tekst in de link plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", children: "Lees het privacybeleid (opent in een nieuwe tab)" }), "."] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.a, { href: "#", target: "_blank", class: "nlds-icon-ext", children: ["Lees het privacybeleid", (0, i.jsx)(n.span, { class: "sr-only", children: ", opent in een nieuwe tab" })] }), "."] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Zichtbaar icoontje plus een aria-label voor screenreaders.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(n.a, { href: "#", target: "_blank", class: "nlds-icon-ext", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: "Lees het privacybeleid" }) }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: "Lees het privacybeleid" }), "."] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab voor iedereen weglaten.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", children: "Lees het privacybeleid" }), "."] }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function b(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "geef-aan-als-een-link-in-een-nieuwe-tab-opent", children: "Geef aan als een link in een nieuwe tab opent" }), "\n", (0, i.jsx)(n.p, { children: "Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster." }), "\n", (0, i.jsxs)(n.p, { children: ["In de HTML kan dit met het attribuut ", (0, i.jsx)(n.code, { children: 'target="_blank"' }), " in de link."] }), "\n", (0, i.jsx)(n.p, { children: "Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor screenreadergebruikers is dit extra belangrijk." }), "\n", (0, i.jsx)(n.p, { children: "Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent." }), "\n", (0, i.jsx)(n.p, { children: "Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst." }), "\n", (0, i.jsx)(n.p, { children: "Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist." }), "\n", (0, i.jsxs)(n.p, { children: ["Hiermee voldoe je aan de volgende WCAG-richtlijn ", (0, i.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#voorspelbaar", children: "WCAG richtlijn 3.2 Voorspelbaar" }), ": Maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), "\n", (0, i.jsx)(n.h3, { id: "technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster", children: "Technieken voor een link openen in een nieuwe tab of venster" }), "\n", (0, i.jsx)(n.p, { children: "Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes." })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
   function j(e) {
    const n = { a: "a", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Heel basaal, de link vlak boven het formulierveld plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Privacybeleid gemeente Voorbeeld" }), "."] }), (0, i.jsx)(n.input, { id: "pb", type: "checkbox", name: "privacybeleid" }), (0, i.jsx)(n.label, { for: "pb", children: "Ik ga akkoord met het privacybeleid" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(n.fieldset, { children: [(0, i.jsx)(n.legend, { children: "Privacystatement gemeente Voorbeeld" }), (0, i.jsxs)(n.p, { id: "desc", children: ["Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ", (0, i.jsx)(n.a, { href: "#", target: "_blank", children: "privacybeleid (opent in een nieuw venster)" }), "."] }), (0, i.jsx)(n.input, { type: "checkbox", "aria-describedby": "desc", id: "pvs" }), (0, i.jsx)(n.label, { for: "pvs", children: "Ik ga akkoord met het privacybeleid" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Link in het label plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.input, { id: "privacybeleid", type: "checkbox", name: "privacybeleid" }), " ", (0, i.jsxs)(n.label, { for: "privacybeleid", children: ["Ik ga akkoord met het ", (0, i.jsx)(n.a, { href: "#", children: "privacybeleid" })] })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Link samen met het invoerveld in een impliciet label plaatsen.", children: (0, i.jsx)(s.X, { language: "html", children: () => (0, i.jsxs)(n.label, { for: "tac", children: [(0, i.jsx)(n.input, { id: "tac", type: "checkbox", name: "terms-and-conditions" }), "Ik ga akkoord met het ", (0, i.jsx)(n.a, { href: "#", children: "privacybeleid" })] }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
   function k(e) {
    const n = { a: "a", h2: "h2", img: "img", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zet-geen-link-in-een-label", children: "Zet geen link in een label" }), "\n", (0, i.jsx)(n.p, { children: "Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid." }), "\n", (0, i.jsx)(n.p, { children: "Dit is om twee redenen geen goede constructie:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Een label kan ", (0, i.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns", children: "geen links of buttons elementen" }), " bevatten. Lees hierover meer in de ", (0, i.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/labels", children: "richtlijnen over Labels" }), "."] }), "\n", (0, i.jsx)(n.li, { children: "Screenreaders kunnen struikelen over de combinatie \u201clabel en link\u201d en lezen daardoor het label niet goed voor." }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), "\n", (0, i.jsxs)("div", { class: "nlds-dont", children: [(0, i.jsx)("input", { id: "p", type: "checkbox", name: "privacybeleid" }), (0, i.jsx)("label", { for: "p", children: (0, i.jsxs)(n.p, { children: ["Ik ga akkoord met het ", (0, i.jsx)("a", { href: "#", children: "privacybeleid" })] }) })] }), "\n", (0, i.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png", alt: "Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link." }) }), "\n", (0, i.jsx)(n.p, { children: "Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties." })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
   const x = { title: "Links in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] },
    f = "Links in een formulier",
    y = { id: "richtlijnen/formulieren/alle-richtlijnen/links", title: "Links in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/03-links.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/links", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/links", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/03-links.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Links in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Descriptions in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/descriptions" }, next: { title: "Buttons in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/buttons" } },
    _ = {},
    w = [];
   function z(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "links-in-een-formulier", children: "Links in een formulier" }), "\n", (0, i.jsx)(n.p, { children: "Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen.\nVoor het plaatsen van een link binnen een formulier zijn voor de toegankelijkheid de volgende punten belangrijk:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Plaats de link boven het gerelateerde formulierveld." }), "\n", (0, i.jsx)(n.li, { children: "Zet geen link in een label." }), "\n", (0, i.jsx)(n.li, { children: "Geef aan als een link in een nieuwe tab opent." }), "\n"] }), "\n", (0, i.jsx)(h, {}), "\n", (0, i.jsx)(d, {}), "\n", (0, i.jsx)(v, {}), "\n", (0, i.jsx)(m, {}), "\n", (0, i.jsx)(g, {}), "\n", (0, i.jsx)(u, {}), "\n", (0, i.jsx)(t.ZP, {})] });
   }
   function L(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(z, { ...e }) }) : z(e);
   }
  },
  3324: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var i = l(1527),
    r = l(7214);
   function t(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  3460: (e, n, l) => {
   l.d(n, { X: () => m });
   var i = l(6532),
    r = l(6259),
    t = l(1910),
    s = l(9560),
    a = l(486),
    o = l(9267),
    d = l(495),
    c = l(959),
    h = l(9995),
    p = l(2950);
   const u = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var b = l(1179),
    g = l(1527);
   const j = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      i = n.ownerDocument.getElementById(l);
     (i.hidden = !i.hidden), n.setAttribute("aria-expanded", !i.hidden), (n.innerText = i.hidden ? "Bekijk code" : "Verberg code");
    },
    m = (e) => {
     let { code: n, copy: l = !1, defaultCollapsed: m = !0, children: k, language: v, designTokens: x } = e,
      f = "function" == typeof k ? k() : k,
      y = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      _ = "string" == typeof n ? n : h.uS(y || f),
      [w, z] = (0, c.useState)(_);
     (0, c.useEffect)(() => {
      (async () => {
       (w = await d.ZP.format(_, { parser: v, plugins: [t.Z, s.ZP, a.ZP, o.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), z(w);
      })();
     }, [_]);
     const L = (0, p.Z)();
     return (0, g.jsxs)("div", {
      className: (0, r.Z)(u["nlds-canvas"]),
      children: [
       f && (0, g.jsx)("div", { className: (0, r.Z)(u["nlds-canvas__example"]), children: (0, g.jsx)(i.pu, { className: "voorbeeld-theme", style: x, children: f }) }),
       (0, g.jsx)("div", { className: (0, r.Z)(u["nlds-canvas__toolbar"]), children: (0, g.jsx)(i.zx, { className: (0, r.Z)(u["nlds-canvas__button"], u["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: j, "aria-expanded": !m, "aria-controls": L, children: m ? "Bekijk code" : "Verberg code" }) }),
       (0, g.jsxs)("div", {
        className: (0, r.Z)(u["nlds-canvas__code-block"], !l && u["nlds-canvas__code-block--user-select-none"]),
        id: L,
        hidden: m,
        children: [
         (0, g.jsx)(b.u, { syntax: v, textContent: w, trim: !0 }),
         l &&
          (0, g.jsx)("div", {
           className: (0, r.Z)(u["nlds-canvas__toolbar"]),
           children: (0, g.jsx)(i.zx, {
            className: (0, r.Z)(u["nlds-canvas__button"], u["nlds-canvas__copy-button"]),
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
   l.d(n, { u: () => a });
   var i = l(6532),
    r = l(2425);
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
   var s = l(1527);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: o } = e,
     d = a;
    return (
     o && (d = d.trim()),
     (0, s.jsx)(r.y$, {
      theme: t,
      code: d,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: r, getLineProps: t, getTokenProps: a } = e;
       return (0, s.jsx)(i.dn, { style: l, children: r.map((e, l) => (0, s.jsxs)("span", { ...t({ line: e }), children: [n && (0, s.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, s.jsx)("span", { ...a({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  36: (e, n, l) => {
   l.d(n, { X: () => d });
   var i = l(5893),
    r = l(1139),
    t = l(6532),
    s = l(6259);
   l(959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var o = l(1527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const h = "Doen",
     p = "Niet doen";
    return (0, o.jsxs)("div", { className: (0, s.Z)(a["nlds-guideline"], a[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, o.jsxs)("div", { className: (0, s.Z)(a["nlds-guideline__description"]), children: ["dont" === l ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(t.nv, { className: (0, s.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, o.jsx)(i.Z, { className: a["nlds-guideline__icon"] }), (0, o.jsx)("span", { className: a["nlds-guideline__title"], children: p })] }), (0, o.jsx)(t.nv, { children: n })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(t.nv, { className: (0, s.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, o.jsx)(r.Z, { className: a["nlds-guideline__icon"] }), (0, o.jsx)("span", { className: a["nlds-guideline__title"], children: h })] }), (0, o.jsx)(t.nv, { children: n })] }), d] }), (0, o.jsx)("div", { className: (0, s.Z)(a["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
