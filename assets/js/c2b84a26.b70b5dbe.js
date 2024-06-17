"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [53367],
 {
  5006: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => g, frontMatter: () => l, metadata: () => c, toc: () => u });
   var t = i(52676),
    r = i(24785),
    s = i(61663),
    o = i(54894);
   const l = { title: "WCAG-succescriterium 3.2.2 Bij input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "3.2.2 Bij input", pagination_label: "WCAG-succescriterium 3.2.2 Bij input", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", slug: "3.2.2", keywords: ["WCAG"] },
    a = "WCAG-succescriterium 3.2.2 Bij input",
    c = { id: "wcag/3.2.2", title: "WCAG-succescriterium 3.2.2 Bij input", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", source: "@site/docs/wcag/3.2.2.mdx", sourceDirName: "wcag", slug: "/wcag/3.2.2", permalink: "/wcag/3.2.2", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.2.mdx", tags: [], version: "current", frontMatter: { title: "WCAG-succescriterium 3.2.2 Bij input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "3.2.2 Bij input", pagination_label: "WCAG-succescriterium 3.2.2 Bij input", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", slug: "3.2.2", keywords: ["WCAG"] }, sidebar: "richtlijnen", previous: { title: "WCAG-succescriterium 3.2.1 Bij focus", permalink: "/wcag/3.2.1" }, next: { title: "WCAG-succescriterium 3.3.1 Foutidentificatie", permalink: "/wcag/3.3.1" } },
    d = {},
    u = [
     { value: "W3C referenties", id: "w3c-referenties", level: 2 },
     { value: "Uitleg", id: "uitleg", level: 2 },
     { value: "Gerelateerde NL Design System-richtlijn", id: "gerelateerde-nl-design-system-richtlijn", level: 2 },
     { value: "Gebruikersonderzoek", id: "gebruikersonderzoek", level: 2 },
     { value: "Hoe te testen", id: "hoe-te-testen", level: 2 },
    ];
   function h(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(n.h1, { id: "wcag-succescriterium-322-bij-input", children: "WCAG-succescriterium 3.2.2 Bij input" }), "\n", (0, t.jsx)(n.h2, { id: "w3c-referenties", children: "W3C referenties" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Engelse tekst van het WCAG-succescriterium: ", (0, t.jsx)(n.a, { href: "https://www.w3.org/TR/WCAG22/#on-input", children: (0, t.jsx)("span", { lang: "en", children: "3.2.2: On Input" }) }), "."] }), "\n", (0, t.jsxs)(n.li, { children: ["Nederlandse vertaling van het WCAG-succescriterium: ", (0, t.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#bij-input", children: "3.2.2 Bij input" }), "."] }), "\n", (0, t.jsxs)(n.li, { children: ["Engelstalige informatie op ", (0, t.jsx)("span", { lang: "en", children: "How to Meet WCAG" }), ": ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/quickref/#on-input", children: (0, t.jsx)("span", { lang: "en", children: "Quick Reference 3.2.2 On Input" }) }), "."] }), "\n", (0, t.jsxs)(n.li, { children: ["Engelstalige toelichting: ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html", children: (0, t.jsx)("span", { lang: "en", children: "Understanding SC 3.2.2: On Input" }) }), "."] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "uitleg", children: "Uitleg" }), "\n", (0, t.jsx)(n.p, { children: "Verras een gebruiker niet, maar maak functionaliteit voorspelbaar en daardoor goed te begrijpen." }), "\n", (0, t.jsx)(n.p, { children: "Als een gebruiker een formuliercomponent of -optie selecteert of een invoerveld invult met het toetsenbord of met de muis, veroorzaakt dit niet automatisch een contextwijziging." }), "\n", (0, t.jsx)(n.p, { children: "Bij een contextwijziging verandert onverwacht de indeling, informatie of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd." }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Let op" }), ": een verandering van ", (0, t.jsx)(n.strong, { children: "context" }), " is niet hetzelfde als verandering van ", (0, t.jsx)(n.strong, { children: "content" }), ".\nDirect aanpassen van de zoekresultaten, waarbij de gebruiker op dezelfde pagina blijft, valt niet onder dit succescriterium."] }), "\n", (0, t.jsx)(n.h2, { id: "gerelateerde-nl-design-system-richtlijn", children: "Gerelateerde NL Design System-richtlijn" }), "\n", (0, t.jsxs)(n.p, { children: ["Formulieren - Buttons:\n", (0, t.jsx)(n.a, { href: "/richtlijnen/formulieren/buttons/verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld", children: "Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld" })] }), "\n", (0, t.jsx)(n.h2, { id: "gebruikersonderzoek", children: "Gebruikersonderzoek" }), "\n", (0, t.jsx)(s.ZP, {}), "\n", (0, t.jsx)(n.h2, { id: "hoe-te-testen", children: "Hoe te testen" }), "\n", (0, t.jsx)(n.p, { children: "Bepaal eerst of er interactieve componenten op de pagina zijn, zoals invoervelden, radiobuttons, selects en checkboxes. En dan:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Selecteer/activeer elk formulierelement." }), "\n", (0, t.jsx)(n.li, { children: "Indien van toepassing: vul een formulierveld in en verlaat het veld weer (haal de focus weg)." }), "\n", (0, t.jsx)(n.li, { children: "Test of er geen onverwachte dingen gebeuren zoals het verzenden van het formulier, het verplaatsen van de focus of het openen van een nieuw venster of tab." }), "\n", (0, t.jsx)(n.li, { children: "Test dit met de muis en daarna ook met het toetsenbord." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: "Let op" }), ": Buttons en links zijn uitgesloten van deze test, hierbij is een verandering van context bij het selecteren/aanklikken verwacht gedrag."] }), "\n", (0, t.jsx)(o.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  61663: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(24785);
   function s(e) {
    const n = { a: "a", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ["Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ", (0, t.jsx)(n.a, { href: "https://gebruikersonderzoeken.nl/docs/onderzoek-delen/", children: "Gebruikersonderzoeken delen" }), " op gebruikersonderzoeken.nl."] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  54894: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(24785);
   function s(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues", children: "Deel je mening op GitHub" }), "."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
