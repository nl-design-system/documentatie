"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5220],
 {
  70592: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var r = t(11527),
    o = t(80877);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85500: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => U, contentTitle: () => X, default: () => H, frontMatter: () => W, metadata: () => V, toc: () => T });
   var r = t(11527),
    o = t(80877),
    i = t(73460),
    s = t(30036),
    l = t(16532);
   function a(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Maak het label goed leesbaar door voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23006FA1&background-color=%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-form-label-color": "#006FA1" }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "naam1", children: "Uw naam" }), (0, r.jsx)(n.input, { type: "text", id: "naam1", autoComplete: "name" })] }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Maak het label slecht leesbaar door onvoldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23999999&background-color=%23f8f5f1", children: "een contrast van 2.62:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-form-label-color": "#999999" }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "naam2", children: "Uw naam" }), (0, r.jsx)(n.input, { type: "text", id: "naam2", autoComplete: "name" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   var c = t(70592);
   function h(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Geef invoerveld een duidelijke rand met voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23006FA1&background-color=%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-border-color": "#006FA1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Geef een radiobutton voldoende kleurcontrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23006FA1&background-color=%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-radio-button-background-color": "#FFFFFF", "--utrecht-radio-button-border-color": "#006FA1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.fieldset, { children: [(0, r.jsx)(n.legend, { children: "Kies je kleur" }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio1", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio1", children: "Blauw" })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio2", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio2", children: "Groen" })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio3", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio3", children: "Rood" })] })] }) }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23f8f5f1&background-color=%23ffffff", children: "een contrast van 1.08:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-border-color": "#f8f4f1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-duidelijk-aan-waar-een-invoerveld-is", children: "Geef duidelijk aan waar een invoerveld is" }), "\n", (0, r.jsx)(n.p, { children: "Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is." }), "\n", (0, r.jsx)(n.p, { children: "Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Het duidelijk aangeven van een invoerveld is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "/wcag/1.1.1/", children: "1.1.1 Niet-tekstuele content" }), " (niveau AA)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: "a", div: "div", p: "p", path: "path", svg: "svg", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Maak het aanklikbare deel groot genoeg.", description: (0, r.jsx)(r.Fragment, { children: "Dit voorbeeld is het icoontje 50 bij 50 pixels." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", "aria-label": "LinkedIn", children: (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "50x50", fill: "currentColor", width: "50", height: "50", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) }) }) }) }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.", description: (0, r.jsx)(r.Fragment, { children: "Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsxs)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", children: [" ", (0, r.jsx)(n.div, { children: "LinkedIn" }), (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "50x50", fill: "currentColor", width: "24", height: "24", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) })] }) }) }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Maak het aanklikbare te klein.", description: (0, r.jsx)(r.Fragment, { children: "Dit voorbeeld is het icoontje 24 bij 24 pixels." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", "aria-label": "LinkedIn", children: (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "24x24", fill: "currentColor", width: "24", height: "24", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) }) }) }) }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "maak-aanklikbare-formuliervelden-groot-genoeg", children: "Maak aanklikbare formuliervelden groot genoeg" }), "\n", (0, r.jsxs)(n.p, { children: ["Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is. Dit is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", children: "2.5.8 Grootte aanwijsgebied (minimum)" }), " (niveau AA)."] }), "\n", (0, r.jsx)(n.p, { children: "Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels." }), "\n", (0, r.jsxs)(n.p, { children: ["Adrian Roselli over doelgrootte in ", (0, r.jsx)(n.a, { href: "https://adrianroselli.com/2019/06/target-size-and-2-5-5.html", children: (0, r.jsx)("span", { lang: "en", children: "Target Size and 2.5.5" }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), "\n", (0, r.jsxs)(n.p, { children: ["In ", (0, r.jsx)(n.a, { href: "https://ishadeed.com/article/target-size", children: (0, r.jsx)("span", { lang: "en", children: "Designing better target sizes" }) }), " legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels."] }), "\n", (0, r.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, r.jsx)(n.a, { href: "https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s", children: (0, r.jsx)("span", { lang: "en", children: "Designing A11y with Material Design" }) }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zie ook het WCAG-succescriterium: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html", children: "Grootte aanwijsgebied (verbeterd)" }), " (niveau AAA)."] })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function f(e) {
    const n = { input: "input", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Geef invoerveld een duidelijke visuele focusstijl.", description: (0, r.jsx)(r.Fragment, { children: "In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
   function k(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "maak-toetsenbord-focus-goed-zichtbaar", children: "Maak toetsenbord focus goed zichtbaar" }), "\n", (0, r.jsxs)(n.p, { children: ["Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Deze zogenaamde focusstijlen moeten consistent en duidelijk genoeg zijn. Goed zichtbare focusstijlen zijn nodig om te voldoen het aan WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html", children: "2.4.7 Focus zichtbaar" }), " (niveau AA)."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zorg ervoor dat de focusstijl een kleurcontrast heeft van tenminste 3:1 ten opzichte van de achtergrond van het formulierveld en de omringende achtergrond. Dit is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html", children: "1.4.11 Contrast van niet-tekstuele content" }), " (niveau AA)."] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   function _(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css", children: "Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS" }), "\n", (0, r.jsx)(n.p, { children: "Zorg ervoor dat tekst in buttons goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen." }), "\n", (0, r.jsx)(n.p, { children: "Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst maar stijl tekst met CSS." }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijn is verder beschreven bij de richtlijnen over ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/buttons", children: "Buttons" }), "."] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
   function z(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zorg-voor-een-logische-volgorde-van-de-informatie", children: "Zorg voor een logische volgorde van de informatie" }), "\n", (0, r.jsx)(n.p, { children: "De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest." }), "\n", (0, r.jsx)(n.p, { children: "Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of knoppen volgen onder de submitbutton. Hoe dit het beste kan is op dit moment een punt van discussie. ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Een logische volgorde van informatie is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html", children: "1.3.2 Betekenisvolle volgorde" }), " (niveau A)."] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
   function F(e) {
    const n = { input: "input", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(s.X, { appearance: "do", title: "Maak de placeholder goed leesbaar door voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23606060&background-color=%23ffffff", children: "een contrast van 6.28:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-placeholder-color": "#606060" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { placeholder: "Zoeken" }) }) }) }), "\n", (0, r.jsx)(s.X, { appearance: "dont", title: "Maak de placeholder slecht zichtbaar door te laag contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(l.rU, { href: "/contrast/?color=%23888888&background-color=%23ffffff", children: "een contrast van 3.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-placeholder-color": "#888888" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { placeholder: "Zoeken" }) }) }) })] });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(F, { ...e }) }) : F(e);
   }
   function C(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-placeholders-voldoende-kleurcontrast", children: "Geef placeholders voldoende kleurcontrast" }), "\n", (0, r.jsx)(n.p, { children: "Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4.5:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: "Let op" }), ": sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/placeholders", children: "richtlijnen over placeholders" }), "."] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(C, { ...e }) }) : C(e);
   }
   function Z(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-tekst-voldoende-kleurcontrast", children: "Geef tekst voldoende kleurcontrast" }), "\n", (0, r.jsx)(n.p, { children: "Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen." }), "\n", (0, r.jsx)(n.p, { children: "Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4.5:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Voldoende kleurcontrast van tekst is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", children: "1.4.3 Contrast (minimum)" }), " (niveau AA)."] })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Z, { ...e }) }) : Z(e);
   }
   function D(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-fouten-weer-met-meer-dan-alleen-kleur", children: "Geef fouten weer met meer dan alleen kleur" }), "\n", (0, r.jsx)(n.p, { children: "Gebruik van iconen en kleur bij foutmeldingen is goed voor de duidelijkheid, maar zorg ook altijd voor tekstuele foutmeldingen. Niet iedereen kan alle kleuren zien of begrijpt de icoontjes goed." }), "\n", (0, r.jsxs)(n.p, { children: ["Vermeld de foutmeldingen in beschrijvende tekst. Hoe dit te doen is uitgebreid beschreven bij de richtlijnen over ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/help-de-gebruiker", children: "Voorkom fouten" }), " en ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/foutmeldingen", children: "Foutmeldingen" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Gebruik van tekst naast kleur en icoontjes is nodig om te voldoen aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html", children: "1.4.1 Gebruik van kleur" }), " (niveau A)."] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D(e);
   }
   const W = { title: "Visueel ontwerp van een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Visueel ontwerp", sidebar_position: 12, pagination_label: "Visueel ontwerp van formulieren", description: "Richtlijnen voor het ontwerpen van formulieren.", slug: "visueel-ontwerp", keywords: ["informatie", "formulier", "design", "code"] },
    X = "Visueel ontwerp van een formulier",
    V = { id: "richtlijnen/formulieren/visual-design", title: "Visueel ontwerp van een formulier | Richtlijnen", description: "Richtlijnen voor het ontwerpen van formulieren.", source: "@site/docs/richtlijnen/formulieren/visual-design.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/visueel-ontwerp", permalink: "/richtlijnen/formulieren/visueel-ontwerp", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design.mdx", tags: [], version: "current", sidebarPosition: 12, frontMatter: { title: "Visueel ontwerp van een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Visueel ontwerp", sidebar_position: 12, pagination_label: "Visueel ontwerp van formulieren", description: "Richtlijnen voor het ontwerpen van formulieren.", slug: "visueel-ontwerp", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Uit te vragen informatie in een formulier", permalink: "/richtlijnen/formulieren/vragen" }, next: { title: "Voorkom fouten in een formulier", permalink: "/richtlijnen/formulieren/voorkom-fouten" } },
    U = {},
    T = [];
   function B(e) {
    const n = { h1: "h1", li: "li", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "visueel-ontwerp-van-een-formulier", children: "Visueel ontwerp van een formulier" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Geef duidelijk aan waar het invoerveld is." }), "\n", (0, r.jsx)(n.li, { children: "Geef tekst voldoende kleurcontrast." }), "\n", (0, r.jsx)(n.li, { children: "Geef placeholders voldoende kleurcontrast." }), "\n", (0, r.jsx)(n.li, { children: "Maak de toetsenbordfocus goed zichtbaar." }), "\n", (0, r.jsx)(n.li, { children: "Maak aanklikbare formuliervelden groot genoeg." }), "\n", (0, r.jsx)(n.li, { children: "Geef fouten weer met meer dan alleen kleur." }), "\n", (0, r.jsx)(n.li, { children: "Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS." }), "\n", (0, r.jsx)(n.li, { children: "Zorg voor een logische volgorde van de informatie." }), "\n"] }), "\n", (0, r.jsx)(g, {}), "\n", (0, r.jsx)(u, {}), "\n", (0, r.jsx)(M, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(N, {}), "\n", (0, r.jsx)(G, {}), "\n", (0, r.jsx)(w, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(x, {}), "\n", (0, r.jsx)(j, {}), "\n", (0, r.jsx)(S, {}), "\n", (0, r.jsx)(y, {}), "\n", (0, r.jsx)(A, {}), "\n", (0, r.jsx)(c.ZP, {})] });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(B, { ...e }) }) : B(e);
   }
  },
  73460: (e, n, t) => {
   t.d(n, { X: () => x });
   var r = t(16532),
    o = t(86259),
    i = t(28942),
    s = t(76653),
    l = t(33691),
    a = t(99821),
    d = t(64663),
    c = t(50959),
    h = t(9995);
   const u = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var p = t(41179),
    g = t(11527);
   const m = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(r.Tg, { className: u["nlds-canvas__example-surface"], children: (0, g.jsx)(r.BB, { className: (0, o.Z)("utrecht-document--surface", u["nlds-canvas__example-document"]), children: (0, g.jsx)(r.nv, { className: u["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   m.displayName = "ParagraphContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(r.Tg, { className: u["nlds-canvas__example-surface"], children: (0, g.jsx)(r.BB, { className: (0, o.Z)("utrecht-document--surface", u["nlds-canvas__example-document"]), children: n }) });
   };
   j.displayName = "DocumentContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(r.Tg, { className: u["nlds-canvas__example-surface"], children: n });
   };
   v.displayName = "SurfaceContainer";
   const x = (e) => {
    let { code: n, copy: t = !1, defaultExpandedCode: x = !1, displayCode: f = !0, children: b, container: k = "document", language: w, designTokens: _ } = e,
     y = "function" == typeof b ? b() : b,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     A = "string" == typeof n ? n : h.uS(z || y),
     [F, G] = (0, c.useState)(A),
     [C, N] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (F = await d.ZP.format(A, { parser: w, plugins: [i.Z, s.ZP, l.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), G(F);
     })();
    }, [A]);
    const Z = (0, c.useId)();
    let M = c.Fragment;
    return (
     "paragraph" === k ? (M = m) : "document" === k ? (M = j) : "surface" === k && (M = v),
     (0, g.jsxs)("div", {
      className: (0, o.Z)(u["nlds-canvas"]),
      children: [
       y && (0, g.jsx)("div", { className: (0, o.Z)(u["nlds-canvas__example"]), children: (0, g.jsx)("div", { className: "voorbeeld-theme", style: _, children: (0, g.jsx)(M, { children: (0, g.jsx)(r.pu, { children: y }) }) }) }),
       f &&
        (0, g.jsx)("div", {
         className: (0, o.Z)(u["nlds-canvas__toolbar"]),
         children: (0, g.jsx)(r.zx, {
          className: (0, o.Z)(u["nlds-canvas__button"], u["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           N(!C);
          },
          "aria-expanded": C,
          "aria-controls": Z,
          children: C ? "Verberg code" : "Bekijk code",
         }),
        }),
       f &&
        (0, g.jsxs)("div", {
         className: (0, o.Z)(u["nlds-canvas__code-block"], !t && u["nlds-canvas__code-block--user-select-none"]),
         id: Z,
         hidden: !C,
         children: [
          (0, g.jsx)(p.u, { syntax: w, textContent: F, trim: !0 }),
          t &&
           (0, g.jsx)("div", {
            className: (0, o.Z)(u["nlds-canvas__toolbar"]),
            children: (0, g.jsx)(r.zx, {
             className: (0, o.Z)(u["nlds-canvas__button"], u["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error("Copy code failed", e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => l });
   var r = t(16532),
    o = t(2425);
   t(50959);
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
   var s = t(11527);
   function l(e) {
    let { lineNumber: n, syntax: t, textContent: l, trim: a } = e,
     d = l;
    return (
     a && (d = d.trim()),
     (0, s.jsx)(o.y$, {
      theme: i,
      code: d,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: i, getTokenProps: l } = e;
       return (0, s.jsx)(r.dn, { style: t, children: o.map((e, t) => (0, s.jsxs)("span", { ...i({ line: e }), children: [n && (0, s.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, s.jsx)("span", { ...l({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  30036: (e, n, t) => {
   t.d(n, { X: () => d });
   var r = t(9842),
    o = t(91406),
    i = t(16532),
    s = t(86259);
   t(50959);
   const l = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(11527);
   const d = (e) => {
    let { title: n, appearance: t, description: d, children: c, figure: h } = e;
    const u = "Doen",
     p = "Niet doen",
     g = h ? "figure" : "div",
     m = h ? "figcaption" : "div";
    return (0, a.jsxs)(g, { className: (0, s.Z)(l["nlds-guideline"], l[`nlds-guideline--${t}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(m, { className: (0, s.Z)(l["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(r.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: p })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(l["nlds-guideline__badge"], l[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: l["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: l["nlds-guideline__title"], children: u })] }), (0, a.jsx)(i.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, s.Z)(l["nlds-guideline__example"]), children: c })] });
   };
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var r = t(50959);
   const o = {},
    i = r.createContext(o);
   function s(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
