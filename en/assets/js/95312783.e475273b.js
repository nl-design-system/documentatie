'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15220],
 {
  2065: (e, n, r) => {
   r.d(n, { ZP: () => l });
   var t = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  17668: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => U, contentTitle: () => X, default: () => I, frontMatter: () => W, metadata: () => V, toc: () => T });
   var t = r(52676),
    o = r(24785),
    s = r(94091),
    l = r(69265),
    i = r(78187);
   function a(e) {
    const n = { input: 'input', label: 'label', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'naam1', children: 'Uw naam' }), (0, t.jsx)(n.input, { type: 'text', id: 'naam1', autoComplete: 'name' })] }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23999999&background-color=%23f8f5f1', children: 'een contrast van 2.62:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'naam2', children: 'Uw naam' }), (0, t.jsx)(n.input, { type: 'text', id: 'naam2', autoComplete: 'name' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   var c = r(2065);
   function h(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Kies je kleur' }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio1', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { for: 'radio1', children: 'Blauw' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio2', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { for: 'radio2', children: 'Groen' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio3', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { for: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23f8f5f1&background-color=%23ffffff', children: 'een contrast van 1.08:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Het duidelijk aangeven van een invoerveld is nodig om te voldoen aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: '/wcag/1.1.1/', children: '1.1.1 Niet-tekstuele content' }), ' (niveau AA).'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', div: 'div', p: 'p', path: 'path', svg: 'svg', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg.', description: (0, t.jsx)(t.Fragment, { children: 'Dit voorbeeld is het icoontje 50 bij 50 pixels.' }), children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, t.jsx)(n.svg, { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '50', height: '50', focusable: 'false', children: (0, t.jsx)(n.path, { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.', description: (0, t.jsx)(t.Fragment, { children: 'Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat.' }), children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.p, { children: (0, t.jsxs)(n.a, { href: 'https://www.linkedin.com/company/nl-design-system/', children: [' ', (0, t.jsx)(n.div, { children: 'LinkedIn' }), (0, t.jsx)(n.svg, { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, t.jsx)(n.path, { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) })] }) }) }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'dont', title: 'Maak het aanklikbare te klein.', description: (0, t.jsx)(t.Fragment, { children: 'Dit voorbeeld is het icoontje 24 bij 24 pixels.' }), children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, t.jsx)(n.svg, { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '24x24', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, t.jsx)(n.path, { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function x(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'maak-aanklikbare-formuliervelden-groot-genoeg', children: 'Maak aanklikbare formuliervelden groot genoeg' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is. Dit is nodig om te voldoen aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', children: '2.5.8 Grootte aanwijsgebied (minimum)' }), ' (niveau AA).'] }), '\n', (0, t.jsx)(n.p, { children: 'Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Adrian Roselli over doelgrootte in ', (0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2019/06/target-size-and-2-5-5.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Target Size and 2.5.5' }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), '\n', (0, t.jsxs)(n.p, { children: ['In ', (0, t.jsx)(n.a, { href: 'https://ishadeed.com/article/target-size', children: (0, t.jsx)('span', { lang: 'en', children: 'Designing better target sizes' }) }), ' legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels.'] }), '\n', (0, t.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s', children: (0, t.jsx)('span', { lang: 'en', children: 'Designing A11y with Material Design' }) }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Zie ook het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html', children: 'Grootte aanwijsgebied (verbeterd)' }), ' (niveau AAA).'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
   function v(e) {
    const n = { input: 'input', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: (0, t.jsx)(t.Fragment, { children: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.' }), children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
   }
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'maak-toetsenbord-focus-goed-zichtbaar', children: 'Maak toetsenbord focus goed zichtbaar' }), '\n', (0, t.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, t.jsx)(n.strong, { children: '2 CSS-pixels' }), ' en een ', (0, t.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichten van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, t.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, t.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, t.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] }), '\n', (0, t.jsx)(n.p, { children: 'Goed zichtbare focusstijlen zijn nodig om te voldoen het aan de WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html', children: '1.4.11 Contrast van niet-tekstuele content' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.7/', children: '2.4.7 Focus zichtbaar' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html', children: '2.4.13 Focusweergave' }), ' (niveau AAA)'] }), '\n'] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k(e);
   }
   function w(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css', children: 'Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS' }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat tekst in buttons goed meeschaalt als de gebruiker inzoomt. Een gebruiker die inzoomt moet de tekst kunnen blijven lezen.' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik daarom liever geen jpg-, gif- of png-bestanden voor buttontekst maar stijl tekst met CSS.' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijn is verder beschreven bij de richtlijnen over ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons', children: 'Buttons' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
   function z(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: 'Zorg voor een logische volgorde van de informatie' }), '\n', (0, t.jsx)(n.p, { children: 'De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of knoppen volgen onder de submitbutton. Hoe dit het beste kan is op dit moment een punt van discussie. ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een logische volgorde van informatie is nodig om te voldoen aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html', children: '1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(z, { ...e }) }) : z(e);
   }
   function F(e) {
    const n = { input: 'input', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.X, { appearance: 'do', title: 'Maak de placeholder goed leesbaar door voldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23606060&background-color=%23ffffff', children: 'een contrast van 6.28:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#606060' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) }), '\n', (0, t.jsx)(l.X, { appearance: 'dont', title: 'Maak de placeholder slecht zichtbaar door te laag contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23888888&background-color=%23ffffff', children: 'een contrast van 3.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#888888' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(F, { ...e }) }) : F(e);
   }
   function G(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }), '\n', (0, t.jsx)(n.p, { children: 'Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4.5:1 of hoger zijn.' }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders', children: 'richtlijnen over placeholders' }), '.'] })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(G, { ...e }) }) : G(e);
   }
   function Z(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4.5:1 of hoger zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voldoende kleurcontrast van tekst is nodig om te voldoen aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', children: '1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(Z, { ...e }) }) : Z(e);
   }
   function D(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'geef-fouten-weer-met-meer-dan-alleen-kleur', children: 'Geef fouten weer met meer dan alleen kleur' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik van iconen en kleur bij foutmeldingen is goed voor de duidelijkheid, maar zorg ook altijd voor tekstuele foutmeldingen. Niet iedereen kan alle kleuren zien of begrijpt de icoontjes goed.' }), '\n', (0, t.jsxs)(n.p, { children: ['Vermeld de foutmeldingen in beschrijvende tekst. Hoe dit te doen is uitgebreid beschreven bij de richtlijnen over ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/help-de-gebruiker', children: 'Voorkom fouten' }), ' en ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen', children: 'Foutmeldingen' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik van tekst naast kleur en icoontjes is nodig om te voldoen aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html', children: '1.4.1 Gebruik van kleur' }), ' (niveau A).'] })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(D, { ...e }) }) : D(e);
   }
   const W = { title: 'Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Visueel ontwerp', sidebar_position: 12, pagination_label: 'Visueel ontwerp van formulieren', description: 'Richtlijnen voor het ontwerpen van formulieren.', slug: 'visueel-ontwerp', keywords: ['informatie', 'formulier', 'design', 'code'] },
    X = 'Visueel ontwerp van een formulier',
    V = { id: 'richtlijnen/formulieren/visual-design', title: 'Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen voor het ontwerpen van formulieren.', source: '@site/docs/richtlijnen/formulieren/visual-design.mdx', sourceDirName: 'richtlijnen/formulieren', slug: '/richtlijnen/formulieren/visueel-ontwerp', permalink: '/en/richtlijnen/formulieren/visueel-ontwerp', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design.mdx', tags: [], version: 'current', sidebarPosition: 12, frontMatter: { title: 'Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Visueel ontwerp', sidebar_position: 12, pagination_label: 'Visueel ontwerp van formulieren', description: 'Richtlijnen voor het ontwerpen van formulieren.', slug: 'visueel-ontwerp', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Uit te vragen informatie in een formulier', permalink: '/en/richtlijnen/formulieren/vragen' }, next: { title: 'Voorkom fouten in een formulier', permalink: '/en/richtlijnen/formulieren/voorkom-fouten' } },
    U = {},
    T = [];
   function H(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'visueel-ontwerp-van-een-formulier', children: 'Visueel ontwerp van een formulier' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar het invoerveld is' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#maak-toetsenbord-focus-goed-zichtbaar', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#maak-aanklikbare-formuliervelden-groot-genoeg', children: 'Maak aanklikbare formuliervelden groot genoeg' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#geef-fouten-weer-met-meer-dan-alleen-kleur', children: 'Geef fouten weer met meer dan alleen kleur' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#gebruik-geen-afbeelding-voor-knoppen-maar-stijl-tekst-met-css', children: 'Gebruik geen afbeelding voor knoppen maar stijl tekst met CSS' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#zorg-voor-een-logische-volgorde-van-de-informatie', children: 'Zorg voor een logische volgorde van de informatie' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(M, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(N, {}), '\n', (0, t.jsx)(C, {}), '\n', (0, t.jsx)(_, {}), '\n', (0, t.jsx)(b, {}), '\n', (0, t.jsx)(f, {}), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(S, {}), '\n', (0, t.jsx)(y, {}), '\n', (0, t.jsx)(A, {}), '\n', (0, t.jsx)(c.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(H, { ...e }) }) : H(e);
   }
  },
  94091: (e, n, r) => {
   r.d(n, { X: () => f });
   var t = r(78187),
    o = r(4814),
    s = r(73891),
    l = r(65420),
    i = r(58243),
    a = r(25032),
    d = r(74642),
    c = r(75271),
    h = r(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = r(41179),
    g = r(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, g.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, g.jsx)(t.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, g.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   j.displayName = 'DocumentContainer';
   const x = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   x.displayName = 'SurfaceContainer';
   const f = (e) => {
    let { code: n, copy: r = !0, defaultExpandedCode: f = !1, displayCode: v = !0, children: b, container: k = 'document', language: _, designTokens: w } = e,
     y = 'function' == typeof b ? b() : b,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     A = 'string' == typeof n ? n : h.uS(z || y),
     [F, C] = (0, c.useState)(A),
     [G, N] = (0, c.useState)(f);
    (0, c.useEffect)(() => {
     (async () => {
      (F = await d.ZP.format(A, { parser: _, plugins: [s.Z, l.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(F);
     })();
    }, [A]);
    const Z = (0, c.useId)();
    let M = c.Fragment;
    return (
     'paragraph' === k ? (M = m) : 'document' === k ? (M = j) : 'surface' === k && (M = x),
     (0, g.jsxs)('div', {
      className: (0, o.Z)(u['nlds-canvas']),
      children: [
       y && (0, g.jsx)('div', { className: (0, o.Z)(u['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: w, children: (0, g.jsx)(M, { children: (0, g.jsx)(t.pu, { children: y }) }) }) }),
       v &&
        (0, g.jsx)('div', {
         className: (0, o.Z)(u['nlds-canvas__toolbar']),
         children: (0, g.jsx)(t.zx, {
          className: (0, o.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           N(!G);
          },
          'aria-expanded': G,
          'aria-controls': Z,
          children: G ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, g.jsxs)('div', {
         className: (0, o.Z)(u['nlds-canvas__code-block'], !r && u['nlds-canvas__code-block--user-select-none']),
         id: Z,
         hidden: !G,
         children: [
          (0, g.jsx)(p.u, { syntax: _, textContent: F, trim: !0 }),
          r &&
           (0, g.jsx)('div', {
            className: (0, o.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(t.zx, {
             className: (0, o.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, r) => {
   r.d(n, { u: () => i });
   var t = r(78187),
    o = r(12429);
   r(75271);
   const s = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var l = r(52676);
   function i(e) {
    let { lineNumber: n, syntax: r, textContent: i, trim: a } = e,
     d = i;
    return (
     a && (d = d.trim()),
     (0, l.jsx)(o.y$, {
      theme: s,
      code: d,
      language: r || '',
      children: (e) => {
       let { style: r, tokens: o, getLineProps: s, getTokenProps: i } = e;
       return (0, l.jsx)(t.dn, { style: r, children: o.map((e, r) => (0, l.jsxs)('span', { ...s({ line: e }), children: [n && (0, l.jsx)('span', { children: r + 1 }), e.map((e, n) => (0, l.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, r)) });
      },
     })
    );
   }
  },
  69265: (e, n, r) => {
   r.d(n, { X: () => d });
   var t = r(10709),
    o = r(27266),
    s = r(78187),
    l = r(4814);
   r(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = r(52676);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: h } = e;
    const u = 'Doen',
     p = 'Niet doen',
     g = h ? 'figure' : 'div',
     m = h ? 'figcaption' : 'div';
    return (0, a.jsxs)(g, { className: (0, l.Z)(i['nlds-guideline'], i[`nlds-guideline--${r}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: (0, l.Z)(i['nlds-guideline__description']), children: ['dont' === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, l.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(t.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: p })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, l.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(o.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: u })] }), (0, a.jsx)(s.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, l.Z)(i['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => i, a: () => l });
   var t = r(75271);
   const o = {},
    s = t.createContext(o);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
