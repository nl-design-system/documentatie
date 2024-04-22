"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2601],
 {
  84090: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => g, frontMatter: () => d, metadata: () => a, toc: () => h });
   var r = t(11527),
    i = t(80877),
    s = t(31341),
    o = t(29805);
   const d = { title: "WCAG Succescriterium 2.4.13 Focusweergave", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "2.4.13 Focusweergave", pagination_label: "2.4.13 Focusweergave", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", slug: "2.4.13", keywords: ["WCAG"] },
    l = "WCAG Succescriterium 2.4.13 Focusweergave",
    a = { id: "wcag/2.4.13", title: "WCAG Succescriterium 2.4.13 Focusweergave", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", source: "@site/docs/wcag/2.4.13.mdx", sourceDirName: "wcag", slug: "/wcag/2.4.13", permalink: "/en/wcag/2.4.13", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.13.mdx", tags: [], version: "current", frontMatter: { title: "WCAG Succescriterium 2.4.13 Focusweergave", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "2.4.13 Focusweergave", pagination_label: "2.4.13 Focusweergave", description: "Beschrijving, documentatie, gerelateerde NLDS-richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.", slug: "2.4.13", keywords: ["WCAG"] }, sidebar: "richtlijnen", previous: { title: "WCAG Succescriterium 2.1.1 Toetsenbord", permalink: "/en/wcag/2.1.1" }, next: { title: "2.4.7 Focus zichtbaar", permalink: "/en/wcag/2.4.7" } },
    c = {},
    h = [
     { value: "W3C referenties", id: "w3c-referenties", level: 2 },
     { value: "Korte samenvatting", id: "korte-samenvatting", level: 2 },
     { value: "Gerelateerde NL Design System-richtlijnen", id: "gerelateerde-nl-design-system-richtlijnen", level: 2 },
     { value: "Bronnen", id: "bronnen", level: 2 },
     { value: "Gebruikersonderzoek", id: "gebruikersonderzoek", level: 2 },
     { value: "Hoe te testen", id: "hoe-te-testen", level: 2 },
    ];
   function u(e) {
    const n = { a: "a", code: "code", h1: "h1", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "wcag-succescriterium-2413-focusweergave", children: "WCAG Succescriterium 2.4.13 Focusweergave" }), "\n", (0, r.jsx)(n.h2, { id: "w3c-referenties", children: "W3C referenties" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Engelse tekst van het WCAG-succescriterium: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html", children: (0, r.jsx)("span", { lang: "en", children: "Success Criterion 2.4.13 Focus Appearance" }) }), "."] }), "\n", (0, r.jsx)(n.li, { children: "De Nederlandse vertaling van het WCAG-succescriterium 2.4.13 Focusweergave verschijnt binnenkort." }), "\n", (0, r.jsxs)(n.li, { children: ["Engelstalige informatie op ", (0, r.jsx)("span", { lang: "en", children: "How to Meet WCAG" }), ": ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance", children: (0, r.jsx)("span", { lang: "en", children: "Quick Reference 2.4.13 Focus Appearance" }) }), "."] }), "\n", (0, r.jsxs)(n.li, { children: ["Engelstalige toelichting: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html", children: (0, r.jsx)("span", { lang: "en", children: "Understanding SC 2.4.13: Focus Appearance" }) }), "."] }), "\n"] }), "\n", (0, r.jsx)(n.h2, { id: "korte-samenvatting", children: "Korte samenvatting" }), "\n", (0, r.jsx)(n.p, { children: "Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt." }), "\n", (0, r.jsxs)(n.p, { children: ["Een optie is het geven van een outline (focusring). Dit kan via de CSS-properties ", (0, r.jsx)(n.code, { children: "outline" }), " of ", (0, r.jsx)(n.code, { children: "border" }), "."] }), "\n", (0, r.jsx)(n.p, { children: "Geef de outline :" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["een dikte van minimaal 2 ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel", children: "CSS-pixels" }), ";"] }), "\n", (0, r.jsx)(n.li, { children: "een kleurcontrast van ten minste 3:1 ten opzichte van de aangrenzende kleuren;" }), "\n", (0, r.jsxs)(n.li, { children: ["een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ", (0, r.jsx)(n.strong, { children: "gefocuste" }), " en ", (0, r.jsx)(n.strong, { children: "niet-gefocuste" }), " staat."] }), "\n"] }), "\n", (0, r.jsxs)(n.p, { children: ["Een andere optie is geen outline toepassen, maar het hele element van kleur te laten veranderen.\nBijvoorbeeld een button die van kleur verandert bij toetsenbordfocus. Ook hier geldt een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ", (0, r.jsx)(n.strong, { children: "gefocuste" }), " en ", (0, r.jsx)(n.strong, { children: "niet-gefocuste" }), " staat."] }), "\n", (0, r.jsxs)(n.p, { children: ["Voor het NL Design System houden de richtlijnen van WCAG 2.2 ", (0, r.jsx)(n.strong, { children: "AA" }), " aan, maar we willen we ook voldoen aan dit WCAG-succescriterium 2.4.13 Focusweergave, niveau ", (0, r.jsx)(n.strong, { children: "AAA" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Het intact laten van de standaard outline die door een browser wordt geleverd is voldoende voor het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "/wcag/2.4.7", children: "2.4.7 Focus zichtbaar" }), ". Maar in de praktijk is deze standaard outline niet altijd duidelijk genoeg. Elke browser hanteert een eigen stijl voor de outline. Hierdoor kun je niet op de standaard browser-outline vertrouwen voor een consistente, goed zichtbare focus."] }), "\n", (0, r.jsx)(n.h2, { id: "gerelateerde-nl-design-system-richtlijnen", children: "Gerelateerde NL Design System-richtlijnen" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Formulieren - Visueel ontwerp: ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/visueel-ontwerp", children: "Maak de toetsenbordfocus goed zichtbaar" }), "."] }), "\n", (0, r.jsxs)(n.li, { children: ["Formulieren- Toetsenbord: ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/visueel-ontwerp#maak-toetsenbord-focus-goed-zichtbaar", children: "Zorg dat het formulier werkt met een toetsenbord" }), "."] }), "\n"] }), "\n", (0, r.jsx)(n.h2, { id: "bronnen", children: "Bronnen" }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: "https://www.sarasoueidan.com/blog/focus-indicators/", children: "A guide to designing accessible, WCAG-conformant focus indicators" }), " van Sara Soueidan."] }), "\n", (0, r.jsx)(n.h2, { id: "gebruikersonderzoek", children: "Gebruikersonderzoek" }), "\n", (0, r.jsxs)(n.p, { children: ["In het onderzoek van het ", (0, r.jsx)(n.a, { href: "https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/wmebv/vng-online-formulieren", children: "Contactformulier voor WMEBV" }), " staat het advies:\nzorg voor een zichtbare focusindicator voor mensen met een visuele beperking."] }), "\n", (0, r.jsx)(s.ZP, {}), "\n", (0, r.jsx)(n.h2, { id: "hoe-te-testen", children: "Hoe te testen" }), "\n", (0, r.jsx)(n.p, { children: "Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt. Gebruik de tab-toets om te controleren of links, buttons, invoervelden en checkboxes duidelijk zichtbaar de focus aangeven. Controleer de focus van radiobuttons en tabs met de pijltjestoetsen." }), "\n", (0, r.jsxs)(n.p, { children: ["Als in de CSS de outline is verwijderd door de CSS ", (0, r.jsx)(n.code, { children: "outline: none;" }), ", moet er een alternatief zijn die de toetsenbordfocus visueel duidelijk aangeeft. Bijvoorbeeld door het defini\xebren van een border als een element focus krijgt."] }), "\n", (0, r.jsxs)(n.p, { children: ["Controleer of de breedte van de outline tenminste 2 CSS-pixels breed is.\nInspecteer in de gegenereerde HTML-code van de webpagina de elementen die de toetsenbordfocus kunnen krijgen, bijvoorbeeld met een ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools", children: "browser inspector" }), "."] }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Zorg dat het element wat je wilt inspecteren de focus heeft." }), "\n", (0, r.jsxs)(n.li, { children: ["In de CSS-properties moet gedefinieerd staan dat de ", (0, r.jsx)(n.code, { children: "outline-width" }), " of ", (0, r.jsx)(n.code, { children: "border-width" }), " ten minste 2 pixels is."] }), "\n", (0, r.jsx)(n.li, { children: "Controleer of het kleurcontrast van de outline ten minste 3:1 is ten opzichte van de aangrenzende kleuren, dus de binnen- en buitenkant van de lijn." }), "\n", (0, r.jsx)(n.li, { children: "Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de gefocuste en niet-gefocuste staat." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Is er geen outline, maar verandert de kleur van het hele element?" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de ", (0, r.jsx)(n.strong, { children: "gefocuste" }), " en ", (0, r.jsx)(n.strong, { children: "niet-gefocuste" }), " staat. Bijvoorbeeld voor een button die van kleur verandert bij toetsenbordfocus."] }), "\n", (0, r.jsxs)(n.li, { children: ["Controleer of de tekst in dit element aan de ", (0, r.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#contrast-minimum", children: "richtlijnen voor contrast" }), " voldoet in gefocuste en niet-gefocuste staat."] }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Mooie tools om het kleurcontrast te testen en zo nodig een alternatief te kiezen zijn:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "/contrast/", children: "Contrast van kleuren" }) }), "\n", (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "https://accessiblepalette.com/", children: "Accessible Palette" }) }), "\n", (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "https://color.review/", children: "Color Review" }) }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Additionele testen:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["de ", (0, r.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css_css-skip-link--docs", children: "skip link" }), " wordt zichtbaar als deze toetsenbord krijgt."] }), "\n", (0, r.jsx)(n.li, { children: "de outline (of het alternatief) is goed zichtbaar bij componenten met verschillende achtergrondkleuren, zoals bij een Page-header of footer." }), "\n", (0, r.jsx)(n.li, { children: "de outline (of het alternatief) is goed zichtbaar in dark- en light-mode, als deze optie aangeboden wordt op de webpagina." }), "\n"] }), "\n", (0, r.jsx)(o.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  31341: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(11527),
    i = t(80877);
   function s(e) {
    const n = { a: "a", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ["Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ", (0, r.jsx)(n.a, { href: "https://gebruikersonderzoeken.nl/docs/onderzoek-delen/", children: "Gebruikersonderzoeken delen" }), " op gebruikersonderzoeken.nl."] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  29805: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(11527),
    i = t(80877);
   function s(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues", children: "Deel je mening op GitHub" }), "."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var r = t(50959);
   const i = {},
    s = r.createContext(i);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
