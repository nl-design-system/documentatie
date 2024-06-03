"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1915],
 {
  2065: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var i = l(52676),
    r = l(24785);
   function a(e) {
    const n = { a: "a", em: "em", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "over-deze-richtlijnen", children: "Over deze richtlijnen" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ", (0, i.jsx)(n.em, { children: "beta" }), "."] }), "\n", (0, i.jsxs)(n.p, { children: ["We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  5086: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => y, contentTitle: () => f, default: () => N, frontMatter: () => x, metadata: () => _, toc: () => w });
   var i = l(52676),
    r = l(24785),
    a = l(2065),
    t = l(94091),
    s = l(69265);
   function o(e) {
    const n = { a: "a", input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "De link boven het gerelateerde invoerveld plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] }), (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.input, { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, i.jsx)(n.label, { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "De link onder het gerelateerde invoerveld plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.input, { type: "checkbox", name: "vrijwilliger", id: "vrijwilliger" }), (0, i.jsx)(n.label, { for: "vrijwilliger", children: "Ik wil vrijwilliger worden" })] }), (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Voorwaarden vrijwilligerswerk" }), "."] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
   function c(e) {
    const n = { h2: "h2", p: "p", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "plaats-de-link-boven-het-gerelateerde-formulierveld", children: "Plaats de link boven het gerelateerde formulierveld" }), "\n", (0, i.jsx)(n.p, { children: "Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is." }), "\n", (0, i.jsx)(n.p, { children: "Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld." }), "\n", (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: "Let op" }), ": de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor screenreadergebruikers."] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: "a", span: "span", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Alle informatie als zichtbare tekst in de link plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", children: "Lees het privacybeleid (opent in een nieuwe tab)" }), "."] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.a, { href: "#", target: "_blank", class: "nlds-icon-ext", children: ["Lees het privacybeleid", (0, i.jsx)(n.span, { class: "sr-only", children: ", opent in een nieuwe tab" })] }), "."] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Zichtbaar icoontje plus een aria-label voor screenreaders.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(n.a, { href: "#", target: "_blank", class: "nlds-icon-ext", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: "Lees het privacybeleid" }) }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", "aria-label": "Lees het privacybeleid (opent in een nieuwe tab)", children: "Lees het privacybeleid" }), "."] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Informatie over het openen in een nieuwe tab voor iedereen weglaten.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.a, { href: "#", target: "_blank", children: "Lees het privacybeleid" }), "."] }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "geef-aan-als-een-link-in-een-nieuwe-tab-opent", children: "Geef aan als een link in een nieuwe tab opent" }), "\n", (0, i.jsx)(n.p, { children: "Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster." }), "\n", (0, i.jsxs)(n.p, { children: ["In de HTML kan dit met het attribuut ", (0, i.jsx)(n.code, { children: 'target="_blank"' }), " in de link."] }), "\n", (0, i.jsx)(n.p, { children: "Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor screenreadergebruikers is dit extra belangrijk." }), "\n", (0, i.jsx)(n.p, { children: "Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent." }), "\n", (0, i.jsx)(n.p, { children: "Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst." }), "\n", (0, i.jsx)(n.p, { children: "Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist." }), "\n", (0, i.jsxs)(n.p, { children: ["Hiermee volg je de WCAG-richtlijn ", (0, i.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#voorspelbaar", children: "3.2 Voorspelbaar" }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), "\n", (0, i.jsx)(n.h3, { id: "technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster", children: "Technieken voor een link openen in een nieuwe tab of venster" }), "\n", (0, i.jsx)(n.p, { children: "Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
   function g(e) {
    const n = { a: "a", fieldset: "fieldset", input: "input", label: "label", legend: "legend", p: "p", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Heel basaal, de link vlak boven het formulierveld plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: "#", children: "Privacybeleid gemeente Voorbeeld" }), "."] }), (0, i.jsx)(n.input, { id: "pb", type: "checkbox", name: "privacybeleid" }), (0, i.jsx)(n.label, { for: "pb", children: "Ik ga akkoord met het privacybeleid" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(n.fieldset, { children: [(0, i.jsx)(n.legend, { children: "Privacystatement gemeente Voorbeeld" }), (0, i.jsxs)(n.p, { id: "desc", children: ["Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ", (0, i.jsx)(n.a, { href: "#", target: "_blank", children: "privacybeleid (opent in een nieuw venster)" }), "."] }), (0, i.jsx)(n.input, { type: "checkbox", "aria-describedby": "desc", id: "pvs" }), (0, i.jsx)(n.label, { for: "pvs", children: "Ik ga akkoord met het privacybeleid" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Link in het label plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.input, { id: "privacybeleid", type: "checkbox", name: "privacybeleid" }), " ", (0, i.jsxs)(n.label, { for: "privacybeleid", children: ["Ik ga akkoord met het ", (0, i.jsx)(n.a, { href: "#", children: "privacybeleid" })] })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Link samen met het invoerveld in een impliciet label plaatsen.", children: (0, i.jsx)(t.X, { language: "html", children: () => (0, i.jsxs)(n.label, { for: "tac", children: [(0, i.jsx)(n.input, { id: "tac", type: "checkbox", name: "terms-and-conditions" }), "Ik ga akkoord met het ", (0, i.jsx)(n.a, { href: "#", children: "privacybeleid" })] }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { a: "a", code: "code", h2: "h2", img: "img", li: "li", p: "p", pre: "pre", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "zet-geen-link-in-een-label", children: "Zet geen link in een label" }), "\n", (0, i.jsx)(n.p, { children: "Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid." }), "\n", (0, i.jsx)(n.p, { children: "Dit is om twee redenen geen goede constructie:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Een label kan ", (0, i.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns", children: "geen links of buttons elementen" }), " bevatten. Lees hierover meer in de ", (0, i.jsx)(n.a, { href: "/richtlijnen/formulieren/labels", children: "richtlijnen over Labels" }), "."] }), "\n", (0, i.jsx)(n.li, { children: "Screenreaders kunnen struikelen over de combinatie \u201clabel en link\u201d en lezen daardoor het label niet goed voor." }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), "\n", (0, i.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png", alt: "Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link." }) }), "\n", (0, i.jsx)(n.p, { children: "Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties." })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   const x = { title: "Links in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", sidebar_position: 7, pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] },
    f = "Links in een formulier",
    _ = { id: "richtlijnen/formulieren/links", title: "Links in een formulier | Richtlijnen", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", source: "@site/docs/richtlijnen/formulieren/links.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/links", permalink: "/richtlijnen/formulieren/links", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/links.mdx", tags: [], version: "current", sidebarPosition: 7, frontMatter: { title: "Links in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Links", sidebar_position: 7, pagination_label: "Links in een formulier", description: "Richtlijnen voor het plaatsen van links binnen een formulier.", keywords: ["links", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Labels in een formulier", permalink: "/richtlijnen/formulieren/labels" }, next: { title: "Meerdere stappen", permalink: "/richtlijnen/formulieren/meerdere-stappen" } },
    y = {},
    w = [];
   function z(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "links-in-een-formulier", children: "Links in een formulier" }), "\n", (0, i.jsx)(n.p, { children: "Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen." }), "\n", (0, i.jsx)(n.p, { children: "Voor het plaatsen van een link binnen een formulier zijn voor de toegankelijkheid de volgende punten belangrijk:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#plaats-de-link-boven-het-gerelateerde-formulierveld", children: "Plaats de link boven het gerelateerde formulierveld" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#zet-geen-link-in-een-label", children: "Zet geen link in een label" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#geef-aan-als-een-link-in-een-nieuwe-tab-opent", children: "Geef aan als een link in een nieuwe tab opent" }), "."] }), "\n"] }), "\n", (0, i.jsx)(p, {}), "\n", (0, i.jsx)(d, {}), "\n", (0, i.jsx)(k, {}), "\n", (0, i.jsx)(j, {}), "\n", (0, i.jsx)(b, {}), "\n", (0, i.jsx)(u, {}), "\n", (0, i.jsx)(a.ZP, {})] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(z, { ...e }) }) : z(e);
   }
  },
  94091: (e, n, l) => {
   l.d(n, { X: () => v });
   var i = l(51256),
    r = l(4814),
    a = l(28942),
    t = l(76653),
    s = l(33691),
    o = l(99821),
    d = l(64663),
    c = l(75271),
    p = l(60027);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block": "nlds-canvas__code-block_eqxI", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__toolbar--copy": "nlds-canvas__toolbar--copy_HaYV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var u = l(41179),
    m = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, r.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, m.jsx)(i.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   b.displayName = "ParagraphContainer";
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, r.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   g.displayName = "DocumentContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   j.displayName = "SurfaceContainer";
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: k = !0, children: x, container: f = "document", language: _, designTokens: y } = e,
     w = "function" == typeof x ? x() : x,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = "string" == typeof n ? n : p.uS(z || w),
     [L, Z] = (0, c.useState)(N),
     [X, S] = (0, c.useState)(v);
    (0, c.useEffect)(() => {
     (async () => {
      (L = await d.ZP.format(N, { parser: _, plugins: [a.Z, t.ZP, s.ZP, o.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), Z(L);
     })();
    }, [N]);
    const F = (0, c.useId)();
    let C = c.Fragment;
    return (
     "paragraph" === f ? (C = b) : "document" === f ? (C = g) : "surface" === f && (C = j),
     (0, m.jsxs)("div", {
      className: (0, r.Z)(h["nlds-canvas"]),
      children: [
       w && (0, m.jsx)("div", { className: (0, r.Z)(h["nlds-canvas__example"]), children: (0, m.jsx)("div", { className: "voorbeeld-theme", style: y, children: (0, m.jsx)(C, { children: (0, m.jsx)(i.pu, { children: w }) }) }) }),
       k &&
        (0, m.jsx)("div", {
         className: (0, r.Z)(h["nlds-canvas__toolbar"]),
         children: (0, m.jsx)(i.zx, {
          className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           S(!X);
          },
          "aria-expanded": X,
          "aria-controls": F,
          children: X ? "Verberg code" : "Bekijk code",
         }),
        }),
       k &&
        (0, m.jsxs)("div", {
         className: (0, r.Z)(h["nlds-canvas__code-block"], !l && h["nlds-canvas__code-block--user-select-none"]),
         id: F,
         hidden: !X,
         children: [
          (0, m.jsx)(u.u, { syntax: _, textContent: L, trim: !0 }),
          l &&
           (0, m.jsx)("div", {
            className: (0, r.Z)(h["nlds-canvas__toolbar"], h["nlds-canvas__toolbar--copy"]),
            children: (0, m.jsx)(i.zx, {
             className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(L).catch((e) => console.error("Copy code failed", e));
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
   var i = l(51256),
    r = l(12429);
   l(75271);
   const a = {
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
   var t = l(52676);
   function s(e) {
    let { lineNumber: n, syntax: l, textContent: s, trim: o } = e,
     d = s;
    return (
     o && (d = d.trim()),
     (0, t.jsx)(r.y$, {
      theme: a,
      code: d,
      language: l || "",
      children: (e) => {
       let { style: l, tokens: r, getLineProps: a, getTokenProps: s } = e;
       return (0, t.jsx)(i.dn, { style: l, children: r.map((e, l) => (0, t.jsxs)("span", { ...a({ line: e }), children: [n && (0, t.jsx)("span", { children: l + 1 }), e.map((e, n) => (0, t.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, l)) });
      },
     })
    );
   }
  },
  69265: (e, n, l) => {
   l.d(n, { X: () => d });
   var i = l(14319),
    r = l(9913),
    a = l(51256),
    t = l(4814);
   l(75271);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG", "nlds-guideline--dont": "nlds-guideline--dont_NsYw" };
   var o = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: p } = e;
    const h = "Doen",
     u = "Niet doen",
     m = p ? "figure" : "div",
     b = p ? "figcaption" : "div";
    return (0, o.jsxs)(m, { className: (0, t.Z)(s["nlds-guideline"], s[`nlds-guideline--${l}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, o.jsxs)(b, { className: (0, t.Z)(s["nlds-guideline__description"]), children: ["dont" === l ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.nv, { className: (0, t.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, o.jsx)(i.Z, { className: s["nlds-guideline__icon"] }), (0, o.jsx)("span", { className: s["nlds-guideline__title"], children: u })] }), (0, o.jsx)(a.nv, { children: n })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.nv, { className: (0, t.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${l}`]), children: [(0, o.jsx)(r.Z, { className: s["nlds-guideline__icon"] }), (0, o.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, o.jsx)(a.nv, { children: n })] }), d] }), (0, o.jsx)("div", { className: (0, t.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => s, a: () => t });
   var i = l(75271);
   const r = {},
    a = i.createContext(r);
   function t(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);