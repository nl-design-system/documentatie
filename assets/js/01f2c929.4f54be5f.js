"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7054],
 {
  3324: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(1527),
    o = t(7214);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  3659: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => U, contentTitle: () => X, default: () => I, frontMatter: () => W, metadata: () => V, toc: () => T });
   var r = t(1527),
    o = t(7214),
    i = t(3460),
    l = t(36),
    s = t(6532);
   function a(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Maak het label goed leesbaar door voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23006FA1-on-%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-form-label-color": "#006FA1" }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "naam1", children: "Uw naam" }), (0, r.jsx)(n.input, { type: "text", id: "naam1", autoComplete: "name" })] }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "dont", title: "Maak het label slecht leesbaar door onvoldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23999999-on-%23f8f5f1", children: "een contrast van 2.62:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-form-label-color": "#999999" }, children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "naam2", children: "Uw naam" }), (0, r.jsx)(n.input, { type: "text", id: "naam2", autoComplete: "name" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   var c = t(3324);
   function h(e) {
    const n = { div: "div", fieldset: "fieldset", input: "input", label: "label", legend: "legend", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Geef invoerveld een duidelijke rand met voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23006FA1-on-%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-border-color": "#006FA1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Geef een radiobutton voldoende kleurcontrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23006FA1-on-%23ffffff", children: "een contrast van 5.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-radio-button-background-color": "#FFFFFF", "--utrecht-radio-button-border-color": "#006FA1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.fieldset, { children: [(0, r.jsx)(n.legend, { children: "Kies je kleur" }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio1", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio1", children: "Blauw" })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio2", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio2", children: "Groen" })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.input, { type: "radio", id: "radio3", name: "kleur" }), " ", (0, r.jsx)(n.label, { for: "radio3", children: "Rood" })] })] }) }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "dont", title: "Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23f8f5f1-on-%23ffffff", children: "een contrast van 1.08:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-border-color": "#f8f4f1" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-duidelijk-aan-waar-een-invoerveld-is", children: "Geef duidelijk aan waar een invoerveld is" }), "\n", (0, r.jsx)(n.p, { children: "Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is." }), "\n", (0, r.jsx)(n.p, { children: "Het kleurcontast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Door het duidelijk aangeven van een invoerveld voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html", children: "1.1.1 Niet-tekstuele content" }), " (niveau AA)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: "a", div: "div", p: "p", path: "path", svg: "svg", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Maak het aanklikbare deel groot genoeg.", description: (0, r.jsx)(r.Fragment, { children: "Dit voorbeeld is het icoontje 50 bij 50 pixels." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", "aria-label": "LinkedIn", children: (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "50x50", fill: "currentColor", width: "50", height: "50", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) }) }) }) }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.", description: (0, r.jsx)(r.Fragment, { children: "Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsxs)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", children: [" ", (0, r.jsx)(n.div, { children: "LinkedIn" }), (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "50x50", fill: "currentColor", width: "24", height: "24", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) })] }) }) }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "dont", title: "Maak het aanklikbare te klein.", description: (0, r.jsx)(r.Fragment, { children: "Dit voorbeeld is het icoontje 24 bij 24 pixels." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: "https://www.linkedin.com/company/nl-design-system/", "aria-label": "LinkedIn", children: (0, r.jsx)(n.svg, { role: "presentation", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "data-supported-dps": "24x24", fill: "currentColor", width: "24", height: "24", focusable: "false", children: (0, r.jsx)(n.path, { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" }) }) }) }) }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   function v(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "maak-aanklikbare-formuliervelden-groot-genoeg", children: "Maak aanklikbare formuliervelden groot genoeg" }), "\n", (0, r.jsxs)(n.p, { children: ["Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is. Hierdoor voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html", children: "2.5.8 Grootte aanwijsgebied (minimum)" }), " (niveau AA)."] }), "\n", (0, r.jsx)(n.p, { children: "Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels." }), "\n", (0, r.jsxs)(n.p, { children: ["Adrian Roselli over doelgrootte in ", (0, r.jsx)(n.a, { href: "https://adrianroselli.com/2019/06/target-size-and-2-5-5.html", children: (0, r.jsx)("span", { lang: "en", children: "Target Size and 2.5.5" }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), "\n", (0, r.jsxs)(n.p, { children: ["In ", (0, r.jsx)(n.a, { href: "https://ishadeed.com/article/target-size", children: (0, r.jsx)("span", { lang: "en", children: "Designing better target sizes" }) }), " legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels."] }), "\n", (0, r.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, r.jsx)(n.a, { href: "https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s", children: (0, r.jsx)("span", { lang: "en", children: "Designing A11y with Material Design" }) }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zie ook het WCAG-succescriterium: ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html", children: "Grootte aanwijsgebied (verbeterd)" }), " (niveau AAA)."] })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function f(e) {
    const n = { input: "input", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Geef invoerveld een duidelijke visuele focusstijl.", description: (0, r.jsx)(r.Fragment, { children: "In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien." }), children: (0, r.jsx)(i.X, { language: "html", children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { type: "text" }) }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
   function k(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "maak-toetsenbord-focus-goed-zichtbaar", children: "Maak toetsenbord focus goed zichtbaar" }), "\n", (0, r.jsxs)(n.p, { children: ["Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Deze zogenaamde focusstijlen moeten consistent en duidelijk genoeg zijn. Hierdoor voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html", children: "2.4.7 Focus zichtbaar" }), " (niveau AA)."] }), "\n", (0, r.jsxs)(n.p, { children: ["Zorg ervoor dat de focusstijl een kleurcontrast heeft van tenminste 3:1 ten opzichte van de achtergrond van het formulierveld en de omringende achtergrond. Hierdoor voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html", children: "1.4.11 Contrast van niet-tekstuele content" }), " (niveau AA)."] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   function y(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css", children: "Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS" }), "\n", (0, r.jsx)(n.p, { children: "Zorg ervoor dat tekst in buttons goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen." }), "\n", (0, r.jsx)(n.p, { children: "Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst maar stijl tekst met CSS." }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijn is verder beschreven bij de richtlijnen over ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/buttons", children: "Buttons" }), "."] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function A(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zorg-voor-een-logische-volgorde-van-de-informatie", children: "Zorg voor een logische volgorde van de informatie" }), "\n", (0, r.jsx)(n.p, { children: "De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest." }), "\n", (0, r.jsx)(n.p, { children: "Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of knoppen volgen onder de submitbutton. Hoe dit het beste kan is op dit moment een punt van discussie. ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het geven van een logische volgorde van informatie voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html", children: "1.3.2 Betekenisvolle volgorde" }), " (niveau A)."] })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function F(e) {
    const n = { input: "input", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(l.X, { appearance: "do", title: "Maak de placeholder goed leesbaar door voldoende contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23606060-on-#ffffff", children: "een contrast van 6.28:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-placeholder-color": "#606060" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { placeholder: "Zoeken" }) }) }) }), "\n", (0, r.jsx)(l.X, { appearance: "dont", title: "Maak de placeholder slecht zichtbaar door te laag contrast.", description: (0, r.jsxs)(r.Fragment, { children: ["Dit voorbeeld heeft", " ", (0, r.jsx)(s.rU, { href: "https://www.siegemedia.com/contrast-ratio#%23888888-on-#ffffff", children: "een contrast van 3.54:1" }), "."] }), children: (0, r.jsx)(i.X, { language: "html", designTokens: { "--utrecht-textbox-background-color": "#ffffff", "--utrecht-textbox-placeholder-color": "#888888" }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(n.input, { placeholder: "Zoeken" }) }) }) })] });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(F, { ...e }) }) : F(e);
   }
   function C(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-placeholders-voldoende-kleurcontrast", children: "Geef placeholders voldoende kleurcontrast" }), "\n", (0, r.jsx)(n.p, { children: "Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4.5:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: "Let op" }), ": sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/placeholders", children: "richtlijnen over placeholders" }), "."] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(C, { ...e }) }) : C(e);
   }
   function Z(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-tekst-voldoende-kleurcontrast", children: "Geef tekst voldoende kleurcontrast" }), "\n", (0, r.jsx)(n.p, { children: "Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen." }), "\n", (0, r.jsx)(n.p, { children: "Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4.5:1 of hoger zijn." }), "\n", (0, r.jsxs)(n.p, { children: ["Door het geven van voldoende kleurcontrast van tekst voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", children: "1.4.3 Contrast (minimum)" }), " (niveau AA)."] })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Z, { ...e }) }) : Z(e);
   }
   function N(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-fouten-weer-met-meer-dan-alleen-kleur", children: "Geef fouten weer met meer dan alleen kleur" }), "\n", (0, r.jsx)(n.p, { children: "Gebruik van iconen en kleur bij foutmeldingen is goed voor de duidelijkheid, maar zorg ook altijd voor tekstuele foutmeldingen. Niet iedereen kan alle kleuren zien of begrijpt de icoontjes goed." }), "\n", (0, r.jsxs)(n.p, { children: ["Vermeld de foutmeldingen in beschrijvende tekst. Hoe dit te doen is uitgebreid beschreven bij de richtlijnen over ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "Voorkom fouten" }), " en ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/foutmeldingen", children: "Foutmeldingen" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het gebruik van tekst naast kleur en icoontjes voldoe je aan het WCAG-successcriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html", children: "1.4.1 Gebruik van kleur" }), " (niveau A)."] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(N, { ...e }) }) : N(e);
   }
   const W = { title: "Visueel ontwerp van formulieren | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Visueel ontwerp", pagination_label: "Visueel ontwerp van formulieren", description: "Richtlijnen voor het ontwerpen van formulieren.", slug: "visueel-ontwerp", keywords: ["informatie", "formulier", "design", "code"] },
    X = "Visueel ontwerp van formulieren",
    V = { id: "richtlijnen/formulieren/alle-richtlijnen/visual-design", title: "Visueel ontwerp van formulieren | Richtlijnen | NL Design System", description: "Richtlijnen voor het ontwerpen van formulieren.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/visual-design.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp", permalink: "/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/visual-design.mdx", tags: [], version: "current", frontMatter: { title: "Visueel ontwerp van formulieren | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Visueel ontwerp", pagination_label: "Visueel ontwerp van formulieren", description: "Richtlijnen voor het ontwerpen van formulieren.", slug: "visueel-ontwerp", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Bevestigingspagina", permalink: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina" }, next: { title: "Toegankelijk", permalink: "/richtlijnen/formulieren/toegankelijk" } },
    U = {},
    T = [];
   function H(e) {
    const n = { h1: "h1", li: "li", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "visueel-ontwerp-van-formulieren", children: "Visueel ontwerp van formulieren" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Geef duidelijk aan waar het invoerveld is." }), "\n", (0, r.jsx)(n.li, { children: "Geef tekst voldoende kleurcontrast." }), "\n", (0, r.jsx)(n.li, { children: "Geef placeholders voldoende kleurcontrast." }), "\n", (0, r.jsx)(n.li, { children: "Maak de toetsenbordfocus goed zichtbaar." }), "\n", (0, r.jsx)(n.li, { children: "Maak aanklikbare formuliervelden groot genoeg." }), "\n", (0, r.jsx)(n.li, { children: "Geef fouten weer met meer dan alleen kleur." }), "\n", (0, r.jsx)(n.li, { children: "Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS." }), "\n", (0, r.jsx)(n.li, { children: "Zorg voor een logische volgorde van de informatie." }), "\n"] }), "\n", (0, r.jsx)(g, {}), "\n", (0, r.jsx)(u, {}), "\n", (0, r.jsx)(M, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(D, {}), "\n", (0, r.jsx)(G, {}), "\n", (0, r.jsx)(w, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(x, {}), "\n", (0, r.jsx)(j, {}), "\n", (0, r.jsx)(S, {}), "\n", (0, r.jsx)(_, {}), "\n", (0, r.jsx)(z, {}), "\n", (0, r.jsx)(c.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(H, { ...e }) }) : H(e);
   }
  },
  3460: (e, n, t) => {
   t.d(n, { X: () => v });
   var r = t(6532),
    o = t(6259),
    i = t(1910),
    l = t(9560),
    s = t(486),
    a = t(9267),
    d = t(495),
    c = t(959),
    h = t(9995),
    u = t(2950);
   const p = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var g = t(1179),
    m = t(1527);
   const j = (e) => {
     let { target: n } = e;
     const t = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(t);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: t = !1, defaultCollapsed: v = !0, children: x, language: f, designTokens: b } = e,
      k = "function" == typeof x ? x() : x,
      w = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      y = "string" == typeof n ? n : h.uS(w || k),
      [_, A] = (0, c.useState)(y);
     (0, c.useEffect)(() => {
      (async () => {
       (_ = await d.ZP.format(y, { parser: f, plugins: [i.Z, l.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), A(_);
      })();
     }, [y]);
     const z = (0, u.Z)();
     return (0, m.jsxs)("div", {
      className: (0, o.Z)(p["nlds-canvas"]),
      children: [
       k && (0, m.jsx)("div", { className: (0, o.Z)(p["nlds-canvas__example"]), children: (0, m.jsx)(r.pu, { className: "voorbeeld-theme", style: b, children: k }) }),
       (0, m.jsx)("div", { className: (0, o.Z)(p["nlds-canvas__toolbar"]), children: (0, m.jsx)(r.zx, { className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: j, "aria-expanded": !v, "aria-controls": z, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, m.jsxs)("div", {
        className: (0, o.Z)(p["nlds-canvas__code-block"], !t && p["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: v,
        children: [
         (0, m.jsx)(g.u, { syntax: f, textContent: _, trim: !0 }),
         t &&
          (0, m.jsx)("div", {
           className: (0, o.Z)(p["nlds-canvas__toolbar"]),
           children: (0, m.jsx)(r.zx, {
            className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(_).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, t) => {
   t.d(n, { u: () => s });
   var r = t(6532),
    o = t(2425);
   t(959);
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
   var l = t(1527);
   function s(e) {
    let { lineNumber: n, syntax: t, textContent: s, trim: a } = e,
     d = s;
    return (
     a && (d = d.trim()),
     (0, l.jsx)(o.y$, {
      theme: i,
      code: d,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: o, getLineProps: i, getTokenProps: s } = e;
       return (0, l.jsx)(r.dn, { style: t, children: o.map((e, t) => (0, l.jsxs)("span", { ...i({ line: e }), children: [n && (0, l.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, l.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  36: (e, n, t) => {
   t.d(n, { X: () => d });
   var r = t(5893),
    o = t(1139),
    i = t(6532),
    l = t(6259);
   t(959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = t(1527);
   const d = (e) => {
    let { title: n, appearance: t, description: d, children: c } = e;
    const h = "Doen",
     u = "Niet doen";
    return (0, a.jsxs)("div", { className: (0, l.Z)(s["nlds-guideline"], s[`nlds-guideline--${t}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, a.jsxs)("div", { className: (0, l.Z)(s["nlds-guideline__description"]), children: ["dont" === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, l.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(r.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: u })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, l.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, a.jsx)(i.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, l.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
