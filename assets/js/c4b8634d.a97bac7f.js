(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8785],
 {
  2196: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  2548: (e, n, t) => {
   'use strict';
   t.d(n, { e: () => l });
   var r = t(68873),
    i = t(28020),
    o = t(14537),
    s = t(86070);
   const a = ({ title: e, sc: n, status: t, component: o, headingLevel: a = 4 }) => {
     const l = i.pI.get(n),
      c = l ? `${n} ${l.nl?.title}` : n;
     return (0, s.jsxs)('div', { className: 'component-criteria-section', children: [(0, s.jsx)(r.DZ, { appearance: 'utrecht-heading-4', level: a, className: 'component-criteria-section__heading', children: e }), (n || t) && (0, s.jsxs)('dl', { className: 'component-criteria-section__dl', children: [n && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, s.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, s.jsx)(r.N_, { href: `/wcag/${n}/`, children: c }) })] }), t && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, s.jsx)('dd', { className: 'component-criteria-section__dl', children: t })] })] }), o] });
    },
    l = ({ testCategory: e, items: n }) => (0, s.jsx)(o.If, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 3, expanded: !1, label: (0, s.jsx)('span', { children: e }), body: n.map((e, n) => (0, s.jsx)(a, { ...e }, n)) }] });
  },
  5160: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De link heeft een rol van ', (0, r.jsx)(n.code, { children: 'link' }), ' en een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' die duidelijk maakt waar de link voor dient.'] }), '\n', (0, r.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, r.jsx)(n.code, { children: 'a' }), '-element met het ', (0, r.jsx)(n.code, { children: 'href' }), ' attribuut als je een link nodig hebt:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url">Contact</a>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, r.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, r.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  8584: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  14889: (e, n, t) => {
   'use strict';
   t.d(n, { AC: () => c, Fu: () => s, Wu: () => a, Zp: () => l });
   var r = t(68873),
    i = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: l }) => {
     const c = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(c, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  24838: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  27055: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, r.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Maar:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  28020: (e, n, t) => {
   'use strict';
   t.d(n, { pI: () => s });
   const r = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    i = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    o = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    s = new Map(o.map((e) => [e.sc, e]));
  },
  34257: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  36369: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, r.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  36444: (e, n, t) => {
   'use strict';
   t.d(n, { D: () => a });
   var r = t(68873),
    i = t(13526),
    o = t(75916),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  36599: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  42189: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => W, component: () => S, contentTitle: () => G, default: () => P, description: () => N, frontMatter: () => L, issueNumber: () => _, metadata: () => r, title: () => D, toc: () => F });
   const r = JSON.parse('{"id":"componenten/login-link/index","title":"Login Link","description":"Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.","source":"@site/docs/componenten/login-link/index.mdx","sourceDirName":"componenten/login-link","slug":"/login-link","permalink":"/login-link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/login-link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Login Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Login Link","pagination_label":"Login Link","description":"Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.","slug":"/login-link","keywords":["aanmeldlink","anoniem","auth link","authenticatie","authentication","authorise","bewindvoering","bsn","button","buttons","button login","cta","digid","eherkenning","eidas","eu login","european login","external link","go to","gebruikersnaam","identiteit","identity","inlogbutton","inloggen","inloggen bij","inloggen link","inloggen met service","inlogmiddel","inlogmiddelen","inlogservice","knop","knoppen","kvk","label-link","login","login knop","login met","login navigatie","login navigation","login provider","machtigen","mijn organisatie link","naar login","particulier","password","sign in","username","wachtwoord","zakelijk"]},"sidebar":"componenten","previous":{"title":"Link List","permalink":"/link-list"},"next":{"title":"Logo","permalink":"/logo"}}');
   var i = t(86070),
    o = t(85248),
    s = t(48976),
    a = t(62528);
   function l(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, i.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, i.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, i.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, i.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Logius geeft voor het inloggen met DigiD, eHerkenning en European login "Opmaakrichtlijnen voor inlogmiddelknoppen" in de ', (0, i.jsx)(n.a, { href: 'https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang', children: 'Stijlhandleiding aansluiten Toegang' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   var d = t(2196),
    u = t(83329),
    h = t(83672),
    g = t(34257),
    m = t(36369),
    j = (t(75978), t(92233)),
    p = t(60577),
    k = t(27055),
    w = t(61640),
    f = t(24838);
   function v(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Login Links die dezelfde functie hebben binnen een website, zien er hetzelfde uit en werken ook hetzelfde.' }), '\n', (0, i.jsxs)(n.p, { children: ['Logius geeft voor het inloggen met DigiD, eHerkenning en European login "Opmaakrichtlijnen voor inlogmiddelknoppen" in de ', (0, i.jsx)(n.a, { href: 'https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang', children: 'Stijlhandleiding aansluiten Toegang' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   var b = t(5160),
    A = t(96412),
    x = t(36599),
    C = t(8584),
    T = t(76334),
    R = t(2548),
    z = t(50341);
   const L = { title: 'Login Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Login Link', pagination_label: 'Login Link', description: 'Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.', slug: '/login-link', keywords: ['aanmeldlink', 'anoniem', 'auth link', 'authenticatie', 'authentication', 'authorise', 'bewindvoering', 'bsn', 'button', 'buttons', 'button login', 'cta', 'digid', 'eherkenning', 'eidas', 'eu login', 'european login', 'external link', 'go to', 'gebruikersnaam', 'identiteit', 'identity', 'inlogbutton', 'inloggen', 'inloggen bij', 'inloggen link', 'inloggen met service', 'inlogmiddel', 'inlogmiddelen', 'inlogservice', 'knop', 'knoppen', 'kvk', 'label-link', 'login', 'login knop', 'login met', 'login navigatie', 'login navigation', 'login provider', 'machtigen', 'mijn organisatie link', 'naar login', 'particulier', 'password', 'sign in', 'username', 'wachtwoord', 'zakelijk'] },
    G = void 0,
    W = {},
    D = 'Login Link',
    N = 'Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.',
    _ = 268,
    S = s.find((e) => e.number === _),
    F = [{ value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 }, ...a.RM, { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 }];
   function M(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, i.jsx)(z.Fc, { component: S, headingLevel: 1, description: N }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, i.jsx)(z.VK, { component: S, headingLevel: 3 }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, i.jsx)(z.mu, { component: S, headingLevel: 3 }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, i.jsx)(a.Ay, {}),
      '\n',
      (0, i.jsx)(R.e, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid algemeen',
       items: [
        { title: 'Het label van de Login Link bestaat uit gewone tekst, niet uit een afbeelding van tekst', sc: '1.4.5', status: '', component: (0, i.jsx)(A.Ay, {}) },
        { title: 'De linktekst van de Login Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: (0, i.jsx)(T.Ay, {}) },
        { title: 'Als de gebruiker de Login Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken', sc: '2.5.2', status: '', component: (0, i.jsx)(p.Ay, {}) },
        { title: 'De zichtbare naam van de Login Link komt voor in de toegankelijke naam', sc: '2.5.3', status: '', component: (0, i.jsx)(k.Ay, {}) },
        { title: 'Als de tekst van de Login Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode', sc: '3.1.2', status: '', component: (0, i.jsx)(f.Ay, {}) },
       ],
      }),
      '\n',
      (0, i.jsx)(R.e, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid visueel ontwerp',
       items: [
        { title: 'De contrastverhouding van de tekstkleur in Login Link met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: (0, i.jsx)(h.Ay, {}) },
        { title: 'Als het zichtbare label van de Login Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1', sc: '1.4.11', status: '', component: (0, i.jsx)(d.Ay, {}) },
        { title: 'De Login Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels', sc: '2.5.5', status: '', component: (0, i.jsx)(w.Ay, {}) },
        { title: 'Login Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label', sc: '3.2.4', status: '', component: (0, i.jsx)(y, {}) },
       ],
      }),
      '\n',
      (0, i.jsx)(R.e, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, i.jsx)(g.Ay, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, i.jsx)(u.Ay, {}) },
       ],
      }),
      '\n',
      (0, i.jsx)(R.e, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid toetsenbord',
       items: [
        { title: 'Je kunt de Login Link focussen met de tabtoets en activeren met de entertoets', sc: '2.1.1', status: '', component: (0, i.jsx)(m.Ay, {}) },
        { title: 'De functionaliteit van de Login Link veroorzaakt geen toetsenbordval', sc: '2.1.2', status: '', component: (0, i.jsx)(x.Ay, {}) },
        { title: 'Wanneer de Login Link de toetsenbordfocus krijgt is de focus zichtbaar', sc: '2.4.7', status: '', component: (0, i.jsx)(j.Ay, {}) },
        { title: 'Als de Login Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: (0, i.jsx)(C.Ay, {}) },
       ],
      }),
      '\n',
      (0, i.jsx)(R.e, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid screenreader',
       items: [
        { title: 'Als het label van de Login Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief', sc: '1.1.1', status: '', component: (0, i.jsx)(c, {}) },
        { title: 'De Login Link heeft een rol van link en een toegankelijke naam die duidelijk maakt waar de Login Link voor dient', sc: '4.1.2', status: '', component: (0, i.jsx)(b.Ay, {}) },
       ],
      }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, i.jsx)(z.$9, { component: S, headingLevel: 3 }),
     ],
    });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(M, { ...e }) }) : M(e);
   }
  },
  50341: (e, n, t) => {
   'use strict';
   t.d(n, { VK: () => A, $9: () => C, mu: () => x, Fc: () => T });
   var r = t(14537),
    i = t(13526),
    o = t(74172),
    s = t(15089),
    a = t(28377),
    l = t(33648),
    c = t(83386),
    d = t(86070);
   const u = { figma: (0, d.jsx)(o.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(r.In, { children: u[e] || (0, d.jsx)(c.A, {}) });
   var g = t(14889),
    m = t(98274);
   const j = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(m.A, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var p = t(36444),
    k = t(98584),
    w = t(68873),
    f = t(51797);
   const v = ({ children: e }) => (0, d.jsx)('ul', { className: 'task-list', children: e }),
    y = ({ checked: e, children: n, title: t, description: r, headingLevel: o = 3 }) => (0, d.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, d.jsx)(f.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(w.DZ, { appearance: 'utrecht-heading-3', level: o, children: t }), r, n] })] });
   var b = t(75916);
   const A = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => b.f4.includes(e.id)),
      o = t && b.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: o.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, b.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(y, { headingLevel: n + 1, checked: e, title: t, description: (0, b.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(g.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            o = (0, b.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            g.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(g.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(j, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (a.length > 0 || o.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: a
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(h, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(h, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    C = ({ component: e }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      t = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [t ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: t, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && b.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(k.p, { level: n, suffix: i && (0, d.jsx)(p.D, { state: i }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  60577: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, r.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  61640: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  62528: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  74111: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 74111), (e.exports = i);
  },
  75916: (e, n, t) => {
   'use strict';
   t.d(n, { B2: () => u, B_: () => p, GT: () => f, KF: () => d, Pc: () => a, Pv: () => m, Rc: () => v, bo: () => r, eQ: () => k, f4: () => s, fX: () => i, kD: () => w, mJ: () => g, o_: () => j, qZ: () => o });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function l(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => {
     const n = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, t) => n.indexOf(e) - n.indexOf(t));
    },
    d = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return c(l(n));
    },
    u = (e, n) => g(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(l(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => c(l(e.projects.flatMap((e) => h(e)))),
    m = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: o, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    p = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function w(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? w(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, j(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function v(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
  },
  75978: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Er is een goed zichtbare focusindicator. Dit doe je met een minimale dikte van 2 pixels en een minimaal contrast van 3:1 ten opzichte van aangrenzende kleuren. Hou ook rekening met het contrast met de verschillende achtergrondkleuren waarop een element gebruikt kan worden. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  76334: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [];
   function s(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is een ', (0, r.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is het ', (0, r.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat betekent ', (0, r.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83329: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  83672: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  92233: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(85248);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  96412: (e, n, t) => {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(85248);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  98584: (e, n, t) => {
   'use strict';
   t.d(n, { p: () => o });
   var r = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
 },
]);
